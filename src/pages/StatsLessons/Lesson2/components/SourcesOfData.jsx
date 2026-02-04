import React from 'react';

const SourcesOfData = () => {
    return (
        <div className="stats-section">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>SOURCES OF DATA</h2>
            <p className="stats-subtitle">Where does data come from?</p>

            {/* Intro */}
            {/* Intro */}
            <div className="stats-grid-2" style={{ marginBottom: '20px' }}>
                <div className="stats-card" style={{ margin: 0, borderLeft: '4px solid var(--stats-primary)', background: 'rgba(59, 130, 246, 0.05)' }}>
                    <h4 style={{ color: 'var(--stats-primary-light)', marginBottom: '8px' }}>Internal Sources</h4>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>
                        Data generated <strong>within</strong> an organization.
                        <br /><span style={{ fontSize: '0.85rem', color: 'var(--stats-text-muted)' }}>(e.g., A company's own sales report)</span>
                    </p>
                </div>
                <div className="stats-card" style={{ margin: 0, borderLeft: '4px solid var(--stats-warning)', background: 'rgba(245, 158, 11, 0.05)' }}>
                    <h4 style={{ color: '#fbbf24', marginBottom: '8px' }}>External Sources</h4>
                    <p style={{ fontSize: '0.95rem', margin: 0 }}>
                        Data collected from <strong>outside</strong> agencies.
                        <br /><span style={{ fontSize: '0.85rem', color: 'var(--stats-text-muted)' }}>(e.g., Use of government census data)</span>
                    </p>
                </div>
            </div>

            <p style={{ textAlign: 'center', color: 'var(--stats-text-muted)', marginBottom: '20px' }}>
                However, the most important classification is based on the <strong>origin</strong> of data:
            </p>

            <div className="stats-grid-2">
                {/* Primary Data */}
                <div className="stats-grid-item primary">
                    <h4><span style={{ color: 'var(--stats-primary-light)' }}>01</span> Primary Data</h4>
                    <p>
                        Data collected by the investigator <strong>personally</strong> for the first time from the source of origin.
                        It is original in character.
                    </p>
                    <div className="stats-note info" style={{ marginTop: '15px' }}>
                        <strong>Example:</strong> A teacher collecting marks of students directly from the answer sheets.
                    </div>
                </div>

                {/* Secondary Data */}
                <div className="stats-grid-item secondary">
                    <h4><span style={{ color: 'var(--stats-secondary-light)' }}>02</span> Secondary Data</h4>
                    <p>
                        Data which has <strong>already been collected</strong> by someone else and is used by the investigator
                        for their own purpose. It is "second-hand" information.
                    </p>
                    <div className="stats-note success" style={{ marginTop: '15px' }}>
                        <strong>Example:</strong> Finding the population of India from the Census Report 2011.
                    </div>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="stats-card">
                <h3 className="stats-card-heading">Difference between Primary & Secondary Data</h3>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Basis</th>
                                <th>Primary Data</th>
                                <th>Secondary Data</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Originality</strong></td>
                                <td>Original (Raw Material)</td>
                                <td>Not Original (Finished Product)</td>
                            </tr>
                            <tr>
                                <td><strong>Source</strong></td>
                                <td>Collected from the source of origin.</td>
                                <td>Collected from published/unpublished sources.</td>
                            </tr>
                            <tr>
                                <td><strong>Time & Cost</strong></td>
                                <td>Expensive and Time Consuming.</td>
                                <td>Cheaper and Faster.</td>
                            </tr>
                            <tr>
                                <td><strong>Reliability</strong></td>
                                <td>More reliable and accurate.</td>
                                <td>Less reliable (needs verification).</td>
                            </tr>
                            <tr>
                                <td><strong>Purpose</strong></td>
                                <td>Specific to the objective of study.</td>
                                <td>Needs adjustment to suit the objective.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Key Takeaway */}
            <div className="stats-definition">
                <p className="stats-definition-text">
                    <strong>Note:</strong> Data is not inherently primary or secondary. It depends on the <em>usage</em>.
                    Data collected by the Census of India is <strong>Primary</strong> for the Government,
                    but <strong>Secondary</strong> for a researcher using that data.
                </p>
            </div>

        </div>
    );
};

export default SourcesOfData;
