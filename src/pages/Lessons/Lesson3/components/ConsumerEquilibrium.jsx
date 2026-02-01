import React from 'react';
import { FaBalanceScale, FaArrowDown } from 'react-icons/fa';
import '../css/lesson3-brutalist.css';
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
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 3 / SECTION 4</div>
          <h2 className="brutalist-title">CONSUMER<br />EQUILIBRIUM</h2>
          <p className="brutalist-subtitle">Balancing satisfaction with price</p>
        </header>

        {/* Definition */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHAT IS EQUILIBRIUM?</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              "Consumer Equilibrium is a situation where a consumer spends their limited income in such a way that they get <strong>maximum satisfaction</strong> and have no tendency to change."
            </p>
          </div>
        </section>

        {/* One Commodity Case */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">CASE 1: SINGLE COMMODITY</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>When buying only one good (X), the consumer compares the <strong>Marginal Utility (benefit)</strong> with the <strong>Price (cost)</strong>.</p>

          <div className="brutalist-formula">
            MUx (in ₹) = PRICE OF X
          </div>

          {/* Schedule 1 */}
          <h4 style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.3rem', letterSpacing: '1px', marginTop: '30px', marginBottom: '15px' }}>UTILITY SCHEDULE</h4>
          <div className="brutalist-table-container">
            <table className="brutalist-table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>UNITS</th>
                  <th>MU (₹)</th>
                  <th>PRICE (₹)</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {singleCommodityData.map((row, i) => (
                  <tr key={i} style={row.mu === row.price ? { background: 'rgba(255, 235, 59, 0.4)' } : {}}>
                    <td><strong>{row.units}</strong></td>
                    <td style={{ color: 'var(--brutalist-cyan)', fontWeight: 'bold' }}>{row.mu}</td>
                    <td style={{ color: 'var(--brutalist-red)', fontWeight: 'bold' }}>{row.price}</td>
                    <td>
                      {row.mu > row.price && <span style={{ color: 'var(--brutalist-green)' }}>Buy More (MU {'>'} P)</span>}
                      {row.mu < row.price && <span style={{ color: 'var(--brutalist-red)' }}>Stop (MU {'<'} P)</span>}
                      {row.mu === row.price && <strong style={{ color: '#c7a600' }}>EQUILIBRIUM ⭐</strong>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Graph 1 */}
          <div className="brutalist-chart-container" style={{ marginTop: '25px', background: '#1a1a1a', border: '5px solid #000' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>VISUALIZATION: MU VS PRICE</div>
            <SingleCommodityChart data={singleCommodityData} price={30} />
            <p style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '15px', color: '#ccc' }}>
              Equilibrium is at 3 Units where MU (30) equals Price (30).
            </p>
          </div>
        </section>

        {/* Two Commodity Case */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">CASE 2: TWO COMMODITIES</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>In real life, we buy multiple goods. The consumer must distribute income so that the last rupee spent on each good gives equal satisfaction.</p>

          <div className="brutalist-formula">
            (MUx / Px) = (MUy / Py) = MUm
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem' }}>Law of Equi-Marginal Utility</p>

          {/* Schedule 2 */}
          <h4 style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.3rem', letterSpacing: '1px', marginTop: '30px', marginBottom: '15px' }}>EQUI-MARGINAL SCHEDULE (INCOME = 5, Px=1, Py=1)</h4>

          <div className="brutalist-table-container">
            <table className="brutalist-table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>MONEY SPENT</th>
                  <th>SPEND ON X (MU)</th>
                  <th>SPEND ON Y (MU)</th>
                  <th>STATUS</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Rupee</td>
                  <td style={{ color: 'var(--brutalist-cyan)' }}>20 (1st Unit)</td>
                  <td style={{ color: '#e91e63' }}>24 (1st Unit)</td>
                  <td>20 {'<'} 24</td>
                  <td>Buy Y</td>
                </tr>
                <tr>
                  <td>2nd Rupee</td>
                  <td style={{ color: 'var(--brutalist-cyan)' }}>20 (1st Unit)</td>
                  <td style={{ color: '#e91e63' }}>20 (2nd Unit)</td>
                  <td>20 = 20</td>
                  <td>Indifferent (Buy X)</td>
                </tr>
                <tr>
                  <td>3rd Rupee</td>
                  <td style={{ color: 'var(--brutalist-cyan)' }}>16 (2nd Unit)</td>
                  <td style={{ color: '#e91e63' }}>20 (2nd Unit)</td>
                  <td>16 {'<'} 20</td>
                  <td>Buy Y</td>
                </tr>
                <tr style={{ background: 'rgba(255, 235, 59, 0.4)' }}>
                  <td><strong>4th Rupee</strong></td>
                  <td style={{ color: 'var(--brutalist-cyan)' }}><strong>16 (2nd Unit)</strong></td>
                  <td style={{ color: '#e91e63' }}><strong>16 (3rd Unit)</strong></td>
                  <td><strong style={{ color: '#c7a600' }}>16 = 16</strong></td>
                  <td><strong style={{ color: '#c7a600' }}>EQUILIBRIUM ⭐</strong></td>
                </tr>
                <tr>
                  <td>5th Rupee</td>
                  <td style={{ color: 'var(--brutalist-cyan)' }}>12 (3rd Unit)</td>
                  <td style={{ color: '#e91e63' }}>16 (3rd Unit)</td>
                  <td>12 {'<'} 16</td>
                  <td>Buy Y</td>
                </tr>
              </tbody>
            </table>

            <div className="brutalist-highlight" style={{ marginTop: '20px' }}>
              <strong>FINAL BUNDLE:</strong> 2 Units of X + 3 Units of Y. (Total cost ₹5).
              <br />
              MU of Last X (16) = MU of Last Y (16).
            </div>
          </div>

          {/* Graph 2 */}
          <div className="brutalist-chart-container" style={{ marginTop: '25px', background: '#1a1a1a', border: '5px solid #000' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>EQUI-MARGINAL DIAGRAM</div>
            <TwoCommodityChart data={twoCommodityData} totalIncome={5} />
            <p style={{ textAlign: 'center', fontSize: '0.9rem', marginTop: '15px', color: '#ccc' }}>
              Lines intersect at <strong>Spending on X = 2</strong> (implies Spending on Y = 3).
            </p>
          </div>
        </section>

        {/* Derivation of Demand Curve */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">EXTRA: DERIVATION OF DEMAND CURVE</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>Why does the Demand Curve slope downward? It is because of the <strong>Law of Diminishing Marginal Utility!</strong></p>

          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item">
              <h4>THE LOGIC</h4>
              <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
                A consumer buys a good only if <strong>MU ≥ Price</strong>.
                <br /><br />
                When he buys more units, MU falls (diminishes).
                <br />
                To convince him to buy more units (where MU is lower), the <strong>Price must also fall</strong>.
              </p>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4>THE RESULT</h4>
              <p style={{ marginTop: '10px', lineHeight: '1.8' }}>
                <FaArrowDown /> More Consumption requires Lower Price.
                <br /><br />
                This inverse relationship between Price and Quantity Demanded gives us the downward sloping Demand Curve.
              </p>
            </div>
          </div>
        </section>

        {/* Consumer Surplus */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">BONUS: CONSUMER SURPLUS</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>
            "Consumer Surplus is the difference between what a consumer is <strong>willing to pay</strong> and what they <strong>actually pay</strong>."
          </p>

          <div className="brutalist-formula">
            CONSUMER SURPLUS = TOTAL UTILITY − (PRICE × QUANTITY)
          </div>

          <div className="brutalist-grid-item green" style={{ marginTop: '25px' }}>
            <h4>EXAMPLE</h4>
            <ul className="brutalist-list">
              <li>You are willing to pay ₹50 for a burger (because you are hungry!).</li>
              <li>Market Price is ₹20.</li>
              <li><strong>Surplus = ₹50 - ₹20 = ₹30</strong> (This is your "Profit" or extra satisfaction).</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsumerEquilibrium;