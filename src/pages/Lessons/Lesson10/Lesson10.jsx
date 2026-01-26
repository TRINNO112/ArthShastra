// Lesson 10: Producer's Equilibrium
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBalanceScale, FaChartLine, FaClipboardList, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Quiz } from './components';
import { lesson10Data } from '../data/lesson10Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';

const sections = [
    { id: 'intro', name: 'Introduction', icon: FaBalanceScale },
    { id: 'conditions', name: 'Conditions of Equilibrium', icon: FaChartLine },
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson10() {
    const [activeSection, setActiveSection] = useState(() => localStorage.getItem('lesson10-activeSection') || 'intro');
    const [startTime] = useState(() => Date.now());
    const lessonId = 'micro11-10';

    useEffect(() => localStorage.setItem('lesson10-activeSection', activeSection), [activeSection]);
    useEffect(() => {
        return () => logLessonProgress(lessonId, Math.round((Date.now() - startTime) / 1000 / 60), activeSection === 'quiz');
    }, [startTime, lessonId, activeSection]);

    const currentIndex = sections.findIndex(s => s.id === activeSection);
    const handleSectionChange = (id) => setActiveSection(id);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'intro': return <div className="content-card"><h2>Producer's Equilibrium</h2><p>Coming Soon...</p></div>;
            case 'quiz': return <Quiz />;
            default: return <div className="content-card">Section Coming Soon...</div>;
        }
    };

    return (
        <div className="lesson-page">
            <header className="lesson-header">
                <div className="header-container">
                    <Link to="/lessons" className="back-link"><FaArrowLeft /> Back</Link>
                    <h1 className="lesson-title">Producer's Equilibrium</h1>
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
