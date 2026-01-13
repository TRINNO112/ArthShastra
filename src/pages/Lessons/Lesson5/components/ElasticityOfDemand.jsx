import React from 'react';
import { FaPercentage, FaDivide, FaEquals, FaCalculator } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, Area, AreaChart } from 'recharts';
import './lesson5.css';

const ELASTICITY_DATA = [
  { q: 1, p_inelastic: 5, p_elastic: 5, p_unitary: 5 },
  { q: 2, p_inelastic: 4, p_elastic: 4.5, p_unitary: 2.5 },
  { q: 3, p_inelastic: 3, p_elastic: 4, p_unitary: 1.66 },
  { q: 4, p_inelastic: 2, p_elastic: 3.5, p_unitary: 1.25 },
  { q: 5, p_inelastic: 1, p_elastic: 3, p_unitary: 1 },
];

const ElasticityOfDemand = () => {
  return (
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 1 - Section 4</span>
        <h2 className="section-title-lesson">Price Elasticity of Demand</h2>
        <p className="section-subtitle-lesson">Measuring the responsiveness of demand to price changes</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaPercentage /> Meaning of Elasticity</h3>
          <p>
            Price Elasticity of Demand (Ed) measures the <strong>degree of responsiveness</strong> of quantity demanded to a change in price.
          </p>

          <div className="math-formula-large">
            <span>Ed = </span>
            <div className="math-fraction">
              <span className="math-numerator">(-) % Change in Quantity Demanded</span>
              <span className="math-denominator">% Change in Price</span>
            </div>
          </div>
           <p className="small-text text-center italic">Negative sign indicates the inverse relationship between Price and Demand.</p>

          <h3 className="highlight-cyan mt-4">Degrees of Elasticity: Visualized</h3>
          <p>Comparing how different goods react to price changes. Look at the steepness of the curves:</p>

          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
             <ResponsiveContainer width="100%" height={300}>
                <LineChart data={ELASTICITY_DATA} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)"/>
                  <XAxis dataKey="q" type="number" stroke="#fff">
                    <Label value="Quantity" position="bottom" fill="#fff"/>
                  </XAxis>
                  <YAxis stroke="#fff">
                    <Label value="Price" angle={-90} position="left" fill="#fff"/>
                  </YAxis>
                  <Tooltip contentStyle={{backgroundColor: '#1a1a1a', border: '1px solid #fff'}}/>
                  <Line type="monotone" dataKey="p_elastic" name="Elastic (>1): Flatter" stroke="#00ff00" strokeWidth={3} dot={false}/>
                  <Line type="monotone" dataKey="p_inelastic" name="Inelastic (<1): Steeper" stroke="#ff4444" strokeWidth={3} dot={false}/>
                  <Line type="monotone" dataKey="p_unitary" name="Unitary (=1): Uniform" stroke="#00ffff" strokeWidth={3} dot={false}/>
                </LineChart>
             </ResponsiveContainer>
              <div className="legend-custom" style={{display:'flex', justifyContent:'center', gap:'1rem', marginTop:'1rem', flexWrap:'wrap'}}>
                 <span style={{color:'#00ff00'}}>● Elastic (Luxury goods)</span>
                 <span style={{color:'#ff4444'}}>● Inelastic (Necessities)</span>
                 <span style={{color:'#00ffff'}}>● Unitary (Normal goods)</span>
              </div>
          </div>

          <div className="reasons-grid">
            <div className="reason-card gold">
              <h4>Ed = ∞</h4>
              <p><strong>Perfectly Elastic</strong></p>
              <span className="small-text">Horizontal Line. Infinite demand at same price. (Theoretical)</span>
            </div>
             <div className="reason-card cyan">
              <h4>Ed {'>'} 1</h4>
              <p><strong>Highly Elastic</strong></p>
              <span className="small-text">Flatter Curve. %ΔQ {'>'} %ΔP. <br/>Example: Luxury Cars, ACs.</span>
            </div>
             <div className="reason-card green">
              <h4>Ed = 1</h4>
              <p><strong>Unitary Elastic</strong></p>
              <span className="small-text">Rectangular Hyperbola. %ΔQ = %ΔP. <br/>Example: Normal goods.</span>
            </div>
             <div className="reason-card purple">
              <h4>Ed {'<'} 1</h4>
              <p><strong>Less Elastic</strong></p>
              <span className="small-text">Steeper Curve. %ΔQ {'<'} %ΔP. <br/>Example: Salt, Medicines.</span>
            </div>
             <div className="reason-card red">
              <h4>Ed = 0</h4>
              <p><strong>Perfectly Inelastic</strong></p>
              <span className="small-text">Vertical Line. Demand constant. <br/>Example: Life saving drugs.</span>
            </div>
          </div>

           <div className="highlight-card gold mt-4">
            <div className="highlight-content">
              <h3><FaCalculator/> Percentage Method Formula</h3>
              <div className="math-formula-large">
                  <span>Ed = </span>
                  <div className="math-fraction">
                    <span className="math-numerator">ΔQ</span>
                    <span className="math-denominator">Q</span>
                  </div>
                  <span className="math-symbol">×</span>
                  <div className="math-fraction">
                    <span className="math-numerator">P</span>
                    <span className="math-denominator">ΔP</span>
                  </div>
              </div>
              <p className="text-center">Where ΔQ = Change in Qty, ΔP = Change in Price, P = Original Price, Q = Original Qty.</p>
            </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default ElasticityOfDemand;
