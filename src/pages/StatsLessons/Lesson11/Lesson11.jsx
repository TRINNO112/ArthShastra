/**
 * Stats Lesson 11: Correlation
 * Analysis of Bivariate Frequency Distributions
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaProjectDiagram, FaChartLine, FaChartBar, FaSortNumericDown, FaClipboardList } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';

// Components
import CorrelationIntro from './components/CorrelationIntro';
import TopicsMenu from '../components/TopicsMenu';

const Lesson11 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-11';

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
        { id: 'intro', label: 'Introduction', icon: <FaProjectDiagram /> },
        { id: 'scatter', label: 'Scatter Diagram', icon: <FaChartLine /> },
        { id: 'pearson', label: 'Karl Pearson (r)', icon: <FaChartBar /> },
        { id: 'spearman', label: 'Spearman Rank (R)', icon: <FaSortNumericDown /> },
        { id: 'quiz', label: 'Quiz', icon: <FaClipboardList /> }
    ];

    const tabOrder = topics.map(t => t.id);
    const currentIndex = tabOrder.indexOf(activeTab);

    // Placeholder for upcoming sections
    const ComingSoonSection = ({ title }) => (
        <div className="stats-card" style={{ textAlign: 'center', padding: '60px 30px' }}>
            <div style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>
                <FaChartLine />
            </div>
            <h2 className="stats-title" style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{title}</h2>
            <p className="stats-subtitle">Content is under construction. Coming soon!</p>
        </div>
    );

    return (
        <div className="stats-page">
            <div className="stats-container">
                {/* Back */}
                <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-outline" style={{ border: 'none', paddingLeft: '10px', marginBottom: '20px' }}>
                    <FaArrowLeft /> Back to Lessons
                </Link>

                {/* Header */}
                <header className="stats-header">
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 11</div>
                    <h1 className="stats-title">CORRELATION</h1>
                    <p className="stats-subtitle">Scatter Diagrams · Karl Pearson's Coefficient · Spearman's Rank Correlation</p>
                </header>

                {/* Navigation */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content */}
                <div className="stats-content">
                    {activeTab === 'intro' && <CorrelationIntro />}
                    {activeTab === 'scatter' && <ComingSoonSection title="Scatter Diagrams" />}
                    {activeTab === 'pearson' && <ComingSoonSection title="Karl Pearson's Method" />}
                    {activeTab === 'spearman' && <ComingSoonSection title="Spearman's Rank Correlation" />}
                    {activeTab === 'quiz' && (
                        <div className="stats-card" style={{ textAlign: 'center', padding: '60px 30px' }}>
                            <h2 className="stats-title" style={{ fontSize: '1.5rem' }}>Quiz Coming Soon</h2>
                            <p className="stats-subtitle">Practice the problems first, quiz will be added shortly!</p>
                        </div>
                    )}
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

export default Lesson11;
