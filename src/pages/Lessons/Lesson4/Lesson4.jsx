// Lesson 4: Consumer Equilibrium - Indifference Curve Analysis - Main Page Component
// Based on Grade 11 NCERT Microeconomics syllabus
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaBookOpen,
  FaBezierCurve,
  FaListUl,
  FaExchangeAlt,
  FaChartLine,
  FaBalanceScale,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import {
  IntroToIC,
  MeaningOfIC,
  PropertiesOfIC,
  MRSConcept,
  BudgetLine,
  ConsumerEquilibriumIC,
  Quiz
} from './components';
import { lesson4Data } from '../data/lesson4Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css'; // Shared lesson styles

/**
 * Lesson 4: Consumer Equilibrium - Indifference Curve Analysis
 *
 * 6 Topics:
 * 1. Intro to IC - Ordinal Approach meaning and advantages
 * 2. Meaning of IC - Definition, Schedule and Map
 * 3. Properties of IC - Downward sloping, convex, etc.
 * 4. MRS - Meaning and Diminishing nature
 * 5. Budget Line - Equation, Slope and Shifts
 * 6. Consumer Equilibrium - MRSxy = Px/Py and budget constraint
 */
const sections = [
  { id: 'intro-ic', name: 'Introduction', icon: FaBookOpen },
  { id: 'meaning-ic', name: 'Meaning of IC', icon: FaBezierCurve },
  { id: 'properties-ic', name: 'Properties of IC', icon: FaListUl },
  { id: 'mrs-concept', name: 'MRS Concept', icon: FaExchangeAlt },
  { id: 'budget-line', name: 'Budget Line', icon: FaChartLine },
  { id: 'equilibrium-ic', name: 'Equilibrium', icon: FaBalanceScale },
  { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson4() {
  // Load active section from localStorage, default to 'intro-ic'
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson4-activeSection');
    return saved || 'intro-ic';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-4';

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson4-activeSection', activeSection);
  }, [activeSection]);

  // Track time spent and completion
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
      const completed = activeSection === 'quiz';
      if (timeSpent > 0) {
        logLessonProgress(lessonId, timeSpent, completed);
      }
    };
  }, [startTime, lessonId, activeSection]);

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
      case 'intro-ic':
        return <IntroToIC />;
      case 'meaning-ic':
        return <MeaningOfIC />;
      case 'properties-ic':
        return <PropertiesOfIC />;
      case 'mrs-concept':
        return <MRSConcept />;
      case 'budget-line':
        return <BudgetLine />;
      case 'equilibrium-ic':
        return <ConsumerEquilibriumIC />;
      case 'quiz':
        return <Quiz
          mcqQuestions={lesson4Data.mcqQuestions}
          tfQuestions={lesson4Data.tfQuestions}
          quizId="lesson4"
        />;
      default:
        return <IntroToIC />;
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
              <span className="badge-icon">📉</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Consumer Equilibrium:</span>
              <span className="title-gradient">Indifference Curve Analysis</span>
            </h1>
            <p className="lesson-meta">
              Based on NCERT Grade 11 Microeconomics • {lesson4Data.mcqQuestions.length + lesson4Data.tfQuestions.length} Quiz Questions
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="lesson-nav">
        <div className="nav-container">
          <div className="nav-scroll">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              const isCompleted = index < currentIndex;

              return (
                <button
                  key={section.id}
                  className={`nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                  onClick={() => handleSectionChange(section.id)}
                >
                  <span className="nav-icon">
                    <Icon />
                  </span>
                  <span className="nav-text">{section.name}</span>
                  {isCompleted && <span className="nav-check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

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

export default Lesson4;
