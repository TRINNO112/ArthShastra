// Lesson 7: Production Function and Returns to a Factor - Main Page Component
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaIndustry,
  FaTable,
  FaChartLine,
  FaArrowUp,
  FaBalanceScale,
  FaLightbulb,
  FaCalculator,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import { ProductionFunction, ProductionSchedule, ReturnsToFactorChart } from './components';
import { lesson7Data } from '../data/lesson7Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';

const sections = lesson7Data.sections;

function Lesson7() {
  // Load active section from localStorage, default to 'production-function'
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson7-activeSection');
    return saved || 'production-function';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-7';

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson7-activeSection', activeSection);
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
      case 'production-function':
        return <ProductionFunction />;
      case 'production-schedule':
        return <ProductionSchedule />;
      case 'quiz':
        return (
          <div className="coming-soon">
            <h3>Quiz</h3>
            <p>Interactive quiz coming soon in future parts. {lesson7Data.mcqQuestions.length + lesson7Data.tfQuestions.length} questions prepared.</p>
          </div>
        );
      default:
        return (
          <div className="coming-soon">
            <h3>{sections.find(s => s.id === activeSection)?.name || 'Section'}</h3>
            <p>This section will be implemented in future parts of Lesson7.</p>
          </div>
        );
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
              <span className="badge-icon">📈</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Production Function &</span>
              <span className="title-gradient">Returns to Factor</span>
            </h1>
            <p className="lesson-meta">
              Based on NCERT Grade 11 Microeconomics • {lesson7Data.mcqQuestions.length + lesson7Data.tfQuestions.length} Quiz Questions
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

export default Lesson7;
