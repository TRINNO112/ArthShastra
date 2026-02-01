/**
 * ScopeImportance.jsx
 * Section 2 of Lesson 1: Scope, Functions & Importance
 */

import { FaCogs, FaLightbulb, FaGlobe, FaBalanceScale, FaBriefcase } from 'react-icons/fa';

function ScopeImportance() {
    return (
        <div className="stats-section">
            {/* Stages of Statistical Study */}
            <section className="stats-card">
                <h3 className="stats-card-heading primary">
                    <FaCogs /> STAGES OF STATISTICAL STUDY
                </h3>
                <p style={{ marginBottom: '20px' }}>In the singular sense, statistics involves five distinct stages:</p>

                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>STAGE</th>
                                <th>PROCESS</th>
                                <th>TOOLS USED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Stage 1</strong></td>
                                <td>Collection of Data</td>
                                <td>Census or Sample techniques</td>
                            </tr>
                            <tr>
                                <td><strong>Stage 2</strong></td>
                                <td>Organisation of Data</td>
                                <td>Tally bars, Frequency distribution</td>
                            </tr>
                            <tr>
                                <td><strong>Stage 3</strong></td>
                                <td>Presentation of Data</td>
                                <td>Tables, Graphs, Diagrams</td>
                            </tr>
                            <tr>
                                <td><strong>Stage 4</strong></td>
                                <td>Analysis of Data</td>
                                <td>Mean, Median, Mode, Correlation</td>
                            </tr>
                            <tr>
                                <td><strong>Stage 5</strong></td>
                                <td>Interpretation of Data</td>
                                <td>Drawing conclusions, comparisons</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Functions of Statistics */}
            <section className="stats-card">
                <h3 className="stats-card-heading secondary">
                    <FaLightbulb /> FUNCTIONS OF STATISTICS
                </h3>
                <ul className="stats-list">
                    <li><strong>Simplification of Complex Facts:</strong> Converts huge mass of data into simple figures (e.g., Average income).</li>
                    <li><strong>Comparison:</strong> Facilitates comparison between different time periods or regions.</li>
                    <li><strong>Formulation of Policies:</strong> Helps government and businesses frame policies using data.</li>
                    <li><strong>Forecasting:</strong> Helps in predicting future trends based on past data.</li>
                    <li><strong>Testing Hypothesis:</strong> Verifies economic laws (e.g., verifying Law of Demand).</li>
                </ul>
            </section>

            {/* Importance in Economics */}
            <section className="stats-card">
                <h3 className="stats-card-heading primary">
                    <FaGlobe /> IMPORTANCE IN ECONOMICS
                </h3>

                <div className="stats-grid-2">
                    <div className="stats-grid-item">
                        <h4><FaBalanceScale /> CONSUMPTION</h4>
                        <p>Analyze consumer behavior, elasticity of demand, and standard of living using data.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4><FaBriefcase /> PRODUCTION</h4>
                        <p>Decide what to produce, how much to produce, and analyze cost vs revenue.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4><FaGlobe /> DISTRIBUTION</h4>
                        <p>Determine rent, wages, interest, and profit distribution among factors of production.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4><FaLightbulb /> ECONOMIC PLANNING</h4>
                        <p>Essential for planning models, growth targets, and resource allocation.</p>
                    </div>
                </div>

                <div className="stats-note success">
                    <strong>CONCLUSION:</strong> "Statistics are the straws out of which I, like every other economist, have to make bricks." — <em>Marshall</em>
                </div>
            </section>

            {/* Limitations */}
            <section className="stats-card">
                <h3 className="stats-card-heading secondary" style={{ color: 'var(--stats-error)', borderBottomColor: 'var(--stats-error)' }}>
                    LIMITATIONS OF STATISTICS
                </h3>
                <div className="stats-grid-2">
                    <div className="stats-grid-item">
                        <p>❌ Study of numerical facts only (ignores quality like honesty).</p>
                    </div>
                    <div className="stats-grid-item">
                        <p>❌ Study of aggregates only (not individuals).</p>
                    </div>
                    <div className="stats-grid-item">
                        <p>❌ Results are true only on average.</p>
                    </div>
                    <div className="stats-grid-item">
                        <p>❌ Can be misused easily to prove false claims.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ScopeImportance;
