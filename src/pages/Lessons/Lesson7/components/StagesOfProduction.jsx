import React from 'react';
import { FaArrowUp, FaArrowDown, FaExclamationTriangle } from 'react-icons/fa';
import './component.css';

function StagesOfProduction() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 7</span>
        <h2 className="section-title-lesson">Three Stages of Production</h2>
        <p className="section-subtitle-lesson">Increasing → Diminishing → Negative Returns (Rational producer in Stage II)</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-green">Law of Variable Proportions</h3>
          <p>Rational producer operates where MP &gt; 0 and AP is max (Stage II).</p>

          <div className="stages-grid">
            <div className="stage-card stage-1">
              <FaArrowUp className="stage-icon" />
              <h4>Stage I: Increasing Returns</h4>
              <p>MP ↑, AP ↑ | Specialization & efficiency gains</p>
              <ul>
                <li>L = 0-2</li>
                <li>MP > AP</li>
              </ul>
            </div>
            <div className="stage-card stage-2">
              <FaArrowDown className="stage-icon" />
              <h4>Stage II: Diminishing Returns</h4>
              <p>MP ↓, AP ↓ but >0 | Optimal production range</p>
              <ul>
                <li>L = 3-6</li>
                <li>Rational zone</li>
              </ul>
            </div>
            <div className="stage-card stage-3">
              <FaExclamationTriangle className="stage-icon" />
              <h4>Stage III: Negative Returns</h4>
              <p>MP < 0 | Overcrowding, inefficiency</p>
              <ul>
                <li>L >6</li>
                <li>Avoid</li>
              </ul>
            </div>
          </div>

          <div className="stage-diagram">
            <svg viewBox="0 0 600 300" className="stage-svg">
              <defs>
                <linearGradient id="stage1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(40,167,69,0.3)" />
                  <stop offset="100%" stopColor="rgba(40,167,69,0.1)" />
                </linearGradient>
                <linearGradient id="stage2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,193,7,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,193,7,0.1)" />
                </linearGradient>
                <linearGradient id="stage3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(220,53,69,0.3)" />
                  <stop offset="100%" stopColor="rgba(220,53,69,0.1)" />
                </linearGradient>
              </defs>
              <rect x="50" y="50" width="150" height="200" fill="url(#stage1)" stroke="#28a745" strokeWidth="2" />
              <text x="125" y="75" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Stage I</text>
              <rect x="220" y="50" width="150" height="200" fill="url(#stage2)" stroke="#ffc107" strokeWidth="2" />
              <text x="295" y="75" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Stage II</text>
              <rect x="390" y="50" width="150" height="200" fill="url(#stage3)" stroke="#dc3545" strokeWidth="2" />
              <text x="465" y="75" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Stage III</text>
              <line x1="200" y1="50" x2="220" y2="50" stroke="white" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="370" y1="50" x2="390" y2="50" stroke="white" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="rational-producer">
            <h4>Why Stage II?</h4>
            <p>MP &gt; 0 (additional worker adds output), AP max (efficiency peak).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StagesOfProduction;
