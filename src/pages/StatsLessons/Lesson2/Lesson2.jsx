/**
 * Stats Lesson 2: Collection of Data
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaDatabase, FaClipboardList, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';

// Components
import SourcesOfData from './components/SourcesOfData';
import ImportantTerms from './components/ImportantTerms';
import MethodsOfCollection from './components/MethodsOfCollection';
import CensusVsSample from './components/CensusVsSample';
import SamplingErrors from './components/SamplingErrors';
import Quiz from './components/Quiz';

function Lesson2() {
    const [activeTab, setActiveTab] = useState('sources');
    const lessonId = 'stats-2';

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

                {/* Navigation Tabs */}
                <div className="stats-grid-3" style={{ marginBottom: '30px', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                    <button
                        className={`stats-btn ${activeTab === 'sources' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('sources')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaDatabase /> Sources
                    </button>
                    <button
                        className={`stats-btn ${activeTab === 'terms' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('terms')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaUsers /> Terms
                    </button>
                    <button
                        className={`stats-btn ${activeTab === 'methods' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('methods')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaClipboardList /> Methods
                    </button>
                    <button
                        className={`stats-btn ${activeTab === 'census' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('census')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaUsers /> Census vs Sample
                    </button>
                    <button
                        className={`stats-btn ${activeTab === 'errors' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('errors')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaArrowLeft style={{ transform: 'rotate(-45deg)' }} /> Errors
                    </button>
                    <button
                        className={`stats-btn ${activeTab === 'quiz' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('quiz')}
                        style={{ justifyContent: 'center', borderColor: activeTab === 'quiz' ? 'var(--stats-primary)' : 'var(--stats-warning)', color: activeTab === 'quiz' ? 'white' : 'var(--stats-warning)' }}
                    >
                        <FaQuestionCircle /> Quiz
                    </button>
                </div>

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
