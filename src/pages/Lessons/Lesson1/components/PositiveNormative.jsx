// Positive vs Normative Economics Module - Economics and Economies (VK Ohri Grade 11)
import { FaBalanceScale, FaFlask, FaGavel, FaChartBar, FaNewspaper, FaLightbulb, FaCheckCircle, FaTimesCircle, FaQuoteLeft, FaGlobe, FaRupeeSign, FaIndustry, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import '../lesson1.css';

function PositiveNormative() {
  return (
    <section className="lesson-container-library">

      {/* HEADER: The Courtroom Entrance */}
      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <FaGavel size={40} color="#b71c1c" />
        </div>
        <h2 className="library-title" style={{ fontSize: '3rem' }}>Chapter III: Positive vs Normative</h2>
        <p className="library-subtitle">"The Court of Economic Reason"</p>
      </div>

      {/* INTRODUCTION: THE JUDGE'S OPENING STATEMENT */}
      <div className="ancient-scroll" style={{ maxWidth: '800px', margin: '0 auto 40px auto', background: '#fff8e1' }}>
        <div className="wax-seal" style={{ background: '#5d4037' }}>LAW</div>
        <p className="intro-text" style={{ fontSize: '1.2rem', textAlign: 'justify', fontFamily: 'Crimson Text' }}>
          <span className="drop-cap">E</span>conomic analysis stands on two pillars: the <span className="ink-text">Science of Facts</span> and the <span className="ink-text">Art of Values</span>.
          This distinction was first clarified by <strong>John Neville Keynes</strong>. In this court, we separate <em>"What Is"</em> from <em>"What Ought To Be"</em>.
        </p>
      </div>

      {/* DETAILED COMPARISON: THE EVIDENCE FILES */}
      <div className="judge-bench-container">

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>

          {/* FILE A: POSITIVE ECONOMICS */}
          <div className="evidence-file animate-fade-in" style={{ flex: '1 1 400px', transform: 'rotate(-2deg)' }}>
            <div style={{ borderBottom: '2px solid #5d4037', paddingBottom: '10px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaFlask size={24} color="#5d4037" />
              <h3 style={{ fontFamily: 'Special Elite', margin: 0 }}>Exhibit A: Positive Economics</h3>
            </div>

            <div className="verdict-stamp" style={{ color: '#2e7d32', borderColor: '#2e7d32', transform: 'rotate(-5deg)', marginBottom: '20px' }}>
              CONFIRMED FACT
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong>Definition:</strong> The branch dealing with <span style={{ fontWeight: 'bold', color: '#2e7d32' }}>objective analysis</span>. It describes economic behavior based on cause-and-effect.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.8)', padding: '15px', border: '1px solid #d7ccc8', marginTop: '15px' }}>
              <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem' }}>Characteristics:</h4>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
                <li>Based on <strong>Facts & Data</strong></li>
                <li>Can be <strong>Verified/Tested</strong></li>
                <li>Describes <strong>"What Is"</strong></li>
                <li>No Personal Opinions</li>
              </ul>
            </div>

            <div className="typewriter-box" style={{ marginTop: '15px' }}>
              "India's inflation is 6.7%." <br />
              <small>(This can be checked. It is either true or false.)</small>
            </div>
          </div>

          {/* FILE B: NORMATIVE ECONOMICS */}
          <div className="evidence-file animate-fade-in" style={{ flex: '1 1 400px', transform: 'rotate(2deg)', background: '#f3e5f5' }}>
            <div style={{ borderBottom: '2px solid #4a148c', paddingBottom: '10px', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaGavel size={24} color="#4a148c" />
              <h3 style={{ fontFamily: 'Special Elite', margin: 0, color: '#4a148c' }}>Exhibit B: Normative Economics</h3>
            </div>

            <div className="verdict-stamp" style={{ color: '#4a148c', borderColor: '#4a148c', transform: 'rotate(5deg)', marginBottom: '20px' }}>
              VALUE JUDGMENT
            </div>

            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              <strong>Definition:</strong> The branch dealing with <span style={{ fontWeight: 'bold', color: '#4a148c' }}>opinions and values</span>. It prescribes what policies <em>should</em> be adopted.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.5)', padding: '15px', border: '1px solid #ce93d8', marginTop: '15px' }}>
              <h4 style={{ fontFamily: 'Cinzel', fontSize: '0.9rem', color: '#4a148c' }}>Characteristics:</h4>
              <ul style={{ listStyleType: 'square', paddingLeft: '20px', marginTop: '5px' }}>
                <li>Based on <strong>Ethics & Beliefs</strong></li>
                <li>Cannot be <strong>Verified</strong></li>
                <li>Prescribes <strong>"What Ought To Be"</strong></li>
                <li>Subjective Nature</li>
              </ul>
            </div>

            <div className="typewriter-box" style={{ marginTop: '15px', background: '#e1bee7' }}>
              "Inflation should be lower." <br />
              <small>(This is an opinion. It cannot be 'proven'.)</small>
            </div>
          </div>

        </div>
      </div>

      {/* HOW TO IDENTIFY (The Golden Rule) */}
      <div className="portrait-frame frame-wood" style={{ maxWidth: '800px', margin: '40px auto', background: '#fff' }}>
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', borderBottom: '1px solid #5d4037', paddingBottom: '10px' }}>The Golden Rule of Identification</h3>
        <div style={{ display: 'flex', gap: '20px', padding: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, textAlign: 'center', borderRight: '1px dashed #5d4037' }}>
            <FaCheckCircle size={30} color="#2e7d32" style={{ marginBottom: '10px' }} />
            <p><strong>Positive:</strong> Look for "IS", "WAS", "WILL". <br /> Can you test it?</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <FaHandHoldingHeart size={30} color="#4a148c" style={{ marginBottom: '10px' }} />
            <p><strong>Normative:</strong> Look for "SHOULD", "OUGHT", "BETTER". <br /> Is it an opinion?</p>
          </div>
        </div>
      </div>

      {/* REAL WORLD CASES: INDIAN CONTEXT */}
      <div className="open-book-card">
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', color: '#b71c1c', marginBottom: '20px' }}>Case Studies: Indian Economy</h3>

        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text' }}>
            <thead>
              <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #5d4037' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Issue</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#2e7d32' }}>Positive Statement (Fact)</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#4a148c' }}>Normative Statement (Opinion)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>GST</td>
                <td style={{ padding: '15px' }}>GST collection was ₹1.65 lakh crore in Oct 2023.</td>
                <td style={{ padding: '15px' }}>GST rates should be reduced to help the poor.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Unemployment</td>
                <td style={{ padding: '15px' }}>Unemployment rate is 7.4%.</td>
                <td style={{ padding: '15px' }}>Govt ought to create more jobs.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>Inequality</td>
                <td style={{ padding: '15px' }}>Top 1% hold 40% of wealth.</td>
                <td style={{ padding: '15px' }}>Wealth should be redistributed fairly.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* PRACTICE: THE GAVEL TEST */}
      <div className="kingdom-card kingdom-mixed" style={{ marginTop: '40px', background: '#eceff1', border: '2px solid #5d4037' }}>
        <div className="kingdom-header" style={{ background: '#546e7a' }}>
          <FaGavel /> <h3>The Gavel Test: You Be The Judge</h3>
        </div>
        <div className="kingdom-content">
          <p style={{ marginBottom: '15px' }}>Identify which statement is which:</p>

          <div style={{ marginBottom: '10px', padding: '10px', background: '#fff', borderLeft: '4px solid #2e7d32' }}>
            <strong>"Higher education leads to higher income."</strong> <br />
            <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>VERDICT: POSITIVE</span> (We can check the data.)
          </div>

          <div style={{ marginBottom: '10px', padding: '10px', background: '#fff', borderLeft: '4px solid #4a148c' }}>
            <strong>"Govt should provide free education."</strong> <br />
            <span style={{ color: '#4a148c', fontWeight: 'bold' }}>VERDICT: NORMATIVE</span> (This is a value judgment.)
          </div>
        </div>
      </div>

    </section>
  );
}

export default PositiveNormative;
