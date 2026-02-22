import React, { useReducer, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaArrowLeft, FaChartLine, FaBalanceScale, FaPlay, FaPause,
    FaStepForward, FaGlobeAmericas, FaBolt, FaQuestionCircle, FaTimes
} from 'react-icons/fa';

import './MarketMaker.css';
import { gameReducer, INITIAL_STATE } from './Engine/gameLogic';
import AdvancedChart from './Components/AdvancedChart';
import TradingTerminal from './Components/TradingTerminal';

export default function MarketMaker() {

    const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const [showRules, setShowRules] = React.useState(true); // Show by default on first load
    const tickerInterval = useRef(null);

    // Initialize market exact equilibrium on mount
    useEffect(() => {
        dispatch({ type: 'INIT_MARKET' });
    }, []);

    // Core Game Tick Loop
    useEffect(() => {
        if (gameState.isSimulationRunning) {
            tickerInterval.current = setInterval(() => {
                dispatch({ type: 'MARKET_TICK' });

                // 5% chance of a random market shock every tick if running
                if (Math.random() < 0.05) {
                    dispatch({ type: 'TRIGGER_EVENT' });
                }

            }, 1000); // 1 tick per second real-time
        } else {
            clearInterval(tickerInterval.current);
        }

        return () => clearInterval(tickerInterval.current);
    }, [gameState.isSimulationRunning]);

    // Handle end of continuous run
    useEffect(() => {
        if (gameState.day > gameState.maxDays) {
            dispatch({ type: 'TOGGLE_SIMULATION', payload: false });
            // TODO: Trigger Game Over Screen
        }
    }, [gameState.day, gameState.maxDays]);

    const toggleSimulation = () => {
        dispatch({ type: 'TOGGLE_SIMULATION', payload: !gameState.isSimulationRunning });
    };

    const nextDay = () => {
        dispatch({ type: 'END_DAY' });
    };

    // Calculate daily delta
    const priceDelta = gameState.currentMarketPrice - gameState.dayStartPrice;
    const isPositive = priceDelta >= 0;

    return (
        <div className="mm-game-container">
            {/* Ambient Background */}
            <div className="mm-bg-grid" />

            {/* Top Navigation & Status Bar */}
            <header className="mm-header">
                <Link to="/games" className="mm-back-btn">
                    <FaArrowLeft /> EXIT SIMULATION
                </Link>

                <div className="mm-title-wrapper">
                    <FaGlobalization className="mm-title-icon" />
                    <h1>MARKET MAKER <span className="mm-version">PRO</span></h1>
                </div>

                <div className="mm-header-stats">
                    <button className="mm-rules-trigger" onClick={() => setShowRules(true)}>
                        <FaQuestionCircle /> RULES
                    </button>
                    <div className="mm-day-counter">
                        DAY <span className="highlight">{gameState.day}</span> / {gameState.maxDays}
                        {gameState.isSimulationRunning ? (
                            <span className="live-badge pulse"><FaBolt /> LIVE</span>
                        ) : (
                            <span className="live-badge paused">PAUSED</span>
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
                            <span className="mm-box-label">Global Market Price</span>
                            <div className="mm-price-massive">
                                ₹{gameState.currentMarketPrice.toFixed(2)}
                                <span className={`mm-price-delta ${isPositive ? 'positive' : 'negative'}`}>
                                    {isPositive ? '+' : ''}{priceDelta.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Control Panel */}
                        <div className="mm-engine-controls">
                            <button
                                className={`mm-btn-sim ${gameState.isSimulationRunning ? 'active' : ''}`}
                                onClick={toggleSimulation}
                            >
                                {gameState.isSimulationRunning ? <><FaPause /> HALT TRADING</> : <><FaPlay /> COMMENCE TRADING</>}
                            </button>
                            <button className="mm-btn-day" onClick={nextDay} disabled={gameState.isSimulationRunning}>
                                <FaStepForward /> ADVANCE TIMELINE
                            </button>
                        </div>
                    </div>

                    {/* BREAKING NEWS TICKER (Moved inside Dashboard) */}
                    <div className="mm-news-ticker-container in-dashboard">
                        <div className="mm-news-label pulse-alert">ALERT</div>
                        <div className="mm-news-scroll-wrapper">
                            <motion.div
                                className="mm-news-text"
                                key={gameState.newsTicker}
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 50 }}
                            >
                                {gameState.newsTicker}
                            </motion.div>
                        </div>
                    </div>

                    {/* D3/SVG Curve Engine */}
                    <div className="mm-chart-container">
                        <AdvancedChart market={gameState.market} currentMarketPrice={gameState.currentMarketPrice} />
                    </div>
                </section>

                {/* RIGHT COL: TRADING TERMINAL */}
                <aside className="mm-terminal-section">
                    <TradingTerminal state={gameState} dispatch={dispatch} />
                </aside>

            </main>

            {/* INSTRUCTIONS MODAL */}
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
                            <h2><FaBalanceScale /> HOW TO PLAY: MARKET MAKER</h2>
                            <div className="mm-rules-content">
                                <section>
                                    <h4>1. The Objective</h4>
                                    <p>You are a Market Maker. Your goal is to provide liquidity by buying low and selling high. You profit from the difference (the spread).</p>
                                </section>
                                <section>
                                    <h4>2. Setting Orders</h4>
                                    <p>Use the <strong>Trading Desk</strong> to set your <strong>Bid</strong> (Max price you'll buy at) and <strong>Ask</strong> (Min price you'll sell at). You can also set the <strong>Quantity</strong> to trade per tick.</p>
                                </section>
                                <section>
                                    <h4>3. Market Ticks</h4>
                                    <p>Once you press <strong>Commence Trading</strong>, the market price fluctuates based on Supply and Demand. If the price hits your Bid, you buy. If it hits your Ask, you sell.</p>
                                </section>
                                <section>
                                    <h4>4. Economic Shocks</h4>
                                    <p>Watch the <strong>Breaking News Ticker</strong>. Viral trends shift Demand, while factory breakthroughs shift Supply. Adapt your prices immediately to stay profitable!</p>
                                </section>
                            </div>
                            <button className="mm-modal-start-btn" onClick={() => setShowRules(false)}>
                                UNDERSTOOD, LET'S TRADE
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const FaGlobalization = () => <FaGlobeAmericas />;
