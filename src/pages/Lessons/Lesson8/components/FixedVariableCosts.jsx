import React from 'react';
import { FaLock, FaUnlockAlt, FaBuilding, FaUsers, FaTools } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const FixedVariableCosts = () => {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Fixed vs Variable Costs</h2>
        <p className="section-subtitle-lesson">Understand FC (don't change with output) vs VC (rise with production).</p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="card-title">
            <FaLock className="title-icon gold" /> Fixed Costs vs <FaUnlockAlt className="title-icon green" /> Variable Costs
          </h3>
          <p className="intro-text">
            In the short-run, some costs are fixed (factory, machinery) while others vary (labor, materials).
            <strong> Total Cost = Fixed Cost + Variable Cost</strong>.
          </p>
        </div>
      </div>

      {/* FC vs VC Grid */}
      <div className="insights-grid">
        <div className="insight-card fc-card">
          <FaLock className="fc-icon" />
          <h5>Fixed Costs (FC)</h5>
          <p><strong>Do not vary with output</strong>. Paid even if Q=0.</p>
          <ul className="fc-list">
            <li><strong>Rent</strong> - Factory lease</li>
            <li><strong>Salaries</strong> - Manager pay</li>
            <li><strong>Interest</strong> - Loan payments</li>
            <li><strong>Depreciation</strong> - Machinery wear</li>
            <li><strong>Insurance</strong> - Premiums</li>
          </ul>
          <div className="fc-note">
            AFC = FC/Q <span className="falling">↓ continuously</span>
          </div>
        </div>

        <div className="insight-card vc-card">
          <FaUnlockAlt className="vc-icon" />
          <h5>Variable Costs (VC)</h5>
          <p><strong>Rise with output</strong>. Zero when Q=0.</p>
          <ul className="vc-list">
            <li><strong>Wages</strong> - Labor payments</li>
            <li><strong>Raw Materials</strong> - Inputs</li>
            <li><strong>Power/Fuel</strong> - Electricity</li>
            <li><strong>Transport</strong> - Delivery</li>
            <li><strong>Direct Labor</strong> - Workers</li>
          </ul>
          <div className="vc-note">
            AVC = VC/Q <span className="u-shape">U-shaped</span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="content-card">
        <h4 className="highlight-cyan" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Quick Comparison
        </h4>
        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Fixed Costs</th>
                <th>Variable Costs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dependence on Q</strong></td>
                <td>Independent</td>
                <td>Directly proportional</td>
              </tr>
              <tr>
                <td><strong>At Q=0</strong></td>
                <td>Paid (100%)</td>
                <td>Zero</td>
              </tr>
              <tr>
                <td><strong>Average Behavior</strong></td>
                <td>AFC ↓ continuously</td>
                <td>AVC U-shaped</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Rent, Salaries</td>
                <td>Wages, Materials</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FixedVariableCosts;
