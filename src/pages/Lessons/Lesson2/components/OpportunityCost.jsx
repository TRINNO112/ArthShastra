// OpportunityCost.jsx - Concept of Opportunity Cost and MOC
import { FaBalanceScale, FaCalculator, FaSync, FaLightbulb } from 'react-icons/fa';
import '../lesson2-retro.css';

function OpportunityCost() {
  return (
    <section className="lesson-section">
      <div className="section-header">
        OPPORTUNITY COST
      </div>

      <div className="feature-box">
        <p>
          <strong>[DEFINITION]</strong><br />
          The Value of Next Best Alternative Foregone.
        </p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <div className="card-content">
            <h3>THE "NEXT BEST" CHOICE</h3>
            <p>
              <section>
                <h2 className="section-title">Opportunity Cost</h2>

                <div className="lesson-grid-2">
                  <div className="lesson-card">
                    <h3 className="card-title">Concept Definition</h3>
                    <p>
                      <strong>Opportunity Cost</strong> is the value of the <em>next best alternative</em> foregone when making a choice.
                      It is not just money—it is what you give up to get something else.
                    </p>
                    <div style={{ background: '#f0f9ff', padding: '15px', borderLeft: '4px solid #0284c7', marginTop: '20px' }}>
                      <strong>Example:</strong> If you spend an hour studying Economics instead of playing Football, the opportunity cost is the fun and exercise you missed from Football.
                    </div>
                  </div>

                  <div className="lesson-card">
                    <h3 className="card-title">Marginal Opportunity Cost (MOC)</h3>
                    <p>
                      MOC is the rate at which you must sacrifice units of one good to produce one more unit of another good.
                    </p>
                    <div className="results-box" style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '5px' }}>FORMULA</div>
                      <div className="results-value-big" style={{ fontSize: '1.8rem' }}>MOC = ΔLoss / ΔGain</div>
                    </div>
                  </div>
                </div>
              </section>
              );
}

              export default OpportunityCost;
