import React from 'react';
import { FaInfinity, FaEquals, FaArrowDown, FaArrowUp, FaMinus } from 'react-icons/fa';

function TypesOfElasticity() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Section 3</span>
        <h2 className="section-title-lesson">Types of Price Elasticity</h2>
        <p className="section-subtitle-lesson">Classifying demand based on elasticity values</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p>Based on the numerical value of price elasticity of demand, we can classify it into five types:</p>

          <div className="highlight-card gold mt-4">
            <div className="highlight-icon"><FaInfinity /></div>
            <div className="highlight-content">
              <h3>1. Perfectly Elastic Demand (Ed = ∞)</h3>
              <p>Any small increase in price causes quantity demanded to drop to zero. The demand curve is horizontal.</p>
              <p className="example"><strong>Example:</strong> Products in a perfectly competitive market.</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaArrowUp /></div>
            <div className="highlight-content">
              <h3>2. Perfectly Inelastic Demand (Ed = 0)</h3>
              <p>Quantity demanded remains constant regardless of price changes. The demand curve is vertical.</p>
              <p className="example"><strong>Example:</strong> Life-saving medicines, salt.</p>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaEquals /></div>
            <div className="highlight-content">
              <h3>3. Unitary Elastic Demand (Ed = 1)</h3>
              <p>Percentage change in quantity demanded equals percentage change in price.</p>
              <p className="example"><strong>Example:</strong> Some luxury goods where proportionate changes occur.</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaArrowDown /></div>
            <div className="highlight-content">
              <h3>4. Relatively Elastic Demand (Ed &gt; 1)</h3>
              <p>Demand changes more than proportionately to price changes.</p>
              <p className="example"><strong>Example:</strong> Luxury goods, goods with many substitutes.</p>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaMinus /></div>
            <div className="highlight-content">
              <h3>5. Relatively Inelastic Demand (Ed &lt; 1)</h3>
              <p>Demand changes less than proportionately to price changes.</p>
              <p className="example"><strong>Example:</strong> Necessities like food, electricity.</p>
            </div>
          </div>

          <div className="summary-table mt-5">
            <h3>Summary of Elasticity Types</h3>
            <table className="w-full border-collapse border border-gray-600 mt-3">
              <thead>
                <tr className="bg-gray-700">
                  <th className="border border-gray-600 px-4 py-2">Type</th>
                  <th className="border border-gray-600 px-4 py-2">Value</th>
                  <th className="border border-gray-600 px-4 py-2">Description</th>
                  <th className="border border-gray-600 px-4 py-2">Curve Shape</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Perfectly Elastic</td>
                  <td className="border border-gray-600 px-4 py-2">∞</td>
                  <td className="border border-gray-600 px-4 py-2">Infinite response</td>
                  <td className="border border-gray-600 px-4 py-2">Horizontal</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-2">Relatively Elastic</td>
                  <td className="border border-gray-600 px-4 py-2">&gt; 1</td>
                  <td className="border border-gray-600 px-4 py-2">More than proportionate</td>
                  <td className="border border-gray-600 px-4 py-2">Flatter</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Unitary</td>
                  <td className="border border-gray-600 px-4 py-2">= 1</td>
                  <td className="border border-gray-600 px-4 py-2">Equal proportion</td>
                  <td className="border border-gray-600 px-4 py-2">Rectangular Hyperbola</td>
                </tr>
                <tr className="bg-gray-800">
                  <td className="border border-gray-600 px-4 py-2">Relatively Inelastic</td>
                  <td className="border border-gray-600 px-4 py-2">&lt; 1</td>
                  <td className="border border-gray-600 px-4 py-2">Less than proportionate</td>
                  <td className="border border-gray-600 px-4 py-2">Steeper</td>
                </tr>
                <tr>
                  <td className="border border-gray-600 px-4 py-2">Perfectly Inelastic</td>
                  <td className="border border-gray-600 px-4 py-2">0</td>
                  <td className="border border-gray-600 px-4 py-2">No response</td>
                  <td className="border border-gray-600 px-4 py-2">Vertical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypesOfElasticity;
