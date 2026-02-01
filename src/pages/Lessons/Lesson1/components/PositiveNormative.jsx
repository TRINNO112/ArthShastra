// Positive vs Normative Economics Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨

import { FaGavel, FaFlask, FaCheckCircle, FaTimesCircle, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';
import '../lesson1-davinci.css';

function PositiveNormative() {
  return (
    <section className="davinci-page">

      {/* HEADER */}
      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="sketch-title">The Court of Reason</h2>
        <div className="sketch-subtitle">
          "Chapter III: Fact vs Value"
        </div>
      </div>

      {/* INTRO NOTE */}
      <div className="sketch-box" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '1.2rem' }}>
          We must separate <span className="ink-highlight">Objective Facts</span> (Science) from <span className="ink-highlight">Subjective Values</span> (Ethics).
        </p>
      </div>

      {/* THE VS SKETCH */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '30px' }}>

        {/* POSITIVE */}
        <div className="sketch-portrait" style={{ border: '2px solid #27ae60' }}>
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(3deg)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <FaFlask size={50} color="#27ae60" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#27ae60', marginTop: '10px' }}>Positive</h3>
            <div className="handwritten-note" style={{ color: '#27ae60' }}>"What Is"</div>
          </div>

          <ul style={{ textAlign: 'left', marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <li>✓ Based on <strong>Facts</strong></li>
            <li>✓ Can be <strong>Verified</strong></li>
            <li>✓ No Value Judgment</li>
          </ul>

          <div className="verdict-box" style={{ background: '#e8f5e9', marginTop: '20px' }}>
            <strong>Example:</strong><br />
            "India's inflation is 6%."
          </div>
        </div>

        {/* NORMATIVE */}
        <div className="sketch-portrait" style={{ border: '2px solid #8e44ad' }}>
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(-3deg)' }}></div>
          <div style={{ textAlign: 'center' }}>
            <FaHandHoldingHeart size={50} color="#8e44ad" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#8e44ad', marginTop: '10px' }}>Normative</h3>
            <div className="handwritten-note" style={{ color: '#8e44ad' }}>"What Ought To Be"</div>
          </div>

          <ul style={{ textAlign: 'left', marginTop: '20px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            <li>★ Based on <strong>Opinions</strong></li>
            <li>★ Cannot be Verified</li>
            <li>★ Prescriptive</li>
          </ul>

          <div className="verdict-box" style={{ background: '#f3e5f5', marginTop: '20px' }}>
            <strong>Example:</strong><br />
            "Inflation <em>should</em> be lower."
          </div>
        </div>

      </div>

      {/* THE GAVEL TEST */}
      <div className="sketch-box" style={{ marginTop: '50px', background: '#fff', border: '3px double #2c2c2c' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <FaGavel size={40} />
          <h3 style={{ fontFamily: 'Caveat', fontSize: '2.5rem', display: 'inline-block', marginLeft: '10px' }}>The Gavel Test</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px dashed #ccc', paddingBottom: '10px' }}>
            <FaCheckCircle color="#27ae60" size={24} />
            <div>
              <strong>"Higher education raises income."</strong><br />
              <span style={{ fontSize: '0.9rem', color: '#27ae60' }}>POSITIVE (Check the data)</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', paddingBottom: '10px' }}>
            <FaLightbulb color="#8e44ad" size={24} />
            <div>
              <strong>"Education should be free."</strong><br />
              <span style={{ fontSize: '0.9rem', color: '#8e44ad' }}>NORMATIVE (It's an ideal)</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default PositiveNormative;
