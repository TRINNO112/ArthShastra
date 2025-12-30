// Quiz Module - Economics and Economies (VK Ohri Grade 11)
// With Comprehensive Firebase Analytics Integration
import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo, FaArrowRight, FaQuestionCircle, FaClock, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { submitDetailedQuizAttempt, getQuizAnalytics } from '../../../../services/firebase';

function Quiz({ mcqQuestions, tfQuestions, quizId = 'lesson1' }) {
  // Answer states
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Time tracking states
  const [startTime, setStartTime] = useState(null);
  const [questionTimes, setQuestionTimes] = useState({});
  const [currentQuestionStart, setCurrentQuestionStart] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  // Analytics states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analyticsResult, setAnalyticsResult] = useState(null);
  const [previousAttempts, setPreviousAttempts] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);

  // Timer interval ref
  const timerRef = useRef(null);

  // Initialize quiz timer on mount
  useEffect(() => {
    const now = Date.now();
    setStartTime(now);
    setCurrentQuestionStart(now);

    // Load previous analytics
    loadPreviousAnalytics();

    // Start live timer
    timerRef.current = setInterval(() => {
      setTotalTimeSpent(Date.now() - now);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const loadPreviousAnalytics = async () => {
    const result = await getQuizAnalytics(quizId);
    if (result.success && result.data) {
      setPreviousAttempts(result.data);
    }
  };

  // Track time spent on each question
  const trackQuestionTime = (questionId, questionType) => {
    if (currentQuestion && currentQuestionStart) {
      const timeSpent = Date.now() - currentQuestionStart;
      const key = `${currentQuestion.type}_${currentQuestion.id}`;
      setQuestionTimes(prev => ({
        ...prev,
        [key]: (prev[key] || 0) + timeSpent
      }));
    }
    setCurrentQuestion({ id: questionId, type: questionType });
    setCurrentQuestionStart(Date.now());
  };

  const handleMcqAnswer = (questionId, answerIndex) => {
    if (showResults) return;
    trackQuestionTime(questionId, 'mcq');
    setMcqAnswers({ ...mcqAnswers, [questionId]: answerIndex });
  };

  const handleTfAnswer = (questionId, answer) => {
    if (showResults) return;
    trackQuestionTime(questionId, 'tf');
    setTfAnswers({ ...tfAnswers, [questionId]: answer });
  };

  const handleSubmit = async () => {
    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Track final question time
    if (currentQuestion && currentQuestionStart) {
      const timeSpent = Date.now() - currentQuestionStart;
      const key = `${currentQuestion.type}_${currentQuestion.id}`;
      setQuestionTimes(prev => ({
        ...prev,
        [key]: (prev[key] || 0) + timeSpent
      }));
    }

    const endTime = Date.now();
    const finalTimeSpent = endTime - startTime;

    // Calculate scores
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
    setIsSubmitting(true);

    // Submit to Firebase with comprehensive analytics
    try {
      const result = await submitDetailedQuizAttempt(quizId, {
        totalScore: mcqScore + tfScore,
        totalQuestions: mcqQuestions.length + tfQuestions.length,
        totalTimeSpent: finalTimeSpent,
        questionAnalytics: [
          ...mcqQuestions.map(q => ({
            id: q.id,
            type: 'mcq',
            isCorrect: mcqAnswers[q.id] === q.correct
          })),
          ...tfQuestions.map(q => ({
            id: q.id,
            type: 'tf',
            isCorrect: tfAnswers[q.id] === q.correct
          }))
        ]
      });

      if (result.success) {
        setAnalyticsResult(result.data);
      }
    } catch (error) {
      console.error('Failed to submit analytics:', error);
    } finally {
      setIsSubmitting(false);
    }

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
    setAnalyticsResult(null);
    setShowAnalytics(false);
    setQuestionTimes({});

    // Reset timer
    const now = Date.now();
    setStartTime(now);
    setCurrentQuestionStart(now);
    setCurrentQuestion(null);
    setTotalTimeSpent(0);

    // Restart live timer
    timerRef.current = setInterval(() => {
      setTotalTimeSpent(Date.now() - now);
    }, 1000);

    // Reload analytics
    loadPreviousAnalytics();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalQuestions = mcqQuestions.length + tfQuestions.length;
  const answeredCount = Object.keys(mcqAnswers).length + Object.keys(tfAnswers).length;
  const hasAtLeastOneAnswer = answeredCount > 0;

  const percentage = Math.round((score / totalQuestions) * 100);

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

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

      {/* Previous Attempts Banner */}
      {previousAttempts && (
        <div className="previous-attempts-banner">
          <div className="attempts-info">
            <FaChartLine className="attempts-icon" />
            <span>
              Previous attempts: <strong>{previousAttempts.totalAttempts}</strong> |
              Best score: <strong>{previousAttempts.bestPercentage}%</strong>
            </span>
          </div>
        </div>
      )}

      {/* Progress Indicator with Timer */}
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
        {!showResults && (
          <div className="quiz-timer">
            <FaClock className="timer-icon" />
            <span className="timer-text">{formatTime(totalTimeSpent)}</span>
          </div>
        )}
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
                    onClick={() => handleMcqAnswer(q.id, idx)}
                    disabled={showResults}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="option-text">{opt}</span>
                    {showResults && idx === q.correct && <FaCheckCircle className="option-icon correct" />}
                    {showResults && mcqAnswers[q.id] === idx && idx !== q.correct && <FaTimesCircle className="option-icon wrong" />}
                  </button>
                ))}
              </div>

              {/* Show time spent on this question after results */}
              {showResults && questionTimes[`mcq_${q.id}`] && (
                <div className="question-time-spent">
                  <FaClock className="time-icon" />
                  <span>Time spent: {formatTime(questionTimes[`mcq_${q.id}`])}</span>
                </div>
              )}
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
                  onClick={() => handleTfAnswer(q.id, true)}
                  disabled={showResults}
                >
                  <FaCheckCircle className="tf-icon" />
                  True
                </button>
                <button
                  className={`tf-btn ${tfAnswers[q.id] === false ? 'selected' : ''}
                    ${showResults && q.correct === false ? 'correct' : ''}
                    ${showResults && tfAnswers[q.id] === false && q.correct ? 'wrong' : ''}`}
                  onClick={() => handleTfAnswer(q.id, false)}
                  disabled={showResults}
                >
                  <FaTimesCircle className="tf-icon" />
                  False
                </button>
              </div>

              {/* Show time spent on this question after results */}
              {showResults && questionTimes[`tf_${q.id}`] && (
                <div className="question-time-spent">
                  <FaClock className="time-icon" />
                  <span>Time spent: {formatTime(questionTimes[`tf_${q.id}`])}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Submit / Results Section */}
      {!showResults ? (
        <div className="submit-section">
          <button
            className={`submit-btn ${hasAtLeastOneAnswer ? 'ready' : 'disabled'}`}
            onClick={handleSubmit}
            disabled={!hasAtLeastOneAnswer}
          >
            {hasAtLeastOneAnswer ? (
              <>Submit Quiz ({answeredCount}/{totalQuestions} answered) <FaArrowRight className="btn-icon" /></>
            ) : (
              <>Answer at least 1 question to submit</>
            )}
          </button>
          {hasAtLeastOneAnswer && answeredCount < totalQuestions && (
            <p className="submit-hint">
              You can submit now or answer {totalQuestions - answeredCount} more questions
            </p>
          )}
        </div>
      ) : (
        <div className="quiz-results">
          <div className="results-card">
            <div className="results-header">
              <FaTrophy className="trophy-icon" />
              <h3>Quiz Complete!</h3>
              {isSubmitting && <span className="saving-indicator">Saving results...</span>}
              {analyticsResult?.offline && (
                <span className="offline-indicator">
                  Results saved locally (offline mode)
                </span>
              )}
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

            {/* Time Stats */}
            <div className="time-stats">
              <FaClock className="time-stats-icon" />
              <span>Total time: {formatTime(totalTimeSpent)}</span>
            </div>

            <div className={`feedback-message ${getFeedback().class}`}>
              <p>{getFeedback().text}</p>
            </div>

            {/* New Best Score Indicator */}
            {analyticsResult?.isNewBestScore && (
              <div className="new-best-score">
                <FaTrophy className="best-icon" />
                <span>New Personal Best!</span>
              </div>
            )}

            <div className="results-breakdown">
              <div className="breakdown-item">
                <span className="breakdown-label">MCQ Score</span>
                <span className="breakdown-value">
                  {mcqQuestions.filter(q => mcqAnswers[q.id] === q.correct).length}/{Object.keys(mcqAnswers).length}
                  {Object.keys(mcqAnswers).length < mcqQuestions.length && (
                    <span className="skipped-count"> ({mcqQuestions.length - Object.keys(mcqAnswers).length} skipped)</span>
                  )}
                </span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">True/False Score</span>
                <span className="breakdown-value">
                  {tfQuestions.filter(q => tfAnswers[q.id] === q.correct).length}/{Object.keys(tfAnswers).length}
                  {Object.keys(tfAnswers).length < tfQuestions.length && (
                    <span className="skipped-count"> ({tfQuestions.length - Object.keys(tfAnswers).length} skipped)</span>
                  )}
                </span>
              </div>
              <div className="breakdown-item">
                <span className="breakdown-label">Attempted</span>
                <span className="breakdown-value">{answeredCount}/{totalQuestions}</span>
              </div>
              {analyticsResult && (
                <div className="breakdown-item">
                  <span className="breakdown-label">Attempt #</span>
                  <span className="breakdown-value">{analyticsResult.attemptNumber}</span>
                </div>
              )}
            </div>

            {/* Detailed Analytics Section */}
            {analyticsResult && (
              <>
                <button
                  className="toggle-analytics-btn"
                  onClick={() => setShowAnalytics(!showAnalytics)}
                >
                  <FaChartLine className="btn-icon" />
                  {showAnalytics ? 'Hide' : 'Show'} Detailed Analytics
                </button>

                {showAnalytics && (
                  <div className="detailed-analytics">
                    {/* Weak Areas */}
                    {analyticsResult.weakQuestions?.length > 0 && (
                      <div className="analytics-section weak-areas">
                        <h4><FaExclamationTriangle className="section-icon" /> Areas to Improve</h4>
                        <div className="weak-questions-list">
                          {analyticsResult.weakQuestions.map((q, idx) => (
                            <div key={idx} className="weak-question-item">
                              <span className="weak-q-text">{q.questionText.substring(0, 50)}...</span>
                              <span className="weak-q-accuracy">{q.accuracy}% accuracy</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Strong Areas */}
                    {analyticsResult.strongQuestions?.length > 0 && (
                      <div className="analytics-section strong-areas">
                        <h4><FaCheckCircle className="section-icon" /> Your Strengths</h4>
                        <div className="strong-questions-list">
                          {analyticsResult.strongQuestions.map((q, idx) => (
                            <div key={idx} className="strong-question-item">
                              <span className="strong-q-text">{q.questionText.substring(0, 50)}...</span>
                              <span className="strong-q-accuracy">{q.accuracy}% accuracy</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Question-by-Question Analysis */}
                    <div className="analytics-section question-analysis">
                      <h4>Question Analysis</h4>
                      <div className="question-analysis-list">
                        {analyticsResult.questionAnalytics?.map((q, idx) => (
                          <div key={idx} className={`question-analysis-item ${q.isCorrect ? 'correct' : 'wrong'}`}>
                            <div className="qa-header">
                              <span className="qa-number">Q{idx + 1}</span>
                              <span className={`qa-status ${q.isCorrect ? 'correct' : 'wrong'}`}>
                                {q.isCorrect ? 'Correct' : 'Incorrect'}
                              </span>
                            </div>
                            <p className="qa-question">{q.questionText}</p>
                            {!q.isCorrect && (
                              <div className="qa-answer-info">
                                <p className="your-answer">
                                  Your answer: <span className="wrong-text">
                                    {q.questionType === 'mcq' ? q.userAnswerText : (q.userAnswer ? 'True' : 'False')}
                                  </span>
                                </p>
                                <p className="correct-answer">
                                  Correct answer: <span className="correct-text">
                                    {q.questionType === 'mcq' ? q.correctAnswerText : (q.correctAnswer ? 'True' : 'False')}
                                  </span>
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}

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
