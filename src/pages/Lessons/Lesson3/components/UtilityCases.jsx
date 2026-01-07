/**
 * UtilityCases.jsx - Topic 5 of Lesson 3
 *
 * Content to add:
 * - One Commodity Case (detailed explanation)
 *   - When consumer spends all income on single commodity
 *   - MU = P condition
 *   - Numerical examples
 *
 * - Two Commodity Case (detailed explanation)
 *   - Budget constraint
 *   - MUx/Px = MUy/Py condition
 *   - Equilibrium basket
 *   - Numerical examples
 *
 * - Comparison between cases
 * - Practical implications
 *
 * Related quiz topic: consumer-equilibrium
 */

import { FaBoxOpen, FaShoppingBag, FaEquals, FaExchangeAlt, FaCalculator } from 'react-icons/fa';
import './component.css';

function UtilityCases() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Utility Analysis: One Commodity vs Two Commodity Cases</h2>
        <p className="section-subtitle-lesson">Analyzing consumer equilibrium in different scenarios</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* Introduction */}
          <p>
            In utility analysis, we study consumer behavior under two simplified scenarios:
            when a consumer buys only one commodity and when a consumer buys two commodities.
            Both cases help us understand how consumers maximize satisfaction under different
            consumption patterns. These models form the foundation for understanding more complex
            consumer behavior in real-world markets.
          </p>

          <div className="highlight-card green">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h4>Why Study These Cases?</h4>
              <ul className="bullet-list">
                <li><strong>One Commodity:</strong> Simplifies analysis to understand basic MU-Price relationship</li>
                <li><strong>Two Commodities:</strong> Introduces substitution and income effects</li>
                <li><strong>Foundation:</strong> Both cases lead to the derivation of demand curves</li>
                <li><strong>Real-world:</strong> Helps explain why demand curves slope downward</li>
              </ul>
            </div>
          </div>

          {/* One Commodity Case */}
          <h3 className="highlight-gold">Case 1: One Commodity Case</h3>
          <div className="case-header">
            <div className="case-icon"><FaBoxOpen /></div>
            <div className="case-info">
              <h4>Assumptions</h4>
              <ul>
                <li>Consumer spends entire income on single commodity</li>
                <li>Price of the commodity is given</li>
                <li>Consumer can buy fractional units if needed</li>
              </ul>
            </div>
          </div>

          <div className="formula-box">
            <strong>Condition for Equilibrium:</strong> MU = Price
          </div>

          <h4>Explanation</h4>
          <p>
            When a consumer buys only one commodity, they will continue to buy as long as
            the marginal utility from the last unit is greater than or equal to the price.
            The consumer stops when MU equals price.
          </p>

          <div className="explanation-box gold">
            <h5>Step-by-Step Decision Process:</h5>
            <ol>
              <li><strong>Compare MU with Price:</strong> For each additional unit, check if MU ≥ Price</li>
              <li><strong>Buy if MU {'>'} Price:</strong> If MU {'>'} Price, buying gives positive net benefit</li>
              <li><strong>Stop when MU = Price:</strong> At this point, no further gain from additional consumption</li>
              <li><strong>Don't Buy if MU {'<'} Price:</strong> Would result in net loss of satisfaction</li>
            </ol>
          </div>

          <div className="note-text">
            <strong>💡 Key Insight:</strong> This condition (MU = P) is the foundation of the <strong>Law of Demand</strong>.
            As price falls, more units satisfy MU ≥ P, so demand increases. As price rises, fewer units
            satisfy the condition, so demand decreases.
          </div>

          {/* Example Box */}
          <div className="example-box">
            <h4><FaCalculator /> Numerical Example</h4>
            <div className="example-content">
              <p><strong>Given:</strong> Price of commodity = ₹5 per unit</p>
              <div className="table-container">
                <table className="case-table">
                  <thead>
                    <tr>
                      <th>Units</th>
                      <th>MU (Utils)</th>
                      <th>Price (₹)</th>
                      <th>MU - Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>25</td>
                      <td>5</td>
                      <td>+20</td>
                      <td>Buy - Gain 20 utils</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>20</td>
                      <td>5</td>
                      <td>+15</td>
                      <td>Buy - Gain 15 utils</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>15</td>
                      <td>5</td>
                      <td>+10</td>
                      <td>Buy - Gain 10 utils</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>10</td>
                      <td>5</td>
                      <td>+5</td>
                      <td>Buy - Gain 5 utils</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>5</td>
                      <td>5</td>
                      <td>0</td>
                      <td><strong>Equilibrium</strong></td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>0</td>
                      <td>5</td>
                      <td>-5</td>
                      <td>Don't Buy - Lose 5 utils</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Equilibrium Quantity:</strong> 5 units (where MU = Price = 5)</p>
            </div>
          </div>

          {/* Two Commodity Case */}
          <h3 className="highlight-green">Case 2: Two Commodity Case</h3>
          <div className="case-header">
            <div className="case-icon"><FaShoppingBag /></div>
            <div className="case-info">
              <h4>Assumptions</h4>
              <ul>
                <li>Consumer has income to spend on two goods (X and Y)</li>
                <li>Prices of both goods are given</li>
                <li>Consumer can allocate income between both goods</li>
              </ul>
            </div>
          </div>

          <div className="formula-box">
            <strong>Condition for Equilibrium:</strong> MU<sub>X</sub> / P<sub>X</sub> = MU<sub>Y</sub> / P<sub>Y</sub>
          </div>

          <h4>Explanation</h4>
          <p>
            When a consumer buys two commodities, they allocate income to maximize total utility.
            The consumer spends each rupee where it gives the most marginal utility.
            At equilibrium, the marginal utility per rupee is the same for both goods.
          </p>

          <div className="explanation-box cyan">
            <h5>How Consumer Allocates Income:</h5>
            <ol>
              <li><strong>Calculate MU/P Ratio:</strong> For each good, find marginal utility per rupee spent</li>
              <li><strong>Compare Ratios:</strong> Spend on the good with higher MU/P ratio first</li>
              <li><strong>Re-evaluate After Each Purchase:</strong> MU changes due to Law of DMU</li>
              <li><strong>Continue Until Equilibrium:</strong> MU<sub>X</sub>/P<sub>X</sub> = MU<sub>Y</sub>/P<sub>Y</sub></li>
              <li><strong>Spend All Income:</strong> No saving or borrowing (ceteris paribus assumption)</li>
            </ol>
          </div>

          <div className="formula-box">
            <strong>Equilibrium Condition:</strong> MU<sub>X</sub>/P<sub>X</sub> = MU<sub>Y</sub>/P<sub>Y</sub> = MUm
          </div>

          <div className="note-text">
            <strong>💡 Key Insight:</strong> This is the <strong>Law of Equi-Marginal Utility</strong> or <strong>Law of Substitution</strong>.
            It explains how consumers achieve maximum satisfaction by equalizing utility per rupee across all goods.
            This principle is the foundation for understanding consumer choice and demand in multi-commodity markets.
          </div>

          {/* Example Box */}
          <div className="example-box">
            <h4><FaCalculator /> Numerical Example</h4>
            <div className="example-content">
              <p><strong>Given:</strong> Income = ₹20, P<sub>X</sub> = ₹5, P<sub>Y</sub> = ₹4</p>
              <p><strong>Initial State:</strong></p>
              <div className="table-container">
                <table className="case-table">
                  <thead>
                    <tr>
                      <th>Commodity</th>
                      <th>Units</th>
                      <th>MU</th>
                      <th>Price (₹)</th>
                      <th>MU/P</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>X (Apple)</td>
                      <td>2</td>
                      <td>15</td>
                      <td>5</td>
                      <td>3</td>
                      <td>Buy less X</td>
                    </tr>
                    <tr>
                      <td>Y (Orange)</td>
                      <td>2</td>
                      <td>16</td>
                      <td>4</td>
                      <td>4</td>
                      <td>Buy more Y</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Adjustment:</strong> Since MUy/Py (4) &gt; MUx/Px (3), consumer should buy more Y and less X</p>
              <p><strong>Final Equilibrium:</strong> MUx/Px = MUy/Py = 3.5</p>
            </div>
          </div>

          {/* Comparison Table */}
          <h3 className="highlight-cyan">Comparison: One vs Two Commodity Case</h3>
          <div className="table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>One Commodity</th>
                  <th>Two Commodity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Equilibrium Condition</td>
                  <td>MU = P</td>
                  <td>MUx/Px = MUy/Py</td>
                </tr>
                <tr>
                  <td>Complexity</td>
                  <td>Simple</td>
                  <td>More complex</td>
                </tr>
                <tr>
                  <td>Budget Constraint</td>
                  <td>Single good</td>
                  <td>Income allocation</td>
                </tr>
                <tr>
                  <td>Real-world Application</td>
                  <td>Limited</td>
                  <td>More realistic</td>
                </tr>
                <tr>
                  <td>Optimal Quantity</td>
                  <td>Single good quantity</td>
                  <td>Quantity of both goods</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Important Note */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaExchangeAlt /></div>
            <div className="highlight-content">
              <h3>Key Insight</h3>
              <p>
                The two-commodity case is more realistic as consumers typically buy multiple goods.
                The MUx/Px = MUy/Py condition ensures that the consumer cannot gain by
                reallocating spending from one good to another.
              </p>
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
              <li>Interactive budget allocation calculator</li>
              <li>Graphical representation</li>
              <li>Practice problems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          Previous: Concept of Consumer Equilibrium
          <span className="separator">|</span>
          Next: Limitations of Utility Analysis
        </div>
      </div>
    </section>
  );
}

export default UtilityCases;

/*
 * FUTURE IMPROVEMENTS:
 * - Add interactive calculator for both cases
 * - Add visual representation of budget line
 * - Add more real-world examples
 * - Add step-by-step solution to equilibrium problems
 */
