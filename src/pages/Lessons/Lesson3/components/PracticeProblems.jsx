import React, { useState } from 'react';
import { FaQuestionCircle, FaCheck, FaTimes, FaCalculator } from 'react-icons/fa';
import '../css/Lesson3Clean.css';

const PracticeProblems = () => {
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState({});

    const problems = [
        {
            id: 1,
            scenario: "If Total Utility (TU) is increasing at a diminishing rate, what is happening to Marginal Utility (MU)?",
            options: [
                { id: 'a', text: "MU is increasing", correct: false },
                { id: 'b', text: "MU is constant", correct: false },
                { id: 'c', text: "MU is falling but positive", correct: true },
                { id: 'd', text: "MU is negative", correct: false }
            ],
            explanation: "When TU increases at a diminishing rate, it means each additional unit adds less utility than the before. Thus, Marginal Utility (MU) is falling but still positive."
        },
        {
            id: 2,
            scenario: "Calculate Marginal Utility of the 3rd unit if TU schedule is: Unit 1 (100), Unit 2 (190), Unit 3 (270).",
            options: [
                { id: 'a', text: "80", correct: true },
                { id: 'b', text: "90", correct: false },
                { id: 'c', text: "270", correct: false },
                { id: 'd', text: "100", correct: false }
            ],
            explanation: "MU of 3rd unit = TU(3) - TU(2) = 270 - 190 = 80 Utils."
        },
        {
            id: 3,
            scenario: "A consumer is in equilibrium consuming two goods X and Y. If MUx/Px > MUy/Py, what should the consumer do?",
            options: [
                { id: 'a', text: "Buy more of Y", correct: false },
                { id: 'b', text: "Buy more of X", correct: true },
                { id: 'c', text: "Stop consuming both", correct: false },
                { id: 'd', text: "Price of X must rise", correct: false }
            ],
            explanation: "Since spending on X gives more satisfaction per rupee (MUx/Px is higher), the rational consumer will divert funds from Y to X (Buy more X) until ratios equalize."
        },
        {
            id: 4,
            scenario: "At the point of Satiety (Maximum Satisfaction), what is the value of Marginal Utility?",
            options: [
                { id: 'a', text: "Maximum", correct: false },
                { id: 'b', text: "Zero", correct: true },
                { id: 'c', text: "Negative", correct: false },
                { id: 'd', text: "Equal to Price", correct: false }
            ],
            explanation: "When Total Utility is maximum (Satiety), the consumer wants no more units, so the Marginal Utility of the next unit is Zero."
        },
        {
            id: 5,
            scenario: "According to the Law of Diminishing Marginal Utility, the curve of MU is:",
            options: [
                { id: 'a', text: "Upward sloping", correct: false },
                { id: 'b', text: "Horizontal straight line", correct: false },
                { id: 'c', text: "Downward sloping", correct: true },
                { id: 'd', text: "U-shaped", correct: false }
            ],
            explanation: "The curve slopes downwards from left to right, indicating that as consumption increases, marginal utility falls."
        },
        {
            id: 6,
            scenario: "Why is water cheap despite being essential? (Diamond-Water Paradox)",
            options: [
                { id: 'a', text: "Because it has low Total Utility", correct: false },
                { id: 'b', text: "Because it has low Marginal Utility due to abundance", correct: true },
                { id: 'c', text: "Because it is liquid", correct: false }
            ],
            explanation: "Price is determined by Marginal Utility, not Total Utility. Since water is abundant, its MU is very low, hence the price is low."
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
        <div className="lesson3-container">
            <header className="lesson-header mb-5">
                <h2 className="l3-title">Practice Problems</h2>
                <p className="l3-subtitle">Test your understanding of Utility Analysis</p>
            </header>

            <div className="l3-grid-2">
                {problems.map((problem) => (
                    <div key={problem.id} className="lesson3-card" style={{ padding: '25px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '15px', lineHeight: '1.5', fontSize: '1.1rem' }}>
                            <FaQuestionCircle style={{ color: 'var(--l3-gold)', marginRight: '10px' }} />
                            {problem.id}. {problem.scenario}
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {problem.options.map(option => (
                                <button
                                    key={option.id}
                                    onClick={() => handleSelect(problem.id, option.id)}
                                    // Using inline styles for quick custom logic mimicking the premium card
                                    style={{
                                        textAlign: 'left',
                                        width: '100%',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: '1px solid',
                                        background: showResults[problem.id]
                                            ? (option.correct ? 'rgba(0, 255, 136, 0.2)' : (answers[problem.id] === option.id ? 'rgba(255, 107, 107, 0.2)' : 'transparent'))
                                            : (answers[problem.id] === option.id ? 'rgba(255, 215, 0, 0.1)' : 'transparent'),
                                        borderColor: showResults[problem.id]
                                            ? (option.correct ? 'var(--l3-green)' : (answers[problem.id] === option.id ? 'var(--l3-red)' : 'rgba(255,255,255,0.1)'))
                                            : (answers[problem.id] === option.id ? 'var(--l3-gold)' : 'rgba(255,255,255,0.1)'),
                                        color: '#eee',
                                        cursor: showResults[problem.id] ? 'default' : 'pointer',
                                        transition: 'all 0.2s',
                                        position: 'relative'
                                    }}
                                    disabled={showResults[problem.id]}
                                >
                                    <span style={{ marginRight: '10px', fontWeight: 'bold', opacity: 0.7 }}>{option.id.toUpperCase()})</span>
                                    {option.text}
                                    {showResults[problem.id] && option.correct && <FaCheck style={{ position: 'absolute', right: '15px', top: '15px', color: 'var(--l3-green)' }} />}
                                    {showResults[problem.id] && !option.correct && answers[problem.id] === option.id && <FaTimes style={{ position: 'absolute', right: '15px', top: '15px', color: 'var(--l3-red)' }} />}
                                </button>
                            ))}
                        </div>

                        {!showResults[problem.id] && (
                            <button
                                onClick={() => checkAnswer(problem.id)}
                                style={{
                                    marginTop: '20px',
                                    width: '100%',
                                    padding: '12px',
                                    background: answers[problem.id] ? 'var(--l3-cyan)' : 'rgba(255,255,255,0.1)',
                                    color: answers[problem.id] ? '#000' : '#888',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    cursor: answers[problem.id] ? 'pointer' : 'not-allowed'
                                }}
                                disabled={!answers[problem.id]}
                            >
                                Check Answer
                            </button>
                        )}

                        {showResults[problem.id] && (
                            <div style={{ marginTop: '20px', padding: '15px', borderLeft: '3px solid var(--l3-green)', background: 'rgba(0,0,0,0.3)', borderRadius: '0 8px 8px 0' }}>
                                <strong style={{ color: 'var(--l3-green)' }}>Explanation:</strong>
                                <p style={{ fontSize: '0.95rem', marginTop: '5px', color: '#ccc' }}>{problem.explanation}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticeProblems;
