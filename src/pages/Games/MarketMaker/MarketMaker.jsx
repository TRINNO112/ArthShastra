import React, { useReducer, useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaArrowLeft, FaPlay, FaPause,
    FaStore, FaBolt, FaQuestionCircle, FaTimes,
    FaCoins, FaClock, FaPencilAlt, FaCheck, FaTrophy
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

const GAME_DURATION = 8 * 60; // 8 minutes in seconds

export default function MarketMaker() {

    const [gameState, dispatch] = useReducer(gameReducer, INITIAL_STATE);
    const [showRules, setShowRules] = useState(false);
    const [floatingText, setFloatingText] = useState(null);
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
    const [gameOver, setGameOver] = useState(false);
    const [shopName, setShopName] = useState('YOUR SHOP');
    const [editingName, setEditingName] = useState(false);
    const [nameInput, setNameInput] = useState('YOUR SHOP');

    const tickerInterval = useRef(null);
    const timerInterval = useRef(null);
    const prevLastTradeType = useRef(null);
    const nameInputRef = useRef(null);

    useEffect(() => {
        dispatch({ type: 'INIT_MARKET' });
    }, []);

    // Market tick every second
    useEffect(() => {
        if (gameState.isSimulationRunning && !gameOver) {
            tickerInterval.current = setInterval(() => {
                dispatch({ type: 'MARKET_TICK' });

                // News event ~6% chance per tick
                if (Math.random() < 0.06) {
                    dispatch({ type: 'TRIGGER_EVENT' });
                }

                // Rival shopkeeper acts ~12% chance per tick
                if (Math.random() < 0.12) {
                    dispatch({ type: 'RIVAL_TICK' });
                }

                // Market crash: ~0.8% per tick, but only if 60+ ticks since last crash
                if (
                    Math.random() < 0.008 &&
                    gameState.tickCount - gameState.lastCrashTick > 60
                ) {
                    dispatch({ type: 'MARKET_CRASH' });
                }

                // Black market: ~1.5% per tick to spawn (when not already up)
                if (!gameState.blackMarket.available && Math.random() < 0.015) {
                    dispatch({ type: 'SPAWN_BLACK_MARKET' });
                }

                // Expire black market if past its tick window
                if (
                    gameState.blackMarket.available &&
                    gameState.tickCount >= gameState.blackMarket.expiresAt
                ) {
                    dispatch({ type: 'EXPIRE_BLACK_MARKET' });
                }
            }, 1000);
        } else {
            clearInterval(tickerInterval.current);
        }
        return () => clearInterval(tickerInterval.current);
    }, [gameState.isSimulationRunning, gameOver, gameState.tickCount, gameState.lastCrashTick, gameState.blackMarket.available, gameState.blackMarket.expiresAt]);

    // Countdown timer — only ticks when shop is open
    useEffect(() => {
        if (gameState.isSimulationRunning && !gameOver) {
            timerInterval.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerInterval.current);
                        dispatch({ type: 'TOGGLE_SIMULATION', payload: false });
                        setGameOver(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerInterval.current);
        }
        return () => clearInterval(timerInterval.current);
    }, [gameState.isSimulationRunning, gameOver]);

    // Floating cash popup on trade
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
        if (gameOver) return;
        dispatch({ type: 'TOGGLE_SIMULATION', payload: !gameState.isSimulationRunning });
    };

    const handleRestartGame = () => {
        setTimeLeft(GAME_DURATION);
        setGameOver(false);
        dispatch({ type: 'INIT_MARKET' });
    };

    // Shop name easter egg
    const handleNameClick = () => {
        setNameInput(shopName);
        setEditingName(true);
        setTimeout(() => nameInputRef.current?.focus(), 50);
    };

    const handleNameSave = () => {
        const trimmed = nameInput.trim();
        if (trimmed.length > 0) setShopName(trimmed.toUpperCase());
        setEditingName(false);
    };

    const handleNameKeyDown = (e) => {
        if (e.key === 'Enter') handleNameSave();
        if (e.key === 'Escape') setEditingName(false);
    };

    // Timer display
    const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const secs = String(timeLeft % 60).padStart(2, '0');
    const timerFraction = timeLeft / GAME_DURATION;
    const timerUrgent = timeLeft <= 60;

    const priceDelta = gameState.currentMarketPrice - gameState.dayStartPrice;
    const isPositive = priceDelta >= 0;
    const currentNews = gameState.newsTicker;
    const severityStyle = currentNews ? SEVERITY_CONFIG[currentNews.severity] || SEVERITY_CONFIG.low : SEVERITY_CONFIG.low;
    const qd = Math.max(0, gameState.market.maxDemand - gameState.market.demandSlope * gameState.currentMarketPrice);
    const qs = Math.max(0, gameState.market.minSupply + gameState.market.supplySlope * gameState.currentMarketPrice);
    const excessDemand = qd - qs;

    // Score calculation
    const startingWealth = INITIAL_STATE.cash;
    const finalWealth = gameState.portfolioValue;
    const profit = finalWealth - startingWealth;
    const grade = profit >= 5000 ? 'A+' : profit >= 2000 ? 'A' : profit >= 0 ? 'B' : 'C';

    return (
        <div className="mm-game-container">
            <div className="mm-bg-grid" />

            {/* Floating cash popup */}
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

            {/* Header */}
            <header className="mm-header">
                <Link to="/games" className="mm-back-btn">
                    <FaArrowLeft /> BACK
                </Link>

                <div className="mm-title-wrapper">
                    <FaStore className="mm-title-icon" />
                    <div>
                        {/* Easter egg: click to rename */}
                        {editingName ? (
                            <div className="mm-name-edit-row">
                                <input
                                    ref={nameInputRef}
                                    className="mm-name-input"
                                    value={nameInput}
                                    onChange={e => setNameInput(e.target.value)}
                                    onKeyDown={handleNameKeyDown}
                                    maxLength={24}
                                />
                                <button className="mm-name-save-btn" onClick={handleNameSave}><FaCheck /></button>
                            </div>
                        ) : (
                            <h1 className="mm-shop-name-btn" onClick={handleNameClick} title="Click to rename your shop">
                                {shopName.includes(' ') ? (
                                    <>
                                        {shopName.split(' ').slice(0, -1).join(' ')}{' '}
                                        <span className="mm-title-accent">{shopName.split(' ').slice(-1)}</span>
                                    </>
                                ) : (
                                    <span className="mm-title-accent">{shopName}</span>
                                )}
                                <FaPencilAlt className="mm-name-pencil" />
                            </h1>
                        )}
                        <span className="mm-title-sub">Supply & Demand Simulator</span>
                    </div>
                </div>

                <div className="mm-header-stats">
                    <button className="mm-rules-trigger" onClick={() => setShowRules(true)}>
                        <FaQuestionCircle /> HOW TO PLAY
                    </button>

                    {/* Timer */}
                    <div className={`mm-timer-display ${timerUrgent ? 'urgent' : ''}`}>
                        <FaClock />
                        <span className="mm-timer-digits">{mins}:{secs}</span>
                        <div className="mm-timer-bar">
                            <div className="mm-timer-fill" style={{ width: `${timerFraction * 100}%`, background: timerUrgent ? '#ef4444' : '#4cc9f0' }} />
                        </div>
                        {gameState.isSimulationRunning
                            ? <span className="live-badge pulse"><FaBolt /> OPEN</span>
                            : gameOver
                            ? <span className="live-badge ended">ENDED</span>
                            : <span className="live-badge paused">CLOSED</span>
                        }
                    </div>
                </div>
            </header>

            <main className="mm-main-grid">

                {/* LEFT COL */}
                <section className="mm-chart-section">

                    {/* Market Status */}
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
                                Fair price (equilibrium): <strong>₹{gameState.market.currentEquilibriumPrice.toFixed(2)}</strong>
                            </span>
                        </div>

                        <div className="mm-engine-controls">
                            <button
                                className={`mm-btn-sim ${gameState.isSimulationRunning ? 'active' : ''}`}
                                onClick={toggleSimulation}
                                disabled={gameOver}
                            >
                                {gameState.isSimulationRunning
                                    ? <><FaPause /> CLOSE SHOP</>
                                    : <><FaPlay /> OPEN SHOP</>}
                            </button>
                        </div>
                    </div>

                    {/* Strategy Banner */}
                    <div className="mm-margin-banner positive">
                        <FaCoins /> Strategy: <strong>Buy</strong> when price is <strong>low</strong>, <strong>Sell</strong> when it is <strong>high</strong>. React to news events to stay ahead!
                    </div>

                    {/* Indicators */}
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

                    {/* News Card */}
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

                    {/* Chart */}
                    <div className="mm-chart-container">
                        <AdvancedChart
                            market={gameState.market}
                            currentMarketPrice={gameState.currentMarketPrice}
                            lastTradeTime={gameState.tradeHistory[0]?.time}
                        />
                    </div>
                </section>

                {/* RIGHT COL */}
                <aside className="mm-terminal-section">
                    <TradingTerminal state={gameState} dispatch={dispatch} gameOver={gameOver} />
                </aside>

            </main>

            {/* GAME OVER SCREEN */}
            <AnimatePresence>
                {gameOver && (
                    <motion.div
                        className="mm-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="mm-gameover-modal"
                            initial={{ scale: 0.8, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 180 }}
                        >
                            <div className="mm-go-scroll-area">
                                <div className="mm-go-icon"><FaTrophy /></div>
                                <h2 className="mm-go-title">TIME'S UP!</h2>
                                <p className="mm-go-shop">{shopName} has closed for the day.</p>

                                <div className="mm-go-stats">
                                    <div className="mm-go-stat">
                                        <span className="mm-go-stat-label">Starting Cash</span>
                                        <span className="mm-go-stat-value">₹{startingWealth.toLocaleString('en-IN')}</span>
                                    </div>
                                    <div className="mm-go-stat">
                                        <span className="mm-go-stat-label">Final Wealth</span>
                                        <span className="mm-go-stat-value highlight">₹{finalWealth.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                    </div>
                                    <div className="mm-go-stat">
                                        <span className="mm-go-stat-label">Net Profit / Loss</span>
                                        <span className={`mm-go-stat-value ${profit >= 0 ? 'green' : 'red'}`}>
                                            {profit >= 0 ? '+' : ''}₹{profit.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                    <div className="mm-go-stat">
                                        <span className="mm-go-stat-label">Units Bought</span>
                                        <span className="mm-go-stat-value">{gameState.totalBought}</span>
                                    </div>
                                    <div className="mm-go-stat">
                                        <span className="mm-go-stat-label">Units Sold</span>
                                        <span className="mm-go-stat-value">{gameState.totalSold}</span>
                                    </div>
                                    <div className="mm-go-grade">
                                        <span>Grade</span>
                                        <span className={`mm-go-grade-value grade-${grade.replace('+', 'plus')}`}>{grade}</span>
                                    </div>
                                </div>

                                <div className="mm-go-grade-guide">
                                    <span>A+: profit ≥ ₹5,000</span>
                                    <span>A: ≥ ₹2,000</span>
                                    <span>B: ≥ ₹0</span>
                                    <span>C: loss</span>
                                </div>
                            </div>

                            <div className="mm-go-actions mm-go-sticky-actions">
                                <button className="mm-modal-start-btn" onClick={handleRestartGame}>
                                    PLAY AGAIN
                                </button>
                                <Link to="/games" className="mm-go-back-link">← Back to Games</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                                        <p>You own a shop. You buy goods from suppliers at a low price and sell them to customers at a higher price. Your profit is the difference!</p>
                                    </section>
                                    <section>
                                        <h4>⏱️ Time Limit</h4>
                                        <p>You have <strong>5 minutes</strong>. Press <strong>OPEN SHOP</strong> to start the timer. The market price will keep moving — buy and sell as many times as you can!</p>
                                    </section>
                                    <section>
                                        <h4>📦 How to Buy</h4>
                                        <p>Set a quantity, then press <strong>BUY FROM SUPPLIER</strong>. Your cash goes DOWN and your stock goes UP. The cost shown on the button is the exact amount you'll pay.</p>
                                    </section>
                                    <section>
                                        <h4>🛒 How to Sell</h4>
                                        <p>When price is higher than what you paid, press <strong>SELL TO CUSTOMERS</strong>. Your cash goes UP and your stock goes DOWN.</p>
                                    </section>
                                    <section>
                                        <h4>📊 The Chart</h4>
                                        <p>The <span style={{ color: '#ef4444' }}>red line</span> is customer demand — it slopes down (higher price = fewer buyers). The <span style={{ color: '#10b981' }}>green line</span> is supplier supply — it slopes up (higher price = more sellers). Where they cross is the <strong>fair equilibrium price</strong>.</p>
                                    </section>
                                    <section>
                                        <h4>📰 News Events</h4>
                                        <p>Events shift the curves — a festival raises demand, a factory shutdown reduces supply. Read each event and adjust your strategy!</p>
                                    </section>
                                    <section>
                                        <h4>🏆 Grading</h4>
                                        <p>A+: profit ≥ ₹5,000 &nbsp;|&nbsp; A: ≥ ₹2,000 &nbsp;|&nbsp; B: break-even &nbsp;|&nbsp; C: made a loss</p>
                                    </section>
                                </div>
                            </div>
                            <div className="mm-modal-sticky-cta">
                                <button className="mm-modal-start-btn" onClick={() => setShowRules(false)}>
                                    GOT IT — OPEN THE SHOP!
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
