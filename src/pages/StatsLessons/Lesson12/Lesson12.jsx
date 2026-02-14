/**
 * Stats Lesson 12: Index Numbers
 * Measuring Relative Changes in Variables
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHistory, FaListOl, FaWeightHanging, FaShoppingCart, FaCalculator, FaClipboardList } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import IndexIntro from './components/IndexIntro';
import ConstructionMethods from './components/ConstructionMethods';
import WeightedMethods from './components/WeightedMethods';
import CPIWPI from './components/CPIWPI';
import PracticalProblems from './components/PracticalProblems';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson12 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-12';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Standard Deviation', chapter: 'Stats Ch 12' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'intro', label: 'Index Basics', icon: <FaHistory /> },
        { id: 'simple', label: 'Construction', icon: <FaListOl /> },
        { id: 'weighted', label: 'Weighted Indices', icon: <FaWeightHanging /> },
        { id: 'special', label: 'CPI & WPI', icon: <FaShoppingCart /> },
        { id: 'practical', label: 'Practice Problems', icon: <FaCalculator /> },
        { id: 'quiz', label: 'Quiz', icon: <FaClipboardList /> }
    ];

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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 12</div>
                    <h1 className="stats-title">INDEX NUMBERS</h1>
                    <p className="stats-subtitle">Laspeyres, Paasche & Fisher's Ideal Index · CPI · WPI · Inflation</p>
                </header>

                {/* Step-based Navigation */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Main Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <IndexIntro />}
                    {activeTab === 'simple' && <ConstructionMethods />}
                    {activeTab === 'weighted' && <WeightedMethods />}
                    {activeTab === 'special' && <CPIWPI />}
                    {activeTab === 'practical' && <PracticalProblems />}
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

export default Lesson12;
