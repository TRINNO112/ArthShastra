// CentralProblems.jsx - The Royal Strategy Room
import { FaBoxOpen, FaCogs, FaUsers, FaLightbulb, FaIndustry, FaShoppingCart, FaBalanceScale, FaChartLine, FaHandHoldingUsd, FaGlobe, FaScroll, FaDraftingCompass, FaBook } from 'react-icons/fa';
import './components.css';
import '../../Lesson1/lesson1.css'; // Importing Vintage Styles (Scrolls, Ink, Parchment)

function CentralProblems() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson" style={{ background: '#d4af37', color: '#000', borderColor: '#8a6d3b' }}> The Strategy Room </span>
        <h2 className="section-title-lesson" style={{ fontFamily: 'Cinzel, serif', color: '#fff' }}>The Kingdom's Dilemma</h2>
        <p className="section-subtitle-lesson">
          Heavy is the head that wears the crown. Every ruler must answer three questions to ensure the survival of the realm.
        </p>
      </div>

      {/* INTRO: The Scarcity Context */}
      <div className="content-card" style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid #d4af37', color: '#e0e0e0' }}>
        <p className="intro-text" style={{ fontSize: '1.1rem', textAlign: 'center', fontStyle: 'italic' }}>
          "My Lord, the treasury is limited, but the people's wants are endless. We cannot build everything. We must choose."
        </p>
        <div style={{ textAlign: 'center', marginTop: '15px', color: '#ffd700', fontWeight: 'bold', letterSpacing: '1px' }}>
          THE PROBLEM OF SCARCITY
        </div>
      </div>

      {/* PROBLEM 1: WHAT TO PRODUCE (The Royal Decree) */}
      <div className="ancient-scroll" style={{ marginTop: '40px', maxWidth: '100%', padding: '40px 60px' }}>
        <div style={{ textAlign: 'center', borderBottom: '2px solid #5d4037', paddingBottom: '20px', marginBottom: '20px' }}>
          <FaScroll size={40} color="#3e2723" />
          <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#3e2723', margin: '10px 0' }}>The Royal Decree</h3>
          <div style={{ color: '#1a0f0a', fontWeight: 'bold', letterSpacing: '2px' }}>PROBLEM I: ALLOCATION</div>
        </div>

        <p style={{ fontSize: '1.2rem', color: '#1a0f0a', textAlign: 'justify', fontFamily: 'Crimson Text' }}>
          The Council awaits your command. Our resources (iron, wood, gold) are finite. We must decide the <strong>Composition of Output</strong>.
        </p>

        <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, background: '#efebe9', padding: '20px', border: '1px dashed #5d4037', borderRadius: '5px' }}>
            <h4 style={{ color: '#b71c1c', fontFamily: 'Cinzel' }}><FaIndustry /> War Goods (Guns)</h4>
            <p style={{ color: '#1a0f0a' }}>Shall we forge swords, shields, and catapults to defend the borders?</p>
            <div style={{ fontSize: '0.9rem', color: '#5d4037', marginTop: '10px' }}>Focus: <strong>Defense & Capital</strong></div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: '#3e2723', color: '#fff', padding: '5px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>OR</div>
          </div>

          <div style={{ flex: 1, background: '#efebe9', padding: '20px', border: '1px dashed #5d4037', borderRadius: '5px' }}>
            <h4 style={{ color: '#2e7d32', fontFamily: 'Cinzel' }}><FaShoppingCart /> Civil Goods (Butter)</h4>
            <p style={{ color: '#1a0f0a' }}>Shall we harvest grain, weave silk, and build homes for the people?</p>
            <div style={{ fontSize: '0.9rem', color: '#5d4037', marginTop: '10px' }}>Focus: <strong>Welfare & Consumption</strong></div>
          </div>
        </div>

        <div style={{ marginTop: '25px', padding: '15px', background: '#d7ccc8', borderLeft: '4px solid #3e2723', color: '#1a0f0a', fontStyle: 'italic' }}>
          <strong>The Cost of Choice:</strong> "To build the fort, we must abandon the farm." (Opportunity Cost)
        </div>
      </div>

      {/* PROBLEM 2: HOW TO PRODUCE (The Guild's Blueprint) */}
      <div className="content-card" style={{ marginTop: '40px', background: '#1a237e', border: '4px solid #fff', padding: '0', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <div style={{ background: '#0d47a1', padding: '15px', borderBottom: '2px solid #fff', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FaDraftingCompass size={30} color="#fff" />
          <div>
            <h3 style={{ fontFamily: 'monospace', color: '#fff', margin: 0, textTransform: 'uppercase' }}>The Guild's Blueprint</h3>
            <span style={{ color: '#90caf9', fontSize: '0.8rem', fontFamily: 'monospace' }}>TECHNIQUE SPECIFICATION: PROBLEM II</span>
          </div>
        </div>

        <div style={{
          padding: '30px', background: `
            linear-gradient(rgba(26, 35, 126, 0.9), rgba(26, 35, 126, 0.9)),
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent)
        `, backgroundSize: '50px 50px', color: '#fff', fontFamily: 'monospace'
        }}>

          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Project Selected. Now, by what means shall we execute?
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {/* Method A */}
            <div style={{ border: '2px solid #fff', padding: '15px' }}>
              <h4 style={{ color: '#64b5f6', borderBottom: '1px solid #64b5f6', paddingBottom: '5px' }}>METHOD A: LABOR INTENSIVE (LIT)</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', lineHeight: '1.8' }}>
                <li>[+] Employment Generation</li>
                <li>[-] Lower Efficiency</li>
                <li><FaUsers /> Input: <strong>Human Hands</strong></li>
                <li>Location: Villages</li>
              </ul>
            </div>

            {/* Method B */}
            <div style={{ border: '2px solid #fff', padding: '15px' }}>
              <h4 style={{ color: '#64b5f6', borderBottom: '1px solid #64b5f6', paddingBottom: '5px' }}>METHOD B: CAPITAL INTENSIVE (CIT)</h4>
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', lineHeight: '1.8' }}>
                <li>[+] High Efficiency</li>
                <li>[-] Unemployment</li>
                <li><FaCogs /> Input: <strong>Machines</strong></li>
                <li>Location: Factories</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px dashed #fff', paddingTop: '15px', color: '#90caf9' }}>
            ERROR CHECK: India uses Mixed Method (LIT for jobs, CIT for growth).
          </div>
        </div>
      </div>

      {/* PROBLEM 3: FOR WHOM TO PRODUCE (The Treasury Ledger) */}
      <div className="content-card" style={{ marginTop: '40px', background: '#3e2723', border: '1px solid #d7ccc8', padding: '0', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <div style={{ background: '#5d4037', padding: '20px', borderBottom: '5px solid #d4af37', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          <FaBook size={30} color="#d4af37" />
          <h3 style={{ fontFamily: 'Crimson Text', color: '#d4af37', fontSize: '1.8rem', margin: 0 }}>The Treasury Ledger</h3>
        </div>

        <div style={{ padding: '30px', background: '#fff8e1 ' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px', color: '#3e2723', fontStyle: 'italic', fontSize: '1.1rem' }}>
            "The harvest is in. Who shall feast, and who shall fast?"
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text', color: '#1a0f0a' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #3e2723' }}>
                <th style={{ textAlign: 'left', padding: '10px', color: '#1a0f0a' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '10px', color: '#1a0f0a' }}>Principle</th>
                <th style={{ textAlign: 'left', padding: '10px', color: '#1a0f0a' }}>Consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#ffe0b2' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>The Wealthy (Elite)</td>
                <td style={{ padding: '10px' }}>Purchasing Power</td>
                <td style={{ padding: '10px' }}>Luxury Goods Produced</td>
              </tr>
              <tr style={{ background: '#cfd8dc' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>The Commoner (Poor)</td>
                <td style={{ padding: '10px' }}>Social Need</td>
                <td style={{ padding: '10px' }}>Basic Goods Needed</td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: '25px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <FaBalanceScale size={30} color="#b71c1c" />
              <div style={{ fontWeight: 'bold', color: '#b71c1c', marginTop: '5px' }}>The Dilemma</div>
              <div style={{ fontSize: '0.9rem', color: '#3e2723' }}>Equity vs Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      <div className="highlight-card gold cp-takeaway-card">
        <div className="highlight-icon">
          <FaLightbulb />
        </div>
        <div className="highlight-content">
          <h3 className="cp-takeaway-heading">🎯 Key Takeaways</h3>
          <ul className="cp-takeaway-list">
            <li><strong>What to produce</strong> deals with <strong>allocation of resources</strong> - deciding the composition of output</li>
            <li><strong>How to produce</strong> deals with <strong>efficiency</strong> - choosing the best technique of production</li>
            <li><strong>For whom to produce</strong> deals with <strong>equity/fairness</strong> - distributing output among people</li>
          </ul>
          <p className="cp-takeaway-text">
            These three problems are <strong>interrelated</strong>. The answer to one affects the others. For example, if we choose
            capital-intensive technique (How), it may lead to unemployment, affecting income distribution (For Whom), which in turn
            affects demand and thus what to produce (What). Understanding these connections is crucial for economic analysis.
          </p>
        </div>
      </div>

      <div className="highlight-card purple cp-remember-card" style={{ marginTop: '40px' }}>
        <div className="highlight-content">
          <h3 className="cp-remember-heading">💡 The King's Conclusion</h3>
          <p className="cp-remember-text">
            All economies (Kingdoms) face these problems.
            <br />In <strong>Capitalism</strong>, the Market decides.
            <br />In <strong>Socialism</strong>, the King (Planner) decides.
            <br />In <strong>Mixed</strong>, they rule together.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CentralProblems;
