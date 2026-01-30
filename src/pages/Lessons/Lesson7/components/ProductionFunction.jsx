/**
 * ProductionFunction.jsx - Introduction Component for Lesson 7
 * Theme: Industrial Comic (Factory + Comic Book)
 */

import React from 'react';
import { FaIndustry, FaClock, FaCubes, FaHammer, FaBolt } from 'react-icons/fa';
import '../lesson7.css'; // New Theme

function ProductionFunction() {
  return (
    <section className="lesson-container-factory">

      {/* 1. HERO HEADER */}
      <div className="section-header-lesson" style={{ padding: '40px 20px' }}>
        <div className="factory-header animate-fadeInUp">
          <div className="highlight-box" style={{ marginBottom: '10px' }}>CHAPTER 7</div>
          <h1 className="factory-title">PRODUCTION<br />FUNCTION</h1>
          <p className="factory-subtitle">INPUTS ➔ THE BLACK BOX ➔ OUTPUTS</p>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>

        {/* 2. DEFINITION PANEL */}
        <div className="comic-panel blue animate-fadeInUp">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <FaIndustry size={40} color="#0d47a1" />
            <h2 className="text-banger" style={{ fontSize: '2rem', margin: 0, color: '#0d47a1' }}>WHAT IS IT?</h2>
          </div>
          <p style={{ fontSize: '1.2rem' }}>
            <strong>Production Function</strong> is the relationship between <span style={{ color: '#d32f2f', fontWeight: 'bold' }}>INPUTS</span> (Labor, Capital) and <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>OUTPUTS</span>.
          </p>
          <div style={{ background: '#fff', border: '2px dashed #0d47a1', padding: '15px', marginTop: '15px', borderRadius: '8px' }}>
            <h3 className="text-banger" style={{ textAlign: 'center', color: '#0d47a1' }}>THE FORMULA</h3>
            <code style={{ display: 'block', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Qx = f(L, K)</code>
            <div style={{ textAlign: 'center', fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
              Q = Output | f = Func | L = Labor | K = Capital
            </div>
          </div>
        </div>

        {/* 3. FIXED VS VARIABLE FACTORS */}
        <div className="factory-grid-2">

          {/* VARIABLE FACTORS */}
          <div className="comic-panel animate-fadeInLeft">
            <div style={{ background: '#4caf50', color: '#fff', padding: '5px 10px', display: 'inline-block', fontFamily: 'Bangers', fontSize: '1.2rem', transform: 'rotate(-2deg)', border: '2px solid #000' }}>
              VARIABLE INPUTS
            </div>
            <h3 className="text-banger" style={{ fontSize: '2rem', margin: '10px 0' }}>CHANGE IT!</h3>
            <p>Inputs that can be changed quickly.</p>
            <ul className="modern-list check-list">
              <li>Raw Materials</li>
              <li>Casual Labor</li>
              <li>Power / Fuel</li>
            </ul>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
              <FaBolt color="#f1c40f" /> Output 0 = Standard Cost 0
            </div>
          </div>

          {/* FIXED FACTORS */}
          <div className="comic-panel animate-fadeInRight">
            <div style={{ background: '#d32f2f', color: '#fff', padding: '5px 10px', display: 'inline-block', fontFamily: 'Bangers', fontSize: '1.2rem', transform: 'rotate(2deg)', border: '2px solid #000' }}>
              FIXED INPUTS
            </div>
            <h3 className="text-banger" style={{ fontSize: '2rem', margin: '10px 0' }}>STUCK WITH IT!</h3>
            <p>Inputs that CANNOT be changed short-term.</p>
            <ul className="modern-list dot-list">
              <li>Land & Building</li>
              <li>Heavy Machinery</li>
              <li>Permanent Staff</li>
            </ul>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
              <FaHammer color="#555" /> Cost exists even if Output is 0!
            </div>
          </div>

        </div>

        {/* 4. TIME PERIODS */}
        <div className="comic-panel yellow animate-fadeInUp">
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <FaClock size={40} />
            <h2 className="text-banger" style={{ fontSize: '2rem', margin: 0 }}>THE CLOCK IS TICKING</h2>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #000', background: '#fff' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff', fontFamily: 'Bangers', fontSize: '1.2rem' }}>
                <th style={{ padding: '10px' }}>BASIS</th>
                <th style={{ padding: '10px', background: '#2e7d32' }}>SHORT RUN</th>
                <th style={{ padding: '10px', background: '#d32f2f' }}>LONG RUN</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'Comic Neue', fontWeight: 'bold' }}>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>Definition</td>
                <td style={{ padding: '10px' }}>At least 1 Factor Fixed.</td>
                <td style={{ padding: '10px' }}>ALL Factors Variable.</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px' }}>Change Output</td>
                <td style={{ padding: '10px' }}>Change Variables Only.</td>
                <td style={{ padding: '10px' }}>Change Scale (Everything).</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>Law</td>
                <td style={{ padding: '10px' }}>Returns to a FACTOR.</td>
                <td style={{ padding: '10px' }}>Returns to SCALE.</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default ProductionFunction;
