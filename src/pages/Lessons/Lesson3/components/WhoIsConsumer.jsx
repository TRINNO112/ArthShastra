import React from 'react';
import { FaUser, FaShoppingCart, FaLightbulb } from 'react-icons/fa';
import '../css/lesson3-brutalist.css';

const WhoIsConsumer = () => {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 3 / SECTION 1</div>
          <h2 className="brutalist-title">WHO IS A CONSUMER?</h2>
          <p className="brutalist-subtitle">Understanding the central figure of economic activity</p>
        </header>

        {/* Main Definition Section */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">DEFINITION</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              "A consumer is a person who buys goods and services for <strong>personal consumption</strong> and not for resale or commercial purposes."
            </p>
          </div>

          <div className="brutalist-note">
            <strong>NOTE: CONSUMER VS CUSTOMER</strong>
            A <em>Customer</em> buys the good (e.g., Mom buys milk).
            <br />
            A <em>Consumer</em> uses the good (e.g., Baby drinks milk).
            <br />
            You can be both!
          </div>

          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item cyan">
              <h4>IN SIMPLE TERMS</h4>
              <p>
                The consumer is the <strong>end-user</strong>. Whether you are eating food, watching a movie, or using a phone—if you are using it for your own satisfaction, you are a consumer.
              </p>
            </div>
            <div className="brutalist-grid-item yellow">
              <h4>ORIGIN</h4>
              <p>
                The word comes from the Latin <em>"consumere"</em>, meaning <strong>"to use up"</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Characteristics Section */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">KEY CHARACTERISTICS</h3>
          <ul className="brutalist-list">
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
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading red">WHO IS NOT A CONSUMER?</h3>
          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>SCENARIO</th>
                  <th>ROLE</th>
                  <th>REASON</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>You buy a pen to write an exam</td>
                  <td style={{ color: 'var(--brutalist-green)', fontWeight: 'bold' }}>CONSUMER</td>
                  <td>Final usage for personal want.</td>
                </tr>
                <tr>
                  <td>Shopkeeper buys pens to sell in shop</td>
                  <td style={{ color: 'var(--brutalist-yellow-dark)', fontWeight: 'bold' }}>TRADER</td>
                  <td>Bought for resale/profit, not consumption.</td>
                </tr>
                <tr>
                  <td>Factory buys raw material</td>
                  <td style={{ color: 'var(--brutalist-cyan)', fontWeight: 'bold' }}>PRODUCER</td>
                  <td>Used for production, not final consumption.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhoIsConsumer;
