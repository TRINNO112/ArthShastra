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

function SlopeMOC() {
  const [selectedSegment, setSelectedSegment] = useState('AB');

  // Production points for MOC calculation - calculated to match PPC curve formula: y = 100 * sqrt(1 - x/100)
  const productionPoints = [
    { label: 'A', wheat: 0, rice: 100 },      // 100 * sqrt(1 - 0) = 100
    { label: 'B', wheat: 20, rice: 89.4 },    // 100 * sqrt(1 - 0.2) = 89.44
    { label: 'C', wheat: 40, rice: 77.5 },    // 100 * sqrt(1 - 0.4) = 77.46
    { label: 'D', wheat: 60, rice: 63.2 },    // 100 * sqrt(1 - 0.6) = 63.25
    { label: 'E', wheat: 80, rice: 44.7 },    // 100 * sqrt(1 - 0.8) = 44.72
    { label: 'F', wheat: 100, rice: 0 }       // 100 * sqrt(1 - 1) = 0
  ];

  // Calculate MOC for each segment
  const mocSegments = [
    {
      id: 'AB',
      from: 'A',
      to: 'B',
      wheatGain: 20,
      riceLoss: 10.6, // 100 - 89.4 = 10.6
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
      riceLoss: 11.9, // 89.4 - 77.5 = 11.9
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
      riceLoss: 14.3, // 77.5 - 63.2 = 14.3
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
      riceLoss: 18.5, // 63.2 - 44.7 = 18.5
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
      riceLoss: 44.7, // 44.7 - 0 = 44.7
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

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(25, 25, 45, 0.98))',
          border: '2px solid #ffd700',
          padding: '12px 16px',
          borderRadius: '10px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
        }}>
          <p style={{ color: 'white', fontSize: '0.9rem', margin: '5px 0' }}>
            🌾 Wheat: <strong style={{ color: '#00ff88' }}>{data.wheat.toFixed(0)}</strong>
          </p>
          <p style={{ color: 'white', fontSize: '0.9rem', margin: '5px 0' }}>
            🍚 Rice: <strong style={{ color: '#00d4ff' }}>{data.rice.toFixed(0)}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Advanced Concepts</span>
        <h2 className="section-title-lesson">Slope and Marginal Opportunity Cost</h2>
        <p className="section-subtitle-lesson">
          Understanding the mathematical relationship between slope and opportunity cost on the PPC.
        </p>
      </div>

      <div className="content-card">
        <h3 className="card-title">
          <FaArrowDown className="title-icon gold" />
          What is the Slope of PPC?
        </h3>

        <div style={{
          background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(0,150,255,0.15))',
          padding: '22px',
          borderRadius: '14px',
          border: '2px solid rgba(255,215,0,0.3)',
          marginBottom: '25px'
        }}>
          <p style={{
            color: 'rgba(255,255,255,0.9)',
            margin: '0 0 15px 0',
            fontSize: '0.95rem',
            lineHeight: '1.7'
          }}>
            The <strong style={{ color: '#ffd700' }}>slope of the PPC</strong> represents the rate at which one good must be sacrificed
            to produce more of another good. It is always <strong>negative</strong> because of the inverse relationship between the two goods.
          </p>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '18px',
            borderRadius: '10px',
            textAlign: 'center'
          }}>
            <p style={{
              color: '#00ff88',
              fontSize: '1.15rem',
              margin: 0,
              fontWeight: '700',
              fontFamily: 'monospace'
            }}>
              Slope = ΔRice / ΔWheat = -(Units of Rice Sacrificed) / (Units of Wheat Gained)
            </p>
          </div>
        </div>

        <h3 className="card-title" style={{ marginTop: '35px' }}>
          <FaCalculator className="title-icon cyan" />
          Marginal Opportunity Cost (MOC)
        </h3>

        <p className="intro-text">
          <strong>Marginal Opportunity Cost (MOC)</strong> is the amount of one good that must be given up to produce
          one additional unit of another good. It is the <strong>absolute value of the slope</strong> of the PPC.
        </p>

        <div style={{
          background: 'linear-gradient(145deg, rgba(10,10,25,0.6), rgba(20,15,40,0.6))',
          padding: '20px',
          borderRadius: '14px',
          border: '2px solid rgba(0,255,136,0.3)',
          marginTop: '20px',
          marginBottom: '25px'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '15px',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '10px'
          }}>
            <p style={{
              color: '#00d4ff',
              fontSize: '1.1rem',
              margin: '0 0 10px 0',
              fontWeight: '700',
              fontFamily: 'monospace'
            }}>
              MOC = |Slope| = Units of Rice Lost / Units of Wheat Gained
            </p>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem',
              margin: 0,
              fontStyle: 'italic'
            }}>
              MOC tells us how many units of Rice we sacrifice per unit of Wheat produced
            </p>
          </div>
        </div>

        {/* Interactive Graph */}
        <div style={{
          background: 'linear-gradient(160deg, rgba(10,10,25,0.95), rgba(20,15,40,0.95))',
          padding: '25px',
          borderRadius: '18px',
          border: '1px solid rgba(255,215,0,0.15)',
          marginTop: '30px'
        }}>
          <h4 style={{
            color: 'white',
            marginBottom: '20px',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaChartLine style={{ color: '#ffd700' }} />
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
        <div style={{ marginTop: '25px' }}>
          <h4 style={{
            color: 'white',
            marginBottom: '15px',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FaArrowRight style={{ color: '#ffd700' }} />
            Select a Movement to Calculate MOC:
          </h4>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px'
          }}>
            {mocSegments.map((segment) => (
              <button
                key={segment.id}
                onClick={() => setSelectedSegment(segment.id)}
                style={{
                  padding: '14px',
                  background: selectedSegment === segment.id
                    ? `linear-gradient(135deg, ${segment.color}, ${segment.color}cc)`
                    : 'rgba(255,255,255,0.05)',
                  color: 'white',
                  border: `2px solid ${segment.color}`,
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: selectedSegment === segment.id ? '700' : '500',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedSegment === segment.id ? `0 4px 20px ${segment.color}50` : 'none'
                }}
              >
                {segment.from} → {segment.to}
              </button>
            ))}
          </div>
        </div>

        {/* MOC Calculation Details */}
        {selectedSegmentData && (
          <div style={{
            marginTop: '25px',
            padding: '25px',
            background: `linear-gradient(145deg, ${selectedSegmentData.color}15, ${selectedSegmentData.color}08)`,
            borderLeft: `5px solid ${selectedSegmentData.color}`,
            borderRadius: '14px',
            boxShadow: `0 4px 20px ${selectedSegmentData.color}25`
          }}>
            <h3 style={{
              color: selectedSegmentData.color,
              margin: '0 0 15px 0',
              fontSize: '1.3rem',
              fontWeight: '700'
            }}>
              Movement from {selectedSegmentData.from} to {selectedSegmentData.to}
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              marginBottom: '20px'
            }}>
              {selectedSegmentData.description}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '15px',
                borderRadius: '10px'
              }}>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                  margin: '0 0 5px 0'
                }}>
                  Wheat Gained
                </p>
                <p style={{
                  color: '#00ff88',
                  fontSize: '1.5rem',
                  margin: 0,
                  fontWeight: '700'
                }}>
                  +{selectedSegmentData.wheatGain} units
                </p>
              </div>

              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '15px',
                borderRadius: '10px'
              }}>
                <p style={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                  margin: '0 0 5px 0'
                }}>
                  Rice Sacrificed
                </p>
                <p style={{
                  color: '#ff6b6b',
                  fontSize: '1.5rem',
                  margin: 0,
                  fontWeight: '700'
                }}>
                  -{selectedSegmentData.riceLoss} units
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '18px',
              borderRadius: '12px',
              border: '2px solid rgba(255,215,0,0.3)'
            }}>
              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.9rem',
                margin: '0 0 10px 0'
              }}>
                Calculation:
              </p>
              <p style={{
                color: '#ffd700',
                fontSize: '1.1rem',
                margin: '0 0 8px 0',
                fontFamily: 'monospace',
                fontWeight: '600'
              }}>
                MOC = {selectedSegmentData.riceLoss} ÷ {selectedSegmentData.wheatGain} = {selectedSegmentData.moc.toFixed(2)} units of Rice per unit of Wheat
              </p>
              <p style={{
                color: '#00d4ff',
                fontSize: '1.1rem',
                margin: 0,
                fontFamily: 'monospace',
                fontWeight: '600'
              }}>
                Slope = -{selectedSegmentData.moc.toFixed(2)}
              </p>
            </div>
          </div>
        )}

        {/* MOC Summary Table */}
        <div style={{ marginTop: '35px' }}>
          <h4 style={{
            color: 'white',
            marginBottom: '15px',
            fontSize: '1.2rem'
          }}>
            Summary: Increasing Marginal Opportunity Cost
          </h4>

          <div style={{
            overflowX: 'auto',
            borderRadius: '14px',
            border: '1px solid rgba(255,215,0,0.2)',
            background: 'linear-gradient(145deg, rgba(10,10,25,0.6), rgba(20,15,40,0.6))'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.9rem'
            }}>
              <thead>
                <tr style={{
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(0,150,255,0.2))',
                  borderBottom: '2px solid rgba(255,215,0,0.4)'
                }}>
                  <th style={{ padding: '12px', textAlign: 'center', color: '#ffd700', fontWeight: '700' }}>Movement</th>
                  <th style={{ padding: '12px', textAlign: 'center', color: '#00ff88', fontWeight: '700' }}>Wheat Gained</th>
                  <th style={{ padding: '12px', textAlign: 'center', color: '#ff6b6b', fontWeight: '700' }}>Rice Lost</th>
                  <th style={{ padding: '12px', textAlign: 'center', color: '#00d4ff', fontWeight: '700' }}>MOC</th>
                  <th style={{ padding: '12px', textAlign: 'center', color: 'white', fontWeight: '700' }}>Trend</th>
                </tr>
              </thead>
              <tbody>
                {mocSegments.map((segment, index) => (
                  <tr
                    key={segment.id}
                    style={{
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      background: index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'
                    }}
                  >
                    <td style={{ padding: '14px', textAlign: 'center', color: 'white', fontWeight: '600' }}>
                      {segment.from} → {segment.to}
                    </td>
                    <td style={{ padding: '14px', textAlign: 'center', color: 'white' }}>
                      +{segment.wheatGain}
                    </td>
                    <td style={{ padding: '14px', textAlign: 'center', color: 'white' }}>
                      -{segment.riceLoss}
                    </td>
                    <td style={{ padding: '14px', textAlign: 'center', color: segment.color, fontWeight: '700' }}>
                      {segment.moc.toFixed(2)}
                    </td>
                    <td style={{ padding: '14px', textAlign: 'center', fontSize: '1.2rem' }}>
                      {index > 0 && mocSegments[index - 1].moc < segment.moc ? '📈' : index === 0 ? '➡️' : '➡️'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="highlight-card red" style={{ marginTop: '30px' }}>
        <div className="highlight-content">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <FaExclamationCircle />
            Why Does MOC Increase?
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
            The PPC is <strong>concave to the origin</strong> (bows outward) because of <strong>increasing marginal opportunity cost</strong>.
            This occurs because resources are not equally efficient in producing both goods. As we produce more Wheat, we must
            shift resources that are increasingly better suited for Rice production, making each additional unit of Wheat
            more costly in terms of Rice sacrificed. This is why the slope becomes steeper (MOC increases) as we move along the curve.
          </p>
        </div>
      </div>

      <div className="feature-grid" style={{ marginTop: '25px' }}>
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaArrowDown />
          </div>
          <h4>Negative Slope</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            The PPC always slopes downward from left to right, indicating that producing more of one good requires
            sacrificing some of the other good due to limited resources.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon cyan">
            <FaCalculator />
          </div>
          <h4>MOC Formula</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            MOC = (Units of Good Y Sacrificed) / (Units of Good X Gained). It represents the rate of substitution
            between two goods and measures the true economic cost of production decisions.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon purple">
            <FaChartLine />
          </div>
          <h4>Concave Shape</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            The concave shape (bowing outward) of the PPC is a direct result of increasing MOC. If resources were
            equally efficient for both goods, the PPC would be a straight line with constant MOC.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SlopeMOC;
