// PPCVisualizer.jsx - Interactive PPC Graph Component
import { useState } from 'react';
import { FaSync, FaArrowRight, FaArrowUp, FaInfoCircle } from 'react-icons/fa';

function PPCVisualizer() {
  const [scenario, setScenario] = useState('normal'); // normal, shift-right, shift-left, rotate-x, rotate-y

  // Normal PPC Points (Concave Curve)
  // Combination: A(0,15), B(1,14), C(2,12), D(3,9), E(4,5), F(5,0)
  const basePoints = "M 50 50 Q 50 350 350 350"; // Simplified quadratic for visualization
  // More realistic concave points:
  // (50, 50) -> Top (Good Y)
  // (350, 350) -> Bottom (Good X)
  // Control point at (50, 350) would make it a quarter circle if perfect, but we want it concave

  const getPath = () => {
    switch (scenario) {
      case 'shift-right': return "M 80 80 Q 80 380 380 380";
      case 'shift-left': return "M 30 30 Q 30 320 320 320";
      case 'rotate-x': return "M 50 50 Q 50 380 380 380"; // Rotates out on X-axis (more Good X)
      case 'rotate-y': return "M 80 80 Q 80 350 350 350"; // Rotates up on Y-axis (more Good Y)
      default: return "M 50 50 Q 50 350 350 350";
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
          <svg viewBox="0 0 400 400" width="100%" height="auto" style={{ overflow: 'visible' }}>
            {/* Grid Lines */}
            <path d="M 50 0 L 50 350 L 400 350" fill="none" stroke="var(--text-muted)" strokeWidth="2" />

            {/* Axes Labels */}
            <text x="360" y="380" fill="white" fontSize="14">Good X (Wheat) →</text>
            <text x="0" y="40" fill="white" fontSize="14" transform="rotate(-90, 20, 40)">Good Y (Guns) →</text>

            {/* Curve Shadow/Base for comparison when shifted */}
            {scenario !== 'normal' && (
              <path d="M 50 50 Q 50 350 350 350" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="5,5" />
            )}

            {/* Main PPC Curve */}
            <path
              d={getPath()}
              fill="none"
              stroke="var(--neon-gold)"
              strokeWidth="4"
              style={{ transition: 'all 0.5s ease' }}
            />

            {/* Points on Curve */}
            <circle cx="50" cy="50" r="4" fill="var(--neon-green)" />
            <circle cx="350" cy="350" r="4" fill="var(--neon-green)" />
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
