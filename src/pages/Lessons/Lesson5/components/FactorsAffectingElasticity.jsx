import React from 'react';
import { FaListUl, FaLeaf, FaBoxOpen, FaClock, FaRupeeSign, FaTags, FaExchangeAlt, FaLightbulb } from 'react-icons/fa';
import '../lesson5-comic.css';

const FactorsAffectingElasticity = () => {
  return (
    <div className="comic-page">
      {/* Header */}
      <div className="comic-panel" style={{ textAlign: 'center', background: 'var(--comic-paper)' }}>
        <div className="caption-box" style={{ left: '50%', transform: 'translateX(-50%)', top: '-25px' }}>ISSUE #6</div>
        <h2 className="comic-header-lg" style={{ fontSize: '3rem', margin: '2rem 0 1rem 0' }}>
          THE ELASTICITY FACTORS
        </h2>
        <p className="comic-text" style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          Why are some goods elastic and others inelastic?
        </p>
      </div>

      {/* Factors Grid */}
      <div className="comic-panel" style={{ borderColor: '#ffd700', boxShadow: '10px 10px 0 #b8860b' }}>
        <div className="caption-box" style={{ background: '#ffd700', color: 'black' }}><FaListUl /> THE DETERMINANTS</div>
        <h3 className="comic-header-md">6 KEY FACTORS</h3>
        <p className="comic-text">The price elasticity of demand depends on these factors:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>

          {/* Factor 1 - Nature of Commodity */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #ffd700', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ background: '#ffd700', padding: '10px', borderRadius: '50%' }}>
                <FaBoxOpen size={24} color="black" />
              </div>
              <h4 style={{ color: '#b8860b', fontFamily: 'var(--font-comic-title)', margin: 0 }}>1. NATURE OF COMMODITY</h4>
            </div>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li><strong>Necessities (Salt, Medicines):</strong> Inelastic (Ed {'<'} 1). Buy regardless of price.</li>
              <li><strong>Luxuries (AC, Cars):</strong> Elastic (Ed {'>'} 1). Can postpone buying.</li>
              <li><strong>Comforts (Fans, Coolers):</strong> Moderate Elasticity.</li>
            </ul>
          </div>

          {/* Factor 2 - Availability of Substitutes */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #00ffff', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ background: '#00ffff', padding: '10px', borderRadius: '50%' }}>
                <FaTags size={24} color="black" />
              </div>
              <h4 style={{ color: '#008b8b', fontFamily: 'var(--font-comic-title)', margin: 0 }}>2. AVAILABILITY OF SUBSTITUTES</h4>
            </div>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li><strong>More Substitutes (Pepsi/Coke):</strong> Highly Elastic. Easy to switch.</li>
              <li><strong>No Close Substitutes (Railways, Salt):</strong> Inelastic. No choice.</li>
            </ul>
          </div>

          {/* Factor 3 - Portion of Income Spent */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #00ff00', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ background: '#00ff00', padding: '10px', borderRadius: '50%' }}>
                <FaRupeeSign size={24} color="black" />
              </div>
              <h4 style={{ color: '#006400', fontFamily: 'var(--font-comic-title)', margin: 0 }}>3. PORTION OF INCOME SPENT</h4>
            </div>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li><strong>Small Portion (Matchbox):</strong> Inelastic. Price doubling doesn't matter.</li>
              <li><strong>Large Portion (Car, House):</strong> Elastic. Impacts budget significantly.</li>
            </ul>
          </div>

          {/* Factor 4 - Number of Uses */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #bf5af2', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ background: '#bf5af2', padding: '10px', borderRadius: '50%' }}>
                <FaLeaf size={24} color="white" />
              </div>
              <h4 style={{ color: '#6a0dad', fontFamily: 'var(--font-comic-title)', margin: 0 }}>4. NUMBER OF USES</h4>
            </div>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li><strong>Multiple Uses (Milk, Electricity):</strong> Elastic. Stop less urgent uses if price rises.</li>
              <li><strong>Single Use (Paper):</strong> Less Elastic.</li>
            </ul>
          </div>

          {/* Factor 5 - Postponement of Consumption */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #ff4444', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ background: '#ff4444', padding: '10px', borderRadius: '50%' }}>
                <FaClock size={24} color="white" />
              </div>
              <h4 style={{ color: '#8b0000', fontFamily: 'var(--font-comic-title)', margin: 0 }}>5. POSTPONEMENT</h4>
            </div>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li><strong>Can be postponed (New Car):</strong> Elastic. Wait for price drop.</li>
              <li><strong>Cannot be postponed (Urgent Medicine):</strong> Inelastic. Buy immediately.</li>
            </ul>
          </div>

          {/* Factor 6 - Time Period */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '4px solid #666', padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{ background: '#666', padding: '10px', borderRadius: '50%' }}>
                <FaExchangeAlt size={24} color="white" />
              </div>
              <h4 style={{ color: '#333', fontFamily: 'var(--font-comic-title)', margin: 0 }}>6. TIME PERIOD</h4>
            </div>
            <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
              <li><strong>Short Period:</strong> Inelastic. Habits take time to change.</li>
              <li><strong>Long Period:</strong> Elastic. Find substitutes or change habits.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Habitual Goods Note */}
      <div className="comic-panel" style={{ background: '#4b0082', borderColor: '#9370db' }}>
        <div className="caption-box" style={{ background: '#9370db', color: 'white' }}><FaLightbulb /> SPECIAL CASE</div>
        <h3 className="comic-header-md" style={{ color: 'white' }}>HABITUAL GOODS</h3>
        <p className="comic-text" style={{ color: '#ddd' }}>
          Goods for which a consumer is habitual (e.g., <strong style={{ color: '#ffd700' }}>Alcohol, Tobacco</strong>) tend to have <strong style={{ color: '#ff4444' }}>Inelastic Demand</strong> because the consumer craves them regardless of price hikes.
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', marginTop: '1rem', border: '2px dashed white' }}>
          <p style={{ color: 'white', fontStyle: 'italic', margin: 0 }}>
            "Addiction overrides economic rationality!"
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="comic-panel" style={{ background: '#f5f5f5', borderColor: '#333' }}>
        <div className="caption-box" style={{ background: '#333', color: 'white' }}>QUICK RECAP</div>
        <h3 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>REMEMBER THIS!</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div style={{ background: '#e0ffe0', border: '3px solid #00aa00', padding: '1rem', textAlign: 'center', borderRadius: '8px' }}>
            <h4 style={{ fontFamily: 'var(--font-comic-title)', margin: '0 0 0.5rem 0', color: '#006400' }}>ELASTIC</h4>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Luxuries, Many Substitutes, Large Budget Share</p>
          </div>
          <div style={{ background: '#ffe0e0', border: '3px solid #cc0000', padding: '1rem', textAlign: 'center', borderRadius: '8px' }}>
            <h4 style={{ fontFamily: 'var(--font-comic-title)', margin: '0 0 0.5rem 0', color: '#8b0000' }}>INELASTIC</h4>
            <p style={{ margin: 0, fontWeight: 'bold' }}>Necessities, No Substitutes, Small Budget Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorsAffectingElasticity;
