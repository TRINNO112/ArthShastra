import React from 'react';
import { FaIndustry, FaCogs, FaMoneyBillWave, FaBalanceScale, FaLightbulb, FaTruck, FaArrowUp, FaArrowDown, FaLandmark, FaBoxOpen, FaCrosshairs, FaRandom, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const DeterminantsOfSupply = () => {
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
                            Supply of X (Sx) depends on Price (Px), Related Goods (Pr), Inputs (Pi), Technology (T), Govt Policy (G), Future Price (Pf), and Goals (Gp).
                        </div>
                    </div>
                </div>
            </div>

            {/* EXPANDED REASONS GRID */}
            <h3 style={{ margin: '40px 0 20px', textAlign: 'center', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px' }}>Detailed Analysis</h3>

            <div className="reasons-list-vertical">

                {/* 1. Own Price */}
                <div className="detailed-card gold animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge gold"><FaMoneyBillWave /></div>
                        <h3>1. Own Price of the Commodity (Px)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> The price of the good itself is the most important determinant. It has a <strong>Positive Relationship</strong> with quantity supplied.</p>

                        <div className="logic-chain" style={{ background: 'rgba(255, 215, 0, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '3px solid #ffd700' }}>
                            <strong><FaLightbulb /> The Logic Chain:</strong>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px', color: '#ffd700' }}>
                                <span>Price Rises (Px <FaArrowUp />)</span>
                                <FaArrowRight />
                                <span>Profit Margin per Unit Rises</span>
                                <FaArrowRight />
                                <span>Incentive to Produce More</span>
                                <FaArrowRight />
                                <span>Quantity Supplied Rises (Qs <FaArrowUp />)</span>
                            </div>
                        </div>

                        <div className="impact-tag">
                            <span className="tag-movement">Impact: Movement along the Curve (Extension/Contraction)</span>
                        </div>
                    </div>
                </div>

                {/* 2. Price of Inputs */}
                <div className="detailed-card red animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge red"><FaBoxOpen /></div>
                        <h3>2. Price of Inputs (Pi)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> Also called "Cost of Factors of Production" (Land, Labor, Capital). There is an <strong>Inverse Relationship</strong>.</p>

                        <div className="example-box">
                            <strong><FaTruck /> Real-World Example:</strong>
                            Consider a Textile Mill. The price of <strong>Cotton (Raw Material)</strong> rises significantly.
                        </div>

                        <div className="logic-chain" style={{ background: 'rgba(255, 68, 68, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '3px solid #ff4444' }}>
                            <strong><FaLightbulb /> The Logic Chain:</strong>
                            <div style={{ marginTop: '10px', color: '#ffcccb' }}>
                                1. Price of Input (Cotton) Rises <FaArrowUp /> <br />
                                2. Cost of Production (COP) Rises <FaArrowUp /> <br />
                                3. Profit Margin (Price - Cost) Falls <FaArrowDown /> <br />
                                4. Producer reduces output to minimize risk/loss. <br />
                                5. <strong>Supply Curve Shifts LEFT (Decrease)</strong>
                            </div>
                        </div>

                        <div className="impact-tag">
                            <span className="tag-shift left">Impact: Shift (Decrease/Increase)</span>
                        </div>
                    </div>
                </div>

                {/* 3. Technology */}
                <div className="detailed-card cyan animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge cyan"><FaCogs /></div>
                        <h3>3. State of Technology (T)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> Technology determines the efficiency of converting inputs into outputs. Technological progress reduces cost.</p>

                        <div className="comparison-grid">
                            <div className="comparison-item positive">
                                <strong>Upgrade (Innovation):</strong>
                                <p>Introduction of AI/Automation → Faster Production + Lower Wastage → Cost Falls → <strong>Supply Increases (Right Shift)</strong>.</p>
                            </div>
                            <div className="comparison-item negative">
                                <strong>Degradation:</strong>
                                <p>breakdown of machinery or using obsolete tech → High Cost → <strong>Supply Decreases</strong>.</p>
                            </div>
                        </div>

                        <div className="impact-tag">
                            <span className="tag-shift right">Impact: Shift due to Tech</span>
                        </div>
                    </div>
                </div>

                {/* 4. Govt Policy */}
                <div className="detailed-card green animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge green"><FaLandmark /></div>
                        <h3>4. Government Policy (G)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> Fiscal policy (Taxation & Subsidies) alters the effective cost for producers.</p>

                        <div className="logic-chain" style={{ background: 'rgba(0, 255, 0, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '3px solid #00ff00' }}>
                            <strong><FaLightbulb /> Mechanism: Impact of GST (Tax)</strong>
                            <div style={{ marginTop: '10px', color: '#ccffcc' }}>
                                Govt increases GST on Cars <FaArrowUp /> <br />
                                → Production Cost Includes Tax, so Cost Rises <FaArrowUp /> <br />
                                → Profitability Falls <FaArrowDown /> <br />
                                → <strong>Supply Decreases (Left Shift)</strong>
                            </div>
                        </div>

                        <div className="logic-chain" style={{ background: 'rgba(0, 255, 255, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '3px solid #00ffff' }}>
                            <strong><FaLightbulb /> Mechanism: Impact of Subsidy</strong>
                            <div style={{ marginTop: '10px', color: '#e0ffff' }}>
                                Govt gives Subsidy on Solar Panels <FaArrowDown /> <br />
                                → Effective Cost for producer Falls <FaArrowDown /> <br />
                                → Profitability Rises <FaArrowUp /> <br />
                                → <strong>Supply Increases (Right Shift)</strong>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Related Goods */}
                <div className="detailed-card purple animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge purple"><FaRandom /></div>
                        <h3>5. Price of Related Goods (Pr)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> Firms can use their resources (Land/Labor) to produce alternative goods. They choose the most profitable one.</p>

                        <div className="example-box">
                            <strong><FaBalanceScale /> The "Tea vs Coffee" Dilemma:</strong>
                            A farmer has 10 acres of land. He can grow Tea or Coffee.
                            <br /><br />
                            Suppose <strong>Price of Coffee Rises</strong> in the market. <br />
                            → Growing Coffee becomes more profitable. <br />
                            → Farmer shifts land from Tea to Coffee. <br />
                            → <strong>Supply of Tea Falls</strong> (even though Tea price is constant).
                        </div>

                        <div className="impact-tag">
                            <span className="tag-shift left">Impact: Inverse Relation with Substitute's Price</span>
                        </div>
                    </div>
                </div>

                {/* 6. Goals of Firm */}
                <div className="detailed-card gold animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge gold"><FaCrosshairs /></div>
                        <h3>6. Goal of the Firm (Gp)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> Not all firms want just profit. Objectives define supply behavior.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '15px' }}>
                            <div style={{ background: 'rgba(255,215,0,0.1)', padding: '10px', borderRadius: '8px', border: '1px solid #ffd700' }}>
                                <h4 style={{ color: '#ffd700', fontSize: '1rem' }}>Profit Max</h4>
                                <p style={{ fontSize: '0.9rem', color: '#ddd' }}>Will only supply more if Price is high. follows Law of Supply.</p>
                            </div>
                            <div style={{ background: 'rgba(0,255,255,0.1)', padding: '10px', borderRadius: '8px', border: '1px solid #00ffff' }}>
                                <h4 style={{ color: '#00ffff', fontSize: '1rem' }}>Sales / Welfare</h4>
                                <p style={{ fontSize: '0.9rem', color: '#ddd' }}>Will supply more even at lower prices (e.g., Jio initially, or Govt Ration Shops).</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 7. Future Expectations */}
                <div className="detailed-card red animate-fadeInUp">
                    <div className="card-header-row">
                        <div className="icon-badge red"><FaCalendarAlt /></div>
                        <h3>7. Future Expectations (Pf)</h3>
                    </div>
                    <div className="card-body-row">
                        <p><strong>Concept:</strong> Sellers speculate on future price movements.</p>

                        <div className="logic-chain" style={{ background: 'rgba(255, 68, 68, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '3px solid #ff4444' }}>
                            <strong><FaLightbulb /> Bullish Expectation (Price Will Rise):</strong>
                            <div style={{ marginTop: '10px', color: '#ffcccb' }}>
                                Think: "Why sell cheap today when I can sell dear tomorrow?" <br />
                                → <strong>Action:</strong> Hoard/Stockpile goods. <br />
                                → <strong>Current Supply Decreases (Left Shift)</strong>.
                            </div>
                        </div>

                        <div className="logic-chain" style={{ background: 'rgba(0, 255, 0, 0.1)', padding: '15px', borderRadius: '8px', margin: '15px 0', borderLeft: '3px solid #00ff00' }}>
                            <strong><FaLightbulb /> Bearish Expectation (Price Will Fall):</strong>
                            <div style={{ marginTop: '10px', color: '#ccffcc' }}>
                                Think: "Better sell now before price crashes!" <br />
                                → <strong>Action:</strong> Clear stock immediately. <br />
                                → <strong>Current Supply Increases (Right Shift)</strong>.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* QUICK SUMMARY TABLE */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '40px' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan" style={{ textAlign: 'center', marginBottom: '20px' }}>Quick Summary Reference</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#ddd' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.1)', color: '#00ffff' }}>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Factor</th>
                                <th style={{ padding: '10px', textAlign: 'left' }}>Change</th>
                                <th style={{ padding: '10px', textAlign: 'right' }}>Effect on Supply</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px' }}>Own Price (Px)</td>
                                <td style={{ padding: '10px' }}>Increase <FaArrowUp /></td>
                                <td style={{ padding: '10px', textAlign: 'right', color: '#00ff00' }}>Extension (Q rises)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px' }}>Input Price (Pi)</td>
                                <td style={{ padding: '10px' }}>Increase <FaArrowUp /></td>
                                <td style={{ padding: '10px', textAlign: 'right', color: '#ff4444' }}>Decrease (Left Shift)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px' }}>Technology (T)</td>
                                <td style={{ padding: '10px' }}>Improvement</td>
                                <td style={{ padding: '10px', textAlign: 'right', color: '#00ff00' }}>Increase (Right Shift)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px' }}>Tax (G)</td>
                                <td style={{ padding: '10px' }}>Increase <FaArrowUp /></td>
                                <td style={{ padding: '10px', textAlign: 'right', color: '#ff4444' }}>Decrease (Left Shift)</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                <td style={{ padding: '10px' }}>Subsidy (G)</td>
                                <td style={{ padding: '10px' }}>Increase <FaArrowUp /></td>
                                <td style={{ padding: '10px', textAlign: 'right', color: '#00ff00' }}>Increase (Right Shift)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default DeterminantsOfSupply;
