// Lesson 3: Consumer Equilibrium - Utility Analysis - Main Page Component
// Based on VK Ohri's Grade 11 Economics Textbook
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaUser,
  FaLightbulb,
  FaArrowDown,
  FaBalanceScale,
  FaExchangeAlt,
  FaRuler,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import {
  WhoIsConsumer,
  ConceptOfUtility,
  DiminishingMarginalUtility,
  ConsumerEquilibrium,
  LimitationsOfUtility,
  PracticeProblems,
  Quiz
} from './components';
import { lesson3Data } from '../data/lesson3Data';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';
import MicroTopicsMenu from '../components/MicroTopicsMenu';
import '../css/lessons.css'; // Shared lesson styles

/**
 * Lesson 3: Consumer Equilibrium - Utility Analysis
 *
 * 6 Topics:
 * 1. Who is a Consumer? - Definition and characteristics
 * 2. Concept of Utility - TU, MU, and their relationship
 * 3. Law of Diminishing Marginal Utility - Statement, assumptions, exceptions
 * 4. Consumer Equilibrium - Meaning, assumptions, conditions
 * 5. Cases (One Commodity & Two Commodity) - MU = P and MUx/Px = MUy/Py
 * 6. Limitations of Utility Analysis - Cardinal measurability issues
 */
const sections = [
  { id: 'who-is-consumer', name: 'Who is a Consumer?', icon: FaUser },
  { id: 'concept-utility', name: 'Concept of Utility', icon: FaLightbulb },
  { id: 'dmu', name: 'Law of DMU', icon: FaArrowDown },
  { id: 'consumer-equilibrium', name: 'Consumer Equilibrium', icon: FaBalanceScale },
  { id: 'limitations', name: 'Limitations', icon: FaRuler },
  { id: 'practice', name: 'Practice', icon: FaClipboardList },
  { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson3() {
  // Load active section from localStorage, default to 'who-is-consumer'
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson3-activeSection');
    return saved || 'who-is-consumer';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-3';
  const { logActivity } = useAuth();

  useEffect(() => {
    if (logActivity) {
      logActivity('lesson_visit', { lessonId, lessonName: 'Consumer Equilibrium', chapter: 'Chapter 3' });
    }
  }, [logActivity, lessonId]);

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson3-activeSection', activeSection);
  }, [activeSection]);

  // Track time spent on unmount only
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
      if (timeSpent > 0) {
        logLessonProgress(lessonId, timeSpent);
      }
    };
  }, [startTime, lessonId]);

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
    }
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'who-is-consumer':
        return <WhoIsConsumer />;
      case 'concept-utility':
        return <ConceptOfUtility />;
      case 'dmu':
        return <DiminishingMarginalUtility />;
      case 'consumer-equilibrium':
        return <ConsumerEquilibrium />;
      case 'limitations':
        return <LimitationsOfUtility />;
      case 'practice':
        return <PracticeProblems />;
      case 'quiz':
        return <Quiz
          mcqQuestions={lesson3Data.mcqQuestions}
          tfQuestions={lesson3Data.tfQuestions}
          quizId="lesson3"
        />;
      default:
        return <WhoIsConsumer />;
    }
  };

  return (
    <div className="lesson-page">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Header */}
      <header className="lesson-header">
        <div className="header-container">
          <Link to="/lessons" className="back-link">
            <FaArrowLeft />
            <span>Back to Lessons</span>
          </Link>

          <div className="lesson-info">
            <div className="lesson-badge">
              <span className="badge-icon">💰</span>
              <span>Chapter 3</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Consumer Equilibrium:</span>
              <span className="title-gradient">Utility Analysis</span>
            </h1>
            <p className="lesson-meta">
              Based on VK Ohri's Grade 11 Textbook • {lesson3Data.mcqQuestions.length + lesson3Data.tfQuestions.length} Quiz Questions
            </p>
          </div>
        </div>
      </header>

      {/* Navigation - Responsive Hybrid */}
      <MicroTopicsMenu
        sections={sections}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Main Content */}
      <main className="lesson-content">
        <div className="content-container">
          {renderActiveSection()}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="lesson-footer">
        <div className="footer-container">
          <button
            className={`footer-btn prev ${currentIndex === 0 ? 'disabled' : ''}`}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
            <span>Previous</span>
          </button>

          <div className="progress-indicator">
            {sections.map((section, index) => (
              <span
                key={section.id}
                className={`progress-dot ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
                onClick={() => handleSectionChange(section.id)}
              ></span>
            ))}
          </div>

          <button
            className={`footer-btn next ${currentIndex === sections.length - 1 ? 'disabled' : ''}`}
            onClick={goToNext}
            disabled={currentIndex === sections.length - 1}
          >
            <span>Next</span>
            <FaChevronRight />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Lesson3;
