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
import '../lesson2-retro.css';

function TabularRepresentation() {
  const [selectedRow, setSelectedRow] = useState(null);

  // Production possibilities schedule
  const productionSchedule = [
    {
      combination: 'A',
      wheat: 0,
      rice: 100,
      opportunityCost: '-',
      description: 'All resources used for Rice production'
    },
    {
      combination: 'B',
      wheat: 20,
      rice: 89.4,
      opportunityCost: '10.6 units of Rice',
      description: 'Shifting some resources to Wheat'
    },
    {
      combination: 'C',
      wheat: 40,
      rice: 77.5,
      opportunityCost: '11.9 units of Rice',
      description: 'More resources allocated to Wheat'
    },
    {
      combination: 'D',
      wheat: 60,
      rice: 63.2,
      opportunityCost: '14.3 units of Rice',
      description: 'Balanced production mix'
    },
    {
      combination: 'E',
      wheat: 80,
      rice: 44.7,
      opportunityCost: '18.5 units of Rice',
      description: 'Emphasis on Wheat production'
    },
    {
      combination: 'F',
      wheat: 100,
      rice: 0,
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

  // Helper function for row classes
  const getRowClass = (combination, index) => {
    const baseClass = 'tabular-table-row';
    const evenClass = index % 2 === 0 ? 'tabular-table-row-even' : '';
    const selectedClass = selectedRow === combination ? 'tabular-table-row-selected' : '';
    return `${baseClass} ${evenClass} ${selectedClass}`.trim();
  };

  // Helper function for combination badge classes
  const getBadgeClass = (combination) => {
    const baseClass = 'tabular-table-combination-badge';
    const selectedClass = selectedRow === combination ? 'tabular-table-combination-badge-selected' : 'tabular-table-combination-badge-normal';
    return `${baseClass} ${selectedClass}`;
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div className="ppc-visualizer-tooltip">
          <p className="ppc-visualizer-tooltip-title">
            Combination
          </p>
          <p className="ppc-visualizer-tooltip-row">
            <span>🌾 Wheat:</span>
            <strong className="ppc-visualizer-tooltip-value-green">{data.wheat.toFixed(0)}</strong>
          </p>
          <p className="ppc-visualizer-tooltip-row">
            <span>🍚 Rice:</span>
            <strong className="ppc-visualizer-tooltip-value-cyan">{data.rice.toFixed(0)}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="lesson-section">
      <div className="section-header">
        DATA LOG: PRODUCTION SCHEDULE
      </div>

      <div className="feature-box">
        <p>
          <strong>[RAW_DATA]</strong><br />
          Numerical breakdown of the frontier. Each row is a valid production state.
        </p>
      </div>

      <div className="cards-grid">
        {/* Table Card */}
        <div className="card no-hover" style={{ gridColumn: 'span 2' }}>
          <div className="card-content">
            <h3>PRODUCTION POSSIBILITIES SCHEDULE</h3>
            <div className="tabular-table-container">
              <table className="tabular-table" style={{ width: '100%', borderCollapse: 'collapse', border: '4px solid #000' }}>
                <thead style={{ backgroundColor: '#000', color: '#fff' }}>
                  <tr>
                    <th style={{ padding: '15px', textAlign: 'left', border: '2px solid #000' }}>Combination</th>
                    <th style={{ padding: '15px', textAlign: 'left', border: '2px solid #000' }}>Wheat (Units)</th>
                    <th style={{ padding: '15px', textAlign: 'left', border: '2px solid #000' }}>Rice (Units)</th>
                    <th style={{ padding: '15px', textAlign: 'left', border: '2px solid #000' }}>Opportunity Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {productionSchedule.map((row, index) => (
                    <tr
                      key={row.combination}
                      onClick={() => setSelectedRow(selectedRow === row.combination ? null : row.combination)}
                      style={{
                        backgroundColor: selectedRow === row.combination ? '#000' : (index % 2 === 0 ? '#f0f0f0' : '#fff'),
                        color: selectedRow === row.combination ? '#fff' : '#000',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      <td style={{ padding: '15px', border: '2px solid #000', fontWeight: 'bold' }}>{row.combination}</td>
                      <td style={{ padding: '15px', border: '2px solid #000' }}>{row.wheat}</td>
                      <td style={{ padding: '15px', border: '2px solid #000' }}>{row.rice}</td>
                      <td style={{ padding: '15px', border: '2px solid #000', fontStyle: 'italic' }}>{row.opportunityCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedRow && (
              <div style={{ marginTop: '20px', padding: '15px', border: '4px solid #000', backgroundColor: '#000', color: '#fff' }}>
                <strong>DETAILS: </strong>
                {productionSchedule.find(row => row.combination === selectedRow)?.description}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Graph Card */}
      <div className="card no-hover">
        <div className="card-content">
          <h3>GRAPHICAL REPRESENTATION</h3>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis
                type="number"
                dataKey="wheat"
                domain={[0, 110]}
                label={{ value: 'Wheat', position: 'bottom', offset: 0, fill: '#000' }}
                stroke="#000"
              />
              <YAxis
                type="number"
                domain={[0, 110]}
                label={{ value: 'Rice', angle: -90, position: 'insideLeft', fill: '#000' }}
                stroke="#000"
              />
              <Tooltip content={CustomTooltip} />
              <Line
                data={ppcCurve}
                type="monotone"
                dataKey="rice"
                stroke="#000"
                strokeWidth={3}
                dot={false}
              />
              {productionSchedule.map((point) => (
                <ReferenceDot
                  key={point.combination}
                  x={point.wheat}
                  y={point.rice}
                  r={6}
                  fill={selectedRow === point.combination ? "#fff" : "#000"}
                  stroke="#000"
                  strokeWidth={2}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedRow(point.combination)}
                />
              ))}
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

    </section>
  );
}

export default TabularRepresentation;
