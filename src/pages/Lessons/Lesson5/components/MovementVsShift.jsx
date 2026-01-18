import React, { useState } from 'react';
import { FaArrowsAltH, FaExpandArrowsAlt, FaExchangeAlt, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import MovementChart from './MovementChart';
import ShiftChart from './ShiftChart';
import './lesson5.css';

const MovementVsShift = () => {
  const [shiftType, setShiftType] = useState('none'); // for Shift section
  const [moveType, setMoveType] = useState('extension'); // for Movement section

  return (
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 2 - Section 1</span>
        <h2 className="section-title-lesson">Movement vs. Shift</h2>
        <p className="section-subtitle-lesson">Change in Quantity Demanded vs. Change in Demand</p>
      </div>

      {/* Comparison Table */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaExchangeAlt /> The Core Difference</h3>
          <p className="mb-4">It is crucial to distinguish between moving along the same curve and shifting the entire curve.</p>

          <div className="comparison-table-full">
            <div className="table-header-row">
              <div className="header-cell aspect-cell">Aspect</div>
              <div className="header-cell cardinal-header">Movement Along Demand Curve</div>
              <div className="header-cell ordinal-header">Shift in Demand Curve</div>
            </div>

            <div className="table-row-full">
              <div className="table-cell aspect-cell">Technical Name</div>
              <div className="table-cell">Change in <strong>Quantity Demanded</strong></div>
              <div className="table-cell">Change in <strong>Demand</strong></div>
            </div>

            <div className="table-row-full">
              <div className="table-cell aspect-cell">Cause</div>
              <div className="table-cell">Change in <strong>Own Price</strong> (other factors constant)</div>
              <div className="table-cell">Change in <strong>Other Factors</strong> (Price constant)</div>
            </div>

            <div className="table-row-full">
              <div className="table-cell aspect-cell">Graphical Effect</div>
              <div className="table-cell">Upward or Downward movement on <strong>same</strong> curve</div>
              <div className="table-cell">Entire curve moves <strong>Right</strong> or <strong>Left</strong></div>
            </div>
            <div className="table-row-full">
              <div className="table-cell aspect-cell">Types</div>
              <div className="table-cell">Extension & Contraction</div>
              <div className="table-cell">Increase & Decrease</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Movement Section */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-cyan"><FaArrowsAltH /> 1. Movement Along Demand Curve</h3>
          <p>Occurs when <strong>Quantity Demanded</strong> changes due to a change in <strong>Own Price</strong> alone.</p>

          <div className="scenario-buttons mb-3">
            <button
              className={`scenario-btn normal ${moveType === 'extension' ? 'active' : ''}`}
              onClick={() => setMoveType('extension')}
            >
              Expansion (Price ↓)
            </button>
            <button
              className={`scenario-btn high ${moveType === 'contraction' ? 'active' : ''}`}
              onClick={() => setMoveType('contraction')}
            >
              Contraction (Price ↑)
            </button>
          </div>

          <div className="graph-container">
            <h4 className="text-center mb-3">Visualizing Movement (Extension & Contraction)</h4>
            {/* D3 Component */}
            <MovementChart type={moveType} />
            <p className="diagram-caption text-center mt-2">
              {moveType === 'extension'
                ? "Price Falls → Quantity Rises (Downward Movement)"
                : "Price Rises → Quantity Falls (Upward Movement)"}
            </p>
          </div>

          {/* Detailed Movement Table */}
          <div className="mt-4">
            <h4 className="text-center mb-3" style={{ color: '#00ffff' }}>Extension vs Contraction</h4>
            <div className="comparison-table-full">
              <div className="table-header-row" style={{ background: 'linear-gradient(90deg, rgba(0,255,0,0.2), rgba(255,0,0,0.2))' }}>
                <div className="header-cell aspect-cell">Basis</div>
                <div className="header-cell" style={{ color: '#00ff00' }}>Extension of Demand</div>
                <div className="header-cell" style={{ color: '#ff4444' }}>Contraction of Demand</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Cause</div>
                <div className="table-cell">Fall in Price of Commodity</div>
                <div className="table-cell">Rise in Price of Commodity</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Effect</div>
                <div className="table-cell">Quantity Demanded <strong>Rises</strong></div>
                <div className="table-cell">Quantity Demanded <strong>Falls</strong></div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Direction</div>
                <div className="table-cell"><strong>Downward</strong> movement along curve</div>
                <div className="table-cell"><strong>Upward</strong> movement along curve</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Shift Section */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-purple"><FaExpandArrowsAlt /> 2. Shift in Demand Curve</h3>
          <p>
            Occurs when <strong>Demand</strong> changes due to factors <strong>other than price</strong> (e.g., Income, Taste).
          </p>

          <div className="scenario-buttons mb-3">
            <button
              className={`scenario-btn normal ${shiftType === 'none' ? 'active' : ''}`}
              onClick={() => setShiftType('none')}
            >
              Reset
            </button>
            <button
              className={`scenario-btn high ${shiftType === 'right' ? 'active' : ''}`}
              onClick={() => setShiftType('right')}
            >
              Right Shift (Increase) ➡
            </button>
            <button
              className={`scenario-btn low ${shiftType === 'left' ? 'active' : ''}`}
              onClick={() => setShiftType('left')}
            >
              ⬅ Left Shift (Decrease)
            </button>
          </div>

          <div className="graph-container">
            <h4 className="text-center mb-3">Visualizing Shift (Increase & Decrease)</h4>
            {/* D3 Component */}
            <ShiftChart shiftType={shiftType} />
            <p className="diagram-caption text-center mt-2">
              {shiftType === 'right'
                ? "Favorable Change → Demand Increases (Right Shift)"
                : shiftType === 'left'
                  ? "Unfavorable Change → Demand Decreases (Left Shift)"
                  : "Original Demand Curve"}
            </p>
          </div>

          {/* Detailed Shift Table */}
          <div className="mt-4">
            <h4 className="text-center mb-3" style={{ color: '#bf5af2' }}>Increase vs Decrease in Demand</h4>
            <div className="comparison-table-full">
              <div className="table-header-row" style={{ background: 'linear-gradient(90deg, rgba(0,255,0,0.2), rgba(255,0,0,0.2))' }}>
                <div className="header-cell aspect-cell">Basis</div>
                <div className="header-cell" style={{ color: '#00ff00' }}>Increase in Demand</div>
                <div className="header-cell" style={{ color: '#ff4444' }}>Decrease in Demand</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Shift Direction</div>
                <div className="table-cell"><strong>Rightward</strong> Shift</div>
                <div className="table-cell"><strong>Leftward</strong> Shift</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Price Effect</div>
                <div className="table-cell">More purchased at <strong>same price</strong></div>
                <div className="table-cell">Less purchased at <strong>same price</strong></div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Possible Causes</div>
                <div className="table-cell">
                  <ul className="bullet-list-small">
                    <li>Income ↑ (Normal goods)</li>
                    <li>Price of Substitute ↑</li>
                    <li>Favorable Tastes</li>
                  </ul>
                </div>
                <div className="table-cell">
                  <ul className="bullet-list-small">
                    <li>Income ↓ (Normal goods)</li>
                    <li>Price of Substitute ↓</li>
                    <li>Unfavorable Tastes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MovementVsShift;
