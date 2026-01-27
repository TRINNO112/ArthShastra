import React, { useState } from 'react';
import { FaIndustry, FaCogs, FaMoneyBillWave, FaBalanceScale, FaLightbulb, FaTruck, FaArrowUp, FaArrowDown, FaLandmark, FaBoxOpen, FaCrosshairs, FaRandom, FaCalendarAlt } from 'react-icons/fa';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../../Lesson5/components/lesson5.css';

const INPUT_PRICE_DATA = [
    { priceInput: 10, supply: 60 },
    { priceInput: 20, supply: 50 },
    { priceInput: 30, supply: 40 },
    { priceInput: 40, supply: 30 },
    { priceInput: 50, supply: 20 },
];

const DeterminantsOfSupply = () => {
    const [inputPrice, setInputPrice] = useState(30);
    const [techLevel, setTechLevel] = useState('standard');

    const calculateSupplyFromInput = (cost) => Math.max(0, 70 - cost);

    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 1 - Section 2</span>
                <h2 className="section-title-lesson animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Determinants of Supply</h2>
                <p className="section-subtitle-lesson animate-fadeInUp" style={{ animationDelay: '0.2s' }}>The 7 Key Factors Influencing Market Supply</p>
            </div>

            {/* --- FUNCTION --- */}
            <div className="content-card animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                <div className="card-content">
                    <h3 className="highlight-gold"><FaIndustry /> The Supply Function</h3>
                    <div className="formula-box-animated">
                        <div className="formula-main" style={{ fontSize: '1.8rem' }}>Sx = f(Px, Pr, Pi, T, G, Pf, Gp)</div>
                        <div className="formula-explanation">
                            Supply depends on Own Price (Px), Related Goods (Pr), Input Prices (Pi), Technology (T), Govt Policy (G), Future Price (Pf), and Goals (Gp).
                        </div>
                    </div>
                </div>
            </div>

            <div className="reasons-grid-enhanced">
                {/* 1. Own Price */}
                <div className="reason-card-interactive gold">
                    <div className="card-icon"><FaMoneyBillWave /></div>
                    <h4>1. Own Price (Px)</h4>
                    <p>Positively related. Higher Price → Higher Profit → More Supply.</p>
                </div>

                {/* 2. Price of Inputs */}
                <div className="reason-card-interactive red">
                    <div className="card-icon"><FaBoxOpen /></div>
                    <h4>2. Price of Inputs (Pi)</h4>
                    <p>Negatively related. Costly inputs → Lower Profit → Less Supply.</p>
                </div>

                {/* 3. Technology */}
                <div className="reason-card-interactive cyan">
                    <div className="card-icon"><FaCogs /></div>
                    <h4>3. Technology (T)</h4>
                    <p>Advanced Tech → Low Cost → More Supply.</p>
                </div>

                {/* 4. Govt Policy */}
                <div className="reason-card-interactive green">
                    <div className="card-icon"><FaLandmark /></div>
                    <h4>4. Govt Policy (G)</h4>
                    <p>Taxes reduce supply (Left Shift). Subsidies increase supply (Right Shift).</p>
                </div>

                {/* 5. Related Goods */}
                <div className="reason-card-interactive purple">
                    <div className="card-icon"><FaRandom /></div>
                    <h4>5. Price of Related Goods (Pr)</h4>
                    <p>If price of Substitute Good (e.g. Wheat) rises, farmer shifts land to Wheat. Supply of Rice falls.</p>
                </div>

                {/* 6. Goals of Firm */}
                <div className="reason-card-interactive gold">
                    <div className="card-icon"><FaCrosshairs /></div>
                    <h4>6. Goal of the Firm (Gp)</h4>
                    <p>Profit Max? Low Supply at low price. Sales Max? High Supply even at low price.</p>
                </div>

                {/* 7. Future Expectations */}
                <div className="reason-card-interactive red">
                    <div className="card-icon"><FaCalendarAlt /></div>
                    <h4>7. Future Expectations (Pf)</h4>
                    <p>Expect price rise soon? Hoard stock now (Supply ↓). Sell later.</p>
                </div>
            </div>


            {/* --- INTERACTIVE DEMO: INPUT PRICE --- */}
            <div className="content-card animate-fadeInUp" style={{ animationDelay: '0.5s', marginTop: '2rem' }}>
                <div className="card-content">
                    <h3 className="highlight-red"><FaBalanceScale /> Deep Dive: Input Prices</h3>
                    <p>Let's see why this relationship is <strong>INVERSE</strong>. When costs go up, supply goes down.</p>

                    <div className="interactive-slider-section">
                        <div className="slider-header">
                            <h5>🎛️ Interactive Demo: Raw Material Cost</h5>
                        </div>
                        <div className="slider-control">
                            <label>Cost: ₹{inputPrice}</label>
                            <input
                                type="range" min="10" max="50" value={inputPrice}
                                onChange={(e) => setInputPrice(Number(e.target.value))}
                                className="price-slider red"
                            />
                        </div>

                        <div className="demand-display">
                            <div className="demand-metric">
                                <FaBoxOpen size={32} color="#ff4444" />
                                <div>
                                    <div className="metric-label">Supply Output</div>
                                    <div className="metric-value red">{calculateSupplyFromInput(inputPrice)} units</div>
                                </div>
                            </div>
                            <div className="relationship-indicator">
                                {inputPrice > 30 ? (
                                    <div className="indicator negative"><FaArrowDown /> Cost Rise → Profit Drop → Supply Falls</div>
                                ) : inputPrice < 30 ? (
                                    <div className="indicator positive"><FaArrowUp /> Cost Fall → Profit Rise → Supply Rises</div>
                                ) : (
                                    <div className="indicator neutral">Base Level</div>
                                )}
                            </div>
                        </div>

                        <div className="graph-container-small" style={{ width: '100%', height: '250px', marginTop: '1.5rem', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '10px' }}>
                            <h5 style={{ textAlign: 'center', marginBottom: '10px' }}>Supply vs Input Cost (Inverse)</h5>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={INPUT_PRICE_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="priceInput" stroke="#fff" label={{ value: 'Input Price (Cost)', position: 'insideBottom', offset: -5, fill: '#aaa' }} />
                                    <YAxis stroke="#fff" label={{ value: 'Supply Qty', angle: -90, position: 'insideLeft', fill: '#aaa' }} />
                                    <Tooltip contentStyle={{ backgroundColor: '#333' }} />
                                    <Line type="monotone" dataKey="supply" stroke="#ff4444" strokeWidth={3} dot={{ r: 4 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TECHNOLOGY SECTION --- */}
            <div className="content-card animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan"><FaCogs /> Deep Dive: Technology</h3>

                    <div className="interactive-toggle-container">
                        <button className={`toggle-btn ${techLevel === 'standard' ? 'active-gold' : ''}`} onClick={() => setTechLevel('standard')}>
                            <FaIndustry /> Standard Tech
                        </button>
                        <button className={`toggle-btn ${techLevel === 'advanced' ? 'active-cyan' : ''}`} onClick={() => setTechLevel('advanced')}>
                            <FaCogs /> Advanced Automation
                        </button>
                    </div>

                    <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', border: techLevel === 'advanced' ? '2px solid #00ffff' : '1px solid #555' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem', transition: 'all 0.3s' }}>
                            {techLevel === 'advanced' ? '🚀' : '🚜'}
                        </div>
                        <h4>{techLevel === 'advanced' ? 'Supply Shift: RIGHT (Increase)' : 'Base Supply Level'}</h4>
                        <p style={{ color: techLevel === 'advanced' ? '#00ffff' : '#aaa' }}>
                            {techLevel === 'advanced'
                                ? "Innovation reduces Per-Unit Cost. Profit margin increases. Producers supply MORE at the same price."
                                : "Traditional methods keep costs standard."}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeterminantsOfSupply;
