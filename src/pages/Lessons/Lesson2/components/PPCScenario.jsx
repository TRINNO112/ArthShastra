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
      situation: "Your country has a fixed budget of $100 billion. You must decide how to allocate resources between Healthcare and Education. Currently producing at point X (50 hospitals, 45 schools).",
      problem: "A pandemic hits! What should you do?",
      options: [
        {
          id: 'A',
          text: "Build 20 more hospitals, reduce schools to 30",
          xRatio: 0.7,
          isCorrect: true,
          feedback: "Excellent! You moved along the PPC, sacrificing education for immediate healthcare needs. This is a rational trade-off during a pandemic.",
          explanation: "This represents efficient resource allocation - moving from one point on the PPC to another."
        },
        {
          id: 'B',
          text: "Build 10 more hospitals AND 10 more schools",
          xRatio: 0.6,
          yOffset: 15,
          offCurve: true,
          isCorrect: false,
          feedback: "This is unattainable! You cannot have both with fixed resources. This point lies outside the PPC.",
          explanation: "Without additional resources or technology, you cannot produce beyond the PPC."
        },
        {
          id: 'C',
          text: "Do nothing, maintain current position",
          xRatio: 0.5,
          isCorrect: false,
          feedback: "While this maintains balance, it ignores the urgent pandemic need. Not the optimal choice for current conditions.",
          explanation: "Sometimes staying at the same point isn't the best response to changing circumstances."
        }
      ],
      ppcData: { maxX: 100, maxY: 70, currentX: 50, currentY: 45, goodX: "Hospitals", goodY: "Schools" }
    },
    {
      id: 2,
      title: "Your Tech Startup Decision",
      emoji: "💻",
      situation: "You run a tech startup with 20 developers. You can build either Mobile Apps or Web Platforms. Currently: 10 apps, 14 platforms.",
      problem: "A major client wants 5 more web platforms ASAP. What's your move?",
      options: [
        {
          id: 'A',
          text: "Shift 5 developers to web, reduce apps to 5",
          xRatio: 0.25,
          isCorrect: true,
          feedback: "Smart move! You understood the opportunity cost - sacrificing 5 apps to gain 5 platforms.",
          explanation: "This demonstrates understanding of opportunity cost and resource reallocation along the PPC."
        },
        {
          id: 'B',
          text: "Hire 5 more developers to expand capacity",
          useNewPPC: true,
          xRatio: 0.5,
          isCorrect: true,
          feedback: "Good long-term thinking! Hiring more resources shifts the PPC outward, allowing more of both!",
          explanation: "Increasing resources causes an outward shift of the PPC - economic growth in action!"
        },
        {
          id: 'C',
          text: "Keep everything same, reject the client",
          xRatio: 0.5,
          isCorrect: false,
          feedback: "Missed opportunity! You could have reallocated resources or expanded capacity.",
          explanation: "Staying at the same point when better options exist isn't optimal resource utilization."
        }
      ],
      ppcData: { maxX: 20, maxY: 20, currentX: 10, currentY: 14, goodX: "Mobile Apps", goodY: "Web Platforms", shifted: true, newMaxX: 25, newMaxY: 25 }
    },
    {
      id: 3,
      title: "Farm Production Challenge",
      emoji: "🌾",
      situation: "Your farm has 100 acres. You can grow Rice or Wheat. Currently growing: 50 acres wheat, 43 acres rice.",
      problem: "Wheat prices doubled! Market wants more wheat. But a drought reduced your total farmable land to 80 acres.",
      options: [
        {
          id: 'A',
          text: "Grow 50 acres wheat, 28 acres rice (on new curve)",
          useNewPPC: true,
          xRatio: 0.625,
          isCorrect: true,
          feedback: "Perfect! You recognized the inward shift (drought reduces capacity) and responded to market demand.",
          explanation: "Resource loss causes PPC to shift inward. You adapted by allocating remaining resources optimally."
        },
        {
          id: 'B',
          text: "Try to grow 60 acres wheat, 40 acres rice",
          xRatio: 0.6,
          yOffset: 5,
          offCurve: true,
          isCorrect: false,
          feedback: "Impossible! Drought reduced land to 80 acres. 60+40=100 acres. This is unattainable now.",
          explanation: "After resource loss, the old PPC is no longer valid. Points on the old curve are now unattainable."
        },
        {
          id: 'C',
          text: "Keep old ratio: 40 acres wheat, 34 acres rice",
          useNewPPC: true,
          xRatio: 0.5,
          isCorrect: false,
          feedback: "You're on the new PPC, but missed the profit opportunity! Wheat prices doubled - grow more wheat!",
          explanation: "Being efficient (on PPC) is good, but not responding to price changes misses potential gains."
        }
      ],
      ppcData: { maxX: 100, maxY: 70, currentX: 50, currentY: 43, goodX: "Wheat (acres)", goodY: "Rice (acres)", shifted: true, newMaxX: 80, newMaxY: 56 }
    },
    {
      id: 4,
      title: "Game Studio Dilemma",
      emoji: "🎮",
      situation: "Your game studio has 50 developers. You can make PC Games or Mobile Games. Currently: 5 PC games, 14 mobile games per year.",
      problem: "New AI tool discovered! It makes PC game development 50% faster. How do you respond?",
      options: [
        {
          id: 'A',
          text: "Make 8 PC games, keep 14 mobile games (use AI)",
          useNewPPC: true,
          xRatio: 0.533,
          isCorrect: true,
          feedback: "Brilliant! You understood that technological improvement in PC games shifts that axis outward!",
          explanation: "Sector-specific technological improvement causes the PPC to pivot outward on that axis."
        },
        {
          id: 'B',
          text: "Make 6 PC games, 10 mobile games",
          xRatio: 0.4,
          isCorrect: false,
          feedback: "You're not utilizing the new technology! You could make more PC games now with the AI tool.",
          explanation: "When technology improves, the production possibility for that good increases. Use it!"
        },
        {
          id: 'C',
          text: "Keep same production: 5 PC, 14 mobile",
          xRatio: 0.333,
          isCorrect: false,
          feedback: "Underutilization! The AI tool expanded your capacity - you're producing inside the new PPC.",
          explanation: "Not adopting available technology means operating inside the PPC - inefficiency."
        }
      ],
      ppcData: { maxX: 10, maxY: 18, currentX: 5, currentY: 14, goodX: "PC Games", goodY: "Mobile Games", rotated: true, newMaxX: 15, newMaxY: 18 }
    },
    {
      id: 5,
      title: "Restaurant Menu Optimization",
      emoji: "🍽️",
      situation: "Your restaurant kitchen can prepare Pasta Dishes or Steak Dishes. With current staff, you can make 40 pasta or 25 steak dishes per night. Currently: 20 pasta, 18 steak.",
      problem: "Celebrity chef joins your team! Steak quality improves, but a new health trend makes pasta more popular. What do you do?",
      options: [
        {
          id: 'A',
          text: "Increase pasta to 25, reduce steak to 15",
          xRatio: 0.625,
          isCorrect: true,
          feedback: "Smart market response! You moved along the PPC to meet changing consumer preferences.",
          explanation: "Responding to demand changes by reallocating resources is efficient management."
        },
        {
          id: 'B',
          text: "Focus on premium steaks: 10 pasta, 22 steak",
          useNewPPC: true,
          xRatio: 0.25,
          isCorrect: true,
          feedback: "Bold strategy! The chef's expertise shifts your steak capability outward. High-margin focus!",
          explanation: "Specialized expertise can shift production possibilities for specific products."
        },
        {
          id: 'C',
          text: "Maximize everything: 30 pasta, 25 steak",
          xRatio: 0.75,
          yOffset: 8,
          offCurve: true,
          isCorrect: false,
          feedback: "That's beyond your kitchen capacity! This point is outside the PPC.",
          explanation: "Can't exceed maximum capacity without adding resources or improving efficiency."
        }
      ],
      ppcData: { maxX: 40, maxY: 25, currentX: 20, currentY: 18, goodX: "Pasta Dishes", goodY: "Steak Dishes", rotated: true, newMaxX: 40, newMaxY: 32 }
    },
    {
      id: 6,
      title: "Manufacturing Plant Crisis",
      emoji: "🏭",
      situation: "Your factory produces Cars and Trucks. You have 200 workers. Currently: 30 cars, 23 trucks per week.",
      problem: "Supply chain disruption! Steel shortage reduces output by 30%. Simultaneously, automation for cars becomes available.",
      options: [
        {
          id: 'A',
          text: "Adopt automation: 28 cars, 16 trucks",
          useNewPPC: true,
          xRatio: 0.7,
          isCorrect: true,
          feedback: "Excellent crisis management! You offset the supply shortage with automation for cars.",
          explanation: "Combining resource loss (inward shift) with tech improvement (partial outward pivot) requires strategic thinking."
        },
        {
          id: 'B',
          text: "Maintain old ratios: 21 cars, 16 trucks",
          useNewPPC: true,
          xRatio: 0.525,
          isCorrect: false,
          feedback: "You're adapting to the shortage but ignoring available automation! Opportunity missed.",
          explanation: "When technology is available, not using it means underutilizing potential."
        },
        {
          id: 'C',
          text: "Ignore both changes: keep 30 cars, 23 trucks",
          xRatio: 0.75,
          yOffset: 7,
          offCurve: true,
          isCorrect: false,
          feedback: "Impossible! Steel shortage makes this unattainable. You're trying to produce beyond the new PPC.",
          explanation: "Resource constraints must be respected. Previous production levels may become unattainable."
        }
      ],
      ppcData: { maxX: 40, maxY: 30, currentX: 30, currentY: 23, goodX: "Cars", goodY: "Trucks", complex: true, newMaxX: 40, newMaxY: 21 }
    },
    {
      id: 7,
      title: "Bakery Expansion Decision",
      emoji: "🥖",
      situation: "Your bakery makes Bread and Pastries. With 5 bakers, you produce 80 breads or 50 pastries daily. Currently: 40 bread, 35 pastries.",
      problem: "Morning rush shows huge bread demand! But one baker quits. How do you adjust?",
      options: [
        {
          id: 'A',
          text: "Prioritize bread: 48 bread, 20 pastries",
          useNewPPC: true,
          xRatio: 0.75,
          isCorrect: true,
          feedback: "Perfect response! You adapted to both the demand shift and resource loss efficiently.",
          explanation: "Good managers reallocate remaining resources based on market signals."
        },
        {
          id: 'B',
          text: "Maintain balance: 32 bread, 28 pastries",
          useNewPPC: true,
          xRatio: 0.5,
          isCorrect: false,
          feedback: "You're on the new PPC but missed the opportunity! Bread demand is high - capitalize on it!",
          explanation: "Efficiency isn't enough - you must also respond to market conditions for maximum profit."
        },
        {
          id: 'C',
          text: "Hire immediately, keep 40 bread, 35 pastries",
          xRatio: 0.5,
          isCorrect: false,
          feedback: "Hiring takes time! In the short run, you must work with reduced capacity.",
          explanation: "Short-run decisions must account for current constraints, even if long-run solutions exist."
        }
      ],
      ppcData: { maxX: 80, maxY: 50, currentX: 40, currentY: 35, goodX: "Bread (loaves)", goodY: "Pastries", shifted: true, newMaxX: 64, newMaxY: 40 }
    },
    {
      id: 8,
      title: "Hospital Resource Allocation",
      emoji: "🏥",
      situation: "Your hospital can handle ER Cases or Scheduled Surgeries. Capacity: 100 ER or 60 surgeries weekly. Currently: 50 ER, 42 surgeries.",
      problem: "Flu outbreak! ER cases surge. BUT new surgical robot becomes available. How do you respond?",
      options: [
        {
          id: 'A',
          text: "Surge ER capacity: 70 ER, 25 surgeries",
          xRatio: 0.7,
          isCorrect: true,
          feedback: "Responsible triage! You prioritized urgent care during the outbreak while maintaining some surgeries.",
          explanation: "Healthcare often requires difficult trade-offs based on urgency and need."
        },
        {
          id: 'B',
          text: "Adopt robot for surgeries: 50 ER, 52 surgeries",
          useNewPPC: true,
          xRatio: 0.5,
          isCorrect: true,
          feedback: "Innovative! The surgical robot shifts surgery capacity outward. Maintains ER while improving surgery.",
          explanation: "Technology can expand possibilities in specific areas, creating new production options."
        },
        {
          id: 'C',
          text: "Maximize both: 80 ER, 55 surgeries",
          xRatio: 0.8,
          yOffset: 15,
          offCurve: true,
          isCorrect: false,
          feedback: "Beyond capacity! Even with the robot, you can't exceed physical and staff limits.",
          explanation: "There are always constraints - technology helps but doesn't eliminate trade-offs."
        }
      ],
      ppcData: { maxX: 100, maxY: 60, currentX: 50, currentY: 42, goodX: "ER Cases", goodY: "Scheduled Surgeries", rotated: true, newMaxX: 100, newMaxY: 75 }
    }
  ];

  const currentScenarioData = scenarios[currentScenario];

  // Generate PPC curves with more points for accuracy
  const generatePPC = (maxX, maxY) => {
    const points = [];
    for (let i = 0; i <= 100; i++) {
      const t = i / 100;
      const x = maxX * t;
      const y = maxY * Math.sqrt(1 - t * t); // Better curve formula
      points.push({ x, y });
    }
    return points;
  };

  // Find closest point on PPC for a given x value
  const findPointOnPPC = (targetX, ppcData) => {
    const ppc = ppcData;
    let closest = ppc[0];
    let minDist = Math.abs(ppc[0].x - targetX);

    for (let point of ppc) {
      const dist = Math.abs(point.x - targetX);
      if (dist < minDist) {
        minDist = dist;
        closest = point;
      }
    }
    return closest;
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
      currentScenarioData.ppcData.newMaxY
    );
  }
  if (currentScenarioData.ppcData.complex) {
    newPPC = generatePPC(
      currentScenarioData.ppcData.newMaxX,
      currentScenarioData.ppcData.newMaxY
    );
  }

  // Calculate actual positions on PPC for options
  const getOptionPosition = (option) => {
    if (option.offCurve) {
      // Point outside PPC
      const basePoint = findPointOnPPC(option.xRatio * currentScenarioData.ppcData.maxX, originalPPC);
      return { x: basePoint.x, y: basePoint.y + option.yOffset };
    }

    const targetPPC = (option.useNewPPC && newPPC) ? newPPC : originalPPC;
    const maxX = option.useNewPPC ?
      (currentScenarioData.ppcData.newMaxX || currentScenarioData.ppcData.maxX) :
      currentScenarioData.ppcData.maxX;

    const targetX = option.xRatio * maxX;
    return findPointOnPPC(targetX, targetPPC);
  };

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
          padding: '12px 16px',
          borderRadius: '10px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
        }}>
          <p style={{ color: 'white', fontSize: '0.9rem', margin: '4px 0', fontWeight: '600' }}>
            {currentScenarioData.ppcData.goodX}: <strong style={{ color: '#00ff88' }}>{data.x?.toFixed(1)}</strong>
          </p>
          <p style={{ color: 'white', fontSize: '0.9rem', margin: '4px 0', fontWeight: '600' }}>
            {currentScenarioData.ppcData.goodY}: <strong style={{ color: '#00d4ff' }}>{data.y?.toFixed(1)}</strong>
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
          padding: '18px 24px',
          background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(157,78,221,0.15))',
          borderRadius: '14px',
          border: '2px solid rgba(255,215,0,0.3)',
          boxShadow: '0 4px 20px rgba(255,215,0,0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaGamepad style={{ color: '#ffd700', fontSize: '1.6rem' }} />
            <h3 style={{ color: 'white', margin: 0, fontSize: '1.3rem', fontWeight: '700' }}>
              Scenario {currentScenario + 1} of {scenarios.length}
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FaTrophy style={{ color: '#ffd700', fontSize: '1.4rem' }} />
            <span style={{ color: '#00ff88', fontSize: '1.4rem', fontWeight: '700' }}>
              Score: {score}/{scenarios.length}
            </span>
          </div>
        </div>

        {/* Scenario Card */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(10,10,25,0.9), rgba(20,15,40,0.9))',
          padding: '35px',
          borderRadius: '24px',
          border: '2px solid rgba(255,215,0,0.25)',
          marginBottom: '25px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.3)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <div style={{ fontSize: '4.5rem', marginBottom: '12px' }}>
              {currentScenarioData.emoji}
            </div>
            <h3 style={{
              color: '#ffd700',
              fontSize: '1.8rem',
              margin: '0 0 15px 0',
              textShadow: '0 0 25px rgba(255,215,0,0.4)',
              fontWeight: '700'
            }}>
              {currentScenarioData.title}
            </h3>
          </div>

          <div style={{
            background: 'rgba(0,150,255,0.12)',
            padding: '22px',
            borderRadius: '14px',
            border: '2px solid rgba(0,150,255,0.35)',
            marginBottom: '20px'
          }}>
            <h4 style={{ color: '#00d4ff', margin: '0 0 12px 0', fontSize: '1.15rem', fontWeight: '700' }}>
              📋 Situation:
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.92)', margin: 0, fontSize: '1.02rem', lineHeight: '1.75' }}>
              {currentScenarioData.situation}
            </p>
          </div>

          <div style={{
            background: 'rgba(255,107,107,0.12)',
            padding: '22px',
            borderRadius: '14px',
            border: '2px solid rgba(255,107,107,0.35)',
            marginBottom: '28px'
          }}>
            <h4 style={{ color: '#ff6b6b', margin: '0 0 12px 0', fontSize: '1.15rem', fontWeight: '700' }}>
              ⚠️ Problem:
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.92)', margin: 0, fontSize: '1.02rem', lineHeight: '1.75', fontWeight: '600' }}>
              {currentScenarioData.problem}
            </p>
          </div>

          {/* Graph Visualization */}
          <div style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '25px',
            borderRadius: '16px',
            marginBottom: '28px',
            border: '2px solid rgba(255,215,0,0.2)'
          }}>
            <h4 style={{ color: 'white', marginBottom: '18px', textAlign: 'center', fontSize: '1.2rem', fontWeight: '700' }}>
              📊 Production Possibilities Curve
            </h4>
            <ResponsiveContainer width="100%" height={420}>
              <ComposedChart margin={{ top: 25, right: 45, left: 25, bottom: 35 }}>
                <defs>
                  <linearGradient id="scenarioPPC" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffd700" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#ffed4e" stopOpacity={0.9} />
                  </linearGradient>
                  <linearGradient id="newPPC" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00ff88" stopOpacity={0.95} />
                    <stop offset="100%" stopColor="#00ffaa" stopOpacity={0.95} />
                  </linearGradient>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,215,0,0.25)" />
                    <stop offset="100%" stopColor="rgba(255,215,0,0.02)" />
                  </linearGradient>
                  <linearGradient id="newAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(0,255,136,0.2)" />
                    <stop offset="100%" stopColor="rgba(0,255,136,0.02)" />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.18)" />

                <XAxis
                  type="number"
                  dataKey="x"
                  domain={[0, Math.max(currentScenarioData.ppcData.maxX, currentScenarioData.ppcData.newMaxX || 0) * 1.15]}
                  stroke="rgba(255,255,255,0.65)"
                  tick={{ fill: 'rgba(255,255,255,0.85)', fontSize: 12 }}
                  tickLine={{ stroke: 'rgba(255,255,255,0.35)' }}
                >
                  <Label
                    value={currentScenarioData.ppcData.goodX}
                    offset={-18}
                    position="insideBottom"
                    style={{ fill: '#ffd700', fontWeight: '700', fontSize: '13px' }}
                  />
                </XAxis>

                <YAxis
                  type="number"
                  domain={[0, Math.max(currentScenarioData.ppcData.maxY, currentScenarioData.ppcData.newMaxY || 0) * 1.15]}
                  stroke="rgba(255,255,255,0.65)"
                  tick={{ fill: 'rgba(255,255,255,0.85)', fontSize: 12 }}
                  tickLine={{ stroke: 'rgba(255,255,255,0.35)' }}
                >
                  <Label
                    value={currentScenarioData.ppcData.goodY}
                    angle={-90}
                    position="insideLeft"
                    style={{ fill: '#00d4ff', fontWeight: '700', fontSize: '13px', textAnchor: 'middle' }}
                  />
                </YAxis>

                <Tooltip content={CustomTooltip} />

                {/* Shaded area under original curve */}
                {!newPPC && (
                  <Area
                    data={originalPPC}
                    type="monotone"
                    dataKey="y"
                    stroke="none"
                    fill="url(#areaGradient)"
                  />
                )}

                {/* Original PPC */}
                <Line
                  data={originalPPC}
                  type="monotone"
                  dataKey="y"
                  stroke={newPPC ? "rgba(255,255,255,0.35)" : "url(#scenarioPPC)"}
                  strokeWidth={newPPC ? 2.5 : 4.5}
                  strokeDasharray={newPPC ? "10 5" : "0"}
                  dot={false}
                  name="Original PPC"
                  isAnimationActive={true}
                  animationDuration={1000}
                />

                {/* New PPC if shifted/rotated */}
                {newPPC && (
                  <>
                    <Area
                      data={newPPC}
                      type="monotone"
                      dataKey="y"
                      stroke="none"
                      fill="url(#newAreaGradient)"
                    />
                    <Line
                      data={newPPC}
                      type="monotone"
                      dataKey="y"
                      stroke="url(#newPPC)"
                      strokeWidth={4.5}
                      dot={false}
                      name="New PPC"
                      isAnimationActive={true}
                      animationDuration={1200}
                    />
                  </>
                )}

                {/* Current position */}
                <ReferenceDot
                  x={currentScenarioData.ppcData.currentX}
                  y={currentScenarioData.ppcData.currentY}
                  r={10}
                  fill="#00d4ff"
                  stroke="white"
                  strokeWidth={3}
                  label={{
                    value: "START",
                    position: "top",
                    fill: "#00d4ff",
                    fontSize: 13,
                    fontWeight: "bold"
                  }}
                />

                {/* User's chosen point and connection line */}
                {userChoice && (
                  <>
                    {/* Connection line from current to choice */}
                    <Line
                      data={[
                        { x: currentScenarioData.ppcData.currentX, y: currentScenarioData.ppcData.currentY },
                        { x: getOptionPosition(userChoice).x, y: getOptionPosition(userChoice).y }
                      ]}
                      type="linear"
                      dataKey="y"
                      stroke={userChoice.isCorrect ? "#00ff88" : "#ff6b6b"}
                      strokeWidth={3}
                      strokeDasharray="6 6"
                      dot={false}
                      isAnimationActive={true}
                      animationDuration={800}
                    />
                    <ReferenceDot
                      x={getOptionPosition(userChoice).x}
                      y={getOptionPosition(userChoice).y}
                      r={12}
                      fill={userChoice.isCorrect ? "#00ff88" : "#ff6b6b"}
                      stroke="white"
                      strokeWidth={3.5}
                      label={{
                        value: "YOUR CHOICE",
                        position: "bottom",
                        fill: userChoice.isCorrect ? "#00ff88" : "#ff6b6b",
                        fontSize: 13,
                        fontWeight: "bold"
                      }}
                    />
                  </>
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Options */}
          {!showExplanation && (
            <div>
              <h4 style={{ color: 'white', marginBottom: '16px', fontSize: '1.15rem', fontWeight: '700' }}>
                💡 Choose Your Decision:
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {currentScenarioData.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleChoice(option)}
                    style={{
                      padding: '20px 24px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))',
                      color: 'white',
                      border: '2px solid rgba(255,215,0,0.35)',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      textAlign: 'left',
                      transition: 'all 0.3s ease',
                      fontWeight: '500',
                      lineHeight: '1.6'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,215,0,0.25), rgba(255,215,0,0.12))';
                      e.currentTarget.style.borderColor = '#ffd700';
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,215,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))';
                      e.currentTarget.style.borderColor = 'rgba(255,215,0,0.35)';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <strong style={{ color: '#ffd700', fontSize: '1.05rem' }}>Option {option.id}:</strong> {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Feedback */}
          {showExplanation && userChoice && (
            <div style={{
              background: userChoice.isCorrect
                ? 'linear-gradient(145deg, rgba(0,255,136,0.18), rgba(0,255,136,0.06))'
                : 'linear-gradient(145deg, rgba(255,107,107,0.18), rgba(255,107,107,0.06))',
              padding: '28px',
              borderRadius: '16px',
              border: `2px solid ${userChoice.isCorrect ? '#00ff88' : '#ff6b6b'}`,
              marginTop: '22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                {userChoice.isCorrect ? (
                  <FaCheckCircle style={{ color: '#00ff88', fontSize: '2.2rem' }} />
                ) : (
                  <FaTimesCircle style={{ color: '#ff6b6b', fontSize: '2.2rem' }} />
                )}
                <h3 style={{
                  color: userChoice.isCorrect ? '#00ff88' : '#ff6b6b',
                  margin: 0,
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  {userChoice.isCorrect ? 'Correct! 🎉' : 'Not Quite! 🤔'}
                </h3>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.93)',
                fontSize: '1.05rem',
                lineHeight: '1.75',
                marginBottom: '18px'
              }}>
                {userChoice.feedback}
              </p>

              <div style={{
                background: 'rgba(0,0,0,0.35)',
                padding: '18px',
                borderRadius: '12px',
                borderLeft: '4px solid #ffd700'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <FaLightbulb style={{ color: '#ffd700', fontSize: '1.3rem' }} />
                  <h4 style={{ color: '#ffd700', margin: 0, fontSize: '1.05rem', fontWeight: '700' }}>
                    Economic Concept:
                  </h4>
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.88)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {userChoice.explanation}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginTop: '22px' }}>
                {currentScenario < scenarios.length - 1 ? (
                  <button
                    onClick={nextScenario}
                    style={{
                      flex: 1,
                      padding: '16px',
                      background: 'linear-gradient(135deg, #00ff88, #00ffaa)',
                      color: '#0a0a15',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      transition: 'transform 0.2s',
                      boxShadow: '0 4px 15px rgba(0,255,136,0.3)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    Next Scenario →
                  </button>
                ) : (
                  <button
                    onClick={resetGame}
                    style={{
                      flex: 1,
                      padding: '16px',
                      background: 'linear-gradient(135deg, #9d4edd, #b15ced)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      transition: 'transform 0.2s',
                      boxShadow: '0 4px 15px rgba(157,78,221,0.3)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
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
            background: 'linear-gradient(135deg, rgba(157,78,221,0.25), rgba(255,215,0,0.25))',
            padding: '30px',
            borderRadius: '20px',
            border: '3px solid #9d4edd',
            textAlign: 'center',
            boxShadow: '0 8px 30px rgba(157,78,221,0.3)'
          }}>
            <FaTrophy style={{ fontSize: '3.5rem', color: '#ffd700', marginBottom: '18px' }} />
            <h3 style={{ color: 'white', fontSize: '1.7rem', margin: '0 0 12px 0', fontWeight: '700' }}>
              Game Complete!
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.3rem', margin: 0 }}>
              Final Score: <strong style={{ color: '#00ff88', fontSize: '1.6rem' }}>{score}/{scenarios.length}</strong>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', marginTop: '12px', lineHeight: '1.6' }}>
              {score === scenarios.length ? '🎉 Perfect! You mastered PPC concepts!' :
                score >= scenarios.length * 0.75 ? '👍 Great job! You understand most concepts!' :
                  score >= scenarios.length * 0.5 ? '📚 Good effort! Review the concepts and try again!' :
                    '💪 Keep learning! Practice makes perfect!'}
            </p>
          </div>
        )}
      </div>

      <div className="highlight-card purple" style={{ marginTop: '28px' }}>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '14px', fontSize: '1.2rem' }}>🎯 Learning Through Real Scenarios</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
            These scenarios help you understand how PPC concepts apply in real business and government decisions.
            Every choice has an opportunity cost, and understanding trade-offs is essential for effective resource allocation!
          </p>
        </div>
      </div>
    </section>
  )
}

export default PPCScenario;