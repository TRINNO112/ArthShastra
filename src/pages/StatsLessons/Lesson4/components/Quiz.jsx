import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa';

const Quiz = () => {
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // 10 Questions as requested
    const questions = [
        {
            id: 1,
            question: "Which method of presentation is suitable when the quantity of data is NOT very large?",
            options: ["Tabular Presentation", "Textual Presentation", "Diagrammatic Presentation", "Graphical Presentation"],
            correct: 1
        },
        {
            id: 2,
            question: "In a statistical table, what is the 'Stub'?",
            options: ["Title of the table", "Heading of the columns", "Heading of the rows", "Footnote of the table"],
            correct: 2
        },
        {
            id: 3,
            question: "What is the 'Caption' in a table?",
            options: ["Heading of the rows", "Heading of the columns", "Source Note", "Head Note"],
            correct: 1
        },
        {
            id: 4,
            question: "A table that presents data in its original form is called:",
            options: ["Derived Table", "Original Table", "Summary Table", "Complex Table"],
            correct: 1
        },
        {
            id: 5,
            question: "A table constructed to present data according to two or more characteristics is called:",
            options: ["Simple Table", "Reference Table", "Complex Table", "Original Table"],
            correct: 2
        },
        {
            id: 6,
            question: "Where should the 'Head Note' be placed in a table?",
            options: ["Below the Title", "Below the Footnote", "Inside the Body", "Left of the Stub"],
            correct: 0
        },
        {
            id: 7,
            question: "General Purpose Tables are also known as:",
            options: ["Summary Tables", "Reference Tables", "Derived Tables", "Special Purpose Tables"],
            correct: 1
        },
        {
            id: 8,
            question: "If data is converted into ratios or percentages, the table is called:",
            options: ["Original Table", "Derived Table", "Simple Table", "Master Table"],
            correct: 1
        },
        {
            id: 9,
            question: "A table showing population by 'State', 'Gender', and 'Literacy' is an example of:",
            options: ["Simple Table", "Double Table", "Treble Table", "Manifold Table"],
            correct: 3
        },
        {
            id: 10,
            question: "Which of these is NOT an essential part of a good table?",
            options: ["Table Number", "Title", "Stub", "Decorative Border"],
            correct: 3
        }
    ];

    const handleOptionSelect = (qId, optionIndex) => {
        if (!submitted) {
            setAnswers(prev => ({ ...prev, [qId]: optionIndex }));
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleRetry = () => {
        setAnswers({});
        setSubmitted(false);
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correct) score++;
        });
        return score;
    };

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>QUIZ: TABLE MASTERY</h2>
            <p className="stats-subtitle">Test your knowledge on Textual and Tabular Presentation. (10 Questions)</p>

            <div className="stats-quiz-container">
                {questions.map((q, index) => (
                    <div key={q.id} className="stats-card" style={{ marginBottom: '20px', border: submitted ? (answers[q.id] === q.correct ? '1px solid #10b981' : '1px solid #ef4444') : 'none' }}>
                        <h4 style={{ color: '#fff', marginBottom: '15px' }}>{index + 1}. {q.question}</h4>
                        <div className="stats-options-grid">
                            {q.options.map((option, optIndex) => (
                                <div
                                    key={optIndex}
                                    onClick={() => handleOptionSelect(q.id, optIndex)}
                                    style={{
                                        padding: '12px',
                                        borderRadius: '8px',
                                        background: answers[q.id] === optIndex ? '#3b82f6' : '#1e293b',
                                        cursor: submitted ? 'default' : 'pointer',
                                        border: '1px solid #334155',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        opacity: submitted && answers[q.id] !== optIndex ? 0.5 : 1
                                    }}
                                >
                                    <span>{option}</span>
                                    {submitted && optIndex === q.correct && <FaCheckCircle color="#10b981" />}
                                    {submitted && answers[q.id] === optIndex && answers[q.id] !== q.correct && <FaTimesCircle color="#ef4444" />}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {!submitted ? (
                <button
                    className="stats-btn stats-btn-primary"
                    onClick={handleSubmit}
                    disabled={Object.keys(answers).length < questions.length}
                    style={{ width: '100%', marginTop: '20px', opacity: Object.keys(answers).length < questions.length ? 0.5 : 1 }}
                >
                    Submit Quiz
                </button>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', background: '#1e293b', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '2rem', color: calculateScore() > 7 ? '#10b981' : '#f59e0b' }}>
                        Score: {calculateScore()} / {questions.length}
                    </h3>
                    <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
                        {calculateScore() > 7 ? 'Excellent! You are a Table Master.' : 'Good effort! Review the table parts again.'}
                    </p>
                    <button className="stats-btn stats-btn-outline" onClick={handleRetry}>
                        <FaRedo /> Retry Quiz
                    </button>
                </div>
            )}
        </div>
    );
};

export default Quiz;
