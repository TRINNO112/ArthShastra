// Lesson 9: Concept of Revenue - Main Page Component
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaArrowLeft,
    FaCoins,
    FaLightbulb,
    FaChartLine,
    FaBalanceScale,
    FaClipboardList,
    FaChevronRight,
    FaChevronLeft,
    FaCalculator,
    FaGlobeAmericas,
    FaProjectDiagram
} from 'react-icons/fa';
import {
    RevenueIntroduction,
    RevenueCalculations,
    RevenueCurvesPerfect,
    RevenueCurvesImperfect,
    TRMRRelationship,
    RealWorldExamples,
    PracticeProblems,
    Quiz
} from './components';
import { logLessonProgress } from '../../../services/firebase';
import MicroTopicsMenu from '../components/MicroTopicsMenu';
import '../css/lessons.css';

const sections = [
    { id: 'intro', name: 'Introduction to Revenue', icon: FaCoins },
    { id: 'calculations', name: 'Calculations', icon: FaCalculator },
    { id: 'curves-perfect', name: 'Perfect Competition', icon: FaChartLine },
    { id: 'curves-imperfect', name: 'Imperfect Competition', icon: FaBalanceScale },
    { id: 'relationships', name: 'TR-MR Relationship', icon: FaProjectDiagram },
    { id: 'examples', name: 'Real World Examples', icon: FaGlobeAmericas },
    { id: 'practice', name: 'Practice Problems', icon: FaLightbulb },
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson9() {
    const [activeSection, setActiveSection] = useState(() => {
        const saved = localStorage.getItem('lesson9-activeSection');
        return saved || 'intro';
    });
    const [startTime] = useState(() => Date.now());
    const lessonId = 'micro11-9';

    useEffect(() => {
        localStorage.setItem('lesson9-activeSection', activeSection);
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

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'intro': return <RevenueIntroduction />;
            case 'calculations': return <RevenueCalculations />;
            case 'curves-perfect': return <RevenueCurvesPerfect />;
            case 'curves-imperfect': return <RevenueCurvesImperfect />;
            case 'relationships': return <TRMRRelationship />;
            case 'examples': return <RealWorldExamples />;
            case 'practice': return <PracticeProblems />;
            case 'quiz': return <Quiz />;
            default: return <RevenueIntroduction />;
        }
    };

    return (
        <div className="lesson-page">
            <div className="floating-elements">
                <div className="float-circle circle-1"></div>
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
                            <span className="badge-icon">💰</span>
                            <span>Chapter 9</span>
                            <span className="badge-tag">Microeconomics</span>
                        </div>
                        <h1 className="lesson-title">Concept of Revenue</h1>
                        <p className="lesson-meta">Understanding Total, Average, and Marginal Revenue</p>
                    </div>
                </div>
            </header>

            {/* Navigation - Responsive Hybrid */}
            <MicroTopicsMenu
                sections={sections}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
            />

            <main className="lesson-content">
                <div className="content-container">
                    {renderActiveSection()}
                </div>
            </main>

            <footer className="lesson-footer">
                <div className="footer-container">
                    <button
                        className={`footer-btn prev ${(currentIndex === 0) ? 'disabled' : ''}`}
                        onClick={() => setActiveSection(sections[currentIndex - 1].id)}
                        disabled={currentIndex === 0}
                    >
                        <FaChevronLeft /> <span>Previous</span>
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
                        className={`footer-btn next ${(currentIndex === sections.length - 1) ? 'disabled' : ''}`}
                        onClick={() => setActiveSection(sections[currentIndex + 1].id)}
                        disabled={currentIndex === sections.length - 1}
                    >
                        <span>Next</span> <FaChevronRight />
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default Lesson9;
