// Lesson 1: Economics and Economies - Main Page Component
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaBookOpen,
  FaLightbulb,
  FaExclamationTriangle,
  FaBalanceScale,
  FaGlobe,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft,
  FaFlask,
  FaLink
} from 'react-icons/fa';
import {
  Introduction,
  Definitions,
  EconomicProblems,
  PositiveNormative,
  MicroVsMacro,
  TypesOfEconomies,
  SimpleAndComplexEconomies,
  Quiz
} from './components';
import { lesson1Data } from '../data/lesson1Data';
import { logLessonProgress } from '../../../services/firebase';
import './Lesson1.css';

const sections = [
  { id: 'intro', name: 'Introduction', icon: FaBookOpen },
  { id: 'definitions', name: 'Definitions', icon: FaLightbulb },
  { id: 'problems', name: 'Economic Problems', icon: FaExclamationTriangle },
  { id: 'positive-normative', name: 'Positive vs Normative', icon: FaFlask },
  { id: 'micro-macro', name: 'Micro vs Macro', icon: FaBalanceScale },
  { id: 'economies', name: 'Types of Economies', icon: FaGlobe },
  { id: 'simple-complex', name: 'Simple vs Complex', icon: FaLink },
  { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson1() {
  const [activeSection, setActiveSection] = useState('intro');
  const [startTime] = useState(Date.now());
  const lessonId = 'micro11-1';

  // Track time spent and completion
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // minutes
      const completed = activeSection === 'quiz'; // Considered completed if user reached quiz
      if (timeSpent > 0) {
        logLessonProgress(lessonId, timeSpent, completed);
      }
    };
  }, [startTime, lessonId, activeSection]);

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setActiveSection(sections[currentIndex - 1].id);
      // Removed auto-scroll to top - maintains current scroll position
    }
  };

  const goToNext = () => {
    if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1].id);
      // Removed auto-scroll to top - maintains current scroll position
    }
  };

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    // Removed auto-scroll to top - maintains current scroll position
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'intro':
        return <Introduction />;
      case 'definitions':
        return <Definitions />;
      case 'problems':
        return <EconomicProblems />;
      case 'positive-normative':
        return <PositiveNormative />;
      case 'micro-macro':
        return <MicroVsMacro />;
      case 'economies':
        return <TypesOfEconomies />;
      case 'simple-complex':
        return <SimpleAndComplexEconomies />;
      case 'quiz':
        return <Quiz mcqQuestions={lesson1Data.mcqQuestions} tfQuestions={lesson1Data.tfQuestions} />;
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
              <span className="badge-icon">📚</span>
              <span>Chapter 1</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Economics and</span>
              <span className="title-gradient">Economies</span>
            </h1>
            <p className="lesson-meta">
              Based on VK Ohri's Grade 11 Textbook • {lesson1Data.mcqQuestions.length + lesson1Data.tfQuestions.length} Quiz Questions
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

export default Lesson1;
