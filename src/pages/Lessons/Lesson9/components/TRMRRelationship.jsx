import React, { useState } from 'react';
import { FaChartLine, FaArrowUp, FaArrowDown, FaMinusCircle, FaLaptopCode } from 'react-icons/fa';
import '../lesson9.css';

const TRMRRelationship = () => {
    const [strategy, setStrategy] = useState(1);

    return (
        <section className="lesson-section">
            <div className="market-header">
                <span className="market-status" style={{ borderColor: 'var(--trade-blue)', color: 'var(--trade-blue)' }}>● MARKET ANALYSIS</span>
                <h2 className="market-title">TR-MR Relationship</h2>
                <p style={{ color: '#aaa' }}>STRATEGY: <strong>REVENUE MAXIMIZATION</strong></p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>

                {/* STRATEGY TOGGLE BAR */}
                <div className="trading-card" style={{ padding: '10px', display: 'flex', gap: '10px', background: '#000', borderBottom: 'none', borderRadius: '4px 4px 0 0', marginBottom: '0' }}>
                    <button
                        className={`trade-btn ${strategy === 1 ? 'active profit' : ''}`}
                        onClick={() => setStrategy(1)}
                        style={{ flex: 1, textAlign: 'center', height: '60px' }}
                    >
                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>PHASE 1</div>
                        <div style={{ fontSize: '1.1rem' }}>BULL RUN (MR {'>'} 0)</div>
                    </button>
                    <button
                        className={`trade-btn ${strategy === 2 ? 'active' : ''}`}
                        onClick={() => setStrategy(2)}
                        style={{ flex: 1, textAlign: 'center', height: '60px', borderColor: strategy === 2 ? 'var(--trade-gold)' : '' }}
                    >
                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>PHASE 2</div>
                        <div style={{ fontSize: '1.1rem' }}>PEAK (MR = 0)</div>
                    </button>
                    <button
                        className={`trade-btn ${strategy === 3 ? 'active' : ''}`}
                        onClick={() => setStrategy(3)}
                        style={{ flex: 1, textAlign: 'center', height: '60px', borderColor: strategy === 3 ? 'var(--trade-red)' : '' }}
                    >
                        <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>PHASE 3</div>
                        <div style={{ fontSize: '1.1rem' }}>BEAR RUN (MR {'<'} 0)</div>
                    </button>
                </div>

                {/* MAIN MONITOR CARD */}
                <div className={`trading-card ${strategy === 1 ? 'green' : strategy === 2 ? 'gold' : 'red'}`} style={{ borderRadius: '0 0 4px 4px', borderTop: 'none', minHeight: '400px' }}>

                    <div className="card-header-row">
                        <span className="stock-symbol" style={{ color: strategy === 1 ? 'var(--trade-green)' : strategy === 2 ? 'var(--trade-gold)' : 'var(--trade-red)' }}>
                            {strategy === 1 ? 'GROWTH PHASE' : strategy === 2 ? 'SATURATION PHASE' : 'DECLINE PHASE'}
                        </span>
                        <FaLaptopCode style={{ fontSize: '1.5rem', opacity: 0.5 }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '20px' }}>

                        {/* LEFT: DATA VISUAL */}
                        <div className="terminal-chart" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '250px' }}>
                            {strategy === 1 && (
                                <>
                                    <FaArrowUp style={{ fontSize: '5rem', color: 'var(--trade-green)', marginBottom: '20px' }} />
                                    <h3 style={{ color: 'var(--trade-green)', margin: 0 }}>TR IS RISING</h3>
                                    <p style={{ color: '#666', marginTop: '5px' }}>Momentum is Positive</p>
                                </>
                            )}
                            {strategy === 2 && (
                                <>
                                    <div style={{ fontSize: '5rem', color: 'var(--trade-gold)', fontWeight: 'bold' }}>MAX</div>
                                    <h3 style={{ color: 'var(--trade-gold)', margin: 0 }}>TR PEAKED</h3>
                                    <p style={{ color: '#666', marginTop: '5px' }}>Growth Stalled</p>
                                </>
                            )}
                            {strategy === 3 && (
                                <>
                                    <FaArrowDown style={{ fontSize: '5rem', color: 'var(--trade-red)', marginBottom: '20px' }} />
                                    <h3 style={{ color: 'var(--trade-red)', margin: 0 }}>TR IS FALLING</h3>
                                    <p style={{ color: '#666', marginTop: '5px' }}>Negative Returns</p>
                                </>
                            )}
                        </div>

                        {/* RIGHT: ANALYSIS */}
                        <div>
                            <h4 style={{ color: '#fff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>MARKET INTELLIGENCE</h4>

                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px', color: '#ccc', lineHeight: '1.8' }}>
                                {strategy === 1 && (
                                    <>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-green)' }}>SIGNAL:</strong> MR is Positive.
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-green)' }}>ACTION:</strong> Every additional unit sold adds to the Total Revenue.
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-green)' }}>TREND:</strong> Keep Selling. The market is hungry.
                                        </li>
                                    </>
                                )}
                                {strategy === 2 && (
                                    <>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-gold)' }}>SIGNAL:</strong> MR is Zero.
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-gold)' }}>ACTION:</strong> Selling one more unit adds NOTHING to revenue.
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-gold)' }}>TREND:</strong> Hold Position. You have extracted maximum value.
                                        </li>
                                    </>
                                )}
                                {strategy === 3 && (
                                    <>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-red)' }}>SIGNAL:</strong> MR is Negative.
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-red)' }}>ACTION:</strong> Selling more actually REDUCES Total Revenue.
                                        </li>
                                        <li style={{ marginBottom: '15px' }}>
                                            <strong style={{ color: 'var(--trade-red)' }}>TREND:</strong> STOP! You are destroying value.
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};
export default TRMRRelationship;
