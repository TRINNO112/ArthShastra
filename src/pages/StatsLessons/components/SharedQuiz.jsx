import { useState, useEffect, useRef } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo, FaArrowRight, FaQuestionCircle, FaClock, FaChartLine, FaExclamationTriangle, FaMedal } from 'react-icons/fa';
import { submitDetailedQuizAttempt, getQuizAnalytics } from '../../../services/firebase';
import '../css/quiz.css';

// Helper: get a stable ID for a question (fallback to type + index)
const getQId = (q, index, prefix = 'q') => q.id !== undefined ? q.id : `${prefix}_${index}`;

// Helper: get the correct answer index for MCQ questions
const getMcqCorrect = (q) => {
    if (q.correct !== undefined) return q.correct;
    if (q.correctAnswer !== undefined) {
        if (typeof q.correctAnswer === 'number') return q.correctAnswer;
        if (typeof q.correctAnswer === 'string' && q.options) {
            const idx = q.options.findIndex(opt => opt === q.correctAnswer);
            return idx >= 0 ? idx : undefined;
        }
    }
    return undefined;
};

// Helper: get the correct answer for TF questions
const getTfCorrect = (q) => {
    if (q.correct !== undefined) return typeof q.correct === 'boolean' ? q.correct : String(q.correct).toLowerCase() === 'true';
    if (q.answer !== undefined) return typeof q.answer === 'boolean' ? q.answer : String(q.answer).toLowerCase() === 'true';
    if (q.isTrue !== undefined) return typeof q.isTrue === 'boolean' ? q.isTrue : String(q.isTrue).toLowerCase() === 'true';
    if (q.correctAnswer !== undefined) return typeof q.correctAnswer === 'boolean' ? q.correctAnswer : String(q.correctAnswer).toLowerCase() === 'true';
    return undefined;
};

/**
 * Shared Quiz Component - Zen Premium Edition
 */
function SharedQuiz({
    mcqQuestions = [],
    tfQuestions = [],
    quizId,
    title = "Test Your Knowledge",
    subtitle = "Answer all questions to check your understanding"
}) {
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

    // Timer interval ref
    const timerRef = useRef(null);

    // Initialize quiz timer on mount
    useEffect(() => {
        const now = Date.now();
        setStartTime(now);
        setCurrentQuestionStart(now);

        // Load previous analytics if user is logged in
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
    }, [quizId]);

    const loadPreviousAnalytics = async () => {
        if (!quizId) return;
        try {
            const result = await getQuizAnalytics(quizId);
            if (result.success && result.data) {
                setPreviousAttempts(result.data);
            }
        } catch (error) {
            console.warn("Failed to load analytics:", error);
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
        mcqQuestions.forEach((q, index) => {
            const qId = getQId(q, index, 'mcq');
            if (mcqAnswers[qId] === getMcqCorrect(q)) mcqScore++;
        });

        let tfScore = 0;
        tfQuestions.forEach((q, index) => {
            const qId = getQId(q, index, 'tf');
            if (tfAnswers[qId] === getTfCorrect(q)) tfScore++;
        });

        const totalScore = mcqScore + tfScore;
        setScore(totalScore);
        setShowResults(true);
        setIsSubmitting(true);

        // Submit to Firebase
        if (quizId) {
            try {
                const result = await submitDetailedQuizAttempt(quizId, {
                    totalScore: totalScore,
                    totalQuestions: mcqQuestions.length + tfQuestions.length,
                    totalTimeSpent: finalTimeSpent,
                    questionAnalytics: [
                        ...mcqQuestions.map((q, index) => {
                            const qId = getQId(q, index, 'mcq');
                            const correct = getMcqCorrect(q);
                            return {
                                id: qId,
                                type: 'mcq',
                                isCorrect: mcqAnswers[qId] === correct,
                                questionText: q.question || '',
                                userAnswerText: mcqAnswers[qId] !== undefined ? q.options[mcqAnswers[qId]] : 'Skipped',
                                correctAnswerText: correct !== undefined ? q.options[correct] || '' : ''
                            };
                        }),
                        ...tfQuestions.map((q, index) => {
                            const qId = getQId(q, index, 'tf');
                            const correct = getTfCorrect(q);
                            return {
                                id: qId,
                                type: 'tf',
                                isCorrect: tfAnswers[qId] === correct,
                                questionText: q.question || '',
                                userAnswer: tfAnswers[qId] !== undefined ? tfAnswers[qId] : null,
                                correctAnswer: correct
                            };
                        })
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
        } else {
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

    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

    const formatTime = (ms) => {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const getFeedback = () => {
        if (percentage >= 90) return { text: "Outstanding! Absolute mastery.", class: "excellent" };
        if (percentage >= 75) return { text: "Great work! Solid understanding.", class: "good" };
        if (percentage >= 50) return { text: "Good start. Review the tricky parts.", class: "average" };
        return { text: "Keep learning. You got this.", class: "poor" };
    };

    return (
        <section className="lesson-section quiz-section">
            <div className="quiz-container">
                {/* Section Header */}
                <div className="section-header-lesson" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span className="section-badge-lesson" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)' }}>Assessment</span>
                    <h2 className="section-title-lesson" style={{ fontSize: '2.5rem', marginTop: '10px' }}>{title}</h2>
                    <p className="section-subtitle-lesson" style={{ color: 'rgba(255,255,255,0.6)' }}>{subtitle}</p>
                </div>

                {/* Progress Indicator with Timer */}
                <div className="quiz-progress-card animate-fadeInUp">
                    <div className="progress-info">
                        <span className="progress-count">Question {Math.min(answeredCount + 1, totalQuestions)} of {totalQuestions}</span>
                        <span className="progress-percentage">{Math.round((answeredCount / totalQuestions) * 100)}% Complete</span>
                    </div>
                    <div className="progress-bar-container">
                        <div
                            className="progress-bar-fill"
                            style={{
                                width: `${(answeredCount / totalQuestions) * 100}%`
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
                {mcqQuestions.length > 0 && (
                    <div className="quiz-block animate-fadeInUp">
                        <div className="questions-container">
                            {mcqQuestions.map((q, index) => {
                                const qId = getQId(q, index, 'mcq');
                                const correct = getMcqCorrect(q);
                                return (
                                <div key={qId} className={`question-card ${showResults ? 'show-result' : ''}`}>
                                    <div className="question-header">
                                        <span className="question-number">Q{index + 1}</span>
                                        {showResults && (
                                            mcqAnswers[qId] === correct
                                                ? <FaCheckCircle className="result-icon correct" />
                                                : <FaTimesCircle className="result-icon wrong" />
                                        )}
                                    </div>
                                    <p className="question-text">{q.question}</p>

                                    <div className="options-grid">
                                        {q.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                className={`option-btn ${mcqAnswers[qId] === idx ? 'selected' : ''}
                            ${showResults && idx === correct ? 'correct' : ''}
                            ${showResults && mcqAnswers[qId] === idx && idx !== correct ? 'wrong' : ''}`}
                                                onClick={() => handleMcqAnswer(qId, idx)}
                                                disabled={showResults}
                                            >
                                                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                                                <span className="option-text">{opt}</span>
                                                {showResults && idx === correct && <FaCheckCircle className="option-icon correct" />}
                                                {showResults && mcqAnswers[qId] === idx && idx !== correct && <FaTimesCircle className="option-icon wrong" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* True/False Section */}
                {tfQuestions.length > 0 && (
                    <div className="quiz-block animate-fadeInUp">
                        <div className="questions-container">
                            {tfQuestions.map((q, index) => {
                                const qId = getQId(q, index, 'tf');
                                const correct = getTfCorrect(q);
                                return (
                                <div key={qId} className={`question-card tf-card ${showResults ? 'show-result' : ''}`}>
                                    <div className="question-header">
                                        <span className="question-number">Q{mcqQuestions.length + index + 1}</span>
                                        {showResults && (
                                            tfAnswers[qId] === correct
                                                ? <FaCheckCircle className="result-icon correct" />
                                                : <FaTimesCircle className="result-icon wrong" />
                                        )}
                                    </div>
                                    <p className="question-text">{q.question}</p>

                                    <div className="tf-options" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <button
                                            className={`tf-btn ${tfAnswers[qId] === true ? 'selected' : ''}
                            ${showResults && correct === true ? 'correct' : ''}
                            ${showResults && tfAnswers[qId] === true && correct !== true ? 'wrong' : ''}`}
                                            onClick={() => handleTfAnswer(qId, true)}
                                            disabled={showResults}
                                        >
                                            <FaCheckCircle className="tf-icon" style={{ marginRight: '10px' }} />
                                            True
                                        </button>
                                        <button
                                            className={`tf-btn ${tfAnswers[qId] === false ? 'selected' : ''}
                            ${showResults && correct === false ? 'correct' : ''}
                            ${showResults && tfAnswers[qId] === false && correct !== false ? 'wrong' : ''}`}
                                            onClick={() => handleTfAnswer(qId, false)}
                                            disabled={showResults}
                                        >
                                            <FaTimesCircle className="tf-icon" style={{ marginRight: '10px' }} />
                                            False
                                        </button>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Submit / Results Section */}
                {!showResults ? (
                    <div className="submit-section animate-fadeInUp">
                        <button
                            className={`submit-btn ${hasAtLeastOneAnswer ? 'ready' : 'disabled'}`}
                            onClick={handleSubmit}
                            disabled={!hasAtLeastOneAnswer}
                        >
                            {hasAtLeastOneAnswer ? (
                                <>Submit Quiz ({answeredCount}/{totalQuestions}) <FaArrowRight /></>
                            ) : (
                                <>Select an answer to submit</>
                            )}
                        </button>

                    </div>
                ) : (
                    <div className="quiz-results animate-fadeInUp">
                        <div className="results-card">

                            <div className="score-circle">
                                <svg viewBox="0 0 100 100">
                                    <circle className="score-bg" cx="50" cy="50" r="45" />
                                    <circle
                                        className="score-fill"
                                        cx="50" cy="50" r="45"
                                        style={{
                                            strokeDasharray: `${percentage * 2.83} 283`,
                                            stroke: percentage >= 75 ? '#34c759' : percentage >= 50 ? '#ffcc00' : '#ff3b30'
                                        }}
                                    />
                                </svg>
                                <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span className="score-number">{percentage}%</span>
                                    <span className="score-label">{score}/{totalQuestions} Correct</span>
                                </div>
                            </div>

                            <div className={`feedback-message`}>
                                <p>{getFeedback().text}</p>
                            </div>

                            <div className="results-breakdown">
                                <div className="breakdown-item">
                                    <span className="breakdown-value" style={{ color: '#4facfe' }}>
                                        {formatTime(totalTimeSpent)}
                                    </span>
                                    <span className="breakdown-label">Time</span>
                                </div>
                                <div className="breakdown-item">
                                    <span className="breakdown-value" style={{ color: '#34c759' }}>
                                        {mcqQuestions.filter((q, i) => mcqAnswers[getQId(q, i, 'mcq')] === getMcqCorrect(q)).length}
                                    </span>
                                    <span className="breakdown-label">MCQ Correct</span>
                                </div>
                            </div>

                            <button className="retry-btn" onClick={handleReset}>
                                <FaRedo className="btn-icon" style={{ marginRight: '8px' }} />
                                Try Again
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default SharedQuiz;
