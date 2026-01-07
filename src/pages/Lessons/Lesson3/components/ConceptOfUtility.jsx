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
  { units: 0, MU: null, TU: 0 },
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
      <div style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        border: '1px solid #00ffff',
        borderRadius: '8px',
        padding: '12px 16px',
        boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)'
      }}>
        <p style={{ color: '#00ffff', fontWeight: 'bold', marginBottom: '8px' }}>
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
  // ============================================
  // INLINE STYLES
  // ============================================

  const definitionBoxStyle = {
    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 100%)',
    border: '2px solid #ffd700',
    borderRadius: '12px',
    padding: '24px 28px',
    margin: '24px 0',
    position: 'relative',
    boxShadow: '0 4px 20px rgba(255, 215, 0, 0.15)',
  };

  const quoteIconStyle = {
    position: 'absolute',
    top: '-12px',
    left: '20px',
    background: '#1a1a2e',
    padding: '4px 12px',
    color: '#ffd700',
    fontSize: '20px',
  };

  const definitionTextStyle = {
    fontSize: '1.15rem',
    fontStyle: 'italic',
    color: '#fff',
    lineHeight: '1.8',
    fontWeight: '500',
    margin: 0,
  };

  const keyTermStyle = {
    background: 'linear-gradient(90deg, #ffd700, #ff8c00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 'bold',
  };

  const tableContainerStyle = {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 20, 40, 0.6) 100%)',
    borderRadius: '16px',
    padding: '24px',
    margin: '32px 0',
    border: '1px solid rgba(0, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  };

  const chartContainerStyle = {
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 20, 40, 0.6) 100%)',
    borderRadius: '16px',
    padding: '24px',
    margin: '32px 0',
    border: '1px solid rgba(0, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  };

  const sectionTitleStyle = {
    textAlign: 'center',
    color: '#00ffff',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  };

  // Table cell styles
  const thStyle = {
    padding: '14px 16px',
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottom: '2px solid #00ffff',
    background: 'rgba(0, 255, 255, 0.1)',
  };

  const tdStyle = {
    padding: '12px 16px',
    textAlign: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  };

  // Function to get MU color based on value
  const getMUColor = (mu) => {
    if (mu === null) return '#888';
    if (mu > 10) return '#00ff88';
    if (mu > 0) return '#88ff88';
    if (mu === 0) return '#ffd700';
    return '#ff6b6b';
  };

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
          <div style={definitionBoxStyle}>
            <span style={quoteIconStyle}><FaQuoteLeft /></span>
            <p style={definitionTextStyle}>
              <span style={keyTermStyle}>Utility</span> is the want-satisfying power of a commodity.
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

          <p style={{
            background: 'rgba(255, 107, 107, 0.1)',
            borderLeft: '4px solid #ff6b6b',
            padding: '16px 20px',
            borderRadius: '0 8px 8px 0',
            margin: '20px 0'
          }}>
            <strong style={{ color: '#ff6b6b' }}>⚠️ Important:</strong> Utility is purely subjective and varies from person to person,
            time to time, and place to place. What gives high utility to one person may give little or
            no utility to another. A vegetarian person gets zero utility from meat, while a non-vegetarian
            may derive high utility from it. The utility of an umbrella is high during monsoon but low
            in winter.
          </p>

          {/* Real-World Example - Smartphone */}
          <div className="note-text" style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 200, 100, 0.05) 100%)',
            border: '1px solid rgba(0, 255, 136, 0.3)',
          }}>
            <h4 style={{ color: '#00ff88' }}>📱 Real-World Example - Understanding Utility:</h4>
            <p>
              Consider a <strong>smartphone</strong>. Different people derive different utilities from it:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
              marginTop: '16px'
            }}>
              {[
                { icon: '👨‍🎓', label: 'For a student', desc: 'High utility for online classes, research, and communication', color: '#ffd700' },
                { icon: '👔', label: 'For a businessperson', desc: 'High utility for emails, video calls, and managing work', color: '#00ffff' },
                { icon: '👴', label: 'For elderly (unfamiliar with tech)', desc: 'Low utility, may prefer a basic phone', color: '#ff8c00' },
                { icon: '📱📱📱', label: 'Person with 3 phones', desc: 'Very low marginal utility from a 4th phone', color: '#ff6b6b' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: 'rgba(255,255,255,0.05)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  borderLeft: `3px solid ${item.color}`
                }}>
                  <strong style={{ color: item.color }}>{item.icon} {item.label}:</strong>
                  <p style={{ margin: '8px 0 0 0', fontSize: '0.95rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <p style={{
              marginTop: '16px',
              fontStyle: 'italic',
              color: '#00ff88',
              textAlign: 'center'
            }}>
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

          <div style={definitionBoxStyle}>
            <span style={quoteIconStyle}><FaQuoteLeft /></span>
            <p style={definitionTextStyle}>
              <span style={keyTermStyle}>Total Utility (TU)</span> is the aggregate sum of satisfaction
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
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 200, 255, 0.05) 100%)',
            border: '2px solid #00ffff',
            borderRadius: '12px',
            padding: '20px 24px',
            margin: '20px 0',
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '12px' }}>
              <strong style={{ color: '#00ffff' }}>Formula:</strong>{' '}
              <span style={{ fontFamily: 'monospace', color: '#ffd700', fontSize: '1.1rem' }}>
                TU<sub>n</sub> = MU<sub>1</sub> + MU<sub>2</sub> + MU<sub>3</sub> + ... + MU<sub>n</sub>
              </span>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', margin: 0 }}>
              Where TU<sub>n</sub> is total utility from n units, and MU<sub>1</sub>, MU<sub>2</sub>...
              are marginal utilities from 1st, 2nd... units respectively.
            </p>
          </div>

          {/* Real Example for TU - Samosa */}
          <div className="note-text" style={{
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}>
            <h4 style={{ color: '#ffd700' }}>🥟 Real-World Example - Total Utility:</h4>
            <p><strong>Scenario:</strong> You're eating samosas at a party. Let's track your total satisfaction:</p>

            <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[
                { unit: '1st samosa', desc: "You're hungry", mu: 50, tu: 50, color: '#00ff88' },
                { unit: '2nd samosa', desc: "Still tasty", mu: 40, tu: 90, color: '#00ff88' },
                { unit: '3rd samosa', desc: "Starting to feel full", mu: 25, tu: 115, color: '#ffd700' },
                { unit: '4th samosa', desc: "Almost full", mu: 10, tu: 125, color: '#ff8c00' },
                { unit: '5th samosa', desc: "Feeling too full", mu: 0, tu: 125, color: '#ff6b6b' },
                { unit: '6th samosa', desc: "Uncomfortable (Disutility)", mu: -15, tu: 110, color: '#ff4444' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  display: 'grid',
                  gridTemplateColumns: '140px 1fr 100px 100px',
                  gap: '12px',
                  alignItems: 'center',
                  background: 'rgba(0,0,0,0.2)',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  borderLeft: `3px solid ${item.color}`,
                }}>
                  <strong style={{ color: item.color }}>{item.unit}</strong>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.desc}</span>
                  <span style={{ color: item.mu >= 0 ? '#00ff88' : '#ff4444' }}>MU: {item.mu}</span>
                  <span style={{ color: '#00ffff', fontWeight: 'bold' }}>TU: {item.tu}</span>
                </div>
              ))}
            </div>

            <p style={{ marginTop: '16px', fontStyle: 'italic', color: '#ffd700' }}>
              📊 Notice how total satisfaction increased initially, reached maximum at 5 samosas (TU = 125),
              then decreased when you ate too much!
            </p>
          </div>

          {/* ============================================ */}
          {/* SECTION 3: MARGINAL UTILITY */}
          {/* ============================================ */}

          <h3 className="highlight-gold">Marginal Utility (MU)</h3>

          <div style={definitionBoxStyle}>
            <span style={quoteIconStyle}><FaQuoteLeft /></span>
            <p style={definitionTextStyle}>
              <span style={keyTermStyle}>Marginal Utility (MU)</span> is the additional satisfaction
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
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 200, 100, 0.05) 100%)',
            border: '2px solid #00ff88',
            borderRadius: '12px',
            padding: '20px 24px',
            margin: '20px 0',
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '8px' }}>
              <strong style={{ color: '#00ff88' }}>Formula 1:</strong>{' '}
              <span style={{ fontFamily: 'monospace', color: '#ffd700', fontSize: '1.1rem' }}>
                MU<sub>n</sub> = TU<sub>n</sub> - TU<sub>n-1</sub>
              </span>
            </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '12px' }}>
              <strong style={{ color: '#00ff88' }}>Formula 2:</strong>{' '}
              <span style={{ fontFamily: 'monospace', color: '#ffd700', fontSize: '1.1rem' }}>
                MU = ΔTU / ΔQ
              </span>
              <span style={{ color: 'rgba(255,255,255,0.6)', marginLeft: '12px', fontSize: '0.95rem' }}>
                (Change in Total Utility / Change in Quantity)
              </span>
            </p>
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              padding: '12px 16px',
              borderRadius: '8px',
              marginTop: '12px'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', margin: 0 }}>
                <strong>Example:</strong> If TU from 3 units = 45 utils, and TU from 4 units = 50 utils,<br />
                then MU<sub>4</sub> = 50 - 45 = <strong style={{ color: '#ffd700' }}>5 utils</strong>
              </p>
            </div>
          </div>

          {/* Real Example for MU - Cold Drinks */}
          <div className="note-text" style={{
            background: 'linear-gradient(135deg, rgba(0, 150, 255, 0.1) 0%, rgba(0, 100, 200, 0.05) 100%)',
            border: '1px solid rgba(0, 150, 255, 0.3)',
          }}>
            <h4 style={{ color: '#00aaff' }}>🥤 Real-World Example - Marginal Utility:</h4>
            <p><strong>Scenario:</strong> You're buying bottles of cold drinks on a hot summer day:</p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '16px',
              justifyContent: 'center'
            }}>
              {[
                { bottle: '1st', mu: 100, emoji: '🔥', desc: 'Very thirsty' },
                { bottle: '2nd', mu: 60, emoji: '😊', desc: 'Still refreshing' },
                { bottle: '3rd', mu: 30, emoji: '😐', desc: 'Feeling full' },
                { bottle: '4th', mu: 10, emoji: '😕', desc: 'Barely want it' },
                { bottle: '5th', mu: 0, emoji: '🛑', desc: 'Saturation' },
                { bottle: '6th', mu: -20, emoji: '🤢', desc: 'Disutility!' },
              ].map((item, idx) => (
                <div key={idx} style={{
                  background: item.mu > 0 ? 'rgba(0, 255, 136, 0.1)' :
                    item.mu === 0 ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 68, 68, 0.1)',
                  border: `1px solid ${item.mu > 0 ? '#00ff88' : item.mu === 0 ? '#ffd700' : '#ff4444'}`,
                  borderRadius: '12px',
                  padding: '16px',
                  textAlign: 'center',
                  minWidth: '100px',
                  flex: '1',
                }}>
                  <div style={{ fontSize: '2rem' }}>{item.emoji}</div>
                  <div style={{ fontWeight: 'bold', marginTop: '8px' }}>{item.bottle}</div>
                  <div style={{
                    color: item.mu > 0 ? '#00ff88' : item.mu === 0 ? '#ffd700' : '#ff4444',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginTop: '4px'
                  }}>
                    MU: {item.mu}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '20px',
              padding: '16px',
              background: 'rgba(255, 215, 0, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 215, 0, 0.3)'
            }}>
              <strong style={{ color: '#ffd700' }}>💡 Key Insight:</strong>{' '}
              <span style={{ color: 'rgba(255,255,255,0.9)' }}>
                Notice how marginal utility keeps falling with each bottle? This is the
                <strong style={{ color: '#00ff88' }}> Law of Diminishing Marginal Utility</strong> -
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

          <div style={tableContainerStyle}>
            <h3 style={sectionTitleStyle}>
              <FaTable />
              Step 1: Utility Schedule (Table)
            </h3>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
              📋 This schedule shows TU and MU for consuming ice cream on a hot summer day
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '600px'
              }}>
                <thead>
                  <tr>
                    <th style={{ ...thStyle, color: '#00ffff' }}>
                      Units of Ice Cream 🍦
                    </th>
                    <th style={{ ...thStyle, color: '#00ff88', borderBottomColor: '#00ff88' }}>
                      Marginal Utility (MU)<br />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>(Utils)</span>
                    </th>
                    <th style={{ ...thStyle, color: '#ffd700', borderBottomColor: '#ffd700' }}>
                      Total Utility (TU)<br />
                      <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>(Utils)</span>
                    </th>
                    <th style={{ ...thStyle, color: '#ff8c00', borderBottomColor: '#ff8c00' }}>
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

                    return (
                      <tr
                        key={idx}
                        style={{
                          background: isSaturation
                            ? 'rgba(255, 215, 0, 0.15)'
                            : idx % 2 === 0
                              ? 'rgba(255, 255, 255, 0.02)'
                              : 'transparent',
                          transition: 'background 0.3s',
                        }}
                      >
                        <td style={{ ...tdStyle, fontWeight: 'bold', fontSize: '1.1rem' }}>
                          {row.units}
                        </td>
                        <td style={{
                          ...tdStyle,
                          color: getMUColor(row.MU),
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}>
                          {row.MU !== null ? row.MU : '—'}
                        </td>
                        <td style={{
                          ...tdStyle,
                          color: '#ffd700',
                          fontWeight: 'bold',
                          fontSize: '1.1rem'
                        }}>
                          {row.TU}
                        </td>
                        <td style={{
                          ...tdStyle,
                          textAlign: 'left',
                          fontSize: '0.9rem',
                          color: isSaturation ? '#ffd700' : 'rgba(255,255,255,0.8)',
                          fontWeight: isSaturation ? 'bold' : 'normal'
                        }}>
                          {observations[idx]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Calculation Explanation */}
            <div style={{
              marginTop: '24px',
              padding: '16px 20px',
              background: 'rgba(0, 255, 255, 0.1)',
              borderRadius: '10px',
              border: '1px dashed rgba(0, 255, 255, 0.4)'
            }}>
              <h4 style={{ color: '#00ffff', marginBottom: '12px' }}>📐 How to Calculate:</h4>
              <div style={{ display: 'grid', gap: '8px' }}>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: '#ffd700' }}>TU Calculation:</strong>{' '}
                  TU<sub>n</sub> = TU<sub>n-1</sub> + MU<sub>n</sub>
                </p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>
                  Example: TU<sub>3</sub> = TU<sub>2</sub> + MU<sub>3</sub> = 35 + 10 = <strong style={{ color: '#ffd700' }}>45 utils</strong>
                </p>
                <p style={{ margin: '8px 0 0 0' }}>
                  <strong style={{ color: '#00ff88' }}>MU Calculation:</strong>{' '}
                  MU<sub>n</sub> = TU<sub>n</sub> - TU<sub>n-1</sub>
                </p>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.8)' }}>
                  Example: MU<sub>4</sub> = TU<sub>4</sub> - TU<sub>3</sub> = 50 - 45 = <strong style={{ color: '#00ff88' }}>5 utils</strong>
                </p>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* STEP 2: THE GRAPH (DERIVED FROM TABLE) */}
          {/* ============================================ */}

          <div style={chartContainerStyle}>
            <h3 style={sectionTitleStyle}>
              <FaChartLine />
              Step 2: TU and MU Curves (Derived from the Schedule)
            </h3>
            <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginBottom: '20px' }}>
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

                {/* Y-Axis */}
                <YAxis
                  stroke="#00ffff"
                  tick={{ fill: '#00ffff', fontSize: 12 }}
                  axisLine={{ stroke: '#00ffff', strokeWidth: 2 }}
                  tickLine={{ stroke: '#00ffff' }}
                  domain={[-15, 55]}
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
            <div style={{
              marginTop: '28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '12px'
            }}>
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
                <div key={idx} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '14px 18px',
                  background: 'rgba(0,0,0,0.3)',
                  borderRadius: '10px',
                  borderLeft: `4px solid ${item.color}`,
                }}>
                  <span style={{ color: item.color, fontWeight: 'bold', fontSize: '0.95rem' }}>
                    {item.title}
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
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
              <div style={{ display: 'grid', gap: '16px', marginTop: '12px' }}>
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
                  <div key={idx} style={{
                    display: 'flex',
                    gap: '14px',
                    alignItems: 'flex-start',
                    background: 'rgba(0,0,0,0.2)',
                    padding: '14px 18px',
                    borderRadius: '10px',
                    borderLeft: `4px solid ${item.color}`,
                  }}>
                    <span style={{ fontSize: '1.6rem' }}>{item.icon}</span>
                    <div>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <strong style={{ color: item.color }}>{item.condition}</strong>
                        <span style={{ color: 'rgba(255,255,255,0.5)' }}>→</span>
                        <strong style={{ color: '#fff' }}>{item.result}</strong>
                      </div>
                      <p style={{ margin: '6px 0 0 0', color: 'rgba(255,255,255,0.75)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
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

          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 150, 255, 0.1) 100%)',
            border: '2px solid rgba(255, 215, 0, 0.5)',
            borderRadius: '16px',
            padding: '28px',
            margin: '24px 0',
          }}>
            <h4 style={{ color: '#ffd700', marginBottom: '16px', fontSize: '1.2rem' }}>
              <FaLightbulb style={{ marginRight: '8px' }} />
              The Paradox Explained
            </h4>

            {/* The Question */}
            <div style={{
              background: 'rgba(0,0,0,0.3)',
              padding: '16px 20px',
              borderRadius: '10px',
              marginBottom: '20px',
            }}>
              <p style={{ color: '#00ffff', fontSize: '1.1rem', margin: 0 }}>
                <strong>❓ The Question:</strong> Water is essential for life with enormous total utility,
                yet it's cheap. Diamonds are not essential with limited use, yet extremely expensive. Why?
              </p>
            </div>

            {/* The Answer */}
            <div style={{
              background: 'rgba(0, 255, 136, 0.1)',
              padding: '16px 20px',
              borderRadius: '10px',
              marginBottom: '20px',
              border: '1px solid rgba(0, 255, 136, 0.3)',
            }}>
              <p style={{ color: '#00ff88', fontSize: '1.1rem', margin: 0 }}>
                <strong>💡 The Answer:</strong> Price is determined by <strong>MARGINAL UTILITY</strong>,
                not total utility!
              </p>
            </div>

            {/* Comparison Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
              marginTop: '20px'
            }}>
              {/* Water Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(0, 150, 255, 0.2) 0%, rgba(0, 100, 200, 0.1) 100%)',
                border: '2px solid #00aaff',
                borderRadius: '12px',
                padding: '20px',
              }}>
                <h5 style={{
                  color: '#00aaff',
                  fontSize: '1.3rem',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  💧 Water
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Total Utility', value: 'Very High', sub: '(Essential for life)', color: '#00ff88' },
                    { label: 'Supply', value: 'Abundant', sub: '(Easily available)', color: '#ffd700' },
                    { label: 'Marginal Utility', value: 'Low', sub: '(One more glass = little extra satisfaction)', color: '#ff8c00' },
                    { label: 'Price', value: 'Low', sub: '(Based on low MU)', color: '#ff6b6b' },
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      background: 'rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                    }}>
                      <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ color: item.color, fontWeight: 'bold' }}>{item.value}</span>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diamond Box */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 140, 0, 0.1) 100%)',
                border: '2px solid #ffd700',
                borderRadius: '12px',
                padding: '20px',
              }}>
                <h5 style={{
                  color: '#ffd700',
                  fontSize: '1.3rem',
                  marginBottom: '16px',
                  textAlign: 'center'
                }}>
                  💎 Diamonds
                </h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Total Utility', value: 'Low', sub: '(Not essential for survival)', color: '#ff8c00' },
                    { label: 'Supply', value: 'Scarce', sub: '(Rare and limited)', color: '#ff6b6b' },
                    { label: 'Marginal Utility', value: 'High', sub: '(One more diamond = huge satisfaction)', color: '#00ff88' },
                    { label: 'Price', value: 'Very High', sub: '(Based on high MU)', color: '#00ff88' },
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '10px 12px',
                      background: 'rgba(0,0,0,0.2)',
                      borderRadius: '8px',
                    }}>
                      <span style={{ color: 'rgba(255,255,255,0.8)' }}>{item.label}</span>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ color: item.color, fontWeight: 'bold' }}>{item.value}</span>
                        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Lesson */}
            <div style={{
              marginTop: '24px',
              padding: '18px',
              background: 'rgba(255, 215, 0, 0.15)',
              borderRadius: '10px',
              border: '1px dashed rgba(255, 215, 0, 0.5)',
            }}>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.95)', lineHeight: '1.7' }}>
                <strong style={{ color: '#ffd700' }}>🏜️ Key Lesson:</strong> In a desert without water,
                the marginal utility of water becomes <strong style={{ color: '#00ff88' }}>extremely high</strong>,
                and people would pay enormous amounts for it. Similarly, if diamonds were as common as sand,
                their price would be very low. <br /><br />
                <em style={{ color: '#00ffff' }}>
                  Conclusion: Scarcity affects marginal utility, and marginal utility determines price!
                </em>
              </p>
            </div>
          </div>

          {/* Practice Problems */}
          <h3 className="highlight-cyan">Practice Problems: Calculating TU and MU</h3>

          {/* Problem 1 */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1) 0%, rgba(0, 200, 255, 0.05) 100%)',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            margin: '20px 0',
          }}>
            <h4 style={{ color: '#00ffff', marginBottom: '16px' }}>
              📝 Problem 1: Complete the Utility Schedule
            </h4>
            <p>Fill in the missing values (marked with ?) in the table below:</p>

            <div style={{ overflowX: 'auto', margin: '16px 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                <thead>
                  <tr style={{ background: 'rgba(0, 255, 255, 0.2)' }}>
                    <th style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.2)' }}>Units</th>
                    <th style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.2)', color: '#00ff88' }}>MU (Utils)</th>
                    <th style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.2)', color: '#ffd700' }}>TU (Utils)</th>
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
                    <tr key={idx} style={{ background: idx % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent' }}>
                      <td style={{ padding: '12px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 'bold' }}>
                        {row.units}
                      </td>
                      <td style={{
                        padding: '12px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: row.muQ ? '#ff8c00' : '#00ff88',
                        fontWeight: 'bold',
                        fontSize: row.muQ ? '1.2rem' : '1rem'
                      }}>
                        {row.mu}
                      </td>
                      <td style={{
                        padding: '12px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: row.tuQ ? '#ff8c00' : '#ffd700',
                        fontWeight: 'bold',
                        fontSize: row.tuQ ? '1.2rem' : '1rem'
                      }}>
                        {row.tu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <details style={{ marginTop: '16px' }}>
              <summary style={{
                cursor: 'pointer',
                color: '#00ff88',
                fontWeight: 'bold',
                padding: '12px 16px',
                background: 'rgba(0, 255, 136, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 255, 136, 0.3)'
              }}>
                ✅ Click to reveal solution
              </summary>
              <div style={{
                marginTop: '16px',
                padding: '20px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '10px'
              }}>
                <h5 style={{ color: '#00ffff', marginBottom: '16px' }}>Step-by-Step Solution:</h5>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { step: 'TU₁', calc: '= MU₁ = 30 utils', result: '30', formula: 'First unit: TU = MU' },
                    { step: 'MU₂', calc: '= TU₂ - TU₁ = 50 - 30 = 20 utils', result: '20', formula: 'MU = Change in TU' },
                    { step: 'TU₃', calc: '= TU₂ + MU₃ = 50 + 15 = 65 utils', result: '65', formula: 'TU = Previous TU + MU' },
                    { step: 'MU₄', calc: '= TU₄ - TU₃ = 70 - 65 = 5 utils', result: '5', formula: 'MU = Change in TU' },
                    { step: 'TU₅', calc: '= TU₄ + MU₅ = 70 + 0 = 70 utils (Maximum!)', result: '70', formula: 'MU = 0 means TU is max' },
                  ].map((item, idx) => (
                    <div key={idx} style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 1fr',
                      gap: '12px',
                      padding: '10px 14px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '8px',
                      alignItems: 'center'
                    }}>
                      <strong style={{ color: '#ffd700' }}>{item.step}:</strong>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.9)' }}>{item.calc}</span>
                        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>
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
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 100%)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '12px',
            padding: '24px',
            margin: '20px 0',
          }}>
            <h4 style={{ color: '#ffd700', marginBottom: '16px' }}>
              🍫 Problem 2: Real-World Application
            </h4>
            <p>
              Priya is buying chocolates at a fair. The marginal utilities she derives are:
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              margin: '16px 0',
              justifyContent: 'center'
            }}>
              {[
                { n: '1st', mu: 40 },
                { n: '2nd', mu: 30 },
                { n: '3rd', mu: 20 },
                { n: '4th', mu: 10 },
                { n: '5th', mu: 0 },
              ].map((item, idx) => (
                <span key={idx} style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '10px 18px',
                  borderRadius: '20px',
                  border: `1px solid ${item.mu > 0 ? '#00ff88' : '#ffd700'}`,
                }}>
                  {item.n}: <strong style={{ color: item.mu > 0 ? '#00ff88' : '#ffd700' }}>{item.mu} utils</strong>
                </span>
              ))}
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.2)',
              padding: '16px 20px',
              borderRadius: '10px',
              marginTop: '16px'
            }}>
              <p style={{ margin: '0 0 12px 0' }}><strong>Questions:</strong></p>
              <ol style={{ paddingLeft: '20px', color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>Calculate the total utility from consuming 4 chocolates.</li>
                <li style={{ marginBottom: '8px' }}>At which unit does Priya reach saturation?</li>
                <li>Should Priya buy a 6th chocolate if its MU is -10 utils? Explain.</li>
              </ol>
            </div>

            <details style={{ marginTop: '16px' }}>
              <summary style={{
                cursor: 'pointer',
                color: '#00ff88',
                fontWeight: 'bold',
                padding: '12px 16px',
                background: 'rgba(0, 255, 136, 0.1)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 255, 136, 0.3)'
              }}>
                ✅ Click to reveal solution
              </summary>
              <div style={{
                marginTop: '16px',
                padding: '20px',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '10px'
              }}>
                <ol style={{ paddingLeft: '20px' }}>
                  <li style={{ marginBottom: '16px' }}>
                    <strong style={{ color: '#00ffff' }}>TU from 4 chocolates:</strong>
                    <div style={{
                      marginTop: '8px',
                      padding: '12px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '8px'
                    }}>
                      TU = MU₁ + MU₂ + MU₃ + MU₄<br />
                      TU = 40 + 30 + 20 + 10 = <strong style={{ color: '#ffd700', fontSize: '1.2rem' }}>100 utils</strong>
                    </div>
                  </li>
                  <li style={{ marginBottom: '16px' }}>
                    <strong style={{ color: '#00ffff' }}>Saturation point:</strong>
                    <div style={{
                      marginTop: '8px',
                      padding: '12px',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '8px'
                    }}>
                      At <strong style={{ color: '#ffd700' }}>5th unit</strong> where MU = 0<br />
                      At this point, TU = 100 + 0 = <strong style={{ color: '#ffd700' }}>100 utils (Maximum)</strong>
                    </div>
                  </li>
                  <li>
                    <strong style={{ color: '#00ffff' }}>Should she buy 6th chocolate?</strong>
                    <div style={{
                      marginTop: '8px',
                      padding: '12px',
                      background: 'rgba(255, 68, 68, 0.1)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 68, 68, 0.3)'
                    }}>
                      <strong style={{ color: '#ff6b6b' }}>No!</strong> If MU₆ = -10 utils, then:<br />
                      New TU = 100 + (-10) = <strong style={{ color: '#ff6b6b' }}>90 utils</strong><br /><br />
                      Her total satisfaction would <em>decrease</em> from 100 to 90 utils.<br />
                      <strong style={{ color: '#ffd700' }}>Conclusion:</strong> She should stop at 5 chocolates to maximize satisfaction.
                    </div>
                  </li>
                </ol>
              </div>
            </details>
          </div>

          {/* Key Takeaways */}
          <h3 className="highlight-gold">Key Takeaways</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '20px'
          }}>
            {[
              {
                num: '1',
                title: 'Utility is Subjective',
                desc: 'Different people get different satisfaction from the same good based on personal preferences.',
                color: '#00ffff'
              },
              {
                num: '2',
                title: 'TU = Sum of all MUs',
                desc: 'Total utility is calculated by adding marginal utilities of all units consumed.',
                color: '#ffd700'
              },
              {
                num: '3',
                title: 'MU Diminishes with Consumption',
                desc: 'As you consume more units, additional satisfaction from each unit typically decreases.',
                color: '#00ff88'
              },
              {
                num: '4',
                title: 'Price Reflects Marginal Utility',
                desc: 'Market prices are determined by marginal utility, not total utility (Diamond-Water Paradox).',
                color: '#ff8c00'
              },
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(0,0,0,0.3)',
                border: `2px solid ${item.color}`,
                borderRadius: '12px',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  right: '-15px',
                  width: '70px',
                  height: '70px',
                  background: item.color,
                  opacity: 0.1,
                  borderRadius: '50%',
                }}></div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#000',
                    fontSize: '1.1rem',
                  }}>{item.num}</span>
                  <h4 style={{ color: item.color, margin: 0 }}>{item.title}</h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.95rem' }}>
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