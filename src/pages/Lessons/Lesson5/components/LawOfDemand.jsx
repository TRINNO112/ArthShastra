import React from 'react';
import { FaArrowDown, FaArrowUp, FaExclamationTriangle, FaLightbulb, FaChartLine, FaMoneyBillWave, FaExchangeAlt, FaUsers } from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import '../lesson5-comic.css';

const DEMAND_DATA = [
  { price: 5, quantity: 10 },
  { price: 4, quantity: 20 },
  { price: 3, quantity: 30 },
  { price: 2, quantity: 40 },
  { price: 1, quantity: 50 },
];

const LawOfDemand = () => {
  return (
    <div className="comic-page">
      {/* Header - Same style as League of Determinants */}
      <div className="comic-panel" style={{ textAlign: 'center', background: 'var(--comic-paper)' }}>
        <div className="caption-box" style={{ left: '50%', transform: 'translateX(-50%)', top: '-25px' }}>ISSUE #3</div>
        <h2 className="comic-header-lg" style={{ fontSize: '3rem', margin: '2rem 0 1rem 0' }}>
          THE GOLDEN RULE
        </h2>
        <p className="comic-text" style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          The eternal truth that governs all markets!
        </p>
      </div>

      {/* The Law Statement */}
      <div className="comic-panel" style={{ borderColor: '#ffd700', boxShadow: '10px 10px 0 #b8860b' }}>
        <div className="caption-box" style={{ background: '#ffd700', color: 'black' }}>THE LAW</div>
        <h3 className="comic-header-md">LAW OF DEMAND</h3>

        <div style={{
          background: 'linear-gradient(135deg, #fffcf0, #fff8dc)',
          border: '4px solid black',
          padding: '2rem',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
          position: 'relative',
          marginTop: '1rem'
        }}>
          <div style={{ position: 'absolute', top: '-15px', left: '20px', background: '#ffd700', padding: '5px 15px', fontWeight: 'bold', border: '2px solid black' }}>
            CETERIS PARIBUS
          </div>
          <p className="comic-text" style={{ fontSize: '1.3rem', textAlign: 'center', marginTop: '1rem' }}>
            "Other things remaining constant, there is an <strong style={{ color: 'var(--action-red)' }}>INVERSE RELATIONSHIP</strong> between price of a commodity and its quantity demanded."
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <div className="hover-lift" style={{ background: '#e0ffe0', border: '3px solid #00ff00', padding: '1.5rem', textAlign: 'center', minWidth: '200px' }}>
            <FaArrowDown size={40} color="#00ff00" />
            <p className="comic-text">Price <FaArrowDown color="#00ff00" /> = Quantity <FaArrowUp color="#00ff00" /></p>
          </div>
          <div className="hover-lift" style={{ background: '#ffe0e0', border: '3px solid #ff4444', padding: '1.5rem', textAlign: 'center', minWidth: '200px' }}>
            <FaArrowUp size={40} color="#ff4444" />
            <p className="comic-text">Price <FaArrowUp color="#ff4444" /> = Quantity <FaArrowDown color="#ff4444" /></p>
          </div>
        </div>
      </div>

      {/* Demand Schedule */}
      <div className="comic-panel" style={{ borderColor: '#00ffff', boxShadow: '10px 10px 0 #008b8b' }}>
        <div className="caption-box" style={{ background: '#00ffff', color: 'black' }}>DATA FILE</div>
        <h3 className="comic-header-md">THE DEMAND SCHEDULE</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', border: '3px solid black', marginTop: '1rem' }}>
          <thead style={{ background: 'black', color: 'white' }}>
            <tr>
              <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>PRICE (₹)</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>QTY DEMANDED</th>
              <th style={{ padding: '12px', fontFamily: 'var(--font-comic-title)' }}>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {DEMAND_DATA.map((row, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : 'white', borderBottom: '1px solid black' }}>
                <td style={{ padding: '12px', textAlign: 'center', fontWeight: 'bold' }}>₹{row.price}</td>
                <td style={{ padding: '12px', textAlign: 'center' }}>{row.quantity} units</td>
                <td style={{
                  padding: '12px',
                  textAlign: 'center',
                  color: index === 0 ? '#4da6ff' : '#00aa00',
                  fontWeight: 'bold'
                }}>
                  {index === 0 ? 'Start Point' : 'Price ↓, Qty ↑'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Demand Curve Graph */}
      <div className="comic-panel" style={{ background: '#1a1a2e', borderColor: '#ffd700' }}>
        <div className="caption-box" style={{ background: '#ffd700', color: 'black' }}>VISUAL PROOF</div>
        <h3 className="comic-header-md" style={{ color: '#ffd700' }}>THE DEMAND CURVE</h3>

        <div style={{ background: '#000', border: '3px solid #ffd700', borderRadius: '10px', padding: '1rem' }}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={DEMAND_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorDemandLaw" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffd700" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ffd700" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis type="number" dataKey="quantity" domain={[0, 60]} stroke="#00ffff" />
              <YAxis type="number" dataKey="price" domain={[0, 6]} stroke="#ffd700" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffd700' }}
                itemStyle={{ color: '#00ffff' }}
              />
              <Area type="monotone" dataKey="quantity" stroke="none" fill="url(#colorDemandLaw)" />
              <Line type="monotone" dataKey="price" stroke="#ffd700" strokeWidth={3} dot={{ r: 6, fill: '#ffd700' }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div style={{ marginTop: '1rem', background: 'white', padding: '10px', textAlign: 'center', border: '2px solid black' }}>
          <p className="comic-text" style={{ margin: 0, fontStyle: 'italic' }}>
            "The curve slopes DOWNWARD from left to right!"
          </p>
        </div>
      </div>

      {/* Why Does It Slope Downward? - Comic Style Cards */}
      <div className="comic-panel" style={{ borderColor: '#00ff00', boxShadow: '10px 10px 0 #006400' }}>
        <div className="caption-box" style={{ background: '#00ff00', color: 'black' }}>THE SCIENCE</div>
        <h3 className="comic-header-md">WHY DOES IT SLOPE DOWN?</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
          {/* Card 1 - Diminishing Utility */}
          <div className="comic-sub-panel hover-lift" style={{
            background: 'white',
            border: '3px solid #ffd700',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ background: '#ffd700', padding: '10px', borderRadius: '50%' }}>
                <FaChartLine size={24} color="black" />
              </div>
              <h4 style={{ color: '#b8860b', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>1. DIMINISHING UTILITY</h4>
            </div>
            <p className="comic-text" style={{ fontSize: '0.95rem' }}>
              Each extra unit gives LESS satisfaction. You pay less for less joy!
            </p>
          </div>

          {/* Card 2 - Income Effect */}
          <div className="comic-sub-panel hover-lift" style={{
            background: 'white',
            border: '3px solid #00ffff',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ background: '#00ffff', padding: '10px', borderRadius: '50%' }}>
                <FaMoneyBillWave size={24} color="black" />
              </div>
              <h4 style={{ color: '#008b8b', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>2. INCOME EFFECT</h4>
            </div>
            <p className="comic-text" style={{ fontSize: '0.95rem' }}>
              Lower price = You feel RICHER! You can afford to buy more.
            </p>
          </div>

          {/* Card 3 - Substitution Effect */}
          <div className="comic-sub-panel hover-lift" style={{
            background: 'white',
            border: '3px solid #bf5af2',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ background: '#bf5af2', padding: '10px', borderRadius: '50%' }}>
                <FaExchangeAlt size={24} color="white" />
              </div>
              <h4 style={{ color: '#6a0dad', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>3. SUBSTITUTION EFFECT</h4>
            </div>
            <p className="comic-text" style={{ fontSize: '0.95rem' }}>
              Cheaper good X? Switch from expensive Y to X!
            </p>
          </div>

          {/* Card 4 - New Buyers */}
          <div className="comic-sub-panel hover-lift" style={{
            background: 'white',
            border: '3px solid #00ff00',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ background: '#00ff00', padding: '10px', borderRadius: '50%' }}>
                <FaUsers size={24} color="black" />
              </div>
              <h4 style={{ color: '#006400', fontFamily: 'var(--font-comic-title)', margin: 0, letterSpacing: '1px', fontSize: '1.1rem' }}>4. NEW BUYERS</h4>
            </div>
            <p className="comic-text" style={{ fontSize: '0.95rem' }}>
              Lower prices attract people who couldn't afford it before.
            </p>
          </div>
        </div>
      </div>

      {/* Assumptions */}
      <div className="comic-panel" style={{ borderColor: '#ff4444', boxShadow: '10px 10px 0 #8b0000' }}>
        <div className="caption-box" style={{ background: '#ff4444', color: 'white' }}><FaExclamationTriangle /> WARNING</div>
        <h3 className="comic-header-md">ASSUMPTIONS (CETERIS PARIBUS)</h3>
        <p className="comic-text">The law only works if these stay constant:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
          {[
            'Price of Related Goods',
            'Consumer Income',
            'Tastes & Preferences',
            'Future Expectations'
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff0f0', border: '2px dashed #ff4444', padding: '10px', textAlign: 'center' }}>
              <span style={{ color: '#ff4444', fontWeight: 'bold' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Exception */}
      <div className="comic-panel" style={{ background: '#4b0082', borderColor: '#9370db' }}>
        <div className="caption-box" style={{ background: '#9370db', color: 'white' }}><FaLightbulb /> EXCEPTION</div>
        <h3 className="comic-header-md" style={{ color: 'white' }}>GIFFEN GOODS</h3>
        <p className="comic-text" style={{ color: '#ddd' }}>
          For very inferior goods (like basic bread for the poorest), demand might <strong style={{ color: '#ff4444' }}>FALL</strong> when price falls!
        </p>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', marginTop: '1rem', border: '2px dashed white' }}>
          <p style={{ color: 'white', fontStyle: 'italic' }}>
            "The Income Effect is so strong (negative) that it overpowers the Substitution Effect. Rare, but it exists!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default LawOfDemand;
