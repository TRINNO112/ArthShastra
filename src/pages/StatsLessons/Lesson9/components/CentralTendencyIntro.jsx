import React from 'react';
import { FaChartBar, FaSortAmountDown } from 'react-icons/fa';

const CentralTendencyIntro = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Section Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">MEDIAN & MODE</h2>
                <p className="stats-subtitle">Beyond the Mean: Position & Frequency</p>
            </div>

            <div className="stats-grid-2">
                {/* ────── Median Card ────── */}
                <div className="stats-card">
                    <h3 className="stats-card-heading primary">
                        <FaSortAmountDown /> Median (M)
                    </h3>

                    <p style={{ color: 'var(--stats-text)', lineHeight: '1.7', marginBottom: '20px' }}>
                        The <strong style={{ color: '#fff' }}>Middle Value</strong> when data is arranged in ascending or descending order.
                        It divides the series into <strong style={{ color: '#3b82f6' }}>two equal parts</strong>.
                    </p>

                    {/* Visual: The "Middle" Concept */}
                    <div style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: 'var(--stats-radius)', border: '1px solid var(--stats-border)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--stats-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            Visual Concept
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            {[10, 20, 35, 40, 50].map((val, i) => (
                                <div key={i} style={{
                                    width: '45px',
                                    height: '45px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 'var(--stats-radius)',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    background: i === 2 ? 'var(--stats-primary)' : 'var(--stats-white)',
                                    color: i === 2 ? '#fff' : 'var(--stats-text-muted)',
                                    border: i === 2 ? '2px solid var(--stats-primary-light)' : '1px solid var(--stats-border)',
                                    transform: i === 2 ? 'scale(1.15)' : 'none',
                                    boxShadow: i === 2 ? '0 0 15px rgba(59, 130, 246, 0.3)' : 'none',
                                    transition: 'all 0.3s'
                                }}>
                                    {val}
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--stats-primary-light)', fontSize: '0.9rem', fontWeight: '600' }}>
                            M = 35 (Middle Item)
                        </div>
                    </div>

                    {/* NCERT Formula with proper subscripts */}
                    <div className="stats-formula" style={{ marginTop: '15px' }}>
                        <span>M = L + </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                <sup>N</sup>&frasl;<sub>2</sub> − c.f.
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>f</span>
                        </span>
                        <span> × h</span>
                    </div>

                    {/* Legend */}
                    <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--stats-text-muted)', lineHeight: '1.8' }}>
                        <strong style={{ color: '#fff' }}>Where:</strong> L = Lower limit of median class,
                        N = Total frequency, c.f. = Cumulative freq. of preceding class,
                        f = Freq. of median class, h = Class width
                    </div>
                </div>

                {/* ────── Mode Card ────── */}
                <div className="stats-card">
                    <h3 className="stats-card-heading secondary">
                        <FaChartBar /> Mode (Z)
                    </h3>

                    <p style={{ color: 'var(--stats-text)', lineHeight: '1.7', marginBottom: '20px' }}>
                        The value that occurs <strong style={{ color: '#fff' }}>Most Frequently</strong>.
                        It represents the <strong style={{ color: '#10b981' }}>highest density</strong> of data.
                    </p>

                    {/* Visual: REPEATED VALUES concept */}
                    <div style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: 'var(--stats-radius)', border: '1px solid var(--stats-border)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--stats-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            Visual Concept — Which value repeats the most?
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            {[2, 5, 3, 5, 7, 5, 8, 5].map((val, i) => (
                                <div key={i} style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 'var(--stats-radius)',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    background: val === 5 ? 'var(--stats-success)' : 'var(--stats-white)',
                                    color: val === 5 ? '#fff' : 'var(--stats-text-muted)',
                                    border: val === 5 ? '2px solid #34d399' : '1px solid var(--stats-border)',
                                    boxShadow: val === 5 ? '0 0 12px rgba(16, 185, 129, 0.3)' : 'none',
                                    transition: 'all 0.3s'
                                }}>
                                    {val}
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '12px' }}>
                            <span style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem' }}>
                                5 appears <strong style={{ color: 'var(--stats-success)' }}>4 times</strong> (most frequent)
                            </span>
                            <div style={{ color: 'var(--stats-success)', fontSize: '1rem', fontWeight: '700', marginTop: '4px' }}>
                                ∴ Z = 5
                            </div>
                        </div>
                    </div>

                    {/* NCERT Formula with proper subscripts */}
                    <div className="stats-formula" style={{ marginTop: '15px' }}>
                        <span>Z = l<sub>1</sub> + </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                f<sub>1</sub> − f<sub>0</sub>
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>
                                2f<sub>1</sub> − f<sub>0</sub> − f<sub>2</sub>
                            </span>
                        </span>
                        <span> × h</span>
                    </div>

                    {/* Legend */}
                    <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--stats-text-muted)', lineHeight: '1.8' }}>
                        <strong style={{ color: '#fff' }}>Where:</strong> l<sub>1</sub> = Lower limit of modal class,
                        f<sub>1</sub> = Freq. of modal class, f<sub>0</sub> = Freq. of preceding class,
                        f<sub>2</sub> = Freq. of succeeding class, h = Class width
                    </div>
                </div>
            </div>

            {/* Quick Comparison Card */}
            <div className="stats-card" style={{ marginTop: '30px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: 'var(--stats-warning)' }}>
                    Quick Comparison
                </h3>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Median (M)</th>
                                <th>Mode (Z)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Definition</td>
                                <td>Middle value in ordered data</td>
                                <td>Most frequently occurring value</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Type</td>
                                <td>Positional Average</td>
                                <td>Value with highest frequency</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Affected by Extremes?</td>
                                <td style={{ color: 'var(--stats-success)' }}>No ✓</td>
                                <td style={{ color: 'var(--stats-success)' }}>No ✓</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Can be found graphically?</td>
                                <td>Yes (Ogive)</td>
                                <td>Yes (Histogram)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Quote Card */}
            <div className="stats-card" style={{ marginTop: '20px', textAlign: 'center', background: 'linear-gradient(45deg, #1e293b, #0f172a)' }}>
                <p style={{ color: '#cbd5e1', fontStyle: 'italic', fontSize: '1.1rem' }}>
                    "Statistics is the grammar of science."
                    <br /><span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>— Karl Pearson</span>
                </p>
            </div>
        </div>
    );
};

export default CentralTendencyIntro;
