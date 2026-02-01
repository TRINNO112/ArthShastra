/**
 * Introduction.jsx
 * Section 1 of Lesson 1: Introduction to Statistics
 */

import { FaBook, FaChartPie, FaListOl, FaSearch } from 'react-icons/fa';

function Introduction() {
    return (
        <div className="stats-section">
            <section className="stats-card">
                <h3 className="stats-card-heading primary">
                    <FaBook /> WHAT IS STATISTICS?
                </h3>

                <div className="stats-definition">
                    <p className="stats-definition-text">
                        <strong>Statistics</strong> refers to the collection, presentation, analysis, and interpretation of numerical data.
                        It is a branch of mathematics dealing with data collection, organization, analysis, interpretation, and presentation.
                    </p>
                </div>

                <div className="stats-grid-2">
                    <div className="stats-grid-item primary">
                        <h4><FaListOl /> PLURAL SENSE</h4>
                        <p>
                            In plural sense, statistics refers to <strong>numerical statements of facts</strong> in any department of enquiry placed in relation to each other.
                        </p>
                        <ul className="stats-list" style={{ marginTop: '10px' }}>
                            <li>Aggregate of facts</li>
                            <li>Numerically expressed</li>
                            <li>Affected by multiplicity of causes</li>
                        </ul>
                    </div>

                    <div className="stats-grid-item secondary">
                        <h4><FaChartPie /> SINGULAR SENSE</h4>
                        <p>
                            In singular sense, it refers to the <strong>statistical methods</strong> or techniques used to collect and analyze data.
                        </p>
                        <ul className="stats-list" style={{ marginTop: '10px' }}>
                            <li>Collection of Data</li>
                            <li>Organisation of Data</li>
                            <li>Presentation of Data</li>
                            <li>Analysis & Interpretation</li>
                        </ul>
                    </div>
                </div>

                <div className="stats-note info">
                    <strong>KEY DIFFERENCE:</strong> Plural sense = <em>The Data itself</em> | Singular sense = <em>The Methods used</em>
                </div>
            </section>

            <section className="stats-card">
                <h3 className="stats-card-heading secondary">
                    <FaSearch /> FEATURES OF STATISTICS (PLURAL SENSE)
                </h3>
                <p style={{ marginBottom: '20px' }}>For data to be called "Statistics" in the plural sense, it must satisfy specific characteristics:</p>

                <div className="stats-grid-3">
                    <div className="stats-grid-item">
                        <h4>1. Aggregate of Facts</h4>
                        <p>A single number (e.g., "Ram's height is 6ft") is NOT statistics. A series of heights of a class IS statistics.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>2. Numerically Expressed</h4>
                        <p>Qualitative statements like "Fair," "Good," or "Tall" are not statistics. They must be numbers.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>3. Estimated/Enumerated</h4>
                        <p>Data can be collected by actual counting (Enumeration) or by estimation if the field is vast.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>4. Systematic Manner</h4>
                        <p>Data must be collected in a planned and systematic way, not haphazardly.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>5. Pre-determined Purpose</h4>
                        <p>Data must be collected for a specific objective defined beforehand.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>6. Multiplicity of Causes</h4>
                        <p>Statistics are affected by many factors, not just one (e.g., wheat price affected by rain, demand, supply).</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Introduction;
