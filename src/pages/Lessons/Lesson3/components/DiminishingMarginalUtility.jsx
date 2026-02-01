import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import '../css/lesson3-brutalist.css';

const DiminishingMarginalUtility = () => {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 3 / SECTION 3</div>
          <h2 className="brutalist-title">LAW OF DIMINISHING<br />MARGINAL UTILITY</h2>
          <p className="brutalist-subtitle">The fundamental law of satisfaction</p>
        </header>

        {/* Statement */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">STATEMENT OF THE LAW</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              "As we consume more and more units of a commodity, the utility (satisfaction) derived from each successive unit <strong>goes on diminishing</strong>."
            </p>
          </div>
          <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
            Think about being very thirsty. The first glass of water gives immense satisfaction. The second glass is good, but less satisfying. By the fourth glass, you might not want it at all. This is the law in action.
          </p>
        </section>

        {/* Assumptions */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">ASSUMPTIONS</h3>
          <p style={{ marginBottom: '20px' }}>The law holds true only if these conditions are met:</p>

          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">01</div>
              <h4>STANDARD UNIT</h4>
              <p>Consumption must be in standard units (e.g., a cup of tea, not a spoon).</p>
            </div>
            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">02</div>
              <h4>CONTINUOUS CONSUMPTION</h4>
              <p>No breaks in time. Consuming one now and one tomorrow doesn't count.</p>
            </div>
            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">03</div>
              <h4>HOMOGENEITY</h4>
              <p>All units must be identical in quality and size.</p>
            </div>
            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">04</div>
              <h4>RATIONAL CONSUMER</h4>
              <p>The consumer represents a normal mental state wanting to maximize satisfaction.</p>
            </div>
          </div>
        </section>

        {/* Exceptions */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading red">EXCEPTIONS</h3>
          <p style={{ marginBottom: '20px' }}>In these cases, MU might <strong>increase</strong> instead of decreasing (though these are rare/debatable):</p>
          <ul className="brutalist-list">
            <li><strong>Curios & Rare Collections:</strong> A collector usually finds the 100th stamp more valuable to complete a set.</li>
            <li><strong>Addictions:</strong> For a drunkard, every additional glass of liquor might bring more craving.</li>
            <li><strong>Misers:</strong> The greed for money increases as they get more money.</li>
          </ul>

          <div className="brutalist-highlight" style={{ marginTop: '25px' }}>
            <strong>NOTE:</strong> These are apparent exceptions. Economists argue that even in these cases, DMU eventually applies when a true "satiety" point is reached.
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiminishingMarginalUtility;