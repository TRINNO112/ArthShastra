import React from 'react';
import { FaInfinity, FaEquals, FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';
import '../../Lesson3/css/lesson3-brutalist.css';

function TypesOfElasticity() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 6 / SECTION 3</div>
          <h2 className="brutalist-title">TYPES OF PRICE<br />ELASTICITY</h2>
          <p className="brutalist-subtitle">Classifying demand based on elasticity values</p>
        </header>

        {/* Introduction */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">THE FIVE TYPES</h3>
          <p style={{ marginBottom: '25px', lineHeight: '1.8' }}>
            Based on the numerical value of price elasticity of demand, we can classify it into five types:
          </p>

          <div className="brutalist-grid-item yellow" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <FaInfinity style={{ fontSize: '2rem' }} />
              <h4 style={{ margin: 0 }}>1. PERFECTLY ELASTIC (Ed = ∞)</h4>
            </div>
            <p>Any small increase in price causes quantity demanded to drop to <strong>zero</strong>. The demand curve is <strong>horizontal</strong>.</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>Example: Products in a perfectly competitive market.</p>
          </div>

          <div className="brutalist-grid-item cyan" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <FaArrowUp style={{ fontSize: '2rem' }} />
              <h4 style={{ margin: 0 }}>2. PERFECTLY INELASTIC (Ed = 0)</h4>
            </div>
            <p>Quantity demanded remains <strong>constant</strong> regardless of price changes. The demand curve is <strong>vertical</strong>.</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>Example: Life-saving medicines, salt.</p>
          </div>

          <div className="brutalist-grid-item yellow" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <FaEquals style={{ fontSize: '2rem' }} />
              <h4 style={{ margin: 0 }}>3. UNITARY ELASTIC (Ed = 1)</h4>
            </div>
            <p>Percentage change in quantity demanded <strong>equals</strong> percentage change in price.</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>Example: Some luxury goods where proportionate changes occur.</p>
          </div>

          <div className="brutalist-grid-item cyan" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <FaArrowDown style={{ fontSize: '2rem' }} />
              <h4 style={{ margin: 0 }}>4. RELATIVELY ELASTIC (Ed {'>'} 1)</h4>
            </div>
            <p>Demand changes <strong>more than proportionately</strong> to price changes.</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>Example: Luxury goods, goods with many substitutes.</p>
          </div>

          <div className="brutalist-grid-item yellow">
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <FaMinus style={{ fontSize: '2rem' }} />
              <h4 style={{ margin: 0 }}>5. RELATIVELY INELASTIC (Ed {'<'} 1)</h4>
            </div>
            <p>Demand changes <strong>less than proportionately</strong> to price changes.</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>Example: Necessities like food, electricity.</p>
          </div>
        </section>

        {/* Summary Table */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">SUMMARY TABLE</h3>
          <div className="brutalist-table-container">
            <table className="brutalist-table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>TYPE</th>
                  <th>VALUE</th>
                  <th>DESCRIPTION</th>
                  <th>CURVE SHAPE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Perfectly Elastic</strong></td>
                  <td style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.2rem' }}>∞</td>
                  <td>Infinite response</td>
                  <td>Horizontal</td>
                </tr>
                <tr>
                  <td><strong>Relatively Elastic</strong></td>
                  <td style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.2rem' }}>{'>'} 1</td>
                  <td>More than proportionate</td>
                  <td>Flatter</td>
                </tr>
                <tr>
                  <td><strong>Unitary</strong></td>
                  <td style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.2rem' }}>= 1</td>
                  <td>Equal proportion</td>
                  <td>Rectangular Hyperbola</td>
                </tr>
                <tr>
                  <td><strong>Relatively Inelastic</strong></td>
                  <td style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.2rem' }}>{'<'} 1</td>
                  <td>Less than proportionate</td>
                  <td>Steeper</td>
                </tr>
                <tr>
                  <td><strong>Perfectly Inelastic</strong></td>
                  <td style={{ fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.2rem' }}>0</td>
                  <td>No response</td>
                  <td>Vertical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TypesOfElasticity;
