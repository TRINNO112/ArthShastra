import React from 'react';
import { FaCalculator, FaPercentage, FaEquals, FaDivide } from 'react-icons/fa';

function ConceptAndMeasurement() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Section 2</span>
        <h2 className="section-title-lesson">Concept and Measurement</h2>
        <p className="section-subtitle-lesson">Understanding the formula and calculation methods</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaCalculator /> Formula for Price Elasticity of Demand</h3>
          <p>The price elasticity of demand (Ed) is calculated as:</p>

          <div className="math-formula">
            <FaPercentage style={{ fontSize: '2rem', marginRight: '1rem' }} />
            <span>Ed = </span>
            <div className="math-fraction mx-3">
              <span className="math-numerator">(-) % Change in Quantity Demanded</span>
              <span className="math-denominator">% Change in Price</span>
            </div>
          </div>

          <p className="text-center italic text-blue-300 mb-4">Note: The negative sign shows the inverse relationship between price and quantity demanded</p>

          <h3 className="highlight-cyan mt-5">Measurement Methods</h3>

          <div className="highlight-card gold mt-3">
            <div className="highlight-content">
              <h4>1. Percentage Method</h4>
              <p>Ed = (ΔQ/Q) ÷ (ΔP/P)</p>
              <p className="small-text">Where ΔQ is change in quantity, Q is original quantity, ΔP is change in price, P is original price</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-content">
              <h4>2. Geometric Method</h4>
              <p>Ed = Lower segment of demand curve ÷ Upper segment of demand curve</p>
              <p className="small-text">Used for linear demand curves at different points</p>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-content">
              <h4>3. Total Expenditure Method</h4>
              <p>Compare total expenditure before and after price change:</p>
              <ul className="list-disc list-inside mt-2">
                <li>If TE increases: Demand is elastic (Ed &gt; 1)</li>
                  <li>If TE decreases: Demand is inelastic (Ed &lt; 1)</li>
                <li>If TE unchanged: Unitary elastic (Ed = 1)</li>
              </ul>
            </div>
          </div>

          <div className="highlight-cyan mt-5">
            <h3><FaEquals /> Numerical Example</h3>
            <div className="example-box mt-3">
              <p><strong>Situation:</strong> When the price of coffee rises from ₹100 to ₹120 per kg, the quantity demanded falls from 50 kg to 40 kg.</p>

              <div className="calculation-steps mt-3">
                <p>ΔQ = 40 - 50 = -10</p>
                <p>ΔP = 120 - 100 = 20</p>
                <p>Ed = (ΔQ/Q) ÷ (ΔP/P) = (-10/50) ÷ (20/100)</p>
                <p>Ed = (-0.2) ÷ (0.2) = -1</p>
              </div>

              <p className="mt-3"><strong>Conclusion:</strong> The elasticity is -1 (ignoring sign, Ed = 1), indicating unitary elastic demand.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConceptAndMeasurement;
