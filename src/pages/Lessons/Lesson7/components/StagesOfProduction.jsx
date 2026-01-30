import React from 'react';
import { FaRocket, FaBalanceScale, FaExclamationTriangle } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const StagesOfProduction = () => {
  return (
    <section className="stages-section">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h3 className="section-title-modern text-banger" style={{ fontSize: '3rem', color: '#fff', textShadow: '3px 3px 0px #000' }}>
          <FaBalanceScale /> THE 3 FACTORY ZONES
        </h3>
        <p style={{ fontFamily: 'Comic Neue', color: '#ccc' }}>Which zone should a Rational Producer choose?</p>
      </div>

      <div className="stages-grid-enhanced" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

        {/* Stage I */}
        <div className="comic-panel" style={{ border: '3px solid #2e7d32', boxShadow: '8px 8px 0px #2e7d32' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #2e7d32', paddingBottom: '10px', marginBottom: '15px' }}>
            <h4 className="text-banger" style={{ margin: 0, fontSize: '1.8rem', color: '#2e7d32' }}>ZONE 1: STARTUP</h4>
            <FaRocket size={30} color="#2e7d32" />
          </div>
          <p style={{ fontWeight: 'bold' }}>Increasing Returns</p>
          <ul className="modern-list check-list">
            <li>Fixed factor under-used.</li>
            <li>MP is Increasing!</li>
            <li>Should we stop? <span style={{ color: 'red', fontWeight: 'bold' }}>NO!</span></li>
          </ul>
          <div style={{ background: '#e8f5e9', padding: '10px', marginTop: '15px', borderRadius: '5px', border: '1px dashed #2e7d32', fontSize: '0.9rem', color: '#1b5e20' }}>
            <strong>Verdict:</strong> Don't stop. There is more profit to be made.
          </div>
        </div>

        {/* Stage II */}
        <div className="comic-panel yellow" style={{ transform: 'scale(1.05)', zIndex: 10, border: '3px solid #fbc02d', boxShadow: '12px 12px 0px rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: '#fbc02d', color: '#000', fontFamily: 'Bangers', padding: '5px 15px', transform: 'rotate(5deg)', border: '2px solid #000', boxShadow: '3px 3px 0px #000' }}>
            WINNER!
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #fbc02d', paddingBottom: '10px', marginBottom: '15px' }}>
            <h4 className="text-banger" style={{ margin: 0, fontSize: '1.8rem', color: '#f57f17' }}>ZONE 2: EFFICIENT</h4>
            <FaBalanceScale size={30} color="#f57f17" />
          </div>
          <p style={{ fontWeight: 'bold' }}>Diminishing Returns</p>
          <ul className="modern-list check-list">
            <li>Optimum use of machine.</li>
            <li>TP reaches MAX.</li>
            <li>MP hits ZERO.</li>
          </ul>
          <div style={{ background: '#fffde7', padding: '10px', marginTop: '15px', borderRadius: '5px', border: '1px dashed #fbc02d', fontSize: '0.9rem', color: '#f57f17' }}>
            <strong>Verdict:</strong> <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>STOP HERE!</span> This is the rational production zone.
          </div>
        </div>

        {/* Stage III */}
        <div className="comic-panel" style={{ border: '3px solid #d32f2f', boxShadow: '8px 8px 0px #d32f2f', background: '#ffebee' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #d32f2f', paddingBottom: '10px', marginBottom: '15px' }}>
            <h4 className="text-banger" style={{ margin: 0, fontSize: '1.8rem', color: '#d32f2f' }}>ZONE 3: CHAOS</h4>
            <FaExclamationTriangle size={30} color="#d32f2f" />
          </div>
          <p style={{ fontWeight: 'bold' }}>Negative Returns</p>
          <ul className="modern-list dot-list" style={{ listStyle: 'none' }}>
            <li style={{ color: '#d32f2f' }}>⚠ Too many workers!</li>
            <li style={{ color: '#d32f2f' }}>⚠ MP is NEGATIVE.</li>
            <li style={{ color: '#d32f2f' }}>⚠ TP is FALLING.</li>
          </ul>
          <div style={{ background: '#ffebee', padding: '10px', marginTop: '15px', borderRadius: '5px', border: '1px dashed #d32f2f', fontSize: '0.9rem', color: '#b71c1c' }}>
            <strong>Verdict:</strong> Complete disaster. You are losing money.
          </div>
        </div>

      </div>
    </section>
  );
};

export default StagesOfProduction;
