import React from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine, FaExclamationTriangle, FaSearchPlus, FaLightbulb, FaCheckCircle, FaMoneyBillWave, FaClock, FaGavel, FaUserTie, FaBolt, FaExchangeAlt } from 'react-icons/fa';
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

            {/* REASONS FOR UPWARD SLOPE - COMIC STYLE */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.6s', marginTop: '30px', background: 'transparent', boxShadow: 'none', border: 'none' }}>
                <div className="section-header-lesson" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h3 className="highlight-cyan animate-fadeInLeft" style={{ fontFamily: '"Bangers", cursive', fontSize: '2.5rem', textShadow: '2px 2px 0px #000' }}>
                        <FaSearchPlus /> WHY UPWARD SLOPING? (3 REASONS)
                    </h3>
                </div>

                <div className="comic-grid reasons-grid-responsive" style={{ gap: '25px' }}>

                    {/* REASON 1: PROFIT */}
                    <div className="comic-panel" style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', border: '3px solid #000', boxShadow: '8px 8px 0px #000' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #ffd700', paddingBottom: '10px', marginBottom: '10px' }}>
                            <h4 style={{ margin: 0, fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>1. PROFIT MOTIVE</h4>
                            <FaMoneyBillWave style={{ fontSize: '1.5rem', color: '#ffd700' }} />
                        </div>
                        <p style={{ fontFamily: '"Comic Neue", cursive', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            "Price is High? My Profit Margin is HUGE!"
                        </p>
                        <div style={{ background: '#ffd700', padding: '5px', textAlign: 'center', fontWeight: 'bold', borderRadius: '5px', border: '1px solid #000' }}>
                            So I sell MORE!
                        </div>
                    </div>

                    {/* REASON 2: STOCK */}
                    <div className="comic-panel" style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', border: '3px solid #000', boxShadow: '8px 8px 0px #000' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #00ffff', paddingBottom: '10px', marginBottom: '10px' }}>
                            <h4 style={{ margin: 0, fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>2. STOCK RELEASE</h4>
                            <FaCheckCircle style={{ fontSize: '1.5rem', color: '#00ffff' }} />
                        </div>
                        <p style={{ fontFamily: '"Comic Neue", cursive', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            "I was hiding stock in my warehouse... waiting for this moment."
                        </p>
                        <div style={{ background: '#00ffff', padding: '5px', textAlign: 'center', fontWeight: 'bold', borderRadius: '5px', border: '1px solid #000' }}>
                            Price Rise = Stock Released!
                        </div>
                    </div>

                    {/* REASON 3: NEW ENTRANTS */}
                    <div className="comic-panel" style={{ background: '#fff', color: '#000', padding: '20px', borderRadius: '12px', border: '3px solid #000', boxShadow: '8px 8px 0px #000' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #bf00ff', paddingBottom: '10px', marginBottom: '10px' }}>
                            <h4 style={{ margin: 0, fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>3. NEW ENTRANTS</h4>
                            <FaArrowUp style={{ fontSize: '1.5rem', color: '#bf00ff' }} />
                        </div>
                        <p style={{ fontFamily: '"Comic Neue", cursive', fontSize: '1.1rem', fontWeight: 'bold' }}>
                            "Did someone say PROFITS? We are joining the market too!"
                        </p>
                        <div style={{ background: '#bf00ff', color: '#fff', padding: '5px', textAlign: 'center', fontWeight: 'bold', borderRadius: '5px', border: '1px solid #000' }}>
                            New Firms = More Total Supply
                        </div>
                    </div>

                </div>
            </div>

            {/* ASSUMPTIONS & EXCEPTIONS DETAILED */}
            {/* COMIC BOOK: ASSUMPTIONS & EXCEPTIONS */}
            <div className="content-card animate-fadeInUp" style={{ animationDelay: '0.8s', marginTop: '40px', background: 'transparent', border: 'none', boxShadow: 'none' }}>

                {/* ASSUMPTIONS: THE SHIELD */}
                <div style={{ marginBottom: '50px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <span style={{ background: '#ff9800', color: '#000', padding: '5px 15px', fontWeight: 'bold', fontFamily: '"Bangers", cursive', letterSpacing: '2px', fontSize: '1.2rem', transform: 'rotate(-2deg)', display: 'inline-block', border: '2px solid #000' }}>
                            CETERIS PARIBUS
                        </span>
                        <h3 className="highlight-gold animate-fadeInLeft" style={{ fontFamily: '"Bangers", cursive', fontSize: '2.5rem', textShadow: '3px 3px 0px #000', color: '#fff', marginTop: '10px' }}>
                            <FaCheckCircle /> THE 6 ASSUMPTIONS (SHIELDS)
                        </h3>
                        <p style={{ color: '#ccc' }}>The Law ONLY works if these stay CONSTANT!</p>
                    </div>

                    <div className="comic-card-container">
                        <div className="comic-card assumption-shield">
                            <div className="comic-title" style={{ color: '#e65100' }}>1. INPUT PRICES (Pi)</div>
                            <div className="comic-desc">Cost of Raw Materials & Wages must NOT change.</div>
                            <FaMoneyBillWave style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#e65100' }} />
                        </div>
                        <div className="comic-card assumption-shield">
                            <div className="comic-title" style={{ color: '#e65100' }}>2. TECHNOLOGY (T)</div>
                            <div className="comic-desc">No new inventions! Tech must remain stagnant.</div>
                            <FaBolt style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#e65100' }} />
                        </div>
                        <div className="comic-card assumption-shield">
                            <div className="comic-title" style={{ color: '#e65100' }}>3. GOVT POLICY (G)</div>
                            <div className="comic-desc">Taxation and Subsidy rates are FROZEN.</div>
                            <FaGavel style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#e65100' }} />
                        </div>
                        <div className="comic-card assumption-shield">
                            <div className="comic-title" style={{ color: '#e65100' }}>4. EXPECTATIONS (Pf)</div>
                            <div className="comic-desc">No speculation about future price wars!</div>
                            <FaLightbulb style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#e65100' }} />
                        </div>
                        <div className="comic-card assumption-shield">
                            <div className="comic-title" style={{ color: '#e65100' }}>5. RELATED GOODS (Pr)</div>
                            <div className="comic-desc">Prices of Tea/Coffee substitutes don't move.</div>
                            <FaExchangeAlt style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#e65100' }} />
                        </div>
                        <div className="comic-card assumption-shield">
                            <div className="comic-title" style={{ color: '#e65100' }}>6. FIRM GOAL (Gp)</div>
                            <div className="comic-desc">Objective (Profit vs Sales) is fixed.</div>
                            <FaUserTie style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#e65100' }} />
                        </div>
                    </div>
                </div>

                {/* EXCEPTIONS: THE VILLAINS */}
                <div>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <span style={{ background: '#d32f2f', color: '#fff', padding: '5px 15px', fontWeight: 'bold', fontFamily: '"Bangers", cursive', letterSpacing: '2px', fontSize: '1.2rem', transform: 'rotate(2deg)', display: 'inline-block', border: '2px solid #fff' }}>
                            LAW BREAKERS
                        </span>
                        <h3 className="highlight-red animate-fadeInLeft" style={{ fontFamily: '"Bangers", cursive', fontSize: '2.5rem', textShadow: '3px 3px 0px #000', color: '#ff4444', marginTop: '10px' }}>
                            <FaExclamationTriangle /> WHEN THE LAW FAILS!
                        </h3>
                        <p style={{ color: '#ccc' }}>Special cases where Price ↑ does NOT mean Supply ↑</p>
                    </div>

                    <div className="comic-card-container">

                        {/* VILLAIN 1 */}
                        <div className="comic-card exception-villain">
                            <div className="comic-badge">ERROR 404</div>
                            <div className="comic-title" style={{ color: '#b71c1c' }}>1. PERISHABLE GOODS</div>
                            <div className="comic-desc">
                                Vegetables, Milk, Fish.<br /><br />
                                <strong>Why?</strong> Sellers MUST sell before it rots, even if Price is Low!<br />
                                <em style={{ fontSize: '0.9rem' }}>Curve becomes Vertical.</em>
                            </div>
                            <FaClock style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#b71c1c' }} />
                        </div>

                        {/* VILLAIN 2 */}
                        <div className="comic-card exception-villain">
                            <div className="comic-badge">RARE</div>
                            <div className="comic-title" style={{ color: '#b71c1c' }}>2. RARE AUCTIONS</div>
                            <div className="comic-desc">
                                Mona Lisa, Antique Coins.<br /><br />
                                <strong>Why?</strong> Supply is FIXED at 1 unit. Even if Price is $1 Billion, Supply is 1.<br />
                                <em style={{ fontSize: '0.9rem' }}>Vertical Supply Curve.</em>
                            </div>
                            <FaGavel style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#b71c1c' }} />
                        </div>

                        {/* VILLAIN 3 */}
                        <div className="comic-card exception-villain">
                            <div className="comic-badge">LAZY</div>
                            <div className="comic-title" style={{ color: '#b71c1c' }}>3. BACKWARD BENDING</div>
                            <div className="comic-desc">
                                Labor Market.<br /><br />
                                <strong>Why?</strong> At super high wages, workers prefer Leisure over Work.<br />
                                <em style={{ fontSize: '0.9rem' }}>Wage ↑ Supply ↓ (Opposite!)</em>
                            </div>
                            <FaUserTie style={{ position: 'absolute', bottom: '10px', right: '10px', opacity: 0.2, fontSize: '3rem', color: '#b71c1c' }} />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default LawOfSupply;
