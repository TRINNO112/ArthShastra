import React from 'react';
import { FaGlobe, FaPaintBrush, FaAd, FaUserFriends } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ReferenceLine } from 'recharts';
import '../../Lesson5/components/lesson5.css';

const MonopolisticCompetition = () => {
    // Flatter Curve Data
    // Price falls slowly (small change in P leads to big change in Q due to substitutes)
    const data = [
        { qty: 10, ar: 10, mr: 10 },
        { qty: 20, ar: 9.5, mr: 9 },
        { qty: 30, ar: 9, mr: 8 },
        { qty: 40, ar: 8.5, mr: 7 },
        { qty: 50, ar: 8, mr: 6 },
    ];

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Section 4</span>
                <h2 className="section-title-lesson">Monopolistic Competition</h2>
                <p className="section-subtitle-lesson">Real World: Brands & Choices</p>
            </div>

            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-purple"><FaGlobe /> Definition & Features</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Market with <strong>Many Sellers</strong> selling <strong>Differentiated Products</strong>. It combines features of both Monopoly (Unique Brand) and Perfect Competition (Many Sellers).
                    </p>

                    <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>

                        {/* Panel 1 */}
                        <div className="comic-panel" style={{ background: '#e6e6fa', border: '3px solid #483d8b', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #483d8b' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#9370db', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #483d8b', transform: 'rotate(3deg)', fontSize: '0.8rem' }}>CROWD</div>
                            <div style={{ fontSize: '2rem', color: '#483d8b', marginBottom: '5px', textAlign: 'center' }}><FaUserFriends /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #483d8b', paddingBottom: '5px', marginBottom: '10px', color: '#483d8b' }}>Many Sellers</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "There are many of us, but not infinite. We are rivals, but we coexist."
                            </p>
                        </div>

                        {/* Panel 2 */}
                        <div className="comic-panel" style={{ background: '#e0ffff', border: '3px solid #00ced1', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #00ced1' }}>
                            <div style={{ position: 'absolute', top: '-10px', left: '-10px', background: '#00ced1', color: '#000', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-3deg)', fontSize: '0.8rem' }}>UNIQUE</div>
                            <div style={{ fontSize: '2rem', color: '#008080', marginBottom: '5px', textAlign: 'center' }}><FaPaintBrush /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #008b8b', paddingBottom: '5px', marginBottom: '10px', color: '#008080' }}>Differentiation</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "Look at ME! My soap smells like lavender. His smells like lemon. We are NOT the same!"
                            </p>
                        </div>

                        {/* Panel 3 */}
                        <div className="comic-panel" style={{ background: '#fffacd', border: '3px solid #daa520', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #daa520' }}>
                            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#ffd700', color: '#000', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #daa520', transform: 'rotate(2deg)', fontSize: '0.8rem' }}>ADS</div>
                            <div style={{ fontSize: '2rem', color: '#daa520', marginBottom: '5px', textAlign: 'center' }}><FaAd /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #daa520', paddingBottom: '5px', marginBottom: '10px', color: '#daa520' }}>Selling Costs</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "But wait! Watch my TV Commercial! Buy 1 Get 1 Free! I spend millions to seduce you."
                            </p>
                        </div>

                        {/* Panel 4 */}
                        <div className="comic-panel" style={{ background: '#ffe4e1', border: '3px solid #cd5c5c', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #cd5c5c' }}>
                            <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', background: '#ff69b4', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #cd5c5c', transform: 'rotate(-2deg)', fontSize: '0.8rem' }}>FREE</div>
                            <div style={{ fontSize: '2rem', color: '#cd5c5c', marginBottom: '5px', textAlign: 'center' }}><FaGlobe /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #cd5c5c', paddingBottom: '5px', marginBottom: '10px', color: '#cd5c5c' }}>Free Entry</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "Want to join? Sure! But be warned—building a brand is harder than it looks."
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* REVENUE SCHEDULE */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-purple"><FaGlobe /> Revenue Schedule (Differentiated)</h3>
                    <p style={{ marginBottom: '15px', color: '#ccc' }}>Price falls, but demand is Elastic (Sensitive to price).</p>

                    <div className="table-responsive">
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: '#fff' }}>
                            <thead>
                                <tr style={{ background: 'rgba(147, 112, 219, 0.1)' }}>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555' }}>Output (Q)</th>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555', color: '#d8bfd8' }}>Price (AR)</th>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555' }}>TR (P×Q)</th>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555', color: '#cd5c5c' }}>MR (ΔTR/ΔQ)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { q: 10, p: 10, tr: 100, mr: 10 },
                                    { q: 20, p: 9.5, tr: 190, mr: 9 },
                                    { q: 30, p: 9, tr: 270, mr: 8 },
                                    { q: 40, p: 8.5, tr: 340, mr: 7 },
                                    { q: 50, p: 8, tr: 400, mr: 6 }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #333' }}>
                                        <td style={{ padding: '8px' }}>{row.q}</td>
                                        <td style={{ padding: '8px', color: '#d8bfd8' }}>{row.p}</td>
                                        <td style={{ padding: '8px' }}>{row.tr}</td>
                                        <td style={{ padding: '8px', color: '#cd5c5c' }}>{row.mr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* GRAPH */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan">The Demand Curve (Flatter)</h3>
                    <p style={{ marginBottom: '20px' }}>
                        AR slopes downward because firm is a Price Maker for its *own brand*.
                        <br />
                        However, the curve is <strong>Flatter (More Elastic)</strong> than Monopoly because <strong>Close Substitutes</strong> are available.
                        <br />
                        <em style={{ color: '#aaa' }}>If Lux increases price, people shift to Dove instantly.</em>
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={data} margin={{ top: 40, right: 30, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                <XAxis dataKey="qty" stroke="#aaa" label={{ value: 'Output', position: 'bottom', fill: '#aaa' }} />
                                <YAxis domain={[0, 14]} ticks={[0, 2, 4, 6, 8, 10, 12, 14]} stroke="#aaa" label={{ value: 'Revenue', angle: -90, position: 'left', fill: '#aaa' }} />
                                <Tooltip contentStyle={{ background: '#333', border: 'none', borderRadius: '8px' }} />
                                {/* AR Curve */}
                                <Line type="monotone" dataKey="ar" stroke="#d8bfd8" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 8 }}>
                                    <Label value="AR (More Elastic)" position="top" fill="#d8bfd8" offset={10} />
                                </Line>
                                {/* MR Curve */}
                                <Line type="monotone" dataKey="mr" stroke="#cd5c5c" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4 }}>
                                    <Label value="MR" position="bottom" fill="#cd5c5c" offset={10} />
                                </Line>

                                <ReferenceLine x={30} stroke="rgba(255,255,255,0.1)" label={{ position: 'top', value: 'Flatter Slope', fill: 'rgba(255,255,255,0.5)', fontSize: 12, dy: -20 }} />
                            </LineChart>
                        </ResponsiveContainer>
                        <div style={{ textAlign: 'center', color: '#ccc', marginTop: '10px' }}>
                            <strong>Flat Curves: High Elasticity (Ed &gt; 1)</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MonopolisticCompetition;
