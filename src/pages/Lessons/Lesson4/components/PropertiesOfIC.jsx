/**
 * PropertiesOfIC.jsx - Section 3 of Lesson 4
 * Properties of Indifference Curves
 * 
 * MATHEMATICAL FOUNDATION:
 * ═══════════════════════════════════════════════════════════════
 * All ICs are based on Cobb-Douglas Utility: U = X × Y
 * IC Equation: Y = U/X (Rectangular Hyperbola)
 * 
 * PROPERTIES DERIVED:
 * 1. Slope: dY/dX = -U/X² < 0 (Always negative → Downward sloping)
 * 2. Curvature: d²Y/dX² = 2U/X³ > 0 (Convex to origin)
 * 3. Asymptotic: As X→0, Y→∞ and as X→∞, Y→0 (Never touches axes)
 * 4. Non-intersecting: Different U values → Different curves
 * ═══════════════════════════════════════════════════════════════
 */

import { useState } from 'react';
import {
  FaArrowDown,
  FaShapes,
  FaBan,
  FaCheckCircle,
  FaListUl,
  FaLightbulb,
  FaCalculator,
  FaExclamationTriangle,
  FaChartLine,
  FaInfinity
} from 'react-icons/fa';
import {
  ResponsiveContainer,
  LineChart,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  Label,
  Scatter,
  Tooltip
} from 'recharts';
import './component.css';
import './PropertiesOfIC.css';

// ═══════════════════════════════════════════════════════════════
// MATHEMATICAL DATA GENERATORS
// ═══════════════════════════════════════════════════════════════

/**
 * Generate data for demonstrating downward slope with tangent points
 */
const generateSlopeData = () => {
  const U = 12; // Utility level
  const data = [];
  for (let x = 1; x <= 10; x += 0.25) {
    data.push({
      x,
      ic: U / x,
      // Points to highlight
      pointA: x === 2 ? U / x : null,
      pointB: x === 6 ? U / x : null,
    });
  }
  return data;
};

/**
 * Generate data for MRS demonstration (tangent lines)
 */
const generateMRSData = () => {
  const U = 10;
  const data = [];

  for (let x = 0.8; x <= 10; x += 0.2) {
    const y = U / x;
    // MRS = Y/X for U = XY

    data.push({
      x: Number(x.toFixed(2)),
      ic: Number(y.toFixed(3)),
      // Calculate tangent line at specific points
      tangent1: x >= 1.5 && x <= 3.5 ? (U / 2) + (-(U / 4)) * (x - 2) : null, // Tangent at x=2
      tangent2: x >= 4 && x <= 8 ? (U / 6) + (-(U / 36)) * (x - 6) : null, // Tangent at x=6
    });
  }
  return data;
};

/**
 * Generate multiple ICs showing higher = more satisfaction
 */
const generateMultipleICData = () => {
  const data = [];
  const utilities = [4, 9, 16, 25]; // U values: 4, 9, 16, 25

  for (let x = 0.5; x <= 10; x += 0.25) {
    const point = { x: Number(x.toFixed(2)) };
    utilities.forEach((U, index) => {
      point[`ic${index + 1}`] = Number((U / x).toFixed(3));
    });
    data.push(point);
  }
  return data;
};

/**
 * Generate data for intersection contradiction
 */
const generateIntersectionData = () => {
  const data = [];

  for (let x = 0.5; x <= 10; x += 0.2) {
    // IC1: Y = 8/X
    const ic1 = 8 / x;
    // IC2: Y = 2 + 6/(x+0.5) - This will intersect IC1
    const ic2 = 2 + 6 / (x + 0.5);

    data.push({
      x: Number(x.toFixed(2)),
      ic1: Number(ic1.toFixed(3)),
      ic2: Number(ic2.toFixed(3)),
    });
  }
  return data;
};

/**
 * Generate data showing asymptotic behavior (IC never touches axes)
 */
const generateAsymptoticData = () => {
  const U = 8;
  const data = [];

  // Very small X values to show Y approaching infinity
  for (let x = 0.3; x <= 12; x += 0.2) {
    data.push({
      x: Number(x.toFixed(2)),
      ic: Math.min(Number((U / x).toFixed(3)), 30), // Cap at 30 for display
    });
  }
  return data;
};

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

function PropertiesOfIC() {
  const [activeProperty, setActiveProperty] = useState(null);

  const slopeData = generateSlopeData();
  const mrsData = generateMRSData();
  const multipleICData = generateMultipleICData();
  const intersectionData = generateIntersectionData();
  const asymptoticData = generateAsymptoticData();

  const properties = [
    {
      id: 1,
      title: "Downward Sloping (Negative Slope)",
      icon: <FaArrowDown />,
      color: "#ffd700",
      mathematicalBasis: {
        equation: "dY/dX = -U/X² < 0",
        explanation: "The derivative is always negative for positive X and U values"
      },
      description: `An indifference curve always slopes downward from left to right, exhibiting a negative slope throughout its length. This fundamental property arises from the very nature of consumer preferences and the constraint of maintaining constant utility.`,
      detailedExplanation: `When a consumer moves along an indifference curve, they are making trade-offs between two goods while keeping their total satisfaction constant. If they want to consume more of Good X, they must necessarily give up some quantity of Good Y. This trade-off is what creates the negative slope.

Consider a consumer who has 2 units of X and 6 units of Y. If they want 4 more units of X (moving to 6X), they cannot simply acquire them without cost in terms of Y. To stay on the same indifference curve (same satisfaction level), they must sacrifice some Y - perhaps dropping to 2 units of Y.`,
      economicReason: "The negative slope reflects the fundamental economic principle of trade-offs. Resources are scarce, and obtaining more of one good requires sacrificing another to maintain the same utility level.",
      example: "Moving from Point A (2X, 6Y) to Point B (6X, 2Y) on the same IC: ΔX = +4, ΔY = -4. The consumer gained 4X but lost 4Y.",
      graph: (
        <div className="property-graph-container">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={slopeData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffd700" stopOpacity={1} />
                  <stop offset="100%" stopColor="#ffaa00" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 10]}
                stroke="#00ffff"
                tickCount={6}
              >
                <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
              </XAxis>
              <YAxis
                domain={[0, 14]}
                stroke="#ffd700"
                tickCount={8}
              >
                <Label value="Good Y →" angle={-90} position="left" offset={0} fill="#ffd700" />
              </YAxis>

              {/* IC Curve */}
              <Line
                type="monotone"
                dataKey="ic"
                stroke="url(#goldGradient)"
                strokeWidth={4}
                dot={false}
                name="IC (U = 12)"
              />

              {/* Arrow indicators for slope */}
              <ReferenceLine
                segment={[{ x: 2, y: 6 }, { x: 6, y: 2 }]}
                stroke="#ff6b6b"
                strokeWidth={2}
                strokeDasharray="5 5"
              />

              {/* Point A */}
              <ReferenceDot x={2} y={6} r={8} fill="#00ffff" stroke="#ffffff" strokeWidth={2}>
                <Label value="A (2, 6)" position="top" fill="#00ffff" offset={15} />
              </ReferenceDot>

              {/* Point B */}
              <ReferenceDot x={6} y={2} r={8} fill="#00ffff" stroke="#ffffff" strokeWidth={2}>
                <Label value="B (6, 2)" position="right" fill="#00ffff" offset={10} />
              </ReferenceDot>

              {/* Directional arrows */}
              <ReferenceDot x={4} y={3.8} r={0}>
                <Label value="↘ Negative Slope" position="top" fill="#ff6b6b" />
              </ReferenceDot>
            </ComposedChart>
          </ResponsiveContainer>

          <div className="graph-annotation">
            <div className="annotation-item">
              <span className="annotation-symbol" style={{ color: '#00ffff' }}>●</span>
              <span>Movement: A → B shows ΔX = +4, ΔY = -4</span>
            </div>
            <div className="annotation-item">
              <span className="annotation-symbol" style={{ color: '#ffd700' }}>—</span>
              <span>IC: Y = 12/X (Utility = 12)</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Convex to the Origin",
      icon: <FaShapes />,
      color: "#00ffff",
      mathematicalBasis: {
        equation: "d²Y/dX² = 2U/X³ > 0",
        explanation: "The second derivative is always positive, confirming convexity"
      },
      description: `Indifference curves are convex (bowed inward) toward the origin. This curvature is not arbitrary—it directly reflects the Law of Diminishing Marginal Rate of Substitution (MRS). As a consumer acquires more of Good X, each additional unit becomes relatively less valuable compared to the decreasing stock of Good Y.`,
      detailedExplanation: `The convexity of indifference curves captures a profound psychological and economic truth: variety matters. When you have abundant X but little Y, you value Y highly and X less. As you trade Y for X, you become increasingly reluctant to give up more Y.

Mathematically, this is captured by the MRS (Marginal Rate of Substitution):
• MRS = MUₓ/MUᵧ = ΔY/ΔX (along the IC)
• For U = XY: MRS = Y/X

At point (2, 5): MRS = 5/2 = 2.5 → Willing to give up 2.5Y for 1X
At point (5, 2): MRS = 2/5 = 0.4 → Willing to give up only 0.4Y for 1X

The flattening of the slope as we move right demonstrates diminishing MRS.`,
      economicReason: "Diminishing Marginal Rate of Substitution (MRS). As you consume more X, each additional unit provides less marginal utility relative to the scarce Y, making you less willing to sacrifice Y.",
      example: "A person with 1 pizza and 10 sodas might trade 5 sodas for another pizza. But with 5 pizzas and 2 sodas, they might only trade 0.5 soda for another pizza.",
      graph: (
        <div className="property-graph-container">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={mrsData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <defs>
                <linearGradient id="cyanGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0088aa" stopOpacity={1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 10]}
                stroke="#00ffff"
                tickCount={6}
              >
                <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
              </XAxis>
              <YAxis
                domain={[0, 14]}
                stroke="#ffd700"
                tickCount={8}
              >
                <Label value="Good Y →" angle={-90} position="left" offset={0} fill="#ffd700" />
              </YAxis>

              {/* IC Curve */}
              <Line
                type="monotone"
                dataKey="ic"
                stroke="url(#cyanGradient)"
                strokeWidth={4}
                dot={false}
                name="IC (U = 10)"
              />

              {/* Tangent line at x=2 (steep) */}
              <Line
                type="linear"
                dataKey="tangent1"
                stroke="#ff6b6b"
                strokeWidth={2}
                dot={false}
                strokeDasharray="8 4"
                name="Tangent at A"
              />

              {/* Tangent line at x=6 (flat) */}
              <Line
                type="linear"
                dataKey="tangent2"
                stroke="#00ff88"
                strokeWidth={2}
                dot={false}
                strokeDasharray="8 4"
                name="Tangent at B"
              />

              {/* Point A - Steep MRS */}
              <ReferenceDot x={2} y={5} r={8} fill="#ff6b6b" stroke="#ffffff" strokeWidth={2}>
                <Label value="A" position="left" fill="#ff6b6b" offset={10} />
              </ReferenceDot>

              {/* Point B - Flat MRS */}
              <ReferenceDot x={6} y={1.67} r={8} fill="#00ff88" stroke="#ffffff" strokeWidth={2}>
                <Label value="B" position="right" fill="#00ff88" offset={10} />
              </ReferenceDot>

              {/* Origin reference */}
              <ReferenceDot x={0} y={0} r={4} fill="#ffffff">
                <Label value="O" position="bottomRight" fill="#ffffff" offset={5} />
              </ReferenceDot>
            </ComposedChart>
          </ResponsiveContainer>

          <div className="graph-annotation">
            <div className="annotation-box steep" style={{ borderLeft: '4px solid #ff6b6b', paddingLeft: '10px' }}>
              <strong>At A (2, 5):</strong><br />
              <span style={{ color: '#ff6b6b', fontSize: '0.9em' }}>Red Tangent Line</span><br />
              MRS = 5/2 = <span className="value">2.5</span><br />
              <small>Steep line shows we are willing to give up a lot of Y for X</small>
            </div>
            <div className="annotation-box flat" style={{ borderLeft: '4px solid #00ff88', paddingLeft: '10px' }}>
              <strong>At B (6, 1.67):</strong><br />
              <span style={{ color: '#00ff88', fontSize: '0.9em' }}>Green Tangent Line</span><br />
              MRS = 1.67/6 = <span className="value">0.28</span><br />
              <small>Flatter line shows we are willing to give up very little Y for X</small>
            </div>
          </div>
          <div style={{ marginTop: '10px', fontSize: '0.85rem', color: '#aaa', textAlign: 'center', fontStyle: 'italic' }}>
            * The straight lines (tangents) touch the curve at a single point to show the exact slope (MRS) at that specific position.
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Higher IC = Higher Satisfaction",
      icon: <FaCheckCircle />,
      color: "#00ff88",
      mathematicalBasis: {
        equation: "U₁ < U₂ < U₃ ⟹ IC₁ below IC₂ below IC₃",
        explanation: "Higher utility values create curves further from the origin"
      },
      description: `An indifference curve that lies further from the origin represents a higher level of satisfaction than one closer to it. This is because bundles on higher curves contain more of at least one good (often both) compared to bundles on lower curves.`,
      detailedExplanation: `Consider three indifference curves with utility levels U = 4, 9, and 16:
      
• IC₁ (U = 4): Combinations like (1, 4), (2, 2), (4, 1)
• IC₂ (U = 9): Combinations like (1, 9), (3, 3), (9, 1)  
• IC₃ (U = 16): Combinations like (2, 8), (4, 4), (8, 2)

Notice that point (4, 4) on IC₃ dominates point (2, 2) on IC₁—it has MORE of BOTH goods! This is why higher curves always represent greater satisfaction.

The entire family of ICs is called an "Indifference Map"—a complete representation of consumer preferences.`,
      economicReason: "Monotonic Preferences: More is better. A rational consumer always prefers more goods to fewer. Bundles further from origin contain more quantities, hence more utility.",
      example: "Bundle (5X, 5Y) with U = 25 is preferred to (3X, 3Y) with U = 9. The consumer has more of both goods and thus higher satisfaction.",
      graph: (
        <div className="property-graph-container">
          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={multipleICData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
              <defs>
                <linearGradient id="ic1Gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff4444" />
                  <stop offset="100%" stopColor="#ff6666" />
                </linearGradient>
                <linearGradient id="ic2Gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ffa500" />
                  <stop offset="100%" stopColor="#ffcc00" />
                </linearGradient>
                <linearGradient id="ic3Gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00cc88" />
                  <stop offset="100%" stopColor="#00ff88" />
                </linearGradient>
                <linearGradient id="ic4Gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#00aaff" />
                  <stop offset="100%" stopColor="#00ffff" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 10]}
                stroke="#00ffff"
                tickCount={6}
              >
                <Label value="Good X →" position="bottom" offset={10} fill="#00ffff" />
              </XAxis>
              <YAxis
                domain={[0, 20]}
                stroke="#ffd700"
                tickCount={6}
              >
                <Label value="Good Y →" angle={-90} position="left" offset={0} fill="#ffd700" />
              </YAxis>

              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.9)',
                  border: '1px solid #ffd700',
                  borderRadius: '8px'
                }}
              />

              {/* IC1 - Lowest */}
              <Line
                type="monotone"
                dataKey="ic1"
                stroke="url(#ic1Gradient)"
                strokeWidth={3}
                dot={false}
                name="IC₁ (U = 4)"
              />

              {/* IC2 */}
              <Line
                type="monotone"
                dataKey="ic2"
                stroke="url(#ic2Gradient)"
                strokeWidth={3}
                dot={false}
                name="IC₂ (U = 9)"
              />

              {/* IC3 */}
              <Line
                type="monotone"
                dataKey="ic3"
                stroke="url(#ic3Gradient)"
                strokeWidth={3}
                dot={false}
                name="IC₃ (U = 16)"
              />

              {/* IC4 - Highest */}
              <Line
                type="monotone"
                dataKey="ic4"
                stroke="url(#ic4Gradient)"
                strokeWidth={3}
                dot={false}
                name="IC₄ (U = 25)"
              />

              {/* Representative points on each IC */}
              <ReferenceDot x={2} y={2} r={6} fill="#ff4444" stroke="#fff" strokeWidth={2} />
              <ReferenceDot x={3} y={3} r={6} fill="#ffa500" stroke="#fff" strokeWidth={2} />
              <ReferenceDot x={4} y={4} r={6} fill="#00cc88" stroke="#fff" strokeWidth={2} />
              <ReferenceDot x={5} y={5} r={6} fill="#00aaff" stroke="#fff" strokeWidth={2} />

              {/* Arrow showing direction of increasing satisfaction */}
              <ReferenceDot x={6} y={12} r={0}>
                <Label value="↗ Higher Satisfaction" position="right" fill="#00ff88" />
              </ReferenceDot>
            </ComposedChart>
          </ResponsiveContainer>

          <div className="graph-annotation satisfaction-levels">
            <div className="satisfaction-item" style={{ borderColor: '#ff4444' }}>
              <span className="ic-label">IC₁</span>
              <span className="utility-value">U = 4</span>
              <span className="satisfaction-level">Low</span>
            </div>
            <div className="satisfaction-item" style={{ borderColor: '#ffa500' }}>
              <span className="ic-label">IC₂</span>
              <span className="utility-value">U = 9</span>
              <span className="satisfaction-level">Medium</span>
            </div>
            <div className="satisfaction-item" style={{ borderColor: '#00cc88' }}>
              <span className="ic-label">IC₃</span>
              <span className="utility-value">U = 16</span>
              <span className="satisfaction-level">High</span>
            </div>
            <div className="satisfaction-item" style={{ borderColor: '#00aaff' }}>
              <span className="ic-label">IC₄</span>
              <span className="utility-value">U = 25</span>
              <span className="satisfaction-level">Highest</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Indifference Curves Never Intersect",
      icon: <FaBan />,
      color: "#ff4444",
      mathematicalBasis: {
        equation: "If IC₁ ∩ IC₂ ≠ ∅, then ∃ point with two utility values → Contradiction",
        explanation: "Transitivity of preferences prevents intersection"
      },
      description: `Two indifference curves can NEVER cross each other. If they did, it would create a logical impossibility where the same bundle of goods provides two different levels of satisfaction simultaneously—violating the fundamental axiom of transitivity in consumer preferences.`,
      detailedExplanation: `Let's prove this by contradiction:

ASSUME: IC₁ and IC₂ intersect at point A.

Step 1: Pick point B on IC₁ (but not on IC₂)
Step 2: Pick point C on IC₂ (but not on IC₁)
Step 3: Since A and B are on IC₁ → Consumer is indifferent between A and B
        Therefore: U(A) = U(B)
Step 4: Since A and C are on IC₂ → Consumer is indifferent between A and C
        Therefore: U(A) = U(C)
Step 5: By transitivity: U(B) = U(A) = U(C) → U(B) = U(C)
        This means B and C should be on the SAME IC!

BUT WAIT: If C is on a higher curve than B (has more of both goods), then U(C) > U(B).

This CONTRADICTS our conclusion from Step 5!

Therefore, our assumption must be FALSE → ICs cannot intersect.`,
      economicReason: "Violation of Transitivity Axiom. If A~B (A indifferent to B) and A~C, then B~C. Intersection would mean B~C while one clearly has higher utility.",
      example: "If you're equally happy with (3X, 4Y) and (4X, 3Y), AND equally happy with (3X, 4Y) and (5X, 5Y), then by transitivity you should be equally happy with (4X, 3Y) and (5X, 5Y). But (5X, 5Y) clearly has more of BOTH goods!",
      graph: (
        <div className="property-graph-container error-graph">
          <div className="contradiction-warning">
            <FaExclamationTriangle /> LOGICAL IMPOSSIBILITY
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <ComposedChart data={intersectionData} margin={{ top: 30, right: 30, left: 20, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,0,0,0.15)" />
              <XAxis
                dataKey="x"
                type="number"
                domain={[0, 10]}
                stroke="#ff4444"
                tickCount={6}
              >
                <Label value="Good X" position="bottom" offset={10} fill="#ff4444" />
              </XAxis>
              <YAxis
                domain={[0, 18]}
                stroke="#ff4444"
                tickCount={6}
              >
                <Label value="Good Y" angle={-90} position="left" offset={0} fill="#ff4444" />
              </YAxis>

              {/* IC1 */}
              <Line
                type="monotone"
                dataKey="ic1"
                stroke="#ff4444"
                strokeWidth={3}
                dot={false}
                name="IC₁ (U = 8)"
              />

              {/* IC2 - Crosses IC1 */}
              <Line
                type="monotone"
                dataKey="ic2"
                stroke="#ff8888"
                strokeWidth={3}
                dot={false}
                name="IC₂ (Invalid)"
              />

              {/* Intersection Point A (Calculated: 2x² - x - 4 = 0 → x ≈ 1.69, y ≈ 4.75) */}
              <ReferenceDot x={1.69} y={4.75} r={10} fill="#ffffff" stroke="#ff0000" strokeWidth={3}>
                <Label value="A (Intersection)" position="top" fill="#ffffff" offset={15} />
              </ReferenceDot>

              {/* Point B on IC1 */}
              <ReferenceDot x={4} y={2} r={8} fill="#00ffff" stroke="#ffffff" strokeWidth={2}>
                <Label value="B" position="bottom" fill="#00ffff" offset={10} />
              </ReferenceDot>

              {/* Point C on IC2 */}
              <ReferenceDot x={4} y={3.33} r={8} fill="#ffd700" stroke="#ffffff" strokeWidth={2}>
                <Label value="C" position="top" fill="#ffd700" offset={10} />
              </ReferenceDot>
            </ComposedChart>
          </ResponsiveContainer>

          {/* Ban Overlay */}
          <div className="ban-overlay">
            <FaBan className="ban-icon" />
          </div>

          <div className="contradiction-explanation">
            <div className="proof-step">
              <span className="step-num">1</span>
              <span>A & B on IC₁ → U(A) = U(B)</span>
            </div>
            <div className="proof-step">
              <span className="step-num">2</span>
              <span>A & C on IC₂ → U(A) = U(C)</span>
            </div>
            <div className="proof-step">
              <span className="step-num">3</span>
              <span>∴ U(B) = U(C) — But C has more goods!</span>
            </div>
            <div className="proof-conclusion">
              <FaBan /> CONTRADICTION → ICs Cannot Intersect
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="lesson-section properties-section">
      <div className="section-header-lesson">
        <div className="header-decoration">
          <span className="decoration-line left"></span>
          <FaChartLine className="header-icon" />
          <span className="decoration-line right"></span>
        </div>
        <h2 className="section-title-lesson">Properties of Indifference Curves</h2>
        <p className="section-subtitle-lesson">
          Understanding the geometric and economic rules that govern consumer preferences
        </p>
      </div>

      {/* Introduction Card */}
      <div className="content-card intro-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="intro-header">
            <div className="intro-icon">
              <FaLightbulb />
            </div>
            <div className="intro-text">
              <h3 className="highlight-gold">Why Properties Matter</h3>
              <p>
                The properties of indifference curves are not arbitrary rules—they are logical consequences
                of rational consumer behavior. Each property reflects a fundamental aspect of how people
                make choices when faced with trade-offs between different goods.
              </p>
            </div>
          </div>

          <div className="mathematical-foundation">
            <h4><FaCalculator /> Mathematical Foundation</h4>
            <div className="foundation-grid">
              <div className="foundation-item">
                <span className="foundation-label">Utility Function:</span>
                <span className="foundation-formula">U = X × Y</span>
              </div>
              <div className="foundation-item">
                <span className="foundation-label">IC Equation:</span>
                <span className="foundation-formula">Y = U / X</span>
              </div>
              <div className="foundation-item">
                <span className="foundation-label">MRS Formula:</span>
                <span className="foundation-formula">MRS = Y / X = MUₓ / MUᵧ</span>
              </div>
              <div className="foundation-item">
                <span className="foundation-label">Curve Type:</span>
                <span className="foundation-formula">Rectangular Hyperbola</span>
              </div>
            </div>
          </div>

          <div className="properties-overview">
            <h4>The Four Fundamental Properties</h4>
            <div className="properties-grid">
              {properties.map((prop) => (
                <div
                  key={prop.id}
                  className="property-preview"
                  style={{ '--accent-color': prop.color }}
                  onClick={() => setActiveProperty(activeProperty === prop.id ? null : prop.id)}
                >
                  <span className="property-number">{prop.id}</span>
                  <span className="property-icon">{prop.icon}</span>
                  <span className="property-short-title">
                    {prop.title.split(' ')[0]} {prop.title.split(' ')[1]}...
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Properties */}
      <div className="content-card properties-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">Detailed Analysis of Each Property</h3>

          <div className="properties-detailed-list">
            {properties.map((prop) => (
              <div
                key={prop.id}
                className={`property-detailed-item ${activeProperty === prop.id ? 'active' : ''}`}
                style={{ '--property-color': prop.color }}
              >
                <div className="property-header" onClick={() => setActiveProperty(activeProperty === prop.id ? null : prop.id)}>
                  <div className="property-number-large">{prop.id}</div>
                  <div className="property-title-section">
                    <h3 className="property-title">
                      <span className="property-icon-inline">{prop.icon}</span>
                      {prop.title}
                    </h3>
                    <div className="property-math-badge">
                      <code>{prop.mathematicalBasis.equation}</code>
                    </div>
                  </div>
                  <div className="expand-indicator">
                    {activeProperty === prop.id ? '−' : '+'}
                  </div>
                </div>

                <div className="property-body">
                  <div className="property-content-layout">
                    <div className="property-text-column">
                      <div className="property-description">
                        <p className="main-description">{prop.description}</p>
                      </div>

                      <div className="property-detailed-text">
                        <h4><FaLightbulb /> Detailed Explanation</h4>
                        <p style={{ whiteSpace: 'pre-line' }}>{prop.detailedExplanation}</p>
                      </div>

                      <div className="property-reason">
                        <h4><FaCalculator /> Economic Reasoning</h4>
                        <p>{prop.economicReason}</p>
                      </div>

                      <div className="property-example">
                        <h4>📝 Example</h4>
                        <p>{prop.example}</p>
                      </div>

                      <div className="property-math-explanation">
                        <h4>📐 Mathematical Basis</h4>
                        <div className="math-content">
                          <code className="main-equation">{prop.mathematicalBasis.equation}</code>
                          <p>{prop.mathematicalBasis.explanation}</p>
                        </div>
                      </div>
                    </div>

                    <div className="property-graph-column">
                      {prop.graph}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Property: ICs Don't Touch Axes */}
      <div className="content-card axes-property-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-cyan">
            <FaInfinity /> Additional Property: ICs Never Touch the Axes
          </h3>

          <div className="axes-content">
            <div className="axes-explanation">
              <p className="main-text">
                Indifference curves approach but <strong>never actually touch</strong> either the X-axis
                or the Y-axis. This is a mathematical consequence of our utility function and reflects
                the economic assumption that consumers prefer combinations of goods rather than extreme
                allocations.
              </p>

              <div className="axes-reasons">
                <div className="reason-box">
                  <h4>Mathematical Reason</h4>
                  <p>
                    For the utility function U = XY, if X = 0, then U = 0 regardless of Y.
                    This means the axes themselves represent zero utility, not any positive IC.
                  </p>
                  <div className="formula-display">
                    <code>As X → 0: Y = U/X → ∞</code><br />
                    <code>As X → ∞: Y = U/X → 0</code>
                  </div>
                </div>

                <div className="reason-box">
                  <h4>Economic Reason</h4>
                  <p>
                    At the axes, the consumer would have zero quantity of one good. Since we analyze
                    choices between TWO goods, having zero of one means you're not really making a
                    trade-off—you're just consuming one good.
                  </p>
                </div>
              </div>

              <div className="asymptote-note">
                <FaInfinity />
                <span>
                  The IC curve is <strong>asymptotic</strong> to both axes—it gets infinitely close
                  but never touches, like parallel lines that "meet at infinity."
                </span>
              </div>
            </div>

            <div className="axes-graph">
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={asymptoticData} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
                  <defs>
                    <linearGradient id="asymptoteGradient" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ff00ff" stopOpacity={1} />
                      <stop offset="100%" stopColor="#aa00ff" stopOpacity={1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis
                    dataKey="x"
                    type="number"
                    domain={[0, 12]}
                    stroke="#00ffff"
                    tickCount={7}
                  >
                    <Label value="Good X (Asymptote)" position="bottom" offset={10} fill="#00ffff" />
                  </XAxis>
                  <YAxis
                    domain={[0, 30]}
                    stroke="#ffd700"
                    tickCount={7}
                  >
                    <Label value="Good Y (Asymptote)" angle={-90} position="left" offset={0} fill="#ffd700" />
                  </YAxis>

                  {/* Highlight the axes */}
                  <ReferenceLine x={0} stroke="#ff6b6b" strokeWidth={3} />
                  <ReferenceLine y={0} stroke="#ff6b6b" strokeWidth={3} />

                  {/* IC approaching but never touching */}
                  <Line
                    type="monotone"
                    dataKey="ic"
                    stroke="url(#asymptoteGradient)"
                    strokeWidth={4}
                    dot={false}
                    name="IC (U = 8)"
                  />

                  {/* Annotations */}
                  <ReferenceDot x={0.5} y={16} r={0}>
                    <Label value="Y → ∞" position="right" fill="#ffd700" />
                  </ReferenceDot>
                  <ReferenceDot x={10} y={1} r={0}>
                    <Label value="Y → 0" position="top" fill="#ffd700" />
                  </ReferenceDot>
                </ComposedChart>
              </ResponsiveContainer>

              <div className="graph-note">
                <strong>Asymptotic Behavior:</strong> The curve approaches the axes infinitely
                but maintains a positive distance from them.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Dive Section */}
      <div className="content-card deep-dive-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-cyan">
            <FaLightbulb /> Deep Dive: The Intersection Paradox
          </h3>

          <div className="deep-dive-content">
            <div className="paradox-visual">
              <div className="paradox-diagram">
                <div className="diagram-step">
                  <div className="step-circle">1</div>
                  <div className="step-content">
                    <strong>Assume ICs Cross at Point A</strong>
                    <p>Let IC₁ and IC₂ intersect at point A</p>
                  </div>
                </div>
                <div className="diagram-arrow">↓</div>
                <div className="diagram-step">
                  <div className="step-circle">2</div>
                  <div className="step-content">
                    <strong>Take Point B on IC₁</strong>
                    <p>A ~ B (A is indifferent to B) since both on IC₁</p>
                    <p>Therefore: <code>U(A) = U(B)</code></p>
                  </div>
                </div>
                <div className="diagram-arrow">↓</div>
                <div className="diagram-step">
                  <div className="step-circle">3</div>
                  <div className="step-content">
                    <strong>Take Point C on IC₂</strong>
                    <p>A ~ C (A is indifferent to C) since both on IC₂</p>
                    <p>Therefore: <code>U(A) = U(C)</code></p>
                  </div>
                </div>
                <div className="diagram-arrow">↓</div>
                <div className="diagram-step">
                  <div className="step-circle">4</div>
                  <div className="step-content">
                    <strong>Apply Transitivity</strong>
                    <p>If U(A) = U(B) and U(A) = U(C)</p>
                    <p>Then: <code>U(B) = U(C)</code></p>
                  </div>
                </div>
                <div className="diagram-arrow">↓</div>
                <div className="diagram-step contradiction-step">
                  <div className="step-circle">✗</div>
                  <div className="step-content">
                    <strong>CONTRADICTION!</strong>
                    <p>But if C is above B (more of both goods), then U(C) {'>'} U(B)!</p>
                    <p>This violates our conclusion that U(B) = U(C)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="paradox-conclusion">
              <FaCheckCircle className="conclusion-icon" />
              <div className="conclusion-text">
                <strong>Conclusion:</strong> Our initial assumption must be false.
                Therefore, <span className="emphasis">indifference curves can NEVER intersect</span>.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="content-card summary-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            <FaListUl /> Quick Summary
          </h3>

          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-number">1</div>
              <div className="summary-content">
                <strong>Downward Sloping</strong>
                <p>Trade-off between goods to maintain utility</p>
                <code>dY/dX {'<'} 0</code>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">2</div>
              <div className="summary-content">
                <strong>Convex to Origin</strong>
                <p>Diminishing MRS as you get more X</p>
                <code>d²Y/dX² {'>'} 0</code>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">3</div>
              <div className="summary-content">
                <strong>Higher = Better</strong>
                <p>More goods → More satisfaction</p>
                <code>IC₃ {'>'} IC₂ {'>'} IC₁</code>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">4</div>
              <div className="summary-content">
                <strong>No Intersection</strong>
                <p>Transitivity prevents crossing</p>
                <code>IC₁ ∩ IC₂ = ∅</code>
              </div>
            </div>
          </div>

          <div className="bonus-property">
            <strong>Bonus:</strong> ICs are asymptotic to both axes—they approach but never touch
            (X = 0 or Y = 0 means zero utility).
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <div className="nav-hint">
          Next: Marginal Rate of Substitution (MRS)
        </div>
      </div>
    </section>
  );
}

export default PropertiesOfIC;