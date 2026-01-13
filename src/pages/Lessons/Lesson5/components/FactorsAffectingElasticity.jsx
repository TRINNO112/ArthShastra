import React from 'react';
import { FaListUl, FaLeaf, FaBoxOpen, FaClock, FaRupeeSign, FaTags } from 'react-icons/fa';
import './lesson5.css';

const FactorsAffectingElasticity = () => {
  return (
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 2 - Section 2</span>
        <h2 className="section-title-lesson">Factors Affecting Price Elasticity</h2>
        <p className="section-subtitle-lesson">Why are some goods elastic and others inelastic?</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaListUl /> Determinants of Price Elasticity</h3>
          <p className="mb-4">
            The price elasticity of demand is not the same for all commodities. It depends on several factors:
          </p>

          <div className="reasons-grid two-col" style={{gridTemplateColumns: '1fr 1fr', display:'grid', gap:'1.5rem'}}>

            {/* Factor 1 */}
            <div className="reason-card gold">
              <div className="icon-header mb-2"><FaBoxOpen className="text-2xl text-gold"/></div>
              <h4>1. Nature of Commodity</h4>
              <ul className="bullet-list mt-2">
                <li><strong>Necessities (Salt, Medicines):</strong> Inelastic Demand (Ed {'<'} 1). You buy them regardless of price.</li>
                <li><strong>Luxuries (AC, Cars):</strong> Elastic Demand (Ed {'>'} 1). You can postpone buying them.</li>
                <li><strong>Comforts (Fans, Coolers):</strong> Moderate Elasticity.</li>
              </ul>
            </div>

            {/* Factor 2 */}
            <div className="reason-card cyan">
              <div className="icon-header mb-2"><FaTags className="text-2xl text-cyan"/></div>
              <h4>2. Availability of Substitutes</h4>
              <ul className="bullet-list mt-2">
                <li><strong>More Substitutes (Pepsi/Coke):</strong> Highly Elastic. If Pepsi price rises, you switch to Coke easily.</li>
                <li><strong>No Close Substitutes (Railways, Salt):</strong> Inelastic Demand. You have no choice but to buy.</li>
              </ul>
            </div>

            {/* Factor 3 */}
            <div className="reason-card green">
              <div className="icon-header mb-2"><FaRupeeSign className="text-2xl text-green"/></div>
              <h4>3. Portion of Income Spent</h4>
              <ul className="bullet-list mt-2">
                <li><strong>Small Portion (Matchbox, Needle):</strong> Inelastic. Price doubling (₹1 to ₹2) doesn't matter much.</li>
                <li><strong>Large Portion (Car, House):</strong> Elastic. A small % change impacts budget significantly.</li>
              </ul>
            </div>

            {/* Factor 4 */}
            <div className="reason-card purple">
              <div className="icon-header mb-2"><FaLeaf className="text-2xl text-purple"/></div>
              <h4>4. Number of Uses</h4>
              <ul className="bullet-list mt-2">
                <li><strong>Multiple Uses (Milk, Electricity):</strong> Elastic. If price rises, you stop less urgent uses (e.g., making sweets) and use only for drinking.</li>
                <li><strong>Single Use (Paper):</strong> Less Elastic.</li>
              </ul>
            </div>

             {/* Factor 5 */}
             <div className="reason-card red">
              <div className="icon-header mb-2"><FaClock className="text-2xl text-red"/></div>
              <h4>5. Postponement of Consumption</h4>
              <ul className="bullet-list mt-2">
                <li><strong>Can be postponed (Buying new Car):</strong> Elastic. You wait for price Drop.</li>
                <li><strong>Cannot be postponed (Urgent Medicine):</strong> Inelastic. You buy immediately.</li>
              </ul>
            </div>

             {/* Factor 6 */}
             <div className="reason-card" style={{border: '1px solid #aaa', background: 'rgba(255,255,255,0.05)'}}>
              <div className="icon-header mb-2 text-2xl">⏳</div>
              <h4>6. Time Period</h4>
              <ul className="bullet-list mt-2">
                <li><strong>Short Period:</strong> Inelastic. Habits take time to change.</li>
                <li><strong>Long Period:</strong> Elastic. Consumers can find substitutes or change habits over time.</li>
              </ul>
            </div>

          </div>

          <div className="info-box note mt-4">
            <div className="info-icon">💡</div>
            <div className="info-content">
              <h4>Habitual Goods</h4>
              <p>Goods for which a consumer is habitual (e.g., Alcohol, Tobacco) tend to have <strong>Inelastic Demand</strong> because the consumer craves them regardless of price hikes.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FactorsAffectingElasticity;
