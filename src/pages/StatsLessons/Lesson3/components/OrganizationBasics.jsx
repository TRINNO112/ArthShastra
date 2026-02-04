import React from 'react';
import { FaBoxes, FaCheckCircle } from 'react-icons/fa';

const OrganizationBasics = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>ORGANISATION: BASICS</h2>
            <p className="stats-subtitle">Why do we need to organize data?</p>

            <div className="stats-grid-2">
                <div className="stats-card">
                    <h3 className="stats-card-heading secondary">Raw Data (Unorganized)</h3>
                    <p style={{ marginBottom: '15px' }}>
                        Data collected in its original form. It is like a pile of unarranged books.
                        It is voluminous and difficult to understand.
                    </p>
                    <div style={{ background: '#0f172a', padding: '10px', borderRadius: '8px', color: '#64748b', fontFamily: 'monospace' }}>
                        45, 23, 67, 45, 89, 12, 34, 45, 67, 23...
                    </div>
                </div>
                <div className="stats-card">
                    <h3 className="stats-card-heading primary">Series (Organized)</h3>
                    <p style={{ marginBottom: '15px' }}>
                        Data arranged in a systematic order/sequence. It is like books arranged in a library.
                        It is simple and comparable.
                    </p>
                    <div style={{ background: '#0f172a', padding: '10px', borderRadius: '8px', color: '#10b981', fontFamily: 'monospace' }}>
                        Marks: 0-20 | 20-40 | 40-60<br />
                        Freq: &nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;8
                    </div>
                </div>
            </div>

            <div className="stats-definition">
                <h4 style={{ color: 'var(--stats-primary)', margin: '0 0 10px 0' }}>Definition of Classification</h4>
                <p className="stats-definition-text">
                    "Classification is the process of arranging things (either actually or notionally) in groups or classes according to their resemblances and affinities."
                    <br /><br />
                    <em>— Connor</em>
                </p>
            </div>

            <h3 className="stats-title" style={{ fontSize: '1.5rem', marginTop: '40px' }}>Objectives of Classification</h3>
            <div className="stats-grid-2">
                <ul className="stats-list">
                    <li><strong>Simplification:</strong> Converts complex mass of data into simple form.</li>
                    <li><strong>Utility:</strong> Brings out resemblance and dissimilarity clearly.</li>
                </ul>
                <ul className="stats-list">
                    <li><strong>Comparability:</strong> Makes data comparable (e.g., region-wise).</li>
                    <li><strong>Scientific Arrangement:</strong> Logical arrangement for analysis.</li>
                </ul>
            </div>
        </div>
    );
};

export default OrganizationBasics;
