// PPCScenario.jsx
import { useState, useMemo } from 'react';
import { FaMoneyBillWave, FaTractor, FaCheckCircle, FaTimesCircle, FaExclamationCircle, FaGlobeAmericas, FaBiohazard, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Scatter,
  ReferenceArea
} from 'recharts';
import '../lesson2-core.css';

export default function PPCScenario() {
  // Scenario State: 'normal', 'pandemic', 'war'
  const [activeEvent, setActiveEvent] = useState('normal');
  const [selectedDecision, setSelectedDecision] = useState(null);

  // --- SCENARIO DATA & LOGIC ---
  const worldEvents = {
    normal: {
      id: 'normal',
      label: "Normal Times",
      icon: FaGlobeAmericas,
      color: '#22c55e',
      desc: "Stability. Aim for balanced growth.",
      xLabel: "Butter (Civilian)",
      yLabel: "Guns (Defense)",
      ppcData: [ // Simple Curve Data
        { x: 0, y: 100 }, { x: 10, y: 99 }, { x: 20, y: 95 }, { x: 30, y: 90 },
        { x: 40, y: 84 }, { x: 50, y: 77 }, { x: 60, y: 68 }, { x: 70, y: 58 },
        { x: 80, y: 45 }, { x: 90, y: 30 }, { x: 100, y: 0 }
      ]
    },
    pandemic: {
      id: 'pandemic',
      label: "Pandemic",
      icon: FaBiohazard,
      color: '#ef4444',
      desc: "Crisis! Focus on Healthcare.",
      xLabel: "Education",
      yLabel: "Healthcare",
      ppcData: [
        { x: 0, y: 100 }, { x: 10, y: 99 }, { x: 20, y: 95 }, { x: 30, y: 90 },
        { x: 40, y: 84 }, { x: 50, y: 77 }, { x: 60, y: 68 }, { x: 70, y: 58 },
        { x: 80, y: 45 }, { x: 90, y: 30 }, { x: 100, y: 0 }
      ]
    },
    war: {
      id: 'war',
      label: "War",
      icon: FaShieldAlt,
      color: '#facc15',
      desc: "Attack! Prioritize Defense.",
      xLabel: "Civilian Goods",
      yLabel: "Defense",
      ppcData: [
        { x: 0, y: 100 }, { x: 10, y: 99 }, { x: 20, y: 95 }, { x: 30, y: 90 },
        { x: 40, y: 84 }, { x: 50, y: 77 }, { x: 60, y: 68 }, { x: 70, y: 58 },
        { x: 80, y: 45 }, { x: 90, y: 30 }, { x: 100, y: 0 }
      ]
    }
  };

  const getDecisions = (evt) => {
    if (evt === 'war') {
      return [
        { id: 'A', title: "Total Defense", x: 10, y: 90, allocation: "90% Defense | 10% Civilian", status: 'perfect', feedback: "Correct! In war, survival depends on defense." },
        { id: 'B', title: "Balanced Approach", x: 50, y: 50, allocation: "50% Defense | 50% Civilian", status: 'bad', feedback: "Risky! 50% defense might not be enough to repel the invader." },
        { id: 'C', title: "Focus on Civilian", x: 90, y: 10, allocation: "10% Defense | 90% Civilian", status: 'terrible', feedback: "Suicide! You have butter, but the enemy has taken your land." },
      ];
    }
    if (evt === 'pandemic') {
      return [
        { id: 'A', title: "Total Lockdown (Healthcare)", x: 10, y: 95, allocation: "95% Health | 5% Edu", status: 'perfect', feedback: "Necessary! Education can wait; survival cannot." },
        { id: 'B', title: "Business as Usual", x: 50, y: 50, allocation: "50% Health | 50% Edu", status: 'poor', feedback: "The virus spreads too fast. 50% effort is not enough." },
        { id: 'C', title: "Ignore Virus", x: 90, y: 20, allocation: "20% Health | 80% Edu", status: 'terrible', feedback: "Catastrophe! The population is sick; schools are empty." },
      ];
    }
    // Normal
    return [
      { id: 'A', title: "Maximize Guns", x: 10, y: 90, allocation: "90% Guns | 10% Butter", status: 'bad', feedback: "Too aggressive. Citizens are unhappy and hungry." },
      { id: 'B', title: "Balanced Growth", x: 50, y: 77, allocation: "50% Guns | 50% Butter", status: 'perfect', feedback: "Optimal! A healthy balance of security and prosperity." },
      { id: 'C', title: "Zero Defense", x: 90, y: 10, allocation: "10% Guns | 90% Butter", status: 'bad', feedback: "Vulnerable! You are rich but defenseless." },
    ];
  };

  const currentEvent = worldEvents[activeEvent];
  const decisions = getDecisions(activeEvent);

  const getFeedbackColor = (status) => {
    if (status === 'perfect') return '#22c55e';
    if (status === 'ok') return '#facc15';
    if (status === 'bad' || status === 'poor') return '#f97316';
    if (status === 'terrible') return '#ef4444';
    return '#000';
  };

  return (
    <section>
      <h2 className="section-title">Strategic Simulator</h2>

      {/* EVENT SELECTOR */}
      <div className="lesson-card" style={{ border: '4px solid #000', marginBottom: '20px', textAlign: 'center', padding: '20px' }}>
        <h3 className="card-title" style={{ justifyContent: 'center', fontSize: '1.5rem' }}>Select World Event</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '15px', flexWrap: 'wrap' }}>
          {Object.values(worldEvents).map((evt) => (
            <button
              key={evt.id}
              onClick={() => { setActiveEvent(evt.id); setSelectedDecision(null); }}
              style={{
                padding: '10px 20px',
                border: activeEvent === evt.id ? '3px solid #000' : '2px solid #ccc',
                background: activeEvent === evt.id ? evt.color : '#fff',
                color: activeEvent === evt.id ? '#000' : '#555',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: activeEvent === evt.id ? '4px 4px 0px #000' : 'none',
                transform: activeEvent === evt.id ? 'translate(-2px, -2px)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <evt.icon /> {evt.label}
            </button>
          ))}
        </div>

        {/* EVENT DESCRIPTION */}
        <div style={{ marginTop: '20px', background: currentEvent.color, color: '#000', padding: '15px', border: '3px solid #000', fontWeight: 'bold' }}>
          <div style={{ textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '5px' }}>Current Situation</div>
          <div style={{ fontSize: '1.2rem', marginBottom: '0' }}>{currentEvent.desc}</div>
        </div>
      </div>

      <div className="lesson-grid-2">
        {/* DECISION DECK */}
        <div className="lesson-card" style={{ border: '4px solid #000' }}>
          <h3 className="card-title">Policy Options</h3>
          <p style={{ marginBottom: '15px', color: '#000' }}>Choose the <strong>Optimal</strong> allocation for {currentEvent.label}.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {decisions.map((d) => (
              <button
                key={d.id}
                onClick={() => setSelectedDecision(d)}
                style={{
                  textAlign: 'left',
                  padding: '15px',
                  border: '3px solid #000',
                  background: selectedDecision?.id === d.id ? '#000' : '#fff',
                  color: selectedDecision?.id === d.id ? '#fff' : '#000',
                  cursor: 'pointer',
                  boxShadow: selectedDecision?.id === d.id ? 'none' : '4px 4px 0px #cbd5e1',
                  transition: 'all 0.1s'
                }}
              >
                <div style={{ fontWeight: '900', fontSize: '1.1rem' }}>{d.title}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{d.allocation}</div>
              </button>
            ))}
          </div>
        </div>

        {/* OUTCOME PANEL + GRAPH */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #000', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '400px', padding: '0' }}>

          <div style={{ width: '100%', padding: '15px', background: '#f8fafc', borderBottom: '3px solid #000' }}>
            <h3 style={{ fontSize: '1.2rem', margin: 0, color: '#000' }}>IMPACT VISUALIZER</h3>
          </div>

          <div style={{ width: '100%', height: '250px', background: '#fff' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" dataKey="x" domain={[0, 100]} label={{ value: currentEvent.xLabel, position: 'bottom', offset: 0 }} />
                <YAxis type="number" dataKey="y" domain={[0, 100]} label={{ value: currentEvent.yLabel, angle: -90, position: 'insideLeft' }} />

                {/* The PPC Curve */}
                <Line data={currentEvent.ppcData} type="monotone" dataKey="y" stroke="#000" strokeWidth={3} dot={false} />

                {/* The User's Point */}
                {selectedDecision && (
                  <Scatter
                    data={[{ x: selectedDecision.x, y: selectedDecision.y }]}
                    fill={getFeedbackColor(selectedDecision.status)}
                    stroke="#000"
                    strokeWidth={2}
                    shape="circle"
                  />
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div style={{ flex: 1, width: '100%', padding: '20px', background: selectedDecision ? getFeedbackColor(selectedDecision.status) : '#eee', borderTop: '3px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!selectedDecision ? (
              <div style={{ color: '#888', fontStyle: 'italic' }}>Select a policy to see the graph outcome.</div>
            ) : (
              <div style={{ color: '#fff', textShadow: '1px 1px 0px #000' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '900', textTransform: 'uppercase' }}>
                  {selectedDecision.status === 'perfect' ? '✅ OPTIMAL POLICY' : '⚠️ SUB-OPTIMAL'}
                </div>
                <div style={{ fontWeight: 'bold' }}>{selectedDecision.feedback}</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}