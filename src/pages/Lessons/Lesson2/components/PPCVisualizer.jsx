// PPCVisualizer.jsx - Interactive PPC Graph Component
import { useState } from 'react';
import { FaSync, FaArrowRight, FaArrowUp, FaInfoCircle } from 'react-icons/fa';

function PPCVisualizer() {
  const [scenario, setScenario] = useState('normal'); // normal, shift-right, shift-left, rotate-x, rotate-y

  // Graph boundaries - keeping everything within viewBox
  const MARGIN = 60;
  const MAX_X = 340;
  const MAX_Y = 340;
  const MIN_X = MARGIN;
  const MIN_Y = MARGIN;

  // Create a proper concave PPC curve using cubic bezier
  // A concave curve bows away from the origin, showing increasing opportunity cost
  const getPPCPath = (startX, startY, endX, endY) => {
    // Control points for a realistic concave curve
    const cp1x = startX;
    const cp1y = startY + (endY - startY) * 0.6;
    const cp2x = startX + (endX - startX) * 0.6;
    const cp2y = endY;

    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  };

  const getPath = () => {
    switch (scenario) {
      case 'shift-right':
        // Rightward shift - growth in both goods, staying within bounds
        return getPPCPath(MIN_Y - 10, MIN_X - 10, MAX_X + 10, MAX_Y + 10);
      case 'shift-left':
        // Leftward shift - reduction in resources, staying within bounds
        return getPPCPath(MIN_Y + 30, MIN_X + 30, MAX_X - 30, MAX_Y - 30);
      case 'rotate-x':
        // X-axis rotation - more Good X production capacity
        return getPPCPath(MIN_Y, MIN_X, MAX_X + 20, MAX_Y);
      case 'rotate-y':
        // Y-axis rotation - more Good Y production capacity
        return getPPCPath(MIN_Y - 20, MIN_X, MAX_X, MAX_Y);
      default:
        // Normal PPC curve
        return getPPCPath(MIN_Y, MIN_X, MAX_X, MAX_Y);
    }
  };

  const getScenarioInfo = () => {
    switch (scenario) {
      case 'shift-right': return "Rightward Shift: Caused by Growth of Resources (e.g., Discovery of New Mines) or Advance in Technology for both goods.";
      case 'shift-left': return "Leftward Shift: Caused by Decrease in Resources (e.g., Natural Disasters like Earthquakes) or Backward Technology.";
      case 'rotate-x': return "Rotation on X-axis: Improvement in technology or increase in resources specifically for Good X (Wheat).";
      case 'rotate-y': return "Rotation on Y-axis: Improvement in technology or increase in resources specifically for Good Y (Guns).";
      default: return "Normal PPC: Shows full and efficient utilization of given resources and constant technology.";
    }
  };

  return (
    <div className="ppc-visualizer-container" style={{
      background: 'rgba(0,0,0,0.3)',
      padding: '25px',
      borderRadius: '15px',
      border: '1px solid var(--border-color)',
      marginTop: '20px'
    }}>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        {/* Graph Area */}
        <div className="graph-area" style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
          <svg viewBox="0 0 420 420" width="100%" height="auto" style={{ maxWidth: '500px', margin: '0 auto', display: 'block' }}>
            {/* Grid Lines - Axes */}
            <path d={`M ${MARGIN} 20 L ${MARGIN} ${MAX_Y + 10} L ${MAX_X + 20} ${MAX_Y + 10}`} fill="none" stroke="var(--text-muted)" strokeWidth="2" />

            {/* Axes Arrows */}
            <path d={`M ${MARGIN} 20 L ${MARGIN - 5} 30 L ${MARGIN + 5} 30 Z`} fill="var(--text-muted)" />
            <path d={`M ${MAX_X + 20} ${MAX_Y + 10} L ${MAX_X + 10} ${MAX_Y + 5} L ${MAX_X + 10} ${MAX_Y + 15} Z`} fill="var(--text-muted)" />

            {/* Axes Labels */}
            <text x={MAX_X + 30} y={MAX_Y + 15} fill="white" fontSize="13" fontWeight="500">Good X</text>
            <text x={MAX_X + 30} y={MAX_Y + 30} fill="var(--text-muted)" fontSize="11">(Wheat)</text>
            <text x={MARGIN - 10} y="15" fill="white" fontSize="13" fontWeight="500" textAnchor="middle">Good Y</text>
            <text x={MARGIN - 10} y="30" fill="var(--text-muted)" fontSize="11" textAnchor="middle">(Guns)</text>

            {/* Origin Label */}
            <text x={MARGIN - 10} y={MAX_Y + 25} fill="var(--text-muted)" fontSize="12">O</text>

            {/* Reference curve when shifted (dotted) */}
            {scenario !== 'normal' && (
              <path d={getPPCPath(MIN_Y, MIN_X, MAX_X, MAX_Y)} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="5,5" />
            )}

            {/* Main PPC Curve */}
            <path
              d={getPath()}
              fill="none"
              stroke="var(--neon-gold)"
              strokeWidth="3.5"
              style={{ transition: 'all 0.5s ease', filter: 'drop-shadow(0 0 4px var(--neon-gold))' }}
            />

            {/* Point markers on the curve endpoints */}
            {scenario === 'normal' && (
              <>
                <circle cx={MIN_X} cy={MIN_Y} r="5" fill="var(--neon-green)" stroke="white" strokeWidth="1.5" />
                <circle cx={MAX_X} cy={MAX_Y} r="5" fill="var(--neon-green)" stroke="white" strokeWidth="1.5" />
                <text x={MIN_X - 15} y={MIN_Y - 10} fill="var(--neon-green)" fontSize="13" fontWeight="bold">A</text>
                <text x={MAX_X + 10} y={MAX_Y + 15} fill="var(--neon-green)" fontSize="13" fontWeight="bold">F</text>
              </>
            )}
          </svg>
        </div>

        {/* Controls Area */}
        <div className="controls-area" style={{ flex: '0.8', minWidth: '250px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px' }}>Simulate Changes:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => setScenario('normal')}
              style={{
                padding: '10px 15px',
                background: scenario === 'normal' ? 'var(--neon-gold)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'normal' ? 'var(--bg-primary)' : 'white',
                border: '1px solid var(--neon-gold)',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Reset to Normal
            </button>
            <button
              onClick={() => setScenario('shift-right')}
              style={{
                padding: '10px 15px',
                background: scenario === 'shift-right' ? 'var(--neon-gold)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'shift-right' ? 'var(--bg-primary)' : 'white',
                border: '1px solid var(--neon-gold)',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Growth of Resources (Shift Right)
            </button>
            <button
              onClick={() => setScenario('shift-left')}
              style={{
                padding: '10px 15px',
                background: scenario === 'shift-left' ? 'var(--neon-gold)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'shift-left' ? 'var(--bg-primary)' : 'white',
                border: '1px solid var(--neon-gold)',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Resource Loss (Shift Left)
            </button>
            <button
              onClick={() => setScenario('rotate-x')}
              style={{
                padding: '10px 15px',
                background: scenario === 'rotate-x' ? 'var(--neon-gold)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'rotate-x' ? 'var(--bg-primary)' : 'white',
                border: '1px solid var(--neon-gold)',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Improved Tech for Wheat (Rotate X)
            </button>
          </div>

          <div className="info-box" style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(0,153,255,0.1)',
            borderLeft: '4px solid var(--neon-cyan)',
            borderRadius: '4px'
          }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
              <FaInfoCircle style={{ marginRight: '8px', color: 'var(--neon-cyan)' }} />
              {getScenarioInfo()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPCVisualizer;
