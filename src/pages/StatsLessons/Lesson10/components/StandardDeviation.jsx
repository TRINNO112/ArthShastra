import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCalculator, FaEye, FaEyeSlash } from 'react-icons/fa';
import { sdProblems } from './DispersionData';

const StandardDeviation = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [showSolution, setShowSolution] = useState({});

    const toggleProblem = (id) => setExpandedId(expandedId === id ? null : id);
    const toggleSolution = (id) => setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">STANDARD DEVIATION (S.D.)</h2>
                <p className="stats-subtitle">The Most Widely Used Measure of Dispersion</p>
            </div>

            {/* Formula Reference — all as stacked fractions */}
            <div className="stats-definition" style={{ marginBottom: '24px' }}>
                <div style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    {/* Direct Method */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                        <strong style={{ color: '#fff' }}>Direct Method:</strong>
                        <span>&sigma; = </span>
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.6rem', marginRight: '2px' }}>&#8730;</span>
                            <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', borderLeft: '2px solid #fff', paddingLeft: '6px' }}>
                                <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>&Sigma;f<sub>i</sub>(x<sub>i</sub> - X&#772;)<sup>2</sup></span>
                                <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                            </span>
                        </span>
                    </div>
                    {/* Step Deviation */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                        <strong style={{ color: '#fff' }}>Step Deviation:</strong>
                        <span>&sigma; = h</span>
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <span style={{ fontSize: '1.6rem', marginRight: '2px' }}>&#8730;</span>
                            <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', borderLeft: '2px solid #fff', paddingLeft: '6px' }}>
                                <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 6px 4px' }}>&Sigma;f<sub>i</sub>d<sub>i</sub><sup>2</sup></span>
                                <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                            </span>
                        </span>
                        <span> - (</span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 6px 4px' }}>&Sigma;f<sub>i</sub>d<sub>i</sub></span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                        <span>)<sup>2</sup></span>
                    </div>
                    {/* Variance */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                        <strong style={{ color: '#fff' }}>Variance:</strong>
                        <span>&sigma;<sup>2</sup> = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>&Sigma;f<sub>i</sub>(x<sub>i</sub> - X&#772;)<sup>2</sup></span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                    </div>
                    {/* C.V. */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <strong style={{ color: '#fff' }}>C.V.</strong>
                        <span> = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>&sigma;</span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>X&#772;</span>
                        </span>
                        <span> &times; 100</span>
                        <span style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem', marginLeft: '8px' }}>(Lower = More Consistent)</span>
                    </div>
                </div>
            </div>

            {/* Two Formula Visuals */}
            <div className="stats-grid-2" style={{ marginBottom: '24px' }}>
                {/* Direct Formula */}
                <div className="stats-formula" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#ec4899', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '1px', display: 'block', width: '100%', marginBottom: '6px' }}>DIRECT METHOD</span>
                    <span>&sigma; = </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '2rem', lineHeight: '1', marginRight: '2px' }}>&#8730;</span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', borderLeft: '2px solid #fff', paddingLeft: '6px' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                &Sigma;f<sub>i</sub>(x<sub>i</sub> - X&#772;)<sup>2</sup>
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                    </span>
                </div>

                {/* Step Deviation Formula */}
                <div className="stats-formula" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ color: '#3b82f6', fontWeight: '700', fontSize: '0.75rem', letterSpacing: '1px', display: 'block', width: '100%', marginBottom: '6px' }}>STEP DEVIATION</span>
                    <span>&sigma; = h </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '2rem', lineHeight: '1', marginRight: '2px' }}>&#8730;</span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', borderLeft: '2px solid #fff', paddingLeft: '6px' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                &Sigma;f<sub>i</sub>d<sub>i</sub><sup>2</sup>
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                    </span>
                    <span> - </span>
                    <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                        <span>(</span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                &Sigma;f<sub>i</sub>d<sub>i</sub>
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                        <span>)<sup>2</sup></span>
                    </span>
                </div>
            </div>

            {/* Key Properties */}
            <div className="stats-note info" style={{ marginBottom: '24px' }}>
                <strong>Key Properties of Standard Deviation:</strong>
                <ul style={{ margin: '8px 0 0 0', padding: '0 0 0 20px' }}>
                    <li>S.D. is always &gt;= 0 (can never be negative)</li>
                    <li>S.D. = 0 only when ALL values are identical (no spread at all)</li>
                    <li>Not affected by change of origin, but IS affected by change of scale</li>
                    <li>S.D. is the BEST measure - it uses all observations and is least affected by sampling</li>
                </ul>
            </div>

            {/* Symbol Legend */}
            <div className="stats-note info" style={{ marginBottom: '24px', fontSize: '0.85rem' }}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Symbol Guide:</strong>
                <span>
                    <strong>&sigma;</strong> = Standard Deviation &nbsp;|&nbsp;
                    <strong>&sigma;<sup>2</sup></strong> = Variance &nbsp;|&nbsp;
                    <strong>X&#772;</strong> = Arithmetic Mean &nbsp;|&nbsp;
                    <strong>&Sigma;</strong> = Summation &nbsp;|&nbsp;
                    <strong>f<sub>i</sub></strong> = Frequency of ith class &nbsp;|&nbsp;
                    <strong>x<sub>i</sub></strong> = Value or Mid-point &nbsp;|&nbsp;
                    <strong>d<sub>i</sub></strong> = Step deviation (x<sub>i</sub> - A) / h &nbsp;|&nbsp;
                    <strong>A</strong> = Assumed Mean &nbsp;|&nbsp;
                    <strong>h</strong> = Class width &nbsp;|&nbsp;
                    <strong>N</strong> = Total observations (&Sigma;f) &nbsp;|&nbsp;
                    <strong>C.V.</strong> = Coefficient of Variation
                </span>
            </div>

            {/* Problem Cards */}
            {sdProblems.map((problem, index) => (
                <div key={problem.id} className="stats-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
                    {/* Header */}
                    <div
                        onClick={() => toggleProblem(problem.id)}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '20px 24px', cursor: 'pointer',
                            background: expandedId === problem.id ? 'rgba(236, 72, 153, 0.05)' : 'transparent',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '32px', height: '32px', borderRadius: 'var(--stats-radius)',
                                background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899',
                                fontWeight: 'bold', fontSize: '0.9rem', border: '1px solid rgba(236, 72, 153, 0.2)'
                            }}>{index + 1}</span>
                            <div>
                                <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>{problem.title}</h3>
                                <p style={{ color: 'var(--stats-text-muted)', margin: '4px 0 0 0', fontSize: '0.85rem' }}>{problem.question}</p>
                            </div>
                        </div>
                        <span style={{ color: 'var(--stats-text-muted)' }}>{expandedId === problem.id ? <FaChevronUp /> : <FaChevronDown />}</span>
                    </div>

                    {/* Body */}
                    <AnimatePresence>
                        {expandedId === problem.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ borderTop: '1px solid var(--stats-border)' }}
                            >
                                <div style={{ padding: '24px', background: 'var(--stats-bg-alt)' }}>
                                    {/* Data Table */}
                                    {problem.rows && (
                                        <div className="stats-table-container" style={{ marginBottom: '20px' }}>
                                            <table className="stats-table">
                                                <thead><tr>{problem.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                                                <tbody>
                                                    {problem.rows.map((row, i) => (
                                                        <tr key={i}>
                                                            <td style={{ fontWeight: '500', color: '#fff' }}>{row.class || row.x}</td>
                                                            <td>{row.f}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {/* Solution Toggle */}
                                    <button
                                        className="stats-btn stats-btn-primary"
                                        onClick={() => toggleSolution(problem.id)}
                                        style={{ width: '100%', justifyContent: 'center', marginBottom: '16px' }}
                                    >
                                        {showSolution[problem.id] ? <FaEyeSlash /> : <FaEye />}
                                        {showSolution[problem.id] ? 'Hide Solution' : 'Show Solution'}
                                    </button>

                                    <AnimatePresence>
                                        {showSolution[problem.id] && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                {/* Solution Table */}
                                                {problem.solution.tableRows && (
                                                    <div className="stats-table-container" style={{ marginBottom: '20px' }}>
                                                        <table className="stats-table">
                                                            <thead><tr>{problem.solution.tableHeaders.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
                                                            <tbody>
                                                                {problem.solution.tableRows.map((row, i) => (
                                                                    <tr key={i}>
                                                                        {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}

                                                <div style={{ background: 'var(--stats-white)', borderRadius: 'var(--stats-radius-lg)', padding: '24px', border: '1px solid var(--stats-border)' }}>
                                                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ec4899', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
                                                        <FaCalculator /> Solution Steps
                                                    </h4>
                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                        {problem.solution.steps.map((step, i) => (
                                                            <li key={i} style={{ display: 'flex', gap: '12px', color: 'var(--stats-text)', padding: '8px 0', borderBottom: i < problem.solution.steps.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none', lineHeight: '1.6' }}>
                                                                <span style={{ color: 'var(--stats-text-muted)', fontFamily: 'var(--font-mono)', minWidth: '24px' }}>{i + 1}.</span>
                                                                <span>{step}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                                        <div className="stats-highlight" style={{ background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
                                                            <span style={{ color: '#ec4899', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>S.D.</span>
                                                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>= {problem.solution.result}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default StandardDeviation;
