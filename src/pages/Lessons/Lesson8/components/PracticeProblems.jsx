import React, { useState } from 'react';
import { FaCalculator, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

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
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Practice Area</h2>
        <p className="section-subtitle-lesson">Master Cost Concepts with these interactive problems.</p>
      </div>

      {/* Q1: Concept */}
      <div className="content-card">
        <h4 className="card-title"><span className="highlight-gold">Q1.</span> Concept Check</h4>
        <p>If Total Cost (TC) is zero at zero output, what is the value of Fixed Cost (FC)?</p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter value"
            className="premium-input"
            value={answers.q1}
            onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
          />
          <button className="action-btn" onClick={() => checkAnswer('q1', '0')}>Check</button>
        </div>
        {feedback.q1 && (
          <div className={`feedback ${feedback.q1}`}>
            {feedback.q1 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! If TC=0, FC must be 0 (Long Run).</> : <><FaTimesCircle className="icon" /> Try again. Hint: In Short Run FC {'>'} 0. But if TC=0, then FC=0. Correct answer is 0.</>}
          </div>
        )}
      </div>

      {/* Q2: Calculation */}
      <div className="content-card">
        <h4 className="card-title"><span className="highlight-cyan">Q2.</span> Calculate MC</h4>
        <p>If TC at Q=4 is 200 and TC at Q=5 is 260, calculate Marginal Cost (MC) for the 5th unit.</p>
        <div className="input-group">
          <input
            type="number"
            placeholder="MC = ?"
            className="premium-input"
            value={answers.q2}
            onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
          />
          <button className="action-btn" onClick={() => checkAnswer('q2', '60')}>Check</button>
        </div>
        {feedback.q2 && (
          <div className={`feedback ${feedback.q2}`}>
            {feedback.q2 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! (260 - 200) = 60.</> : <><FaTimesCircle className="icon" /> Incorrect. MC = TC(n) - TC(n-1).</>}
          </div>
        )}
      </div>

      {/* Q3: Classification */}
      <div className="content-card">
        <h4 className="card-title"><span className="highlight-green">Q3.</span> Fixed vs Variable</h4>
        <p>Which cost curve is a horizontal straight line parallel to the X-axis?</p>
        <div className="options-grid">
          {['TFC', 'TVC', 'AC', 'MC'].map(opt => (
            <button
              key={opt}
              className={`option-btn ${answers.q3 === opt ? 'selected' : ''}`}
              onClick={() => {
                setAnswers({ ...answers, q3: opt });
                if (opt === 'TFC') setFeedback({ ...feedback, q3: 'correct' });
                else setFeedback({ ...feedback, q3: 'incorrect' });
              }}
            >
              {opt}
            </button>
          ))}
        </div>
        {feedback.q3 && (
          <div className={`feedback ${feedback.q3}`}>
            {feedback.q3 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! Total Fixed Cost is constant.</> : <><FaTimesCircle className="icon" /> Incorrect.</>}
          </div>
        )}
      </div>

      {/* Q4: Table Logic */}
      <div className="content-card">
        <h4 className="card-title"><span className="highlight-purple">Q4.</span> Table Logic</h4>
        <p>If Average Variable Cost (AVC) is constant at ₹10 for all levels of output, what is the shape of MC?</p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Horizontal / U-shaped / Rising"
            className="premium-input"
            value={answers.q4}
            onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}
          />
          <button className="action-btn" onClick={() => checkAnswer('q4', 'horizontal')}>Check</button>
        </div>
        {feedback.q4 && (
          <div className={`feedback ${feedback.q4}`}>
            {feedback.q4 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! If AVC is constant, MC = AVC (Horizontal).</> : <><FaTimesCircle className="icon" /> Incorrect. If Average is constant, Marginal equals Average.</>}
          </div>
        )}
      </div>

      {/* Q5: Relationship */}
      <div className="content-card">
        <h4 className="card-title"><span className="highlight-gold">Q5.</span> Relationship Check</h4>
        <p>True or False: The distance between AC and AVC curves remains constant as output increases.</p>
        <div className="options-grid">
          <button className={`option-btn ${answers.q5 === 'True' ? 'selected' : ''}`} onClick={() => { setAnswers({ ...answers, q5: 'True' }); setFeedback({ ...feedback, q5: 'incorrect' }); }}>True</button>
          <button className={`option-btn ${answers.q5 === 'False' ? 'selected' : ''}`} onClick={() => { setAnswers({ ...answers, q5: 'False' }); setFeedback({ ...feedback, q5: 'correct' }); }}>False</button>
        </div>
        {feedback.q5 && (
          <div className={`feedback ${feedback.q5}`}>
            {feedback.q5 === 'correct' ? <><FaCheckCircle className="icon" /> Correct! Dimensions decrease because AFC falls.</> : <><FaTimesCircle className="icon" /> Incorrect. Vertical distance is AFC, which falls continuously.</>}
          </div>
        )}
      </div>

    </section>
  );
};

export default PracticeProblems;
