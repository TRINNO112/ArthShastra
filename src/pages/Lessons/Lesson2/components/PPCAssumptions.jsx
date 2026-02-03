// PPCAssumptions.jsx - Assumptions of PPC
import { FaClipboardCheck, FaCogs, FaBan, FaChartLine } from 'react-icons/fa';
import '../lesson2-retro.css';

function PPCAssumptions() {
  return (
    <section className="lesson-section">
      <div className="section-header">
        SYSTEM CONSTRAINTS (ASSUMPTIONS)
      </div>

      <div className="feature-box">
        <p>
          <strong>[PROTOCOL_RULES]</strong><br />
          The Production Possibility Frontier operates under strict system constants.
          Violating these assumptions crashes the model.
        </p>
      </div>

      <div className="cards-grid">
        <div className="card">
          <div className="card-content">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaClipboardCheck /> Fixed Resources
            </h3>
            <p>
              The input parameters (Land, Labor, Capital) are constant.
              We cannot spawn new resources mid-simulation.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaCogs /> Fixed Technology
            </h3>
            <p>
              The tech level is locked. No upgrades or R&D breakthroughs occur during the analysis window.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaChartLine /> Full Employment
            </h3>
            <p>
              All available resources are being utilized at 100% efficiency.
              There is no idle capacity or unemployment.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaBan /> Two Goods Only
            </h3>
            <p>
              The economy is simplified to produce only two outputs (e.g., Guns vs Butter) to render a 2D graph.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PPCAssumptions;
