// Micro vs Macro Economics Module - Economics and Economies (VK Ohri Grade 11)
import { FaSearch, FaGlobe, FaBalanceScale, FaTree, FaCheckCircle, FaChartLine } from 'react-icons/fa';
import '../lesson1.css';

function MicroVsMacro() {
  return (
    <section className="lesson-container-library">

      {/* HEADER */}
      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <FaBalanceScale size={40} color="#1a0f0a" />
        </div>
        <h2 className="library-title" style={{ fontSize: '3rem', color: '#1a0f0a' }}>Chapter II: Micro vs Macro</h2>
        <p className="library-subtitle" style={{ color: '#3e2723' }}>"The Two Lenses of Analysis"</p>
      </div>

      {/* INTRO SCROLL */}
      <div className="ancient-scroll" style={{ maxWidth: '800px', margin: '0 auto 30px auto' }}>
        <p style={{ fontSize: '1.2rem', textAlign: 'justify', color: '#1a0f0a' }}>
          Economics is studied on two levels. Just as you can study a <span className="ink-text">single tree</span> or the <span className="ink-text">entire forest</span>, you can study individual units or the economy as a whole.
        </p>
      </div>

      {/* EXHIBIT CONTAINER */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>

        {/* EXHIBIT A: MICRO */}
        <div className="evidence-file" style={{ flex: '1 1 400px', background: '#fffde7', border: '1px solid #fbc02d', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', left: '20px', background: '#fbc02d', color: '#000', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', transform: 'rotate(-2deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT A
          </div>

          <div style={{ textAlign: 'center', marginTop: '15px', borderBottom: '1px dashed #fbc02d', paddingBottom: '15px' }}>
            <FaSearch size={40} color="#f9a825" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#f9a825', margin: '5px 0' }}>Microeconomics</h3>
            <div style={{ display: 'inline-block', border: '2px solid #f9a825', padding: '2px 8px', fontSize: '0.8rem', color: '#f9a825', fontWeight: 'bold', letterSpacing: '1px', borderRadius: '4px' }}>
              INDIVIDUAL UNIT
            </div>
          </div>

          <div style={{ marginTop: '20px', fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p><strong>Origin:</strong> Greek word <em>'Mikros'</em> meaning Small.</p>
            <p>It studies the behavior of <strong>individual economic units</strong> like a consumer, a firm, or a single market.</p>

            <div style={{ background: '#fff9c4', padding: '10px', marginTop: '15px', borderLeft: '3px solid #fbc02d' }}>
              <strong><FaCheckCircle size={12} /> Key Variables:</strong><br />
              Individual Demand, Price of a Product, Consumer's Income.
            </div>
            <div style={{ background: '#fff9c4', padding: '10px', marginTop: '10px', borderLeft: '3px solid #fbc02d' }}>
              <strong><FaTree size={12} /> Example:</strong><br />
              Studying the price of <em>Wheat</em> specifically, or the income of <em>Mr. Sharma</em>.
            </div>
          </div>
        </div>

        {/* EXHIBIT B: MACRO */}
        <div className="evidence-file" style={{ flex: '1 1 400px', background: '#e3f2fd', border: '1px solid #0288d1', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#0288d1', color: '#fff', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', transform: 'rotate(2deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT B
          </div>

          <div style={{ textAlign: 'center', marginTop: '15px', borderBottom: '1px dashed #0288d1', paddingBottom: '15px' }}>
            <FaGlobe size={40} color="#0277bd" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#0277bd', margin: '5px 0' }}>Macroeconomics</h3>
            <div style={{ display: 'inline-block', border: '2px solid #0277bd', padding: '2px 8px', fontSize: '0.8rem', color: '#0277bd', fontWeight: 'bold', letterSpacing: '1px', borderRadius: '4px' }}>
              AGGREGATE ECONOMY
            </div>
          </div>

          <div style={{ marginTop: '20px', fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p><strong>Origin:</strong> Greek word <em>'Makros'</em> meaning Large.</p>
            <p>It studies the working of the <strong>economy as a whole</strong>. It deals with aggregates and averages.</p>

            <div style={{ background: '#bbdefb', padding: '10px', marginTop: '15px', borderLeft: '3px solid #0288d1' }}>
              <strong><FaCheckCircle size={12} /> Key Variables:</strong><br />
              Aggregate Demand, National Income, General Price Level (Inflation).
            </div>
            <div style={{ background: '#bbdefb', padding: '10px', marginTop: '10px', borderLeft: '3px solid #0288d1' }}>
              <strong><FaTree size={12} /> <FaTree size={12} /> Example:</strong><br />
              Studying the <em>General Inflation Rate</em> of India, or the <em>Total National Income</em>.
            </div>
          </div>
        </div>

      </div>

      {/* COMPARISON */}
      <div className="open-book-card" style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', color: '#1a0f0a' }}>Comparative Evidence</h3>
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text' }}>
            <thead>
              <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #5d4037' }}>
                <th style={{ padding: '10px', color: '#1a0f0a' }}>Basis</th>
                <th style={{ padding: '10px', color: '#f9a825' }}>Microeconomics</th>
                <th style={{ padding: '10px', color: '#0277bd' }}>Macroeconomics</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Scope</td>
                <td style={{ padding: '10px' }}>Individual Units</td>
                <td style={{ padding: '10px' }}>Economy as a Whole</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Central Problem</td>
                <td style={{ padding: '10px' }}>Allocation of Resources (Price Theory)</td>
                <td style={{ padding: '10px' }}>Determination of Income & Employment</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Assumption</td>
                <td style={{ padding: '10px' }}>Macro variables are constant</td>
                <td style={{ padding: '10px' }}>Micro variables are constant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default MicroVsMacro;
