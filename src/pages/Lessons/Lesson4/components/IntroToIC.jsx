/**
 * IntroToIC.jsx - Section 1 of Lesson 4
 * Introduction to the Ordinal Approach
 * BRUTALIST THEME VERSION
 */

import { useState } from 'react';
import {
  FaBookOpen,
  FaHistory,
  FaCheckCircle,
  FaExchangeAlt,
  FaBalanceScale,
  FaLightbulb,
  FaUserGraduate,
  FaThumbsUp,
  FaThumbsDown,
  FaArrowRight,
  FaCalculator,
  FaListOl,
  FaTrophy,
  FaMedal
} from 'react-icons/fa';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell
} from 'recharts';
import '../../Lesson3/css/lesson3-brutalist.css';

// Cardinal Utility Example Data
const cardinalUtilityData = [
  { item: 'Apple', utility: 20, fill: '#ff6b6b' },
  { item: 'Orange', utility: 15, fill: '#ffa500' },
  { item: 'Banana', utility: 18, fill: '#ffd700' },
  { item: 'Mango', utility: 25, fill: '#00ff88' },
  { item: 'Grapes', utility: 12, fill: '#9b59b6' },
];

// Ordinal Ranking Data
const ordinalRankingData = [
  { rank: 1, item: 'Mango', icon: '🥭', preference: 'Most Preferred' },
  { rank: 2, item: 'Apple', icon: '🍎', preference: 'Second Choice' },
  { rank: 3, item: 'Banana', icon: '🍌', preference: 'Third Choice' },
  { rank: 4, item: 'Orange', icon: '🍊', preference: 'Fourth Choice' },
  { rank: 5, item: 'Grapes', icon: '🍇', preference: 'Least Preferred' },
];

function IntroToIC() {
  const [activeTab, setActiveTab] = useState('cardinal');

  return (
    <div className="brutalist-page">
      <div className="brutalist-container">
        {/* Header */}
        <header className="brutalist-header">
          <div className="brutalist-label">CHAPTER 4 / SECTION 1</div>
          <h2 className="brutalist-title">INTRODUCTION TO<br />ORDINAL UTILITY</h2>
          <p className="brutalist-subtitle">Moving beyond numerical measurement to preference ranking</p>
        </header>

        {/* Opening Hook */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">THINK ABOUT THIS...</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text" style={{ fontStyle: 'italic' }}>
              "Can you tell me <em>exactly</em> how much happiness you get from eating your favorite food?
              Is it 50 units? 100 units? Or can you only say that you <em>prefer</em> it over other foods?"
            </p>
          </div>
          <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
            This simple question reveals the fundamental problem with measuring utility numerically.
            The <strong>Ordinal Approach</strong> acknowledges this limitation and offers a more
            realistic framework for understanding consumer behavior.
          </p>
        </section>

        {/* What is Ordinal Approach */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">WHAT IS THE ORDINAL APPROACH?</h3>
          <div className="brutalist-definition">
            <p className="brutalist-definition-text">
              The <strong>Ordinal Utility Approach</strong> (also called the <em>Indifference Curve Approach</em> or <em>Hicksian Approach</em>)
              represents a fundamental shift in how economists understand consumer satisfaction.
            </p>
          </div>

          <p style={{ marginTop: '20px', lineHeight: '1.8' }}>
            Unlike the Cardinal Approach which attempts to measure utility in precise numerical units (utils),
            the Ordinal Approach recognizes that <strong>satisfaction is a subjective, psychological phenomenon</strong>
            that cannot be quantified in absolute terms.
          </p>

          <div className="brutalist-grid-2" style={{ marginTop: '25px' }}>
            <div className="brutalist-grid-item yellow">
              <h4><FaCalculator style={{ marginRight: '8px' }} />CARDINAL (OLD)</h4>
              <p style={{ lineHeight: '1.7' }}>Like measuring temperature with a thermometer</p>
              <div className="brutalist-highlight" style={{ marginTop: '10px' }}>"Today is exactly 25°C"</div>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>PRECISE MEASUREMENT</p>
            </div>

            <div className="brutalist-grid-item cyan">
              <h4><FaListOl style={{ marginRight: '8px' }} />ORDINAL (NEW)</h4>
              <p style={{ lineHeight: '1.7' }}>Like ranking contestants in a competition</p>
              <div className="brutalist-highlight" style={{ marginTop: '10px' }}>"1st place, 2nd place, 3rd place"</div>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>PREFERENCE RANKING</p>
            </div>
          </div>
        </section>

        {/* Interactive Comparison */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">CARDINAL VS ORDINAL: COMPARISON</h3>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button
              onClick={() => setActiveTab('cardinal')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'cardinal' ? '#ffeb3b' : '#333',
                color: activeTab === 'cardinal' ? '#000' : '#fff',
                border: '4px solid #000',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'cardinal' ? '4px 4px 0 #000' : 'none'
              }}
            >
              <FaCalculator style={{ marginRight: '8px' }} />CARDINAL
            </button>
            <button
              onClick={() => setActiveTab('ordinal')}
              style={{
                padding: '12px 24px',
                background: activeTab === 'ordinal' ? '#00bcd4' : '#333',
                color: activeTab === 'ordinal' ? '#000' : '#fff',
                border: '4px solid #000',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '1.1rem',
                cursor: 'pointer',
                boxShadow: activeTab === 'ordinal' ? '4px 4px 0 #000' : 'none'
              }}
            >
              <FaListOl style={{ marginRight: '8px' }} />ORDINAL
            </button>
          </div>

          {activeTab === 'cardinal' ? (
            <div>
              <h4 style={{ marginBottom: '15px' }}>Measuring Utility in Numbers (Utils)</h4>

              {/* Chart */}
              <div className="brutalist-chart-container" style={{ background: '#1a1a1a', border: '5px solid #000' }}>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={cardinalUtilityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="item" stroke="#fff" />
                    <YAxis stroke="#ffd700" label={{ value: 'Utils', angle: -90, position: 'insideLeft', fill: '#ffd700' }} />
                    <Tooltip contentStyle={{ background: '#1a1a1a', border: '1px solid #ffd700' }} />
                    <Bar dataKey="utility" radius={[8, 8, 0, 0]}>
                      {cardinalUtilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="brutalist-note" style={{ marginTop: '20px' }}>
                <strong>CARDINAL STATEMENT:</strong>
                <p>• "Mango gives me <strong>25 utils</strong> of satisfaction"</p>
                <p>• "Apple gives me <strong>20 utils</strong> of satisfaction"</p>
                <p>• "Therefore, Mango gives me <strong>5 more utils</strong> than Apple"</p>
              </div>

              <div className="brutalist-grid-item red" style={{ marginTop: '20px' }}>
                <h4><FaThumbsDown style={{ marginRight: '8px' }} />PROBLEMS WITH THIS:</h4>
                <ul className="brutalist-list">
                  <li>How do you actually measure "25 utils"?</li>
                  <li>What unit is a "util"? It's completely arbitrary!</li>
                  <li>Can you compare utils between different people?</li>
                  <li>Does "5 more utils" have any real meaning?</li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <h4 style={{ marginBottom: '15px' }}>Ranking Preferences (1st, 2nd, 3rd...)</h4>

              {/* Ranking Visual */}
              <div className="brutalist-table-container">
                <table className="brutalist-table">
                  <thead>
                    <tr>
                      <th>RANK</th>
                      <th>ITEM</th>
                      <th>PREFERENCE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ordinalRankingData.map((item) => (
                      <tr key={item.rank}>
                        <td>
                          {item.rank === 1 && <FaTrophy style={{ color: '#ffd700', marginRight: '5px' }} />}
                          {item.rank === 2 && <FaMedal style={{ color: '#c0c0c0', marginRight: '5px' }} />}
                          {item.rank === 3 && <FaMedal style={{ color: '#cd7f32', marginRight: '5px' }} />}
                          <strong>{item.rank}</strong>
                        </td>
                        <td>{item.icon} {item.item}</td>
                        <td style={{ color: 'var(--brutalist-yellow)' }}>{item.preference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="brutalist-note" style={{ marginTop: '20px' }}>
                <strong>ORDINAL STATEMENT:</strong>
                <p>• "I <strong>prefer</strong> Mango over Apple"</p>
                <p>• "I <strong>prefer</strong> Apple over Banana"</p>
                <p>• "By transitivity, I <strong>prefer</strong> Mango over Banana"</p>
              </div>

              <div className="brutalist-grid-item green" style={{ marginTop: '20px' }}>
                <h4><FaThumbsUp style={{ marginRight: '8px' }} />WHY THIS WORKS BETTER:</h4>
                <ul className="brutalist-list">
                  <li>No arbitrary numbers needed!</li>
                  <li>Reflects how we actually make decisions</li>
                  <li>Psychologically more realistic</li>
                  <li>Only requires comparison, not measurement</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Key Assumptions */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">KEY ASSUMPTIONS OF ORDINAL UTILITY</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <div className="brutalist-number">01</div>
              <h4><FaBalanceScale style={{ marginRight: '8px' }} />RATIONALITY (COMPLETENESS)</h4>
              <p style={{ lineHeight: '1.7' }}>
                Consumer can always compare any two bundles and express a preference or indifference.
              </p>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
                <strong>Math:</strong> For any bundles A and B, either A ≻ B, B ≻ A, or A ~ B
              </p>
            </div>

            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">02</div>
              <h4><FaExchangeAlt style={{ marginRight: '8px' }} />TRANSITIVITY (CONSISTENCY)</h4>
              <p style={{ lineHeight: '1.7' }}>
                If Bundle A is preferred to B, and B is preferred to C, then A must be preferred to C.
              </p>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
                <strong>Math:</strong> If A ≻ B and B ≻ C, then A ≻ C
              </p>
            </div>

            <div className="brutalist-grid-item yellow">
              <div className="brutalist-number">03</div>
              <h4><FaArrowRight style={{ marginRight: '8px' }} />NON-SATIATION (MORE IS BETTER)</h4>
              <p style={{ lineHeight: '1.7' }}>
                Consumers always prefer more goods to fewer goods, assuming the goods are desirable.
              </p>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
                <strong>Implication:</strong> Higher ICs represent more satisfaction
              </p>
            </div>

            <div className="brutalist-grid-item cyan">
              <div className="brutalist-number">04</div>
              <h4><FaLightbulb style={{ marginRight: '8px' }} />DIMINISHING MRS</h4>
              <p style={{ lineHeight: '1.7' }}>
                As consumer gets more of Good X, they are willing to give up fewer units of Good Y for each additional unit of X.
              </p>
              <p style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
                <strong>Implication:</strong> ICs are convex to the origin
              </p>
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading yellow">KEY ECONOMISTS</h3>
          <div className="brutalist-grid-2">
            <div className="brutalist-grid-item yellow">
              <h4><FaUserGraduate style={{ marginRight: '8px' }} />ALFRED MARSHALL (1842-1924)</h4>
              <p style={{ lineHeight: '1.7' }}>
                Father of Cardinal Utility Theory. Developed the concept of measuring utility in "utils" and the law of diminishing marginal utility.
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Key Work: Principles of Economics (1890)</p>
            </div>

            <div className="brutalist-grid-item cyan">
              <h4><FaUserGraduate style={{ marginRight: '8px' }} />J.R. HICKS (1904-1989)</h4>
              <p style={{ lineHeight: '1.7' }}>
                Nobel Laureate (1972) who revolutionized consumer theory with the ordinal approach. Developed indifference curve analysis.
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Key Work: Value and Capital (1939)</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="brutalist-card">
          <h3 className="brutalist-card-heading cyan">CARDINAL VS ORDINAL: COMPLETE COMPARISON</h3>
          <div className="brutalist-table-container">
            <table className="brutalist-table">
              <thead>
                <tr>
                  <th>ASPECT</th>
                  <th>CARDINAL UTILITY</th>
                  <th>ORDINAL UTILITY</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Propounded By</strong></td>
                  <td>Alfred Marshall</td>
                  <td>J.R. Hicks & R.G.D. Allen</td>
                </tr>
                <tr>
                  <td><strong>Year</strong></td>
                  <td>1890</td>
                  <td>1934</td>
                </tr>
                <tr>
                  <td><strong>Utility Measurement</strong></td>
                  <td>Quantitative (Utils)</td>
                  <td>Qualitative (Rankings)</td>
                </tr>
                <tr>
                  <td><strong>Main Tool</strong></td>
                  <td>Marginal Utility Analysis</td>
                  <td>Indifference Curves</td>
                </tr>
                <tr>
                  <td><strong>Number of Commodities</strong></td>
                  <td>Single commodity analysis</td>
                  <td>Two commodities at a time</td>
                </tr>
                <tr>
                  <td><strong>Equilibrium Condition</strong></td>
                  <td>MU = Price</td>
                  <td>MRS = Price Ratio</td>
                </tr>
                <tr>
                  <td><strong>Psychological Realism</strong></td>
                  <td style={{ color: '#ff6b6b' }}>Low ❌</td>
                  <td style={{ color: '#00ff88' }}>High ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Summary */}
        <section className="brutalist-card">
          <div className="brutalist-highlight dark">
            <FaLightbulb style={{ marginRight: '10px', color: 'var(--brutalist-yellow)' }} />
            <strong>NEXT:</strong> Now that you understand WHY we use the ordinal approach, we'll introduce the <strong>Indifference Curve</strong> — a powerful graphical tool that shows all combinations of two goods giving same satisfaction.
          </div>
        </section>
      </div>
    </div>
  );
}

export default IntroToIC;