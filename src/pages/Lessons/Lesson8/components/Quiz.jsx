import React, { useState } from 'react';
import { FaQuestionCircle, FaCheck, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './component.css';

const Quiz = ({ mcqQuestions, tfQuestions }) => {
  const allQuestions = [...mcqQuestions.map(q => ({ ...q, type: 'mcq' })), ...tfQuestions.map(q => ({ ...q, type: 'tf' }))];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = allQuestions[currentIndex];

  const handleAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: answer }));
  };

  const submitQuiz = () => {
    setShowResult(true);
  };

  const score = Object.values(answers).filter((ans, idx) => ans === allQuestions[idx].correct).length;
  const total = allQuestions.length;

  if (showResult) {
    return (
      <section className="lesson-section">
        <div className="section-header-lesson">
          <span className="section-badge-lesson">Chapter 8 Quiz</span>
          <h2 className="section-title-lesson">Quiz Results</h2>
        </div>
        <div className="content-card">
          <div className="quiz-result">
            <h3>Score: {score}/{total} ({Math.round(score / total * 100)}%)</h3>
            <div className="result-message">
              {score === total ? 'Perfect!' : score >= total * 0.7 ? 'Great job!' : 'Keep practicing!'}
            </div>
            <button className="btn-restart" onClick={() => {
              setCurrentIndex(0);
              setAnswers({});
              setShowResult(false);
            }}>
              Restart Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Quiz</h2>
        <p className="section-subtitle-lesson">Test your understanding. {currentIndex + 1} of {total}</p>
      </div>

      <div className="content-card">
        <div className="quiz-question">
          <div className="question-header">
            <FaQuestionCircle />
            <span>Q{currentIndex + 1}</span>
          </div>
          <h3>{currentQuestion.question}</h3>
        </div>

        <div className="quiz-options">
          {currentQuestion.type === 'mcq' ? (
            currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                className={`option-btn ${answers[currentIndex] === idx ? 'selected' : ''}`}
                onClick={() => handleAnswer(idx)}
              >
                {String.fromCharCode(65 + idx)}. {option}
              </button>
            ))
          ) : (
            <>
              <button
                className={`option-btn tf-btn ${answers[currentIndex] === true ? 'selected' : ''}`}
                onClick={() => handleAnswer(true)}
              >
                True
              </button>
              <button
                className={`option-btn tf-btn ${answers[currentIndex] === false ? 'selected' : ''}`}
                onClick={() => handleAnswer(false)}
              >
                False
              </button>
            </>
          )}
        </div>

        <div className="quiz-nav">
          <button className="nav-btn prev" disabled={currentIndex === 0} onClick={() => setCurrentIndex(prev => prev - 1)}>
            <FaArrowLeft /> Previous
          </button>
          <button className="nav-btn next" onClick={currentIndex === total - 1 ? submitQuiz : () => setCurrentIndex(prev => prev + 1)}>
            {currentIndex === total - 1 ? 'Submit Quiz' : 'Next'} <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
