/**
 * Stats Lesson 2: Collection of Data
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDatabase, FaClipboardList, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import SourcesOfData from './components/SourcesOfData';
import ImportantTerms from './components/ImportantTerms';
import MethodsOfCollection from './components/MethodsOfCollection';
import CensusVsSample from './components/CensusVsSample';
import SamplingErrors from './components/SamplingErrors';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

function Lesson2() {
    const [activeTab, setActiveTab] = useState('sources');
    const lessonId = 'stats-2';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Collection of Data', chapter: 'Stats Ch 2' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'sources', label: 'Sources of Data', icon: <FaDatabase /> },
        { id: 'terms', label: 'Important Terms', icon: <FaUsers /> },
        { id: 'methods', label: 'Methods of Collection', icon: <FaClipboardList /> },
        { id: 'census', label: 'Census vs Sample', icon: <FaUsers /> }, // Reusing Users icon or find better
        { id: 'errors', label: 'Sampling Errors', icon: <FaArrowLeft style={{ transform: 'rotate(-45deg)' }} /> }, // Keeping custom icon
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 2</div>
                    <h1 className="stats-title">COLLECTION OF<br />DATA</h1>
                    <p className="stats-subtitle">Exploring the sources, methods, and techniques of gathering statistical data</p>
                </header>

                {/* Navigation Menu (New) */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'sources' && <SourcesOfData />}
                    {activeTab === 'terms' && <ImportantTerms />}
                    {activeTab === 'methods' && <MethodsOfCollection />}
                    {activeTab === 'census' && <CensusVsSample />}
                    {activeTab === 'errors' && <SamplingErrors />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'terms') setActiveTab('sources');
                            if (activeTab === 'methods') setActiveTab('terms');
                            if (activeTab === 'census') setActiveTab('methods');
                            if (activeTab === 'errors') setActiveTab('census');
                            if (activeTab === 'quiz') setActiveTab('errors');
                        }}
                        disabled={activeTab === 'sources'}
                        style={{ opacity: activeTab === 'sources' ? 0.5 : 1, cursor: activeTab === 'sources' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'sources') setActiveTab('terms');
                            if (activeTab === 'terms') setActiveTab('methods');
                            if (activeTab === 'methods') setActiveTab('census');
                            if (activeTab === 'census') setActiveTab('errors');
                            if (activeTab === 'errors') setActiveTab('quiz');
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-3" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lesson2;
