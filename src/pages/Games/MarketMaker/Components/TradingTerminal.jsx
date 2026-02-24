import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaMoneyBillWave, FaWarehouse, FaChartBar,
    FaStore, FaTruck, FaUsers, FaExclamationCircle,
    FaArrowUp, FaBrain, FaUniversity, FaCheckCircle
} from 'react-icons/fa';

export default function TradingTerminal({ state, dispatch, gameOver }) {

    const [localQty, setLocalQty] = useState(state.tradeQty);
    const [flashCash, setFlashCash] = useState(null); // 'up' | 'down' | null
    const [bmTimer, setBmTimer] = useState(0);
    const prevCash = React.useRef(state.cash);

    // Sync qty input if state changes externally
    useEffect(() => {
        setLocalQty(state.tradeQty);
    }, [state.tradeQty]);

    // Flash cash box when cash changes
    useEffect(() => {
        if (state.cash !== prevCash.current) {
            setFlashCash(state.cash > prevCash.current ? 'up' : 'down');
            prevCash.current = state.cash;
            const t = setTimeout(() => setFlashCash(null), 800);
            return () => clearTimeout(t);
        }
    }, [state.cash]);

    // Live countdown for black market button
    useEffect(() => {
        if (!state.blackMarket.available) return;
        const remaining = Math.max(0, state.blackMarket.expiresAt - state.tickCount);
        setBmTimer(remaining);
    }, [state.blackMarket.available, state.blackMarket.expiresAt, state.tickCount]);

    const handleQtyChange = (val) => {
        const n = parseInt(val);
        setLocalQty(val);
        if (!isNaN(n) && n > 0) {
            dispatch({ type: 'UPDATE_QTY', payload: n });
        }
    };

    const handleBuy = () => dispatch({ type: 'MANUAL_BUY' });
    const handleSell = () => dispatch({ type: 'MANUAL_SELL' });
    const handleUpgrade = (upgradeType, cost) => dispatch({ type: 'BUY_UPGRADE', payload: { type: upgradeType, cost } });
    const handleTakeLoan = () => dispatch({ type: 'TAKE_LOAN' });
    const handleRepayLoan = () => dispatch({ type: 'REPAY_LOAN' });
    const handleBlackMarket = () => dispatch({ type: 'BLACK_MARKET_BUY' });

    const WAREHOUSE_COST = 2000 * state.upgrades.warehouseLvl;
    const INTEL_COST = 1500 * state.upgrades.marketIntelLvl;
    const MAX_UPGRADE_LVL = 5;

    const maxInv = state.upgrades.warehouseLvl * 100;
    const stockPercent = Math.min(100, (state.inventory / maxInv) * 100);
    const costPreview = parseFloat((state.tradeQty * state.currentMarketPrice).toFixed(2));
    const bmDiscountPrice = parseFloat((state.currentMarketPrice * 0.80).toFixed(2));
    const bmCostPreview = parseFloat((state.tradeQty * bmDiscountPrice).toFixed(2));
    const revenuePreview = parseFloat((Math.min(state.tradeQty, state.inventory) * state.currentMarketPrice).toFixed(2));
    const streakMultiplierPreview = state.streak.active
        ? parseFloat((Math.min(state.tradeQty, state.inventory) * state.currentMarketPrice * state.streak.multiplier).toFixed(2))
        : revenuePreview;
    const canAffordBuy = !gameOver && state.cash >= costPreview;
    const hasStockToSell = !gameOver && state.inventory > 0;
    const canAffordBM = !gameOver && state.cash >= bmCostPreview;

    return (
        <div className="mm-trading-terminal">

            {/* Header */}
            <div className="mm-terminal-header">
                <div className="mm-terminal-title-row">
                    <h3><FaStore /> SHOP DASHBOARD</h3>
                    <div className="mm-day-wealth-badge">TRADING SESSION</div>
                </div>
                <div className="mm-portfolio-value">
                    <span>Total Wealth (Cash + Stock)</span>
                    <span className="mm-value-text">
                        ₹{state.portfolioValue.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                </div>
            </div>

            {/* Cash & Stock */}
            <div className="mm-assets-row">
                <div className="mm-asset-box cash-box">
                    <span className="mm-asset-label"><FaMoneyBillWave /> Your Cash</span>
                    <span className={`mm-asset-amount mm-cash-value ${flashCash === 'up' ? 'flash-green' : flashCash === 'down' ? 'flash-red' : ''}`}>
                        ₹{state.cash.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                    <AnimatePresence mode="wait">
                        {flashCash === 'down' && (
                            <motion.span key="down" className="mm-asset-hint red"
                                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                ↓ Paid supplier
                            </motion.span>
                        )}
                        {flashCash === 'up' && (
                            <motion.span key="up" className="mm-asset-hint green"
                                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                                ↑ Customer paid you!
                            </motion.span>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mm-asset-box stock-box">
                    <span className="mm-asset-label"><FaWarehouse /> Stock in Store</span>
                    <span className="mm-asset-amount">
                        {state.inventory} <span className="mm-unit-label">/ {maxInv} units</span>
                    </span>
                    <div className="mm-stock-bar">
                        <div className="mm-stock-fill" style={{ width: `${stockPercent}%` }} />
                    </div>
                </div>
            </div>

            {/* Rival badge — shows when rival just acted */}
            <AnimatePresence>
                {state.rival.lastAction && (
                    <motion.div
                        className={`mm-rival-badge ${state.rival.lastAction === 'BUY' ? 'buying' : 'selling'}`}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {state.rival.lastAction === 'BUY'
                            ? '🏪 Rival is restocking — price nudging up!'
                            : '🏪 Rival undercutting — price nudging down!'}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* P&L Stats + Streak chip */}
            <div className="mm-stats-mini-row">
                <div className="mm-stat-chip">
                    <span className="mm-stat-chip-label">Bought</span>
                    <span className="mm-stat-chip-value buy-color">{state.totalBought}</span>
                </div>
                <div className="mm-stat-chip">
                    <span className="mm-stat-chip-label">Sold</span>
                    <span className="mm-stat-chip-value sell-color">{state.totalSold}</span>
                </div>
                <div className="mm-stat-chip">
                    <span className="mm-stat-chip-label">Net P&L</span>
                    <span className={`mm-stat-chip-value ${state.totalPnL >= 0 ? 'buy-color' : 'sell-color'}`}>
                        {state.totalPnL >= 0 ? '+' : ''}₹{Math.round(state.totalPnL)}
                    </span>
                </div>
                {state.streak.count > 0 && (
                    <motion.div
                        className={`mm-stat-chip mm-streak-chip ${state.streak.active ? 'active' : ''}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <span className="mm-stat-chip-label">Streak</span>
                        <span className="mm-streak-fire">🔥 {state.streak.count}x</span>
                        {state.streak.active && (
                            <span className="mm-streak-bonus">+{((state.streak.multiplier - 1) * 100).toFixed(0)}%</span>
                        )}
                    </motion.div>
                )}
            </div>

            {/* Error Message */}
            <AnimatePresence>
                {state.tradeError && (
                    <motion.div
                        className="mm-trade-error"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        <FaExclamationCircle /> {state.tradeError}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MANUAL TRADE CONTROLS */}
            <div className="mm-manual-trade-section">

                {/* Quantity selector */}
                <div className="mm-qty-row">
                    <span className="mm-qty-label">Qty per trade:</span>
                    <div className="mm-qty-controls">
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(Math.max(1, state.tradeQty - 10))}>−10</button>
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(Math.max(1, state.tradeQty - 5))}>−5</button>
                        <input
                            type="number"
                            className="mm-qty-input"
                            value={localQty}
                            min={1}
                            onChange={(e) => handleQtyChange(e.target.value)}
                        />
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(state.tradeQty + 5)}>+5</button>
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(state.tradeQty + 10)}>+10</button>
                    </div>
                </div>

                {/* BLACK MARKET button — secret, only when available */}
                <AnimatePresence>
                    {state.blackMarket.available && (
                        <motion.button
                            className={`mm-black-market-btn ${!canAffordBM ? 'disabled' : ''}`}
                            onClick={handleBlackMarket}
                            disabled={!canAffordBM || gameOver}
                            initial={{ opacity: 0, scale: 0.85, y: -8 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: -8 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div className="mm-bm-top">
                                <span>🕵️ BLACK MARKET DEAL</span>
                                <span className="mm-bm-countdown">{bmTimer}s</span>
                            </div>
                            <div className="mm-bm-detail">
                                {state.tradeQty} units @ ₹{bmDiscountPrice.toFixed(2)} <span className="mm-bm-discount">(20% OFF)</span>
                                {' '}= <strong>₹{bmCostPreview.toLocaleString('en-IN')}</strong>
                            </div>
                        </motion.button>
                    )}
                </AnimatePresence>

                {/* BUY Button */}
                <button
                    className={`mm-big-trade-btn buy-btn ${!canAffordBuy ? 'disabled' : ''}`}
                    onClick={handleBuy}
                    disabled={!canAffordBuy}
                >
                    <div className="mm-trade-btn-top">
                        <FaTruck /> BUY FROM SUPPLIER
                    </div>
                    <div className="mm-trade-btn-detail">
                        {state.tradeQty} units × ₹{state.currentMarketPrice.toFixed(2)} =
                        <strong> ₹{costPreview.toLocaleString('en-IN')}</strong>
                        {!canAffordBuy && <span className="mm-btn-warning"> (not enough cash)</span>}
                    </div>
                </button>

                {/* SELL Button */}
                <button
                    className={`mm-big-trade-btn sell-btn ${!hasStockToSell ? 'disabled' : ''} ${state.streak.active ? 'streak-glow' : ''}`}
                    onClick={handleSell}
                    disabled={!hasStockToSell}
                >
                    <div className="mm-trade-btn-top">
                        <FaUsers /> SELL TO CUSTOMERS
                        {state.streak.active && <span className="mm-sell-streak-tag">🔥 +{((state.streak.multiplier - 1) * 100).toFixed(0)}%</span>}
                    </div>
                    <div className="mm-trade-btn-detail">
                        {Math.min(state.tradeQty, state.inventory)} units × ₹{state.currentMarketPrice.toFixed(2)}
                        {state.streak.active
                            ? <> = <strong> +₹{streakMultiplierPreview.toLocaleString('en-IN')}</strong> <span className="mm-streak-bonus-inline">(streak bonus!)</span></>
                            : <> = <strong> +₹{revenuePreview.toLocaleString('en-IN')}</strong></>
                        }
                        {!hasStockToSell && <span className="mm-btn-warning"> (no stock)</span>}
                    </div>
                </button>
            </div>

            {/* Upgrades */}
            <div className="mm-upgrades-section">
                <h4><FaArrowUp /> SHOP UPGRADES</h4>
                <div className="mm-upgrade-list">

                    <div className="mm-upgrade-card">
                        <div className="mm-upgrade-info">
                            <span className="mm-upgrade-icon"><FaWarehouse /></span>
                            <div>
                                <span className="mm-upgrade-name">Warehouse</span>
                                <span className="mm-upgrade-desc">+100 max stock per level</span>
                            </div>
                        </div>
                        <div className="mm-upgrade-right">
                            <div className="mm-upgrade-lvl-dots">
                                {Array.from({ length: MAX_UPGRADE_LVL }).map((_, i) => (
                                    <span key={i} className={`mm-lvl-dot ${i < state.upgrades.warehouseLvl ? 'filled' : ''}`} />
                                ))}
                            </div>
                            <span className="mm-upgrade-lvl-label">Lv {state.upgrades.warehouseLvl}</span>
                            {state.upgrades.warehouseLvl < MAX_UPGRADE_LVL ? (
                                <button
                                    className={`mm-upgrade-btn ${state.cash < WAREHOUSE_COST || gameOver ? 'disabled' : ''}`}
                                    onClick={() => handleUpgrade('warehouseLvl', WAREHOUSE_COST)}
                                    disabled={state.cash < WAREHOUSE_COST || gameOver}
                                >
                                    ₹{WAREHOUSE_COST.toLocaleString('en-IN')}
                                </button>
                            ) : (
                                <span className="mm-upgrade-max">MAX</span>
                            )}
                        </div>
                    </div>

                    <div className="mm-upgrade-card">
                        <div className="mm-upgrade-info">
                            <span className="mm-upgrade-icon"><FaBrain /></span>
                            <div>
                                <span className="mm-upgrade-name">Market Intel</span>
                                <span className="mm-upgrade-desc">Reduces price volatility</span>
                            </div>
                        </div>
                        <div className="mm-upgrade-right">
                            <div className="mm-upgrade-lvl-dots">
                                {Array.from({ length: MAX_UPGRADE_LVL }).map((_, i) => (
                                    <span key={i} className={`mm-lvl-dot intel ${i < state.upgrades.marketIntelLvl ? 'filled' : ''}`} />
                                ))}
                            </div>
                            <span className="mm-upgrade-lvl-label">Lv {state.upgrades.marketIntelLvl}</span>
                            {state.upgrades.marketIntelLvl < MAX_UPGRADE_LVL ? (
                                <button
                                    className={`mm-upgrade-btn ${state.cash < INTEL_COST || gameOver ? 'disabled' : ''}`}
                                    onClick={() => handleUpgrade('marketIntelLvl', INTEL_COST)}
                                    disabled={state.cash < INTEL_COST || gameOver}
                                >
                                    ₹{INTEL_COST.toLocaleString('en-IN')}
                                </button>
                            ) : (
                                <span className="mm-upgrade-max">MAX</span>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Bank Loan Panel */}
            <div className="mm-loan-section">
                <h4><FaUniversity /> BANK LOAN</h4>
                {!state.loan.active ? (
                    <div className="mm-loan-offer">
                        <div className="mm-loan-offer-text">
                            <span className="mm-loan-amount">₹5,000</span>
                            <span className="mm-loan-terms">30% penalty if not repaid by end</span>
                        </div>
                        <button
                            className={`mm-loan-btn borrow ${gameOver ? 'disabled' : ''}`}
                            onClick={handleTakeLoan}
                            disabled={gameOver}
                        >
                            BORROW
                        </button>
                    </div>
                ) : state.loan.repaid ? (
                    <div className="mm-loan-status repaid">
                        <FaCheckCircle /> Loan repaid — no penalty!
                    </div>
                ) : (
                    <div className="mm-loan-active-row">
                        <div className="mm-loan-warning">
                            ⚠️ Loan active — repay ₹5,000 before time runs out!
                        </div>
                        <button
                            className={`mm-loan-btn repay ${state.cash < 5000 || gameOver ? 'disabled' : ''}`}
                            onClick={handleRepayLoan}
                            disabled={state.cash < 5000 || gameOver}
                        >
                            REPAY ₹5,000
                            {state.cash < 5000 && <span className="mm-loan-cant"> (need ₹5,000)</span>}
                        </button>
                    </div>
                )}
            </div>

            {/* Transaction Log */}
            <div className="mm-trade-history">
                <h4><FaChartBar /> TRANSACTION LOG</h4>
                <div className="mm-history-list">
                    {state.tradeHistory.length === 0 ? (
                        <div className="mm-history-empty">
                            <span className="mm-empty-icon">🏪</span>
                            No transactions yet. Press BUY to get started!
                        </div>
                    ) : (
                        state.tradeHistory.map((trade, i) => (
                            <motion.div
                                key={`${trade.time}-${i}`}
                                className={`mm-trade-item ${trade.type.toLowerCase()}${trade.blackMarket ? ' bm' : ''}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <span className="mm-trade-time">{trade.time}</span>
                                <span className="mm-trade-action">
                                    {trade.blackMarket
                                        ? <>🕵️ BM Buy</>
                                        : trade.type === 'BUY'
                                            ? <><FaTruck /> Bought</>
                                            : <><FaUsers /> Sold</>}
                                </span>
                                <span className="mm-trade-details">
                                    {trade.qty}× @ ₹{trade.price.toFixed(2)}
                                    <span className={`mm-trade-total ${trade.type === 'BUY' ? 'red' : 'green'}`}>
                                        {trade.type === 'BUY' ? ' −₹' : ' +₹'}{trade.total.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                    </span>
                                    {trade.bonus > 0 && <span className="mm-trade-bonus"> 🔥+{trade.bonus}%</span>}
                                </span>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
