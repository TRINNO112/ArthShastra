import React from 'react';
import { FaRuler } from 'react-icons/fa';
import '../css/lesson3-brutalist.css';

const LimitationsOfUtility = () => {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 3 / SECTION 5</div>
          <h2 className="brutalist-title">LIMITATIONS OF<br />UTILITY ANALYSIS</h2>
          <p className="brutalist-subtitle">Why this theory isn't perfect</p>
        </header>

        <section className="brutalist-card">
          <h3 className="brutalist-card-heading red">CRITIQUE OF CARDINAL UTILITY</h3>

          <div className="brutalist-grid-3">
            <div className="brutalist-grid-item red">
              <div className="brutalist-number">01</div>
              <h4>UNREALISTIC MEASURABILITY</h4>
              <p>
                Utility is a psychological feeling. It cannot be measured in numbers (10, 20, 30 utils) like height or weight. Creating a standard unit (util) is imaginary.
              </p>
            </div>

            <div className="brutalist-grid-item red">
              <div className="brutalist-number">02</div>
              <h4>CONSTANT MU OF MONEY</h4>
              <p>
                The theory assumes the utility of money remains constant. In reality, as a person spends money, the remaining money becomes MORE valuable to them (scarcity of money increases).
              </p>
            </div>

            <div className="brutalist-grid-item red">
              <div className="brutalist-number">03</div>
              <h4>INDEPENDENT UTILITY</h4>
              <p>
                It assumes goods are independent. But often, utility of one good depends on another (e.g., utility of tea depends on sugar).
              </p>
            </div>
          </div>

          <div className="brutalist-highlight dark" style={{ marginTop: '30px' }}>
            <strong>THE SOLUTION?</strong>
            <br /><br />
            Due to these limitations, modern economists prefer <strong>Ordinal Utility Analysis</strong> (Indifference Curves), which only requires <em>ranking</em> preferences (1st, 2nd, 3rd) rather than measuring them.
          </div>
        </section>

        {/* Comparison: Cardinal vs Ordinal */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">CARDINAL VS ORDINAL APPROACH</h3>
          <p style={{ marginBottom: '25px' }}>How economists evolved their thinking about utility:</p>

          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>BASIS</th>
                  <th style={{ color: 'var(--brutalist-yellow)' }}>CARDINAL UTILITY</th>
                  <th style={{ color: 'var(--brutalist-cyan)' }}>ORDINAL UTILITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Concept</strong></td>
                  <td>Utility can be <strong>measured</strong> in numbers (1, 2, 3...)</td>
                  <td>Utility can only be <strong>ranked</strong> (1st, 2nd, 3rd...)</td>
                </tr>
                <tr>
                  <td><strong>Unit</strong></td>
                  <td>Hypothetical "Utils"</td>
                  <td>Ranks / Preferences</td>
                </tr>
                <tr>
                  <td><strong>Assumption</strong></td>
                  <td>Satisfaction is quantifiable</td>
                  <td>Satisfaction is psychological & relative</td>
                </tr>
                <tr>
                  <td><strong>Realism</strong></td>
                  <td style={{ color: 'var(--brutalist-red)' }}>Less Realistic (Subjective)</td>
                  <td style={{ color: 'var(--brutalist-green)' }}>More Realistic</td>
                </tr>
                <tr>
                  <td><strong>Main Economist</strong></td>
                  <td>Alfred Marshall</td>
                  <td>J.R. Hicks & R.G.D. Allen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LimitationsOfUtility;
