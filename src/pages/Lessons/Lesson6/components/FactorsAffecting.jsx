// Factors Affecting Price Elasticity of Demand
import { FaLightbulb, FaClock, FaTags, FaCoins, FaShoppingCart, FaUsers } from 'react-icons/fa';

function FactorsAffecting() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Section 4</span>
        <h2 className="section-title-lesson">Factors Affecting Price Elasticity</h2>
        <p className="section-subtitle-lesson">What determines how responsive demand is to price changes</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p>Several factors influence whether demand for a good is elastic or inelastic:</p>

          <div className="highlight-card gold mt-4">
            <div className="highlight-icon"><FaShoppingCart /></div>
            <div className="highlight-content">
              <h3>1. Availability of Substitutes</h3>
              <p>Goods with many close substitutes have more elastic demand. Consumers can easily switch when prices rise.</p>
              <p className="example"><strong>Example:</strong> Different brands of toothpaste vs. unique prescription drugs</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaTags /></div>
            <div className="highlight-content">
              <h3>2. Nature of the Commodity</h3>
              <p>Luxuries tend to have elastic demand, while necessities have inelastic demand.</p>
              <p className="example"><strong>Luxuries:</strong> Jewelry, vacations<br /><strong>Necessities:</strong> Food, medicine, housing</p>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaCoins /></div>
            <div className="highlight-content">
              <h3>3. Proportion of Income Spent</h3>
              <p>Goods that take up a large portion of income have more elastic demand.</p>
              <p className="example"><strong>Example:</strong> A car costs more than salt, so consumers are more price-sensitive for cars</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaClock /></div>
            <div className="highlight-content">
              <h3>4. Time Period</h3>
              <p>Demand is usually more elastic in the long run as consumers adjust their behavior.</p>
              <p className="example"><strong>Short run:</strong> Gasoline demand is inelastic<br /><strong>Long run:</strong> People buy fuel-efficient cars</p>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaUsers /></div>
            <div className="highlight-content">
              <h3>5. Number of Uses</h3>
              <p>Goods with multiple uses have more elastic demand.</p>
              <p className="example"><strong>Example:</strong> Electricity can be used for lighting, heating, cooling - more elastic than single-use goods</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h3>6. Consumer Habits and Tastes</h3>
              <p>Addictive goods or those consumers are habituated to have inelastic demand.</p>
              <p className="example"><strong>Example:</strong> Cigarettes, coffee for regular drinkers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="highlight-card gold">
        <div className="highlight-icon"><FaLightbulb /></div>
        <div className="highlight-content">
          <h3>Key Takeaway</h3>
          <p>The more substitutes available and the less necessary a good is, the more elastic its demand will be. Time also plays a crucial role in elasticity.</p>
        </div>
      </div>
    </section>
  );
}

export default FactorsAffecting;