/**
 * MeaningOfIC.jsx - Section 2 of Lesson 4
 * Meaning of Indifference Curve and Indifference Map
 */
import { FaBezierCurve, FaTable, FaMap, FaInfoCircle } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceDot } from 'recharts';
import '../../Lesson3/css/lesson3-brutalist.css';

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
  { x: 12, y: 1, label: 'F' },
];

// Smooth line data for rendering
const IC_SMOOTH_DATA = generateICData(12, 0.5, 12, 0.2);

// Data for Indifference Map
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
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 4 / SECTION 2</div>
          <h2 className="brutalist-title">MEANING OF<br />INDIFFERENCE CURVE</h2>
          <p className="brutalist-subtitle">Defining the curve of equal satisfaction</p>
        </header>

        {/* Definition */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">DEFINITION</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              "An indifference curve is a graph showing combination of two goods that give the consumer <strong>equal satisfaction and utility</strong>."
            </p>
          </div>
          <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
            Because each point on the curve provides the same level of satisfaction, the consumer is
            <strong> "indifferent"</strong> between them—meaning they don't prefer one combination over another.
          </p>
        </section>

        {/* Indifference Schedule & Graph */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">INDIFFERENCE SCHEDULE</h3>

          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>COMBINATION</th>
                  <th>APPLES (X)</th>
                  <th>ORANGES (Y)</th>
                  <th>SATISFACTION</th>
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
                    <td><strong>{row.c}</strong></td>
                    <td>{row.x}</td>
                    <td>{row.y}</td>
                    <td style={{ color: 'var(--brutalist-yellow)', fontWeight: 'bold' }}>EQUAL</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* GRAPH - PRESERVED */}
          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000', marginTop: '25px' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>INDIFFERENCE CURVE</div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" dataKey="x" domain={[0, 13]} label={{ value: 'Apples (Good X)', position: 'bottom', fill: '#00ffff' }} stroke="#00ffff" />
                <YAxis type="number" domain={[0, 13]} label={{ value: 'Oranges (Good Y)', angle: -90, position: 'left', fill: '#ffd700' }} stroke="#ffd700" />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffd700' }} />
                <Line data={IC_SMOOTH_DATA} type="monotone" dataKey="y" stroke="#ffd700" strokeWidth={3} dot={false} />
                {IC_DATA.slice(0, 4).map((pt, i) => (
                  <ReferenceDot key={i} x={pt.x} y={pt.y} r={5} fill="#ffd700" stroke="white" />
                ))}
              </LineChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', color: '#ccc', fontSize: '0.9rem' }}>Fig 1: Convex Indifference Curve</p>
          </div>
        </section>

        {/* Indifference Map */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">INDIFFERENCE MAP</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              A set or family of indifference curves is known as an <strong>Indifference Map</strong>.
            </p>
          </div>

          <div className="brutalist-grid-2" style={{ marginTop: '25px' }}>
            <div className="brutalist-grid-item yellow">
              <h4>IC₃ (HIGHEST)</h4>
              <p>Represents the highest level of satisfaction.</p>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4>IC₂ (MEDIUM)</h4>
              <p>Moderate satisfaction level.</p>
            </div>
            <div className="brutalist-grid-item red">
              <h4>IC₁ (LOWEST)</h4>
              <p>Lower satisfaction compared to others.</p>
            </div>
          </div>

          {/* GRAPH - PRESERVED */}
          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000', marginTop: '25px' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>INDIFFERENCE MAP</div>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={MAP_DATA} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="x" type="number" domain={[0, 10]} stroke="#ffffff" hide />
                <YAxis domain={[0, 30]} stroke="#ffffff" hide />
                <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff88' }} />
                <Legend verticalAlign="top" height={36} />
                <Line type="monotone" dataKey="ic1" name="IC₁ (Low)" stroke="#ff4444" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ic2" name="IC₂ (Medium)" stroke="#00ffff" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="ic3" name="IC₃ (High)" stroke="#00ff88" strokeWidth={3} dot={false} />
                <ReferenceDot x={5} y={24} r={0} label={{ value: 'Higher Satisfaction ↗', position: 'top', fill: '#ffffff' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="brutalist-highlight" style={{ marginTop: '20px' }}>
            <strong>KEY RULE:</strong> Higher IC corresponds to higher income/consumption potential, thus higher satisfaction.
          </div>
        </section>

        {/* Monotonic Preferences */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">MONOTONIC PREFERENCES</h3>
          <p style={{ lineHeight: '1.8' }}>
            Consumer preferences are called <strong>monotonic</strong> if between two bundles, the consumer
            always prefers the bundle which has more of at least one of the goods and no less of the other good.
          </p>
        </section>
      </div>
    </div>
  );
}

export default MeaningOfIC;
