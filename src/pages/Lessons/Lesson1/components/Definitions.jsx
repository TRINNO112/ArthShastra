// Definitions Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨

import { FaUser, FaHistory, FaBalanceScale, FaChartLine } from 'react-icons/fa';
import '../lesson1-davinci.css';

function Definitions() {
  return (
    <section className="davinci-page">

      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="sketch-title">The Gallery of Minds</h2>
        <div className="sketch-subtitle">
          "Four Eras, Four Perspectives"
        </div>
      </div>

      <div className="sketch-grid">

        {/* DEFINITION 1: ADAM SMITH (WEALTH) */}
        <div className="sketch-portrait">
          <div className="tape-strip"></div>
          <div className="sketch-avatar-frame">
            <FaHistory size={50} />
          </div>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>1. The Wealth Definition</h4>
          <div className="handwritten-note" style={{ color: '#555', marginBottom: '10px' }}>Adam Smith (1776)</div>

          <div className="verdict-box" style={{ margin: '0', background: '#fff' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Economics is the science of <strong>wealth</strong>."
            </p>
          </div>

          <p style={{ marginTop: '15px', fontSize: '1rem', lineHeight: '1.5' }}>
            Just as a miser counts his gold, Smith focused on production. He called it the 'Queen of Social Sciences'.
          </p>

          <div className="handwritten-note" style={{ color: '#c0392b', marginTop: '10px', transform: 'rotate(-1deg)' }}>
            ⚠ Criticism: Too materialistic! Ignoring human welfare.
          </div>
        </div>

        {/* DEFINITION 2: ALFRED MARSHALL (WELFARE) */}
        <div className="sketch-portrait">
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(2deg)' }}></div>
          <div className="sketch-avatar-frame">
            <FaUser size={50} />
          </div>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>2. The Welfare Definition</h4>
          <div className="handwritten-note" style={{ color: '#555', marginBottom: '10px' }}>Alfred Marshall (1890)</div>

          <div className="verdict-box" style={{ margin: '0', background: '#fff' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Study of mankind in the ordinary business of life."
            </p>
          </div>

          <p style={{ marginTop: '15px', fontSize: '1rem', lineHeight: '1.5' }}>
            Marshall humanized the subject. Wealth is just the *means*, but <strong>Human Welfare</strong> is the *end*.
          </p>

          <div className="handwritten-note" style={{ color: '#27ae60', marginTop: '10px', transform: 'rotate(1deg)' }}>
            ✓ Man is more important than Money.
          </div>
        </div>

        {/* DEFINITION 3: LIONEL ROBBINS (SCARCITY) */}
        <div className="sketch-portrait">
          <div className="tape-strip"></div>
          <div className="sketch-avatar-frame">
            <FaBalanceScale size={50} />
          </div>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>3. The Scarcity Definition</h4>
          <div className="handwritten-note" style={{ color: '#555', marginBottom: '10px' }}>Lionel Robbins (1932)</div>

          <div className="verdict-box" style={{ margin: '0', background: '#fff' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "Relationship between <strong>ends</strong> (wants) and scarce <strong>means</strong>."
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' }}>
            <div style={{ border: '1px dashed #5d4037', padding: '5px' }}>
              <strong>Wants</strong><br /><span style={{ fontSize: '0.9rem' }}>Unlimited</span>
            </div>
            <div style={{ border: '1px dashed #5d4037', padding: '5px' }}>
              <strong>Means</strong><br /><span style={{ fontSize: '0.9rem' }}>Scarce</span>
            </div>
          </div>

          <div className="handwritten-note" style={{ color: '#2980b9', marginTop: '10px' }}>
            ★ The Universal Problem of Choice.
          </div>
        </div>

        {/* DEFINITION 4: SAMUELSON (GROWTH) */}
        <div className="sketch-portrait">
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(-2deg)' }}></div>
          <div className="sketch-avatar-frame">
            <FaChartLine size={50} />
          </div>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>4. The Growth Definition</h4>
          <div className="handwritten-note" style={{ color: '#555', marginBottom: '10px' }}>Paul Samuelson (1948)</div>

          <div className="verdict-box" style={{ margin: '0', background: '#fff' }}>
            <p style={{ fontStyle: 'italic', fontSize: '1.1rem' }}>
              "To produce commodities <strong>over time</strong> and distribute them."
            </p>
          </div>

          <p style={{ marginTop: '15px', fontSize: '1rem', lineHeight: '1.5' }}>
            The modern master. He added the <strong>Time Dimension</strong>. It's not just allocation today, but growth for tomorrow.
          </p>

          <div className="handwritten-note" style={{ color: '#8e44ad', marginTop: '10px' }}>
            ⚡ Dynamic & Future-oriented.
          </div>
        </div>

      </div>

    </section>
  );
}

export default Definitions;
