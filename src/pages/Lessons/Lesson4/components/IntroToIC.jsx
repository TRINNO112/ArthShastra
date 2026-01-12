/**
 * IntroToIC.jsx - Section 1 of Lesson 4
 * Introduction to the Ordinal Approach
 * 
 * COMPREHENSIVE OVERVIEW:
 * ═══════════════════════════════════════════════════════════════
 * This section introduces students to the paradigm shift from
 * Cardinal Utility (Marshall) to Ordinal Utility (Hicks-Allen).
 * 
 * KEY CONCEPTS COVERED:
 * 1. Limitations of Cardinal Approach
 * 2. The Ordinal Revolution (1934)
 * 3. Preference Ranking vs Utility Measurement
 * 4. Assumptions of Ordinal Approach
 * 5. Practical Applications
 * ═══════════════════════════════════════════════════════════════
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
  FaChartLine,
  FaThumbsUp,
  FaThumbsDown,
  FaQuestionCircle,
  FaArrowRight,
  FaArrowDown,
  FaStar,
  FaAppleAlt,
  FaIceCream,
  FaPizzaSlice,
  FaHamburger,
  FaCoffee,
  FaGlassWhiskey,
  FaBrain,
  FaCalculator,
  FaListOl,
  FaTrophy,
  FaMedal,
  FaAward
} from 'react-icons/fa';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import './component.css';
import './IntroToIC.css';

// ═══════════════════════════════════════════════════════════════
// DATA FOR VISUALIZATIONS
// ═══════════════════════════════════════════════════════════════

// Cardinal Utility Example Data
const cardinalUtilityData = [
  { item: 'Apple', utility: 20, fill: '#ff6b6b' },
  { item: 'Orange', utility: 15, fill: '#ffa500' },
  { item: 'Banana', utility: 18, fill: '#ffd700' },
  { item: 'Mango', utility: 25, fill: '#00ff88' },
  { item: 'Grapes', utility: 12, fill: '#9b59b6' },
];

// Ordinal Ranking Example
const ordinalRankingData = [
  { rank: 1, item: 'Mango', icon: '🥭', preference: 'Most Preferred' },
  { rank: 2, item: 'Apple', icon: '🍎', preference: 'Second Choice' },
  { rank: 3, item: 'Banana', icon: '🍌', preference: 'Third Choice' },
  { rank: 4, item: 'Orange', icon: '🍊', preference: 'Fourth Choice' },
  { rank: 5, item: 'Grapes', icon: '🍇', preference: 'Least Preferred' },
];

// Timeline Data
const timelineEvents = [
  {
    year: '1871',
    title: 'Marginalist Revolution',
    description: 'Jevons, Menger, and Walras independently develop marginal utility theory',
    type: 'cardinal'
  },
  {
    year: '1890',
    title: "Marshall's Principles",
    description: "Alfred Marshall publishes 'Principles of Economics', formalizing cardinal utility",
    type: 'cardinal'
  },
  {
    year: '1906',
    title: 'Pareto\'s Contribution',
    description: 'Vilfredo Pareto introduces indifference curves concept in Italy',
    type: 'transition'
  },
  {
    year: '1934',
    title: 'Hicks-Allen Revolution',
    description: 'J.R. Hicks and R.G.D. Allen publish "A Reconsideration of the Theory of Value"',
    type: 'ordinal'
  },
  {
    year: '1939',
    title: 'Value and Capital',
    description: 'Hicks publishes comprehensive work establishing ordinal utility as mainstream',
    type: 'ordinal'
  },
];

// Comparison Data for Radar Chart
const approachComparisonData = [
  { aspect: 'Realism', cardinal: 40, ordinal: 90 },
  { aspect: 'Simplicity', cardinal: 80, ordinal: 60 },
  { aspect: 'Measurability', cardinal: 90, ordinal: 30 },
  { aspect: 'Practicality', cardinal: 50, ordinal: 85 },
  { aspect: 'Flexibility', cardinal: 40, ordinal: 80 },
  { aspect: 'Accuracy', cardinal: 45, ordinal: 75 },
];

// Bundle Comparison Example
const bundleExamples = [
  { id: 'A', pizza: 3, coffee: 2, description: '3 Pizzas + 2 Coffees' },
  { id: 'B', pizza: 2, coffee: 4, description: '2 Pizzas + 4 Coffees' },
  { id: 'C', pizza: 4, coffee: 1, description: '4 Pizzas + 1 Coffee' },
];

// ═══════════════════════════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════════════════════════

function IntroToIC() {
  const [activeTab, setActiveTab] = useState('cardinal');
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);

  return (
    <section className="lesson-section intro-ic-section">
      {/* Hero Header */}
      <div className="section-header-lesson hero-header">
        <div className="hero-badge">
          <span className="badge-text">Lesson 4 • Section 1</span>
        </div>
        <h2 className="section-title-lesson">
          <span className="title-accent">Introduction to</span>
          <span className="title-main">Ordinal Utility Approach</span>
        </h2>
        <p className="section-subtitle-lesson">
          Moving beyond numerical measurement to preference ranking — A paradigm shift in consumer theory
        </p>
        <div className="hero-icons">
          <FaBalanceScale className="hero-icon" />
          <FaArrowRight className="hero-arrow" />
          <FaListOl className="hero-icon highlight" />
        </div>
      </div>

      {/* Opening Hook */}
      <div className="content-card hook-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="hook-content">
            <div className="hook-question">
              <FaQuestionCircle className="hook-icon" />
              <h3>Think About This...</h3>
            </div>
            <blockquote className="hook-quote">
              "Can you tell me <em>exactly</em> how much happiness you get from eating your favorite food?
              Is it 50 units? 100 units? Or can you only say that you <em>prefer</em> it over other foods?"
            </blockquote>
            <p className="hook-explanation">
              This simple question reveals the fundamental problem with measuring utility numerically.
              The <strong>Ordinal Approach</strong> acknowledges this limitation and offers a more
              realistic framework for understanding consumer behavior.
            </p>
          </div>
        </div>
      </div>

      {/* Main Introduction */}
      <div className="content-card main-intro-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            <FaBookOpen /> What is the Ordinal Approach?
          </h3>

          <div className="intro-text-block">
            <p className="lead-paragraph">
              The <strong>Ordinal Utility Approach</strong>, also known as the <em>Indifference Curve Approach</em>
              or <em>Hicksian Approach</em>, represents a fundamental shift in how economists understand
              consumer satisfaction. Unlike the Cardinal Approach from Lesson 3, which attempts to measure
              utility in precise numerical units (utils), the Ordinal Approach recognizes that
              <strong> satisfaction is a subjective, psychological phenomenon</strong> that cannot be
              quantified in absolute terms.
            </p>

            <p>
              Consider this: When you choose between having pizza for dinner versus pasta, you don't
              calculate that pizza gives you "47 utils" while pasta gives "43 utils." Instead, you
              simply know that you <em>prefer</em> pizza over pasta, or perhaps you're <em>indifferent</em>
              between them. This is the essence of ordinal utility — it's about <strong>ranking preferences</strong>,
              not measuring satisfaction.
            </p>
          </div>

          {/* Visual Metaphor */}
          <div className="visual-metaphor">
            <h4><FaLightbulb /> Understanding Through Analogy</h4>
            <div className="metaphor-grid">
              <div className="metaphor-item cardinal-metaphor">
                <div className="metaphor-icon">
                  <FaCalculator />
                </div>
                <h5>Cardinal Approach</h5>
                <p>Like measuring temperature with a thermometer</p>
                <div className="metaphor-example">
                  "Today is exactly 25°C"
                </div>
                <div className="metaphor-label">Precise Measurement</div>
              </div>

              <div className="metaphor-arrow">
                <FaArrowRight />
                <span>vs</span>
              </div>

              <div className="metaphor-item ordinal-metaphor">
                <div className="metaphor-icon">
                  <FaListOl />
                </div>
                <h5>Ordinal Approach</h5>
                <p>Like ranking contestants in a competition</p>
                <div className="metaphor-example">
                  "1st place, 2nd place, 3rd place"
                </div>
                <div className="metaphor-label">Preference Ranking</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Comparison Section */}
      <div className="content-card comparison-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-cyan">
            <FaExchangeAlt /> Cardinal vs. Ordinal: A Visual Comparison
          </h3>

          <p className="section-intro-text">
            Let's understand the difference between these two approaches using a practical example.
            Imagine a consumer choosing among different fruits. See how each approach handles the
            same preference information differently:
          </p>

          {/* Tab Switcher */}
          <div className="approach-tabs">
            <button
              className={`tab-btn ${activeTab === 'cardinal' ? 'active' : ''}`}
              onClick={() => setActiveTab('cardinal')}
            >
              <FaCalculator /> Cardinal Approach
            </button>
            <button
              className={`tab-btn ${activeTab === 'ordinal' ? 'active' : ''}`}
              onClick={() => setActiveTab('ordinal')}
            >
              <FaListOl /> Ordinal Approach
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'cardinal' ? (
              <div className="cardinal-content">
                <div className="content-header">
                  <h4>Measuring Utility in Numbers (Utils)</h4>
                  <p>The cardinal approach assigns specific numerical values to satisfaction:</p>
                </div>

                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={cardinalUtilityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="item" stroke="#fff" />
                      <YAxis stroke="#ffd700" label={{ value: 'Utils', angle: -90, position: 'insideLeft', fill: '#ffd700' }} />
                      <Tooltip
                        contentStyle={{ background: '#1a1a2e', border: '1px solid #ffd700' }}
                        formatter={(value) => [`${value} Utils`, 'Utility']}
                      />
                      <Bar dataKey="utility" radius={[8, 8, 0, 0]}>
                        {cardinalUtilityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="cardinal-statement">
                  <h5>Cardinal Statement:</h5>
                  <div className="statement-box cardinal">
                    <p>"Mango gives me <strong>25 utils</strong> of satisfaction"</p>
                    <p>"Apple gives me <strong>20 utils</strong> of satisfaction"</p>
                    <p>"Therefore, Mango gives me <strong>5 more utils</strong> than Apple"</p>
                  </div>
                </div>

                <div className="problems-list">
                  <h5><FaThumbsDown /> Problems with this approach:</h5>
                  <ul>
                    <li><FaArrowRight /> How do you actually measure "25 utils"?</li>
                    <li><FaArrowRight /> What unit is a "util"? It's completely arbitrary!</li>
                    <li><FaArrowRight /> Can you compare utils between different people?</li>
                    <li><FaArrowRight /> Does "5 more utils" have any real meaning?</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="ordinal-content">
                <div className="content-header">
                  <h4>Ranking Preferences (1st, 2nd, 3rd...)</h4>
                  <p>The ordinal approach simply ranks preferences without numerical measurement:</p>
                </div>

                <div className="ranking-visual">
                  <div className="podium-container">
                    {ordinalRankingData.map((item, index) => (
                      <div
                        key={item.rank}
                        className={`ranking-item rank-${item.rank}`}
                        style={{ '--delay': `${index * 0.1}s` }}
                      >
                        <div className="rank-medal">
                          {item.rank === 1 && <FaTrophy className="medal gold" />}
                          {item.rank === 2 && <FaMedal className="medal silver" />}
                          {item.rank === 3 && <FaAward className="medal bronze" />}
                          {item.rank > 3 && <span className="rank-number">{item.rank}</span>}
                        </div>
                        <div className="item-icon">{item.icon}</div>
                        <div className="item-name">{item.item}</div>
                        <div className="item-preference">{item.preference}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="ordinal-statement">
                  <h5>Ordinal Statement:</h5>
                  <div className="statement-box ordinal">
                    <p>"I <strong>prefer</strong> Mango over Apple"</p>
                    <p>"I <strong>prefer</strong> Apple over Banana"</p>
                    <p>"By transitivity, I <strong>prefer</strong> Mango over Banana"</p>
                  </div>
                </div>

                <div className="advantages-list">
                  <h5><FaThumbsUp /> Why this works better:</h5>
                  <ul>
                    <li><FaCheckCircle /> No arbitrary numbers needed!</li>
                    <li><FaCheckCircle /> Reflects how we actually make decisions</li>
                    <li><FaCheckCircle /> Psychologically more realistic</li>
                    <li><FaCheckCircle /> Only requires comparison, not measurement</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* The Core Idea */}
      <div className="content-card core-idea-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="core-idea-header">
            <div className="core-icon">
              <FaBrain />
            </div>
            <div className="core-text">
              <h3 className="highlight-gold">The Core Idea: Preference Ranking</h3>
              <p className="core-subtitle">Understanding how consumers actually make choices</p>
            </div>
          </div>

          <div className="core-explanation">
            <div className="explanation-block">
              <h4>What Consumers CAN Do:</h4>
              <div className="can-do-grid">
                <div className="can-do-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Compare two bundles and say which they prefer</span>
                </div>
                <div className="can-do-item">
                  <FaCheckCircle className="check-icon" />
                  <span>State that they are indifferent between certain combinations</span>
                </div>
                <div className="can-do-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Rank multiple options from most to least preferred</span>
                </div>
                <div className="can-do-item">
                  <FaCheckCircle className="check-icon" />
                  <span>Apply logical consistency (transitivity) to their choices</span>
                </div>
              </div>
            </div>

            <div className="explanation-block cannot-block">
              <h4>What Consumers CANNOT Do:</h4>
              <div className="cannot-do-grid">
                <div className="cannot-do-item">
                  <FaThumbsDown className="x-icon" />
                  <span>Assign exact numerical utility values to goods</span>
                </div>
                <div className="cannot-do-item">
                  <FaThumbsDown className="x-icon" />
                  <span>Say "Bundle A gives me twice as much satisfaction as Bundle B"</span>
                </div>
                <div className="cannot-do-item">
                  <FaThumbsDown className="x-icon" />
                  <span>Measure the exact intensity of their preferences</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Bundle Comparison */}
          <div className="bundle-comparison">
            <h4><FaExchangeAlt /> Try It: Compare These Bundles</h4>
            <p className="instruction">Click on bundles to see how ordinal preference works:</p>

            <div className="bundles-grid">
              {bundleExamples.map((bundle) => (
                <div
                  key={bundle.id}
                  className={`bundle-card ${selectedBundle === bundle.id ? 'selected' : ''}`}
                  onClick={() => setSelectedBundle(bundle.id)}
                >
                  <div className="bundle-label">Bundle {bundle.id}</div>
                  <div className="bundle-contents">
                    <div className="bundle-item">
                      <FaPizzaSlice className="item-icon pizza" />
                      <span>{bundle.pizza}</span>
                    </div>
                    <span className="plus">+</span>
                    <div className="bundle-item">
                      <FaCoffee className="item-icon coffee" />
                      <span>{bundle.coffee}</span>
                    </div>
                  </div>
                  <div className="bundle-description">{bundle.description}</div>
                </div>
              ))}
            </div>

            {selectedBundle && (
              <div className="bundle-result">
                <p>
                  <strong>In the Ordinal Approach:</strong> You don't need to calculate total utils.
                  You simply compare Bundle {selectedBundle} with other bundles and state your preference!
                </p>
                <div className="preference-options">
                  <span className="pref-label">Your preference might be:</span>
                  <div className="pref-buttons">
                    <button className="pref-btn prefer">A {'>'} B {'>'} C</button>
                    <button className="pref-btn prefer">B {'>'} A {'>'} C</button>
                    <button className="pref-btn indifferent">A ~ B (Indifferent)</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Historical Context */}
      <div className="content-card history-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-cyan">
            <FaHistory /> Historical Context: The Evolution of Utility Theory
          </h3>

          <p className="history-intro">
            The development of ordinal utility represents one of the most significant advances in
            economic thought during the 20th century. Understanding this history helps appreciate
            why the indifference curve approach became the standard framework for consumer theory.
          </p>

          {/* Timeline */}
          <div className="timeline-container">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`timeline-item ${event.type}`}
                style={{ '--index': index }}
              >
                <div className="timeline-marker">
                  <div className="marker-dot"></div>
                  {index < timelineEvents.length - 1 && <div className="marker-line"></div>}
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                  <div className={`timeline-badge ${event.type}`}>
                    {event.type === 'cardinal' && 'Cardinal Era'}
                    {event.type === 'transition' && 'Transition Period'}
                    {event.type === 'ordinal' && 'Ordinal Revolution'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Figures */}
          <div className="key-figures">
            <h4><FaUserGraduate /> Key Economists</h4>
            <div className="figures-grid">
              <div className="figure-card marshall">
                <div className="figure-avatar">AM</div>
                <div className="figure-info">
                  <h5>Alfred Marshall</h5>
                  <span className="figure-years">1842 - 1924</span>
                  <p>Father of Cardinal Utility Theory. Developed the concept of measuring utility in "utils" and the law of diminishing marginal utility.</p>
                  <div className="figure-contribution">
                    <strong>Key Work:</strong> Principles of Economics (1890)
                  </div>
                </div>
              </div>

              <div className="figure-card hicks">
                <div className="figure-avatar">JH</div>
                <div className="figure-info">
                  <h5>John R. Hicks</h5>
                  <span className="figure-years">1904 - 1989</span>
                  <p>Nobel Laureate (1972) who revolutionized consumer theory with the ordinal approach. Developed the indifference curve analysis.</p>
                  <div className="figure-contribution">
                    <strong>Key Work:</strong> Value and Capital (1939)
                  </div>
                </div>
              </div>

              <div className="figure-card allen">
                <div className="figure-avatar">RA</div>
                <div className="figure-info">
                  <h5>Roy G.D. Allen</h5>
                  <span className="figure-years">1906 - 1983</span>
                  <p>Collaborated with Hicks on the famous 1934 paper that introduced the modern ordinal utility framework.</p>
                  <div className="figure-contribution">
                    <strong>Key Work:</strong> "A Reconsideration of the Theory of Value" (1934)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="content-card advantages-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-green">
            <FaThumbsUp /> Why Ordinal Approach is Superior
          </h3>

          <p className="advantages-intro">
            The ordinal approach overcomes several critical limitations of the cardinal approach,
            making it the preferred framework in modern economics. Here's a comprehensive comparison:
          </p>

          {/* Radar Chart Comparison */}
          <div className="radar-comparison">
            <h4>Approach Comparison Radar</h4>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={approachComparisonData}>
                <PolarGrid stroke="rgba(255,255,255,0.2)" />
                <PolarAngleAxis dataKey="aspect" tick={{ fill: '#fff', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#888' }} />
                <Radar
                  name="Cardinal Approach"
                  dataKey="cardinal"
                  stroke="#ff6b6b"
                  fill="#ff6b6b"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Ordinal Approach"
                  dataKey="ordinal"
                  stroke="#00ff88"
                  fill="#00ff88"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip
                  contentStyle={{ background: '#1a1a2e', border: '1px solid #ffd700' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Detailed Advantages */}
          <div className="advantages-grid">
            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-number">1</div>
                <h4>More Psychologically Realistic</h4>
              </div>
              <div className="advantage-content">
                <p>
                  The ordinal approach aligns with how humans actually experience satisfaction.
                  We naturally think in terms of "I prefer this over that" rather than
                  "This gives me exactly 47 units of happiness."
                </p>
                <div className="example-box">
                  <strong>Example:</strong> When choosing between a vacation to Paris vs. Tokyo,
                  you compare experiences—not calculate "Paris = 500 utils, Tokyo = 480 utils."
                </div>
              </div>
            </div>

            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-number">2</div>
                <h4>Fewer Restrictive Assumptions</h4>
              </div>
              <div className="advantage-content">
                <p>
                  The cardinal approach requires the unrealistic assumption that marginal utility
                  of money remains constant. The ordinal approach abandons this constraint entirely.
                </p>
                <div className="comparison-table">
                  <div className="table-header">
                    <span>Cardinal Assumptions</span>
                    <span>Ordinal Assumptions</span>
                  </div>
                  <div className="table-row">
                    <span>❌ Utility measurable in utils</span>
                    <span>✅ Only preference ranking needed</span>
                  </div>
                  <div className="table-row">
                    <span>❌ Constant marginal utility of money</span>
                    <span>✅ No such assumption required</span>
                  </div>
                  <div className="table-row">
                    <span>❌ Utils comparable across individuals</span>
                    <span>✅ Individual preferences sufficient</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-number">3</div>
                <h4>Handles Two-Good Analysis Elegantly</h4>
              </div>
              <div className="advantage-content">
                <p>
                  The indifference curve framework naturally handles situations where consumers
                  choose between combinations of goods, which is more realistic than single-good analysis.
                </p>
                <div className="visual-hint">
                  <FaChartLine />
                  <span>This leads us to Indifference Curves — our main tool for the rest of this lesson!</span>
                </div>
              </div>
            </div>

            <div className="advantage-item">
              <div className="advantage-header">
                <div className="advantage-number">4</div>
                <h4>Preference-Based Decision Making</h4>
              </div>
              <div className="advantage-content">
                <p>
                  Focuses on observable behavior (choices between bundles) rather than
                  unobservable mental states (utility numbers). This makes the theory more
                  testable and scientific.
                </p>
                <div className="science-note">
                  <FaLightbulb />
                  <span>This approach follows the scientific principle of relying on observable phenomena!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Assumptions of Ordinal Approach */}
      <div className="content-card assumptions-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            <FaListOl /> Key Assumptions of Ordinal Utility Theory
          </h3>

          <p className="assumptions-intro">
            While the ordinal approach makes fewer assumptions than the cardinal approach,
            it still relies on certain axioms about consumer behavior. These assumptions
            form the foundation for indifference curve analysis:
          </p>

          <div className="assumptions-list-detailed">
            <div className="assumption-card">
              <div className="assumption-icon">
                <span className="icon-number">1</span>
                <FaBalanceScale />
              </div>
              <div className="assumption-content">
                <h4>Rationality (Completeness)</h4>
                <p className="assumption-main">
                  The consumer can always compare any two bundles and express a preference or indifference.
                </p>
                <div className="assumption-detail">
                  <strong>Mathematically:</strong> For any bundles A and B, either A ≻ B, B ≻ A, or A ~ B
                </div>
                <div className="assumption-example">
                  <strong>Example:</strong> Given Pizza+Cola vs Burger+Juice, you can always say which you prefer (or if you're indifferent).
                </div>
              </div>
            </div>

            <div className="assumption-card">
              <div className="assumption-icon">
                <span className="icon-number">2</span>
                <FaExchangeAlt />
              </div>
              <div className="assumption-content">
                <h4>Transitivity (Consistency)</h4>
                <p className="assumption-main">
                  If Bundle A is preferred to Bundle B, and Bundle B is preferred to Bundle C,
                  then Bundle A must be preferred to Bundle C.
                </p>
                <div className="assumption-detail">
                  <strong>Mathematically:</strong> If A ≻ B and B ≻ C, then A ≻ C
                </div>
                <div className="assumption-example">
                  <strong>Example:</strong> If you prefer Mango to Apple, and Apple to Orange,
                  you must prefer Mango to Orange. No circular preferences allowed!
                </div>
              </div>
            </div>

            <div className="assumption-card">
              <div className="assumption-icon">
                <span className="icon-number">3</span>
                <FaChartLine />
              </div>
              <div className="assumption-content">
                <h4>Non-Satiation (More is Better)</h4>
                <p className="assumption-main">
                  Consumers always prefer more goods to fewer goods, assuming the goods are desirable.
                </p>
                <div className="assumption-detail">
                  <strong>Implication:</strong> This ensures indifference curves slope downward and higher curves represent more satisfaction.
                </div>
                <div className="assumption-example">
                  <strong>Example:</strong> A bundle with 5 apples + 3 oranges is always preferred to
                  4 apples + 3 oranges (more apples, same oranges).
                </div>
              </div>
            </div>

            <div className="assumption-card">
              <div className="assumption-icon">
                <span className="icon-number">4</span>
                <FaArrowDown />
              </div>
              <div className="assumption-content">
                <h4>Diminishing Marginal Rate of Substitution</h4>
                <p className="assumption-main">
                  As a consumer gets more of Good X, they are willing to give up fewer units of
                  Good Y for each additional unit of X.
                </p>
                <div className="assumption-detail">
                  <strong>Implication:</strong> This ensures indifference curves are convex to the origin.
                </div>
                <div className="assumption-example">
                  <strong>Example:</strong> With only 1 pizza, you might trade 4 coffees for another pizza.
                  With 5 pizzas, you might only trade 1 coffee for another pizza.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Comparison Table */}
      <div className="content-card summary-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-cyan">
            <FaExchangeAlt /> Complete Comparison: Cardinal vs. Ordinal
          </h3>

          <div className="comparison-table-full">
            <div className="table-header-row">
              <div className="table-cell header-cell">Aspect</div>
              <div className="table-cell header-cell cardinal-header">Cardinal Utility</div>
              <div className="table-cell header-cell ordinal-header">Ordinal Utility</div>
            </div>

            <div className="table-body">
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Propounded By</div>
                <div className="table-cell">Alfred Marshall</div>
                <div className="table-cell">J.R. Hicks & R.G.D. Allen</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Year</div>
                <div className="table-cell">1890</div>
                <div className="table-cell">1934</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Utility Measurement</div>
                <div className="table-cell">Quantitative (Utils)</div>
                <div className="table-cell">Qualitative (Rankings)</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Main Tool</div>
                <div className="table-cell">Marginal Utility Analysis</div>
                <div className="table-cell">Indifference Curves</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Number of Commodities</div>
                <div className="table-cell">Single commodity analysis</div>
                <div className="table-cell">Two commodities at a time</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Marginal Utility of Money</div>
                <div className="table-cell">Assumed constant</div>
                <div className="table-cell">No such assumption</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Equilibrium Condition</div>
                <div className="table-cell">MU = Price</div>
                <div className="table-cell">MRS = Price Ratio</div>
              </div>
              <div className="table-row-full">
                <div className="table-cell aspect-cell">Psychological Realism</div>
                <div className="table-cell">Low ❌</div>
                <div className="table-cell">High ✅</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Quiz */}
      <div className="content-card quiz-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            <FaQuestionCircle /> Quick Check: Test Your Understanding
          </h3>

          <div className="quiz-container">
            <div className="quiz-question">
              <p className="question-text">
                According to the Ordinal Approach, which of the following statements is VALID?
              </p>

              <div className="quiz-options">
                <button
                  className={`quiz-option ${quizAnswer === 'A' ? (quizAnswer === 'A' ? 'incorrect' : '') : ''}`}
                  onClick={() => setQuizAnswer('A')}
                  disabled={quizAnswer !== null}
                >
                  <span className="option-letter">A</span>
                  <span className="option-text">"Bundle X gives me exactly 50 utils of satisfaction"</span>
                </button>
                <button
                  className={`quiz-option ${quizAnswer === 'B' ? 'correct' : ''}`}
                  onClick={() => setQuizAnswer('B')}
                  disabled={quizAnswer !== null}
                >
                  <span className="option-letter">B</span>
                  <span className="option-text">"I prefer Bundle X over Bundle Y"</span>
                </button>
                <button
                  className={`quiz-option ${quizAnswer === 'C' ? 'incorrect' : ''}`}
                  onClick={() => setQuizAnswer('C')}
                  disabled={quizAnswer !== null}
                >
                  <span className="option-letter">C</span>
                  <span className="option-text">"Bundle X gives me twice the satisfaction of Bundle Y"</span>
                </button>
                <button
                  className={`quiz-option ${quizAnswer === 'D' ? 'incorrect' : ''}`}
                  onClick={() => setQuizAnswer('D')}
                  disabled={quizAnswer !== null}
                >
                  <span className="option-letter">D</span>
                  <span className="option-text">"The marginal utility of my last apple was 15 utils"</span>
                </button>
              </div>

              {quizAnswer && (
                <div className={`quiz-feedback ${quizAnswer === 'B' ? 'correct' : 'incorrect'}`}>
                  {quizAnswer === 'B' ? (
                    <>
                      <FaCheckCircle className="feedback-icon" />
                      <div className="feedback-content">
                        <strong>Correct!</strong> The ordinal approach only requires consumers to express preferences
                        (A ≻ B or A ~ B), not to measure utility in numbers. Options A, C, and D all involve
                        numerical measurement of utility, which is a cardinal concept.
                      </div>
                    </>
                  ) : (
                    <>
                      <FaThumbsDown className="feedback-icon" />
                      <div className="feedback-content">
                        <strong>Not quite!</strong> This statement involves measuring utility numerically,
                        which is a cardinal approach. The ordinal approach only uses preference rankings
                        (preferred, not preferred, or indifferent) without any numbers.
                        <strong> The correct answer is B.</strong>
                      </div>
                    </>
                  )}
                </div>
              )}

              {quizAnswer && (
                <button className="reset-quiz" onClick={() => setQuizAnswer(null)}>
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="content-card next-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-green">
            <FaArrowRight /> What's Coming Next?
          </h3>

          <div className="next-preview">
            <div className="next-icon">
              <FaChartLine />
            </div>
            <div className="next-content">
              <h4>Indifference Curves: The Main Tool</h4>
              <p>
                Now that you understand WHY we use the ordinal approach, we'll introduce the
                <strong> Indifference Curve</strong> — a powerful graphical tool that shows all
                combinations of two goods that give a consumer the same level of satisfaction.
              </p>
              <div className="next-topics">
                <span className="topic-tag">What is an Indifference Curve?</span>
                <span className="topic-tag">Indifference Schedule</span>
                <span className="topic-tag">Properties of ICs</span>
                <span className="topic-tag">Indifference Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          <span className="nav-arrow">→</span>
          Next: Meaning of Indifference Curve
        </div>
      </div>
    </section>
  );
}

export default IntroToIC;