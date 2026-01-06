// OpportunityCost.jsx - Concept of Opportunity Cost and MOC
import { FaBalanceScale, FaCalculator, FaSync, FaLightbulb } from 'react-icons/fa';
import './components.css';

function OpportunityCost() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Core Concept</span>
        <h2 className="section-title-lesson">Opportunity Cost</h2>
        <p className="section-subtitle-lesson">
          The cost of any activity measured in terms of the value of the next best alternative foregone.
        </p>
      </div>

      <div className="content-card featured-card">
        <h3 className="card-title">
          <FaBalanceScale className="title-icon gold" />
          The "Next Best" Choice
        </h3>
        <p className="intro-text">
          Since resources are limited, choosing one alternative means giving up another.
          The <strong>Opportunity Cost</strong> is the value of the alternative that we had to sacrifice.
        </p>

        <div className="example-box">
          <FaLightbulb className="example-icon" />
          <div>
            <strong>Real World Example:</strong>
            <p>If you have ₹50,000 and you can either buy a Laptop or a Mobile Phone. If you buy the laptop, the <strong>Opportunity Cost</strong> is the mobile phone you didn't buy.</p>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h3 className="card-title">
          <FaCalculator className="title-icon cyan" />
          Marginal Opportunity Cost (MOC)
        </h3>
        <p className="intro-text">
          MOC is the rate at which one good is sacrificed to produce an additional unit of another good.
          It is also known as <strong>Marginal Rate of Transformation (MRT)</strong>.
        </p>

        <div className="highlight-card cyan">
          <div className="highlight-content">
            <h3>MOC Formula</h3>
            <div className="formula-box moc-formula-box">
              MOC = <span className="moc-formula-numerator">Δ Sacrificed Units (Y)</span>
              <br />
              <span className="moc-formula-denominator">Δ Gained Units (X)</span>
            </div>
          </div>
        </div>

        <p className="note-text">
          Note: In most cases, MOC increases as we produce more of a good because resources are not equally efficient in all uses. This is why the PPC is concave.
        </p>
      </div>
    </section>
  );
}

export default OpportunityCost;
