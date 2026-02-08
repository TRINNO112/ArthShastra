/**
 * Stats Lesson 8: Measures of Central Tendency - Mean
 * Container Component
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBalanceScale, FaCalculator, FaBookOpen, FaClipboardList, FaLaptopCode } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';

// Components
import MeanIntro from './components/MeanIntro';
import ArithmeticMean from './components/ArithmeticMean';
import MeanPractice from './components/MeanPractice';
import MeanProperties from './components/MeanProperties';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson8 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-8';

    // Track time and progress
    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60); // in minutes
            if (timeSpent > 0 || activeTab === 'quiz') {
                logLessonProgress(lessonId, Math.max(timeSpent, 1), activeTab === 'quiz');
            }
        };
    }, [activeTab]);

    const topics = [
        { id: 'intro', label: 'Concept of Average', icon: <FaBalanceScale /> },
        { id: 'calc', label: 'Mean Calculator', icon: <FaCalculator /> },
        { id: 'practice', label: 'Practice Sums (20)', icon: <FaBookOpen /> },
        { id: 'props', label: 'Properties', icon: <FaLaptopCode /> },
        { id: 'quiz', label: 'Quiz', icon: <FaClipboardList /> }
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 8</div>
                    <h1 className="stats-title">ARITHMETIC MEAN</h1>
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
                    {activeTab === 'intro' && <MeanIntro />}
                    {activeTab === 'calc' && <ArithmeticMean />}
                    {activeTab === 'practice' && <MeanPractice />}
                    {activeTab === 'props' && <MeanProperties />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'calc') setActiveTab('intro');
                            if (activeTab === 'practice') setActiveTab('calc');
                            if (activeTab === 'props') setActiveTab('practice');
                            if (activeTab === 'quiz') setActiveTab('props');
                        }}
                        disabled={activeTab === 'intro'}
                        style={{ opacity: activeTab === 'intro' ? 0.5 : 1, cursor: activeTab === 'intro' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'intro') setActiveTab('calc');
                            if (activeTab === 'calc') setActiveTab('practice');
                            if (activeTab === 'practice') setActiveTab('props');
                            if (activeTab === 'props') setActiveTab('quiz');
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
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

export default Lesson8;
