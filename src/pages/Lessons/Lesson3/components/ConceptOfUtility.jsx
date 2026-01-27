import React from 'react';
import { FaLightbulb, FaChartLine, FaQuoteLeft } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import '../css/Lesson3Clean.css';

const utilitySchedule = [
  { units: 1, MU: 20, TU: 20 },
  { units: 2, MU: 15, TU: 35 },
  { units: 3, MU: 10, TU: 45 },
  { units: 4, MU: 5, TU: 50 },
  { units: 5, MU: 0, TU: 50 },
  { units: 6, MU: -5, TU: 45 },
];

const ConceptOfUtility = () => {
  return (
    <div className="lesson3-container">
      <header className="lesson-header mb-5">
        <h2 className="l3-title">Concept of Utility</h2>
        <p className="l3-subtitle">Measuring satisfaction in Economics</p>
      </header>

      {/* 1. What is Utility? */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">What is Utility?</h3>
        <div className="l3-definition-box">
          <p className="l3-definition-text">
            "Utility is the <strong>want-satisfying power</strong> of a commodity."
          </p>
        </div>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
          It is the subjective satisfaction related to the consumption of goods. Note that utility is <strong>not</strong> usefulness. Alcohol has utility for a drinker, even if it is not useful for health.
        </p>
      </section>

      {/* 2. TU and MU */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Total vs. Marginal Utility</h3>
        <div className="l3-grid-2">
          <div className="l3-grid-item gold">
            <h4 style={{ color: 'var(--l3-gold)' }}>Total Utility (TU)</h4>
            <p>The sum total of satisfaction derived from the consumption of all units of a commodity.</p>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', marginTop: '10px', borderRadius: '4px', textAlign: 'center' }}>
              <code>TU = ΣMU</code>
            </div>
          </div>
          <div className="l3-grid-item green">
            <h4 style={{ color: 'var(--l3-green)' }}>Marginal Utility (MU)</h4>
            <p>The <strong>additional</strong> utility derived from consuming <strong>one more</strong> unit of the commodity.</p>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '10px', marginTop: '10px', borderRadius: '4px', textAlign: 'center' }}>
              <code>MUn = TUn - TUn-1</code>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Diamond Water Paradox */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">The Diamond-Water Paradox</h3>
        <p className="mb-4">Why is water (essential) cheap, while diamonds (useless) are expensive?</p>

        <div className="l3-grid-2">
          <div className="l3-grid-item cyan">
            <h4 style={{ color: 'var(--l3-cyan)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>💧 Water</h4>
            <ul className="l3-list">
              <li><strong>Total Utility:</strong> Very High (Essential)</li>
              <li><strong>Supply:</strong> Abundant</li>
              <li><strong>Marginal Utility:</strong> Low (Abundance means low value for next drop)</li>
              <li><strong>Price:</strong> Low</li>
            </ul>
          </div>
          <div className="l3-grid-item gold">
            <h4 style={{ color: 'var(--l3-gold)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>💎 Diamonds</h4>
            <ul className="l3-list">
              <li><strong>Total Utility:</strong> Low (Non-essential)</li>
              <li><strong>Supply:</strong> Scarce</li>
              <li><strong>Marginal Utility:</strong> High (Scarcity means high value for next unit)</li>
              <li><strong>Price:</strong> High</li>
            </ul>
          </div>
        </div>

        <div style={{ background: 'var(--l3-bg-card)', border: '1px solid var(--l3-green)', padding: '15px', borderRadius: '8px', textAlign: 'center', marginTop: '20px' }}>
          <strong style={{ color: 'var(--l3-green)', fontSize: '1.2rem' }}>Conclusion:</strong> Price is determined by <strong>Marginal Utility</strong> (scarcity), not Total Utility!
        </div>
      </section>

      {/* 4. Graph */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Visual Relationship</h3>
        <div style={{ width: '100%', height: 300, marginTop: '20px' }}>
          <ResponsiveContainer>
            <LineChart data={utilitySchedule}>
              <XAxis dataKey="units" stroke="#ccc" label={{ value: 'Units', position: 'insideBottom', offset: -5 }} />
              <YAxis stroke="#ccc" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }} />
              <ReferenceLine x={5} stroke="red" strokeDasharray="3 3" label="Saturation" />
              <Line type="monotone" dataKey="TU" stroke="#ffd700" strokeWidth={2} name="Total Utility" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="MU" stroke="#00ff88" strokeWidth={2} name="Marginal Utility" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default ConceptOfUtility;
