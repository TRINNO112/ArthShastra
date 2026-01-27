import React from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaExclamationTriangle, FaSearchPlus, FaLightbulb, FaCheckCircle, FaMoneyBillWave, FaClock, FaGavel, FaUserTie } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ReferenceLine } from 'recharts';
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
                        <ResponsiveContainer width="100%" height={350}>
                            <LineChart data={SUPPLY_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis
                                    type="number"
                                    dataKey="quantity"
                                    domain={[0, 60]}
                                    stroke="#aaa"
                                    tickCount={7}
                                >
                                    <Label value="Quantity Supplied (Units)" position="bottom" fill="#aaa" offset={0} />
                                </XAxis>
                                <YAxis
                                    type="number"
                                    dataKey="price"
                                    domain={[0, 6]}
                                    stroke="#aaa"
                                    tickCount={7}
                                >
                                    <Label value="Price (₹)" angle={-90} position="left" fill="#aaa" />
                                </YAxis>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(20,20,20,0.95)', border: '1px solid #00ff00', borderRadius: '8px', padding: '10px' }}
                                    itemStyle={{ color: '#00ff00' }}
                                    formatter={(value, name) => [name === 'price' ? `₹${value}` : value, name === 'price' ? 'Price' : 'Qty']}
                                    labelFormatter={(value) => `Quantity: ${value}`}
                                    cursor={{ stroke: 'rgba(255,255,255,0.2)' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="price"
                                    stroke="#00ff00"
                                    strokeWidth={3}
                                    dot={{ r: 6, fill: '#00ff00', strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 8 }}
                                    name="Price"
                                    animationDuration={1500}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                        <div className="diagram-caption text-center" style={{ marginTop: '1rem', color: '#00ff00', fontWeight: 'bold' }}>
                            <FaArrowUp /> Upward Sloping Curve: Direct Relationship
                        </div>
                    </div>

                </div>
            </div>

            {/* REASONS FOR UPWARD SLOPE */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.6s' }}>
                <div className="content-card">
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
            </div>

            {/* ASSUMPTIONS & EXCEPTIONS DETAILED */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.8s', marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-red animate-fadeInLeft"><FaExclamationTriangle /> Critical Analysis</h3>

                    {/* ASSUMPTIONS BLOCK */}
                    <div style={{ marginTop: '2rem', marginBottom: '3rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'rgba(255, 165, 0, 0.2)', padding: '10px', borderRadius: '10px', color: 'orange' }}><FaCheckCircle size={24} /></div>
                            <h4 style={{ fontSize: '1.4rem', color: 'orange', margin: 0 }}>Assumptions = Determinants Held Constant</h4>
                        </div>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem', marginLeft: '5px' }}>The Law of Supply is valid only if all determining factors <strong>(other than Own Price)</strong> remain unchanged. This is <em>Ceteris Paribus</em>.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div className="assumption-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid orange' }}>
                                <strong>1. Constant Input Prices (Pi)</strong>
                                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>Cost of raw materials/wages must not change.</p>
                            </div>
                            <div className="assumption-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid orange' }}>
                                <strong>2. Constant Technology (T)</strong>
                                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>No new invention or breakdown of machinery.</p>
                            </div>
                            <div className="assumption-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid orange' }}>
                                <strong>3. Stable Govt Policy (G)</strong>
                                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>Taxation and Subsidy rates remain fixed.</p>
                            </div>
                            <div className="assumption-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid orange' }}>
                                <strong>4. Stable Future Expectations (Pf)</strong>
                                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>No speculation about future price changes.</p>
                            </div>
                            <div className="assumption-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid orange' }}>
                                <strong>5. Related Goods Prices (Pr)</strong>
                                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>Prices of substitutes (e.g., Tea/Coffee) must not change.</p>
                            </div>
                            <div className="assumption-card" style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid orange' }}>
                                <strong>6. Goal of Firm (Gp)</strong>
                                <p style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '5px' }}>Objective (Profit vs Sales Max) must remain same.</p>
                            </div>
                        </div>
                    </div>

                    {/* EXCEPTIONS BLOCK */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'rgba(255, 68, 68, 0.2)', padding: '10px', borderRadius: '10px', color: '#ff4444' }}><FaExclamationTriangle size={24} /></div>
                            <h4 style={{ fontSize: '1.4rem', color: '#ff4444', margin: 0 }}>Exceptions (When Law Fails)</h4>
                        </div>
                        <p style={{ color: '#ccc', marginBottom: '1.5rem', marginLeft: '5px' }}>In these special cases, the Supply Curve may be Vertical, Horizontal, or even Backward Bending!</p>

                        <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>

                            {/* Exception 1: Perishable */}
                            <div className="reason-card-interactive red">
                                <div className="card-icon"><FaClock /></div>
                                <h5>1. Perishable Goods</h5>
                                <p className="desc-sm">Vegetables, Fish, Milk</p>
                                <div style={{ marginTop: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                    Sellers cannot wait for high prices. They <strong>MUST sell</strong> even at low prices before the product rots.
                                    <br />
                                    <em style={{ color: '#ffaaaa' }}>Curve becomes Vertical (Fixed Supply).</em>
                                </div>
                            </div>

                            {/* Exception 2: Rear Items */}
                            <div className="reason-card-interactive purple">
                                <div className="card-icon"><FaGavel /></div>
                                <h5>2. Auctions / Rare Items</h5>
                                <p className="desc-sm">Mona Lisa Painting</p>
                                <div style={{ marginTop: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                    Supply is limited to <strong>ONE unit</strong>. No matter how high the price goes (Millions), supply cannot increase.
                                </div>
                            </div>

                            {/* Exception 3: Labor Supply */}
                            <div className="reason-card-interactive cyan">
                                <div className="card-icon"><FaUserTie /></div>
                                <h5>3. Backward Bending Supply</h5>
                                <p className="desc-sm">Labor Market</p>
                                <div style={{ marginTop: '10px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                                    At very high wage rates, workers prefer <strong>Leisure over Work</strong>.
                                    <br />
                                    Wage ↑ leads to Supply of Labor ↓.
                                    <br />
                                    <em style={{ color: '#aaffaa' }}>Curve bends backwards.</em>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default LawOfSupply;
