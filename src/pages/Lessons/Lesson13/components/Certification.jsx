import React, { useState } from 'react';
import { lesson13Data } from '../../data/lesson13Data';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo } from 'react-icons/fa';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);

    const questions = lesson13Data.mcqQuestions;

    const handleOptionClick = (index) => {
        if (selectedOption !== null) return; // Prevent changing answer

        setSelectedOption(index);
        const correct = index === questions[currentQuestion].correctAnswer;
        setIsCorrect(correct);

        if (correct) setScore(score + 1);
    };

    const handleNext = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        } else {
            setShowResult(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    if (showResult) {
        return (
            <div className="terminal-section" style={{ textAlign: 'center', marginTop: '50px' }}>
                <div className="terminal-card" style={{ maxWidth: '600px', margin: '0 auto', border: '2px solid #00ff88' }}>
                    <FaTrophy size={60} color="#ffd700" />
                    <h2 style={{ color: '#fff', marginTop: '20px' }}>CERTIFICATION COMPLETE</h2>
                    <p style={{ fontFamily: 'monospace', color: '#888', fontSize: '1.2rem', margin: '20px 0' }}>
                        SCORE: <span style={{ color: '#00ff88', fontWeight: 'bold' }}>{score} / {questions.length}</span>
                    </p>
                    <button className="sim-btn active" onClick={handleRetry} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <FaRedo /> RETAKE EXAM
                    </button>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];

    return (
        <div className="terminal-section">
            <div className="terminal-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                    <span style={{ color: '#888', fontFamily: 'monospace' }}>QUESTION {currentQuestion + 1} OF {questions.length}</span>
                    <span style={{ color: '#00ff88', fontFamily: 'monospace' }}>SCORE: {score}</span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '20px' }}>{question.question}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {question.options.map((option, index) => {
                        let btnClass = "sim-btn";
                        if (selectedOption !== null) {
                            if (index === question.correctAnswer) btnClass += " correct"; // Need to handle style manually due to CSS module limits
                            else if (index === selectedOption) btnClass += " wrong";
                        }

                        // Inline styles for immediate feedback since CSS file is generic
                        const style = {};
                        if (selectedOption !== null) {
                            if (index === question.correctAnswer) { style.background = 'rgba(0, 255, 136, 0.2)'; style.borderColor = '#00ff88'; style.color = '#fff'; }
                            else if (index === selectedOption) { style.background = 'rgba(255, 68, 68, 0.2)'; style.borderColor = '#ff4444'; style.color = '#fff'; }
                            else { style.opacity = 0.5; }
                        }

                        return (
                            <button
                                key={index}
                                className={btnClass}
                                onClick={() => handleOptionClick(index)}
                                style={{ textAlign: 'left', padding: '15px', ...style }}
                                disabled={selectedOption !== null}
                            >
                                <span style={{ fontFamily: 'monospace', marginRight: '10px', color: '#888' }}>[{String.fromCharCode(65 + index)}]</span>
                                {option}
                            </button>
                        );
                    })}
                </div>

                {selectedOption !== null && (
                    <div style={{ marginTop: '20px', padding: '15px', background: isCorrect ? 'rgba(0, 255, 136, 0.05)' : 'rgba(255, 68, 68, 0.05)', borderRadius: '4px', borderLeft: `3px solid ${isCorrect ? '#00ff88' : '#ff4444'}` }}>
                        <h4 style={{ color: isCorrect ? '#00ff88' : '#ff4444', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {isCorrect ? <FaCheckCircle /> : <FaTimesCircle />}
                            {isCorrect ? "CORRECT" : "INCORRECT"}
                        </h4>
                        <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{question.explanation}</p>

                        <div style={{ textAlign: 'right', marginTop: '10px' }}>
                            <button className="sim-btn" onClick={handleNext}>
                                {currentQuestion + 1 < questions.length ? "NEXT QUESTION" : "FINISH EXAM"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quiz;
