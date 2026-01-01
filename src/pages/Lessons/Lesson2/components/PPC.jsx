// PPC.jsx - Production Possibility Curve
import { FaChartLine, FaCheckCircle, FaUndoAlt, FaArrowRight } from 'react-icons/fa';
import PPCVisualizer from './PPCVisualizer';

function PPC() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Visual Learning</span>
        <h2 className="section-title-lesson">Production Possibility Curve</h2>
        <p className="section-subtitle-lesson">
          A graphical representation of possible combinations of two goods that can be produced with given resources and technology.
        </p>
      </div>

      <div className="content-card">
        <h3 className="card-title">
          <FaChartLine className="title-icon gold" />
          The PPC Graph
        </h3>
        <p className="intro-text">
          Explore how resources are allocated between two goods (e.g., Wheat and Guns).
          Understand the <strong>Transformation Curve</strong> through this interactive visualizer.
        </p>

        {/* Interactive Visualizer Component */}
        <PPCVisualizer />
      </div>

      <div className="feature-grid">
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaCheckCircle />
          </div>
          <h4>Properties of PPC</h4>
          <ul className="bullet-list" style={{ fontSize: '0.85rem' }}>
            <li><strong>Slopes Downwards:</strong> To produce more of one good, we must sacrifice some of the other.</li>
            <li><strong>Concave to Origin:</strong> Due to increasing Marginal Opportunity Cost (MOC).</li>
          </ul>
        </div>

        <div className="feature-item">
          <div className="feature-icon cyan">
            <FaUndoAlt />
          </div>
          <h4>Shifts in PPC</h4>
          <ul className="bullet-list" style={{ fontSize: '0.85rem' }}>
            <li><strong>Rightward Shift:</strong> Increase in resources or improved technology.</li>
            <li><strong>Leftward Shift:</strong> Decrease in resources or degradation of technology.</li>
          </ul>
        </div>
      </div>

      <div className="highlight-card purple">
        <div className="highlight-content">
          <h3>PPC Assumptions</h3>
          <p>
            1. Resources are fixed but can be transferred.<br />
            2. Resources are fully and efficiently utilized.<br />
            3. Technique of production remains constant.<br />
            4. Only two goods are considered.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PPC;
