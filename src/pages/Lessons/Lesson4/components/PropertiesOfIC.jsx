/**
 * PropertiesOfIC.jsx - Section 3 of Lesson 4
 * Properties of Indifference Curves
 * BRUTALIST THEME VERSION - ALL GRAPHS VISIBLE
 */

import {
  FaArrowDown,
  FaShapes,
  FaBan,
  FaCheckCircle,
  FaLightbulb,
  FaCalculator,
  FaChartLine,
  FaInfinity,
  FaExclamationTriangle
} from 'react-icons/fa';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  Label,
  Tooltip
} from 'recharts';
import '../../Lesson3/css/lesson3-brutalist.css';

// Generate IC data for downward slope demonstration
const generateSlopeData = () => {
  const U = 12;
  const data = [];
  for (let x = 1; x <= 10; x += 0.25) {
    data.push({ x, ic: U / x });
  }
  return data;
};

// Generate multiple ICs for comparison
const generateMultipleICData = () => {
  const data = [];
  for (let x = 0.5; x <= 10; x += 0.25) {
    data.push({
      x: Number(x.toFixed(2)),
      ic1: Number((4 / x).toFixed(3)),
      ic2: Number((9 / x).toFixed(3)),
      ic3: Number((16 / x).toFixed(3)),
    });
  }
  return data;
};

// Generate MRS demonstration data (for convex property)
const generateMRSData = () => {
  const U = 10;
  const data = [];
  for (let x = 0.8; x <= 10; x += 0.2) {
    data.push({
      x: Number(x.toFixed(2)),
      ic: Number((U / x).toFixed(3)),
    });
  }
  return data;
};

// Generate data for intersection contradiction
const generateIntersectionData = () => {
  const data = [];
  for (let x = 0.5; x <= 10; x += 0.2) {
    const ic1 = 8 / x;
    const ic2 = 2 + 6 / (x + 0.5);
    data.push({
      x: Number(x.toFixed(2)),
      ic1: Number(ic1.toFixed(3)),
      ic2: Number(ic2.toFixed(3)),
    });
  }
  return data;
};

// Generate asymptotic data (IC not touching axes)
const generateAsymptoticData = () => {
  const U = 8;
  const data = [];
  for (let x = 0.3; x <= 12; x += 0.2) {
    data.push({
      x: Number(x.toFixed(2)),
      ic: Math.min(Number((U / x).toFixed(3)), 28),
    });
  }
  return data;
};

const slopeData = generateSlopeData();
const multipleICData = generateMultipleICData();
const mrsData = generateMRSData();
const intersectionData = generateIntersectionData();
const asymptoticData = generateAsymptoticData();

function PropertiesOfIC() {
  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 4 / SECTION 3</div>
          <h2 className="brutalist-title">PROPERTIES OF<br />INDIFFERENCE CURVES</h2>
          <p className="brutalist-subtitle">Understanding the geometric and economic rules that govern preferences</p>
        </header>

        {/* Mathematical Foundation */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">MATHEMATICAL FOUNDATION</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4><FaCalculator style={{ marginRight: '8px' }} />UTILITY FUNCTION</h4>
              <div className="brutalist-formula">U = X × Y</div>
            </div>
            <div className="brutalist-grid-item cyan">
              <h4><FaChartLine style={{ marginRight: '8px' }} />IC EQUATION</h4>
              <div className="brutalist-formula">Y = U / X</div>
            </div>
          </div>
          <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.95rem' }}>
            Curve Type: <strong>Rectangular Hyperbola</strong> | MRS: <strong>Y/X</strong>
          </p>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PROPERTY 1: DOWNWARD SLOPING */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">
            <span style={{ marginRight: '10px', background: '#000', color: '#ffeb3b', padding: '5px 12px' }}>01</span>
            DOWNWARD SLOPING (NEGATIVE SLOPE)
          </h3>

          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              <FaArrowDown style={{ marginRight: '10px' }} />
              An IC always slopes downward from left to right. Getting more of X requires giving up some Y to stay on the same satisfaction level.
            </p>
          </div>

          <div className="brutalist-formula" style={{ margin: '20px 0' }}>
            dY/dX = -U/X² {'<'} 0 (Always Negative)
          </div>

          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>DOWNWARD SLOPE DEMONSTRATION</div>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={slopeData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="x" type="number" domain={[0, 10]} stroke="#00ffff">
                  <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
                </XAxis>
                <YAxis domain={[0, 14]} stroke="#ffd700">
                  <Label value="Good Y →" angle={-90} position="left" fill="#ffd700" />
                </YAxis>
                <Line type="monotone" dataKey="ic" stroke="#ffd700" strokeWidth={4} dot={false} name="IC (U=12)" />
                <ReferenceLine segment={[{ x: 2, y: 6 }, { x: 6, y: 2 }]} stroke="#ff6b6b" strokeWidth={2} strokeDasharray="5 5" />
                <ReferenceDot x={2} y={6} r={8} fill="#00ffff" stroke="#fff" strokeWidth={2}>
                  <Label value="A (2, 6)" position="top" fill="#00ffff" offset={15} />
                </ReferenceDot>
                <ReferenceDot x={6} y={2} r={8} fill="#00ffff" stroke="#fff" strokeWidth={2}>
                  <Label value="B (6, 2)" position="right" fill="#00ffff" offset={10} />
                </ReferenceDot>
              </ComposedChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', color: '#aaa', marginTop: '10px' }}>
              Moving A→B: Gained 4X, Lost 4Y | Slope = ΔY/ΔX = -4/4 = <strong style={{ color: '#ff6b6b' }}>-1</strong>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PROPERTY 2: CONVEX TO ORIGIN */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">
            <span style={{ marginRight: '10px', background: '#000', color: '#00bcd4', padding: '5px 12px' }}>02</span>
            CONVEX TO THE ORIGIN
          </h3>

          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              <FaShapes style={{ marginRight: '10px' }} />
              ICs are bowed inward (convex) toward the origin due to <strong>Diminishing MRS</strong>. As you get more X, each unit is worth less Y.
            </p>
          </div>

          <div className="brutalist-formula" style={{ margin: '20px 0' }}>
            d²Y/dX² = 2U/X³ {'>'} 0 (Second Derivative Positive → Convex)
          </div>

          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>DIMINISHING MRS DEMONSTRATION</div>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={mrsData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="x" type="number" domain={[0, 10]} stroke="#00ffff">
                  <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
                </XAxis>
                <YAxis domain={[0, 14]} stroke="#ffd700">
                  <Label value="Good Y →" angle={-90} position="left" fill="#ffd700" />
                </YAxis>
                <Line type="monotone" dataKey="ic" stroke="#00ffff" strokeWidth={4} dot={false} name="IC (U=10)" />
                <ReferenceDot x={2} y={5} r={10} fill="#ff6b6b" stroke="#fff" strokeWidth={2}>
                  <Label value="A: MRS=2.5" position="left" fill="#ff6b6b" offset={15} />
                </ReferenceDot>
                <ReferenceDot x={5} y={2} r={10} fill="#00ff88" stroke="#fff" strokeWidth={2}>
                  <Label value="B: MRS=0.4" position="right" fill="#00ff88" offset={15} />
                </ReferenceDot>
                <ReferenceDot x={0} y={0} r={5} fill="#fff">
                  <Label value="O" position="bottomRight" fill="#fff" />
                </ReferenceDot>
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="brutalist-grid-2" style={{ marginTop: '20px' }}>
            <div className="brutalist-grid-item red">
              <h4>At Point A (2, 5)</h4>
              <p>MRS = 5/2 = <strong>2.5</strong></p>
              <p style={{ fontSize: '0.9rem' }}>STEEP slope — willing to give up a lot of Y for X</p>
            </div>
            <div className="brutalist-grid-item green">
              <h4>At Point B (5, 2)</h4>
              <p>MRS = 2/5 = <strong>0.4</strong></p>
              <p style={{ fontSize: '0.9rem' }}>FLAT slope — willing to give up very little Y for X</p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PROPERTY 3: HIGHER IC = MORE SATISFACTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading green">
            <span style={{ marginRight: '10px', background: '#000', color: '#4caf50', padding: '5px 12px' }}>03</span>
            HIGHER IC = MORE SATISFACTION
          </h3>

          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              <FaCheckCircle style={{ marginRight: '10px' }} />
              ICs further from the origin represent higher satisfaction. Bundles on higher curves have more of at least one good (often both).
            </p>
          </div>

          <div className="brutalist-formula" style={{ margin: '20px 0' }}>
            U₁ {'<'} U₂ {'<'} U₃ ⟹ IC₁ below IC₂ below IC₃
          </div>

          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>INDIFFERENCE MAP (MULTIPLE ICs)</div>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={multipleICData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="x" type="number" domain={[0, 10]} stroke="#00ffff">
                  <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
                </XAxis>
                <YAxis domain={[0, 20]} stroke="#ffd700">
                  <Label value="Good Y →" angle={-90} position="left" fill="#ffd700" />
                </YAxis>
                <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #ffd700' }} />
                <Line type="monotone" dataKey="ic1" stroke="#ff4444" strokeWidth={3} dot={false} name="IC₁ (U=4)" />
                <Line type="monotone" dataKey="ic2" stroke="#ffa500" strokeWidth={3} dot={false} name="IC₂ (U=9)" />
                <Line type="monotone" dataKey="ic3" stroke="#00ff88" strokeWidth={4} dot={false} name="IC₃ (U=16)" />
                <ReferenceDot x={2} y={2} r={6} fill="#ff4444" stroke="#fff" strokeWidth={2}>
                  <Label value="(2,2)" position="bottom" fill="#ff4444" />
                </ReferenceDot>
                <ReferenceDot x={3} y={3} r={6} fill="#ffa500" stroke="#fff" strokeWidth={2}>
                  <Label value="(3,3)" position="bottom" fill="#ffa500" />
                </ReferenceDot>
                <ReferenceDot x={4} y={4} r={6} fill="#00ff88" stroke="#fff" strokeWidth={2}>
                  <Label value="(4,4)" position="top" fill="#00ff88" />
                </ReferenceDot>
              </ComposedChart>
            </ResponsiveContainer>
            <p style={{ textAlign: 'center', color: '#aaa', marginTop: '10px' }}>
              Arrow direction: <span style={{ color: '#00ff88' }}>↗ Higher ICs = More Satisfaction</span>
            </p>
          </div>

          <div className="brutalist-table-container" style={{ marginTop: '20px' }}>
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>CURVE</th>
                  <th>UTILITY</th>
                  <th>REPRESENTATIVE POINT</th>
                  <th>SATISFACTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: '#ff4444' }}><strong>IC₁</strong></td>
                  <td>U = 4</td>
                  <td>(2, 2)</td>
                  <td>LOW</td>
                </tr>
                <tr>
                  <td style={{ color: '#ffa500' }}><strong>IC₂</strong></td>
                  <td>U = 9</td>
                  <td>(3, 3)</td>
                  <td>MEDIUM</td>
                </tr>
                <tr>
                  <td style={{ color: '#00ff88' }}><strong>IC₃</strong></td>
                  <td>U = 16</td>
                  <td>(4, 4)</td>
                  <td>HIGH ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PROPERTY 4: ICS NEVER INTERSECT */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading red">
            <span style={{ marginRight: '10px', background: '#000', color: '#f44336', padding: '5px 12px' }}>04</span>
            ICs NEVER INTERSECT
          </h3>

          <div className="brutalist-definition" style={{ borderColor: '#ff4444' }}>
            <p className="brutalist-definition-text">
              <FaBan style={{ marginRight: '10px', color: '#ff4444' }} />
              Two ICs can NEVER cross each other. If they did, the same bundle would give two different utility levels — <strong>LOGICAL IMPOSSIBILITY!</strong>
            </p>
          </div>

          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #ff4444', position: 'relative' }}>
            <div className="brutalist-chart-title" style={{ color: '#ff4444' }}>
              <FaExclamationTriangle style={{ marginRight: '10px' }} />
              WHY INTERSECTION IS IMPOSSIBLE
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={intersectionData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,0,0,0.15)" />
                <XAxis dataKey="x" type="number" domain={[0, 10]} stroke="#ff4444">
                  <Label value="Good X" position="bottom" offset={10} fill="#ff4444" />
                </XAxis>
                <YAxis domain={[0, 18]} stroke="#ff4444">
                  <Label value="Good Y" angle={-90} position="left" fill="#ff4444" />
                </YAxis>
                <Line type="monotone" dataKey="ic1" stroke="#ff4444" strokeWidth={3} dot={false} name="IC₁" />
                <Line type="monotone" dataKey="ic2" stroke="#ff8888" strokeWidth={3} dot={false} name="IC₂" strokeDasharray="8 4" />
                <ReferenceDot x={1.69} y={4.75} r={12} fill="#fff" stroke="#ff0000" strokeWidth={3}>
                  <Label value="A (Intersection)" position="top" fill="#fff" offset={20} />
                </ReferenceDot>
                <ReferenceDot x={4} y={2} r={8} fill="#00ffff" stroke="#fff" strokeWidth={2}>
                  <Label value="B" position="bottom" fill="#00ffff" offset={10} />
                </ReferenceDot>
                <ReferenceDot x={4} y={3.33} r={8} fill="#ffd700" stroke="#fff" strokeWidth={2}>
                  <Label value="C" position="top" fill="#ffd700" offset={10} />
                </ReferenceDot>
              </ComposedChart>
            </ResponsiveContainer>
            {/* Ban overlay */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2, pointerEvents: 'none' }}>
              <FaBan style={{ fontSize: '200px', color: '#ff0000' }} />
            </div>
          </div>

          <div className="brutalist-note" style={{ marginTop: '20px', borderColor: '#ff4444' }}>
            <strong style={{ color: '#ff4444' }}>PROOF BY CONTRADICTION:</strong>
            <div style={{ marginTop: '10px', lineHeight: '1.8' }}>
              <p><strong>1.</strong> Assume IC₁ and IC₂ intersect at point A</p>
              <p><strong>2.</strong> Point B is on IC₁ only, Point C is on IC₂ only</p>
              <p><strong>3.</strong> A & B on IC₁ → U(A) = U(B)</p>
              <p><strong>4.</strong> A & C on IC₂ → U(A) = U(C)</p>
              <p><strong>5.</strong> By transitivity: U(B) = U(C)</p>
              <p><strong>6.</strong> BUT C clearly has more goods than B → U(C) {'>'} U(B)</p>
              <p style={{ color: '#ff4444', fontWeight: 'bold', marginTop: '10px', fontSize: '1.1rem' }}>
                <FaBan style={{ marginRight: '8px' }} />CONTRADICTION! Therefore ICs CANNOT intersect.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PROPERTY 5: ICS NEVER TOUCH AXES */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">
            <span style={{ marginRight: '10px', background: '#000', color: '#ffeb3b', padding: '5px 12px' }}>05</span>
            ICs NEVER TOUCH THE AXES
          </h3>

          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              <FaInfinity style={{ marginRight: '10px' }} />
              ICs approach but <strong>never actually touch</strong> either axis. They are <strong>asymptotic</strong> to both X and Y axes.
            </p>
          </div>

          <div className="brutalist-formula" style={{ margin: '20px 0' }}>
            As X → 0, Y → ∞ | As X → ∞, Y → 0
          </div>

          <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000' }}>
            <div className="brutalist-chart-title" style={{ color: '#fff' }}>ASYMPTOTIC BEHAVIOR</div>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={asymptoticData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="x" type="number" domain={[0, 12]} stroke="#00ffff">
                  <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
                </XAxis>
                <YAxis domain={[0, 30]} stroke="#ffd700">
                  <Label value="Good Y →" angle={-90} position="left" fill="#ffd700" />
                </YAxis>
                <Line type="monotone" dataKey="ic" stroke="#ffd700" strokeWidth={4} dot={false} name="IC (U=8)" />
                {/* Axis highlight */}
                <ReferenceLine x={0} stroke="#ff6b6b" strokeWidth={3} />
                <ReferenceLine y={0} stroke="#ff6b6b" strokeWidth={3} />
                <ReferenceDot x={0.5} y={16} r={0}>
                  <Label value="↑ Approaches Y-axis but never touches" position="right" fill="#ff6b6b" />
                </ReferenceDot>
                <ReferenceDot x={8} y={1} r={0}>
                  <Label value="Approaches X-axis but never touches →" position="top" fill="#ff6b6b" />
                </ReferenceDot>
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="brutalist-grid-2" style={{ marginTop: '20px' }}>
            <div className="brutalist-grid-item cyan">
              <h4><FaCalculator style={{ marginRight: '8px' }} />MATHEMATICAL REASON</h4>
              <p style={{ lineHeight: '1.7' }}>
                Since Y = U/X, as X→0, Y→∞ and as X→∞, Y→0. The curve is a <strong>rectangular hyperbola</strong> which asymptotically approaches both axes.
              </p>
            </div>
            <div className="brutalist-grid-item yellow">
              <h4><FaLightbulb style={{ marginRight: '8px' }} />ECONOMIC REASON</h4>
              <p style={{ lineHeight: '1.7' }}>
                Touching an axis = zero consumption of one good. With positive MU for both goods, a rational consumer always prefers <strong>some of both</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="brutalist-card">
          <div className="brutalist-highlight dark">
            <FaCheckCircle style={{ marginRight: '10px', color: 'var(--brutalist-yellow)' }} />
            <strong>REMEMBER:</strong> All five properties are logical consequences of rational consumer behavior. They form the foundation for understanding consumer equilibrium using indifference curves.
          </div>
        </section>
      </div>
    </div>
  );
}

export default PropertiesOfIC;