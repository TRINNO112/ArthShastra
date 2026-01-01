// Lesson 2: Central Problems of an Economy - Main Page Component
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaBookOpen,
  FaExclamationTriangle,
  FaChartLine,
  FaBalanceScale,
  FaClipboardList,
  FaChevronRight,
  FaChevronLeft,
  FaLightbulb,
  FaSync
} from 'react-icons/fa';
import {
  Introduction,
  CentralProblems,
  OpportunityCost,
  PPC,
  Quiz
} from './components';
import { lesson2Data } from '../data/lesson2Data';
import { logLessonProgress } from '../../../services/firebase';
import '../Lesson1/Lesson1.css'; // Reusing Lesson 1 styles

const sections = [
  { id: 'intro', name: 'Scarcity & Choice', icon: FaBookOpen },
  { id: 'central-problems', name: 'Central Problems', icon: FaExclamationTriangle },
  { id: 'opportunity-cost', name: 'Opportunity Cost', icon: FaBalanceScale },
  { id: 'ppc', name: 'PPC Curve', icon: FaChartLine },
  { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson2() {
  const [activeSection, setActiveSection] = useState('intro');
  const [startTime] = useState(Date.now());
  const lessonId = 'micro11-2';

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
      case 'intro':
        return <Introduction />;
      case 'central-problems':
        return <CentralProblems />;
      case 'opportunity-cost':
        return <OpportunityCost />;
      case 'ppc':
        return <PPC />;
      case 'quiz':
        return <Quiz mcqQuestions={lesson2Data.mcqQuestions} tfQuestions={lesson2Data.tfQuestions} quizId="lesson2" />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="lesson-page">
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <header className="lesson-header">
        <div className="header-container">
          <Link to="/lessons" className="back-link">
            <FaArrowLeft />
            <span>Back to Lessons</span>
          </Link>

          <div className="lesson-info">
            <div className="lesson-badge">
              <span className="badge-icon">📉</span>
              <span>Chapter 2</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Central Problems of</span>
              <span className="title-gradient">An Economy</span>
            </h1>
            <p className="lesson-meta">
              Based on VK Ohri's Grade 11 Textbook • {lesson2Data.mcqQuestions.length + lesson2Data.tfQuestions.length} Quiz Questions
            </p>
          </div>
        </div>
      </header>

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

      <main className="lesson-content">
        <div className="content-container">
          {renderActiveSection()}
        </div>
      </main>

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

export default Lesson2;
