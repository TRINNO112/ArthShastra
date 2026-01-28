import React from 'react';
import { FaClock, FaBuilding, FaChartArea, FaInfinity } from 'react-icons/fa';
import LACEnvelopeChart from './LACEnvelopeChart';
import '../../css/lessons.css';
import '../../css/quiz.css';

const ShortLongRun = () => {
  return (
    <section className="lesson-section">
      <div className="factory-header">
        <h2 className="factory-title">FACTORY EXPANSION</h2>
        <p className="factory-subtitle">UNIT 5: TIME HORIZONS & PLANNING</p>
      </div>

      <div className="blueprint-card" style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'center' }}>
        <h3 className="blueprint-title">PLANNING HORIZON</h3>
        <p style={{ fontFamily: 'monospace', color: '#ccc', lineHeight: '1.6' }}>
          &gt;&gt; <strong>SHORT RUN:</strong> Time period too short to change plant capacity.
          <br />
          &gt;&gt; <strong>LONG RUN:</strong> Time period sufficient to adjust ALL inputs (Scale).
        </p>
      </div>

      <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>

        {/* SHORT RUN - COMIC PANEL */}
        <div className="comic-panel" style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '8px 8px 0px #000', border: '3px solid #ffcc00', position: 'relative' }}>
          <div className="panel-badge" style={{ position: 'absolute', top: '-15px', right: '20px', background: '#ffcc00', color: '#000', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(3deg)' }}>
            ZONE 1
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '15px' }}>
            <FaClock style={{ fontSize: '3rem', color: '#ffcc00' }} />
          </div>

          <h4 style={{ textAlign: 'center', fontFamily: '"Black Ops One", cursive', fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', marginBottom: '5px' }}>
            SHORT RUN
          </h4>
          <p style={{ textAlign: 'center', color: '#ffcc00', fontFamily: 'monospace', fontSize: '0.8rem', marginBottom: '20px' }}>
            "THE CONSTRAINT PHASE"
          </p>

          <div style={{ fontFamily: 'monospace', color: '#aaa', fontSize: '0.9rem', background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#ffcc00' }}>🚫</span> FIXED FACTOR EXISTS
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#ffcc00' }}>🔒</span> PLANT SIZE: LOCKED
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#ffcc00' }}>📉</span> COST: FC &gt; 0
            </div>
          </div>

          <div style={{ marginTop: '20px', padding: '10px', background: '#ffcc00', color: '#000', textAlign: 'center', fontWeight: 'bold', fontFamily: 'monospace', borderRadius: '4px', border: '2px solid #000' }}>
            SAC / SMC Curves
          </div>
        </div>

        {/* LONG RUN - COMIC PANEL */}
        <div className="comic-panel" style={{ background: '#2C2F33', color: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '8px 8px 0px #000', border: '3px solid #00ff88', position: 'relative' }}>
          <div className="panel-badge" style={{ position: 'absolute', top: '-15px', left: '20px', background: '#00ff88', color: '#000', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-3deg)' }}>
            ZONE 2
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '15px' }}>
            <FaInfinity style={{ fontSize: '3rem', color: '#00ff88' }} />
          </div>

          <h4 style={{ textAlign: 'center', fontFamily: '"Black Ops One", cursive', fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', marginBottom: '5px' }}>
            LONG RUN
          </h4>
          <p style={{ textAlign: 'center', color: '#00ff88', fontFamily: 'monospace', fontSize: '0.8rem', marginBottom: '20px' }}>
            "THE FREEDOM PHASE"
          </p>

          <div style={{ fontFamily: 'monospace', color: '#aaa', fontSize: '0.9rem', background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px' }}>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#00ff88' }}>✅</span> ALL FACTORS VARIABLE
            </div>
            <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#00ff88' }}>🏗️</span> PLANT SIZE: FLEXIBLE
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#00ff88' }}>⚡</span> COST: FC = 0
            </div>
          </div>

          <div style={{ marginTop: '20px', padding: '10px', background: '#00ff88', color: '#000', textAlign: 'center', fontWeight: 'bold', fontFamily: 'monospace', borderRadius: '4px', border: '2px solid #000' }}>
            LAC / LMC Curves
          </div>
        </div>

      </div>

      {/* LAC ENVELOPE */}
      <div className="control-panel" style={{ marginTop: '40px' }}>
        <h4 style={{ color: '#fff', fontFamily: 'Black Ops One, cursive', textAlign: 'center' }}>
          LAC ENVELOPE CURVE
        </h4>
        <div style={{ textAlign: 'center', color: '#888', fontFamily: 'monospace', marginBottom: '10px' }}>
          "The Envelope that holds all Short Run Plants"
        </div>

        <div className="panel-screen">
          <LACEnvelopeChart />
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="blueprint-card" style={{ marginTop: '40px' }}>
        <h4 className="blueprint-title">COMPARISON DATA_SHEET</h4>
        <div className="table-responsive">
          <table className="comparison-table" style={{ width: '100%', fontFamily: 'monospace', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #fff' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#aaa' }}>FEATURE</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#ffcc00' }}>SHORT RUN</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#00ff88' }}>LONG RUN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px dashed #444' }}>FIXED FACTORS</td>
                <td style={{ padding: '10px', borderBottom: '1px dashed #444' }}>AT LEAST ONE (e.g. Land)</td>
                <td style={{ padding: '10px', borderBottom: '1px dashed #444' }}>NONE (All Variable)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', borderBottom: '1px dashed #444' }}>ENTRY/EXIT</td>
                <td style={{ padding: '10px', borderBottom: '1px dashed #444' }}>RESTRICTED</td>
                <td style={{ padding: '10px', borderBottom: '1px dashed #444' }}>FREE</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>CURVES</td>
                <td style={{ padding: '10px' }}>SAC (U-Shaped)</td>
                <td style={{ padding: '10px' }}>LAC (Flatter U-Shape)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};

export default ShortLongRun;
