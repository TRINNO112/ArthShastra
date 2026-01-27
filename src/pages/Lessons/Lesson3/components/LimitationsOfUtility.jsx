import React from 'react';
import { FaRuler } from 'react-icons/fa';
import '../css/Lesson3Clean.css';

const LimitationsOfUtility = () => {
  return (
    <div className="lesson3-container">
      <header className="lesson-header mb-5">
        <h2 className="l3-title">Limitations of Utility Analysis</h2>
        <p className="l3-subtitle">Why this theory isn't perfect</p>
      </header>

      <section className="lesson3-card">
        <h3 className="l3-heading-red" style={{ color: 'var(--l3-red)', borderBottom: '2px solid rgba(255,107,107,0.3)', paddingBottom: '10px', display: 'inline-block', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Critique of Cardinal Utility</h3>

        <div className="l3-grid-2">
          <div className="l3-grid-item" style={{ borderTop: '3px solid var(--l3-red)' }}>
            <h4 style={{ color: 'var(--l3-red)' }}>1. Unrealistic Measurability</h4>
            <p>
              Utility is a psychological feeling. It cannot be measured in numbers (10, 20, 30 utils) like height or weight. Creating a standard unit (util) is imaginary.
            </p>
          </div>

          <div className="l3-grid-item" style={{ borderTop: '3px solid var(--l3-red)' }}>
            <h4 style={{ color: 'var(--l3-red)' }}>2. Constant MU of Money</h4>
            <p>
              The theory assumes the utility of money remains constant. In reality, as a person spends money, the remaining money becomes MORE valuable to them (scarcity of money increases).
            </p>
          </div>

          <div className="l3-grid-item" style={{ borderTop: '3px solid var(--l3-red)' }}>
            <h4 style={{ color: 'var(--l3-red)' }}>3. Independent Utility</h4>
            <p>
              It assumes goods are independent. But often, utility of one good depends on another (e.g., utility of tea depends on sugar).
            </p>
          </div>
        </div>

        <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
          <strong>The Solution?</strong>
          <p>
            Due to these limitations, modern economists prefer <strong>Ordinal Utility Analysis</strong> (Indifference Curves), which only requires <em>ranking</em> preferences (1st, 2nd, 3rd) rather than measuring them.
          </p>
        </div>
      </section>
    </div>
  );
};

export default LimitationsOfUtility;
