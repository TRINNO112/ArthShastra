import React, { useState } from 'react';
import { FaUsers, FaChartArea, FaPlus } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import '../../Lesson5/components/lesson5.css';

const MarketSupplyDerivation = () => {
    // Data: Price, Firm A Supply, Firm B Supply
    const derivationData = [
        { price: 10, sa: 10, sb: 5, sm: 15 },
        { price: 20, sa: 20, sb: 10, sm: 30 },
        { price: 30, sa: 30, sb: 15, sm: 45 },
        { price: 40, sa: 40, sb: 20, sm: 60 },
        { price: 50, sa: 50, sb: 25, sm: 75 },
    ];

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 1 - Section 4</span>
                <h2 className="section-title-lesson">Market Supply Curve</h2>
                <p className="section-subtitle-lesson">Deriving Market Supply by Lateral Summation</p>
            </div>

            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-cyan"><FaUsers /> Concept</h3>
                    <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>
                        Market Supply is the <strong>Horizontal Summation</strong> of all individual supply curves in the market.
                        <br />
                        <span style={{ color: '#00ffff' }}>Market Supply (Sm) = Supply of Firm A (Sa) + Supply of Firm B (Sb) + ...</span>
                    </p>

                    {/* DERIVATION TABLE */}
                    <div className="table-responsive" style={{ marginBottom: '2rem' }}>
                        <table className="table" style={{ width: '100%', textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <thead style={{ background: 'rgba(0,255,255,0.1)', color: '#00ffff' }}>
                                <tr>
                                    <th style={{ padding: '1rem' }}>Price (Px)</th>
                                    <th>Firm A (Units)</th>
                                    <th>Firm B (Units)</th>
                                    <th style={{ color: '#ffd700' }}>Market Supply (A + B)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {derivationData.map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                        <td style={{ padding: '0.8rem', fontWeight: 'bold' }}>₹{row.price}</td>
                                        <td>{row.sa}</td>
                                        <td>{row.sb}</td>
                                        <td style={{ fontWeight: 'bold', color: '#ffd700' }}>{row.sm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* GRAPHS: A + B = Market */}
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>

                        {/* Firm A Graph */}
                        <div style={{ flex: 1, minWidth: '250px', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '10px' }}>
                            <h5 style={{ textAlign: 'center', color: '#ccc' }}>Firm A</h5>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={derivationData}>
                                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                    <XAxis dataKey="sa" hide />
                                    <YAxis domain={[0, 60]} hide />
                                    <Line type="monotone" dataKey="sa" stroke="#ff4444" strokeWidth={3} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <FaPlus style={{ color: '#aaa' }} />

                        {/* Firm B Graph */}
                        <div style={{ flex: 1, minWidth: '250px', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '10px' }}>
                            <h5 style={{ textAlign: 'center', color: '#ccc' }}>Firm B</h5>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={derivationData}>
                                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                    <XAxis dataKey="sb" hide />
                                    <YAxis domain={[0, 60]} hide />
                                    <Line type="monotone" dataKey="sb" stroke="#00ff00" strokeWidth={3} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div style={{ fontSize: '2rem', color: '#aaa' }}>=</div>

                        {/* Market Graph */}
                        <div style={{ flex: 1, minWidth: '250px', background: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '10px', border: '1px solid #ffd700' }}>
                            <h5 style={{ textAlign: 'center', color: '#ffd700' }}>Market (Flatter)</h5>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={derivationData}>
                                    <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                                    <XAxis dataKey="sm" hide />
                                    <YAxis domain={[0, 60]} hide />
                                    <Line type="monotone" dataKey="sm" stroke="#ffd700" strokeWidth={3} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', marginTop: '15px', color: '#aaa', fontSize: '0.9rem' }}>
                        <em>Note: Market Supply Curve is flatter (more elastic) than individual curves.</em>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MarketSupplyDerivation;
