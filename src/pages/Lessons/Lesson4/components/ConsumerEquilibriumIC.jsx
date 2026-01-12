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
 * 
 * INDIFFERENCE CURVES (Rectangular Hyperbolas: Y = U/X):
 * - IC1: U = 4  → Y = 4/X  (Lower utility, crosses budget line at 2 points)
 * - IC2: U = 9  → Y = 9/X  (Equilibrium IC, tangent to budget at (3,3))
 * - IC3: U = 14 → Y = 14/X (Higher utility, entirely above budget - unattainable)
 * 
 * PROPERTIES ENSURED:
 * 1. ICs never intersect (4/X < 9/X < 14/X for all X > 0)
 * 2. ICs never touch axes (asymptotic as X→0 and X→∞)
 * 3. ICs are convex to origin (d²Y/dX² = 2U/X³ > 0)
 * 4. Higher ICs represent higher utility
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
import './component.css';

// Generate mathematically accurate data points
const generateEquilibriumData = () => {
  const data = [];
  // Budget: Y = 6 - X (Px = Py = 1, M = 6)
  // IC1: Y = 4/X (U = 4)
  // IC2: Y = 9/X (U = 9, equilibrium IC)
  // IC3: Y = 14/X (U = 14, unattainable)

  const xValues = [0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.4, 2.6, 2.8, 3.0, 3.2, 3.4, 3.6, 3.8, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0];

  xValues.forEach(x => {
    const budget = Math.max(0, 6 - x); // Budget line: Y = 6 - X
    const ic1 = 4 / x;   // Lower utility IC
    const ic2 = 9 / x;   // Equilibrium IC (tangent at x=3)
    const ic3 = 14 / x;  // Higher utility IC (unattainable)

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

// Points where IC1 intersects budget line (for reference)
// 4/X = 6 - X → X² - 6X + 4 = 0 → X ≈ 0.76 and X ≈ 5.24
const IC1_BUDGET_INTERSECTIONS = [
  { x: 0.76, y: 5.24, label: 'A' },
  { x: 5.24, y: 0.76, label: 'B' }
];

function ConsumerEquilibriumIC() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <h2 className="section-title-lesson">Consumer Equilibrium</h2>
        <p className="section-subtitle-lesson">Achieving maximum satisfaction with limited income</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">The Concept</h3>
          <p>
            In the indifference curve approach, a consumer is in equilibrium when they reach the
            <strong> highest possible indifference curve</strong> given their budget constraint.
          </p>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaBalanceScale /></div>
            <div className="highlight-content">
              <h3>Condition 1: Tangency Condition</h3>
              <p>The budget line must be tangent to an indifference curve. At this point, the slope of the IC equals the slope of the budget line.</p>
              <div className="formula-box" style={{ fontSize: '1.5rem', textAlign: 'center', margin: '1rem 0' }}>
                MRS<sub>xy</sub> = P<sub>x</sub> / P<sub>y</sub>
              </div>
              <p>This means the rate at which the consumer is <em>willing</em> to substitute (MRS) equals the rate at which the market <em>requires</em> them to substitute (Price Ratio).</p>
            </div>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaCheckCircle /></div>
            <div className="highlight-content">
              <h3>Condition 2: Convexity Condition</h3>
              <p>Indifference curve must be <strong>convex to the origin</strong> at the point of equilibrium. This ensures that MRS is diminishing.</p>
            </div>
          </div>

          <h3 className="highlight-cyan">What if MRS<sub>xy</sub> ≠ P<sub>x</sub>/P<sub>y</sub>?</h3>
          <div className="two-column">
            <div className="reason-card" style={{ borderLeftColor: '#ff6b6b' }}>
              <h4>Case 1: MRS<sub>xy</sub> {'>'} P<sub>x</sub>/P<sub>y</sub></h4>
              <p>The consumer values X more than the market does. They will <strong>buy more of X</strong> and less of Y. As they get more X, MRS falls until it equals the price ratio.</p>
            </div>
            <div className="reason-card" style={{ borderLeftColor: '#ff6b6b' }}>
              <h4>Case 2: MRS<sub>xy</sub> {'<'} P<sub>x</sub>/P<sub>y</sub></h4>
              <p>The consumer values X less than the market does. They will <strong>buy more of Y</strong> and less of X. As they get less X, MRS rises until it equals the price ratio.</p>
            </div>
          </div>

          <h3 className="highlight-green">Equilibrium Diagram</h3>

          {/* Mathematical Explanation Box */}
          <div className="math-explanation property-item-container" style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,255,255,0.1))',
            border: '1px solid rgba(255,215,0,0.3)',
            borderRadius: '12px',
            padding: '2rem',
            marginBottom: '3rem',
            marginTop: '2rem'
          }}>
            <h4 style={{ color: '#ffd700', marginBottom: '1.5rem', fontSize: '1.3rem' }}>📐 Mathematical Setup</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <p><strong style={{ color: '#00ffff' }}>Utility Function:</strong> U = X × Y</p>
                <p><strong style={{ color: '#00ffff' }}>Budget Constraint:</strong> PₓX + PᵧY = M</p>
                <p><strong style={{ color: '#00ffff' }}>Parameters:</strong> Pₓ=1, Pᵧ=1, M=6</p>
              </div>
              <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                <p><strong style={{ color: '#ffd700' }}>MRS Conditon:</strong> MUₓ/MUᵧ = Pₓ/Pᵧ</p>
                <p><strong style={{ color: '#ffd700' }}>MRS = Y/X = 1</strong></p>
                <p><strong style={{ color: '#ffd700' }}>Equilibrium Point:</strong> E(3, 3)</p>
              </div>
            </div>
          </div>

          <div className="highlight-card gold" style={{ marginTop: '2rem' }}>
            <div className="highlight-icon"><FaChartArea /></div>
            <div className="highlight-content">
              <h3 style={{ marginBottom: '1rem' }}>Finding the Equilibrium Point</h3>
              <p style={{ marginBottom: '2rem' }}>The consumer reaches equilibrium at point <strong>E(3, 3)</strong> where the Budget Line is tangent to IC₂ (U = 9).</p>

              <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '2.5rem 1.5rem 1.5rem 1.5rem', margin: '2rem 0' }}>
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

                    {/* Budget Line - Straight line */}
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

                    {/* Reference lines from equilibrium point to axes */}
                    <ReferenceLine
                      x={3}
                      stroke="#ffd700"
                      strokeDasharray="5 5"
                      strokeWidth={1.5}
                    />
                    <ReferenceLine
                      y={3}
                      stroke="#ffd700"
                      strokeDasharray="5 5"
                      strokeWidth={1.5}
                    />

                    {/* Equilibrium Point E(3, 3) */}
                    <ReferenceDot
                      x={3}
                      y={3}
                      r={10}
                      fill="#ffd700"
                      stroke="#ffffff"
                      strokeWidth={3}
                    />

                    {/* Budget line intercepts */}
                    <ReferenceDot x={0} y={6} r={6} fill="#ffffff" stroke="#00ffff" strokeWidth={2} />
                    <ReferenceDot x={6} y={0} r={6} fill="#ffffff" stroke="#00ffff" strokeWidth={2} />

                  </ComposedChart>
                </ResponsiveContainer>

                {/* Graph Labels */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '2rem',
                  marginTop: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    background: 'rgba(255,215,0,0.2)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #ffd700'
                  }}>
                    <strong style={{ color: '#ffd700' }}>E(3, 3)</strong> = Equilibrium Point
                  </div>
                  <div style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #ffffff'
                  }}>
                    <strong>Budget:</strong> X + Y = 6
                  </div>
                </div>
              </div>

              {/* Detailed Explanation */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1.5rem',
                background: 'rgba(0,0,0,0.2)',
                borderRadius: '8px'
              }}>
                <h4 style={{ color: '#00ffff', marginBottom: '1rem' }}>📊 Graph Analysis:</h4>
                <ul className="graph-analysis-list" style={{ paddingLeft: '1.5rem' }}>
                  <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#ff6b6b' }}>IC₁ (Red dashed):</strong> <br />Utility U=4. Use Read Tool for lower level of satisfaction.</li>
                  <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#ffd700' }}>IC₂ (Gold solid):</strong> <br />Utility U=9. Tangent at E(3,3). Maximum attainable satisfaction!</li>
                  <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#00ff88' }}>IC₃ (Green dashed):</strong> <br />Utility U=14. Unattainable (needs more income).</li>
                  <li style={{ marginBottom: '0.8rem' }}><strong style={{ color: '#ffffff' }}>Budget Line (White):</strong> <br />Shows boundary of affordability.</li>
                </ul>
              </div>

              <p style={{ marginTop: '1rem' }}>
                At equilibrium <strong>E(3, 3)</strong>: MRS = Y/X = 3/3 = <strong>1</strong> = Pₓ/Pᵧ ✓
              </p>
            </div>
          </div>

          {/* Properties of the Graph */}
          <div className="highlight-card cyan" style={{ marginTop: '1.5rem' }}>
            <div className="highlight-icon"><FaCheckCircle /></div>
            <div className="highlight-content">
              <h3>Key Properties of Indifference Curves (Verified)</h3>
              <div className="two-column">
                <div className="reason-card" style={{ borderLeftColor: '#00ff88' }}>
                  <h4>✓ ICs Never Intersect</h4>
                  <p>Since IC₁ = 4/X {'<'} IC₂ = 9/X {'<'} IC₃ = 14/X for all X {'>'} 0, the curves maintain consistent separation.</p>
                </div>
                <div className="reason-card" style={{ borderLeftColor: '#00ff88' }}>
                  <h4>✓ ICs Never Touch Axes</h4>
                  <p>As X→0, Y→∞ and as X→∞, Y→0. The curves are asymptotic to both axes.</p>
                </div>
                <div className="reason-card" style={{ borderLeftColor: '#00ff88' }}>
                  <h4>✓ ICs Are Convex</h4>
                  <p>d²Y/dX² = 2U/X³ {'>'} 0 for all X {'>'} 0, ensuring diminishing MRS.</p>
                </div>
                <div className="reason-card" style={{ borderLeftColor: '#00ff88' }}>
                  <h4>✓ Higher ICs = Higher Utility</h4>
                  <p>Moving from IC₁→IC₂→IC₃ represents increasing satisfaction levels.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaExclamationTriangle /></div>
            <div className="highlight-content">
              <h3>Summary</h3>
              <p>A rational consumer will always move until they reach point E, where they spend their entire budget to get the maximum possible satisfaction (highest IC). At E(3, 3), the consumer buys <strong>3 units of X</strong> and <strong>3 units of Y</strong>, achieving utility U = 9.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <div className="nav-hint">
          Next: Final Quiz
        </div>
      </div>
    </section>
  );
}

export default ConsumerEquilibriumIC;