// Lesson 6: Price Elasticity of Demand - Main Page Component
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaPercentage,
  FaCalculator,
  FaListUl,
  FaLightbulb,
  FaChartBar,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft
} from 'react-icons/fa';
import {
  Introduction,
  ConceptAndMeasurement,
  TypesOfElasticity,
  FactorsAffecting,
  Applications,
  Quiz
} from './components';
import { lesson6Data } from '../data/lesson6Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';

const sections = lesson6Data.sections;

function Lesson6() {
  // Load active section from localStorage, default to 'introduction'
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson6-activeSection');
    return saved || 'introduction';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-6';

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson6-activeSection', activeSection);
  }, [activeSection]);

  // Track time spent and completion
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
      const completed = activeSection === 'quiz';
      if (timeSpent > 0 || activeSection === 'quiz') {
        logLessonProgress(lessonId, Math.max(timeSpent, 1), completed);
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
      case 'introduction':
        return <Introduction />;
      case 'concept-measurement':
        return <ConceptAndMeasurement />;
      case 'types-elasticity':
        return <TypesOfElasticity />;
      case 'factors-affecting':
        return <FactorsAffecting />;
      case 'applications':
        return <Applications />;
      case 'quiz':
        return <Quiz
          mcqQuestions={lesson6Data.mcqQuestions}
          tfQuestions={lesson6Data.tfQuestions}
          quizId="lesson6"
        />;
      default:
        return <Introduction />;
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
              <span className="badge-icon">📊</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Price Elasticity of</span>
              <span className="title-gradient">Demand</span>
            </h1>
            <p className="lesson-meta">
              Based on NCERT Grade 11 Microeconomics • {lesson6Data.mcqQuestions.length + lesson6Data.tfQuestions.length} Quiz Questions
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

export default Lesson6;