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
import './components.css';

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
        <div className="attainable-tooltip">
          <p className="attainable-tooltip-text">
            🌾 Wheat: <strong className="attainable-tooltip-value-green">{data.wheat.toFixed(0)}</strong>
          </p>
          <p className="attainable-tooltip-text">
            🍚 Rice: <strong className="attainable-tooltip-value-cyan">{data.rice.toFixed(0)}</strong>
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
        <div className="tabular-table-container">
          <table className="tabular-table">
            <thead className="tabular-table-head">
              <tr>
                <th className="tabular-table-th-base tabular-table-th-combination">
                  Combination
                </th>
                <th className="tabular-table-th-base tabular-table-th-wheat">
                  🌾 Wheat (units)
                </th>
                <th className="tabular-table-th-base tabular-table-th-rice">
                  🍚 Rice (units)
                </th>
                <th className="tabular-table-th-base tabular-table-th-cost">
                  Opportunity Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {productionSchedule.map((row, index) => (
                <tr
                  key={row.combination}
                  onClick={() => setSelectedRow(selectedRow === row.combination ? null : row.combination)}
                  className={getRowClass(row.combination, index)}
                >
                  <td className="tabular-table-td-combination">
                    <span className={getBadgeClass(row.combination)}>
                      {row.combination}
                    </span>
                  </td>
                  <td className="tabular-table-td-number">
                    {row.wheat}
                  </td>
                  <td className="tabular-table-td-number">
                    {row.rice}
                  </td>
                  <td className="tabular-table-td-cost" style={{
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
          <div className="tabular-selected-details">
            <div className="tabular-selected-details-header">
              <FaLightbulb className="tabular-selected-details-icon" />
              <h4 className="tabular-selected-details-title">
                Combination {selectedRow}
              </h4>
            </div>
            <p className="tabular-selected-details-text">
              {productionSchedule.find(row => row.combination === selectedRow)?.description}
            </p>
          </div>
        )}

        {/* Graph Representation */}
        <div className="tabular-graph-container">
          <h4 className="tabular-graph-heading">
            <FaChartBar className="tabular-graph-heading-icon" />
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

          <p className="tabular-graph-note">
            Click on any point in the table or graph to highlight it
          </p>
        </div>
      </div>

      <div className="feature-grid tabular-feature-grid">
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaCalculator />
          </div>
          <h4>Reading the Schedule</h4>
          <p className="tabular-feature-text">
            Each row represents a production possibility. Moving down the table, we produce more Wheat and less Rice,
            illustrating the trade-off between the two goods.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon cyan">
            <FaExchangeAlt />
          </div>
          <h4>Increasing Opportunity Cost</h4>
          <p className="tabular-feature-text">
            Notice how the opportunity cost increases as we produce more Wheat. From A to B, we sacrifice 4 units of Rice,
            but from E to F, we sacrifice 55 units of Rice for the same 20-unit increase in Wheat.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon purple">
            <FaLightbulb />
          </div>
          <h4>Practical Application</h4>
          <p className="tabular-feature-text">
            Governments and businesses use production schedules to make informed decisions about resource allocation,
            understanding the true cost of choosing one production mix over another.
          </p>
        </div>
      </div>

      <div className="highlight-card green tabular-insights-card">
        <div className="highlight-content">
          <h3 className="tabular-insights-heading">
            <FaTable />
            Key Insights from the Table
          </h3>
          <ul className="tabular-insights-list">
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
