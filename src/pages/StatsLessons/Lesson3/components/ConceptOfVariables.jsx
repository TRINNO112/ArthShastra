import React from 'react';

const ConceptOfVariables = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>VARIABLES</h2>
            <p className="stats-subtitle">Discrete vs Continuous Concept</p>

            <div className="stats-definition">
                <strong>Variable:</strong> A characteristic/phenomenon which is capable of being measured and changes its value over time.<br />
                <em>Example: Height, Weight, Marks.</em>
            </div>

            <div className="stats-grid-2" style={{ marginTop: '30px' }}>
                {/* Discrete */}
                <div className="stats-card" style={{ borderLeft: '4px solid #f59e0b' }}>
                    <h3 className="stats-card-heading secondary">1. Discrete Variable</h3>
                    <p>
                        Variables that increase in <strong>jumps</strong> or complete numbers.
                        They cannot take fractional values.
                    </p>
                    <div className="stats-note">
                        <strong style={{ display: 'block', marginBottom: '5px', color: '#f59e0b' }}>Key Feature:</strong>
                        Values are exact. e.g., 1, 2, 3 (Not 1.5).
                    </div>
                    <ul className="stats-list">
                        <li>Number of children in a family (Can contain 2 or 3, but not 2.5)</li>
                        <li>Number of goals in a match</li>
                        <li>Number of rooms in a house</li>
                    </ul>
                </div>

                {/* Continuous */}
                <div className="stats-card" style={{ borderLeft: '4px solid #3b82f6' }}>
                    <h3 className="stats-card-heading primary">2. Continuous Variable</h3>
                    <p>
                        Variables that can take <strong>any value</strong> (integral or fractional) within a certain range.
                        They represent a continuous flow.
                    </p>
                    <div className="stats-note info">
                        <strong style={{ display: 'block', marginBottom: '5px', color: '#60a5fa' }}>Key Feature:</strong>
                        Values can be broken down. e.g., 5.1, 5.2, 5.25.
                    </div>
                    <ul className="stats-list">
                        <li>Height of a person (5'2", 5'3.5")</li>
                        <li>Weight (60.5 kg)</li>
                        <li>Temperature (98.6°F)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ConceptOfVariables;
