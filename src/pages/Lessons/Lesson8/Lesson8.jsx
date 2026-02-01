import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDollarSign, FaTable, FaChartLine, FaBalanceScale, FaClock, FaIndustry, FaCalculator, FaQuestionCircle, FaProjectDiagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { lesson8Data } from '../data/lesson8Data';
import { logLessonProgress } from '../../../services/firebase';
import './lesson8.css'; // THEME IMPORT
// Components (add as created)
import { Introduction, CostSchedule, CostCurvesChart, FixedVariableCosts, ShortLongRun, RealWorldExamples, PracticeProblems, Quiz, CostRelationships, TotalCostCurves, BreakEvenShutdown } from './components';

const sections = lesson8Data.sections;



// Sample costData (expand as needed)
const costData = [
  { output: 0, fc: 100, vc: 0, tc: 100, mc: '-', ac: '-', avc: '-', afc: '-', stage: 'Zero' },
  { output: 1, fc: 100, vc: 50, tc: 150, mc: 50, ac: 150, avc: 50, afc: 100, stage: 'I' },
  { output: 2, fc: 100, vc: 80, tc: 180, mc: 30, ac: 90, avc: 40, afc: 50, stage: 'I' },
  { output: 3, fc: 100, vc: 120, tc: 220, mc: 40, ac: 73.33, avc: 40, afc: 33.33, stage: 'II' },
  { output: 4, fc: 100, vc: 180, tc: 280, mc: 60, ac: 70, avc: 45, afc: 25, stage: 'II' },
  { output: 5, fc: 100, vc: 260, tc: 360, mc: 80, ac: 72, avc: 52, afc: 20, stage: 'II' },
  { output: 6, fc: 100, vc: 360, tc: 460, mc: 100, ac: 76.67, avc: 60, afc: 16.67, stage: 'II' },
  { output: 7, fc: 100, vc: 480, tc: 580, mc: 120, ac: 82.86, avc: 68.57, afc: 14.29, stage: 'III' },
  { output: 8, fc: 100, vc: 640, tc: 740, mc: 160, ac: 92.5, avc: 80, afc: 12.5, stage: 'III' },
  { output: 9, fc: 100, vc: 850, tc: 950, mc: 210, ac: 105.56, avc: 94.44, afc: 11.11, stage: 'III' },
  { output: 10, fc: 100, vc: 1100, tc: 1200, mc: 250, ac: 120, avc: 110, afc: 10, stage: 'III' }
];

function Lesson8() {
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson8-activeSection');
    return saved || 'intro';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-8';

  useEffect(() => {
    localStorage.setItem('lesson8-activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
      logLessonProgress(lessonId, Math.max(timeSpent, 1), activeSection === 'quiz');
    };
  }, [startTime, lessonId, activeSection]);

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const IconMap = {
    intro: FaIndustry, // Changed icon
    schedule: FaTable,
    curves: FaChartLine,
    'fixed-variable': FaBalanceScale,
    'short-long': FaClock,
    examples: FaIndustry,
    practice: FaCalculator,
    quiz: FaQuestionCircle,
    relationships: FaProjectDiagram,
    shutdown: FaBalanceScale
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'intro':
        return <Introduction />;
      case 'schedule':
        return <CostSchedule data={costData} />;
      case 'curves':
        return (
          <>
            <CostCurvesChart data={costData} />
            <div style={{ marginTop: '40px' }}>
              <TotalCostCurves />
            </div>
          </>
        );
      case 'shutdown':
        return <BreakEvenShutdown />;
      case 'fixed-variable':
        return <FixedVariableCosts />;
      case 'short-long':
        return <ShortLongRun />;
      case 'relationships':
        return <CostRelationships />;
      case 'examples':
        return <RealWorldExamples />;
      case 'practice':
        return <PracticeProblems />;
      case 'quiz':
        return <Quiz mcqQuestions={lesson8Data.mcqQuestions} tfQuestions={lesson8Data.tfQuestions} />;
      default:
        return null;
    }
  };

  return (
    <div className="lesson-container factory-theme">
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      <header className="lesson-header">
        <div className="header-container">
          <Link to="/lessons" className="back-link">
            <FaArrowLeft /> Back to Lessons
          </Link>
          <div className="lesson-info">
            <div className="lesson-badge">
              <span className="badge-icon">📚</span>
              <span>Chapter 8</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Concepts</span>
              <span className="title-gradient">of Cost</span>
            </h1>
            <p className="lesson-meta">
              VK Ohri/NCERT Grade 11 • {lesson8Data.mcqQuestions.length + lesson8Data.tfQuestions.length} Questions
            </p>
          </div>
        </div>
      </header>

      <nav className="lesson-nav">
        <div className="nav-container">
          <div className="nav-scroll">
            {sections.map((section, index) => {
              const Icon = IconMap[section.id];
              const isActive = activeSection === section.id;
              const isCompleted = index <= currentIndex;
              return (
                <button
                  key={section.id}
                  className={`nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon className="nav-icon" />
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
            onClick={() => setActiveSection(sections[currentIndex - 1].id)}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
            <span>Previous</span>
          </button>

          <div className="progress-indicator">
            {sections.map((section, index) => (
              <span
                key={section.id}
                className={`progress-dot ${index === currentIndex ? 'active' : ''} ${index <= currentIndex ? 'completed' : ''}`}
                onClick={() => setActiveSection(section.id)}
              ></span>
            ))}
          </div>

          <button
            className={`footer-btn next ${currentIndex === sections.length - 1 ? 'disabled' : ''}`}
            onClick={() => setActiveSection(sections[currentIndex + 1].id)}
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

export default Lesson8;
