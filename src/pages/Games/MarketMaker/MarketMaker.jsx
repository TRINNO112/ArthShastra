import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartLine, FaBalanceScale, FaExclamationTriangle } from 'react-icons/fa';
import './MarketMaker.css';

// Initial Market Data (Linear S/D)
// Qd = 100 - 2P
// Qs = 10 + 4P
// Equilibrium points:
// 100 - 2P = 10 + 4P
// 90 = 6P => P* = 15, Q* = 70

function MarketMaker() {
    const [price, setPrice] = useState(25);
    const [marketState, setMarketState] = useState({ type: 'calulating', difference: 0 });

    // Compute Qs and Qd based on current price
    const quantityDemanded = Math.max(0, 100 - 2 * price);
    const quantitySupplied = Math.max(0, 10 + 4 * price);

    useEffect(() => {
        if (quantityDemanded === quantitySupplied) {
            setMarketState({ type: 'equilibrium', difference: 0 });
        } else if (quantityDemanded > quantitySupplied) {
            setMarketState({ type: 'shortage', difference: quantityDemanded - quantitySupplied });
        } else {
            setMarketState({ type: 'surplus', difference: quantitySupplied - quantityDemanded });
        }
    }, [quantityDemanded, quantitySupplied]);

    // Handle slider change safely
    const handlePriceChange = (e) => {
        setPrice(Number(e.target.value));
    };

    return (
        <div className="mm-game-container">
            {/* Dynamic Background */}
            <div className="mm-bg-grid" />

            <header className="mm-header">
                <Link to="/games" className="mm-back-btn">
                    <FaArrowLeft /> EXIT TERMINAL
                </Link>
                <div className="mm-title-wrapper">
                    <FaBalanceScale className="mm-title-icon" />
                    <h1>MARKET MAKER <span className="mm-version">v1.0</span></h1>
                </div>
                <div className="mm-status-pill">
                    <FaChartLine /> LIVE TRADING
                </div>
            </header>

            <main className="mm-main-grid">
                {/* Left Column: Interactive Graph & Controls */}
                <section className="mm-chart-section">
                    <div className="mm-chart-container">
                        {/* SVG Interactive Supply/Demand Chart */}
                        <svg viewBox="0 0 400 300" className="mm-svg-chart">
                            {/* Grid Lines */}
                            <g className="mm-grid-lines">
                                {[0, 10, 20, 30, 40, 50].map((tick) => (
                                    <line key={`y-${tick}`} x1="40" y1={300 - tick * 6} x2="380" y2={300 - tick * 6} />
                                ))}
                                {[0, 20, 40, 60, 80, 100, 120].map((tick) => (
                                    <line key={`x-${tick}`} x1={40 + tick * 2.8} y1="0" x2={40 + tick * 2.8} y2="300" />
                                ))}
                            </g>

                            {/* Axes */}
                            <line x1="40" y1="0" x2="40" y2="300" className="mm-axis" />
                            <line x1="40" y1="300" x2="380" y2="300" className="mm-axis" />

                            <text x="5" y="15" className="mm-axis-label">Price</text>
                            <text x="360" y="295" className="mm-axis-label">Qty</text>

                            {/* Demand Curve (Qd = 100 - 2P => P = 50 - 0.5Q) */}
                            <line x1="40" y1={0} x2={320} y2={300} className="mm-curve demand" />
                            <text x="325" y="290" className="mm-curve-label demand">D</text>

                            {/* Supply Curve (Qs = 10 + 4P => P = -2.5 + 0.25Q) */}
                            {/* If Q=10, P=0 => x=68, y=300 */}
                            {/* If Q=130, P=30 => x=404, y=120 */}
                            <line x1={68} y1={300} x2={370} y2={10} className="mm-curve supply" />
                            <text x="375" y="15" className="mm-curve-label supply">S</text>

                            {/* Interactive Price Line */}
                            <g className="mm-price-line-group" style={{ transform: `translateY(${300 - price * 6}px)` }}>
                                <line x1="40" y1="0" x2="380" y2="0" className="mm-action-line" />

                                {/* Dots at intersection */}
                                <circle cx={40 + quantityDemanded * 2.8} cy="0" r="6" className="mm-action-dot demand" />
                                <circle cx={40 + quantitySupplied * 2.8} cy="0" r="6" className="mm-action-dot supply" />

                                <polygon points="40,-6 40,6 48,0" className="mm-action-pointer" />
                            </g>

                        </svg>
                    </div>

                    <div className="mm-controls-container">
                        <div className="mm-slider-header">
                            <h3>MARKET PRICE SETTING</h3>
                            <span className="mm-price-display">₹{price}</span>
                        </div>
                        <input
                            type="range"
                            className="mm-price-slider"
                            min="0"
                            max="50"
                            value={price}
                            onChange={handlePriceChange}
                        />
                        <div className="mm-slider-labels">
                            <span>₹0 (Price Floor)</span>
                            <span>₹50 (Price Ceiling)</span>
                        </div>
                    </div>
                </section>

                {/* Right Column: Analytics Terminal */}
                <aside className="mm-analytics-section">
                    <div className="mm-bignumber-grid">
                        <div className="mm-stat-card demand">
                            <span className="mm-stat-label">Qty Demanded</span>
                            <span className="mm-stat-value">{quantityDemanded}</span>
                        </div>
                        <div className="mm-stat-card supply">
                            <span className="mm-stat-label">Qty Supplied</span>
                            <span className="mm-stat-value">{quantitySupplied}</span>
                        </div>
                    </div>

                    <motion.div
                        className={`mm-terminal-card ${marketState.type}`}
                        animate={{ scale: [0.98, 1] }}
                        transition={{ duration: 0.2 }}
                        key={marketState.type + marketState.difference} // Re-trigger animation on change
                    >
                        <div className="mm-terminal-header">
                            MARKET ANALYSIS REPORT
                        </div>
                        <div className="mm-terminal-body">
                            {marketState.type === 'equilibrium' && (
                                <div className="mm-state-perfect">
                                    <FaBalanceScale className="mm-large-icon" />
                                    <h2>MARKET CLEARED!</h2>
                                    <p>You found the Equilibrium Price.</p>
                                    <div className="mm-eq-stats">
                                        P* = ₹15 | Q* = 70 units
                                    </div>
                                </div>
                            )}

                            {marketState.type === 'surplus' && (
                                <div className="mm-state-error">
                                    <FaExclamationTriangle className="mm-large-icon" />
                                    <h2>SURPLUS DETECTED</h2>
                                    <p>Sellers produced {marketState.difference} more units than buyers want.</p>
                                    <p className="mm-hint">Hint: The price is too high. Lower it to clear the inventory.</p>
                                </div>
                            )}

                            {marketState.type === 'shortage' && (
                                <div className="mm-state-error">
                                    <FaExclamationTriangle className="mm-large-icon" />
                                    <h2>SHORTAGE DETECTED</h2>
                                    <p>Buyers want {marketState.difference} more units than sellers are willing to produce.</p>
                                    <p className="mm-hint">Hint: The price is too low. Raise it to incentivize producers.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </aside>
            </main>
        </div>
    );
}

export default MarketMaker;
