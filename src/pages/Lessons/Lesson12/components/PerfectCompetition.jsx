import React, { useState } from 'react';
import { FaBalanceScale, FaInfinity, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine, Label } from 'recharts';
import '../../Lesson5/components/lesson5.css';

const PerfectCompetition = () => {
    // Interactive State: Industry Price determines Firm's Price
    const [marketPrice, setMarketPrice] = useState(30);

    const data = [
        { qty: 0, price: marketPrice },
        { qty: 10, price: marketPrice },
        { qty: 20, price: marketPrice },
        { qty: 30, price: marketPrice },
        { qty: 40, price: marketPrice },
        { qty: 50, price: marketPrice },
    ];

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Section 2</span>
                <h2 className="section-title-lesson">Perfect Competition</h2>
                <p className="section-subtitle-lesson">The World of Price Takers</p>
            </div>

            {/* COMIC BOOK STYLE DEFINITION & FEATURES */}
            <div className="comic-section" style={{
                background: '#fff',
                color: '#000',
                padding: '30px',
                borderRadius: '5px',
                border: '4px solid #000',
                boxShadow: '10px 10px 0 #333',
                fontFamily: '"Comic Neue", cursive',
                maxWidth: '100%',
                margin: '20px 0'
            }}>

                {/* COMIC HEADER */}
                <div style={{ borderBottom: '3px dashed #000', paddingBottom: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '2rem', textTransform: 'uppercase', color: '#000' }}>THE PERFECT COMPETITION</h1>
                        <span style={{ background: '#000', color: '#fff', padding: '2px 8px', fontWeight: 'bold' }}>MARKET STRUCTURE #1</span>
                    </div>
                    <div style={{ border: '3px solid #000', padding: '10px', transform: 'rotate(-2deg)', fontWeight: 'bold', background: '#ffd700' }}>
                        IDEAL MARKET <br /> (THEORETICAL)
                    </div>
                </div>

                {/* PANEL 1: DEFINITION */}
                <div style={{ border: '3px solid #000', padding: '20px', marginBottom: '30px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                    <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#000', color: '#fff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        PANEL 1: WHAT IS IT?
                    </div>
                    <h3 style={{ marginTop: '10px', fontSize: '1.5rem' }}>Definition</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                        A market structure where there are a <strong>Large Number of Buyers and Sellers</strong> interacting to sell a <strong>Homogeneous (Identical) Product</strong> at a <strong>Uniform Price</strong>.
                    </p>
                </div>

                {/* PANEL 2: FEATURES GRID */}
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Key Features</h3>
                <div className="perfect-competition-grid">

                    {/* Feature 1 */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa', background: '#e6fffa' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <FaInfinity size={24} />
                            <h4 style={{ margin: 0 }}>Large No. of Sellers</h4>
                        </div>
                        <p>No single seller can influence the price. They are just a drop in the ocean! Share is insignificant.</p>
                    </div>

                    {/* Feature 2 */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa', background: '#fffbe6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <FaCheckCircle size={24} />
                            <h4 style={{ margin: 0 }}>Homogeneous Product</h4>
                        </div>
                        <p>Products are 100% identical. <strong>Perfect Substitutes</strong>. Buyers don't care who they buy from.</p>
                    </div>

                    {/* Feature 3 */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa', background: '#f0f5ff' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <FaArrowRight size={24} />
                            <h4 style={{ margin: 0 }}>Free Entry & Exit</h4>
                        </div>
                        <p>No barriers! Abnormal profit attracts new firms. Losses force firms to leave. Long run = Normal Profit.</p>
                    </div>

                    {/* Feature 4 */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa', background: '#fff0f6' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <FaBalanceScale size={24} />
                            <h4 style={{ margin: 0 }}>Price Taker</h4>
                        </div>
                        <p>The <strong>INDUSTRY</strong> sets the price (Demand = Supply). The <strong>FIRM</strong> just accepts it.</p>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#888' }}>
                    LESSON 12 // PERFECT COMPETITION
                </div>

            </div>

            {/* INTERACTIVE GRAPH */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan">The Demand Curve (AR & MR)</h3>
                    <p style={{ marginBottom: '20px' }}>
                        Since the firm sells at a uniform price, <strong>Price = AR = MR</strong>.
                        <br />
                        The Curve is a <strong>Horizontal Straight Line</strong> parallel to X-Axis (Perfectly Elastic, Ed = ∞).
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px', borderRadius: '15px' }}>
                        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                            <span>Industry Price Set At: </span>
                            <input
                                type="range"
                                min="10" max="50" step="10"
                                value={marketPrice}
                                onChange={(e) => setMarketPrice(Number(e.target.value))}
                                style={{ accentColor: '#00ffff' }}
                            />
                            <span style={{ color: '#00ffff', fontWeight: 'bold' }}>₹{marketPrice}</span>
                        </div>

                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                <XAxis dataKey="qty" stroke="#aaa" label={{ value: 'Output (Units)', position: 'bottom', fill: '#aaa' }} />
                                <YAxis domain={[0, 60]} stroke="#aaa" label={{ value: 'Revenue/Price', angle: -90, position: 'left', fill: '#aaa' }} />
                                <Tooltip contentStyle={{ background: '#333', border: 'none' }} />
                                <Line
                                    type="monotone"
                                    dataKey="price"
                                    stroke="#00ffff"
                                    strokeWidth={4}
                                    dot={false}
                                    name="Price (AR=MR)"
                                    animationDuration={500}
                                />
                                <ReferenceLine y={marketPrice} stroke="gold" strokeDasharray="3 3" />
                            </LineChart>
                        </ResponsiveContainer>
                        <div style={{ textAlign: 'center', color: '#00ffff', marginTop: '10px' }}>
                            <strong>Demand Curve is Perfectly Elastic (Horizontal)</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PerfectCompetition;
