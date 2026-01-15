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

          {/* ========== SINGLE COMMODITY CASE ========== */}
          <h4 className="text-center mb-4 mt-5">
            <FaChartLine /> Consumer Equilibrium: Single Commodity Case
          </h4>

          {/* Theory Section */}
          <div className="theory-box" style={{
            background: 'linear-gradient(135deg, rgba(0,86,179,0.1), rgba(0,150,255,0.05))',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: '1px solid rgba(0,86,179,0.3)'
          }}>
            <h5 style={{ color: '#4da6ff', marginBottom: '1rem' }}>📚 Theory & Concept</h5>
            <p style={{ color: '#ccc', lineHeight: '1.8' }}>
              <strong style={{ color: '#fff' }}>Consumer Equilibrium</strong> in the single commodity case occurs when a consumer
              maximizes their total satisfaction from consuming a commodity, given their income and the price of the commodity.
            </p>
            <p style={{ color: '#ccc', lineHeight: '1.8', marginTop: '0.5rem' }}>
              According to the <strong style={{ color: '#4da6ff' }}>Law of Diminishing Marginal Utility</strong>, as a consumer
              consumes more units of a commodity, the marginal utility (additional satisfaction) derived from each successive
              unit decreases.
            </p>

            <div style={{
              background: 'rgba(0,86,179,0.2)',
              padding: '1rem',
              borderRadius: '12px',
              marginTop: '1rem',
              border: '1px solid rgba(0,86,179,0.4)'
            }}>
              <h6 style={{ color: '#4da6ff' }}>🎯 Equilibrium Condition:</h6>
              <p style={{
                fontSize: '1.3rem',
                textAlign: 'center',
                color: '#fff',
                fontWeight: 'bold',
                margin: '1rem 0'
              }}>
                MU<sub>X</sub> = P<sub>X</sub>
              </p>
              <p style={{ color: '#aaa', fontSize: '0.9rem', textAlign: 'center' }}>
                (Marginal Utility of X = Price of X)
              </p>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <h6 style={{ color: '#fff' }}>📊 Decision Rules:</h6>
              <ul style={{ color: '#ccc', lineHeight: '2' }}>
                <li><strong style={{ color: '#28a745' }}>If MU<sub>X</sub> {'>'} P<sub>X</sub></strong> → Consumer should <span style={{ color: '#28a745' }}>BUY MORE</span> (Benefit exceeds Cost)</li>
                <li><strong style={{ color: '#ffc107' }}>If MU<sub>X</sub> = P<sub>X</sub></strong> → <span style={{ color: '#ffc107' }}>EQUILIBRIUM</span> (Maximum Satisfaction)</li>
                <li><strong style={{ color: '#dc3545' }}>If MU<sub>X</sub> {'<'} P<sub>X</sub></strong> → Consumer should <span style={{ color: '#dc3545' }}>REDUCE</span> consumption (Cost exceeds Benefit)</li>
              </ul>
            </div>
          </div>

          {/* Assumptions Section */}
          <div className="assumptions-box" style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            padding: '1rem 1.5rem',
            marginBottom: '2rem',
            borderLeft: '4px solid #0056b3'
          }}>
            <h6 style={{ color: '#4da6ff', marginBottom: '0.5rem' }}>📋 Assumptions:</h6>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: '#aaa' }}>
              <span>✓ Cardinal measurement of utility</span>
              <span>✓ Constant Marginal Utility of Money</span>
              <span>✓ Single commodity consideration</span>
              <span>✓ Given income & price</span>
              <span>✓ Rational consumer behavior</span>
            </div>
          </div>

          {/* SCHEDULE TABLE - Single Commodity */}
          <div className="schedule-section" style={{ marginBottom: '2rem' }}>
            <h5 style={{ color: '#fff', marginBottom: '1rem', textAlign: 'center' }}>
              📅 Marginal Utility Schedule for Commodity X
            </h5>
            <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '1rem' }}>
              <strong>Given:</strong> Price of X (P<sub>X</sub>) = ₹10 per unit | Consumer's Income = ₹60
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(90deg, #0056b3, #004494)' }}>
                    <th style={{ padding: '1rem', color: '#fff', textAlign: 'center', borderBottom: '2px solid #4da6ff' }}>
                      Units of X
                    </th>
                    <th style={{ padding: '1rem', color: '#fff', textAlign: 'center', borderBottom: '2px solid #4da6ff' }}>
                      Total Utility (TU)<br /><small style={{ opacity: 0.8 }}>(Utils)</small>
                    </th>
                    <th style={{ padding: '1rem', color: '#fff', textAlign: 'center', borderBottom: '2px solid #4da6ff' }}>
                      Marginal Utility (MU<sub>X</sub>)<br /><small style={{ opacity: 0.8 }}>(Utils)</small>
                    </th>
                    <th style={{ padding: '1rem', color: '#fff', textAlign: 'center', borderBottom: '2px solid #4da6ff' }}>
                      Price (P<sub>X</sub>)<br /><small style={{ opacity: 0.8 }}>(₹)</small>
                    </th>
                    <th style={{ padding: '1rem', color: '#fff', textAlign: 'center', borderBottom: '2px solid #4da6ff' }}>
                      Comparison<br /><small style={{ opacity: 0.8 }}>(MU vs Price)</small>
                    </th>
                    <th style={{ padding: '1rem', color: '#fff', textAlign: 'center', borderBottom: '2px solid #4da6ff' }}>
                      Decision
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: 'rgba(40,167,69,0.1)' }}>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>1</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>20</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>20</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>20 {'>'} 10 (+10)</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✓ BUY</td>
                  </tr>
                  <tr style={{ background: 'rgba(40,167,69,0.1)' }}>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>2</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>36</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>16</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>16 {'>'} 10 (+6)</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✓ BUY</td>
                  </tr>
                  <tr style={{ background: 'rgba(40,167,69,0.1)' }}>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>3</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>48</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>12</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>12 {'>'} 10 (+2)</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#28a745', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✓ BUY</td>
                  </tr>
                  <tr style={{ background: 'rgba(255,193,7,0.2)', border: '2px solid #ffc107' }}>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>4</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>56</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#ffc107', fontWeight: 'bold', fontSize: '1.1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10 ⭐</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#ffc107', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10 = 10 (0)</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#ffc107', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>⚡ EQUILIBRIUM</td>
                  </tr>
                  <tr style={{ background: 'rgba(220,53,69,0.1)' }}>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>5</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>62</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#dc3545', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>6</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#dc3545', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>6 {'<'} 10 (-4)</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#dc3545', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>✗ STOP</td>
                  </tr>
                  <tr style={{ background: 'rgba(220,53,69,0.1)' }}>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff' }}>6</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff' }}>64</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#dc3545', fontWeight: 'bold' }}>2</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#fff' }}>10</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#dc3545' }}>2 {'<'} 10 (-8)</td>
                    <td style={{ padding: '0.8rem', textAlign: 'center', color: '#dc3545', fontWeight: 'bold' }}>✗ LOSS</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{
              background: 'linear-gradient(90deg, rgba(255,193,7,0.2), rgba(255,193,7,0.1))',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              borderLeft: '4px solid #ffc107'
            }}>
              <p style={{ color: '#fff', margin: 0 }}>
                <strong>📌 Conclusion:</strong> The consumer reaches equilibrium at <strong style={{ color: '#ffc107' }}>4 units</strong> where
                MU<sub>X</sub> (10 utils) = P<sub>X</sub> (₹10). At this point, Total Utility = <strong>56 utils</strong> (Maximum satisfaction).
                Total Expenditure = 4 × ₹10 = ₹40.
              </p>
            </div>
          </div>

          {/* ============================================ */}
          {/* SINGLE COMMODITY EQUILIBRIUM - SCHEDULE + GRAPH */}
          {/* ============================================ */}

          <h4 className="text-center mb-4">
            <FaChartLine /> Consumer Equilibrium: Single Commodity Case
          </h4>

          {/* Schedule Table */}
          <div style={{ marginBottom: '2rem', overflowX: 'auto' }}>
            <h5 style={{ color: '#fff', textAlign: 'center', marginBottom: '1rem' }}>
              📋 Utility Schedule (Price of X = ₹10)
            </h5>
            <table style={{
              width: '100%',
              maxWidth: '700px',
              margin: '0 auto',
              borderCollapse: 'collapse',
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '8px'
            }}>
              <thead>
                <tr style={{ background: '#0056b3' }}>
                  <th style={{ padding: '12px', color: '#fff', border: '1px solid #444' }}>Units of X</th>
                  <th style={{ padding: '12px', color: '#fff', border: '1px solid #444' }}>MUₓ (Utils)</th>
                  <th style={{ padding: '12px', color: '#fff', border: '1px solid #444' }}>Pₓ (₹)</th>
                  <th style={{ padding: '12px', color: '#fff', border: '1px solid #444' }}>MUₓ vs Pₓ</th>
                  <th style={{ padding: '12px', color: '#fff', border: '1px solid #444' }}>Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: 'rgba(40,167,69,0.15)' }}>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>1</td>
                  <td style={{ padding: '10px', color: '#4da6ff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>20</td>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>10</td>
                  <td style={{ padding: '10px', color: '#28a745', textAlign: 'center', border: '1px solid #444' }}>20 {'>'} 10</td>
                  <td style={{ padding: '10px', color: '#28a745', textAlign: 'center', border: '1px solid #444' }}>✓ Buy</td>
                </tr>
                <tr style={{ background: 'rgba(40,167,69,0.15)' }}>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>2</td>
                  <td style={{ padding: '10px', color: '#4da6ff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>16</td>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>10</td>
                  <td style={{ padding: '10px', color: '#28a745', textAlign: 'center', border: '1px solid #444' }}>16 {'>'} 10</td>
                  <td style={{ padding: '10px', color: '#28a745', textAlign: 'center', border: '1px solid #444' }}>✓ Buy</td>
                </tr>
                <tr style={{ background: 'rgba(40,167,69,0.15)' }}>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>3</td>
                  <td style={{ padding: '10px', color: '#4da6ff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>12</td>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>10</td>
                  <td style={{ padding: '10px', color: '#28a745', textAlign: 'center', border: '1px solid #444' }}>12 {'>'} 10</td>
                  <td style={{ padding: '10px', color: '#28a745', textAlign: 'center', border: '1px solid #444' }}>✓ Buy</td>
                </tr>
                <tr style={{ background: 'rgba(255,193,7,0.25)', border: '3px solid #ffc107' }}>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>4</td>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold', fontSize: '1.1rem' }}>10 ⭐</td>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>10</td>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>10 = 10</td>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>⚡ EQUILIBRIUM</td>
                </tr>
                <tr style={{ background: 'rgba(220,53,69,0.15)' }}>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>5</td>
                  <td style={{ padding: '10px', color: '#dc3545', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>6</td>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>10</td>
                  <td style={{ padding: '10px', color: '#dc3545', textAlign: 'center', border: '1px solid #444' }}>6 {'<'} 10</td>
                  <td style={{ padding: '10px', color: '#dc3545', textAlign: 'center', border: '1px solid #444' }}>✗ Stop</td>
                </tr>
                <tr style={{ background: 'rgba(220,53,69,0.15)' }}>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>6</td>
                  <td style={{ padding: '10px', color: '#dc3545', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>2</td>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>10</td>
                  <td style={{ padding: '10px', color: '#dc3545', textAlign: 'center', border: '1px solid #444' }}>2 {'<'} 10</td>
                  <td style={{ padding: '10px', color: '#dc3545', textAlign: 'center', border: '1px solid #444' }}>✗ Loss</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Single Commodity Graph */}
          <div className="graph-container" style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '1.5rem',
            overflowX: 'auto'
          }}>
            <div style={{ minWidth: '620px', maxWidth: '800px', margin: '0 auto' }}>
              <svg viewBox="0 0 620 450" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>

                {/* Definitions */}
                <defs>
                  <marker id="arrow1" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                  </marker>
                </defs>

                {/* Title */}
                <text x="310" y="35" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
                  Consumer Equilibrium - Single Commodity
                </text>
                <text x="310" y="55" textAnchor="middle" fill="#aaa" fontSize="12" fontFamily="Arial, sans-serif">
                  Equilibrium Condition: MUₓ = Pₓ
                </text>

                {/* Y-Axis */}
                <line x1="90" y1="370" x2="90" y2="70" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow1)" />

                {/* Y-Axis Label */}
                <text x="35" y="220" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif" transform="rotate(-90, 35, 220)">
                  MU / Price (Utils / ₹)
                </text>

                {/* Y-Axis Tick Marks and Values */}
                <line x1="85" y1="98" x2="95" y2="98" stroke="#fff" strokeWidth="1" />
                <text x="75" y="102" textAnchor="end" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">20</text>

                <line x1="85" y1="152" x2="95" y2="152" stroke="#fff" strokeWidth="1" />
                <text x="75" y="156" textAnchor="end" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">16</text>

                <line x1="85" y1="207" x2="95" y2="207" stroke="#fff" strokeWidth="1" />
                <text x="75" y="211" textAnchor="end" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">12</text>

                <line x1="85" y1="234" x2="95" y2="234" stroke="#ffc107" strokeWidth="2" />
                <text x="75" y="238" textAnchor="end" fill="#ffc107" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">10</text>

                <line x1="85" y1="288" x2="95" y2="288" stroke="#fff" strokeWidth="1" />
                <text x="75" y="292" textAnchor="end" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">6</text>

                <line x1="85" y1="343" x2="95" y2="343" stroke="#fff" strokeWidth="1" />
                <text x="75" y="347" textAnchor="end" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">2</text>

                <text x="75" y="374" textAnchor="end" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">0</text>

                {/* X-Axis */}
                <line x1="90" y1="370" x2="560" y2="370" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow1)" />

                {/* X-Axis Label */}
                <text x="325" y="420" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">
                  Quantity of X (Units)
                </text>

                {/* X-Axis Tick Marks and Values */}
                <line x1="160" y1="370" x2="160" y2="378" stroke="#fff" strokeWidth="1" />
                <text x="160" y="395" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">1</text>

                <line x1="230" y1="370" x2="230" y2="378" stroke="#fff" strokeWidth="1" />
                <text x="230" y="395" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">2</text>

                <line x1="300" y1="370" x2="300" y2="378" stroke="#fff" strokeWidth="1" />
                <text x="300" y="395" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">3</text>

                <line x1="370" y1="370" x2="370" y2="380" stroke="#ffc107" strokeWidth="2" />
                <text x="370" y="398" textAnchor="middle" fill="#ffc107" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">4</text>

                <line x1="440" y1="370" x2="440" y2="378" stroke="#fff" strokeWidth="1" />
                <text x="440" y="395" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">5</text>

                <line x1="510" y1="370" x2="510" y2="378" stroke="#fff" strokeWidth="1" />
                <text x="510" y="395" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="Arial, sans-serif">6</text>

                {/* Price Line (Horizontal at y=234, i.e., P=10) */}
                <line x1="90" y1="234" x2="540" y2="234" stroke="#e74c3c" strokeWidth="2.5" strokeDasharray="10,5" />
                <text x="555" y="228" fill="#e74c3c" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">Pₓ = 10</text>

                {/* MU Curve - Smooth curve through all points */}
                <path
                  d="M 160,98 
           C 180,115 210,140 230,152 
           C 250,165 280,195 300,207 
           C 320,218 350,228 370,234 
           C 390,250 420,275 440,288 
           C 460,305 490,335 510,343"
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points */}
                {/* Point 1: (160, 98) - MU=20 */}
                <circle cx="160" cy="98" r="7" fill="#28a745" stroke="#fff" strokeWidth="2" />

                {/* Point 2: (230, 152) - MU=16 */}
                <circle cx="230" cy="152" r="7" fill="#28a745" stroke="#fff" strokeWidth="2" />

                {/* Point 3: (300, 207) - MU=12 */}
                <circle cx="300" cy="207" r="7" fill="#28a745" stroke="#fff" strokeWidth="2" />

                {/* Point 4: (370, 234) - MU=10 - EQUILIBRIUM */}
                <circle cx="370" cy="234" r="10" fill="#ffc107" stroke="#fff" strokeWidth="3" />

                {/* Point 5: (440, 288) - MU=6 */}
                <circle cx="440" cy="288" r="7" fill="#dc3545" stroke="#fff" strokeWidth="2" />

                {/* Point 6: (510, 343) - MU=2 */}
                <circle cx="510" cy="343" r="7" fill="#dc3545" stroke="#fff" strokeWidth="2" />

                {/* Dashed vertical line from equilibrium point to X-axis */}
                <line x1="370" y1="234" x2="370" y2="370" stroke="#ffc107" strokeWidth="2" strokeDasharray="6,4" />

                {/* Point Labels - positioned to avoid overlaps */}
                <text x="175" y="90" fill="#28a745" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">20</text>
                <text x="245" y="145" fill="#28a745" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">16</text>
                <text x="315" y="200" fill="#28a745" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">12</text>
                <text x="455" y="280" fill="#dc3545" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">6</text>
                <text x="525" y="338" fill="#dc3545" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">2</text>

                {/* Equilibrium Label Box */}
                <rect x="385" y="205" width="110" height="40" rx="5" fill="rgba(255,193,7,0.2)" stroke="#ffc107" strokeWidth="1.5" />
                <text x="440" y="222" textAnchor="middle" fill="#ffc107" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">EQUILIBRIUM</text>
                <text x="440" y="238" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="Arial, sans-serif">MUₓ = Pₓ = 10</text>

                {/* Curve Label */}
                <text x="145" y="78" fill="#3498db" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">MUₓ Curve</text>

                {/* Legend Box */}
                <rect x="420" y="85" width="150" height="60" rx="6" fill="rgba(0,0,0,0.5)" stroke="#555" strokeWidth="1" />
                <text x="495" y="103" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">LEGEND</text>
                <line x1="435" y1="120" x2="465" y2="120" stroke="#3498db" strokeWidth="3" />
                <text x="475" y="124" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">MU Curve</text>
                <line x1="435" y1="137" x2="465" y2="137" stroke="#e74c3c" strokeWidth="2" strokeDasharray="5,3" />
                <text x="475" y="141" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">Price Line</text>

              </svg>
            </div>
          </div>

          {/* Explanation */}
          <div style={{
            background: 'rgba(0,86,179,0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginTop: '1.5rem',
            borderLeft: '4px solid #0056b3'
          }}>
            <h6 style={{ color: '#4da6ff', marginBottom: '1rem' }}>📌 Interpretation:</h6>
            <ul style={{ color: '#ccc', lineHeight: '1.8', margin: 0, paddingLeft: '1.2rem' }}>
              <li><strong style={{ color: '#28a745' }}>Units 1-3:</strong> MU {'>'} Price → Consumer gains surplus, continues buying</li>
              <li><strong style={{ color: '#ffc107' }}>Unit 4:</strong> MU = Price = 10 → <strong>Equilibrium</strong> (Maximum satisfaction)</li>
              <li><strong style={{ color: '#dc3545' }}>Units 5-6:</strong> MU {'<'} Price → Consumer would incur loss, stops buying</li>
            </ul>
          </div>

          <hr style={{ border: '1px solid rgba(255,255,255,0.1)', margin: '3rem 0' }} />

          {/* ============================================ */}
          {/* TWO COMMODITY EQUILIBRIUM - SCHEDULE + GRAPH */}
          {/* ============================================ */}

          <h4 className="text-center mb-4">
            <FaChartLine /> Consumer Equilibrium: Two Commodity Case
          </h4>

          {/* Schedule Table */}
          <div style={{ marginBottom: '2rem', overflowX: 'auto' }}>
            <h5 style={{ color: '#fff', textAlign: 'center', marginBottom: '1rem' }}>
              📋 Utility Schedule (Pₓ = ₹1, Pᵧ = ₹1, Income = ₹5)
            </h5>
            <table style={{
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              borderCollapse: 'collapse',
              background: 'rgba(0,0,0,0.4)',
              borderRadius: '8px'
            }}>
              <thead>
                <tr style={{ background: '#6f42c1' }}>
                  <th style={{ padding: '12px', color: '#fff', border: '1px solid #444' }} rowSpan="2">Units</th>
                  <th style={{ padding: '10px', color: '#00ffff', border: '1px solid #444', borderBottom: 'none' }} colSpan="2">Commodity X (Pₓ = ₹1)</th>
                  <th style={{ padding: '10px', color: '#ff69b4', border: '1px solid #444', borderBottom: 'none' }} colSpan="2">Commodity Y (Pᵧ = ₹1)</th>
                </tr>
                <tr style={{ background: '#5a32a3' }}>
                  <th style={{ padding: '8px', color: '#00ffff', border: '1px solid #444' }}>MUₓ</th>
                  <th style={{ padding: '8px', color: '#00ffff', border: '1px solid #444' }}>MUₓ/Pₓ</th>
                  <th style={{ padding: '8px', color: '#ff69b4', border: '1px solid #444' }}>MUᵧ</th>
                  <th style={{ padding: '8px', color: '#ff69b4', border: '1px solid #444' }}>MUᵧ/Pᵧ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>1</td>
                  <td style={{ padding: '10px', color: '#00ffff', textAlign: 'center', border: '1px solid #444' }}>10</td>
                  <td style={{ padding: '10px', color: '#00ffff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>10</td>
                  <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: '1px solid #444' }}>8</td>
                  <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>8</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>2</td>
                  <td style={{ padding: '10px', color: '#00ffff', textAlign: 'center', border: '1px solid #444' }}>8</td>
                  <td style={{ padding: '10px', color: '#00ffff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>8</td>
                  <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: '1px solid #444' }}>6</td>
                  <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>6</td>
                </tr>
                <tr style={{ background: 'rgba(255,193,7,0.2)', border: '3px solid #ffc107' }}>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>3</td>
                  <td style={{ padding: '10px', color: '#00ffff', textAlign: 'center', border: '1px solid #444' }}>6</td>
                  <td style={{ padding: '10px', color: '#ffc107', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold', fontSize: '1.1rem' }}>6 ⭐</td>
                  <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: '1px solid #444' }}>4</td>
                  <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>4</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>4</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>4</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>4</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>2</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>2</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>5</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>2</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>2</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>1</td>
                  <td style={{ padding: '10px', color: '#aaa', textAlign: 'center', border: '1px solid #444' }}>1</td>
                </tr>
              </tbody>
            </table>

            {/* Equilibrium Result */}
            <div style={{
              background: 'linear-gradient(90deg, rgba(255,193,7,0.15), rgba(255,193,7,0.05))',
              padding: '1rem',
              borderRadius: '8px',
              marginTop: '1rem',
              maxWidth: '800px',
              margin: '1rem auto 0',
              border: '1px solid #ffc107'
            }}>
              <p style={{ color: '#fff', margin: 0, textAlign: 'center' }}>
                <strong style={{ color: '#ffc107' }}>Equilibrium:</strong> Buy <span style={{ color: '#00ffff' }}>3 units of X</span> +
                <span style={{ color: '#ff69b4' }}> 2 units of Y</span> where MUₓ/Pₓ = MUᵧ/Pᵧ = <strong style={{ color: '#ffc107' }}>6</strong>
                <br />
                <span style={{ color: '#aaa', fontSize: '0.9rem' }}>Total Expenditure: 3×₹1 + 2×₹1 = ₹5 = Income ✓</span>
              </p>
            </div>
          </div>

          {/* Two Commodity Graph */}
          <div className="graph-container" style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '1.5rem',
            overflowX: 'auto'
          }}>
            <div style={{ minWidth: '750px', maxWidth: '900px', margin: '0 auto' }}>
              <svg viewBox="0 0 750 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>

                {/* Definitions */}
                <defs>
                  <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#fff" />
                  </marker>
                </defs>

                {/* Title */}
                <text x="375" y="30" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">
                  Consumer Equilibrium - Two Commodity Case
                </text>
                <text x="375" y="50" textAnchor="middle" fill="#aaa" fontSize="12" fontFamily="Arial, sans-serif">
                  Law of Equi-Marginal Utility: MUₓ/Pₓ = MUᵧ/Pᵧ = MUₘ
                </text>

                {/* ===== LEFT GRAPH - COMMODITY X ===== */}

                {/* Left Y-Axis */}
                <line x1="70" y1="340" x2="70" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="40" y="65" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Arial, sans-serif">MU/P</text>

                {/* Left Y-Axis Ticks */}
                <line x1="65" y1="115" x2="75" y2="115" stroke="#fff" strokeWidth="1" />
                <text x="55" y="119" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">10</text>

                <line x1="65" y1="165" x2="75" y2="165" stroke="#fff" strokeWidth="1" />
                <text x="55" y="169" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">8</text>

                <line x1="65" y1="215" x2="75" y2="215" stroke="#ffc107" strokeWidth="2" />
                <text x="55" y="219" textAnchor="end" fill="#ffc107" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">6</text>

                <line x1="65" y1="265" x2="75" y2="265" stroke="#fff" strokeWidth="1" />
                <text x="55" y="269" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">4</text>

                <line x1="65" y1="315" x2="75" y2="315" stroke="#fff" strokeWidth="1" />
                <text x="55" y="319" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">2</text>

                <text x="55" y="344" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">0</text>

                {/* Left X-Axis */}
                <line x1="70" y1="340" x2="330" y2="340" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="200" y="380" textAnchor="middle" fill="#00ffff" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">
                  Quantity of X →
                </text>

                {/* Left X-Axis Ticks */}
                <line x1="125" y1="340" x2="125" y2="348" stroke="#fff" strokeWidth="1" />
                <text x="125" y="362" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">1</text>

                <line x1="180" y1="340" x2="180" y2="348" stroke="#fff" strokeWidth="1" />
                <text x="180" y="362" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">2</text>

                <line x1="235" y1="340" x2="235" y2="350" stroke="#ffc107" strokeWidth="2" />
                <text x="235" y="365" textAnchor="middle" fill="#ffc107" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">3</text>

                <line x1="290" y1="340" x2="290" y2="348" stroke="#fff" strokeWidth="1" />
                <text x="290" y="362" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">4</text>

                {/* Curve X - MUx/Px */}
                {/* Points: (1,10)→(125,115), (2,8)→(180,165), (3,6)→(235,215), (4,4)→(290,265), (5,2)→(345,315) */}
                <path
                  d="M 125,115 C 145,135 160,155 180,165 C 200,180 215,200 235,215 C 255,235 270,255 290,265"
                  fill="none"
                  stroke="#00ffff"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Points for X */}
                <circle cx="125" cy="115" r="6" fill="#00ffff" stroke="#fff" strokeWidth="2" />
                <circle cx="180" cy="165" r="6" fill="#00ffff" stroke="#fff" strokeWidth="2" />
                <circle cx="235" cy="215" r="9" fill="#ffc107" stroke="#fff" strokeWidth="2" />
                <circle cx="290" cy="265" r="5" fill="#00ffff" stroke="#fff" strokeWidth="1" opacity="0.5" />

                {/* Point Labels for X */}
                <text x="138" y="108" fill="#00ffff" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">10</text>
                <text x="193" y="158" fill="#00ffff" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">8</text>

                {/* Dashed line from X equilibrium to X-axis */}
                <line x1="235" y1="215" x2="235" y2="340" stroke="#ffc107" strokeWidth="2" strokeDasharray="5,4" />

                {/* Curve Label X */}
                <text x="100" y="100" fill="#00ffff" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">MUₓ/Pₓ</text>

                {/* ===== EQUILIBRIUM LINE (Horizontal) ===== */}
                <line x1="70" y1="215" x2="680" y2="215" stroke="#ffc107" strokeWidth="2.5" strokeDasharray="8,4" />

                {/* ===== RIGHT GRAPH - COMMODITY Y ===== */}

                {/* Right Y-Axis */}
                <line x1="430" y1="340" x2="430" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="410" y="65" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Arial, sans-serif">MU/P</text>

                {/* Right Y-Axis Ticks */}
                <line x1="425" y1="115" x2="435" y2="115" stroke="#fff" strokeWidth="1" />
                <text x="418" y="119" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">10</text>

                <line x1="425" y1="165" x2="435" y2="165" stroke="#fff" strokeWidth="1" />
                <text x="418" y="169" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">8</text>

                <line x1="425" y1="215" x2="435" y2="215" stroke="#ffc107" strokeWidth="2" />
                <text x="418" y="219" textAnchor="end" fill="#ffc107" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">6</text>

                <line x1="425" y1="265" x2="435" y2="265" stroke="#fff" strokeWidth="1" />
                <text x="418" y="269" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">4</text>

                <line x1="425" y1="315" x2="435" y2="315" stroke="#fff" strokeWidth="1" />
                <text x="418" y="319" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">2</text>

                <text x="418" y="344" textAnchor="end" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">0</text>

                {/* Right X-Axis */}
                <line x1="430" y1="340" x2="690" y2="340" stroke="#fff" strokeWidth="2" markerEnd="url(#arrow2)" />
                <text x="560" y="380" textAnchor="middle" fill="#ff69b4" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">
                  Quantity of Y →
                </text>

                {/* Right X-Axis Ticks */}
                <line x1="485" y1="340" x2="485" y2="348" stroke="#fff" strokeWidth="1" />
                <text x="485" y="362" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">1</text>

                <line x1="540" y1="340" x2="540" y2="350" stroke="#ffc107" strokeWidth="2" />
                <text x="540" y="365" textAnchor="middle" fill="#ffc107" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">2</text>

                <line x1="595" y1="340" x2="595" y2="348" stroke="#fff" strokeWidth="1" />
                <text x="595" y="362" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">3</text>

                <line x1="650" y1="340" x2="650" y2="348" stroke="#fff" strokeWidth="1" />
                <text x="650" y="362" textAnchor="middle" fill="#aaa" fontSize="10" fontFamily="Arial, sans-serif">4</text>

                {/* Curve Y - MUy/Py */}
                {/* Points: (1,8)→(485,165), (2,6)→(540,215), (3,4)→(595,265), (4,2)→(650,315) */}
                <path
                  d="M 485,165 C 505,185 520,205 540,215 C 560,235 575,255 595,265 C 615,285 630,305 650,315"
                  fill="none"
                  stroke="#ff69b4"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Points for Y */}
                <circle cx="485" cy="165" r="6" fill="#ff69b4" stroke="#fff" strokeWidth="2" />
                <circle cx="540" cy="215" r="9" fill="#ffc107" stroke="#fff" strokeWidth="2" />
                <circle cx="595" cy="265" r="5" fill="#ff69b4" stroke="#fff" strokeWidth="1" opacity="0.5" />
                <circle cx="650" cy="315" r="5" fill="#ff69b4" stroke="#fff" strokeWidth="1" opacity="0.5" />

                {/* Point Labels for Y */}
                <text x="498" y="158" fill="#ff69b4" fontSize="10" fontWeight="bold" fontFamily="Arial, sans-serif">8</text>

                {/* Dashed line from Y equilibrium to X-axis */}
                <line x1="540" y1="215" x2="540" y2="340" stroke="#ffc107" strokeWidth="2" strokeDasharray="5,4" />

                {/* Curve Label Y */}
                <text x="460" y="150" fill="#ff69b4" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">MUᵧ/Pᵧ</text>

                {/* ===== EQUILIBRIUM ANNOTATIONS ===== */}

                {/* Equilibrium Label - Centered between graphs */}
                <rect x="320" y="180" width="120" height="50" rx="6" fill="rgba(255,193,7,0.15)" stroke="#ffc107" strokeWidth="1.5" />
                <text x="380" y="200" textAnchor="middle" fill="#ffc107" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">EQUILIBRIUM</text>
                <text x="380" y="218" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="Arial, sans-serif">MUₓ/Pₓ = MUᵧ/Pᵧ</text>
                <text x="380" y="232" textAnchor="middle" fill="#ffc107" fontSize="11" fontFamily="Arial, sans-serif">= 6</text>

                {/* Equilibrium Line Label */}
                <text x="375" y="248" textAnchor="middle" fill="#ffc107" fontSize="10" fontFamily="Arial, sans-serif">
                  ← Line of Equi-Marginal Utility (MUₘ = 6) →
                </text>

                {/* Legend */}
                <rect x="285" y="395" width="180" height="22" rx="4" fill="rgba(0,0,0,0.5)" stroke="#555" strokeWidth="1" />
                <line x1="295" y1="406" x2="325" y2="406" stroke="#00ffff" strokeWidth="3" />
                <text x="332" y="410" fill="#aaa" fontSize="9" fontFamily="Arial, sans-serif">MUₓ/Pₓ</text>
                <line x1="385" y1="406" x2="415" y2="406" stroke="#ff69b4" strokeWidth="3" />
                <text x="422" y="410" fill="#aaa" fontSize="9" fontFamily="Arial, sans-serif">MUᵧ/Pᵧ</text>

              </svg>
            </div>
          </div>

          {/* Explanation */}
          <div style={{
            background: 'rgba(111,66,193,0.1)',
            borderRadius: '12px',
            padding: '1.5rem',
            marginTop: '1.5rem',
            borderLeft: '4px solid #6f42c1'
          }}>
            <h6 style={{ color: '#b794f6', marginBottom: '1rem' }}>📌 Interpretation:</h6>
            <ul style={{ color: '#ccc', lineHeight: '1.8', margin: 0, paddingLeft: '1.2rem' }}>
              <li><strong style={{ color: '#00ffff' }}>Left Graph:</strong> Shows MUₓ/Pₓ curve for commodity X, equilibrium at 3 units (MU/P = 6)</li>
              <li><strong style={{ color: '#ff69b4' }}>Right Graph:</strong> Shows MUᵧ/Pᵧ curve for commodity Y, equilibrium at 2 units (MU/P = 6)</li>
              <li><strong style={{ color: '#ffc107' }}>Horizontal Line:</strong> Line of Equi-Marginal Utility where both MU/P ratios are equal</li>
              <li><strong style={{ color: '#fff' }}>Result:</strong> Consumer buys 3X + 2Y, spending entire income (₹5) with maximum total utility</li>
            </ul>
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