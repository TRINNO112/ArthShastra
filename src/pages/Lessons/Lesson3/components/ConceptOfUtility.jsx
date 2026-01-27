import React from 'react';
import { FaLightbulb, FaMousePointer } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, ReferenceArea } from 'recharts';
import '../css/Lesson3Clean.css';

const utilitySchedule = [
  { units: 0, MU: 0, TU: 0 },
  { units: 1, MU: 20, TU: 20 },
  { units: 2, MU: 15, TU: 35 },
  { units: 3, MU: 10, TU: 45 },
  { units: 4, MU: 5, TU: 50 },
  { units: 5, MU: 0, TU: 50 }, // Point of Satiety
  { units: 6, MU: -5, TU: 45 },
  { units: 7, MU: -10, TU: 35 },
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

      {/* 1.1 Features */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Features of Utility</h3>
        <ul className="l3-list">
          <li><strong>Subjective:</strong> Varies from person to person (e.g., Book has utility for student, not illiterate).</li>
          <li><strong>Relative:</strong> Varies with time and place (e.g., Woollens have utility in winter, not summer).</li>
          <li><strong>Not measurable:</strong> It is a psychological feeling (Cardinal approach assumes it is measurable, but realistically it isn't).</li>
          <li><strong>Independent of Morality:</strong> A gun has utility for a soldier and a criminal. Economics doesn't judge.</li>
        </ul>
      </section>

      {/* 2. TU and MU - Definitions */}
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

      {/* 3. The Schedule (Table) */}
      <section className="lesson3-card">
        <h3 className="l3-heading-gold">Utility Schedule</h3>
        <p className="mb-3">Let's verify the relationship between TU and MU using numbers.</p>

        <div className="l3-table-container">
          <table className="l3-table" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Units Consumed</th>
                <th>Marginal Utility (MU)</th>
                <th>Total Utility (TU)</th>
                <th>Phase</th>
              </tr>
            </thead>
            <tbody>
              {utilitySchedule.map((row, index) => (
                <tr key={index}
                  style={
                    row.MU === 0 ? { background: 'rgba(255, 215, 0, 0.2)' } :
                      row.MU < 0 ? { background: 'rgba(255, 107, 107, 0.1)' } : {}
                  }
                >
                  <td>{row.units}</td>
                  <td style={{ color: row.MU < 0 ? '#ff6b6b' : (row.MU === 0 ? 'var(--l3-gold)' : 'var(--l3-green)') }}>
                    {row.MU}
                  </td>
                  <td style={{ color: 'var(--l3-gold)' }}>{row.TU}</td>
                  <td style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    {row.MU > 0 && index > 0 && "TU Rises"}
                    {row.MU === 0 && index > 0 && <strong style={{ color: 'var(--l3-gold)' }}>Max Satisfaction</strong>}
                    {row.MU < 0 && <span style={{ color: '#ff6b6b' }}>TU Falls</span>}
                    {index === 0 && "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Graph */}
      <section className="lesson3-card">
        <h3 className="l3-heading-cyan">Relationship between TU and MU</h3>

        {/* Explanation of Stages */}
        <div style={{ marginBottom: '30px', background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '12px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Understanding the 3 Stages:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', borderLeft: '3px solid var(--l3-green)' }}>
              <strong style={{ color: 'var(--l3-green)' }}>Stage 1: Increasing Utility</strong>
              <br />
              <span style={{ color: '#ccc' }}>TU increases at a diminishing rate. MU is Positive but falling.</span>
            </li>
            <li style={{ marginBottom: '10px', paddingLeft: '15px', borderLeft: '3px solid var(--l3-gold)' }}>
              <strong style={{ color: 'var(--l3-gold)' }}>Stage 2: Point of Satiety (Unit 5)</strong>
              <br />
              <span style={{ color: '#ccc' }}>TU is Maximum (50). MU becomes Zero. Consumption should stop here.</span>
            </li>
            <li style={{ paddingLeft: '15px', borderLeft: '3px solid var(--l3-red)' }}>
              <strong style={{ color: 'var(--l3-red)' }}>Stage 3: Negative Utility</strong>
              <br />
              <span style={{ color: '#ccc' }}>TU starts falling (50→45). MU becomes Negative. Disutility occurs.</span>
            </li>
          </ul>
        </div>

        <div style={{ width: '100%', height: 450, marginTop: '20px', position: 'relative' }}>
          <ResponsiveContainer>
            <LineChart data={utilitySchedule} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
              <XAxis
                dataKey="units"
                stroke="#ccc"
                label={{ value: 'Units Consumed', position: 'insideBottom', offset: -5, fill: '#888' }}
              />
              {/* Y Axis with more ticks (step of 5) for better "scaling" detail */}
              <YAxis
                stroke="#ccc"
                domain={[-15, 60]}
                ticks={[-10, 0, 10, 20, 30, 40, 50, 60]}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid #333', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <ReferenceLine x={5} stroke="var(--l3-gold)" strokeDasharray="3 3" label={{ position: 'top', value: 'Satiety', fill: 'var(--l3-gold)', fontSize: 12 }} />
              <ReferenceLine y={0} stroke="#666" />

              <Line
                type="monotone"
                dataKey="TU"
                stroke="#ffd700"
                strokeWidth={3}
                name="Total Utility"
                dot={{ r: 4, fill: '#ffd700' }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="MU"
                stroke="#00ff88"
                strokeWidth={3}
                name="Marginal Utility"
                dot={{ r: 4, fill: '#00ff88' }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div style={{ textAlign: 'center', marginTop: '10px', color: '#888', fontSize: '0.8rem' }}>
            <FaMousePointer /> Hover over points to see exact values
          </div>
        </div>
      </section>

      {/* 5. Diamond Water Paradox */}
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
      </section>
    </div>
  );
};

export default ConceptOfUtility;
