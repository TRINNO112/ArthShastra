import React from 'react';
import { FaSitemap, FaBalanceScale, FaMoneyBillWave, FaHeart, FaCalendarAlt, FaArrowUp, FaArrowDown, FaUserTie } from 'react-icons/fa';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
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

const DeterminantsOfDemand = () => {
  return (
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 1 - Section 2</span>
        <h2 className="section-title-lesson">Determinants of Demand</h2>
        <p className="section-subtitle-lesson">Factors impacting commodity demand</p>
      </div>

      {/* Demand Function */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaSitemap /> Demand Function</h3>
          <p>
            The functional relationship between the demand for a commodity and its various determinants is known as the Demand Function.
          </p>

          <div className="formula-box">
            <strong>Dx = f(Px, Pr, Y, T, E)</strong>
            <div className="formula-label">Individual Demand Function</div>
          </div>

          <div className="reasons-grid">
            <div className="reason-card gold">
              <h4>Px</h4>
              <p>Own Price of commodity</p>
            </div>
            <div className="reason-card cyan">
              <h4>Pr</h4>
              <p>Price of Related goods</p>
            </div>
            <div className="reason-card green">
              <h4>Y</h4>
              <p>Consumer's Income</p>
            </div>
            <div className="reason-card purple">
              <h4>T</h4>
              <p>Tastes & Preferences</p>
            </div>
            <div className="reason-card red">
              <h4>E</h4>
              <p>Future Expectations</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Price of Related Goods - Interactive Charts */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-purple"><FaBalanceScale /> 2. Price of Related Goods (Pr)</h3>

          <div className="comparison-container">
            {/* Substitute Goods */}
            <div className="column">
              <h4 className="text-gold">Substitute Goods (Positive Relation)</h4>
              <p>Goods that can be used in place of each other (Alternative goods).</p>
               <div className="real-world-example">
                <strong>💡 Real World Example:</strong>
                If the price of <strong>Tea</strong> rises, people will switch to <strong>Coffee</strong>, increasing the demand for Coffee.
              </div>
              <p style={{marginTop: '1rem'}}>Price of Tea vs Demand for Coffee</p>

               <div className="graph-container-small" style={{width:'100%', height:'250px'}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SUBSTITUTE_DATA} margin={{top: 20, right: 10, left: 0, bottom: 20}}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="priceTea" stroke="#fff">
                         <Label value="Price of Tea" position="bottom" offset={0} fill="#aaa" fontSize={10}/>
                      </XAxis>
                      <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor:'#333', border:'none'}} />
                      <Legend verticalAlign="top" height={36}/>
                      <Bar dataKey="demandCoffee" name="Demand for Coffee" fill="#ffd700" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
               <p className="small-text text-center mt-2">Price of Tea <FaArrowUp/> → Demand for Coffee <FaArrowUp/></p>
            </div>

            {/* Complementary Goods */}
            <div className="column">
              <h4 className="text-cyan">Complementary Goods (Inverse Relation)</h4>
              <p>Goods that are used together to satisfy a single want.</p>
              <div className="real-world-example" style={{borderColor: 'rgba(0, 255, 255, 0.2)'}}>
                <strong style={{color: '#00ffff'}}>💡 Real World Example:</strong>
                If the price of <strong>Petrol</strong> rises, running a car becomes expensive, so demand for <strong>Cars</strong> falls.
              </div>
              <p style={{marginTop: '1rem'}}>Price of Petrol vs Demand for Cars</p>

              <div className="graph-container-small" style={{width:'100%', height:'250px'}}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={COMPLEMENTARY_DATA} margin={{top: 20, right: 10, left: 0, bottom: 20}}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="pricePetrol" stroke="#fff">
                         <Label value="Price of Petrol" position="bottom" offset={0} fill="#aaa" fontSize={10}/>
                      </XAxis>
                      <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor:'#333', border:'none'}} />
                      <Legend verticalAlign="top" height={36}/>
                      <Bar dataKey="demandCar" name="Demand for Cars" fill="#00ffff" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
               </div>
                <p className="small-text text-center mt-2">Price of Petrol <FaArrowUp/> → Demand for Cars <FaArrowDown/></p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Income of Consumer - Interactive Chart */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-green"><FaMoneyBillWave /> 3. Income of the Consumer (Y)</h3>
          <p>
            The effect of a change in income depends on the <strong>nature of the commodity</strong>.
          </p>

          <div className="expanded-text-section">
             <h4>Understanding the Graph:</h4>
             <p>As income increases (moves right on X-axis):</p>
             <ul className="bullet-list">
                 <li><strong>Normal Goods (Green Bar):</strong> Demand rises. Example: Full cream milk, new clothes. You buy MORE of these when you are richer.</li>
                 <li><strong>Inferior Goods (Red Bar):</strong> Demand falls. Example: Coarse grain like Bajra, toned milk. You buy LESS of these because you shift to better quality goods.</li>
             </ul>
          </div>

           <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem' }}>
              <h4 className="text-center mb-3">Income Effect: Normal vs Inferior Goods</h4>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={INCOME_DATA} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="income" stroke="#fff">
                    <Label value="Consumer Income (₹)" position="bottom" offset={0} fill="#fff" />
                  </XAxis>
                  <YAxis stroke="#fff">
                     <Label value="Quantity Demanded" angle={-90} position="left" fill="#fff" />
                  </YAxis>
                  <Tooltip contentStyle={{backgroundColor:'#1a1a1a', border:'1px solid #fff'}} />
                  <Legend verticalAlign="top" height={36}/>
                  <Bar dataKey="normal" name="Normal Goods (Demand rises)" fill="#00ff00" />
                  <Bar dataKey="inferior" name="Inferior Goods (Demand falls)" fill="#ff4444" />
                </BarChart>
              </ResponsiveContainer>
               <p className="diagram-caption text-center small-text">As income rises, demand for Normal Goods increases, but for Inferior Goods, it decreases.</p>
           </div>
        </div>
      </div>

       {/* 4. Tastes & Preferences */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-red"><FaHeart /> 4. Tastes & Preferences (T)</h3>
           <p>
            Demand is also influenced by Tastes, Preferences, Fashion, Habits, Weather, etc.
          </p>
          <div className="comparison-container">
             <div className="column">
                <h4 className="text-green"><FaArrowUp/> Favorable Change</h4>
                <p>Demand Curve shifts <strong>Rightward</strong>.</p>
                <div className="example-box-small">
                   Items coming in fashion (e.g. Ripped Jeans), Favorable weather (Ice cream in summer).
                </div>
             </div>
             <div className="column">
                <h4 className="text-red"><FaArrowDown/> Unfavorable Change</h4>
                <p>Demand Curve shifts <strong>Leftward</strong>.</p>
                <div className="example-box-small">
                   Items going out of fashion (e.g. Old keypad phones), Unfavorable fear (e.g. Bird flu hitting chicken demand).
                </div>
             </div>
          </div>
        </div>
      </div>

       {/* 5. Future Expectations */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-gold"><FaCalendarAlt /> 5. Future Expectations (E)</h3>
          <p>
            If the consumer expects a significant change in the near future, their current demand changes <strong>today</strong>.
          </p>
          <div className="highlight-card gold">
            <div className="highlight-content">
              <ul className="bullet-list">
                <li>
                  <strong style={{color:'#ff4444'}}>Expectation of Price Rise:</strong>
                  <br/> If you think Petrol price will hike tomorrow, you fill your tank <strong>TODAY</strong> (Demand Rises).
                </li>
                <li>
                  <strong style={{color:'#00ff00'}}>Expectation of Price Fall:</strong>
                  <br/> If you think Gold price will drop next week, you wait and buy <strong>LESS TODAY</strong> (Demand Falls).
                </li>
                <li>
                   <strong style={{color:'#00ffff'}}>Expectation of Shortage:</strong>
                   <br/> If a lockdown is announced, people rush to buy groceries <strong>TODAY</strong> (Panic Buying {"->"} Demand Rises).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DeterminantsOfDemand;
