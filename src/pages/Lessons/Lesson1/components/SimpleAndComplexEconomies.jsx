// Simple vs Complex Economies Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨

import { FaMapMarkedAlt, FaCompressArrowsAlt, FaExpandArrowsAlt, FaGlobeAmericas, FaExchangeAlt, FaArrowRight } from 'react-icons/fa';
import '../lesson1-davinci.css';

function SimpleAndComplexEconomies() {
  return (
    <section className="davinci-page">

      {/* HEADER */}
      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="sketch-title">The Evolution Maps</h2>
        <div className="sketch-subtitle">
          "From Village to Global Village"
        </div>
      </div>

      {/* SKETCH: THE EVOLUTION PATH */}
      <div className="sketch-box" style={{ background: '#fff', maxWidth: '900px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>

          {/* SIMPLE */}
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div className="sketch-avatar-frame" style={{ borderRadius: '10px', width: '100px', height: '100px', margin: '0 auto' }}>
              <FaCompressArrowsAlt size={40} color="#5d4037" />
            </div>
            <h3 style={{ fontFamily: 'Cinzel', marginTop: '10px', color: '#5d4037' }}>Simple Economy</h3>
            <div className="handwritten-note" style={{ fontSize: '1.5rem', transform: 'rotate(-2deg)' }}>"Survival Mode"</div>
          </div>

          {/* ARROW */}
          <div style={{ textAlign: 'center', flex: 0 }}>
            <FaArrowRight size={40} color="#2c2c2c" />
            <div style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>Evolution of Wants</div>
          </div>

          {/* COMPLEX */}
          <div style={{ textAlign: 'center', flex: 1 }}>
            <div className="sketch-avatar-frame" style={{ borderRadius: '10px', width: '100px', height: '100px', margin: '0 auto' }}>
              <FaExpandArrowsAlt size={40} color="#0d47a1" />
            </div>
            <h3 style={{ fontFamily: 'Cinzel', marginTop: '10px', color: '#0d47a1' }}>Complex Economy</h3>
            <div className="handwritten-note" style={{ fontSize: '1.5rem', transform: 'rotate(2deg)', color: '#0d47a1' }}>"Surplus Mode"</div>
          </div>

        </div>
      </div>

      {/* DETAILED MAPS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>

        {/* MAP A: SIMPLE */}
        <div className="sketch-portrait" style={{ background: '#efebe9', border: '1px solid #5d4037' }}>
          <div className="tape-strip"></div>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.5rem', borderBottom: '2px solid #5d4037', display: 'inline-block', marginBottom: '15px' }}>
            Map A: The Village
          </h4>

          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', lineHeight: '2' }}>
            <li><strong>Income:</strong> Low</li>
            <li><strong>Wants:</strong> Limited (Needs only)</li>
            <li><strong>Exchange:</strong> <span className="ink-highlight">Barter System</span></li>
            <li><strong>Dependence:</strong> Mutual Independence</li>
          </ul>

          <div className="verdict-box" style={{ marginTop: '20px', background: '#fff' }}>
            <FaExchangeAlt /> Goods for Goods
          </div>
        </div>

        {/* MAP B: COMPLEX */}
        <div className="sketch-portrait" style={{ background: '#e3f2fd', border: '1px solid #0d47a1' }}>
          <div className="tape-strip"></div>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.5rem', borderBottom: '2px solid #0d47a1', display: 'inline-block', marginBottom: '15px' }}>
            Map B: The Globe
          </h4>

          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', lineHeight: '2' }}>
            <li><strong>Income:</strong> High</li>
            <li><strong>Wants:</strong> Unlimited</li>
            <li><strong>Exchange:</strong> <span className="ink-highlight">Money & Credit</span></li>
            <li><strong>Dependence:</strong> High Interdependence</li>
          </ul>

          <div className="verdict-box" style={{ marginTop: '20px', background: '#fff' }}>
            <FaGlobeAmericas /> Global Trade
          </div>
        </div>

      </div>

      {/* THE LAW OF COMPLEXITY */}
      <div className="sketch-box" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'Caveat', fontSize: '2rem' }}>The Law of Complexity</h3>
        <p style={{ fontSize: '1.4rem', fontFamily: 'Cinzel', marginTop: '10px' }}>
          More Income = More Wants = More Dependence
        </p>
        <div className="handwritten-note" style={{ marginTop: '15px' }}>
          "The rich man needs the whole world; the poor man only needs his neighbor."
        </div>
      </div>

    </section>
  );
}

export default SimpleAndComplexEconomies;
