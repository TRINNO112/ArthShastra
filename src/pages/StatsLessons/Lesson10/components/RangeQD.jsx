import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCalculator, FaEye, FaEyeSlash } from 'react-icons/fa';
import { rangeProblems, qdProblems } from './DispersionData';

const RangeQD = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [showSolution, setShowSolution] = useState({});

    const toggleProblem = (id) => setExpandedId(expandedId === id ? null : id);
    const toggleSolution = (id) => setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));

    // Shared renderer for problem cards
    const renderProblemCard = (problem, index, color) => (
        <div key={problem.id} className="stats-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
            {/* Header */}
            <div
                onClick={() => toggleProblem(problem.id)}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 24px', cursor: 'pointer',
                    background: expandedId === problem.id ? `${color}08` : 'transparent',
                    transition: 'background 0.2s'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '32px', height: '32px', borderRadius: 'var(--stats-radius)',
                        background: `${color}15`, color: color,
                        fontWeight: 'bold', fontSize: '0.9rem', border: `1px solid ${color}30`
                    }}>{index + 1}</span>
                    <div>
                        <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>{problem.title}</h3>
                        <p style={{ color: 'var(--stats-text-muted)', margin: '4px 0 0 0', fontSize: '0.85rem' }}>{problem.question}</p>
                    </div>
                </div>
                <span style={{ color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                    {expandedId === problem.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
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
                                                    {Object.values(row).map((val, j) => <td key={j}>{val}</td>)}
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
                                            <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--stats-success)', fontWeight: 'bold', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>
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
                                                <div className="stats-highlight" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                                                    <span style={{ color, textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>Answer</span>
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
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* ═══ RANGE SECTION ═══ */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '24px' }}>
                <h2 className="stats-title">RANGE</h2>
                <p className="stats-subtitle">Simplest Measure of Dispersion</p>
            </div>

            <div className="stats-definition" style={{ marginBottom: '24px' }}>
                <div style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    <div style={{ marginBottom: '12px' }}>
                        <strong style={{ color: '#fff' }}>Range = L - S</strong>
                        <span style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem' }}> (Largest - Smallest)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        <strong style={{ color: '#fff' }}>Coefficient of Range</strong>
                        <span> = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>L - S</span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>L + S</span>
                        </span>
                    </div>
                    <span style={{ color: 'var(--stats-text-muted)' }}>Limitation: Only considers two extreme values, ignores the rest of the data.</span>
                </div>
            </div>

            {/* Symbol Legend */}
            <div className="stats-note info" style={{ marginBottom: '24px', fontSize: '0.85rem' }}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Symbol Guide:</strong>
                <span><strong>L</strong> = Largest value &nbsp;|&nbsp; <strong>S</strong> = Smallest value</span>
            </div>

            {rangeProblems.map((p, i) => renderProblemCard(p, i, '#f59e0b'))}

            {/* ═══ QUARTILE DEVIATION SECTION ═══ */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '24px', marginTop: '40px' }}>
                <h2 className="stats-title">QUARTILE DEVIATION (Q.D.)</h2>
                <p className="stats-subtitle">Inter-Quartile Range Based Measure</p>
            </div>

            <div className="stats-definition" style={{ marginBottom: '24px' }}>
                <div style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        <strong style={{ color: '#fff' }}>Q.D.</strong>
                        <span> = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>Q<sub>3</sub> - Q<sub>1</sub></span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>2</span>
                        </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                        <strong style={{ color: '#fff' }}>Coefficient of Q.D.</strong>
                        <span> = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>Q<sub>3</sub> - Q<sub>1</sub></span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>Q<sub>3</sub> + Q<sub>1</sub></span>
                        </span>
                    </div>
                    <span style={{ color: 'var(--stats-text-muted)' }}>Q<sub>1</sub> = First Quartile (25th percentile), Q<sub>3</sub> = Third Quartile (75th percentile)</span>
                </div>
            </div>

            {/* Quartile Formula */}
            <div className="stats-formula" style={{ marginBottom: '24px' }}>
                <span>Q<sub>1</sub> = L + </span>
                <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                    <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>N/4 - c.f.</span>
                    <span style={{ display: 'block', paddingTop: '4px' }}>f</span>
                </span>
                <span> x h &nbsp;&nbsp;&nbsp;&nbsp; Q<sub>3</sub> = L + </span>
                <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                    <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>3N/4 - c.f.</span>
                    <span style={{ display: 'block', paddingTop: '4px' }}>f</span>
                </span>
                <span> x h</span>
            </div>

            {/* Symbol Legend */}
            <div className="stats-note info" style={{ marginBottom: '24px', fontSize: '0.85rem' }}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Symbol Guide:</strong>
                <span>
                    <strong>Q<sub>1</sub></strong> = First Quartile (25th percentile) &nbsp;|&nbsp;
                    <strong>Q<sub>3</sub></strong> = Third Quartile (75th percentile) &nbsp;|&nbsp;
                    <strong>N</strong> = Total observations &nbsp;|&nbsp;
                    <strong>f</strong> = Frequency of quartile class &nbsp;|&nbsp;
                    <strong>c.f.</strong> = Cumulative frequency before quartile class &nbsp;|&nbsp;
                    <strong>h</strong> = Class width &nbsp;|&nbsp;
                    <strong>L</strong> = Lower limit of quartile class
                </span>
            </div>

            {qdProblems.map((p, i) => renderProblemCard(p, i, '#3b82f6'))}
        </div>
    );
};

export default RangeQD;
