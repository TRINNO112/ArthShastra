import React from 'react';
import { FaFileAlt, FaLock } from 'react-icons/fa';

const AnalystReports = () => {
    return (
        <section className="terminal-section">
            <h2 className="terminal-title">INSTITUTIONAL RESEARCH (ANALYST REPORTS)</h2>

            <div className="terminal-card" style={{ padding: '0' }}>

                {/* REPORT HEADER */}
                <div style={{ background: '#f0f0f0', color: '#000', padding: '20px', borderBottom: '4px solid #000' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h1 style={{ margin: 0, fontFamily: 'serif', letterSpacing: '1px' }}>ARTHSHASTRA INTELLIGENCE</h1>
                            <div style={{ fontSize: '0.8rem', color: '#555' }}>EQUITY RESEARCH • GLOBAL MACRO • FIXED INCOME</div>
                        </div>
                        <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
                            <div>RATING: BUY</div>
                            <div style={{ fontSize: '2rem' }}>E*</div>
                        </div>
                    </div>
                </div>

                {/* REPORT BODY */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', padding: '30px', color: '#ccc' }}>

                    <div>
                        <h3 style={{ color: '#00ff88', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Investment Thesis: The Equilibrium</h3>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                            Our analysis indicates that markets naturally trend towards a state of rest known as <strong>Equilibrium</strong>.
                            At this price point (P*), the intentions of buyers exactly match the intentions of sellers.
                        </p>
                        <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>
                            We observe that any deviation from P* creates unstable arbitrage opportunities:
                            <br /><br />
                            &bull; <strong>Scenario A (P &gt; P*):</strong> Creates Excess Supply. Inventory bloat forces liquidation. Price target: Downward.
                            <br />
                            &bull; <strong>Scenario B (P &lt; P*):</strong> Creates Excess Demand. Scarcity drives bidding wars. Price target: Upward.
                        </p>

                        <div style={{ background: '#161b22', padding: '15px', borderLeft: '4px solid #00ff88', fontStyle: 'italic' }}>
                            "The Invisible Hand acts as the ultimate market maker, ensuring allocative efficiency without central direction."
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <div style={{ borderLeft: '1px solid #333', paddingLeft: '20px' }}>
                        <h4>KEY RISKS</h4>
                        <ul style={{ fontSize: '0.9rem', color: '#888', paddingLeft: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>Government Price Controls (Ceilings/Floors)</li>
                            <li style={{ marginBottom: '10px' }}>External Shocks (War, Famine)</li>
                            <li style={{ marginBottom: '10px' }}>Market Failure (Monopolies, Externalities)</li>
                        </ul>

                        <div style={{ marginTop: '30px', background: '#333', padding: '20px', textAlign: 'center', opacity: 0.5 }}>
                            <FaLock size={30} />
                            <div style={{ marginTop: '10px' }}>PREMIUM CONTENT BELOW</div>
                            <div style={{ fontSize: '0.8rem' }}>Subscribers Only</div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AnalystReports;
