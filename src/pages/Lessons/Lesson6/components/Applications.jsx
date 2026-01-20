// Applications of Price Elasticity of Demand
import { useState } from 'react';
import { FaChartBar, FaDollarSign, FaIndustry, FaGavel, FaUniversity, FaStore, FaLightbulb, FaChartLine } from 'react-icons/fa';
import InteractiveCurveSimulator from './InteractiveCurveSimulator';

function Applications() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Section 5</span>
        <h2 className="section-title-lesson">Applications of Price Elasticity</h2>
        <p className="section-subtitle-lesson">Real-world uses in business and policy decisions</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p>Understanding price elasticity helps businesses and governments make better decisions:</p>

          <div className="highlight-card gold mt-4">
            <div className="highlight-icon"><FaDollarSign /></div>
            <div className="highlight-content">
              <h3>1. Pricing Strategy for Businesses</h3>
              <p>Companies use elasticity to set optimal prices and predict revenue changes.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Elastic goods:</strong> Lower prices to increase total revenue</li>
                <li><strong>Inelastic goods:</strong> Higher prices to increase total revenue</li>
                <li><strong>Example:</strong> Luxury car manufacturers avoid large price increases</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaIndustry /></div>
            <div className="highlight-content">
              <h3>2. Tax Policy and Government Revenue</h3>
              <p>Governments consider elasticity when imposing taxes on goods.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Elastic goods:</strong> Tax increases may reduce revenue (cigarettes)</li>
                <li><strong>Inelastic goods:</strong> Tax increases can increase revenue (gasoline)</li>
                <li><strong>Policy impact:</strong> Understanding prevents unintended consequences</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaGavel /></div>
            <div className="highlight-content">
              <h3>3. Agricultural Price Support</h3>
              <p>Governments support farmers by guaranteeing minimum prices.</p>
              <p>Since agricultural products have inelastic demand, price supports effectively increase farmer income without causing large surpluses.</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaUniversity /></div>
            <div className="highlight-content">
              <h3>4. International Trade</h3>
              <p>Countries use elasticity concepts in trade negotiations.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Export strategy:</strong> Countries with inelastic demand for exports can charge higher prices</li>
                <li><strong>Import tariffs:</strong> Understanding elasticity helps predict trade impacts</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaStore /></div>
            <div className="highlight-content">
              <h3>5. Marketing and Product Strategy</h3>
              <p>Businesses use elasticity to design marketing campaigns and product lines.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Product differentiation:</strong> Creates less elastic demand</li>
                <li><strong>Promotional pricing:</strong> Effective for elastic goods</li>
                <li><strong>Brand loyalty:</strong> Reduces price sensitivity</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaChartBar /></div>
            <div className="highlight-content">
              <h3>6. Demand Forecasting</h3>
              <p>Elasticity helps predict how demand will respond to economic changes.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Inflation predictions:</strong> How demand changes with rising prices</li>
                <li><strong>Recession planning:</strong> Which goods consumers cut back on first</li>
                <li><strong>Seasonal adjustments:</strong> Price sensitivity during different periods</li>
              </ul>
            </div>
          </div>


          {/* Interactive Demand Curve Simulator */}
          <div className="mt-10 mb-10">
            <InteractiveCurveSimulator />
          </div>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h3>Practical Importance</h3>
              <p>Price elasticity is crucial for effective decision-making in business, government policy, and economic planning. Ignoring elasticity can lead to costly mistakes in pricing and policy implementation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Applications;
