import React, { useState } from 'react';
import { FaTruck, FaIndustry, FaClipboardList, FaCheckCircle, FaLightbulb, FaWarehouse, FaDollarSign, FaBoxOpen, FaUsers, FaArrowRight, FaChartLine } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css'; // Reusing Lesson 5 styles

const animationStyles = `
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes scaleIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
  @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
  @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
  
  .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
  .animate-fadeInLeft { animation: fadeInLeft 0.6s ease-out forwards; }
  .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
  .animate-bounce { animation: bounce 2s ease-in-out infinite; }
  .animate-pulse { animation: pulse 2s ease-in-out infinite; }
  
  .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .hover-lift:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
`;

const ConceptOfSupply = () => {
    const [factoryStep, setFactoryStep] = useState(0);

    const steps = [
        {
            title: "Step 1: Ability to Produce",
            desc: "You have a factory and raw materials. You produced 100 widgets and they are in your warehouse.",
            icon: <FaWarehouse style={{ fontSize: '3rem', color: '#ff4444' }} />,
            status: "I have 100 units in Stock!",
            missing: "But are you selling them? Or just holding them?",
            action: "Check Market Price",
            color: "#ff4444",
            explanation: "This is STOCK, not Supply. Stock is the total quantity available with the producer."
        },
        {
            title: "Step 2: Willingness to Sell",
            desc: "The market price is ₹50/unit. You calculate your costs and decide this is profitable.",
            icon: <FaDollarSign style={{ fontSize: '3rem', color: '#ffd700' }} />,
            status: "Price is good! Each unit gives profit.",
            missing: "You are willing, but have you offered them for sale?",
            action: "Offer for Sale",
            color: "#ffd700",
            explanation: "Willingness depends on price. If price was ₹10, you might not be willing to sell!"
        },
        {
            title: "Step 3: Actual Supply",
            desc: "You list 80 widgets for sale on the market at ₹50 each. (You keep 20 in stock for later).",
            icon: <FaCheckCircle style={{ fontSize: '3rem', color: '#00ff00' }} />,
            status: "80 Units Listed for Sale!",
            missing: "Perfect! Supply created!",
            action: "Start Over",
            color: "#00ff00",
            explanation: "Supply is the portion of Stock that is ACTUALLY offered for sale at a specific price."
        }
    ];

    return (
        <div className="lesson-section">
            <style>{animationStyles}</style>

            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Part 1 - Section 1</span>
                <h2 className="section-title-lesson animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Concept of Supply</h2>
                <p className="section-subtitle-lesson animate-fadeInUp" style={{ animationDelay: '0.2s' }}>From Warehouse to Market: Understanding Producer Behaviour</p>
            </div>

            {/* --- DEFINITION CARD --- */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.3s' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaTruck className="animate-pulse" /> Definition of Supply
                    </h3>

                    <div className="formula-box-animated">
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#fff', fontWeight: '600' }}>
                            "Supply is the <span style={{ color: '#ffd700' }}>quantity of a commodity</span> that a producer is
                            <span style={{ color: '#00ff00' }}> willing</span> and
                            <span style={{ color: '#00ffff' }}> able</span> to offer for sale at
                            <span style={{ color: '#ff4444' }}> a given price</span> during a
                            <span style={{ color: '#ffd700' }}>given period of time</span>."
                        </p>
                    </div>

                    <div className="note-box" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <strong>Stock vs Supply:</strong> Stock is total potential output. Supply is what is actually offered for sale.
                        <em> (Supply ≤ Stock)</em>
                    </div>
                </div>
            </div>

            {/* --- INTERACTIVE JOURNEY --- */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.5s' }}>
                <div className="card-content">
                    <h3 className="highlight-gold animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaIndustry className="animate-bounce" /> The Production Decision
                    </h3>

                    <div className="animate-scaleIn" style={{
                        background: 'rgba(0,0,0,0.4)',
                        padding: '2rem',
                        borderRadius: '16px',
                        border: `3px solid ${steps[factoryStep].color}`,
                        marginTop: '1.5rem',
                        transition: 'all 0.3s ease',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{steps[factoryStep].icon}</div>
                        <h3 style={{ color: steps[factoryStep].color, marginBottom: '1rem' }}>{steps[factoryStep].title}</h3>
                        <p style={{ fontSize: '1.2rem', color: '#fff' }}>"{steps[factoryStep].status}"</p>
                        <p style={{ color: 'rgba(255,255,255,0.7)', margin: '1rem 0' }}>{steps[factoryStep].desc}</p>

                        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', margin: '1rem 0' }}>
                            <p style={{ color: '#ffd700' }}>💡 {steps[factoryStep].explanation}</p>
                        </div>

                        <button
                            onClick={() => setFactoryStep(prev => (prev + 1) % 3)}
                            style={{
                                background: steps[factoryStep].color,
                                border: 'none',
                                padding: '10px 30px',
                                borderRadius: '20px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                color: '#000',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            {steps[factoryStep].action} <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* --- INDIVIDUAL VS MARKET --- */}
            <div className="content-card animate-fadeInUp hover-lift" style={{ animationDelay: '0.7s' }}>
                <div className="card-content">
                    <h3 className="highlight-green animate-fadeInLeft" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaUsers /> Individual vs Market Supply
                    </h3>

                    <div style={{ margin: '1.5rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="classification-card green-theme">
                            <h4 style={{ color: '#00ff00', marginBottom: '1rem' }}>Individual Supply</h4>
                            <p>Quantity supplied by a <strong>single firm</strong> at various prices.</p>
                            <div className="classification-examples">
                                <ul><li><FaBoxOpen /> Firm A sells 10 units at ₹5</li></ul>
                            </div>
                        </div>
                        <div className="classification-card red-theme" style={{ borderColor: '#ffd700' }}>
                            <h4 style={{ color: '#ffd700', marginBottom: '1rem' }}>Market Supply</h4>
                            <p>Sum of quantities supplied by <strong>all firms</strong> in the market.</p>
                            <div className="classification-examples">
                                <ul><li><FaChartLine /> Firm A (10) + Firm B (15) = Market (25)</li></ul>
                            </div>
                        </div>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                            <thead>
                                <tr style={{ background: 'rgba(255,215,0,0.2)', color: '#ffd700' }}>
                                    <th style={{ padding: '1rem' }}>Price (₹)</th>
                                    <th>Firm A</th>
                                    <th>Firm B</th>
                                    <th>Market Supply (A+B)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { p: 10, a: 5, b: 10, m: 15 },
                                    { p: 20, a: 10, b: 20, m: 30 },
                                    { p: 30, a: 20, b: 35, m: 55 }
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                        <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row.p}</td>
                                        <td>{row.a}</td>
                                        <td>{row.b}</td>
                                        <td style={{ color: '#00ff00', fontWeight: 'bold' }}>{row.m}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1rem', color: '#aaa', fontSize: '0.9rem' }}>
                        *Notice: As Price increases, Supply increases (Direct Relationship).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConceptOfSupply;
