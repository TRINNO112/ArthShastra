/**
 * ConsumerEquilibrium.jsx - Topic 4 of Lesson 3
 *
 * Content to add:
 * - Meaning of consumer equilibrium
 * - Assumptions for consumer equilibrium
 * - One commodity case (MU = P)
 * - Two commodity case (MUx/Px = MUy/Py)
 * - Derivation of demand curve from MU
 *
 * Related quiz topic: consumer-equilibrium
 */

import { FaBalanceScale, FaEquals, FaBoxOpen, FaShoppingBag, FaChartLine } from 'react-icons/fa';
import './component.css';

function ConsumerEquilibrium() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Concept of Consumer Equilibrium</h2>
        <p className="section-subtitle-lesson">Understanding when a consumer stops spending</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* Meaning of Consumer Equilibrium */}
          <h3 className="highlight-gold">What is Consumer Equilibrium?</h3>
          <p className="term">
            "Consumer equilibrium refers to the situation where a consumer spends their
            entire income on goods in such a way that gives maximum satisfaction."
          </p>
          <p>
            A consumer is in equilibrium when they have no tendency to change their
            consumption bundle. At this point, they cannot increase satisfaction by
            buying more or less of any good. The consumer has optimally allocated their
            limited income across goods to maximize total utility. This is the point where
            the consumer stops purchasing because any further purchase would reduce net satisfaction.
          </p>
          <div className="note-text">
            <strong>Example:</strong> If you have ₹100 to spend on apples and oranges, you're in
            equilibrium when spending that ₹100 in a way that gives you maximum satisfaction -
            reallocating even ₹1 would make you worse off.
          </div>

          {/* Assumptions */}
          <h3 className="highlight-cyan">Assumptions</h3>
          <div className="assumptions-list">
            <div className="assumption-item">
              <span className="assumption-number">1</span>
              <div className="assumption-content">
                <h4>Rational Consumer</h4>
                <p>Consumer aims to maximize satisfaction (utility) from consumption</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">2</span>
              <div className="assumption-content">
                <h4>Limited Income</h4>
                <p>Consumer has a fixed budget/income to spend</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">3</span>
              <div className="assumption-content">
                <h4>Known Prices</h4>
                <p>Prices of all goods are known and constant</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">4</span>
              <div className="assumption-content">
                <h4>Utility Measurable</h4>
                <p>Utility can be measured in cardinal numbers (utils)</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">5</span>
              <div className="assumption-content">
                <h4>No Change in Other Factors</h4>
                <p>Tastes, preferences, and prices of related goods remain unchanged</p>
              </div>
            </div>
          </div>

          {/* One Commodity Case */}
          <h3 className="highlight-gold">Case 1: One Commodity</h3>
          <p>
            When a consumer buys only one commodity, equilibrium is reached when
            the marginal utility from the last unit equals the price paid. This is because:
          </p>
          <ul className="bullet-list">
            <li><strong>If MU {'>'} Price:</strong> The consumer gains more satisfaction than what they pay,
            so they should buy more units</li>
            <li><strong>If MU = Price:</strong> The consumer is in equilibrium - satisfaction gained equals
            money paid, no net gain from buying more</li>
            <li><strong>If MU {'<'} Price:</strong> The consumer loses satisfaction - they pay more than the
            utility received, so they should stop buying</li>
          </ul>

          <div className="formula-box">
            <strong>Condition:</strong> MU = Price
          </div>

          {/* Table for one commodity */}
          <div className="table-container">
            <table className="equilibrium-table">
              <thead>
                <tr>
                  <th>Units</th>
                  <th>MU (Utils)</th>
                  <th>Price (₹)</th>
                  <th>MU vs P</th>
                  <th>Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>20</td>
                  <td>5</td>
                  <td>MU {'>'} P</td>
                  <td>Buy (gain 15 utils)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>15</td>
                  <td>5</td>
                  <td>MU {'>'} P</td>
                  <td>Buy (gain 10 utils)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10</td>
                  <td>5</td>
                  <td>MU = P</td>
                  <td><strong>Equilibrium</strong></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>5</td>
                  <td>MU {'<'} P</td>
                  <td>Don't buy (lose 0 utils)</td>
                </tr>
              </tbody>
            </table>
            <p className="table-note">Consumer buys 3 units at equilibrium</p>
          </div>

          <div className="note-text">
            <strong>Logic:</strong> As long as MU {'>'} P, each purchase gives net gain (utility - price).
            When MU = P, no net gain. When MU {'<'} P, purchase causes loss.
          </div>

          {/* Two Commodity Case */}
          <h3 className="highlight-green">Case 2: Two Commodities (X and Y)</h3>
          <p>
            When a consumer buys two commodities (X and Y), equilibrium is reached when
            the marginal utility per rupee spent is equal for both goods. This ensures optimal
            allocation of the budget between the two goods. The consumer continues reallocating
            spending until the utility per rupee is equalized across both commodities.
          </p>
          <p>
            <strong>Why this condition?</strong> If MU<sub>X</sub>/P<sub>X</sub> {'>'} MU<sub>Y</sub>/P<sub>Y</sub>,
            it means each rupee spent on X gives more utility than a rupee spent on Y. The rational consumer
            will buy more of X and less of Y until equality is achieved.
          </p>

          <div className="formula-box">
            <strong>Condition:</strong> MU<sub>X</sub> / P<sub>X</sub> = MU<sub>Y</sub> / P<sub>Y</sub>
          </div>

          {/* Two column explanation */}
          <div className="two-column">
            <div className="column">
              <h4>If MUx/Px {'>'} MUy/Py</h4>
              <p>Consumer should buy more X and less Y</p>
              <p>MUx will fall, MUy will rise until equality</p>
            </div>
            <div className="column">
              <h4>If MUx/Px {'<'} MUy/Py</h4>
              <p>Consumer should buy more Y and less X</p>
              <p>MUy will fall, MUx will rise until equality</p>
            </div>
          </div>

          {/* Table for two commodities */}
          <div className="table-container">
            <table className="equilibrium-table two-commodity">
              <thead>
                <tr>
                  <th>Commodity</th>
                  <th>MU</th>
                  <th>Price (₹)</th>
                  <th>MU/P (Utils per ₹)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Apple (X)</td>
                  <td>20</td>
                  <td>5</td>
                  <td>4</td>
                  <td>Buy more</td>
                </tr>
                <tr>
                  <td>Orange (Y)</td>
                  <td>15</td>
                  <td>3</td>
                  <td>5</td>
                  <td>Buy more</td>
                </tr>
              </tbody>
            </table>
            <p className="table-note">
              Since MUy/Py (5) {'>'}  MUx/Px (4), consumer should buy more Oranges and fewer Apples
            </p>
          </div>

          {/* Diagrammatic Presentation */}
          <h3 className="highlight-cyan">Diagrammatic Presentation</h3>
          <div className="diagram-placeholder">
            <h4><FaChartLine /> Derivation of Demand Curve</h4>
            <div className="placeholder-image">
              <p>TODO: Add diagram showing:</p>
              <ul>
                <li>MU curve sloping downward</li>
                <li>Price line at different levels</li>
                <li>Quantity demanded at each price level</li>
                <li>Derivation of individual demand curve</li>
              </ul>
            </div>
          </div>

          {/* Important Notes */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaBalanceScale /></div>
            <div className="highlight-content">
              <h3>Key Points</h3>
              <ul className="bullet-list">
                <li>Consumer equilibrium is the "golden point" of maximum satisfaction</li>
                <li>At equilibrium, consumer has no incentive to change consumption</li>
                <li>Law of DMU ensures MU curve slopes downward, making equilibrium possible</li>
                <li>Change in price or income disturbs equilibrium</li>
              </ul>
            </div>
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
              <li>More numerical examples</li>
              <li>Interactive equilibrium calculator</li>
              <li>Graph visualization</li>
              <li>Practice problems with solutions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          Previous: Law of Diminishing Marginal Utility
          <span className="separator">|</span>
          Next: Utility Cases (One vs Two Commodity)
        </div>
      </div>
    </section>
  );
}

export default ConsumerEquilibrium;

/*
 * FUTURE IMPROVEMENTS:
 * - Add interactive MU/P calculator
 * - Add graphical representation of equilibrium
 * - Add case studies
 * - Add video explanation
 * - Add comparison with indifference curve approach
 */
