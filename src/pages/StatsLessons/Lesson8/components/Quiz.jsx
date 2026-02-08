import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

const Quiz = () => {
    const questions = [
        {
            question: "Arithmetic Mean is a measure of:",
            options: ["Dispersion", "Central Tendency", "Correlation", "Skewness"],
            correct: 1
        },
        {
            question: "Which symbol denotes Arithmetic Mean?",
            options: ["Σ", "N", "X̄ (X-bar)", "Md"],
            correct: 2
        },
        {
            question: "The sum of deviations of observations from their Arithmetic Mean is always:",
            options: ["Positive", "Negative", "Zero", "One"],
            correct: 2
        },
        {
            question: "The formula for Direct Method (Individual Series) is:",
            options: ["ΣX/N", "A + Σd/N", "ΣfX/N", "None"],
            correct: 0
        },
        {
            question: "In calculations, 'A' stands for:",
            options: ["Actual Mean", "Assumed Mean", "Average", "Area"],
            correct: 1
        },
        {
            question: "Formula X̄ = A + (Σd'/N) × C is used for:",
            options: ["Direct Method", "Short-cut Method", "Step-Deviation Method", "None"],
            correct: 2
        },
        {
            question: "Which average is affected most by extreme values?",
            options: ["Median", "Mode", "Arithmetic Mean", "None"],
            correct: 2
        },
        {
            question: "Arithmetic mean of 10, 20, 30, 40, 50 is:",
            options: ["25", "30", "35", "40"],
            correct: 1
        },
        {
            question: "If every observation is increased by 5, the new Mean will:",
            options: ["Increase by 5", "Decrease by 5", "Remain same", "Increase by 5 times"],
            correct: 0
        },
        {
            question: "The mean of 5 numbers is 10. If one number 10 is removed, the mean of remaining is:",
            options: ["10", "8", "9", "12"],
            correct: 0
        },
        {
            question: "For open-ended classes (e.g., 'Below 10', 'Above 50'), which average is difficult to calculate?",
            options: ["Median", "Mode", "Arithmetic Mean", "None"],
            correct: 2
        },
        {
            question: "Combined mean of two groups can be calculated if we know:",
            options: ["Only Means", "Only Numbers", "Means and Numbers of both groups", "None"],
            correct: 2
        },
        {
            question: "Weighted Mean is used when:",
            options: ["All items are equally important", "Items have different importance", "Data is small", "Data is large"],
            correct: 1
        },
        {
            question: "In discrete series, 'f' denotes:",
            options: ["Frequency", "First term", "Final value", "Fraction"],
            correct: 0
        },
        {
            question: "Mid-point of class 10-20 is:",
            options: ["10", "20", "15", "30"],
            correct: 2
        },
        {
            question: "Step-deviation method makes calculation:",
            options: ["More complex", "Simpler and faster", "Less accurate", "Impossible"],
            correct: 1
        },
        {
            question: "Ideally, Arithmetic Mean is based on:",
            options: ["Some observations", "Middle observations", "All observations", "Highest observations"],
            correct: 2
        },
        {
            question: "Graphically, Arithmetic Mean cannot be located by:",
            options: ["Histogram", "Ogive", "Frequency Polygon", "Inspection"],
            correct: 3
        },
        {
            question: "Is Mean defined rigidly?",
            options: ["Yes", "No", "Depends", "Maybe"],
            correct: 0
        },
        {
            question: "Mean of first 5 natural numbers (1,2,3,4,5) is:",
            options: ["2.5", "3", "3.5", "2"],
            correct: 1
        },
        {
            question: "Can Mean be calculated for qualitative data (beauty, honesty)?",
            options: ["Yes", "No", "Sometimes", "Only by experts"],
            correct: 1
        },
        {
            question: "Formula for Weighted Mean is:",
            options: ["ΣWX / ΣW", "ΣW / ΣX", "ΣX / N", "ΣfX / N"],
            correct: 0
        },
        {
            question: "If Mean = 20, Mode = 18, then Median is approx (Mean - Mode = 3(Mean - Median)):",
            options: ["19.33", "20", "15", "25"],
            correct: 0
        },
        {
            question: "'d' in short-cut method represents:",
            options: ["Diameter", "Difference", "Deviation (X-A)", "Division"],
            correct: 2
        },
        {
            question: "Arithmetic Mean is considered the 'Best' average because:",
            options: ["It is easiest", "It is based on all values & capable of algebraic treatment", "It is positional", "It ignores outliers"],
            correct: 1
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswerOptionClick = (index) => {
        if (selectedOption !== null) return;

        setSelectedOption(index);
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < questions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
            } else {
                setShowScore(true);
            }
        }, 1000);
    };

    const restartQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
        setSelectedOption(null);
    };

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">KNOWLEDGE CHECK</h2>
            <p className="stats-subtitle">Lesson 8: Arithmetic Mean</p>

            <div className="stats-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                {showScore ? (
                    <div className="animate-popIn">
                        <FaTrophy style={{ fontSize: '4rem', color: '#fbbf24', marginBottom: '20px' }} />
                        <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px' }}>Quiz Completed!</h3>
                        <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '30px' }}>
                            You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
                        </p>
                        <button onClick={restartQuiz} className="stats-btn stats-btn-primary">
                            <FaRedo style={{ marginRight: '8px' }} /> Retry Quiz
                        </button>
                    </div>
                ) : (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#94a3b8' }}>
                            <span>Question {currentQuestion + 1}/{questions.length}</span>
                            <span>Score: {score}</span>
                        </div>

                        <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '30px' }}>
                            {questions[currentQuestion].question}
                        </h3>

                        <div style={{ display: 'grid', gap: '15px' }}>
                            {questions[currentQuestion].options.map((option, index) => {
                                let style = {
                                    padding: '15px',
                                    borderRadius: '10px',
                                    border: '2px solid #334155',
                                    background: '#1e293b',
                                    color: '#cbd5e1',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                };

                                if (selectedOption !== null) {
                                    if (index === questions[currentQuestion].correct) {
                                        style.borderColor = '#10b981';
                                        style.background = 'rgba(16, 185, 129, 0.1)';
                                    } else if (index === selectedOption) {
                                        style.borderColor = '#ef4444';
                                        style.background = 'rgba(239, 68, 68, 0.1)';
                                    }
                                }

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerOptionClick(index)}
                                        style={style}
                                        disabled={selectedOption !== null}
                                    >
                                        {option}
                                        {selectedOption !== null && index === questions[currentQuestion].correct && <FaCheckCircle style={{ color: '#10b981' }} />}
                                        {selectedOption !== null && index === selectedOption && index !== questions[currentQuestion].correct && <FaTimesCircle style={{ color: '#ef4444' }} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
