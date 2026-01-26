import React, { useState, useEffect, useReducer, useRef } from 'react';
import {
    FaPlay, FaStop, FaChartLine, FaHistory, FaCoins,
    FaIndustry, FaExclamationTriangle, FaTrophy, FaRedo,
    FaLock, FaUnlock, FaShoppingCart, FaBolt
} from 'react-icons/fa';
import './EcoTycoon.css';

// ==========================================
// GAME CONFIGURATION & CONSTANTS
// ==========================================
const GAME_CONFIG = {
    STARTING_CASH: 500,
    INITIAL_FIXED_COST: 100, // Rent per level
    MAX_LEVELS: 5,
    GRAPH_WIDTH: 600,
    GRAPH_HEIGHT: 300,
    GRAPH_PADDING: 20,
    MAX_UNITS_RENDER: 15
};

const UPGRADES = [
    { id: 'tech_1', name: 'Automation V1', cost: 150, effect: 'mc_reduction', value: 2, desc: 'Reduces MC of every unit by ₹2' },
    { id: 'marketing_1', name: 'Premium Brand', cost: 300, effect: 'mr_boost', value: 2, desc: 'Increases Selling Price (MR) by ₹2' },
    { id: 'bulk_buy', name: 'Bulk Contracts', cost: 500, effect: 'fc_reduction', value: 50, desc: 'Reduces Fixed Costs by ₹50' }
];

// ==========================================
// HELPER FUNCTIONS (MATH & LOGIC)
// ==========================================

// Generates a Quadratic MC Curve: MC = a*q^2 + b*q + c
// But simplified for gameplay: MC starts low, then rises (Diminishing returns)
const generateLevelParams = (level) => {
    // Difficulty scaler
    const scaler = 1 + (level * 0.2);

    // Randomize Market Revenue (Price)
    const baseMr = 20 + Math.floor(Math.random() * 5);
    const mr = Math.floor(baseMr * scaler);

    // Cost Curve parameters
    // MC usually crosses MR around unit 8-12 for good gameplay
    const startMc = Math.floor(mr * 0.4); // MC starts at 40% of Price
    const slope = (Math.random() * 1.5) + 0.5; // Steepness

    return {
        mr,
        mcFunc: (q, activeUpgrades) => {
            // Apply Upgrades
            let reduction = activeUpgrades.includes('tech_1') ? 2 : 0;

            // Core Formula: MC = Start + (Slope * q^1.8)
            let rawMc = startMc + (slope * Math.pow(q, 1.8));

            // Add noise/volatility
            // Every 3rd unit might be slightly more expensive (machine breakdown simulation)
            if (q % 3 === 0) rawMc += 2;

            let finalMc = Math.floor(rawMc) - reduction;
            return Math.max(1, finalMc); // MC cannot be negative
        },
        fixedCost: GAME_CONFIG.INITIAL_FIXED_COST
    };
};

const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
};

// ==========================================
// STATE MANAGEMENT (REDUCER)
// ==========================================
const initialState = {
    gameState: 'START', // START, PLAYING, LEVEL_SUMMARY, GAME_OVER, VICTORY
    level: 1,
    cash: GAME_CONFIG.STARTING_CASH,

    // Level Specific State
    currentQ: 0, // Quantity Produced
    history: [], // Array of { q, mr, mc, profit, totalProfit }
    currentParams: null, // Holds the MR and MC function for this level
    levelProfit: 0,
    fixedCostPaid: false,

    // Persistent State
    ownedUpgrades: [],
    logs: [], // Console logs

    // UI State
    lastActionFeedback: null,
};

const gameReducer = (state, action) => {
    switch (action.type) {

        case 'INIT_LEVEL': {
            const params = generateLevelParams(state.level);
            // Apply MR Upgrades
            if (state.ownedUpgrades.includes('marketing_1')) {
                params.mr += 2;
            }
            if (state.ownedUpgrades.includes('bulk_buy')) {
                params.fixedCost = Math.max(0, params.fixedCost - 50);
            }

            return {
                ...state,
                gameState: 'PLAYING',
                currentQ: 0,
                history: [],
                currentParams: params,
                levelProfit: -params.fixedCost, // Start in debt due to Rent
                fixedCostPaid: true,
                logs: [{ id: Date.now(), text: `--- LEVEL ${state.level} STARTED ---`, type: 'info' },
                { id: Date.now() + 1, text: `Fixed Costs Paid: ${formatCurrency(params.fixedCost)}`, type: 'loss' },
                ...state.logs]
            };
        }

        case 'PRODUCE_UNIT': {
            const nextQ = state.currentQ + 1;
            const mc = state.currentParams.mcFunc(nextQ, state.ownedUpgrades);
            const mr = state.currentParams.mr;
            const unitProfit = mr - mc;

            // Check Bankruptcy
            if (state.cash + unitProfit < 0) {
                return {
                    ...state,
                    gameState: 'GAME_OVER',
                    logs: [{ id: Date.now(), text: `BANKRUPTCY! You cannot afford to produce.`, type: 'loss' }, ...state.logs]
                };
            }

            const newHistory = [
                ...state.history,
                { q: nextQ, mr, mc, unitProfit, cumulative: state.levelProfit + unitProfit }
            ];

            let feedback = null;
            if (mc > mr) feedback = "WARNING: MC > MR (Loss on Unit)";
            else if (mc === mr) feedback = "EQUILIBRIUM: MR = MC";
            else feedback = "PROFITABLE: MR > MC";

            return {
                ...state,
                currentQ: nextQ,
                cash: state.cash + unitProfit,
                levelProfit: state.levelProfit + unitProfit,
                history: newHistory,
                lastActionFeedback: feedback,
                logs: [{ id: Date.now(), text: `Unit ${nextQ}: Cost ${mc}, Sold ${mr}. ${unitProfit >= 0 ? 'Profit' : 'Loss'}: ${unitProfit}`, type: unitProfit >= 0 ? 'profit' : 'loss' }, ...state.logs]
            };
        }

        case 'STOP_PRODUCTION': {
            // Calculate Efficiency
            // Optimal Q is where MR >= MC, and next unit MR < MC.
            // We check the history to see if they stopped at the peak of cumulative profit.

            // Find max potential profit in this curve (theoretical)
            // We simulate ahead to find the peak
            let simQ = 0;
            let simProfit = -state.currentParams.fixedCost;
            let maxTheoreticalProfit = simProfit;
            let optimalQ = 0;

            // Simulate 20 units
            for (let i = 1; i <= 20; i++) {
                let mc = state.currentParams.mcFunc(i, state.ownedUpgrades);
                let mr = state.currentParams.mr;
                simProfit += (mr - mc);
                if (simProfit >= maxTheoreticalProfit) {
                    maxTheoreticalProfit = simProfit;
                    optimalQ = i;
                }
            }

            const actualProfit = state.levelProfit;
            const performance = actualProfit / maxTheoreticalProfit; // % of max captured

            let message = "";
            if (performance >= 0.95) message = "EXCELLENT! Near perfect efficiency.";
            else if (state.currentQ > optimalQ) message = "OVERSHOT! You produced too much (MC > MR).";
            else message = "TOO CAUTIOUS! You left money on the table.";

            return {
                ...state,
                gameState: 'LEVEL_SUMMARY',
                lastActionFeedback: message,
                logs: [{ id: Date.now(), text: `Production Stopped at Q=${state.currentQ}. ${message}`, type: 'info' }, ...state.logs]
            };
        }

        case 'NEXT_LEVEL': {
            if (state.level >= GAME_CONFIG.MAX_LEVELS) {
                return { ...state, gameState: 'VICTORY' };
            }
            return {
                ...state,
                level: state.level + 1,
                gameState: 'START', // Will trigger init
            };
        }

        case 'BUY_UPGRADE': {
            const upgrade = UPGRADES.find(u => u.id === action.payload);
            if (state.cash >= upgrade.cost && !state.ownedUpgrades.includes(upgrade.id)) {
                return {
                    ...state,
                    cash: state.cash - upgrade.cost,
                    ownedUpgrades: [...state.ownedUpgrades, upgrade.id],
                    logs: [{ id: Date.now(), text: `Purchased Upgrade: ${upgrade.name}`, type: 'info' }, ...state.logs]
                };
            }
            return state;
        }

        case 'RESTART_GAME':
            return initialState;

        default:
            return state;
    }
};

// ==========================================
// SUB-COMPONENT: CUSTOM CHARTING ENGINE
// ==========================================
const ChartDisplay = ({ history, nextMc, mr, config }) => {
    // We need to map values to SVG coordinates
    // X Axis: Quantity (0 to 15)
    // Y Axis: Cost/Revenue (0 to max(MC) + 10)

    const w = config.GRAPH_WIDTH;
    const h = config.GRAPH_HEIGHT;
    const p = config.GRAPH_PADDING;

    // Determine Y Scale Max
    const maxVal = Math.max(mr + 10, nextMc + 10, ...history.map(h => h.mc));
    const scaleY = (val) => h - p - ((val / maxVal) * (h - (2 * p)));
    const scaleX = (val) => p + ((val / config.MAX_UNITS_RENDER) * (w - (2 * p)));

    // Generate Path Data for MC Curve (Historical + Prediction)
    let mcPathD = `M ${scaleX(0)} ${scaleY(history.length > 0 ? history[0].mc : 0)}`; // Start point

    // Draw historical line
    history.forEach((point) => {
        mcPathD += ` L ${scaleX(point.q)} ${scaleY(point.mc)}`;
    });

    // Dash line to next predicted unit
    const nextQ = history.length + 1;
    const nextX = scaleX(nextQ);
    const nextY = scaleY(nextMc);

    return (
        <div className="chart-container">
            <svg viewBox={`0 0 ${w} ${h}`} className="chart-svg">
                {/* --- Grid & Axes --- */}
                <line x1={p} y1={p} x2={p} y2={h - p} className="grid-line" /> {/* Y Axis */}
                <line x1={p} y1={h - p} x2={w - p} y2={h - p} className="grid-line" /> {/* X Axis */}

                {/* Y Axis Labels */}
                <text x={p - 30} y={scaleY(mr)} className="chart-label">₹{mr}</text>
                <text x={p - 30} y={scaleY(0)} className="chart-label">₹0</text>

                {/* X Axis Labels */}
                {[5, 10, 15].map(tick => (
                    <text key={tick} x={scaleX(tick)} y={h - p + 20} className="chart-label" textAnchor="middle">{tick}</text>
                ))}

                {/* --- Data Lines --- */}
                {/* MR Line (Horizontal) */}
                <line
                    x1={p} y1={scaleY(mr)}
                    x2={w - p} y2={scaleY(mr)}
                    className="path-mr"
                />
                <text x={w - p + 5} y={scaleY(mr) + 5} fill="var(--primary)" fontSize="12">MR</text>

                {/* MC Line (Curve) */}
                <path d={mcPathD} className="path-mc" style={{ opacity: 0.5 }} />

                {/* Active Points */}
                {history.map((point, i) => (
                    <circle
                        key={i}
                        cx={scaleX(point.q)}
                        cy={scaleY(point.mc)}
                        r="4"
                        fill={point.mc > point.mr ? "var(--danger)" : "var(--success)"}
                    />
                ))}

                {/* Next Unit Prediction (Ghost) */}
                <line
                    x1={scaleX(history.length)} y1={scaleY(history.length > 0 ? history[history.length - 1].mc : 0)}
                    x2={nextX} y2={nextY}
                    stroke="var(--text-muted)" strokeDasharray="4" opacity="0.5"
                />
                <circle cx={nextX} cy={nextY} r="6" className="current-point" fill="var(--gold)" />
                <text x={nextX} y={nextY - 15} fill="white" textAnchor="middle" fontSize="12">Next MC: {nextMc}</text>

            </svg>
        </div>
    );
};

// ==========================================
// MAIN COMPONENT
// ==========================================
const EcoTycoon = () => {
    const [state, dispatch] = useReducer(gameReducer, initialState);
    const terminalRef = useRef(null);

    // Auto-scroll terminal
    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [state.logs]);

    // Handle initial start
    const startGame = () => dispatch({ type: 'INIT_LEVEL' });

    // Derive Next Unit Data for UI
    const nextQ = state.currentQ + 1;
    const nextMc = state.currentParams ? state.currentParams.mcFunc(nextQ, state.ownedUpgrades) : 0;
    const currentMr = state.currentParams ? state.currentParams.mr : 0;
    const projectedProfit = currentMr - nextMc;

    // --- RENDER HELPERS ---

    const renderSummaryModal = () => (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2><FaChartLine /> Fiscal Year Report</h2>
                <div className="modal-score">
                    {state.levelProfit > 0 ? '+' : ''}{formatCurrency(state.levelProfit)}
                </div>
                <p>{state.lastActionFeedback}</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
                    <button className="btn-game btn-produce" onClick={() => dispatch({ type: 'NEXT_LEVEL' })}>
                        {state.level === GAME_CONFIG.MAX_LEVELS ? 'View Final Results' : 'Next Fiscal Year'} <FaPlay />
                    </button>
                </div>
            </div>
        </div>
    );

    const renderGameOver = (victory = false) => (
        <div className="modal-overlay">
            <div className="modal-content" style={{ borderColor: victory ? 'var(--gold)' : 'var(--danger)' }}>
                <h1 style={{ color: victory ? 'var(--gold)' : 'var(--danger)' }}>
                    {victory ? 'TYCOON STATUS ACHIEVED' : 'BANKRUPTCY'}
                </h1>
                <div className="big-number">Final Cash: {formatCurrency(state.cash)}</div>
                <p>{victory ? "You mastered the Marginal Cost curve!" : "You ran out of liquidity."}</p>
                <button className="btn-game btn-produce" onClick={() => dispatch({ type: 'RESTART_GAME' })}>
                    <FaRedo /> New Game
                </button>
            </div>
        </div>
    );

    return (
        <div className="tycoon-container">
            {/* --- HEADER --- */}
            <header className="tycoon-header">
                <div className="tycoon-brand">
                    <h1><FaIndustry /> EcoTycoon <span style={{ fontSize: '0.5em', color: 'var(--text-muted)' }}>Alpha</span></h1>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div className="stat-badge">
                        <span style={{ color: 'var(--text-muted)' }}>YEAR</span>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{state.level} / {GAME_CONFIG.MAX_LEVELS}</div>
                    </div>
                    <div className="stat-badge">
                        <span style={{ color: 'var(--gold)' }}>LIQUID CASH</span>
                        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--gold)' }}>
                            {formatCurrency(state.cash)}
                        </div>
                    </div>
                </div>
            </header>

            <div className="tycoon-grid">

                {/* --- LEFT PANEL: STATISTICS --- */}
                <div className="panel">
                    <div className="panel-title">
                        <span>Operations Data</span>
                        <FaBolt color="var(--primary)" />
                    </div>

                    <div className="highlight-box">
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Current Production</div>
                        <div className="big-number">{state.currentQ} <span style={{ fontSize: '1rem' }}>Units</span></div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div className="stat-row">
                            <span>Market Price (MR):</span>
                            <span className="stat-val neu">{formatCurrency(currentMr)}</span>
                        </div>
                        <div className="stat-row">
                            <span>Next Unit Cost (MC):</span>
                            <span className="stat-val neg" style={{ color: nextMc > currentMr ? 'var(--danger)' : 'var(--text-main)' }}>
                                {formatCurrency(nextMc)}
                            </span>
                        </div>
                        <hr style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                        <div className="stat-row">
                            <span>Unit Net Profit:</span>
                            <span className={`stat-val ${projectedProfit >= 0 ? 'pos' : 'neg'}`}>
                                {formatCurrency(projectedProfit)}
                            </span>
                        </div>
                    </div>

                    <div className="highlight-box" style={{ marginTop: '20px', background: state.levelProfit >= 0 ? 'rgba(0,255,157,0.05)' : 'rgba(255,71,87,0.05)' }}>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Yearly Net Profit</div>
                        <div className={`big-number ${state.levelProfit >= 0 ? 'pos' : 'neg'}`} style={{ fontSize: '1.5rem' }}>
                            {formatCurrency(state.levelProfit)}
                        </div>
                        <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>Includes Fixed Costs: {formatCurrency(state.currentParams?.fixedCost || 0)}</div>
                    </div>
                </div>

                {/* --- CENTER PANEL: GAME VISUALS --- */}
                <div className="panel">
                    <div className="panel-title">
                        <span>Production Frontier Analysis</span>
                        <FaChartLine />
                    </div>

                    {state.gameState === 'START' && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <h3>Fiscal Year {state.level} Ready</h3>
                            <p style={{ maxWidth: '300px', textAlign: 'center', color: 'var(--text-muted)' }}>
                                Market conditions have changed. Analyze the new Marginal Revenue and Cost curves.
                            </p>
                            <button className="btn-game btn-produce" onClick={startGame}>
                                <FaPlay /> Start Production
                            </button>
                        </div>
                    )}

                    {(state.gameState === 'PLAYING' || state.gameState === 'LEVEL_SUMMARY') && (
                        <>
                            <ChartDisplay
                                history={state.history}
                                nextMc={nextMc}
                                mr={currentMr}
                                config={GAME_CONFIG}
                            />

                            <div className="control-deck">
                                <button
                                    className="btn-game btn-produce"
                                    onClick={() => dispatch({ type: 'PRODUCE_UNIT' })}
                                    disabled={state.gameState !== 'PLAYING'}
                                >
                                    <FaIndustry /> Produce Unit {nextQ}
                                </button>
                                <button
                                    className="btn-game btn-stop"
                                    onClick={() => dispatch({ type: 'STOP_PRODUCTION' })}
                                    disabled={state.gameState !== 'PLAYING'}
                                >
                                    <FaStop /> Stop Line
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* --- RIGHT PANEL: LOGS & UPGRADES --- */}
                <div className="panel">
                    <div className="panel-title">
                        <span>System Logs</span>
                        <FaHistory />
                    </div>
                    <div className="terminal-window" ref={terminalRef}>
                        {state.logs.map(log => (
                            <div key={log.id} className={`log-entry ${log.type}`}>
                                <span style={{ opacity: 0.5, marginRight: '5px' }}>[{new Date(log.id).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                                {log.text}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                        <div className="panel-title">
                            <span>Tech Acquisitions</span>
                            <FaShoppingCart />
                        </div>
                        <div style={{ overflowY: 'auto', flexGrow: 1 }}>
                            {UPGRADES.map(upgrade => {
                                const isOwned = state.ownedUpgrades.includes(upgrade.id);
                                const canAfford = state.cash >= upgrade.cost;

                                return (
                                    <div
                                        key={upgrade.id}
                                        className={`shop-item ${isOwned || !canAfford ? 'locked' : ''}`}
                                        onClick={() => !isOwned && canAfford && dispatch({ type: 'BUY_UPGRADE', payload: upgrade.id })}
                                    >
                                        <div className="shop-header">
                                            <span style={{ fontWeight: 'bold', color: isOwned ? 'var(--success)' : 'inherit' }}>
                                                {isOwned ? <FaUnlock /> : <FaLock />} {upgrade.name}
                                            </span>
                                            <span className="shop-cost">{isOwned ? 'OWNED' : `₹${upgrade.cost}`}</span>
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{upgrade.desc}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MODALS --- */}
            {state.gameState === 'LEVEL_SUMMARY' && renderSummaryModal()}
            {state.gameState === 'GAME_OVER' && renderGameOver(false)}
            {state.gameState === 'VICTORY' && renderGameOver(true)}

        </div>
    );
};

export default EcoTycoon;