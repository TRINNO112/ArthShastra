// OpportunityCostCalculator.jsx
import { useState } from 'react';
import { FaCoins, FaClock, FaGraduationCap } from 'react-icons/fa';
import '../lesson2-core.css';

function OpportunityCostCalculator() {
  const [activeTab, setActiveTab] = useState('money');

  // State for Money
  const [investment, setInvestment] = useState(10000);
  const [return1, setReturn1] = useState(8);
  const [return2, setReturn2] = useState(5);

  const calculateMoney = () => {
    const r1 = (investment * return1) / 100;
    const r2 = (investment * return2) / 100;
    return { r1, r2, diff: Math.abs(r1 - r2), best: r1 > r2 ? 'Option 1' : 'Option 2' };
  };
  const moneyRes = calculateMoney();

  return (
    <section>
      <h2 className="section-title">Interactive Calculator</h2>

      <div className="lesson-card">
        {/* Tabs */}
        <div className="btn-group" style={{ marginBottom: '30px', justifyContent: 'center' }}>
          <button
            className={`btn-toggle ${activeTab === 'money' ? 'active' : ''}`}
            onClick={() => setActiveTab('money')}
          >
            <FaCoins style={{ marginRight: '8px' }} /> Investment
          </button>
          <button
            className={`btn-toggle ${activeTab === 'time' ? 'active' : ''}`}
            onClick={() => setActiveTab('time')}
          >
            <FaClock style={{ marginRight: '8px' }} /> Time
          </button>
        </div>

        {/* Money Calculator Interface */}
        {activeTab === 'money' && (
          <div className="lesson-grid-2">
            <div>
              <h3 className="card-title">Input Data</h3>
              <div className="form-group">
                <label className="form-label">Total Investment Amount ($)</label>
                <input
                  type="number"
                  className="form-input"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Option 1 Return Rate (%)</label>
                <input
                  type="number"
                  className="form-input"
                  value={return1}
                  onChange={(e) => setReturn1(Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Option 2 Return Rate (%)</label>
                <input
                  type="number"
                  className="form-input"
                  value={return2}
                  onChange={(e) => setReturn2(Number(e.target.value))}
                />
              </div>
            </div>

            <div className="results-box">
              <h3 className="card-title">Analysis</h3>

              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #cbd5e1', paddingBottom: '10px', marginBottom: '10px' }}>
                <span>Option 1 Profit:</span>
                <strong>${moneyRes.r1}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #cbd5e1', paddingBottom: '10px', marginBottom: '10px' }}>
                <span>Option 2 Profit:</span>
                <strong>${moneyRes.r2}</strong>
              </div>

              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <span className="text-muted" style={{ fontSize: '0.9rem' }}>OPPORTUNITY COST</span>
                <div className="results-value-big">${moneyRes.diff.toLocaleString()}</div>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                  By choosing {moneyRes.best}, you gain the difference but give up the other option's return.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'time' && (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p className="text-muted">Select "Investment" to see the functional demo. (Time calculator simplified for clarity in this version).</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default OpportunityCostCalculator;
