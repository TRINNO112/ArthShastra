import React from 'react';
import { FaCheck, FaExclamationTriangle } from 'react-icons/fa';

const TableConstruction = () => {
    const features = [
        { title: "Compassable Title", desc: "Title should be compatible with the objective of the study." },
        { title: "Comparison Logic", desc: "Items to be compared should be placed in adjacent columns." },
        { title: "Special Emphasis", desc: "Headings for important items should be in bold or uppercase." },
        { title: "Ideal Size", desc: "Table size should fit the available space (paper/screen)." },
        { title: "Detailed Stubs", desc: "Row headings should be self-explanatory." },
        { title: "Units of Measurement", desc: "Must be specified (e.g., 'in Rupees', 'in kgs')." },
        { title: "Total Column", desc: "Sub-totals and Grand Totals should be present." },
        { title: "Source Note", desc: "Always mention the source if data is secondary." }
    ];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>ESSENTIALS OF A GOOD TABLE</h2>
            <p className="stats-subtitle">Guidelines for constructing an effective statistical table.</p>

            <div className="stats-grid-2">
                {features.map((feature, index) => (
                    <div key={index} className="stats-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <div style={{ background: '#0f172a', padding: '10px', borderRadius: '50%', color: '#10b981' }}>
                            <FaCheck size={20} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '5px' }}>{feature.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="stats-badge danger" style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '10px', padding: '15px' }}>
                <FaExclamationTriangle />
                <span>Do not use excessive abbreviations like 'Govt.', 'M.P.' in titles or headings as they can be confusing.</span>
            </div>
        </div>
    );
};

export default TableConstruction;
