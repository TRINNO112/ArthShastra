import React from 'react';
import { FaGem, FaBan, FaCrown, FaTags } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ReferenceLine } from 'recharts';
import '../../Lesson5/components/lesson5.css';

const Monopoly = () => {
    // Steep Curve Data
    // Price falls rapidly as quantity increases
    const data = [
        { qty: 1, ar: 10, mr: 10 },
        { qty: 2, ar: 9, mr: 8 },
        { qty: 3, ar: 8, mr: 6 },
        { qty: 4, ar: 7, mr: 4 },
        { qty: 5, ar: 6, mr: 2 },
        { qty: 6, ar: 5, mr: 0 },
    ];

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Section 3</span>
                <h2 className="section-title-lesson">Monopoly Market</h2>
                <p className="section-subtitle-lesson">Single Seller, No Competition</p>
            </div>

            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-red"><FaGem /> Definition & Features</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        From Greek: 'Mono' (Single) + 'Poly' (Seller). A market with a <strong>Single Seller</strong> and no close substitutes. The firm IS the industry.
                    </p>

                    <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>

                        {/* Panel 1 */}
                        <div className="comic-panel" style={{ background: '#ffcccc', border: '3px solid #800000', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #800000' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ff0000', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #800000', transform: 'rotate(3deg)', fontSize: '0.8rem' }}>THE ONE</div>
                            <div style={{ fontSize: '2rem', color: '#800000', marginBottom: '5px', textAlign: 'center' }}><FaCrown /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #800000', paddingBottom: '5px', marginBottom: '10px', color: '#800000' }}>Single Seller</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "I am the State! I am the Market! One firm controls 100% of the supply."
                            </p>
                        </div>

                        {/* Panel 2 */}
                        <div className="comic-panel" style={{ background: '#e6e6fa', border: '3px solid #4b0082', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #4b0082' }}>
                            <div style={{ position: 'absolute', top: '-10px', left: '-10px', background: '#4b0082', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #fff', transform: 'rotate(-3deg)', fontSize: '0.8rem' }}>TRAPPED</div>
                            <div style={{ fontSize: '2rem', color: '#4b0082', marginBottom: '5px', textAlign: 'center' }}><FaBan /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #4b0082', paddingBottom: '5px', marginBottom: '10px', color: '#4b0082' }}>No Substitutes</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "You want it? You buy from ME. There is no 'next shop'. Take it or leave it."
                            </p>
                        </div>

                        {/* Panel 3 */}
                        <div className="comic-panel" style={{ background: '#fffacd', border: '3px solid #b8860b', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #b8860b' }}>
                            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#ffd700', color: '#000', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #b8860b', transform: 'rotate(2deg)', fontSize: '0.8rem' }}>BLOCKED</div>
                            <div style={{ fontSize: '2rem', color: '#b8860b', marginBottom: '5px', textAlign: 'center' }}><FaBan /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #b8860b', paddingBottom: '5px', marginBottom: '10px', color: '#b8860b' }}>Barriers</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "STOP! You cannot enter. Patents, Licenses, and Huge Costs guard my fortress."
                            </p>
                        </div>

                        {/* Panel 4 */}
                        <div className="comic-panel" style={{ background: '#e0ffff', border: '3px solid #008b8b', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #008b8b' }}>
                            <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', background: '#00ffff', color: '#000', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #008b8b', transform: 'rotate(-2deg)', fontSize: '0.8rem' }}>RULER</div>
                            <div style={{ fontSize: '2rem', color: '#008b8b', marginBottom: '5px', textAlign: 'center' }}><FaTags /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #008b8b', paddingBottom: '5px', marginBottom: '10px', color: '#008b8b' }}>Price Maker</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "I decide the Price. I can even charge you more than him (Discrimination)."
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* REVENUE SCHEDULE */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-gold"><FaTags /> Monopoly Revenue Schedule</h3>
                    <p style={{ marginBottom: '15px', color: '#ccc' }}>Notice how Price (AR) falls as output increases.</p>

                    <div className="table-responsive">
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', color: '#fff' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,215,0,0.1)' }}>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555' }}>Output (Q)</th>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555', color: '#ffd700' }}>Price (AR)</th>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555' }}>TR (P×Q)</th>
                                    <th style={{ padding: '10px', borderBottom: '1px solid #555', color: '#ff4444' }}>MR (ΔTR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { q: 1, p: 10, tr: 10, mr: 10 },
                                    { q: 2, p: 9, tr: 18, mr: 8 },
                                    { q: 3, p: 8, tr: 24, mr: 6 },
                                    { q: 4, p: 7, tr: 28, mr: 4 },
                                    { q: 5, p: 6, tr: 30, mr: 2 },
                                    { q: 6, p: 5, tr: 30, mr: 0 }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #333' }}>
                                        <td style={{ padding: '8px' }}>{row.q}</td>
                                        <td style={{ padding: '8px', color: '#ffd700' }}>{row.p}</td>
                                        <td style={{ padding: '8px' }}>{row.tr}</td>
                                        <td style={{ padding: '8px', color: '#ff4444' }}>{row.mr}</td>
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
                    <h3 className="highlight-gold">The Demand Curve (Steep)</h3>
                    <p style={{ marginBottom: '20px' }}>
                        To sell more units, a monopolist must lower the price (Law of Demand).
                        <br />
                        Hence, <strong>AR slopes downward</strong>. <strong>MR is below AR</strong> and falls twice as fast.
                        <br />
                        <span style={{ color: '#ff4444' }}>Demand is Inelastic (Steep)</span> because of no substitutes.
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={data} margin={{ top: 40, right: 30, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                <XAxis dataKey="qty" stroke="#aaa" label={{ value: 'Output', position: 'bottom', fill: '#aaa' }} />
                                <YAxis domain={[0, 14]} ticks={[0, 2, 4, 6, 8, 10, 12, 14]} stroke="#aaa" label={{ value: 'Revenue', angle: -90, position: 'left', fill: '#aaa' }} />
                                <Tooltip contentStyle={{ background: '#333', border: 'none', borderRadius: '8px' }} itemStyle={{ color: '#fff' }} />
                                {/* AR Curve */}
                                <Line type="monotone" dataKey="ar" stroke="#ffd700" strokeWidth={4} dot={{ r: 4 }} activeDot={{ r: 8 }}>
                                    <Label value="AR (Demand)" position="top" fill="#ffd700" offset={10} />
                                </Line>
                                {/* MR Curve */}
                                <Line type="monotone" dataKey="mr" stroke="#ff4444" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4 }}>
                                    <Label value="MR" position="bottom" fill="#ff4444" offset={10} />
                                </Line>

                                <ReferenceLine x={3} stroke="rgba(255,255,255,0.1)" label={{ position: 'insideTopRight', value: 'Steep Slope', fill: 'rgba(255,255,255,0.5)', fontSize: 12 }} />
                            </LineChart>
                        </ResponsiveContainer>
                        <div style={{ textAlign: 'center', color: '#ccc', marginTop: '10px' }}>
                            <strong>Steep Curves: Low Elasticity (Ed &lt; 1)</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Monopoly;
