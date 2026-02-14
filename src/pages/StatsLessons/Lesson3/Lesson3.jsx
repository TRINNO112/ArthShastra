/**
 * Stats Lesson 3: Organisation of Data
 * Container Component
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaLayerGroup, FaSitemap, FaCube, FaTable, FaTools, FaQuestionCircle } from 'react-icons/fa';
import '../css/stats-theme.css';
import { logLessonProgress } from '../../../services/firebase';
import { useAuth } from '../../../context/AuthContext';

// Components
import OrganizationBasics from './components/OrganizationBasics';
import TypesOfClassification from './components/TypesOfClassification';
import ConceptOfVariables from './components/ConceptOfVariables';
import TypesOfSeries from './components/TypesOfSeries';
import FrequencyConstruction from './components/FrequencyConstruction';
import Quiz from './components/Quiz';
import TopicsMenu from '../components/TopicsMenu';

function Lesson3() {
    const [activeTab, setActiveTab] = useState('basics');
    const lessonId = 'stats-3';
    const { logActivity } = useAuth();

    useEffect(() => {
        if (logActivity) logActivity('lesson_visit', { lessonId, lessonName: 'Organisation of Data', chapter: 'Stats Ch 3' });
    }, [logActivity, lessonId]);

    useEffect(() => {
        const startTime = Date.now();
        return () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
            if (timeSpent > 0) logLessonProgress(lessonId, timeSpent);
        };
    }, [lessonId]);

    const topics = [
        { id: 'basics', label: 'Basics', icon: <FaLayerGroup /> },
        { id: 'classification', label: 'Classification', icon: <FaSitemap /> },
        { id: 'variables', label: 'Variables', icon: <FaCube /> },
        { id: 'series', label: 'Series', icon: <FaTable /> },
        { id: 'construction', label: 'Construction', icon: <FaTools /> },
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
                    <div className="stats-label" style={{ color: '#ffffff' }}>CHAPTER 3</div>
                    <h1 className="stats-title">ORGANISATION OF<br />DATA</h1>
                    <p className="stats-subtitle">Classification, Variables, and Frequency Distributions</p>
                </header>

                {/* Navigation Menu (New) */}
                <TopicsMenu
                    topics={topics}
                    activeTab={activeTab}
                    onSelect={setActiveTab}
                />

                {/* Content Area */}
                <div className="stats-content">
                    {activeTab === 'basics' && <OrganizationBasics />}
                    {activeTab === 'classification' && <TypesOfClassification />}
                    {activeTab === 'variables' && <ConceptOfVariables />}
                    {activeTab === 'series' && <TypesOfSeries />}
                    {activeTab === 'construction' && <FrequencyConstruction />}
                    {activeTab === 'quiz' && <Quiz />}
                </div>

                {/* Footer Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', borderTop: '1px solid var(--stats-border)', paddingTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-outline"
                        onClick={() => {
                            if (activeTab === 'classification') setActiveTab('basics');
                            if (activeTab === 'variables') setActiveTab('classification');
                            if (activeTab === 'series') setActiveTab('variables');
                            if (activeTab === 'construction') setActiveTab('series');
                            if (activeTab === 'quiz') setActiveTab('construction');
                        }}
                        disabled={activeTab === 'basics'}
                        style={{ opacity: activeTab === 'basics' ? 0.5 : 1, cursor: activeTab === 'basics' ? 'not-allowed' : 'pointer' }}
                    >
                        <FaArrowLeft /> Previous
                    </button>

                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => {
                            if (activeTab === 'basics') setActiveTab('classification');
                            if (activeTab === 'classification') setActiveTab('variables');
                            if (activeTab === 'variables') setActiveTab('series');
                            if (activeTab === 'series') setActiveTab('construction');
                            if (activeTab === 'construction') setActiveTab('quiz');
                        }}
                        disabled={activeTab === 'quiz'}
                        style={{ display: activeTab === 'quiz' ? 'none' : 'flex' }}
                    >
                        Next Section <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>

                    {activeTab === 'quiz' && (
                        <Link to="/lesson/stats-4" className="stats-btn stats-btn-secondary">
                            Next Chapter <FaArrowLeft style={{ transform: 'rotate(180deg)' }} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Lesson3;
