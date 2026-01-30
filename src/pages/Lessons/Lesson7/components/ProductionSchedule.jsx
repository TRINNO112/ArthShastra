import React from 'react';
import { FaTable, FaArrowUp, FaArrowDown, FaClipboardList, FaRocket, FaStop, FaBan } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const productionData = [
  { labor: 0, tp: 0, ap: 0, mp: 0, stage: 1 },
  { labor: 1, tp: 10, ap: 10, mp: 10, stage: 1 },
  { labor: 2, tp: 25, ap: 12.5, mp: 15, stage: 1 }, // Inflection Point
  { labor: 3, tp: 36, ap: 12, mp: 11, stage: 2 },
  { labor: 4, tp: 44, ap: 11, mp: 8, stage: 2 },
  { labor: 5, tp: 48, ap: 9.6, mp: 4, stage: 2 },
  { labor: 6, tp: 48, ap: 8, mp: 0, stage: 2 }, // TP Max
  { labor: 7, tp: 45, ap: 6.4, mp: -3, stage: 3 },
  { labor: 8, tp: 40, ap: 5, mp: -5, stage: 3 },
  { labor: 9, tp: 30, ap: 3.33, mp: -10, stage: 3 },
  { labor: 10, tp: 15, ap: 1.5, mp: -15, stage: 3 },
];

const ProductionSchedule = () => {
  return (
    <div className="table-container-enhanced" style={{ background: 'transparent', padding: 0 }}>

      {/* HEADER */}
      <div className="comic-panel blue" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ display: 'inline-block', background: '#000', color: '#fff', padding: '5px 15px', transform: 'rotate(-2deg)', marginBottom: '10px', fontFamily: 'Bangers' }}>
          SECRET DOCUMENTS
        </div>
        <h3 className="text-banger" style={{ fontSize: '2.5rem', margin: 0, color: '#0d47a1' }}>
          <FaClipboardList /> THE BLUEPRINT LOG
        </h3>
        <p style={{ fontFamily: 'Comic Neue', fontWeight: 'bold' }}>Tracking the efficiency of every worker.</p>
      </div>

      <div className="table-scroll-wrapper" style={{ background: '#0d47a1', padding: '10px', borderRadius: '8px', border: '3px solid #000', boxShadow: '8px 8px 0px #000' }}>
        <div style={{ color: '#fff', fontFamily: 'Teko', fontSize: '1.2rem', marginBottom: '5px', borderBottom: '1px dashed #fff' }}>Project: ALPHA-7 // Status: CLASSIFIED</div>
        <table className="production-table-modern" style={{ fontFamily: 'Share Tech Mono', background: '#1565c0', color: '#fff' }}>
          <thead>
            <tr style={{ background: '#000', color: '#f1c40f', borderBottom: '2px solid #fff' }}>
              <th style={{ padding: '15px' }}>L (Workers)</th>
              <th>TP (Total)</th>
              <th>AP (Average)</th>
              <th>MP (Marginal)</th>
              <th>ZONE STATUS</th>
            </tr>
          </thead>
          <tbody>
            {productionData.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }} className={`row-stage-${row.stage}`}>
                <td style={{ fontWeight: 'bold', color: '#f1c40f' }}>{row.labor}</td>
                <td style={{ fontWeight: 'bold' }}>{row.tp}</td>
                <td>{row.ap}</td>
                <td style={{ color: row.mp < 0 ? '#ff5252' : '#69f0ae', fontWeight: 'bold' }}>
                  {row.mp}
                  {row.mp > 10 && <FaArrowUp style={{ marginLeft: '5px' }} />}
                  {row.mp < 0 && <FaArrowDown style={{ marginLeft: '5px' }} />}
                </td>
                <td>
                  <span style={{
                    background: row.stage === 1 ? '#2e7d32' : row.stage === 2 ? '#f1c40f' : '#d32f2f',
                    color: row.stage === 2 ? '#000' : '#fff',
                    padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold',
                    border: '1px solid #fff'
                  }}>
                    {row.stage === 1 ? 'STARTUP' : row.stage === 2 ? 'EFFICIENT' : 'CRITICAL'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="factory-grid-2" style={{ marginTop: '40px' }}>

        {/* INSIGHT 1 */}
        <div className="comic-panel yellow">
          <div className="highlight-box" style={{ background: '#f1c40f', color: '#000' }}>STAGE 1 ENDS</div>
          <p className="text-banger" style={{ fontSize: '1.5rem', margin: '10px 0' }}>AP MAXIMIZED!</p>
          <p>Worker efficiency hits peak potential. <br /><strong>AP = MP</strong></p>
        </div>

        {/* INSIGHT 2 */}
        <div className="comic-panel yellow">
          <div className="highlight-box" style={{ background: '#f1c40f', color: '#000' }}>STAGE 2 ENDS</div>
          <p className="text-banger" style={{ fontSize: '1.5rem', margin: '10px 0' }}>TP MAXIMIZED!</p>
          <p>Total output stops growing. <br /><strong>MP = 0</strong></p>
        </div>

      </div>

      <div className="comic-panel animate-fadeInUp" style={{ border: '3px solid #d32f2f', boxShadow: '6px 6px 0px #d32f2f' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FaBan size={40} color="#d32f2f" />
          <div>
            <h4 className="text-banger" style={{ fontSize: '1.8rem', margin: 0, color: '#d32f2f' }}>STAGE 3 WARNING</h4>
            <p style={{ fontFamily: 'Comic Neue', fontWeight: 'bold' }}>
              NEGATIVE RETURNS! Workers are bumping into each other. MP is Negative. <br />
              <span style={{ background: '#d32f2f', color: '#fff', padding: '2px 5px' }}>FIRING SQUAD REQUIRED</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductionSchedule;