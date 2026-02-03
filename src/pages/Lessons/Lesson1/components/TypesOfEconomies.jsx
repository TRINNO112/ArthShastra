// Types of Economies Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨

import { FaCrown, FaCoins, FaHammer, FaHandshake, FaCheck, FaGlobeAmericas } from 'react-icons/fa';
import '../lesson1-davinci.css';

function TypesOfEconomies() {
  return (
    <section className="davinci-page">

      {/* HEADER */}
      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="sketch-title">The Three Systems</h2>
        <div className="sketch-subtitle">
          "Chapter IV: Organizing Wealth"
        </div>
      </div>

      {/* KINGDOM SKETCHES CONTAINER */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', gap: '20px', maxWidth: '1400px', margin: '0 auto' }}>

        {/* 1. MARKET ECONOMY (The Merchant's Guild) */}
        <div className="sketch-portrait" style={{ maxWidth: '350px', border: '2px solid #f39c12' }}>
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(-2deg)' }}></div>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <FaCoins size={50} color="#f39c12" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#f39c12', margin: '5px 0' }}>Market Economy</h3>
            <div className="handwritten-note" style={{ color: '#f39c12', transform: 'rotate(-2deg)' }}>"Laissez-Faire"</div>
          </div>

          <div className="diagram-area" style={{ flexDirection: 'column', borderStyle: 'dashed', borderColor: '#f39c12', padding: '15px' }}>
            <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
              Ruled by the <strong>Price Mechanism</strong> (Demand & Supply).
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', fontSize: '1rem' }}>
              <li><FaCheck color="#f39c12" /> Private Property</li>
              <li><FaCheck color="#f39c12" /> Profit Motive</li>
              <li><FaCheck color="#f39c12" /> Consumer is King</li>
            </ul>
          </div>

          <div className="verdict-box" style={{ background: '#fff9c4' }}>
            <strong style={{ display: 'block' }}>Example:</strong> USA, Singapore
          </div>
        </div>

        {/* 2. PLANNED ECONOMY (The King's Decree) */}
        <div className="sketch-portrait" style={{ maxWidth: '350px', border: '2px solid #c0392b' }}>
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(2deg)' }}></div>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <FaHammer size={50} color="#c0392b" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#c0392b', margin: '5px 0' }}>Planned Economy</h3>
            <div className="handwritten-note" style={{ color: '#c0392b', transform: 'rotate(2deg)' }}>"Command System"</div>
          </div>

          <div className="diagram-area" style={{ flexDirection: 'column', borderStyle: 'dashed', borderColor: '#c0392b', padding: '15px' }}>
            <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
              Ruled by the <strong>Government</strong> (Central Planner).
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', fontSize: '1rem' }}>
              <li><FaCheck color="#c0392b" /> Social Welfare</li>
              <li><FaCheck color="#c0392b" /> State Ownership</li>
              <li><FaCheck color="#c0392b" /> No Consumer Choice</li>
            </ul>
          </div>

          <div className="verdict-box" style={{ background: '#ffcdd2' }}>
            <strong style={{ display: 'block' }}>Example:</strong> North Korea
          </div>
        </div>

        {/* 3. MIXED ECONOMY (The Treaty) */}
        <div className="sketch-portrait" style={{ maxWidth: '350px', border: '2px solid #3f51b5' }}>
          <div className="tape-strip" style={{ transform: 'translateX(-50%) rotate(0deg)' }}></div>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <FaHandshake size={50} color="#3f51b5" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.8rem', color: '#3f51b5', margin: '5px 0' }}>Mixed Economy</h3>
            <div className="handwritten-note" style={{ color: '#3f51b5' }}>"Golden Balance"</div>
          </div>

          <div className="diagram-area" style={{ flexDirection: 'column', borderStyle: 'dashed', borderColor: '#3f51b5', padding: '15px' }}>
            <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
              Coexistence of <strong>Public</strong> & <strong>Private</strong> sectors.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', fontSize: '1rem' }}>
              <li><FaCheck color="#3f51b5" /> Dual Ownership</li>
              <li><FaCheck color="#3f51b5" /> Profit + Welfare</li>
              <li><FaCheck color="#3f51b5" /> Regulated Market</li>
            </ul>
          </div>

          <div className="verdict-box" style={{ background: '#c5cae9' }}>
            <strong style={{ display: 'block' }}>Example:</strong> INDIA 🇮🇳
          </div>
        </div>

      </div>

      {/* SKETCHY TABLE COMPARISON */}
      <div className="sketch-box" style={{ marginTop: '50px' }}>
        <h3 style={{ fontFamily: 'Caveat', textAlign: 'center' }}>System Analysis Log</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', minWidth: '600px', marginTop: '20px', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #2c2c2c' }}>
                <th style={{ padding: '10px' }}>Trait</th>
                <th style={{ padding: '10px', color: '#f39c12' }}>Market</th>
                <th style={{ padding: '10px', color: '#c0392b' }}>Planned</th>
                <th style={{ padding: '10px', color: '#3f51b5' }}>Mixed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Motive</td>
                <td>Profit</td>
                <td>Welfare</td>
                <td>Both</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Role of Govt</td>
                <td>None</td>
                <td>Full Control</td>
                <td>Regulator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default TypesOfEconomies;
