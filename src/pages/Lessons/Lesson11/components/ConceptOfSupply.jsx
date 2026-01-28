import React, { useState } from 'react';
import { FaTruck, FaIndustry, FaClipboardList, FaCheckCircle, FaLightbulb, FaWarehouse, FaDollarSign, FaBoxOpen, FaUsers, FaArrowRight, FaChartLine, FaCogs } from 'react-icons/fa';
import '../lesson11.css'; // Factory Theme

const ConceptOfSupply = () => {
    const [factoryStep, setFactoryStep] = useState(0);

    const steps = [
        {
            title: "STAGE 1: WAREHOUSE (STOCK)",
            desc: "Raw inventory sitting idle. Production complete but not necessarily for sale.",
            icon: <FaWarehouse />,
            status: "STOCKPILE LEVEL: 100 UNITS",
            alert: "Not yet Supply. Just Potential.",
            action: "Analyze Market Prices",
            color: "#ff3b30"
        },
        {
            title: "STAGE 2: MANAGER'S OFFICE (WILLINGNESS)",
            desc: "Management reviews profitability. Cost Analysis vs Market Price.",
            icon: <FaClipboardList />,
            status: "MARKET PRICE: ₹50/UNIT (PROFITABLE)",
            alert: "Decision: Greenlight for Sale.",
            action: "Dispatch to Dock",
            color: "#ffcc00"
        },
        {
            title: "STAGE 3: LOADING DOCK (SUPPLY)",
            desc: "Goods moved to shipping. Actually offered to buyers at current price.",
            icon: <FaTruck />,
            status: "LOADING: 80 UNITS",
            alert: "Supply Created! (20 Units held back).",
            action: "Reset Line",
            color: "#34c759"
        }
    ];

    return (
        <div className="lesson-section">

            {/* FACTORY HEADER */}
            <div className="factory-header animate-fadeInUp">
                <h2 className="factory-title"><FaIndustry style={{ marginRight: '15px' }} /> SUPPLY CHAIN COMMAND</h2>
                <div className="hazard-stripe"></div>
                <p className="factory-subtitle">MODULE 11.1: MECHANICS OF SUPPLY</p>
            </div>

            {/* BLUEPRINT CARD: DEFINITION */}
            <div className="blueprint-card animate-fadeInUp">
                <h3 className="blueprint-title"><FaCogs /> SYSTEM SPECIFICATION: SUPPLY</h3>
                <div style={{ padding: '20px', border: '1px dashed rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.3)' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        "Supply is the <strong style={{ color: 'var(--factory-yellow)' }}>QUANTITY</strong> of a commodity that a producer is
                        <strong style={{ color: 'var(--factory-success)' }}> WILLING</strong> and
                        <strong style={{ color: 'var(--factory-blue)' }}> ABLE</strong> to offer for sale at
                        <strong style={{ color: 'var(--factory-danger)' }}> A GIVEN PRICE</strong> during a
                        specific period."
                    </p>
                </div>
                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#aaa' }}>
                    <FaLightbulb color="yellow" /> <span>NOTE: Supply != Stock. Supply is the flow out of Stock.</span>
                </div>
            </div>

            {/* CONVEYOR BELT INTERACTIVE */}
            <div className="content-card animate-fadeInUp" style={{ background: '#222', border: '1px solid #444', padding: '30px' }}>
                <h3 className="highlight-gold" style={{ fontFamily: 'Teko', fontSize: '2rem' }}><FaIndustry /> PRODUCTION LINE VISUALIZER</h3>

                <div className="conveyor-belt">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`factory-station ${factoryStep === idx ? 'active' : ''}`}
                            onClick={() => setFactoryStep(idx)}
                            style={{ opacity: factoryStep === idx ? 1 : 0.5 }}
                        >
                            <div className="station-icon" style={{ color: factoryStep === idx ? step.color : '#555' }}>
                                {step.icon}
                            </div>
                            <h4 style={{ fontFamily: 'Share Tech Mono', fontSize: '1rem', color: '#fff' }}>{step.title}</h4>
                        </div>
                    ))}
                </div>

                {/* ACTIVE STATION DETAIL */}
                <div className="control-module animate-scaleIn" style={{ borderLeft: `4px solid ${steps[factoryStep].color}` }}>
                    <div className="module-header">
                        <span className="module-title">{steps[factoryStep].title}</span>
                        <div className={`led-indicator ${factoryStep >= 0 ? 'on' : ''}`} style={{ background: steps[factoryStep].color, boxShadow: `0 0 10px ${steps[factoryStep].color}` }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div className="switch-container">
                            <span style={{ color: '#aaa', fontFamily: 'monospace' }}>STATUS LOG:</span>
                            <span style={{ color: steps[factoryStep].color, fontWeight: 'bold', fontFamily: 'monospace' }}>{steps[factoryStep].status}</span>
                        </div>
                        <p style={{ color: '#ccc', fontSize: '1.1rem' }}>{steps[factoryStep].desc}</p>

                        <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px', borderLeft: '2px solid #555', fontStyle: 'italic', color: '#888' }}>
                            {steps[factoryStep].alert}
                        </div>

                        <button
                            onClick={() => setFactoryStep(prev => (prev + 1) % 3)}
                            style={{
                                marginTop: '10px',
                                background: steps[factoryStep].color,
                                border: 'none',
                                padding: '12px',
                                fontFamily: 'Teko',
                                fontSize: '1.2rem',
                                letterSpacing: '1px',
                                cursor: 'pointer',
                                color: '#000',
                                fontWeight: 'bold',
                                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
                            }}
                        >
                            {steps[factoryStep].action} <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* INDIVIDUAL VS MARKET - BLUEPRINT TABLE */}
            <div className="blueprint-card animate-fadeInUp" style={{ marginTop: '40px' }}>
                <h3 className="blueprint-title"><FaUsers /> DATA MATRIX: INDIVIDUAL VS MARKET</h3>

                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', fontFamily: 'Share Tech Mono' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid var(--factory-blue)', color: 'var(--factory-blue)' }}>
                                <th style={{ padding: '15px' }}>PRICE (Px)</th>
                                <th>FIRM A OUTPUT</th>
                                <th>FIRM B OUTPUT</th>
                                <th style={{ color: 'var(--factory-yellow)' }}>MARKET TOTAL (Σ)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { p: "₹10", a: "5", b: "10", m: "15", active: false },
                                { p: "₹20", a: "10", b: "20", m: "30", active: true },
                                { p: "₹30", a: "20", b: "35", m: "55", active: false }
                            ].map((row, i) => (
                                <tr key={i} style={{
                                    background: row.active ? 'rgba(255, 204, 0, 0.1)' : 'transparent',
                                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                    <td style={{ padding: '15px', fontWeight: 'bold' }}>{row.p}</td>
                                    <td>{row.a}</td>
                                    <td>{row.b}</td>
                                    <td style={{ color: 'var(--factory-yellow)', fontWeight: 'bold' }}>{row.m}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ textAlign: 'right', marginTop: '10px', fontSize: '0.8rem', color: '#666', fontFamily: 'monospace' }}>
                    // LOGIC: SUPPLY_FUN(Px) -{'>'} POSITIVE_CORRELATION
                </p>
            </div>

        </div>
    );
};

export default ConceptOfSupply;
