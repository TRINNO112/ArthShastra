// PPCVisualizer.jsx - Interactive PPC Graph Component using Recharts
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, ReferenceDot } from 'recharts';
import { FaSync, FaArrowRight, FaArrowUp, FaInfoCircle } from 'react-icons/fa';

function PPCVisualizer() {
  const [scenario, setScenario] = useState('normal');

  // Generate concave PPC curve data points
  // A concave PPC shows increasing opportunity cost
  const generatePPCData = (maxX, maxY) => {
    const points = [];
    const numPoints = 20;

    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints; // 0 to 1

      // Concave curve formula: y = maxY * (1 - t^1.5)
      // This creates a curve that bows away from origin
      const x = maxX * t;
      const y = maxY * Math.pow(1 - t, 1.5);

      points.push({
        x: parseFloat(x.toFixed(1)),
        y: parseFloat(y.toFixed(1)),
        wheat: x,
        guns: y
      });
    }
    return points;
  };

  // Generate data based on scenario
  const getCurveData = () => {
    switch (scenario) {
      case 'shift-right':
        return {
          normal: generatePPCData(100, 100),
          shifted: generatePPCData(130, 130)
        };
      case 'shift-left':
        return {
          normal: generatePPCData(100, 100),
          shifted: generatePPCData(70, 70)
        };
      case 'rotate-x':
        return {
          normal: generatePPCData(100, 100),
          shifted: generatePPCData(130, 100)
        };
      case 'rotate-y':
        return {
          normal: generatePPCData(100, 100),
          shifted: generatePPCData(100, 130)
        };
      default:
        return {
          normal: generatePPCData(100, 100),
          shifted: null
        };
    }
  };

  const curveData = getCurveData();

  // Merge normal and shifted data for the chart
  const chartData = curveData.normal.map((point, index) => ({
    ...point,
    shiftedY: curveData.shifted ? curveData.shifted[index]?.y : null,
    shiftedX: curveData.shifted ? curveData.shifted[index]?.x : null
  }));

  const getScenarioInfo = () => {
    switch (scenario) {
      case 'shift-right': return "Rightward Shift: Caused by Growth of Resources (e.g., Discovery of New Mines) or Advance in Technology for both goods.";
      case 'shift-left': return "Leftward Shift: Caused by Decrease in Resources (e.g., Natural Disasters like Earthquakes) or Backward Technology.";
      case 'rotate-x': return "Rotation on X-axis: Improvement in technology or increase in resources specifically for Good X (Wheat).";
      case 'rotate-y': return "Rotation on Y-axis: Improvement in technology or increase in resources specifically for Good Y (Guns).";
      default: return "Normal PPC: Shows full and efficient utilization of given resources and constant technology.";
    }
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          background: 'rgba(10, 10, 15, 0.95)',
          border: '1px solid var(--neon-gold)',
          padding: '10px',
          borderRadius: '8px'
        }}>
          <p style={{ color: 'white', fontSize: '0.9rem', margin: '4px 0' }}>
            <strong>Wheat:</strong> {payload[0].payload.wheat.toFixed(1)} units
          </p>
          <p style={{ color: 'white', fontSize: '0.9rem', margin: '4px 0' }}>
            <strong>Guns:</strong> {payload[0].payload.guns.toFixed(1)} units
          </p>
        </div>
      );
    }
    return null;
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
        <div className="graph-area" style={{ flex: '1', minWidth: '350px' }}>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 140]}
                stroke="rgba(255,255,255,0.6)"
                tick={{ fill: 'rgba(255,255,255,0.8)' }}
              >
                <Label value="Good X (Wheat) →" offset={-10} position="insideBottom" style={{ fill: 'white', fontWeight: '500' }} />
              </XAxis>

              <YAxis
                dataKey="y"
                type="number"
                domain={[0, 140]}
                stroke="rgba(255,255,255,0.6)"
                tick={{ fill: 'rgba(255,255,255,0.8)' }}
              >
                <Label value="Good Y (Guns) →" angle={-90} position="insideLeft" style={{ fill: 'white', fontWeight: '500', textAnchor: 'middle' }} />
              </YAxis>

              <Tooltip content={<CustomTooltip />} />

              {/* Reference dotted line when shifted */}
              {scenario !== 'normal' && (
                <Line
                  type="monotone"
                  dataKey="y"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  isAnimationActive={false}
                  name="Original PPC"
                />
              )}

              {/* Main PPC Curve */}
              <Line
                type="monotone"
                dataKey={scenario !== 'normal' ? 'shiftedY' : 'y'}
                stroke="#ffd700"
                strokeWidth={3}
                dot={false}
                animationDuration={800}
                animationEasing="ease-in-out"
                name="PPC"
                style={{ filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.5))' }}
              />

              {/* Endpoint dots for normal scenario */}
              {scenario === 'normal' && (
                <>
                  <ReferenceDot x={0} y={100} r={6} fill="#00ff88" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={100} y={0} r={6} fill="#00ff88" stroke="white" strokeWidth={2} />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Controls Area */}
        <div className="controls-area" style={{ flex: '0.8', minWidth: '250px' }}>
          <h4 style={{ color: 'var(--text-primary)', marginBottom: '15px', fontSize: '1.1rem' }}>Simulate Changes:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => setScenario('normal')}
              style={{
                padding: '12px 16px',
                background: scenario === 'normal' ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'normal' ? '#0a0a0f' : 'white',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: scenario === 'normal' ? '600' : '400',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              📊 Reset to Normal
            </button>
            <button
              onClick={() => setScenario('shift-right')}
              style={{
                padding: '12px 16px',
                background: scenario === 'shift-right' ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'shift-right' ? '#0a0a0f' : 'white',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: scenario === 'shift-right' ? '600' : '400',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              📈 Growth (Shift Right)
            </button>
            <button
              onClick={() => setScenario('shift-left')}
              style={{
                padding: '12px 16px',
                background: scenario === 'shift-left' ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'shift-left' ? '#0a0a0f' : 'white',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: scenario === 'shift-left' ? '600' : '400',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              📉 Resource Loss (Shift Left)
            </button>
            <button
              onClick={() => setScenario('rotate-x')}
              style={{
                padding: '12px 16px',
                background: scenario === 'rotate-x' ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'rotate-x' ? '#0a0a0f' : 'white',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: scenario === 'rotate-x' ? '600' : '400',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              🌾 Tech for Wheat (Rotate X)
            </button>
            <button
              onClick={() => setScenario('rotate-y')}
              style={{
                padding: '12px 16px',
                background: scenario === 'rotate-y' ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : 'rgba(255,255,255,0.05)',
                color: scenario === 'rotate-y' ? '#0a0a0f' : 'white',
                border: '1px solid #ffd700',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontWeight: scenario === 'rotate-y' ? '600' : '400',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem'
              }}
            >
              🔫 Tech for Guns (Rotate Y)
            </button>
          </div>

          <div className="info-box" style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(0,153,255,0.1)',
            borderLeft: '4px solid var(--neon-cyan)',
            borderRadius: '8px'
          }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
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
