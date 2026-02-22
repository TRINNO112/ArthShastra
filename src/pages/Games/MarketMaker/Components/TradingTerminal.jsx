import React, { useState } from 'react';
import { FaMoneyBillWave, FaArrowDown, FaArrowUp, FaWarehouse } from 'react-icons/fa';

export default function TradingTerminal({ state, dispatch }) {

    // Local input states
    const [localBid, setLocalBid] = useState(state.orders.bidPrice);
    const [localAsk, setLocalAsk] = useState(state.orders.askPrice);
    const [localQty, setLocalQty] = useState(5); // Default trade size

    // Sync local state when global state is updated (e.g. game init or event)
    React.useEffect(() => {
        setLocalBid(state.orders.bidPrice);
        setLocalAsk(state.orders.askPrice);
    }, [state.orders.bidPrice, state.orders.askPrice]);

    const handleUpdate = (type, val) => {
        const num = parseFloat(val);
        if (!isNaN(num)) {
            dispatch({ type: 'UPDATE_ORDERS', payload: { type, value: num } });
        }
    };

    return (
        <div className="mm-trading-terminal">
            <div className="mm-terminal-header">
                <h3><FaMoneyBillWave /> TRADING DESK</h3>
                <div className="mm-portfolio-value">
                    <span>Net Worth:</span>
                    <span className="mm-value-text">₹{state.portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
            </div>

            <div className="mm-assets-row">
                <div className="mm-asset-box">
                    <span className="mm-asset-label">Cash Reserve</span>
                    <span className="mm-asset-amount text-green">₹{state.cash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="mm-asset-box">
                    <span className="mm-asset-label"><FaWarehouse /> Inventory</span>
                    <span className="mm-asset-amount">{state.inventory} / {state.upgrades.warehouseLvl * 100}</span>
                </div>
            </div>

            {/* ORDER BOOK CONTROLS */}
            <div className="mm-order-controls">

                {/* BID SECTION */}
                <div className="mm-order-box bid-box">
                    <div className="mm-ob-header">
                        <h4>YOUR BID (Buy)</h4>
                        <span className="mm-ob-desc">Max price you'll pay</span>
                    </div>
                    <div className="mm-ob-input-row">
                        <div className="mm-input-group">
                            <span className="mm-label-inline">PRICE</span>
                            <input
                                type="number"
                                className="mm-ob-input"
                                value={localBid}
                                onChange={(e) => setLocalBid(e.target.value)}
                                onBlur={() => handleUpdate('bidPrice', localBid)}
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
                        <button
                            className="mm-ob-submit bid-btn"
                            onClick={() => handleUpdate('bidPrice', localBid)}
                        >
                            SET BID
                        </button>
                    </div>
                </div>

                {/* ASK SECTION */}
                <div className="mm-order-box ask-box">
                    <div className="mm-ob-header">
                        <h4>YOUR ASK (Sell)</h4>
                        <span className="mm-ob-desc">Min price you'll accept</span>
                    </div>
                    <div className="mm-ob-input-row">
                        <div className="mm-input-group">
                            <span className="mm-label-inline">PRICE</span>
                            <input
                                type="number"
                                className="mm-ob-input"
                                value={localAsk}
                                onChange={(e) => setLocalAsk(e.target.value)}
                                onBlur={() => handleUpdate('askPrice', localAsk)}
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
                        <button
                            className="mm-ob-submit ask-btn"
                            onClick={() => handleUpdate('askPrice', localAsk)}
                        >
                            SET ASK
                        </button>
                    </div>
                </div>
            </div>

            {/* TRADE HISTORY TICKER */}
            <div className="mm-trade-history">
                <h4>RECENT TRADES</h4>
                <div className="mm-history-list">
                    {state.tradeHistory.length === 0 ? (
                        <div className="mm-history-empty">Awaiting Execution...</div>
                    ) : (
                        state.tradeHistory.map((trade, i) => (
                            <div key={i} className={`mm-trade-item ${trade.type.toLowerCase()}`}>
                                <span className="mm-trade-time">{trade.time}</span>
                                <span className="mm-trade-action">
                                    {trade.type === 'BUY' ? <><FaArrowDown className="icon-down" /> Filled BID</> : <><FaArrowUp className="icon-up" /> Filled ASK</>}
                                </span>
                                <span className="mm-trade-details">{trade.qty} units @ ₹{trade.price.toFixed(2)}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}
