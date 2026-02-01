import React from 'react';
import { FaCalculator, FaPercentage, FaEquals, FaDivide } from 'react-icons/fa';
import '../../Lesson3/css/lesson3-brutalist.css';

function ConceptAndMeasurement() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 6 / SECTION 2</div>
          <h2 className="brutalist-title">CONCEPT AND<br />MEASUREMENT</h2>
          <p className="brutalist-subtitle">Understanding the formula and calculation methods</p>
        </header>

        {/* Formula */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">FORMULA FOR PRICE ELASTICITY</h3>
          <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>The price elasticity of demand (Ed) is calculated as:</p>

          <div className="brutalist-formula" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
            <FaPercentage style={{ fontSize: '2rem' }} />
            <span>Ed =</span>
            <div style={{ textAlign: 'center' }}>
              <div style={{ borderBottom: '3px solid #000', paddingBottom: '8px', marginBottom: '8px' }}>
                (-) % Change in Quantity Demanded
              </div>
              <div>% Change in Price</div>
            </div>
          </div>

          <div className="brutalist-note" style={{ marginTop: '25px' }}>
            <strong>NOTE:</strong>
            The negative sign shows the inverse relationship between price and quantity demanded (Law of Demand).
          </div>
        </section>

        {/* Measurement Methods */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">MEASUREMENT METHODS</h3>

          <div className="brutalist-grid-item yellow" style={{ marginBottom: '20px' }}>
            <div className="brutalist-number">01</div>
            <h4>PERCENTAGE METHOD</h4>
            <div className="brutalist-formula" style={{ fontSize: '1.4rem', margin: '15px 0' }}>
              Ed = (ΔQ/Q) ÷ (ΔP/P)
            </div>
            <p>Where ΔQ is change in quantity, Q is original quantity, ΔP is change in price, P is original price</p>
          </div>

          <div className="brutalist-grid-item cyan" style={{ marginBottom: '20px' }}>
            <div className="brutalist-number">02</div>
            <h4>GEOMETRIC METHOD</h4>
            <div className="brutalist-formula" style={{ fontSize: '1.4rem', margin: '15px 0' }}>
              Ed = Lower Segment ÷ Upper Segment
            </div>
            <p>Used for linear demand curves at different points on the curve.</p>
          </div>

          <div className="brutalist-grid-item yellow">
            <div className="brutalist-number">03</div>
            <h4>TOTAL EXPENDITURE METHOD</h4>
            <p style={{ marginBottom: '15px' }}>Compare total expenditure before and after price change:</p>
            <ul className="brutalist-list">
              <li>If TE increases with price fall: Demand is <strong>elastic (Ed {'>'} 1)</strong></li>
              <li>If TE decreases with price fall: Demand is <strong>inelastic (Ed {'<'} 1)</strong></li>
              <li>If TE unchanged: <strong>Unitary elastic (Ed = 1)</strong></li>
            </ul>
          </div>
        </section>

        {/* Numerical Example */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">NUMERICAL EXAMPLE</h3>

          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              <strong>Situation:</strong> When the price of coffee rises from ₹100 to ₹120 per kg, the quantity demanded falls from 50 kg to 40 kg.
            </p>
          </div>

          <div style={{ background: '#1a1a1a', border: '5px solid #000', padding: '25px', marginTop: '20px', color: '#fff' }}>
            <h4 style={{ fontFamily: 'var(--font-brutalist-heading)', letterSpacing: '1px', marginBottom: '20px', color: 'var(--brutalist-yellow)' }}>CALCULATION STEPS:</h4>
            <div style={{ fontFamily: 'var(--font-brutalist-body)', lineHeight: '2' }}>
              <p>ΔQ = 40 - 50 = <strong style={{ color: 'var(--brutalist-red)' }}>-10</strong></p>
              <p>ΔP = 120 - 100 = <strong style={{ color: 'var(--brutalist-cyan)' }}>20</strong></p>
              <p>Ed = (ΔQ/Q) ÷ (ΔP/P) = (-10/50) ÷ (20/100)</p>
              <p>Ed = (-0.2) ÷ (0.2) = <strong style={{ color: 'var(--brutalist-yellow)' }}>-1</strong></p>
            </div>
          </div>

          <div className="brutalist-highlight dark" style={{ marginTop: '20px' }}>
            <strong>CONCLUSION:</strong> The elasticity is -1 (ignoring sign, Ed = 1), indicating <strong>unitary elastic demand</strong>.
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConceptAndMeasurement;
