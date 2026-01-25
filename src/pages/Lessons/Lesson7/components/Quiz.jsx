import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';
import { lesson7Data } from '../../data/lesson7Data';
import './component.css';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    // Combine MCQs for the quiz (limiting to 5-7 dynamic questions usually, but using all here)
    const questions = lesson7Data.mcqQuestions;

    const handleOptionClick = (index) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);

        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setShowScore(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    return (
        <div className="quiz-container-modern animate-fade-in">
            {showScore ? (
                <div className="score-section">
                    <h3>Quiz Completed!</h3>
                    <div className="score-circle">
                        <span>{score}</span> / {questions.length}
                    </div>
                    <p className="score-message">
                        {score === questions.length ? '🌟 Perfect Score! You mastered Production Function!' :
                            score > questions.length / 2 ? '👍 Good job! Keep practicing.' :
                                '📚 Time to review the lesson again.'}
                    </p>
                    <button className="btn-reset" onClick={resetQuiz}>
                        <FaRedo /> Try Again
                    </button>
                </div>
            ) : (
                <div className="question-section">
                    <div className="question-header">
                        <span className="question-count">
                            Question {currentQuestion + 1}/{questions.length}
                        </span>
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>

                    <h4 className="question-text">{questions[currentQuestion].question}</h4>

                    <div className="options-grid">
                        {questions[currentQuestion].options.map((option, index) => {
                            let optionClass = "quiz-option";
                            if (isAnswered) {
                                if (index === questions[currentQuestion].correct) optionClass += " correct";
                                else if (index === selectedOption) optionClass += " incorrect";
                            } else if (selectedOption === index) {
                                optionClass += " selected";
                            }

                            return (
                                <button
                                    key={index}
                                    className={optionClass}
                                    onClick={() => handleOptionClick(index)}
                                    disabled={isAnswered}
                                >
                                    {option}
                                    {isAnswered && index === questions[currentQuestion].correct && <FaCheckCircle className="icon-feedback" />}
                                    {isAnswered && index === selectedOption && index !== questions[currentQuestion].correct && <FaTimesCircle className="icon-feedback" />}
                                </button>
                            );
                        })}
                    </div>

                    {isAnswered && (
                        <button className="btn-next-question" onClick={handleNext}>
                            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
