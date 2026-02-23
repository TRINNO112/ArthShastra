import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaMoneyBillWave, FaWarehouse, FaChartBar,
    FaStore, FaTruck, FaUsers, FaExclamationCircle
} from 'react-icons/fa';

export default function TradingTerminal({ state, dispatch, gameOver }) {

    const [localQty, setLocalQty] = useState(state.tradeQty);
    const [flashCash, setFlashCash] = useState(null); // 'up' | 'down' | null
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

    const handleQtyChange = (val) => {
        const n = parseInt(val);
        setLocalQty(val);
        if (!isNaN(n) && n > 0) {
            dispatch({ type: 'UPDATE_QTY', payload: n });
        }
    };

    const handleBuy = () => {
        dispatch({ type: 'MANUAL_BUY' });
    };

    const handleSell = () => {
        dispatch({ type: 'MANUAL_SELL' });
    };

    const maxInv = state.upgrades.warehouseLvl * 100;
    const stockPercent = Math.min(100, (state.inventory / maxInv) * 100);
    const costPreview = parseFloat((state.tradeQty * state.currentMarketPrice).toFixed(2));
    const revenuePreview = parseFloat((Math.min(state.tradeQty, state.inventory) * state.currentMarketPrice).toFixed(2));
    const canAffordBuy = !gameOver && state.cash >= costPreview;
    const hasStockToSell = !gameOver && state.inventory > 0;

    return (
        <div className="mm-trading-terminal">

            {/* Header */}
            <div className="mm-terminal-header">
                <div className="mm-terminal-title-row">
                    <h3><FaStore /> SHOP DASHBOARD</h3>
                    <div className="mm-day-wealth-badge">
                        Day {state.day} / {state.maxDays}
                    </div>
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

            {/* P&L Stats */}
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
                    <span className="mm-qty-label">Quantity per trade:</span>
                    <div className="mm-qty-controls">
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(Math.max(1, state.tradeQty - 5))}>−5</button>
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(Math.max(1, state.tradeQty - 1))}>−1</button>
                        <input
                            type="number"
                            className="mm-qty-input"
                            value={localQty}
                            min={1}
                            onChange={(e) => handleQtyChange(e.target.value)}
                        />
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(state.tradeQty + 1)}>+1</button>
                        <button className="mm-qty-btn" onClick={() => handleQtyChange(state.tradeQty + 5)}>+5</button>
                    </div>
                </div>

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
                    className={`mm-big-trade-btn sell-btn ${!hasStockToSell ? 'disabled' : ''}`}
                    onClick={handleSell}
                    disabled={!hasStockToSell}
                >
                    <div className="mm-trade-btn-top">
                        <FaUsers /> SELL TO CUSTOMERS
                    </div>
                    <div className="mm-trade-btn-detail">
                        {Math.min(state.tradeQty, state.inventory)} units × ₹{state.currentMarketPrice.toFixed(2)} =
                        <strong> +₹{revenuePreview.toLocaleString('en-IN')}</strong>
                        {!hasStockToSell && <span className="mm-btn-warning"> (no stock)</span>}
                    </div>
                </button>
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
                                className={`mm-trade-item ${trade.type.toLowerCase()}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                <span className="mm-trade-time">{trade.time}</span>
                                <span className="mm-trade-action">
                                    {trade.type === 'BUY'
                                        ? <><FaTruck /> Bought</>
                                        : <><FaUsers /> Sold</>}
                                </span>
                                <span className="mm-trade-details">
                                    {trade.qty}× @ ₹{trade.price.toFixed(2)}
                                    <span className={`mm-trade-total ${trade.type === 'BUY' ? 'red' : 'green'}`}>
                                        {trade.type === 'BUY' ? ' −₹' : ' +₹'}{trade.total.toLocaleString('en-IN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                                    </span>
                                </span>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
