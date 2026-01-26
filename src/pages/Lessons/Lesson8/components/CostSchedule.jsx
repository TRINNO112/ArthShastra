import React, { useState, useRef } from 'react';
import { FaTable, FaCalculator, FaInfoCircle } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const CostSchedule = ({ data }) => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tableRef = useRef(null);

  const handleRowHover = (idx) => {
    setHoveredRow(idx);
    if (tableRef.current) {
      const row = tableRef.current.querySelector(`tbody tr:nth-child(${idx + 1})`);
      if (row) {
        const rect = row.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const tooltipHeightApprox = 140;
        const tooltipWidthApprox = 280;
        const margin = 20;

        // Center vertically on row center, clamped
        const rowCenterY = rect.top + rect.height / 2;
        let top = rowCenterY - tooltipHeightApprox / 2;
        top = Math.max(margin, Math.min(top, viewportHeight - tooltipHeightApprox - margin));

        // Center horizontally
        const rowCenterX = rect.left + rect.width / 2;
        let left = rowCenterX;
        left = Math.max(tooltipWidthApprox / 2 + margin, Math.min(left, viewportWidth - tooltipWidthApprox / 2 - margin));

        setTooltipPosition({ top, left });
      }
    }
  };

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Cost Schedule</h2>
        <p className="section-subtitle-lesson">TC = FC + VC | MC = ΔTC/ΔQ | AC = TC/Q | Hover for calculations.</p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="card-title">
            <FaTable className="title-icon gold" /> Interactive Cost Schedule
          </h3>
          <p className="intro-text">
            Observe the behavior of costs as output increases. Hover over rows to see calculations.
            Notice how <strong>MC cuts AC at its minimum point</strong>.
          </p>

          <div className="table-stable-container" ref={tableRef}>
            <table className="cost-table stable">
              <thead>
                <tr>
                  <th style={{ width: '10%' }}>Q</th>
                  <th style={{ width: '12%' }}>FC</th>
                  <th style={{ width: '12%' }}>VC</th>
                  <th style={{ width: '12%' }}>TC</th>
                  <th style={{ width: '12%' }}>MC</th>
                  <th style={{ width: '12%' }}>AC</th>
                  <th style={{ width: '12%' }}>AVC</th>
                  <th style={{ width: '12%' }}>AFC</th>
                  <th style={{ width: '16%' }}>Stage</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`stable-row ${row.stage === 'I' ? 'stage-i' : row.stage === 'II' ? 'stage-ii' : 'stage-iii'}`}
                    onMouseEnter={() => handleRowHover(idx)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td>{row.output}</td>
                    <td className="fc-bold">{row.fc}</td>
                    <td>{row.vc}</td>
                    <td className="tc-bold">{row.tc}</td>
                    <td className={parseFloat(row.mc) || row.mc === 0 ? (parseFloat(row.mc) > 0 ? 'mc-pos' : 'mc-neg') : 'mc-zero'}>{row.mc}</td>
                    <td className="ac-cell">{row.ac}</td>
                    <td>{row.avc}</td>
                    <td>{row.afc}</td>
                    <td>{row.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredRow !== null && (() => {
        const row = data[hoveredRow];
        const prevRow = hoveredRow > 0 ? data[hoveredRow - 1] : null;
        const mcCalc = prevRow ? (row.tc - prevRow.tc).toFixed(2) : row.mc;
        const acCalc = row.output > 0 ? (row.tc / row.output).toFixed(2) : '-';
        return (
          <div
            className="stable-tooltip"
            style={{
              top: tooltipPosition.top,
              left: tooltipPosition.left,
              transform: `translateX(-50%)`
            }}
          >
            <FaInfoCircle />
            <div className="tooltip-content">
              <div className="mc-info">
                <strong>MC:</strong> <span className="mc-val">{mcCalc}</span>
              </div>
              <div className="ac-info">
                <strong>AC:</strong> <span className="ac-val">{acCalc}</span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Formulas */}
      <div className="content-card">
        <h4 className="highlight-cyan" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Key Relationships
        </h4>
        <div className="formula-pair" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,215,0,0.1)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,215,0,0.3)', minWidth: '200px', textAlign: 'center' }}>
            <h5 style={{ color: '#ffd700', marginBottom: '10px' }}>Average Cost</h5>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>AC = TC / Q</div>
          </div>
          <div style={{ background: 'rgba(0,255,136,0.1)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(0,255,136,0.3)', minWidth: '200px', textAlign: 'center' }}>
            <h5 style={{ color: '#00ff88', marginBottom: '10px' }}>Marginal Cost</h5>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>MC = ΔTC / ΔQ</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSchedule;
