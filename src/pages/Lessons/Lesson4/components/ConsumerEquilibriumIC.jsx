/**
 * ConsumerEquilibriumIC.jsx - Section 6 of Lesson 4
 * Consumer Equilibrium Conditions
 * 
 * MATHEMATICAL BASIS:
 * ═══════════════════════════════════════════════════════════════
 * Utility Function: U = X × Y (Cobb-Douglas)
 * Budget Constraint: Px·X + Py·Y = M → X + Y = 6 (Px = Py = 1, M = 6)
 * 
 * MRS = MUx/MUy = ∂U/∂X / ∂U/∂Y = Y/X
 * 
 * EQUILIBRIUM CONDITION:
 * MRS = Px/Py → Y/X = 1/1 = 1 → Y = X
 * Substituting in budget: X + X = 6 → X* = 3, Y* = 3
 * 
 * EQUILIBRIUM POINT: E(3, 3) with Maximum Utility U* = 9
 * ═══════════════════════════════════════════════════════════════
 */

import { FaBalanceScale, FaCheckCircle, FaExclamationTriangle, FaChartArea } from 'react-icons/fa';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceDot,
  ReferenceLine,
  Label
} from 'recharts';
import '../../Lesson3/css/lesson3-brutalist.css';

// Generate mathematically accurate data points
const generateEquilibriumData = () => {
  const data = [];
  const xValues = [0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0];

  xValues.forEach(x => {
    const budget = Math.max(0, 6 - x);
    const ic1 = 4 / x;
    const ic2 = 9 / x;
    const ic3 = 14 / x;

    data.push({
      x: x,
      budget: budget >= 0 ? Number(budget.toFixed(2)) : null,
      ic1: Number(ic1.toFixed(2)),
      ic2: Number(ic2.toFixed(2)),
      ic3: Number(ic3.toFixed(2)),
    });
  });

  return data;
};

const EQUILIBRIUM_DATA = generateEquilibriumData();

function ConsumerEquilibriumIC() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 4 / SECTION 6</div>
          <h2 className="brutalist-title">CONSUMER<br />EQUILIBRIUM</h2>
          <p className="brutalist-subtitle">Achieving maximum satisfaction with limited income</p>
        </header>

        {/* The Concept */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">THE CONCEPT</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              In the indifference curve approach, a consumer is in equilibrium when they reach the
              <strong> highest possible indifference curve</strong> given their budget constraint.
            </p>
          </div>
        </section>

        {/* Two Conditions */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">TWO CONDITIONS FOR EQUILIBRIUM</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <div className="brutalist-number">01</div>
              <h4><FaBalanceScale style={{ marginRight: '8px' }} />TANGENCY CONDITION</h4>
              <p style={{ lineHeight: '1.7', marginBottom: '15px' }}>The budget line must be tangent to an indifference curve.</p>
              <div className="brutalist-formula" style={{ fontSize: '1.3rem' }}>
                MRS<sub>xy</sub> = P<sub>x</sub> / P<sub>y</sub>
              </div>
              <p style={{ marginTop: '15px', lineHeight: '1.7' }}>
                The rate at which consumer is <em>willing</em> to substitute (MRS) equals the rate at which market <em>requires</em> them to substitute (Price Ratio).
              </p>
            </div>

            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">02</div>
              <h4><FaCheckCircle style={{ marginRight: '8px' }} />CONVEXITY CONDITION</h4>
              <p style={{ lineHeight: '1.7' }}>
                Indifference curve must be <strong>convex to the origin</strong> at the point of equilibrium. This ensures that MRS is diminishing.
              </p>
            </div>
          </div>
        </section>

        {/* What if MRS ≠ Price Ratio */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">WHAT IF MRS<sub>xy</sub> ≠ P<sub>x</sub>/P<sub>y</sub>?</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item red">
              <h4>CASE 1: MRS<sub>xy</sub> {'>'} P<sub>x</sub>/P<sub>y</sub></h4>
              <p style={{ lineHeight: '1.7' }}>
                Consumer values X more than market. They will <strong>buy more of X</strong> and less of Y. As they get more X, MRS falls until it equals price ratio.
              </p>
            </div>
            <div className="brutalist-grid-item red">
              <h4>CASE 2: MRS<sub>xy</sub> {'<'} P<sub>x</sub>/P<sub>y</sub></h4>
              <p style={{ lineHeight: '1.7' }}>
                Consumer values X less than market. They will <strong>buy more of Y</strong> and less of X. As they get less X, MRS rises until it equals price ratio.
              </p>
            </div>
          </div>
        </section>

        {/* Mathematical Setup */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">MATHEMATICAL SETUP</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4>GIVEN</h4>
              <ul className="brutalist-list">
                <li><strong>Utility Function:</strong> U = X × Y</li>
                <li><strong>Budget Constraint:</strong> P<sub>x</sub>X + P<sub>y</sub>Y = M</li>
                <li><strong>Parameters:</strong> P<sub>x</sub>=1, P<sub>y</sub>=1, M=6</li>
              </ul>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4>SOLUTION</h4>
              <ul className="brutalist-list">
                <li><strong>MRS Condition:</strong> MU<sub>x</sub>/MU<sub>y</sub> = P<sub>x</sub>/P<sub>y</sub></li>
                <li><strong>MRS = Y/X = 1</strong></li>
                <li><strong>Equilibrium Point:</strong> E(3, 3)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GRAPH - PRESERVED EXACTLY */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">EQUILIBRIUM DIAGRAM</h3>
          <p style={{ marginBottom: '15px' }}>Consumer reaches equilibrium at point <strong>E(3, 3)</strong> where Budget Line is tangent to IC₂ (U = 9).</p>

          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000', padding: '20px' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>IC EQUILIBRIUM GRAPH</div>
            <ResponsiveContainer width="100%" height={500}>
              <ComposedChart
                data={EQUILIBRIUM_DATA}
                margin={{ top: 30, right: 40, left: 20, bottom: 40 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

                <XAxis
                  dataKey="x"
                  stroke="#00ffff"
                  domain={[0, 7]}
                  tickCount={8}
                  type="number"
                >
                  <Label value="Good X (Units)" position="bottom" offset={10} fill="#00ffff" />
                </XAxis>

                <YAxis
                  stroke="#ffd700"
                  domain={[0, 12]}
                  tickCount={7}
                >
                  <Label value="Good Y (Units)" angle={-90} position="left" offset={0} fill="#ffd700" />
                </YAxis>

                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(26, 26, 26, 0.95)',
                    border: '1px solid #ffd700',
                    borderRadius: '8px',
                    padding: '10px'
                  }}
                  formatter={(value, name) => {
                    const labels = {
                      budget: 'Budget Line',
                      ic1: 'IC₁ (U=4)',
                      ic2: 'IC₂ (U=9)',
                      ic3: 'IC₃ (U=14)'
                    };
                    return [value, labels[name] || name];
                  }}
                />

                <Legend
                  verticalAlign="top"
                  height={50}
                  wrapperStyle={{ paddingBottom: '20px', paddingTop: '10px' }}
                  formatter={(value) => {
                    const labels = {
                      budget: 'Budget Line (X + Y = 6)',
                      ic1: 'IC₁ (U = 4)',
                      ic2: 'IC₂ (U = 9)',
                      ic3: 'IC₃ (U = 14)'
                    };
                    return <span style={{ color: '#e0e0e0', marginRight: '15px', fontSize: '0.9rem' }}>{labels[value] || value}</span>;
                  }}
                />

                {/* Budget Line */}
                <Line
                  type="linear"
                  dataKey="budget"
                  name="budget"
                  stroke="#ffffff"
                  strokeWidth={3}
                  dot={false}
                  connectNulls={false}
                />

                {/* IC1 - Lower utility (dashed) */}
                <Line
                  type="monotone"
                  dataKey="ic1"
                  name="ic1"
                  stroke="#ff6b6b"
                  strokeWidth={2.5}
                  dot={false}
                  strokeDasharray="8 4"
                />

                {/* IC2 - Equilibrium IC (solid, bold) */}
                <Line
                  type="monotone"
                  dataKey="ic2"
                  name="ic2"
                  stroke="#ffd700"
                  strokeWidth={4}
                  dot={false}
                />

                {/* IC3 - Higher utility, unattainable (dashed) */}
                <Line
                  type="monotone"
                  dataKey="ic3"
                  name="ic3"
                  stroke="#00ff88"
                  strokeWidth={2.5}
                  dot={false}
                  strokeDasharray="8 4"
                />

                {/* Reference lines from equilibrium point */}
                <ReferenceLine x={3} stroke="#ffd700" strokeDasharray="5 5" strokeWidth={1.5} />
                <ReferenceLine y={3} stroke="#ffd700" strokeDasharray="5 5" strokeWidth={1.5} />

                {/* Equilibrium Point E(3, 3) */}
                <ReferenceDot x={3} y={3} r={10} fill="#ffd700" stroke="#ffffff" strokeWidth={3} />

                {/* Budget line intercepts */}
                <ReferenceDot x={0} y={6} r={6} fill="#ffffff" stroke="#00ffff" strokeWidth={2} />
                <ReferenceDot x={6} y={0} r={6} fill="#ffffff" stroke="#00ffff" strokeWidth={2} />

              </ComposedChart>
            </ResponsiveContainer>

            <p style={{ textAlign: 'center', color: '#ccc', marginTop: '15px' }}>
              At equilibrium <strong style={{ color: '#ffd700' }}>E(3, 3)</strong>: MRS = Y/X = 3/3 = <strong>1</strong> = P<sub>x</sub>/P<sub>y</sub> ✓
            </p>
          </div>
        </section>

        {/* Graph Analysis */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">GRAPH ANALYSIS</h3>
          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>CURVE</th>
                  <th>UTILITY</th>
                  <th>MEANING</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: '#ff6b6b' }}><strong>IC₁ (Red)</strong></td>
                  <td>U = 4</td>
                  <td>Lower satisfaction, crosses budget at 2 points</td>
                </tr>
                <tr>
                  <td style={{ color: '#ffd700' }}><strong>IC₂ (Gold)</strong></td>
                  <td>U = 9</td>
                  <td>EQUILIBRIUM IC - Tangent to budget at E(3,3)</td>
                </tr>
                <tr>
                  <td style={{ color: '#00ff88' }}><strong>IC₃ (Green)</strong></td>
                  <td>U = 14</td>
                  <td>Higher satisfaction but UNATTAINABLE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <section className="brutalist-card">
          <div className="brutalist-highlight dark">
            <FaExclamationTriangle style={{ marginRight: '10px', color: 'var(--brutalist-yellow)' }} />
            <strong>SUMMARY:</strong> A rational consumer moves until they reach point E, where they spend their entire budget to get maximum satisfaction. At E(3, 3), consumer buys <strong>3 units of X</strong> and <strong>3 units of Y</strong>, achieving utility U = 9.
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConsumerEquilibriumIC;