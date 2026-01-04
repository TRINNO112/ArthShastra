// PPCScenario.jsx - Interactive Real-World PPC Scenarios
import { useState } from 'react';
import { FaGamepad, FaTrophy, FaRedo, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
  ReferenceDot,
  Area,
} from 'recharts';

function PPCScenario() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Real-world scenarios
  const scenarios = [
    {
      id: 1,
      title: "Your Country's Budget Crisis",
      emoji: "🏛️",
      situation: "Your country has a fixed budget of $100 billion. You must decide how to allocate resources between Healthcare and Education. Currently producing at point X (50 hospitals, 50 schools).",
      problem: "A pandemic hits! What should you do?",
      options: [
        {
          id: 'A',
          text: "Build 20 more hospitals, reduce schools to 35",
          x: 70,
          y: 35,
          isCorrect: true,
          feedback: "Excellent! You moved along the PPC, sacrificing education for immediate healthcare needs. This is a rational trade-off during a pandemic.",
          explanation: "This represents efficient resource allocation - moving from one point on the PPC to another."
        },
        {
          id: 'B',
          text: "Build 10 more hospitals, keep schools at 50",
          x: 60,
          y: 50,
          isCorrect: false,
          feedback: "This is unattainable! You cannot have both with fixed resources. This point lies outside the PPC.",
          explanation: "Without additional resources or technology, you cannot produce beyond the PPC."
        },
        {
          id: 'C',
          text: "Do nothing, maintain current position",
          x: 50,
          y: 50,
          isCorrect: false,
          feedback: "While this maintains balance, it ignores the urgent pandemic need. Not the optimal choice for current conditions.",
          explanation: "Sometimes staying at the same point isn't the best response to changing circumstances."
        }
      ],
      ppcData: { maxX: 100, maxY: 70, currentX: 50, currentY: 50, goodX: "Hospitals", goodY: "Schools" }
    },
    {
      id: 2,
      title: "Your Tech Startup Decision",
      emoji: "💻",
      situation: "You run a tech startup with 20 developers. You can build either Mobile Apps or Web Platforms. Currently: 10 apps, 10 platforms.",
      problem: "A major client wants 5 more web platforms ASAP. What's your move?",
      options: [
        {
          id: 'A',
          text: "Shift 5 developers to web, reduce apps to 5",
          x: 5,
          y: 15,
          isCorrect: true,
          feedback: "Smart move! You understood the opportunity cost - sacrificing 5 apps to gain 5 platforms.",
          explanation: "This demonstrates understanding of opportunity cost and resource reallocation along the PPC."
        },
        {
          id: 'B',
          text: "Hire 5 more developers, maintain current production",
          x: 10,
          y: 15,
          isCorrect: true,
          feedback: "Good long-term thinking! Hiring more resources shifts the PPC outward, allowing more of both!",
          explanation: "Increasing resources causes an outward shift of the PPC - economic growth in action!"
        },
        {
          id: 'C',
          text: "Keep everything same, reject the client",
          x: 10,
          y: 10,
          isCorrect: false,
          feedback: "Missed opportunity! You could have reallocated resources or expanded capacity.",
          explanation: "Staying at the same point when better options exist isn't optimal resource utilization."
        }
      ],
      ppcData: { maxX: 20, maxY: 20, currentX: 10, currentY: 10, goodX: "Mobile Apps", goodY: "Web Platforms" }
    },
    {
      id: 3,
      title: "Farm Production Challenge",
      emoji: "🌾",
      situation: "Your farm has 100 acres. You can grow Rice or Wheat. Currently growing: 60 acres rice, 40 acres wheat.",
      problem: "Wheat prices doubled! Market wants more wheat. But a drought reduced your total farmable land to 80 acres.",
      options: [
        {
          id: 'A',
          text: "Grow 50 acres wheat, 30 acres rice",
          x: 50,
          y: 30,
          isCorrect: true,
          feedback: "Perfect! You recognized the inward shift (drought reduces capacity) and responded to market demand.",
          explanation: "Resource loss causes PPC to shift inward. You adapted by allocating remaining resources optimally."
        },
        {
          id: 'B',
          text: "Grow 60 acres wheat, 40 acres rice",
          x: 60,
          y: 40,
          isCorrect: false,
          feedback: "Impossible! Drought reduced land to 80 acres. 60+40=100 acres. This is unattainable now.",
          explanation: "After resource loss, the old PPC is no longer valid. Points on the old curve are now unattainable."
        },
        {
          id: 'C',
          text: "Keep old ratio: 48 acres rice, 32 acres wheat",
          x: 32,
          y: 48,
          isCorrect: false,
          feedback: "You're on the new PPC, but missed the profit opportunity! Wheat prices doubled - grow more wheat!",
          explanation: "Being efficient (on PPC) is good, but not responding to price changes misses potential gains."
        }
      ],
      ppcData: { maxX: 100, maxY: 100, currentX: 40, currentY: 60, goodX: "Wheat (acres)", goodY: "Rice (acres)", shifted: true, newMaxX: 80, newMaxY: 80 }
    },
    {
      id: 4,
      title: "Game Studio Dilemma",
      emoji: "🎮",
      situation: "Your game studio has 50 developers. You can make PC Games or Mobile Games. Currently: 5 PC games, 8 mobile games per year.",
      problem: "New AI tool discovered! It makes PC game development 50% faster. How do you respond?",
      options: [
        {
          id: 'A',
          text: "Make 8 PC games, keep 8 mobile games",
          x: 8,
          y: 8,
          isCorrect: true,
          feedback: "Brilliant! You understood that technological improvement in PC games shifts that axis outward!",
          explanation: "Sector-specific technological improvement causes the PPC to pivot outward on that axis."
        },
        {
          id: 'B',
          text: "Make 6 PC games, 10 mobile games",
          x: 6,
          y: 10,
          isCorrect: false,
          feedback: "You're not utilizing the new technology! You could make more PC games now with the AI tool.",
          explanation: "When technology improves, the production possibility for that good increases. Use it!"
        },
        {
          id: 'C',
          text: "Keep same production: 5 PC, 8 mobile",
          x: 5,
          y: 8,
          isCorrect: false,
          feedback: "Underutilization! The AI tool expanded your capacity - you're producing inside the new PPC.",
          explanation: "Not adopting available technology means operating inside the PPC - inefficiency."
        }
      ],
      ppcData: { maxX: 10, maxY: 10, currentX: 5, currentY: 8, goodX: "PC Games", goodY: "Mobile Games", rotated: true, newMaxX: 15 }
    }
  ];

  const currentScenarioData = scenarios[currentScenario];

  // Generate PPC curves
  const generatePPC = (maxX, maxY) => {
    const points = [];
    for (let i = 0; i <= 40; i++) {
      const t = i / 40;
      const x = maxX * t;
      const y = maxY * Math.sqrt(1 - t);
      points.push({ x, y });
    }
    return points;
  };

  const originalPPC = generatePPC(
    currentScenarioData.ppcData.maxX,
    currentScenarioData.ppcData.maxY
  );

  let newPPC = null;
  if (currentScenarioData.ppcData.shifted) {
    newPPC = generatePPC(
      currentScenarioData.ppcData.newMaxX,
      currentScenarioData.ppcData.newMaxY
    );
  }
  if (currentScenarioData.ppcData.rotated) {
    newPPC = generatePPC(
      currentScenarioData.ppcData.newMaxX,
      currentScenarioData.ppcData.maxY
    );
  }

  const handleChoice = (option) => {
    setUserChoice(option);
    setShowExplanation(true);
    if (option.isCorrect) {
      setScore(score + 1);
    }
  };

  const nextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setUserChoice(null);
      setShowExplanation(false);
    }
  };

  const resetGame = () => {
    setCurrentScenario(0);
    setUserChoice(null);
    setShowExplanation(false);
    setScore(0);
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(25, 25, 45, 0.98))',
          border: '2px solid #ffd700',
          padding: '10px 14px',
          borderRadius: '8px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
        }}>
          <p style={{ color: 'white', fontSize: '0.85rem', margin: '4px 0' }}>
            {currentScenarioData.ppcData.goodX}: <strong style={{ color: '#00ff88' }}>{data.x?.toFixed(0)}</strong>
          </p>
          <p style={{ color: 'white', fontSize: '0.85rem', margin: '4px 0' }}>
            {currentScenarioData.ppcData.goodY}: <strong style={{ color: '#00d4ff' }}>{data.y?.toFixed(0)}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Interactive Learning</span>
        <h2 className="section-title-lesson">PPC Real-World Scenarios</h2>
        <p className="section-subtitle-lesson">
          Apply your knowledge by solving real economic decisions!
        </p>
      </div>

      <div className="content-card">
        {/* Score Display */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '25px',
          padding: '15px 20px',
          background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(157,78,221,0.15))',
          borderRadius: '12px',
          border: '1px solid rgba(255,215,0,0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaGamepad style={{ color: '#ffd700', fontSize: '1.5rem' }} />
            <h3 style={{ color: 'white', margin: 0, fontSize: '1.2rem' }}>
              Scenario {currentScenario + 1} of {scenarios.length}
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaTrophy style={{ color: '#ffd700', fontSize: '1.3rem' }} />
            <span style={{ color: '#00ff88', fontSize: '1.3rem', fontWeight: '700' }}>
              Score: {score}/{scenarios.length}
            </span>
          </div>
        </div>

        {/* Scenario Card */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(10,10,25,0.8), rgba(20,15,40,0.8))',
          padding: '30px',
          borderRadius: '20px',
          border: '2px solid rgba(255,215,0,0.2)',
          marginBottom: '25px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '10px' }}>
              {currentScenarioData.emoji}
            </div>
            <h3 style={{
              color: '#ffd700',
              fontSize: '1.6rem',
              margin: '0 0 15px 0',
              textShadow: '0 0 20px rgba(255,215,0,0.3)'
            }}>
              {currentScenarioData.title}
            </h3>
          </div>

          <div style={{
            background: 'rgba(0,150,255,0.1)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(0,150,255,0.3)',
            marginBottom: '20px'
          }}>
            <h4 style={{ color: '#00d4ff', margin: '0 0 10px 0', fontSize: '1.1rem' }}>
              📋 Situation:
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, fontSize: '1rem', lineHeight: '1.7' }}>
              {currentScenarioData.situation}
            </p>
          </div>

          <div style={{
            background: 'rgba(255,107,107,0.1)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(255,107,107,0.3)',
            marginBottom: '25px'
          }}>
            <h4 style={{ color: '#ff6b6b', margin: '0 0 10px 0', fontSize: '1.1rem' }}>
              ⚠️ Problem:
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.9)', margin: 0, fontSize: '1rem', lineHeight: '1.7', fontWeight: '600' }}>
              {currentScenarioData.problem}
            </p>
          </div>

          {/* Graph Visualization */}
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '20px',
            borderRadius: '14px',
            marginBottom: '25px'
          }}>
            <h4 style={{ color: 'white', marginBottom: '15px', textAlign: 'center' }}>
              Production Possibilities
            </h4>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart margin={{ top: 15, right: 35, left: 15, bottom: 25 }}>
                <defs>
                  <linearGradient id="scenarioPPC" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#ffed4e" />
                  </linearGradient>
                  <linearGradient id="newPPC" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00ff88" />
                    <stop offset="100%" stopColor="#00ffaa" />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />

                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[0, Math.max(currentScenarioData.ppcData.maxX, currentScenarioData.ppcData.newMaxX || 0) * 1.1]}
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }}
                >
                  <Label
                    value={currentScenarioData.ppcData.goodX}
                    offset={-10}
                    position="insideBottom"
                    style={{ fill: 'white', fontWeight: '600', fontSize: '11px' }}
                  />
                </XAxis>

                <YAxis
                  type="number"
                  domain={[0, Math.max(currentScenarioData.ppcData.maxY, currentScenarioData.ppcData.newMaxY || 0) * 1.1]}
                  stroke="rgba(255,255,255,0.5)"
                  tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }}
                >
                  <Label
                    value={currentScenarioData.ppcData.goodY}
                    angle={-90}
                    position="insideLeft"
                    style={{ fill: 'white', fontWeight: '600', fontSize: '11px' }}
                  />
                </YAxis>

                <Tooltip content={CustomTooltip} />

                {/* Original PPC */}
                <Line
                  data={originalPPC}
                  type="monotone"
                  dataKey="y"
                  stroke={newPPC ? "rgba(255,255,255,0.3)" : "url(#scenarioPPC)"}
                  strokeWidth={newPPC ? 2 : 3}
                  strokeDasharray={newPPC ? "5 5" : "0"}
                  dot={false}
                  name="Original PPC"
                />

                {/* New PPC if shifted/rotated */}
                {newPPC && (
                  <Line
                    data={newPPC}
                    type="monotone"
                    dataKey="y"
                    stroke="url(#newPPC)"
                    strokeWidth={3}
                    dot={false}
                    name="New PPC"
                  />
                )}

                {/* Current position */}
                <ReferenceDot
                  x={currentScenarioData.ppcData.currentX}
                  y={currentScenarioData.ppcData.currentY}
                  r={8}
                  fill="#00d4ff"
                  stroke="white"
                  strokeWidth={3}
                  label={{
                    value: "Current",
                    position: "top",
                    fill: "#00d4ff",
                    fontSize: 11,
                    fontWeight: "bold"
                  }}
                />

                {/* User's chosen point */}
                {userChoice && (
                  <ReferenceDot
                    x={userChoice.x}
                    y={userChoice.y}
                    r={10}
                    fill={userChoice.isCorrect ? "#00ff88" : "#ff6b6b"}
                    stroke="white"
                    strokeWidth={3}
                    label={{
                      value: "Your Choice",
                      position: "bottom",
                      fill: userChoice.isCorrect ? "#00ff88" : "#ff6b6b",
                      fontSize: 11,
                      fontWeight: "bold"
                    }}
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Options */}
          {!showExplanation && (
            <div>
              <h4 style={{ color: 'white', marginBottom: '15px', fontSize: '1.1rem' }}>
                💡 Choose Your Decision:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentScenarioData.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleChoice(option)}
                    style={{
                      padding: '18px 20px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                      color: 'white',
                      border: '2px solid rgba(255,215,0,0.3)',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.2), rgba(255,215,0,0.1))';
                      e.currentTarget.style.borderColor = '#ffd700';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))';
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <strong style={{ color: '#ffd700' }}>Option {option.id}:</strong> {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Feedback */}
          {showExplanation && userChoice && (
            <div style={{
              background: userChoice.isCorrect
                ? 'linear-gradient(145deg, rgba(0,255,136,0.15), rgba(0,255,136,0.05))'
                : 'linear-gradient(145deg, rgba(255,107,107,0.15), rgba(255,107,107,0.05))',
              padding: '25px',
              borderRadius: '14px',
              border: `2px solid ${userChoice.isCorrect ? '#00ff88' : '#ff6b6b'}`,
              marginTop: '20px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                {userChoice.isCorrect ? (
                  <FaCheckCircle style={{ color: '#00ff88', fontSize: '2rem' }} />
                ) : (
                  <FaTimesCircle style={{ color: '#ff6b6b', fontSize: '2rem' }} />
                )}
                <h3 style={{
                  color: userChoice.isCorrect ? '#00ff88' : '#ff6b6b',
                  margin: 0,
                  fontSize: '1.4rem',
                  fontWeight: '700'
                }}>
                  {userChoice.isCorrect ? 'Correct! 🎉' : 'Not Quite! 🤔'}
                </h3>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '15px'
              }}>
                {userChoice.feedback}
              </p>

              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '15px',
                borderRadius: '10px',
                borderLeft: '4px solid #ffd700'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <FaLightbulb style={{ color: '#ffd700', fontSize: '1.2rem' }} />
                  <h4 style={{ color: '#ffd700', margin: 0, fontSize: '1rem' }}>
                    Economic Concept:
                  </h4>
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {userChoice.explanation}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {currentScenario < scenarios.length - 1 ? (
                  <button
                    onClick={nextScenario}
                    style={{
                      flex: 1,
                      padding: '14px',
                      background: 'linear-gradient(135deg, #00ff88, #00ffaa)',
                      color: '#0a0a15',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '700',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Next Scenario →
                  </button>
                ) : (
                  <button
                    onClick={resetGame}
                    style={{
                      flex: 1,
                      padding: '14px',
                      background: 'linear-gradient(135deg, #9d4edd, #b15ced)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'transform 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <FaRedo />
                    Play Again
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Final Score */}
        {currentScenario === scenarios.length - 1 && showExplanation && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(157,78,221,0.2), rgba(255,215,0,0.2))',
            padding: '25px',
            borderRadius: '16px',
            border: '2px solid #9d4edd',
            textAlign: 'center'
          }}>
            <FaTrophy style={{ fontSize: '3rem', color: '#ffd700', marginBottom: '15px' }} />
            <h3 style={{ color: 'white', fontSize: '1.5rem', margin: '0 0 10px 0' }}>
              Game Complete!
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', margin: 0 }}>
              Final Score: <strong style={{ color: '#00ff88', fontSize: '1.4rem' }}>{score}/{scenarios.length}</strong>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginTop: '10px' }}>
              {score === scenarios.length ? '🎉 Perfect! You mastered PPC concepts!' :
               score >= scenarios.length * 0.75 ? '👍 Great job! You understand most concepts!' :
               score >= scenarios.length * 0.5 ? '📚 Good effort! Review the concepts and try again!' :
               '💪 Keep learning! Practice makes perfect!'}
            </p>
          </div>
        )}
      </div>

      <div className="highlight-card purple" style={{ marginTop: '25px' }}>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '12px' }}>🎯 Learning Through Real Scenarios</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
            These scenarios help you understand how PPC concepts apply in real business and government decisions.
            Every choice has an opportunity cost, and understanding trade-offs is essential for effective resource allocation!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PPCScenario;
