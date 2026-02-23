import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoneyBillWave, FaArrowDown, FaArrowUp, FaWarehouse, FaChartBar, FaStore, FaTruck, FaUsers } from 'react-icons/fa';

export default function TradingTerminal({ state, dispatch }) {

    const [localBid, setLocalBid] = useState(state.orders.bidPrice);
    const [localAsk, setLocalAsk] = useState(state.orders.askPrice);
    const [localQty, setLocalQty] = useState(state.orders.tradeQty);
    const [flashCash, setFlashCash] = useState(null); // 'up' | 'down' | null
    const prevCash = React.useRef(state.cash);

    React.useEffect(() => {
        setLocalBid(state.orders.bidPrice);
        setLocalAsk(state.orders.askPrice);
    }, [state.orders.bidPrice, state.orders.askPrice]);

    // Flash effect when cash changes
    React.useEffect(() => {
        if (state.cash !== prevCash.current) {
            setFlashCash(state.cash > prevCash.current ? 'up' : 'down');
            prevCash.current = state.cash;
            const timer = setTimeout(() => setFlashCash(null), 700);
            return () => clearTimeout(timer);
        }
    }, [state.cash]);

    const handleSetBuyPrice = () => {
        const bidNum = parseFloat(localBid);
        const qtyNum = parseInt(localQty);
        if (!isNaN(bidNum)) dispatch({ type: 'UPDATE_ORDERS', payload: { type: 'bidPrice', value: bidNum } });
        if (!isNaN(qtyNum) && qtyNum > 0) dispatch({ type: 'UPDATE_ORDERS', payload: { type: 'tradeQty', value: qtyNum } });
    };

    const handleSetSellPrice = () => {
        const askNum = parseFloat(localAsk);
        const qtyNum = parseInt(localQty);
        if (!isNaN(askNum)) dispatch({ type: 'UPDATE_ORDERS', payload: { type: 'askPrice', value: askNum } });
        if (!isNaN(qtyNum) && qtyNum > 0) dispatch({ type: 'UPDATE_ORDERS', payload: { type: 'tradeQty', value: qtyNum } });
    };

    const spread = state.orders.askPrice - state.orders.bidPrice;
    const isSpreadPositive = spread > 0;
    const maxInv = state.upgrades.warehouseLvl * 100;
    const stockPercent = Math.min(100, (state.inventory / maxInv) * 100);

    return (
        <div className="mm-trading-terminal">

            {/* Shop Dashboard Header */}
            <div className="mm-terminal-header">
                <div className="mm-terminal-title-row">
                    <h3><FaStore /> SHOP DASHBOARD</h3>
                    <div className={`mm-spread-badge ${isSpreadPositive ? '' : 'danger'}`}>
                        Profit/unit: {isSpreadPositive ? `+₹${spread.toFixed(2)}` : `−₹${Math.abs(spread).toFixed(2)} LOSS`}
                    </div>
                </div>
                <div className="mm-portfolio-value">
                    <span>Total Wealth (Cash + Stock)</span>
                    <span className="mm-value-text">₹{state.portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                </div>
            </div>

            {/* Cash & Stock Row */}
            <div className="mm-assets-row">
                <div className="mm-asset-box cash-box">
                    <span className="mm-asset-label"><FaMoneyBillWave /> Your Cash</span>
                    <span className={`mm-asset-amount mm-cash-value ${flashCash === 'up' ? 'flash-green' : flashCash === 'down' ? 'flash-red' : ''}`}>
                        ₹{state.cash.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                    </span>
                    {flashCash === 'down' && <span className="mm-asset-hint red">↓ You paid your supplier</span>}
                    {flashCash === 'up' && <span className="mm-asset-hint green">↑ Customer paid you!</span>}
                </div>
                <div className="mm-asset-box stock-box">
                    <span className="mm-asset-label"><FaWarehouse /> Stock in Store</span>
                    <span className="mm-asset-amount">{state.inventory} <span className="mm-unit-label">units</span></span>
                    <div className="mm-stock-bar">
                        <div className="mm-stock-fill" style={{ width: `${stockPercent}%` }} />
                    </div>
                    <span className="mm-stock-cap">{state.inventory} / {maxInv} max</span>
                </div>
            </div>

            {/* P&L Row */}
            <div className="mm-stats-mini-row">
                <div className="mm-stat-chip">
                    <span className="mm-stat-chip-label"><FaTruck /> Bought</span>
                    <span className="mm-stat-chip-value buy-color">{state.totalBought} units</span>
                </div>
                <div className="mm-stat-chip">
                    <span className="mm-stat-chip-label"><FaUsers /> Sold</span>
                    <span className="mm-stat-chip-value sell-color">{state.totalSold} units</span>
                </div>
                <div className="mm-stat-chip">
                    <span className="mm-stat-chip-label">Net P&L</span>
                    <span className={`mm-stat-chip-value ${state.totalPnL >= 0 ? 'buy-color' : 'sell-color'}`}>
                        {state.totalPnL >= 0 ? '+' : ''}₹{state.totalPnL.toFixed(0)}
                    </span>
                </div>
            </div>

            {/* PRICE CONTROLS */}
            <div className="mm-order-controls">

                {/* BUY FROM SUPPLIER */}
                <div className="mm-order-box bid-box">
                    <div className="mm-ob-header">
                        <div>
                            <h4><FaTruck /> Buy from Supplier</h4>
                            <span className="mm-ob-desc">Max price you'll pay the supplier per unit</span>
                        </div>
                    </div>
                    <div className="mm-ob-input-row">
                        <div className="mm-input-group">
                            <span className="mm-label-inline">PRICE ₹</span>
                            <input
                                type="number"
                                className="mm-ob-input"
                                value={localBid}
                                onChange={(e) => setLocalBid(e.target.value)}
                                onBlur={handleSetBuyPrice}
                            />
                        </div>
                        <div className="mm-input-group qty-group">
                            <span className="mm-label-inline">QTY</span>
                            <input
                                type="number"
                                className="mm-ob-input qty-input"
                                value={localQty}
                                onChange={(e) => setLocalQty(e.target.value)}
                            />
                        </div>
                        <button className="mm-ob-submit bid-btn" onClick={handleSetBuyPrice}>
                            SET
                        </button>
                    </div>
                    <p className="mm-ob-explain">
                        When market price ≤ ₹{state.orders.bidPrice}, supplier delivers {state.orders.tradeQty} units → cash goes ↓
                    </p>
                </div>

                {/* SELL TO CUSTOMER */}
                <div className="mm-order-box ask-box">
                    <div className="mm-ob-header">
                        <div>
                            <h4><FaUsers /> Sell to Customers</h4>
                            <span className="mm-ob-desc">Min price you'll charge customers per unit</span>
                        </div>
                    </div>
                    <div className="mm-ob-input-row">
                        <div className="mm-input-group">
                            <span className="mm-label-inline">PRICE ₹</span>
                            <input
                                type="number"
                                className="mm-ob-input"
                                value={localAsk}
                                onChange={(e) => setLocalAsk(e.target.value)}
                                onBlur={handleSetSellPrice}
                            />
                        </div>
                        <div className="mm-input-group qty-group">
                            <span className="mm-label-inline">QTY</span>
                            <input
                                type="number"
                                className="mm-ob-input qty-input"
                                value={localQty}
                                onChange={(e) => setLocalQty(e.target.value)}
                            />
                        </div>
                        <button className="mm-ob-submit ask-btn" onClick={handleSetSellPrice}>
                            SET
                        </button>
                    </div>
                    <p className="mm-ob-explain">
                        When market price ≥ ₹{state.orders.askPrice}, customers buy {state.orders.tradeQty} units → cash goes ↑
                    </p>
                </div>
            </div>

            {/* TRANSACTION LOG */}
            <div className="mm-trade-history">
                <h4><FaChartBar /> TRANSACTION LOG</h4>
                <div className="mm-history-list">
                    {state.tradeHistory.length === 0 ? (
                        <div className="mm-history-empty">
                            <span className="mm-empty-icon">🏪</span>
                            No transactions yet. Open your shop to start trading!
                        </div>
                    ) : (
                        state.tradeHistory.map((trade, i) => (
                            <motion.div
                                key={`${trade.time}-${i}`}
                                className={`mm-trade-item ${trade.type.toLowerCase()}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="mm-trade-time">{trade.time}</span>
                                <span className="mm-trade-action">
                                    {trade.type === 'BUY'
                                        ? <><FaTruck className="icon-down" /> Bought from supplier</>
                                        : <><FaUsers className="icon-up" /> Sold to customer</>}
                                </span>
                                <span className="mm-trade-details">
                                    {trade.qty}× @ ₹{trade.price.toFixed(2)}
                                    <span className={`mm-trade-total ${trade.type === 'BUY' ? 'red' : 'green'}`}>
                                        {trade.type === 'BUY' ? ' −' : ' +'} ₹{trade.total.toFixed(0)}
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
