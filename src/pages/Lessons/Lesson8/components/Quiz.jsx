import React, { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo, FaArrowRight, FaQuestionCircle, FaClock, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { submitDetailedQuizAttempt, getQuizAnalytics } from '../../../../services/firebase';
import './component.css';

const Quiz = ({ mcqQuestions = [], tfQuestions = [], quizId = 'lesson8' }) => {
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
    try {
      const result = await getQuizAnalytics(quizId);
      if (result.success && result.data) {
        setPreviousAttempts(result.data);
      }
    } catch (error) {
      console.error("Failed to load analytics", error);
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

  const getQId = (q, index, type) => q.id || `${type}-${index}`;

  const handleMcqAnswer = (index, q, answerIndex) => {
    if (showResults) return;
    const qId = getQId(q, index, 'mcq');
    trackQuestionTime(qId, 'mcq');
    setMcqAnswers({ ...mcqAnswers, [index]: answerIndex });
  };

  const handleTfAnswer = (index, q, answer) => {
    if (showResults) return;
    const qId = getQId(q, index, 'tf');
    trackQuestionTime(qId, 'tf');
    setTfAnswers({ ...tfAnswers, [index]: answer });
  };

  const handleSubmit = async () => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (currentQuestion && currentQuestionStart) {
      const timeSpent = Date.now() - currentQuestionStart;
      const key = `${currentQuestion.type}_${currentQuestion.id}`;
      setQuestionTimes(prev => ({ ...prev, [key]: (prev[key] || 0) + timeSpent }));
    }

    const endTime = Date.now();
    const finalTimeSpent = endTime - startTime;

    let mcqScore = 0;
    mcqQuestions.forEach((q, index) => {
      if (mcqAnswers[index] === q.correct) mcqScore++;
    });

    let tfScore = 0;
    tfQuestions.forEach((q, index) => {
      if (tfAnswers[index] === q.correct) tfScore++;
    });

    setScore(mcqScore + tfScore);
    setShowResults(true);
    setIsSubmitting(true);

    try {
      const result = await submitDetailedQuizAttempt(quizId, {
        totalScore: mcqScore + tfScore,
        totalQuestions: mcqQuestions.length + tfQuestions.length,
        totalTimeSpent: finalTimeSpent,
        questionAnalytics: [
          ...mcqQuestions.map((q, index) => ({
            id: getQId(q, index, 'mcq'),
            type: 'mcq',
            isCorrect: mcqAnswers[index] === q.correct,
            questionText: q.question
          })),
          ...tfQuestions.map((q, index) => ({
            id: getQId(q, index, 'tf'),
            type: 'tf',
            isCorrect: tfAnswers[index] === q.correct,
            questionText: q.question
          }))
        ]
      });
      if (result.success) setAnalyticsResult(result.data);
    } catch (error) {
      console.error('Failed to submit analytics:', error);
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => document.querySelector('.quiz-results')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleReset = () => {
    setMcqAnswers({});
    setTfAnswers({});
    setShowResults(false);
    setScore(0);
    setAnalyticsResult(null);
    setShowAnalytics(false);
    setQuestionTimes({});
    const now = Date.now();
    setStartTime(now);
    setCurrentQuestionStart(now);
    setCurrentQuestion(null);
    setTotalTimeSpent(0);
    timerRef.current = setInterval(() => setTotalTimeSpent(Date.now() - now), 1000);
    loadPreviousAnalytics();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalQuestions = mcqQuestions.length + tfQuestions.length;
  const answeredCount = Object.keys(mcqAnswers).length + Object.keys(tfAnswers).length;
  const hasAtLeastOneAnswer = answeredCount > 0;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getFeedback = () => {
    if (percentage >= 90) return { text: "Excellent! You've mastered Cost Concepts!", class: "excellent" };
    if (percentage >= 75) return { text: "Great job! Keep up the good work!", class: "good" };
    if (percentage >= 50) return { text: "Good effort! Review the graphs for better understanding.", class: "average" };
    return { text: "Keep trying! Go through the lesson again.", class: "poor" };
  };

  return (
    <section className="lesson-section quiz-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Quiz</span>
        <h2 className="section-title-lesson">Test Your Knowledge</h2>
        <p className="section-subtitle-lesson">Answer all questions to check your understanding of Cost Curves & Relationships</p>
      </div>

      {previousAttempts && (
        <div className="previous-attempts-banner">
          <div className="attempts-info">
            <FaChartLine className="attempts-icon" />
            <span>Previous attempts: <strong>{previousAttempts.totalAttempts}</strong> | Best score: <strong>{previousAttempts.bestPercentage}%</strong></span>
          </div>
        </div>
      )}

      <div className="quiz-progress-card">
        <div className="progress-info">
          <span className="progress-label">Questions Answered</span>
          <span className="progress-count">{answeredCount} / {totalQuestions}</span>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}></div>
        </div>
        {!showResults && (
          <div className="quiz-timer">
            <FaClock className="timer-icon" />
            <span className="timer-text">{formatTime(totalTimeSpent)}</span>
          </div>
        )}
      </div>

      {mcqQuestions.length > 0 && (
        <div className="quiz-block">
          <div className="quiz-block-header">
            <FaQuestionCircle className="quiz-block-icon" />
            <h3>Multiple Choice Questions</h3>
          </div>
          <div className="questions-container">
            {mcqQuestions.map((q, index) => (
              <div key={index} className={`question-card ${showResults ? 'show-result' : ''}`}>
                <div className="question-header">
                  <span className="question-number">Q{index + 1}</span>
                  {showResults && (mcqAnswers[index] === q.correct ? <FaCheckCircle className="result-icon correct" /> : <FaTimesCircle className="result-icon wrong" />)}
                </div>
                <p className="question-text">{q.question}</p>
                <div className="options-grid">
                  {q.options.map((opt, idx) => (
                    <button
                      key={idx}
                      className={`option-btn ${mcqAnswers[index] === idx ? 'selected' : ''} ${showResults && idx === q.correct ? 'correct' : ''} ${showResults && mcqAnswers[index] === idx && idx !== q.correct ? 'wrong' : ''}`}
                      onClick={() => handleMcqAnswer(index, q, idx)}
                      disabled={showResults}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                      <span className="option-text">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {tfQuestions.length > 0 && (
        <div className="quiz-block">
          <div className="quiz-block-header">
            <FaQuestionCircle className="quiz-block-icon" />
            <h3>True or False</h3>
          </div>
          <div className="questions-container">
            {tfQuestions.map((q, index) => (
              <div key={index} className={`question-card tf-card ${showResults ? 'show-result' : ''}`}>
                <div className="question-header">
                  <span className="question-number">Q{mcqQuestions.length + index + 1}</span>
                  {showResults && (tfAnswers[index] === q.correct ? <FaCheckCircle className="result-icon correct" /> : <FaTimesCircle className="result-icon wrong" />)}
                </div>
                <p className="question-text">{q.question}</p>
                <div className="tf-options">
                  <button className={`tf-btn ${tfAnswers[index] === true ? 'selected' : ''} ${showResults && q.correct === true ? 'correct' : ''} ${showResults && tfAnswers[index] === true && !q.correct ? 'wrong' : ''}`} onClick={() => handleTfAnswer(index, q, true)} disabled={showResults}>True</button>
                  <button className={`tf-btn ${tfAnswers[index] === false ? 'selected' : ''} ${showResults && q.correct === false ? 'correct' : ''} ${showResults && tfAnswers[index] === false && q.correct ? 'wrong' : ''}`} onClick={() => handleTfAnswer(index, q, false)} disabled={showResults}>False</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showResults ? (
        <div className="submit-section">
          <button className={`submit-btn ${hasAtLeastOneAnswer ? 'ready' : 'disabled'}`} onClick={handleSubmit} disabled={!hasAtLeastOneAnswer}>
            {hasAtLeastOneAnswer ? <>Submit Quiz <FaArrowRight /></> : 'Answer at least 1 question'}
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
              <span className="score-number">{percentage}%</span>
              <span className="score-label">{score}/{totalQuestions}</span>
            </div>
            <div className={`feedback-message ${getFeedback().class}`}><p>{getFeedback().text}</p></div>
            <button className="retry-btn" onClick={handleReset}><FaRedo /> Retry Quiz</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Quiz;
