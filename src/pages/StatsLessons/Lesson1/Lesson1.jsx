/**
 * Stats Lesson 1: Introduction to Statistics
 * Covering definition, scope, functions and importance
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBook, FaGlobe, FaBalanceScale, FaQuestionCircle } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import Introduction from './components/Introduction';
import ScopeImportance from './components/ScopeImportance';
import NatureAndDistrust from './components/NatureAndDistrust';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

function Lesson1() {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-1';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) {
            logActivity('lesson_visit', { lessonId, lessonName: 'Introduction to Statistics', chapter: 'Stats Ch 1' });
        }
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) {
                logLessonProgress(lessonId, timeSpent);
            }
        };
    }, [lessonId]);

    const topics = [
        { id: 'intro', label: 'Introduction', icon: <FaBook /> },
        { id: 'scope', label: 'Scope & Functions', icon: <FaGlobe /> },
        { id: 'nature', label: 'Nature & Distrust', icon: <FaBalanceScale /> },
        { id: 'quiz', label: 'Quiz', icon: <FaQuestionCircle /> }
    ];

    return (
        <div className="stats-page">
            <div className="stats-container">
                {/* Back Link */}
                <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-outline" style={{ border: 'none', paddingLeft: '10px', marginBottom: '20px' }}>
                    <FaArrowLeft /> Back to Lessons
                </Link>

                {/* Header */}
                <header className="stats-header">
                    <div className="stats-label">CHAPTER 1</div>
                    <h1 className="stats-title">INTRODUCTION TO<br />STATISTICS</h1>
                    <p className="stats-subtitle">Understanding the meaning, scope, and importance of data in Economics</p>
                </header>

                {/* Navigation Menu (New) */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <Introduction />}
                    {activeTab === 'scope' && <ScopeImportance />}
                    {activeTab === 'nature' && <NatureAndDistrust />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'scope') setActiveTab('intro');
                            if (activeTab === 'nature') setActiveTab('scope');
                            if (activeTab === 'quiz') setActiveTab('nature');
                        }}
                        disabled={activeTab === 'intro'}
                        style={{ opacity: activeTab === 'intro' ? 0.5 : 1, cursor: activeTab === 'intro' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'intro') setActiveTab('scope');
                            if (activeTab === 'scope') setActiveTab('nature');
                            if (activeTab === 'nature') setActiveTab('quiz');
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-2" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lesson1;
