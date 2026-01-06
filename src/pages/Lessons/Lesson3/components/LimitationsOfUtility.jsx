/**
 * LimitationsOfUtility.jsx - Topic 6 of Lesson 3
 *
 * Content to add:
 * - Utility can be measured in cardinal numbers (1, 2, 3, etc.)
 * - The assumption of measurability is unrealistic
 * - Different consumers may assign different utilities to same good
 * - Cannot compare utilities between individuals
 * - Ordinal utility approach as an alternative
 *
 * Related quiz topic: limitations
 */

import { FaRuler, FaUserSecret, FaExchangeAlt, FaQuestionCircle, FaExclamationTriangle } from 'react-icons/fa';
import './component.css';

function LimitationsOfUtility() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Limitations of Utility Analysis</h2>
        <p className="section-subtitle-lesson">Understanding the assumptions and criticisms</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* Introduction */}
          <h3 className="highlight-gold">Introduction</h3>
          <p>
            {/* TODO: Add introduction */}
            While utility analysis provides a useful framework for understanding consumer behavior,
            it is based on several assumptions that may not hold true in the real world.
          </p>

          {/* Major Limitations */}
          <h3 className="highlight-cyan">Major Limitations</h3>

          {/* Limitation 1: Cardinal Measurability */}
          <div className="limitation-item">
            <div className="limitation-header">
              <span className="limitation-number">1</span>
              <h4>Cardinal Measurability of Utility</h4>
            </div>
            <div className="limitation-content">
              <div className="formula-box">
                <strong>Assumption:</strong> Utility can be measured in exact numbers like 1, 2, 3, 10, 50 utils
              </div>
              <p>
                {/* TODO: Add detailed explanation */}
                <strong>The Problem:</strong> In reality, utility is a psychological concept and cannot
                be measured in exact numerical terms. When a consumer says "first ice cream gives me
                20 utils and second gives 15 utils," these numbers are imaginary and cannot be verified.
              </p>
              <div className="highlight-card green">
                <div className="highlight-icon"><FaQuestionCircle /></div>
                <div className="highlight-content">
                  <h3>Can You Measure Satisfaction?</h3>
                  <p>
                    Different consumers may assign different "utils" to the same commodity.
                    There is no scientific way to measure subjective satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Limitation 2: Inter-personal Comparison */}
          <div className="limitation-item">
            <div className="limitation-header">
              <span className="limitation-number">2</span>
              <h4>Inter-personal Comparison of Utility</h4>
            </div>
            <div className="limitation-content">
              <p>
                {/* TODO: Add detailed explanation */}
                <strong>The Problem:</strong> Utility analysis assumes we can compare the utility
                that different persons derive from the same commodity. However, this is impossible
                because utility is subjective and personal.
              </p>
              <div className="two-column">
                <div className="column">
                  <div className="example-box-small">
                    <h5>Example</h5>
                    <p>Person A (tea lover) gets 30 utils from a cup of tea.</p>
                    <p>Person B (tea hater) gets -10 utils from the same cup.</p>
                    <p>Can we say Person A gets 40 more utils than Person B?</p>
                  </div>
                </div>
                <div className="column">
                  <div className="highlight-card gold">
                    <div className="highlight-icon"><FaUserSecret /></div>
                    <div className="highlight-content">
                      <h3>Privacy of Mind</h3>
                      <p>We cannot access or compare the mental experiences of others.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Limitation 3: Constant Marginal Utility of Money */}
          <div className="limitation-item">
            <div className="limitation-header">
              <span className="limitation-number">3</span>
              <h4>Constant Marginal Utility of Money</h4>
            </div>
            <div className="limitation-content">
              <p>
                {/* TODO: Add detailed explanation */}
                <strong>The Problem:</strong> Utility analysis assumes that the marginal utility of
                money remains constant while the consumer spends income. In reality, as a person
                spends more money, the marginal utility of remaining money increases.
              </p>
            </div>
          </div>

          {/* Limitation 4: Rationality */}
          <div className="limitation-item">
            <div className="limitation-header">
              <span className="limitation-number">4</span>
              <h4>Assumption of Perfect Rationality</h4>
            </div>
            <div className="limitation-content">
              <p>
                {/* TODO: Add detailed explanation */}
                <strong>The Problem:</strong> The analysis assumes consumers are perfectly rational
                and have complete information about all goods and prices. In reality, consumers
                often make irrational decisions due to emotions, habits, or limited information.
              </p>
            </div>
          </div>

          {/* Ordinal Utility Approach */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaExchangeAlt /></div>
            <div className="highlight-content">
              <h3>The Ordinal Utility Approach</h3>
              <p>
                Due to these limitations, economists developed the <strong>Ordinal Utility Approach</strong>
                (Indifference Curve Analysis) which assumes utility cannot be measured but can be ranked.
                The consumer only needs to state which bundle gives more or less satisfaction,
                not how much more.
              </p>
            </div>
          </div>

          {/* Summary Table */}
          <h3 className="highlight-cyan">Summary of Limitations</h3>
          <div className="table-container">
            <table className="limitations-table">
              <thead>
                <tr>
                  <th>Limitation</th>
                  <th>Description</th>
                  <th>Real-world Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cardinal Measurability</td>
                  <td>Cannot measure utility in numbers</td>
                  <td>Numerical analysis is fictional</td>
                </tr>
                <tr>
                  <td>Inter-personal Comparison</td>
                  <td>Cannot compare utilities between people</td>
                  <td>Social welfare analysis difficult</td>
                </tr>
                <tr>
                  <td>MU of Money</td>
                  <td>MU of money is not constant</td>
                  <td>Price changes affect MU of money</td>
                </tr>
                <tr>
                  <td>Rationality</td>
                  <td>Consumers may not be rational</td>
                  <td>Predicting behavior is harder</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Critical Note */}
          <div className="note-text">
            <strong><FaExclamationTriangle /> Critical Note:</strong>
            Despite these limitations, utility analysis remains a valuable tool for understanding
            basic consumer behavior principles like the Law of Demand and the relationship
            between price and quantity demanded.
          </div>
        </div>
      </div>

      {/* Placeholder for additional content */}
      <div className="content-card placeholder">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="placeholder-message">
            <h3>Content Coming Soon</h3>
            <p>This section needs the following content:</p>
            <ul>
              <li>More real-world examples of each limitation</li>
              <li>Comparison with indifference curve approach</li>
              <li>Historical development of utility theory</li>
              <li>Modern behavioral economics perspective</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          Previous: Utility Cases (One vs Two Commodity)
          <span className="separator">|</span>
          Next: Quiz
        </div>
      </div>
    </section>
  );
}

export default LimitationsOfUtility;

/*
 * FUTURE IMPROVEMENTS:
 * - Add comparison with indifference curve analysis
 * - Add behavioral economics perspective
 * - Add more historical context
 * - Add discussion questions
 */
