import React from 'react';
import { FaTable, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './component.css';

const productionData = [
  { labor: 0, tp: 0, ap: 0, mp: 0, stage: 1 },
  { labor: 1, tp: 10, ap: 10, mp: 10, stage: 1 },
  { labor: 2, tp: 25, ap: 12.5, mp: 15, stage: 1 }, // Inflection Point
  { labor: 3, tp: 36, ap: 12, mp: 11, stage: 2 },
  { labor: 4, tp: 44, ap: 11, mp: 8, stage: 2 },
  { labor: 5, tp: 48, ap: 9.6, mp: 4, stage: 2 },
  { labor: 6, tp: 48, ap: 8, mp: 0, stage: 2 }, // TP Max
  { labor: 7, tp: 45, ap: 6.4, mp: -3, stage: 3 },
  { labor: 8, tp: 40, ap: 5, mp: -5, stage: 3 },
  { labor: 9, tp: 30, ap: 3.33, mp: -10, stage: 3 },
  { labor: 10, tp: 15, ap: 1.5, mp: -15, stage: 3 },
];

const ProductionSchedule = () => {
  return (
    <div className="table-container-enhanced">
      <h3 className="component-title">
        <FaTable className="icon-gold" /> Production Schedule
      </h3>
      <p className="component-subtitle">Observing the Law of Variable Proportions numerically</p>

      <div className="table-scroll-wrapper">
        <table className="production-table-modern">
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
            {productionData.map((row, idx) => (
              <tr key={idx} className={`row-stage-${row.stage}`}>
                <td className="font-mono">{row.labor}</td>
                <td className="text-tp font-bold">{row.tp}</td>
                <td className="text-ap">{row.ap}</td>
                <td className={`text-mp ${row.mp < 0 ? 'mp-neg' : ''}`}>
                  {row.mp}
                  {row.mp > 10 && <FaArrowUp className="trend-icon up" />}
                  {row.mp < 0 && <FaArrowDown className="trend-icon down" />}
                </td>
                <td className="stage-cell">
                  <span className={`stage-badge stage-${row.stage}`}>
                    {row.stage === 1 ? 'I: Increasing' :
                      row.stage === 2 ? 'II: Diminishing' : 'III: Negative'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-insights">
        <div className="insight-pill">
          <strong>Stage I Ends:</strong> AP = MP (Max AP)
        </div>
        <div className="insight-pill">
          <strong>Stage II Ends:</strong> MP = 0 (Max TP)
        </div>
      </div>
    </div>
  );
};

export default ProductionSchedule;