/**
 * MRSConcept.jsx - Section 4 of Lesson 4
 * Marginal Rate of Substitution (MRS)
 */
import { FaExchangeAlt, FaArrowDown, FaBalanceScale, FaInfoCircle } from 'react-icons/fa';
import '../../Lesson3/css/lesson3-brutalist.css';

function MRSConcept() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 4 / SECTION 4</div>
          <h2 className="brutalist-title">MARGINAL RATE OF<br />SUBSTITUTION (MRS)</h2>
          <p className="brutalist-subtitle">Understanding the trade-off between two goods</p>
        </header>

        {/* What is MRS */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHAT IS MRS?</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              The <strong>Marginal Rate of Substitution (MRS)</strong> is the rate at which a consumer is willing to
              substitute one good (Y) for another (X) while maintaining the same level of satisfaction.
            </p>
          </div>

          <div className="brutalist-formula" style={{ marginTop: '25px' }}>
            MRS<sub>xy</sub> = ΔY / ΔX = MU<sub>x</sub> / MU<sub>y</sub>
          </div>

          <div className="brutalist-grid-2" style={{ marginTop: '20px' }}>
            <div className="brutalist-grid-item yellow">
              <h4 style={{ marginBottom: '5px' }}>ΔY</h4>
              <p>Change in quantity of Good Y (amount <strong>given up</strong>)</p>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4 style={{ marginBottom: '5px' }}>ΔX</h4>
              <p>Change in quantity of Good X (amount <strong>gained</strong>)</p>
            </div>
          </div>
        </section>

        {/* Diminishing MRS */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">DIMINISHING MRS</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>
            As the consumer gets more and more units of Good X, their desire for it decreases and their desire to
            keep Good Y increases. Therefore, they are willing to give up <strong>fewer and fewer</strong> units of Y
            for each additional unit of X.
          </p>

          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>BUNDLE</th>
                  <th>GOOD X</th>
                  <th>GOOD Y</th>
                  <th>Y GIVEN UP</th>
                  <th>MRS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>1</td>
                  <td>10</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>B</td>
                  <td>2</td>
                  <td>7</td>
                  <td>3</td>
                  <td style={{ color: 'var(--brutalist-yellow)', fontWeight: 'bold' }}>3</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>3</td>
                  <td>5</td>
                  <td>2</td>
                  <td style={{ color: 'var(--brutalist-yellow)', fontWeight: 'bold' }}>2</td>
                </tr>
                <tr>
                  <td>D</td>
                  <td>4</td>
                  <td>4</td>
                  <td>1</td>
                  <td style={{ color: 'var(--brutalist-yellow)', fontWeight: 'bold' }}>1</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="brutalist-highlight" style={{ marginTop: '20px' }}>
            <strong>OBSERVATION:</strong> MRS falls from 3 → 2 → 1. This is <strong>Diminishing MRS</strong>.
          </div>
        </section>

        {/* Why does MRS Diminish */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHY DOES MRS DIMINISH?</h3>
          <div className="brutalist-grid-item cyan" style={{ marginBottom: '20px' }}>
            <h4><FaArrowDown style={{ marginRight: '8px' }} />LAW OF DIMINISHING MARGINAL UTILITY</h4>
            <p style={{ lineHeight: '1.8' }}>
              As we have more of X, its marginal utility (MU<sub>x</sub>) falls. As we have less of Y, its marginal utility (MU<sub>y</sub>) rises.
              Since <strong>MRS = MU<sub>x</sub>/MU<sub>y</sub></strong>, the ratio must fall.
            </p>
          </div>

          <div className="brutalist-grid-item yellow">
            <h4><FaInfoCircle style={{ marginRight: '8px' }} />CONNECTION TO IC SHAPE</h4>
            <p style={{ lineHeight: '1.8' }}>
              The <strong>Diminishing MRS</strong> is the specific reason why the indifference curve is
              <strong> convex to the origin</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MRSConcept;
