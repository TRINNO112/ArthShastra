// Applications of Price Elasticity of Demand
import { useState } from 'react';
import { FaChartBar, FaDollarSign, FaIndustry, FaGavel, FaUniversity, FaStore, FaLightbulb, FaChartLine, FaGasPump, FaCar, FaRulerHorizontal } from 'react-icons/fa';

function Applications() {
  const [priceLevel, setPriceLevel] = useState(50);
  const pricePercent = ((priceLevel - 50) / 50 * 100).toFixed(0);
  const isPriceIncrease = priceLevel > 50;

  // Elasticity values for simulation (slope inverse)
  const elasticQ = 100 - (priceLevel * 1.2); // Steep change
  const inelasticQ = 100 - (priceLevel * 0.3); // Shallow change

  const elasticTRbefore = 50 * 100;
  const inelasticTRbefore = 50 * 100;
  const elasticTRafter = priceLevel * Math.max(0, elasticQ);
  const inelasticTRafter = priceLevel * Math.max(0, inelasticQ);

  const elasticRevenueChange = ((elasticTRafter - elasticTRbefore) / elasticTRbefore * 100).toFixed(0);
  const inelasticRevenueChange = ((inelasticTRafter - inelasticTRbefore) / inelasticTRbefore * 100).toFixed(0);
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Section 5</span>
        <h2 className="section-title-lesson">Applications of Price Elasticity</h2>
        <p className="section-subtitle-lesson">Real-world uses in business and policy decisions</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p>Understanding price elasticity helps businesses and governments make better decisions:</p>

          <div className="highlight-card gold mt-4">
            <div className="highlight-icon"><FaDollarSign /></div>
            <div className="highlight-content">
              <h3>1. Pricing Strategy for Businesses</h3>
              <p>Companies use elasticity to set optimal prices and predict revenue changes.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Elastic goods:</strong> Lower prices to increase total revenue</li>
                <li><strong>Inelastic goods:</strong> Higher prices to increase total revenue</li>
                <li><strong>Example:</strong> Luxury car manufacturers avoid large price increases</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaIndustry /></div>
            <div className="highlight-content">
              <h3>2. Tax Policy and Government Revenue</h3>
              <p>Governments consider elasticity when imposing taxes on goods.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Elastic goods:</strong> Tax increases may reduce revenue (cigarettes)</li>
                <li><strong>Inelastic goods:</strong> Tax increases can increase revenue (gasoline)</li>
                <li><strong>Policy impact:</strong> Understanding prevents unintended consequences</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaGavel /></div>
            <div className="highlight-content">
              <h3>3. Agricultural Price Support</h3>
              <p>Governments support farmers by guaranteeing minimum prices.</p>
              <p>Since agricultural products have inelastic demand, price supports effectively increase farmer income without causing large surpluses.</p>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaUniversity /></div>
            <div className="highlight-content">
              <h3>4. International Trade</h3>
              <p>Countries use elasticity concepts in trade negotiations.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Export strategy:</strong> Countries with inelastic demand for exports can charge higher prices</li>
                <li><strong>Import tariffs:</strong> Understanding elasticity helps predict trade impacts</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card gold mt-3">
            <div className="highlight-icon"><FaStore /></div>
            <div className="highlight-content">
              <h3>5. Marketing and Product Strategy</h3>
              <p>Businesses use elasticity to design marketing campaigns and product lines.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Product differentiation:</strong> Creates less elastic demand</li>
                <li><strong>Promotional pricing:</strong> Effective for elastic goods</li>
                <li><strong>Brand loyalty:</strong> Reduces price sensitivity</li>
              </ul>
            </div>
          </div>

          <div className="highlight-card cyan mt-3">
            <div className="highlight-icon"><FaChartBar /></div>
            <div className="highlight-content">
              <h3>6. Demand Forecasting</h3>
              <p>Elasticity helps predict how demand will respond to economic changes.</p>
              <ul className="bullet-list mt-2">
                <li><strong>Inflation predictions:</strong> How demand changes with rising prices</li>
                <li><strong>Recession planning:</strong> Which goods consumers cut back on first</li>
                <li><strong>Seasonal adjustments:</strong> Price sensitivity during different periods</li>
              </ul>
            </div>
          </div>


          {/* Interactive Demand Curve Simulator */}
          <div className="highlight-card gold mt-6 p-6 interactive-simulator">
            <div className="highlight-icon mb-4"><FaChartLine /></div>
            <h3 className="text-xl font-bold mb-4">📈 Interactive Demand Curve Simulator</h3>
            <p className="mb-6 text-gray-800">Drag the price slider to see how elastic vs inelastic demand curves respond differently. Watch Total Revenue areas change in real-time!</p>

            <div className="slider-container mb-6">
              <label className="flex items-center justify-center text-lg font-semibold mb-3">
                <FaRulerHorizontal className="mr-2" />
                Price Level: <span className="ml-2 font-bold text-blue-600">{pricePercent}% {isPriceIncrease ? '↑' : '↓'}</span>
              </label>
              <input
                type="range"
                min="10" max="90" step="1"
                value={priceLevel}
                onChange={(e) => setPriceLevel(Number(e.target.value))}
                className="w-full h-3 bg-linear-to-r from-red-400 to-green-400 rounded-lg appearance-none cursor-pointer hover:shadow-lg transition-all [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:shadow-lg"
              />
            </div>

            <div className="graphs-container grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Elastic Demand Graph */}
              <div className="graph-container">
                <h4 className="text-center font-bold mb-3 text-purple-600 flex items-center justify-center">
                  <FaCar className="mr-2" /> Elastic Demand (Luxury Goods)
                </h4>
                <div className="graph relative w-full h-64 bg-linear-to-b from-blue-50 to-indigo-100 rounded-xl p-4 border-2 border-purple-200 shadow-lg">
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    <line x1="30" y1="20" x2="30" y2="140" stroke="#333" strokeWidth="2"/>
                    <line x1="30" y1="140" x2="170" y2="140" stroke="#333" strokeWidth="2"/>
                    <text x="25" y="15" className="fill-gray-700 font-semibold text-sm">Price</text>
                    <text x="175" y="155" className="fill-gray-700 font-semibold text-sm">Quantity</text>
                    <line x1="30" y1="80" x2="170" y2="80" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4" strokeLinecap="round"/>
                    <text x="20" y="85" className="fill-blue-600 text-xs">P₀ ($50)</text>
                    <line x1="30" y1={160 - (priceLevel * 1.33)} x2="170" y2={160 - (priceLevel * 1.33)} stroke="#ef4444" strokeWidth="3" strokeLinecap="round"/>
                    <text x="20" y={165 - (priceLevel * 1.33)} className="fill-red-600 text-xs font-bold">P₁ (${priceLevel})</text>
                    <path d={`M 30,140 Q 100,90 170,${140 - elasticQ}`} fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="30" y="80" width="100" height="60" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1.5" rx="4"/>
                    <rect x="30" y={160 - (priceLevel * 1.33)} width={Math.max(0, elasticQ)} height={Math.abs((160 - (priceLevel * 1.33)) - 80)} fill="rgba(239,68,68,0.4)" stroke="#ef4444" strokeWidth="1.5" rx="4"/>
                    <text x={30 + Math.max(0, elasticQ)} y="152" className="fill-green-600 text-xs font-bold">Q₁: {Math.max(0, elasticQ).toFixed(0)}</text>
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <span className="font-bold text-lg text-purple-600">Revenue Δ: <span className={`px-3 py-1 rounded-full text-sm font-bold ${elasticRevenueChange > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{elasticRevenueChange}%</span></span>
                </div>
              </div>

              {/* Inelastic Demand Graph */}
              <div className="graph-container">
                <h4 className="text-center font-bold mb-3 text-emerald-600 flex items-center justify-center">
                  <FaGasPump className="mr-2" /> Inelastic Demand (Necessities)
                </h4>
                <div className="graph relative w-full h-64 bg-linear-to-b from-emerald-50 to-teal-100 rounded-xl p-4 border-2 border-emerald-200 shadow-lg">
                  <svg viewBox="0 0 200 160" className="w-full h-full">
                    <line x1="30" y1="20" x2="30" y2="140" stroke="#333" strokeWidth="2"/>
                    <line x1="30" y1="140" x2="170" y2="140" stroke="#333" strokeWidth="2"/>
                    <text x="25" y="15" className="fill-gray-700 font-semibold text-sm">Price</text>
                    <text x="175" y="155" className="fill-gray-700 font-semibold text-sm">Quantity</text>
                    <line x1="30" y1="80" x2="170" y2="80" stroke="#4f46e5" strokeWidth="2" strokeDasharray="4" strokeLinecap="round"/>
                    <text x="20" y="85" className="fill-blue-600 text-xs">P₀ ($50)</text>
                    <line x1="30" y1={160 - (priceLevel * 1.33)} x2="170" y2={160 - (priceLevel * 1.33)} stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
                    <text x="20" y={165 - (priceLevel * 1.33)} className="fill-emerald-600 text-xs font-bold">P₁ (${priceLevel})</text>
                    <path d={`M 30,140 Q 100,110 170,${140 - inelasticQ}`} fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="30" y="80" width="100" height="60" fill="rgba(59,130,246,0.3)" stroke="#3b82f6" strokeWidth="1.5" rx="4"/>
                    <rect x="30" y={160 - (priceLevel * 1.33)} width={Math.max(0, inelasticQ)} height={Math.abs((160 - (priceLevel * 1.33)) - 80)} fill="rgba(16,185,129,0.4)" stroke="#10b981" strokeWidth="1.5" rx="4"/>
                    <text x={30 + Math.max(0, inelasticQ)} y="152" className="fill-green-600 text-xs font-bold">Q₁: {Math.max(0, inelasticQ).toFixed(0)}</text>
                  </svg>
                </div>
                <div className="mt-3 text-center">
                  <span className="font-bold text-lg text-emerald-600">Revenue Δ: <span className={`px-3 py-1 rounded-full text-sm font-bold ${inelasticRevenueChange > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{inelasticRevenueChange}%</span></span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-linear-to-r from-purple-50 to-emerald-50 rounded-2xl border-2 border-dashed border-purple-200 text-center">
              <p className="text-base font-semibold mb-2"><strong>🔑 Key Learning:</strong></p>
              <p className="text-sm">{isPriceIncrease ? 'When prices RISE:' : 'When prices FALL:'} Elastic demand shows <span className="font-bold text-purple-600">BIG</span> quantity change → Revenue <span className={isPriceIncrease ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>{isPriceIncrease ? '↓' : '↑'}</span>. Inelastic shows <span className="font-bold text-emerald-600">SMALL</span> change → Revenue <span className={isPriceIncrease ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>{isPriceIncrease ? '↑' : '↓'}</span>.</p>
            </div>
          </div>

      <div className="highlight-card gold">
        <div className="highlight-icon"><FaLightbulb /></div>
        <div className="highlight-content">
          <h3>Practical Importance</h3>
          <p>Price elasticity is crucial for effective decision-making in business, government policy, and economic planning. Ignoring elasticity can lead to costly mistakes in pricing and policy implementation.</p>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;