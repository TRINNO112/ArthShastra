import React, { useState } from 'react';
import { FaBug, FaCheckCircle, FaTimesCircle, FaCode, FaTrophy } from 'react-icons/fa';
import '../lesson10.css';

const PracticeProblems = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState({});

    const problems = [
        {
            id: 1,
            scenario: "BUG REPORT #101: Producer is maximizing profit where MR=50 and MC=40.",
            options: [
                { id: 'a', text: "FIX: Stop production immediately", correct: false },
                { id: 'b', text: "FIX: Decrease output to reduce costs", correct: false },
                { id: 'c', text: "FIX: Increase output (Scale Up)", correct: true },
                { id: 'd', text: "FIX: Do nothing", correct: false }
            ],
            explanation: "LOGIC: MR(50) > MC(40). The system is profitable! Expanding output adds more total profit. 'Scaling Up' is the correct patch."
        },
        {
            id: 2,
            scenario: "BUG REPORT #404: MC = MR = 20. But for next unit, MC falls to 18.",
            options: [
                { id: 'a', text: "STATUS: System Stable (Equilibrium)", correct: false },
                { id: 'b', text: "STATUS: System Unstable (MC needs to rise!)", correct: true },
                { id: 'c', text: "STATUS: Profit is Maximized", correct: false }
            ],
            explanation: "LOGIC: The 2nd Condition fails! MC must CUT MR from BELOW (Rising). Falling MC means costs are dropping, so you should keeping producing to grab more profit."
        },
        {
            id: 3,
            scenario: "BUG REPORT #500: Firm is producing where MC > MR.",
            options: [
                { id: 'a', text: "FIX: Increase production", correct: false },
                { id: 'b', text: "FIX: Reduce production (Stop Loss)", correct: true },
                { id: 'c', text: "FIX: Maintain current level", correct: false }
            ],
            explanation: "LOGIC: Critical Error! Cost of last unit > Revenue. You are burning cash. Reducing output saves more cost than revenue lost."
        },
        {
            id: 4,
            scenario: "BUG REPORT #503: Price is less than Average Variable Cost (P < AVC).",
            options: [
                { id: 'a', text: "STATUS: Continue (Hope for better days)", correct: false },
                { id: 'b', text: "STATUS: Shutdown Immediately", correct: true },
                { id: 'c', text: "STATUS: Increase Price", correct: false }
            ],
            explanation: "LOGIC: Shutdown Point Reached! If you cannot even cover variable costs (wages, raw material), every unit produced adds to loss. Shut down to minimize loss to Fixed Cost only."
        },
        {
            id: 5,
            scenario: "BUG REPORT #200: Total Revenue (TR) = Total Cost (TC).",
            options: [
                { id: 'a', text: "STATUS: Break-Even Point (Normal Profit)", correct: true },
                { id: 'b', text: "STATUS: Maximum Profit Point", correct: false },
                { id: 'c', text: "STATUS: Loss incurred", correct: false }
            ],
            explanation: "LOGIC: System is breaking even. You are earning Normal Profit (included in TC). No Super-normal profit, but no loss either."
        },
        {
            id: 6,
            scenario: "BUG REPORT #301: In Perfect Competition, Firm wants to sell at P > MR.",
            options: [
                { id: 'a', text: "ALLOW: It's a free market", correct: false },
                { id: 'b', text: "DENY: In Perfect Competition, P = MR = AR", correct: true },
                { id: 'c', text: "ALLOW: If quality is high", correct: false }
            ],
            explanation: "LOGIC: In Perfect Competition, the firm is a price taker. P is fixed by the industry. Therefore P always equals Marginal Revenue (MR)."
        },
        {
            id: 7,
            scenario: "BUG REPORT #400: MC curve cuts MR curve from ABOVE.",
            options: [
                { id: 'a', text: "STATUS: Equilibrium Achieved", correct: false },
                { id: 'b', text: "STATUS: Unstable Equilibrium (Keep Producing)", correct: true },
                { id: 'c', text: "STATUS: Shutdown", correct: false }
            ],
            explanation: "LOGIC: If MC cuts from above, MC is falling. Producing more will lower costs further, increasing profit. True equilibrium is when MC cuts from BELOW (rising)."
        },
        {
            id: 8,
            scenario: "BUG REPORT #418: Output is zero, but Total Cost is positive.",
            options: [
                { id: 'a', text: "BUG: Calculation Error", correct: false },
                { id: 'b', text: "STATUS: Normal (Fixed Costs exist)", correct: true },
                { id: 'c', text: "STATUS: Impossible state", correct: false }
            ],
            explanation: "LOGIC: Even at shutdown (Q=0), Fixed Costs (Rent, Machines) must be paid. Loss = TFC."
        },
        {
            id: 9,
            scenario: "BUG REPORT #402: Gross Profit vs Economic Profit confusion.",
            options: [
                { id: 'a', text: "FIX: Ignore Implicit Costs", correct: false },
                { id: 'b', text: "FIX: Deduct both Explicit and Implicit Costs", correct: true },
                { id: 'c', text: "FIX: Only deduct production costs", correct: false }
            ],
            explanation: "LOGIC: Economic Profit (Pure Profit) = TR - (Explicit Costs + Implicit Costs). Accounting profit often ignores implicit costs."
        },
        {
            id: 10,
            scenario: "BUG REPORT #999: Producer aims to maximize TR instead of Profit.",
            options: [
                { id: 'a', text: "STATUS: Valid Goal", correct: false },
                { id: 'b', text: "STATUS: Invalid Goal (Profit != Revenue)", correct: true },
                { id: 'c', text: "STATUS: Same thing", correct: false }
            ],
            explanation: "LOGIC: Maximizing sales (Revenue) doesn't mean maximizing profit if costs are too high. The goal is always the varying difference: TR - TC."
        }
    ];

    const handleSelect = (probId, optionId) => {
        if (showResults[probId]) return;
        setAnswers({ ...answers, [probId]: optionId });
    };

    const checkAnswer = (probId) => {
        if (!answers[probId]) return;
        setShowResults({ ...showResults, [probId]: true });
    };

    return (
        <div className="lesson-section">
            <div className="startup-header">
                <span className="startup-subtitle">UNIT_TESTING</span>
                <h2 className="startup-title" style={{ fontSize: '2.5rem' }}>BUG BOUNTY HUNTER 🐞</h2>
                <p style={{ color: '#888' }}>Find logical errors in production decisions and patch them!</p>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {problems.map((problem) => (
                    <div key={problem.id} className="bug-ticket animate-fadeInUp">
                        <div className="bug-header">
                            <span><FaBug /> ISSUE TRACKER</span>
                            <span>ID: {problem.id}</span>
                        </div>

                        <h4 style={{ color: '#e6e6e6', marginBottom: '20px', fontFamily: '"Fira Code", monospace' }}>
                            {problem.scenario}
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            {problem.options.map(option => (
                                <div
                                    key={option.id}
                                    onClick={() => handleSelect(problem.id, option.id)}
                                    className={`bug-option ${answers[problem.id] === option.id ? 'selected' : ''}`}
                                    style={{
                                        borderColor: showResults[problem.id] && option.correct ? 'var(--neon-green)' : (showResults[problem.id] && answers[problem.id] === option.id && !option.correct ? 'var(--neon-red)' : undefined)
                                    }}
                                >
                                    <span style={{ marginRight: '10px', color: '#555' }}>[{option.id.toUpperCase()}]</span>
                                    {option.text}
                                    {showResults[problem.id] && option.correct && <FaCheckCircle style={{ float: 'right', color: 'var(--neon-green)' }} />}
                                    {showResults[problem.id] && !option.correct && answers[problem.id] === option.id && <FaTimesCircle style={{ float: 'right', color: 'var(--neon-red)' }} />}
                                </div>
                            ))}
                        </div>

                        {!showResults[problem.id] && (
                            <button
                                onClick={() => checkAnswer(problem.id)}
                                className="startup-subtitle"
                                style={{ marginTop: '20px', width: '100%', textAlign: 'center', padding: '10px', cursor: 'pointer', background: 'var(--terminal-bg)', color: '#fff' }}
                                disabled={!answers[problem.id]}
                            >
                                <FaCode /> RUN TEST
                            </button>
                        )}

                        {showResults[problem.id] && (
                            <div className="bug-solved animate-fadeIn">
                                {problems[problem.id - 1]?.options.find(o => o.id === answers[problem.id])?.correct ? (
                                    <span><FaTrophy /> BOUNTY CLAIMED! {problem.explanation}</span>
                                ) : (
                                    <span style={{ color: 'var(--neon-red)' }}>❌ PATCH FAILED. {problem.explanation}</span>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticeProblems;
