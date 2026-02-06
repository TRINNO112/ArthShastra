import React, { useState } from 'react';
import { FaDatabase, FaChartPie, FaCogs, FaArrowRight } from 'react-icons/fa';

const TypesOfTables = () => {
    const [activeTab, setActiveTab] = useState('purpose');

    const tabs = [
        { id: 'purpose', label: 'By Purpose', icon: <FaDatabase /> },
        { id: 'originality', label: 'By Originality', icon: <FaCogs /> },
        { id: 'construction', label: 'By Construction', icon: <FaChartPie /> }
    ];

    // Helper for table containers
    const TableContainer = ({ title, type, color, children }) => (
        <div style={{ flex: 1, minWidth: '350px', background: '#0f172a', borderRadius: '12px', border: `1px solid ${color || '#334155'}`, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
            <div style={{ background: color || '#334155', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', color: '#fff', fontSize: '1rem' }}>{title}</span>
                <span style={{ fontSize: '0.75rem', background: 'rgba(0,0,0,0.3)', padding: '4px 10px', borderRadius: '12px', color: '#fff', fontWeight: '500' }}>{type}</span>
            </div>
            <div style={{ padding: '20px', background: '#1e293b' }}>
                {children}
            </div>
        </div>
    );

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>CLASSIFICATION OF TABLES</h2>
            <p className="stats-subtitle">Explore the distinct structural and functional differences.</p>

            {/* Navigation - Responsive */}
            <div>
                {/* Desktop Tabs (Hidden on Mobile) */}
                <div className="desktop-only" style={{ display: 'flex', justifyContent: 'center', background: '#0f172a', padding: '5px', borderRadius: '50px', width: 'fit-content', margin: '20px auto 40px auto', border: '1px solid #334155' }}>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                padding: '12px 25px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                borderRadius: '40px',
                                border: 'none',
                                background: activeTab === tab.id ? 'var(--stats-primary)' : 'transparent',
                                color: activeTab === tab.id ? '#fff' : '#94a3b8',
                                cursor: 'pointer',
                                fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                                transition: 'all 0.3s ease',
                                fontSize: '0.95rem'
                            }}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Dropdown (Visible on Mobile) */}
                <div className="mobile-only" style={{ display: 'none', width: '100%', maxWidth: '400px', margin: '20px auto 40px auto' }}>
                    <div style={{ position: 'relative' }}>
                        <select
                            value={activeTab}
                            onChange={(e) => setActiveTab(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px',
                                paddingLeft: '45px',
                                background: '#1e293b',
                                color: '#fff',
                                border: '1px solid #475569',
                                borderRadius: '12px',
                                fontSize: '1rem',
                                outline: 'none',
                                appearance: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {tabs.map(tab => (
                                <option key={tab.id} value={tab.id}>
                                    {tab.label}
                                </option>
                            ))}
                        </select>
                        <div style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--stats-primary)', pointerEvents: 'none' }}>
                            {tabs.find(t => t.id === activeTab)?.icon}
                        </div>
                        <div style={{ position: 'absolute', right: '15px', top: '40%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }}>
                            ▼
                        </div>
                    </div>
                </div>

                {/* Responsive Styles */}
                <style>{`
                    @media (max-width: 768px) {
                        .desktop-only { display: none !important; }
                        .mobile-only { display: block !important; }
                    }
                `}</style>
            </div>

            {/* Content Area */}
            <div className="animate-fadeIn">

                {/* 1. BY PURPOSE */}
                {activeTab === 'purpose' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <TableContainer title="General Purpose (Reference Table)" type="Detailed Data" color="#3b82f6">
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>
                                A "Storehouse of Information". Provides exhaustive raw data for reference (e.g., Census). Note how detailed and specific the figures are.
                            </p>
                            <div style={{ overflowX: 'auto', border: '1px solid #334155', borderRadius: '8px' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', color: '#cbd5e1', whiteSpace: 'nowrap' }}>
                                    <thead>
                                        <tr style={{ background: '#0f172a', color: '#fff' }}>
                                            <th style={{ textAlign: 'left', padding: '12px 15px', borderBottom: '2px solid #334155' }}>District</th>
                                            <th style={{ textAlign: 'right', padding: '12px 15px', borderBottom: '2px solid #334155' }}>Total Pop.</th>
                                            <th style={{ textAlign: 'right', padding: '12px 15px', borderBottom: '2px solid #334155' }}>Males</th>
                                            <th style={{ textAlign: 'right', padding: '12px 15px', borderBottom: '2px solid #334155' }}>Females</th>
                                            <th style={{ textAlign: 'right', padding: '12px 15px', borderBottom: '2px solid #334155' }}>Rural</th>
                                            <th style={{ textAlign: 'right', padding: '12px 15px', borderBottom: '2px solid #334155' }}>Urban</th>
                                            <th style={{ textAlign: 'right', padding: '12px 15px', borderBottom: '2px solid #334155' }}>Literacy (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ fontFamily: '"Roboto Mono", monospace' }}>
                                        {[
                                            { d: 'State A', t: '84,231,101', m: '42,100,001', f: '42,131,100', r: '50,000,000', u: '34,231,101', l: '71.5%' },
                                            { d: 'State B', t: '65,400,200', m: '33,200,100', f: '32,200,100', r: '40,100,200', u: '25,300,000', l: '75.2%' },
                                            { d: 'State C', t: '45,120,330', m: '23,000,110', f: '22,120,220', r: '28,000,000', u: '17,120,330', l: '82.1%' },
                                        ].map((row, i) => (
                                            <tr key={i} style={{ borderBottom: '1px dashed #334155', background: i % 2 === 0 ? 'transparent' : '#0f172a' }}>
                                                <td style={{ padding: '12px 15px', fontWeight: 'bold' }}>{row.d}</td>
                                                <td style={{ textAlign: 'right', padding: '12px 15px', letterSpacing: '1px' }}>{row.t}</td>
                                                <td style={{ textAlign: 'right', padding: '12px 15px', letterSpacing: '1px' }}>{row.m}</td>
                                                <td style={{ textAlign: 'right', padding: '12px 15px', letterSpacing: '1px' }}>{row.f}</td>
                                                <td style={{ textAlign: 'right', padding: '12px 15px', letterSpacing: '1px' }}>{row.r}</td>
                                                <td style={{ textAlign: 'right', padding: '12px 15px', letterSpacing: '1px' }}>{row.u}</td>
                                                <td style={{ textAlign: 'right', padding: '12px 15px', color: '#10b981' }}>{row.l}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </TableContainer>

                        <TableContainer title="Special Purpose (Summary Table)" type="Analytical" color="#10b981">
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>
                                Derived from general data to answer a *specific* question. Here, we only glimpse at Urbanization trends.
                            </p>
                            <div style={{ background: '#020617', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
                                <div style={{ borderBottom: '1px solid #334155', paddingBottom: '10px', marginBottom: '15px', fontWeight: 'bold', color: '#10b981', fontSize: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>State</span>
                                    <span>Urban Population Share</span>
                                </div>
                                {[
                                    { s: 'State A', v: '40.6%' },
                                    { s: 'State B', v: '38.7%' },
                                    { s: 'State C', v: '37.9%' }
                                ].map((row, idx) => (
                                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                        <span style={{ fontSize: '1rem', color: '#fff', width: '100px' }}>{row.s}</span>
                                        <div style={{ flex: 1, margin: '0 20px', height: '12px', background: '#1e293b', borderRadius: '6px', overflow: 'hidden' }}>
                                            <div style={{ width: row.v, height: '100%', background: '#10b981', borderRadius: '6px' }}></div>
                                        </div>
                                        <span style={{ fontSize: '1rem', color: '#10b981', fontWeight: 'bold', width: '60px', textAlign: 'right' }}>{row.v}</span>
                                    </div>
                                ))}
                            </div>
                        </TableContainer>
                    </div>
                )}

                {activeTab === 'originality' && (
                    <div className="stats-grid-2">
                        <TableContainer title="Original Table (Absolute)" type="Raw Data" color="#8b5cf6">
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>
                                Data presented exactly as collected. Absolute numbers.
                            </p>
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1', fontSize: '1rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #8b5cf6', color: '#8b5cf6' }}>
                                        <th style={{ textAlign: 'left', padding: '12px' }}>Year</th>
                                        <th style={{ textAlign: 'right', padding: '12px' }}>Wheat Production (Tons)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ background: '#1e293b' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>2021</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontFamily: '"Roboto Mono", monospace' }}>5,000</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>2022</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontFamily: '"Roboto Mono", monospace' }}>7,500</td>
                                    </tr>
                                    <tr style={{ background: '#1e293b' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>2023</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontFamily: '"Roboto Mono", monospace' }}>10,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContainer>

                        <TableContainer title="Derived Table (Relative)" type="Ratios" color="#ec4899">
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>
                                Data converted to percentages. Reveals the "Rate of Change".
                            </p>
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1', fontSize: '1rem' }}>
                                <thead>
                                    <tr style={{ borderBottom: '2px solid #ec4899', color: '#ec4899' }}>
                                        <th style={{ textAlign: 'left', padding: '12px' }}>Year</th>
                                        <th style={{ textAlign: 'right', padding: '12px' }}>Y-o-Y Growth Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ background: '#1e293b' }}>
                                        <td style={{ padding: '12px' }}>2021</td>
                                        <td style={{ textAlign: 'right', padding: '12px', color: '#64748b' }}>-</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px' }}>2022</td>
                                        <td style={{ textAlign: 'right', padding: '12px', color: '#ec4899', fontWeight: 'bold' }}>+50.0%</td>
                                    </tr>
                                    <tr style={{ background: '#1e293b' }}>
                                        <td style={{ padding: '12px' }}>2023</td>
                                        <td style={{ textAlign: 'right', padding: '12px', color: '#ec4899', fontWeight: 'bold' }}>+33.3%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContainer>
                    </div>
                )}

                {/* 3. BY CONSTRUCTION */}
                {activeTab === 'construction' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        <TableContainer title="Simple Table" type="One Characteristic" color="#f59e0b">
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>
                                Describes only one characteristic of the data (Faculty Stream).
                            </p>
                            <table style={{ width: '100%', maxWidth: '500px', margin: '0 auto', borderCollapse: 'collapse', color: '#000', background: '#fff' }}>
                                <thead>
                                    <tr style={{ background: '#f59e0b', color: '#000' }}>
                                        <th style={{ textAlign: 'left', padding: '12px' }}>Faculty</th>
                                        <th style={{ textAlign: 'right', padding: '12px' }}>No. of Students</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '12px' }}>Arts</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>10</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '12px' }}>Commerce</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>25</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '12px' }}>Science</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>15</td>
                                    </tr>
                                    <tr style={{ borderTop: '2px solid #000', background: '#fef3c7' }}>
                                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Total</td>
                                        <td style={{ textAlign: 'right', padding: '12px', fontWeight: 'bold' }}>50</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TableContainer>

                        <TableContainer title="Manifold (Complex) Table" type="Multiple Characteristics" color="#ef4444">
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '15px' }}>
                                Describes multiple characteristics simultaneously (Faculty, Gender, Marital Status). Notice how headers are nested.
                            </p>
                            <div style={{ overflowX: 'auto', border: '1px solid #ef4444', borderRadius: '8px' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#cbd5e1', fontSize: '0.9rem', textAlign: 'center' }}>
                                    <thead>
                                        <tr>
                                            <th rowSpan="3" style={{ border: '1px solid #ef4444', padding: '10px', verticalAlign: 'middle', width: '20%', background: '#1e293b' }}>Faculty</th>
                                            <th colSpan="4" style={{ border: '1px solid #ef4444', padding: '10px', background: '#1e293b', borderBottom: '1px solid #ef4444' }}>Gender of Staff</th>
                                        </tr>
                                        <tr>
                                            <th colSpan="2" style={{ border: '1px solid #ef4444', padding: '8px', background: '#1e293b' }}>Males</th>
                                            <th colSpan="2" style={{ border: '1px solid #ef4444', padding: '8px', background: '#1e293b' }}>Females</th>
                                        </tr>
                                        <tr>
                                            <th style={{ border: '1px solid #ef4444', padding: '8px', fontSize: '0.8rem', background: '#1e293b' }}>Married</th>
                                            <th style={{ border: '1px solid #ef4444', padding: '8px', fontSize: '0.8rem', background: '#1e293b' }}>Single</th>
                                            <th style={{ border: '1px solid #ef4444', padding: '8px', fontSize: '0.8rem', background: '#1e293b' }}>Married</th>
                                            <th style={{ border: '1px solid #ef4444', padding: '8px', fontSize: '0.8rem', background: '#1e293b' }}>Single</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{ background: '#0f172a' }}>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Arts</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>4</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>2</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>3</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>1</td>
                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Commerce</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>10</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>5</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>8</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>2</td>
                                        </tr>
                                        <tr style={{ background: '#0f172a' }}>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px', textAlign: 'left', fontWeight: 'bold' }}>Science</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>12</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>8</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>5</td>
                                            <td style={{ border: '1px solid #ef4444', padding: '12px' }}>15</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TableContainer>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TypesOfTables;
