import React from 'react';
import { FaBookOpen, FaTable } from 'react-icons/fa';

const TextualPresentation = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>TEXTUAL PRESENTATION</h2>
            <p className="stats-subtitle">The standard narrative method of presenting data.</p>

            <div className="stats-definition">
                <h4 style={{ color: 'var(--stats-primary)', margin: '0 0 10px 0' }}>Definition</h4>
                <p className="stats-definition-text">
                    In textual presentation, data is described within the text. When the quantity of data is
                    not very large, this method of presentation is more suitable.
                </p>
            </div>

            <div className="stats-grid-2">
                <div className="stats-card">
                    <h3 className="stats-card-heading secondary">Example (Textual)</h3>
                    <p style={{ marginTop: '10px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        "In a survey of 50 students, 30 preferred Economics, 15 preferred History,
                        and 5 students had no preference."
                    </p>
                    <div style={{ marginTop: '15px' }}>
                        <span className="stats-badge warning" style={{ marginRight: '10px' }}>Suitability: Small Data</span>
                        <span className="stats-badge danger">Drawback: Hard to Analyze</span>
                    </div>
                </div>

                <div className="stats-card">
                    <h3 className="stats-card-heading primary">Better Alternative?</h3>
                    <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid #334155' }}>
                                    <th style={{ textAlign: 'left', padding: '8px' }}>Subject</th>
                                    <th style={{ textAlign: 'right', padding: '8px' }}>Students</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px' }}>Economics</td>
                                    <td style={{ textAlign: 'right', padding: '8px' }}>30</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px' }}>History</td>
                                    <td style={{ textAlign: 'right', padding: '8px' }}>15</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px' }}>None</td>
                                    <td style={{ textAlign: 'right', padding: '8px' }}>5</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '0.9rem', color: '#94a3b8' }}>
                        <em>Tables make comparison easier even for small data sets.</em>
                    </p>
                </div>
            </div>

            <h3 className="stats-title" style={{ fontSize: '1.5rem', marginTop: '40px' }}>Suitability</h3>
            <ul className="stats-list">
                <li>When the quantity of data is not very large.</li>
                <li>When the data is part of a larger descriptive report.</li>
                <li>When exact magnitude is more important than comparison.</li>
            </ul>
        </div>
    );
};

export default TextualPresentation;
