// OpportunityCostCalculator.jsx
import { useState } from 'react';
import { FaCoins, FaClock, FaCalculator, FaGamepad, FaBookReader } from 'react-icons/fa';
import '../lesson2-core.css';

function OpportunityCostCalculator() {
  const [activeTab, setActiveTab] = useState('money');

  // --- MONEY CALCULATOR STATE ---
  const [investment, setInvestment] = useState(10000);
  const [option1Rate, setOption1Rate] = useState(10); // Stocks
  const [option2Rate, setOption2Rate] = useState(6);  // Bonds

  const calcMoney = () => {
    const profit1 = (investment * option1Rate) / 100;
    const profit2 = (investment * option2Rate) / 100;
    const chosen = profit1 > profit2 ? 'Stocks' : 'Bonds';
    const foregone = profit1 > profit2 ? profit2 : profit1;
    const oc = foregone;

    return { profit1, profit2, chosen, oc };
  };
  const mRes = calcMoney();

  // --- TIME CALCULATOR STATE ---
  const [studyHours, setStudyHours] = useState(2);
  const [gamingHours, setGamingHours] = useState(2);

  const calcTime = () => {
    const studyGain = studyHours * 5;
    const gamingGain = gamingHours * 10;
    const ocStudy = studyHours * 10;
    return { studyGain, gamingGain, ocStudy };
  };
  const tRes = calcTime();

  return (
    <section>
      <h2 className="section-title">OC Calculator</h2>

      <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #000' }}>

        {/* TABS */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', justifyContent: 'center' }}>
          <button
            className={`btn-toggle ${activeTab === 'money' ? 'active' : ''}`}
            onClick={() => setActiveTab('money')}
            style={{ fontSize: '1.2rem', padding: '10px 25px', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <FaCoins /> Money Mode
          </button>
          <button
            className={`btn-toggle ${activeTab === 'time' ? 'active' : ''}`}
            onClick={() => setActiveTab('time')}
            style={{ fontSize: '1.2rem', padding: '10px 25px', display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <FaClock /> Time Mode
          </button>
        </div>

        {/* MONEY MODE */}
        {activeTab === 'money' && (
          <div className="lesson-grid-2">
            <div style={{ borderRight: '2px dashed #000', paddingRight: '20px' }}>
              <h3 className="card-title" style={{ fontSize: '1.2rem' }}>Step 1: The Choice</h3>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#000' }}>Total Capital ($):</label>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="form-input"
                />
              </div>

              <div style={{ background: '#f0f9ff', padding: '15px', border: '2px solid #2563eb', marginBottom: '15px' }}>
                <strong style={{ color: '#2563eb' }}>Option A: Stocks</strong> (High Risk)
                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '5px' }}>Return (%):</label>
                <input type="number" value={option1Rate} onChange={(e) => setOption1Rate(Number(e.target.value))} className="form-input" style={{ width: '80px', marginBottom: 0 }} />
              </div>

              <div style={{ background: '#fffbeb', padding: '15px', border: '2px solid #d97706' }}>
                <strong style={{ color: '#d97706' }}>Option B: Bonds</strong> (Low Risk)
                <label style={{ fontWeight: 'bold', display: 'block', marginTop: '5px' }}>Return (%):</label>
                <input type="number" value={option2Rate} onChange={(e) => setOption2Rate(Number(e.target.value))} className="form-input" style={{ width: '80px', marginBottom: 0 }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', color: '#000', marginBottom: '10px' }}><FaCalculator /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#000' }}>THE VERDICT</h3>

              <div style={{ borderTop: '4px solid #000', marginTop: '20px', paddingTop: '20px', background: '#000', color: '#fff', padding: '20px', transform: 'rotate(-1deg)', width: '100%' }}>
                <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '5px' }}>Opportunity Cost</div>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ef4444' }}>${mRes.oc}</div>
                <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>(Value Foregone)</div>
              </div>
            </div>
          </div>
        )}

        {/* TIME MODE - STYLE UPGRADE */}
        {activeTab === 'time' && (
          <div className="lesson-grid-2">
            <div style={{ borderRight: '2px dashed #000', paddingRight: '20px' }}>
              <h3 className="card-title" style={{ fontSize: '1.2rem' }}>Allocate 4 Hours:</h3>
              <p style={{ marginBottom: '20px', color: '#555' }}>Use the slider to split your time!</p>

              {/* CUSTOM SLIDER BOX 1 */}
              <div style={{ background: '#f0f9ff', padding: '20px', border: '3px solid #000', marginBottom: '20px', boxShadow: '4px 4px 0px #2563eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '900', marginBottom: '10px', fontSize: '1.1rem', color: '#2563eb' }}>
                  <span><FaBookReader /> Study</span>
                  <span>{studyHours} hrs</span>
                </div>
                <input
                  type="range"
                  min="0" max="4"
                  value={studyHours}
                  style={{ width: '100%', height: '10px', background: '#000', outline: 'none', appearance: 'auto', accentColor: '#2563eb', cursor: 'pointer' }}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setStudyHours(val);
                    setGamingHours(4 - val);
                  }}
                />
              </div>

              {/* CUSTOM SLIDER BOX 2 */}
              <div style={{ background: '#fffbeb', padding: '20px', border: '3px solid #000', boxShadow: '4px 4px 0px #d97706' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '900', marginBottom: '10px', fontSize: '1.1rem', color: '#d97706' }}>
                  <span><FaGamepad /> Gaming</span>
                  <span>{gamingHours} hrs</span>
                </div>
                <input
                  type="range"
                  min="0" max="4"
                  value={gamingHours}
                  style={{ width: '100%', height: '10px', background: '#000', outline: 'none', appearance: 'auto', accentColor: '#d97706', cursor: 'pointer' }}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setGamingHours(val);
                    setStudyHours(4 - val);
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', color: '#000', marginBottom: '10px' }}><FaClock /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#000' }}>TRADE-OFF</h3>

              <div style={{ marginTop: '20px', width: '100%' }}>
                <div style={{ borderTop: '4px solid #000', marginTop: '20px', paddingTop: '20px', background: '#000', color: '#fff', padding: '20px', transform: 'rotate(1deg)' }}>
                  <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '5px' }}>
                    To Study for {studyHours} hrs, you GAVE UP:
                  </div>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#facc15' }}>
                    {tRes.ocStudy} Fun Pts
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default OpportunityCostCalculator;
