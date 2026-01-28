import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, ReferenceLine } from 'recharts';
import { FaChartArea } from 'react-icons/fa';
import '../lesson9.css';

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
            <div className="market-header">
                <span className="market-status" style={{ borderColor: 'var(--trade-red)', color: 'var(--trade-red)', animation: 'none' }}>● CASE STUDY 2</span>
                <h2 className="market-title">Imperfect Competition</h2>
                <p style={{ color: '#aaa' }}>MARKET CONDITION: <strong>PRICE MAKER</strong> (Volatile Price)</p>
            </div>

            <div className="market-grid">

                {/* AR & MR Chart */}
                <div className="trading-card red">
                    <div className="card-header-row">
                        <span className="stock-symbol text-gold">AR & MR DOWN-TREND</span>
                        <span className="stock-price text-red-400">▼ BEARISH</span>
                    </div>

                    <div className="terminal-chart">
                        <span className="terminal-overlay">SELLING PRESSURE</span>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                                <XAxis dataKey="q" stroke="#666"><Label value="Output (Q)" position="bottom" fill="#666" /></XAxis>
                                <YAxis stroke="#666" domain={[-5, 12]}><Label value="Price ($)" angle={-90} position="insideLeft" fill="#666" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
                                <ReferenceLine y={0} stroke="#444" />
                                <Line type="monotone" dataKey="p" stroke="#00ff88" strokeWidth={3} name="AR (Price)" />
                                <Line type="monotone" dataKey="mr" stroke="#ff4444" strokeWidth={3} strokeDasharray="5 5" name="MR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 68, 68, 0.05)', borderLeft: '3px solid #ff4444' }}>
                        <h4 style={{ color: '#fff', margin: 0 }}>MARKET ANALYSIS</h4>
                        <p style={{ color: '#aaa', margin: '5px 0 0 0' }}>
                            To sell more, Price must drop. <strong>MR falls faster</strong> than AR and can become negative (Loss).
                        </p>
                    </div>
                </div>

                {/* TR Chart */}
                <div className="trading-card gold">
                    <div className="card-header-row">
                        <span className="stock-symbol" style={{ color: 'var(--trade-gold)' }}>TOTAL REVENUE</span>
                        <FaChartArea style={{ color: 'var(--trade-gold)' }} />
                    </div>

                    <div className="terminal-chart">
                        <span className="terminal-overlay">PEAK VOLUME</span>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                                <XAxis dataKey="q" stroke="#666"><Label value="Output (Q)" position="bottom" fill="#666" /></XAxis>
                                <YAxis stroke="#666"><Label value="Revenue ($)" angle={-90} position="insideLeft" fill="#666" /></YAxis>
                                <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff' }} />
                                <Line type="monotone" dataKey="tr" stroke="#ffd700" strokeWidth={3} name="TR" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 215, 0, 0.05)', borderLeft: '3px solid #ffd700' }}>
                        <h4 style={{ color: '#fff', margin: 0 }}>TREND LINE</h4>
                        <p style={{ color: '#aaa', margin: '5px 0 0 0' }}>
                            TR rises initially, reaches a <strong>Peak</strong> (where MR=0), and then falls.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default RevenueCurvesImperfect;
