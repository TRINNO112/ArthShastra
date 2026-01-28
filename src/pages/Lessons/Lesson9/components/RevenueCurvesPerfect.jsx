import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { FaStore, FaChartLine } from 'react-icons/fa';
import '../lesson9.css';

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
            <div className="market-header">
                <span className="market-status" style={{ borderColor: 'var(--trade-blue)', color: 'var(--trade-blue)' }}>● CASE STUDY 1</span>
                <h2 className="market-title">Perfect Competition</h2>
                <p style={{ color: '#aaa' }}>MARKET CONDITION: <strong>PRICE TAKER</strong> (Stable Price)</p>
            </div>

            <div className="market-grid">

                {/* AR & MR Chart */}
                <div className="trading-card green">
                    <div className="card-header-row">
                        <span className="stock-symbol text-green-400">AR & MR</span>
                        <span className="stock-price">$10.00</span>
                    </div>

                    <div className="terminal-chart">
                        <span className="terminal-overlay">LIVE MARKET DATA</span>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                                <XAxis dataKey="q" stroke="#666"><Label value="Output (Q)" position="bottom" fill="#666" /></XAxis>
                                <YAxis stroke="#666" domain={[0, 15]}><Label value="Price ($)" angle={-90} position="insideLeft" fill="#666" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
                                <Line type="monotone" dataKey="ar" stroke="#00ff88" strokeWidth={3} name="AR = Price" />
                                <Line type="monotone" dataKey="mr" stroke="#ffd700" strokeWidth={3} strokeDasharray="5 5" name="MR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0, 255, 136, 0.05)', borderLeft: '3px solid #00ff88' }}>
                        <h4 style={{ color: '#fff', margin: 0 }}>MARKET ANALYSIS</h4>
                        <p style={{ color: '#aaa', margin: '5px 0 0 0' }}>
                            AR is <strong>Horizontal</strong> (Perfectly Elastic). Since Price is constant, MR coincides with AR.
                        </p>
                    </div>
                </div>

                {/* TR Chart */}
                <div className="trading-card blue">
                    <div className="card-header-row">
                        <span className="stock-symbol" style={{ color: 'var(--trade-blue)' }}>TOTAL REVENUE</span>
                        <FaChartLine style={{ color: 'var(--trade-blue)' }} />
                    </div>

                    <div className="terminal-chart">
                        <span className="terminal-overlay">ACCUMULATION</span>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                                <XAxis dataKey="q" stroke="#666"><Label value="Output (Q)" position="bottom" fill="#666" /></XAxis>
                                <YAxis stroke="#666"><Label value="Revenue ($)" angle={-90} position="insideLeft" fill="#666" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
                                <Line type="monotone" dataKey="tr" stroke="#00e5ff" strokeWidth={3} name="TR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0, 229, 255, 0.05)', borderLeft: '3px solid #00e5ff' }}>
                        <h4 style={{ color: '#fff', margin: 0 }}>TREND LINE</h4>
                        <p style={{ color: '#aaa', margin: '5px 0 0 0' }}>
                            TR increases at a <strong>constant rate</strong>. It is a straight line passing through the origin.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default RevenueCurvesPerfect;
