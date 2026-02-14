/**
 * Stats Lesson 10: Measures of Dispersion
 * Container Component (Mirrors Lesson 8/9 Architecture)
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRulerHorizontal, FaChartBar, FaChartLine, FaSuperscript, FaClipboardList } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import DispersionIntro from './components/DispersionIntro';
import RangeQD from './components/RangeQD';
import MeanDeviation from './components/MeanDeviation';
import StandardDeviation from './components/StandardDeviation';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson10 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-10';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Arithmetic Mean', chapter: 'Stats Ch 10' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'intro', label: 'Introduction', icon: <FaRulerHorizontal /> },
        { id: 'rangeQd', label: 'Range & Q.D. (7)', icon: <FaChartBar /> },
        { id: 'meanDev', label: 'Mean Deviation (5)', icon: <FaChartLine /> },
        { id: 'stdDev', label: 'Standard Deviation (6)', icon: <FaSuperscript /> },
        { id: 'quiz', label: 'Quiz', icon: <FaClipboardList /> }
    ];

    const tabOrder = topics.map(t => t.id);
    const currentIndex = tabOrder.indexOf(activeTab);

    return (
        <div className="stats-page">
            <div className="stats-container">
                {/* Back */}
                <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-outline" style={{ border: 'none', paddingLeft: '10px', marginBottom: '20px' }}>
                    <FaArrowLeft /> Back to Lessons
                </Link>

                {/* Header */}
                <header className="stats-header">
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 10</div>
                    <h1 className="stats-title">MEASURES OF DISPERSION</h1>
                    <p className="stats-subtitle">Range · Quartile Deviation · Mean Deviation · Standard Deviation</p>
                </header>

                {/* Navigation */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content */}
                <div className="stats-content">
                    {activeTab === 'intro' && <DispersionIntro />}
                    {activeTab === 'rangeQd' && <RangeQD />}
                    {activeTab === 'meanDev' && <MeanDeviation />}
                    {activeTab === 'stdDev' && <StandardDeviation />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => setActiveTab(tabOrder[currentIndex - 1])}
                        disabled={currentIndex === 0}
                        style={{ opacity: currentIndex === 0 ? 0.5 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => setActiveTab(tabOrder[currentIndex + 1])}
                        disabled={currentIndex === tabOrder.length - 1}
                        style={{ display: currentIndex === tabOrder.length - 1 ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-secondary">
                            My Progress <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lesson10;
