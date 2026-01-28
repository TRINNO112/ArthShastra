import React from 'react';
import '../../Lesson5/components/lesson5.css';

const MarketComparisonDetails = () => {
    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Summary</span>
                <h2 className="section-title-lesson">Market Comparison</h2>
                <p className="section-subtitle-lesson">All Forms at a Glance</p>
            </div>

            <div className="content-card animate-fadeInUp">
                <div className="table-responsive">
                    <table className="table" style={{ width: '100%', textAlign: 'left', borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                        <thead>
                            <tr style={{ color: '#ffd700', fontSize: '1.1rem' }}>
                                <th style={{ padding: '15px' }}>Feature</th>
                                <th style={{ color: '#00ffff' }}>Perfect Comp</th>
                                <th style={{ color: '#ff4444' }}>Monopoly</th>
                                <th style={{ color: '#d8bfd8' }}>Monopolistic</th>
                                <th style={{ color: '#ff7f50' }}>Oligopoly</th>
                            </tr>
                        </thead>
                        <tbody style={{ color: '#e0e0e0' }}>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>1. No. of Sellers</td>
                                <td>Very Large (Infinite)</td>
                                <td>Single (One)</td>
                                <td>Large</td>
                                <td>Few (3-5)</td>
                            </tr>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>2. Product</td>
                                <td>Homogeneous</td>
                                <td>No Substitutes</td>
                                <td>Differentiated</td>
                                <td>Homogeneous or Diff.</td>
                            </tr>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>3. Control on Price</td>
                                <td>None (Price Taker)</td>
                                <td>Full (Price Maker)</td>
                                <td>Partial</td>
                                <td>Sticky / Rigidity</td>
                            </tr>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>4. Demand Curve</td>
                                <td>Horizontal (Ed=∞)</td>
                                <td>Steep (Inelastic)</td>
                                <td>Flatter (Elastic)</td>
                                <td>Kinked</td>
                            </tr>
                            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '15px', fontWeight: 'bold' }}>5. Entry</td>
                                <td>Free</td>
                                <td>Restricted</td>
                                <td>Free</td>
                                <td>Difficult</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MarketComparisonDetails;
