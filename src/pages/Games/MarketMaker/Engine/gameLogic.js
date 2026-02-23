// src/pages/Games/MarketMaker/Engine/gameLogic.js

export const INITIAL_STATE = {
    day: 1,
    maxDays: 30,
    cash: 5000,       // Starting cash in ₹ (shopkeeper's capital)
    inventory: 20,    // Units of goods in stock
    portfolioValue: 0,

    // Core Market Conditions (Base Curves)
    // Customer demand: Qd = maxDemand - demandSlope * P
    // Supplier supply: Qs = minSupply + supplySlope * P
    market: {
        maxDemand: 200,
        demandSlope: 2,
        minSupply: 20,
        supplySlope: 4,
        currentEquilibriumPrice: 0,
        currentEquilibriumQty: 0,
        volatility: 0.15,
    },

    // Player's Active Prices
    // buyFromSupplier: max price you'll pay your supplier per unit
    // sellToCustomer: min price you'll charge your customers per unit
    orders: {
        bidPrice: 28,    // Buy from supplier at ₹28 (close to equilibrium ~₹30)
        askPrice: 33,    // Sell to customers at ₹33 (small margin above)
        tradeQty: 5,
    },

    // UI & History State
    newsTicker: null,
    newsHistory: [],
    tradeHistory: [],
    isSimulationRunning: false,

    // Per-day Tracking
    dayStartPrice: 0,
    currentMarketPrice: 30,

    // Stats tracking
    totalBought: 0,
    totalSold: 0,
    totalPnL: 0,

    upgrades: {
        warehouseLvl: 1,
        analyticsLvl: 0,
    }
};

// Calculate Equilibrium based on Qd = Qs
export function calculateEquilibrium(market) {
    const price = (market.maxDemand - market.minSupply) / (market.supplySlope + market.demandSlope);
    const qty = market.maxDemand - (market.demandSlope * price);

    return {
        price: Math.max(0, parseFloat(price.toFixed(2))),
        qty: Math.max(0, Math.round(qty))
    };
}

export const EVENT_DECK = [
    {
        title: "Health Scare",
        desc: "People are scared to go out. Fewer customers are visiting shops.",
        shopEffect: "🛒 Fewer customers → lower demand. Consider lowering your sell price to attract buyers.",
        severity: "high",
        category: "Health Crisis",
        icon: "🦠",
        impact: { maxDemand: -50, demandSlope: 0 }
    },
    {
        title: "Viral Social Media Trend",
        desc: "Everyone is talking about this product online. Customers are rushing to buy!",
        shopEffect: "🔥 High demand → raise your sell price and earn more per unit!",
        severity: "high",
        category: "Social Media",
        icon: "📱",
        impact: { maxDemand: +80, demandSlope: -0.5 }
    },
    {
        title: "Supply Chain Disruption",
        desc: "Deliveries are delayed. Suppliers have less stock to sell you.",
        shopEffect: "📦 Less supply → your buy price may need to go higher to get stock.",
        severity: "high",
        category: "Logistics",
        icon: "🚢",
        impact: { minSupply: -40, supplySlope: -1 }
    },
    {
        title: "New Factory Opened",
        desc: "A large factory opened nearby. Suppliers now have more goods to offer.",
        shopEffect: "✅ More supply → prices drop. Lower your buy price to stay profitable!",
        severity: "medium",
        category: "Technology",
        icon: "🏭",
        impact: { minSupply: +60, supplySlope: +2 }
    },
    {
        title: "Government Cash Handout",
        desc: "Citizens received money from the government. Everyone wants to spend!",
        shopEffect: "💸 More spending → more customers. Raise your sell price to profit!",
        severity: "high",
        category: "Govt Policy",
        icon: "🏛️",
        impact: { maxDemand: +40, demandSlope: 0 }
    },
    {
        title: "Import Tariffs Raised",
        desc: "The government taxed imported goods. Your suppliers are charging more.",
        shopEffect: "💰 Higher supplier costs → raise your sell price to protect profit margin.",
        severity: "high",
        category: "Geopolitics",
        icon: "⚔️",
        impact: { minSupply: -30, supplySlope: -0.5 }
    },
    {
        title: "Customer Confidence Falls",
        desc: "People are worried about the economy. They are buying less.",
        shopEffect: "📉 Lower demand → lower your sell price to move stock.",
        severity: "low",
        category: "Sentiment",
        icon: "😟",
        impact: { maxDemand: -25, demandSlope: 0.3 }
    },
    {
        title: "Festival Season!",
        desc: "It's celebration time! Everyone is in the mood to shop and spend.",
        shopEffect: "🎉 Big demand → raise your sell price and maximize profits this season!",
        severity: "medium",
        category: "Seasonal",
        icon: "🎉",
        impact: { maxDemand: +35, demandSlope: -0.2 }
    },
    {
        title: "Raw Material Shortage",
        desc: "Suppliers can't get enough raw materials. They're producing less.",
        shopEffect: "⛏️ Less stock available → you may face empty shelves. Lower your buy price expectations.",
        severity: "medium",
        category: "Commodities",
        icon: "⛏️",
        impact: { minSupply: -20, supplySlope: -0.8 }
    },
    {
        title: "Loans Get Cheaper",
        desc: "Bank interest rates dropped. People can borrow easily and spend more.",
        shopEffect: "🏦 More buyers in market → raise your sell price slightly to earn more!",
        severity: "medium",
        category: "Finance",
        icon: "🏦",
        impact: { maxDemand: +30, demandSlope: 0 }
    },
    {
        title: "Green Laws Passed",
        desc: "New environmental rules shut down some old factories.",
        shopEffect: "🌿 Less supply → goods become slightly scarce. Watch your stock levels.",
        severity: "low",
        category: "Regulation",
        icon: "🌿",
        impact: { minSupply: -15, supplySlope: -0.3 }
    },
    {
        title: "Exports Boom",
        desc: "Factories are sending goods abroad. Less left for local shopkeepers like you.",
        shopEffect: "🌐 Local supply down → consider raising sell price as goods get harder to source.",
        severity: "medium",
        category: "Trade",
        icon: "🌐",
        impact: { minSupply: -25, supplySlope: -0.5 }
    },
];

export function gameReducer(state, action) {
    switch (action.type) {
        case 'INIT_MARKET': {
            const eq = calculateEquilibrium(state.market);
            return {
                ...state,
                market: { ...state.market, currentEquilibriumPrice: eq.price, currentEquilibriumQty: eq.qty },
                currentMarketPrice: eq.price,
                dayStartPrice: eq.price,
                portfolioValue: state.cash + (state.inventory * eq.price),
                newsTicker: {
                    title: "Shop is Ready!",
                    desc: "Set your buy price (from supplier) and sell price (to customers), then press OPEN SHOP. Your profit is the difference!",
                    shopEffect: "💡 Tip: Set Buy Price below market price and Sell Price above it.",
                    severity: "low",
                    category: "Welcome",
                    icon: "🏪"
                }
            };
        }

        case 'UPDATE_ORDERS': {
            return {
                ...state,
                orders: {
                    ...state.orders,
                    [action.payload.type]: action.payload.value
                }
            };
        }

        case 'TRIGGER_EVENT': {
            const event = EVENT_DECK[Math.floor(Math.random() * EVENT_DECK.length)];

            const newMarket = { ...state.market };
            if (event.impact.maxDemand) newMarket.maxDemand += event.impact.maxDemand;
            if (event.impact.demandSlope) newMarket.demandSlope += event.impact.demandSlope;
            if (event.impact.minSupply) newMarket.minSupply += event.impact.minSupply;
            if (event.impact.supplySlope) newMarket.supplySlope += event.impact.supplySlope;

            // Failsafes
            newMarket.demandSlope = Math.max(0.5, newMarket.demandSlope);
            newMarket.supplySlope = Math.max(0.5, newMarket.supplySlope);

            const eq = calculateEquilibrium(newMarket);
            newMarket.currentEquilibriumPrice = eq.price;
            newMarket.currentEquilibriumQty = eq.qty;

            const newsItem = {
                title: event.title,
                desc: event.desc,
                shopEffect: event.shopEffect || null,
                severity: event.severity,
                category: event.category,
                icon: event.icon,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            return {
                ...state,
                market: newMarket,
                newsTicker: newsItem,
                newsHistory: [newsItem, ...state.newsHistory.slice(0, 9)],
            };
        }

        case 'MARKET_TICK': {
            if (!state.isSimulationRunning) return state;

            let newCash = state.cash;
            let newInventory = state.inventory;
            let newTradeHistory = [...state.tradeHistory];
            let newTotalBought = state.totalBought;
            let newTotalSold = state.totalSold;
            let newTotalPnL = state.totalPnL;
            let lastTradeType = null;
            let lastTradeDelta = 0;

            // Price movement towards equilibrium with noise
            const diff = state.market.currentEquilibriumPrice - state.currentMarketPrice;
            const noise = (Math.random() * state.market.volatility * 10) - (state.market.volatility * 5);
            const newPrice = Math.max(1, state.currentMarketPrice + (diff * 0.1) + noise);
            const roundedPrice = parseFloat(newPrice.toFixed(2));

            const maxInv = state.upgrades.warehouseLvl * 100;

            // 1. BUY FROM SUPPLIER — market price <= your supplier buy price
            // Supplier offers goods when price is low enough for you
            if (roundedPrice <= state.orders.bidPrice && newCash >= roundedPrice && newInventory < maxInv) {
                const qtyToBuy = Math.min(
                    Math.floor(newCash / roundedPrice),
                    state.orders.tradeQty,
                    maxInv - newInventory
                );

                if (qtyToBuy > 0) {
                    const cost = qtyToBuy * roundedPrice;
                    newCash -= cost;       // Cash goes DOWN — you paid the supplier
                    newInventory += qtyToBuy;
                    newTotalBought += qtyToBuy;
                    newTotalPnL -= cost;
                    lastTradeType = 'BUY';
                    lastTradeDelta = -cost;

                    newTradeHistory = [
                        { type: 'BUY', qty: qtyToBuy, price: roundedPrice, total: cost, delta: -cost, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) },
                        ...newTradeHistory.slice(0, 49)
                    ];
                }
            }

            // 2. SELL TO CUSTOMER — market price >= your customer sell price
            // Customers buy when the price is right
            if (roundedPrice >= state.orders.askPrice && newInventory > 0) {
                const qtyToSell = Math.min(newInventory, state.orders.tradeQty);

                if (qtyToSell > 0) {
                    const revenue = qtyToSell * roundedPrice;
                    newCash += revenue;    // Cash goes UP — customers paid you
                    newInventory -= qtyToSell;
                    newTotalSold += qtyToSell;
                    newTotalPnL += revenue;
                    lastTradeType = 'SELL';
                    lastTradeDelta = revenue;

                    newTradeHistory = [
                        { type: 'SELL', qty: qtyToSell, price: roundedPrice, total: revenue, delta: revenue, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) },
                        ...newTradeHistory.slice(0, 49)
                    ];
                }
            }

            const portfolioValue = newCash + (newInventory * roundedPrice);

            return {
                ...state,
                currentMarketPrice: roundedPrice,
                cash: newCash,
                inventory: newInventory,
                tradeHistory: newTradeHistory,
                portfolioValue,
                totalBought: newTotalBought,
                totalSold: newTotalSold,
                totalPnL: newTotalPnL,
                lastTradeType,
                lastTradeDelta,
            };
        }

        case 'TOGGLE_SIMULATION': {
            return {
                ...state,
                isSimulationRunning: action.payload
            };
        }

        case 'END_DAY': {
            return {
                ...state,
                day: state.day + 1,
                dayStartPrice: state.currentMarketPrice,
                newsTicker: {
                    title: `Day ${state.day + 1} — Shop Opens`,
                    desc: "New day, new customers. Review your prices and adjust based on yesterday's market movements.",
                    shopEffect: "💡 Check if prices shifted. Update your buy/sell prices to stay profitable!",
                    severity: "low",
                    category: "Daily Update",
                    icon: "🌅"
                }
            };
        }

        case 'BUY_UPGRADE': {
            const { type, cost } = action.payload;
            if (state.cash >= cost) {
                return {
                    ...state,
                    cash: state.cash - cost,
                    upgrades: {
                        ...state.upgrades,
                        [type]: state.upgrades[type] + 1
                    },
                    newsTicker: {
                        title: "Shop Upgraded!",
                        desc: `${type} upgraded to Level ${state.upgrades[type] + 1}. Your shop can now handle more!`,
                        severity: "low",
                        category: "Upgrade",
                        icon: "⬆️"
                    }
                };
            }
            return state;
        }

        default:
            return state;
    }
}
