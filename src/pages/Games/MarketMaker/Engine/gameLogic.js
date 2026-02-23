// src/pages/Games/MarketMaker/Engine/gameLogic.js

export const INITIAL_STATE = {
    day: 1,
    maxDays: 30,
    cash: 10000,      // Starting cash in ₹
    inventory: 0,     // Start with no stock — you must buy from supplier first
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

    // Trade quantity the player sets
    tradeQty: 10,

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

    // For floating popup animation
    lastTradeType: null,
    lastTradeDelta: 0,

    // For error feedback (not enough cash / stock)
    tradeError: null,

    upgrades: {
        warehouseLvl: 1,
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
        shopEffect: "📦 Less supply available → prices will rise. Good time to buy stock now before it gets expensive.",
        severity: "high",
        category: "Logistics",
        icon: "🚢",
        impact: { minSupply: -40, supplySlope: -1 }
    },
    {
        title: "New Factory Opened",
        desc: "A large factory opened nearby. Suppliers now have more goods to offer.",
        shopEffect: "✅ More supply → prices drop. Buy more stock at the lower price now!",
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
        shopEffect: "💰 Higher supplier costs → raise your sell price to protect your profit margin.",
        severity: "high",
        category: "Geopolitics",
        icon: "⚔️",
        impact: { minSupply: -30, supplySlope: -0.5 }
    },
    {
        title: "Customer Confidence Falls",
        desc: "People are worried about the economy. They are buying less.",
        shopEffect: "📉 Lower demand → prices will fall. Sell your stock now before price drops.",
        severity: "low",
        category: "Sentiment",
        icon: "😟",
        impact: { maxDemand: -25, demandSlope: 0.3 }
    },
    {
        title: "Festival Season!",
        desc: "It's celebration time! Everyone is in the mood to shop and spend.",
        shopEffect: "🎉 Big demand → prices will rise. Buy stock now and sell high during the festival!",
        severity: "medium",
        category: "Seasonal",
        icon: "🎉",
        impact: { maxDemand: +35, demandSlope: -0.2 }
    },
    {
        title: "Raw Material Shortage",
        desc: "Suppliers can't get enough raw materials. They're producing less.",
        shopEffect: "⛏️ Less stock available → buy whatever you can now before it runs out.",
        severity: "medium",
        category: "Commodities",
        icon: "⛏️",
        impact: { minSupply: -20, supplySlope: -0.8 }
    },
    {
        title: "Loans Get Cheaper",
        desc: "Bank interest rates dropped. People can borrow easily and spend more.",
        shopEffect: "🏦 More buyers in market → demand will rise. Stock up before prices climb!",
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
        shopEffect: "🌐 Local supply down → prices may rise. Good time to sell your existing stock.",
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
                    title: "Welcome to Your Shop!",
                    desc: "The market price moves on its own based on Supply & Demand. Press BUY to buy from supplier, SELL to sell to customers. Watch your cash change!",
                    shopEffect: "💡 Start by pressing BUY to get some stock, then press SELL when the price goes up.",
                    severity: "low",
                    category: "Welcome",
                    icon: "🏪"
                }
            };
        }

        case 'UPDATE_QTY': {
            return {
                ...state,
                tradeQty: action.payload,
                tradeError: null,
            };
        }

        // Player manually buys stock from supplier at current market price
        case 'MANUAL_BUY': {
            const qty = state.tradeQty;
            const price = state.currentMarketPrice;
            const maxInv = state.upgrades.warehouseLvl * 100;
            const totalCost = parseFloat((qty * price).toFixed(2));

            // Not enough cash
            if (state.cash < totalCost) {
                return {
                    ...state,
                    tradeError: `Not enough cash! Need ₹${totalCost.toFixed(0)} but you have ₹${state.cash.toFixed(0)}.`,
                    lastTradeType: null,
                };
            }

            // Warehouse full
            if (state.inventory >= maxInv) {
                return {
                    ...state,
                    tradeError: `Warehouse is full! (${maxInv} units max). Sell some stock first.`,
                    lastTradeType: null,
                };
            }

            // Clamp qty to available warehouse space
            const actualQty = Math.min(qty, maxInv - state.inventory);
            const actualCost = parseFloat((actualQty * price).toFixed(2));
            const newCash = parseFloat((state.cash - actualCost).toFixed(2));
            const newInventory = state.inventory + actualQty;

            const tradeEntry = {
                type: 'BUY',
                qty: actualQty,
                price,
                total: actualCost,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            };

            return {
                ...state,
                cash: newCash,
                inventory: newInventory,
                totalBought: state.totalBought + actualQty,
                totalPnL: parseFloat((state.totalPnL - actualCost).toFixed(2)),
                tradeHistory: [tradeEntry, ...state.tradeHistory.slice(0, 49)],
                portfolioValue: parseFloat((newCash + newInventory * price).toFixed(2)),
                lastTradeType: 'BUY',
                lastTradeDelta: -actualCost,
                tradeError: null,
            };
        }

        // Player manually sells stock to customers at current market price
        case 'MANUAL_SELL': {
            const qty = state.tradeQty;
            const price = state.currentMarketPrice;

            // No stock
            if (state.inventory <= 0) {
                return {
                    ...state,
                    tradeError: `No stock to sell! Press BUY first to get goods from your supplier.`,
                    lastTradeType: null,
                };
            }

            const actualQty = Math.min(qty, state.inventory);
            const revenue = parseFloat((actualQty * price).toFixed(2));
            const newCash = parseFloat((state.cash + revenue).toFixed(2));
            const newInventory = state.inventory - actualQty;

            const tradeEntry = {
                type: 'SELL',
                qty: actualQty,
                price,
                total: revenue,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            };

            return {
                ...state,
                cash: newCash,
                inventory: newInventory,
                totalSold: state.totalSold + actualQty,
                totalPnL: parseFloat((state.totalPnL + revenue).toFixed(2)),
                tradeHistory: [tradeEntry, ...state.tradeHistory.slice(0, 49)],
                portfolioValue: parseFloat((newCash + newInventory * price).toFixed(2)),
                lastTradeType: 'SELL',
                lastTradeDelta: revenue,
                tradeError: null,
            };
        }

        case 'CLEAR_TRADE_ERROR': {
            return { ...state, tradeError: null };
        }

        case 'TRIGGER_EVENT': {
            // Alternate: if last event raised equilibrium, prefer one that lowers it
            const lastEq = state.market.currentEquilibriumPrice;
            const INITIAL_EQ = 30;
            // If price drifted >15% above initial eq, bias toward negative demand events
            let pool = EVENT_DECK;
            if (lastEq > INITIAL_EQ * 1.15) {
                pool = EVENT_DECK.filter(e => (e.impact.maxDemand || 0) < 0 || (e.impact.minSupply || 0) > 0);
            } else if (lastEq < INITIAL_EQ * 0.85) {
                pool = EVENT_DECK.filter(e => (e.impact.maxDemand || 0) > 0 || (e.impact.minSupply || 0) < 0);
            }
            if (pool.length === 0) pool = EVENT_DECK;
            const event = pool[Math.floor(Math.random() * pool.length)];

            const newMarket = { ...state.market };
            if (event.impact.maxDemand) newMarket.maxDemand += event.impact.maxDemand;
            if (event.impact.demandSlope) newMarket.demandSlope += event.impact.demandSlope;
            if (event.impact.minSupply) newMarket.minSupply += event.impact.minSupply;
            if (event.impact.supplySlope) newMarket.supplySlope += event.impact.supplySlope;

            // Failsafes — prevent broken values
            newMarket.maxDemand = Math.max(50, newMarket.maxDemand);
            newMarket.minSupply = Math.max(0, newMarket.minSupply);
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

            // Mean reversion toward equilibrium (stronger pull = less runaway drift)
            const eq = state.market.currentEquilibriumPrice;
            const diff = eq - state.currentMarketPrice;
            // Random noise: oscillates around equilibrium, does not drift in one direction
            const noise = (Math.random() - 0.5) * state.market.volatility * 8;
            // Strong mean reversion: 20% pull per tick keeps price near equilibrium
            const newPrice = Math.max(1, state.currentMarketPrice + (diff * 0.2) + noise);
            const roundedPrice = parseFloat(newPrice.toFixed(2));

            const portfolioValue = parseFloat((state.cash + state.inventory * roundedPrice).toFixed(2));

            return {
                ...state,
                currentMarketPrice: roundedPrice,
                portfolioValue,
                // Reset trade signals so floating text doesn't re-trigger
                lastTradeType: null,
                lastTradeDelta: 0,
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
                    desc: "New day, new prices. The market will keep moving. Buy low, sell high!",
                    shopEffect: "💡 Check if the equilibrium price shifted. Adjust your strategy.",
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
                    cash: parseFloat((state.cash - cost).toFixed(2)),
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
