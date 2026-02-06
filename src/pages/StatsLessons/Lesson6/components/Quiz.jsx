import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo } from 'react-icons/fa';

const Quiz = () => {
    const questions = [
        {
            id: 1,
            question: "Frequency Diagrams are used for ________ variables.",
            options: ["Discrete", "Continuous", "Qualitative", "None of these"],
            correct: 1
        },
        {
            id: 2,
            question: "Which diagram is drawn by joining mid-points of the tops of histogram bars?",
            options: ["Ogive", "Bar Diagram", "Frequency Polygon", "Pie Chart"],
            correct: 2
        },
        {
            id: 3,
            question: "A Histogram is valid for ________ series only.",
            options: ["Individual", "Discrete", "Continuous", "All of these"],
            correct: 2
        },
        {
            id: 4,
            question: "In a Histogram, the height of the rectangle represents:",
            options: ["Class Width", "Frequency", "Upper Limit", "Lower Limit"],
            correct: 1
        },
        {
            id: 5,
            question: "The Graphical calculation of Mode is done through:",
            options: ["Ogive", "Histogram", "Frequency Polygon", "Pie Chart"],
            correct: 1
        },
        {
            id: 6,
            question: "The Graphical calculation of Median is done through:",
            options: ["Ogive", "Histogram", "Frequency Polygon", "Simple Bar Diagram"],
            correct: 0
        },
        {
            id: 7,
            question: "An Ogive is also known as:",
            options: ["Frequency Curve", "Cumulative Frequency Curve", "Histogram", "Frequency Polygon"],
            correct: 1
        },
        {
            id: 8,
            question: "For Unequal Class Intervals, we construct a Histogram using:",
            options: ["Frequency", "Frequency Density", "Cumulative Frequency", "Class Mark"],
            correct: 1
        },
        {
            id: 9,
            question: "Formula for Frequency Density is:",
            options: ["Frequency × Class Width", "Frequency / Class Width", "Class Width / Frequency", "Frequency / 2"],
            correct: 1
        },
        {
            id: 10,
            question: "A Frequency Polygon is a ________ diagram.",
            options: ["One Dimensional", "Two Dimensional", "Three Dimensional", "None"],
            correct: 1
        },
        {
            id: 11,
            question: "Intersection of More Than and Less Than Ogive gives:",
            options: ["Mean", "Median", "Mode", "Range"],
            correct: 1
        },
        {
            id: 12,
            question: "Less Than Ogive is plotted against:",
            options: ["Lower Limits", "Upper Limits", "Mid-points", "Frequencies"],
            correct: 1
        },
        {
            id: 13,
            question: "More Than Ogive is plotted against:",
            options: ["Lower Limits", "Upper Limits", "Mid-points", "Frequencies"],
            correct: 0
        },
        {
            id: 14,
            question: "Histogram is never drawn for ________ series.",
            options: ["Individual and Discrete", "Continuous only", "Exclusive", "Inclusive after adjustment"],
            correct: 0
        },
        {
            id: 15,
            question: "A smooth freehand curve passing through frequency polygon points is:",
            options: ["Histogram", "Bar Diagram", "Frequency Curve", "Ogive"],
            correct: 2
        },
        {
            id: 16,
            question: "In a 'More than' ogive, the curve slopes:",
            options: ["Upwards", "Downwards", "Horizontal", "Vertical"],
            correct: 1
        },
        {
            id: 17,
            question: "Area of frequency polygon is equal to area of:",
            options: ["Ogive", "Corresponding Histogram", "Pie Chart", "None"],
            correct: 1
        },
        {
            id: 18,
            question: "To convert inclusive series (10-19) to exclusive (9.5-19.5), we use correction factor:",
            options: ["0.1", "0.5", "1.0", "5.0"],
            correct: 1
        },
        {
            id: 19,
            question: "Histogram is a ________ dimensional diagram.",
            options: ["One", "Two", "Three", "Four"],
            correct: 1
        },
        {
            id: 20,
            question: "The shape of a normal frequency curve is:",
            options: ["U-Shaped", "J-Shaped", "Bell-Shaped", "S-Shaped"],
            correct: 2
        },
        {
            id: 21,
            question: "Which diagram does NOT use cumulative frequencies?",
            options: ["Less than Ogive", "More than Ogive", "Histogram", "None of these"],
            correct: 2
        },
        {
            id: 22,
            question: "Can we locate 'Partition Values' (Quartiles/Deciles) using Ogives?",
            options: ["Yes", "No", "Only if symmetrical", "Only for continuous data"],
            correct: 0
        },
        {
            id: 23,
            question: "What is plotted on X-axis for a Frequency Polygon?",
            options: ["Upper Limits", "Lower Limits", "Mid-values (Class Marks)", "Frequency"],
            correct: 2
        },
        {
            id: 24,
            question: "The base of a frequency polygon is closed by joining endpoints to:",
            options: ["The origin", "Preceding & Succeeding mid-points at zero frequency", "The highest bar", "None"],
            correct: 1
        },
        {
            id: 25,
            question: "If intervals are 0-10, 10-20, what is the Mid-value for first class?",
            options: ["5", "10", "0", "15"],
            correct: 0
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleAnswer = (optionIndex) => {
        if (isAnswered) return;
        setSelectedOption(optionIndex);
        setIsAnswered(true);
        if (optionIndex === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    if (showResult) {
        return (
            <div className="stats-card animate-fadeIn" style={{ textAlign: 'center', padding: '50px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px', color: '#fbbf24' }}><FaTrophy /></div>
                <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '10px' }}>Quiz Completed!</h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '30px' }}>
                    You scored <strong style={{ color: '#10b981', fontSize: '1.5rem' }}>{score}</strong> out of {questions.length}
                </p>

                <div style={{ width: '100%', maxWidth: '300px', height: '10px', background: '#334155', borderRadius: '5px', margin: '0 auto 40px auto', overflow: 'hidden' }}>
                    <div style={{ width: `${(score / questions.length) * 100}%`, height: '100%', background: '#10b981', transition: 'width 1s ease' }}></div>
                </div>

                <button className="stats-btn stats-btn-primary" onClick={resetQuiz} style={{ margin: '0 auto' }}>
                    <FaRedo style={{ marginRight: '10px' }} /> Retry Quiz
                </button>
            </div>
        );
    }

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">KNOWLEDGE CHECK</h2>
            <p className="stats-subtitle">Test your understanding of Frequency Diagrams</p>

            <div className="stats-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontSize: '0.9rem', color: '#94a3b8' }}>
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>Score: {score}</span>
                </div>

                <div style={{ background: '#1e293b', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
                    <div style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%`, height: '4px', background: 'var(--stats-gold)', transition: 'width 0.3s ease' }}></div>
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '30px', lineHeight: '1.5' }}>
                    {questions[currentQuestion].question}
                </h3>

                <div style={{ display: 'grid', gap: '15px' }}>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(index)}
                            className={`stats-btn`}
                            style={{
                                justifyContent: 'flex-start',
                                padding: '15px 20px',
                                background: isAnswered
                                    ? (index === questions[currentQuestion].correct ? 'rgba(16, 185, 129, 0.2)' : (index === selectedOption ? 'rgba(239, 68, 68, 0.2)' : '#1e293b'))
                                    : '#1e293b',
                                border: isAnswered
                                    ? (index === questions[currentQuestion].correct ? '1px solid #10b981' : (index === selectedOption ? '1px solid #ef4444' : '1px solid #334155'))
                                    : '1px solid #334155',
                                cursor: isAnswered ? 'default' : 'pointer',
                                opacity: isAnswered && index !== questions[currentQuestion].correct && index !== selectedOption ? 0.5 : 1
                            }}
                        >
                            <span style={{
                                width: '30px', height: '30px', borderRadius: '50%', background: '#334155',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', color: '#fff', fontSize: '0.9rem'
                            }}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            <span style={{ color: '#e2e8f0', fontSize: '1.05rem', textAlign: 'left' }}>{option}</span>

                            {isAnswered && index === questions[currentQuestion].correct && <FaCheckCircle style={{ marginLeft: 'auto', color: '#10b981' }} />}
                            {isAnswered && index === selectedOption && index !== questions[currentQuestion].correct && <FaTimesCircle style={{ marginLeft: 'auto', color: '#ef4444' }} />}
                        </button>
                    ))}
                </div>

                {isAnswered && (
                    <div style={{ marginTop: '30px', textAlign: 'right', animation: 'fadeIn 0.3s ease' }}>
                        <button className="stats-btn stats-btn-primary" onClick={nextQuestion}>
                            {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
