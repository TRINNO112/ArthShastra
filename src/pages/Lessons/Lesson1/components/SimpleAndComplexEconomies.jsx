// Simple vs Complex Economies Module - Economics and Economies (VK Ohri Grade 11)
import { FaMapMarkedAlt, FaCompressArrowsAlt, FaExpandArrowsAlt, FaUser, FaCity, FaExchangeAlt, FaHandsHelping, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';
import '../lesson1.css';

function SimpleAndComplexEconomies() {
  return (
    <section className="lesson-container-library">

      {/* HEADER: The Evolution Maps */}
      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <FaMapMarkedAlt size={40} color="#1a0f0a" />
        </div>
        <h2 className="library-title" style={{ fontSize: '3rem', color: '#1a0f0a' }}>Chapter V: The Evolution</h2>
        <p className="library-subtitle" style={{ color: '#3e2723' }}>"From Village Survival to Global Trade"</p>
      </div>

      {/* INTRO SCROLL */}
      <div className="ancient-scroll" style={{ maxWidth: '800px', margin: '0 auto 30px auto' }}>
        <p className="intro-text" style={{ fontSize: '1.2rem', textAlign: 'justify', fontFamily: 'Crimson Text', color: '#1a0f0a' }}>
          Economies are not static; they evolve. As human wants multiply, the web of exchange grows complex. We move from the <span className="ink-text">Simple Economy</span> of the past to the <span className="ink-text">Complex Economy</span> of today.
        </p>
      </div>

      {/* EXHIBIT CONTAINER */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>

        {/* EXHIBIT A: SIMPLE */}
        <div className="evidence-file" style={{ flex: '1 1 400px', background: '#d7ccc8', border: '1px solid #8d6e63', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', left: '20px', background: '#8d6e63', color: '#fff', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', transform: 'rotate(-2deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT A
          </div>

          <div style={{ textAlign: 'center', marginTop: '15px', borderBottom: '1px dashed #5d4037', paddingBottom: '15px' }}>
            <FaCompressArrowsAlt size={40} color="#3e2723" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#3e2723', margin: '5px 0' }}>Simple Economy</h3>
            <div style={{ display: 'inline-block', border: '2px solid #3e2723', padding: '2px 8px', fontSize: '0.8rem', color: '#3e2723', fontWeight: 'bold', letterSpacing: '1px', borderRadius: '4px' }}>
              SUBSISTENCE MODE
            </div>
          </div>

          <div style={{ marginTop: '20px', fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p>A closed system where survival is the goal. Wants are few, and reliance on others is minimal.</p>

            <div style={{ background: '#efebe9', padding: '10px', marginTop: '15px', borderLeft: '3px solid #3e2723' }}>
              <strong><FaCheckCircle size={12} /> Key Traits:</strong><br />
              Low Income, Limited Wants, Self-Sufficiency.
            </div>
            <div style={{ background: '#efebe9', padding: '10px', marginTop: '10px', borderLeft: '3px solid #3e2723' }}>
              <strong><FaHandsHelping size={12} /> Exchange:</strong><br />
              Barter System (Good for Good).
            </div>
          </div>
        </div>

        {/* EXHIBIT B: COMPLEX */}
        <div className="evidence-file" style={{ flex: '1 1 400px', background: '#bbdefb', border: '1px solid #1976d2', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#1976d2', color: '#fff', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', transform: 'rotate(2deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT B
          </div>

          <div style={{ textAlign: 'center', marginTop: '15px', borderBottom: '1px dashed #0d47a1', paddingBottom: '15px' }}>
            <FaExpandArrowsAlt size={40} color="#0d47a1" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#0d47a1', margin: '5px 0' }}>Complex Economy</h3>
            <div style={{ display: 'inline-block', border: '2px solid #0d47a1', padding: '2px 8px', fontSize: '0.8rem', color: '#0d47a1', fontWeight: 'bold', letterSpacing: '1px', borderRadius: '4px' }}>
              SURPLUS MODE
            </div>
          </div>

          <div style={{ marginTop: '20px', fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p>An open, vast network driven by unlimited wants. No one is self-sufficient; everyone is a specialist.</p>

            <div style={{ background: '#e3f2fd', padding: '10px', marginTop: '15px', borderLeft: '3px solid #0d47a1' }}>
              <strong><FaCheckCircle size={12} /> Key Traits:</strong><br />
              High Income, Unlimited Wants, Mutual Dependence.
            </div>
            <div style={{ background: '#e3f2fd', padding: '10px', marginTop: '10px', borderLeft: '3px solid #0d47a1' }}>
              <strong><FaGlobeAmericas size={12} /> Exchange:</strong><br />
              Monetary System (Money & Credit).
            </div>
          </div>
        </div>

      </div>

      {/* THE RELATIONSHIP RULE */}
      <div className="portrait-frame frame-gold" style={{ maxWidth: '600px', margin: '30px auto', background: '#fff' }}>
        <h4 style={{ textAlign: 'center', fontFamily: 'Cinzel', color: '#b71c1c' }}>The Law of Complexity</h4>
        <div style={{ textAlign: 'center', fontSize: '1.2rem', padding: '15px', color: '#1a0f0a' }}>
          Income <span style={{ color: '#2e7d32' }}>↑</span> = Wants <span style={{ color: '#b71c1c' }}>↑</span> = Interdependence <span style={{ color: '#1a237e' }}>↑</span>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', fontStyle: 'italic', color: '#555' }}>
          "The rich man needs the world; the poor man needs only his neighbor."
        </p>
      </div>

      {/* COMPARISON TABLE */}
      <div className="open-book-card">
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', marginBottom: '15px', color: '#1a0f0a' }}>Cartographer's Comparison Notes</h3>
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text', background: '#fff' }}>
            <thead>
              <tr style={{ background: '#eee', borderBottom: '2px solid #5d4037' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#1a0f0a' }}>Parameter</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#3e2723' }}>Simple Economy</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#0d47a1' }}>Complex Economy</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd', color: '#1a0f0a' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#1a0f0a' }}>Income Level</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>Low</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>High</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd', color: '#1a0f0a' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#1a0f0a' }}>Wants</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>Limited (Needs)</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>Unlimited (Desires)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd', color: '#1a0f0a' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#1a0f0a' }}>Dependence</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>Low (Self-sufficient)</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>High (Mutual Dependence)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd', color: '#1a0f0a' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#1a0f0a' }}>Exchange</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>Barter (Goods for Goods)</td>
                <td style={{ padding: '10px', color: '#1a0f0a' }}>Money & Credit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default SimpleAndComplexEconomies;
