import React from 'react';
import { FaGlobeAmericas, FaHospital, FaUniversity, FaChartBar, FaTools } from 'react-icons/fa';

const PracticalApplications = () => {
    return (
        <div className="practical-apps" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ borderLeft: '5px solid #10b981', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#10b981' }}>
                    <FaGlobeAmericas /> Real World Applications
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    <div className="app-case" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: '#10b981' }}><FaHospital style={{ marginRight: '10px' }} /> Healthcare Research</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>During pandemics, statistical tools calculate R-rates, vaccine efficacy, and hospital bed requirements. Without these, the response would be chaotic and unmanaged.</p>
                    </div>

                    <div className="app-case" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: '#3b82f6' }}><FaUniversity style={{ marginRight: '10px' }} /> Economic Planning</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>RBI uses Price Indices (CPI) to control inflation. If the index rises too fast, they increase interest rates to stabilize the economy—a direct use of Lesson 12 tools!</p>
                    </div>

                    <div className="app-case" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: '#f59e0b' }}><FaChartBar style={{ marginRight: '10px' }} /> Stock Market Analysis</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>Investors use Mean Deviation and Correction factors to understand market volatility. Statistical trends help predict future price movements (Probability).</p>
                    </div>

                    <div className="app-case" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: '#8b5cf6' }}><FaTools style={{ marginRight: '10px' }} /> AI & Machine Learning</h4>
                        <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>Modern gadgets (and even me, your AI!) use statistical algorithms to learn patterns. Machine learning is essentially "Statistics on steroids."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PracticalApplications;
