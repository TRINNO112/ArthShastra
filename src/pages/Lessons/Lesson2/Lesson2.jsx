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
  OpportunityCostCalculator,
  PPC,
  PPCAssumptions,
  PPCScenario,
  AttainableUnattainable,
  TabularRepresentation,
  SlopeMOC,
  Quiz
} from './components';
import { lesson2Data } from '../data/lesson2Data';
import { logLessonProgress } from '../../../services/firebase';
import MicroTopicsMenu from '../components/MicroTopicsMenu';
import './lesson2-core.css'; // Clean Professional Theme

const sections = [
  { id: 'intro', name: 'Scarcity & Choice', icon: FaBookOpen },
  { id: 'central-problems', name: 'Central Problems', icon: FaExclamationTriangle },
  { id: 'opportunity-cost', name: 'Opportunity Cost', icon: FaBalanceScale },
  { id: 'oc-calculator', name: 'OC Calculator', icon: FaSync },
  { id: 'ppc', name: 'PPC Curve', icon: FaChartLine },
  { id: 'ppc-assumptions', name: 'PPC Assumptions', icon: FaLightbulb },
  { id: 'ppc-scenario', name: 'Interactive Scenarios', icon: FaSync },
  { id: 'attainable-unattainable', name: 'Attainable Points', icon: FaSync },
  { id: 'tabular-representation', name: 'Tabular Data', icon: FaClipboardList },
  { id: 'slope-moc', name: 'Slope & MOC', icon: FaBalanceScale },
  { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson2() {
  // Load active section from localStorage, default to 'intro'
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson2-activeSection');
    return saved || 'intro';
  });
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-2';

  // Save active section to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lesson2-activeSection', activeSection);
  }, [activeSection]);

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
      case 'intro': return <Introduction />;
      case 'central-problems': return <CentralProblems />;
      case 'opportunity-cost': return <OpportunityCost />;
      case 'oc-calculator': return <OpportunityCostCalculator />;
      case 'ppc': return <PPC />;
      case 'ppc-assumptions': return <PPCAssumptions />;
      case 'ppc-scenario': return <PPCScenario />;
      case 'attainable-unattainable': return <AttainableUnattainable />;
      case 'tabular-representation': return <TabularRepresentation />;
      case 'slope-moc': return <SlopeMOC />;
      case 'quiz':
        return <Quiz mcqQuestions={lesson2Data.mcqQuestions} tfQuestions={lesson2Data.tfQuestions} quizId="lesson2" />;
      default:
        return <Introduction />;
    }
  };

  return (
    <div className="lesson-page">

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
              <span>Chapter 2</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              Central Problems of an <span style={{ color: '#ffd700' }}>Economy</span>
            </h1>
            <p className="lesson-meta">
              Based on VK Ohri's Grade 11 Textbook • {lesson2Data.mcqQuestions.length + lesson2Data.tfQuestions.length} Quiz Questions
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

      {/* Main Content Area */}
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

export default Lesson2;
