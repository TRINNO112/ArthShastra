import React from 'react';
import { FaPercentage, FaCalculator, FaBalanceScale, FaChartLine, FaExclamationCircle } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
import '../lesson5-comic.css';

const ELASTICITY_DATA = [
  { q: 1, p_inelastic: 5, p_elastic: 5, p_unitary: 5 },
  { q: 2, p_inelastic: 4, p_elastic: 4.5, p_unitary: 2.5 },
  { q: 3, p_inelastic: 3, p_elastic: 4, p_unitary: 1.66 },
  { q: 4, p_inelastic: 2, p_elastic: 3.5, p_unitary: 1.25 },
  { q: 5, p_inelastic: 1, p_elastic: 3, p_unitary: 1 },
];

const ElasticityOfDemand = () => {
  return (
    <div className="comic-page">
      {/* Header */}
      <div className="comic-panel" style={{ textAlign: 'center', background: 'var(--comic-paper)' }}>
        <div className="caption-box" style={{ left: '50%', transform: 'translateX(-50%)', top: '-25px' }}>ISSUE #5</div>
        <h2 className="comic-header-lg" style={{ fontSize: '3rem', margin: '2rem 0 1rem 0' }}>
          THE ELASTICITY GAUGE
        </h2>
        <p className="comic-text" style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          How much does demand stretch when price changes?
        </p>
      </div>

      {/* Formula Section */}
      <div className="comic-panel" style={{ borderColor: '#ffd700', boxShadow: '10px 10px 0 #b8860b' }}>
        <div className="caption-box" style={{ background: '#ffd700', color: 'black' }}><FaPercentage /> THE FORMULA</div>
        <h3 className="comic-header-md">PRICE ELASTICITY OF DEMAND</h3>
        <p className="comic-text">
          Measures the <strong>degree of responsiveness</strong> of quantity demanded to a change in price.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, #fffcf0, #fff8dc)',
          border: '4px solid black',
          padding: '2rem',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
          marginTop: '1.5rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-comic-title)' }}>
            Ed = <span style={{ borderBottom: '3px solid black', padding: '0 10px' }}>(-) % Change in Quantity Demanded</span>
          </div>
          <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-comic-title)', marginTop: '10px' }}>
            <span style={{ borderTop: '3px solid black', padding: '10px' }}>% Change in Price</span>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Negative sign indicates the inverse relationship between Price and Demand.
          </p>
        </div>
      </div>

      {/* Graph Section */}
      <div className="comic-panel" style={{ background: '#1a1a2e', borderColor: '#00ffff' }}>
        <div className="caption-box" style={{ background: '#00ffff', color: 'black' }}><FaChartLine /> VISUAL COMPARISON</div>
        <h3 className="comic-header-md" style={{ color: '#00ffff' }}>DEGREES OF ELASTICITY</h3>
        <p className="comic-text" style={{ color: '#ddd' }}>Look at the steepness of the curves:</p>

        <div style={{ background: '#000', border: '3px solid #00ffff', borderRadius: '10px', padding: '1rem', marginTop: '1rem' }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ELASTICITY_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="q" type="number" stroke="#fff">
                <Label value="Quantity" position="bottom" fill="#fff" />
              </XAxis>
              <YAxis stroke="#fff">
                <Label value="Price" angle={-90} position="left" fill="#fff" />
              </YAxis>
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #fff' }} />
              <Line type="monotone" dataKey="p_elastic" name="Elastic (>1): Flatter" stroke="#00ff00" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="p_inelastic" name="Inelastic (<1): Steeper" stroke="#ff4444" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="p_unitary" name="Unitary (=1)" stroke="#00ffff" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <span style={{ color: '#00ff00', fontWeight: 'bold' }}>● Elastic (Luxury goods)</span>
            <span style={{ color: '#ff4444', fontWeight: 'bold' }}>● Inelastic (Necessities)</span>
            <span style={{ color: '#00ffff', fontWeight: 'bold' }}>● Unitary (Normal goods)</span>
          </div>
        </div>
      </div>

      {/* Degrees of Elasticity Cards */}
      <div className="comic-panel" style={{ borderColor: '#bf5af2', boxShadow: '10px 10px 0 #6a0dad' }}>
        <div className="caption-box" style={{ background: '#bf5af2', color: 'white' }}><FaBalanceScale /> THE SPECTRUM</div>
        <h3 className="comic-header-md">5 DEGREES OF ELASTICITY</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          {/* Perfectly Elastic */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #ffd700', padding: '1rem', textAlign: 'center' }}>
            <div style={{ background: '#ffd700', color: 'black', padding: '10px', fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', marginBottom: '10px' }}>
              Ed = ∞
            </div>
            <h4 style={{ color: '#b8860b', fontFamily: 'var(--font-comic-title)' }}>PERFECTLY ELASTIC</h4>
            <p style={{ fontSize: '0.85rem' }}>Horizontal Line. Infinite demand at same price. (Theoretical)</p>
          </div>

          {/* Highly Elastic */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #00ff00', padding: '1rem', textAlign: 'center' }}>
            <div style={{ background: '#00ff00', color: 'black', padding: '10px', fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', marginBottom: '10px' }}>
              Ed {'>'} 1
            </div>
            <h4 style={{ color: '#006400', fontFamily: 'var(--font-comic-title)' }}>HIGHLY ELASTIC</h4>
            <p style={{ fontSize: '0.85rem' }}>Flatter Curve. %ΔQ {'>'} %ΔP.<br />Example: Luxury Cars, ACs.</p>
          </div>

          {/* Unitary Elastic */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #00ffff', padding: '1rem', textAlign: 'center' }}>
            <div style={{ background: '#00ffff', color: 'black', padding: '10px', fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', marginBottom: '10px' }}>
              Ed = 1
            </div>
            <h4 style={{ color: '#008b8b', fontFamily: 'var(--font-comic-title)' }}>UNITARY ELASTIC</h4>
            <p style={{ fontSize: '0.85rem' }}>Rectangular Hyperbola. %ΔQ = %ΔP.<br />Example: Normal goods.</p>
          </div>

          {/* Less Elastic */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #bf5af2', padding: '1rem', textAlign: 'center' }}>
            <div style={{ background: '#bf5af2', color: 'white', padding: '10px', fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', marginBottom: '10px' }}>
              Ed {'<'} 1
            </div>
            <h4 style={{ color: '#6a0dad', fontFamily: 'var(--font-comic-title)' }}>LESS ELASTIC</h4>
            <p style={{ fontSize: '0.85rem' }}>Steeper Curve. %ΔQ {'<'} %ΔP.<br />Example: Salt, Medicines.</p>
          </div>

          {/* Perfectly Inelastic */}
          <div className="comic-sub-panel hover-lift" style={{ background: 'white', border: '3px solid #ff4444', padding: '1rem', textAlign: 'center' }}>
            <div style={{ background: '#ff4444', color: 'white', padding: '10px', fontFamily: 'var(--font-comic-title)', fontSize: '1.5rem', marginBottom: '10px' }}>
              Ed = 0
            </div>
            <h4 style={{ color: '#8b0000', fontFamily: 'var(--font-comic-title)' }}>PERFECTLY INELASTIC</h4>
            <p style={{ fontSize: '0.85rem' }}>Vertical Line. Demand constant.<br />Example: Life saving drugs.</p>
          </div>
        </div>
      </div>

      {/* Percentage Method Formula */}
      <div className="comic-panel" style={{ borderColor: '#00ff00', boxShadow: '10px 10px 0 #006400' }}>
        <div className="caption-box" style={{ background: '#00ff00', color: 'black' }}><FaCalculator /> CALCULATION</div>
        <h3 className="comic-header-md">PERCENTAGE METHOD FORMULA</h3>

        <div style={{
          background: 'linear-gradient(135deg, #e0ffe0, #f0fff0)',
          border: '4px solid black',
          padding: '2rem',
          boxShadow: '8px 8px 0 rgba(0,0,0,0.2)',
          marginTop: '1rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', fontFamily: 'var(--font-comic-title)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <span>Ed =</span>
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ borderBottom: '2px solid black', padding: '0 10px' }}>ΔQ</span>
              <span>Q</span>
            </div>
            <span style={{ fontSize: '2rem' }}>×</span>
            <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ borderBottom: '2px solid black', padding: '0 10px' }}>P</span>
              <span>ΔP</span>
            </div>
          </div>
          <div style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
            <p><strong>ΔQ</strong> = Change in Qty | <strong>ΔP</strong> = Change in Price</p>
            <p><strong>P</strong> = Original Price | <strong>Q</strong> = Original Qty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElasticityOfDemand;
