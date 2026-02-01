/**
 * Quiz.jsx
 * Quiz component for Lesson 1
 */

import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';

const questions = [
    {
        id: 1,
        question: "In plural sense, which of the following is NOT a characteristic of Statistics?",
        options: [
            "Aggregate of facts",
            "Numerically expressed",
            "Affected by multiplicity of causes",
            "Based on a single isolated fact"
        ],
        correctAnswer: 3,
        explanation: "Statistics deals with aggregates of facts. A single isolated figure (like Ram's height) is not statistics."
    },
    {
        id: 2,
        question: "Who described Statistics as 'straws out of which economists make bricks'?",
        options: [
            "Alfred Marshall",
            "Adam Smith",
            "Prof. Bowley",
            "Seligman"
        ],
        correctAnswer: 0,
        explanation: "Marshall emphasized the importance of data (straws) for building economic theories (bricks)."
    },
    {
        id: 3,
        question: "Which of the following is the correct order of stages in statistical study?",
        options: [
            "Analysis → Collection → Presentation → Interpretation",
            "Collection → Organisation → Presentation → Analysis → Interpretation",
            "Collection → Presentation → Organisation → Analysis",
            "Organisation → Collection → Analysis → Interpretation"
        ],
        correctAnswer: 1,
        explanation: "The correct sequence is COPDAI: Collection, Organisation, Presentation, Analysis, Interpretation."
    },
    {
        id: 4,
        question: "Statistics deals with qualitative data like honesty and beauty.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "False. Statistics only deals with quantitative (numerical) data. Qualitative attributes can only be studied if converted to numbers (ranks)."
    },
    {
        id: 5,
        question: "Statistics results are:",
        options: [
            "Always 100% accurate",
            "True only on average",
            "Always false",
            "True for every individual"
        ],
        correctAnswer: 1,
        explanation: "Statistical laws are not exact like physical laws; they are true only on average and in the long run."
    }
];

function Quiz() {
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

    if (showResult) {
        return (
            <section className="stats-card">
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <h3 className="stats-title" style={{ fontSize: '2rem' }}>QUIZ COMPLETED!</h3>
                    <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--stats-primary)', margin: '20px 0' }}>
                        {score} / {questions.length}
                    </div>
                    <p className="stats-subtitle">
                        {score === questions.length ? "Perfect Score! You're a Statistics Master! 🏆" :
                            score >= 3 ? "Great job! You have a good grasp of the basics. 👍" :
                                "Review the lesson and try again! 📚"}
                    </p>
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

export default Quiz;
