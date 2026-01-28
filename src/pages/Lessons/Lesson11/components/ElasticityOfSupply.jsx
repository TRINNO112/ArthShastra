import React from 'react';
import { FaPercentage, FaChartLine, FaRulerCombined, FaExpandAlt, FaCompressAlt, FaEquals, FaBolt, FaStopCircle, FaInfinity, FaBalanceScale } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, CartesianGrid, Label } from 'recharts';
import InteractiveElasticityChart from './InteractiveElasticityChart';
import '../../Lesson5/components/lesson5.css';

const ElasticityOfSupply = () => {
    // Data for mini graphs
    const inelasticData = [{ q: 10, p: 10 }, { q: 12, p: 50 }];
    const elasticData = [{ q: 10, p: 10 }, { q: 50, p: 12 }];
    const unitaryData = [{ q: 10, p: 10 }, { q: 40, p: 40 }];

    return (
        <div className="lesson-section" style={{ fontFamily: '"Comic Neue", "Bangers", cursive', maxWidth: '1200px', margin: '0 auto' }}>

            <div className="section-header-lesson animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span className="section-badge-lesson" style={{ background: '#ff00ff', color: '#fff', border: '3px solid #000', transform: 'rotate(2deg)', boxShadow: '4px 4px 0px #000', fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>
                    VOL. 3: RESPONSIVENESS
                </span>
                <h2 className="section-title-lesson" style={{ fontFamily: '"Bangers", cursive', fontSize: '4rem', textShadow: '4px 4px 0px #000', color: '#fff' }}>
                    ELASTICITY OF SUPPLY (Es)
                </h2>
                <p className="section-subtitle-lesson" style={{ background: '#fff', color: '#000', display: 'inline-block', padding: '5px 15px', border: '2px solid #000', fontWeight: 'bold' }}>
                    How FAST does the Producer React?
                </p>
            </div>

            {/* INTRO CARD */}
            <div className="comic-panel animate-fadeInUp" style={{ background: '#fff', color: '#000', padding: '25px', borderRadius: '15px', border: '4px solid #000', boxShadow: '10px 10px 0px #000', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ fontSize: '3rem', color: '#ff00ff' }}><FaRulerCombined /></div>
                    <div>
                        <h3 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', margin: 0 }}>THE DEFINITION</h3>
                        <p style={{ fontSize: '1.2rem' }}>
                            We know Price <FaBolt style={{ color: '#ffd700' }} /> leads to Supply Change. But <strong>HOW MUCH?</strong><br />
                            Elasticity measures the <strong>Percentage Change</strong> in quantity for a change in price.
                        </p>
                    </div>
                </div>
                <div style={{ marginTop: '20px', background: '#000', color: '#00ff00', padding: '15px', borderRadius: '10px', fontFamily: 'monospace', fontSize: '1.2rem', textAlign: 'center', border: '2px solid #00ff00' }}>
                    Es = (% Change in Qs) / (% Change in Price)
                </div>
            </div>

            {/* INTERACTIVE SECTION */}
            <div className="comic-panel animate-fadeInUp" style={{ background: '#222', color: '#fff', padding: '25px', borderRadius: '15px', border: '4px solid #fff', boxShadow: '10px 10px 0px #000', marginBottom: '40px' }}>
                <h3 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', textAlign: 'center', color: '#00ffff' }}>SIMULATION STATION</h3>
                <InteractiveElasticityChart />
            </div>

            {/* THE LEAGUE OF ELASTICITY (5 DEGREES) */}
            <h3 style={{ fontFamily: '"Bangers", cursive', fontSize: '3rem', textAlign: 'center', color: '#fff', textShadow: '3px 3px 0px #000', marginBottom: '30px' }}>
                THE LEAGUE OF ELASTICITY
            </h3>

            <div className="comic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>

                {/* 1. PERFECTLY INELASTIC (THE STATUE) */}
                <div className="comic-panel" style={{ background: '#ffcccc', border: '3px solid #000', borderRadius: '12px', padding: '20px', boxShadow: '8px 8px 0px #000', position: 'relative' }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ff4444', color: '#fff', padding: '5px 10px', border: '2px solid #000', transform: 'rotate(3deg)', fontFamily: '"Bangers", cursive' }}>Es = 0</div>
                    <h4 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', margin: 0, color: '#cc0000' }}>THE STATUE</h4>
                    <span style={{ fontWeight: 'bold' }}>Perfectly Inelastic</span>

                    <div style={{ margin: '15px 0', height: '100px', background: '#fff', border: '2px solid #000', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                        {/* Custom SVG Mini Graph */}
                        <svg width="100" height="80">
                            <line x1="10" y1="70" x2="90" y2="70" stroke="#000" strokeWidth="2" />
                            <line x1="10" y1="10" x2="10" y2="70" stroke="#000" strokeWidth="2" />
                            <line x1="50" y1="10" x2="50" y2="70" stroke="#ff0000" strokeWidth="4" />
                        </svg>
                    </div>

                    <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                        "I CANNOT move. Price goes up to a million? I still supply the same!"
                    </p>
                    <div style={{ fontSize: '0.9rem', background: '#fff', padding: '5px', borderRadius: '5px', border: '1px solid #cc0000' }}>
                        <FaStopCircle /> <strong>Example:</strong> Perishable Fish / Rare Mona Lisa
                    </div>
                </div>

                {/* 2. PERFECTLY ELASTIC (THE INFINITE) */}
                <div className="comic-panel" style={{ background: '#ccffcc', border: '3px solid #000', borderRadius: '12px', padding: '20px', boxShadow: '8px 8px 0px #000', position: 'relative' }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#00c851', color: '#fff', padding: '5px 10px', border: '2px solid #000', transform: 'rotate(-3deg)', fontFamily: '"Bangers", cursive' }}>Es = ∞</div>
                    <h4 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', margin: 0, color: '#007e33' }}>THE INFINITE</h4>
                    <span style={{ fontWeight: 'bold' }}>Perfectly Elastic</span>

                    <div style={{ margin: '15px 0', height: '100px', background: '#fff', border: '2px solid #000', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                        <svg width="100" height="80">
                            <line x1="10" y1="70" x2="90" y2="70" stroke="#000" strokeWidth="2" />
                            <line x1="10" y1="10" x2="10" y2="70" stroke="#000" strokeWidth="2" />
                            <line x1="10" y1="40" x2="90" y2="40" stroke="#00c851" strokeWidth="4" />
                        </svg>
                    </div>

                    <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                        "At this price, I supply EVERYTHING. One rupee less? I supply NOTHING."
                    </p>
                    <div style={{ fontSize: '0.9rem', background: '#fff', padding: '5px', borderRadius: '5px', border: '1px solid #007e33' }}>
                        <FaInfinity /> <strong>Example:</strong> Theoretical / Perfect Competition
                    </div>
                </div>

                {/* 3. UNITARY (THE BALANCED) */}
                <div className="comic-panel" style={{ background: '#fff3cd', border: '3px solid #000', borderRadius: '12px', padding: '20px', boxShadow: '8px 8px 0px #000', position: 'relative' }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ffbb33', color: '#fff', padding: '5px 10px', border: '2px solid #000', transform: 'rotate(2deg)', fontFamily: '"Bangers", cursive' }}>Es = 1</div>
                    <h4 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', margin: 0, color: '#ff8800' }}>THE BALANCED</h4>
                    <span style={{ fontWeight: 'bold' }}>Unitary Elastic</span>

                    <div style={{ margin: '15px 0', height: '100px', background: '#fff', border: '2px solid #000', padding: '10px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={unitaryData}>
                                <Line type="monotone" dataKey="p" stroke="#ff8800" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                        "Fair is fair. You double the price, I double the supply. 45 degrees of precision."
                    </p>
                    <div style={{ fontSize: '0.9rem', background: '#fff', padding: '5px', borderRadius: '5px', border: '1px solid #ff8800' }}>
                        <FaBalanceScale /> <strong>Example:</strong> Electronics (Sometimes)
                    </div>
                </div>

                {/* 4. INELASTIC (THE STUBBORN) */}
                <div className="comic-panel" style={{ background: '#ffe4e1', border: '3px solid #000', borderRadius: '12px', padding: '20px', boxShadow: '8px 8px 0px #000', position: 'relative' }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ff99cc', color: '#fff', padding: '5px 10px', border: '2px solid #000', transform: 'rotate(-2deg)', fontFamily: '"Bangers", cursive' }}>Es &lt; 1</div>
                    <h4 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', margin: 0, color: '#d81b60' }}>THE STUBBORN</h4>
                    <span style={{ fontWeight: 'bold' }}>Relatively Inelastic</span>

                    <div style={{ margin: '15px 0', height: '100px', background: '#fff', border: '2px solid #000', padding: '10px' }}>
                        <div style={{ position: 'absolute', fontSize: '4rem', opacity: 0.1, top: '40px', left: '50px' }}><FaCompressAlt /></div>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={inelasticData}>
                                <Line type="monotone" dataKey="p" stroke="#d81b60" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                        "Price doubled? Meh. I'll make a *little* bit more, but don't expect miracles."
                    </p>
                    <div style={{ fontSize: '0.9rem', background: '#fff', padding: '5px', borderRadius: '5px', border: '1px solid #d81b60' }}>
                        <strong>Curve:</strong> STEEP
                    </div>
                </div>

                {/* 5. ELASTIC (THE REACTOR) */}
                <div className="comic-panel" style={{ background: '#e0f2f1', border: '3px solid #000', borderRadius: '12px', padding: '20px', boxShadow: '8px 8px 0px #000', position: 'relative' }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#00897b', color: '#fff', padding: '5px 10px', border: '2px solid #000', transform: 'rotate(2deg)', fontFamily: '"Bangers", cursive' }}>Es &gt; 1</div>
                    <h4 style={{ fontFamily: '"Bangers", cursive', fontSize: '2rem', margin: 0, color: '#004d40' }}>THE REACTOR</h4>
                    <span style={{ fontWeight: 'bold' }}>Relatively Elastic</span>

                    <div style={{ margin: '15px 0', height: '100px', background: '#fff', border: '2px solid #000', padding: '10px' }}>
                        <div style={{ position: 'absolute', fontSize: '4rem', opacity: 0.1, top: '40px', left: '50px' }}><FaExpandAlt /></div>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={elasticData}>
                                <Line type="monotone" dataKey="p" stroke="#004d40" strokeWidth={3} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <p style={{ fontSize: '1rem', fontStyle: 'italic' }}>
                        "Small price hike? BOOM! I'm flooding the market with supply!"
                    </p>
                    <div style={{ fontSize: '0.9rem', background: '#fff', padding: '5px', borderRadius: '5px', border: '1px solid #004d40' }}>
                        <strong>Curve:</strong> FLAT
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ElasticityOfSupply;
