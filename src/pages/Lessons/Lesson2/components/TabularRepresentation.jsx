// TabularRepresentation.jsx - Tabular Representation of PPC
import { useState } from 'react';
import { FaTable, FaCalculator, FaExchangeAlt, FaLightbulb, FaChartBar } from 'react-icons/fa';
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
} from 'recharts';

function TabularRepresentation() {
  const [selectedRow, setSelectedRow] = useState(null);

  // Production possibilities schedule - calculated to match the PPC curve formula
  const productionSchedule = [
    {
      combination: 'A',
      wheat: 0,
      rice: 100, // 100 * sqrt(1 - 0) = 100
      opportunityCost: '-',
      description: 'All resources used for Rice production'
    },
    {
      combination: 'B',
      wheat: 20,
      rice: 89.4, // 100 * sqrt(1 - 0.2) = 89.44
      opportunityCost: '10.6 units of Rice',
      description: 'Shifting some resources to Wheat'
    },
    {
      combination: 'C',
      wheat: 40,
      rice: 77.5, // 100 * sqrt(1 - 0.4) = 77.46
      opportunityCost: '11.9 units of Rice',
      description: 'More resources allocated to Wheat'
    },
    {
      combination: 'D',
      wheat: 60,
      rice: 63.2, // 100 * sqrt(1 - 0.6) = 63.25
      opportunityCost: '14.3 units of Rice',
      description: 'Balanced production mix'
    },
    {
      combination: 'E',
      wheat: 80,
      rice: 44.7, // 100 * sqrt(1 - 0.8) = 44.72
      opportunityCost: '18.5 units of Rice',
      description: 'Emphasis on Wheat production'
    },
    {
      combination: 'F',
      wheat: 100,
      rice: 0, // 100 * sqrt(1 - 1) = 0
      opportunityCost: '44.7 units of Rice',
      description: 'All resources used for Wheat production'
    }
  ];

  // Generate smooth PPC curve for graph
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
        <span className="section-badge-lesson">Data Analysis</span>
        <h2 className="section-title-lesson">Tabular Representation of PPC</h2>
        <p className="section-subtitle-lesson">
          Understanding production possibilities through numerical data and schedules.
        </p>
      </div>

      <div className="content-card">
        <h3 className="card-title">
          <FaTable className="title-icon gold" />
          Production Possibilities Schedule
        </h3>
        <p className="intro-text">
          The PPC can be represented in tabular form, showing various combinations of two goods that can be produced
          with given resources. Each row represents a different allocation of resources between Wheat and Rice.
        </p>

        {/* Production Schedule Table */}
        <div style={{
          overflowX: 'auto',
          marginTop: '25px',
          borderRadius: '16px',
          border: '1px solid rgba(255,215,0,0.2)',
          background: 'linear-gradient(145deg, rgba(10,10,25,0.6), rgba(20,15,40,0.6))'
        }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.95rem'
          }}>
            <thead>
              <tr style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(0,150,255,0.2))',
                borderBottom: '2px solid rgba(255,215,0,0.4)'
              }}>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  color: '#ffd700',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}>
                  Combination
                </th>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  color: '#00ff88',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}>
                  🌾 Wheat (units)
                </th>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  color: '#00d4ff',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}>
                  🍚 Rice (units)
                </th>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  color: '#ff6b6b',
                  fontWeight: '700',
                  fontSize: '1rem'
                }}>
                  Opportunity Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {productionSchedule.map((row, index) => (
                <tr
                  key={row.combination}
                  onClick={() => setSelectedRow(selectedRow === row.combination ? null : row.combination)}
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    background: selectedRow === row.combination
                      ? 'rgba(255,215,0,0.15)'
                      : index % 2 === 0
                        ? 'rgba(255,255,255,0.02)'
                        : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedRow !== row.combination) {
                      e.currentTarget.style.background = 'rgba(255,215,0,0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedRow !== row.combination) {
                      e.currentTarget.style.background = index % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent';
                    }
                  }}
                >
                  <td style={{
                    padding: '18px 20px',
                    textAlign: 'center',
                    color: 'white',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    <span style={{
                      background: selectedRow === row.combination ? '#ffd700' : 'rgba(255,215,0,0.2)',
                      color: selectedRow === row.combination ? '#0a0a15' : '#ffd700',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      fontWeight: '700'
                    }}>
                      {row.combination}
                    </span>
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {row.wheat}
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}>
                    {row.rice}
                  </td>
                  <td style={{
                    padding: '18px 20px',
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '0.9rem',
                    fontStyle: row.opportunityCost === '-' ? 'italic' : 'normal'
                  }}>
                    {row.opportunityCost}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Row Details */}
        {selectedRow && (
          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: 'linear-gradient(145deg, rgba(255,215,0,0.15), rgba(0,150,255,0.15))',
            borderLeft: '5px solid #ffd700',
            borderRadius: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <FaLightbulb style={{ color: '#ffd700', fontSize: '1.5rem' }} />
              <h4 style={{ color: '#ffd700', margin: 0, fontSize: '1.1rem' }}>
                Combination {selectedRow}
              </h4>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              margin: 0,
              fontSize: '0.95rem',
              lineHeight: '1.6'
            }}>
              {productionSchedule.find(row => row.combination === selectedRow)?.description}
            </p>
          </div>
        )}

        {/* Graph Representation */}
        <div style={{
          marginTop: '35px',
          background: 'linear-gradient(160deg, rgba(10,10,25,0.95), rgba(20,15,40,0.95))',
          padding: '25px',
          borderRadius: '18px',
          border: '1px solid rgba(255,215,0,0.15)'
        }}>
          <h4 style={{
            color: 'white',
            marginBottom: '20px',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <FaChartBar style={{ color: '#ffd700' }} />
            Graphical Representation
          </h4>

          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart margin={{ top: 20, right: 40, left: 20, bottom: 30 }}>
              <defs>
                <linearGradient id="curveGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#ffed4e" />
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
                stroke="url(#curveGradient)"
                strokeWidth={3}
                dot={false}
              />

              {/* Plot schedule points */}
              {productionSchedule.map((point) => (
                <ReferenceDot
                  key={point.combination}
                  x={point.wheat}
                  y={point.rice}
                  r={selectedRow === point.combination ? 10 : 7}
                  fill={selectedRow === point.combination ? '#00ff88' : '#ffd700'}
                  stroke="white"
                  strokeWidth={selectedRow === point.combination ? 3 : 2}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedRow(point.combination)}
                  label={{
                    value: point.combination,
                    position: 'top',
                    fill: selectedRow === point.combination ? '#00ff88' : '#ffd700',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>

          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.85rem',
            textAlign: 'center',
            marginTop: '15px',
            fontStyle: 'italic'
          }}>
            Click on any point in the table or graph to highlight it
          </p>
        </div>
      </div>

      <div className="feature-grid" style={{ marginTop: '30px' }}>
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaCalculator />
          </div>
          <h4>Reading the Schedule</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            Each row represents a production possibility. Moving down the table, we produce more Wheat and less Rice,
            illustrating the trade-off between the two goods.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon cyan">
            <FaExchangeAlt />
          </div>
          <h4>Increasing Opportunity Cost</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            Notice how the opportunity cost increases as we produce more Wheat. From A to B, we sacrifice 4 units of Rice,
            but from E to F, we sacrifice 55 units of Rice for the same 20-unit increase in Wheat.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon purple">
            <FaLightbulb />
          </div>
          <h4>Practical Application</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            Governments and businesses use production schedules to make informed decisions about resource allocation,
            understanding the true cost of choosing one production mix over another.
          </p>
        </div>
      </div>

      <div className="highlight-card green" style={{ marginTop: '30px' }}>
        <div className="highlight-content">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <FaTable />
            Key Insights from the Table
          </h3>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0, paddingLeft: '20px' }}>
            <li><strong>All combinations are efficient:</strong> Every row represents full resource utilization</li>
            <li><strong>Scarcity is evident:</strong> We cannot have maximum of both goods simultaneously</li>
            <li><strong>Choice involves trade-offs:</strong> More of one good means less of the other</li>
            <li><strong>Opportunity cost varies:</strong> The cost of producing additional units changes along the curve</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TabularRepresentation;
