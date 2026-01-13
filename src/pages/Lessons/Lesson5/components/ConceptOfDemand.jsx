import React from 'react';
import { FaChartLine, FaShoppingBasket, FaUsers } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, Area, AreaChart } from 'recharts';

const DEMAND_SCHEDULE_DATA = [
  { price: 10, demand: 50 },
  { price: 20, demand: 40 },
  { price: 30, demand: 30 },
  { price: 40, demand: 20 },
  { price: 50, demand: 10 },
];

const ConceptOfDemand = () => {
  return (
    <div className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Part 1 - Section 1</span>
        <h2 className="section-title-lesson">Concept of Demand</h2>
        <p className="section-subtitle-lesson">Understanding what constitutes demand in economics</p>
      </div>

      {/* Definition Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold"><FaChartLine /> Meaning of Demand</h3>

          <div className="law-statement-box">
            <p className="term">
              "Demand refers to the quantity of a commodity that a consumer is willing
              and able to buy at each possible price during a given period of time."
            </p>
          </div>

          <div className="highlight-card cyan">
            <div className="highlight-icon"><FaShoppingBasket /></div>
            <div className="highlight-content">
              <h3>Demand vs. Desire vs. Want</h3>
              <p>In economics, these terms represent different stages:</p>
              <ul className="bullet-list">
                <li><strong>Desire:</strong> Just a wish to have something (e.g., "I wish I had a Ferrari"). No purchasing power.</li>
                <li><strong>Want:</strong> Desire backed by ability to pay (Purchasing Power). But maybe not willing to spend yet.</li>
                <li><strong>Demand:</strong> Desire + Ability to Pay + Willingness to Spend + Given Time + Given Price.</li>
              </ul>
            </div>
          </div>

          <div className="note-text">
            <strong>💡 Key Elements of Demand:</strong>
            <ul>
              <li>Quantity of the commodity</li>
              <li>Willingness to buy</li>
              <li>Ability to buy (Purchasing Power)</li>
              <li>Price of the commodity</li>
              <li>Period of time (per day, per week, etc.)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Individual vs Market Demand */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-cyan"><FaUsers /> Individual vs. Market Demand</h3>

          <div className="comparison-container">
            <div className="column">
              <h4 className="text-cyan">Individual Demand</h4>
              <p>Quantity demanded by a <strong>single consumer</strong> at various prices during a given period.</p>
            </div>
            <div className="column">
              <h4 className="text-gold">Market Demand</h4>
              <p>Total quantity demanded by <strong>all consumers</strong> in the market at various prices during a given period.</p>
              <p className="small-text italic">Sum of all individual demands (Horizontal Summation).</p>
            </div>
          </div>

          <h4 className="mt-4 text-green">📊 Demand Schedule</h4>
          <p>A tabular presentation showing various quantities demanded at different prices.</p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Price (₹)</th>
                  <th>Consumer A (Units)</th>
                  <th>Consumer B (Units)</th>
                  <th>Market Demand (A + B)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>5</td>
                  <td>7</td>
                  <td className="text-gold font-bold">12</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>4</td>
                  <td>6</td>
                  <td className="text-gold font-bold">10</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>3</td>
                  <td>5</td>
                  <td className="text-gold font-bold">8</td>
                </tr>
                <tr>
                  <td>40</td>
                  <td>2</td>
                  <td>4</td>
                  <td className="text-gold font-bold">6</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="diagram-caption text-center small-text">
            As price increases, both individual and market demand decrease (Inverse Relationship).
          </p>
        </div>
      </div>

      {/* Demand Curve Interactive Chart */}
      <div className="content-card">
        <div className="card-content">
          <h3 className="highlight-green">📈 Demand Curve</h3>
          <p>
            The graphical representation of the demand schedule. It typically slopes <strong>downward from left to right</strong>, indicating an inverse relationship between price and quantity demanded.
          </p>

          <div className="graph-container" style={{ background: 'rgba(0,0,0,0.3)', borderRadius: '16px', padding: '2rem', margin: '2rem 0' }}>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={DEMAND_SCHEDULE_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                   <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00ff00" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#00ff00" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis type="number" dataKey="demand" domain={[0, 60]} stroke="#00ffff">
                  <Label value="Quantity Demanded (Units)" position="bottom" fill="#00ffff" offset={0} />
                </XAxis>
                <YAxis type="number" dataKey="price" domain={[0, 60]} stroke="#ffd700">
                  <Label value="Price (₹)" angle={-90} position="left" fill="#ffd700" />
                </YAxis>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #00ff00' }}
                  itemStyle={{ color: '#00ff00' }}
                  labelFormatter={(value) => `Quantity: ${value}`}
                  formatter={(value) => [`₹${value}`, "Price"]}
                />
                <Area type="monotone" dataKey="price" stroke="none" fill="url(#colorDemand)" />
                <Line type="monotone" dataKey="price" stroke="#00ff00" strokeWidth={3} dot={{r: 6, fill:'#00ff00'}} activeDot={{ r: 8 }} name="Demand Curve" />
              </AreaChart>
            </ResponsiveContainer>
             <p className="diagram-caption text-center small-text">Graphical representation of Demand Schedule showing inverse relationship.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ConceptOfDemand;
