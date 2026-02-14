// Lesson 12: Forms of Market
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
    ConceptOfMarket,
    PerfectCompetition,
    Monopoly,
    MonopolisticCompetition,
    Oligopoly,
    MarketComparisonDetails,
    MarketScenarios,
    PracticeProblemsMarket
} from './components';
import Quiz from '../Lesson3/components/Quiz';
import { lesson12Data } from '../data/lesson12Data';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';
import MicroTopicsMenu from '../components/MicroTopicsMenu';
import '../css/lessons.css'; // Shared lesson styles

const sections = lesson12Data.sections;

function Lesson12() {
    const [activeSection, setActiveSection] = useState(() => localStorage.getItem('lesson12-activeSection') || 'concept');
    const [startTime] = useState(() => Date.now());
    const lessonId = 'micro11-12';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) {
            logActivity('lesson_visit', { lessonId, lessonName: 'Monopoly', chapter: 'Chapter 12' });
        }
    }, [logActivity, lessonId]);

    useEffect(() => localStorage.setItem('lesson12-activeSection', activeSection), [activeSection]);

    // Track progress
    useEffect(() => {
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [startTime, lessonId]);

    const currentIndex = sections.findIndex(s => s.id === activeSection);

    const handleSectionChange = (id) => setActiveSection(id);
    const goToNext = () => currentIndex < sections.length - 1 && setActiveSection(sections[currentIndex + 1].id);
    const goToPrev = () => currentIndex > 0 && setActiveSection(sections[currentIndex - 1].id);

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'concept': return <ConceptOfMarket />;
            case 'perfect-competition': return <PerfectCompetition />;
            case 'monopoly': return <Monopoly />;
            case 'monopolistic': return <MonopolisticCompetition />;
            case 'oligopoly': return <Oligopoly />;
            case 'comparison': return <MarketComparisonDetails />;
            case 'scenarios': return <MarketScenarios />;
            case 'practice': return <PracticeProblemsMarket />;
            case 'quiz': return <Quiz mcqQuestions={lesson12Data.mcqQuestions} tfQuestions={lesson12Data.tfQuestions} quizId="lesson12-quiz" title="Forms of Market Quiz" subtitle="Test your understanding of Market Structures" />;
            default: return <ConceptOfMarket />;
        }
    };

    return (
        <div className="lesson-page">
            <header className="lesson-header">
                <div className="header-container">
                    <Link to="/lessons" className="back-link"><FaArrowLeft /> Back to Lessons</Link>
                    <div className="lesson-info">
                        <div className="lesson-badge"><span className="badge-icon">📉</span><span className="badge-tag">Microeconomics</span></div>
                        <h1 className="lesson-title"><span className="title-line">Forms of Market:</span> <span className="title-gradient">Competition Analysis</span></h1>
                        <p className="lesson-meta">Based on NCERT Grade 11 Microeconomics • {lesson12Data.sections.length} Sections</p>
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

export default Lesson12;
