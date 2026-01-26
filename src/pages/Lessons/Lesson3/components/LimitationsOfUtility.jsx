/**
 * LimitationsOfUtility.jsx - Topic 6 of Lesson 3
 *
 * Related quiz topic: limitations
 */

import { FaRuler, FaUserSecret, FaExchangeAlt, FaQuestionCircle, FaExclamationTriangle, FaBalanceScale } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

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
            While utility analysis provides a useful framework for understanding consumer behavior,
            it is based on several assumptions that may not hold true in the real world. These
            assumptions, while helpful for theoretical analysis, face significant criticisms
            when applied to actual consumer decision-making.
          </p>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaBalanceScale /></div>
            <div className="highlight-content">
              <h3>Theoretical vs. Real World</h3>
              <p>
                The utility analysis is built on <strong>idealized assumptions</strong> that make
                mathematical analysis possible but limit its practical application. Understanding
                these limitations helps us appreciate why economists developed alternative approaches
                like indifference curve analysis.
              </p>
            </div>
          </div>

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
                <strong>The Problem:</strong> In reality, utility is a psychological concept and cannot
                be measured in exact numerical terms. When a consumer says "first ice cream gives me
                20 utils and second gives 15 utils," these numbers are imaginary and cannot be verified.
              </p>

              <div className="explanation-box">
                <h5>Why Cardinal Measurement Fails:</h5>
                <ul className="bullet-list">
                  <li><strong>Subjective Nature:</strong> Utility depends on individual preferences, mood, and circumstances</li>
                  <li><strong>No Standard Unit:</strong> Unlike weight (kg) or length (m), there's no objective unit for satisfaction</li>
                  <li><strong>Personal Differences:</strong> Same commodity gives different "utils" to different people</li>
                  <li><strong>Cannot Verify:</strong> No scientific instrument can measure psychological satisfaction</li>
                </ul>
              </div>

              <div className="note-text">
                <strong>💡 Alternative Approach:</strong> The <strong>Ordinal Approach</strong> (Indifference Curve Analysis)
                avoids this problem by only requiring consumers to rank preferences (1st, 2nd, 3rd) rather than assign exact numbers.
              </div>
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
                <strong>The Problem:</strong> Utility analysis assumes we can compare the utility
                that different persons derive from the same commodity. However, this is impossible
                because utility is subjective and personal.
              </p>

              <div className="explanation-box">
                <h5>Why Inter-personal Comparison Fails:</h5>
                <ul className="bullet-list">
                  <li><strong>Subjective Nature:</strong> Each person's preferences, tastes, and circumstances are unique</li>
                  <li><strong>Different Backgrounds:</strong> Rich vs poor, urban vs rural, young vs old — all affect utility perception</li>
                  <li><strong>No Common Scale:</strong> There's no objective "utility meter" that works across individuals</li>
                  <li><strong>Mental Privacy:</strong> We cannot read others' minds to know their satisfaction levels</li>
                </ul>
              </div>

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

              <div className="note-text">
                <strong>💡 Real-world Impact:</strong> This limitation affects welfare economics and taxation policy.
                Progressive taxation assumes that ₹100 means more to a poor person than to a rich person, but this
                is an assumption, not a scientifically measurable fact.
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
                <strong>The Problem:</strong> Utility analysis assumes that the marginal utility of
                money remains constant while the consumer spends income. In reality, as a person
                spends more money, the marginal utility of remaining money increases (due to scarcity).
              </p>

              <div className="explanation-box">
                <h5>Why This Assumption is Unrealistic:</h5>
                <ul className="bullet-list">
                  <li><strong>Scarcity Principle:</strong> As you spend money, remaining money becomes more valuable</li>
                  <li><strong>Law of DMU Applies to Money Too:</strong> First ₹1000 spent gives less MU than the last ₹1000</li>
                  <li><strong>Rich vs Poor:</strong> ₹100 has different utility for rich vs poor consumers</li>
                  <li><strong>Buying Power Changes:</strong> Inflation and price changes affect money's real value</li>
                </ul>
              </div>

              <div className="example-box">
                <h5><FaExchangeAlt /> Visualization: The Money Scarcity Logic</h5>
                <div className="example-content">
                  <p className="mb-4"><strong>Scenario:</strong> You have ₹10,000 to spend. Does the value of ₹1,000 stay the same?</p>

                  <div className="scenario-timeline">
                    <div className="timeline-step">
                      <h6 className="highlight-cyan">Beginning (₹10,000 left)</h6>
                      <p><strong>First ₹1,000 spent:</strong> You feel rich. Spending is easy. The marginal utility of this money is <span className="text-info">Relatively Low</span>.</p>
                    </div>

                    <div className="timeline-step precious">
                      <h6 className="highlight-gold">The End (Only ₹1,000 left)</h6>
                      <p><strong>Last ₹1,000 spent:</strong> This is your last survival money! Every rupee is now "precious". The marginal utility of this money is <span className="text-warning">Extremely High</span>.</p>
                    </div>
                  </div>

                  <div className="note-text danger">
                    <strong>The Conflict:</strong> Standard utility analysis assumes MU of money is <strong>constant</strong>, but your brain knows it's <strong>not</strong>!
                  </div>
                </div>
              </div>

              <div className="note-text">
                <strong>💡 Impact on Analysis:</strong> If MU of money varies with expenditure, the equilibrium
                condition (MUₓ/Pₓ = MUᵧ/Pᵧ = MUₘ) becomes complex because MUₘ itself changes as spending increases.
                This makes consumer behavior predictions less accurate.
              </div>
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
                <strong>The Problem:</strong> The analysis assumes consumers are perfectly rational,
                have complete information about all goods and prices, and always choose to maximize satisfaction.
                In reality, consumers often make irrational decisions due to emotions, habits, limited information,
                or cognitive biases.
              </p>

              <div className="explanation-box">
                <h5>Why Perfect Rationality is Unrealistic:</h5>
                <ul className="bullet-list">
                  <li><strong>Bounded Rationality:</strong> Consumers have limited mental capacity to process all information</li>
                  <li><strong>Emotional Decisions:</strong> Fear, anger, love, and excitement often override logical choices</li>
                  <li><strong>Habitual Behavior:</strong> People often buy out of habit without comparing alternatives</li>
                  <li><strong>Information Asymmetry:</strong> Consumers rarely have complete information about all options</li>
                  <li><strong>Social Influence:</strong> Peer pressure, advertising, and trends affect decisions</li>
                  <li><strong>Cognitive Biases:</strong> Anchoring, loss aversion, and other biases distort choices</li>
                </ul>
              </div>

              <div className="two-column">
                <div className="column">
                  <div className="example-box-small">
                    <h5>Example: Irrational Choices</h5>
                    <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                      <li>Buying expensive brand name vs cheaper generic</li>
                      <li>Impulse buying due to sales</li>
                      <li>Choosing based on attractive packaging</li>
                      <li>Emotional eating (comfort food)</li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <div className="highlight-card gold">
                    <div className="highlight-icon"><FaExclamationTriangle /></div>
                    <div className="highlight-content">
                      <h3>Behavioral Economics</h3>
                      <p>Modern economists study these irrational behaviors to build more realistic models.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="note-text">
                <strong>💡 Real-world Impact:</strong> This limitation explains why marketing, advertising, and
                psychology are important in business. Companies exploit these irrational behaviors to influence
                consumer choices. The utility analysis cannot predict these influences.
              </div>
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
          <div className="table-responsive">
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

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          Previous: Consumer Equilibrium
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
