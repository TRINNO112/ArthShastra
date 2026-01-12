/**
 * IntroToIC.jsx - Section 1 of Lesson 4
 * Introduction to the Ordinal Approach
 */
import { FaBookOpen, FaHistory, FaCheckCircle, FaExchangeAlt, FaBalanceScale } from 'react-icons/fa';
import './component.css';

function IntroToIC() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <h2 className="section-title-lesson">Introduction to Ordinal Approach</h2>
        <p className="section-subtitle-lesson">Moving beyond cardinal measurement to preference ranking</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">What is the Ordinal Approach?</h3>
          <p>
            While the cardinal approach (Lesson 3) assumes utility can be measured in numbers like 1, 2, or 3 utils,
            the <strong>Ordinal Utility Approach</strong> suggests that satisfaction is a psychological phenomenon
            that cannot be measured in exact numerical units.
          </p>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaCheckCircle /></div>
            <div className="highlight-content">
              <h3>The Core Idea: Ranking</h3>
              <p>
                A consumer may not be able to say "I get exactly 20 utils from an apple," but they can
                certainly say <strong>"I prefer an apple to an orange"</strong> or that they are indifferent
                between certain combinations of the two.
              </p>
            </div>
          </div>

          <h3 className="highlight-cyan">Historical Context</h3>
          <div className="limitation-item">
            <div className="limitation-header">
              <span className="limitation-number"><FaHistory /></span>
              <h4>Hicks and Allen Approach</h4>
            </div>
            <div className="limitation-content">
              <p>
                The Indifference Curve (IC) analysis was pioneered by <strong>J.R. Hicks</strong> and <strong>R.G.D. Allen</strong>
                in 1934 as a more realistic alternative to Marshall's cardinal utility analysis. It is often
                referred to as the <strong>Hicksian Approach</strong>.
              </p>
            </div>
          </div>

          <h3 className="highlight-green">Advantages over Cardinal Approach</h3>
          <div className="two-column">
            <div className="reason-card">
              <h4>1. More Realistic</h4>
              <p>It doesn't require the consumer to assign arbitrary numerical values to satisfaction.</p>
            </div>
            <div className="reason-card">
              <h4>2. Fewer Assumptions</h4>
              <p>It abandons the unrealistic assumption that the marginal utility of money remains constant.</p>
            </div>
            <div className="reason-card">
              <h4>3. Preference Based</h4>
              <p>Focuses on how consumers rank bundles of goods, which reflects real-world shopping behavior.</p>
            </div>
            <div className="reason-card">
              <h4>4. Broader Scope</h4>
              <p>Explains consumer equilibrium for two commodities more elegantly than the cardinal approach.</p>
            </div>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaExchangeAlt /></div>
            <div className="highlight-content">
              <h3>Cardinal vs. Ordinal</h3>
              <ul className="bullet-list">
                <li><strong>Cardinal:</strong> Quantitative (10 utils, 20 utils) - Developed by Alfred Marshall.</li>
                <li><strong>Ordinal:</strong> Qualitative (1st choice, 2nd choice) - Developed by Hicks & Allen.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <div className="nav-hint">
          Next: Meaning of Indifference Curve
        </div>
      </div>
    </section>
  );
}

export default IntroToIC;
