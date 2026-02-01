// Factors Affecting Price Elasticity of Demand
import { FaLightbulb, FaClock, FaTags, FaCoins, FaShoppingCart, FaUsers } from 'react-icons/fa';
import '../../Lesson3/css/lesson3-brutalist.css';

function FactorsAffecting() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 6 / SECTION 4</div>
          <h2 className="brutalist-title">FACTORS AFFECTING<br />PRICE ELASTICITY</h2>
          <p className="brutalist-subtitle">What determines how responsive demand is to price changes</p>
        </header>

        {/* Factors */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">THE SIX KEY FACTORS</h3>
          <p style={{ marginBottom: '25px', lineHeight: '1.8' }}>
            Several factors influence whether demand for a good is elastic or inelastic:
          </p>

          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <div className="brutalist-number">01</div>
              <h4><FaShoppingCart style={{ marginRight: '8px' }} />AVAILABILITY OF SUBSTITUTES</h4>
              <p style={{ lineHeight: '1.7' }}>Goods with many close substitutes have more elastic demand. Consumers can easily switch when prices rise.</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem' }}>Example: Different brands of toothpaste vs. unique prescription drugs</p>
            </div>

            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">02</div>
              <h4><FaTags style={{ marginRight: '8px' }} />NATURE OF COMMODITY</h4>
              <p style={{ lineHeight: '1.7' }}>Luxuries tend to have elastic demand, while necessities have inelastic demand.</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem' }}>Luxuries: Jewelry, vacations | Necessities: Food, medicine</p>
            </div>

            <div className="brutalist-grid-item yellow">
              <div className="brutalist-number">03</div>
              <h4><FaCoins style={{ marginRight: '8px' }} />PROPORTION OF INCOME</h4>
              <p style={{ lineHeight: '1.7' }}>Goods that take up a large portion of income have more elastic demand.</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem' }}>Example: A car costs more than salt, so consumers are more price-sensitive for cars</p>
            </div>

            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">04</div>
              <h4><FaClock style={{ marginRight: '8px' }} />TIME PERIOD</h4>
              <p style={{ lineHeight: '1.7' }}>Demand is usually more elastic in the long run as consumers adjust their behavior.</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem' }}>Short run: Gasoline inelastic | Long run: People buy fuel-efficient cars</p>
            </div>

            <div className="brutalist-grid-item yellow">
              <div className="brutalist-number">05</div>
              <h4><FaUsers style={{ marginRight: '8px' }} />NUMBER OF USES</h4>
              <p style={{ lineHeight: '1.7' }}>Goods with multiple uses have more elastic demand.</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem' }}>Example: Electricity for lighting, heating, cooling - more elastic than single-use goods</p>
            </div>

            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">06</div>
              <h4><FaLightbulb style={{ marginRight: '8px' }} />CONSUMER HABITS</h4>
              <p style={{ lineHeight: '1.7' }}>Addictive goods or those consumers are habituated to have inelastic demand.</p>
              <p style={{ marginTop: '10px', fontStyle: 'italic', fontSize: '0.9rem' }}>Example: Cigarettes, coffee for regular drinkers</p>
            </div>
          </div>
        </section>

        {/* Key Takeaway */}
        <section className="brutalist-card">
          <div className="brutalist-highlight dark">
            <FaLightbulb style={{ marginRight: '10px', color: 'var(--brutalist-yellow)' }} />
            <strong>KEY TAKEAWAY:</strong> The more substitutes available and the less necessary a good is, the more elastic its demand will be. Time also plays a crucial role in elasticity.
          </div>
        </section>
      </div>
    </div>
  );
}

export default FactorsAffecting;