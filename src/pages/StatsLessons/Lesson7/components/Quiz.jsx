import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRedo, FaTrophy } from 'react-icons/fa';

const Quiz = () => {
    const questions = [
        {
            question: "Arithmetic Line Graphs are also known as:",
            options: ["Frequency Polygons", "Time Series Graphs", "Histograms", "Ogives"],
            correct: 1
        },
        {
            question: "In a Time Series Graph, time is always plotted on:",
            options: ["X-Axis", "Y-Axis", "Any Axis", "Diagonal"],
            correct: 0
        },
        {
            question: "A 'False Base Line' is used when:",
            options: ["Values are very small", "Values start from zero", "Values are very high and far from zero", "Data is negative"],
            correct: 2
        },
        {
            question: "Which of these is NOT a rule for constructing line graphs?",
            options: ["Use proper scale", "X-axis represents time", "Y-axis must always start at 100", "Include a clear title"],
            correct: 2
        },
        {
            question: "To show a break in the Y-axis near the origin, we use:",
            options: ["A dashed line", "A kink or zig-zag line", "A red circle", "A gap in the paper"],
            correct: 1
        },
        {
            question: "If we plot India's population from 1950 to 2000, it is a:",
            options: ["One Variable Graph", "Two Variable Graph", "Pie Chart", "Histogram"],
            correct: 0
        },
        {
            question: "Comparing 'Exports' and 'Imports' over 10 years requires a:",
            options: ["One Variable Graph", "Two or More Variable Graph", "Frequency Polygon", "Ogive"],
            correct: 1
        },
        {
            question: "The X-axis in a time series graph represents:",
            options: ["Dependent Variable", "Independent Variable (Time)", "Frequency", "Cumulative Frequency"],
            correct: 1
        },
        {
            question: "The Y-axis usually represents:",
            options: ["Time", "Variable Value (Dependent)", "Class Intervals", "None of these"],
            correct: 1
        },
        {
            question: "False Base Line helps to:",
            options: ["Make the graph look bigger", "Highlight small variations in high values", "Hide data", "Make the graph colorful"],
            correct: 1
        },
        {
            question: "Which quadrant is primarily used for time series graphs?",
            options: ["First Quadrant (+, +)", "Second Quadrant (-, +)", "Third Quadrant (-, -)", "Fourth Quadrant (+, -)"],
            correct: 0
        },
        {
            question: "Can negative values be plotted on a line graph?",
            options: ["Yes, below the X-axis", "No, never", "Only if time is negative", "Only in pie charts"],
            correct: 0
        },
        {
            question: "A graph showing 'Profit' and 'Loss' over years might cross:",
            options: ["The Y-axis only", "The X-axis (Zero line)", "The top border", "The legend"],
            correct: 1
        },
        {
            question: "The title of the graph should be:",
            options: ["Long and complex", "Short, clear, and descriptive", "At the bottom only", "Hidden"],
            correct: 1
        },
        {
            question: "Grid lines in a graph help in:",
            options: ["Decorating the graph", "Reading values accurately", "Confusing the reader", "None of the above"],
            correct: 1
        },
        {
            question: "If scale is 1cm = 10 units, and value is 55, it is plotted at:",
            options: ["5 cm", "5.5 cm", "6 cm", "4.5 cm"],
            correct: 1
        },
        {
            question: "Arithmetic Line Graphs are best for:",
            options: ["Spatial data", "Categorical data", "Chronological (Time-based) data", "Textual data"],
            correct: 2
        },
        {
            question: "A line graph connecting mid-points of bars is called:",
            options: ["Time Series", "Frequency Polygon", "Ogive", "Bar Diagram"],
            correct: 1
        },
        {
            question: "Is 'False Base Line' applicable to X-axis?",
            options: ["Yes, if time series starts late (e.g., year 2000)", "No, never", "Only for negative time", "It is called False Time"],
            correct: 0
        },
        {
            question: "In a 'Two Variable Graph', we distinguish lines using:",
            options: ["Different lengths", "Different specific colors/styles (Legend)", "Invisible ink", "Writing text on lines only"],
            correct: 1
        },
        {
            question: "To visualize the trend of gold prices over a month, use:",
            options: ["Pie Chart", "Arithmetic Line Graph", "Table", "Map"],
            correct: 1
        },
        {
            question: "A steep upward line indicates:",
            options: ["No change", "Slow increase", "Rapid increase", "Rapid decrease"],
            correct: 2
        },
        {
            question: "A horizontal line indicates:",
            options: ["Constant value", "Rapid increase", "Decrease", "Zero value"],
            correct: 0
        },
        {
            question: "Which comes first in plotting?",
            options: ["Drawing axes", "Plotting points", "Coloring", "Writing conclusion"],
            correct: 0
        },
        {
            question: "Source note is written:",
            options: ["At the top", "At the bottom", "In the center", "On the line"],
            correct: 1
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswerOptionClick = (index) => {
        if (selectedOption !== null) return; // Prevent double clicking

        setSelectedOption(index);
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        // Auto advance after short delay
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
            <p className="stats-subtitle">Lesson 7: Arithmetic Line Graphs</p>

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
