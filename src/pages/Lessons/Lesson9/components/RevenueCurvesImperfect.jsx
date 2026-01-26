import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import '../../css/lessons.css';

const data = [
    { q: 1, p: 10, tr: 10, mr: 10 },
    { q: 2, p: 9, tr: 18, mr: 8 },
    { q: 3, p: 8, tr: 24, mr: 6 },
    { q: 4, p: 7, tr: 28, mr: 4 },
    { q: 5, p: 6, tr: 30, mr: 2 },
    { q: 6, p: 5, tr: 30, mr: 0 },
    { q: 7, p: 4, tr: 28, mr: -2 },
    { q: 8, p: 3, tr: 24, mr: -4 },
];

const RevenueCurvesImperfect = () => {
    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson text-purple-400">Case 2</span>
                <h2 className="section-title-lesson">Imperfect Competition</h2>
                <p className="section-subtitle-lesson">Monopoly & Monopolistic Competition (Price falls with Output).</p>
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
                                <YAxis stroke="#ccc" domain={[-5, 12]}><Label value="Price/Revenue" angle={-90} position="insideLeft" fill="#ccc" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                                <ReferenceLine y={0} stroke="#666" />
                                <Line type="monotone" dataKey="p" stroke="#00ff88" strokeWidth={3} name="AR (Price)" />
                                <Line type="monotone" dataKey="mr" stroke="#ffd700" strokeWidth={3} strokeDasharray="5 5" name="MR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="chart-caption">
                        <span className="text-green-400 font-bold">AR</span> slopes downward. <span className="text-gold font-bold">MR</span> falls twice as fast and becomes negative.
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
                        <span className="text-cyan-400 font-bold">TR</span> rises, reaches maximum, then falls (Inverted U-Shape).
                    </p>
                </div>

            </div>

            <div className="content-card mt-6 border-l-4 border-purple-500">
                <ul className="bullet-list">
                    <li>To sell more, firm must reduce price (Law of Demand).</li>
                    <li><strong className="text-gold">MR {"<"} AR</strong> at all levels of output.</li>
                    <li>MR can be zero or negative, but AR is always positive.</li>
                </ul>
            </div>

        </section>
    );
};
export default RevenueCurvesImperfect;
