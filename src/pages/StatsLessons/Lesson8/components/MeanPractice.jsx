import React, { useState } from 'react';
import { FaChevronDown, FaBookOpen, FaCalculator } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { practiceData, XBar } from './MeanPracticeData';
import './MeanPractice.css';

// Notation Legend Component
const NotationLegend = () => (
    <div className="notation-legend">
        <h4 className="legend-title">Key Terms (NCERT Notation)</h4>
        <div className="legend-grid">
            <div className="legend-item">
                <span className="legend-symbol">x<sub>i</sub></span>
                <span className="legend-desc">Variable / Mid-value</span>
            </div>
            <div className="legend-item">
                <span className="legend-symbol">f<sub>i</sub></span>
                <span className="legend-desc">Frequency</span>
            </div>
            <div className="legend-item">
                <span className="legend-symbol"><XBar /></span>
                <span className="legend-desc">Arithmetic Mean</span>
            </div>
            <div className="legend-item">
                <span className="legend-symbol">N</span>
                <span className="legend-desc">Total Frequency (Σf<sub>i</sub>)</span>
            </div>
            <div className="legend-item">
                <span className="legend-symbol">d<sub>i</sub></span>
                <span className="legend-desc">Deviation (x<sub>i</sub> - A)</span>
            </div>
            <div className="legend-item">
                <span className="legend-symbol">u<sub>i</sub></span>
                <span className="legend-desc">Step Deviation</span>
            </div>
            <div className="legend-item">
                <span className="legend-symbol">A</span>
                <span className="legend-desc">Assumed Mean</span>
            </div>
        </div>
    </div>
);

// Reusable Solution Toggle Component
const SolutionToggle = ({ prob }) => {
    const [showSolution, setShowSolution] = useState(false);

    return (
        <div className="solution-section">
            <button
                onClick={() => setShowSolution(!showSolution)}
                className="solution-toggle-btn"
            >
                <div className="toggle-icon-wrap">
                    <FaCalculator size={14} />
                </div>
                <span>{showSolution ? 'Hide Solution' : 'Show Detailed Solution'}</span>
                <FaChevronDown
                    className={`transition-transform duration-300 ${showSolution ? 'rotate-180' : ''}`}
                    size={12}
                    style={{
                        transform: showSolution ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </button>

            <AnimatePresence>
                {showSolution && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="solution-wrapper"
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="solution-details">
                            {prob.solTable && (
                                <div className="data-table-container">
                                    <div style={{ minWidth: 'max-content', padding: '10px' }}>
                                        {prob.solTable}
                                    </div>
                                </div>
                            )}

                            <div className="solution-card">
                                <h4 className="calc-header">
                                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--neon-green)', marginRight: '8px' }}></span>
                                    Calculation Steps
                                </h4>
                                <div className="calc-content">
                                    {prob.calc}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PracticeAccordion = ({ title, problems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="practice-accordion">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="accordion-trigger"
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="accordion-icon-box">
                        <FaBookOpen size={20} />
                    </div>
                    <span className="accordion-title">
                        {title}
                    </span>
                </div>
                <div className="accordion-chevron" style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: isOpen ? 'var(--neon-blue)' : 'inherit',
                    background: isOpen ? 'rgba(0, 153, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)'
                }}>
                    <FaChevronDown />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div className="accordion-content">
                            {problems.map((prob, idx) => (
                                <div key={idx} className="problem-container">
                                    <div className="problem-number">
                                        Q{idx + 1}
                                    </div>

                                    <div className="problem-body">
                                        <p className="question-text">
                                            {prob.q}
                                        </p>

                                        {prob.table && (
                                            <div className="data-table-container">
                                                <div style={{ minWidth: 'max-content' }}>
                                                    {prob.table}
                                                </div>
                                            </div>
                                        )}

                                        <SolutionToggle prob={prob} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MeanPractice = () => {
    return (
        <div className="mean-practice-container">
            <div className="practice-header">
                <h2 className="practice-title">
                    Solved Problems
                </h2>
            </div>

            <NotationLegend />

            <div className="accordions-wrapper">
                {practiceData.map((section) => (
                    <PracticeAccordion
                        key={section.id}
                        title={section.title}
                        problems={section.problems}
                    />
                ))}
            </div>

            <div className="pro-tip-box">
                <div className="pro-tip-glow"></div>
                <p style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.5rem' }}>💡</span>
                    <span><strong>Pro Tip:</strong> Always check if the series is Inclusive or Exclusive before calculating.</span>
                </p>
            </div>
        </div>
    );
};

export default MeanPractice;
