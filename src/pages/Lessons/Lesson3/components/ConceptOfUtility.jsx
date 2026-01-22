/**
 * ConceptOfUtility.jsx - Topic 2 of Lesson 3
 *
 * Content:
 * - Meaning of utility
 * - Measurement of utility
 * - Total Utility (TU) - definition and illustration
 * - Marginal Utility (MU) - definition and illustration
 * - Relationship between TU and MU (with table and diagram)
 *
 * Related quiz topic: concept-of-utility
 */

import { FaLightbulb, FaChartLine, FaArrowUp, FaQuoteLeft, FaTable } from 'react-icons/fa';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot
} from 'recharts';
import './component.css';

// ============================================
// UTILITY SCHEDULE DATA - This is the foundation
// The table and graph both use this same data
// ============================================
const utilitySchedule = [
  { units: 0, MU: 0, TU: 0 },    // MU starts at 0 (no consumption = no marginal utility)
  { units: 1, MU: 20, TU: 20 },
  { units: 2, MU: 15, TU: 35 },
  { units: 3, MU: 10, TU: 45 },
  { units: 4, MU: 5, TU: 50 },
  { units: 5, MU: 0, TU: 50 },   // Saturation Point
  { units: 6, MU: -5, TU: 45 },
  { units: 7, MU: -10, TU: 35 },
];

// Custom Tooltip Component for the Chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="graph-tooltip-container">
        <p className="tooltip-label">
          Units Consumed: {label}
        </p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, margin: '4px 0' }}>
            {entry.name}: {entry.value !== null ? `${entry.value} utils` : 'N/A'}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function ConceptOfUtility() {
  // Function to determine if row is saturation point
  const isSaturationPoint = (mu) => mu === 0;

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Concept of Utility</h2>
        <p className="section-subtitle-lesson">Understanding utility, total utility, and marginal utility</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          {/* ============================================ */}
          {/* SECTION 1: MEANING OF UTILITY */}
          {/* ============================================ */}

          <h3 className="highlight-gold">What is Utility?</h3>

          {/* Styled Definition Box */}
          <div className="definition-quote-box">
            <span className="definition-quote-icon"><FaQuoteLeft /></span>
            <p className="definition-text">
              <span className="key-term-gold">Utility</span> is the want-satisfying power of a commodity.
              It is the capacity of a good or service to satisfy human wants.
            </p>
          </div>

          <p>
            Utility refers to the satisfaction, pleasure, or benefit that a consumer derives from
            consuming a good or service. It is the psychological feeling of satisfaction that
            arises from consumption. For example, when you're thirsty and drink water, the satisfaction
            you get is the utility of water. When you eat your favorite food, the happiness you feel
            is the utility of that food.
          </p>

          <div className="note-text danger">
            <strong>⚠️ Important:</strong> Utility is purely subjective and varies from person to person,
            time to time, and place to place. What gives high utility to one person may give little or
            no utility to another. A vegetarian person gets zero utility from meat, while a non-vegetarian
            may derive high utility from it. The utility of an umbrella is high during monsoon but low
            in winter.
          </div>

          {/* Real-World Example - Smartphone */}
          <div className="note-text green">
            <h4 className="text-green">📱 Real-World Example - Understanding Utility:</h4>
            <p>
              Consider a <strong>smartphone</strong>. Different people derive different utilities from it:
            </p>
            <div className="cou-example-grid">
              {[
                { icon: '👨‍🎓', label: 'For a student', desc: 'High utility for online classes, research, and communication', colorClass: 'text-gold', borderClass: 'border-gold' },
                { icon: '👔', label: 'For a businessperson', desc: 'High utility for emails, video calls, and managing work', colorClass: 'text-cyan', borderClass: 'border-cyan' },
                { icon: '👴', label: 'For elderly (unfamiliar with tech)', desc: 'Low utility, may prefer a basic phone', colorClass: 'text-orange', borderClass: 'border-orange' },
                { icon: '📱📱📱', label: 'Person with 3 phones', desc: 'Very low marginal utility from a 4th phone', colorClass: 'text-red', borderClass: 'border-red' },
              ].map((item, idx) => (
                <div key={idx} className={`cou-example-grid-item ${item.borderClass}`} style={{borderLeft: '3px solid', borderLeftColor: idx === 0 ? '#ffd700' : idx === 1 ? '#00ffff' : idx === 2 ? '#ff8c00' : '#ff6b6b'}}>
                  <strong className={item.colorClass}>{item.icon} {item.label}:</strong>
                  <p className="mt-1 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-2 text-center italic text-green">
              Same commodity (smartphone), but different levels of satisfaction for different people!
            </p>
          </div>

          {/* Key Characteristics */}
          <div className="highlight-card green">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h3>Key Characteristics of Utility</h3>
              <ul className="bullet-list">
                <li><strong>Subjective Nature:</strong> Utility depends on individual preferences, tastes,
                  and psychology. Ice cream gives high utility to someone who loves sweets but low utility
                  to someone who dislikes sweet foods.</li>
                <li><strong>Context-Dependent:</strong> Utility changes with situation, time, and place.
                  A raincoat has high utility during monsoon but almost zero utility in summer.</li>
                <li><strong>Not Related to Usefulness or Morality:</strong> Utility is about satisfaction,
                  not about whether something is useful or morally right. A cigarette has utility for a smoker
                  even though it's harmful.</li>
                <li><strong>Measurable in Utils:</strong> In cardinal utility theory, utility can be measured
                  in hypothetical units called "utils" (like weight in kg or temperature in °C).</li>
                <li><strong>Relative Concept:</strong> Utility comparisons are meaningful only for the same
                  person. You cannot compare your satisfaction with someone else's.</li>
              </ul>
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 2: TOTAL UTILITY */}
          {/* ============================================ */}

          <h3 className="highlight-gold">Total Utility (TU)</h3>

          <div className="definition-quote-box">
            <span className="definition-quote-icon"><FaQuoteLeft /></span>
            <p className="definition-text">
              <span className="key-term-gold">Total Utility (TU)</span> is the aggregate sum of satisfaction
              that a consumer derives from the consumption of all units of a commodity at a given time.
            </p>
          </div>

          <p>
            TU represents the cumulative satisfaction a consumer gets from consuming a certain
            quantity of a good or service. It is calculated by adding up the utilities from each
            successive unit consumed. As you consume more units, your total utility initially
            increases, reaches a maximum point (saturation), and then may start declining if you
            consume too much (causing disutility).
          </p>

          {/* Formula Box for TU */}
          <div className="cou-formula-box-styled">
            <p className="text-lg mb-2">
              <strong className="text-cyan">Formula:</strong>{' '}
              <span className="font-mono text-gold text-lg">
                TU<sub>n</sub> = MU<sub>1</sub> + MU<sub>2</sub> + MU<sub>3</sub> + ... + MU<sub>n</sub>
              </span>
            </p>
            <p className="text-muted text-sm m-0">
              Where TU<sub>n</sub> is total utility from n units, and MU<sub>1</sub>, MU<sub>2</sub>...
              are marginal utilities from 1st, 2nd... units respectively.
            </p>
          </div>

          {/* Real Example for TU - Samosa */}
          <div className="note-text gold">
            <h4 className="text-gold">🥟 Real-World Example - Total Utility:</h4>
            <p><strong>Scenario:</strong> You're eating samosas at a party. Let's track your total satisfaction:</p>

            <div className="table-container">
  <div className="samosa-grid-container flex-column gap-sm mt-2">
              {[
                { unit: '1st samosa', desc: "You're hungry", mu: 50, tu: 50, colorClass: 'text-green', borderColor: '#00ff88' },
                { unit: '2nd samosa', desc: "Still tasty", mu: 40, tu: 90, colorClass: 'text-green', borderColor: '#00ff88' },
                { unit: '3rd samosa', desc: "Starting to feel full", mu: 25, tu: 115, colorClass: 'text-gold', borderColor: '#ffd700' },
                { unit: '4th samosa', desc: "Almost full", mu: 10, tu: 125, colorClass: 'text-orange', borderColor: '#ff8c00' },
                { unit: '5th samosa', desc: "Feeling too full", mu: 0, tu: 125, colorClass: 'text-red', borderColor: '#ff6b6b' },
                { unit: '6th samosa', desc: "Uncomfortable (Disutility)", mu: -15, tu: 110, colorClass: 'text-red', borderColor: '#ff4444' },
              ].map((item, idx) => (
                <div key={idx} className="cou-example-grid-item" style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr 100px 100px',
                  gap: '12px',
                  alignItems: 'center',
                  background: 'rgba(0,0,0,0.2)',
                  borderLeftStyle: 'solid',
                  borderLeftWidth: '3px',
                  borderLeftColor: item.borderColor,
                }}>
                  <strong className={item.colorClass}>{item.unit}</strong>
                  <span className="text-muted">{item.desc}</span>
                  <span className={item.mu >= 0 ? 'text-green' : 'text-red'}>MU: {item.mu}</span>
                  <span className="text-cyan font-bold">TU: {item.tu}</span>
                </div>
              ))}
            </div>

            <p className="mt-2 italic text-gold">
              📊 Notice how total satisfaction increased initially, reached maximum at 5 samosas (TU = 125),
              then decreased when you ate too much!
            </p>
          </div>

          {/* ============================================ */}
          {/* SECTION 3: MARGINAL UTILITY */}
          {/* ============================================ */}

          <h3 className="highlight-gold">Marginal Utility (MU)</h3>

          <div className="definition-quote-box mu">
            <span className="definition-quote-icon"><FaQuoteLeft /></span>
            <p className="definition-text">
              <span className="key-term-gold">Marginal Utility (MU)</span> is the additional satisfaction
              that a consumer derives from consuming one more unit of a commodity.
            </p>
          </div>

          <p>
            MU is the change in total utility resulting from the consumption of one additional unit.
            It measures the incremental or extra satisfaction gained from each successive unit.
            The word "marginal" in economics always means "additional" or "extra." So marginal
            utility is simply the extra utility you get from consuming one more unit.
          </p>

          {/* Formula Box for MU */}
          <div className="cou-formula-box-styled green">
            <p className="text-lg mb-1">
              <strong className="text-green">Formula 1:</strong>{' '}
              <span className="font-mono text-gold text-lg">
                MU<sub>n</sub> = TU<sub>n</sub> - TU<sub>n-1</sub>
              </span>
            </p>
            <p className="text-lg mb-2">
              <strong className="text-green">Formula 2:</strong>{' '}
              <span className="font-mono text-gold text-lg">
                MU = ΔTU / ΔQ
              </span>
              <span className="text-muted ml-2 text-sm">
                (Change in Total Utility / Change in Quantity)
              </span>
            </p>
            <div className="bg-tertiary p-2 rounded mt-2">
              <p className="text-secondary text-sm m-0">
                <strong>Example:</strong> If TU from 3 units = 45 utils, and TU from 4 units = 50 utils,<br />
                then MU<sub>4</sub> = 50 - 45 = <strong className="text-gold">5 utils</strong>
              </p>
            </div>
          </div>

          {/* Real Example for MU - Cold Drinks */}
          <div className="note-text blue">
            <h4 className="text-cyan">🥤 Real-World Example - Marginal Utility:</h4>
            <p><strong>Scenario:</strong> You're buying bottles of cold drinks on a hot summer day:</p>

            <div className="cou-icon-grid">
              {[
                { bottle: '1st', mu: 100, emoji: '🔥', desc: 'Very thirsty' },
                { bottle: '2nd', mu: 60, emoji: '😊', desc: 'Still refreshing' },
                { bottle: '3rd', mu: 30, emoji: '😐', desc: 'Feeling full' },
                { bottle: '4th', mu: 10, emoji: '😕', desc: 'Barely want it' },
                { bottle: '5th', mu: 0, emoji: '🛑', desc: 'Saturation' },
                { bottle: '6th', mu: -20, emoji: '🤢', desc: 'Disutility!' },
              ].map((item, idx) => (
                <div key={idx} className="cou-icon-item" style={{
                  background: item.mu > 0 ? 'rgba(0, 255, 136, 0.1)' :
                    item.mu === 0 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  borderColor: item.mu > 0 ? '#00ff88' : item.mu === 0 ? '#ffd700' : '#ff4444',
                }}>
                  <div className="text-xxl mb-1">{item.emoji}</div>
                  <div className="font-bold mt-1">{item.bottle}</div>
                  <div className={`font-bold mt-1 text-lg ${item.mu > 0 ? 'text-green' : item.mu === 0 ? 'text-gold' : 'text-red'}`}>
                    MU: {item.mu}
                  </div>
                  <div className="text-xs text-muted mt-1">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gold p-2 rounded border-gold mt-2">
              <strong className="text-gold">💡 Key Insight:</strong>{' '}
              <span className="text-secondary">
                Notice how marginal utility keeps falling with each bottle? This is the
                <strong className="text-green"> Law of Diminishing Marginal Utility</strong> -
                as you consume more, extra satisfaction from each unit decreases!
              </span>
            </div>
          </div>

          {/* ============================================ */}
          {/* SECTION 4: RELATIONSHIP BETWEEN TU AND MU */}
          {/* ============================================ */}

          <h3 className="highlight-cyan">Relationship Between TU and MU</h3>
          <p>
            The relationship between Total Utility and Marginal Utility is fundamental to understanding
            consumer behavior. These concepts are interconnected - changes in one affect the other.
            Let us first create a <strong>utility schedule (table)</strong> and then derive the
            <strong> graph</strong> from it.
          </p>

          {/* ============================================ */}
          {/* STEP 1: THE UTILITY SCHEDULE (TABLE) */}
          {/* ============================================ */}

          <div className="table-container">
            <h3 className="subsection-title">
              <FaTable />
              Step 1: Utility Schedule (Table)
            </h3>
            <p className="text-center text-muted mb-2">
              📋 This schedule shows TU and MU for consuming ice cream on a hot summer day
            </p>

            <div className="table-container">
              <table className="utility-table">
                <thead>
                  <tr>
                    <th className="text-cyan">
                      Units of Ice Cream 🍦
                    </th>
                    <th className="text-green border-green">
                      Marginal Utility (MU)<br />
                      <span className="text-xs font-normal">(Utils)</span>
                    </th>
                    <th className="text-gold border-gold">
                      Total Utility (TU)<br />
                      <span className="text-xs font-normal">(Utils)</span>
                    </th>
                    <th className="text-orange border-orange">
                      Observation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {utilitySchedule.map((row, idx) => {
                    const isSaturation = isSaturationPoint(row.MU);
                    const observations = [
                      'No consumption, no utility',
                      'First unit gives highest MU, TU starts rising',
                      'MU decreases but positive, TU continues to increase',
                      'MU continues to fall, TU still rising',
                      'MU approaching zero, TU rising at slower rate',
                      '⭐ SATURATION POINT: MU = 0, TU is MAXIMUM',
                      'MU becomes negative (Disutility), TU starts falling',
                      'MU more negative, TU falls further',
                    ];

                    const muClass = row.MU > 10 ? 'text-green' : row.MU > 0 ? 'text-green' : row.MU === 0 ? 'text-gold' : row.MU < 0 ? 'text-red' : '';

                    return (
                      <tr
                        key={idx}
                        className={isSaturation ? 'bg-gold' : idx % 2 === 0 ? 'bg-tertiary' : ''}
                      >
                        <td className="font-bold text-lg text-center">
                          {row.units}
                        </td>
                        <td className={`font-bold text-lg text-center ${muClass}`}>
                          {row.MU !== null ? row.MU : '—'}
                        </td>
                        <td className="font-bold text-lg text-center text-gold">
                          {row.TU}
                        </td>
                        <td className={`text-left text-sm ${isSaturation ? 'text-gold font-bold' : 'text-muted'}`}>
                          {observations[idx]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Calculation Explanation */}
            <div className="bg-cyan p-2 rounded border-cyan mt-3 border-dashed">
              <h4 className="text-cyan mb-1">📐 How to Calculate:</h4>
              <div className="flex-column gap-xs">
                <p className="m-0">
                  <strong className="text-gold">TU Calculation:</strong>{' '}
                  TU<sub>n</sub> = TU<sub>n-1</sub> + MU<sub>n</sub>
                </p>
                <p className="m-0 text-muted">
                  Example: TU<sub>3</sub> = TU<sub>2</sub> + MU<sub>3</sub> = 35 + 10 = <strong className="text-gold">45 utils</strong>
                </p>
                <p className="mt-1 mb-0">
                  <strong className="text-green">MU Calculation:</strong>{' '}
                  MU<sub>n</sub> = TU<sub>n</sub> - TU<sub>n-1</sub>
                </p>
                <p className="m-0 text-muted">
                  Example: MU<sub>4</sub> = TU<sub>4</sub> - TU<sub>3</sub> = 50 - 45 = <strong className="text-green">5 utils</strong>
                </p>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* STEP 2: THE GRAPH (DERIVED FROM TABLE) */}
          {/* ============================================ */}

          <div className="graph-container">
            <h3 className="subsection-title">
              <FaChartLine />
              Step 2: TU and MU Curves (Derived from the Schedule)
            </h3>
            <p className="text-center text-muted mb-2">
              📈 This graph is plotted using the data from the utility schedule above
            </p>

            {/* The Recharts Graph */}
            <ResponsiveContainer width="100%" height={420}>
              <LineChart
                data={utilitySchedule}
                margin={{ top: 20, right: 40, left: 20, bottom: 30 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.1)"
                  vertical={true}
                  horizontal={true}
                />

                {/* X-Axis */}
                <XAxis
                  dataKey="units"
                  stroke="#00ffff"
                  tick={{ fill: '#00ffff', fontSize: 12 }}
                  axisLine={{ stroke: '#00ffff', strokeWidth: 2 }}
                  tickLine={{ stroke: '#00ffff' }}
                  label={{
                    value: 'Units of Ice Cream Consumed →',
                    position: 'bottom',
                    offset: 10,
                    fill: '#00ffff',
                    fontSize: 13
                  }}
                />

                {/* Y-Axis with proper consistent scale */}
                <YAxis
                  stroke="#00ffff"
                  tick={{ fill: '#00ffff', fontSize: 12 }}
                  axisLine={{ stroke: '#00ffff', strokeWidth: 2 }}
                  tickLine={{ stroke: '#00ffff' }}
                  domain={[-10, 60]}
                  ticks={[-10, 0, 10, 20, 30, 40, 50, 60]}
                  label={{
                    value: 'Utility (Utils) →',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#00ffff',
                    fontSize: 13,
                    offset: 10
                  }}
                />

                {/* Custom Tooltip */}
                <Tooltip content={<CustomTooltip />} />

                {/* Zero Reference Line (X-axis at Y=0) */}
                <ReferenceLine
                  y={0}
                  stroke="#ff6b6b"
                  strokeDasharray="8 4"
                  strokeWidth={2}
                  label={{
                    value: 'MU = 0 (Zero Line)',
                    fill: '#ff6b6b',
                    fontSize: 11,
                    position: 'right'
                  }}
                />

                {/* Saturation Point Vertical Line (at x=5) */}
                <ReferenceLine
                  x={5}
                  stroke="#ffd700"
                  strokeDasharray="8 4"
                  strokeWidth={2}
                  label={{
                    value: 'Saturation Point',
                    fill: '#ffd700',
                    fontSize: 11,
                    position: 'top'
                  }}
                />

                {/* TU Curve - Gold */}
                <Line
                  type="monotone"
                  dataKey="TU"
                  stroke="#ffd700"
                  strokeWidth={3}
                  dot={{
                    fill: '#ffd700',
                    strokeWidth: 2,
                    r: 6,
                    stroke: '#fff'
                  }}
                  activeDot={{
                    r: 10,
                    stroke: '#ffd700',
                    strokeWidth: 3,
                    fill: '#fff'
                  }}
                  name="Total Utility (TU)"
                />

                {/* MU Curve - Green */}
                <Line
                  type="monotone"
                  dataKey="MU"
                  stroke="#00ff88"
                  strokeWidth={3}
                  dot={{
                    fill: '#00ff88',
                    strokeWidth: 2,
                    r: 6,
                    stroke: '#fff'
                  }}
                  activeDot={{
                    r: 10,
                    stroke: '#00ff88',
                    strokeWidth: 3,
                    fill: '#fff'
                  }}
                  name="Marginal Utility (MU)"
                  connectNulls={false}
                />

                {/* Special Point: Maximum TU */}
                <ReferenceDot
                  x={5}
                  y={50}
                  r={10}
                  fill="#ffd700"
                  stroke="#fff"
                  strokeWidth={3}
                />

                {/* Special Point: MU = 0 */}
                <ReferenceDot
                  x={5}
                  y={0}
                  r={10}
                  fill="#00ff88"
                  stroke="#fff"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Custom Legend */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              marginTop: '20px',
              flexWrap: 'wrap',
            }}>
              {[
                { color: '#ffd700', label: 'Total Utility (TU) Curve' },
                { color: '#00ff88', label: 'Marginal Utility (MU) Curve' },
                { color: '#ff6b6b', label: 'Zero Line (MU = 0)', isDashed: true },
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: item.color,
                  fontWeight: '600',
                }}>
                  {item.isDashed ? (
                    <span style={{
                      width: '24px',
                      height: '3px',
                      background: `repeating-linear-gradient(90deg, ${item.color} 0px, ${item.color} 6px, transparent 6px, transparent 10px)`
                    }}></span>
                  ) : (
                    <span style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: item.color,
                      boxShadow: `0 0 10px ${item.color}`,
                    }}></span>
                  )}
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Graph Explanation Points */}
            <div className="cou-example-grid">
              {[
                {
                  color: '#ffd700',
                  title: 'TU Curve Behavior',
                  text: 'Rises from origin, reaches maximum at unit 5 (50 utils), then starts falling'
                },
                {
                  color: '#00ff88',
                  title: 'MU Curve Behavior',
                  text: 'Slopes downward continuously, starts positive, becomes zero at unit 5, then negative'
                },
                {
                  color: '#00ffff',
                  title: 'At Saturation Point',
                  text: 'When MU = 0, TU reaches its maximum value. This is optimal consumption.'
                },
                {
                  color: '#ff6b6b',
                  title: 'Disutility Zone',
                  text: 'Below zero line, MU is negative. Consuming more reduces total satisfaction.'
                },
              ].map((item, idx) => (
                <div key={idx} className="cou-example-grid-item" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '14px 18px',
                  background: 'rgba(0,0,0,0.3)',
                  borderLeft: `4px solid ${item.color}`,
                }}>
                  <span style={{ color: item.color, fontWeight: 'bold', fontSize: '0.95rem' }}>
                    {item.title}
                  </span>
                  <span className="text-muted text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Relationships Summary */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaChartLine /></div>
            <div className="highlight-content">
              <h3>Summary: Key Relationships Between TU and MU</h3>
              <div className="flex-column gap-md mt-2">
                {[
                  {
                    condition: 'When MU > 0 (Positive)',
                    result: 'TU is Rising',
                    desc: 'Each additional unit adds to total satisfaction.',
                    icon: '📈',
                    color: '#00ff88'
                  },
                  {
                    condition: 'When MU = 0 (Zero)',
                    result: 'TU is Maximum',
                    desc: 'Saturation point reached. Optimal consumption.',
                    icon: '⭐',
                    color: '#ffd700'
                  },
                  {
                    condition: 'When MU < 0 (Negative)',
                    result: 'TU is Falling',
                    desc: 'Disutility zone. Consuming more reduces satisfaction.',
                    icon: '📉',
                    color: '#ff6b6b'
                  },
                  {
                    condition: 'When MU is Diminishing',
                    result: 'TU rises at decreasing rate',
                    desc: 'Law of Diminishing Marginal Utility in action.',
                    icon: '📐',
                    color: '#00ffff'
                  },
                ].map((item, idx) => (
                  <div key={idx} className="cou-example-grid-item" style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    background: 'rgba(0,0,0,0.2)',
                    borderLeft: `4px solid ${item.color}`,
                  }}>
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="flex-wrap gap-sm items-center">
                        <strong style={{ color: item.color }}>{item.condition}</strong>
                        <span className="text-muted">→</span>
                        <strong className="text-white">{item.result}</strong>
                      </div>
                      <p className="mt-1 text-muted text-sm m-0">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
</div>

      {/* ============================================ */}
      {/* ADDITIONAL CONTENT CARD */}
      {/* ============================================ */}

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          {/* Diamond-Water Paradox */}
          <h3 className="highlight-green">The Diamond-Water Paradox (Paradox of Value)</h3>
          <p>
            One of the most famous puzzles in economics is the diamond-water paradox, first discussed
            by Adam Smith. It beautifully illustrates the difference between total utility and marginal utility.
          </p>

          <div className="cou-diamond-box">
            <h4 className="text-gold mb-2 text-lg">
              <FaLightbulb className="mr-2" />
              The Paradox Explained
            </h4>

            {/* The Question */}
            <div className="bg-tertiary p-2 rounded mb-2">
              <p className="text-cyan text-lg m-0">
                <strong>❓ The Question:</strong> Water is essential for life with enormous total utility,
                yet it's cheap. Diamonds are not essential with limited use, yet extremely expensive. Why?
              </p>
            </div>

            {/* The Answer */}
            <div className="bg-green p-2 rounded mb-2 border-green">
              <p className="text-green text-lg m-0">
                <strong>💡 The Answer:</strong> Price is determined by <strong>MARGINAL UTILITY</strong>,
                not total utility!
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="cou-diamond-grid">
              {/* Water Box */}
              <div className="cou-diamond-water-item">
                <h5 className="text-center text-blue text-xl mb-2">
                  💧 Water
                </h5>
                <div className="flex-column gap-sm">
                  {[
                    { label: 'Total Utility', value: 'Very High', sub: '(Essential for life)', color: 'text-green' },
                    { label: 'Supply', value: 'Abundant', sub: '(Easily available)', color: 'text-gold' },
                    { label: 'Marginal Utility', value: 'Low', sub: '(One more glass = little extra satisfaction)', color: 'text-orange' },
                    { label: 'Price', value: 'Low', sub: '(Based on low MU)', color: 'text-red' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-between items-center p-1 bg-tertiary rounded">
                      <span className="text-muted">{item.label}</span>
                      <div className="text-right">
                        <span className={`${item.color} font-bold`}>{item.value}</span>
                        <div className="text-xs text-muted">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diamond Box */}
              <div className="cou-diamond-diamond-item">
                <h5 className="text-center text-gold text-xl mb-2">
                  💎 Diamonds
                </h5>
                <div className="flex-column gap-sm">
                  {[
                    { label: 'Total Utility', value: 'Low', sub: '(Not essential for survival)', color: 'text-orange' },
                    { label: 'Supply', value: 'Scarce', sub: '(Rare and limited)', color: 'text-red' },
                    { label: 'Marginal Utility', value: 'High', sub: '(One more diamond = huge satisfaction)', color: 'text-green' },
                    { label: 'Price', value: 'Very High', sub: '(Based on high MU)', color: 'text-green' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-between items-center p-1 bg-tertiary rounded">
                      <span className="text-muted">{item.label}</span>
                      <div className="text-right">
                        <span className={`${item.color} font-bold`}>{item.value}</span>
                        <div className="text-xs text-muted">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Lesson */}
            <div className="bg-gold p-2 rounded border-gold-dashed mt-3">
              <p className="m-0 text-white-95 leading-relaxed">
                <strong className="text-gold">🏜️ Key Lesson:</strong> In a desert without water,
                the marginal utility of water becomes <strong className="text-green">extremely high</strong>,
                and people would pay enormous amounts for it. Similarly, if diamonds were as common as sand,
                their price would be very low. <br /><br />
                <em className="text-cyan">
                  Conclusion: Scarcity affects marginal utility, and marginal utility determines price!
                </em>
              </p>
            </div>
          </div>

          {/* Practice Problems */}
          <h3 className="highlight-cyan">Practice Problems: Calculating TU and MU</h3>

          {/* Problem 1 */}
          <div className="practice-box">
            <h4 className="text-cyan mb-2">
              📝 Problem 1: Complete the Utility Schedule
            </h4>
            <p>Fill in the missing values (marked with ?) in the table below:</p>

            <div className="overflow-x-auto my-2">
              <table className="text-center w-full">
                <thead>
                  <tr className="bg-cyan">
                    <th className="p-1 border-white-20">Units</th>
                    <th className="p-1 border-white-20 text-green">MU (Utils)</th>
                    <th className="p-1 border-white-20 text-gold">TU (Utils)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { units: 1, mu: '30', tu: '?', muQ: false, tuQ: true },
                    { units: 2, mu: '?', tu: '50', muQ: true, tuQ: false },
                    { units: 3, mu: '15', tu: '?', muQ: false, tuQ: true },
                    { units: 4, mu: '?', tu: '70', muQ: true, tuQ: false },
                    { units: 5, mu: '0', tu: '?', muQ: false, tuQ: true },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-tertiary' : ''}>
                      <td className="p-1 border-white-20 font-bold">
                        {row.units}
                      </td>
                      <td className={`p-1 border-white-20 font-bold ${row.muQ ? 'text-orange text-lg' : 'text-green'}`}>
                        {row.mu}
                      </td>
                      <td className={`p-1 border-white-20 font-bold ${row.tuQ ? 'text-orange text-lg' : 'text-gold'}`}>
                        {row.tu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <details className="mt-2">
              <summary className="solution-reveal">
                ✅ Click to reveal solution
              </summary>
              <div className="solution-content">
                <h5 className="text-cyan mb-2">Step-by-Step Solution:</h5>
                <div className="flex-column gap-sm">
                  {[
                    { step: 'TU₁', calc: '= MU₁ = 30 utils', result: '30', formula: 'First unit: TU = MU' },
                    { step: 'MU₂', calc: '= TU₂ - TU₁ = 50 - 30 = 20 utils', result: '20', formula: 'MU = Change in TU' },
                    { step: 'TU₃', calc: '= TU₂ + MU₃ = 50 + 15 = 65 utils', result: '65', formula: 'TU = Previous TU + MU' },
                    { step: 'MU₄', calc: '= TU₄ - TU₃ = 70 - 65 = 5 utils', result: '5', formula: 'MU = Change in TU' },
                    { step: 'TU₅', calc: '= TU₄ + MU₅ = 70 + 0 = 70 utils (Maximum!)', result: '70', formula: 'MU = 0 means TU is max' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white-05 p-1 rounded flex gap-sm items-center grid-cols-auto-1fr">
                      <strong className="text-gold" style={{minWidth: '60px'}}>{item.step}:</strong>
                      <div>
                        <span className="text-white-90">{item.calc}</span>
                        <div className="text-xs text-muted mt-1">
                          ({item.formula})
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </div>

          {/* Problem 2 */}
          <div className="practice-box gold">
            <h4 className="text-gold mb-2">
              🍫 Problem 2: Real-World Application
            </h4>
            <p>
              Priya is buying chocolates at a fair. The marginal utilities she derives are:
            </p>
            <div className="cou-icon-grid">
              {[
                { n: '1st', mu: 40 },
                { n: '2nd', mu: 30 },
                { n: '3rd', mu: 20 },
                { n: '4th', mu: 10 },
                { n: '5th', mu: 0 },
              ].map((item, idx) => (
                <span key={idx} className="bg-white-10 px-2 py-1 rounded-full border-solid border"
                  style={{borderColor: item.mu > 0 ? '#00ff88' : '#ffd700'}}>
                  {item.n}: <strong className={item.mu > 0 ? 'text-green' : 'text-gold'}>{item.mu} utils</strong>
                </span>
              ))}
            </div>

            <div className="bg-tertiary p-2 rounded mt-2">
              <p className="mb-1"><strong>Questions:</strong></p>
              <ol className="pl-4 text-white-90 m-0">
                <li className="mb-1">Calculate the total utility from consuming 4 chocolates.</li>
                <li className="mb-1">At which unit does Priya reach saturation?</li>
                <li>Should Priya buy a 6th chocolate if its MU is -10 utils? Explain.</li>
              </ol>
            </div>

            <details className="mt-2">
              <summary className="solution-reveal">
                ✅ Click to reveal solution
              </summary>
              <div className="solution-content">
                <ol className="pl-4">
                  <li className="mb-2">
                    <strong className="text-cyan">TU from 4 chocolates:</strong>
                    <div className="mt-1 p-1 bg-white-05 rounded">
                      TU = MU₁ + MU₂ + MU₃ + MU₄<br />
                      TU = 40 + 30 + 20 + 10 = <strong className="text-gold text-lg">100 utils</strong>
                    </div>
                  </li>
                  <li className="mb-2">
                    <strong className="text-cyan">Saturation point:</strong>
                    <div className="mt-1 p-1 bg-white-05 rounded">
                      At <strong className="text-gold">5th unit</strong> where MU = 0<br />
                      At this point, TU = 100 + 0 = <strong className="text-gold">100 utils (Maximum)</strong>
                    </div>
                  </li>
                  <li>
                    <strong className="text-cyan">Should she buy 6th chocolate?</strong>
                    <div className="mt-1 p-1 bg-red rounded border-red">
                      <strong className="text-red">No!</strong> If MU₆ = -10 utils, then:<br />
                      New TU = 100 + (-10) = <strong className="text-red">90 utils</strong><br /><br />
                      Her total satisfaction would <em>decrease</em> from 100 to 90 utils.<br />
                      <strong className="text-gold">Conclusion:</strong> She should stop at 5 chocolates to maximize satisfaction.
                    </div>
                  </li>
                </ol>
              </div>
            </details>
          </div>

          {/* Key Takeaways */}
          <h3 className="highlight-gold">Key Takeaways</h3>
          <div className="cou-takeaway-grid">
            {[
              {
                num: '1',
                title: 'Utility is Subjective',
                desc: 'Different people get different satisfaction from the same good based on personal preferences.',
                color: '#00ffff',
                colorClass: 'text-cyan',
                borderClass: 'border-cyan'
              },
              {
                num: '2',
                title: 'TU = Sum of all MUs',
                desc: 'Total utility is calculated by adding marginal utilities of all units consumed.',
                color: '#ffd700',
                colorClass: 'text-gold',
                borderClass: 'border-gold'
              },
              {
                num: '3',
                title: 'MU Diminishes with Consumption',
                desc: 'As you consume more units, additional satisfaction from each unit typically decreases.',
                color: '#00ff88',
                colorClass: 'text-green',
                borderClass: 'border-green'
              },
              {
                num: '4',
                title: 'Price Reflects Marginal Utility',
                desc: 'Market prices are determined by marginal utility, not total utility (Diamond-Water Paradox).',
                color: '#ff8c00',
                colorClass: 'text-orange',
                borderClass: 'border-orange'
              },
            ].map((item, idx) => (
              <div key={idx} className={`cou-takeaway-card`} style={{borderColor: item.color}}>
                <div className="cou-takeaway-bg-icon" style={{background: item.color}}></div>
                <div className="flex items-center gap-sm mb-1">
                  <span className="rounded-full flex-center font-bold text-black text-lg"
                    style={{width: '36px', height: '36px', background: item.color}}>
                    {item.num}
                  </span>
                  <h4 className={`${item.colorClass} m-0`}>{item.title}</h4>
                </div>
                <p className="text-secondary m-0 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          <FaArrowUp /> Previous: Who is a Consumer
          <span className="separator">|</span>
          Next: Law of Diminishing Marginal Utility
        </div>
      </div>
    </section>
  );
}

export default ConceptOfUtility;
