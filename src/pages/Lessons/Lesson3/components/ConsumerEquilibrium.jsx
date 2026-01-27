import React from 'react';
import { FaBalanceScale } from 'react-icons/fa';
import '../css/Lesson3Clean.css';

const ConsumerEquilibrium = () => {
  return (
    <div className="lesson3-container">
      <header className="lesson-header mb-5">
        <h2 className="l3-title">Consumer Equilibrium</h2>
        <p className="l3-subtitle">Balancing satisfaction with price</p>
      </header>

      {/* Definition */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">What is Equilibrium?</h3>
        <div className="l3-definition-box">
          <p className="l3-definition-text">
            "Consumer Equilibrium is a situation where a consumer spends their limited income in such a way that they get <strong>maximum satisfaction</strong> and have no tendency to change."
          </p>
        </div>
      </section>

      {/* One Commodity Case */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Case 1: Single Commodity</h3>
        <p>When buying only one good (X), the consumer compares the <strong>Marginal Utility (benefit)</strong> with the <strong>Price (cost)</strong>.</p>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', margin: '20px 0', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--l3-cyan)' }}>
          <h4 style={{ color: '#fff', marginBottom: '10px' }}>Equilibrium Condition</h4>
          <code style={{ fontSize: '1.5rem', color: 'var(--l3-cyan)' }}>MUx (in ₹) = Price of X</code>
        </div>

        <ul className="l3-list">
          <li><strong>If MUx {'>'} Px:</strong> Benefit is higher than cost. Consumer buys MORE.</li>
          <li><strong>If MUx {'<'} Px:</strong> Benefit is lower than cost. Consumer buys LESS.</li>
          <li><strong>If MUx = Px:</strong> Equilibrium. Consumer stops here.</li>
        </ul>
      </section>

      {/* Two Commodity Case */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Case 2: Two Commodities</h3>
        <p>In real life, we buy multiple goods. The consumer must distribute income so that the last rupee spent on each good gives equal satisfaction.</p>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', margin: '20px 0', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--l3-gold)' }}>
          <h4 style={{ color: '#fff', marginBottom: '10px' }}>Law of Equi-Marginal Utility</h4>
          <code style={{ fontSize: '1.2rem', color: 'var(--l3-gold)' }}>
            (MUx / Px) = (MUy / Py) = MUm
          </code>
        </div>

        <div className="l3-grid-item gold">
          <strong>The Logic:</strong>
          <p className="mt-2">
            If <code>MUx/Px</code> is higher than <code>MUy/Py</code>, it means Good X gives more satisfaction per rupee than Good Y. The rational consumer will buy MORE of X and LESS of Y, until the ratios become equal.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConsumerEquilibrium;