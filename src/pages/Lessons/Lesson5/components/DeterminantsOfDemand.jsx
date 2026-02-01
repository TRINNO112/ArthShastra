import React, { useState } from 'react';
import { FaSitemap, FaBalanceScale, FaMoneyBillWave, FaHeart, FaCalendarAlt, FaArrowUp, FaArrowDown, FaUserTie, FaChartLine, FaLightbulb, FaShoppingCart, FaCoffee, FaCar, FaGasPump, FaTshirt, FaBreadSlice, FaAppleAlt, FaSun, FaSnowflake, FaExclamationTriangle, FaUsers, FaGlobe } from 'react-icons/fa';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LineChart, Line, AreaChart, Area } from 'recharts';
import './lesson5.css';

const INCOME_DATA = [
  { income: 1000, normal: 10, inferior: 50 },
  { income: 2000, normal: 20, inferior: 40 },
  { income: 3000, normal: 30, inferior: 30 },
  { income: 4000, normal: 40, inferior: 20 },
  { income: 5000, normal: 50, inferior: 10 },
];

const SUBSTITUTE_DATA = [
  { priceTea: 10, demandCoffee: 20 },
  { priceTea: 15, demandCoffee: 30 },
  { priceTea: 20, demandCoffee: 40 },
  { priceTea: 25, demandCoffee: 50 },
];

const COMPLEMENTARY_DATA = [
  { pricePetrol: 70, demandCar: 50 },
  { pricePetrol: 80, demandCar: 40 },
  { pricePetrol: 90, demandCar: 30 },
  { pricePetrol: 100, demandCar: 20 },
];

const SEASONAL_DEMAND_DATA = [
  { month: 'Jan', iceCream: 10, winterClothes: 80 },
  { month: 'Mar', iceCream: 30, winterClothes: 60 },
  { month: 'Jun', iceCream: 90, winterClothes: 15 },
  { month: 'Sep', iceCream: 50, winterClothes: 40 },
  { month: 'Dec', iceCream: 15, winterClothes: 85 },
];

const POPULATION_DEMAND_DATA = [
  { year: '2015', population: 100, demand: 80 },
  { year: '2017', population: 120, demand: 95 },
  { year: '2019', population: 140, demand: 110 },
  { year: '2021', population: 160, demand: 125 },
  { year: '2023', population: 180, demand: 145 },
];

const DeterminantsOfDemand = () => {
  const [teaPrice, setTeaPrice] = useState(15);
  const [petrolPrice, setPetrolPrice] = useState(80);
  const [activeExample, setActiveExample] = useState('substitute');
  const [incomeLevel, setIncomeLevel] = useState(3000);

  const calculateCoffeeDemand = (price) => {
    return Math.round(10 + (price - 10) * 2);
  };

  const calculateCarDemand = (price) => {
    return Math.round(110 - price * 0.6);
  };

  const calculateNormalGoodDemand = (income) => {
    return Math.round(income / 100);
  };

  const calculateInferiorGoodDemand = (income) => {
    return Math.round(60 - income / 100);
  };

  return (
    <div className="determinants-comic">
      {/* Header */}
      <div className="comic-panel" style={{ textAlign: 'center', background: 'var(--comic-paper)' }}>
        <div className="caption-box" style={{ left: '50%', transform: 'translateX(-50%)', top: '-25px' }}>ISSUE #2</div>
        <h2 className="comic-header-lg" style={{ fontSize: '3rem', margin: '2rem 0 1rem 0' }}>
          THE LEAGUE OF DETERMINANTS
        </h2>
        <p className="comic-text" style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          Who controls the fate of Demand? Meet the 5 powerful forces!
        </p>
      </div>

      {/* The Secret Formula */}
      <div className="comic-panel" style={{ background: '#002060', color: 'white' }}>
        <div className="caption-box" style={{ background: 'var(--flash-yellow)', color: 'black' }}>TOP SECRET</div>
        <h3 className="comic-header-md" style={{ color: 'white', borderBottomColor: 'white' }}>
          THE DEMAND FORMULA
        </h3>

        <div style={{
          background: 'transparent',
          backgroundImage: 'linear-gradient(#00308F 1px, transparent 1px), linear-gradient(90deg, #00308F 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          border: '4px solid white',
          padding: '2rem',
          position: 'relative',
          fontFamily: 'monospace'
        }}>
          <div style={{
            fontSize: '3rem', fontWeight: 'bold', textAlign: 'center',
            textShadow: '0 0 10px #00ffff', color: '#00ffff',
            marginBottom: '1rem'
          }}>
            Dx = f(Px, Pr, Y, T, E)
          </div>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#ccc' }}>
            <strong style={{ color: '#00ffff' }}>Dx</strong> (Demand) depends on these FIVE determinants:
          </p>
        </div>

        {/* The League Roster */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginTop: '2rem' }}>
          {[
            { code: 'Px', name: 'CAPTAIN PRICE', icon: '💰', color: '#ffd700', desc: 'Own Price' },
            { code: 'Pr', name: 'THE TWINS', icon: '⚖️', color: '#00ffff', desc: 'Related Goods' },
            { code: 'Y', name: 'THE TREASURER', icon: '💵', color: '#00ff00', desc: 'Income' },
            { code: 'T', name: 'TRENDSETTER', icon: '❤️', color: '#ff69b4', desc: 'Tastes' },
            { code: 'E', name: 'THE ORACLE', icon: '🔮', color: '#ff4444', desc: 'Expectations' }
          ].map((hero) => (
            <div key={hero.code} className="hover-lift" style={{
              background: 'rgba(255,255,255,0.1)', border: `2px solid ${hero.color}`,
              padding: '10px', textAlign: 'center', borderRadius: '8px'
            }}>
              <div style={{ fontSize: '2rem' }}>{hero.icon}</div>
              <h4 style={{ color: hero.color, fontFamily: 'var(--font-comic-title)', margin: '5px 0' }}>{hero.code}</h4>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{hero.name}</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.8 }}>{hero.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Own Price - Brief Section */}
      {/* Captain Price Profile */}
      <div className="comic-panel" style={{ borderColor: '#ffd700', boxShadow: '10px 10px 0 #b8860b' }}>
        <div className="caption-box" style={{ background: '#ffd700' }}>LEADER</div>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3 className="comic-header-md">CAPTAIN PRICE (Px)</h3>
            <p className="comic-text">
              The leader of the group. His power is absolute: <strong>The Law of Demand</strong>.
            </p>
            <div className="speech-bubble" style={{ transform: 'rotate(-2deg)' }}>
              "When I go UP, Demand goes DOWN! It's the law!"
            </div>
          </div>
          <div style={{ flex: 1, background: '#fff8dc', padding: '1rem', border: '2px dashed #ffd700' }}>
            <h4 style={{ fontFamily: 'var(--font-comic-title)' }}>POWER MOVES:</h4>
            <ul className="comic-text" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>🔻 <strong>Price Drop:</strong> "Demand EXPANDS!"</li>
              <li>🔺 <strong>Price Rise:</strong> "Demand CONTRACTS!"</li>
            </ul>
            <small style={{ display: 'block', marginTop: '1rem', color: '#888' }}>
              *Note: This is a movement ALONG the curve, not a shift!
            </small>
          </div>
        </div>
      </div>

      {/* 2. Price of Related Goods - Interactive Charts */}
      {/* The Twins (Related Goods) */}
      <div className="comic-panel" style={{ borderColor: '#00ffff', boxShadow: '10px 10px 0 #008b8b' }}>
        <div className="caption-box" style={{ background: '#00ffff' }}>THE SHIFTERS</div>
        <h3 className="comic-header-md">THE TWINS (Pr)</h3>
        <p className="comic-text">Related goods come in two forms. Choose your sidekick!</p>

        <div className="interactive-toggle-container" style={{ gap: '10px', background: '#e0ffff', padding: '10px' }}>
          <button
            className={`comic-btn ${activeExample === 'substitute' ? 'primary' : 'secondary'}`}
            onClick={() => setActiveExample('substitute')}
          >
            <FaCoffee /> THE RIVAL (Substitutes)
          </button>
          <button
            className={`comic-btn ${activeExample === 'complementary' ? 'primary' : 'secondary'}`}
            onClick={() => setActiveExample('complementary')}
          >
            <FaCar /> THE SIDEKICK (Complements)
          </button>
        </div>

        <div className="comparison-container">
          {/* Substitute Goods */}
          {/* Substitute Goods */}
          {activeExample === 'substitute' && (
            <div className="comic-sub-panel" style={{ border: '3px dashed #00ffff', padding: '1.5rem', background: '#e0ffff' }}>
              <h4 className="comic-header-sm" style={{ color: '#00ced1' }}>
                <FaCoffee /> SCENARIO A: THE RIVALRY
              </h4>
              <p className="comic-text">
                <strong>Tea & Coffee</strong> are enemies! If Tea gets expensive, people defect to Coffee!
              </p>

              <div className="comic-panel" style={{ margin: '1rem 0', padding: '1rem', border: '2px solid #00ced1', background: 'white' }}>
                <h5 style={{ fontFamily: 'var(--font-comic-title)' }}>🎛️ PRICE CONTROLLER</h5>
                <label style={{ display: 'block', margin: '10px 0' }}>Price of Tea: <span style={{ color: '#ffd700', fontWeight: 'bold' }}>₹{teaPrice}</span></label>
                <input
                  type="range"
                  min="10"
                  max="30"
                  value={teaPrice}
                  onChange={(e) => setTeaPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#00ced1' }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', background: '#f0ffff', padding: '10px', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem' }}>COFFEE DEMAND</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#008b8b' }}>{calculateCoffeeDemand(teaPrice)} UNITS</div>
                  </div>
                  <div style={{ fontSize: '2rem' }}>
                    {teaPrice > 15 ? '📈' : teaPrice < 15 ? '📉' : '⚖️'}
                  </div>
                </div>
              </div>

              <div className="comic-caption" style={{ textAlign: 'center', fontStyle: 'italic', color: '#008b8b' }}>
                "Positive Relationship: One goes UP, the other follows!"
              </div>
            </div>
          )}

          {/* Complementary Goods */}
          {activeExample === 'complementary' && (
            <div className="comic-sub-panel" style={{ border: '3px dashed #00ffff', padding: '1.5rem', background: '#e0ffff' }}>
              <h4 className="comic-header-sm" style={{ color: '#00ced1' }}>
                <FaCar /> SCENARIO B: THE TEAM
              </h4>
              <p className="comic-text">
                <strong>Cars & Petrol</strong> are partners! If Petrol gets expensive, people abandon Cars!
              </p>

              <div className="comic-panel" style={{ margin: '1rem 0', padding: '1rem', border: '2px solid #00ced1', background: 'white' }}>
                <h5 style={{ fontFamily: 'var(--font-comic-title)' }}>🎛️ PRICE CONTROLLER</h5>
                <label style={{ display: 'block', margin: '10px 0' }}>Price of Petrol: <span style={{ color: '#ffd700', fontWeight: 'bold' }}>₹{petrolPrice}</span></label>
                <input
                  type="range"
                  min="60"
                  max="110"
                  value={petrolPrice}
                  onChange={(e) => setPetrolPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: '#00ced1' }}
                />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1rem', background: '#f0ffff', padding: '10px', borderRadius: '8px' }}>
                  <div>
                    <div style={{ fontSize: '0.8rem' }}>CAR DEMAND</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#008b8b' }}>{calculateCarDemand(petrolPrice)} UNITS</div>
                  </div>
                  <div style={{ fontSize: '2rem' }}>
                    {petrolPrice > 80 ? '📉' : petrolPrice < 80 ? '📈' : '⚖️'}
                  </div>
                </div>
              </div>

              <div className="comic-caption" style={{ textAlign: 'center', fontStyle: 'italic', color: '#008b8b' }}>
                "Inverse Relationship: One goes UP, the other goes DOWN!"
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Income of Consumer (Y) */}
      <div className="comic-panel" style={{ borderColor: '#00ff00', boxShadow: '10px 10px 0 #006400' }}>
        <div className="caption-box" style={{ background: '#00ff00' }}>THE TREASURER</div>
        <h3 className="comic-header-md">THE CONSUMER'S INCOME (Y)</h3>
        <p className="comic-text">
          More money doesn't always mean buying more! It depends on the <strong>type of good</strong>.
        </p>

        <div style={{ background: '#f0fff0', padding: '1rem', border: '2px solid #00ff00', marginBottom: '1rem' }}>
          <h5 style={{ fontFamily: 'var(--font-comic-title)' }}>💰 THE BANK VAULT: ₹{incomeLevel.toLocaleString()}</h5>
          <input
            type="range"
            min="1000"
            max="5000"
            step="500"
            value={incomeLevel}
            onChange={(e) => setIncomeLevel(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#00ff00' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div className="comic-sub-panel" style={{ background: 'white', border: '2px solid #00ff00' }}>
            <h4 style={{ color: '#006400', fontFamily: 'var(--font-comic-title)' }}>📈 NORMAL GOODS</h4>
            <div style={{ fontSize: '3rem', textAlign: 'center', margin: '1rem 0' }}>💎</div>
            <p><strong>Premium Stuff:</strong> As you get richer, you buy MORE of this.</p>
            <div style={{ background: '#e0ffe0', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
              Demand: {calculateNormalGoodDemand(incomeLevel)} Units
            </div>
          </div>

          <div className="comic-sub-panel" style={{ background: 'white', border: '2px solid #ff4444' }}>
            <h4 style={{ color: '#8b0000', fontFamily: 'var(--font-comic-title)' }}>📉 INFERIOR GOODS</h4>
            <div style={{ fontSize: '3rem', textAlign: 'center', margin: '1rem 0' }}>🍞</div>
            <p><strong>Cheap Stuff:</strong> As you get richer, you buy LESS of this (you switch to premium).</p>
            <div style={{ background: '#ffe0e0', padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>
              Demand: {calculateInferiorGoodDemand(incomeLevel)} Units
            </div>
          </div>
        </div>
      </div>

      {/* Tastes & Preferences (T) */}
      <div className="comic-panel" style={{ borderColor: '#ff69b4', boxShadow: '10px 10px 0 #c71585' }}>
        <div className="caption-box" style={{ background: '#ff69b4' }}>THE TRENDSETTER</div>
        <h3 className="comic-header-md">TASTES & PREFERENCES (T)</h3>
        <p className="comic-text">
          Styles change! Trends fade! She decides what's "IN" and what's "OUT".
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          {[
            { icon: '👗', title: 'Fashion', desc: 'Trends drive demand' },
            { icon: '🌞', title: 'Seasons', desc: 'Weather affects choices' },
            { icon: '📺', title: 'Ads', desc: 'Marketing creates desire' },
            { icon: '💪', title: 'Health', desc: 'Lifestyle shifts habits' }
          ].map((item, i) => (
            <div key={i} className="hover-lift" style={{ border: '2px dashed #ff69b4', padding: '10px', textAlign: 'center', borderRadius: '50% 50% 50% 0' }}>
              <div style={{ fontSize: '2rem' }}>{item.icon}</div>
              <div style={{ fontWeight: 'bold', color: '#c71585' }}>{item.title}</div>
              <div style={{ fontSize: '0.8rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div style={{
          position: 'absolute',
          bottom: '-15px',
          right: '20px',
          background: '#ff69b4',
          color: 'white',
          padding: '8px 15px',
          border: '3px solid black',
          fontFamily: 'var(--font-comic-title)',
          fontSize: '1rem',
          letterSpacing: '1px',
          transform: 'rotate(-3deg)',
          boxShadow: '3px 3px 0 rgba(0,0,0,0.2)'
        }}>
          TASTES CHANGE = DEMAND CHANGES!
        </div>
      </div>

      {/* 5. Future Expectations */}
      {/* Future Expectations (E) */}
      <div className="comic-panel" style={{ borderColor: '#ff4444', boxShadow: '10px 10px 0 #8b0000' }}>
        <div className="caption-box" style={{ background: '#ff4444', color: 'white' }}>THE ORACLE</div>
        <h3 className="comic-header-md">FUTURE EXPECTATIONS (E)</h3>
        <p className="comic-text">
          If you think prices will change <strong>tomorrow</strong>, you act <strong>today</strong>!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
          <div className="comic-sub-panel" style={{ background: '#fff0f0', border: '2px solid #ff4444', transform: 'rotate(-2deg)' }}>
            <h4 style={{ color: '#ff4444', fontFamily: 'var(--font-comic-title)', letterSpacing: '1px', fontSize: '1.1rem' }}>PROPHECY: "PRICES WILL RISE!"</h4>
            <div style={{ fontSize: '3rem', textAlign: 'center', margin: '1rem' }}>😱</div>
            <p><strong>Reaction:</strong> Panic Buy NOW!</p>
            <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#8b0000' }}>
              "Fill the tank! Buy the gold! It's going up!"
            </div>
          </div>

          <div className="comic-sub-panel" style={{ background: '#f0fff0', border: '2px solid #00c851', transform: 'rotate(2deg)' }}>
            <h4 style={{ color: '#007e33', fontFamily: 'var(--font-comic-title)', letterSpacing: '1px', fontSize: '1.1rem' }}>PROPHECY: "PRICES WILL FALL!"</h4>
            <div style={{ fontSize: '3rem', textAlign: 'center', margin: '1rem' }}>😌</div>
            <p><strong>Reaction:</strong> Wait for the Sale!</p>
            <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#006400' }}>
              "Hold the line... discounts are coming!"
            </div>
          </div>
        </div>
      </div>

      {/* Additional Determinants */}
      {/* Additional Determinants (Market Demand) */}
      <div className="comic-panel" style={{ borderColor: '#6a0dad', boxShadow: '10px 10px 0 #4b0082' }}>
        <div className="caption-box" style={{ background: '#6a0dad' }}>THE EXTENDED LEAGUE</div>
        <h3 className="comic-header-md">MARKET FORCES & ALLIES</h3>
        <p className="comic-text">
          When we look at the <strong>WHOLE MARKET</strong>, these new heroes join the fight!
        </p>

        <div className="comic-sub-panel" style={{ border: '2px solid #6a0dad', background: 'white', marginBottom: '1.5rem' }}>
          <h4 style={{ fontFamily: 'var(--font-comic-title)', color: '#4b0082' }}>👥 THE CROWD (Population)</h4>
          <div className="graph-container" style={{ borderRadius: '8px', padding: '10px' }}>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={POPULATION_DEMAND_DATA}>
                <defs>
                  <linearGradient id="colorPop" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6a0dad" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#6a0dad" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" stroke="#4b0082" />
                <YAxis stroke="#4b0082" />
                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                <Area type="monotone" dataKey="demand" stroke="#6a0dad" fill="url(#colorPop)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '5px' }}>
              "More People = More Hunger = More Demand!"
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="hover-lift" style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '8px', background: '#f9f9f9' }}>
            <div style={{ fontSize: '2rem' }}>💳</div>
            <strong>Review: Credit</strong>
            <p style={{ fontSize: '0.8rem' }}>Easy loans mean people buy things they can't afford yet!</p>
          </div>
          <div className="hover-lift" style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '8px', background: '#f9f9f9' }}>
            <div style={{ fontSize: '2rem' }}>📜</div>
            <strong>Review: Gov. Policy</strong>
            <p style={{ fontSize: '0.8rem' }}>Taxes kill demand. Subsidies boost it.</p>
          </div>
          <div className="hover-lift" style={{ border: '2px solid #ccc', padding: '10px', borderRadius: '8px', background: '#f9f9f9' }}>
            <div style={{ fontSize: '2rem' }}>📱</div>
            <strong>Review: Tech</strong>
            <p style={{ fontSize: '0.8rem' }}>New gadgets create new needs!</p>
          </div>
        </div>
      </div>

      {/* League Roster Summary */}
      <div className="comic-panel" style={{ background: '#f5f5f5', borderColor: '#333' }}>
        <div className="caption-box" style={{ background: '#333', color: 'white' }}>OFFICIAL ROSTER</div>
        <h3 style={{ fontFamily: 'var(--font-comic-title)', fontSize: '1.8rem', textAlign: 'center', marginBottom: '1.5rem' }}>THE LEAGUE SUMMARY</h3>

        <table style={{ width: '100%', borderCollapse: 'collapse', border: '3px solid #333' }}>
          <thead>
            <tr style={{ background: '#333', color: 'white' }}>
              <th style={{ textAlign: 'left', padding: '12px', fontFamily: 'var(--font-comic-title)' }}>CODENAME</th>
              <th style={{ textAlign: 'left', padding: '12px', fontFamily: 'var(--font-comic-title)' }}>POWER</th>
              <th style={{ textAlign: 'left', padding: '12px', fontFamily: 'var(--font-comic-title)' }}>EFFECT</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '12px' }}><span style={{ color: '#b8860b', fontWeight: 'bold' }}>Px (Captain Price)</span></td>
              <td style={{ padding: '12px' }}>Law of Demand</td>
              <td style={{ padding: '12px' }}>Movement Along Curve</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc', background: '#f9f9f9' }}>
              <td style={{ padding: '12px' }}><span style={{ color: '#008b8b', fontWeight: 'bold' }}>Pr (The Twins)</span></td>
              <td style={{ padding: '12px' }}>Substitution / Complementarity</td>
              <td style={{ padding: '12px' }}>Shift in Curve</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '12px' }}><span style={{ color: '#006400', fontWeight: 'bold' }}>Y (Treasurer)</span></td>
              <td style={{ padding: '12px' }}>Purchasing Power</td>
              <td style={{ padding: '12px' }}>Shift in Curve</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ccc', background: '#f9f9f9' }}>
              <td style={{ padding: '12px' }}><span style={{ color: '#c71585', fontWeight: 'bold' }}>T (Trendsetter)</span></td>
              <td style={{ padding: '12px' }}>Preferences</td>
              <td style={{ padding: '12px' }}>Shift in Curve</td>
            </tr>
            <tr>
              <td style={{ padding: '12px' }}><span style={{ color: '#cc0000', fontWeight: 'bold' }}>E (Oracle)</span></td>
              <td style={{ padding: '12px' }}>Future Sight</td>
              <td style={{ padding: '12px' }}>Shift in Curve</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div >
  );
};

export default DeterminantsOfDemand;
