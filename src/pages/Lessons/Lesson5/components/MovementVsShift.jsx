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
             <h4 className="text-center mb-3">Visualizing Movement</h4>
             <ResponsiveContainer width="100%" height={300}>
                <LineChart data={MOVEMENT_DATA} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)"/>
                  <XAxis dataKey="quantity" type="number" stroke="#fff">
                    <Label value="Quantity" position="bottom" fill="#fff"/>
                  </XAxis>
                  <YAxis dataKey="price" type="number" stroke="#fff">
                    <Label value="Price" angle={-90} position="left" fill="#fff"/>
                  </YAxis>
                  <Tooltip contentStyle={{backgroundColor: '#1a1a1a', border: '1px solid #fff'}}/>
                  <Line type="monotone" dataKey="price" stroke="#00d4ff" strokeWidth={3} dot={{r:5}} activeDot={{r:8}}/>
                  {/* Arrows for movement annotation would be complex in pure recharts, using text description below */}
                </LineChart>
             </ResponsiveContainer>
             <p className="text-center small-text">A to B (Down) = Extension. B to A (Up) = Contraction.</p>
          </div>
        </div>
      </div>

      {/* Interactive Shift Section */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-purple"><FaExpandArrowsAlt /> 2. Shift in Demand Curve</h3>
          <p>Caused by factors OTHER than Price (Income, Tastes, Price of Related Goods, etc.). Price remains constant.</p>

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
             <ResponsiveContainer width="100%" height={300}>
                <LineChart data={SHIFT_DATA} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)"/>
                  <XAxis type="number" domain={[0, 70]} stroke="#fff">
                    <Label value="Quantity" position="bottom" fill="#fff"/>
                  </XAxis>
                  <YAxis dataKey="price" type="number" stroke="#fff">
                    <Label value="Price" angle={-90} position="left" fill="#fff"/>
                  </YAxis>
                  <Tooltip contentStyle={{backgroundColor: '#1a1a1a', border: '1px solid #fff'}}/>

                  {/* Original Curve */}
                  <Line type="monotone" dataKey="q_d1" name="Original Demand (D1)" stroke="#fff" strokeWidth={3} dot={false} strokeOpacity={0.5}/>

                  {/* Shifted Curves */}
                  {shiftType === 'right' && (
                    <Line type="monotone" dataKey="q_d2" name="Increased Demand (D2)" stroke="#00ff00" strokeWidth={3} dot={false}/>
                  )}
                  {shiftType === 'left' && (
                    <Line type="monotone" dataKey="q_d3" name="Decreased Demand (D3)" stroke="#ff4444" strokeWidth={3} dot={false}/>
                  )}
                </LineChart>
             </ResponsiveContainer>
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
