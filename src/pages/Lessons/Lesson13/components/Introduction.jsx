import React, { useEffect, useState } from 'react';
import { FaGlobeAmericas, FaChartLine, FaBell, FaBalanceScale } from 'react-icons/fa';
import '../lesson13.css'; // Will create this css file next

const Introduction = () => {
    const [marketStatus, setMarketStatus] = useState("CLOSED");

    useEffect(() => {
        const timer = setTimeout(() => setMarketStatus("OPEN"), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="terminal-section">
            <div className="terminal-header-strip">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaGlobeAmericas className="spin-slow" style={{ color: '#00ff88' }} />
                    <span style={{ fontFamily: 'monospace', color: '#00ff88' }}>GLOBAL MARKET SYSTEM // EQUILIBRIUM ENGINE</span>
                </div>
                <div style={{ fontFamily: 'monospace', color: marketStatus === "OPEN" ? '#00ff88' : '#ff4444' }}>
                    MARKET STATUS: {marketStatus} <span className="blink">●</span>
                </div>
            </div>

            {/* TICKER */}
            <div className="stock-ticker-container">
                <div className="stock-ticker-content">
                    <span>DOW JONES ▲ 1.2%</span>
                    <span>NIFTY 50 ▲ 0.8%</span>
                    <span>GOLD ▼ 0.5%</span>
                    <span>DEMAND = SUPPLY (EQUILIBRIUM REACHED)</span>
                    <span>EXCESS DEMAND DETECTED IN SECTOR 7</span>
                    <span>PRICE STABILIZATION PROTOCOL ACTIVE</span>
                </div>
            </div>

            <div className="terminal-content">
                <div className="terminal-card main-intro">
                    <h1 className="glitch-text" data-text="MARKET EQUILIBRIUM">MARKET EQUILIBRIUM</h1>
                    <p className="terminal-text">
                        The state where market supply and demand balance each other, and as a result, prices become stable.
                        <br /><br />
                        <span style={{ color: '#00ff88' }}>CONDITION:</span> <span style={{ fontFamily: 'monospace' }}>Quantity Demanded (Qd) = Quantity Supplied (Qs)</span>
                    </p>

                    <div className="grid-2-col" style={{ marginTop: '30px' }}>
                        <div className="data-box">
                            <h4 style={{ color: '#ff4444', borderBottom: '1px dashed #ff4444' }}>EXCESS DEMAND</h4>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                price &lt; P* <br />
                                Buyers compete → Price Rises ⬆
                            </p>
                        </div>
                        <div className="data-box">
                            <h4 style={{ color: '#00bfff', borderBottom: '1px dashed #00bfff' }}>EXCESS SUPPLY</h4>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
                                price &gt; P* <br />
                                Sellers compete → Price Falls ⬇
                            </p>
                        </div>
                    </div>
                </div>

                <div className="terminal-card side-panel">
                    <div className="hologram-effect">
                        <FaBalanceScale size={80} color="#333" />
                    </div>
                    <h3 style={{ position: 'relative', zIndex: 2, color: '#fff' }}>THE INVISIBLE HAND</h3>
                    <p style={{ position: 'relative', zIndex: 2, fontSize: '0.8rem', color: '#888', marginTop: '10px' }}>
                        Adam Smith's concept that free markets naturally find their equilibrium without intervention.
                    </p>
                    <div className="status-bar" style={{ marginTop: '20px' }}>
                        <div className="fill" style={{ width: '100%', background: '#00ff88' }}></div>
                    </div>
                    <div style={{ textAlign: 'right', fontSize: '0.7rem', color: '#00ff88', marginTop: '5px' }}>SYSTEM OPTIMAL</div>
                </div>
            </div>

        </section>
    );
};

export default Introduction;
