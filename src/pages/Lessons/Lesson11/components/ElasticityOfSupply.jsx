import React from 'react';
import { FaPercentage, FaChartLine, FaRulerCombined, FaExpandAlt, FaCompressAlt, FaEquals } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, CartesianGrid, Label } from 'recharts';
import InteractiveElasticityChart from './InteractiveElasticityChart';
import '../../Lesson5/components/lesson5.css';

const ElasticityOfSupply = () => {
    // 1. Inelastic: Steep Curve (Large Price change, Small Qty change)
    const inelasticData = [
        { q: 10, p: 10 },
        { q: 15, p: 50 }, // P rises +40, Q rises +5
    ];

    // 2. Elastic: Flat Curve (Small Price change, Large Qty change)
    const elasticData = [
        { q: 10, p: 10 },
        { q: 50, p: 15 }, // P rises +5, Q rises +40
    ];

    // 3. Unitary: 45 Degree
    const unitaryData = [
        { q: 10, p: 10 },
        { q: 40, p: 40 },
    ];

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 2</span>
                <h2 className="section-title-lesson">Price Elasticity of Supply (Es)</h2>
                <p className="section-subtitle-lesson">Measuring the responsiveness of producers to price changes</p>
            </div>

            {/* DEFINITION & FORMULA */}
            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-gold"><FaExpandAlt /> What is Elasticity?</h3>
                    <p className="introduction-text">
                        The Law of Supply tells us the <em>direction</em> (Price Up → Supply Up). However, <strong>Elasticity of Supply (Es)</strong> tells us the <strong>magnitude</strong> of this change. It measures <em>how much</em> the quantity supplied changes in response to a change in price.
                    </p>

                    <div className="formula-box-animated" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
                        <h4 style={{ color: '#aaa', marginBottom: '1.5rem' }}>Percentage Method Formula</h4>

                        <div className="fraction-formula" style={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            <span className="variable" style={{ color: 'var(--l3-gold)' }}>Es</span>
                            <span className="equals" style={{ margin: '0 15px' }}><FaEquals /></span>
                            <div className="fraction" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span className="numerator" style={{ borderBottom: '3px solid #fff', paddingBottom: '10px', marginBottom: '10px' }}>
                                    % Change in Quantity Supplied (ΔQ)
                                </span>
                                <span className="denominator">
                                    % Change in Price (ΔP)
                                </span>
                            </div>
                        </div>

                        <div className="formula-expansion" style={{ marginTop: '20px', fontSize: '1.1rem', color: '#ccc' }}>
                            <em>or</em> &nbsp; Es = <span style={{ fontFamily: 'Times New Roman, serif', fontStyle: 'italic' }}> (ΔQ / ΔP) × (P / Q) </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* NEW INTERACTIVE SECTION */}
            <h3 className="section-heading text-center mt-5 mb-4 animate-fadeInUp" style={{ color: '#fff' }}>Interact with Elasticity</h3>
            <div className="animate-fadeInUp" style={{ marginBottom: '3rem' }}>
                <InteractiveElasticityChart />
            </div>

            {/* 5 DEGREES GRID */}
            <h3 className="section-heading text-center mt-5 mb-4 animate-fadeInUp" style={{ color: '#fff' }}>The 5 Degrees of Elasticity</h3>

            {/* ROW 1: The Extremes */}
            <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="reason-card-interactive red">
                    <div className="card-header-flex">
                        <div className="card-icon"><FaCompressAlt /></div>
                        <h4>Perfectly Inelastic (Es = 0)</h4>
                    </div>
                    <p>Supply assumes a <strong>Vertical Line</strong> parallel to Y-Axis.</p>
                    <p className="example-text"><strong>Example:</strong> Perishable goods like milk or fish (once caught, supply is fixed daily regardless of price) or Old Paintings.</p>
                    <div className="mini-graph-container">
                        <svg width="100%" height="150" viewBox="0 0 200 150">
                            <line x1="20" y1="130" x2="180" y2="130" stroke="#888" strokeWidth="2" /> {/* X Axis */}
                            <line x1="20" y1="20" x2="20" y2="130" stroke="#888" strokeWidth="2" /> {/* Y Axis */}
                            <line x1="100" y1="20" x2="100" y2="130" stroke="#ff4444" strokeWidth="4" /> {/* Curve */}
                            <text x="110" y="75" fill="#ff4444">Vertical (Es=0)</text>
                        </svg>
                    </div>
                </div>

                <div className="reason-card-interactive green">
                    <div className="card-header-flex">
                        <div className="card-icon"><FaExpandAlt /></div>
                        <h4>Perfectly Elastic (Es = ∞)</h4>
                    </div>
                    <p>Supply assumes a <strong>Horizontal Line</strong> parallel to X-Axis.</p>
                    <p className="example-text"><strong>Example:</strong> Theoretical perfection. Producers are willing to supply infinite amount at a specific price, but notably zero at slightly lower price.</p>
                    <div className="mini-graph-container">
                        <svg width="100%" height="150" viewBox="0 0 200 150">
                            <line x1="20" y1="130" x2="180" y2="130" stroke="#888" strokeWidth="2" /> {/* X Axis */}
                            <line x1="20" y1="20" x2="20" y2="130" stroke="#888" strokeWidth="2" /> {/* Y Axis */}
                            <line x1="20" y1="75" x2="180" y2="75" stroke="#00ff00" strokeWidth="4" /> {/* Curve */}
                            <text x="70" y="65" fill="#00ff00">Horizontal (Es=∞)</text>
                        </svg>
                    </div>
                </div>
            </div>

            {/* ROW 2: The Realistic Ones */}
            <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: '20px' }}>

                {/* Inelastic */}
                <div className="reason-card-interactive red">
                    <h5>Inelastic (Es &lt; 1)</h5>
                    <p className="subtitle-sm">Steep Curve</p>
                    <p className="desc-sm">Quantity responds <strong>less</strong> proportionally to price.</p>
                    <div className="graph-box">
                        <ResponsiveContainer width="100%" height={120}>
                            <LineChart data={inelasticData}>
                                <XAxis dataKey="q" domain={[0, 60]} hide />
                                <YAxis dataKey="p" domain={[0, 60]} hide />
                                <Line type="monotone" dataKey="p" stroke="#ff4444" strokeWidth={3} dot={{ r: 3 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="caption-sm">Price rises significantly (10→50), Output barely moves (10→15).</p>
                </div>

                {/* Unitary */}
                <div className="reason-card-interactive gold">
                    <h5>Unitary (Es = 1)</h5>
                    <p className="subtitle-sm">45° Line</p>
                    <p className="desc-sm">Change in Q starts from origin.</p>
                    <div className="graph-box">
                        <ResponsiveContainer width="100%" height={120}>
                            <LineChart data={unitaryData}>
                                <XAxis dataKey="q" domain={[0, 60]} hide />
                                <YAxis dataKey="p" domain={[0, 60]} hide />
                                <Line type="monotone" dataKey="p" stroke="#ffd700" strokeWidth={3} dot={{ r: 3 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="caption-sm">Straight line from Origin.</p>
                </div>

                {/* Elastic */}
                <div className="reason-card-interactive green">
                    <h5>Elastic (Es &gt; 1)</h5>
                    <p className="subtitle-sm">Flat Curve</p>
                    <p className="desc-sm">Quantity responds <strong>more</strong> proportionally.</p>
                    <div className="graph-box">
                        <ResponsiveContainer width="100%" height={120}>
                            <LineChart data={elasticData}>
                                <XAxis dataKey="q" domain={[0, 60]} hide />
                                <YAxis dataKey="p" domain={[0, 60]} hide />
                                <Line type="monotone" dataKey="p" stroke="#00ff00" strokeWidth={3} dot={{ r: 3 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="caption-sm">Price rises slightly (10→15), Output booms (10→50).</p>
                </div>

            </div>

        </div>
    );
};

export default ElasticityOfSupply;
