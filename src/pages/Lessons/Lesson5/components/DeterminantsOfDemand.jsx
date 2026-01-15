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
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 1 - Section 2</span>
        <h2 className="section-title-lesson">Determinants of Demand</h2>
        <p className="section-subtitle-lesson">Factors impacting commodity demand</p>
      </div>

      {/* Introduction */}
      <div className="content-card animated-fadeIn">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaLightbulb /> What Determines Demand?</h3>
          <p style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
            Demand for a product doesn't exist in isolation. Multiple factors influence how much consumers are willing and able to buy. Understanding these <strong>determinants of demand</strong> helps businesses and policymakers predict consumer behavior and make informed decisions.
          </p>
          <div className="info-highlight">
            <strong>Key Insight:</strong> While the price of a product is the most obvious factor affecting demand, it's far from the only one. Changes in income, preferences, related goods' prices, and expectations all play crucial roles in shaping market demand.
          </div>
        </div>
      </div>

      {/* Demand Function */}
      <div className="content-card animated-slideUp">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaSitemap /> The Demand Function</h3>
          <p>
            The functional relationship between the demand for a commodity and its various determinants is known as the <strong>Demand Function</strong>. It shows how quantity demanded depends on multiple variables.
          </p>

          <div className="formula-box-animated">
            <div className="formula-main">
              <strong>Dx = f(Px, Pr, Y, T, E)</strong>
            </div>
            <div className="formula-label">Individual Demand Function</div>
            <div className="formula-explanation">
              Where Dx is the quantity demanded of commodity X
            </div>
          </div>

          <div className="expanded-text-section">
            <h4><FaChartLine /> Breaking Down the Function</h4>
            <p>Each variable in the demand function represents a critical factor that influences consumer purchasing decisions. Let's explore each determinant in detail:</p>
          </div>

          <div className="reasons-grid-enhanced">
            <div className="reason-card-interactive gold" data-factor="price">
              <div className="card-icon">💰</div>
              <h4>Px - Own Price</h4>
              <p>Price of the commodity itself</p>
              <div className="card-detail">
                Most important factor. Higher price → Lower demand (Law of Demand)
              </div>
            </div>
            <div className="reason-card-interactive cyan" data-factor="related">
              <div className="card-icon">⚖️</div>
              <h4>Pr - Related Goods</h4>
              <p>Prices of substitutes & complements</p>
              <div className="card-detail">
                Tea ↑ → Coffee demand ↑ (Substitute)<br/>
                Petrol ↑ → Car demand ↓ (Complement)
              </div>
            </div>
            <div className="reason-card-interactive green" data-factor="income">
              <div className="card-icon">💵</div>
              <h4>Y - Consumer Income</h4>
              <p>Purchasing power of consumers</p>
              <div className="card-detail">
                Higher income → More demand for normal goods<br/>
                Higher income → Less demand for inferior goods
              </div>
            </div>
            <div className="reason-card-interactive purple" data-factor="taste">
              <div className="card-icon">❤️</div>
              <h4>T - Tastes & Preferences</h4>
              <p>Consumer preferences, fashion, habits</p>
              <div className="card-detail">
                Influenced by trends, culture, advertising, weather, and social factors
              </div>
            </div>
            <div className="reason-card-interactive red" data-factor="expectations">
              <div className="card-icon">📅</div>
              <h4>E - Future Expectations</h4>
              <p>Expected future prices or availability</p>
              <div className="card-detail">
                Expected price rise → Buy more today<br/>
                Expected shortage → Panic buying
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Own Price - Brief Section */}
      <div className="content-card animated-fadeIn">
        <div className="card-content">
          <h3 className="highlight-gold"><FaMoneyBillWave /> 1. Own Price of Commodity (Px)</h3>
          <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
            The price of the commodity itself is the <strong>most influential determinant</strong> of its demand. This relationship is governed by the <strong>Law of Demand</strong>: when price increases, quantity demanded decreases (and vice versa), assuming all other factors remain constant.
          </p>

          <div className="key-points-grid">
            <div className="key-point-box">
              <div className="key-point-icon green">✓</div>
              <div>
                <strong>Price Decreases</strong>
                <p>Demand increases as product becomes more affordable</p>
              </div>
            </div>
            <div className="key-point-box">
              <div className="key-point-icon red">✗</div>
              <div>
                <strong>Price Increases</strong>
                <p>Demand decreases as fewer can afford it</p>
              </div>
            </div>
          </div>

          <div className="note-box">
            <strong>Note:</strong> This is called a <em>movement along</em> the demand curve. Changes in other determinants cause the entire curve to <em>shift</em> left or right.
          </div>
        </div>
      </div>

      {/* 2. Price of Related Goods - Interactive Charts */}
      <div className="content-card animated-slideUp">
        <div className="card-content">
          <h3 className="highlight-purple"><FaBalanceScale /> 2. Price of Related Goods (Pr)</h3>
          <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
            The demand for a commodity is also influenced by changes in the prices of <strong>related goods</strong>. These related goods can be either substitutes or complements, and each affects demand differently.
          </p>

          {/* Interactive Toggle */}
          <div className="interactive-toggle-container">
            <button
              className={`toggle-btn ${activeExample === 'substitute' ? 'active-gold' : ''}`}
              onClick={() => setActiveExample('substitute')}
            >
              <FaCoffee /> Substitute Goods
            </button>
            <button
              className={`toggle-btn ${activeExample === 'complementary' ? 'active-cyan' : ''}`}
              onClick={() => setActiveExample('complementary')}
            >
              <FaCar /> Complementary Goods
            </button>
          </div>

          <div className="comparison-container">
            {/* Substitute Goods */}
            {activeExample === 'substitute' && (
              <div className="interactive-demo-section animated-fadeIn">
                <div className="demo-header">
                  <h4 className="text-gold"><FaCoffee /> Substitute Goods - Positive Relationship</h4>
                  <p style={{fontSize: '1rem', marginBottom: '1rem'}}>
                    Goods that can be used <strong>in place of each other</strong>. They serve similar purposes and compete for the same consumer need.
                  </p>
                </div>

                <div className="real-world-example-enhanced">
                  <div className="example-icon">💡</div>
                  <div className="example-content">
                    <strong>Real World Example: Tea vs Coffee</strong>
                    <p>Both beverages satisfy the need for a hot caffeinated drink. When tea becomes expensive, consumers switch to coffee as an alternative, increasing coffee demand.</p>
                    <div className="example-more">
                      <strong>Other Examples:</strong> Butter & Margarine • Coke & Pepsi • Rice & Wheat • Android & iPhone
                    </div>
                  </div>
                </div>

                {/* Interactive Slider */}
                <div className="interactive-slider-section">
                  <div className="slider-header">
                    <h5>🎛️ Interactive Demo: Adjust Tea Price</h5>
                    <p>See how changing tea prices affects coffee demand in real-time</p>
                  </div>
                  <div className="slider-control">
                    <label>Price of Tea: ₹{teaPrice}</label>
                    <input
                      type="range"
                      min="10"
                      max="30"
                      value={teaPrice}
                      onChange={(e) => setTeaPrice(Number(e.target.value))}
                      className="price-slider"
                    />
                    <div className="slider-labels">
                      <span>₹10 (Low)</span>
                      <span>₹30 (High)</span>
                    </div>
                  </div>
                  <div className="demand-display">
                    <div className="demand-metric">
                      <FaCoffee size={32} color="#ffd700" />
                      <div>
                        <div className="metric-label">Coffee Demand</div>
                        <div className="metric-value gold">{calculateCoffeeDemand(teaPrice)} units</div>
                      </div>
                    </div>
                    <div className="relationship-indicator">
                      {teaPrice > 15 ? (
                        <div className="indicator positive">
                          <FaArrowUp /> Tea price increased → Coffee demand increased
                        </div>
                      ) : teaPrice < 15 ? (
                        <div className="indicator negative">
                          <FaArrowDown /> Tea price decreased → Coffee demand decreased
                        </div>
                      ) : (
                        <div className="indicator neutral">
                          ↔️ Base price level
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="graph-container-small" style={{width:'100%', height:'300px', marginTop: '1.5rem'}}>
                  <h5 className="text-center mb-2">Historical Price vs Demand Relationship</h5>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={SUBSTITUTE_DATA} margin={{top: 10, right: 30, left: 20, bottom: 50}}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="priceTea" stroke="#fff">
                         <Label value="Price of Tea (₹)" position="insideBottom" offset={-10} fill="#aaa" fontSize={11}/>
                      </XAxis>
                      <YAxis stroke="#fff">
                        <Label value="Coffee Demand" angle={-90} position="insideLeft" fill="#aaa" />
                      </YAxis>
                      <Tooltip cursor={{stroke: '#ffd700', strokeWidth: 2}} contentStyle={{backgroundColor:'#1a1a1a', border:'1px solid #ffd700'}} />
                      <Line type="monotone" dataKey="demandCoffee" stroke="#ffd700" strokeWidth={3} dot={{ fill: '#ffd700', r: 5 }} activeDot={{ r: 8 }} name="Coffee Demand" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="diagram-caption text-center">
                  <strong>Positive Correlation:</strong> Price of Tea <FaArrowUp/> → Demand for Coffee <FaArrowUp/>
                </p>
              </div>
            )}

            {/* Complementary Goods */}
            {activeExample === 'complementary' && (
              <div className="interactive-demo-section animated-fadeIn">
                <div className="demo-header">
                  <h4 className="text-cyan"><FaCar /> Complementary Goods - Inverse Relationship</h4>
                  <p style={{fontSize: '1rem', marginBottom: '1rem'}}>
                    Goods that are <strong>used together</strong> to satisfy a want. They complement each other and are consumed jointly.
                  </p>
                </div>

                <div className="real-world-example-enhanced" style={{borderColor: 'rgba(0, 255, 255, 0.3)'}}>
                  <div className="example-icon" style={{background: 'rgba(0, 255, 255, 0.1)'}}>💡</div>
                  <div className="example-content">
                    <strong style={{color: '#00ffff'}}>Real World Example: Petrol & Cars</strong>
                    <p>Cars need petrol to run. When petrol prices rise, the cost of operating a car increases, making car ownership less attractive and reducing car demand.</p>
                    <div className="example-more">
                      <strong>Other Examples:</strong> Printer & Ink • Phone & Data Plan • Bread & Butter • Laptop & Software
                    </div>
                  </div>
                </div>

                {/* Interactive Slider */}
                <div className="interactive-slider-section">
                  <div className="slider-header">
                    <h5>🎛️ Interactive Demo: Adjust Petrol Price</h5>
                    <p>See how changing petrol prices affects car demand in real-time</p>
                  </div>
                  <div className="slider-control">
                    <label>Price of Petrol: ₹{petrolPrice}/L</label>
                    <input
                      type="range"
                      min="60"
                      max="110"
                      value={petrolPrice}
                      onChange={(e) => setPetrolPrice(Number(e.target.value))}
                      className="price-slider cyan"
                    />
                    <div className="slider-labels">
                      <span>₹60 (Low)</span>
                      <span>₹110 (High)</span>
                    </div>
                  </div>
                  <div className="demand-display">
                    <div className="demand-metric">
                      <FaCar size={32} color="#00ffff" />
                      <div>
                        <div className="metric-label">Car Demand</div>
                        <div className="metric-value cyan">{calculateCarDemand(petrolPrice)} units</div>
                      </div>
                    </div>
                    <div className="relationship-indicator">
                      {petrolPrice > 80 ? (
                        <div className="indicator negative">
                          <FaArrowUp /> Petrol price increased → Car demand decreased
                        </div>
                      ) : petrolPrice < 80 ? (
                        <div className="indicator positive">
                          <FaArrowDown /> Petrol price decreased → Car demand increased
                        </div>
                      ) : (
                        <div className="indicator neutral">
                          ↔️ Base price level
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="graph-container-small" style={{width:'100%', height:'300px', marginTop: '1.5rem'}}>
                  <h5 className="text-center mb-2">Historical Price vs Demand Relationship</h5>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={COMPLEMENTARY_DATA} margin={{top: 10, right: 30, left: 20, bottom: 50}}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="pricePetrol" stroke="#fff">
                         <Label value="Price of Petrol (₹)" position="insideBottom" offset={-10} fill="#aaa" fontSize={11}/>
                      </XAxis>
                      <YAxis stroke="#fff">
                        <Label value="Car Demand" angle={-90} position="insideLeft" fill="#aaa" />
                      </YAxis>
                      <Tooltip cursor={{stroke: '#00ffff', strokeWidth: 2}} contentStyle={{backgroundColor:'#1a1a1a', border:'1px solid #00ffff'}} />
                      <Line type="monotone" dataKey="demandCar" stroke="#00ffff" strokeWidth={3} dot={{ fill: '#00ffff', r: 5 }} activeDot={{ r: 8 }} name="Car Demand" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="diagram-caption text-center">
                  <strong>Inverse Correlation:</strong> Price of Petrol <FaArrowUp/> → Demand for Cars <FaArrowDown/>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Income of Consumer - Interactive Chart */}
      <div className="content-card animated-fadeIn">
        <div className="card-content">
          <h3 className="highlight-green"><FaMoneyBillWave /> 3. Income of the Consumer (Y)</h3>
          <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
            Consumer income is a <strong>critical determinant</strong> of demand. However, the effect of income changes depends on the <strong>nature of the commodity</strong>. Goods are classified as normal or inferior based on how their demand responds to income changes.
          </p>

          <div className="income-classification-grid">
            <div className="classification-card green-theme">
              <div className="classification-header">
                <div className="classification-icon">📈</div>
                <h4>Normal Goods</h4>
              </div>
              <p className="classification-definition">
                Goods for which demand <strong>increases</strong> as consumer income rises
              </p>
              <div className="classification-examples">
                <strong>Examples:</strong>
                <ul>
                  <li><FaAppleAlt /> Organic fruits & vegetables</li>
                  <li><FaTshirt /> Branded clothing</li>
                  <li><FaCar /> Premium cars</li>
                  <li><FaShoppingCart /> Full cream milk</li>
                </ul>
              </div>
              <div className="classification-logic">
                When you earn more, you afford better quality and more quantity
              </div>
            </div>

            <div className="classification-card red-theme">
              <div className="classification-header">
                <div className="classification-icon">📉</div>
                <h4>Inferior Goods</h4>
              </div>
              <p className="classification-definition">
                Goods for which demand <strong>decreases</strong> as consumer income rises
              </p>
              <div className="classification-examples">
                <strong>Examples:</strong>
                <ul>
                  <li><FaBreadSlice /> Coarse grains (Bajra, Jowar)</li>
                  <li><FaShoppingCart /> Toned milk</li>
                  <li><FaUsers /> Public transport (shift to private)</li>
                  <li>💼 Second-hand goods</li>
                </ul>
              </div>
              <div className="classification-logic">
                When you earn more, you switch to better alternatives
              </div>
            </div>
          </div>

          {/* Interactive Income Slider */}
          <div className="interactive-slider-section" style={{marginTop: '2rem'}}>
            <div className="slider-header">
              <h5>🎛️ Interactive Demo: Adjust Your Income Level</h5>
              <p>See how your purchasing behavior changes with income</p>
            </div>
            <div className="slider-control">
              <label>Monthly Income: ₹{incomeLevel.toLocaleString()}</label>
              <input
                type="range"
                min="1000"
                max="5000"
                step="500"
                value={incomeLevel}
                onChange={(e) => setIncomeLevel(Number(e.target.value))}
                className="price-slider green"
              />
              <div className="slider-labels">
                <span>₹1,000</span>
                <span>₹3,000</span>
                <span>₹5,000</span>
              </div>
            </div>

            <div className="income-comparison-display">
              <div className="income-good-card normal-good">
                <div className="good-header">
                  <FaAppleAlt size={28} color="#00ff00" />
                  <h5>Normal Good Example</h5>
                  <small>(Premium Groceries)</small>
                </div>
                <div className="good-demand">
                  <div className="demand-value green">{calculateNormalGoodDemand(incomeLevel)} units</div>
                  <div className="demand-trend">
                    {incomeLevel > 3000 ? '📈 Buying more' : incomeLevel < 3000 ? '📉 Buying less' : '↔️ Normal level'}
                  </div>
                </div>
              </div>

              <div className="income-good-card inferior-good">
                <div className="good-header">
                  <FaBreadSlice size={28} color="#ff4444" />
                  <h5>Inferior Good Example</h5>
                  <small>(Basic Staples)</small>
                </div>
                <div className="good-demand">
                  <div className="demand-value red">{calculateInferiorGoodDemand(incomeLevel)} units</div>
                  <div className="demand-trend">
                    {incomeLevel > 3000 ? '📉 Buying less' : incomeLevel < 3000 ? '📈 Buying more' : '↔️ Normal level'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="expanded-text-section" style={{marginTop: '2rem'}}>
             <h4>📊 Understanding the Relationship:</h4>
             <p>As income increases (moves right on X-axis):</p>
             <ul className="bullet-list">
                 <li><strong style={{color: '#00ff00'}}>Normal Goods (Green):</strong> Demand rises proportionally. When you earn ₹5,000 instead of ₹1,000, you buy more premium products and higher quantities.</li>
                 <li><strong style={{color: '#ff4444'}}>Inferior Goods (Red):</strong> Demand falls as you upgrade to better alternatives. You shift from coarse grain to wheat, from toned milk to full cream milk.</li>
             </ul>
             <div className="pro-tip">
               <strong>💡 Pro Tip:</strong> Whether a good is normal or inferior can vary by individual and region. In rural areas, motorcycles might be normal goods, but in urban areas where people upgrade to cars, they might be considered inferior.
             </div>
          </div>

           <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem', marginTop: '2rem' }}>
              <h4 className="text-center mb-3">Income Effect Visualization</h4>
              <div style={{marginBottom: '1rem', textAlign: 'center'}}>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginRight: '1.5rem'}}>
                  <span style={{width: '20px', height: '3px', background: '#00ff00', display: 'inline-block'}}></span>
                  <span style={{color: '#00ff00'}}>Normal Goods (↑ with income)</span>
                </span>
                <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                  <span style={{width: '20px', height: '3px', background: '#ff4444', display: 'inline-block'}}></span>
                  <span style={{color: '#ff4444'}}>Inferior Goods (↓ with income)</span>
                </span>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={INCOME_DATA} margin={{top: 10, right: 30, left: 20, bottom: 40}}>
                  <defs>
                    <linearGradient id="colorNormal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ff00" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00ff00" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorInferior" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff4444" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="income" stroke="#fff">
                    <Label value="Consumer Income (₹)" position="insideBottom" offset={-15} fill="#fff" />
                  </XAxis>
                  <YAxis stroke="#fff">
                     <Label value="Quantity Demanded" angle={-90} position="insideLeft" fill="#fff" />
                  </YAxis>
                  <Tooltip contentStyle={{backgroundColor:'#1a1a1a', border:'1px solid #fff'}} />
                  <Area type="monotone" dataKey="normal" stroke="#00ff00" fillOpacity={1} fill="url(#colorNormal)" name="Normal Goods" />
                  <Area type="monotone" dataKey="inferior" stroke="#ff4444" fillOpacity={1} fill="url(#colorInferior)" name="Inferior Goods" />
                </AreaChart>
              </ResponsiveContainer>
               <p className="diagram-caption text-center">
                 <strong>Opposite Relationships:</strong> As income rises, normal goods demand increases while inferior goods demand decreases.
               </p>
           </div>
        </div>
      </div>

       {/* 4. Tastes & Preferences */}
      <div className="content-card animated-slideUp">
        <div className="card-content">
          <h3 className="highlight-red"><FaHeart /> 4. Tastes & Preferences (T)</h3>
           <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
            Consumer <strong>tastes and preferences</strong> significantly influence demand. These preferences are shaped by fashion trends, cultural factors, advertising, weather, health awareness, and social influences. Unlike price or income, preferences are subjective and can shift rapidly.
          </p>

          <div className="factors-affecting-taste">
            <h4 style={{marginBottom: '1rem'}}>Factors Influencing Tastes & Preferences:</h4>
            <div className="taste-factors-grid">
              <div className="taste-factor-card">
                <div className="factor-icon">👗</div>
                <h5>Fashion & Trends</h5>
                <p>Style changes drive demand for clothing, accessories, tech gadgets</p>
              </div>
              <div className="taste-factor-card">
                <div className="factor-icon"><FaSun /></div>
                <h5>Seasonal Changes</h5>
                <p>Weather impacts demand for clothes, food, travel destinations</p>
              </div>
              <div className="taste-factor-card">
                <div className="factor-icon">📺</div>
                <h5>Advertising</h5>
                <p>Marketing campaigns shape brand preferences and product awareness</p>
              </div>
              <div className="taste-factor-card">
                <div className="factor-icon">💪</div>
                <h5>Health Consciousness</h5>
                <p>Growing health awareness boosts organic food, gym memberships</p>
              </div>
              <div className="taste-factor-card">
                <div className="factor-icon"><FaGlobe /></div>
                <h5>Cultural Shifts</h5>
                <p>Social values affect eco-friendly products, ethical brands</p>
              </div>
              <div className="taste-factor-card">
                <div className="factor-icon"><FaExclamationTriangle /></div>
                <h5>News & Events</h5>
                <p>Health scares, celebrity endorsements create sudden demand shifts</p>
              </div>
            </div>
          </div>

          <div className="comparison-container" style={{marginTop: '2rem'}}>
             <div className="column">
                <h4 className="text-green"><FaArrowUp /> Favorable Change in Preferences</h4>
                <p>When tastes become more favorable, the demand curve shifts <strong>Rightward</strong> (increases).</p>

                <div className="example-box-enhanced green-border">
                  <h5>🔥 Real-World Examples</h5>
                  <ul className="styled-list">
                    <li>
                      <strong>Fashion Trends:</strong> Ripped jeans become trendy → Everyone wants them → Demand surges
                    </li>
                    <li>
                      <strong>Seasonal Demand:</strong> Summer arrives → People crave ice cream → Demand spikes
                    </li>
                    <li>
                      <strong>Health Awareness:</strong> Yoga becomes popular → Yoga mat sales increase
                    </li>
                    <li>
                      <strong>Celebrity Influence:</strong> Star athlete wears Nike → Brand demand rises
                    </li>
                    <li>
                      <strong>Technology:</strong> Smartphones gain features → Demand for smartwatches increases
                    </li>
                  </ul>
                </div>
             </div>

             <div className="column">
                <h4 className="text-red"><FaArrowDown /> Unfavorable Change in Preferences</h4>
                <p>When tastes become less favorable, the demand curve shifts <strong>Leftward</strong> (decreases).</p>

                <div className="example-box-enhanced red-border">
                  <h5>❄️ Real-World Examples</h5>
                  <ul className="styled-list">
                    <li>
                      <strong>Outdated Fashion:</strong> Keypad phones become obsolete → Demand disappears
                    </li>
                    <li>
                      <strong>Health Scares:</strong> Bird flu outbreak → Chicken demand plummets
                    </li>
                    <li>
                      <strong>Seasonal Shift:</strong> Winter comes → Ice cream demand drops
                    </li>
                    <li>
                      <strong>Negative Publicity:</strong> Brand scandal → Customer boycott → Demand falls
                    </li>
                    <li>
                      <strong>New Alternatives:</strong> Streaming services emerge → DVD rentals decline
                    </li>
                  </ul>
                </div>
             </div>
          </div>

          {/* Seasonal Demand Visualization */}
          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
            <h4 className="text-center mb-3">📈 Seasonal Demand Patterns</h4>
            <p className="text-center" style={{fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem'}}>
              How weather and seasons influence consumer preferences throughout the year
            </p>
            <div style={{marginBottom: '1rem', textAlign: 'center'}}>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginRight: '1.5rem'}}>
                <span style={{width: '20px', height: '3px', background: '#ff6b6b', display: 'inline-block'}}></span>
                <span style={{color: '#ff6b6b'}}>Ice Cream 🍦</span>
              </span>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                <span style={{width: '20px', height: '3px', background: '#4ecdc4', display: 'inline-block'}}></span>
                <span style={{color: '#4ecdc4'}}>Winter Clothes 🧥</span>
              </span>
            </div>
            <ResponsiveContainer width="100%" height={330}>
              <LineChart data={SEASONAL_DEMAND_DATA} margin={{top: 10, right: 30, left: 20, bottom: 40}}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="#fff">
                  <Label value="Month of Year" position="insideBottom" offset={-15} fill="#fff" />
                </XAxis>
                <YAxis stroke="#fff">
                  <Label value="Demand Level" angle={-90} position="insideLeft" fill="#fff" />
                </YAxis>
                <Tooltip contentStyle={{backgroundColor:'#1a1a1a', border:'1px solid #fff'}} />
                <Line type="monotone" dataKey="iceCream" stroke="#ff6b6b" strokeWidth={3} dot={{ fill: '#ff6b6b', r: 6 }} name="Ice Cream" />
                <Line type="monotone" dataKey="winterClothes" stroke="#4ecdc4" strokeWidth={3} dot={{ fill: '#4ecdc4', r: 6 }} name="Winter Clothes" />
              </LineChart>
            </ResponsiveContainer>
            <p className="diagram-caption text-center">
              Notice the <strong>inverse relationship</strong>: When ice cream demand peaks in summer (June), winter clothes demand is lowest, and vice versa in winter (Dec-Jan).
            </p>
          </div>
        </div>
      </div>

       {/* 5. Future Expectations */}
      <div className="content-card animated-fadeIn">
        <div className="card-content">
          <h3 className="highlight-gold"><FaCalendarAlt /> 5. Future Expectations (E)</h3>
          <p style={{fontSize: '1.05rem', lineHeight: '1.7'}}>
            Consumer <strong>expectations about the future</strong> directly impact their <strong>current purchasing decisions</strong>. If consumers anticipate changes in prices, availability, or income, they adjust their demand today accordingly.
          </p>

          <div className="expectations-grid">
            <div className="expectation-scenario">
              <div className="scenario-header red-theme">
                <div className="scenario-icon">📈</div>
                <h4>Expected Price Increase</h4>
              </div>
              <div className="scenario-effect">
                <strong>Effect:</strong> Demand increases TODAY
              </div>
              <div className="scenario-logic">
                <strong>Psychology:</strong> "Buy now before it gets expensive!"
              </div>
              <div className="scenario-examples">
                <h5>Real Examples:</h5>
                <ul>
                  <li><FaGasPump /> <strong>Petrol Price Hike:</strong> News of price increase tomorrow → Everyone fills tanks today → Long queues at pumps</li>
                  <li>💎 <strong>Gold Before Festival:</strong> Expect prices to rise during wedding season → Buy gold in advance</li>
                  <li>📱 <strong>iPhone Launch:</strong> Current models go on sale before new model → Demand surge for discounted phones</li>
                  <li>🏠 <strong>Real Estate:</strong> Government plans infrastructure → Expected property appreciation → Buying spree</li>
                </ul>
              </div>
            </div>

            <div className="expectation-scenario">
              <div className="scenario-header green-theme">
                <div className="scenario-icon">📉</div>
                <h4>Expected Price Decrease</h4>
              </div>
              <div className="scenario-effect">
                <strong>Effect:</strong> Demand decreases TODAY
              </div>
              <div className="scenario-logic">
                <strong>Psychology:</strong> "Wait for the discount!"
              </div>
              <div className="scenario-examples">
                <h5>Real Examples:</h5>
                <ul>
                  <li>💰 <strong>Gold Price Fall:</strong> Expect prices to drop → Postpone purchases → Lower current demand</li>
                  <li>🛒 <strong>Festival Sales:</strong> Amazon Great Sale coming next week → Customers delay shopping today</li>
                  <li>📱 <strong>Tech Products:</strong> New phone model launching soon → Wait for current model price drops</li>
                  <li>🏡 <strong>Housing Slump:</strong> Expect market correction → Delay buying decisions</li>
                </ul>
              </div>
            </div>

            <div className="expectation-scenario">
              <div className="scenario-header cyan-theme">
                <div className="scenario-icon">⚠️</div>
                <h4>Expected Shortage</h4>
              </div>
              <div className="scenario-effect">
                <strong>Effect:</strong> Panic buying → Demand SPIKES
              </div>
              <div className="scenario-logic">
                <strong>Psychology:</strong> "Stock up before it runs out!"
              </div>
              <div className="scenario-examples">
                <h5>Real Examples:</h5>
                <ul>
                  <li>🦠 <strong>COVID-19 Lockdown:</strong> Announcement → Panic buying of groceries, sanitizers, masks</li>
                  <li>🌾 <strong>Crop Failure:</strong> News of poor harvest → Hoarding of wheat/rice</li>
                  <li>⛽ <strong>Supply Disruption:</strong> Pipeline leak → Fears of petrol shortage → Rush at pumps</li>
                  <li>💊 <strong>Medicine Shortage:</strong> Manufacturing halt news → Stockpiling by patients</li>
                </ul>
              </div>
            </div>

            <div className="expectation-scenario">
              <div className="scenario-header purple-theme">
                <div className="scenario-icon">💼</div>
                <h4>Expected Income Change</h4>
              </div>
              <div className="scenario-effect">
                <strong>Effect:</strong> Demand adjusts based on income expectations
              </div>
              <div className="scenario-logic">
                <strong>Psychology:</strong> "Plan purchases based on expected earnings"
              </div>
              <div className="scenario-examples">
                <h5>Real Examples:</h5>
                <ul>
                  <li>🎉 <strong>Expected Bonus:</strong> Annual bonus coming → Start shopping for luxury items in advance</li>
                  <li>📊 <strong>Job Promotion:</strong> Promotion expected → Increase spending on aspirational goods</li>
                  <li>😟 <strong>Recession Fears:</strong> Layoff rumors → Reduce discretionary spending today</li>
                  <li>🎓 <strong>Graduate Starting Job:</strong> Job offer secured → Start buying professional wardrobe</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="key-insight-box" style={{marginTop: '2rem'}}>
            <div className="insight-header">
              <FaLightbulb size={28} color="#ffd700" />
              <h4>Key Economic Insight</h4>
            </div>
            <p>
              Future expectations create a <strong>self-fulfilling prophecy</strong> in markets. When everyone expects shortages and buys more today, actual shortages occur. When everyone expects price rises and panic buys, prices actually do rise due to surge in demand. This is why central banks carefully manage expectations about inflation and interest rates.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Determinants */}
      <div className="content-card animated-slideUp">
        <div className="card-content">
          <h3 className="highlight-cyan"><FaUsers /> Other Important Determinants</h3>
          <p style={{fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem'}}>
            Beyond the five main determinants, several other factors influence market demand. These are particularly important when analyzing <strong>market demand</strong> (total demand for all consumers) rather than individual demand.
          </p>

          <div className="additional-determinants-grid">
            <div className="additional-determinant-card">
              <div className="determinant-icon"><FaUsers /></div>
              <h4>Population Size & Composition</h4>
              <p className="determinant-explanation">
                <strong>Effect:</strong> More people = More demand. Age distribution matters too.
              </p>
              <div className="determinant-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Growing population → Higher demand for housing, food, healthcare</li>
                  <li>Aging population → Increased demand for healthcare, retirement homes</li>
                  <li>Young population → Higher demand for education, entertainment</li>
                  <li>Urbanization → Surge in demand for apartments, public transport</li>
                </ul>
              </div>
            </div>

            <div className="additional-determinant-card">
              <div className="determinant-icon">💳</div>
              <h4>Credit Availability</h4>
              <p className="determinant-explanation">
                <strong>Effect:</strong> Easy loans increase purchasing power and demand
              </p>
              <div className="determinant-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Low interest rates → People take home loans → Housing demand rises</li>
                  <li>Easy car financing → Auto sales increase</li>
                  <li>Credit cards → Boost in consumer spending on goods</li>
                  <li>EMI schemes → Make expensive products accessible</li>
                </ul>
              </div>
            </div>

            <div className="additional-determinant-card">
              <div className="determinant-icon">📜</div>
              <h4>Government Policies</h4>
              <p className="determinant-explanation">
                <strong>Effect:</strong> Taxes, subsidies, regulations directly affect demand
              </p>
              <div className="determinant-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Subsidy on electric vehicles → Increased EV demand</li>
                  <li>High taxes on cigarettes → Reduced tobacco demand</li>
                  <li>Free healthcare → Higher demand for medical services</li>
                  <li>Import restrictions → Shift to domestic alternatives</li>
                </ul>
              </div>
            </div>

            <div className="additional-determinant-card">
              <div className="determinant-icon">📱</div>
              <h4>Technology & Innovation</h4>
              <p className="determinant-explanation">
                <strong>Effect:</strong> New technology creates demand for new products
              </p>
              <div className="determinant-examples">
                <strong>Examples:</strong>
                <ul>
                  <li>Smartphone invention → Massive demand for apps, accessories</li>
                  <li>Streaming platforms → Killed demand for DVDs</li>
                  <li>Electric vehicles → New demand for charging infrastructure</li>
                  <li>AI tools → Demand for powerful computing hardware</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Population vs Demand Chart */}
          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '1.5rem', marginTop: '2rem' }}>
            <h4 className="text-center mb-3">📊 Population Growth & Market Demand</h4>
            <p className="text-center" style={{fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem'}}>
              Relationship between population increase and overall market demand (2015-2023)
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={POPULATION_DEMAND_DATA} margin={{top: 20, right: 30, left: 20, bottom: 20}}>
                <defs>
                  <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00ffff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00ffff" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="#fff">
                  <Label value="Year" position="bottom" offset={0} fill="#fff" />
                </XAxis>
                <YAxis stroke="#fff">
                  <Label value="Index (Base 100)" angle={-90} position="left" fill="#fff" />
                </YAxis>
                <Tooltip contentStyle={{backgroundColor:'#1a1a1a', border:'1px solid #00ffff'}} />
                <Legend verticalAlign="top" height={36}/>
                <Area type="monotone" dataKey="population" stroke="#ffd700" fill="rgba(255, 215, 0, 0.2)" strokeWidth={2} name="Population" />
                <Area type="monotone" dataKey="demand" stroke="#00ffff" fillOpacity={1} fill="url(#colorDemand)" strokeWidth={3} name="Market Demand" />
              </AreaChart>
            </ResponsiveContainer>
            <p className="diagram-caption text-center">
              <strong>Positive Correlation:</strong> As population grows, overall market demand for goods and services increases proportionally.
            </p>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="content-card summary-card animated-fadeIn">
        <div className="card-content">
          <h3 className="highlight-gold"><FaChartLine /> Summary: Determinants of Demand</h3>
          <div className="summary-grid">
            <div className="summary-item">
              <div className="summary-number">1</div>
              <div className="summary-content">
                <h4>Own Price (Px)</h4>
                <p>Inverse relationship - Higher price → Lower demand (Movement along curve)</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">2</div>
              <div className="summary-content">
                <h4>Related Goods (Pr)</h4>
                <p>Substitutes: Positive relation • Complements: Inverse relation</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">3</div>
              <div className="summary-content">
                <h4>Income (Y)</h4>
                <p>Normal goods: Income ↑ → Demand ↑ • Inferior goods: Income ↑ → Demand ↓</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">4</div>
              <div className="summary-content">
                <h4>Tastes & Preferences (T)</h4>
                <p>Favorable change → Demand ↑ • Unfavorable change → Demand ↓</p>
              </div>
            </div>
            <div className="summary-item">
              <div className="summary-number">5</div>
              <div className="summary-content">
                <h4>Future Expectations (E)</h4>
                <p>Expected ↑ → Buy now • Expected ↓ → Wait • Expected shortage → Panic buy</p>
              </div>
            </div>
          </div>

          <div className="final-note">
            <h4>🎯 Remember</h4>
            <p>
              Changes in <strong>own price</strong> cause movement <strong>along</strong> the demand curve. Changes in <strong>all other determinants</strong> cause the entire demand curve to <strong>shift</strong> (right for increase, left for decrease).
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DeterminantsOfDemand;
