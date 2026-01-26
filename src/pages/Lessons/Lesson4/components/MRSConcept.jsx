/**
 * MRSConcept.jsx - Section 4 of Lesson 4
 * Marginal Rate of Substitution (MRS)
 */
import { FaExchangeAlt, FaArrowDown, FaBalanceScale, FaInfoCircle } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

function MRSConcept() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <h2 className="section-title-lesson">Marginal Rate of Substitution (MRS)</h2>
        <p className="section-subtitle-lesson">Understanding the trade-off between two goods</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">What is MRS?</h3>
          <p>
            The <strong>Marginal Rate of Substitution (MRS)</strong> is the rate at which a consumer is willing to
            substitute one good (Y) for another (X) while maintaining the same level of satisfaction.
          </p>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaExchangeAlt /></div>
            <div className="highlight-content">
              <h3>The Formula</h3>
              <div className="formula-box" style={{ fontSize: '1.5rem', textAlign: 'center', margin: '1rem 0' }}>
                MRS<sub>xy</sub> = ΔY / ΔX = MU<sub>x</sub> / MU<sub>y</sub>
              </div>
              <p>
                Where:<br />
                - <strong>ΔY</strong> = Change in quantity of Good Y (amount given up)<br />
                - <strong>ΔX</strong> = Change in quantity of Good X (amount gained)
              </p>
            </div>
          </div>

          <h3 className="highlight-cyan">Diminishing MRS</h3>
          <p>
            As the consumer gets more and more units of Good X, their desire for it decreases and their desire to
            keep Good Y increases. Therefore, they are willing to give up <strong>fewer and fewer</strong> units of Y
            for each additional unit of X.
          </p>

          <div className="example-box">
            <h4>Numerical Example:</h4>
            <ul className="bullet-list">
              <li>1X + 10Y → Basic bundle</li>
              <li>2X + 7Y → Gave up <strong>3Y</strong> for 1X (MRS = 3)</li>
              <li>3X + 5Y → Gave up <strong>2Y</strong> for 1X (MRS = 2)</li>
              <li>4X + 4Y → Gave up <strong>1Y</strong> for 1X (MRS = 1)</li>
            </ul>
            <p>Notice how MRS falls from 3 to 2 to 1. This is <strong>Diminishing MRS</strong>.</p>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaArrowDown /></div>
            <div className="highlight-content">
              <h3>Why does it diminish?</h3>
              <p>
                It diminishes because of the <strong>Law of Diminishing Marginal Utility</strong>. As we have more of X,
                its marginal utility (MUx) falls, and as we have less of Y, its marginal utility (MUy) rises. Since
                MRS = MUx/MUy, the ratio must fall.
              </p>
            </div>
          </div>

          <div className="highlight-card green">
            <div className="highlight-icon"><FaInfoCircle /></div>
            <div className="highlight-content">
              <h3>Connection to Shape</h3>
              <p>
                The <strong>Diminishing MRS</strong> is the specific reason why the indifference curve is
                <strong> convex to the origin</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <div className="nav-hint">
          Next: Budget Line / Price Line
        </div>
      </div>
    </section>
  );
}

export default MRSConcept;
