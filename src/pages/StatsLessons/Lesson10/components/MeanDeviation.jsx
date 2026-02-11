import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCalculator, FaEye, FaEyeSlash } from 'react-icons/fa';
import { mdProblems } from './DispersionData';

const MeanDeviation = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [showSolution, setShowSolution] = useState({});

    const toggleProblem = (id) => setExpandedId(expandedId === id ? null : id);
    const toggleSolution = (id) => setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">MEAN DEVIATION (M.D.)</h2>
                <p className="stats-subtitle">Average of Absolute Deviations</p>
            </div>

            {/* What is M.D.? */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', margin: 0 }}>
                    Mean Deviation measures how far, on average, each value is from the center (Mean or Median).
                    We take the <strong style={{ color: '#fff' }}>absolute value</strong> of each deviation (ignore the negative sign)
                    because without absolute values, positives and negatives cancel out to zero — which tells us nothing about the actual spread.
                </p>
            </div>

            {/* Formula Reference — all as stacked fractions */}
            <div className="stats-definition" style={{ marginBottom: '24px' }}>
                <div style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    {/* Individual */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                        <strong style={{ color: '#fff' }}>Individual:</strong>
                        <span>M.D.(X&#772;) = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>
                                &Sigma;|x<sub>i</sub> - X&#772;|
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                    </div>
                    {/* Discrete / Continuous */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                        <strong style={{ color: '#fff' }}>Discrete / Continuous:</strong>
                        <span>M.D.(X&#772;) = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>
                                &Sigma;f<sub>i</sub>|x<sub>i</sub> - X&#772;|
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                        </span>
                    </div>
                    {/* Coefficient */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <strong style={{ color: '#fff' }}>Coefficient of M.D.</strong>
                        <span> = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px', padding: '0 8px 4px' }}>
                                M.D.(X&#772;)
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>X&#772;</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* HTML Fraction Formula (large visual) */}
            <div className="stats-formula" style={{ marginBottom: '24px' }}>
                <span>M.D.(X&#772;) = </span>
                <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                    <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                        &Sigma;f<sub>i</sub> |x<sub>i</sub> - X&#772;|
                    </span>
                    <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                </span>
            </div>

            {/* Why Absolute? */}
            <div className="stats-note info" style={{ marginBottom: '24px' }}>
                <strong>Why use |absolute| deviations?</strong> Without absolute values, positive and negative deviations cancel each other out, always giving sum = 0. Taking absolute values ensures every deviation contributes positively to the total.
            </div>

            {/* Symbol Legend */}
            <div className="stats-note info" style={{ marginBottom: '24px', fontSize: '0.85rem' }}>
                <strong style={{ display: 'block', marginBottom: '6px' }}>Symbol Guide:</strong>
                <span>
                    <strong>M.D.</strong> = Mean Deviation &nbsp;|&nbsp;
                    <strong>X&#772;</strong> = Arithmetic Mean &nbsp;|&nbsp;
                    <strong>&Sigma;</strong> = Summation &nbsp;|&nbsp;
                    <strong>f<sub>i</sub></strong> = Frequency of ith class &nbsp;|&nbsp;
                    <strong>x<sub>i</sub></strong> = Value or Mid-point &nbsp;|&nbsp;
                    <strong>N</strong> = Total observations (&Sigma;f) &nbsp;|&nbsp;
                    <strong>|&nbsp;|</strong> = Absolute value (ignore sign)
                </span>
            </div>

            {/* Problem Cards */}
            {mdProblems.map((problem, index) => (
                <div key={problem.id} className="stats-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
                    {/* Header */}
                    <div
                        onClick={() => toggleProblem(problem.id)}
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '20px 24px', cursor: 'pointer',
                            background: expandedId === problem.id ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '32px', height: '32px', borderRadius: 'var(--stats-radius)',
                                background: 'rgba(16, 185, 129, 0.1)', color: 'var(--stats-success)',
                                fontWeight: 'bold', fontSize: '0.9rem', border: '1px solid rgba(16, 185, 129, 0.2)'
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
                                                        <div className="stats-highlight" style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                                                            <span style={{ color: 'var(--stats-success)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>M.D.</span>
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

export default MeanDeviation;
