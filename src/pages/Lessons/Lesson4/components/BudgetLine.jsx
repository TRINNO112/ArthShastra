/**
 * BudgetLine.jsx - Section 5 of Lesson 4
 * Budget Line or Price Line
 */
import { useState } from 'react';
import { FaChartLine, FaMoneyBillWave, FaArrowRight, FaSyncAlt } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ReferenceDot, Label, Scatter, ScatterChart } from 'recharts';
import '../../css/lessons.css';
import '../../css/quiz.css';

const BUDGET_DATA = [
  { x: 0, y: 10, label: 'Intercept (M/Py)' },
  { x: 1, y: 9 },
  { x: 2, y: 8 },
  { x: 3, y: 7 },
  { x: 4, y: 6 },
  { x: 5, y: 5 },
  { x: 6, y: 4 },
  { x: 7, y: 3 },
  { x: 8, y: 2 },
  { x: 9, y: 1 },
  { x: 10, y: 0, label: 'Intercept (M/Px)' },
];

const FEASIBLE_AREA = [
  { x: 0, y: 10 },
  { x: 10, y: 0 },
  { x: 0, y: 0 },
];

function BudgetLine() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <h2 className="section-title-lesson">Budget Line / Price Line</h2>
        <p className="section-subtitle-lesson">The boundary of what is affordable for the consumer</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">Meaning</h3>
          <p>
            The <strong>Budget Line</strong> (or Price Line) shows various combinations of two goods which can be purchased with a given income (M) and market prices (Px, Py) when the consumer spends their <strong>entire income</strong>.
          </p>

          <div className="highlight-card gold" style={{ marginTop: '2rem' }}>
            <div className="highlight-icon"><FaMoneyBillWave /></div>
            <div className="highlight-content">
              <h3>Budget Line Visualization</h3>
              <p>Consider Income <strong>M = ₹100</strong>, Price of X <strong>Px = ₹10</strong>, Price of Y <strong>Py = ₹10</strong>.</p>

              <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '2.5rem 1.5rem 1.5rem 1.5rem', margin: '2rem 0' }}>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={BUDGET_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                      type="number"
                      domain={[0, 12]}
                      dataKey="x"
                      stroke="#00ffff"
                    >
                      <Label value="Good X (Units)" position="bottom" fill="#00ffff" />
                    </XAxis>
                    <YAxis
                      type="number"
                      domain={[0, 12]}
                      stroke="#ffd700"
                    >
                      <Label value="Good Y (Units)" angle={-90} position="left" fill="#ffd700" />
                    </YAxis>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffd700' }}
                      formatter={(v) => [v, "Units of Y"]}
                      labelFormatter={(v) => `Units of X: ${v}`}
                    />
                    {/* Budget Set (Area below the line) */}
                    <Area
                      type="linear"
                      dataKey="y"
                      stroke="none"
                      fill="rgba(0, 255, 255, 0.1)"
                      name="Budget Set (Feasible)"
                    />
                    {/* Budget Line */}
                    <Line
                      type="linear"
                      dataKey="y"
                      stroke="#ffd700"
                      strokeWidth={5}
                      dot={false}
                      name="Budget Line"
                    />
                    {/* Intercepts */}
                    <ReferenceDot x={0} y={10} r={8} fill="#ffd700" stroke="#ffffff" strokeWidth={3} isFront>
                      <Label value="M/Py" position="right" fill="#ffd700" />
                    </ReferenceDot>
                    <ReferenceDot x={10} y={0} r={8} fill="#ffd700" stroke="#ffffff" strokeWidth={3} isFront>
                      <Label value="M/Px" position="top" fill="#ffd700" />
                    </ReferenceDot>
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="math-explanation" style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem' }}>
                <h4 style={{ color: '#ffd700', marginBottom: '1rem' }}>📝 The Budget Equation</h4>
                <div className="formula-box" style={{ fontSize: '1.8rem', textAlign: 'center', margin: '1rem 0', color: '#00ffff' }}>
                  P<sub>x</sub>·X + P<sub>y</sub>·Y = M
                </div>
                <p style={{ textAlign: 'center', opacity: '0.8' }}>Where M = Total Income, P = Price, X/Y = Quantities</p>
              </div>
            </div>
          </div>

          <h3 className="highlight-cyan">Slope of Budget Line</h3>
          <p>The slope of the budget line is the ratio of the prices of the two goods.</p>
          <div className="formula-box" style={{ textAlign: 'center', background: 'rgba(0, 200, 255, 0.1)' }}>
            <strong>Slope = P<sub>x</sub> / P<sub>y</sub></strong>
          </div>
          <p>It is also called the <strong>Market Rate of Exchange (MRE)</strong> because it shows the rate at which the market allows the consumer to substitute one good for another.</p>

          <h3 className="highlight-green">Shifts and Rotations</h3>
          <div className="two-column">
            <div className="reason-card">
              <h4><FaSyncAlt /> Changes in Income</h4>
              <ul className="bullet-list">
                <li><strong>Income Increases:</strong> Budget line shifts <strong>Rightwards</strong> (parallel).</li>
                <li><strong>Income Decreases:</strong> Budget line shifts <strong>Leftwards</strong> (parallel).</li>
              </ul>
            </div>
            <div className="reason-card">
              <h4><FaSyncAlt /> Changes in Price</h4>
              <ul className="bullet-list">
                <li>Price of X falls: Line <strong>rotates outwards</strong> on X-axis.</li>
                <li>Price of X rises: Line <strong>rotates inwards</strong> on X-axis.</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaChartLine /></div>
            <div className="highlight-content">
              <h3>Budget Set vs. Budget Line</h3>
              <ul className="bullet-list">
                <li><strong>Budget Set:</strong> All combinations that cost <em>less than or equal to</em> income (P<sub>x</sub>X + P<sub>y</sub>Y {'≤'} M).</li>
                <li><strong>Budget Line:</strong> Combinations that cost <em>exactly</em> the income (P<sub>x</sub>X + P<sub>y</sub>Y = M).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <div className="nav-hint">
          Next: Consumer Equilibrium
        </div>
      </div>
    </section>
  );
}

export default BudgetLine;
