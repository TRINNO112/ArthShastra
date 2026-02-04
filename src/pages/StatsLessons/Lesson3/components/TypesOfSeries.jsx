import React from 'react';

const TypesOfSeries = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>TYPES OF STATISTICAL SERIES</h2>
            <p className="stats-subtitle">How data is arranged for analysis</p>

            {/* 1. Individual Series */}
            <div className="stats-card">
                <h3 className="stats-card-heading">1. Individual Series</h3>
                <p>Items are listed singly. There are no groups or classes.</p>
                <div className="stats-grid-2">
                    <div>
                        <strong>Raw Data (Rolled no.):</strong>
                        <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px', color: '#cbd5e1', marginTop: '10px' }}>
                            10, 25, 10, 30, 25, 10, 5, 25, 30, 5
                        </div>
                    </div>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead><tr><th colSpan="2" style={{ textAlign: 'center' }}>Arranged (Ascending)</th></tr></thead>
                            <tbody>
                                <tr><td>1. 5</td><td>6. 25</td></tr>
                                <tr><td>2. 5</td><td>7. 25</td></tr>
                                <tr><td>3. 10</td><td>8. 25</td></tr>
                                <tr><td>4. 10</td><td>9. 30</td></tr>
                                <tr><td>5. 10</td><td>10. 30</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 2. Frequency Series - Discrete */}
            <div className="stats-card">
                <h3 className="stats-card-heading secondary">2. Discrete Series (Frequency Array)</h3>
                <p>Items are exactly measured. Data is grouped by exact values.</p>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Marks (X)</th>
                                <th>Tally Marks</th>
                                <th>Frequency (f)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>5</td>
                                <td style={{ letterSpacing: '2px' }}>||</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td style={{ letterSpacing: '2px' }}>|||</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td style={{ letterSpacing: '2px' }}>|||</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td style={{ letterSpacing: '2px' }}>||</td>
                                <td>2</td>
                            </tr>
                            <tr style={{ borderTop: '2px solid var(--stats-border)', fontWeight: 'bold' }}>
                                <td>Total</td>
                                <td></td>
                                <td>Σf = 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 3. Frequency Distribution - Continuous */}
            <div className="stats-card">
                <h3 className="stats-card-heading primary">3. Frequency Distribution (Continuous Series)</h3>
                <p>Items are grouped into <strong>Class Intervals</strong>. Used for large data or continuous variables.</p>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Marks Range (Class Interval)</th>
                                <th>Tally Marks</th>
                                <th>No. of Students (Frequency)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0 - 10</td>
                                <td style={{ letterSpacing: '2px' }}>||</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>10 - 20</td>
                                <td style={{ letterSpacing: '2px' }}>|||</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>20 - 30</td>
                                <td style={{ letterSpacing: '2px' }}>||||</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>30 - 40</td>
                                <td style={{ letterSpacing: '2px' }}>|</td>
                                <td>1</td>
                            </tr>
                            <tr style={{ borderTop: '2px solid var(--stats-border)', fontWeight: 'bold' }}>
                                <td>Total</td>
                                <td></td>
                                <td>Σf = 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TypesOfSeries;
