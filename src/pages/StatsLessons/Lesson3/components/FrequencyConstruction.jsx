import React from 'react';

const FrequencyConstruction = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>CONSTRUCTION OF FREQUENCY</h2>
            <p className="stats-subtitle">Inclusive vs Exclusive Series</p>

            <div className="stats-grid-2">
                {/* Exclusive Method */}
                <div className="stats-card">
                    <h3 className="stats-card-heading primary">1. Exclusive Method</h3>
                    <p>Upper limit of one class is the Lower limit of the next.</p>
                    <div className="stats-note info">
                        <strong>Rule:</strong> The Upper Limit (e.g., 10) is <em>Excluded</em> from that class and counted in the next.
                    </div>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead><tr><th>Marks (X)</th><th>freq (f)</th></tr></thead>
                            <tbody>
                                <tr><td>0 - 10</td><td>5</td></tr>
                                <tr><td>10 - 20</td><td>8</td></tr>
                                <tr><td>20 - 30</td><td>12</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Inclusive Method */}
                <div className="stats-card">
                    <h3 className="stats-card-heading secondary">2. Inclusive Method</h3>
                    <p>Upper limit is included in that class itself.</p>
                    <div className="stats-note">
                        <strong>Rule:</strong> There is a gap between Upper Limit of one class and Lower Limit of next.
                    </div>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead><tr><th>Marks (X)</th><th>freq (f)</th></tr></thead>
                            <tbody>
                                <tr><td>0 - 9</td><td>5</td></tr>
                                <tr><td>10 - 19</td><td>8</td></tr>
                                <tr><td>20 - 29</td><td>12</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Conversion Formula */}
            <div className="stats-section" style={{ marginTop: '30px' }}>
                <h3 className="stats-title" style={{ fontSize: '1.5rem' }}>Conversion: Inclusive → Exclusive</h3>
                <div className="stats-formula">
                    Correction Factor (d) = (L1 of next class - L2 of previous class) / 2
                    <br />
                    <span style={{ fontSize: '1rem', color: '#94a3b8' }}>Usually: (10 - 9) / 2 = 0.5</span>
                </div>
                <div className="stats-grid-2">
                    <div className="stats-card">
                        <h4>Subtract 'd' from Lower Limits</h4>
                        <p>0 - 0.5 = <strong>-0.5</strong></p>
                        <p>10 - 0.5 = <strong>9.5</strong></p>
                    </div>
                    <div className="stats-card">
                        <h4>Add 'd' to Upper Limits</h4>
                        <p>9 + 0.5 = <strong>9.5</strong></p>
                        <p>19 + 0.5 = <strong>19.5</strong></p>
                    </div>
                </div>

                <div className="stats-table-container">
                    <p style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '10px' }}>Resulting Exclusive Series</p>
                    <table className="stats-table">
                        <thead><tr><th>Marks (Corrected)</th><th>freq</th></tr></thead>
                        <tbody>
                            <tr><td>-0.5 - 9.5</td><td>5</td></tr>
                            <tr><td>9.5 - 19.5</td><td>8</td></tr>
                            <tr><td>19.5 - 29.5</td><td>12</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FrequencyConstruction;
