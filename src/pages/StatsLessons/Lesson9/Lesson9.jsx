/**
 * Stats Lesson 9: Measures of Central Tendency - Median & Mode
 * Container Component (Mirrors Lesson 8 Architecture)
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSortAmountDown, FaChartBar, FaBookOpen, FaCalculator, FaClipboardList } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';

// Components
import CentralTendencyIntro from './components/CentralTendencyIntro';
import MedianCalculator from './components/MedianCalculator';
import ModeCalculator from './components/ModeCalculator';
import MedianPractice from './components/MedianPractice';
import ModePractice from './components/ModePractice';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson9 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-9';

    // Track time and progress
    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0 || activeTab === 'quiz') {
                logLessonProgress(lessonId, Math.max(timeSpent, 1), activeTab === 'quiz');
            }
        };
    }, [activeTab]);

    const topics = [
        { id: 'intro', label: 'Introduction', icon: <FaSortAmountDown /> },
        { id: 'medianCalc', label: 'Median Calculator', icon: <FaCalculator /> },
        { id: 'medianPractice', label: 'Median Practice (6)', icon: <FaBookOpen /> },
        { id: 'modeCalc', label: 'Mode Calculator', icon: <FaCalculator /> },
        { id: 'modePractice', label: 'Mode Practice (5)', icon: <FaChartBar /> },
        { id: 'quiz', label: 'Quiz', icon: <FaClipboardList /> }
    ];

    // Tab order for prev/next navigation
    const tabOrder = topics.map(t => t.id);
    const currentIndex = tabOrder.indexOf(activeTab);

    return (
        <div className="stats-page">
            <div className="stats-container">
                {/* Back Link */}
                <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-outline" style={{ border: 'none', paddingLeft: '10px', marginBottom: '20px' }}>
                    <FaArrowLeft /> Back to Lessons
                </Link>

                {/* Header */}
                <header className="stats-header">
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 9</div>
                    <h1 className="stats-title">MEDIAN & MODE</h1>
                    <p className="stats-subtitle">Measures of Central Tendency</p>
                </header>

                {/* Navigation Menu */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <CentralTendencyIntro />}
                    {activeTab === 'medianCalc' && <MedianCalculator />}
                    {activeTab === 'medianPractice' && <MedianPractice />}
                    {activeTab === 'modeCalc' && <ModeCalculator />}
                    {activeTab === 'modePractice' && <ModePractice />}
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

export default Lesson9;
