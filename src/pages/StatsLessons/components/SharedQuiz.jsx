/**
 * SharedQuiz.jsx
 * Reusable Quiz Component for Statistics Lessons
 * Handles logic for tracking score, displaying questions, and showing results.
 */

import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';

function SharedQuiz({ questions }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);

    const handleOptionClick = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
        setIsAnswered(false);
    };

    if (!questions || questions.length === 0) {
        return <div className="stats-card">No questions available for this quiz.</div>;
    }

    if (showResult) {
        const percentage = (score / questions.length) * 100;
        let message = "Review the lesson sections and try again! 📚";
        if (percentage >= 90) message = "Excellent! You're a Statistics Master! 🏆";
        else if (percentage >= 70) message = "Great job! You have a solid understanding. 👍";

        return (
            <section className="stats-card">
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <h3 className="stats-title" style={{ fontSize: '2rem' }}>QUIZ COMPLETED!</h3>
                    <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--stats-primary)', margin: '20px 0' }}>
                        {score} / {questions.length}
                    </div>
                    <p className="stats-subtitle">{message}</p>
                    <button className="stats-btn stats-btn-primary" onClick={handleRetry} style={{ marginTop: '30px' }}>
                        <FaRedo /> Retry Quiz
                    </button>
                </div>
            </section>
        );
    }

    const question = questions[currentQuestion];

    return (
        <section className="stats-card">
            <h3 className="stats-card-heading primary">
                KNOWLEDGE CHECK ({currentQuestion + 1}/{questions.length})
            </h3>

            <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '20px', lineHeight: '1.5' }}>
                    {question.question}
                </h4>

                <div className="stats-options" style={{ display: 'grid', gap: '15px' }}>
                    {question.options.map((option, index) => {
                        let className = 'stats-grid-item';
                        if (isAnswered) {
                            if (index === question.correctAnswer) className += ' success'; // Correct
                            else if (index === selectedOption) className += ' error'; // Wrong selected
                        }

                        return (
                            <div
                                key={index}
                                className={className}
                                onClick={() => handleOptionClick(index)}
                                style={{
                                    cursor: isAnswered ? 'default' : 'pointer',
                                    borderLeftWidth: '4px',
                                    borderColor: isAnswered && index === question.correctAnswer ? 'var(--stats-success)' :
                                        isAnswered && index === selectedOption ? 'var(--stats-error)' : 'var(--stats-border)',
                                    background: isAnswered && index === question.correctAnswer ? '#f0fdf4' :
                                        isAnswered && index === selectedOption ? '#fef2f2' : 'var(--stats-white)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{
                                        width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #ddd',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        background: isAnswered && index === question.correctAnswer ? 'var(--stats-success)' :
                                            isAnswered && index === selectedOption ? 'var(--stats-error)' : 'transparent',
                                        color: 'white', fontWeight: 'bold'
                                    }}>
                                        {isAnswered && index === question.correctAnswer ? <FaCheckCircle /> :
                                            isAnswered && index === selectedOption ? <FaTimesCircle /> : String.fromCharCode(65 + index)}
                                    </div>
                                    {option}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {isAnswered && (
                <div className="stats-note info" style={{ animation: 'fadeIn 0.5s' }}>
                    <strong>EXPLANATION:</strong> {question.explanation}
                </div>
            )}

            {isAnswered && (
                <div style={{ textAlign: 'right', marginTop: '20px' }}>
                    <button className="stats-btn stats-btn-primary" onClick={handleNext}>
                        {currentQuestion < questions.length - 1 ? 'Next Question' : 'View Results'}
                    </button>
                </div>
            )}
        </section>
    );
}

export default SharedQuiz;
