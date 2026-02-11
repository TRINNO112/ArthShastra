import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaCalculator, FaEye, FaEyeSlash } from 'react-icons/fa';
import { modeProblems } from './CentralTendencyData';

const ModePractice = () => {
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
                <h2 className="stats-title">MODE (Z)</h2>
                <p className="stats-subtitle">The Most Frequently Occurring Value</p>
            </div>

            {/* Formula Reference Card */}
            <div className="stats-definition" style={{ marginBottom: '24px' }}>
                <p style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    <strong style={{ color: '#fff' }}>Individual / Discrete:</strong> Inspect which value has the highest frequency
                    <br />
                    <strong style={{ color: '#fff' }}>Continuous Series:</strong> Z = l<sub>1</sub> + ((f<sub>1</sub> − f<sub>0</sub>) ÷ (2f<sub>1</sub> − f<sub>0</sub> − f<sub>2</sub>)) × h
                    <br />
                    <strong style={{ color: '#fff' }}>Ambiguous Cases:</strong> Use Grouping & Analysis Table method
                </p>
            </div>

            {/* Problem Cards */}
            {modeProblems.map((problem, index) => (
                <div key={problem.id} className="stats-card" style={{ padding: 0, overflow: 'hidden', marginBottom: '20px' }}>
                    {/* Clickable Header */}
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
                                                            <td style={{ fontWeight: '500', color: '#fff' }}>
                                                                {row.class || row.x}
                                                            </td>
                                                            <td style={{ color: 'var(--stats-text)' }}>
                                                                {row.f}
                                                            </td>
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

                                                    {/* Note */}
                                                    {problem.solution.note && (
                                                        <div className="stats-note" style={{ marginBottom: '16px' }}>
                                                            <strong>Note:</strong> {problem.solution.note}
                                                        </div>
                                                    )}

                                                    {/* Steps */}
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
                                                                Mode (Z)
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

export default ModePractice;
