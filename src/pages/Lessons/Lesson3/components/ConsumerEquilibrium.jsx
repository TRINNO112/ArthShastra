import React from 'react';
import { FaBalanceScale, FaArrowDown } from 'react-icons/fa';
import '../css/Lesson3Clean.css';
import SingleCommodityChart from './SingleCommodityChart';
import TwoCommodityChart from './TwoCommodityChart';

// Data for Single Commodity Case
const singleCommodityData = [
  { units: 1, mu: 50, price: 30 },
  { units: 2, mu: 40, price: 30 },
  { units: 3, mu: 30, price: 30 }, // Equilibrium
  { units: 4, mu: 20, price: 30 },
  { units: 5, mu: 10, price: 30 },
];

// Data for Two Commodity Case
// Total Income = 5. Px = 1, Py = 1.
// Scenario:
// MUx Schedule: 20, 16, 12, 8, 4.
// MUy Schedule: 24, 20, 16, 12, 8.

const twoCommodityData = [
  { unitsX: 0, unitsY: 5, mux: 24, muy: 8 },
  { unitsX: 1, unitsY: 4, mux: 20, muy: 12 },
  { unitsX: 2, unitsY: 3, mux: 16, muy: 16 }, // Equilibrium: Match at 16
  { unitsX: 3, unitsY: 2, mux: 12, muy: 20 },
  { unitsX: 4, unitsY: 1, mux: 8, muy: 24 },
  { unitsX: 5, unitsY: 0, mux: 4, muy: 28 },
];

const ConsumerEquilibrium = () => {
  return (
    <div className="lesson3-container">
      <header className="lesson-header mb-5">
        <h2 className="l3-title">Consumer Equilibrium</h2>
        <p className="l3-subtitle">Balancing satisfaction with price</p>
      </header>

      {/* Definition */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">What is Equilibrium?</h3>
        <div className="l3-definition-box">
          <p className="l3-definition-text">
            "Consumer Equilibrium is a situation where a consumer spends their limited income in such a way that they get <strong>maximum satisfaction</strong> and have no tendency to change."
          </p>
        </div>
      </section>

      {/* One Commodity Case */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Case 1: Single Commodity</h3>
        <p>When buying only one good (X), the consumer compares the <strong>Marginal Utility (benefit)</strong> with the <strong>Price (cost)</strong>.</p>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', margin: '20px 0', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--l3-cyan)' }}>
          <h4 style={{ color: '#fff', marginBottom: '10px' }}>Equilibrium Condition</h4>
          <code style={{ fontSize: '1.5rem', color: 'var(--l3-cyan)' }}>MUx (in ₹) = Price of X</code>
        </div>

        {/* Schedule 1 */}
        <h4 style={{ color: 'var(--l3-cyan)', marginTop: '30px' }}>Utility Schedule</h4>
        <div className="l3-table-container">
          <table className="l3-table" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Units</th>
                <th>MU (₹)</th>
                <th>Price (₹)</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {singleCommodityData.map((row, i) => (
                <tr key={i} style={row.mu === row.price ? { background: 'var(--l3-gold-dim)' } : {}}>
                  <td>{row.units}</td>
                  <td style={{ color: 'var(--l3-cyan)' }}>{row.mu}</td>
                  <td style={{ color: '#ff6b6b' }}>{row.price}</td>
                  <td>
                    {row.mu > row.price && <span style={{ color: '#00ff88' }}>Buy More (MU &gt; P)</span>}
                    {row.mu < row.price && <span style={{ color: '#ff6b6b' }}>Stop (MU &lt; P)</span>}
                    {row.mu === row.price && <strong style={{ color: 'var(--l3-gold)' }}>Equilibrium 🌟</strong>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Graph 1 */}
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '12px', marginBottom: '20px', marginTop: '20px' }}>
          <h4 style={{ textAlign: 'center', color: '#ccc', marginBottom: '10px' }}>Visualization: MU vs Price</h4>
          <SingleCommodityChart data={singleCommodityData} price={30} />
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#aaa', marginTop: '10px' }}>
            Equilibrium is at 3 Units where MU (30) equals Price (30).
          </p>
        </div>
      </section>

      {/* Two Commodity Case */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Case 2: Two Commodities</h3>
        <p>In real life, we buy multiple goods. The consumer must distribute income so that the last rupee spent on each good gives equal satisfaction.</p>

        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', margin: '20px 0', borderRadius: '12px', textAlign: 'center', border: '1px dashed var(--l3-gold)' }}>
          <h4 style={{ color: '#fff', marginBottom: '10px' }}>Law of Equi-Marginal Utility</h4>
          <code style={{ fontSize: '1.2rem', color: 'var(--l3-gold)' }}>
            (MUx / Px) = (MUy / Py) = MUm
          </code>
        </div>

        {/* Schedule 2 */}
        <h4 style={{ color: 'var(--l3-gold)', marginTop: '30px' }}>Equi-Marginal Schedule (Income = 5, Px=1, Py=1)</h4>

        <div className="l3-table-container">
          <table className="l3-table" style={{ textAlign: 'center', marginTop: '10px' }}>
            <thead>
              <tr>
                <th>Money Spent</th>
                <th>Spend on X (MU)</th>
                <th>Spend on Y (MU)</th>
                <th>Status</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st Rupee</td>
                <td className="text-cyan">20 (1st Unit)</td>
                <td className="text-pink">24 (1st Unit)</td>
                <td>20 &lt; 24</td>
                <td>Buy Y</td>
              </tr>
              <tr>
                <td>2nd Rupee</td>
                <td className="text-cyan">20 (1st Unit)</td>
                <td className="text-pink">20 (2nd Unit)</td>
                <td>20 = 20</td>
                <td>Indifferent (Buy X)</td>
              </tr>
              <tr>
                <td>3rd Rupee</td>
                <td className="text-cyan">16 (2nd Unit)</td>
                <td className="text-pink">20 (2nd Unit)</td>
                <td>16 &lt; 20</td>
                <td>Buy Y</td>
              </tr>
              {/* 
                  Let's re-verify the logic.
                  Table shows MUs of Units: 1(20/24), 2(16/20), 3(12/16), 4(8/12), 5(4/8)
                  
                  Step 1: Compare 1st Unit MUx(20) vs 1st Unit MUy(24). -> Buy Y. (0X, 1Y).
                  Step 2: Compare 1st Unit MUx(20) vs 2nd Unit MUy(20). -> Equal. Buy X. (1X, 1Y).
                  Step 3: Compare 2nd Unit MUx(16) vs 2nd Unit MUy(20). -> Buy Y. (1X, 2Y).
                  Step 4: Compare 2nd Unit MUx(16) vs 3rd Unit MUy(16). -> Equal. Buy X. (2X, 2Y).
                  Step 5: Compare 3rd Unit MUx(12) vs 3rd Unit MUy(16). -> Buy Y. (2X, 3Y).
                  
                  Total Bought: 2X, 3Y.
                  Last MUx (2nd Unit) = 16.
                  Last MUy (3rd Unit) = 16.
                  Equilibrium Achieved!
               */}

              <tr>
                <td>4th Rupee</td>
                <td className="text-cyan">16 (2nd Unit)</td>
                <td className="text-pink">16 (3rd Unit)</td>
                <td className="text-gold font-bold">16 = 16</td>
                <td className="text-gold font-bold">Buy X (Equilibrium!)</td>
              </tr>
              <tr>
                <td>5th Rupee</td>
                <td className="text-cyan">12 (3rd Unit)</td>
                <td className="text-pink">16 (3rd Unit)</td>
                <td>12 &lt; 16</td>
                <td>Buy Y</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255,215,0,0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>Final Bundle:</strong> 2 Units of X + 3 Units of Y. (Total cost ₹5).
            <br />
            MU of Last X (16) = MU of Last Y (16).
          </div>
        </div>

        {/* Graph 2 */}
        <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '12px', marginBottom: '20px', marginTop: '20px' }}>
          <h4 style={{ textAlign: 'center', color: '#ccc', marginBottom: '10px' }}>Equi-Marginal Diagram (Box Diagram)</h4>
          <TwoCommodityChart data={twoCommodityData} totalIncome={5} />
          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#aaa', marginTop: '10px' }}>
            Lines intersect at <strong>Spending on X = 2</strong> (implies Spending on Y = 3).
          </p>
        </div>
      </section>

      {/* NEW CONTENT: Derivation of Demand Curve */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Extra: Derivation of Demand Curve</h3>
        <p>Why does the Demand Curve slope downward? It is because of the <strong>Law of Diminishing Marginal Utility!</strong></p>

        <div className="l3-grid-2">
          <div className="l3-grid-item">
            <strong>The Logic</strong>
            <p className="mt-2 text-sm">
              A consumer buys a good only if <strong>MU ≥ Price</strong>.
              <br /><br />
              When he buys more units, MU falls (diminishes).
              <br />
              To convince him to buy more units (where MU is lower), the <strong>Price must also fall</strong>.
            </p>
          </div>
          <div className="l3-grid-item cyan">
            <strong>The Result</strong>
            <p className="mt-2 text-sm">
              <FaArrowDown /> More Consumption requires Lower Price.
              <br /><br />
              This inverse relationship between Price and Quantity Demanded gives us the downward sloping Demand Curve.
            </p>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: Consumer Surplus */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Bonus Concept: Consumer Surplus</h3>
        <p className="mb-3">
          "Consumer Surplus is the difference between what a consumer is <strong>willing to pay</strong> and what they <strong>actually pay</strong>."
        </p>

        <div className="l3-definition-box" style={{ borderLeftColor: 'var(--l3-green)' }}>
          <p className="l3-definition-text" style={{ fontSize: '1.2rem' }}>
            Consumer Surplus = Total Utility (Willingness) - (Price × Quantity)
          </p>
        </div>

        <div className="l3-grid-item green" style={{ marginTop: '20px' }}>
          <strong>Example:</strong>
          <ul className="l3-list">
            <li>You are willing to pay ₹50 for a burger (because you are hungry!).</li>
            <li>Market Price is ₹20.</li>
            <li><strong>Surplus = ₹50 - ₹20 = ₹30</strong> (This is your "Profit" or extra satisfaction).</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ConsumerEquilibrium;