// AttainableUnattainable.jsx - Attainable and Unattainable Combinations
import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaChartLine, FaArrowRight } from 'react-icons/fa';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  ReferenceDot,
  Scatter,
} from 'recharts';
import './components.css';

function AttainableUnattainable() {
  const [selectedPoint, setSelectedPoint] = useState('A');

  // Generate PPC curve
  const generatePPC = (maxX, maxY, numPoints = 80) => {
    const points = [];
    for (let i = 0; i <= numPoints; i++) {
      const t = i / numPoints;
      const x = maxX * t;
      const y = maxY * Math.sqrt(1 - t);
      points.push({
        x: parseFloat(x.toFixed(2)),
        y: parseFloat(y.toFixed(2)),
      });
    }
    return points;
  };

  const ppcCurve = generatePPC(100, 100);

  // Define example points with different classifications
  const examplePoints = [
    {
      id: 'A',
      x: 50,
      y: 70.7,
      type: 'efficient',
      label: 'Point A',
      status: 'Efficient & Attainable',
      description: 'On the PPC curve. Resources are fully and efficiently utilized.',
      color: '#00ff88',
      icon: <FaCheckCircle />
    },
    {
      id: 'B',
      x: 70,
      y: 54.8,
      type: 'efficient',
      label: 'Point B',
      status: 'Efficient & Attainable',
      description: 'On the PPC curve. All resources are employed optimally.',
      color: '#00ff88',
      icon: <FaCheckCircle />
    },
    {
      id: 'C',
      x: 30,
      y: 35,
      type: 'inefficient',
      label: 'Point C',
      status: 'Inefficient but Attainable',
      description: 'Inside the PPC curve. Indicates underutilization or unemployment of resources.',
      color: '#ffd700',
      icon: <FaExclamationTriangle />
    },
    {
      id: 'D',
      x: 45,
      y: 50,
      type: 'inefficient',
      label: 'Point D',
      status: 'Inefficient but Attainable',
      description: 'Inside the PPC curve. Resources are not being used efficiently.',
      color: '#ffd700',
      icon: <FaExclamationTriangle />
    },
    {
      id: 'E',
      x: 85,
      y: 70,
      type: 'unattainable',
      label: 'Point E',
      status: 'Unattainable',
      description: 'Outside the PPC curve. Cannot be achieved with current resources and technology.',
      color: '#ff6b6b',
      icon: <FaTimesCircle />
    },
    {
      id: 'F',
      x: 65,
      y: 80,
      type: 'unattainable',
      label: 'Point F',
      status: 'Unattainable',
      description: 'Outside the PPC curve. Requires more resources or better technology.',
      color: '#ff6b6b',
      icon: <FaTimesCircle />
    }
  ];

  const selectedPointData = examplePoints.find(p => p.id === selectedPoint);

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      if (data && typeof data.x === 'number' && typeof data.y === 'number') {
        return (
          <div className="attainable-tooltip">
            <p className="attainable-tooltip-text">
              <span>🌾 Wheat: <strong className="attainable-tooltip-value-green">{data.x.toFixed(1)}</strong></span>
            </p>
            <p className="attainable-tooltip-text">
              <span>🍚 Rice: <strong className="attainable-tooltip-value-cyan">{data.y.toFixed(1)}</strong></span>
            </p>
          </div>
        );
      }
    }
    return null;
  };

  const getPointButtonClass = (point) => {
    const baseClass = 'attainable-point-button-base';
    const isSelected = selectedPoint === point.id;
    const activeClass = isSelected ? 'attainable-point-button-active' : 'attainable-point-button-inactive';
    return `${baseClass} ${activeClass}`;
  };

  const getPointButtonStyle = (point) => {
    const isSelected = selectedPoint === point.id;
    return {
      background: isSelected
        ? `linear-gradient(135deg, ${point.color}, ${point.color}cc)`
        : undefined,
      color: isSelected ? '#0a0a15' : undefined,
      border: `2px solid ${point.color}`,
      boxShadow: isSelected ? `0 4px 20px ${point.color}40` : undefined
    };
  };

  const getPointDetailsClass = () => {
    return 'attainable-point-details';
  };

  const getPointDetailsStyle = () => {
    return {
      background: `linear-gradient(145deg, ${selectedPointData.color}15, ${selectedPointData.color}08)`,
      borderLeft: `5px solid ${selectedPointData.color}`,
      boxShadow: `0 4px 20px ${selectedPointData.color}20`
    };
  };

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Production Analysis</span>
        <h2 className="section-title-lesson">Attainable and Unattainable Combinations</h2>
        <p className="section-subtitle-lesson">
          Understanding which production combinations are possible, efficient, or beyond reach.
        </p>
      </div>

      <div className="content-card">
        <h3 className="card-title">
          <FaChartLine className="title-icon gold" />
          Three Types of Production Points
        </h3>

        <div className="attainable-graph-container">
          {/* Graph */}
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart margin={{ top: 20, right: 40, left: 20, bottom: 30 }}>
              <defs>
                <linearGradient id="ppcGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ffed4e" />
                </linearGradient>
                <filter id="pointGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
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
                domain={[0, 110]}
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
              >
                <Label
                  value="🌾 Wheat Production →"
                  offset={-15}
                  position="insideBottom"
                  style={{ fill: 'white', fontWeight: '600', fontSize: '12px' }}
                />
              </XAxis>

              <YAxis
                type="number"
                domain={[0, 110]}
                stroke="rgba(255,255,255,0.4)"
                tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 11 }}
              >
                <Label
                  value="🍚 Rice Production →"
                  angle={-90}
                  position="insideLeft"
                  style={{ fill: 'white', fontWeight: '600', fontSize: '12px' }}
                />
              </YAxis>

              <Tooltip content={CustomTooltip} />

              {/* PPC Curve */}
              <Line
                data={ppcCurve}
                type="monotone"
                dataKey="y"
                stroke="url(#ppcGradient)"
                strokeWidth={4}
                dot={false}
                isAnimationActive={true}
                animationDuration={800}
              />

              {/* Plot all points */}
              {examplePoints.map((point) => (
                <ReferenceDot
                  key={point.id}
                  x={point.x}
                  y={point.y}
                  r={point.id === selectedPoint ? 12 : 9}
                  fill={point.color}
                  stroke="white"
                  strokeWidth={point.id === selectedPoint ? 4 : 3}
                  style={{
                    cursor: 'pointer',
                    filter: point.id === selectedPoint ? 'url(#pointGlow)' : 'none'
                  }}
                  onClick={() => setSelectedPoint(point.id)}
                  label={{
                    value: point.id,
                    position: 'top',
                    fill: point.color,
                    fontSize: 14,
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>

          {/* Point Legend */}
          <div className="attainable-legend">
            <div className="attainable-legend-item">
              <div className="attainable-legend-dot-green" />
              <span className="attainable-legend-label">Efficient (On PPC)</span>
            </div>
            <div className="attainable-legend-item">
              <div className="attainable-legend-dot-gold" />
              <span className="attainable-legend-label">Inefficient (Inside PPC)</span>
            </div>
            <div className="attainable-legend-item">
              <div className="attainable-legend-dot-red" />
              <span className="attainable-legend-label">Unattainable (Outside PPC)</span>
            </div>
          </div>
        </div>

        {/* Point Selection Buttons */}
        <div className="attainable-point-selector">
          <h4 className="attainable-point-selector-heading">
            Click on a point to learn more:
          </h4>
          <div className="attainable-point-grid">
            {examplePoints.map((point) => (
              <button
                key={point.id}
                onClick={() => setSelectedPoint(point.id)}
                className={getPointButtonClass(point)}
                style={getPointButtonStyle(point)}
              >
                {point.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Point Details */}
        {selectedPointData && (
          <div className={getPointDetailsClass()} style={getPointDetailsStyle()}>
            <div className="attainable-point-details-content">
              <div className="attainable-point-details-icon" style={{ color: selectedPointData.color }}>
                {selectedPointData.icon}
              </div>
              <div className="attainable-point-details-text">
                <h3 className="attainable-point-details-title" style={{ color: selectedPointData.color }}>
                  {selectedPointData.label}: {selectedPointData.status}
                </h3>
                <p className="attainable-point-details-description">
                  {selectedPointData.description}
                </p>
                <div className="attainable-point-details-production">
                  <p className="attainable-point-details-production-text">
                    <strong>Production:</strong> {selectedPointData.x} units of Wheat + {selectedPointData.y} units of Rice
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="feature-grid attainable-feature-grid">
        <div className="feature-item">
          <div className="feature-icon green">
            <FaCheckCircle />
          </div>
          <h4>Points ON the PPC</h4>
          <ul className="bullet-list attainable-feature-list">
            <li><strong>Attainable:</strong> Can be produced with available resources</li>
            <li><strong>Efficient:</strong> All resources are fully employed</li>
            <li><strong>Maximum Production:</strong> Cannot produce more of one good without reducing the other</li>
          </ul>
        </div>

        <div className="feature-item">
          <div className="feature-icon gold">
            <FaExclamationTriangle />
          </div>
          <h4>Points INSIDE the PPC</h4>
          <ul className="bullet-list attainable-feature-list">
            <li><strong>Attainable:</strong> Can be easily produced</li>
            <li><strong>Inefficient:</strong> Resources are underutilized or unemployed</li>
            <li><strong>Room for Growth:</strong> Production can be increased without trade-offs</li>
          </ul>
        </div>

        <div className="feature-item">
          <div className="feature-icon red">
            <FaTimesCircle />
          </div>
          <h4>Points OUTSIDE the PPC</h4>
          <ul className="bullet-list attainable-feature-list">
            <li><strong>Unattainable:</strong> Cannot be produced currently</li>
            <li><strong>Requires Growth:</strong> Need more resources or better technology</li>
            <li><strong>Future Goal:</strong> May become attainable if PPC shifts outward</li>
          </ul>
        </div>
      </div>

      <div className="highlight-card purple attainable-movement-card">
        <div className="highlight-content">
          <h3 className="attainable-movement-heading">
            <FaArrowRight />
            Moving Between Points
          </h3>
          <p className="attainable-movement-text">
            <strong>From Inside to On the PPC:</strong> Achieve full employment and efficient use of resources.
          </p>
          <p className="attainable-movement-text-last">
            <strong>From On to Outside the PPC:</strong> Requires economic growth through increased resources,
            technological advancement, or improved productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AttainableUnattainable;
