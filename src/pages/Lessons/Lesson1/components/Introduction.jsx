// Introduction Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨 (Hand-drawn, Intellectual, Organic)

import { FaBookOpen, FaFeatherAlt, FaHistory, FaGlobe, FaBalanceScale, FaChartLine, FaUniversity, FaScroll, FaUsers, FaIndustry, FaShoppingCart, FaShareAlt, FaLightbulb, FaPencilAlt } from 'react-icons/fa';
import '../lesson1-davinci.css';

function Introduction() {
  return (
    <section className="davinci-page">

      {/* HEADER: The Title Sketch */}
      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div style={{ display: 'inline-block', position: 'relative' }}>
          <FaPencilAlt size={30} style={{ position: 'absolute', top: '-20px', right: '-30px', color: '#5d4037', transform: 'rotate(15deg)' }} />
          <h2 className="sketch-title">Chapter I: Introduction</h2>
        </div>
        <br />
        <div className="sketch-subtitle">
          "The Foundation of All Wealth & Welfare"
        </div>
      </div>

      {/* 1. ETYMOLOGY SKETCH (The Equation) */}
      <div className="sketch-box">
        <div className="tape-strip"></div> {/* Visual Tape Effect */}

        <div className="sketch-card-header">
          <h3 style={{ fontFamily: 'Caveat', fontSize: '2.2rem', margin: 0 }}>The Origin of the Word</h3>
          <span className="handwritten-note">From the Greek 'Oikonomia'</span>
        </div>

        <div className="diagram-area" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: '#2c2c2c', margin: 0, textDecoration: 'underline' }}>Oikos</h4>
            <p className="handwritten-note" style={{ margin: 0, fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>Household</p>
          </div>

          <div className="math-symbol" style={{ fontSize: '1.5rem', margin: '0 5px' }}>+</div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: '#2c2c2c', margin: 0, textDecoration: 'underline' }}>Nomos</h4>
            <p className="handwritten-note" style={{ margin: 0, fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>Management</p>
          </div>

          <div className="math-symbol" style={{ fontSize: '1.5rem', margin: '0 5px' }}>=</div>

          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Caveat', fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', color: '#8e44ad', margin: 0 }}>Economics</h4>
          </div>
        </div>

        <div style={{ textAlign: 'center', fontSize: '1.1rem', marginTop: '20px' }}>
          <p>
            <span className="ink-highlight">Hypothesis:</span> A nation is just a large household.
            Both have <strong>limited funds</strong> and <strong>unlimited needs</strong>.
          </p>
        </div>
      </div>

      {/* 2. THE FOUR AGES (The Portrait Gallery) */}
      <div className="sketch-container" style={{ marginTop: '60px' }}>
        <h3 className="sketch-title" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>The Evolution of Thought</h3>

        <div className="sketch-grid">

          {/* Adam Smith */}
          <div className="sketch-portrait">
            <div className="sketch-avatar-frame">
              <FaHistory size={50} />
            </div>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>1. The Wealth Era</h4>
            <p className="handwritten-note" style={{ color: '#555' }}>Adam Smith (1776)</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
              "An enquiry into the nature and causes of the <strong>Wealth of Nations</strong>."
            </p>
            <div className="handwritten-note" style={{ color: '#c0392b', marginTop: '5px' }}>
              → Obsessed with production!
            </div>
          </div>

          {/* Alfred Marshall */}
          <div className="sketch-portrait">
            <div className="sketch-avatar-frame">
              <FaUsers size={50} />
            </div>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>2. The Welfare Era</h4>
            <p className="handwritten-note" style={{ color: '#555' }}>Alfred Marshall (1890)</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
              "A study of mankind in the ordinary business of life... attainment of <strong>material wellbeing</strong>."
            </p>
            <div className="handwritten-note" style={{ color: '#27ae60', marginTop: '5px' }}>
              → People over Money!
            </div>
          </div>

          {/* Lionel Robbins */}
          <div className="sketch-portrait">
            <div className="sketch-avatar-frame">
              <FaBalanceScale size={50} />
            </div>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>3. The Scarcity Era</h4>
            <p className="handwritten-note" style={{ color: '#555' }}>Lionel Robbins (1932)</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
              "Relationship between <strong>ends</strong> (wants) and <strong>scarce means</strong> (resources)."
            </p>
            <div className="handwritten-note" style={{ color: '#2980b9', marginTop: '5px' }}>
              → The Science of Choice.
            </div>
          </div>

          {/* Paul Samuelson */}
          <div className="sketch-portrait">
            <div className="sketch-avatar-frame">
              <FaChartLine size={50} />
            </div>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.4rem', fontWeight: 'bold' }}>4. The Growth Era</h4>
            <p className="handwritten-note" style={{ color: '#555' }}>Paul Samuelson (1948)</p>
            <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
              "How society chooses to produce and distribute... <strong>now and in the future</strong>."
            </p>
            <div className="handwritten-note" style={{ color: '#8e44ad', marginTop: '5px' }}>
              → Dynamic & Modern.
            </div>
          </div>

        </div>
      </div>

      {/* 3. NATURE OF ECONOMICS (The Scale Sketch) */}
      <div className="sketch-box" style={{ background: '#fcfcfc', borderStyle: 'dashed' }}>
        <h3 style={{ fontFamily: 'Caveat', textAlign: 'center', fontSize: '2rem' }}>Observation: Science or Art?</h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>

          <div className="verdict-box">
            <h4 style={{ color: '#c0392b' }}>"What Is"</h4>
            <p><strong>Positive Science</strong></p>
            <p style={{ fontSize: '0.9rem' }}>Based on facts & data.</p>
            <p className="handwritten-note">"Inflation is 5%"</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
            <FaBalanceScale size={30} style={{ color: '#7f8c8d' }} />
          </div>

          <div className="verdict-box">
            <h4 style={{ color: '#27ae60' }}>"What Ought To Be"</h4>
            <p><strong>Normative Science</strong></p>
            <p style={{ fontSize: '0.9rem' }}>Based on opinions & values.</p>
            <p className="handwritten-note">"Inflation should be lower"</p>
          </div>

        </div>
        <p style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'bold', fontFamily: 'Cinzel' }}>
          Conclusion: It is Both.
        </p>
      </div>

    </section>
  );
}
export default Introduction;
