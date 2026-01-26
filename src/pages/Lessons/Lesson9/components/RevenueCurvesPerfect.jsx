import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import { FaStore } from 'react-icons/fa';
import '../../css/lessons.css';

const data = [
    { q: 0, tr: 0, ar: 10, mr: 10 },
    { q: 1, tr: 10, ar: 10, mr: 10 },
    { q: 2, tr: 20, ar: 10, mr: 10 },
    { q: 3, tr: 30, ar: 10, mr: 10 },
    { q: 4, tr: 40, ar: 10, mr: 10 },
    { q: 5, tr: 50, ar: 10, mr: 10 },
];

const RevenueCurvesPerfect = () => {
    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson text-green-400">Case 1</span>
                <h2 className="section-title-lesson">Perfect Competition</h2>
                <p className="section-subtitle-lesson">When Price remains constant (Firm is a Price Taker).</p>
            </div>

            <div className="feature-grid">

                {/* AR & MR Curve */}
                <div className="content-card">
                    <h4 className="card-title text-center text-gold">AR and MR Curves</h4>
                    <div className="chart-container-fixed">
                        <ResponsiveContainer>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="q" stroke="#ccc"><Label value="Output" position="bottom" fill="#ccc" offset={0} /></XAxis>
                                <YAxis stroke="#ccc" domain={[0, 15]}><Label value="Price/Revenue" angle={-90} position="insideLeft" fill="#ccc" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                <Line type="monotone" dataKey="ar" stroke="#00ff88" strokeWidth={3} name="AR = Price" />
                                <Line type="monotone" dataKey="mr" stroke="#ffd700" strokeWidth={3} strokeDasharray="5 5" name="MR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="chart-caption">
                        <span className="text-green-400 font-bold">AR</span> and <span className="text-gold font-bold">MR</span> coincide and are horizontal (Perfectly Elastic).
                    </p>
                </div>

                {/* TR Curve */}
                <div className="content-card">
                    <h4 className="card-title text-center text-cyan-400">Total Revenue (TR) Curve</h4>
                    <div className="chart-container-fixed">
                        <ResponsiveContainer>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="q" stroke="#ccc"><Label value="Output" position="bottom" fill="#ccc" offset={0} /></XAxis>
                                <YAxis stroke="#ccc"><Label value="Total Revenue" angle={-90} position="insideLeft" fill="#ccc" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                <Line type="monotone" dataKey="tr" stroke="#00e5ff" strokeWidth={3} name="TR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="chart-caption">
                        <span className="text-cyan-400 font-bold">TR</span> is a straight line passing through origin (Constant slope).
                    </p>
                </div>

            </div>

            <div className="content-card mt-6 border-l-4 border-gold">
                <ul className="bullet-list">
                    <li>Price is constant, so <strong className="text-gold">AR = Previous MR = Current MR</strong>.</li>
                    <li>Firm can sell any quantity at the prevailing market price.</li>
                    <li>TR increases at a constant rate.</li>
                </ul>
            </div>

        </section>
    );
};
export default RevenueCurvesPerfect;
