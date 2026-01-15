// Lesson 5: Theory of Demand - Main Page Component
// Based on Grade 11 NCERT Microeconomics syllabus
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaBookOpen,
  FaChartLine,
  FaShoppingBasket,
  FaArrowDown,
  FaPercentage,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import {
  ConceptOfDemand,
  DeterminantsOfDemand,
  LawOfDemand,
  MovementVsShift,
  Quiz
} from './components'; // Components imported from index.js
import { lesson5Data } from '../data/lesson5Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css'; // Shared lesson styles

/**
 * Lesson 5: Theory of Demand and Elasticity
 *
 * Topics:
 * 1. Concept of Demand
 * 2. Determinants of Demand & Demand Function
 * 3. Law of Demand
 * 4. Movement vs Shift in Demand
 */

const sections = lesson5Data.sections;

function Lesson5() {
  // Load active section from localStorage, default to 'concept-demand'
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson5-activeSection');
    return saved || 'concept-demand';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-5';

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson5-activeSection', activeSection);
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
      case 'concept-demand':
        return <ConceptOfDemand />;
      case 'determinants':
        return <DeterminantsOfDemand />;
      case 'law-demand':
        return <LawOfDemand />;
      case 'movement-shift':
        return <MovementVsShift />;
      case 'quiz':
        return <Quiz
          mcqQuestions={lesson5Data.mcqQuestions}
          tfQuestions={lesson5Data.tfQuestions}
          quizId="lesson5"
        />;
      default:
        return <ConceptOfDemand />;
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
              <span className="title-line">Theory of Demand:</span>
              <span className="title-gradient">Consumer Behaviour</span>
            </h1>
            <p className="lesson-meta">
              Based on NCERT Grade 11 Microeconomics • {lesson5Data.mcqQuestions.length + lesson5Data.tfQuestions.length} Quiz Questions
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

export default Lesson5;
