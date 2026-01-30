// Definitions Module - Economics and Economies (VK Ohri Grade 11)
import { FaQuoteLeft, FaUser, FaStar, FaExclamationCircle, FaCheckCircle, FaTimesCircle, FaLightbulb, FaFeatherAlt } from 'react-icons/fa';
import '../lesson1.css';

function Definitions() {
  return (
    <section className="lesson-container-library">

      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
        <h2 className="library-title" style={{ fontSize: '2.5rem' }}>The Hall of Definitions</h2>
        <p className="library-subtitle">"Four Eras, Four Perspectives"</p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* DEFINITION 1: ADAM SMITH (WEALTH) */}
        <div className="portrait-frame frame-gold animate-fade-in">
          <div className="wax-seal" style={{ background: '#c6a700', right: '-20px', top: '-20px' }}>1776</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', width: '100px' }}>
              <div className="economist-cameo" style={{ borderColor: '#c6a700', marginBottom: '5px' }}><FaUser /></div>
              <strong style={{ fontFamily: 'Cinzel', fontSize: '0.9rem' }}>Adam Smith</strong>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Cinzel', borderBottom: '1px solid #c6a700', display: 'inline-block' }}>The Wealth Definition</h3>
              <div className="typewriter-box">
                "Economics is the science of wealth."
              </div>
              <p style={{ marginTop: '10px', fontSize: '1rem' }}>
                Just as a miser counts his gold, Smith focused on the <strong>production and consumption of wealth</strong>. He deemed it the 'Queen of Social Sciences'.
              </p>

              <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(183, 28, 28, 0.1)', borderLeft: '3px solid #b71c1c' }}>
                <strong style={{ color: '#b71c1c' }}>CRITICISM:</strong> Too materialistic! It ignored human welfare.
              </div>
            </div>
          </div>
        </div>

        {/* DEFINITION 2: ALFRED MARSHALL (WELFARE) */}
        <div className="portrait-frame frame-wood animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="wax-seal" style={{ background: '#5d4037', right: '-20px', top: '-20px' }}>1890</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', width: '100px' }}>
              <div className="economist-cameo" style={{ borderColor: '#5d4037', marginBottom: '5px' }}><FaUser /></div>
              <strong style={{ fontFamily: 'Cinzel', fontSize: '0.9rem' }}>Alfred Marshall</strong>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Cinzel', borderBottom: '1px solid #5d4037', display: 'inline-block' }}>The Welfare Definition</h3>
              <div className="typewriter-box">
                "Study of mankind in the ordinary business of life."
              </div>
              <p style={{ marginTop: '10px', fontSize: '1rem' }}>
                Marshall humanized the subject. Wealth is just the *means*, but <strong>Human Welfare</strong> is the *end*.
              </p>
              <ul className="bullet-list" style={{ fontSize: '0.9rem', marginTop: '10px' }}>
                <li><FaCheckCircle color="green" /> Focus on Man</li>
                <li><FaCheckCircle color="green" /> Social Science</li>
              </ul>
            </div>
          </div>
        </div>

        {/* DEFINITION 3: LIONEL ROBBINS (SCARCITY) */}
        <div className="portrait-frame frame-iron animate-fade-in" style={{ animationDelay: '0.4s', background: '#eceff1' }}>
          <div className="wax-seal" style={{ background: '#455a64', right: '-20px', top: '-20px' }}>1932</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', width: '100px' }}>
              <div className="economist-cameo" style={{ borderColor: '#455a64', marginBottom: '5px' }}><FaUser /></div>
              <strong style={{ fontFamily: 'Cinzel', fontSize: '0.9rem' }}>Lionel Robbins</strong>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontFamily: 'Cinzel', borderBottom: '1px solid #455a64', display: 'inline-block' }}>The Scarcity Definition</h3>
                <span style={{ background: '#455a64', color: '#fff', padding: '2px 8px', fontSize: '0.7rem', borderRadius: '10px' }}>MOST ACCEPTED</span>
              </div>

              <div className="typewriter-box">
                "Relationship between ends and scarce means which have alternative uses."
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '15px' }}>
                <div style={{ background: '#fff', padding: '10px', border: '1px dashed #455a64' }}>
                  <strong>Ends (Wants)</strong> <br /> Unlimited
                </div>
                <div style={{ background: '#fff', padding: '10px', border: '1px dashed #455a64' }}>
                  <strong>Means (Resources)</strong> <br /> Scarce
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DEFINITION 4: SAMUELSON (GROWTH) */}
        <div className="portrait-frame animate-fade-in" style={{ animationDelay: '0.6s', border: '8px solid #311b92' }}>
          <div className="wax-seal" style={{ background: '#311b92', right: '-20px', top: '-20px' }}>1948</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', width: '100px' }}>
              <div className="economist-cameo" style={{ borderColor: '#311b92', marginBottom: '5px' }}><FaUser /></div>
              <strong style={{ fontFamily: 'Cinzel', fontSize: '0.9rem' }}>Paul Samuelson</strong>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'Cinzel', borderBottom: '1px solid #311b92', display: 'inline-block' }}>The Growth Definition</h3>
              <div className="typewriter-box">
                "Economics... employs scarce resources... to produce commodities over time."
              </div>
              <p style={{ marginTop: '10px', fontSize: '1rem' }}>
                The modern master. He added the <strong>Time Dimension</strong> (Present vs Future). It's not just about allocating resources today, but growing them for tomorrow.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Definitions;
