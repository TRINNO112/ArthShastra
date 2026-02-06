/**
 * Stats Lesson 5: Diagrammatic Presentation
 * Container Component
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartBar, FaChartPie, FaRulerCombined, FaClipboardList, FaLightbulb } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';

// Components
import DiagramIntro from './components/DiagramIntro';
import BarDiagrams from './components/BarDiagrams';
import PieChart from './components/PieChart';
import ChartWizard from './components/ChartWizard';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson5 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-5';

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
        { id: 'intro', label: 'Basics & Rules', icon: <FaRulerCombined /> },
        { id: 'bar', label: 'Bar Diagrams', icon: <FaChartBar /> },
        { id: 'pie', label: 'Pie Charts', icon: <FaChartPie /> },
        { id: 'wizard', label: 'Chart Wizard', icon: <FaLightbulb /> },
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 5</div>
                    <h1 className="stats-title">DIAGRAMMATIC<br />PRESENTATION</h1>
                    <p className="stats-subtitle">Bar Diagrams and Pie Charts</p>
                </header>

                {/* Navigation Menu */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <DiagramIntro />}
                    {activeTab === 'bar' && <BarDiagrams />}
                    {activeTab === 'pie' && <PieChart />}
                    {activeTab === 'wizard' && <ChartWizard />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'bar') setActiveTab('intro');
                            if (activeTab === 'pie') setActiveTab('bar');
                            if (activeTab === 'wizard') setActiveTab('pie');
                            if (activeTab === 'quiz') setActiveTab('wizard');
                        }}
                        disabled={activeTab === 'intro'}
                        style={{ opacity: activeTab === 'intro' ? 0.5 : 1, cursor: activeTab === 'intro' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'intro') setActiveTab('bar');
                            if (activeTab === 'bar') setActiveTab('pie');
                            if (activeTab === 'pie') setActiveTab('wizard');
                            if (activeTab === 'wizard') setActiveTab('quiz');
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-6" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lesson5;
