// Quiz Module - Price Elasticity of Demand
import { useState, useEffect, useRef, useCallback } from 'react';
import { FaCheckCircle, FaTimesCircle, FaTrophy, FaRedo, FaArrowRight, FaQuestionCircle, FaClock} from 'react-icons/fa';
import { submitDetailedQuizAttempt, getQuizAnalytics } from '../../../../services/firebase';

function Quiz({ mcqQuestions, tfQuestions, quizId = 'lesson6' }) {
  // Answer states
  const [mcqAnswers, setMcqAnswers] = useState({});
  const [tfAnswers, setTfAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Time tracking states
  const [startTime, setStartTime] = useState(null);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  // Analytics states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [analyticsResult, setAnalyticsResult] = useState(null);
  const [previousAttempts, setPreviousAttempts] = useState(null);

  // Timer interval ref
  const timerRef = useRef(null);

  // Memoize loadPreviousAnalytics to prevent unnecessary re-renders
  const loadPreviousAnalytics = useCallback(async () => {
    const result = await getQuizAnalytics(quizId);
    if (result.success && result.data) {
      setPreviousAttempts(result.data);
    }
  }, [quizId]);

  // Initialize quiz timer on mount
  useEffect(() => {
    const now = Date.now();
    setStartTime(now);

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
  }, [loadPreviousAnalytics]);

  const calculateScore = () => {
    let correct = 0;
    let total = mcqQuestions.length + tfQuestions.length;

    // Check MCQ answers
    mcqQuestions.forEach((q, index) => {
      if (mcqAnswers[index] === q.correctAnswer) correct++;
    });

    // Check TF answers
    tfQuestions.forEach((q, index) => {
      if (tfAnswers[index] === q.answer) correct++;
    });

    return { correct, total, percentage: Math.round((correct / total) * 100) };
  };

  const handleSubmit = async () => {
    // Stop timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    const { correct, total, percentage } = calculateScore();
    setScore(percentage);
    setShowResults(true);

    // Submit to Firebase
    setIsSubmitting(true);
    const result = await submitDetailedQuizAttempt(quizId, {
      totalScore: correct,
      totalQuestions: total,
      totalTimeSpent: Math.round(totalTimeSpent / 1000), // Convert to seconds
      questionAnalytics: {}
    });

    setAnalyticsResult(result);
    setIsSubmitting(false);
  };

  const resetQuiz = () => {
    setMcqAnswers({});
    setTfAnswers({});
    setShowResults(false);
    setScore(0);
    setTotalTimeSpent(0);
    setStartTime(Date.now());
    timerRef.current = setInterval(() => {
      setTotalTimeSpent(Date.now() - startTime);
    }, 1000);
  };

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const { correct, total } = calculateScore();

    return (
      <section className="lesson-section">
        <div className="section-header-lesson">
          <span className="section-badge-lesson">Quiz Results</span>
          <h2 className="section-title-lesson">Price Elasticity of Demand Quiz</h2>
          <p className="section-subtitle-lesson">Your performance summary</p>
        </div>

        <div className="content-card">
          <div className="card-glow"></div>
          <div className="card-content">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                {score >= 80 ? '🎉' : score >= 60 ? '👍' : '📚'}
              </div>
              <h3 className="text-2xl font-bold mb-2">Score: {score}%</h3>
              <p className="text-lg">{correct} out of {total} questions correct</p>
              <p className="text-sm text-gray-400">Time spent: {formatTime(totalTimeSpent)}</p>
            </div>

            {analyticsResult && (
              <div className="highlight-card gold mb-4">
                <div className="highlight-content">
                  <h4>Analytics</h4>
                  {analyticsResult.data?.isNewBestScore && (
                    <p className="text-green-400">🎉 New personal best score!</p>
                  )}
                  {previousAttempts && (
                    <p>Previous best: {previousAttempts.bestPercentage}%</p>
                  )}
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <button onClick={resetQuiz} className="btn-secondary">
                <FaRedo className="mr-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 6</span>
        <h2 className="section-title-lesson">Price Elasticity of Demand Quiz</h2>
        <p className="section-subtitle-lesson">Test your understanding of elasticity concepts</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-400">
              Time: {formatTime(totalTimeSpent)}
            </div>
            {previousAttempts && (
              <div className="text-sm text-gray-400">
                Best: {previousAttempts.bestPercentage}%
              </div>
            )}
          </div>

          {/* MCQ Questions */}
          {mcqQuestions.map((question, qIndex) => (
            <div key={qIndex} className="mb-6 p-4 border border-gray-700 rounded-lg">
              <h4 className="font-semibold mb-3">{qIndex + 1}. {question.question}</h4>
              <div className="space-y-2">
                {question.options.map((option, oIndex) => (
                  <label key={oIndex} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name={`mcq-${qIndex}`}
                      value={oIndex}
                      checked={mcqAnswers[qIndex] === oIndex}
                      onChange={() => setMcqAnswers({ ...mcqAnswers, [qIndex]: oIndex })}
                      className="mr-3"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}

          {/* True/False Questions */}
          {tfQuestions.map((question, qIndex) => (
            <div key={qIndex} className="mb-6 p-4 border border-gray-700 rounded-lg">
              <h4 className="font-semibold mb-3">{mcqQuestions.length + qIndex + 1}. {question.question}</h4>
              <div className="space-y-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`tf-${qIndex}`}
                    value={true}
                    checked={tfAnswers[qIndex] === true}
                    onChange={() => setTfAnswers({ ...tfAnswers, [qIndex]: true })}
                    className="mr-3"
                  />
                  <span>True</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name={`tf-${qIndex}`}
                    value={false}
                    checked={tfAnswers[qIndex] === false}
                    onChange={() => setTfAnswers({ ...tfAnswers, [qIndex]: false })}
                    className="mr-3"
                  />
                  <span>False</span>
                </label>
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;