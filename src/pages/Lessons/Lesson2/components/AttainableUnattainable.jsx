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
          <div style={{
            background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(25, 25, 45, 0.98))',
            border: '2px solid #ffd700',
            padding: '12px 16px',
            borderRadius: '10px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
          }}>
            <p style={{ color: 'white', fontSize: '0.9rem', margin: '5px 0' }}>
              <span>🌾 Wheat: <strong style={{ color: '#00ff88' }}>{data.x.toFixed(1)}</strong></span>
            </p>
            <p style={{ color: 'white', fontSize: '0.9rem', margin: '5px 0' }}>
              <span>🍚 Rice: <strong style={{ color: '#00d4ff' }}>{data.y.toFixed(1)}</strong></span>
            </p>
          </div>
        );
      }
    }
    return null;
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

        <div style={{
          background: 'linear-gradient(160deg, rgba(10,10,25,0.95), rgba(20,15,40,0.95))',
          padding: '30px',
          borderRadius: '20px',
          border: '1px solid rgba(255,215,0,0.15)',
          marginTop: '20px'
        }}>
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
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            marginTop: '25px',
            flexWrap: 'wrap',
            padding: '15px',
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#00ff88',
                border: '3px solid white'
              }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>Efficient (On PPC)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#ffd700',
                border: '3px solid white'
              }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>Inefficient (Inside PPC)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: '#ff6b6b',
                border: '3px solid white'
              }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>Unattainable (Outside PPC)</span>
            </div>
          </div>
        </div>

        {/* Point Selection Buttons */}
        <div style={{ marginTop: '30px' }}>
          <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '1.1rem' }}>
            Click on a point to learn more:
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px'
          }}>
            {examplePoints.map((point) => (
              <button
                key={point.id}
                onClick={() => setSelectedPoint(point.id)}
                style={{
                  padding: '12px',
                  background: selectedPoint === point.id
                    ? `linear-gradient(135deg, ${point.color}, ${point.color}cc)`
                    : 'rgba(255,255,255,0.05)',
                  color: selectedPoint === point.id ? '#0a0a15' : 'white',
                  border: `2px solid ${point.color}`,
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: selectedPoint === point.id ? '700' : '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedPoint === point.id ? `0 4px 20px ${point.color}40` : 'none'
                }}
              >
                {point.label}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Point Details */}
        {selectedPointData && (
          <div style={{
            marginTop: '25px',
            padding: '25px',
            background: `linear-gradient(145deg, ${selectedPointData.color}15, ${selectedPointData.color}08)`,
            borderLeft: `5px solid ${selectedPointData.color}`,
            borderRadius: '14px',
            boxShadow: `0 4px 20px ${selectedPointData.color}20`
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
              <div style={{
                fontSize: '2.5rem',
                color: selectedPointData.color,
                marginTop: '5px'
              }}>
                {selectedPointData.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  color: selectedPointData.color,
                  margin: '0 0 8px 0',
                  fontSize: '1.3rem',
                  fontWeight: '700'
                }}>
                  {selectedPointData.label}: {selectedPointData.status}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.85)',
                  margin: '0 0 12px 0',
                  fontSize: '0.95rem',
                  lineHeight: '1.7'
                }}>
                  {selectedPointData.description}
                </p>
                <div style={{
                  background: 'rgba(0,0,0,0.2)',
                  padding: '12px 15px',
                  borderRadius: '8px',
                  fontSize: '0.9rem'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                    <strong>Production:</strong> {selectedPointData.x} units of Wheat + {selectedPointData.y} units of Rice
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="feature-grid" style={{ marginTop: '30px' }}>
        <div className="feature-item">
          <div className="feature-icon green">
            <FaCheckCircle />
          </div>
          <h4>Points ON the PPC</h4>
          <ul className="bullet-list" style={{ fontSize: '0.88rem' }}>
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
          <ul className="bullet-list" style={{ fontSize: '0.88rem' }}>
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
          <ul className="bullet-list" style={{ fontSize: '0.88rem' }}>
            <li><strong>Unattainable:</strong> Cannot be produced currently</li>
            <li><strong>Requires Growth:</strong> Need more resources or better technology</li>
            <li><strong>Future Goal:</strong> May become attainable if PPC shifts outward</li>
          </ul>
        </div>
      </div>

      <div className="highlight-card purple" style={{ marginTop: '30px' }}>
        <div className="highlight-content">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaArrowRight />
            Moving Between Points
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '10px' }}>
            <strong>From Inside to On the PPC:</strong> Achieve full employment and efficient use of resources.
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
            <strong>From On to Outside the PPC:</strong> Requires economic growth through increased resources,
            technological advancement, or improved productivity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AttainableUnattainable;
