import React from 'react';
import { FaGlobeAmericas, FaClock, FaTag, FaRulerVertical } from 'react-icons/fa';

const TypesOfClassification = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>BASES OF CLASSIFICATION</h2>
            <p className="stats-subtitle">The four ways to classify statistical data</p>

            <div className="stats-grid-2">
                {/* Geographical */}
                <div className="stats-card">
                    <h3 className="stats-card-heading" style={{ color: '#ec4899' }}>
                        <FaGlobeAmericas style={{ marginRight: '10px' }} />
                        1. Geographical (Spatial)
                    </h3>
                    <p>Classification based on <strong>location</strong> or area (States, Cities, Countries).</p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Wheat Output (Tons)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Punjab</td><td>20,000</td></tr>
                                <tr><td>Haryana</td><td>15,000</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Chronological */}
                <div className="stats-card">
                    <h3 className="stats-card-heading" style={{ color: '#f59e0b' }}>
                        <FaClock style={{ marginRight: '10px' }} />
                        2. Chronological (Temporal)
                    </h3>
                    <p>Classification based on <strong>time</strong> (Years, Months, Days).</p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Sales (Lakhs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>2020</td><td>45</td></tr>
                                <tr><td>2021</td><td>60</td></tr>
                                <tr><td>2022</td><td>55</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Qualitative */}
                <div className="stats-card">
                    <h3 className="stats-card-heading" style={{ color: '#8b5cf6' }}>
                        <FaTag style={{ marginRight: '10px' }} />
                        3. Qualitative
                    </h3>
                    <p>Classification based on <strong>attributes</strong> (quality) like religion, beauty, literacy.</p>
                    <ul className="stats-list">
                        <li><strong>Simple:</strong> Two classes (e.g., Male/Female).</li>
                        <li><strong>Manifold:</strong> Multiple sub-classes (e.g., Male -`{'>'}` Literate/Illiterate -`{'>'}` Employed/Unemployed).</li>
                    </ul>
                </div>

                {/* Quantitative */}
                <div className="stats-card">
                    <h3 className="stats-card-heading" style={{ color: '#10b981' }}>
                        <FaRulerVertical style={{ marginRight: '10px' }} />
                        4. Quantitative
                    </h3>
                    <p>Classification based on <strong>numerical values</strong> (Classes/ranges).</p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th>Marks (Range)</th>
                                    <th>No. of Students</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>0 - 10</td><td>5</td></tr>
                                <tr><td>10 - 20</td><td>12</td></tr>
                                <tr><td>20 - 30</td><td>8</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypesOfClassification;
