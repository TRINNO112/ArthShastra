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

// Import modular components
import {
  ProductionFunction,
  ProductionSchedule,
  ReturnsToFactorChart,
  StagesOfProduction,
  RealWorldExamples,
  AssumptionsLimitations,
  PracticeProblems,
  Quiz
} from './components';

import { lesson7Data } from '../data/lesson7Data';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';
import MicroTopicsMenu from '../components/MicroTopicsMenu';
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
  const { logActivity } = useAuth();

  useEffect(() => {
    if (logActivity) {
      logActivity('lesson_visit', { lessonId, lessonName: 'Cost of Production', chapter: 'Chapter 7' });
    }
  }, [logActivity, lessonId]);

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson7-activeSection', activeSection);
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
      case 'production-function':
        return <ProductionFunction />;
      case 'production-schedule':
        return <ProductionSchedule />;
      case 'returns-chart':
        return <ReturnsToFactorChart />;
      case 'stages':
        return <StagesOfProduction />;
      case 'assumptions':
        return <AssumptionsLimitations />;
      case 'examples':
        return <RealWorldExamples />;
      case 'practice':
        return <PracticeProblems />;
      case 'quiz':
        return <Quiz />;
      default:
        return <ProductionFunction />;
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

      {/* Navigation - Responsive Hybrid */}
      <MicroTopicsMenu
        sections={sections}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      {/* Main Content */}
      <main className="lesson-content">
        <div className="content-container animate-fade-in">
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
