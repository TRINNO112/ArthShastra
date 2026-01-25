import React from 'react';
import { FaClock, FaBuilding, FaChartArea, FaInfinity } from 'react-icons/fa';
import LACEnvelopeChart from './LACEnvelopeChart';
import './component.css';

const ShortLongRun = () => {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Short Run vs Long Run</h2>
        <p className="section-subtitle-lesson">Short-run: fixed factors. Long-run: all variable. Cost curves differ.</p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="card-title">
            <FaClock className="title-icon gold" /> Time Horizon Matters
          </h3>
          <p className="intro-text">
            <span className="highlight-gold">Short-run:</span> Can't change all inputs (fixed plant).<br />
            <span className="highlight-green">Long-run:</span> Adjust everything (build new plant).
          </p>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="insights-grid">
        <div className="insight-card short-run-card">
          <FaClock className="time-icon" />
          <h5>Short Run</h5>
          <p><strong>At least one fixed factor</strong> (usually plant/capital).</p>
          <ul className="bullet-list">
            <li>Fixed plant size</li>
            <li>Fixed Costs {`>`} 0</li>
            <li>MC/AC/AVC are U-shaped</li>
            <li>Time to adjust labor only</li>
          </ul>
          <div className="run-note">"Plant capacity is fixed"</div>
        </div>

        <div className="insight-card long-run-card">
          <FaInfinity className="time-icon" />
          <h5>Long Run</h5>
          <p><strong>All factors variable</strong> (no fixed costs).</p>
          <ul className="bullet-list merits">
            <li>Adjust plant size</li>
            <li>Fixed Costs = 0</li>
            <li>LAC is envelope of SACs</li>
            <li>Time to change scale</li>
          </ul>
          <div className="run-note">"Planning horizon"</div>
        </div>
      </div>

      {/* Cost Curves Envelope Diagram */}
      <div className="content-card">
        <h4 className="highlight-cyan" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Long Run Average Cost (LAC)
        </h4>
        <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '30px' }}>
          The LAC curve is the "envelope" that holds all possible Short Run Average Cost (SAC) curves.
          It represents the lowest possible cost for any output level when plant size can be varied.
        </p>

        {/* New D3 Chart */}
        <LACEnvelopeChart />

      </div>

      {/* Summary Table */}
      <div className="table-responsive">
        <table className="practice-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Short Run</th>
              <th>Long Run</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fixed Factors</td>
              <td>Yes (≥1)</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Cost Curves</td>
              <td>SAC, SMC</td>
              <td>LAC, LMC</td>
            </tr>
            <tr>
              <td>FC</td>
              <td>{`>`}0</td>
              <td>=0</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>Short</td>
              <td>Sufficient</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ShortLongRun;
