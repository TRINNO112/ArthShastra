import React, { useState } from 'react';
import { FaArrowsAltH, FaExpandArrowsAlt, FaExchangeAlt, FaArrowUp, FaArrowDown, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import MovementChart from './MovementChart';
import ShiftChart from './ShiftChart';
import '../lesson5-comic.css';

const MovementVsShift = () => {
  const [shiftType, setShiftType] = useState('none');
  const [moveType, setMoveType] = useState('extension');

  return (
    <div className="comic-page">
      {/* Header - Same style as League of Determinants */}
      <div className="comic-panel" style={{ textAlign: 'center', background: 'var(--comic-paper)' }}>
        <div className="caption-box" style={{ left: '50%', transform: 'translateX(-50%)', top: '-25px' }}>ISSUE #4</div>
        <h2 className="comic-header-lg" style={{ fontSize: '3rem', margin: '2rem 0 1rem 0' }}>
          MOVEMENT vs. SHIFT
        </h2>
        <p className="comic-text" style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          Two different types of changes... Don't confuse them!
        </p>
      </div>

      {/* Core Difference Table */}
      <div className="comic-panel" style={{ borderColor: '#ffd700', boxShadow: '10px 10px 0 #b8860b' }}>
        <div className="caption-box" style={{ background: '#ffd700', color: 'black' }}><FaExchangeAlt /> THE DIFFERENCE</div>
        <h3 className="comic-header-md">MOVEMENT vs. SHIFT</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', border: '3px solid black', marginTop: '1rem' }}>
          <thead style={{ background: 'black', color: 'white' }}>
            <tr>
              <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>ASPECT</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)', background: '#00ffff', color: 'black' }}>MOVEMENT</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)', background: '#bf5af2', color: 'white' }}>SHIFT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { aspect: 'Technical Name', movement: 'Change in Quantity Demanded', shift: 'Change in Demand' },
              { aspect: 'Cause', movement: 'Change in OWN PRICE only', shift: 'Change in OTHER factors' },
              { aspect: 'Graph Effect', movement: 'Move along the SAME curve', shift: 'Entire curve moves LEFT/RIGHT' },
              { aspect: 'Types', movement: 'Extension & Contraction', shift: 'Increase & Decrease' }
            ].map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#f5f5f5' : 'white', borderBottom: '1px solid black' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', background: '#333', color: 'white' }}>{row.aspect}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>{row.movement}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>{row.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Movement Section */}
      <div className="comic-panel" style={{ borderColor: '#00ffff', boxShadow: '10px 10px 0 #008b8b' }}>
        <div className="caption-box" style={{ background: '#00ffff', color: 'black' }}><FaArrowsAltH /> SCENARIO 1</div>
        <h3 className="comic-header-md">MOVEMENT ALONG THE CURVE</h3>
        <p className="comic-text">When only the <strong>OWN PRICE</strong> changes, you MOVE along the same curve.</p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <button
            className={`comic-btn ${moveType === 'extension' ? 'primary' : 'secondary'}`}
            onClick={() => setMoveType('extension')}
            style={{ flex: 1, minWidth: '150px', background: moveType === 'extension' ? '#00aa00' : undefined }}
          >
            <FaArrowDown /> EXTENSION (Price Down)
          </button>
          <button
            className={`comic-btn ${moveType === 'contraction' ? 'primary' : 'secondary'}`}
            onClick={() => setMoveType('contraction')}
            style={{ flex: 1, minWidth: '150px', background: moveType === 'contraction' ? '#cc0000' : undefined }}
          >
            <FaArrowUp /> CONTRACTION (Price Up)
          </button>
        </div>

        {/* Darker Graph Container */}
        <div style={{ background: '#1a1a2e', border: '3px solid #00ffff', borderRadius: '10px', padding: '1rem' }}>
          <MovementChart type={moveType} />
          <div style={{ marginTop: '1rem', background: moveType === 'extension' ? '#00aa00' : '#cc0000', color: 'white', padding: '10px', textAlign: 'center', border: '2px solid black' }}>
            <p className="comic-text" style={{ margin: 0, fontStyle: 'italic' }}>
              {moveType === 'extension'
                ? '"Price FALLS → Quantity RISES! Downward movement."'
                : '"Price RISES → Quantity FALLS! Upward movement."'}
            </p>
          </div>
        </div>

        {/* Extension vs Contraction Cards */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-comic-title)', textAlign: 'center', marginBottom: '1rem', letterSpacing: '2px', fontSize: '1.4rem' }}>EXTENSION vs CONTRACTION</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #00aa00', boxShadow: '6px 6px 0 rgba(0,0,0,0.2)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ background: '#00aa00', padding: '8px', borderRadius: '50%' }}>
                  <FaArrowDown size={20} color="white" />
                </div>
                <h5 style={{ color: '#006400', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>EXTENSION</h5>
              </div>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li><strong>Cause:</strong> Price Falls</li>
                <li><strong>Effect:</strong> Quantity Rises</li>
                <li><strong>Direction:</strong> Downward on curve</li>
              </ul>
            </div>
            <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #cc0000', boxShadow: '6px 6px 0 rgba(0,0,0,0.2)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ background: '#cc0000', padding: '8px', borderRadius: '50%' }}>
                  <FaArrowUp size={20} color="white" />
                </div>
                <h5 style={{ color: '#8b0000', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>CONTRACTION</h5>
              </div>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li><strong>Cause:</strong> Price Rises</li>
                <li><strong>Effect:</strong> Quantity Falls</li>
                <li><strong>Direction:</strong> Upward on curve</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Shift Section */}
      <div className="comic-panel" style={{ borderColor: '#bf5af2', boxShadow: '10px 10px 0 #6a0dad' }}>
        <div className="caption-box" style={{ background: '#bf5af2', color: 'white' }}><FaExpandArrowsAlt /> SCENARIO 2</div>
        <h3 className="comic-header-md">SHIFT IN THE CURVE</h3>
        <p className="comic-text">When factors <strong>OTHER THAN PRICE</strong> change, the WHOLE curve shifts!</p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <button
            className={`comic-btn ${shiftType === 'none' ? 'secondary' : ''}`}
            onClick={() => setShiftType('none')}
            style={{ flex: 1, minWidth: '100px' }}
          >
            <FaExchangeAlt /> RESET
          </button>
          <button
            className={`comic-btn ${shiftType === 'right' ? 'primary' : 'secondary'}`}
            onClick={() => setShiftType('right')}
            style={{ flex: 1, minWidth: '100px', background: shiftType === 'right' ? '#00aa00' : undefined }}
          >
            <FaArrowRight /> RIGHT (Increase)
          </button>
          <button
            className={`comic-btn ${shiftType === 'left' ? 'primary' : 'secondary'}`}
            onClick={() => setShiftType('left')}
            style={{ flex: 1, minWidth: '100px', background: shiftType === 'left' ? '#cc0000' : undefined }}
          >
            <FaArrowLeft /> LEFT (Decrease)
          </button>
        </div>

        {/* Darker Graph Container */}
        <div style={{ background: '#1a1a2e', border: '3px solid #bf5af2', borderRadius: '10px', padding: '1rem' }}>
          <ShiftChart shiftType={shiftType} />
          <div style={{ marginTop: '1rem', background: '#bf5af2', color: 'white', padding: '10px', textAlign: 'center', border: '2px solid black' }}>
            <p className="comic-text" style={{ margin: 0, fontStyle: 'italic' }}>
              {shiftType === 'right'
                ? '"Favorable change → More demand at SAME price! Curve shifts RIGHT."'
                : shiftType === 'left'
                  ? '"Unfavorable change → Less demand at SAME price! Curve shifts LEFT."'
                  : '"Original demand curve position."'}
            </p>
          </div>
        </div>

        {/* Increase vs Decrease Cards */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-comic-title)', textAlign: 'center', marginBottom: '1rem', letterSpacing: '2px', fontSize: '1.4rem' }}>INCREASE vs DECREASE IN DEMAND</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #00aa00', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ background: '#00aa00', padding: '8px', borderRadius: '50%' }}>
                  <FaArrowRight size={20} color="white" />
                </div>
                <h5 style={{ color: '#006400', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>INCREASE (Right Shift)</h5>
              </div>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li>Income ↑ (Normal goods)</li>
                <li>Price of Substitute ↑</li>
                <li>Favorable Tastes</li>
                <li>Expected Price Rise</li>
              </ul>
            </div>
            <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #cc0000', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ background: '#cc0000', padding: '8px', borderRadius: '50%' }}>
                  <FaArrowLeft size={20} color="white" />
                </div>
                <h5 style={{ color: '#8b0000', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>DECREASE (Left Shift)</h5>
              </div>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li>Income ↓ (Normal goods)</li>
                <li>Price of Substitute ↓</li>
                <li>Unfavorable Tastes</li>
                <li>Expected Price Fall</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="comic-panel" style={{ background: '#f5f5f5', borderColor: '#333' }}>
        <div className="caption-box" style={{ background: '#333', color: 'white' }}>QUICK RECAP</div>
        <h3 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>REMEMBER THIS!</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: '#e0ffff', border: '3px solid #008b8b', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
              <FaArrowsAltH size={24} color="#008b8b" />
              <h4 style={{ fontFamily: 'var(--font-comic-title)', margin: 0, color: '#008b8b', letterSpacing: '2px', fontSize: '1.3rem' }}>MOVEMENT</h4>
            </div>
            <p style={{ fontWeight: 'bold', margin: 0 }}>Price changes → Move on SAME curve</p>
          </div>
          <div style={{ background: '#f0e0ff', border: '3px solid #6a0dad', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
              <FaExpandArrowsAlt size={24} color="#6a0dad" />
              <h4 style={{ fontFamily: 'var(--font-comic-title)', margin: 0, color: '#6a0dad', letterSpacing: '2px', fontSize: '1.3rem' }}>SHIFT</h4>
            </div>
            <p style={{ fontWeight: 'bold', margin: 0 }}>Other factors change → WHOLE curve moves</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovementVsShift;
