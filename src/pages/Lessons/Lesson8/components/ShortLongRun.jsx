import React from 'react';
import { FaClock, FaBuilding, FaChartArea, FaInfinity } from 'react-icons/fa';
import './component.css';

const ShortLongRun = () => {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Short Run vs Long Run</h2>
        <p className="section-subtitle-lesson">Short-run: fixed factors. Long-run: all variable. Cost curves differ.</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            Time Horizon <FaClock /> Matters
          </h3>
          <p>Short-run: Can't change all inputs (fixed plant). Long-run: Adjust everything (build new plant).</p>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="insights-grid">
        <div className="insight-card short-run-card">
          <FaClock className="time-icon" />
          <h5>Short Run</h5>
          <p><strong>At least one fixed factor</strong> (usually plant/capital).</p>
          <ul>
            <li>Fixed plant size</li>
            <li>FC > 0</li>
            <li>MC/AC/AVC U-curves</li>
            <li>Time to adjust labor only</li>
          </ul>
          <div className="run-note">
            "Plant capacity fixed"
          </div>
        </div>

        <div className="insight-card long-run-card">
          <FaInfinity className="time-icon" />
          <h5>Long Run</h5>
          <p><strong>All factors variable</strong> (no fixed costs).</p>
          <ul>
            <li>Adjust plant size</li>
            <li>FC = 0</li>
            <li>LAC envelope of SACs</li>
            <li>Sufficient time for all changes</li>
          </ul>
          <div className="run-note">
            "Planning horizon"
          </div>
        </div>
      </div>

      {/* Cost Curves Envelope Diagram */}
      <div className="expanded-content">
        <h4 className="highlight-cyan">Long Run Average Cost (LAC)</h4>
        <p>LAC is envelope of Short Run AC (SAC) curves for different plant sizes.</p>
        <div className="curve-diagram">
          <svg viewBox="0 0 400 200" className="envelope-svg">
            <defs>
              <linearGradient id="lac-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#ffd700"/>
                <stop offset="100%" stop-color="#ffaa00"/>
              </linearGradient>
            </defs>
            {/* SAC1 */}
            <path d="M 50 180 Q 120 120 180 100 Q 250 110 320 150 L 380 180" stroke="#00ff88" stroke-width="3" fill="none"/>
            {/* SAC2 */}
            <path d="M 50 170 Q 100 100 160 80 Q 220 90 300 140 L 380 170" stroke="#ff6b6b" stroke-width="3" fill="none" stroke-dasharray="5,5"/>
            {/* LAC Envelope */}
            <path d="M 50 170 Q 100 100 160 80 Q 200 75 250 85 Q 320 110 380 150" stroke="url(#lac-gradient)" stroke-width="4" fill="none"/>
            <text x="200" y="20" text-anchor="middle" fill="#ffd700" font-weight="bold" font-size="14">LAC (Envelope)</text>
            <text x="100" y="190" fill="#00ff88" font-size="12">SAC1 (Small Plant)</text>
            <text x="250" y="190" fill="#ff6b6b" font-size="12">SAC2 (Large Plant)</text>
          </svg>
        </div>
      </div>

      {/* Summary Table */}
      <div className="practice-section">
        <h4>Summary</h4>
        <table className="summary-table">
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
              <td>>0</td>
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
