// Quiz Module - Economics and Economies (VK Ohri Grade 11)
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo, FaArrowRight, FaQuestionCircle } from 'react-icons/fa';

function Quiz({ mcqQuestions, tfQuestions }) {
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let mcqScore = 0;
    mcqQuestions.forEach(q => {
      if (mcqAnswers[q.id] === q.correct) mcqScore++;
    });

    let tfScore = 0;
    tfQuestions.forEach(q => {
      if (tfAnswers[q.id] === q.correct) tfScore++;
    });

    setScore(mcqScore + tfScore);
    setShowResults(true);

    // Scroll to results
    setTimeout(() => {
      document.querySelector('.quiz-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setMcqAnswers({});
    setTfAnswers({});
    setShowResults(false);
    setScore(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalQuestions = mcqQuestions.length + tfQuestions.length;
  const allAnswered =
    Object.keys(mcqAnswers).length === mcqQuestions.length &&
    Object.keys(tfAnswers).length === tfQuestions.length;

  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedback = () => {
    if (percentage >= 90) return { text: "Excellent! You've mastered this chapter!", class: "excellent" };
    if (percentage >= 75) return { text: "Great job! Keep up the good work!", class: "good" };
    if (percentage >= 50) return { text: "Good effort! Review the content for better understanding.", class: "average" };
    return { text: "Keep trying! Go through the lesson again.", class: "poor" };
  };

  return (
    <section className="lesson-section quiz-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Quiz</span>
        <h2 className="section-title-lesson">Test Your Knowledge</h2>
        <p className="section-subtitle-lesson">
          Answer all questions to check your understanding of Chapter 1
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="quiz-progress-card">
        <div className="progress-info">
          <span className="progress-label">Questions Answered</span>
          <span className="progress-count">
            {Object.keys(mcqAnswers).length + Object.keys(tfAnswers).length} / {totalQuestions}
          </span>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{
              width: `${((Object.keys(mcqAnswers).length + Object.keys(tfAnswers).length) / totalQuestions) * 100}%`
            }}
          ></div>
        </div>
      </div>

      {/* MCQ Section */}
      <div className="quiz-block">
        <div className="quiz-block-header">
          <FaQuestionCircle className="quiz-block-icon" />
          <h3>Multiple Choice Questions</h3>
          <span className="question-count">{mcqQuestions.length} Questions</span>
        </div>

        <div className="questions-container">
          {mcqQuestions.map((q, index) => (
            <div key={q.id} className={`question-card ${showResults ? 'show-result' : ''}`}>
              <div className="question-header">
                <span className="question-number">Q{index + 1}</span>
                {showResults && (
                  mcqAnswers[q.id] === q.correct
                    ? <FaCheckCircle className="result-icon correct" />
                    : <FaTimesCircle className="result-icon wrong" />
                )}
              </div>
              <p className="question-text">{q.question}</p>

              <div className="options-grid">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`option-btn ${mcqAnswers[q.id] === idx ? 'selected' : ''}
                      ${showResults && idx === q.correct ? 'correct' : ''}
                      ${showResults && mcqAnswers[q.id] === idx && idx !== q.correct ? 'wrong' : ''}`}
                    onClick={() => !showResults && setMcqAnswers({...mcqAnswers, [q.id]: idx})}
                    disabled={showResults}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="option-text">{opt}</span>
                    {showResults && idx === q.correct && <FaCheckCircle className="option-icon correct" />}
                    {showResults && mcqAnswers[q.id] === idx && idx !== q.correct && <FaTimesCircle className="option-icon wrong" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* True/False Section */}
      <div className="quiz-block">
        <div className="quiz-block-header">
          <FaQuestionCircle className="quiz-block-icon" />
          <h3>True or False</h3>
          <span className="question-count">{tfQuestions.length} Questions</span>
        </div>

        <div className="questions-container">
          {tfQuestions.map((q, index) => (
            <div key={q.id} className={`question-card tf-card ${showResults ? 'show-result' : ''}`}>
              <div className="question-header">
                <span className="question-number">Q{mcqQuestions.length + index + 1}</span>
                {showResults && (
                  tfAnswers[q.id] === q.correct
                    ? <FaCheckCircle className="result-icon correct" />
                    : <FaTimesCircle className="result-icon wrong" />
                )}
              </div>
              <p className="question-text">{q.question}</p>

              <div className="tf-options">
                <button
                  className={`tf-btn ${tfAnswers[q.id] === true ? 'selected' : ''}
                    ${showResults && q.correct === true ? 'correct' : ''}
                    ${showResults && tfAnswers[q.id] === true && !q.correct ? 'wrong' : ''}`}
                  onClick={() => !showResults && setTfAnswers({...tfAnswers, [q.id]: true})}
                  disabled={showResults}
                >
                  <FaCheckCircle className="tf-icon" />
                  True
                </button>
                <button
                  className={`tf-btn ${tfAnswers[q.id] === false ? 'selected' : ''}
                    ${showResults && q.correct === false ? 'correct' : ''}
                    ${showResults && tfAnswers[q.id] === false && q.correct ? 'wrong' : ''}`}
                  onClick={() => !showResults && setTfAnswers({...tfAnswers, [q.id]: false})}
                  disabled={showResults}
                >
                  <FaTimesCircle className="tf-icon" />
                  False
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Submit / Results Section */}
      {!showResults ? (
        <div className="submit-section">
          <button
            className={`submit-btn ${allAnswered ? 'ready' : 'disabled'}`}
            onClick={handleSubmit}
            disabled={!allAnswered}
          >
            {allAnswered ? (
              <>Submit Answers <FaArrowRight className="btn-icon" /></>
            ) : (
              <>Please answer all {totalQuestions - Object.keys(mcqAnswers).length - Object.keys(tfAnswers).length} remaining questions</>
            )}
          </button>
        </div>
      ) : (
        <div className="quiz-results">
          <div className="results-card">
            <div className="results-header">
              <FaTrophy className="trophy-icon" />
              <h3>Quiz Complete!</h3>
            </div>

            <div className="score-display">
              <div className="score-circle" data-percentage={percentage}>
                <svg viewBox="0 0 100 100">
                  <circle className="score-bg" cx="50" cy="50" r="45" />
                  <circle
                    className="score-fill"
                    cx="50" cy="50" r="45"
                    style={{
                      strokeDasharray: `${percentage * 2.83} 283`,
                      stroke: percentage >= 75 ? 'var(--neon-green)' : percentage >= 50 ? 'var(--neon-gold)' : 'var(--error)'
                    }}
                  />
                </svg>
                <div className="score-text">
                  <span className="score-number">{percentage}%</span>
                  <span className="score-label">{score}/{totalQuestions}</span>
                </div>
              </div>
            </div>

            <div className={`feedback-message ${getFeedback().class}`}>
              <p>{getFeedback().text}</p>
            </div>

            <div className="results-breakdown">
              <div className="breakdown-item">
                <span className="breakdown-label">MCQ Score</span>
                <span className="breakdown-value">{mcqQuestions.filter(q => mcqAnswers[q.id] === q.correct).length}/{mcqQuestions.length}</span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">True/False Score</span>
                <span className="breakdown-value">{tfQuestions.filter(q => tfAnswers[q.id] === q.correct).length}/{tfQuestions.length}</span>
              </div>
            </div>

            <button className="retry-btn" onClick={handleReset}>
              <FaRedo className="btn-icon" />
              Retry Quiz
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Quiz;
