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
import SingleCommodityChart from './SingleCommodityChart';
import TwoCommodityChart from './TwoCommodityChart';
import '../../css/lessons.css';
import '../../css/quiz.css';

// Generate Data for Single Commodity (10 Units)
const getSingleCommodityData = () => {
  // Price = 10
  // MU starts at 20, drops by 2
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      units: i,
      mu: Math.max(0, 22 - (2 * i)), // 1:20, 2:18... 6:10(Eq)... 10:2
      price: 10
    });
  }
  return data;
};

// Generate Data for Two Commodity (10 Units Total Budget allocation context)
// Let's assume we are plotting the "Allocation of Income" graph.
// Total Units to allocate = 10.
// X axis: 0 to 10 units of X.
// Y axis: 0 to 10 units of Y (implied opposite).
// Generate Data for Two Commodity (10 Units Total Budget allocation context)
const getTwoCommodityData = () => {
  const data = [];
  const maxUnits = 10;

  for (let i = 0; i <= maxUnits; i++) {
    const unitsX = i;
    const unitsY = maxUnits - i;

    // Custom logic for Asymmetric Equilibrium (X=7, Y=3)
    // MUx = 28 - 2x. At x=7, MUx=14.
    // MUy = 20 - 2y. At y=3, MUy=14.

    // Ensure values don't go negative for display
    const mux = Math.max(0, 28 - (2 * unitsX));
    const muy = Math.max(0, 20 - (2 * unitsY));

    data.push({
      unitsX,
      unitsY,
      mux,
      muy
    });
  }
  return data;
};

const singleData = getSingleCommodityData();
const twoComData = getTwoCommodityData();



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
                {singleData.map((row) => {
                  const comparison = row.mu > row.price
                    ? `${row.mu} > ${row.price} (Surplus)`
                    : row.mu < row.price
                      ? `${row.mu} < ${row.price} (Deficit)`
                      : `${row.mu} = ${row.price}`;

                  const rowStyle = row.mu === row.price
                    ? { background: 'rgba(255,193,7,0.25)', border: '2px solid #ffc107' }
                    : row.mu > row.price
                      ? { background: 'rgba(40,167,69,0.15)' }
                      : { background: 'rgba(220,53,69,0.15)' };

                  return (
                    <tr key={row.units} style={rowStyle}>
                      <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>{row.units}</td>
                      <td style={{ padding: '10px', color: row.mu === row.price ? '#ffc107' : '#4da6ff', textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>
                        {row.mu}
                        {row.mu === row.price && " ⭐"}
                      </td>
                      <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: '1px solid #444' }}>{row.price}</td>
                      <td style={{ padding: '10px', color: row.mu >= row.price ? '#28a745' : '#dc3545', textAlign: 'center', border: '1px solid #444' }}>
                        {comparison}
                      </td>
                      <td style={{ padding: '10px', color: row.mu > row.price ? '#28a745' : (row.mu < row.price ? '#dc3545' : '#ffc107'), textAlign: 'center', border: '1px solid #444', fontWeight: 'bold' }}>
                        {row.mu > row.price ? "✓ Buy" : (row.mu < row.price ? "✗ Stop" : "⚡ EQUILIBRIUM")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Single Commodity Graph - Interactive D3 */}
          <div className="graph-container" style={{
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '16px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h5 className="text-center mb-4" style={{ color: '#4da6ff' }}>Interactive: Single Commodity Equilibrium</h5>
            {/* Passed 10 as price to match the Data Generation Logic */}
            <SingleCommodityChart data={singleData} price={10} />
            <p className="text-center text-muted mt-2" style={{ fontSize: '0.9rem' }}>*Hover over the points to see details. Green = Surplus, Red = Loss.</p>
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

          {/* Single Interactive Graph - Combined MUx and MUy */}
          <div className="graph-container">
            <h4 className="text-center mb-4" style={{ color: '#00ffff' }}>
              <FaChartLine /> Consumer Equilibrium - Two Commodity Case (Interactive)
            </h4>

            {/* Replaced with D3 TwoCommodityChart */}
            <TwoCommodityChart data={twoComData} maxUnits={10} />

            {/* Equilibrium Info Box */}
            <div className="mt-4 p-3" style={{
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '8px'
            }}>
              <h5 className="text-center mb-2" style={{ color: '#ffd700' }}>⚖️ Equilibrium Point</h5>
              <div className="text-center">
                <p className="text-white mb-1"><strong>Optimal Distribution:</strong></p>
                <p className="text-cyan d-inline">Spend equal MU per Rupee</p>
                <p className="text-muted mt-2">The curves intersect where MUx/Px = MUy/Py!</p>
              </div>
            </div>

            {/* Custom Legend */}
            <div className="mt-4" style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00ffff' }}>
                <span style={{ width: '20px', height: '3px', background: '#00ffff' }}></span>
                <span>MUₓ Curve (Left to Right)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff69b4' }}>
                <span style={{ width: '20px', height: '3px', background: '#ff69b4' }}></span>
                <span>MUy Curve (Right to Left)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#ffd700', border: '2px dashed #ffd700', boxSizing: 'border-box' }}></span>
                <span>Equilibrium Point</span>
              </div>
            </div>
          </div>


          {/* Detailed Two Commodity Schedule - Added dynamically */}
          <div style={{ marginBottom: '2rem', overflowX: 'auto' }}>
            <h5 style={{ color: '#fff', textAlign: 'center', marginBottom: '1rem' }}>
              📋 Allocation Schedule (Total Budget Units = 10)
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
                <tr style={{ background: '#0056b3' }}>
                  <th colSpan="2" style={{ padding: '10px', color: '#fff', border: '1px solid #444', textAlign: 'center' }}>Scale of Preferences</th>
                  <th colSpan="3" style={{ padding: '10px', color: '#fff', border: '1px solid #444', textAlign: 'center' }}>Marginal Utility Analysis</th>
                </tr>
                <tr style={{ background: '#004494' }}>
                  <th style={{ padding: '10px', color: '#00ffff', border: '1px solid #444' }}>Units of X</th>
                  <th style={{ padding: '10px', color: '#ff69b4', border: '1px solid #444' }}>Units of Y</th>
                  <th style={{ padding: '10px', color: '#fff', border: '1px solid #444' }}>MUₓ / Pₓ</th>
                  <th style={{ padding: '10px', color: '#fff', border: '1px solid #444' }}>MUᵧ / Pᵧ</th>
                  <th style={{ padding: '10px', color: '#fff', border: '1px solid #444' }}>Status / Action</th>
                </tr>
              </thead>
              <tbody>
                {twoComData.map((row) => {
                  const diff = row.mux - row.muy;
                  const isEquilibrium = Math.abs(diff) < 0.1; // Float tolerance
                  const bg = isEquilibrium ? 'rgba(255,193,7,0.25)' : 'rgba(0,0,0,0.2)';
                  const border = isEquilibrium ? '2px solid #ffc107' : '1px solid #444';

                  return (
                    <tr key={row.unitsX} style={{ background: bg }}>
                      <td style={{ padding: '10px', color: '#00ffff', textAlign: 'center', border: border, fontWeight: 'bold' }}>
                        {row.unitsX}
                      </td>
                      <td style={{ padding: '10px', color: '#ff69b4', textAlign: 'center', border: border, fontWeight: 'bold' }}>
                        {row.unitsY}
                      </td>
                      <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: border }}>
                        {row.mux.toFixed(1)}
                      </td>
                      <td style={{ padding: '10px', color: '#fff', textAlign: 'center', border: border }}>
                        {row.muy.toFixed(1)}
                      </td>
                      <td style={{ padding: '10px', color: isEquilibrium ? '#ffc107' : '#aaa', textAlign: 'center', border: border, fontWeight: 'bold' }}>
                        {isEquilibrium
                          ? "⚡ EQUILIBRIUM"
                          : (row.mux > row.muy ? "Buy more X (MUₓ > MUᵧ)" : "Buy more Y (MUᵧ > MUₓ)")
                        }
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <p className="table-note text-center">
              Note: As we consume more X (and less Y), MUₓ falls and MUᵧ rises until they equalize.
            </p>
          </div>

          {/* Steps to Achieve Consumer Equilibrium (Two Commodity Case) */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0,86,179,0.1), rgba(0,150,255,0.05))',
            borderRadius: '16px',
            padding: '2rem',
            marginTop: '2rem',
            border: '1px solid rgba(0,86,179,0.3)'
          }}>
            <h5 style={{ color: '#4da6ff', marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.4rem' }}>
              🛠️ Steps to Achieve Equilibrium (Two Commodity Case)
            </h5>

            <div className="steps-container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

              <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#0056b3',
                  color: '#fff',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h6 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Calculate Marginal Utility per Rupee (MU/P)</h6>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                    First, convert the Marginal Utility (MU) of each commodity into terms of money by dividing MU by its Price (P).
                    Calculate <strong style={{ color: '#00ffff' }}>MUₓ/Pₓ</strong> and <strong style={{ color: '#ff69b4' }}>MUᵧ/Pᵧ</strong> for all units.
                  </p>
                </div>
              </div>

              <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#0056b3',
                  color: '#fff',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h6 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Compare the Ratios</h6>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                    Compare MUₓ/Pₓ with MUᵧ/Pᵧ.
                    <br />• If <strong style={{ color: '#00ffff' }}>MUₓ/Pₓ {'>'} MUᵧ/Pᵧ</strong>: Spend more on X.
                    <br />• If <strong style={{ color: '#ff69b4' }}>MUᵧ/Pᵧ {'>'} MUₓ/Pₓ</strong>: Spend more on Y.
                  </p>
                </div>
              </div>

              <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#0056b3',
                  color: '#fff',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h6 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Find the Point of Equality</h6>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                    Identify the combination where the utility derived from the last rupee spent on each good is equal.
                    <br /><strong style={{ color: '#ffc107', fontSize: '1.2rem' }}>MUₓ / Pₓ = MUᵧ / Pᵧ</strong>
                  </p>
                </div>
              </div>

              <div className="step-item" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  background: '#0056b3',
                  color: '#fff',
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  flexShrink: 0
                }}>4</div>
                <div>
                  <h6 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Verify Budget Constraint</h6>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                    Ensure that the total expenditure on that combination equals your total income.
                    <br /><strong>(Price of X × Units of X) + (Price of Y × Units of Y) = Income</strong>
                  </p>
                </div>
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