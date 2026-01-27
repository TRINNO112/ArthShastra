import React from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaExclamationTriangle, FaSearchPlus, FaLightbulb, FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, Area } from 'recharts';
import '../../Lesson5/components/lesson5.css';

const SUPPLY_DATA = [
    { price: 1, quantity: 10 },
    { price: 2, quantity: 20 },
    { price: 3, quantity: 30 },
    { price: 4, quantity: 40 },
    { price: 5, quantity: 50 },
];

const LawOfSupply = () => {
    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 1 - Section 3</span>
                <h2 className="section-title-lesson animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Law of Supply</h2>
                <p className="section-subtitle-lesson animate-fadeInUp" style={{ animationDelay: '0.2s' }}>The Producer's Logic: Direct Relationship</p>
            </div>

            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.3s' }}>
                <div className="card-glow"></div>
                <div className="card-content">
                    <h3 className="highlight-gold animate-fadeInLeft"><FaChartLine /> The Statement of Law</h3>

                    <div className="formula-box-animated" style={{ marginTop: '1.5rem' }}>
                        <p className="term" style={{ fontStyle: 'italic', fontSize: '1.3rem', lineHeight: '1.6', color: '#fff' }}>
                            "Other things remaining constant (Ceteris Paribus), there is a <span style={{ color: '#00ff00', fontWeight: 'bold' }}>DIRECT relationship</span> between price of a commodity and its quantity supplied."
                        </p>
                    </div>

                    <div className="key-points-grid" style={{ marginTop: '2rem' }}>
                        <div className="key-point-box">
                            <div className="key-point-icon green"><FaArrowUp /></div>
                            <div>
                                <strong>Price Rises</strong>
                                <p>Quantity Supplied Rises <span style={{ color: '#00ff00' }}>↑</span></p>
                            </div>
                        </div>
                        <div className="key-point-box">
                            <div className="key-point-icon red"><FaArrowDown /></div>
                            <div>
                                <strong>Price Falls</strong>
                                <p>Quantity Supplied Falls <span style={{ color: '#ff4444' }}>↓</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive mt-4 mb-4 animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                        <h4 style={{ textAlign: 'center', color: '#ffd700', marginBottom: '1rem' }}>Supply Schedule</h4>
                        <table className="table" style={{ background: 'rgba(255, 255, 255, 0.05)', width: '100%', borderRadius: '16px', overflow: 'hidden', textAlign: 'center', borderCollapse: 'separate', borderSpacing: '0' }}>
                            <thead style={{ background: 'rgba(255, 215, 0, 0.15)', color: '#ffd700' }}>
                                <tr>
                                    <th style={{ padding: '1.2rem', borderBottom: '2px solid rgba(255,215,0,0.3)' }}>Price (₹)</th>
                                    <th style={{ borderBottom: '2px solid rgba(255,215,0,0.3)' }}>Quantity Supplied (Units)</th>
                                    <th style={{ borderBottom: '2px solid rgba(255,215,0,0.3)' }}>Producer Reaction</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SUPPLY_DATA.map((row, index) => (
                                    <tr key={index} style={{ transition: 'background 0.3s' }} className="table-row-hover">
                                        <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 'bold' }}>₹{row.price}</td>
                                        <td style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{row.quantity}</td>
                                        <td style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 'bold', color: index === 0 ? '#4da6ff' : (row.price > SUPPLY_DATA[index - 1]?.price ? '#00ff00' : '#ff4444') }}>
                                            {index === 0 ? 'Initial Point' : (row.price > SUPPLY_DATA[index - 1].price ? 'Price ↑ Output ↑' : 'Price ↓ Output ↓')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="graph-container animate-scaleIn" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '2rem', margin: '2rem 0', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h4 style={{ textAlign: 'center', color: '#00ff00', marginBottom: '1rem' }}>Supply Curve (SS)</h4>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={SUPPLY_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <defs>
                                    <linearGradient id="colorSupply" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#00ff00" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#00ff00" stopOpacity={0.05} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis type="number" dataKey="quantity" domain={[0, 60]} stroke="#aaa">
                                    <Label value="Quantity Supplied (Units)" position="bottom" fill="#aaa" offset={0} />
                                </XAxis>
                                <YAxis type="number" dataKey="price" domain={[0, 6]} stroke="#aaa">
                                    <Label value="Price (₹)" angle={-90} position="left" fill="#aaa" />
                                </YAxis>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(20,20,20,0.95)', border: '1px solid #00ff00', borderRadius: '8px', padding: '10px' }}
                                    itemStyle={{ color: '#00ff00' }}
                                    formatter={(value) => [`₹${value}`, "Price"]}
                                    labelFormatter={(value) => `Quantity: ${value}`}
                                />
                                <Area type="monotone" dataKey="price" stroke="none" fill="url(#colorSupply)" />
                                <Line type="monotone" dataKey="price" stroke="#00ff00" strokeWidth={4} dot={{ r: 6, fill: '#00ff00', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 9 }} name="Supply Curve" />
                            </AreaChart>
                        </ResponsiveContainer>
                        <div className="diagram-caption text-center" style={{ marginTop: '1rem', color: '#00ff00', fontWeight: 'bold' }}>
                            <FaArrowUp /> Upward Sloping Curve: Direct Relationship
                        </div>
                    </div>

                </div>
            </div>

            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.6s' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan animate-fadeInLeft"><FaSearchPlus /> Why does Supply Curve Slope Upward?</h3>

                    <div className="reasons-grid-enhanced" style={{ marginTop: '1.5rem' }}>
                        <div className="reason-card-interactive gold">
                            <div className="card-icon"><FaMoneyBillWave /></div>
                            <h4>1. Profit Motive</h4>
                            <p>Higher price → Higher profit margin. This is the biggest incentive for any producer to sell more.</p>
                        </div>

                        <div className="reason-card-interactive cyan">
                            <div className="card-icon"><FaCheckCircle /></div>
                            <h4>2. Stock Release</h4>
                            <p>Producers hold back stock when prices are low. When prices rise, they release stock from warehouses.</p>
                        </div>

                        <div className="reason-card-interactive purple">
                            <div className="card-icon"><FaArrowUp /></div>
                            <h4>3. New Entrants</h4>
                            <p>Rising prices signal a booming market. New firms enter to grab profits, increasing total market supply.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.8s' }}>
                <div className="card-content">
                    <h3 className="highlight-red animate-fadeInLeft"><FaExclamationTriangle /> Assumptions & Exceptions</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1.5rem' }}>
                        <div className="note-box" style={{ borderColor: '#ff4444', background: 'rgba(255, 68, 68, 0.05)' }}>
                            <strong style={{ color: '#ff4444', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'block' }}>Assumptions (Ceteris Paribus)</strong>
                            <ul className="bullet-list-small">
                                <li>Price of inputs remains constant</li>
                                <li>Technology doesn't change</li>
                                <li>Govt policy remains same</li>
                                <li>No change in future expectations</li>
                            </ul>
                        </div>

                        <div className="note-box" style={{ borderColor: '#ffd700', background: 'rgba(255, 215, 0, 0.05)' }}>
                            <strong style={{ color: '#ffd700', fontSize: '1.1rem', marginBottom: '0.5rem', display: 'block' }}>Exceptions (Law Fails When...)</strong>
                            <ul className="bullet-list-small">
                                <li><strong>Perishable Goods:</strong> Must sell even at low price (Fish/Veg)</li>
                                <li><strong>Auctions:</strong> Supply is fixed (Antique items)</li>
                                <li><strong>Backward Bending Supply:</strong> In labor market (at very high wages, people work less)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LawOfSupply;
