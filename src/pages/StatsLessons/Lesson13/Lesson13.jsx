import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTools, FaProjectDiagram, FaGlobeAmericas, FaQuestionCircle, FaClipboardList } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import StatsUsageIntro from './components/StatsUsageIntro';
import ProjectSteps from './components/ProjectSteps';
import CaseStudy from './components/CaseStudy';
import PracticalApplications from './components/PracticalApplications';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

const Lesson13 = () => {
    const [activeTab, setActiveTab] = useState('intro');
    const lessonId = 'stats-13';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Variance', chapter: 'Stats Ch 13' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'intro', label: 'Overview', icon: <FaTools /> },
        { id: 'methodology', label: 'Methodology', icon: <FaProjectDiagram /> },
        { id: 'casestudy', label: 'Case Study', icon: <FaClipboardList /> },
        { id: 'apps', label: 'Applications', icon: <FaGlobeAmericas /> },
        { id: 'quiz', label: 'Final Quiz', icon: <FaQuestionCircle /> }
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 13 (FINAL)</div>
                    <h1 className="stats-title">USE OF STATISTICAL TOOLS</h1>
                    <p className="stats-subtitle">Practical Application · Project Development · Economic Problem Solving</p>
                </header>

                {/* Step-based Navigation */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Main Content Area */}
                <div className="stats-content">
                    {activeTab === 'intro' && <StatsUsageIntro />}
                    {activeTab === 'methodology' && <ProjectSteps />}
                    {activeTab === 'casestudy' && <CaseStudy />}
                    {activeTab === 'apps' && <PracticalApplications />}
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

export default Lesson13;
