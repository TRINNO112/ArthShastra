import React from 'react';
import { FaChartLine, FaCalendarAlt, FaRulerCombined } from 'react-icons/fa';

const TimeIntro = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">ARITHMETIC LINE GRAPHS (TIME SERIES)</h2>
            <p className="stats-subtitle">Visualizing Data Over Time</p>

            <div className="stats-grid-2">
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaChartLine style={{ color: '#10b981' }} /> What is a Time Series Graph?
                    </h3>
                    <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                        When statistical data depends on time (like years, months, weeks), it is called a <strong>Time Series</strong>.
                        Graphs representing such data are called <strong>Arithmetic Line Graphs</strong>.
                    </p>
                    <div className="stats-badge info" style={{ marginTop: '20px' }}>
                        <strong>Common Examples:</strong>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>India's Population from 1951 to 2011.</li>
                            <li>Monthly Rainfall in Delhi.</li>
                            <li>A Company's Annual Profits.</li>
                        </ul>
                    </div>
                </div>

                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Rules for Construction</h3>
                    <div style={{ display: 'grid', gap: '15px' }}>
                        <div className="rule-item" style={{ display: 'flex', gap: '15px', padding: '10px', background: '#1e293b', borderRadius: '8px' }}>
                            <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', height: 'fit-content' }}>
                                <FaCalendarAlt style={{ color: '#3b82f6', fontSize: '1.2rem' }} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>X-Axis: Time</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>Always plot Time (Years, Months) on the horizontal X-axis.</p>
                            </div>
                        </div>

                        <div className="rule-item" style={{ display: 'flex', gap: '15px', padding: '10px', background: '#1e293b', borderRadius: '8px' }}>
                            <div style={{ padding: '10px', background: 'rgba(236, 72, 153, 0.2)', borderRadius: '50%', height: 'fit-content' }}>
                                <FaRulerCombined style={{ color: '#ec4899', fontSize: '1.2rem' }} />
                            </div>
                            <div>
                                <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>Y-Axis: Value</h4>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>Plot the variable value (Quantity, Profit, etc.) on the vertical Y-axis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeIntro;
