import React, { useState } from 'react';
import { FaCalculator, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import './component.css';

const PracticeProblems = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Practice Problems</h2>
        <p className="section-subtitle-lesson">Calculate costs from data. Click "Show Solution".</p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="card-title">
            <FaCalculator className="title-icon gold" /> Cost Calculations
          </h3>
          <p className="intro-text">Master the formulas. Calculate costs from data. Click "Show Solution" to verify your answers.</p>
        </div>
      </div>

      {/* Problem 1 */}
      <div className="practice-card">
        <h4><FaCalculator style={{ marginRight: '10px', color: '#ffd700' }} /> Problem 1: Basic Costs</h4>
        <p>Given: <strong>Fixed Cost (FC) = ₹100</strong>, and <strong>Variable Cost (VC) at Q=3 is ₹120</strong>.</p>
        <p>Calculate Total Cost (TC) and Average Cost (AC) at Q=3.</p>
        <button className="btn-reveal" onClick={() => setShowSolution1(!showSolution1)}>
          {showSolution1 ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution1 && (
          <div className="solution-box">
            <p><strong>TC = FC + VC</strong> = 100 + 120 = <span className="highlight-gold">₹220</span></p>
            <p><strong>AC = TC / Q</strong> = 220 / 3 = <span className="highlight-gold">₹73.33</span></p>
            <p className="note-text stage-ii">Note: Falling AC suggests economies of scale or spreading FC.</p>
          </div>
        )}
      </div>

      {/* Problem 2 */}
      <div className="practice-card">
        <h4><FaChartLine style={{ marginRight: '10px', color: '#00ff88' }} /> Problem 2: Marginal Cost</h4>
        <p>TC at Q=4 is <strong>₹280</strong>. TC at Q=5 is <strong>₹360</strong>.</p>
        <p>Calculate Marginal Cost (MC) for the 5th unit.</p>
        <button className="btn-reveal" onClick={() => setShowSolution2(!showSolution2)}>
          {showSolution2 ? 'Hide Solution' : 'Show Solution'}
        </button>
        {showSolution2 && (
          <div className="solution-box">
            <p><strong>MC = ΔTC / ΔQ</strong></p>
            <p>MC = (360 - 280) / (5 - 4) = 80 / 1 = <span className="highlight-cyan">₹80</span></p>
            <p className="note-text u-shape">Rising MC indicates diminishing returns have set in.</p>
          </div>
        )}
      </div>

      {/* Data Table Practice */}
      <div className="practice-card">
        <h4>Practice Table</h4>
        <p>Complete the missing values in the cost schedule below:</p>

        <div className="table-responsive">
          <table className="practice-table">
            <thead>
              <tr>
                <th>Q</th>
                <th>FC</th>
                <th>VC</th>
                <th>TC</th>
                <th>MC</th>
                <th>AC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>100</td>
                <td>80</td>
                <td>180</td>
                <td className="highlight-cyan">?</td>
                <td className="highlight-gold">?</td>
              </tr>
              <tr>
                <td>3</td>
                <td>100</td>
                <td>120</td>
                <td>220</td>
                <td>40</td>
                <td>73.33</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="solution-box" style={{ marginTop: '20px' }}>
          <strong>Solution:</strong>
          <ul className="bullet-list merits">
            <li><strong>MC (at Q=2)</strong>: Assuming TC(1) was known, or if asking for Q2-Q3 range: MC(3) = 40.</li>
            <li><strong>AC (at Q=2)</strong>: TC / Q = 180 / 2 = <span className="highlight-gold">90</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PracticeProblems;
