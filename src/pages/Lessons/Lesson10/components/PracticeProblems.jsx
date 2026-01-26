import React, { useState } from 'react';
import { FaQuestionCircle, FaCheck, FaTimes } from 'react-icons/fa';

const PracticeProblems = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState({});

    const problems = [
        {
            id: 1,
            scenario: "A producer finds that at the current level of output of 100 units, MR is ₹50 and MC is ₹40. What should the producer do to maximize profit?",
            options: [
                { id: 'a', text: "Stop production immediately", correct: false },
                { id: 'b', text: "Decrease output to reduce costs", correct: false },
                { id: 'c', text: "Increase output", correct: true },
                { id: 'd', text: "Keep output constant", correct: false }
            ],
            explanation: "Since MR (50) > MC (40), producing more units will add more to revenue than to cost, increasing total profit. The rational decision is to increase output."
        },
        {
            id: 2,
            scenario: "At an output of 50 units, MC = MR = ₹20. However, for the 51st unit, MC falls to ₹18. Is the producer in equilibrium at 50 units?",
            options: [
                { id: 'a', text: "Yes, because MC = MR", correct: false },
                { id: 'b', text: "No, because MC is falling", correct: true },
                { id: 'c', text: "Yes, because profit is positive", correct: false }
            ],
            explanation: "No. Although MR = MC, the second condition (MC should be rising) is not met. If MC falls for the next unit, producing more will increase profit (since MC < MR). Equilibrium is not yet reached."
        },
        {
            id: 3,
            scenario: "In a perfectly competitive market, MR is constant. If MC is rising and currently equals ₹15 (where MR=15), what happens if output increases by 1 unit?",
            options: [
                { id: 'a', text: "Profit increases dramatically", correct: false },
                { id: 'b', text: "MC will exceed MR, reducing total profit", correct: true },
                { id: 'c', text: "MR will rise to match MC", correct: false }
            ],
            explanation: "Since MC is rising, producing the next unit implies MC > 15. Since MR is constant at 15, the cost of the next unit exceeds revenue, reducing total profit."
        },
        {
            id: 4,
            scenario: "If a firm is producing where MC > MR, which of the following is true?",
            options: [
                { id: 'a', text: "The firm is maximizing profit", correct: false },
                { id: 'b', text: "The firm should increase output", correct: false },
                { id: 'c', text: "The firm should reduce output", correct: true }
            ],
            explanation: "When MC > MR, the last units produced cost more than they earned. Reducing output saves more in cost than it loses in revenue, thereby increasing total profit."
        },
        {
            id: 5,
            scenario: "Can equilibrium be achieved when TR is maximized?",
            options: [
                { id: 'a', text: "Yes, always", correct: false },
                { id: 'b', text: "No, profit max is different from revenue max", correct: true },
                { id: 'c', text: "Only in monopoly", correct: false }
            ],
            explanation: "Profit maximization (MR=MC) is not the same as Revenue maximization (MR=0). A firm cares about the gap between TR and TC, not just TR."
        },
        {
            id: 6,
            scenario: "Why is the condition 'MC must be rising' called the sufficient condition?",
            options: [
                { id: 'a', text: "Because MR=MC happens at two points", correct: true },
                { id: 'b', text: "It is the only condition that matters", correct: false },
                { id: 'c', text: "Because MC is always rising", correct: false }
            ],
            explanation: "Often MC cuts MR twice (once falling, once rising). The first intersection is not equilibrium. The second (rising MC) is the stable equilibrium."
        }
    ];

    const handleSelect = (probId, optionId) => {
        if (showResults[probId]) return; // Prevent changing after showing result
        setAnswers({ ...answers, [probId]: optionId });
    };

    const checkAnswer = (probId) => {
        if (!answers[probId]) return;
        setShowResults({ ...showResults, [probId]: true });
    };

    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Test Your Knowledge</span>
                <h2 className="section-title-lesson">Practice Problems</h2>
                <p className="section-subtitle-lesson">
                    Apply the conditions of equilibrium to these scenarios.
                </p>
            </div>

            <div className="example-grid-premium">
                {problems.map((problem) => (
                    <div key={problem.id} className="premium-card">
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', lineHeight: '1.5' }}>
                            <FaQuestionCircle style={{ color: 'var(--neon-gold)', marginRight: '10px' }} />
                            {problem.scenario}
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {problem.options.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelect(problem.id, option.id)}
                                    className={`premium-toggle-btn ${answers[problem.id] === option.id ? 'active' : ''}`}
                                    style={{
                                        textAlign: 'left',
                                        width: '100%',
                                        background: showResults[problem.id]
                                            ? (option.correct ? 'rgba(0, 255, 136, 0.2)' : (answers[problem.id] === option.id ? 'rgba(255, 107, 107, 0.2)' : 'transparent'))
                                            : undefined,
                                        borderColor: showResults[problem.id]
                                            ? (option.correct ? 'var(--neon-green)' : (answers[problem.id] === option.id ? 'var(--error)' : 'rgba(255,255,255,0.1)'))
                                            : undefined
                                    }}
                                    disabled={showResults[problem.id]}
                                >
                                    {option.text}
                                    {showResults[problem.id] && option.correct && <FaCheck style={{ float: 'right', color: 'var(--neon-green)' }} />}
                                    {showResults[problem.id] && !option.correct && answers[problem.id] === option.id && <FaTimes style={{ float: 'right', color: 'var(--error)' }} />}
                                </button>
                            ))}
                        </div>

                        {!showResults[problem.id] && (
                            <button
                                onClick={() => checkAnswer(problem.id)}
                                className="phase-btn-premium"
                                style={{ marginTop: '20px', width: '100%', textAlign: 'center', padding: '10px' }}
                                disabled={!answers[problem.id]}
                            >
                                Check Answer
                            </button>
                        )}

                        {showResults[problem.id] && (
                            <div className="quote-box" style={{ marginTop: '20px', borderLeftColor: 'var(--neon-cyan)' }}>
                                <p style={{ fontSize: '1rem', fontStyle: 'normal' }}>{problem.explanation}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticeProblems;
