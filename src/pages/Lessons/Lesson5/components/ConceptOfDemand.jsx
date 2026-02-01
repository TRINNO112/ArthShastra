import React, { useState } from 'react';
import { FaChartLine, FaShoppingBasket, FaUsers, FaArrowRight, FaLightbulb, FaPizzaSlice, FaWallet, FaCheckCircle, FaHeart, FaDollarSign, FaShoppingCart, FaTimes, FaCheck, FaApple, FaCar, FaMobileAlt, FaHome, FaGraduationCap, FaBook, FaCoins, FaHandHoldingUsd } from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, Area, LineChart } from 'recharts';
import './lesson5.css';

const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(255, 215, 0, 0.6);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-5deg); }
    75% { transform: rotate(5deg); }
  }

  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    10%, 30% { transform: scale(1.1); }
    20%, 40% { transform: scale(0.95); }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-fadeInLeft {
    animation: fadeInLeft 0.6s ease-out forwards;
  }

  .animate-fadeInRight {
    animation: fadeInRight 0.6s ease-out forwards;
  }

  .animate-scaleIn {
    animation: scaleIn 0.5s ease-out forwards;
  }

  .animate-pulse {
    animation: pulse 2s ease-in-out infinite;
  }

  .animate-bounce {
    animation: bounce 2s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .animate-wiggle {
    animation: wiggle 1s ease-in-out;
  }

  .animate-heartbeat {
    animation: heartbeat 1.5s ease-in-out infinite;
  }

  .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  .stagger-animation {
    opacity: 0;
  }
`;

const DEMAND_SCHEDULE_DATA = [
  { price: 10, demand: 50 },
  { price: 20, demand: 40 },
  { price: 30, demand: 30 },
  { price: 40, demand: 20 },
  { price: 50, demand: 10 },
];

const ConceptOfDemand = () => {
  const [pizzaStep, setPizzaStep] = useState(0);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [quizAnswer, setQuizAnswer] = useState(null);

  const steps = [
    {
      title: "Step 1: Desire",
      desc: "You're hungry and craving a delicious pizza. You see an ad for a cheesy margherita pizza.",
      icon: <FaPizzaSlice style={{ fontSize: '3rem', color: '#ff4444' }} />,
      status: "I really want that pizza!",
      missing: "But wanting is not enough... Do you have money?",
      action: "Check Your Wallet",
      color: "#ff4444",
      explanation: "Desire means you have a wish or craving for something. But in economics, desire alone does NOT create demand."
    },
    {
      title: "Step 2: Ability to Pay",
      desc: "You open your wallet and find ₹500! Now you have the purchasing power to buy the pizza.",
      icon: <FaWallet style={{ fontSize: '3rem', color: '#ffd700' }} />,
      status: "Great! I have ₹500 in my wallet!",
      missing: "But will you actually spend it? Or save it for later?",
      action: "Decide to Buy Now",
      color: "#ffd700",
      explanation: "Ability to pay means you have the money (purchasing power). But having money is still not enough for demand!"
    },
    {
      title: "Step 3: Willingness to Spend",
      desc: "You decide to spend ₹300 right now and walk to the pizza shop to make the purchase.",
      icon: <FaCheckCircle style={{ fontSize: '3rem', color: '#00ff00' }} />,
      status: "I'm buying it NOW at ₹300!",
      missing: "Perfect! All three conditions met!",
      action: "Start Over",
      color: "#00ff00",
      explanation: "Willingness to spend means you're ready to pay the price at this moment. NOW you have created DEMAND!"
    }
  ];

  const demandScenarios = [
    {
      id: 1,
      title: "The iPhone Dream",
      situation: "Raj sees the latest iPhone 15 Pro (₹1,30,000) in a store. He loves it and wants it badly.",
      desire: true,
      ability: false,
      willingness: false,
      money: "₹15,000",
      verdict: "NO DEMAND",
      reason: "Raj has desire but lacks ability to pay. Without purchasing power, there's no demand.",
      icon: <FaMobileAlt style={{ fontSize: '2.5rem', color: '#999' }} />
    },
    {
      id: 2,
      title: "The Wealthy Miser",
      situation: "Mr. Sharma has ₹50 lakhs in his bank. He wants a new car (₹10 lakhs) but refuses to spend money.",
      desire: true,
      ability: true,
      willingness: false,
      money: "₹50,00,000",
      verdict: "NO DEMAND",
      reason: "He has desire and ability, but no willingness to spend. All three are needed!",
      icon: <FaCar style={{ fontSize: '2.5rem', color: '#999' }} />
    },
    {
      id: 3,
      title: "The College Student",
      situation: "Priya wants new textbooks (₹2,000). She has ₹5,000 saved and decides to buy them today.",
      desire: true,
      ability: true,
      willingness: true,
      money: "₹5,000",
      verdict: "YES! DEMAND EXISTS",
      reason: "All three conditions met: desire + ability to pay + willingness to spend = DEMAND",
      icon: <FaBook style={{ fontSize: '2.5rem', color: '#00ff00' }} />
    },
    {
      id: 4,
      title: "The Window Shopper",
      situation: "Neha loves designer handbags (₹80,000) but has only ₹10,000 and won't take a loan.",
      desire: true,
      ability: false,
      willingness: false,
      money: "₹10,000",
      verdict: "NO DEMAND",
      reason: "Despite strong desire, she lacks both ability and willingness to pay the price.",
      icon: <FaShoppingBasket style={{ fontSize: '2.5rem', color: '#999' }} />
    }
  ];

  const quizQuestions = [
    {
      question: "A beggar on the street wants food but has no money. Does he create demand?",
      options: ["Yes, because he wants food", "No, because he can't pay", "Yes, if someone gives him money", "It depends on the situation"],
      correct: 1,
      explanation: "NO DEMAND. He has desire but lacks ability to pay. Demand requires both desire AND purchasing power."
    }
  ];



  return (
    <div className="concept-demand-comic">
      <div className="comic-panel animate-pop">
        <div className="caption-box">CHAPTER 1: THE ORIGIN</div>
        <h2 className="comic-header-md">Concept of Demand</h2>
        <p className="comic-text">
          In the chaotic world of economics, one force rules them all... <span style={{ color: 'var(--action-red)' }}>DEMAND!</span>
        </p>
      </div>

      <div className="comic-panel">
        <div className="speech-bubble" style={{ float: 'right', transform: 'rotate(5deg)' }}>
          <h4 style={{ margin: 0, fontSize: '1.2rem' }}>Wait! Wanting isn't enough?</h4>
        </div>

        <h3 className="comic-header-md">
          <FaLightbulb /> DESIRE VS DEMAND
        </h3>

        <div className="thought-box" style={{ background: '#fff', margin: '2rem 0' }}>
          <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontStyle: 'italic' }}>
            "I want a Batmobile... but I have ₹50."
          </h4>
          <p className="comic-text">
            You might WANT a jetpack, a mansion, or superpowers. But in economics, just wanting something is merely <strong style={{ color: 'var(--villain-purple)' }}>DESIRE</strong>.
            <br /><br />
            To create <strong style={{ color: 'var(--action-red)' }}>DEMAND</strong>, you need the power to back it up!
          </p>
        </div>
      </div>

      <div className="comic-panel" style={{ background: 'var(--flash-yellow)' }}>
        <div className="caption-box" style={{ background: 'white' }}>ACTION REPORT</div>
        <h3 className="comic-header-md" style={{ color: 'var(--comic-ink)' }}>
          THE DEFINITION
        </h3>

        <div style={{
          background: 'white',
          border: '4px solid var(--comic-ink)',
          padding: '2rem',
          boxShadow: '10px 10px 0 rgba(0,0,0,0.1)'
        }}>
          <p className="comic-text" style={{ fontSize: '1.4rem', textAlign: 'center' }}>
            "Demand is the <span style={{ color: 'var(--hero-blue)', textDecoration: 'underline' }}>quantity</span> that a consumer is
            <span style={{ background: 'var(--action-red)', color: 'white', padding: '0 5px' }}> WILLING </span> and
            <span style={{ background: 'var(--hulk-green)', color: 'white', padding: '0 5px' }}> ABLE </span> to buy at
            <span style={{ borderBottom: '3px dashed var(--comic-ink)' }}> each possible price</span> during a
            <span style={{ fontWeight: '900' }}>given period of time</span>."
          </p>
        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          <div className="comic-panel" style={{ margin: 0, borderStyle: 'dashed', padding: '1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.3rem', color: 'var(--action-red)', letterSpacing: '1px' }}>1. DESIRE</h4>
            <p>The mental wish to have something.</p>
          </div>
          <div className="comic-panel" style={{ margin: 0, borderStyle: 'dashed', padding: '1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.3rem', color: 'var(--hulk-green)', letterSpacing: '1px' }}>2. ABILITY (Purchasing Power)</h4>
            <p>Money in the pocket to pay for it.</p>
          </div>
          <div className="comic-panel" style={{ margin: 0, borderStyle: 'dashed', padding: '1rem' }}>
            <h4 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.3rem', color: 'var(--hero-blue)', letterSpacing: '1px' }}>3. WILLINGNESS</h4>
            <p>Readiness to spend that money NOW.</p>
          </div>
        </div>
      </div>

      <div className="comic-panel">
        <div className="caption-box" style={{ background: 'var(--hero-blue)', color: 'white' }}>MISSION: PIZZA</div>
        <h3 className="comic-header-md">
          THE JOURNEY TO DEMAND
        </h3>

        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div className="burst-container animate-pop">
            <div className="burst-shape"></div>
            <div style={{ position: 'relative', fontSize: '3rem', zIndex: 2 }}>
              {steps[pizzaStep].icon}
            </div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '2.5rem', margin: '1rem 0' }}>
            {steps[pizzaStep].title}
          </h2>

          <div className="speech-bubble" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            {steps[pizzaStep].status}
          </div>

          <div style={{ margin: '2rem 0', border: '3px solid var(--comic-ink)', padding: '1rem', background: '#eee' }}>
            <p className="comic-text">{steps[pizzaStep].desc}</p>
          </div>

          <button
            className="comic-btn"
            onClick={() => setPizzaStep(prev => (prev + 1) % 3)}
          >
            {steps[pizzaStep].action} <FaArrowRight />
          </button>

          <div style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.7 }}>
            Step {pizzaStep + 1} of 3
          </div>
        </div>
      </div>

      <div className="comic-panel">
        <div className="caption-box" style={{ background: 'var(--action-red)', color: 'white' }}>CASE FILES</div>
        <h3 className="comic-header-md">
          <span className="animate-pulse">🌍</span> DEMAND OR NO DEMAND?
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {demandScenarios.map((scenario, index) => (
            <div
              key={scenario.id}
              onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
              style={{
                background: 'white',
                border: '3px solid var(--comic-ink)',
                boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
                padding: '1.5rem',
                cursor: 'pointer',
                transform: selectedScenario === scenario.id ? 'rotate(-1deg) scale(1.02)' : 'rotate(0deg)',
                transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                {scenario.icon}
                <span className="comic-badge" style={{
                  background: scenario.verdict.includes('YES') ? 'var(--hulk-green)' : 'var(--action-red)',
                  transform: 'rotate(-3deg)'
                }}>
                  {scenario.verdict}
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.3rem', borderBottom: '2px dashed #ccc', paddingBottom: '5px', letterSpacing: '1px' }}>
                {scenario.title}
              </h4>

              <p className="comic-text" style={{ fontSize: '1rem', color: '#555' }}>
                {scenario.situation}
              </p>

              {selectedScenario === scenario.id && (
                <div className="speech-bubble" style={{ width: '100%', margin: '1rem 0 0 0', borderRadius: '10px', borderStyle: 'solid' }}>
                  <strong style={{ display: 'block', color: 'var(--hero-blue)' }}>DETECTIVE'S NOTE:</strong>
                  {scenario.reason}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Individual vs Market Demand - Comic Theme */}
      <div className="comic-panel" style={{ borderColor: '#00ffff', boxShadow: '10px 10px 0 #008b8b' }}>
        <div className="caption-box" style={{ background: '#00ffff', color: 'black' }}>TEAM ROSTER</div>
        <h3 className="comic-header-md">INDIVIDUAL vs. MARKET DEMAND</h3>
        <p className="comic-text">One hero is strong. But together? UNSTOPPABLE!</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          {/* Individual Demand Card */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #00ffff' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center' }}>👤</div>
            <h4 style={{ color: '#008b8b', fontFamily: 'var(--font-comic-title)', textAlign: 'center', letterSpacing: '1px', fontSize: '1.2rem' }}>INDIVIDUAL DEMAND</h4>
            <p className="comic-text" style={{ fontSize: '0.95rem' }}>
              The quantity a <strong>SINGLE HERO</strong> buys at each price level.
            </p>
            <div style={{ background: '#e0ffff', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
              <strong>Example:</strong> Rahul buys 5 chocolates at ₹10/each.
            </div>
          </div>

          {/* Market Demand Card */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #ffd700' }}>
            <div style={{ fontSize: '3rem', textAlign: 'center' }}>👥</div>
            <h4 style={{ color: '#b8860b', fontFamily: 'var(--font-comic-title)', textAlign: 'center', letterSpacing: '1px', fontSize: '1.2rem' }}>MARKET DEMAND</h4>
            <p className="comic-text" style={{ fontSize: '0.95rem' }}>
              The <strong>TOTAL DEMAND</strong> of all heroes in the market combined!
            </p>
            <div style={{ background: '#fff8dc', padding: '10px', borderRadius: '8px', marginTop: '10px' }}>
              <strong>Formula:</strong> Market = Hero A + Hero B + ...
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>📊 THE DATA LOG</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '3px solid black' }}>
            <thead style={{ background: 'black', color: 'white' }}>
              <tr>
                <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>PRICE (₹)</th>
                <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>HERO A</th>
                <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>HERO B</th>
                <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)', background: 'var(--action-red)' }}>TEAM TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {[
                { price: 10, a: 5, b: 7, total: 12 },
                { price: 20, a: 4, b: 6, total: 10 },
                { price: 30, a: 3, b: 5, total: 8 },
                { price: 40, a: 2, b: 4, total: 6 },
                { price: 50, a: 1, b: 3, total: 4 }
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f0f0f0' : 'white', borderBottom: '1px solid black' }}>
                  <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>₹{row.price}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>{row.a}</td>
                  <td style={{ padding: '10px', textAlign: 'center' }}>{row.b}</td>
                  <td style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold', color: 'var(--action-red)' }}>{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="comic-caption" style={{ marginTop: '1.5rem', background: 'var(--hulk-green)', color: 'white', padding: '10px', textAlign: 'center', transform: 'rotate(-1deg)' }}>
          "Price UP → Quantity DOWN! This is the LAW OF DEMAND!"
        </div>
      </div>

      <div className="comic-panel" style={{ background: '#222', borderColor: '#444' }}>
        <div className="caption-box" style={{ background: 'var(--hulk-green)', color: 'white', borderColor: 'white' }}>THE MONITOR</div>
        <h3 className="comic-header-md" style={{ color: 'var(--hulk-green)', textShadow: 'none', fontFamily: 'monospace' }}>
          <FaChartLine /> VISUALIZING DEMAND
        </h3>

        <div style={{ background: '#000', border: '4px solid #555', borderRadius: '10px', padding: '1rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'var(--hulk-green)', fontFamily: 'monospace' }}>REC ●</div>
          <h4 style={{ color: 'var(--hulk-green)', textAlign: 'center', fontFamily: 'monospace', marginBottom: '1rem' }}>
            DEMAND_CURVE_ANALYSIS.EXE
          </h4>


          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={DEMAND_SCHEDULE_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
              <defs>
                <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00ff00" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00ff00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis
                type="number"
                dataKey="demand"
                domain={[0, 60]}
                stroke="#00ffff"
                tick={{ fill: '#00ffff' }}
                label={{ value: "Quantity Demanded (Units)", position: "bottom", fill: "#00ffff", offset: 10 }}
              />
              <YAxis
                type="number"
                dataKey="price"
                domain={[0, 60]}
                stroke="#ffd700"
                tick={{ fill: '#ffd700' }}
                label={{ value: "Price (₹)", angle: -90, position: "left", fill: "#ffd700", offset: 0 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '2px solid #00ff00',
                  borderRadius: '8px',
                  padding: '10px'
                }}
                itemStyle={{ color: '#00ff00', fontSize: '1.05rem' }}
                labelStyle={{ color: '#ffd700', fontWeight: 'bold' }}
                labelFormatter={(value) => `Quantity: ${value} units`}
                formatter={(value) => [`₹${value}`, "Price"]}
              />
              <Area type="monotone" dataKey="price" stroke="none" fill="url(#colorDemand)" />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#00ff00"
                strokeWidth={4}
                dot={{ r: 7, fill: '#00ff00', strokeWidth: 2, stroke: '#ffffff' }}
                activeDot={{ r: 10 }}
              />
            </AreaChart>
          </ResponsiveContainer>

        </div>

        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { title: 'Downward Sloping', text: 'Slopes down from left to right.', color: 'var(--hulk-green)' },
            { title: 'Inverse Relationship', text: 'Price UP = Quantity DOWN.', color: 'var(--flash-yellow)' },
            { title: 'Rational Behavior', text: 'People buy cheap, skip expensive.', color: 'var(--hero-blue)' }
          ].map((item, i) => (
            <div key={i} style={{ background: '#333', padding: '1rem', borderTop: `4px solid ${item.color}` }}>
              <h5 style={{ color: item.color, fontFamily: 'monospace', marginBottom: '0.5rem' }}>{item.title}</h5>
              <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="comic-panel" style={{ background: 'var(--villain-purple)', borderColor: 'var(--comic-ink)' }}>
        <h3 className="comic-header-md" style={{ color: 'white', textShadow: '3px 3px 0 black' }}>
          THE RIDDLER'S CHALLENGE
        </h3>

        <div style={{ background: 'white', border: '3px solid black', padding: '1.5rem', boxShadow: '10px 10px 0 rgba(0,0,0,0.3)' }}>
          <h4 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', marginBottom: '1rem' }}>
            {quizQuestions[0].question}
          </h4>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {quizQuestions[0].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setQuizAnswer(index)}
                className="comic-btn secondary"
                style={{
                  background: quizAnswer === index
                    ? (index === quizQuestions[0].correct ? 'var(--hulk-green)' : 'var(--action-red)')
                    : 'white',
                  color: quizAnswer === index ? 'white' : 'black',
                  textAlign: 'left',
                  justifyContent: 'flex-start',
                  fontSize: '1rem',
                  transform: quizAnswer === index ? 'translate(2px, 2px)' : 'none',
                  boxShadow: quizAnswer === index ? '2px 2px 0 black' : '5px 5px 0 black'
                }}
              >
                <span style={{
                  background: 'black', color: 'white',
                  width: '30px', height: '30px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', marginRight: '10px'
                }}>
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </button>
            ))}
          </div>

          {quizAnswer !== null && (
            <div className="caption-box" style={{
              position: 'relative', top: '20px', left: '0',
              maxWidth: '100%',
              background: quizAnswer === quizQuestions[0].correct ? 'var(--hulk-green)' : 'var(--action-red)',
              color: 'white'
            }}>
              {quizAnswer === quizQuestions[0].correct ? 'CORRECT! JUSTICE PREVAILS!' : 'WRONG! THE RIDDLER LAUGHS!'}
              <p style={{ fontFamily: 'var(--font-comic-body)', fontSize: '1rem', textTransform: 'none', marginTop: '5px' }}>
                {quizQuestions[0].explanation}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="comic-panel">
        <div className="caption-box">MISSION REPORT</div>
        <h3 className="comic-header-md">KEY INTEL</h3>

        <div style={{ display: 'grid', gap: '1rem' }}>
          {[
            'Demand = Desire + Ability + Willingness. No exceptions!',
            'Individual Demand = One Hero. Market Demand = The Whole League.',
            'Demand Schedule = The Data Table. Demand Curve = The Graph.',
            'Law of Demand = Price UP, Demand DOWN (Inverse Relationship).',
            'Rational Consumers buy more when price is low.'
          ].map((text, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>💥</div>
              <p className="comic-text" style={{ margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ConceptOfDemand;
