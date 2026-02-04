import React from 'react';

const CensusVsSample = () => {
    return (
        <div className="stats-section">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>CENSUS VS SAMPLE</h2>
            <p className="stats-subtitle">Two ways to study a population</p>

            {/* Definitions */}
            <div className="stats-grid-2">
                <div className="stats-definition">
                    <h4 style={{ color: 'var(--stats-primary-light)', marginBottom: '10px' }}>Census Method</h4>
                    <p className="stats-definition-text">
                        A method in which data is collected from <strong>every single item</strong> of the universe (population) relating to the problem under investigation.
                    </p>
                    <div className="stats-note info" style={{ marginTop: '15px' }}>
                        <strong>Key Feature:</strong> 100% Accuracy & Reliability. <br />
                        <strong>Example:</strong> Census of India (every 10 years).
                    </div>
                </div>

                <div className="stats-definition">
                    <h4 style={{ color: 'var(--stats-secondary-light)', marginBottom: '10px' }}>Sample Method</h4>
                    <p className="stats-definition-text">
                        A method in which data is collected about a <strong>representative part</strong> (sample) of the universe, and conclusions are drawn for the whole.
                    </p>
                    <div className="stats-note success" style={{ marginTop: '15px' }}>
                        <strong>Key Feature:</strong> Economical & Fast. <br />
                        <strong>Example:</strong> Checking quality of rice by inspecting a handful.
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="stats-card">
                <h3 className="stats-card-heading">Comparison</h3>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Census Method</th>
                                <th>Sample Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Coverage</strong></td>
                                <td>Full enumeration (100%)</td>
                                <td>Partial enumeration</td>
                            </tr>
                            <tr>
                                <td><strong>Cost</strong></td>
                                <td>Very Expensive</td>
                                <td>Economical</td>
                            </tr>
                            <tr>
                                <td><strong>Time</strong></td>
                                <td>Time Consuming</td>
                                <td>Quick</td>
                            </tr>
                            <tr>
                                <td><strong>Accuracy</strong></td>
                                <td>Very High</td>
                                <td>Less (Sampling Errors possible)</td>
                            </tr>
                            <tr>
                                <td><strong>Feasibility</strong></td>
                                <td>Not possible for infinite/large populations.</td>
                                <td>Possible for large populations.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sampling Methods */}
            <div className="stats-card">
                <h3 className="stats-card-heading">Methods of Sampling</h3>
                <div className="stats-grid-3">
                    <div className="stats-grid-item">
                        <h4>Random Sampling</h4>
                        <p>Every item has an equal chance of selection (Lottery Method).</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>Purposive Sampling</h4>
                        <p>Investigator deliberately selects items which they think are representative.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>Stratified Sampling</h4>
                        <p>Population is divided into groups (strata) and items are selected from each.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CensusVsSample;
