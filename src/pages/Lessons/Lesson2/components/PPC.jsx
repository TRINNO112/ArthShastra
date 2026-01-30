// PPC.jsx - The Kingdom's Frontier
import { FaChartLine, FaCheckCircle, FaUndoAlt, FaArrowRight, FaMapMarkedAlt, FaScroll, FaCompass } from 'react-icons/fa';
import PPCVisualizer from './PPCVisualizer';
import './components.css';
import '../../Lesson1/lesson1.css'; // Vintage Styles

function PPC() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson" style={{ background: '#2e7d32', color: '#fff', borderColor: '#1b5e20' }}> Territory Mapping </span>
        <h2 className="section-title-lesson" style={{ fontFamily: 'Cinzel, serif', color: '#fff' }}>The Kingdom's Frontier</h2>
        <p className="section-subtitle-lesson">
          The Royal Cartographers have mapped the limits of our production capabilities. Beyond this line lies the impossible.
        </p>
      </div>

      {/* THE MAP (Visualizer) */}
      <div className="content-card" style={{ padding: '5px', background: '#3e2723', border: '4px solid #d4af37', borderRadius: '10px', boxShadow: '0 20px 50px rgba(0,0,0,0.6)' }}>
        <div style={{ background: '#5d4037', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h3 style={{ fontFamily: 'Cinzel', color: '#d4af37', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaMapMarkedAlt /> The Surveyed Lands
          </h3>
          <span style={{ color: '#d7ccc8', fontSize: '0.8rem', fontFamily: 'monospace' }}>SCALE: 1:1000</span>
        </div>

        <div style={{ padding: '20px', background: '#212121' }}>
          <p className="intro-text" style={{ textAlign: 'center', marginBottom: '20px', color: '#e0e0e0' }}>
            "This Map (Curve) shows the maximum trade-off between <strong>Guns</strong> (Defense) and <strong>Butter</strong> (Civilian Goods)."
          </p>
          {/* Interactive Visualizer Component */}
          <PPCVisualizer />
        </div>
      </div>

      {/* Cartographer's Notes (Properties & Shifts) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '40px' }}>

        {/* Properties */}
        <div className="ancient-scroll" style={{ padding: '30px' }}>
          <h4 style={{ fontFamily: 'Cinzel', color: '#3e2723', borderBottom: '2px solid #3e2723', paddingBottom: '10px' }}>
            <FaCompass /> Cartographer's Observations
          </h4>
          <ul className="bullet-list ppc-properties-list" style={{ marginTop: '15px', color: '#1a0f0a' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Slopes Downwards:</strong> The land is finite. To build a fort (Gun), we must clear a farm (Butter).
            </li>
            <li>
              <strong>Concave Shape:</strong> The terrain is uneven. Not all land is equally good for farming or building. (MOC Increases).
            </li>
          </ul>
        </div>

        {/* Shifts */}
        <div className="ancient-scroll" style={{ padding: '30px' }}>
          <h4 style={{ fontFamily: 'Cinzel', color: '#1a237e', borderBottom: '2px solid #1a237e', paddingBottom: '10px' }}>
            <FaUndoAlt /> Changing Borders (Shifts)
          </h4>
          <ul className="bullet-list ppc-shifts-list" style={{ marginTop: '15px', color: '#1a0f0a' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong style={{ color: '#1b5e20' }}>Expansion (Right Shift):</strong> New lands discovered or better tools invented. The Kingdom grows!
            </li>
            <li>
              <strong style={{ color: '#b71c1c' }}>Contraction (Left Shift):</strong> Natural disaster or war destroys our resources. The Kingdom shrinks.
            </li>
          </ul>
        </div>
      </div>

      {/* Assumptions (Laws) */}
      <div className="highlight-card purple" style={{ marginTop: '40px', background: '#4a148c', border: '2px solid #ab47bc' }}>
        <div className="highlight-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <FaScroll size={24} color="#e1bee7" />
            <h3 style={{ fontFamily: 'Cinzel', margin: 0, color: '#e1bee7' }}>The Laws of the Territory (Assumptions)</h3>
          </div>
          <p style={{ fontFamily: 'Crimson Text', fontSize: '1.1rem', lineHeight: '1.8', color: '#f3e5f5' }}>
            1. The Kingdom's borders (Resources) are fixed.<br />
            2. Every subject (Resource) is working hard (Full Utilization).<br />
            3. Our crafting methods (Technology) do not change.<br />
            4. We only produce two things: Defense & Welfare.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PPC;
