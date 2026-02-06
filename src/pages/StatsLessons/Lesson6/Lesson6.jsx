import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaChartBar, FaWaveSquare, FaBezierCurve, FaClipboardList, FaInfoCircle } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';

// Components
import FrequencyIntro from './components/FrequencyIntro';
import Histogram from './components/Histogram';
import Polygon from './components/Polygon';
import Ogive from './components/Ogive';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson6 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-6';

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
        { id: 'intro', label: 'Introduction', icon: <FaInfoCircle /> },
        { id: 'histogram', label: 'Histogram', icon: <FaChartBar /> },
        { id: 'polygon', label: 'Polygon', icon: <FaWaveSquare /> },
        { id: 'ogive', label: 'Ogive (Median)', icon: <FaBezierCurve /> },
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 6</div>
                    <h1 className="stats-title">FREQUENCY<br />DIAGRAMS</h1>
                    <p className="stats-subtitle">Histogram, Polygon & Ogive</p>
                </header>

                {/* Navigation Menu */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <FrequencyIntro />}
                    {activeTab === 'histogram' && <Histogram />}
                    {activeTab === 'polygon' && <Polygon />}
                    {activeTab === 'ogive' && <Ogive />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            const currentIndex = topics.findIndex(t => t.id === activeTab);
                            if (currentIndex > 0) setActiveTab(topics[currentIndex - 1].id);
                        }}
                        disabled={activeTab === 'intro'}
                        style={{ opacity: activeTab === 'intro' ? 0.5 : 1, cursor: activeTab === 'intro' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            const currentIndex = topics.findIndex(t => t.id === activeTab);
                            if (currentIndex < topics.length - 1) setActiveTab(topics[currentIndex + 1].id);
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-7" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lesson6;
