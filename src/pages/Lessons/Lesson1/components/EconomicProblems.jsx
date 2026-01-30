// Economic Problems Module - Economics and Economies (VK Ohri Grade 11)
import { FaQuestion, FaCogs, FaUsers, FaInfinity, FaExclamationTriangle, FaChartPie, FaIndustry, FaTractor, FaGlobe, FaBalanceScale } from 'react-icons/fa';
import '../lesson1.css';

function EconomicProblems() {
  return (
    <section className="lesson-container-library">

      {/* HEADER */}
      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none', marginBottom: '0' }}>
        <h2 className="library-title" style={{ fontSize: '3rem' }}>The Central Dilemma</h2>
        <p className="library-subtitle">"Unlimited Desires vs Limited Means"</p>
      </div>

      {/* 1. SCARCITY SCALE (The Core Problem) */}
      <div className="open-book-card" style={{ borderLeft: 'none', borderTop: '10px solid #4e342e', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#b71c1c', marginBottom: '20px' }}>The Curse of Scarcity</h3>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <FaInfinity size={50} color="#0d47a1" />
            <h4 style={{ fontFamily: 'Cinzel', marginTop: '10px' }}>Unlimited Wants</h4>
          </div>

          <FaBalanceScale size={60} color="#5d4037" className="animate-quill" />

          <div style={{ textAlign: 'center' }}>
            <FaChartPie size={50} color="#b71c1c" />
            <h4 style={{ fontFamily: 'Cinzel', marginTop: '10px' }}>Limited Resources</h4>
          </div>
        </div>

        <p style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '1.1rem' }}>
          Because we cannot have everything, we must make a <span style={{ color: '#c6a700', fontWeight: 'bold', textTransform: 'uppercase' }}>Choice</span>.
        </p>
      </div>

      {/* 2. THE TRIPTYCH SCROLLS (The Three Questions) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>

        {/* SCROLL 1: WHAT TO PRODUCE? */}
        <div className="portrait-frame" style={{ flex: '1 1 300px', background: '#fff3e0', border: '5px double #e65100' }}>
          <div style={{ textAlign: 'center', borderBottom: '1px solid #e65100', paddingBottom: '10px', marginBottom: '15px' }}>
            <div style={{ fontSize: '2.5rem', color: '#e65100', fontFamily: 'Cinzel' }}>I</div>
            <h4 style={{ fontFamily: 'Cinzel', fontWeight: 'bold' }}>What to Produce?</h4>
          </div>
          <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '15px' }}>The Problem of Selection</p>

          <div className="typewriter-box" style={{ background: '#ffeabb' }}>
            <strong>Guns vs Butter?</strong><br />
            Should we build more defenses or feed more people?
          </div>
          <div className="typewriter-box" style={{ background: '#ffeabb' }}>
            <strong>Rice vs Wheat?</strong><br />
            Which crop offers better returns?
          </div>
        </div>

        {/* SCROLL 2: HOW TO PRODUCE? */}
        <div className="portrait-frame" style={{ flex: '1 1 300px', background: '#e0f2f1', border: '5px double #00695c' }}>
          <div style={{ textAlign: 'center', borderBottom: '1px solid #00695c', paddingBottom: '10px', marginBottom: '15px' }}>
            <div style={{ fontSize: '2.5rem', color: '#00695c', fontFamily: 'Cinzel' }}>II</div>
            <h4 style={{ fontFamily: 'Cinzel', fontWeight: 'bold' }}>How to Produce?</h4>
          </div>
          <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '15px' }}>The Problem of Technology</p>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <div style={{ flex: 1, textAlign: 'center', padding: '10px', border: '1px dashed #00695c' }}>
              <FaUsers size={20} />
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Labor Intensive</div>
              <div style={{ fontSize: '0.7rem' }}>(More Jobs)</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: '10px', border: '1px dashed #00695c' }}>
              <FaCogs size={20} />
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Capital Intensive</div>
              <div style={{ fontSize: '0.7rem' }}>(More Efficiency)</div>
            </div>
          </div>
        </div>

        {/* SCROLL 3: FOR WHOM TO PRODUCE? */}
        <div className="portrait-frame" style={{ flex: '1 1 300px', background: '#f3e5f5', border: '5px double #4a148c' }}>
          <div style={{ textAlign: 'center', borderBottom: '1px solid #4a148c', paddingBottom: '10px', marginBottom: '15px' }}>
            <div style={{ fontSize: '2.5rem', color: '#4a148c', fontFamily: 'Cinzel' }}>III</div>
            <h4 style={{ fontFamily: 'Cinzel', fontWeight: 'bold' }}>For Whom?</h4>
          </div>
          <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '15px' }}>The Problem of Distribution</p>

          <div className="typewriter-box" style={{ background: '#e1bee7' }}>
            <strong>Rich vs Poor?</strong><br />
            Luxury cars for the few, or buses for the many?
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '10px', textAlign: 'justify' }}>
            Who gets the final slice of the cake? It depends on purchasing power in a capitalist economy.
          </p>
        </div>

      </div>

      {/* 3. REAL WORLD SCENARIOS (Stacked Papers) */}
      <div className="ancient-scroll">
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', marginBottom: '20px' }}>In The Kingdom of India</h3>

        <div style={{ borderLeft: '4px solid #b71c1c', paddingLeft: '15px', marginBottom: '20px' }}>
          <h4 style={{ fontFamily: 'Cinzel', color: '#b71c1c' }}>Defense vs Development</h4>
          <p>India spends billions on defense. That same money could build thousands of schools. This is the tragic reality of <strong>What to Produce</strong>.</p>
        </div>

        <div style={{ borderLeft: '4px solid #0d47a1', paddingLeft: '15px', marginBottom: '20px' }}>
          <h4 style={{ fontFamily: 'Cinzel', color: '#0d47a1' }}>Manual Scavenging vs Machines</h4>
          <p>Why do we still have manual cleaning? Because labor is cheap. Adopting machines (Capital Intensive) is expensive but necessary for human dignity. This is <strong>How to Produce</strong>.</p>
        </div>

      </div>

    </section>
  );
}

export default EconomicProblems;
