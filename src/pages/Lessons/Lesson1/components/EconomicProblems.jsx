// Economic Problems Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨

import { FaInfinity, FaBalanceScale, FaChartPie, FaIndustry, FaCogs, FaUsers, FaQuestionCircle } from 'react-icons/fa';
import '../lesson1-davinci.css';

function EconomicProblems() {
  return (
    <section className="davinci-page">

      {/* HEADER */}
      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 className="sketch-title">The Central Dilemma</h2>
        <div className="sketch-subtitle">
          "Unlimited Desires vs Limited Means"
        </div>
      </div>

      {/* 1. SCARCITY SCALE (The Core Problem) */}
      <div className="sketch-box">
        <div className="tape-strip"></div>
        <h3 style={{ fontFamily: 'Caveat', fontSize: '2.5rem', textAlign: 'center', color: '#c0392b', marginBottom: '30px' }}>
          The Curse of Scarcity
        </h3>

        <div className="diagram-area" style={{ border: 'none', flexDirection: 'column', gap: '5px' }}>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#0d47a1', marginBottom: '10px' }}><FaInfinity /></div>
              <div className="handwritten-note">Unlimited Wants</div>
            </div>

            <div style={{ fontSize: 'clamp(3rem, 6vw, 4rem)', color: '#5d4037', marginBottom: '20px' }}>
              <FaBalanceScale />
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#c0392b', marginBottom: '10px' }}><FaChartPie /></div>
              <div className="handwritten-note">Limited Resources</div>
            </div>
          </div>

          <div className="verdict-connector" style={{ height: '30px', width: '2px', background: '#5d4037', margin: '0 auto' }}></div>

          <div className="verdict-box" style={{ maxWidth: '400px', transform: 'rotate(-1deg)' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              Result: We must make a <span style={{ color: '#f39c12', textDecoration: 'underline' }}>CHOICE</span>.
            </p>
          </div>
        </div>
      </div>

      {/* 2. THE THREE QUESTIONS (Sketchbook Pages Splayed Out) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', margin: '50px auto', maxWidth: '1200px' }}>

        {/* PAGE 1: WHAT TO PRODUCE? */}
        <div className="sketch-box" style={{ flex: '1 1 300px', margin: '0', transform: 'rotate(-2deg)' }}>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.5rem', borderBottom: '2px solid #e67e22', display: 'inline-block' }}>
            I. What to Produce?
          </h4>
          <div className="handwritten-note" style={{ fontSize: '1.1rem', color: '#e67e22', marginBottom: '15px' }}>The Selection Problem</div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>
            <div style={{ textAlign: 'center' }}>
              <FaIndustry size={30} />
              <div>Guns</div>
            </div>
            <div style={{ fontFamily: 'Caveat', fontSize: '1.5rem' }}>vs</div>
            <div style={{ textAlign: 'center' }}>
              <FaChartPie size={30} />
              <div>Butter</div>
            </div>
          </div>

          <p style={{ fontSize: '1rem' }}>Should we build defenses or feed the people?</p>
        </div>

        {/* PAGE 2: HOW TO PRODUCE? */}
        <div className="sketch-box" style={{ flex: '1 1 300px', margin: '0', transform: 'rotate(1deg)', zIndex: '2' }}>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.5rem', borderBottom: '2px solid #27ae60', display: 'inline-block' }}>
            II. How to Produce?
          </h4>
          <div className="handwritten-note" style={{ fontSize: '1.1rem', color: '#27ae60', marginBottom: '15px' }}>The Technology Problem</div>

          <ul style={{ listStyle: 'none', padding: '0', fontSize: '1rem' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong><FaUsers color="#27ae60" /> Labor Intensive:</strong><br />
              More Jobs (India)
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong><FaCogs color="#27ae60" /> Capital Intensive:</strong><br />
              More Efficiency (USA)
            </li>
          </ul>
        </div>

        {/* PAGE 3: FOR WHOM? */}
        <div className="sketch-box" style={{ flex: '1 1 300px', margin: '0', transform: 'rotate(-1deg)' }}>
          <h4 style={{ fontFamily: 'Cinzel', fontSize: '1.5rem', borderBottom: '2px solid #8e44ad', display: 'inline-block' }}>
            III. For Whom?
          </h4>
          <div className="handwritten-note" style={{ fontSize: '1.1rem', color: '#8e44ad', marginBottom: '15px' }}>The Distribution Problem</div>

          <div className="verdict-box" style={{ background: '#f3e5f5', border: '1px dashed #8e44ad', padding: '10px' }}>
            <FaQuestionCircle color="#8e44ad" />
            <p style={{ margin: '5px 0' }}>"Who gets the cake?"</p>
          </div>
          <p style={{ fontSize: '1rem', marginTop: '10px' }}>
            Rich vs Poor? It depends on <strong>Purchasing Power</strong>.
          </p>
        </div>

      </div>

      {/* 3. INDIAN CONTEXT (Pinned Note) */}
      <div className="sketch-box" style={{ background: '#fff9c4', border: 'none', boxShadow: '2px 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontFamily: 'Caveat', textAlign: 'center', fontSize: '2rem' }}>Observation: The Indian Context</h3>
        <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          India chooses a <strong>Mixed Path</strong>. We use Labor Intensive methods for jobs (Manual Scavenging, Agriculture) but acquire Capital (Missiles, Metros) for defense and growth.
        </p>
      </div>

    </section>
  );
}

export default EconomicProblems;
