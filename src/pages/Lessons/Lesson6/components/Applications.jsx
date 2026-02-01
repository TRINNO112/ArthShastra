// Applications of Price Elasticity of Demand
import { FaChartBar, FaDollarSign, FaIndustry, FaGavel, FaUniversity, FaStore, FaLightbulb, FaChartLine } from 'react-icons/fa';
import InteractiveCurveSimulator from './InteractiveCurveSimulator';
import InteractiveCurveSimulatorMobile from './InteractiveCurveSimulatorMobile';
import '../../Lesson3/css/lesson3-brutalist.css';

function Applications() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 6 / SECTION 5</div>
          <h2 className="brutalist-title">APPLICATIONS OF<br />PRICE ELASTICITY</h2>
          <p className="brutalist-subtitle">Real-world uses in business and policy decisions</p>
        </header>

        {/* Applications Cards */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">BUSINESS & POLICY USES</h3>
          <p style={{ marginBottom: '25px', lineHeight: '1.8' }}>
            Understanding price elasticity helps businesses and governments make better decisions:
          </p>

          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4><FaDollarSign style={{ marginRight: '8px' }} />1. PRICING STRATEGY</h4>
              <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>Companies use elasticity to set optimal prices and predict revenue changes.</p>
              <ul className="brutalist-list">
                <li><strong>Elastic goods:</strong> Lower prices to increase total revenue</li>
                <li><strong>Inelastic goods:</strong> Higher prices to increase total revenue</li>
                <li><strong>Example:</strong> Luxury car manufacturers avoid large price increases</li>
              </ul>
            </div>

            <div className="brutalist-grid-item cyan">
              <h4><FaIndustry style={{ marginRight: '8px' }} />2. TAX POLICY</h4>
              <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>Governments consider elasticity when imposing taxes on goods.</p>
              <ul className="brutalist-list">
                <li><strong>Elastic goods:</strong> Tax increases may reduce revenue (cigarettes)</li>
                <li><strong>Inelastic goods:</strong> Tax increases can increase revenue (gasoline)</li>
                <li><strong>Policy impact:</strong> Understanding prevents unintended consequences</li>
              </ul>
            </div>

            <div className="brutalist-grid-item yellow">
              <h4><FaGavel style={{ marginRight: '8px' }} />3. AGRICULTURAL PRICE SUPPORT</h4>
              <p style={{ lineHeight: '1.7' }}>
                Governments support farmers by guaranteeing minimum prices. Since agricultural products have inelastic demand, price supports effectively increase farmer income without causing large surpluses.
              </p>
            </div>

            <div className="brutalist-grid-item cyan">
              <h4><FaUniversity style={{ marginRight: '8px' }} />4. INTERNATIONAL TRADE</h4>
              <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>Countries use elasticity concepts in trade negotiations.</p>
              <ul className="brutalist-list">
                <li><strong>Export strategy:</strong> Countries with inelastic demand for exports can charge higher prices</li>
                <li><strong>Import tariffs:</strong> Understanding elasticity helps predict trade impacts</li>
              </ul>
            </div>

            <div className="brutalist-grid-item yellow">
              <h4><FaStore style={{ marginRight: '8px' }} />5. MARKETING STRATEGY</h4>
              <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>Businesses use elasticity to design campaigns and product lines.</p>
              <ul className="brutalist-list">
                <li><strong>Product differentiation:</strong> Creates less elastic demand</li>
                <li><strong>Promotional pricing:</strong> Effective for elastic goods</li>
                <li><strong>Brand loyalty:</strong> Reduces price sensitivity</li>
              </ul>
            </div>

            <div className="brutalist-grid-item cyan">
              <h4><FaChartBar style={{ marginRight: '8px' }} />6. DEMAND FORECASTING</h4>
              <p style={{ lineHeight: '1.7', marginBottom: '10px' }}>Elasticity helps predict how demand will respond to economic changes.</p>
              <ul className="brutalist-list">
                <li><strong>Inflation:</strong> How demand changes with rising prices</li>
                <li><strong>Recession:</strong> Which goods consumers cut back on first</li>
                <li><strong>Seasonal:</strong> Price sensitivity during different periods</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive Demand Curve Simulator - UNTOUCHED */}
        <div className="mt-10 mb-10">
          <div className="desktop-simulator">
            <InteractiveCurveSimulator />
          </div>
          <div className="mobile-simulator">
            <InteractiveCurveSimulatorMobile />
          </div>
        </div>

        {/* Key Takeaway */}
        <section className="brutalist-card" style={{ marginTop: '20px' }}>
          <div className="brutalist-highlight dark">
            <FaLightbulb style={{ marginRight: '10px', color: 'var(--brutalist-yellow)' }} />
            <strong>PRACTICAL IMPORTANCE:</strong> Price elasticity is crucial for effective decision-making in business, government policy, and economic planning. Ignoring elasticity can lead to costly mistakes in pricing and policy implementation.
          </div>
        </section>
      </div>
    </div>
  );
}

export default Applications;
