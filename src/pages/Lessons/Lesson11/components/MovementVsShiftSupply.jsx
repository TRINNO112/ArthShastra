import React, { useState } from 'react';
import { FaArrowsAltH, FaExpandArrowsAlt, FaExchangeAlt } from 'react-icons/fa';
import SupplyMovementChart from './SupplyMovementChart';
import SupplyShiftChart from './SupplyShiftChart';
import '../../Lesson5/components/lesson5.css';

const MovementVsShiftSupply = () => {
    const [shiftType, setShiftType] = useState('none');
    const [moveType, setMoveType] = useState('extension');

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 2 - Section 1</span>
                <h2 className="section-title-lesson animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Movement vs. Shift (Supply)</h2>
                <p className="section-subtitle-lesson animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Change in Quantity Supplied vs. Change in Supply</p>
            </div>

            {/* Comparison Table */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.3s' }}>
                <div className="card-glow"></div>
                <div className="card-content">
                    <h3 className="highlight-gold animate-fadeInLeft"><FaExchangeAlt /> The Core Difference</h3>
                    <p className="mb-4" style={{ color: '#aaa' }}>It is crucial to distinguish between moving along the same curve and shifting the entire curve.</p>

                    <div className="comparison-table-full animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                        <div className="table-header-row" style={{ background: 'linear-gradient(90deg, rgba(255,165,0,0.2), rgba(0,255,255,0.2))' }}>
                            <div className="header-cell aspect-cell" style={{ color: '#fff' }}>Aspect</div>
                            <div className="header-cell cardinal-header" style={{ color: '#ffd700' }}>Movement Along Supply Curve</div>
                            <div className="header-cell ordinal-header" style={{ color: '#00ffff' }}>Shift in Supply Curve</div>
                        </div>

                        <div className="table-row-full hover-row">
                            <div className="table-cell aspect-cell">Technical Name</div>
                            <div className="table-cell">Change in <strong className="highlight-text">Quantity Supplied</strong></div>
                            <div className="table-cell">Change in <strong className="highlight-text">Supply</strong></div>
                        </div>

                        <div className="table-row-full hover-row">
                            <div className="table-cell aspect-cell">Cause</div>
                            <div className="table-cell">Change in <strong className="highlight-text">Own Price</strong> (other factors constant)</div>
                            <div className="table-cell">Change in <strong className="highlight-text">Other Factors</strong> (Price constant)</div>
                        </div>

                        <div className="table-row-full hover-row">
                            <div className="table-cell aspect-cell">Graphical Effect</div>
                            <div className="table-cell">Upward or Downward movement on <strong>same</strong> curve</div>
                            <div className="table-cell">Entire curve moves <strong>Right</strong> or <strong>Left</strong></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Movement Section */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.5s', borderLeft: '4px solid #ffd700' }}>
                <div className="card-content">
                    <h3 className="highlight-text animate-fadeInLeft" style={{ color: '#ffd700' }}><FaArrowsAltH /> 1. Movement Along Supply Curve</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Occurs when Quantity Supplied changes due to <strong>Own Price</strong> alone.</p>

                    <div className="scenario-buttons mb-3 container-center">
                        <button className={`scenario-btn normal ${moveType === 'extension' ? 'active-gold' : ''}`} onClick={() => setMoveType('extension')} style={{ minWidth: '200px' }}>
                            Expansion (Price ↑)
                        </button>
                        <button className={`scenario-btn high ${moveType === 'contraction' ? 'active-red' : ''}`} onClick={() => setMoveType('contraction')} style={{ minWidth: '200px' }}>
                            Contraction (Price ↓)
                        </button>
                    </div>

                    <div className="graph-container animate-scaleIn" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1rem' }}>
                        <h4 className="text-center mb-3" style={{ color: '#fff' }}>Visualizing Movement</h4>
                        <SupplyMovementChart type={moveType} />
                        <div className="diagram-caption text-center mt-2" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                            {moveType === 'extension'
                                ? <span style={{ color: '#00ff00' }}>Price Rises → Quantity Rises (Upward Movement)</span>
                                : <span style={{ color: '#ff4444' }}>Price Falls → Quantity Falls (Downward Movement)</span>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Shift Section */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.6s', borderLeft: '4px solid #00ffff' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan animate-fadeInLeft"><FaExpandArrowsAlt /> 2. Shift in Supply Curve</h3>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Occurs when Supply changes due to factors <strong>other than price</strong> (e.g., Tech, Inputs).</p>

                    <div className="scenario-buttons mb-3 container-center">
                        <button className={`scenario-btn normal ${shiftType === 'none' ? 'active' : ''}`} onClick={() => setShiftType('none')}>Reset</button>
                        <button className={`scenario-btn high ${shiftType === 'right' ? 'active-green' : ''}`} onClick={() => setShiftType('right')}>Right Shift (Increase) ➡</button>
                        <button className={`scenario-btn low ${shiftType === 'left' ? 'active-red' : ''}`} onClick={() => setShiftType('left')}>⬅ Left Shift (Decrease)</button>
                    </div>

                    <div className="graph-container animate-scaleIn" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1rem' }}>
                        <h4 className="text-center mb-3" style={{ color: '#fff' }}>Visualizing Shift</h4>
                        <SupplyShiftChart shiftType={shiftType} />
                        <div className="diagram-caption text-center mt-2" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px' }}>
                            {shiftType === 'right'
                                ? <span style={{ color: '#00ff00' }}>Favorable Change (e.g., Better Tech) → Supply Increases (Right Shift)</span>
                                : shiftType === 'left'
                                    ? <span style={{ color: '#ff4444' }}>Unfavorable Change (e.g., Higher Tax) → Supply Decreases (Left Shift)</span>
                                    : <span style={{ color: '#aaa' }}>Original Supply Curve</span>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovementVsShiftSupply;
