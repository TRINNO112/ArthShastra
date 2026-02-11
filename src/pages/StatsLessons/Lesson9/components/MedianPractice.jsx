import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCalculator, FaEye, FaEyeSlash } from 'react-icons/fa';
import { medianProblems } from './CentralTendencyData';

const MedianPractice = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [showSolution, setShowSolution] = useState({});

    const toggleProblem = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const toggleSolution = (id) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">MEDIAN (M)</h2>
                <p className="stats-subtitle">Positional Average — Finding the Middle Value</p>
            </div>

            {/* Formula Reference Card */}
            <div className="stats-definition" style={{ marginBottom: '24px' }}>
                <p style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    <strong style={{ color: '#fff' }}>Individual Series:</strong> M = Size of ((N+1) ÷ 2)th item
                    <br />
                    <strong style={{ color: '#fff' }}>Discrete Series:</strong> Use cumulative frequency to locate (N+1)/2
                    <br />
                    <strong style={{ color: '#fff' }}>Continuous Series:</strong> M = L + ((N/2 − c.f.) ÷ f) × h
                </p>
            </div>

            {/* Problem Cards */}
            {medianProblems.map((problem, index) => (
                <div key={problem.id} className="stats-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
                    {/* Clickable Header */}
                    <div
                        onClick={() => toggleProblem(problem.id)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px 24px',
                            cursor: 'pointer',
                            background: expandedId === problem.id ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <span style={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: '32px', height: '32px', borderRadius: 'var(--stats-radius)',
                                background: 'rgba(59, 130, 246, 0.1)', color: 'var(--stats-primary-light)',
                                fontWeight: 'bold', fontSize: '0.9rem', border: '1px solid rgba(59, 130, 246, 0.2)'
                            }}>
                                {index + 1}
                            </span>
                            <div>
                                <h3 style={{ color: '#fff', margin: 0, fontSize: '1.1rem', fontWeight: '700' }}>
                                    {problem.title}
                                </h3>
                                <p style={{ color: 'var(--stats-text-muted)', margin: '4px 0 0 0', fontSize: '0.85rem' }}>
                                    {problem.question}
                                </p>
                            </div>
                        </div>
                        <span style={{ color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                            {expandedId === problem.id ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>

                    {/* Expandable Body */}
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
                                    {/* Original Data Table */}
                                    {problem.rows && (
                                        <div className="stats-table-container" style={{ marginBottom: '20px' }}>
                                            <table className="stats-table">
                                                <thead>
                                                    <tr>
                                                        {problem.headers.map((h, i) => (
                                                            <th key={i}>{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {problem.rows.map((row, i) => (
                                                        <tr key={i}>
                                                            {Object.values(row).map((val, j) => (
                                                                <td key={j}>{val}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}

                                    {/* ═══ SHOW SOLUTION TOGGLE ═══ */}
                                    <button
                                        className="stats-btn stats-btn-primary"
                                        onClick={() => toggleSolution(problem.id)}
                                        style={{ width: '100%', justifyContent: 'center', marginBottom: '16px' }}
                                    >
                                        {showSolution[problem.id] ? <FaEyeSlash /> : <FaEye />}
                                        {showSolution[problem.id] ? 'Hide Solution' : 'Show Solution'}
                                    </button>

                                    {/* Solution (Hidden by default) */}
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
                                                            <thead>
                                                                <tr>
                                                                    {problem.solution.tableHeaders.map((h, i) => (
                                                                        <th key={i}>{h}</th>
                                                                    ))}
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {problem.solution.tableRows.map((row, i) => (
                                                                    <tr key={i} style={{ background: row.highlight ? 'rgba(59, 130, 246, 0.1)' : 'transparent' }}>
                                                                        {Object.entries(row).filter(([k]) => k !== 'highlight').map(([k, val], j) => (
                                                                            <td key={j} style={{ fontWeight: row.highlight ? '700' : '400', color: row.highlight ? '#fff' : 'var(--stats-text)' }}>
                                                                                {val}
                                                                            </td>
                                                                        ))}
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}

                                                {/* Steps */}
                                                <div style={{
                                                    background: 'var(--stats-white)', borderRadius: 'var(--stats-radius-lg)',
                                                    padding: '24px', border: '1px solid var(--stats-border)'
                                                }}>
                                                    <h4 style={{
                                                        display: 'flex', alignItems: 'center', gap: '8px',
                                                        color: 'var(--stats-success)', fontWeight: 'bold', marginBottom: '16px',
                                                        textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem'
                                                    }}>
                                                        <FaCalculator /> Solution Steps
                                                    </h4>

                                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                        {problem.solution.steps.map((step, i) => (
                                                            <li key={i} style={{
                                                                display: 'flex', gap: '12px', color: 'var(--stats-text)',
                                                                padding: '8px 0',
                                                                borderBottom: i < problem.solution.steps.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                                                                lineHeight: '1.6'
                                                            }}>
                                                                <span style={{ color: 'var(--stats-text-muted)', fontFamily: 'var(--font-mono)', minWidth: '24px' }}>
                                                                    {i + 1}.
                                                                </span>
                                                                <span>{step}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Result */}
                                                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                                                        <div className="stats-highlight" style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
                                                            <span style={{ color: 'var(--stats-success)', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '1px' }}>
                                                                Median (M)
                                                            </span>
                                                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>
                                                                = {problem.solution.result}
                                                            </span>
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

export default MedianPractice;
