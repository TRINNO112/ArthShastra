import React, { useState } from 'react';
import { FaCalculator, FaLightbulb, FaCheckCircle, FaTimesCircle, FaQuestionCircle, FaChartLine } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const PracticeProblemsSupply = () => {
    // STATE FOR PROBLEM 1 (Numerical)
    const [p1, setP1] = useState(10);
    const [p2, setP2] = useState(12);
    const [q1, setQ1] = useState(100);
    const [q2, setQ2] = useState(150);
    const [showCalc, setShowCalc] = useState(false);

    // STATE FOR PROBLEM 2 (Conceptual Toggles)
    const [activeScenario, setActiveScenario] = useState(null);

    // Calculate Es
    const deltaP = p2 - p1;
    const deltaQ = q2 - q1;
    const pctP = ((deltaP) / p1) * 100;
    const pctQ = ((deltaQ) / q1) * 100;
    const es = pctP === 0 ? 0 : (pctQ / pctP).toFixed(2);

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 3</span>
                <h2 className="section-title-lesson">Practice Problems</h2>
                <p className="section-subtitle-lesson">Master the concepts of Supply through application</p>
            </div>

            {/* --- PROBLEM 1: NUMERICAL CALCULATOR --- */}
            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-gold"><FaCalculator /> 1. Calculate Elasticity (Es)</h3>
                    <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                        Given: Initial Price (P) and New Price (P1), Initial Qty (Q) and New Qty (Q1). Find Es.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                        <div>
                            <label style={{ display: 'block', color: '#aaa', marginBottom: '5px' }}>Initial Price (P)</label>
                            <input type="number" value={p1} onChange={(e) => setP1(Number(e.target.value))}
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid #555', color: '#fff', borderRadius: '5px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#aaa', marginBottom: '5px' }}>New Price (P1)</label>
                            <input type="number" value={p2} onChange={(e) => setP2(Number(e.target.value))}
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid #555', color: '#fff', borderRadius: '5px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#aaa', marginBottom: '5px' }}>Initial Qty (Q)</label>
                            <input type="number" value={q1} onChange={(e) => setQ1(Number(e.target.value))}
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid #555', color: '#fff', borderRadius: '5px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', color: '#aaa', marginBottom: '5px' }}>New Qty (Q1)</label>
                            <input type="number" value={q2} onChange={(e) => setQ2(Number(e.target.value))}
                                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.1)', border: '1px solid #555', color: '#fff', borderRadius: '5px' }} />
                        </div>
                    </div>

                    <button
                        onClick={() => setShowCalc(!showCalc)}
                        style={{ background: '#ffd700', color: '#000', padding: '10px 20px', borderRadius: '50px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                        {showCalc ? 'Hide Solution' : 'Calculate Es'}
                    </button>

                    {showCalc && (
                        <div className="formula-box-animated" style={{ marginTop: '20px', textAlign: 'left' }}>
                            <h4 style={{ color: '#ffd700', borderBottom: '1px solid #555', paddingBottom: '10px' }}>Step-by-Step Solution:</h4>
                            <div style={{ color: '#ddd', lineHeight: '1.8' }}>
                                <p>1. <strong>ΔP</strong> = {p2} - {p1} = <strong>{deltaP}</strong></p>
                                <p>2. <strong>ΔQ</strong> = {q2} - {q1} = <strong>{deltaQ}</strong></p>
                                <p>3. <strong>% Change in P</strong> = ({deltaP} / {p1}) × 100 = <strong>{pctP.toFixed(1)}%</strong></p>
                                <p>4. <strong>% Change in Q</strong> = ({deltaQ} / {q1}) × 100 = <strong>{pctQ.toFixed(1)}%</strong></p>
                                <div style={{ marginTop: '15px', fontSize: '1.2rem', color: '#fff' }}>
                                    <strong>Es</strong> = {pctQ.toFixed(1)} / {pctP.toFixed(1)} = <span style={{ color: es > 1 ? '#00ff00' : (es < 1 ? '#ff4444' : '#ffd700') }}>{es}</span>
                                </div>
                                <p style={{ marginTop: '5px', fontStyle: 'italic', color: es > 1 ? '#00ff00' : (es < 1 ? '#ff4444' : '#ffd700') }}>
                                    Conclusion: Supply is {es > 1 ? 'Elastic (>1)' : (es < 1 ? 'Inelastic (<1)' : 'Unitary Elastic (=1)')}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- PROBLEM 2: CONCEPTUAL SCENARIOS --- */}
            <h3 className="section-heading text-center mt-5 mb-4 animate-fadeInUp" style={{ color: '#fff' }}>2. Conceptual Scenarios: Shift or Movement?</h3>
            <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: '1fr 1fr' }}>

                {/* Scenario 1 */}
                <div className="reason-card-interactive cyan" onClick={() => setActiveScenario(activeScenario === 1 ? null : 1)}>
                    <div className="card-header-flex">
                        <div className="card-icon"><FaQuestionCircle /></div>
                        <h4>Scenario A: Tax Hike</h4>
                    </div>
                    <p>Government increases GST on Mobile Phones from 12% to 18%.</p>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>(Click to Reveal)</p>

                    {activeScenario === 1 && (
                        <div style={{ marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px' }}>
                            <strong style={{ color: '#ff4444' }}>Impact: Left Shift (Decrease)</strong>
                            <p style={{ fontSize: '0.9rem' }}>Tax is a cost. Cost rises, profit falls. Supply shifts Left.</p>
                        </div>
                    )}
                </div>

                {/* Scenario 2 */}
                <div className="reason-card-interactive gold" onClick={() => setActiveScenario(activeScenario === 2 ? null : 2)}>
                    <div className="card-header-flex">
                        <div className="card-icon"><FaQuestionCircle /></div>
                        <h4>Scenario B: Price Rise</h4>
                    </div>
                    <p>Market price of Wheat rises from ₹20 to ₹25 per kg.</p>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>(Click to Reveal)</p>

                    {activeScenario === 2 && (
                        <div style={{ marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px' }}>
                            <strong style={{ color: '#ffd700' }}>Impact: Upward Movement (Extension)</strong>
                            <p style={{ fontSize: '0.9rem' }}>Change is due to Own Price. It is an Extension of Supply, not a shift.</p>
                        </div>
                    )}
                </div>

                {/* Scenario 3 */}
                <div className="reason-card-interactive purple" onClick={() => setActiveScenario(activeScenario === 3 ? null : 3)}>
                    <div className="card-header-flex">
                        <div className="card-icon"><FaQuestionCircle /></div>
                        <h4>Scenario C: Tech Boom</h4>
                    </div>
                    <p>Farmers adopt new High Yielding Variety (HYV) seeds.</p>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>(Click to Reveal)</p>

                    {activeScenario === 3 && (
                        <div style={{ marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px' }}>
                            <strong style={{ color: '#00ff00' }}>Impact: Right Shift (Increase)</strong>
                            <p style={{ fontSize: '0.9rem' }}>Technology improves efficiency. Cost falls. Supply shifts Right.</p>
                        </div>
                    )}
                </div>

                {/* Scenario 4 */}
                <div className="reason-card-interactive red" onClick={() => setActiveScenario(activeScenario === 4 ? null : 4)}>
                    <div className="card-header-flex">
                        <div className="card-icon"><FaQuestionCircle /></div>
                        <h4>Scenario D: Input Cost</h4>
                    </div>
                    <p>Wages of laborers increase drastically.</p>
                    <p style={{ fontSize: '0.8rem', color: '#aaa' }}>(Click to Reveal)</p>

                    {activeScenario === 4 && (
                        <div style={{ marginTop: '15px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '10px' }}>
                            <strong style={{ color: '#ff4444' }}>Impact: Left Shift (Decrease)</strong>
                            <p style={{ fontSize: '0.9rem' }}>Input Price (Pi) rises. Cost rises. Supply shifts Left.</p>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default PracticeProblemsSupply;
