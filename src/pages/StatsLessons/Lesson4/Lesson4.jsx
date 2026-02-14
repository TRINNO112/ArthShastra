/**
 * Stats Lesson 4: Presentation of Data (Textual & Tabular)
 * Container Component
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaTable, FaList, FaTools, FaQuestionCircle } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import TextualPresentation from './components/TextualPresentation';
import TabularBasics from './components/TabularBasics';
import TypesOfTables from './components/TypesOfTables';
import TableConstruction from './components/TableConstruction';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu'; // Ensure this path is correct

function Lesson4() {
    const [activeTab, setActiveTab] = useState('textual');
    const lessonId = 'stats-4';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Presentation of Data', chapter: 'Stats Ch 4' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'textual', label: 'Textual Presentation', icon: <FaBookOpen /> },
        { id: 'basics', label: 'Anatomy of Tables', icon: <FaTable /> },
        { id: 'types', label: 'Types of Tables', icon: <FaList /> },
        { id: 'construction', label: 'Construction', icon: <FaTools /> },
        { id: 'quiz', label: 'Quiz', icon: <FaQuestionCircle /> }
    ];

    // Navigation Logic
    const handleNext = () => {
        const currentIndex = topics.findIndex(t => t.id === activeTab);
        if (currentIndex < topics.length - 1) {
            setActiveTab(topics[currentIndex + 1].id);
        }
    };

    const handlePrev = () => {
        const currentIndex = topics.findIndex(t => t.id === activeTab);
        if (currentIndex > 0) {
            setActiveTab(topics[currentIndex - 1].id);
        }
    };

    return (
        <div className="stats-page">
            <div className="stats-container">
                {/* Back Link */}
                <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-outline" style={{ border: 'none', paddingLeft: '10px', marginBottom: '20px' }}>
                    <FaArrowLeft /> Back to Lessons
                </Link>

                {/* Header */}
                <header className="stats-header">
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 4</div>
                    <h1 className="stats-title">PRESENTATION OF<br />DATA</h1>
                    <p className="stats-subtitle">Textual Presentation, Parts of a Table, and Types of Tables</p>
                </header>

                {/* Navigation Menu */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'textual' && <TextualPresentation />}
                    {activeTab === 'basics' && <TabularBasics />}
                    {activeTab === 'types' && <TypesOfTables />}
                    {activeTab === 'construction' && <TableConstruction />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={handlePrev}
                        disabled={activeTab === 'textual'}
                        style={{ opacity: activeTab === 'textual' ? 0.5 : 1, cursor: activeTab === 'textual' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={handleNext}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-5" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lesson4;
