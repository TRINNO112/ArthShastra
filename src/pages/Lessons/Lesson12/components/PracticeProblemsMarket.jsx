import React, { useState } from 'react';
import { FaQuestionCircle, FaCheck, FaTimes, FaLightbulb } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const PracticeProblemsMarket = () => {
    // Identity Quiz State
    const [q1, setQ1] = useState(null);
    const [q2, setQ2] = useState(null);
    const [q3, setQ3] = useState(null);

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 6</span>
                <h2 className="section-title-lesson">Practice Problems</h2>
                <p className="section-subtitle-lesson">Master Market Forms through Identification</p>
            </div>

            {/* IDENTITY QUIZ CARD */}
            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-gold"><FaLightbulb /> Identify the Market Form</h3>
                    <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                        Read the scenario and select the correct Market structure.
                    </p>

                    {/* Q1 */}
                    <div style={{ marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}><strong>1. Toothpaste Industry</strong></p>
                        <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '15px' }}>Colgate, Pepsodent, Sensodyne. Products are similar but have different tastes/packaging.</p>

                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button onClick={() => setQ1('wrong')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>Perfect Competition</button>
                            <button onClick={() => setQ1('wrong')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>Monopoly</button>
                            <button onClick={() => setQ1('correct')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: q1 === 'correct' ? '#28a745' : 'rgba(255,255,255,0.05)', color: '#fff', borderColor: q1 === 'correct' ? '#28a745' : '#555' }}>Monopolistic Comp</button>
                        </div>

                        {q1 === 'correct' && <div style={{ marginTop: '10px', color: '#00ff00', display: 'flex', alignItems: 'center', gap: '10px' }}><FaCheck /> Correct! Product Differentiation is key.</div>}
                        {q1 === 'wrong' && <div style={{ marginTop: '10px', color: '#ff4444', display: 'flex', alignItems: 'center', gap: '10px' }}><FaTimes /> Try again. Consider the brand differences.</div>}
                    </div>

                    {/* Q2 */}
                    <div style={{ marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}><strong>2. OPEC (Oil Cartel)</strong></p>
                        <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '15px' }}>Few countries controlling oil supply to influence global price.</p>

                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button onClick={() => setQ2('correct')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: q2 === 'correct' ? '#28a745' : 'rgba(255,255,255,0.05)', color: '#fff', borderColor: q2 === 'correct' ? '#28a745' : '#555' }}>Oligopoly</button>
                            <button onClick={() => setQ2('wrong')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>Perfect Competition</button>
                            <button onClick={() => setQ2('wrong')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>Monopoly</button>
                        </div>

                        {q2 === 'correct' && <div style={{ marginTop: '10px', color: '#00ff00', display: 'flex', alignItems: 'center', gap: '10px' }}><FaCheck /> Correct! A Cartel is a feature of Oligopoly.</div>}
                        {q2 === 'wrong' && <div style={{ marginTop: '10px', color: '#ff4444', display: 'flex', alignItems: 'center', gap: '10px' }}><FaTimes /> Incorrect. They work together (Collusion).</div>}
                    </div>

                    {/* Q3 */}
                    <div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}><strong>3. Wheat Market</strong></p>
                        <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '15px' }}>Thousands of farmers selling identical Grade-A Wheat.</p>

                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button onClick={() => setQ3('correct')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: q3 === 'correct' ? '#28a745' : 'rgba(255,255,255,0.05)', color: '#fff', borderColor: q3 === 'correct' ? '#28a745' : '#555' }}>Perfect Competition</button>
                            <button onClick={() => setQ3('wrong')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>Monopolistic Comp</button>
                            <button onClick={() => setQ3('wrong')} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #555', cursor: 'pointer', background: 'rgba(255,255,255,0.05)', color: '#fff' }}>Oligopoly</button>
                        </div>

                        {q3 === 'correct' && <div style={{ marginTop: '10px', color: '#00ff00', display: 'flex', alignItems: 'center', gap: '10px' }}><FaCheck /> Correct! Homogeneous product + Many sellers.</div>}
                        {q3 === 'wrong' && <div style={{ marginTop: '10px', color: '#ff4444', display: 'flex', alignItems: 'center', gap: '10px' }}><FaTimes /> Incorrect. Products are identical.</div>}
                    </div>

                </div>
            </div>

            {/* CURVE SHAPE QUIZ */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan"><FaQuestionCircle /> Quick Revision: Curve Shapes</h3>
                    <ul className="bullet-list-large">
                        <li>
                            <strong style={{ color: '#00ffff' }}>Horizontal Line</strong> <span style={{ color: '#aaa' }}>→ Perfect Competition (Ed = ∞)</span>
                        </li>
                        <li>
                            <strong style={{ color: '#ff4444' }}>Steep Downward</strong> <span style={{ color: '#aaa' }}>→ Monopoly (Inelastic)</span>
                        </li>
                        <li>
                            <strong style={{ color: '#d8bfd8' }}>Flatter Downward</strong> <span style={{ color: '#aaa' }}>→ Monopolistic Comp (Elastic)</span>
                        </li>
                        <li>
                            <strong style={{ color: '#ffd700' }}>Indeterminate</strong> <span style={{ color: '#aaa' }}>→ Oligopoly (Interdependence)</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PracticeProblemsMarket;
