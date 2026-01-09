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

import { FaBoxOpen, FaShoppingBag, FaExchangeAlt, FaCalculator, FaLightbulb } from 'react-icons/fa';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  BarChart,
  Bar,
} from 'recharts';
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
              <h5>Question</h5>
              <p>
                The price of a commodity is <strong>₹10 per unit</strong>. The marginal utility (MU) schedule is given below.
                Using the <strong>MU = Price</strong> condition, find the <strong>equilibrium quantity</strong>.
              </p>

              <h5>Table</h5>
              <div className="table-container">
                <table className="case-table">
                  <thead>
                    <tr>
                      <th>Units</th>
                      <th>MU (Utils)</th>
                      <th>Price (₹)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>20</td>
                      <td>10</td>
                      <td>Buy (MU {'>'} Price)</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>16</td>
                      <td>10</td>
                      <td>Buy (MU {'>'} Price)</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>10</td>
                      <td>10</td>
                      <td><strong>Equilibrium (MU = Price)</strong></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>5</td>
                      <td>10</td>
                      <td>Don't Buy (MU {'<'} Price)</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>0</td>
                      <td>10</td>
                      <td>Don't Buy (MU {'<'} Price)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5>Graph</h5>
              <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                  <LineChart
                    data={[
                      { units: 0, MU: 25, Price: 10 },
                      { units: 1, MU: 20, Price: 10 },
                      { units: 2, MU: 16, Price: 10 },
                      { units: 3, MU: 10, Price: 10 },
                      { units: 4, MU: 5, Price: 10 },
                      { units: 5, MU: 0, Price: 10 },
                    ]}
                    margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="units" label={{ value: 'Units of Commodity', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'MU (Utils) / Price (₹)', angle: -90, position: 'insideLeft' }} domain={[0, 30]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Price" stroke="#f59e0b" strokeWidth={2} dot={false} name="Price (₹)" />
                    <Line type="monotone" dataKey="MU" stroke="#22c55e" strokeWidth={3} dot={{ r: 4 }} name="MU (Utils)" />
                    {/* Mark equilibrium point E where MU = Price */}
                    <ReferenceLine x={3} stroke="#ef4444" strokeDasharray="5 5" label={{ value: 'E', position: 'top' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p><strong>Equilibrium Quantity:</strong> 3 units (where MU = Price = ₹10) — Point E on the graph</p>
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
              <h5>Question</h5>
              <p>
                A consumer has income of <strong>₹26</strong> to spend on two goods, X and Y.
                Prices are: P<sub>X</sub> = <strong>₹2</strong>, P<sub>Y</sub> = <strong>₹2</strong>.
                The MU schedules for both goods are shown below. Find the equilibrium bundle using <strong>MU<sub>X</sub>/P<sub>X</sub> = MU<sub>Y</sub>/P<sub>Y</sub></strong>.
              </p>

              <h5>Table</h5>
              <div className="table-container">
                <table className="case-table">
                  <thead>
                    <tr>
                      <th>Units</th>
                      <th>MU<sub>X</sub></th>
                      <th>MU<sub>Y</sub></th>
                      <th>MU<sub>X</sub>/P<sub>X</sub></th>
                      <th>MU<sub>Y</sub>/P<sub>Y</sub></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>36</td>
                      <td>40</td>
                      <td>18</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>24</td>
                      <td>32</td>
                      <td>12</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td><strong>12</strong></td>
                      <td>24</td>
                      <td><strong>6</strong></td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>8</td>
                      <td><strong>12</strong></td>
                      <td>4</td>
                      <td><strong>6</strong></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>6</td>
                      <td>8</td>
                      <td>3</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>4</td>
                      <td>6</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h5>Graph</h5>
              <div style={{ width: '100%', height: 350 }}>
                <ResponsiveContainer>
                  <LineChart
                    data={[
                      { units: 1, MUX: 36, MUY: 40 },
                      { units: 2, MUX: 24, MUY: 32 },
                      { units: 3, MUX: 12, MUY: 24 },
                      { units: 4, MUX: 8, MUY: 12 },
                      { units: 5, MUX: 6, MUY: 8 },
                      { units: 6, MUX: 4, MUY: 6 },
                    ]}
                    margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="units" label={{ value: 'Units', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'MU (Utils)', angle: -90, position: 'insideLeft' }} domain={[0, 50]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="MUX" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} name="MUₓ (Good X)" />
                    <Line type="monotone" dataKey="MUY" stroke="#06b6d4" strokeWidth={3} dot={{ r: 4 }} name="MUᵧ (Good Y)" />
                    {/* Mark equilibrium points */}
                    <ReferenceLine x={3} stroke="#3b82f6" strokeDasharray="5 5" label={{ value: 'X=3', position: 'top' }} />
                    <ReferenceLine x={4} stroke="#06b6d4" strokeDasharray="5 5" label={{ value: 'Y=4', position: 'bottom' }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <p><strong>Equilibrium:</strong> Consumer buys 3 units of X and 4 units of Y where MU<sub>X</sub>/P<sub>X</sub> = MU<sub>Y</sub>/P<sub>Y</sub> = 6.</p>
              <p><strong>Total Expenditure:</strong> (3 × ₹2) + (4 × ₹2) = ₹6 + ₹8 = ₹14 (within income)</p>
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

      {/* Practice / Additional Examples */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">More Practice: One-Commodity Case</h3>
          <p>
            Suppose the price of a commodity (say, "Tea") is ₹4 per cup. A consumer will keep buying
            cups of tea as long as the marginal utility (MU) of the last cup is at least ₹4.
          </p>

          <div className="table-container">
            <table className="case-table">
              <thead>
                <tr>
                  <th>Cups</th>
                  <th>MU (Utils)</th>
                  <th>Price (₹)</th>
                  <th>Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>18</td>
                  <td>4</td>
                  <td>Buy (MU &gt; P)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>14</td>
                  <td>4</td>
                  <td>Buy (MU &gt; P)</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10</td>
                  <td>4</td>
                  <td>Buy (MU &gt; P)</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>6</td>
                  <td>4</td>
                  <td>Buy (MU &gt; P)</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>4</td>
                  <td>4</td>
                  <td><strong>Stop here (MU = P)</strong></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>2</td>
                  <td>4</td>
                  <td>Don’t buy (MU &lt; P)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="note-text">
            <strong>Result:</strong> Equilibrium quantity is <strong>5 cups</strong> (where MU = P).
          </div>

          <h3 className="highlight-green">More Practice: Two-Commodity Case</h3>
          <p>
            Now assume the consumer spends income on two goods: <strong>X</strong> and <strong>Y</strong>.
            Equilibrium requires:
            <strong> MU<sub>X</sub>/P<sub>X</sub> = MU<sub>Y</sub>/P<sub>Y</sub> </strong>
            and the whole budget is spent.
          </p>

          <div className="explanation-box cyan">
            <h5>Quick Illustration (How adjustment happens)</h5>
            <ul>
              <li>If MU<sub>X</sub>/P<sub>X</sub> is higher, shift spending from Y to X.</li>
              <li>If MU<sub>Y</sub>/P<sub>Y</sub> is higher, shift spending from X to Y.</li>
              <li>Stop shifting only when both ratios are equal.</li>
            </ul>
          </div>

          <div className="example-box">
            <h4><FaCalculator /> Mini Numerical Illustration</h4>
            <div className="example-content">
              <p><strong>Given:</strong> Income = ₹18, P<sub>X</sub> = ₹3, P<sub>Y</sub> = ₹3</p>
              <div className="table-container">
                <table className="case-table">
                  <thead>
                    <tr>
                      <th>Units</th>
                      <th>MUx</th>
                      <th>MUx/Px</th>
                      <th>MUy</th>
                      <th>MUy/Py</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>15</td>
                      <td>5</td>
                      <td>12</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>12</td>
                      <td>4</td>
                      <td>9</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>9</td>
                      <td>3</td>
                      <td>6</td>
                      <td>2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Here, initially X gives more utility per rupee than Y, so the consumer buys more X.
                As X consumption rises, MUx falls (DMU), and the ratio moves closer to Y.
                The consumer reaches equilibrium when both ratios become equal.
              </p>
            </div>
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
