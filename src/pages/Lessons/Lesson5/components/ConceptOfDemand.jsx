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
      icon: <FaPizzaSlice style={{ fontSize: '3rem', color: '#ff4444' }}/>,
      status: "I really want that pizza!",
      missing: "But wanting is not enough... Do you have money?",
      action: "Check Your Wallet",
      color: "#ff4444",
      explanation: "Desire means you have a wish or craving for something. But in economics, desire alone does NOT create demand."
    },
    {
      title: "Step 2: Ability to Pay",
      desc: "You open your wallet and find ₹500! Now you have the purchasing power to buy the pizza.",
      icon: <FaWallet style={{ fontSize: '3rem', color: '#ffd700' }}/>,
      status: "Great! I have ₹500 in my wallet!",
      missing: "But will you actually spend it? Or save it for later?",
      action: "Decide to Buy Now",
      color: "#ffd700",
      explanation: "Ability to pay means you have the money (purchasing power). But having money is still not enough for demand!"
    },
    {
      title: "Step 3: Willingness to Spend",
      desc: "You decide to spend ₹300 right now and walk to the pizza shop to make the purchase.",
      icon: <FaCheckCircle style={{ fontSize: '3rem', color: '#00ff00' }}/>,
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
      icon: <FaMobileAlt style={{ fontSize: '2.5rem', color: '#999' }}/>
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
      icon: <FaCar style={{ fontSize: '2.5rem', color: '#999' }}/>
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
      icon: <FaBook style={{ fontSize: '2.5rem', color: '#00ff00' }}/>
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
      icon: <FaShoppingBasket style={{ fontSize: '2.5rem', color: '#999' }}/>
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
    <div className="lesson-section">
      <style>{animationStyles}</style>
      <div className="section-header-lesson animate-fadeInUp">
        <span className="section-badge-lesson animate-scaleIn" style={{ display: 'inline-block' }}>Part 1 - Section 1</span>
        <h2 className="section-title-lesson animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Concept of Demand</h2>
        <p className="section-subtitle-lesson animate-fadeInUp" style={{ animationDelay: '0.2s' }}>Understanding what truly creates demand in economics</p>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.3s' }}>
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '0.4s' }}>
            <FaLightbulb className="animate-bounce" /> Let's Start With a Simple Question...
          </h3>

          <div className="animate-scaleIn" style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
            padding: '2rem',
            borderRadius: '16px',
            border: '2px solid rgba(255,215,0,0.3)',
            margin: '1.5rem 0',
            animationDelay: '0.5s'
          }}>
            <h4 style={{ fontSize: '1.5rem', color: '#ffd700', marginBottom: '1rem' }}>
              What is the difference between WANTING something and DEMANDING something?
            </h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
              You might want a Ferrari, a private jet, or a luxury mansion. But do you create <strong>demand</strong> for these things?
              <br/><br/>
              <span style={{ color: '#00ff00', fontWeight: 'bold' }}>The answer is probably NO!</span>
              <br/><br/>
              In economics, <strong>demand</strong> is NOT just about wanting something. It requires much more...
            </p>
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.6s' }}>
        <div className="card-content">
          <h3 className="highlight-cyan animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '0.7s' }}>
            <FaChartLine className="animate-pulse" /> The Official Definition of Demand
          </h3>

          <div style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '2rem',
            borderRadius: '16px',
            border: '2px solid #00ffff',
            margin: '1.5rem 0',
            boxShadow: '0 8px 32px rgba(0,255,255,0.2)'
          }}>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.8',
              color: '#ffffff',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              "Demand is the <span style={{ color: '#ffd700' }}>quantity of a commodity</span> that a consumer is
              <span style={{ color: '#ff4444' }}> willing</span> and
              <span style={{ color: '#00ff00' }}> able</span> to buy at
              <span style={{ color: '#00ffff' }}> each possible price</span> during a
              <span style={{ color: '#ffd700' }}>given period of time</span>."
            </p>
          </div>

          <div style={{ margin: '2rem 0' }}>
            <h4 style={{ color: '#ffd700', fontSize: '1.3rem', marginBottom: '1rem' }}>
              Breaking It Down Into Simple Terms:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="animate-fadeInLeft hover-lift" style={{
                background: 'rgba(255,68,68,0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,68,68,0.3)',
                borderLeft: '4px solid #ff4444',
                animationDelay: '0.8s'
              }}>
                <h5 style={{ color: '#ff4444', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaHeart className="animate-heartbeat" /> 1. Desire (You must WANT it)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                  First, you need to have a wish, craving, or desire for something. Without desire, you won't even think about buying it.
                  <br/>
                  <strong>Example:</strong> You feel hungry and want pizza.
                </p>
              </div>

              <div className="animate-fadeInLeft hover-lift" style={{
                background: 'rgba(0,255,0,0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(0,255,0,0.3)',
                borderLeft: '4px solid #00ff00',
                animationDelay: '0.9s'
              }}>
                <h5 style={{ color: '#00ff00', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaDollarSign className="animate-bounce" /> 2. Ability to Pay (You must HAVE the money)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                  You need to have sufficient money or purchasing power to buy the product at the given price.
                  <br/>
                  <strong>Example:</strong> You check your wallet and find ₹500, enough to buy pizza.
                </p>
              </div>

              <div className="animate-fadeInLeft hover-lift" style={{
                background: 'rgba(255,215,0,0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(255,215,0,0.3)',
                borderLeft: '4px solid #ffd700',
                animationDelay: '1s'
              }}>
                <h5 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaShoppingCart className="animate-wiggle" /> 3. Willingness to Spend (You must be READY to pay NOW)
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                  You must be willing to spend that money at the current price during this specific time period.
                  <br/>
                  <strong>Example:</strong> You decide to spend ₹300 right now and walk to the pizza shop.
                </p>
              </div>
            </div>

            <div className="animate-scaleIn animate-glow" style={{
              background: 'linear-gradient(135deg, rgba(0,255,255,0.15), rgba(255,215,0,0.15))',
              padding: '1.5rem',
              borderRadius: '12px',
              marginTop: '2rem',
              border: '2px solid rgba(255,215,0,0.5)',
              textAlign: 'center',
              animationDelay: '1.1s'
            }}>
              <h4 style={{ color: '#ffd700', fontSize: '1.4rem', marginBottom: '0.8rem' }}>
                ⚡ The Golden Rule of Demand
              </h4>
              <p style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 'bold' }}>
                Desire + Ability to Pay + Willingness to Spend = DEMAND
              </p>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.5rem' }}>
                All three must exist together. Missing even ONE means NO demand!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '1.2s' }}>
        <div className="card-content">
          <h3 className="highlight-gold animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '1.3s' }}>
            <span className="animate-bounce">🍕</span> Interactive: The Pizza Journey
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            Follow this step-by-step journey to understand how desire transforms into actual demand. Click through each step!
          </p>

          <div className="animate-scaleIn" style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '2.5rem',
            borderRadius: '16px',
            border: `3px solid ${steps[pizzaStep].color}`,
            boxShadow: `0 10px 40px ${steps[pizzaStep].color}40`,
            transition: 'all 0.3s ease',
            animationDelay: '1.4s'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div className="animate-bounce" style={{
                display: 'inline-block',
                padding: '2rem',
                borderRadius: '50%',
                background: `${steps[pizzaStep].color}20`,
                border: `3px solid ${steps[pizzaStep].color}`,
                marginBottom: '1.5rem'
              }}>
                {steps[pizzaStep].icon}
              </div>

              <h3 style={{ color: steps[pizzaStep].color, fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                {steps[pizzaStep].title}
              </h3>

              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '1.5rem'
              }}>
                <p style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '0.8rem', fontWeight: '600' }}>
                  "{steps[pizzaStep].status}"
                </p>
                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6' }}>
                  {steps[pizzaStep].desc}
                </p>
              </div>

              <div style={{
                background: pizzaStep < 2 ? 'rgba(255,68,68,0.2)' : 'rgba(0,255,0,0.2)',
                padding: '1rem',
                borderRadius: '10px',
                border: pizzaStep < 2 ? '1px solid #ff4444' : '1px solid #00ff00',
                marginBottom: '1.5rem'
              }}>
                <p style={{
                  color: pizzaStep < 2 ? '#ff6b6b' : '#00ff00',
                  fontSize: '1.1rem',
                  fontWeight: '600'
                }}>
                  {pizzaStep < 2 ? '❌ ' : '✅ '}
                  {steps[pizzaStep].missing}
                </p>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.05)',
                padding: '1.2rem',
                borderRadius: '10px',
                marginBottom: '1.5rem',
                textAlign: 'left'
              }}>
                <p style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.05rem' }}>
                  💡 Economic Insight:
                </p>
                <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                  {steps[pizzaStep].explanation}
                </p>
              </div>

              <button
                onClick={() => setPizzaStep(prev => (prev + 1) % 3)}
                style={{
                  background: `linear-gradient(135deg, ${steps[pizzaStep].color}, ${steps[pizzaStep].color}80)`,
                  border: '2px solid white',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: `0 4px 15px ${steps[pizzaStep].color}60`
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = `0 6px 25px ${steps[pizzaStep].color}80`;
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = `0 4px 15px ${steps[pizzaStep].color}60`;
                }}
              >
                {steps[pizzaStep].action} <FaArrowRight />
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', gap: '8px' }}>
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  style={{
                    height: '6px',
                    width: '50px',
                    background: i <= pizzaStep ? steps[i].color : '#333',
                    borderRadius: '3px',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '1.5s' }}>
        <div className="card-content">
          <h3 className="highlight-cyan animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '1.6s' }}>
            <span className="animate-pulse">🌍</span> Real Life Scenarios: Demand or No Demand?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
            Analyze these real-world situations and understand why some create demand while others don't.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {demandScenarios.map((scenario, index) => (
              <div
                key={scenario.id}
                onClick={() => setSelectedScenario(selectedScenario === scenario.id ? null : scenario.id)}
                className="animate-scaleIn hover-lift"
                style={{
                  background: selectedScenario === scenario.id ? 'rgba(255,215,0,0.15)' : 'rgba(0,0,0,0.3)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: selectedScenario === scenario.id ? '2px solid #ffd700' : '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: selectedScenario === scenario.id ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: selectedScenario === scenario.id ? '0 8px 30px rgba(255,215,0,0.3)' : 'none',
                  animationDelay: `${1.7 + index * 0.1}s`
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  {scenario.icon}
                  <span style={{
                    fontSize: '0.85rem',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: scenario.verdict.includes('YES') ? 'rgba(0,255,0,0.2)' : 'rgba(255,68,68,0.2)',
                    color: scenario.verdict.includes('YES') ? '#00ff00' : '#ff4444',
                    border: `1px solid ${scenario.verdict.includes('YES') ? '#00ff00' : '#ff4444'}`,
                    fontWeight: 'bold'
                  }}>
                    {scenario.verdict}
                  </span>
                </div>

                <h4 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: '0.8rem' }}>
                  {scenario.title}
                </h4>

                <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1rem', lineHeight: '1.6' }}>
                  {scenario.situation}
                </p>

                <div style={{
                  background: 'rgba(0,0,0,0.3)',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  marginBottom: '1rem',
                  fontSize: '0.95rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>💰 Money Available:</span>
                    <span style={{ color: '#ffd700', fontWeight: 'bold' }}>{scenario.money}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>❤️ Desire:</span>
                    <span>{scenario.desire ? '✅' : '❌'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>💵 Ability to Pay:</span>
                    <span>{scenario.ability ? '✅' : '❌'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)' }}>🛒 Willingness:</span>
                    <span>{scenario.willingness ? '✅' : '❌'}</span>
                  </div>
                </div>

                {selectedScenario === scenario.id && (
                  <div style={{
                    background: 'rgba(255,215,0,0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,215,0,0.3)',
                    marginTop: '1rem'
                  }}>
                    <p style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      📊 Economic Analysis:
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                      {scenario.reason}
                    </p>
                  </div>
                )}

                <p style={{
                  textAlign: 'center',
                  marginTop: '1rem',
                  color: '#00ffff',
                  fontSize: '0.9rem',
                  fontStyle: 'italic'
                }}>
                  {selectedScenario === scenario.id ? 'Click to collapse ▲' : 'Click to analyze ▼'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '2.1s' }}>
        <div className="card-content">
          <h3 className="highlight-green animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '2.2s' }}>
            <FaUsers className="animate-pulse" /> Individual Demand vs Market Demand
          </h3>

          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
              Now that you understand what demand is, let's learn about the two types of demand that economists study:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div className="animate-fadeInLeft hover-lift" style={{
              background: 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(0,255,255,0.05))',
              padding: '2rem',
              borderRadius: '16px',
              border: '2px solid rgba(0,255,255,0.3)',
              boxShadow: '0 8px 25px rgba(0,255,255,0.2)',
              animationDelay: '2.3s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👤</div>
              <h4 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Individual Demand
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '1rem' }}>
                The quantity of a commodity that a <strong>single consumer</strong> is willing and able to buy at different prices during a given time period.
              </p>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                <p style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '0.5rem' }}>Example:</p>
                <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Rahul buys 5 chocolates when price is ₹10 each, and 3 chocolates when price is ₹15 each.
                </p>
              </div>
            </div>

            <div className="animate-fadeInRight hover-lift" style={{
              background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
              padding: '2rem',
              borderRadius: '16px',
              border: '2px solid rgba(255,215,0,0.3)',
              boxShadow: '0 8px 25px rgba(255,215,0,0.2)',
              animationDelay: '2.4s'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👥</div>
              <h4 style={{ color: '#ffd700', fontSize: '1.5rem', marginBottom: '1rem' }}>
                Market Demand
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '1rem' }}>
                The total quantity of a commodity that <strong>all consumers</strong> in the market are willing and able to buy at different prices during a given time period.
              </p>
              <div style={{
                background: 'rgba(0,0,0,0.3)',
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                <p style={{ color: '#00ff00', fontWeight: 'bold', marginBottom: '0.5rem' }}>Formula:</p>
                <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Market Demand = Sum of all individual demands (Horizontal Summation)
                </p>
              </div>
            </div>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '2rem',
            borderRadius: '16px',
            border: '2px solid #ffd700'
          }}>
            <h4 style={{ color: '#ffd700', fontSize: '1.3rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              📊 Understanding Through a Demand Schedule
            </h4>

            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', textAlign: 'center' }}>
              A <strong>Demand Schedule</strong> is a table showing the quantity demanded at different price levels.
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'rgba(0,0,0,0.3)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{ background: 'rgba(255,215,0,0.2)' }}>
                    <th style={{ padding: '1rem', color: '#ffd700', fontSize: '1.1rem', borderBottom: '2px solid rgba(255,215,0,0.5)' }}>
                      Price (₹)
                    </th>
                    <th style={{ padding: '1rem', color: '#00ffff', fontSize: '1.1rem', borderBottom: '2px solid rgba(255,215,0,0.5)' }}>
                      Consumer A<br/>(Rahul)
                    </th>
                    <th style={{ padding: '1rem', color: '#00ffff', fontSize: '1.1rem', borderBottom: '2px solid rgba(255,215,0,0.5)' }}>
                      Consumer B<br/>(Priya)
                    </th>
                    <th style={{ padding: '1rem', color: '#00ff00', fontSize: '1.1rem', borderBottom: '2px solid rgba(255,215,0,0.5)' }}>
                      Market Demand<br/>(A + B)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { price: 10, a: 5, b: 7, total: 12 },
                    { price: 20, a: 4, b: 6, total: 10 },
                    { price: 30, a: 3, b: 5, total: 8 },
                    { price: 40, a: 2, b: 4, total: 6 },
                    { price: 50, a: 1, b: 3, total: 4 }
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '1rem', textAlign: 'center', color: '#ffd700', fontWeight: 'bold', fontSize: '1.1rem' }}>
                        ₹{row.price}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem' }}>
                        {row.a} units
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem' }}>
                        {row.b} units
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', color: '#00ff00', fontWeight: 'bold', fontSize: '1.1rem' }}>
                        {row.total} units
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{
              background: 'rgba(255,215,0,0.1)',
              padding: '1.2rem',
              borderRadius: '10px',
              marginTop: '1.5rem',
              border: '1px solid rgba(255,215,0,0.3)'
            }}>
              <p style={{ color: '#ffd700', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                📈 Key Observation:
              </p>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                Notice how as the price increases from ₹10 to ₹50, the quantity demanded by both consumers decreases.
                This inverse relationship between price and quantity demanded is called the <strong style={{ color: '#00ff00' }}>Law of Demand</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '2.5s' }}>
        <div className="card-content">
          <h3 className="highlight-green animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '2.6s' }}>
            <span className="animate-bounce">📈</span> The Demand Curve: Visualizing Demand
          </h3>

          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '1.5rem',
            borderRadius: '12px',
            marginBottom: '2rem',
            border: '1px solid rgba(0,255,0,0.3)'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
              The <strong style={{ color: '#00ff00' }}>Demand Curve</strong> is a graphical representation of the demand schedule.
              It shows the relationship between price (Y-axis) and quantity demanded (X-axis).
            </p>
          </div>

          <div style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '2rem',
            borderRadius: '16px',
            border: '2px solid #00ff00',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#00ff00', textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              Interactive Demand Curve
            </h4>

            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={DEMAND_SCHEDULE_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <defs>
                  <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ff00" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00ff00" stopOpacity={0}/>
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

            <p style={{
              textAlign: 'center',
              marginTop: '1.5rem',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.95rem',
              fontStyle: 'italic'
            }}>
              Hover over the points to see exact values
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div className="animate-fadeInUp hover-lift" style={{
              background: 'rgba(0,255,0,0.1)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(0,255,0,0.3)',
              animationDelay: '2.7s'
            }}>
              <h5 style={{ color: '#00ff00', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                ✓ Downward Sloping
              </h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                The demand curve slopes downward from left to right, showing that as price decreases, quantity demanded increases.
              </p>
            </div>

            <div className="animate-fadeInUp hover-lift" style={{
              background: 'rgba(255,215,0,0.1)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,215,0,0.3)',
              animationDelay: '2.8s'
            }}>
              <h5 style={{ color: '#ffd700', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                ✓ Inverse Relationship
              </h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                There is an inverse (negative) relationship between price and quantity demanded. When one goes up, the other goes down.
              </p>
            </div>

            <div className="animate-fadeInUp hover-lift" style={{
              background: 'rgba(0,255,255,0.1)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid rgba(0,255,255,0.3)',
              animationDelay: '2.9s'
            }}>
              <h5 style={{ color: '#00ffff', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                ✓ Consumer Behavior
              </h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                This curve represents rational consumer behavior: people buy more when things are cheaper and less when they're expensive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '3s' }}>
        <div className="card-content">
          <h3 className="highlight-gold animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '3.1s' }}>
            <span className="animate-pulse">🎯</span> Test Your Understanding
          </h3>

          <div style={{
            background: 'rgba(0,0,0,0.4)',
            padding: '2rem',
            borderRadius: '16px',
            border: '2px solid #ffd700',
            marginTop: '1.5rem'
          }}>
            <h4 style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
              {quizQuestions[0].question}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {quizQuestions[0].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setQuizAnswer(index)}
                  style={{
                    background: quizAnswer === index
                      ? (index === quizQuestions[0].correct ? 'rgba(0,255,0,0.2)' : 'rgba(255,68,68,0.2)')
                      : 'rgba(255,255,255,0.05)',
                    border: quizAnswer === index
                      ? (index === quizQuestions[0].correct ? '2px solid #00ff00' : '2px solid #ff4444')
                      : '1px solid rgba(255,255,255,0.2)',
                    padding: '1.2rem',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1.05rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                  onMouseOver={(e) => {
                    if (quizAnswer === null) {
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                      e.target.style.transform = 'translateX(5px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (quizAnswer === null) {
                      e.target.style.background = 'rgba(255,255,255,0.05)';
                      e.target.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <span style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: quizAnswer === index
                      ? (index === quizQuestions[0].correct ? '#00ff00' : '#ff4444')
                      : 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    flexShrink: 0
                  }}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                  {quizAnswer === index && (
                    <span style={{ marginLeft: 'auto', fontSize: '1.3rem' }}>
                      {index === quizQuestions[0].correct ? '✓' : '✗'}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {quizAnswer !== null && (
              <div style={{
                background: quizAnswer === quizQuestions[0].correct
                  ? 'rgba(0,255,0,0.15)'
                  : 'rgba(255,68,68,0.15)',
                padding: '1.5rem',
                borderRadius: '10px',
                border: quizAnswer === quizQuestions[0].correct
                  ? '2px solid #00ff00'
                  : '2px solid #ff4444'
              }}>
                <h5 style={{
                  color: quizAnswer === quizQuestions[0].correct ? '#00ff00' : '#ff4444',
                  marginBottom: '0.8rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}>
                  {quizAnswer === quizQuestions[0].correct ? '✓ Correct!' : '✗ Incorrect'}
                </h5>
                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                  {quizQuestions[0].explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '3.2s' }}>
        <div className="card-content">
          <h3 className="highlight-cyan animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px', animationDelay: '3.3s' }}>
            <span className="animate-bounce">📝</span> Key Takeaways
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              {
                icon: '1️⃣',
                text: 'Demand requires THREE things together: Desire + Ability to Pay + Willingness to Spend. Missing any one means NO demand!'
              },
              {
                icon: '2️⃣',
                text: 'Individual Demand is for one consumer, while Market Demand is the sum of all individual demands in the market.'
              },
              {
                icon: '3️⃣',
                text: 'A Demand Schedule is a table, and a Demand Curve is a graph showing the relationship between price and quantity demanded.'
              },
              {
                icon: '4️⃣',
                text: 'The Demand Curve slopes downward, showing an inverse relationship: higher prices lead to lower quantity demanded.'
              },
              {
                icon: '5️⃣',
                text: 'Just wanting or wishing for something doesn\'t create demand. You must have the money AND be willing to spend it!'
              }
            ].map((item, index) => (
              <div key={index} className="animate-fadeInLeft hover-lift" style={{
                background: 'rgba(0,255,255,0.1)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid rgba(0,255,255,0.3)',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
                animationDelay: `${3.4 + index * 0.1}s`
              }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ConceptOfDemand;
