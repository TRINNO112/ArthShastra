// Introduction Module - Economics and Economies (VK Ohri Grade 11)
import { FaBookOpen, FaFeatherAlt, FaHistory, FaGlobe, FaBalanceScale, FaChartLine, FaUniversity, FaScroll, FaUsers, FaIndustry, FaShoppingCart, FaShareAlt, FaLightbulb } from 'react-icons/fa';
import '../lesson1.css';

function Introduction() {
  return (
    <section className="lesson-container-library">

      {/* HEADER: Entrance to the Library */}
      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <FaBookOpen size={50} color="#c6a700" />
        </div>
        <h2 className="library-title" style={{ fontSize: '2.7rem', color: '#1a0f0a' }}>Chapter I: Introduction</h2>
        <p className="library-subtitle" style={{ color: '#3e2723' }}> "The Foundation of All Wealth & Welfare" </p>
      </div>

      {/* 1. ETYMOLOGY SCROLL */}
      <div className="ancient-scroll" style={{ maxWidth: '800px', margin: '0 auto 40px auto' }}>
        <div style={{ textAlign: 'center', borderBottom: '1px solid #5d4037', paddingBottom: '10px', marginBottom: '20px' }}>
          <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#3e2723', margin: 0 }}>The Origin</h3>
          <span style={{ fontFamily: 'Crimson Text', fontStyle: 'italic' }}>From the Greek 'Oikonomia'</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#0d47a1', margin: 0 }}>Oikos</h4>
            <p style={{ margin: 0, fontStyle: 'italic' }}>Household</p>
          </div>
          <div style={{ fontSize: '2rem', color: '#8d6e63' }}>+</div>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#0d47a1', margin: 0 }}>Nomos</h4>
            <p style={{ margin: 0, fontStyle: 'italic' }}>Management</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1rem', color: '#1a0f0a' }}>
          <p>Just as a household has limited funds and unlimited needs, so does a nation. <br /><strong>Economics</strong> is the art of managing these finite resources.</p>
        </div>
      </div>

      {/* 2. THE FOUR AGES OF DEFINITIONS */}
      <div className="content-card" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <h3 className="library-title" style={{ fontSize: '2.2rem', marginBottom: '30px', borderBottom: '2px solid #c6a700', display: 'inline-block' }}>The Four Ages of Economics</h3>

        <div className="economist-grid">

          {/* Adam Smith - Wealth */}
          <div className="portrait-frame frame-gold">
            <div className="economist-cameo" style={{ background: '#fff8e1', border: '3px solid #fbc02d' }}>
              <FaHistory size={40} color="#fbc02d" />
            </div>
            <h4 style={{ textAlign: 'center', fontFamily: 'Cinzel', fontSize: '1.4rem', color: '#1a0f0a' }}>1. Wealth Definition</h4>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555', marginBottom: '10px' }}>Adam Smith (1776)</p>
            <p className="intro-text" style={{ fontSize: '1rem' }}>
              "Economics is an enquiry into the nature and causes of the <strong>Wealth of Nations</strong>."
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#b71c1c' }}>
              <strong>Focus:</strong> Production & Growth of Wealth. <br />
              <strong>Criticism:</strong> Ignored human welfare.
            </div>
          </div>

          {/* Alfred Marshall - Welfare */}
          <div className="portrait-frame frame-wood">
            <div className="economist-cameo" style={{ background: '#efebe9', border: '3px solid #5d4037' }}>
              <FaUsers size={40} color="#5d4037" />
            </div>
            <h4 style={{ textAlign: 'center', fontFamily: 'Cinzel', fontSize: '1.4rem', color: '#1a0f0a' }}>2. Welfare Definition</h4>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555', marginBottom: '10px' }}>Alfred Marshall (1890)</p>
            <p className="intro-text" style={{ fontSize: '1rem' }}>
              "Economics is a study of mankind in the ordinary business of life; it examines that part... connected with the attainment of <strong>material requisites of wellbeing</strong>."
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#2e7d32' }}>
              <strong>Focus:</strong> Human Welfare &gt; Wealth.
            </div>
          </div>

          {/* Lionel Robbins - Scarcity */}
          <div className="portrait-frame frame-iron">
            <div className="economist-cameo" style={{ background: '#eceff1', border: '3px solid #455a64' }}>
              <FaBalanceScale size={40} color="#455a64" />
            </div>
            <h4 style={{ textAlign: 'center', fontFamily: 'Cinzel', fontSize: '1.4rem', color: '#1a0f0a' }}>3. Scarcity Definition</h4>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555', marginBottom: '10px' }}>Lionel Robbins (1932)</p>
            <p className="intro-text" style={{ fontSize: '1rem' }}>
              "Economics is the science which studies human behavior as a relationship between <strong>ends</strong> (wants) and <strong>scarce means</strong> (resources) which have alternative uses."
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#0d47a1' }}>
              <strong>Focus:</strong> Choice making under scarcity.
            </div>
          </div>

          {/* Paul Samuelson - Growth */}
          <div className="portrait-frame" style={{ borderColor: '#1a237e' }}>
            <div className="economist-cameo" style={{ background: '#e8eaf6', border: '3px solid #1a237e' }}>
              <FaChartLine size={40} color="#1a237e" />
            </div>
            <h4 style={{ textAlign: 'center', fontFamily: 'Cinzel', fontSize: '1.4rem', color: '#1a0f0a' }}>4. Growth Definition</h4>
            <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#555', marginBottom: '10px' }}>Paul Samuelson (1948)</p>
            <p className="intro-text" style={{ fontSize: '1rem' }}>
              "Economics is the study of how men and society choose... to produce various commodities over time and distribute them for consumption, now and in the future."
            </p>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#4a148c' }}>
              <strong>Focus:</strong> Dynamic Growth & Development.
            </div>
          </div>

        </div>
      </div>

      {/* 3. NATURE OF ECONOMICS */}
      <div className="open-book-card" style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', color: '#1a0f0a' }}>Is Economics a Science or an Art?</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>

          <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '20px' }}>
            <FaUniversity size={30} color="#b71c1c" />
            <h4 style={{ fontFamily: 'Cinzel', color: '#b71c1c' }}>Positive Science</h4>
            <p>Studies <em>"what is"</em>. Based on facts, cause & effect. <br /> (e.g., "Inflation is 5%")</p>
          </div>

          <div style={{ width: '2px', background: '#ccc', alignSelf: 'stretch' }}></div>

          <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '20px' }}>
            <FaFeatherAlt size={30} color="#1b5e20" />
            <h4 style={{ fontFamily: 'Cinzel', color: '#1b5e20' }}>Normative Science</h4>
            <p>Studies <em>"what ought to be"</em>. Based on value judgments. <br /> (e.g., "Inflation should be lower")</p>
          </div>

        </div>
        <p style={{ textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>
          Verdict: It is Both.
        </p>
      </div>

      {/* 4. ECONOMIC ACTIVITIES - The Gears of the Economy */}
      <div className="content-card" style={{ marginTop: '40px', background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <h3 className="library-title" style={{ fontSize: '2.2rem', marginBottom: '30px', borderBottom: '2px solid #c6a700', display: 'inline-block' }}>The Gears of the Economy</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {/* Production */}
          <div className="evidence-file" style={{ background: '#e8f5e9', border: '1px solid #2e7d32', padding: '20px', textAlign: 'center' }}>
            <FaIndustry size={30} color="#2e7d32" style={{ marginBottom: '10px' }} />
            <h4 style={{ fontFamily: 'Cinzel', color: '#2e7d32' }}>Production</h4>
            <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Creating Utility</p>
            <p style={{ marginTop: '10px', fontSize: '1rem' }}>Converting inputs into goods/services.</p>
          </div>

          {/* Consumption */}
          <div className="evidence-file" style={{ background: '#fff3e0', border: '1px solid #ff9800', padding: '20px', textAlign: 'center' }}>
            <FaShoppingCart size={30} color="#ff9800" style={{ marginBottom: '10px' }} />
            <h4 style={{ fontFamily: 'Cinzel', color: '#ef6c00' }}>Consumption</h4>
            <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Using Utility</p>
            <p style={{ marginTop: '10px', fontSize: '1rem' }}>Using goods/services to satisfy wants.</p>
          </div>

          {/* Distribution */}
          <div className="evidence-file" style={{ background: '#ede7f6', border: '1px solid #673ab7', padding: '20px', textAlign: 'center' }}>
            <FaShareAlt size={30} color="#673ab7" style={{ marginBottom: '10px' }} />
            <h4 style={{ fontFamily: 'Cinzel', color: '#673ab7' }}>Distribution</h4>
            <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Sharing Income</p>
            <p style={{ marginTop: '10px', fontSize: '1rem' }}>Sharing income among factors of production.</p>
          </div>
        </div>
      </div>

      {/* 5. WHY STUDY ECONOMICS? */}
      <div className="open-book-card" style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: 'Cinzel', color: '#1a0f0a', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <FaLightbulb style={{ marginRight: '10px', color: '#fbc02d' }} /> Why Enter This Archives?
        </h3>

        <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div className="typewriter-box">
            <strong style={{ color: '#1a0f0a' }}>Decision Making:</strong><br />
            Choosing between a job and college (Opportunity Cost).
          </div>
          <div className="typewriter-box">
            <strong style={{ color: '#1a0f0a' }}>Understanding Society:</strong><br />
            Why prices rise (Inflation) and why jobs disappear (Unemployment).
          </div>
          <div className="typewriter-box">
            <strong style={{ color: '#1a0f0a' }}>Global Events:</strong><br />
            War in one country raising gas prices in another.
          </div>
        </div>
      </div>

      {/* 6. CHANAKYA TRIBUTE */}
      <div className="ancient-scroll" style={{ marginTop: '40px', background: '#d7ccc8', color: '#1a0f0a' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <FaGlobe size={40} color="#3e2723" />
          <div>
            <h4 style={{ fontFamily: 'Cinzel', margin: 0, fontSize: '1.4rem', color: '#3e2723' }}>The Indian Legacy: Chanakya</h4>
            <p style={{ fontStyle: 'italic', margin: 0, color: '#3e2723' }}>The Pioneer of Political Economy</p>
          </div>
        </div>
        <p style={{ marginTop: '15px', textAlign: 'justify', fontSize: '1.1rem', color: '#1a0f0a' }}>
          Long before Adam Smith, the Indian sage <strong>Kautilya (Chanakya)</strong> wrote the <em>Arthashastra</em> (c. 300 BCE). It was a comprehensive treatise on statecraft, economic policy, and military strategy, emphasizing that the <strong>welfare of the king lies in the welfare of his people</strong>.
        </p>
      </div>

    </section>
  );
}
export default Introduction;
