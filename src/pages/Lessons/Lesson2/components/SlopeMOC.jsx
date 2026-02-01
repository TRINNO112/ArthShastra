// SlopeMOC.jsx - Slope and Marginal Opportunity Cost
import { useState } from 'react';
import { FaArrowDown, FaCalculator, FaArrowRight, FaChartLine, FaExclamationCircle } from 'react-icons/fa';
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
  ReferenceLine,
} from 'recharts';
import '../lesson2-retro.css';

// Helper function to get color variant class name
const getColorVariant = (color) => {
  const colorMap = {
    '#00ff88': 'green',
    '#ffd700': 'gold',
    '#ff9500': 'orange',
    '#ff6b00': 'dark-orange',
    '#ff0000': 'red'
  };
  return colorMap[color] || 'green';
};

// Helper function to get data-color attribute value
const getDataColor = (color) => {
  const colorMap = {
    '#00ff88': 'green',
    '#ffd700': 'gold',
    '#ff9500': 'orange',
    '#ff6b00': 'dark-orange',
    '#ff0000': 'red'
  };
  return colorMap[color] || 'green';
};

function SlopeMOC() {
  const [selectedSegment, setSelectedSegment] = useState('AB');

  // Production points for MOC calculation
  const productionPoints = [
    { label: 'A', wheat: 0, rice: 100 },
    { label: 'B', wheat: 20, rice: 89.4 },
    { label: 'C', wheat: 40, rice: 77.5 },
    { label: 'D', wheat: 60, rice: 63.2 },
    { label: 'E', wheat: 80, rice: 44.7 },
    { label: 'F', wheat: 100, rice: 0 }
  ];

  // Calculate MOC for each segment
  const mocSegments = [
    {
      id: 'AB',
      from: 'A',
      to: 'B',
      wheatGain: 20,
      riceLoss: 10.6,
      moc: 0.53,
      slope: -0.53,
      description: 'Moving from A to B, we gain 20 units of Wheat by sacrificing 10.6 units of Rice',
      color: '#00ff88'
    },
    {
      id: 'BC',
      from: 'B',
      to: 'C',
      wheatGain: 20,
      riceLoss: 11.9,
      moc: 0.60,
      slope: -0.60,
      description: 'Moving from B to C, we gain 20 units of Wheat by sacrificing 11.9 units of Rice',
      color: '#ffd700'
    },
    {
      id: 'CD',
      from: 'C',
      to: 'D',
      wheatGain: 20,
      riceLoss: 14.3,
      moc: 0.72,
      slope: -0.72,
      description: 'Moving from C to D, we gain 20 units of Wheat by sacrificing 14.3 units of Rice',
      color: '#ff9500'
    },
    {
      id: 'DE',
      from: 'D',
      to: 'E',
      wheatGain: 20,
      riceLoss: 18.5,
      moc: 0.93,
      slope: -0.93,
      description: 'Moving from D to E, we gain 20 units of Wheat by sacrificing 18.5 units of Rice',
      color: '#ff6b00'
    },
    {
      id: 'EF',
      from: 'E',
      to: 'F',
      wheatGain: 20,
      riceLoss: 44.7,
      moc: 2.24,
      slope: -2.24,
      description: 'Moving from E to F, we gain 20 units of Wheat by sacrificing 44.7 units of Rice',
      color: '#ff0000'
    }
  ];

  // Generate smooth PPC curve
  const generatePPC = () => {
    const points = [];
    for (let i = 0; i <= 100; i += 2) {
      const t = i / 100;
      const wheat = 100 * t;
      const rice = 100 * Math.sqrt(1 - t);
      points.push({ wheat, rice });
    }
    return points;
  };

  const ppcCurve = generatePPC();
  const selectedSegmentData = mocSegments.find(s => s.id === selectedSegment);
  const colorVariant = selectedSegmentData ? getColorVariant(selectedSegmentData.color) : 'green';

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div className="slope-moc-tooltip">
          <p className="slope-moc-tooltip-text">
            {'🌾 Wheat: '}
            <span className="slope-moc-tooltip-value-wheat">{data.wheat.toFixed(0)}</span>
          </p>
          <p className="slope-moc-tooltip-text">
            {'🍚 Rice: '}
            <span className="slope-moc-tooltip-value-rice">{data.rice.toFixed(0)}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="lesson-section">
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 className="retro-header-lg">SLOPE & MOC</h2>
        <p className="sys-text" style={{ color: 'var(--retro-dim)' }}>
          [MATH_ENGINE]: Calculating Marginal Opportunity Cost.
        </p>
      </div>

      <div className="terminal-card">
        <h3 className="retro-header-md">
          <FaArrowDown style={{ marginRight: '10px' }} />
          WHAT IS THE SLOPE?
        </h3>
        <p className="sys-text">
          The <strong style={{ color: 'var(--retro-green)' }}>slope of the PPC</strong> represents the rate at which one good must be sacrificed
          to produce more of another good. It is always <strong>negative</strong> because of the inverse relationship.
        </p>

        <div className="sys-alert">
          <strong>FORMULA:</strong> Slope = ΔRice / ΔWheat (Rise/Run)
        </div>

        <h3 className="retro-header-md" style={{ marginTop: '30px' }}>
          <FaCalculator style={{ marginRight: '10px' }} />
          MARGINAL OPPORTUNITY COST
        </h3>
        <p className="sys-text">
          MOC is the absolute value of the slope. |Slope| = Sacrificed / Gained.
        </p>


        {/* Interactive Graph */}
        <div className="slope-moc-graph-container">
          <h4 className="slope-moc-graph-header">
            <FaChartLine className="slope-moc-graph-header-icon" />
            Visualizing MOC Along the PPC
          </h4>

          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart margin={{ top: 20, right: 40, left: 20, bottom: 30 }}>
              <defs>
                <linearGradient id="ppcSlope" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00ff88" />
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ff6b6b" />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />

              <XAxis
                type="number"
                dataKey="wheat"
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
                dataKey="rice"
                stroke="url(#ppcSlope)"
                strokeWidth={4}
                dot={false}
              />

              {/* Highlight selected segment */}
              {selectedSegmentData && (
                <ReferenceLine
                  segment={[
                    {
                      x: productionPoints.find(p => p.label === selectedSegmentData.from).wheat,
                      y: productionPoints.find(p => p.label === selectedSegmentData.from).rice
                    },
                    {
                      x: productionPoints.find(p => p.label === selectedSegmentData.to).wheat,
                      y: productionPoints.find(p => p.label === selectedSegmentData.to).rice
                    }
                  ]}
                  stroke={selectedSegmentData.color}
                  strokeWidth={5}
                  strokeDasharray="8 4"
                />
              )}

              {/* Plot production points */}
              {productionPoints.map((point) => (
                <ReferenceDot
                  key={point.label}
                  x={point.wheat}
                  y={point.rice}
                  r={8}
                  fill="#ffd700"
                  stroke="white"
                  strokeWidth={2}
                  label={{
                    value: point.label,
                    position: 'top',
                    fill: 'white',
                    fontSize: 13,
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Segment Selection */}
        <div className="slope-moc-segment-selection">
          <h4 className="slope-moc-segment-header">
            <FaArrowRight className="slope-moc-segment-header-icon" />
            Select a Movement to Calculate MOC:
          </h4>

          <div className="slope-moc-segment-grid">
            {mocSegments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setSelectedSegment(segment.id)}
                data-color={getDataColor(segment.color)}
                className={`slope-moc-segment-button ${selectedSegment === segment.id
                  ? 'slope-moc-segment-button-active'
                  : 'slope-moc-segment-button-inactive'
                  }`}
                style={{
                  borderColor: segment.color,
                  background: selectedSegment === segment.id
                    ? `linear-gradient(135deg, ${segment.color}, ${segment.color}cc)`
                    : 'rgba(255,255,255,0.05)',
                  boxShadow: selectedSegment === segment.id
                    ? `0 4px 20px ${segment.color}50`
                    : 'none'
                }}
              >
                {segment.from} → {segment.to}
              </button>
            ))}
          </div>
        </div>

        {/* MOC Calculation Details */}
        {selectedSegmentData && (
          <div
            className={`slope-moc-calculation-container slope-moc-calculation-container-${colorVariant}`}
          >
            <h3 className={`slope-moc-calculation-title slope-moc-calculation-title-${colorVariant}`}>
              Movement from {selectedSegmentData.from} to {selectedSegmentData.to}
            </h3>

            <p className="slope-moc-calculation-description">
              {selectedSegmentData.description}
            </p>

            <div className="slope-moc-stats-grid">
              <div className="slope-moc-stat-box">
                <p className="slope-moc-stat-label">Wheat Gained</p>
                <p className="slope-moc-stat-value slope-moc-stat-value-positive">
                  +{selectedSegmentData.wheatGain} units
                </p>
              </div>

              <div className="slope-moc-stat-box">
                <p className="slope-moc-stat-label">Rice Sacrificed</p>
                <p className="slope-moc-stat-value slope-moc-stat-value-negative">
                  -{selectedSegmentData.riceLoss} units
                </p>
              </div>
            </div>

            <div className="slope-moc-result-box">
              <p className="slope-moc-result-label">Calculation:</p>
              <p className="slope-moc-result-formula">
                MOC = {selectedSegmentData.riceLoss} ÷ {selectedSegmentData.wheatGain} = {selectedSegmentData.moc.toFixed(2)} units of Rice per unit of Wheat
              </p>
              <p className="slope-moc-result-slope">
                Slope = -{selectedSegmentData.moc.toFixed(2)}
              </p>
            </div>
          </div>
        )}

        {/* MOC Summary Table */}
        <div className="slope-moc-summary-section">
          <h4 className="slope-moc-summary-title">
            Summary: Increasing Marginal Opportunity Cost
          </h4>

          <div className="slope-moc-table-container">
            <table className="slope-moc-table">
              <thead>
                <tr className="slope-moc-table-header">
                  <th className="slope-moc-th slope-moc-th-movement">Movement</th>
                  <th className="slope-moc-th slope-moc-th-wheat">Wheat Gained</th>
                  <th className="slope-moc-th slope-moc-th-rice">Rice Lost</th>
                  <th className="slope-moc-th slope-moc-th-moc">MOC</th>
                  <th className="slope-moc-th slope-moc-th-trend">Trend</th>
                </tr>
              </thead>
              <tbody>
                {mocSegments.map((segment, index) => (
                  <tr
                    key={segment.id}
                    className={`slope-moc-tr ${index % 2 === 0 ? 'slope-moc-tr-even' : 'slope-moc-tr-odd'}`}
                  >
                    <td className="slope-moc-td slope-moc-td-movement">
                      {segment.from} → {segment.to}
                    </td>
                    <td className="slope-moc-td">
                      +{segment.wheatGain}
                    </td>
                    <td className="slope-moc-td">
                      -{segment.riceLoss}
                    </td>
                    <td
                      className="slope-moc-td slope-moc-td-moc"
                      style={{ color: segment.color }}
                    >
                      {segment.moc.toFixed(2)}
                    </td>
                    <td className="slope-moc-td slope-moc-td-trend">
                      {index === 0 ? '➡️' : (mocSegments[index - 1].moc < segment.moc ? '📈' : '➡️')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="highlight-card red slope-moc-highlight-card">
        <div className="highlight-content">
          <h3 className="slope-moc-highlight-title">
            <FaExclamationCircle />
            Why Does MOC Increase?
          </h3>
          <p className="slope-moc-highlight-text">
            The PPC is <strong>concave to the origin</strong> (bows outward) because of <strong>increasing marginal opportunity cost</strong>.
            This occurs because resources are not equally efficient in producing both goods. As we produce more Wheat, we must
            shift resources that are increasingly better suited for Rice production, making each additional unit of Wheat
            more costly in terms of Rice sacrificed. This is why the slope becomes steeper (MOC increases) as we move along the curve.
          </p>
        </div>
      </div>

      <div className="feature-grid slope-moc-feature-grid">
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaArrowDown />
          </div>
          <h4>Negative Slope</h4>
          <p className="slope-moc-feature-text">
            The PPC always slopes downward from left to right, indicating that producing more of one good requires
            sacrificing some of the other good due to limited resources.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon cyan">
            <FaCalculator />
          </div>
          <h4>MOC Formula</h4>
          <p className="slope-moc-feature-text">
            MOC = (Units of Good Y Sacrificed) / (Units of Good X Gained). It represents the rate of substitution
            between two goods and measures the true economic cost of production decisions.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon purple">
            <FaChartLine />
          </div>
          <h4>Concave Shape</h4>
          <p className="slope-moc-feature-text">
            The concave shape (bowing outward) of the PPC is a direct result of increasing MOC. If resources were
            equally efficient for both goods, the PPC would be a straight line with constant MOC.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SlopeMOC;