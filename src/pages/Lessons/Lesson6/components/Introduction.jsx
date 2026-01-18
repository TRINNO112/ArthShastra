import React from 'react';
import { FaPercentage, FaChartLine, FaDollarSign, FaCoins } from 'react-icons/fa';

function Introduction() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 6</span>
        <h2 className="section-title-lesson">Introduction to Price Elasticity of Demand</h2>
        <p className="section-subtitle-lesson">Understanding how quantity demanded responds to price changes</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaChartLine /> What is Price Elasticity of Demand?</h3>
          <p>Price elasticity of demand measures how much the quantity demanded of a good responds to a change in its price. It shows the degree of consumer sensitivity to price changes.</p>

          <div className="highlight-card cyan mt-4">
            <div className="highlight-icon"><FaPercentage /></div>
            <div className="highlight-content">
              <p className="font-semibold">Key Concept:</p>
              <p>Some goods' demand changes drastically with price (elastic), while others remain relatively stable (inelastic).</p>
            </div>
          </div>

          <h3 className="highlight-gold mt-5">Real-world Examples</h3>
          <ul className="list-disc list-inside mt-3 space-y-2">
            <li><strong>Gasoline:</strong> When prices rise, people still need to commute - inelastic demand</li>
            <li><strong>Restaurant meals:</strong> If prices increase, people cook at home more - elastic demand</li>
            <li><strong>Life-saving medicines:</strong> Patients must buy regardless of price - perfectly inelastic</li>
          </ul>

          <div className="highlight-card gold mt-4">
            <div className="highlight-icon"><FaCoins /></div>
            <div className="highlight-content">
              <h3>Why It Matters for Business</h3>
              <p>Understanding elasticity helps businesses set prices strategically. A company selling an elastic good must be careful with price increases, while one selling inelastic goods has more pricing power.</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaDollarSign /></div>
            <div className="highlight-content">
              <h3>Impact on Total Revenue</h3>
              <p>Price elasticity directly affects total revenue. For elastic goods, lowering prices increases revenue. For inelastic goods, raising prices increases revenue.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
