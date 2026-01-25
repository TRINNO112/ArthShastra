import React from 'react';
import { FaTable, FaArrowUp, FaArrowDown, FaClipboardList, FaRocket, FaStop, FaBan } from 'react-icons/fa';
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

      <div className="lesson-section-wrapper mt-8">
        <div className="analysis-card animate-fade-in">
          <div className="analysis-header">
            <FaClipboardList /> Analysis of the Schedule
          </div>

          <div className="analysis-point">
            <FaRocket className="analysis-icon text-green" />
            <div>
              <strong className="text-white">1. Increasing Returns (0 to 2 units of L):</strong>
              <p>Initially, as we employ more units of labor to a fixed amount of capital, Total Product (TP) increases at an <em>increasing rate</em>. Notice how Marginal Product (MP) rises from 10 to 15. This happens because the fixed factor (land/machine) was initially underutilized.</p>
            </div>
          </div>

          <div className="analysis-point">
            <FaStop className="analysis-icon text-gold" />
            <div>
              <strong className="text-white">2. Diminishing Returns (3 to 6 units of L):</strong>
              <p>As we add even more labor, the fixed factor becomes crowded. TP still increases, but at a <em>diminishing rate</em>. MP starts to fall (11 → 8 → 4). At the 6th unit, MP becomes zero, meaning the worker adds nothing to the total output. <strong>TP is Max (48).</strong></p>
            </div>
          </div>

          <div className="analysis-point">
            <FaBan className="analysis-icon text-red" />
            <div>
              <strong className="text-white">3. Negative Returns (7th unit onwards):</strong>
              <p>Adding more workers now causes chaos. They basically get in each other's way. <strong>MP becomes negative (-3, -5)</strong>, causing the Total Product to actually <em>fall</em>. No rational producer works in this stage.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionSchedule;