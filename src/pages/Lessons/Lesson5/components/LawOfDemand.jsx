import React from 'react';
import { FaArrowDown, FaChartLine, FaExclamationTriangle, FaSearchPlus, FaLightbulb, FaArrowUp} from 'react-icons/fa';
import { ResponsiveContainer, AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, Area } from 'recharts';
import './lesson5.css';

const DEMAND_DATA = [
  { price: 5, quantity: 10 },
  { price: 4, quantity: 20 },
  { price: 3, quantity: 30 },
  { price: 2, quantity: 40 },
  { price: 1, quantity: 50 },
];

const LawOfDemand = () => {
  return (
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 1 - Section 3</span>
        <h2 className="section-title-lesson">Law of Demand</h2>
        <p className="section-subtitle-lesson">The First Law of Purchase: Inverse Relationship</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaArrowDown /> The Statement of Law</h3>
          <div className="law-statement-box">
            <p className="term">
              "Other things remaining constant (Ceteris Paribus), there is an inverse relationship between price of a commodity and its quantity demanded."
            </p>
          </div>
           <p className="text-center mt-3" style={{color:'#ccc'}}>
             When Price falls <span style={{color:'#00ff00'}}><FaArrowDown/></span>, Quantity Demanded rises <span style={{color:'#00ff00'}}><FaArrowUp/></span>.
             <br/>
             When Price rises <span style={{color:'#ff4444'}}><FaArrowUp/></span>, Quantity Demanded falls <span style={{color:'#ff4444'}}><FaArrowDown/></span>.
           </p>

          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '2rem', margin: '2rem 0' }}>
             <h4 style={{textAlign:'center', color:'#ffd700', marginBottom:'1rem'}}>Demand Curve</h4>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={DEMAND_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                   <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ffff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00ffff" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" dataKey="quantity" domain={[0, 60]} stroke="#00ffff">
                  <Label value="Quantity Demanded (Units)" position="bottom" fill="#00ffff" offset={0} />
                </XAxis>
                <YAxis type="number" dataKey="price" domain={[0, 6]} stroke="#ffd700">
                  <Label value="Price (₹)" angle={-90} position="left" fill="#ffd700" />
                </YAxis>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffd700' }}
                  itemStyle={{ color: '#00ffff' }}
                  formatter={(value) => [`₹${value}`, "Price"]}
                  labelFormatter={(value) => `Quantity: ${value}`}
                />
                 <Area type="monotone" dataKey="quantity" stroke="none" fill="url(#colorDemand)" />
                <Line type="monotone" dataKey="price" stroke="#ffd700" strokeWidth={3} dot={{r: 6, fill:'#ffd700'}} activeDot={{ r: 8 }} name="Demand Curve" />
              </AreaChart>
            </ResponsiveContainer>
             <p className="diagram-caption text-center small-text">Downward Sloping Demand Curve (Left to Right) due to Inverse Relationship.</p>
          </div>

          <h3 className="highlight-cyan"><FaSearchPlus /> Why does Demand Curve Slope Downward?</h3>
          <p>Why do people buy more when prices fall? Here are the detailed reasons:</p>

          <div className="reasons-grid two-col" style={{gridTemplateColumns: '1fr 1fr', display:'grid', gap:'1rem'}}>
             {/* Reason 1 */}
             <div className="reason-card gold">
               <h4>1. Law of Diminishing Marginal Utility (DMU)</h4>
               <p style={{fontSize:'0.9rem'}}>
                 As we consume more units, utility from each successive unit falls. A consumer will buy more units only if the price falls to match the lower utility.
               </p>
             </div>

             {/* Reason 2 */}
             <div className="reason-card cyan">
               <h4>2. Income Effect</h4>
               <p style={{fontSize:'0.9rem'}}>
                 When price of a good falls, the <strong>Real Income</strong> (Purchasing Power) of the consumer increases. They can now afford to buy more of it with the same money.
               </p>
             </div>

             {/* Reason 3 */}
             <div className="reason-card purple">
               <h4>3. Substitution Effect</h4>
               <p style={{fontSize:'0.9rem'}}>
                 When price of commodity X falls, it becomes relatively <strong>cheaper</strong> than its substitute Y. So, consumers switch from Y to X.
               </p>
             </div>

             {/* Reason 4 */}
             <div className="reason-card green">
               <h4>4. Size of Consumer Group</h4>
               <p style={{fontSize:'0.9rem'}}>
                 When price falls, many consumers who could not afford it earlier now start buying it, increasing the total demand.
               </p>
             </div>
          </div>

          <h3 className="highlight-red mt-4"><FaExclamationTriangle /> Assumptions (Ceteris Paribus)</h3>
          <p>The law holds true ONLY if other determinants do not change. We assume:</p>
          <div className="expanded-text-section" style={{borderColor: '#ff4444'}}>
             <ul className="bullet-list">
                <li><strong>No change in Price of Related Goods:</strong> Prices of substitutes and complements must remain constant.</li>
                <li><strong>No change in Income:</strong> Consumer's income must remain fixed.</li>
                <li><strong>No change in Tastes/Preferences:</strong> Fashion or habits should not change.</li>
                <li><strong>No expectation of future price change:</strong> Consumers shouldn't expect prices to fall further.</li>
             </ul>
          </div>

          <div className="real-world-example" style={{borderColor: 'rgba(255, 68, 68, 0.4)'}}>
              <strong style={{color:'#ff4444'}}><FaLightbulb/> Exceptions to the Law (Giffen Goods):</strong>
              For very inferior goods (Giffen goods), demand might <em>fall</em> when price falls, because the Income Effect (negative) is stronger than Substitution Effect. (Rare case).
          </div>

        </div>
      </div>
    </div>
  );
};

export default LawOfDemand;
