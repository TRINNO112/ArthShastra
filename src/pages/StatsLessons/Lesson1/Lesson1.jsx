/**
 * Stats Lesson 1: Introduction to Statistics
 * Covering definition, scope, functions and importance
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBook, FaGlobe, FaQuestionCircle } from 'react-icons/fa';
import '../css/stats-theme.css';

// Components
import Introduction from './components/Introduction';
import ScopeImportance from './components/ScopeImportance';
import Quiz from './components/Quiz';

function Lesson1() {
    const [activeTab, setActiveTab] = useState('intro');

    return (
        <div className="stats-page">
            <div className="stats-container">
                {/* Back Link */}
                <Link to="/lessons?grade=11&subject=statistics" className="stats-btn stats-btn-outline" style={{ border: 'none', paddingLeft: 0, marginBottom: '20px' }}>
                    <FaArrowLeft /> Back to Lessons
                </Link>

                {/* Header */}
                <header className="stats-header">
                    <div className="stats-label">CHAPTER 1</div>
                    <h1 className="stats-title">INTRODUCTION TO<br />STATISTICS</h1>
                    <p className="stats-subtitle">Understanding the meaning, scope, and importance of data in Economics</p>
                </header>

                {/* Navigation Tabs */}
                <div className="stats-grid-3" style={{ marginBottom: '30px', gap: '10px' }}>
                    <button
                        className={`stats-btn ${activeTab === 'intro' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('intro')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaBook /> Introduction
                    </button>
                    <button
                        className={`stats-btn ${activeTab === 'scope' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => setActiveTab('scope')}
                        style={{ justifyContent: 'center' }}
                    >
                        <FaGlobe /> Scope & Functions
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
                    {activeTab === 'intro' && <Introduction />}
                    {activeTab === 'scope' && <ScopeImportance />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'scope') setActiveTab('intro');
                            if (activeTab === 'quiz') setActiveTab('scope');
                        }}
                        disabled={activeTab === 'intro'}
                        style={{ opacity: activeTab === 'intro' ? 0.5 : 1, cursor: activeTab === 'intro' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'intro') setActiveTab('scope');
                            if (activeTab === 'scope') setActiveTab('quiz');
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-2" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lesson1;
