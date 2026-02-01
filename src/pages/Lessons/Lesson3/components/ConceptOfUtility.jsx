import React from 'react';
import { FaLightbulb, FaMousePointer } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import '../css/lesson3-brutalist.css';

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
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 3 / SECTION 2</div>
          <h2 className="brutalist-title">CONCEPT OF UTILITY</h2>
          <p className="brutalist-subtitle">Measuring satisfaction in Economics</p>
        </header>

        {/* 1. What is Utility? */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHAT IS UTILITY?</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              "Utility is the <strong>want-satisfying power</strong> of a commodity."
            </p>
          </div>
          <p style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.8' }}>
            It is the subjective satisfaction related to the consumption of goods. Note that utility is <strong>not</strong> usefulness. Alcohol has utility for a drinker, even if it is not useful for health.
          </p>
        </section>

        {/* 1.1 Features */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">FEATURES OF UTILITY</h3>
          <ul className="brutalist-list">
            <li><strong>Subjective:</strong> Varies from person to person (e.g., Book has utility for student, not illiterate).</li>
            <li><strong>Relative:</strong> Varies with time and place (e.g., Woollens have utility in winter, not summer).</li>
            <li><strong>Not measurable:</strong> It is a psychological feeling (Cardinal approach assumes it is measurable, but realistically it isn't).</li>
            <li><strong>Independent of Morality:</strong> A gun has utility for a soldier and a criminal. Economics doesn't judge.</li>
          </ul>
        </section>

        {/* 2. TU and MU - Definitions */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">TOTAL VS. MARGINAL UTILITY</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4>TOTAL UTILITY (TU)</h4>
              <p>The sum total of satisfaction derived from the consumption of all units of a commodity.</p>
              <div className="brutalist-formula" style={{ fontSize: '1.5rem', marginTop: '15px' }}>
                TU = ΣMU
              </div>
            </div>
            <div className="brutalist-grid-item green">
              <h4>MARGINAL UTILITY (MU)</h4>
              <p>The <strong>additional</strong> utility derived from consuming <strong>one more</strong> unit of the commodity.</p>
              <div className="brutalist-formula" style={{ fontSize: '1.5rem', marginTop: '15px' }}>
                MUn = TUn - TUn-1
              </div>
            </div>
          </div>
        </section>

        {/* 3. The Schedule (Table) */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">UTILITY SCHEDULE</h3>
          <p style={{ marginBottom: '20px' }}>Let's verify the relationship between TU and MU using numbers.</p>

          <div className="brutalist-table-container">
            <table className="brutalist-table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th>UNITS CONSUMED</th>
                  <th>MARGINAL UTILITY (MU)</th>
                  <th>TOTAL UTILITY (TU)</th>
                  <th>PHASE</th>
                </tr>
              </thead>
              <tbody>
                {utilitySchedule.map((row, index) => (
                  <tr key={index}
                    style={
                      row.MU === 0 ? { background: 'rgba(255, 235, 59, 0.3)' } :
                        row.MU < 0 ? { background: 'rgba(255, 23, 68, 0.15)' } : {}
                    }
                  >
                    <td><strong>{row.units}</strong></td>
                    <td style={{
                      color: row.MU < 0 ? 'var(--brutalist-red)' : (row.MU === 0 ? '#c7a600' : 'var(--brutalist-green)'),
                      fontWeight: 'bold'
                    }}>
                      {row.MU}
                    </td>
                    <td style={{ fontWeight: 'bold' }}>{row.TU}</td>
                    <td style={{ fontSize: '0.85rem' }}>
                      {row.MU > 0 && index > 0 && "TU Rises"}
                      {row.MU === 0 && index > 0 && <strong style={{ color: '#c7a600' }}>MAX SATISFACTION</strong>}
                      {row.MU < 0 && <span style={{ color: 'var(--brutalist-red)' }}>TU Falls</span>}
                      {index === 0 && "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. Graph */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">RELATIONSHIP BETWEEN TU AND MU</h3>

          {/* Explanation of Stages */}
          <div className="brutalist-highlight" style={{ background: 'var(--brutalist-gray)', marginBottom: '25px' }}>
            <strong style={{ display: 'block', marginBottom: '15px', fontFamily: 'var(--font-brutalist-heading)', fontSize: '1.2rem', letterSpacing: '1px' }}>UNDERSTANDING THE 3 STAGES:</strong>
            <div style={{ display: 'grid', gap: '10px' }}>
              <div style={{ paddingLeft: '15px', borderLeft: '4px solid var(--brutalist-green)' }}>
                <strong style={{ color: 'var(--brutalist-green)' }}>STAGE 1: INCREASING UTILITY</strong><br />
                <span>TU increases at a diminishing rate. MU is Positive but falling.</span>
              </div>
              <div style={{ paddingLeft: '15px', borderLeft: '4px solid var(--brutalist-yellow)' }}>
                <strong style={{ color: '#c7a600' }}>STAGE 2: POINT OF SATIETY (UNIT 5)</strong><br />
                <span>TU is Maximum (50). MU becomes Zero. Consumption should stop here.</span>
              </div>
              <div style={{ paddingLeft: '15px', borderLeft: '4px solid var(--brutalist-red)' }}>
                <strong style={{ color: 'var(--brutalist-red)' }}>STAGE 3: NEGATIVE UTILITY</strong><br />
                <span>TU starts falling (50→45). MU becomes Negative. Disutility occurs.</span>
              </div>
            </div>
          </div>

          <div className="brutalist-chart-container">
            <div style={{ width: '100%', height: 400 }}>
              <ResponsiveContainer>
                <LineChart data={utilitySchedule} margin={{ top: 20, right: 30, left: 10, bottom: 0 }}>
                  <XAxis
                    dataKey="units"
                    stroke="#333"
                    label={{ value: 'Units Consumed', position: 'insideBottom', offset: -5, fill: '#666' }}
                  />
                  <YAxis
                    stroke="#333"
                    domain={[-15, 60]}
                    ticks={[-10, 0, 10, 20, 30, 40, 50, 60]}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#fff', border: '3px solid #000', fontFamily: 'Space Mono' }}
                    itemStyle={{ color: '#000' }}
                  />
                  <ReferenceLine x={5} stroke="#c7a600" strokeWidth={2} strokeDasharray="5 5" label={{ position: 'top', value: 'Satiety', fill: '#c7a600', fontSize: 12 }} />
                  <ReferenceLine y={0} stroke="#333" />

                  <Line
                    type="monotone"
                    dataKey="TU"
                    stroke="#c7a600"
                    strokeWidth={4}
                    name="Total Utility"
                    dot={{ r: 5, fill: '#c7a600', stroke: '#000', strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="MU"
                    stroke="var(--brutalist-green)"
                    strokeWidth={4}
                    name="Marginal Utility"
                    dot={{ r: 5, fill: 'var(--brutalist-green)', stroke: '#000', strokeWidth: 2 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.9rem' }}>
              <FaMousePointer /> Hover over points to see exact values
            </div>
          </div>
        </section>

        {/* 5. Diamond Water Paradox */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">THE DIAMOND-WATER PARADOX</h3>
          <p style={{ marginBottom: '25px', fontSize: '1.1rem' }}>Why is water (essential) cheap, while diamonds (useless) are expensive?</p>

          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item cyan">
              <h4>💧 WATER</h4>
              <ul className="brutalist-list">
                <li><strong>Total Utility:</strong> Very High (Essential)</li>
                <li><strong>Supply:</strong> Abundant</li>
                <li><strong>Marginal Utility:</strong> Low (Abundance means low value for next drop)</li>
                <li><strong>Price:</strong> Low</li>
              </ul>
            </div>
            <div className="brutalist-grid-item yellow">
              <h4>💎 DIAMONDS</h4>
              <ul className="brutalist-list">
                <li><strong>Total Utility:</strong> Low (Non-essential)</li>
                <li><strong>Supply:</strong> Scarce</li>
                <li><strong>Marginal Utility:</strong> High (Scarcity means high value for next unit)</li>
                <li><strong>Price:</strong> High</li>
              </ul>
            </div>
          </div>

          <div className="brutalist-highlight dark" style={{ marginTop: '25px' }}>
            <strong>CONCLUSION:</strong> Price is determined by MARGINAL utility, not TOTAL utility!
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConceptOfUtility;
