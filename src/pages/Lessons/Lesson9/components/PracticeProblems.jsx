import React, { useState } from 'react';
import { FaCalculator, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';
import '../../css/lessons.css';

const PracticeProblems = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
    const [feedback, setFeedback] = useState({});

    const checkAnswer = (qId, correctVal) => {
        const val = answers[qId]?.trim().toLowerCase();
        const isCorrect = val === String(correctVal).toLowerCase();
        setFeedback({ ...feedback, [qId]: isCorrect ? 'correct' : 'incorrect' });
    };

    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Chapter 9</span>
                <h2 className="section-title-lesson">Revenue Practice</h2>
                <p className="section-subtitle-lesson">Master calculations of TR, AR, and MR.</p>
            </div>

            {/* Q1: Concept */}
            <div className="content-card">
                <h4 className="card-title"><span className="highlight-gold">Q1.</span> Concept Check</h4>
                <p>If Total Revenue (TR) is ₹200 for 10 units of output, what is the Average Revenue (AR)?</p>
                <div className="input-group">
                    <input
                        type="number"
                        placeholder="Enter value"
                        className="premium-input"
                        value={answers.q1}
                        onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
                    />
                    <button className="action-btn" onClick={() => checkAnswer('q1', '20')}>Check</button>
                </div>
                {feedback.q1 && (
                    <div className={`feedback ${feedback.q1}`}>
                        {feedback.q1 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! AR = TR/Q = 200/10 = 20.</> : <><FaTimesCircle className="icon" /> Try again. Use formula AR = TR / Q.</>}
                    </div>
                )}
            </div>

            {/* Q2: MR Calculation */}
            <div className="content-card">
                <h4 className="card-title"><span className="highlight-cyan">Q2.</span> Calculate MR</h4>
                <p>If TR at Q=4 is ₹100 and TR at Q=5 is ₹110, calculate Marginal Revenue (MR) for the 5th unit.</p>
                <div className="input-group">
                    <input
                        type="number"
                        placeholder="MR = ?"
                        className="premium-input"
                        value={answers.q2}
                        onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
                    />
                    <button className="action-btn" onClick={() => checkAnswer('q2', '10')}>Check</button>
                </div>
                {feedback.q2 && (
                    <div className={`feedback ${feedback.q2}`}>
                        {feedback.q2 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! MR = 110 - 100 = 10.</> : <><FaTimesCircle className="icon" /> Incorrect. MR = TR(n) - TR(n-1).</>}
                    </div>
                )}
            </div>

            {/* Q3: Relationship */}
            <div className="content-card">
                <h4 className="card-title"><span className="highlight-green">Q3.</span> Relationship</h4>
                <p>When Marginal Revenue is zero, Total Revenue is:</p>
                <div className="options-grid">
                    {['Maximum', 'Minimum', 'Zero', 'Negative'].map(opt => (
                        <button
                            key={opt}
                            className={`option-btn ${answers.q3 === opt ? 'selected' : ''}`}
                            onClick={() => {
                                setAnswers({ ...answers, q3: opt });
                                if (opt === 'Maximum') setFeedback({ ...feedback, q3: 'correct' });
                                else setFeedback({ ...feedback, q3: 'incorrect' });
                            }}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
                {feedback.q3 && (
                    <div className={`feedback ${feedback.q3}`}>
                        {feedback.q3 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! TR peaks when MR hits zero.</> : <><FaTimesCircle className="icon" /> Incorrect.</>}
                    </div>
                )}
            </div>

            {/* Q4: Perfect Competition */}
            <div className="content-card">
                <h4 className="card-title"><span className="highlight-purple">Q4.</span> Market Form</h4>
                <p>In Perfect Competition, the AR curve is a horizontal straight line. What is the shape of the MR curve?</p>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Horizontal / Downward / Upward"
                        className="premium-input"
                        value={answers.q4}
                        onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}
                    />
                    <button className="action-btn" onClick={() => checkAnswer('q4', 'horizontal')}>Check</button>
                </div>
                {feedback.q4 && (
                    <div className={`feedback ${feedback.q4}`}>
                        {feedback.q4 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! MR coincides with AR.</> : <><FaTimesCircle className="icon" /> Incorrect. Hint: In Perfect Competition, AR = MR.</>}
                    </div>
                )}
            </div>

            {/* Q5: Negative MR */}
            <div className="content-card">
                <h4 className="card-title"><span className="highlight-gold">Q5.</span> True/False</h4>
                <p>Can Marginal Revenue be negative while Average Revenue is positive?</p>
                <div className="options-grid">
                    <button className={`option-btn ${answers.q5 === 'Yes' ? 'selected' : ''}`} onClick={() => { setAnswers({ ...answers, q5: 'Yes' }); setFeedback({ ...feedback, q5: 'correct' }); }}>Yes</button>
                    <button className={`option-btn ${answers.q5 === 'No' ? 'selected' : ''}`} onClick={() => { setAnswers({ ...answers, q5: 'No' }); setFeedback({ ...feedback, q5: 'incorrect' }); }}>No</button>
                </div>
                {feedback.q5 && (
                    <div className={`feedback ${feedback.q5}`}>
                        {feedback.q5 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! AR (Price) is rarely negative, but MR can be negative if price drop is steep.</> : <><FaTimesCircle className="icon" /> Incorrect. MR becomes negative when TR falls.</>}
                    </div>
                )}
            </div>

        </section>
    );
};

export default PracticeProblems;
