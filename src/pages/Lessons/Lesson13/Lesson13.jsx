// Lesson 13: Market Equilibrium
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaExchangeAlt, FaClipboardList, FaGlobeAmericas, FaBookOpen, FaNewspaper, FaListAlt, FaFileContract, FaCheckDouble, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Introduction, MarketSimulation, Certification, MarketNotes, NewsWire, OrderBook, AnalystReports } from './components';
import Quiz from '../Lesson3/components/Quiz'; // Standard Shared Quiz
import { lesson13Data } from '../data/lesson13Data';
import { logLessonProgress } from '../../../services/firebase';
import MicroTopicsMenu from '../components/MicroTopicsMenu';
import './lesson13.css';
import '../css/lessons.css';

const sections = [
    { id: 'intro', name: 'Market Status', icon: FaGlobeAmericas },
    { id: 'news', name: 'News Wire', icon: FaNewspaper },
    { id: 'orderbook', name: 'Order Book', icon: FaListAlt },
    { id: 'simulation', name: 'Shift Simulator', icon: FaExchangeAlt },
    { id: 'reports', name: 'Analyst Reports', icon: FaFileContract },
    { id: 'notes', name: 'Trader Notes', icon: FaBookOpen },
    { id: 'certification', name: 'Certification', icon: FaClipboardList },
    { id: 'quiz', name: 'Standard Quiz', icon: FaCheckDouble }
];

function Lesson13() {
    const [activeSection, setActiveSection] = useState(() => localStorage.getItem('lesson13-activeSection') || 'intro');
    const [startTime] = useState(() => Date.now());
    const lessonId = 'micro11-13';

    useEffect(() => localStorage.setItem('lesson13-activeSection', activeSection), [activeSection]);
    useEffect(() => {
        return () => logLessonProgress(lessonId, Math.max(Math.round((Date.now() - startTime) / 1000 / 60), 1), activeSection === 'quiz');
    }, [startTime, lessonId, activeSection]);

    const currentIndex = sections.findIndex(s => s.id === activeSection);

    const handleNext = () => {
        if (currentIndex < sections.length - 1) setActiveSection(sections[currentIndex + 1].id);
    };

    const handlePrev = () => {
        if (currentIndex > 0) setActiveSection(sections[currentIndex - 1].id);
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'intro': return <Introduction />;
            case 'news': return <NewsWire />;
            case 'orderbook': return <OrderBook />;
            case 'simulation': return <MarketSimulation />;
            case 'reports': return <AnalystReports />;
            case 'notes': return <MarketNotes />;
            case 'certification': return <Certification />;
            case 'quiz': return <Quiz
                mcqQuestions={lesson13Data.mcqQuestions}
                tfQuestions={[]} // Add text questions if needed
                quizId="lesson13-standard-quiz"
                title="Market Equilibrium Quiz"
                subtitle="Standard Academic Assessment"
            />;
            default: return <Introduction />;
        }
    };

    return (
        <div className="lesson-page terminal-theme">
            <header className="lesson-header" style={{ background: '#161b22', borderBottom: '1px solid #30363d' }}>
                <div className="header-container">
                    <Link to="/lessons" className="back-link" style={{ color: '#8b949e' }}><FaArrowLeft /> Back</Link>
                    <h1 className="lesson-title" style={{ fontFamily: 'monospace', color: '#fff' }}>
                        <span style={{ color: '#00ff88' }}>$</span> MARKET_EQUILIBRIUM
                    </h1>
                </div>
            </header>
            {/* Navigation - Responsive Hybrid */}
            <MicroTopicsMenu
                sections={sections}
                activeSection={activeSection}
                onSectionChange={setActiveSection}
            />
            <main className="lesson-content"><div className="content-container">{renderActiveSection()}</div></main>
            <footer className="lesson-footer" style={{ background: '#161b22', borderTop: '1px solid #30363d' }}>
                <div className="footer-container">
                    <button className={`footer-btn prev ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrev} disabled={currentIndex === 0} style={{ fontFamily: 'monospace' }}><FaChevronLeft /> PREV</button>
                    <div className="progress-indicator">{sections.map((s, i) => <span key={s.id} className={`progress-dot ${i === currentIndex ? 'active' : ''} ${i <= currentIndex ? 'completed' : ''}`} onClick={() => setActiveSection(s.id)} style={{ background: i <= currentIndex ? '#00ff88' : '#30363d' }}></span>)}</div>
                    <button className={`footer-btn next ${currentIndex === sections.length - 1 ? 'disabled' : ''}`} onClick={handleNext} disabled={currentIndex === sections.length - 1} style={{ fontFamily: 'monospace' }}>NEXT <FaChevronRight /></button>
                </div>
            </footer>
        </div>
    );
}
export default Lesson13;
