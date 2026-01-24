import React, { useState } from 'react';
import { FaTable, FaCalculator, FaInfoCircle } from 'react-icons/fa';
import './component.css';

const productionData = [
  { labor: 0, tp: 0, ap: '-', mp: '-', stage: 'Zero' },
  { labor: 1, tp: 10, ap: 10, mp: 10, stage: 'I (Increasing)' },
  { labor: 2, tp: 25, ap: 12.5, mp: 15, stage: 'I (Peak MP)' },
  { labor: 3, tp: 36, ap: 12, mp: 11, stage: 'II (Diminishing)' },
  { labor: 4, tp: 44, ap: 11, mp: 8, stage: 'II' },
  { labor: 5, tp: 48, ap: 9.6, mp: 4, stage: 'II' },
  { labor: 6, tp: 48, ap: 8, mp: 0, stage: 'II (End)' },
  { labor: 7, tp: 45, ap: 6.4, mp: -3, stage: 'III (Negative)' },
  { labor: 8, tp: 40, ap: 5, mp: -5, stage: 'III' },
];

function ProductionSchedule() {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 7</span>
        <h2 className="section-title-lesson">Production Schedule</h2>
        <p className="section-subtitle-lesson">Interactive table showing TP, AP, MP evolution across stages</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            <FaTable /> Interactive Production Schedule <FaCalculator />
          </h3>
          <p>Hover rows for MP/AP calculations. Color-coded stages.</p>

          <div className="table-container">
            <table className="production-table interactive">
              <thead>
                <tr>
                  <th>Labor (L)</th>
                  <th>Total Product (TP)</th>
                  <th>Average Product (AP)</th>
                  <th>Marginal Product (MP)</th>
                  <th>Stage</th>
                </tr>
              </thead>
              <tbody>
                {productionData.map((row, idx) => {
                  const prevRow = productionData[idx - 1];
                  const deltaTP = prevRow ? row.tp - prevRow.tp : row.mp;
                  const apCalc = row.labor > 0 ? (row.tp / row.labor).toFixed(1) : '-';
                  const rowColor = row.stage.includes('I') ? 'stage-i' :
                                  row.stage.includes('II') ? 'stage-ii' : 'stage-iii';
                  return (
                    <tr
                      key={idx}
                      className={`hoverable ${rowColor}`}
                      onMouseEnter={() => setHoveredRow(idx)}
                      onMouseLeave={() => setHoveredRow(null)}
                    >
                      <td>{row.labor}</td>
                      <td className="text-gold font-bold">{row.tp}</td>
                      <td>{row.ap}</td>
                      <td className={row.mp > 0 ? 'text-green' : row.mp < 0 ? 'text-red' : 'text-gold'}>
                        {row.mp}
                      </td>
                      <td className="font-bold stage-label">{row.stage}</td>
                      {hoveredRow === idx && (
                        <div className="hover-tooltip">
                          <FaInfoCircle />
                          <div className="tooltip-mp">MP = ΔTP/ΔL = {deltaTP}</div>
                          <div className="tooltip-ap">AP = TP/L = {apCalc}</div>
                        </div>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="formula-box-grid">
            <div>
              <strong>APₗ = TP / L</strong>
              <p>Average product of labor</p>
            </div>
            <div>
              <strong>MPₗ = ΔTP / ΔL</strong>
              <p>Marginal product of labor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductionSchedule;
