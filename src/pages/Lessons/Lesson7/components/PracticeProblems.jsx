import React, { useState } from 'react';
import { FaCalculator, FaLightbulb, FaCheck, FaExclamationCircle, FaQuestionCircle } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const problems = [
    {
        id: 1,
        title: "Calculate Missing Marginal Product",
        question: "Find the value of Marginal Product (MP) for the 3rd unit of labor in the table below.",
        tableData: [
            { l: 1, tp: 10, mp: 10 },
            { l: 2, tp: 24, mp: 14 },
            { l: 3, tp: 35, mp: '?' }, // Target
            { l: 4, tp: 44, mp: 9 },
        ],
        targetRow: 2, // Index of the row with the mystery value
        hint: "Marginal Product is the difference between current TP and previous TP.",
        step1: "Identify TP at L=3 (35) and TP at L=2 (24).",
        step2: "MP₃ = TP₃ - TP₂ = 35 - 24",
        answer: "11"
    },
    {
        id: 2,
        title: "Calculate Missing Total Product",
        question: "Find the value of Total Product (TP) for the 4th unit of labor using the MP schedule.",
        tableData: [
            { l: 3, tp: 30, mp: 12 },
            { l: 4, tp: '?', mp: 8 }, // Target
            { l: 5, tp: 42, mp: 4 },
        ],
        targetRow: 1,
        hint: "Total Product is the sum of all Marginal Products up to that point. TPₙ = TPₙ₋₁ + MPₙ",
        step1: "Previous TP (at L=3) is 30. Current MP (at L=4) is 8.",
        step2: "TP₄ = 30 + 8",
        answer: "38"
    },
    {
        id: 3,
        title: "Identify the Stage of Production",
        question: "Based on the table, in which stage is the producer operating at L=6?",
        tableData: [
            { l: 4, tp: 50, mp: 8 },
            { l: 5, tp: 55, mp: 5 },
            { l: 6, tp: 52, mp: -3 }, // Target
        ],
        targetRow: 2,
        hint: "Look at the sign of the Marginal Product.",
        step1: "At L=6, TP falls from 55 to 52.",
        step2: "MP is negative (-3). Negative MP means Stage III.",
        answer: "Stage III (Negative Returns)"
    },
    {
        id: 4,
        title: "Point of Maximum Efficiency",
        question: "At which unit of labor does the Average Product (AP) reach its maximum?",
        tableData: [
            { l: 1, tp: 10, ap: 10, mp: 10 },
            { l: 2, tp: 24, ap: 12, mp: 14 },
            { l: 3, tp: 39, ap: 13, mp: 15 }, // Max AP
            { l: 4, tp: 48, ap: 12, mp: 9 },
        ],
        targetRow: 2,
        hint: "Max AP occurs when AP = MP. Check the table values.",
        step1: "Calculate or observe AP. L=2 (AP=12), L=3 (AP=13), L=4 (AP=12).",
        step2: "Highest AP is 13 at L=3.",
        answer: "3rd Unit of Labor"
    },
    {
        id: 5,
        title: "Calculate Average Product",
        question: "Calculate the Average Product (AP) for 5 units of labor given TP is 60.",
        tableData: [
            { l: 3, tp: 42, ap: 14 },
            { l: 4, tp: 52, ap: 13 },
            { l: 5, tp: 60, ap: '?' }, // Target
        ],
        targetRow: 2,
        hint: "Average Product = Total Product / Units of Labor",
        step1: "TP = 60, L = 5",
        step2: "AP = 60 / 5",
        answer: "12"
    }
];

const PracticeLink = ({ active, onClick, id }) => (
    <div
        onClick={onClick}
        className={`problem-sidebar-item ${active ? 'active' : ''}`}
    >
        <span className="problem-number">Q{id}</span>
    </div>
);

const MiniTable = ({ data, targetRow, showSolution }) => {
    // Determine headers dynamically
    const headers = Object.keys(data[0]);

    return (
        <table className="mini-table">
            <thead>
                <tr>
                    {headers.map(h => <th key={h}>{h.toUpperCase()}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx} className={idx === targetRow && showSolution ? "cell-highlight" : ""}>
                        {headers.map(h => (
                            <td key={h} className={row[h] === '?' ? "cell-missing" : ""}>
                                {row[h]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const PracticeProblems = () => {
    const [activeProblem, setActiveProblem] = useState(0);
    const [showSolution, setShowSolution] = useState(false);

    const current = problems[activeProblem];

    const handleNext = () => {
        if (activeProblem < problems.length - 1) {
            setActiveProblem(prev => prev + 1);
            setShowSolution(false);
        }
    };

    return (
        <section className="practice-section-modern expanded-layout">
            <div className="practice-sidebar">
                <h4 className="sidebar-header"><FaCalculator /> Problems</h4>
                <div className="sidebar-list">
                    {problems.map((p, idx) => (
                        <PracticeLink
                            key={p.id}
                            id={p.id}
                            active={idx === activeProblem}
                            onClick={() => { setActiveProblem(idx); setShowSolution(false); }}
                        />
                    ))}
                </div>

                {/* Cheat Sheet */}
                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-gray-400">
                    <h5 className="text-gold font-bold mb-2 uppercase">Formula Sheet</h5>
                    <p className="mb-1">MP = TPₙ - TPₙ₋₁</p>
                    <p className="mb-1">AP = TP / L</p>
                    <p>TP = ΣMP</p>
                </div>
            </div>

            <div className="practice-content-area">
                <div className="problem-card-large animate-fade-in" key={current.id}>
                    <div className="problem-header-large">
                        <span className="badge-problem large">Question {current.id}</span>
                        <h3>{current.title}</h3>
                    </div>

                    <p className="problem-text-large">{current.question}</p>

                    {/* Dynamic Table */}
                    <MiniTable
                        data={current.tableData}
                        targetRow={current.targetRow}
                        showSolution={showSolution}
                    />

                    <div className="problem-actions">
                        <button
                            className="btn-reveal-enhanced"
                            onClick={() => setShowSolution(!showSolution)}
                        >
                            {showSolution ? 'Hide Solution' : 'Check Solution'}
                        </button>

                        <div className="hint-text">
                            <FaLightbulb className="text-gold" /> Hint: {current.hint}
                        </div>
                    </div>

                    {showSolution && (
                        <div className="solution-panel-large animate-slide-up">
                            <h4 className="solution-title"><FaCheck /> Solution Breakdown</h4>
                            <div className="solution-steps-grid">
                                <div className="step-box">
                                    <span className="step-label">Step 1</span>
                                    <p>{current.step1}</p>
                                </div>
                                <div className="step-box">
                                    <span className="step-label">Step 2</span>
                                    <p>{current.step2}</p>
                                </div>
                            </div>
                            <div className="final-answer-box">
                                <span className="answer-label">Final Answer:</span>
                                <span className="answer-value">{current.answer}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="navigation-actions">
                    <button
                        className="btn-nav-problem"
                        disabled={activeProblem === 0}
                        onClick={() => setActiveProblem(p => p - 1)}
                    >
                        Previous
                    </button>
                    <span className="problem-counter">{activeProblem + 1} / {problems.length}</span>
                    <button
                        className="btn-nav-problem"
                        disabled={activeProblem === problems.length - 1}
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PracticeProblems;
