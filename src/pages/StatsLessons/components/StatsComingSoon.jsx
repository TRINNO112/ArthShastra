/**
 * StatsComingSoon.jsx
 * Shared Coming Soon placeholder for undeveloped Statistics lessons
 */

import { Link, useParams } from 'react-router-dom';
import { FaChartBar, FaArrowLeft, FaClock } from 'react-icons/fa';
import '../css/stats-theme.css';

// Chapter titles for display
const chapterTitles = {
    'stats-2': 'Collection of Data',
    'stats-3': 'Organisation of Data',
    'stats-4': 'Presentation of Data - Tables',
    'stats-5': 'Diagrammatic Presentation',
    'stats-6': 'Frequency Diagrams',
    'stats-7': 'Arithmetic Line Graphs',
    'stats-8': 'Measures of Central Tendency - Mean',
    'stats-9': 'Median & Mode',
    'stats-10': 'Measures of Dispersion',
    'stats-11': 'Correlation',
    'stats-12': 'Index Numbers',
    'stats-13': 'Use of Statistical Tools',
};

function StatsComingSoon({ lessonId }) {
    const params = useParams();
    const id = lessonId || params.lessonId || 'stats-2';
    const title = chapterTitles[id] || 'Statistics Lesson';
    const chapterNum = id.split('-')[1] || '?';

    return (
        <div className="stats-page">
            <div className="stats-container">
                <div className="stats-coming-soon">
                    <div className="stats-coming-soon-icon">
                        📊
                    </div>

                    <h1>Chapter {chapterNum}: {title}</h1>

                    <p>
                        This chapter is currently under development. We're working hard to bring you
                        comprehensive content with interactive examples and practice questions.
                    </p>

                    <div className="stats-coming-soon-badge">
                        <FaClock /> Coming Soon
                    </div>

                    <Link
                        to="/lessons?grade=11&subject=statistics"
                        className="stats-btn stats-btn-outline"
                        style={{ marginTop: '30px' }}
                    >
                        <FaArrowLeft /> Back to Lessons
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StatsComingSoon;
