// Lesson 11: Theory of Supply
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTruck, FaChartLine, FaClipboardList, FaIndustry, FaExchangeAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
    ConceptOfSupply,
    DeterminantsOfSupply,
    LawOfSupply,
    MovementVsShiftSupply,
    Quiz
} from './components';
import { lesson11Data } from '../data/lesson11Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css'; // Shared lesson styles

const sections = lesson11Data.sections;

function Lesson11() {
    const [activeSection, setActiveSection] = useState(() => localStorage.getItem('lesson11-activeSection') || 'concept-supply');
    const [startTime] = useState(() => Date.now());
    const lessonId = 'micro11-11';

    useEffect(() => localStorage.setItem('lesson11-activeSection', activeSection), [activeSection]);

    // Track progress
    useEffect(() => {
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            const completed = activeSection === 'quiz';
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent, completed);
        };
    }, [startTime, lessonId, activeSection]);

    const currentIndex = sections.findIndex(s => s.id === activeSection);

    const handleSectionChange = (id) => setActiveSection(id);
    const goToNext = () => currentIndex < sections.length - 1 && setActiveSection(sections[currentIndex + 1].id);
    const goToPrev = () => currentIndex > 0 && setActiveSection(sections[currentIndex - 1].id);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'concept-supply': return <ConceptOfSupply />;
            case 'determinants': return <DeterminantsOfSupply />;
            case 'law-supply': return <LawOfSupply />;
            case 'movement-shift': return <MovementVsShiftSupply />;
            case 'quiz': return <Quiz mcqQuestions={lesson11Data.mcqQuestions} tfQuestions={lesson11Data.tfQuestions} quizId="lesson11" />;
            default: return <ConceptOfSupply />;
        }
    };

    return (
        <div className="lesson-page">
            <header className="lesson-header">
                <div className="header-container">
                    <Link to="/lessons" className="back-link"><FaArrowLeft /> Back to Lessons</Link>
                    <div className="lesson-info">
                        <div className="lesson-badge"><span className="badge-icon">📉</span><span className="badge-tag">Microeconomics</span></div>
                        <h1 className="lesson-title"><span className="title-line">Theory of Supply:</span> <span className="title-gradient">Producer Behaviour</span></h1>
                        <p className="lesson-meta">Based on NCERT Grade 11 Microeconomics • {lesson11Data.mcqQuestions.length} Quiz Questions</p>
                    </div>
                </div>
            </header>

            <nav className="lesson-nav">
                <div className="nav-container">
                    <div className="nav-scroll">
                        {sections.map((s, index) => {
                            const Icon = s.icon;
                            return (
                                <button key={s.id} className={`nav-item ${activeSection === s.id ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`} onClick={() => setActiveSection(s.id)}>
                                    <span className="nav-icon"><Icon /></span> <span className="nav-text">{s.name}</span>
                                    {index < currentIndex && <span className="nav-check">✓</span>}
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
                    <button className={`footer-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} onClick={goToPrev} disabled={currentIndex === 0}>
                        <FaChevronLeft /> Previous
                    </button>
                    <div className="progress-indicator">
                        {sections.map((s, i) => (
                            <span key={s.id} className={`progress-dot ${i === currentIndex ? 'active' : ''} ${i <= currentIndex ? 'completed' : ''}`} onClick={() => setActiveSection(s.id)}></span>
                        ))}
                    </div>
                    <button className={`footer-btn next ${currentIndex === sections.length - 1 ? 'disabled' : ''}`} onClick={goToNext} disabled={currentIndex === sections.length - 1}>
                        Next <FaChevronRight />
                    </button>
                </div>
            </footer>
        </div>
    );
}
export default Lesson11;
