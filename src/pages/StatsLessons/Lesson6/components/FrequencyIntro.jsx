import React from 'react';
import { FaChartBar, FaWaveSquare, FaBezierCurve } from 'react-icons/fa';

const FrequencyIntro = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">FREQUENCY DIAGRAMS</h2>
            <p className="stats-subtitle">Visualizing Continuous Frequency Distributions</p>

            <div className="stats-card" style={{ borderLeft: '4px solid var(--stats-primary)', marginBottom: '30px' }}>
                <h3 style={{ color: '#fff', marginBottom: '15px' }}>The "Big 3" of Frequency Diagrams</h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                    Unlike Bar Diagrams which are for discrete categories, Frequency Diagrams are used for <strong>Continuous Variables</strong> (like Height, Marks, Income).
                    The data is grouped into Class Intervals (e.g., 0-10, 10-20).
                </p>
            </div>

            <div className="stats-grid-3">
                <div className="stats-card hover-effect">
                    <div style={{ fontSize: '2.5rem', color: '#3b82f6', marginBottom: '15px' }}><FaChartBar /></div>
                    <h3 className="stats-card-heading">Histogram</h3>
                    <p>Rectangular bars <strong>without gaps</strong>. The area represents the frequency. Used for identifying the <strong>Mode</strong> graphically.</p>
                </div>

                <div className="stats-card hover-effect">
                    <div style={{ fontSize: '2.5rem', color: '#a855f7', marginBottom: '15px' }}><FaWaveSquare /></div>
                    <h3 className="stats-card-heading">Polygon</h3>
                    <p>A line graph formed by joining the <strong>mid-points</strong> of histogram tops. Can be drawn with or without a histogram.</p>
                </div>

                <div className="stats-card hover-effect">
                    <div style={{ fontSize: '2.5rem', color: '#10b981', marginBottom: '15px' }}><FaBezierCurve /></div>
                    <h3 className="stats-card-heading">Ogive</h3>
                    <p>Also called Cumulative Frequency Curve. Two types: 'Less Than' and 'More Than'. Their intersection gives the <strong>Median</strong>.</p>
                </div>
            </div>

            <div className="stats-badge info" style={{ marginTop: '30px' }}>
                <strong>Key Difference:</strong> In a Bar Diagram, there IS scale spacing between bars. In a Histogram, there is NO spacing between bars.
            </div>
        </div>
    );
};

export default FrequencyIntro;
