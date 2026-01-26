import React from 'react';
import { lesson10Data } from '../../data/lesson10Data';

const EquilibriumSchedule = () => {
    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Numerical Analysis</span>
                <h2 className="section-title-lesson">Equilibrium Schedule</h2>
                <p className="section-subtitle-lesson">
                    Observe how Profit behaves as Output increases.
                </p>
            </div>

            <div className="premium-card">
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-secondary)' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                                <th style={{ padding: '15px', textAlign: 'center', color: 'var(--neon-gold)' }}>Output (Q)</th>
                                <th style={{ padding: '15px', textAlign: 'center' }}>Price (P)</th>
                                <th style={{ padding: '15px', textAlign: 'center' }}>TR</th>
                                <th style={{ padding: '15px', textAlign: 'center' }}>TC</th>
                                <th style={{ padding: '15px', textAlign: 'center', color: 'var(--neon-cyan)' }}>MR</th>
                                <th style={{ padding: '15px', textAlign: 'center', color: 'var(--neon-cyan)' }}>MC</th>
                                <th style={{ padding: '15px', textAlign: 'center', color: 'var(--neon-green)' }}>Profit (TR-TC)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lesson10Data.scheduleData.map((row, index) => {
                                const isEquilibrium = row.q === 6; // Hardcoded for this specific dataset
                                const isLoss = row.profit < 0;

                                return (
                                    <tr key={index} style={{
                                        backgroundColor: isEquilibrium ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
                                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'background 0.3s'
                                    }}>
                                        <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold' }}>{row.q}</td>
                                        <td style={{ padding: '15px', textAlign: 'center' }}>{row.price}</td>
                                        <td style={{ padding: '15px', textAlign: 'center' }}>{row.tr}</td>
                                        <td style={{ padding: '15px', textAlign: 'center' }}>{row.tc}</td>
                                        <td style={{ padding: '15px', textAlign: 'center', color: 'var(--neon-cyan)' }}>{row.mr}</td>
                                        <td style={{ padding: '15px', textAlign: 'center', color: 'var(--neon-cyan)' }}>{row.mc}</td>
                                        <td style={{ padding: '15px', textAlign: 'center', fontWeight: 'bold', color: isLoss ? 'var(--error)' : 'var(--neon-green)' }}>
                                            {row.profit}
                                            {isEquilibrium && <span style={{ marginLeft: '10px', fontSize: '0.8rem', backgroundColor: 'var(--neon-gold)', color: 'black', padding: '2px 6px', borderRadius: '4px' }}>MAX</span>}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="note-text" style={{ textAlign: 'center', marginTop: '20px' }}>
                    Note: At Q=5, MR &gt; MC (10 &gt; 7), so produce more. At Q=6, MR = MC (10=10), Equilibrium. At Q=7, MC &gt; MR (15 &gt; 10), Stop.
                </div>
            </div>
        </div>
    );
};

export default EquilibriumSchedule;
