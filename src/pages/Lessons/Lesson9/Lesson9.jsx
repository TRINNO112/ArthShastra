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
    FaChevronLeft
} from 'react-icons/fa';
import {
    Quiz // We will create this as a wrapper
} from './components';
import { lesson9Data } from '../data/lesson9Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';

const sections = [
    { id: 'introduction', name: 'Introduction to Revenue', icon: FaCoins },
    { id: 'concepts', name: 'Three Concepts: TR, AR, MR', icon: FaLightbulb },
    { id: 'relationships', name: 'Relationship between AR & MR', icon: FaChartLine },
    // Add more sections as we build them
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson9() {
    const [activeSection, setActiveSection] = useState(() => {
        const saved = localStorage.getItem('lesson9-activeSection');
        return saved || 'introduction';
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
            if (timeSpent > 0) {
                logLessonProgress(lessonId, timeSpent, completed);
            }
        };
    }, [startTime, lessonId, activeSection]);

    const currentIndex = sections.findIndex(s => s.id === activeSection);

    const goToPrevious = () => {
        if (currentIndex > 0) setActiveSection(sections[currentIndex - 1].id);
    };

    const goToNext = () => {
        if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1].id);
    };

    const handleSectionChange = (sectionId) => setActiveSection(sectionId);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'introduction':
                return (
                    <div className="content-card">
                        <h2>Welcome to Lesson 9: Concept of Revenue</h2>
                        <p>This lesson is under construction. We are building the factory! 🏭</p>
                    </div>
                );
            case 'quiz':
                return <Quiz />;
            default:
                return <div className="content-card">Section coming soon...</div>;
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

            <nav className="lesson-nav">
                <div className="nav-container">
                    <div className="nav-scroll">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                                    onClick={() => handleSectionChange(section.id)}
                                >
                                    <span className="nav-icon"><Icon /></span>
                                    <span className="nav-text">{section.name}</span>
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
                    <button className={`footer-btn prev ${(currentIndex === 0) ? 'disabled' : ''}`} onClick={goToPrevious} disabled={currentIndex === 0}>
                        <FaChevronLeft /> <span>Previous</span>
                    </button>
                    <div className="progress-indicator">
                        {sections.map((section, index) => (
                            <span key={section.id} className={`progress-dot ${index === currentIndex ? 'active' : ''}`} onClick={() => handleSectionChange(section.id)}></span>
                        ))}
                    </div>
                    <button className={`footer-btn next ${(currentIndex === sections.length - 1) ? 'disabled' : ''}`} onClick={goToNext} disabled={currentIndex === sections.length - 1}>
                        <span>Next</span> <FaChevronRight />
                    </button>
                </div>
            </footer>
        </div>
    );
}

export default Lesson9;
