// OpportunityCost.jsx - Concept of Opportunity Cost and MOC
import { FaBalanceScale, FaCalculator, FaSync, FaLightbulb } from 'react-icons/fa';
import '../lesson2-retro.css';

function OpportunityCost() {
  return (
    <section className="lesson-section">
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 className="retro-header-lg" style={{ color: 'var(--retro-amber)', textShadow: 'var(--glow-amber)' }}>OPPORTUNITY COST</h2>
        <p className="sys-text" style={{ color: 'var(--retro-dim)' }}>
          [DEFINITION]: Value of Next Best Alternative Foregone.
        </p>
      </div>

      <div className="terminal-card">
        <h3 className="retro-header-md">
          <FaBalanceScale style={{ marginRight: '10px' }} />
          THE "NEXT BEST" CHOICE
        </h3>
        <p className="sys-text">
          Since resources are limited, choosing one alternative means giving up another.
          The <strong style={{ color: 'var(--retro-green)' }}>Opportunity Cost</strong> is the value of the alternative that we had to sacrifice.
        </p>

        <div className="sys-alert" style={{ marginTop: '20px' }}>
          <FaLightbulb style={{ marginRight: '10px', color: 'var(--retro-amber)' }} />
          <strong>REAL_WORLD_EXAMPLE:</strong>
          <p style={{ marginTop: '5px' }}>If you have ₹50,000 and you can either buy a Laptop or a Mobile Phone. If you buy the laptop, the <strong>Opportunity Cost</strong> is the mobile phone you didn't buy.</p>
        </div>
      </div>

      <div className="terminal-card">
        <h3 className="retro-header-md">
          <FaCalculator style={{ marginRight: '10px' }} />
          MARGINAL OPPORTUNITY COST (MOC)
        </h3>
        <p className="sys-text">
          MOC is the rate at which one good is sacrificed to produce an additional unit of another good.
          It is also known as <strong style={{ color: 'var(--retro-cyan)' }}>Marginal Rate of Transformation (MRT)</strong>.
        </p>

        <div style={{ border: '1px dashed var(--retro-cyan)', padding: '20px', margin: '20px 0', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-mono)', color: 'var(--retro-cyan)' }}>MOC FORMULA</h3>
          <div style={{ fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>
            MOC = <span style={{ color: '#ff3333' }}>Δ Sacrificed (Y)</span> / <span style={{ color: '#33ff00' }}>Δ Gained (X)</span>
          </div>
        </div>

        <p className="sys-text" style={{ fontSize: '0.9rem', color: '#888' }}>
          [NOTE]: In most cases, MOC increases as we produce more of a good because resources are not equally efficient in all uses. This is why the PPC is concave.
        </p>
      </div>
    </section>
  );
}

export default OpportunityCost;
