import React from 'react';
import { FaProjectDiagram, FaArrowUp, FaArrowDown, FaEquals } from 'react-icons/fa';
import RelationGraph from './RelationGraph';
import './component.css';

const CostRelationships = () => {
    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Chapter 8</span>
                <h2 className="section-title-lesson">Cost Relationships</h2>
                <p className="section-subtitle-lesson">Analyze how AC, MC, and TC interact with each other.</p>
            </div>

            <div className="content-card featured-card">
                <div className="card-glow"></div>
                <div className="card-content">
                    <h3 className="card-title">
                        <FaProjectDiagram className="title-icon gold" /> Key Relationships
                    </h3>
                    <p className="intro-text">
                        Understanding the mathematical and geometric links between different cost curves is crucial for Microeconomics.
                    </p>
                </div>
            </div>

            {/* AC and MC Relationship */}
            <div className="content-card">
                <h4 className="highlight-green" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Relationship between AC and MC
                </h4>

                <div className="relationship-layout" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <RelationGraph type="ac-mc" />
                    </div>

                    <div className="relationship-text" style={{ width: '100%' }}>
                        <div className="practice-card" style={{ borderLeft: '4px solid #00ff88', marginBottom: '10px' }}>
                            <p><strong>1. When MC {'<'} AC, AC falls</strong></p>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>The marginal unit is cheaper, pulling the average down.</p>
                        </div>
                        <div className="practice-card" style={{ borderLeft: '4px solid #ffd700', marginBottom: '10px' }}>
                            <p><strong>2. When MC = AC, AC is Minimum</strong></p>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>MC curve cuts the AC curve from below at its lowest point.</p>
                        </div>
                        <div className="practice-card" style={{ borderLeft: '4px solid #ff6b6b' }}>
                            <p><strong>3. When MC {'>'} AC, AC rises</strong></p>
                            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>The marginal unit is expensive, pulling the average up.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* TC and MC Relationship */}
            <div className="content-card" style={{ marginTop: '30px' }}>
                <h4 className="highlight-cyan" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    Relationship between TC and MC
                </h4>

                <div className="relationship-layout" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <RelationGraph type="tc-mc" />
                    </div>

                    <div className="intro-grid" style={{ width: '100%' }}>
                        <div className="intro-card">
                            <div style={{ color: '#00bfff', fontWeight: 'bold', marginBottom: '5px' }}>Phase 1</div>
                            <p>TC increases at a <strong>diminishing rate</strong>.</p>
                            <div style={{ fontSize: '0.9rem', color: '#888' }}>MC implies falling</div>
                        </div>
                        <div className="intro-card">
                            <div style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '5px' }}>Phase 2</div>
                            <p>TC increases at an <strong>increasing rate</strong>.</p>
                            <div style={{ fontSize: '0.9rem', color: '#888' }}>MC implies rising</div>
                        </div>
                    </div>
                </div>

                <div className="solution-box" style={{ marginTop: '20px' }}>
                    <strong>Note:</strong> MC is the slope of the TC curve.
                </div>
            </div>

            {/* AC and AVC Relationship */}
            <div className="content-card" style={{ marginTop: '30px' }}>
                <h4 className="highlight-gold" style={{ textAlign: 'center', marginBottom: '20px' }}>
                    AC and AVC
                </h4>
                <ul className="bullet-list" style={{ color: '#ddd' }}>
                    <li style={{ marginBottom: '10px' }}><strong>Both are U-shaped</strong> due to the Law of Variable Proportions.</li>
                    <li style={{ marginBottom: '10px' }}><strong>Vertical distance decreases</strong> as output increases (because AFC falls).</li>
                    <li style={{ marginBottom: '10px' }}><strong>They never touch</strong> because AFC is never zero.</li>
                </ul>
            </div>

        </section>
    );
};

export default CostRelationships;
