/**
 * MeaningOfIC.jsx - Section 2 of Lesson 4
 * Meaning of Indifference Curve and Indifference Map
 */
import { FaBezierCurve, FaTable, FaMap, FaInfoCircle } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceDot } from 'recharts';
import '../../css/lessons.css';
import '../../css/quiz.css';

// Helper to generate smooth hyperbolic data
const generateICData = (utility, startX, endX, step = 0.5) => {
  const data = [];
  for (let x = startX; x <= endX; x += step) {
    data.push({ x, y: utility / x });
  }
  return data;
};

// Data for single IC Curve (Utility = 12)
const IC_DATA = [
  { x: 1, y: 12, label: 'A' },
  { x: 2, y: 6, label: 'B' },
  { x: 3, y: 4, label: 'C' },
  { x: 4, y: 3, label: 'D' },
  { x: 6, y: 2, label: 'E' },
  { x: 12, y: 1, label: 'F' }, // Extended to show asymptotic nature
];

// Smooth line data for rendering
const IC_SMOOTH_DATA = generateICData(12, 0.5, 12, 0.2);

// Data for Indifference Map (Decreasing gaps: 10, 18, 24)
const MAP_DATA = [];
for (let x = 0.5; x <= 10; x += 0.2) {
  MAP_DATA.push({
    x,
    ic1: 10 / x,
    ic2: 18 / x,
    ic3: 24 / x
  });
}

function MeaningOfIC() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson" style={{ borderBottom: '2px solid #ffd700', paddingBottom: '1rem', marginBottom: '2rem' }}>
        <h2 className="section-title-lesson" style={{ color: '#ffd700', fontSize: '2.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Meaning of Indifference Curve</h2>
        <p className="section-subtitle-lesson" style={{ fontSize: '1.2rem', color: '#a0a0a0' }}>Defining the curve of equal satisfaction</p>
      </div>

      <div className="content-card" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
        <div className="card-content">

          {/* Definition Box */}
          <div style={{
            background: 'linear-gradient(90deg, rgba(255,215,0,0.15), transparent)',
            borderLeft: '5px solid #ffd700',
            padding: '2rem',
            marginBottom: '3rem',
            borderRadius: '0 8px 8px 0'
          }}>
            <h3 className="highlight-gold" style={{ marginTop: 0, fontSize: '1.5rem' }}>Definition</h3>
            <p style={{ fontSize: '1.3rem', fontStyle: 'italic', lineHeight: '1.6' }}>
              "An indifference curve is a graph showing combination of two goods that give the consumer equal satisfaction and utility."
            </p>
            <p style={{ marginTop: '1rem', color: '#e0e0e0' }}>
              Because each point on the curve provides the same level of satisfaction, the consumer is
              <strong> "indifferent"</strong> between them—meaning they don't prefer one combination over another.
            </p>
          </div>

          <h3 className="section-heading-styled" style={{ color: '#00ffff', borderBottom: '1px solid #00ffff', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Indifference Schedule</h3>

          <div className="table-graph-layout" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '3rem' }}>
            <div className="table-container" style={{ flex: 1, minWidth: '300px' }}>
              <table className="limitations-table" style={{ width: '100%', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>
                <thead>
                  <tr style={{ background: '#004d4d' }}>
                    <th style={{ color: '#00ffff' }}>Combination</th>
                    <th style={{ color: '#ffffff' }}>Apples (X)</th>
                    <th style={{ color: '#ffffff' }}>Oranges (Y)</th>
                    <th style={{ color: '#ffd700' }}>Satisfaction</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: 'A', x: 1, y: 12 },
                    { c: 'B', x: 2, y: 6 },
                    { c: 'C', x: 3, y: 4 },
                    { c: 'D', x: 4, y: 3 },
                  ].map(row => (
                    <tr key={row.c}>
                      <td style={{ fontWeight: 'bold', color: '#00ffff' }}>{row.c}</td>
                      <td>{row.x}</td>
                      <td>{row.y}</td>
                      <td style={{ fontStyle: 'italic', color: '#ffd700' }}>Equal</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="graph-container" style={{ flex: 1.5, minWidth: '350px', background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '12px' }}>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis type="number" dataKey="x" domain={[0, 13]} label={{ value: 'Apples (Good X)', position: 'bottom', fill: '#00ffff' }} stroke="#00ffff" />
                  <YAxis type="number" domain={[0, 13]} label={{ value: 'Oranges (Good Y)', angle: -90, position: 'left', fill: '#ffd700' }} stroke="#ffd700" />
                  <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffd700' }} />
                  <Line data={IC_SMOOTH_DATA} type="monotone" dataKey="y" stroke="#ffd700" strokeWidth={3} dot={false} animationDuration={1500} />
                  {/* Specific Points */}
                  {IC_DATA.slice(0, 4).map((pt, i) => (
                    <ReferenceDot key={i} x={pt.x} y={pt.y} r={5} fill="#ffd700" stroke="white" />
                  ))}
                </LineChart>
              </ResponsiveContainer>
              <p style={{ textAlign: 'center', marginTop: '0.5rem', color: '#ffd700', fontSize: '0.9rem' }}>Fig 1: Convex Indifference Curve</p>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h3 className="section-heading-styled" style={{ color: '#00ff88', borderBottom: '1px solid #00ff88', paddingBottom: '0.5rem', display: 'inline-block', marginBottom: '1.5rem' }}>Indifference Map</h3>

            <div className="limitation-item" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '2rem' }}>
              <div className="two-column-layout" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap-reverse' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.4rem' }}>
                    <FaMap style={{ color: '#00ff88' }} /> What is an Indifference Map?
                  </h4>
                  <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: '1.5rem 0' }}>
                    A set or family of indifference curves is known as an <strong>Indifference Map</strong>.
                  </p>
                  <ul className="bullet-list" style={{ lineHeight: '2' }}>
                    <li><strong style={{ color: '#00ff88' }}>IC₃ (Highest):</strong> Represents the highest level of satisfaction.</li>
                    <li><strong style={{ color: '#00ffff' }}>IC₂ (Middle):</strong> Moderate satisfaction.</li>
                    <li><strong style={{ color: '#ff4444' }}>IC₁ (Lowest):</strong> Lower satisfaction compared to others.</li>
                  </ul>
                  <div className="note-text" style={{ marginTop: '2rem', padding: '1rem', borderLeft: '4px solid #00ff88', background: 'rgba(0, 255, 136, 0.1)' }}>
                    <strong>Key Rule:</strong> Higher IC corresponds to higher income/consumption potential, thus higher satisfaction.
                  </div>
                </div>

                <div className="graph-container" style={{ flex: 1, minWidth: '300px' }}>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={MAP_DATA} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="x" type="number" domain={[0, 10]} stroke="#ffffff" hide />
                      <YAxis domain={[0, 30]} stroke="#ffffff" hide />
                      <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88' }} />
                      <Legend verticalAlign="top" height={36} />

                      <Line type="monotone" dataKey="ic1" name="IC₁ (Low)" stroke="#ff4444" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="ic2" name="IC₂ (Medium)" stroke="#00ffff" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="ic3" name="IC₃ (High)" stroke="#00ff88" strokeWidth={3} dot={false} />

                      {/* Arrow indicating higher satisfaction */}
                      <ReferenceDot x={5} y={24} r={0} label={{ value: 'Higher Satisfaction ↗', position: 'top', fill: '#ffffff' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaInfoCircle /></div>
            <div className="highlight-content">
              <h3>Monotonic Preferences</h3>
              <p>
                Consumer preferences are called <strong>monotonic</strong> if between two bundles, the consumer
                always prefers the bundle which has more of at least one of the goods and no less of the other good.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <div className="nav-hint">
          Next: Properties of Indifference Curves
        </div>
      </div>
    </section>
  );
}

export default MeaningOfIC;
