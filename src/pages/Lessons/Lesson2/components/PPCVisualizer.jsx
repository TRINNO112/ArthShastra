// PPCVisualizer.jsx - Interactive PPC Graph Component using Recharts
import { useState, useMemo } from 'react';
import './components.css';
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
      case 'asymmetric-growth':
        // Wheat increases, Rice decreases
        // Realistic scenario: focus on one sector causes decline in another
        transformed = generatePPC(130, 80);
        domain = 150;
        break;
      case 'balanced-tech':
        // Technological improvement in both goods but different rates
        // Both goods increase but not proportionally
        transformed = generatePPC(140, 120);
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
      case 'asymmetric-growth':
        return {
          title: '⚖️ Asymmetric Growth (Wheat Up, Rice Down)',
          description: 'Caused by: Resource reallocation, labor migration from rice to wheat farming, degradation of rice-producing land, or policy favoring wheat sector.',
          effect: 'Wheat capacity increases (100→130) while Rice capacity decreases (100→80). Reflects real-world trade-offs when focusing on one sector.',
          color: '#ff9500'
        };
      case 'balanced-tech':
        return {
          title: '🚀 Balanced Technological Progress',
          description: 'Caused by: Broad technological improvements affecting both sectors but at different rates, general education improvements, or infrastructure development.',
          effect: 'Both Wheat (100→140) and Rice (100→120) production capacity increase, but Wheat sector benefits more from technological advancement.',
          color: '#9d4edd'
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
          <div className="ppc-visualizer-tooltip">
            <p className="ppc-visualizer-tooltip-title">
              Production Point
            </p>
            <p className="ppc-visualizer-tooltip-row">
              <span>🌾 Wheat:</span>
              <strong className="ppc-visualizer-tooltip-value-green">{data.x.toFixed(1)} units</strong>
            </p>
            <p className="ppc-visualizer-tooltip-row">
              <span>🍚 Rice:</span>
              <strong className="ppc-visualizer-tooltip-value-cyan">{data.y.toFixed(1)} units</strong>
            </p>
          </div>
        );
      }
    }
    return null;
  };

  // Button class name function
  const getButtonClassName = (isActive, accentColor = 'gold') => {
    const baseClass = 'ppc-visualizer-button-base';
    if (!isActive) {
      return `${baseClass} ppc-visualizer-button-inactive`;
    }
    return `${baseClass} ppc-visualizer-button-active ppc-visualizer-button-active-${accentColor}`;
  };

  // Get color class name based on scenario color
  const getColorClass = (baseClass, color) => {
    const colorMap = {
      '#ffd700': 'gold',
      '#00ff88': 'green',
      '#ff6b6b': 'red',
      '#00d4ff': 'cyan',
      '#ff9500': 'orange',
      '#9d4edd': 'purple'
    };
    const colorName = colorMap[color] || 'gold';
    return `${baseClass}-${colorName}`;
  };

  return (
    <div className="ppc-visualizer-container">
      {/* Header */}
      <div className="ppc-visualizer-header">
        <h3 className="ppc-visualizer-title">
          🎯 Production Possibility Curve (PPC) Visualizer
        </h3>
        <p className="ppc-visualizer-subtitle">
          Interactive demonstration of economic production possibilities
        </p>
      </div>

      <div className="ppc-visualizer-layout">
        {/* Graph Area */}
        <div className="graph-area ppc-visualizer-graph-area">
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
              {scenario === 'asymmetric-growth' && (
                <>
                  <ReferenceDot x={0} y={80} r={7} fill="#ff9500" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={130} y={0} r={7} fill="#ff9500" stroke="white" strokeWidth={2} />
                </>
              )}
              {scenario === 'balanced-tech' && (
                <>
                  <ReferenceDot x={0} y={120} r={7} fill="#9d4edd" stroke="white" strokeWidth={2} />
                  <ReferenceDot x={140} y={0} r={7} fill="#9d4edd" stroke="white" strokeWidth={2} />
                </>
              )}
            </ComposedChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="ppc-visualizer-legend">
            <div className="ppc-visualizer-legend-item">
              <div className={scenario === 'normal' ? 'ppc-visualizer-legend-line-normal' : 'ppc-visualizer-legend-line-original'} />
              <span className="ppc-visualizer-legend-label">
                {scenario === 'normal' ? 'Current PPC' : 'Original PPC'}
              </span>
            </div>
            {transformedCurve && (
              <div className="ppc-visualizer-legend-item">
                <div className="ppc-visualizer-legend-line-new" />
                <span className="ppc-visualizer-legend-label">
                  New PPC
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Controls Area */}
        <div className="controls-area ppc-visualizer-controls">
          <h4 className="ppc-visualizer-controls-heading">
            🎮 Simulate Economic Changes
          </h4>

          <div className="ppc-visualizer-buttons">
            <button
              onClick={() => setScenario('normal')}
              className={getButtonClassName(scenario === 'normal', 'gold')}
            >
              <span className="ppc-visualizer-button-icon">📊</span>
              <span>Standard PPC</span>
            </button>

            <button
              onClick={() => setScenario('shift-right')}
              className={getButtonClassName(scenario === 'shift-right', 'green')}
            >
              <span className="ppc-visualizer-button-icon">📈</span>
              <span>Economic Growth (Shift Outward)</span>
            </button>

            <button
              onClick={() => setScenario('shift-left')}
              className={getButtonClassName(scenario === 'shift-left', 'red')}
            >
              <span className="ppc-visualizer-button-icon">📉</span>
              <span>Economic Decline (Shift Inward)</span>
            </button>

            <button
              onClick={() => setScenario('rotate-x')}
              className={getButtonClassName(scenario === 'rotate-x', 'gold')}
            >
              <span className="ppc-visualizer-button-icon">🌾</span>
              <span>Wheat Tech Improvement</span>
            </button>

            <button
              onClick={() => setScenario('rotate-y')}
              className={getButtonClassName(scenario === 'rotate-y', 'cyan')}
            >
              <span className="ppc-visualizer-button-icon">🍚</span>
              <span>Rice Tech Improvement</span>
            </button>

            <button
              onClick={() => setScenario('asymmetric-growth')}
              className={getButtonClassName(scenario === 'asymmetric-growth', 'orange')}
            >
              <span className="ppc-visualizer-button-icon">⚖️</span>
              <span>Asymmetric Growth (Wheat ↑ Rice ↓)</span>
            </button>

            <button
              onClick={() => setScenario('balanced-tech')}
              className={getButtonClassName(scenario === 'balanced-tech', 'purple')}
            >
              <span className="ppc-visualizer-button-icon">🚀</span>
              <span>Balanced Tech Progress</span>
            </button>
          </div>

          {/* Scenario Info Box */}
          <div className={`ppc-visualizer-scenario-info ${getColorClass('ppc-visualizer-scenario-info', scenarioInfo.color)}`}>
            <h5 className={`ppc-visualizer-scenario-title ${getColorClass('ppc-visualizer-scenario-title', scenarioInfo.color)}`}>
              {scenarioInfo.title}
            </h5>
            <p className="ppc-visualizer-scenario-description">
              {scenarioInfo.description}
            </p>
            <div className="ppc-visualizer-scenario-effect-box">
              <p className="ppc-visualizer-scenario-effect-text">
                ⚡ Effect: {scenarioInfo.effect}
              </p>
            </div>
          </div>

          {/* Points Legend (for normal scenario) */}
          {scenario === 'normal' && (
            <div className="ppc-visualizer-points-legend">
              <div className="ppc-visualizer-points-legend-header">
                <h5 className="ppc-visualizer-points-legend-title">
                  📍 Key Points on Graph
                </h5>
                <button
                  onClick={() => setShowExamplePoints(!showExamplePoints)}
                  className={showExamplePoints ? 'ppc-visualizer-points-legend-toggle-active' : 'ppc-visualizer-points-legend-toggle-inactive'}
                >
                  {showExamplePoints ? 'Hide' : 'Show'}
                </button>
              </div>

              <div className="ppc-visualizer-points-list">
                <div className="ppc-visualizer-point-item">
                  <div className="ppc-visualizer-point-dot-green" />
                  <div>
                    <span className="ppc-visualizer-point-label-green">Point A</span>
                    <span className="ppc-visualizer-point-description"> - Efficient (On curve)</span>
                  </div>
                </div>

                <div className="ppc-visualizer-point-item">
                  <div className="ppc-visualizer-point-dot-gold" />
                  <div>
                    <span className="ppc-visualizer-point-label-gold">Point B</span>
                    <span className="ppc-visualizer-point-description"> - Inefficient (Inside curve)</span>
                  </div>
                </div>

                <div className="ppc-visualizer-point-item">
                  <div className="ppc-visualizer-point-dot-red" />
                  <div>
                    <span className="ppc-visualizer-point-label-red">Point C</span>
                    <span className="ppc-visualizer-point-description"> - Unattainable (Outside curve)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Reference */}
          <div className="ppc-visualizer-quick-ref">
            <p className="ppc-visualizer-quick-ref-text">
              <FaInfoCircle className="ppc-visualizer-quick-ref-icon" />
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