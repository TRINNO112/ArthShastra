import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import '../css/Lesson3Clean.css';

const DiminishingMarginalUtility = () => {
  return (
    <div className="lesson3-container">
      <header className="lesson-header mb-5">
        <h2 className="l3-title">Law of Diminishing Marginal Utility</h2>
        <p className="l3-subtitle">The fundamental law of satisfaction</p>
      </header>

      {/* Statement */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Statement of the Law</h3>
        <div className="l3-definition-box">
          <p className="l3-definition-text">
            "As we consume more and more units of a commodity, the utility (satisfaction) derived from each successive unit <strong>goes on diminishing</strong>."
          </p>
        </div>
        <p>
          Think about being very thirsty. The first glass of water gives immense satisfaction. The second glass is good, but less satisfying. By the fourth glass, you might not want it at all. This is the law in action.
        </p>
      </section>

      {/* Assumptions */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Assumptions</h3>
        <p className="mb-3">The law holds true only if these conditions are met:</p>

        <div className="l3-grid-2">
          <div className="l3-grid-item cyan">
            <strong>1. Standard Unit</strong>
            <p className="text-sm mt-1">Consumption must be in standard units (e.g., a cup of tea, not a spoon).</p>
          </div>
          <div className="l3-grid-item cyan">
            <strong>2. Continuous Consumption</strong>
            <p className="text-sm mt-1">No breaks in time. Consuming one now and one tomorrow doesn't count.</p>
          </div>
          <div className="l3-grid-item cyan">
            <strong>3. Homogeneity</strong>
            <p className="text-sm mt-1">All units must be identical in quality and size.</p>
          </div>
          <div className="l3-grid-item cyan">
            <strong>4. Rational Consumer</strong>
            <p className="text-sm mt-1">The consumer represents a normal mental state wanting to maximize satisfaction.</p>
          </div>
        </div>
      </section>

      {/* Exceptions */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Exceptions</h3>
        <p>In these cases, MU might <strong>increase</strong> instead of decreasing (though these are rare/debatable):</p>
        <ul className="l3-list">
          <li><strong>Curios & Rare Collections:</strong> A shorter usually finds the 100th stamp more valuable to complete a set.</li>
          <li><strong>Addictions:</strong> For a drunkard, every additional glass of liquor might bring more craving.</li>
          <li><strong>Misers:</strong> The greed for money increases as they get more money.</li>
        </ul>
      </section>
    </div>
  );
};

export default DiminishingMarginalUtility;