/**
 * BudgetLine.jsx - Section 5 of Lesson 4
 * Budget Line or Price Line
 */
import { useState } from 'react';
import { FaChartLine, FaMoneyBillWave, FaArrowRight, FaSyncAlt } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ReferenceDot, Label, Scatter, ScatterChart } from 'recharts';
import '../../Lesson3/css/lesson3-brutalist.css';

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
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 4 / SECTION 5</div>
          <h2 className="brutalist-title">BUDGET LINE<br />(PRICE LINE)</h2>
          <p className="brutalist-subtitle">The boundary of what is affordable for the consumer</p>
        </header>

        {/* Meaning */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">MEANING</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              The <strong>Budget Line</strong> (or Price Line) shows various combinations of two goods which can be purchased with a given income (M) and market prices (P<sub>x</sub>, P<sub>y</sub>) when the consumer spends their <strong>entire income</strong>.
            </p>
          </div>
        </section>

        {/* Budget Line Visualization - GRAPH PRESERVED */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">VISUALIZATION</h3>
          <p style={{ marginBottom: '15px' }}>Consider Income <strong>M = ₹100</strong>, Price of X <strong>P<sub>x</sub> = ₹10</strong>, Price of Y <strong>P<sub>y</sub> = ₹10</strong>.</p>

          {/* GRAPH CONTAINER - PRESERVED AS-IS */}
          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000', padding: '20px' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>BUDGET LINE GRAPH</div>
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

          <div className="brutalist-formula" style={{ marginTop: '25px' }}>
            P<sub>x</sub>·X + P<sub>y</sub>·Y = M
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.9rem' }}>Where M = Total Income, P = Price, X/Y = Quantities</p>
        </section>

        {/* Slope */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">SLOPE OF BUDGET LINE</h3>
          <p style={{ lineHeight: '1.8', marginBottom: '20px' }}>The slope of the budget line is the ratio of the prices of the two goods.</p>

          <div className="brutalist-formula">
            Slope = P<sub>x</sub> / P<sub>y</sub>
          </div>

          <div className="brutalist-note" style={{ marginTop: '20px' }}>
            <strong>ALSO CALLED:</strong> Market Rate of Exchange (MRE) - shows the rate at which the market allows the consumer to substitute one good for another.
          </div>
        </section>

        {/* Shifts and Rotations */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">SHIFTS AND ROTATIONS</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4><FaSyncAlt style={{ marginRight: '8px' }} />CHANGES IN INCOME</h4>
              <ul className="brutalist-list">
                <li><strong>Income Increases:</strong> Budget line shifts <strong>Rightwards</strong> (parallel)</li>
                <li><strong>Income Decreases:</strong> Budget line shifts <strong>Leftwards</strong> (parallel)</li>
              </ul>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4><FaSyncAlt style={{ marginRight: '8px' }} />CHANGES IN PRICE</h4>
              <ul className="brutalist-list">
                <li>Price of X falls: Line <strong>rotates outwards</strong> on X-axis</li>
                <li>Price of X rises: Line <strong>rotates inwards</strong> on X-axis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Budget Set vs Budget Line */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">BUDGET SET VS BUDGET LINE</h3>
          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>CONCEPT</th>
                  <th>EQUATION</th>
                  <th>MEANING</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Budget Set</strong></td>
                  <td>P<sub>x</sub>X + P<sub>y</sub>Y ≤ M</td>
                  <td>All combinations that cost <em>less than or equal to</em> income</td>
                </tr>
                <tr>
                  <td><strong>Budget Line</strong></td>
                  <td>P<sub>x</sub>X + P<sub>y</sub>Y = M</td>
                  <td>Combinations that cost <em>exactly</em> the income</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BudgetLine;
