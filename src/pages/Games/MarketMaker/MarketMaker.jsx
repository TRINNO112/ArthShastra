import React, { useReducer, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaArrowLeft, FaChartLine, FaBalanceScale, FaPlay, FaPause,
    FaStepForward, FaStore, FaBolt, FaQuestionCircle, FaTimes,
    FaExclamationTriangle, FaCoins, FaBoxOpen
} from 'react-icons/fa';

import './MarketMaker.css';
import { gameReducer, INITIAL_STATE } from './Engine/gameLogic';
import AdvancedChart from './Components/AdvancedChart';
import TradingTerminal from './Components/TradingTerminal';

const SEVERITY_CONFIG = {
    high: { color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.4)', label: 'BIG IMPACT' },
    medium: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.4)', label: 'MODERATE' },
    low: { color: '#3b82f6', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.4)', label: 'SMALL' },
};

export default function MarketMaker() {

    const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const [showRules, setShowRules] = React.useState(false);
    const [floatingText, setFloatingText] = useState(null);
    const tickerInterval = useRef(null);
    const prevCash = useRef(INITIAL_STATE.cash);
    const prevLastTradeType = useRef(null);

    useEffect(() => {
        dispatch({ type: 'INIT_MARKET' });
    }, []);

    // Core Game Tick Loop
    useEffect(() => {
        if (gameState.isSimulationRunning) {
            tickerInterval.current = setInterval(() => {
                dispatch({ type: 'MARKET_TICK' });

                if (Math.random() < 0.05) {
                    dispatch({ type: 'TRIGGER_EVENT' });
                }
            }, 1000);
        } else {
            clearInterval(tickerInterval.current);
        }

        return () => clearInterval(tickerInterval.current);
    }, [gameState.isSimulationRunning]);

    useEffect(() => {
        if (gameState.day > gameState.maxDays) {
            dispatch({ type: 'TOGGLE_SIMULATION', payload: false });
        }
    }, [gameState.day, gameState.maxDays]);

    // Show floating cash delta on trade
    useEffect(() => {
        if (
            gameState.lastTradeType &&
            gameState.lastTradeType !== prevLastTradeType.current &&
            gameState.lastTradeDelta !== 0
        ) {
            const delta = gameState.lastTradeDelta;
            setFloatingText({ value: delta, id: Date.now() });
            prevLastTradeType.current = gameState.lastTradeType;
            const t = setTimeout(() => setFloatingText(null), 1400);
            return () => clearTimeout(t);
        }
    }, [gameState.lastTradeType, gameState.lastTradeDelta]);

    const toggleSimulation = () => {
        dispatch({ type: 'TOGGLE_SIMULATION', payload: !gameState.isSimulationRunning });
    };

    const nextDay = () => {
        dispatch({ type: 'END_DAY' });
    };

    const priceDelta = gameState.currentMarketPrice - gameState.dayStartPrice;
    const isPositive = priceDelta >= 0;

    const currentNews = gameState.newsTicker;
    const severityStyle = currentNews ? SEVERITY_CONFIG[currentNews.severity] || SEVERITY_CONFIG.low : SEVERITY_CONFIG.low;

    // Market indicators
    const spread = gameState.orders.askPrice - gameState.orders.bidPrice;
    const qd = Math.max(0, gameState.market.maxDemand - gameState.market.demandSlope * gameState.currentMarketPrice);
    const qs = Math.max(0, gameState.market.minSupply + gameState.market.supplySlope * gameState.currentMarketPrice);
    const excessDemand = qd - qs;

    const isSpreadPositive = spread > 0;

    return (
        <div className="mm-game-container">
            <div className="mm-bg-grid" />

            {/* Floating cash delta popup */}
            <AnimatePresence>
                {floatingText && (
                    <motion.div
                        key={floatingText.id}
                        className={`mm-float-delta ${floatingText.value > 0 ? 'positive' : 'negative'}`}
                        initial={{ opacity: 1, y: 0, scale: 1 }}
                        animate={{ opacity: 0, y: -80, scale: 1.3 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.3, ease: 'easeOut' }}
                    >
                        {floatingText.value > 0 ? '+' : ''}₹{Math.abs(floatingText.value).toFixed(0)}
                        {floatingText.value > 0 ? ' 💰 SOLD!' : ' 📦 BOUGHT!'}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Navigation */}
            <header className="mm-header">
                <Link to="/games" className="mm-back-btn">
                    <FaArrowLeft /> BACK
                </Link>

                <div className="mm-title-wrapper">
                    <FaStore className="mm-title-icon" />
                    <div>
                        <h1>YOUR <span className="mm-title-accent">SHOP</span></h1>
                        <span className="mm-title-sub">Supply & Demand Simulator</span>
                    </div>
                </div>

                <div className="mm-header-stats">
                    <button className="mm-rules-trigger" onClick={() => setShowRules(true)}>
                        <FaQuestionCircle /> HOW TO PLAY
                    </button>
                    <div className="mm-day-counter">
                        DAY <span className="highlight">{gameState.day}</span> / {gameState.maxDays}
                        {gameState.isSimulationRunning ? (
                            <span className="live-badge pulse"><FaBolt /> OPEN</span>
                        ) : (
                            <span className="live-badge paused">CLOSED</span>
                        )}
                    </div>
                </div>
            </header>

            <main className="mm-main-grid">

                {/* LEFT COL: CHART & OVERVIEW */}
                <section className="mm-chart-section">

                    {/* Market Status Dashboard */}
                    <div className="mm-market-status-row">
                        <div className="mm-market-price-box">
                            <span className="mm-box-label">Current Market Price</span>
                            <div className="mm-price-massive">
                                ₹{gameState.currentMarketPrice.toFixed(2)}
                                <span className={`mm-price-delta ${isPositive ? 'positive' : 'negative'}`}>
                                    {isPositive ? '▲' : '▼'} {isPositive ? '+' : ''}{priceDelta.toFixed(2)}
                                </span>
                            </div>
                            <span className="mm-price-hint">
                                Equilibrium: <strong>₹{gameState.market.currentEquilibriumPrice.toFixed(2)}</strong>
                            </span>
                        </div>

                        <div className="mm-engine-controls">
                            <button
                                className={`mm-btn-sim ${gameState.isSimulationRunning ? 'active' : ''}`}
                                onClick={toggleSimulation}
                            >
                                {gameState.isSimulationRunning
                                    ? <><FaPause /> CLOSE SHOP</>
                                    : <><FaPlay /> OPEN SHOP</>}
                            </button>
                            <button className="mm-btn-day" onClick={nextDay} disabled={gameState.isSimulationRunning}>
                                <FaStepForward /> NEXT DAY
                            </button>
                        </div>
                    </div>

                    {/* Profit Margin Banner */}
                    <div className={`mm-margin-banner ${isSpreadPositive ? 'positive' : 'warning'}`}>
                        {isSpreadPositive ? (
                            <>
                                <FaCoins /> Your profit margin per unit: <strong>₹{spread.toFixed(2)}</strong>
                                &nbsp;(Buy @ ₹{gameState.orders.bidPrice} → Sell @ ₹{gameState.orders.askPrice})
                            </>
                        ) : (
                            <>
                                <FaExclamationTriangle /> WARNING: Your sell price is lower than your buy price! You will lose money on every sale.
                            </>
                        )}
                    </div>

                    {/* Market Indicators Row */}
                    <div className="mm-indicators-row">
                        <div className="mm-indicator-card">
                            <span className="mm-indicator-label">Customer Demand</span>
                            <span className="mm-indicator-value demand-color">{qd.toFixed(0)} units</span>
                        </div>
                        <div className="mm-indicator-card">
                            <span className="mm-indicator-label">Supplier Supply</span>
                            <span className="mm-indicator-value supply-color">{qs.toFixed(0)} units</span>
                        </div>
                        <div className="mm-indicator-card">
                            <span className="mm-indicator-label">Fair Price</span>
                            <span className="mm-indicator-value eq-color">₹{gameState.market.currentEquilibriumPrice.toFixed(2)}</span>
                        </div>
                        <div className="mm-indicator-card">
                            <span className="mm-indicator-label">Market Mood</span>
                            <span className={`mm-indicator-value ${excessDemand > 0 ? 'demand-color' : 'supply-color'}`}>
                                {excessDemand > 0 ? '📈 High Demand' : '📉 Oversupply'}
                            </span>
                        </div>
                    </div>

                    {/* NEWS CARD */}
                    <AnimatePresence mode="wait">
                        {currentNews && (
                            <motion.div
                                className="mm-news-card"
                                key={currentNews.title + (currentNews.timestamp || '')}
                                style={{ borderLeftColor: severityStyle.color }}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mm-news-card-icon">{currentNews.icon}</div>
                                <div className="mm-news-card-body">
                                    <div className="mm-news-card-top">
                                        <span className="mm-news-card-category">{currentNews.category}</span>
                                        <span
                                            className="mm-news-card-severity"
                                            style={{ color: severityStyle.color, background: severityStyle.bg, borderColor: severityStyle.border }}
                                        >
                                            {severityStyle.label}
                                        </span>
                                    </div>
                                    <h4 className="mm-news-card-title">{currentNews.title}</h4>
                                    <p className="mm-news-card-desc">{currentNews.desc}</p>
                                    {currentNews.shopEffect && (
                                        <p className="mm-news-card-effect">{currentNews.shopEffect}</p>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* SUPPLY/DEMAND CHART */}
                    <div className="mm-chart-container">
                        <AdvancedChart
                            market={gameState.market}
                            currentMarketPrice={gameState.currentMarketPrice}
                            lastTradeTime={gameState.tradeHistory[0]?.time}
                        />
                    </div>
                </section>

                {/* RIGHT COL: SHOP COUNTER */}
                <aside className="mm-terminal-section">
                    <TradingTerminal state={gameState} dispatch={dispatch} />
                </aside>

            </main>

            {/* HOW TO PLAY MODAL */}
            <AnimatePresence>
                {showRules && (
                    <motion.div
                        className="mm-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="mm-rules-modal"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                        >
                            <button className="mm-modal-close" onClick={() => setShowRules(false)}>
                                <FaTimes />
                            </button>

                            <div className="mm-rules-scroll-area">
                                <h2><FaStore /> HOW YOUR SHOP WORKS</h2>
                                <div className="mm-rules-content">
                                    <section>
                                        <h4>🏪 Your Role</h4>
                                        <p>You own a shop. You buy goods from suppliers at a low price, store them, and sell them to customers at a higher price. Your profit is the difference!</p>
                                    </section>
                                    <section>
                                        <h4>📦 Buying from Suppliers</h4>
                                        <p>Set your <strong>Supplier Buy Price</strong> — the maximum you'll pay per unit. When the market price drops to your buy price, your supplier automatically delivers goods and your <strong>cash goes down</strong> (you paid them) but your <strong>stock goes up</strong>.</p>
                                    </section>
                                    <section>
                                        <h4>🛒 Selling to Customers</h4>
                                        <p>Set your <strong>Customer Sell Price</strong> — the minimum price you'll charge. When customers want to pay that price, they buy from you automatically — your <strong>cash goes up</strong> but your <strong>stock goes down</strong>.</p>
                                    </section>
                                    <section>
                                        <h4>💡 The Key Rule</h4>
                                        <p>Your <strong>Sell Price must always be HIGHER than your Buy Price</strong> to make profit. If you buy at ₹28 and sell at ₹35, you earn ₹7 per unit. That's your profit margin!</p>
                                    </section>
                                    <section>
                                        <h4>📰 Watch the News</h4>
                                        <p>Real-world events shift how much customers want to buy and how much suppliers can provide. A <strong>festival</strong> means more customers (raise your sell price!). A <strong>factory shutdown</strong> means fewer goods (suppliers may charge more).</p>
                                    </section>
                                    <section>
                                        <h4>📊 The Supply-Demand Chart</h4>
                                        <p>The <span style={{ color: '#ef4444' }}>red line</span> shows how much customers want to buy at each price. The <span style={{ color: '#10b981' }}>green line</span> shows how much suppliers will provide. Where they cross is the <strong>fair market price</strong>.</p>
                                    </section>
                                    <section>
                                        <h4>🏆 How to Win</h4>
                                        <p>Maximize your total wealth (Cash + Stock Value) over 30 days. Set smart prices, react to news, and keep your shop profitable!</p>
                                    </section>
                                </div>
                            </div>

                            <div className="mm-modal-sticky-cta">
                                <button className="mm-modal-start-btn" onClick={() => setShowRules(false)}>
                                    GOT IT — LET'S OPEN THE SHOP!
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
