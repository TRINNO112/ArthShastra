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

import { FaBalanceScale, FaEquals, FaBoxOpen, FaShoppingBag, FaChartLine, FaArrowRight } from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
  Label
} from 'recharts';
import './component.css';

function ConsumerEquilibrium() {
  // Data for MU-Price Equilibrium Chart
  const utilityData = [
    { quantity: 0, mu: 45 },
    { quantity: 1, mu: 40 },
    { quantity: 2, mu: 35 },
    { quantity: 3, mu: 30 },
    { quantity: 4, mu: 25 },
    { quantity: 5, mu: 20 },
    { quantity: 6, mu: 15 },
    { quantity: 7, mu: 10 },
    { quantity: 8, mu: 5 },
    { quantity: 9, mu: 0 }
  ];

  // Price levels and their equilibrium quantities
  const priceLevels = [
    { value: 40, label: 'P₁ = ₹40', equilibriumQ: 1 },
    { value: 30, label: 'P₂ = ₹30', equilibriumQ: 3 },
    { value: 20, label: 'P₃ = ₹20', equilibriumQ: 5 }
  ];

  // Data for Demand Curve
  const demandData = [
    { quantity: 1, price: 40 },
    { quantity: 2, price: 35 },
    { quantity: 3, price: 30 },
    { quantity: 4, price: 25 },
    { quantity: 5, price: 20 },
    { quantity: 6, price: 15 },
    { quantity: 7, price: 10 }
  ];

  // Specific points to highlight on demand curve
  const demandPoints = [
    { quantity: 1, price: 40 },
    { quantity: 3, price: 30 },
    { quantity: 5, price: 20 }
  ];

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
          <div className="demand-curve-derivation">
            <h4><FaChartLine /> Derivation of Individual Demand Curve</h4>
            <div className="dual-diagram">
              {/* Left: MU-Price Equilibrium Diagram */}
              <div className="diagram-panel">
                <h5>Panel A: Consumer Equilibrium (MU = Price)</h5>
                <div className="graph-container">
                  <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={utilityData}>
                      <CartesianGrid stroke="#00ffff" strokeDasharray="3 3" opacity="0.2" />
                      <XAxis
                        dataKey="quantity"
                        stroke="#00ffff"
                        tick={{ fill: '#00ffff', fontSize: 12 }}
                        axisLine={{ stroke: '#00ffff', strokeWidth: 2 }}
                        tickLine={{ stroke: '#00ffff' }}
                        label={{
                          value: 'Quantity Consumed (Units)',
                          position: 'bottom',
                          fill: '#00ffff',
                          fontSize: 12
                        }}
                      />
                      <YAxis
                        stroke="#00ff00"
                        tick={{ fill: '#00ff00', fontSize: 12 }}
                        axisLine={{ stroke: '#00ff00', strokeWidth: 2 }}
                        tickLine={{ stroke: '#00ff00' }}
                        domain={[0, 50]}
                        label={{
                          value: 'Marginal Utility (Utils)',
                          angle: -90,
                          position: 'insideLeft',
                          fill: '#00ff00',
                          fontSize: 12
                        }}
                      />
                      <Tooltip
                        contentStyle={{
                          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                          border: '1px solid #00ffff',
                          borderRadius: '8px'
                        }}
                        labelStyle={{ color: '#00ffff' }}
                        itemStyle={{ color: '#ffd700' }}
                      />
                      {/* MU Curve */}
                      <Line
                        type="monotone"
                        dataKey="mu"
                        stroke="#00ff00"
                        strokeWidth={3}
                        dot={{
                          fill: '#00ff00',
                          strokeWidth: 2,
                          r: 5,
                          stroke: '#fff'
                        }}
                        activeDot={{
                          r: 8,
                          stroke: '#00ff00',
                          strokeWidth: 3,
                          fill: '#fff'
                        }}
                        name="Marginal Utility"
                      />
                      {/* Price Lines and Equilibrium Points */}
                      {priceLevels.map((price, idx) => (
                        <g key={idx}>
                          {/* Price Line */}
                          <ReferenceLine
                            y={price.value}
                            stroke="#ffd700"
                            strokeDasharray="5 5"
                            strokeWidth={2}
                            label={{
                              value: price.label,
                              fill: '#ffd700',
                              fontSize: 11,
                              position: 'right'
                            }}
                          />
                          {/* Equilibrium Point */}
                          <ReferenceDot
                            x={price.equilibriumQ}
                            y={price.value}
                            r={6}
                            fill="#ffff00"
                            stroke="#fff"
                            strokeWidth={2}
                          />
                          {/* Vertical Line to X-axis */}
                          <ReferenceLine
                            x={price.equilibriumQ}
                            stroke="#ffff00"
                            strokeDasharray="3 3"
                            strokeWidth={1}
                          />
                        </g>
                      ))}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Right: Derived Demand Curve */}
              <div className="diagram-panel">
                <h5>Panel B: Individual Demand Curve</h5>
                <div className="graph-container">
                  <ResponsiveContainer width="100%" height={320}>
                    <LineChart data={demandData}>
                      <CartesianGrid stroke="#00ffff" strokeDasharray="3 3" opacity="0.2" />
                      <XAxis
                        dataKey="quantity"
                        stroke="#00ffff"
                        tick={{ fill: '#00ffff', fontSize: 12 }}
                        axisLine={{ stroke: '#00ffff', strokeWidth: 2 }}
                        tickLine={{ stroke: '#00ffff' }}
                        label={{
                          value: 'Quantity Demanded (Units)',
                          position: 'bottom',
                          fill: '#00ffff',
                          fontSize: 12
                        }}
                      />
                      <YAxis
                        stroke="#ff6b6b"
                        tick={{ fill: '#ff6b6b', fontSize: 12 }}
                        axisLine={{ stroke: '#ff6b6b', strokeWidth: 2 }}
                        tickLine={{ stroke: '#ff6b6b' }}
                        domain={[15, 45]}
                        label={{
                          value: 'Price (₹)',
                          angle: -90,
                          position: 'insideLeft',
                          fill: '#ff6b6b',
                          fontSize: 12
                        }}
                      />
                      <Tooltip
                        contentStyle={{
                          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
                          border: '1px solid #ff6b6b',
                          borderRadius: '8px'
                        }}
                        labelStyle={{ color: '#ff6b6b' }}
                        itemStyle={{ color: '#ffd700' }}
                      />
                      {/* Demand Curve */}
                      <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#ff6b6b"
                        strokeWidth={3}
                        dot={{
                          fill: '#ff6b6b',
                          strokeWidth: 2,
                          r: 5,
                          stroke: '#fff'
                        }}
                        activeDot={{
                          r: 8,
                          stroke: '#ff6b6b',
                          strokeWidth: 3,
                          fill: '#fff'
                        }}
                        name="Demand Curve"
                      />
                      {/* Price-Quantity Points */}
                      {demandPoints.map((point, idx) => (
                        <g key={idx}>
                          {/* Price Line */}
                          <ReferenceLine
                            y={point.price}
                            stroke="#ffff00"
                            strokeDasharray="3 3"
                            strokeWidth={1}
                          />
                          {/* Quantity Line */}
                          <ReferenceLine
                            x={point.quantity}
                            stroke="#ffff00"
                            strokeDasharray="3 3"
                            strokeWidth={1}
                          />
                          {/* Point */}
                          <ReferenceDot
                            x={point.quantity}
                            y={point.price}
                            r={6}
                            fill="#ffff00"
                            stroke="#fff"
                            strokeWidth={2}
                          />
                        </g>
                      ))}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="diagram-explanation">
              <h6>How Demand Curve is Derived:</h6>
              <div className="explanation-item">
                <span className="arrow yellow">1.</span>
                <span>Consumer equilibrium occurs where <strong>MU = Price</strong></span>
              </div>
              <div className="explanation-item">
                <span className="arrow green">2.</span>
                <span>When price falls (P₁ → P₂ → P₃), consumer buys more quantity (Q₁ → Q₂ → Q₃)</span>
              </div>
              <div className="explanation-item">
                <span className="arrow red">3.</span>
                <span>Plotting price-quantity combinations gives the <strong>downward sloping demand curve</strong></span>
              </div>
              <div className="explanation-item">
                <span className="arrow gold">4.</span>
                <span><strong>Law of DMU</strong> is the foundation - as consumption increases, MU falls, so consumer needs lower price to buy more</span>
              </div>
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

      {/* Numerical Examples and Practice Problems */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">✏️ Practice Problems</h3>

          {/* Problem 1: One Commodity */}
          <div className="example-box">
            <h4>
              <span style={{ color: '#00ffff' }}>Problem 1:</span> Find Equilibrium (One Commodity)
            </h4>
            <div className="example-content">
              <p>
                The price of chocolate is ₹10 per bar. The marginal utility schedule is given below.
                Find the equilibrium quantity where the consumer stops buying.
              </p>
              <div className="table-container">
                <table className="equilibrium-table">
                  <thead>
                    <tr>
                      <th>Bars</th>
                      <th>MU (Utils)</th>
                      <th>Price (₹)</th>
                      <th>MU - Price</th>
                      <th>Decision</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>25</td>
                      <td>10</td>
                      <td>+15</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>20</td>
                      <td>10</td>
                      <td>+10</td>
                      <td>Buy</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>10</td>
                      <td>10</td>
                      <td>0</td>
                      <td><strong>Equilibrium</strong></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>5</td>
                      <td>10</td>
                      <td>-5</td>
                      <td>Don't Buy</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p><strong>Answer:</strong> Consumer buys 3 bars (where MU = Price = ₹10)</p>
            </div>
          </div>

          {/* Problem 2: Two Commodities */}
          <div className="example-box">
            <h4>
              <span style={{ color: '#ffd700' }}>Problem 2:</span> Find Equilibrium (Two Commodities)
            </h4>
            <div className="example-content">
              <p>
                A consumer has ₹24 to spend on Good X (₹3/unit) and Good Y (₹2/unit).
                The marginal utility schedules are given below. Find the equilibrium bundle.
              </p>
              <div className="table-container">
                <table className="equilibrium-table two-commodity">
                  <thead>
                    <tr>
                      <th>Units</th>
                      <th>MUₓ</th>
                      <th>MUᵧ</th>
                      <th>MUₓ/Pₓ</th>
                      <th>MUᵧ/Pᵧ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>18</td>
                      <td>16</td>
                      <td>6</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>15</td>
                      <td>14</td>
                      <td>5</td>
                      <td>7</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>12</td>
                      <td>10</td>
                      <td>4</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>9</td>
                      <td>6</td>
                      <td>3</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>6</td>
                      <td>2</td>
                      <td>2</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>Solution:</strong> MUₓ/Pₓ = MUᵧ/Pᵧ = 3 at 4 units of X and 4 units of Y.
              </p>
              <p>
                <strong>Check Budget:</strong> (4 × ₹3) + (4 × ₹2) = ₹12 + ₹8 = ₹20 (within budget).
                Consumer can also add more units until budget is exhausted.
              </p>
            </div>
          </div>

          {/* Key Formulas */}
          <div className="formula-display">
            <h4>📐 Key Formulas</h4>
            <ul className="bullet-list">
              <li><strong>One Commodity:</strong> MU = Price</li>
              <li><strong>Two Commodities:</strong> MUₓ/Pₓ = MUᵧ/Pᵧ</li>
              <li><strong>General Condition:</strong> MU₁/P₁ = MU₂/P₂ = ... = MUₙ/Pₙ</li>
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
