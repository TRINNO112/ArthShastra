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

            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-gold"><FaBalanceScale /> Definition & Features</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        A market structure where there are a <strong>Large Number of Buyers and Sellers</strong> interacting to sell a <strong>Homogeneous (Identical) Product</strong> at a <strong>Uniform Price</strong>.
                    </p>

                    <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="reason-card-interactive cyan">
                            <div className="card-icon"><FaInfinity /></div>
                            <h4>Large No. of Sellers</h4>
                            <p>No single seller can influence the price. Like a drop in the ocean.</p>
                        </div>
                        <div className="reason-card-interactive gold">
                            <div className="card-icon"><FaCheckCircle /></div>
                            <h4>Homogeneous Product</h4>
                            <p>Products are identical (size, shape, quality). e.g., Grade A Wheat.</p>
                        </div>
                        <div className="reason-card-interactive purple">
                            <div className="card-icon"><FaArrowRight /></div>
                            <h4>Free Entry & Exit</h4>
                            <p>No barriers. Firms can enter for profit and leave if making loss.</p>
                        </div>
                        <div className="reason-card-interactive red">
                            <div className="card-icon"><FaBalanceScale /></div>
                            <h4>Price Taker</h4>
                            <p>Review: The INDUSTRY sets the price (Demand = Supply). The FIRM just takes it.</p>
                        </div>
                    </div>
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
