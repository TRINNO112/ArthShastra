import React from 'react';
import { FaUser, FaShoppingCart, FaLightbulb } from 'react-icons/fa';
import '../css/Lesson3Clean.css';

const WhoIsConsumer = () => {
  return (
    <div className="lesson3-container">
      <header className="lesson-header mb-5">
        <h2 className="l3-title">Who is a Consumer?</h2>
        <p className="l3-subtitle">Understanding the central figure of economic activity</p>
      </header>

      {/* Main Definition Section */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Definition</h3>
        <div className="l3-definition-box">
          <p className="l3-definition-text">
            "A consumer is a person who buys goods and services for <span className="l3-highlight-text">personal consumption</span> and not for resale or commercial purposes."
          </p>
        </div>

        <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(0, 255, 255, 0.05)', borderRadius: '8px', fontSize: '0.9rem' }}>
          <strong>Note: Consumer vs Customer</strong>
          <br />
          A <em>Customer</em> buys the good (e.g., Mom buys milk).
          <br />
          A <em>Consumer</em> uses the good (e.g., Baby drinks milk).
          <br />
          You can be both!
        </div>

        <div className="l3-grid-2">
          <div className="l3-grid-item cyan">
            <h4 style={{ color: 'var(--l3-cyan)', marginBottom: '10px' }}>In Simple Terms</h4>
            <p>
              The consumer is the <strong>end-user</strong>. Whether you are eating food, watching a movie, or using a phone—if you are using it for your own satisfaction, you are a consumer.
            </p>
          </div>
          <div className="l3-grid-item gold">
            <h4 style={{ color: 'var(--l3-gold)', marginBottom: '10px' }}>Origin</h4>
            <p>
              The word comes from the Latin <em>"consumere"</em>, meaning <strong>"to use up"</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Characteristics Section */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Key Characteristics</h3>
        <ul className="l3-list">
          <li>
            <strong>Has Wants and Needs:</strong> Every consumer is driven by the desire to satisfy specific wants (hunger, entertainment, comfort).
          </li>
          <li>
            <strong>Purchases for Personal Use:</strong> The critical distinction from a trader. A shopkeeper buying soap to sell is a trader; you buying soap to bathe are a consumer.
          </li>
          <li>
            <strong>Faces Budget Constraints:</strong> Income is always limited (scarcity), while wants are unlimited.
          </li>
          <li>
            <strong>Makes Rational Choices:</strong> Economics assumes consumers try to get the <strong>maximum satisfaction</strong> (utility) possible from their limited money.
          </li>
        </ul>
      </section>

      {/* Comparison Example */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Who is NOT a Consumer?</h3>
        <div className="l3-table-container">
          <table className="l3-table">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Role</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>You buy a pen to write an exam</td>
                <td style={{ color: 'var(--l3-green)' }}><strong>Consumer</strong></td>
                <td>Final usage for personal want.</td>
              </tr>
              <tr>
                <td>Shopkeeper buys pens to sell in shop</td>
                <td style={{ color: 'var(--l3-orange)' }}><strong>Trader</strong></td>
                <td>Bought for resale/profit, not consumption.</td>
              </tr>
              <tr>
                <td>Factory buys raw material</td>
                <td style={{ color: 'var(--l3-cyan)' }}><strong>Producer</strong></td>
                <td>Used for production, not final consumption.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default WhoIsConsumer;
