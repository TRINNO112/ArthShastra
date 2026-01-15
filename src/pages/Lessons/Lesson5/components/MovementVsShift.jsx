import React, { useState } from 'react';
import { FaArrowsAltH, FaExpandArrowsAlt, FaChartLine, FaExchangeAlt } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ReferenceLine, Area } from 'recharts';
import './lesson5.css';

const MOVEMENT_DATA = [
  { price: 5, quantity: 10 },
  { price: 4, quantity: 20 },
  { price: 3, quantity: 30 },
  { price: 2, quantity: 40 },
  { price: 1, quantity: 50 },
];

const SHIFT_DATA = [
  { price: 5, q_d1: 10, q_d2: 20, q_d3: 5 },
  { price: 4, q_d1: 20, q_d2: 30, q_d3: 15 },
  { price: 3, q_d1: 30, q_d2: 40, q_d3: 25 },
  { price: 2, q_d1: 40, q_d2: 50, q_d3: 35 },
  { price: 1, q_d1: 50, q_d2: 60, q_d3: 45 },
];

const MovementVsShift = () => {
  const [shiftType, setShiftType] = useState('none'); // none, right, left

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
          <p className="mb-4">It is crucial to distinguish between movement along the same curve and a shift of the entire curve.</p>

          <div className="comparison-table-full">
            <div className="table-header-row">
              <div className="header-cell aspect-cell">Aspect</div>
              <div className="header-cell cardinal-header">Movement Along Demand Curve</div>
              <div className="header-cell ordinal-header">Shift in Demand Curve</div>
            </div>

            <div className="table-row-full">
              <div className="table-cell aspect-cell">Technical Name</div>
              <div className="table-cell">Change in Quantity Demanded</div>
              <div className="table-cell">Change in Demand</div>
            </div>

            <div className="table-row-full">
              <div className="table-cell aspect-cell">Cause</div>
              <div className="table-cell">Change in <strong>Own Price</strong> of commodity</div>
              <div className="table-cell">Change in <strong>Other Factors</strong> (Income, Tastes, etc.)</div>
            </div>

            <div className="table-row-full">
              <div className="table-cell aspect-cell">Price Status</div>
              <div className="table-cell text-gold">Price Changes</div>
              <div className="table-cell text-gold">Price Remains Constant</div>
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
          <p>Caused ONLY by change in Own Price. Other factors are constant.</p>

          <div className="comparison-container">
             <div className="column">
                <h4 className="text-green">Extension of Demand</h4>
                <ul className="bullet-list">
                   <li>Price Falls ⬇</li>
                   <li>Quantity Rises ⬆</li>
                   <li><strong>Downward Movement</strong> along the curve.</li>
                </ul>
             </div>
             <div className="column">
                <h4 className="text-red">Contraction of Demand</h4>
                <ul className="bullet-list">
                   <li>Price Rises ⬆</li>
                   <li>Quantity Falls ⬇</li>
                   <li><strong>Upward Movement</strong> along the curve.</li>
                </ul>
             </div>
          </div>

          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
             <h4 className="text-center mb-3">Visualizing Movement (Extension & Contraction)</h4>
             <div style={{ width: '100%', height: '350px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 300" style={{ overflow: 'visible' }}>
                  {/* Grid Lines */}
                  <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                    {[50, 100, 150, 200, 250].map(y => <line key={y} x1="50" y1={y} x2="350" y2={y} />)}
                    {[100, 150, 200, 250, 300].map(x => <line key={x} x1={x} y1="20" x2={x} y2="270" />)}
                  </g>

                  {/* Axes */}
                  <line x1="50" y1="270" x2="350" y2="270" stroke="#fff" strokeWidth="2" /> {/* X Axis */}
                  <line x1="50" y1="20" x2="50" y2="270" stroke="#fff" strokeWidth="2" />   {/* Y Axis */}

                  {/* Axis Labels */}
                  <text x="200" y="295" fill="#fff" textAnchor="middle" fontSize="14">Quantity Demanded (Units)</text>
                  <text x="20" y="150" fill="#fff" textAnchor="middle" transform="rotate(-90, 20, 150)" fontSize="14">Price (₹)</text>

                  {/* Demand Curve */}
                  <path d="M 100 220 L 300 70" stroke="#00d4ff" strokeWidth="3" fill="none" />

                  {/* Point A (Higher Price) */}
                  <circle cx="233" cy="120" r="5" fill="#ffd700" />
                  <text x="245" y="115" fill="#ffd700" fontSize="16" fontWeight="bold">A</text>
                  <line x1="233" y1="120" x2="233" y2="270" stroke="#ffd700" strokeDasharray="4 4" />
                  <line x1="50" y1="120" x2="233" y2="120" stroke="#ffd700" strokeDasharray="4 4" />

                  {/* Point B (Lower Price) */}
                  <circle cx="166" cy="170" r="5" fill="#ffd700" />
                  <text x="145" y="180" fill="#ffd700" fontSize="16" fontWeight="bold">B</text>
                  <line x1="166" y1="170" x2="166" y2="270" stroke="#ffd700" strokeDasharray="4 4" />
                  <line x1="50" y1="170" x2="166" y2="170" stroke="#ffd700" strokeDasharray="4 4" />

                  {/* Movement Arrows (Semicircle/Curved) */}
                  {/* Contraction (B to A) - Upward Arrow */}
                  <path d="M 175 160 Q 200 135 220 130" stroke="#ff4444" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-red)" />

                  {/* Extension (A to B) - Downward Arrow */}
                  <path d="M 225 140 Q 200 155 180 165" stroke="#00ff00" strokeWidth="2" fill="none" markerEnd="url(#arrowhead-green)" />

                  {/* Defs for Markers */}
                  <defs>
                    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#ff4444" />
                    </marker>
                    <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00ff00" />
                    </marker>
                  </defs>

                </svg>
             </div>

             <div className="diagram-caption text-center" style={{marginTop: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px'}}>
               <p style={{marginBottom: '0.5rem'}}><strong style={{color: '#ffd700'}}>Movement Along Curve</strong></p>
               <div style={{display: 'flex', justifyContent: 'center', gap: '2rem'}}>
                 <span style={{color: '#00ff00'}}>⬇ Extension (Price ↓, Qty ↑)</span>
                 <span style={{color: '#ff4444'}}>⬆ Contraction (Price ↑, Qty ↓)</span>
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
            A <strong>shift</strong> in the demand curve occurs when <strong>factors other than price</strong> change (like income, tastes, or prices of related goods).
            Unlike movement (which is along the same curve), a shift creates a <strong>completely new demand curve</strong>.
            The price remains constant at the time of the shift, but consumers are willing to buy more or less at that same price.
          </p>

          <div className="scenario-buttons">
              <button
                className={`scenario-btn normal ${shiftType === 'none' ? 'active' : ''}`}
                onClick={() => setShiftType('none')}
              >
                Original Demand
              </button>
              <button
                className={`scenario-btn high ${shiftType === 'right' ? 'active' : ''}`}
                onClick={() => setShiftType('right')}
              >
                Rightward Shift (Increase) ➡
              </button>
              <button
                className={`scenario-btn low ${shiftType === 'left' ? 'active' : ''}`}
                onClick={() => setShiftType('left')}
              >
                ⬅ Leftward Shift (Decrease)
              </button>
          </div>

          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', margin: '1.5rem 0' }}>
             <div style={{ width: '100%', height: '350px', position: 'relative' }}>
                <svg width="100%" height="100%" viewBox="0 0 400 300" style={{ overflow: 'visible' }}>
                  {/* Grid Lines */}
                  <g stroke="rgba(255,255,255,0.1)" strokeWidth="1">
                    {[50, 100, 150, 200, 250].map(y => <line key={y} x1="50" y1={y} x2="350" y2={y} />)}
                    {[100, 150, 200, 250, 300].map(x => <line key={x} x1={x} y1="20" x2={x} y2="270" />)}
                  </g>

                   {/* Axes */}
                  <line x1="50" y1="270" x2="350" y2="270" stroke="#fff" strokeWidth="2" /> {/* X Axis */}
                  <line x1="50" y1="20" x2="50" y2="270" stroke="#fff" strokeWidth="2" />   {/* Y Axis */}

                  {/* Axis Labels */}
                  <text x="200" y="295" fill="#fff" textAnchor="middle" fontSize="14">Quantity Demanded (Units)</text>
                  <text x="20" y="150" fill="#fff" textAnchor="middle" transform="rotate(-90, 20, 150)" fontSize="14">Price (₹)</text>


                  {/* Original Curve D1 (Center) */}
                  <path d="M 120 220 L 280 60" stroke="#fff" strokeWidth="3" strokeDasharray={shiftType !== 'none' ? "5 5" : "0"} strokeOpacity={shiftType !== 'none' ? 0.5 : 1} fill="none" />
                  <text x="285" y="55" fill="#fff" fontSize="14" fontWeight="bold">D1</text>

                  {/* Right Shift D2 (Green) */}
                  <path d="M 170 220 L 330 60" stroke="#00ff00" strokeWidth="4" fill="none" opacity={shiftType === 'right' ? 1 : 0} style={{ transition: 'opacity 0.5s ease' }} />
                  {shiftType === 'right' && <text x="335" y="55" fill="#00ff00" fontSize="14" fontWeight="bold">D2 (Right)</text>}

                  {/* Right Shift Arrow */}
                   <line x1="200" y1="140" x2="240" y2="140" stroke="#00ff00" strokeWidth="2" markerEnd="url(#arrowhead-green)" opacity={shiftType === 'right' ? 1 : 0} />


                  {/* Left Shift D3 (Red) */}
                  <path d="M 70 220 L 230 60" stroke="#ff4444" strokeWidth="4" fill="none" opacity={shiftType === 'left' ? 1 : 0} style={{ transition: 'opacity 0.5s ease' }} />
                  {shiftType === 'left' && <text x="235" y="55" fill="#ff4444" fontSize="14" fontWeight="bold">D3 (Left)</text>}

                  {/* Left Shift Arrow */}
                  <line x1="200" y1="140" x2="160" y2="140" stroke="#ff4444" strokeWidth="2" markerEnd="url(#arrowhead-red)" opacity={shiftType === 'left' ? 1 : 0} />

                </svg>
             </div>

             <div className="expanded-text-section">
                {shiftType === 'none' && <p>Select a shift type above to see changes.</p>}
                {shiftType === 'right' && (
                  <div>
                    <h4 className="text-green">Increase in Demand (Rightward Shift)</h4>
                    <p>Caused by:</p>
                    <ul className="bullet-list">
                      <li>Increase in Income (Normal Goods)</li>
                      <li>Rise in Price of Substitute</li>
                      <li>Favorable Taste Change</li>
                    </ul>
                  </div>
                )}
                {shiftType === 'left' && (
                  <div>
                    <h4 className="text-red">Decrease in Demand (Leftward Shift)</h4>
                    <p>Caused by:</p>
                    <ul className="bullet-list">
                      <li>Decrease in Income (Normal Goods)</li>
                      <li>Fall in Price of Substitute</li>
                      <li>Unfavorable Taste Change</li>
                    </ul>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MovementVsShift;
