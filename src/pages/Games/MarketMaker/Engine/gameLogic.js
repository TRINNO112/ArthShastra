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
    tickCount: 0,   // total ticks elapsed — used for gradual market growth

    // Stats tracking
    totalBought: 0,
    totalSold: 0,
    totalPnL: 0,
    maxStreak: 0,   // best sell streak achieved this session

    // For floating popup animation
    lastTradeType: null,
    lastTradeDelta: 0,

    // For error feedback (not enough cash / stock)
    tradeError: null,

    upgrades: {
        warehouseLvl: 1,
        marketIntelLvl: 1,
    },

    // --- HIDDEN FEATURES ---

    // Loan system
    loan: {
        active: false,    // has player taken a loan?
        amount: 5000,     // fixed loan amount
        repaid: false,    // has it been repaid?
    },

    // Rival shopkeeper AI
    rival: {
        inventory: 20,        // rival starts with some stock
        lastAction: null,     // 'BUY' | 'SELL' | null
        lastActionTime: 0,    // tickCount when rival last acted
    },

    // Sell streak (sell above equilibrium = streak)
    streak: {
        count: 0,          // consecutive sells above equilibrium
        multiplier: 1.0,   // bonus multiplier applied to sell revenue
        active: false,     // true when count >= 3
    },

    // Black market — secret timed discount button
    blackMarket: {
        available: false,   // is the button showing?
        expiresAt: 0,       // tickCount when it disappears
    },

    // Market crash tracking — prevents back-to-back crashes
    lastCrashTick: -100,
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
            // Always reset market curves to initial values so a restart starts fresh
            const freshMarket = {
                maxDemand: INITIAL_STATE.market.maxDemand,
                demandSlope: INITIAL_STATE.market.demandSlope,
                minSupply: INITIAL_STATE.market.minSupply,
                supplySlope: INITIAL_STATE.market.supplySlope,
                volatility: INITIAL_STATE.market.volatility,
                currentEquilibriumPrice: 0,
                currentEquilibriumQty: 0,
            };
            const eq = calculateEquilibrium(freshMarket);
            freshMarket.currentEquilibriumPrice = eq.price;
            freshMarket.currentEquilibriumQty = eq.qty;
            return {
                ...INITIAL_STATE,
                market: freshMarket,
                currentMarketPrice: eq.price,
                dayStartPrice: eq.price,
                portfolioValue: INITIAL_STATE.cash,
                tickCount: 0,
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

            if (state.cash < totalCost) {
                return {
                    ...state,
                    tradeError: `Not enough cash! Need ₹${totalCost.toFixed(0)} but you have ₹${state.cash.toFixed(0)}.`,
                    lastTradeType: null,
                };
            }

            if (state.inventory >= maxInv) {
                return {
                    ...state,
                    tradeError: `Warehouse is full! (${maxInv} units max). Sell some stock first.`,
                    lastTradeType: null,
                };
            }

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

        // Player manually sells stock — streak bonus applies if selling above equilibrium
        case 'MANUAL_SELL': {
            const qty = state.tradeQty;
            const price = state.currentMarketPrice;

            if (state.inventory <= 0) {
                return {
                    ...state,
                    tradeError: `No stock to sell! Press BUY first to get goods from your supplier.`,
                    lastTradeType: null,
                };
            }

            const actualQty = Math.min(qty, state.inventory);

            // Streak logic: selling above equilibrium builds the streak
            const sellAboveEq = price > state.market.currentEquilibriumPrice;
            const newStreakCount = sellAboveEq ? state.streak.count + 1 : 0;
            const streakActive = newStreakCount >= 3;
            const multiplier = streakActive
                ? Math.min(1.5, 1.0 + (newStreakCount - 2) * 0.1)
                : 1.0;

            const baseRevenue = actualQty * price;
            const revenue = parseFloat((baseRevenue * multiplier).toFixed(2));
            const newCash = parseFloat((state.cash + revenue).toFixed(2));
            const newInventory = state.inventory - actualQty;
            const newMaxStreak = Math.max(state.maxStreak, newStreakCount);

            const tradeEntry = {
                type: 'SELL',
                qty: actualQty,
                price,
                total: revenue,
                bonus: multiplier > 1.0 ? parseFloat(((multiplier - 1) * 100).toFixed(0)) : 0,
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
                maxStreak: newMaxStreak,
                streak: {
                    count: newStreakCount,
                    multiplier,
                    active: streakActive,
                },
            };
        }

        case 'CLEAR_TRADE_ERROR': {
            return { ...state, tradeError: null };
        }

        case 'TRIGGER_EVENT': {
            const lastEq = state.market.currentEquilibriumPrice;
            const INITIAL_EQ = 30;
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

            const newTickCount = state.tickCount + 1;

            // Gradual market growth every 15 ticks — equilibrium drifts upward
            let growingMarket = state.market;
            if (newTickCount % 15 === 0) {
                const updatedMaxDemand = state.market.maxDemand + 1.5;
                growingMarket = { ...state.market, maxDemand: updatedMaxDemand };
                const eq = calculateEquilibrium(growingMarket);
                growingMarket.currentEquilibriumPrice = eq.price;
                growingMarket.currentEquilibriumQty = eq.qty;
            }

            const eq = growingMarket.currentEquilibriumPrice;
            const diff = eq - state.currentMarketPrice;
            const noiseReduction = 1 - (state.upgrades.marketIntelLvl - 1) * 0.15;
            const noise = (Math.random() - 0.5) * state.market.volatility * 6 * Math.max(0.1, noiseReduction);
            const newPrice = Math.max(1, state.currentMarketPrice + (diff * 0.15) + noise);
            const roundedPrice = parseFloat(newPrice.toFixed(2));
            const portfolioValue = parseFloat((state.cash + state.inventory * roundedPrice).toFixed(2));

            return {
                ...state,
                market: growingMarket,
                currentMarketPrice: roundedPrice,
                portfolioValue,
                tickCount: newTickCount,
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

        // ========== HIDDEN FEATURE ACTIONS ==========

        case 'TAKE_LOAN': {
            if (state.loan.active) return state;
            const newCash = parseFloat((state.cash + 5000).toFixed(2));
            return {
                ...state,
                cash: newCash,
                loan: { active: true, amount: 5000, repaid: false },
                portfolioValue: parseFloat((newCash + state.inventory * state.currentMarketPrice).toFixed(2)),
                newsTicker: {
                    title: "💰 Bank Loan Approved!",
                    desc: "₹5,000 has been credited to your account. You must repay ₹5,000 before the session ends, or face a ₹6,500 penalty (30% interest)!",
                    shopEffect: "⚠️ Repay using the REPAY button before time runs out.",
                    severity: "medium",
                    category: "Finance",
                    icon: "🏦"
                }
            };
        }

        case 'REPAY_LOAN': {
            if (!state.loan.active || state.loan.repaid || state.cash < 5000) return state;
            const newCash = parseFloat((state.cash - 5000).toFixed(2));
            return {
                ...state,
                cash: newCash,
                loan: { ...state.loan, repaid: true },
                portfolioValue: parseFloat((newCash + state.inventory * state.currentMarketPrice).toFixed(2)),
                newsTicker: {
                    title: "✅ Loan Repaid!",
                    desc: "₹5,000 loan fully repaid. Smart financial management! No penalty will apply.",
                    shopEffect: null,
                    severity: "low",
                    category: "Finance",
                    icon: "✅"
                }
            };
        }

        case 'LOAN_PENALTY': {
            // Applied at game end if loan was not repaid — ₹6,500 (loan + 30% interest)
            const penalty = 6500;
            const newCash = parseFloat(Math.max(0, state.cash - penalty).toFixed(2));
            return {
                ...state,
                cash: newCash,
                portfolioValue: parseFloat((newCash + state.inventory * state.currentMarketPrice).toFixed(2)),
            };
        }

        case 'MARKET_CRASH': {
            // Price crashes 45% — brutal but recovers via mean reversion
            const crashedPrice = parseFloat((state.currentMarketPrice * 0.55).toFixed(2));
            return {
                ...state,
                currentMarketPrice: Math.max(1, crashedPrice),
                portfolioValue: parseFloat((state.cash + state.inventory * Math.max(1, crashedPrice)).toFixed(2)),
                lastCrashTick: state.tickCount,
                newsTicker: {
                    title: "📉 MARKET CRASH!",
                    desc: "A sudden shock has caused the market price to collapse! Panic selling everywhere.",
                    shopEffect: "🚨 Hold your stock — the price will recover. Do NOT sell at a loss right now!",
                    severity: "high",
                    category: "Market Crash",
                    icon: "📉"
                }
            };
        }

        case 'RIVAL_TICK': {
            const eqPrice = state.market.currentEquilibriumPrice;
            const rivalInv = state.rival.inventory;
            const marketPrice = state.currentMarketPrice;

            let newRivalInv = rivalInv;
            let rivalAction = null;
            let priceNudge = 0;

            // Rival buys when price is below equilibrium and they're low on stock
            if (rivalInv < 10 && marketPrice < eqPrice * 0.98) {
                newRivalInv = rivalInv + 5;
                rivalAction = 'BUY';
                priceNudge = 0.3; // rival buying pushes price up slightly
            }
            // Rival sells when price is above equilibrium and they have lots of stock
            else if (rivalInv > 30 && marketPrice > eqPrice * 1.02) {
                newRivalInv = rivalInv - 10;
                rivalAction = 'SELL';
                priceNudge = -0.3; // rival selling pushes price down slightly
            }

            const newPrice = Math.max(1, parseFloat((state.currentMarketPrice + priceNudge).toFixed(2)));
            return {
                ...state,
                currentMarketPrice: newPrice,
                portfolioValue: parseFloat((state.cash + state.inventory * newPrice).toFixed(2)),
                rival: {
                    inventory: newRivalInv,
                    lastAction: rivalAction,
                    lastActionTime: state.tickCount,
                },
            };
        }

        case 'SPAWN_BLACK_MARKET': {
            return {
                ...state,
                blackMarket: {
                    available: true,
                    expiresAt: state.tickCount + 5,
                },
            };
        }

        case 'EXPIRE_BLACK_MARKET': {
            return {
                ...state,
                blackMarket: { ...state.blackMarket, available: false },
            };
        }

        case 'BLACK_MARKET_BUY': {
            const qty = state.tradeQty;
            const discountPrice = parseFloat((state.currentMarketPrice * 0.80).toFixed(2));
            const maxInv = state.upgrades.warehouseLvl * 100;
            const totalCost = parseFloat((qty * discountPrice).toFixed(2));

            if (state.cash < totalCost) {
                return {
                    ...state,
                    blackMarket: { ...state.blackMarket, available: false },
                    tradeError: `Not enough cash for black market deal! Need ₹${totalCost.toFixed(0)}.`,
                };
            }

            if (state.inventory >= maxInv) {
                return {
                    ...state,
                    blackMarket: { ...state.blackMarket, available: false },
                    tradeError: `Warehouse full! Can't take the black market deal.`,
                };
            }

            const actualQty = Math.min(qty, maxInv - state.inventory);
            const actualCost = parseFloat((actualQty * discountPrice).toFixed(2));
            const newCash = parseFloat((state.cash - actualCost).toFixed(2));
            const newInventory = state.inventory + actualQty;

            const tradeEntry = {
                type: 'BUY',
                qty: actualQty,
                price: discountPrice,
                total: actualCost,
                blackMarket: true,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
            };

            return {
                ...state,
                cash: newCash,
                inventory: newInventory,
                totalBought: state.totalBought + actualQty,
                totalPnL: parseFloat((state.totalPnL - actualCost).toFixed(2)),
                tradeHistory: [tradeEntry, ...state.tradeHistory.slice(0, 49)],
                portfolioValue: parseFloat((newCash + newInventory * state.currentMarketPrice).toFixed(2)),
                lastTradeType: 'BUY',
                lastTradeDelta: -actualCost,
                tradeError: null,
                blackMarket: { ...state.blackMarket, available: false },
                newsTicker: {
                    title: "🕵️ Black Market Deal!",
                    desc: `Scored ${actualQty} units at 20% below market price. Don't tell anyone...`,
                    shopEffect: "💡 Sell these units when price rises for maximum profit!",
                    severity: "low",
                    category: "Black Market",
                    icon: "🕵️"
                }
            };
        }

        default:
            return state;
    }
}
