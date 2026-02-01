// Lesson 10: Producer's Equilibrium
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBalanceScale, FaChartLine, FaClipboardList, FaChevronLeft, FaChevronRight, FaTable, FaLightbulb, FaTasks } from 'react-icons/fa';
import { Quiz, EquilibriumIntro, LogicExplainer, EquilibriumSchedule, EquilibriumGraph, PracticeProblems, DecisionGame, RealWorldExample } from './components';
import { lesson10Data } from '../data/lesson10Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';

const sections = [
    { id: 'intro', name: 'Introduction', icon: FaBalanceScale },
    { id: 'real', name: 'Real World', icon: FaLightbulb },
    { id: 'logic', name: 'Logic & Conditions', icon: FaLightbulb },
    { id: 'schedule', name: 'Schedule', icon: FaTable },
    { id: 'graph', name: 'Graph', icon: FaChartLine },
    { id: 'game', name: 'Decision Game', icon: FaTasks },
    { id: 'practice', name: 'Practice', icon: FaTasks },
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson10() {
    const [activeSection, setActiveSection] = useState(() => localStorage.getItem('lesson10-activeSection') || 'intro');
    const [startTime] = useState(() => Date.now());
    const lessonId = 'micro11-10';

    useEffect(() => localStorage.setItem('lesson10-activeSection', activeSection), [activeSection]);
    useEffect(() => {
        return () => logLessonProgress(lessonId, Math.max(Math.round((Date.now() - startTime) / 1000 / 60), 1), activeSection === 'quiz');
    }, [startTime, lessonId, activeSection]);

    const currentIndex = sections.findIndex(s => s.id === activeSection);
    const handleSectionChange = (id) => setActiveSection(id);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'intro': return <EquilibriumIntro />;
            case 'real': return <RealWorldExample />;
            case 'logic': return <LogicExplainer />;
            case 'schedule': return <EquilibriumSchedule />;
            case 'graph': return <EquilibriumGraph />;
            case 'game': return <DecisionGame />;
            case 'practice': return <PracticeProblems />;
            case 'quiz': return <Quiz />;
            default: return <div className="content-card">Section Coming Soon...</div>;
        }
    };

    return (
        <div className="lesson-page">
            <header className="lesson-header">
                <div className="header-container">
                    <Link to="/lessons" className="back-link"><FaArrowLeft /> Back to Lessons</Link>
                    <div className="lesson-info">
                        <div className="lesson-badge">
                            <span className="badge-icon">⚖️</span>
                            <span>Chapter 10</span>
                            <span className="badge-tag">Microeconomics</span>
                        </div>
                        <h1 className="lesson-title">
                            <span className="title-line">Producer's</span>
                            <span className="title-gradient">Equilibrium</span>
                        </h1>
                        <p className="lesson-meta">
                            Marginal Cost & Marginal Revenue Approach • {lesson10Data.mcqQuestions.length + lesson10Data.tfQuestions.length} Quiz Questions
                        </p>
                    </div>
                </div>
            </header>
            <nav className="lesson-nav">
                <div className="nav-container">
                    <div className="nav-scroll">
                        {sections.map(s => (
                            <button key={s.id} className={`nav-item ${activeSection === s.id ? 'active' : ''}`} onClick={() => setActiveSection(s.id)}>
                                <s.icon className="nav-icon" /> <span className="nav-text">{s.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>
            <main className="lesson-content"><div className="content-container">{renderActiveSection()}</div></main>
            <footer className="lesson-footer">
                <div className="footer-container">
                    <button className={`footer-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} onClick={() => setActiveSection(sections[currentIndex - 1].id)} disabled={currentIndex === 0}><FaChevronLeft /> Previous</button>
                    <div className="progress-indicator">{sections.map((s, i) => <span key={s.id} className={`progress-dot ${i === currentIndex ? 'active' : ''} ${i <= currentIndex ? 'completed' : ''}`} onClick={() => setActiveSection(s.id)}></span>)}</div>
                    <button className={`footer-btn next ${currentIndex === sections.length - 1 ? 'disabled' : ''}`} onClick={() => setActiveSection(sections[currentIndex + 1].id)} disabled={currentIndex === sections.length - 1}>Next <FaChevronRight /></button>
                </div>
            </footer>
        </div>
    );
}
export default Lesson10;
