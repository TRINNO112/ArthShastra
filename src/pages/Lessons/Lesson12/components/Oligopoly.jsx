import React from 'react';
import { FaUserNinja, FaHandshake, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const Oligopoly = () => {
    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Section 5</span>
                <h2 className="section-title-lesson">Oligopoly</h2>
                <p className="section-subtitle-lesson">Competition among the Few</p>
            </div>

            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-red"><FaUserNinja /> Definition & Features</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                        Market with <strong>Few Big Sellers</strong> and many buyers. High degree of <strong>Interdependence</strong>. (e.g., Automobile, Telecom, Airlines).
                    </p>

                    <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '20px' }}>

                        {/* Panel 1 */}
                        <div className="comic-panel" style={{ background: '#fffACD', border: '3px solid #B8860B', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #B8860B' }}>
                            <div style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#FFD700', color: '#000', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #B8860B', transform: 'rotate(3deg)', fontSize: '0.8rem' }}>ELITE</div>
                            <div style={{ fontSize: '2rem', color: '#B8860B', marginBottom: '5px', textAlign: 'center' }}><FaUserNinja /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #B8860B', paddingBottom: '5px', marginBottom: '10px', color: '#B8860B' }}>Few Sellers</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "Just us 3 or 4 giants controlling 80% of the market. Small players don't matter."
                            </p>
                        </div>

                        {/* Panel 2 */}
                        <div className="comic-panel" style={{ background: '#F5FFFA', border: '3px solid #2F4F4F', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #2F4F4F' }}>
                            <div style={{ position: 'absolute', top: '-10px', left: '-10px', background: '#00CED1', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #2F4F4F', transform: 'rotate(-3deg)', fontSize: '0.8rem' }}>WATCHING</div>
                            <div style={{ fontSize: '2rem', color: '#2F4F4F', marginBottom: '5px', textAlign: 'center' }}><FaHandshake /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #2F4F4F', paddingBottom: '5px', marginBottom: '10px', color: '#2F4F4F' }}>Interdependence</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "I can't just lower my price. If I do, HE will too, and we both lose. I watch him 24/7."
                            </p>
                        </div>

                        {/* Panel 3 */}
                        <div className="comic-panel" style={{ background: '#E6E6FA', border: '3px solid #483D8B', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #483D8B' }}>
                            <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#9370DB', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #483D8B', transform: 'rotate(2deg)', fontSize: '0.8rem' }}>STICKY</div>
                            <div style={{ fontSize: '2rem', color: '#483D8B', marginBottom: '5px', textAlign: 'center' }}><FaChartLine /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #483D8B', paddingBottom: '5px', marginBottom: '10px', color: '#483D8B' }}>Price Rigidity</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "Prices stay stuck! We compete on ads and service, not price wars (usually)."
                            </p>
                        </div>

                        {/* Panel 4 */}
                        <div className="comic-panel" style={{ background: '#FFE4E1', border: '3px solid #8B0000', borderRadius: '10px', padding: '15px', position: 'relative', boxShadow: '5px 5px 0px #8B0000' }}>
                            <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', background: '#FF4500', color: '#fff', padding: '2px 8px', fontWeight: 'bold', border: '2px solid #8B0000', transform: 'rotate(-2deg)', fontSize: '0.8rem' }}>BLOCKED</div>
                            <div style={{ fontSize: '2rem', color: '#8B0000', marginBottom: '5px', textAlign: 'center' }}><FaExclamationTriangle /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', borderBottom: '2px solid #8B0000', paddingBottom: '5px', marginBottom: '10px', color: '#8B0000' }}>Barriers</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#000' }}>
                                "You want to compete with Jio or Tata Motors? Good luck raising the billions needed!"
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* CURVE NOTE: INDETERMINATE */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-gold">The Demand Curve</h3>
                    <p style={{ marginBottom: '20px', fontSize: '1.2rem' }}>
                        In Oligopoly, the Demand Curve is <strong>Indeterminate</strong>.
                    </p>
                    <div className="note-box" style={{ borderColor: '#ffd700', background: 'rgba(255, 215, 0, 0.05)' }}>
                        <p>
                            Because of high <strong>Interdependence</strong>, a firm cannot predict the reaction of its rivals.
                            Therefore, it cannot define a precise relationship between Price and Quantity demanded.
                            <br /><br />
                            <em>(Note: Some theories propose a "Kinked Demand Curve", but for general understanding, we consider it Indeterminate.)</em>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Oligopoly;
