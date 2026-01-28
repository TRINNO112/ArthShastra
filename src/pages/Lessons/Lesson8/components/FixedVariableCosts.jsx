import React from 'react';
import { FaLock, FaCogs } from 'react-icons/fa';
import '../lesson8.css';

const FixedVariableCosts = () => {
  return (
    <section className="lesson-section">
      <div className="factory-header">
        <h2 className="factory-title">THE ASSEMBLY LINE</h2>
        <p className="factory-subtitle">UNIT 2: INPUT CLASSIFICATION</p>
      </div>

      <div className="blueprint-card" style={{ maxWidth: '800px', margin: '20px auto' }}>
        <h3 className="blueprint-title">PRODUCTION LOGIC</h3>
        <p style={{ fontFamily: 'monospace', color: '#ccc', lineHeight: '1.6' }}>
          &gt;&gt; In the Short Run, production relies on two types of inputs.
          <br />
          &gt;&gt; <strong style={{ color: 'var(--factory-yellow)' }}>TOTAL COST</strong> =
          <span style={{ color: '#fff' }}> FIXED COST (FC)</span> +
          <span style={{ color: 'var(--factory-blue)' }}> VARIABLE COST (VC)</span>
        </p>
      </div>

      <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>

        {/* FIXED COSTS - COMIC PANEL */}
        <div className="comic-panel" style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '8px 8px 0px #000', border: '3px solid #888', position: 'relative' }}>
          <div className="panel-badge" style={{ position: 'absolute', top: '-15px', left: '20px', background: '#888', color: '#fff', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-2deg)' }}>
            THE ANCHOR
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <FaLock style={{ fontSize: '3rem', color: '#ccc' }} />
          </div>

          <h4 style={{ textAlign: 'center', fontFamily: '"Black Ops One", cursive', fontSize: '1.8rem', color: '#aaa', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 0 #000' }}>
            FIXED COSTS
          </h4>

          <p style={{ fontFamily: 'monospace', color: '#ccc', textAlign: 'center', fontSize: '0.9rem', marginBottom: '20px' }}>
            "I don't care if you produce ZERO units. You signed the lease, you pay the rent!"
          </p>

          <div style={{ background: 'rgba(0,0,0,0.5)', padding: '15px', borderRadius: '8px', border: '1px dashed #555' }}>
            <strong style={{ color: '#fff', display: 'block', marginBottom: '10px', fontSize: '0.8rem' }}>TYPICAL OFFENDERS:</strong>
            <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'monospace', color: '#aaa', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '5px' }}>🔒 Rent / Lease</li>
              <li style={{ marginBottom: '5px' }}>👔 Perm. Salaries</li>
              <li>🏦 Loan Interest</li>
            </ul>
          </div>
        </div>

        {/* VARIABLE COSTS - COMIC PANEL */}
        <div className="comic-panel" style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '8px 8px 0px #000', border: '3px solid #ffcc00', position: 'relative' }}>
          <div className="panel-badge" style={{ position: 'absolute', top: '-15px', right: '20px', background: '#ffcc00', color: '#000', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(2deg)' }}>
            THE FUEL
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
            <FaCogs style={{ fontSize: '3rem', color: '#ffcc00' }} />
          </div>

          <h4 style={{ textAlign: 'center', fontFamily: '"Black Ops One", cursive', fontSize: '1.8rem', color: '#ffcc00', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 0 #000' }}>
            VARIABLE COSTS
          </h4>

          <p style={{ fontFamily: 'monospace', color: '#ffcc00', textAlign: 'center', fontSize: '0.9rem', marginBottom: '20px' }}>
            "You want more output? Feed me more inputs! No production? Then I sleep."
          </p>

          <div style={{ background: 'rgba(255, 204, 0, 0.1)', padding: '15px', borderRadius: '8px', border: '1px dashed #ffcc00' }}>
            <strong style={{ color: '#ffcc00', display: 'block', marginBottom: '10px', fontSize: '0.8rem' }}>ACTIVE INGREDIENTS:</strong>
            <ul style={{ listStyle: 'none', padding: 0, fontFamily: 'monospace', color: '#ffdd44', fontSize: '0.9rem' }}>
              <li style={{ marginBottom: '5px' }}>👷 Daily Wages</li>
              <li style={{ marginBottom: '5px' }}>🧱 Raw Materials</li>
              <li>⚡ Power Bills</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="blueprint-card" style={{ marginTop: '40px' }}>
        <h4 className="blueprint-title">COMPARISON MATRIX</h4>
        <div className="table-responsive">
          <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'monospace' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.1)' }}>
                <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #fff' }}>PARAMETER</th>
                <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #fff' }}>FIXED COST (TFC)</th>
                <th style={{ padding: '15px', textAlign: 'left', borderBottom: '2px solid #fff' }}>VARIABLE COST (TVC)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '15px', borderBottom: '1px dashed #555' }}>OUTPUT LINK</td>
                <td style={{ padding: '15px', borderBottom: '1px dashed #555', color: '#aaa' }}>INDEPENDENT</td>
                <td style={{ padding: '15px', borderBottom: '1px dashed #555', color: 'var(--factory-yellow)' }}>DIRECT RELATION</td>
              </tr>
              <tr>
                <td style={{ padding: '15px', borderBottom: '1px dashed #555' }}>AT ZERO OUTPUT</td>
                <td style={{ padding: '15px', borderBottom: '1px dashed #555', color: '#aaa' }}>POSITIVE (Must Pay)</td>
                <td style={{ padding: '15px', borderBottom: '1px dashed #555', color: 'var(--factory-yellow)' }}>ZERO</td>
              </tr>
              <tr>
                <td style={{ padding: '15px' }}>CURVE SHAPE</td>
                <td style={{ padding: '15px', color: '#aaa' }}>HORIZONTAL LINE</td>
                <td style={{ padding: '15px', color: 'var(--factory-yellow)' }}>INVERSE S-SHAPE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FixedVariableCosts;
