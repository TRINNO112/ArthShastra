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
import MicroTopicsMenu from '../components/MicroTopicsMenu';
import '../css/lessons.css'; // Shared lesson styles
import './lesson5-comic.css'; // Comic Book Theme Styles

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
    <div className="comic-page">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Header */}
      <header className="lesson-header" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: '0 0 2rem 0' }}>
        <div className="header-container" style={{ display: 'block', textAlign: 'center', position: 'relative', overflow: 'visible' }}>
          <Link to="/lessons" className="comic-btn secondary" style={{ position: 'absolute', top: '20px', left: '20px', fontSize: '1rem' }}>
            <FaArrowLeft /> Back
          </Link>

          <div className="comic-badge" style={{
            fontSize: '0.9rem',
            position: 'absolute',
            top: '30px',
            right: '-40px',
            background: 'var(--action-red)'
          }}>
            ISSUE #5: MICROECONOMICS
          </div>

          <h1 className="comic-header-lg">
            THE AMAZING<br />
            <span style={{ color: 'var(--hero-blue)' }}>THEORY OF DEMAND</span>
          </h1>

          <div style={{
            background: 'white',
            border: '3px solid var(--comic-ink)',
            display: 'inline-block',
            padding: '5px 15px',
            transform: 'rotate(2deg)',
            fontFamily: 'var(--font-comic-body)',
            fontWeight: 'bold'
          }}>
            Based on NCERT Grade 11 • {lesson5Data.mcqQuestions.length + lesson5Data.tfQuestions.length} Villains to Defeat!
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

export default Lesson5;
