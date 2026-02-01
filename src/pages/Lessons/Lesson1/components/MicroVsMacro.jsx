// Micro vs Macro Economics Module - Economics and Economies (VK Ohri Grade 11)
// Theme: Da Vinci Sketchbook 🎨

import { FaSearch, FaGlobe, FaTree, FaCheck, FaEye } from 'react-icons/fa';
import '../lesson1-davinci.css';

function MicroVsMacro() {
  return (
    <section className="davinci-page">

      {/* HEADER */}
      <div className="section-header-sketch" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 className="sketch-title">The Two Lenses</h2>
        <div className="sketch-subtitle">
          "Chapter II: Observational Scale"
        </div>
      </div>

      {/* INTRO NOTE */}
      <div className="sketch-box" style={{ maxWidth: '600px', transform: 'rotate(1deg)', background: '#fff' }}>
        <p className="handwritten-note" style={{ textAlign: 'center', fontSize: '1.4rem', color: '#2c2c2c', margin: 0 }}>
          "Just as one may study a single <span style={{ color: '#27ae60' }}>leaf</span> or the entire <span style={{ color: '#2980b9' }}>forest</span>, so must we study the economy."
        </p>
      </div>

      {/* THE DIAGRAM: LENSES */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>

        {/* MICRO: THE MAGNIFYING GLASS */}
        <div className="sketch-portrait" style={{ background: '#fff', border: '2px solid #2c2c2c', borderRadius: '10px' }}>
          <div className="tape-strip"></div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <FaSearch size={60} color="#f39c12" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#f39c12', margin: '10px 0' }}>Microeconomics</h3>
            <div className="handwritten-note" style={{ color: '#f39c12', transform: 'rotate(-2deg)' }}>Origin: 'Mikros' (Small)</div>
          </div>

          <div className="diagram-area" style={{ flexDirection: 'column', borderStyle: 'dashed' }}>
            <p style={{ fontSize: '1.1rem' }}>
              Study of <strong>Individual Units</strong>.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaTree color="#27ae60" size={24} />
              <span>A Single Tree</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaCheck color="#27ae60" />
              <span>Price of Wheat</span>
            </div>
          </div>

          <div className="verdict-box" style={{ background: '#fff3e0' }}>
            <strong>Theory:</strong> Price Theory
          </div>
        </div>

        {/* MACRO: THE TELESCOPE */}
        <div className="sketch-portrait" style={{ background: '#fff', border: '2px solid #2c2c2c', borderRadius: '10px' }}>
          <div className="tape-strip"></div>

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <FaGlobe size={60} color="#2980b9" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '2rem', color: '#2980b9', margin: '10px 0' }}>Macroeconomics</h3>
            <div className="handwritten-note" style={{ color: '#2980b9', transform: 'rotate(2deg)' }}>Origin: 'Makros' (Large)</div>
          </div>

          <div className="diagram-area" style={{ flexDirection: 'column', borderStyle: 'dashed' }}>
            <p style={{ fontSize: '1.1rem' }}>
              Study of <strong>Aggregates</strong> (Whole).
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaTree color="#2980b9" size={24} /><FaTree color="#2980b9" size={24} />
              <span>The Forest</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaCheck color="#2980b9" />
              <span>General Inflation</span>
            </div>
          </div>

          <div className="verdict-box" style={{ background: '#e3f2fd' }}>
            <strong>Theory:</strong> Income Theory
          </div>
        </div>

      </div>

      {/* COMPARISON TABLE - SKETCH STYLE */}
      <div className="sketch-box" style={{ marginTop: '50px' }}>
        <h4 style={{ fontFamily: 'Caveat', fontSize: '2rem', textAlign: 'center' }}>Comparative Analysis</h4>

        <div style={{ overflowX: 'auto', marginTop: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text', fontSize: '1.1rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #2c2c2c' }}>
                <th style={{ padding: '10px', textAlign: 'left' }}>Basis</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#f39c12' }}>Micro</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#2980b9' }}>Macro</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px dashed #ccc' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Scope</td>
                <td style={{ padding: '10px' }}>Individual</td>
                <td style={{ padding: '10px' }}>Whole Economy</td>
              </tr>
              <tr style={{ borderBottom: '1px dashed #ccc' }}>
                <td style={{ padding: '10px', fontWeight: 'bold' }}>Assumption</td>
                <td style={{ padding: '10px' }}>Macro is constant</td>
                <td style={{ padding: '10px' }}>Micro is constant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default MicroVsMacro;
