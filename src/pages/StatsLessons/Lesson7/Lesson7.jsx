/**
 * Stats Lesson 7: Arithmetic Line Graphs
 * Container Component
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartLine, FaCalendarAlt, FaToggleOn, FaClipboardList } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import TimeIntro from './components/TimeIntro';
import OneVariableGraph from './components/OneVariableGraph';
import TwoVariableGraph from './components/TwoVariableGraph';
import GraphAnalysis from './components/GraphAnalysis';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson7 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-7';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Correlation', chapter: 'Stats Ch 7' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'intro', label: 'Intro & Rules', icon: <FaCalendarAlt /> },
        { id: 'one-var', label: 'One Variable', icon: <FaChartLine /> },
        { id: 'two-var', label: 'Two Variable', icon: <FaToggleOn /> },
        { id: 'analysis', label: 'Trend Analysis', icon: <FaChartLine /> },
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 7</div>
                    <h1 className="stats-title">ARITHMETIC LINE<br />GRAPHS</h1>
                    <p className="stats-subtitle">Time Series and False Base Lines</p>
                </header>

                {/* Navigation Menu */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <TimeIntro />}
                    {activeTab === 'one-var' && <OneVariableGraph />}
                    {activeTab === 'two-var' && <TwoVariableGraph />}
                    {activeTab === 'analysis' && <GraphAnalysis />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'one-var') setActiveTab('intro');
                            if (activeTab === 'two-var') setActiveTab('one-var');
                            if (activeTab === 'analysis') setActiveTab('two-var');
                            if (activeTab === 'quiz') setActiveTab('analysis');
                        }}
                        disabled={activeTab === 'intro'}
                        style={{ opacity: activeTab === 'intro' ? 0.5 : 1, cursor: activeTab === 'intro' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'intro') setActiveTab('one-var');
                            if (activeTab === 'one-var') setActiveTab('two-var');
                            if (activeTab === 'two-var') setActiveTab('analysis');
                            if (activeTab === 'analysis') setActiveTab('quiz');
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

export default Lesson7;
