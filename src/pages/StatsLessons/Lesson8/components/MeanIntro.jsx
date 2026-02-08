import React from 'react';
import { FaBalanceScale, FaChartLine, FaCalculator, FaUsers } from 'react-icons/fa';

const MeanIntro = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">MEASURES OF CENTRAL TENDENCY</h2>
            <p className="stats-subtitle">Understanding the "Average"</p>

            <div className="stats-grid-2">
                {/* Left: Concept */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaBalanceScale style={{ color: '#f59e0b' }} /> What is Central Tendency?
                    </h3>
                    <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '20px' }}>
                        A single value that represents the entire dataset. It describes the <strong>characteristics of the entire group</strong>.
                        It is often called the <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>"Average"</span>.
                    </p>

                    <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px' }}>
                        <h4 style={{ color: '#94a3b8', margin: '0 0 10px 0', fontSize: '0.9rem' }}>Functions of Average:</h4>
                        <ul style={{ color: '#cbd5e1', fontSize: '0.9rem', paddingLeft: '20px', lineHeight: '1.6' }}>
                            <li>To represent a brief picture of data.</li>
                            <li>To facilitate comparison (e.g., Average Income of India vs USA).</li>
                            <li>To help in decision making.</li>
                        </ul>
                    </div>
                </div>

                {/* Right: The Three Measures */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>The Three Main Measures</h3>

                    <div style={{ display: 'grid', gap: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', background: '#1e293b', borderRadius: '8px', borderLeft: '4px solid #3b82f6' }}>
                            <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%' }}>
                                <FaCalculator style={{ color: '#3b82f6' }} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', margin: 0 }}>Mean (Arithmetic Mean)</h4>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Mathematical Average (Sum / Count)</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', background: '#1e293b', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                            <div style={{ padding: '10px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '50%' }}>
                                <FaUsers style={{ color: '#10b981' }} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', margin: 0 }}>Median</h4>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Positional Average (The Middle Value)</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '10px', background: '#1e293b', borderRadius: '8px', borderLeft: '4px solid #ec4899' }}>
                            <div style={{ padding: '10px', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '50%' }}>
                                <FaChartLine style={{ color: '#ec4899' }} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', margin: 0 }}>Mode</h4>
                                <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8' }}>Most Frequent Value</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stats-card" style={{ marginTop: '30px', textAlign: 'center', background: 'linear-gradient(45deg, #1e293b, #0f172a)' }}>
                <p style={{ color: '#cbd5e1', fontStyle: 'italic', fontSize: '1.1rem' }}>
                    "An average is an attempt to find one single figure to describe the whole of figures."
                    <br /><span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>— Clark and Sekkade</span>
                </p>
            </div>
        </div>
    );
};

export default MeanIntro;
