// PPCVisualizer.jsx - Interactive PPC Graph Component using Recharts
import { useState, useMemo } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  Scatter,
  ReferenceLine,
  ReferenceDot,
} from 'recharts';
import { FaInfoCircle, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';

function PPCVisualizer() {
  const [scenario, setScenario] = useState('normal');
  const [showExamplePoints, setShowExamplePoints] = useState(true);

  // Generate concave PPC curve (bowing outward from origin)
  // This represents increasing opportunity cost
  const generatePPC = (maxX, maxY, numPoints = 80) => {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      // Concave curve: y = maxY * sqrt(1 - (x/maxX))
      // Parametric form: x = maxX * t², y = maxY * (1 - t)² creates convex
      // For concave (bowing OUT): x = maxX * t, y = maxY * sqrt(1 - t)
      const x = maxX * t;
      const y = maxY * Math.sqrt(1 - t);

      points.push({
        x: parseFloat(x.toFixed(2)),
        y: parseFloat(y.toFixed(2)),
      });
    }
    return points;
  };

  // Get curves based on current scenario
  const { originalCurve, transformedCurve, maxDomain } = useMemo(() => {
    const original = generatePPC(100, 100);
    let transformed = null;
    let domain = 120;

    switch (scenario) {
      case 'shift-right':
        // Economic growth: both goods increase
        transformed = generatePPC(130, 130);
        domain = 150;
        break;
      case 'shift-left':
        // Economic decline: both goods decrease
        transformed = generatePPC(70, 70);
        domain = 120;
        break;
      case 'rotate-x':
        // Wheat technology: X increases, Y stays same
        // Curve pivots from Y-intercept
        transformed = generatePPC(140, 100);
        domain = 160;
        break;
      case 'rotate-y':
        // Rice technology: Y increases, X stays same
        // Curve pivots from X-intercept
        transformed = generatePPC(100, 140);
        domain = 160;
        break;
      default:
        domain = 120;
        break;
    }

    return { originalCurve: original, transformedCurve: transformed, maxDomain: domain };
  }, [scenario]);

  // Example points to demonstrate efficiency concepts
  const examplePoints = useMemo(() => {
    return [
      { x: 50, y: 70.7, type: 'efficient', label: 'A' },      // On curve: sqrt(1 - 0.5) * 100 ≈ 70.7
      { x: 30, y: 35, type: 'inefficient', label: 'B' },       // Inside curve (underutilization)
      { x: 85, y: 70, type: 'unattainable', label: 'C' },      // Outside curve (impossible)
    ];
  }, []);

  // Scenario information
  const getScenarioInfo = () => {
    switch (scenario) {
      case 'shift-right':
        return {
          title: '📈 Outward Shift (Economic Growth)',
          description: 'Caused by: Discovery of new resources, technological advancement for BOTH goods, increase in labor force, capital accumulation, or improved education.',
          effect: 'Production capacity for both Wheat and Rice increases proportionally.',
          color: '#00ff88'
        };
      case 'shift-left':
        return {
          title: '📉 Inward Shift (Economic Decline)',
          description: 'Caused by: Natural disasters (earthquakes, floods), wars, resource depletion, emigration of workers, or technological regression.',
          effect: 'Production capacity for both Wheat and Rice decreases.',
          color: '#ff6b6b'
        };
      case 'rotate-x':
        return {
          title: '🌾 Pivot Outward on Wheat Axis',
          description: 'Caused by: Technological improvement ONLY in Wheat production, discovery of better farming techniques, or new agricultural resources.',
          effect: 'Maximum Wheat production increases (100→140) while Rice capacity remains unchanged at 100.',
          color: '#ffd700'
        };
      case 'rotate-y':
        return {
          title: '🍚 Pivot Outward on Rice Axis',
          description: 'Caused by: Technological improvement ONLY in Rice production, better irrigation systems, or new rice varieties.',
          effect: 'Maximum Rice production increases (100→140) while Wheat capacity remains unchanged at 100.',
          color: '#00d4ff'
        };
      default:
        return {
          title: '📊 Standard Production Possibility Curve',
          description: 'Shows all possible efficient combinations of Wheat and Rice that can be produced using all available resources and current technology.',
          effect: 'Points ON curve = Efficient ✓ | INSIDE curve = Inefficient ✗ | OUTSIDE curve = Unattainable ⊘',
          color: '#ffd700'
        };
    }
  };

  const scenarioInfo = getScenarioInfo();

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      if (data && typeof data.x === 'number' && typeof data.y === 'number') {
        return (
          <div style={{
            background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(25, 25, 45, 0.98))',
            border: '2px solid #ffd700',
            padding: '14px 18px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
          }}>
            <p style={{
              color: '#ffd700',
              fontSize: '1rem',
              margin: '0 0 10px 0',
              fontWeight: '700',
              borderBottom: '1px solid rgba(255,215,0,0.3)',
              paddingBottom: '8px'
            }}>
              Production Point
            </p>
            <p style={{ color: 'white', fontSize: '0.95rem', margin: '6px 0', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
              <span>🌾 Wheat:</span>
              <strong style={{ color: '#00ff88' }}>{data.x.toFixed(1)} units</strong>
            </p>
            <p style={{ color: 'white', fontSize: '0.95rem', margin: '6px 0', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
              <span>🍚 Rice:</span>
              <strong style={{ color: '#00d4ff' }}>{data.y.toFixed(1)} units</strong>
            </p>
          </div>
        );
      }
    }
    return null;
  };

  // Button styling function
  const getButtonStyle = (isActive, accentColor = '#ffd700') => ({
    padding: '14px 18px',
    background: isActive
      ? `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`
      : 'rgba(255,255,255,0.03)',
    color: isActive ? '#0a0a15' : 'rgba(255,255,255,0.9)',
    border: `2px solid ${isActive ? accentColor : 'rgba(255,215,0,0.25)'}`,
    borderRadius: '12px',
    cursor: 'pointer',
    textAlign: 'left',
    fontWeight: isActive ? '700' : '500',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: isActive ? `0 4px 20px ${accentColor}40` : 'none',
    transform: isActive ? 'scale(1.02)' : 'scale(1)',
  });

  return (
    <div className="ppc-visualizer-container" style={{
      background: 'linear-gradient(160deg, rgba(10,10,25,0.95), rgba(20,15,40,0.95))',
      padding: '35px',
      borderRadius: '24px',
      border: '1px solid rgba(255,215,0,0.15)',
      marginTop: '25px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h3 style={{
          color: '#ffd700',
          fontSize: '1.6rem',
          margin: '0 0 8px 0',
          textShadow: '0 0 30px rgba(255,215,0,0.4)',
          letterSpacing: '0.5px'
        }}>
          🎯 Production Possibility Curve (PPC) Visualizer
        </h3>
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.95rem',
          margin: 0
        }}>
          Interactive demonstration of economic production possibilities
        </p>
      </div>

      <div style={{ display: 'flex', gap: '35px', flexWrap: 'wrap' }}>
        {/* Graph Area */}
        <div className="graph-area" style={{
          flex: '1.3',
          minWidth: '420px',
          background: 'linear-gradient(145deg, rgba(0,0,0,0.4), rgba(10,10,20,0.4))',
          borderRadius: '18px',
          padding: '25px',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <ResponsiveContainer width="100%" height={480}>
            <ComposedChart margin={{ top: 25, right: 45, left: 25, bottom: 35 }}>
              <defs>
                {/* Gradient for the main curve */}
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ffed4e" />
                </linearGradient>
                <linearGradient id="greenGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="100%" stopColor="#00ffaa" />
                </linearGradient>
                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />

              <XAxis
                type="number"
                dataKey="x"
                domain={[0, maxDomain]}
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
                tickCount={8}
                axisLine={{ strokeWidth: 2 }}
              >
                <Label
                  value="🌾 Wheat Production (units) →"
                  offset={-20}
                  position="insideBottom"
                  style={{ fill: 'white', fontWeight: '600', fontSize: '13px' }}
                />
              </XAxis>

              <YAxis
                type="number"
                domain={[0, maxDomain]}
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
                tickCount={8}
                axisLine={{ strokeWidth: 2 }}
              >
                <Label
                  value="🍚 Rice Production (units) →"
                  angle={-90}
                  position="insideLeft"
                  style={{ fill: 'white', fontWeight: '600', fontSize: '13px', textAnchor: 'middle' }}
                  offset={5}
                />
              </YAxis>

              <Tooltip content={CustomTooltip} />

              {/* Origin reference */}
              <ReferenceDot x={0} y={0} r={4} fill="white" stroke="none" />

              {/* Original PPC Curve */}
              <Line
                data={originalCurve}
                type="monotone"
                dataKey="y"
                stroke={scenario === 'normal' ? 'url(#goldGradient)' : 'rgba(255,255,255,0.3)'}
                strokeWidth={scenario === 'normal' ? 4 : 2.5}
                strokeDasharray={scenario === 'normal' ? '0' : '10 6'}
                dot={false}
                name="Original PPC"
                isAnimationActive={true}
                animationDuration={600}
                animationEasing="ease-out"
                style={{
                  filter: scenario === 'normal' ? 'url(#glow)' : 'none'
                }}
              />

              {/* Transformed PPC Curve */}
              {transformedCurve && (
                <Line
                  data={transformedCurve}
                  type="monotone"
                  dataKey="y"
                  stroke="url(#greenGradient)"
                  strokeWidth={4}
                  dot={false}
                  name="New PPC"
                  isAnimationActive={true}
                  animationDuration={800}
                  animationEasing="ease-out"
                  style={{ filter: 'url(#glow)' }}
                />
              )}

              {/* Intercept points for normal scenario */}
              {scenario === 'normal' && (
                <>
                  <ReferenceDot x={0} y={100} r={8} fill="#00ff88" stroke="white" strokeWidth={3} />
                  <ReferenceDot x={100} y={0} r={8} fill="#00ff88" stroke="white" strokeWidth={3} />
                </>
              )}

              {/* Example points for normal scenario (rendered from examplePoints) */}
              {showExamplePoints && scenario === 'normal' && examplePoints.map((pt) => (
                <ReferenceDot
                  key={pt.label}
                  x={pt.x}
                  y={pt.y}
                  r={10}
                  fill={pt.type === 'efficient' ? '#00ff88' : pt.type === 'inefficient' ? '#ffd700' : '#ff6b6b'}
                  stroke="white"
                  strokeWidth={3}
                  label={{ value: pt.label, position: 'top', fill: pt.type === 'efficient' ? '#00ff88' : pt.type === 'inefficient' ? '#ffd700' : '#ff6b6b', fontSize: 14, fontWeight: 'bold' }}
                />
              ))}

              {/* Transformation indicator points */}
              {scenario === 'shift-right' && (
                <>
                  <ReferenceDot x={0} y={130} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={130} y={0} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                </>
              )}
              {scenario === 'shift-left' && (
                <>
                  <ReferenceDot x={0} y={70} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={70} y={0} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                </>
              )}
              {scenario === 'rotate-x' && (
                <>
                  <ReferenceDot x={0} y={100} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={140} y={0} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                </>
              )}
              {scenario === 'rotate-y' && (
                <>
                  <ReferenceDot x={0} y={140} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={100} y={0} r={7} fill="#00ff88" stroke="white" strokeWidth={2} />
                </>
              )}
            </ComposedChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '20px',
            flexWrap: 'wrap',
            padding: '15px',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '35px',
                height: '4px',
                background: scenario === 'normal' ? 'linear-gradient(90deg, #ffd700, #ffed4e)' : 'rgba(255,255,255,0.3)',
                borderRadius: '2px',
                boxShadow: scenario === 'normal' ? '0 0 10px rgba(255,215,0,0.5)' : 'none'
              }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: '500' }}>
                {scenario === 'normal' ? 'Current PPC' : 'Original PPC'}
              </span>
            </div>
            {transformedCurve && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '35px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00ff88, #00ffaa)',
                  borderRadius: '2px',
                  boxShadow: '0 0 10px rgba(0,255,136,0.5)'
                }} />
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: '500' }}>
                  New PPC
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Controls Area */}
        <div className="controls-area" style={{ flex: '0.8', minWidth: '300px' }}>
          <h4 style={{
            color: 'white',
            marginBottom: '20px',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            🎮 Simulate Economic Changes
          </h4>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => setScenario('normal')}
              style={getButtonStyle(scenario === 'normal', '#ffd700')}
            >
              <span style={{ fontSize: '1.2rem' }}>📊</span>
              <span>Standard PPC</span>
            </button>

            <button
              onClick={() => setScenario('shift-right')}
              style={getButtonStyle(scenario === 'shift-right', '#00ff88')}
            >
              <span style={{ fontSize: '1.2rem' }}>📈</span>
              <span>Economic Growth (Shift Outward)</span>
            </button>

            <button
              onClick={() => setScenario('shift-left')}
              style={getButtonStyle(scenario === 'shift-left', '#ff6b6b')}
            >
              <span style={{ fontSize: '1.2rem' }}>📉</span>
              <span>Economic Decline (Shift Inward)</span>
            </button>

            <button
              onClick={() => setScenario('rotate-x')}
              style={getButtonStyle(scenario === 'rotate-x', '#ffd700')}
            >
              <span style={{ fontSize: '1.2rem' }}>🌾</span>
              <span>Wheat Tech Improvement</span>
            </button>

            <button
              onClick={() => setScenario('rotate-y')}
              style={getButtonStyle(scenario === 'rotate-y', '#00d4ff')}
            >
              <span style={{ fontSize: '1.2rem' }}>🍚</span>
              <span>Rice Tech Improvement</span>
            </button>
          </div>

          {/* Scenario Info Box */}
          <div style={{
            marginTop: '28px',
            padding: '20px',
            background: `linear-gradient(145deg, ${scenarioInfo.color}15, ${scenarioInfo.color}08)`,
            borderLeft: `5px solid ${scenarioInfo.color}`,
            borderRadius: '14px',
            boxShadow: `0 4px 20px ${scenarioInfo.color}15`
          }}>
            <h5 style={{
              color: scenarioInfo.color,
              margin: '0 0 12px 0',
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              {scenarioInfo.title}
            </h5>
            <p style={{
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 14px 0',
              lineHeight: '1.7'
            }}>
              {scenarioInfo.description}
            </p>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '10px'
            }}>
              <p style={{
                fontSize: '0.88rem',
                color: '#ffd700',
                margin: 0,
                fontWeight: '600',
                lineHeight: '1.6'
              }}>
                ⚡ Effect: {scenarioInfo.effect}
              </p>
            </div>
          </div>

          {/* Points Legend (for normal scenario) */}
          {scenario === 'normal' && (
            <div style={{
              marginTop: '22px',
              padding: '18px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '14px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <h5 style={{ color: 'white', margin: 0, fontSize: '1rem' }}>
                  📍 Key Points on Graph
                </h5>
                <button
                  onClick={() => setShowExamplePoints(!showExamplePoints)}
                  style={{
                    background: showExamplePoints ? 'rgba(0,255,136,0.2)' : 'rgba(255,255,255,0.1)',
                    border: `1px solid ${showExamplePoints ? '#00ff88' : 'rgba(255,255,255,0.2)'}`,
                    color: showExamplePoints ? '#00ff88' : 'rgba(255,255,255,0.7)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {showExamplePoints ? 'Hide' : 'Show'}
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#00ff88',
                    border: '3px solid white',
                    boxShadow: '0 0 10px rgba(0,255,136,0.5)'
                  }} />
                  <div>
                    <span style={{ color: '#00ff88', fontWeight: '600', fontSize: '0.9rem' }}>Point A</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}> - Efficient (On curve)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#ffd700',
                    border: '3px solid white',
                    boxShadow: '0 0 10px rgba(255,215,0,0.5)'
                  }} />
                  <div>
                    <span style={{ color: '#ffd700', fontWeight: '600', fontSize: '0.9rem' }}>Point B</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}> - Inefficient (Inside curve)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: '#ff6b6b',
                    border: '3px solid white',
                    boxShadow: '0 0 10px rgba(255,107,107,0.5)'
                  }} />
                  <div>
                    <span style={{ color: '#ff6b6b', fontWeight: '600', fontSize: '0.9rem' }}>Point C</span>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}> - Unattainable (Outside curve)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Reference */}
          <div style={{
            marginTop: '22px',
            padding: '15px',
            background: 'rgba(0,150,255,0.08)',
            borderRadius: '12px',
            border: '1px solid rgba(0,150,255,0.2)'
          }}>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.75)',
              margin: 0,
              lineHeight: '1.6'
            }}>
              <FaInfoCircle style={{ marginRight: '8px', color: '#00d4ff' }} />
              <strong>Remember:</strong> The PPC is concave (bows outward) due to <em>increasing opportunity cost</em> -
              resources are not equally efficient in producing both goods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPCVisualizer;