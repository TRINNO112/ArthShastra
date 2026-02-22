// src/pages/Games/MarketMaker/Engine/gameLogic.js

export const INITIAL_STATE = {
    day: 1,
    maxDays: 30,
    cash: 50000,
    inventory: 50,
    portfolioValue: 0,

    // Core Market Conditions (Base Curves)
    // Qd = maxDemand - demandSlope * P
    // Qs = minSupply + supplySlope * P
    market: {
        maxDemand: 200,
        demandSlope: 2,
        minSupply: 20,
        supplySlope: 4,
        currentEquilibriumPrice: 0,
        currentEquilibriumQty: 0,
        volatility: 0.15, // How crazy the price swings can be
    },

    // Player's Active Orders
    orders: {
        bidPrice: 20, // Max price willing to buy
        askPrice: 35, // Min price willing to sell
        tradeQty: 5,  // Amount to trade per tick
    },

    // UI & History State
    newsTicker: "Market opens steady. Traders await economic indicators.",
    tradeHistory: [], // Array of completed trades
    isSimulationRunning: false,

    // Per-day Tracking
    dayStartPrice: 0,
    currentMarketPrice: 30,

    upgrades: {
        warehouseLvl: 1, // Max Inventory = lvl * 100
        analyticsLvl: 0, // Reveals upcoming event indicators
    }
};

// Calculate Equilibrium based on Qd = Qs
export function calculateEquilibrium(market) {
    // maxDemand - demandSlope * P = minSupply + supplySlope * P
    // maxDemand - minSupply = P(supplySlope + demandSlope)
    const price = (market.maxDemand - market.minSupply) / (market.supplySlope + market.demandSlope);
    const qty = market.maxDemand - (market.demandSlope * price);

    return {
        price: Math.max(0, parseFloat(price.toFixed(2))),
        qty: Math.max(0, Math.round(qty))
    };
}

export const EVENT_DECK = [
    {
        title: "Pandemic Scare",
        type: "demand_shock_neg",
        desc: "Fear grips the market. Buyers are fleeing.",
        impact: { maxDemand: -50, demandSlope: 0 } // Shifts curve left
    },
    {
        title: "Viral TikTok Trend",
        type: "demand_shock_pos",
        desc: "Influencers are hyping the product! Demand explodes.",
        impact: { maxDemand: +80, demandSlope: -0.5 } // Steeper curve + shift right
    },
    {
        title: "Supply Chain Disruptions",
        type: "supply_shock_neg",
        desc: "Shipping containers are stuck. Goods are scarce.",
        impact: { minSupply: -40, supplySlope: -1 } // Shifts supply left
    },
    {
        title: "Tech Breakthrough",
        type: "supply_shock_pos",
        desc: "New automated factories open up.",
        impact: { minSupply: +60, supplySlope: +2 } // Shifts supply right
    },
    {
        title: "Stimulus Checks",
        type: "demand_shift_pos",
        desc: "Government hands out cash. Everyone is buying.",
        impact: { maxDemand: +40, demandSlope: 0 }
    }
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
                portfolioValue: state.cash + (state.inventory * eq.price)
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
            // Pick a random event
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

            return {
                ...state,
                market: newMarket,
                newsTicker: `BREAKING: ${event.title} - ${event.desc}`,
            };
        }

        case 'MARKET_TICK': {
            // One logical "tick" of trading matching AI against the player's orders
            if (!state.isSimulationRunning) return state;

            let newState = { ...state };

            // The active market price 'hunts' towards the mathematical equilibrium 
            // but with noise (volatility)
            const diff = state.market.currentEquilibriumPrice - state.currentMarketPrice;
            const noise = (Math.random() * state.market.volatility * 10) - (state.market.volatility * 5);
            const newPrice = Math.max(1, state.currentMarketPrice + (diff * 0.1) + noise);

            newState.currentMarketPrice = parseFloat(newPrice.toFixed(2));
            newState.portfolioValue = newState.cash + (newState.inventory * newState.currentMarketPrice);

            // TRADING LOGIC
            const maxInv = state.upgrades.warehouseLvl * 100;

            // 1. Can we buy? (Is market price <= our Bid)
            if (newState.currentMarketPrice <= state.orders.bidPrice && newState.cash >= newState.currentMarketPrice && newState.inventory < maxInv) {
                // AI Sellers are hitting our Bid
                const qtyToBuy = Math.min(Math.floor(newState.cash / newState.currentMarketPrice), state.orders.tradeQty);

                newState.cash -= (qtyToBuy * newState.currentMarketPrice);
                newState.inventory += qtyToBuy;

                if (qtyToBuy > 0) {
                    newState.tradeHistory = [
                        { type: 'BUY', qty: qtyToBuy, price: newState.currentMarketPrice, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) },
                        ...newState.tradeHistory.slice(0, 49)
                    ];
                }
            }

            // 2. Can we sell? (Is market price >= our Ask)
            if (newState.currentMarketPrice >= state.orders.askPrice && newState.inventory > 0) {
                // AI Buyers are lifting our Ask
                const qtyToSell = Math.min(newState.inventory, state.orders.tradeQty);

                newState.cash += (qtyToSell * newState.currentMarketPrice);
                newState.inventory -= qtyToSell;

                if (qtyToSell > 0) {
                    newState.tradeHistory = [
                        { type: 'SELL', qty: qtyToSell, price: newState.currentMarketPrice, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }) },
                        ...newState.tradeHistory.slice(0, 49)
                    ];
                }
            }

            return newState;
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
                newsTicker: `Day ${state.day + 1} begins. Market adjusting.`
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
                    newsTicker: `SYSTEM: Upgraded ${type} to Level ${state.upgrades[type] + 1}`
                };
            }
            return state;
        }

        default:
            return state;
    }
}
