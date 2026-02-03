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
    <div className="lesson-container">

      {/* Header */}
      <header style={{ marginBottom: '40px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/lessons" style={{ textDecoration: 'none', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
            <FaArrowLeft /> Back
          </Link>
          <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold', color: '#94a3b8', letterSpacing: '1px' }}>
            Microeconomics / Chapter 2
          </div>
        </div>
        <h1 className="lesson-title" style={{ marginTop: '20px', marginBottom: '10px' }}>Central Problems of an Economy</h1>
      </header>

      {/* Navigation Tabs */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '5px', paddingBottom: '15px', marginBottom: '30px', borderBottom: '1px solid #e2e8f0' }}>
        {sections.map((section, index) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              style={{
                padding: '10px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: isActive ? '#2563eb' : 'transparent',
                color: isActive ? '#fff' : '#475569',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <section.icon size={14} />
              {section.name}
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <main style={{ minHeight: '500px' }}>
        {renderActiveSection()}
      </main>

      {/* Footer Navigation */}
      <footer style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          style={{
            padding: '12px 24px',
            backgroundColor: currentIndex === 0 ? '#f1f5f9' : '#fff',
            color: currentIndex === 0 ? '#94a3b8' : '#334155',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '600'
          }}
        >
          <FaChevronLeft /> Previous
        </button>

        <button
          onClick={goToNext}
          disabled={currentIndex === sections.length - 1}
          style={{
            padding: '12px 24px',
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: currentIndex === sections.length - 1 ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontWeight: '600',
            opacity: currentIndex === sections.length - 1 ? 0.5 : 1
          }}
        >
          Next <FaChevronRight />
        </button>
      </footer>

    </div>
  );
}

export default Lesson2;
