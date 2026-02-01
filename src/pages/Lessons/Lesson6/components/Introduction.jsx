import React from 'react';
import { FaPercentage, FaChartLine, FaDollarSign, FaCoins } from 'react-icons/fa';
import '../../Lesson3/css/lesson3-brutalist.css';

function Introduction() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 6 / SECTION 1</div>
          <h2 className="brutalist-title">INTRODUCTION TO<br />PRICE ELASTICITY</h2>
          <p className="brutalist-subtitle">Understanding how quantity demanded responds to price changes</p>
        </header>

        {/* What is PED */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHAT IS PRICE ELASTICITY OF DEMAND?</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              Price elasticity of demand measures how much the <strong>quantity demanded</strong> of a good responds to a change in its <strong>price</strong>. It shows the degree of consumer sensitivity to price changes.
            </p>
          </div>

          <div className="brutalist-highlight" style={{ marginTop: '25px' }}>
            <FaPercentage style={{ marginRight: '10px' }} />
            <strong>KEY CONCEPT:</strong> Some goods' demand changes drastically with price (elastic), while others remain relatively stable (inelastic).
          </div>
        </section>

        {/* Real-world Examples */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">REAL-WORLD EXAMPLES</h3>
          <ul className="brutalist-list">
            <li><strong>Gasoline:</strong> When prices rise, people still need to commute - inelastic demand</li>
            <li><strong>Restaurant meals:</strong> If prices increase, people cook at home more - elastic demand</li>
            <li><strong>Life-saving medicines:</strong> Patients must buy regardless of price - perfectly inelastic</li>
          </ul>
        </section>

        {/* Why It Matters */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHY IT MATTERS</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4><FaCoins style={{ marginRight: '8px' }} />FOR BUSINESS</h4>
              <p style={{ lineHeight: '1.7' }}>
                Understanding elasticity helps businesses set prices strategically. A company selling an elastic good must be careful with price increases, while one selling inelastic goods has more pricing power.
              </p>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4><FaDollarSign style={{ marginRight: '8px' }} />TOTAL REVENUE</h4>
              <p style={{ lineHeight: '1.7' }}>
                Price elasticity directly affects total revenue. For elastic goods, lowering prices increases revenue. For inelastic goods, raising prices increases revenue.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Introduction;
