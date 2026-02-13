import React, { useState } from 'react';
import {
    FaTable, FaDatabase, FaChartBar, FaFileSignature, FaArrowRight,
    FaUndo, FaChartPie, FaListUl, FaSearch, FaChalkboardTeacher,
    FaLightbulb, FaBoxOpen, FaProjectDiagram
} from 'react-icons/fa';

/**
 * CaseStudy Component - The Teacher's Edition
 * Purpose: Demonstrates the full statistical workflow with instructional guidance.
 */
const CaseStudy = () => {
    const [step, setStep] = useState(1);
    const [chartType, setChartType] = useState('bar');

    // Expanded Multi-Variable Dataset (20 Responses)
    const rawData = [
        { name: "Aman", exp: 450, type: "Oily" }, { name: "Priya", exp: 1200, type: "Healthy" },
        { name: "Rahul", exp: 800, type: "Oily" }, { name: "Sanya", exp: 1500, type: "Gourmet" },
        { name: "Vikram", exp: 300, type: "Snack" }, { name: "Neha", exp: 950, type: "Healthy" },
        { name: "Arjun", exp: 1100, type: "Oily" }, { name: "Isha", exp: 600, type: "Snack" },
        { name: "Karan", exp: 1350, type: "Gourmet" }, { name: "Maya", exp: 400, type: "Healthy" },
        { name: "Rohan", exp: 850, type: "Oily" }, { name: "Ananya", exp: 1450, type: "Gourmet" },
        { name: "Sameer", exp: 550, type: "Snack" }, { name: "Tanvi", exp: 900, type: "Healthy" },
        { name: "Kabir", exp: 1250, type: "Oily" }, { name: "Zoya", exp: 700, type: "Snack" },
        { name: "Aditya", exp: 1150, type: "Healthy" }, { name: "Simran", exp: 350, type: "Oily" },
        { name: "Yash", exp: 1050, type: "Gourmet" }, { name: "Riya", exp: 500, type: "Snack" }
    ];

    const organizedData = [
        { range: "0 - 500", count: 4, percent: 20 },
        { range: "501 - 1000", count: 8, percent: 40 },
        { range: "1001 - 1500", count: 8, percent: 40 }
    ];

    // Theme Colors (High Contrast)
    const primaryColor = "#2563eb"; // Deep Cobalt Blue
    const accentColor = "#059669";  // Deep Forest Green
    const warningColor = "#d97706"; // Amber

    return (
        <div className="case-study-container" style={{
            animation: 'fadeIn 0.5s ease-out',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            overflow: 'hidden', // Containment fix
            position: 'relative'
        }}>

            {/* Header Section */}
            <div className="stats-card" style={{
                marginBottom: '30px',
                borderLeft: `8px solid ${primaryColor}`,
                background: 'rgba(37, 99, 235, 0.05)'
            }}>
                <h2 className="stats-card-heading" style={{ color: primaryColor }}>
                    <FaDatabase /> Case Study: The Campus Food Economy
                </h2>
                <p style={{ opacity: 0.8, fontSize: '1.1rem' }}>A Step-by-Step Simulation of a real Statistical Project.</p>
            </div>

            {/* Stepper Navigation */}
            <div className="case-stepper" style={{
                display: 'flex',
                justifyContent: 'space-around',
                marginBottom: '40px',
                background: 'rgba(255,255,255,0.03)',
                padding: '20px',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.05)',
                overflowX: 'auto',
                gap: '10px'
            }}>
                {[
                    { id: 1, label: "Raw Data", icon: <FaListUl /> },
                    { id: 2, label: "Classification", icon: <FaTable /> },
                    { id: 3, label: "Visualization", icon: <FaChartBar /> },
                    { id: 4, label: "Policy", icon: <FaFileSignature /> }
                ].map((s) => (
                    <div
                        key={s.id}
                        onClick={() => setStep(s.id)}
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '5px',
                            color: step >= s.id ? primaryColor : 'rgba(255,255,255,0.2)',
                            transition: '0.3s',
                            opacity: step === s.id ? 1 : 0.6
                        }}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: step >= s.id ? primaryColor : 'rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '1.2rem',
                            boxShadow: step === s.id ? `0 0 15px ${primaryColor}40` : 'none'
                        }}>{s.icon}</div>
                        <span style={{ fontSize: '0.8rem', fontWeight: step === s.id ? 'bold' : 'normal' }}>{s.label}</span>
                    </div>
                ))}
            </div>

            {/* Teacher's Guidance / Professor's Note */}
            <div style={{
                background: 'rgba(245, 158, 11, 0.05)',
                border: '1px dashed rgba(245, 158, 11, 0.3)',
                padding: '20px',
                borderRadius: '15px',
                marginBottom: '30px',
                display: 'flex',
                gap: '15px',
                alignItems: 'flex-start'
            }}>
                <div style={{ color: warningColor, fontSize: '1.5rem', marginTop: '5px' }}><FaChalkboardTeacher /></div>
                <div>
                    <h4 style={{ color: warningColor, margin: '0 0 5px 0' }}>Teacher's Note: Phase {step}</h4>
                    <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.9, lineHeight: '1.5' }}>
                        {step === 1 && "Look at this mess! We have 20 surveys, but we can't tell the 'General Trend' just by looking. This is 'Raw Data'—it lacks structure and meaning."}
                        {step === 2 && "Magic happens here! We are grouping individual responses into 'Classes'. Notice how the chaos of 20 names turns into 3 simple rows of logic."}
                        {step === 3 && "Now we 'paint' the numbers. Humans understand shapes better than digits. We'll use multiple chart types to see this data from different angles."}
                        {step === 4 && "The Final Goal: We don't do math just for fun. We do it to fix problems. Based on our 'Mean' and 'Mode', we will propose a real school policy."}
                    </p>
                </div>
            </div>

            {/* Content Area */}
            <div className="case-content" style={{ minHeight: '500px', width: '100%' }}>
                {step === 1 && (
                    <div className="step-1" style={{ animation: 'slideInRight 0.5s' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ color: primaryColor, marginBottom: '5px' }}>Step 1: The "Messy" Logbook</h3>
                            <p style={{ opacity: 0.7 }}>Primary data collected via Direct Personal Investigation.</p>
                        </div>

                        {/* THE FIX: Fixed Width + Centered Container for Raw Data */}
                        <div style={{
                            maxHeight: '400px',
                            overflowY: 'auto',
                            padding: '10px',
                            background: 'rgba(0,0,0,0.3)',
                            borderRadius: '15px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                            gap: '15px',
                        }} className="stats-scrollbar">
                            {rawData.map((d, i) => (
                                <div key={i} style={{
                                    background: 'var(--stats-bg-alt)',
                                    padding: '15px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: 'transform 0.2s',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute', top: 0, right: 0,
                                        padding: '4px 8px', fontSize: '0.6rem',
                                        background: d.type === 'Healthy' ? '#059669' : '#374151',
                                        color: '#fff', borderRadius: '0 0 0 10px'
                                    }}>{d.type}</div>
                                    <div style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>Respondent</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: primaryColor }}>{d.name}</div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: '900', marginTop: '5px' }}>₹{d.exp}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="step-2" style={{ animation: 'slideInRight 0.5s' }}>
                        <h3 style={{ marginBottom: '20px', color: primaryColor }}>Step 2: From Chaos to Classification</h3>
                        <div style={{ overflowX: 'auto', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', background: 'rgba(255,255,255,0.02)' }}>
                                <thead>
                                    <tr style={{ background: primaryColor, color: '#fff' }}>
                                        <th style={{ padding: '20px', textAlign: 'left' }}>Daily Expenditure (₹)</th>
                                        <th style={{ padding: '20px', textAlign: 'left' }}>Frequency (Count)</th>
                                        <th style={{ padding: '20px', textAlign: 'left' }}>Market Share (%)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {organizedData.map((row, i) => (
                                        <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '20px', fontSize: '1.1rem' }}>{row.range}</td>
                                            <td style={{ padding: '20px', fontWeight: 'bold', fontSize: '1.5rem', color: accentColor }}>{row.count}</td>
                                            <td style={{ padding: '20px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                    <div style={{ background: 'rgba(255,255,255,0.05)', height: '12px', flex: 1, borderRadius: '6px', overflow: 'hidden' }}>
                                                        <div style={{ background: accentColor, height: '100%', width: `${row.percent}%` }}></div>
                                                    </div>
                                                    <span style={{ fontWeight: 'bold' }}>{row.percent}%</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="step-3" style={{ animation: 'slideInRight 0.5s' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                            <h3 style={{ color: primaryColor }}>Step 3: Multi-Visual Inspection</h3>
                            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '6px', gap: '5px' }}>
                                {[
                                    { id: 'bar', icon: <FaChartBar />, label: "Bar" },
                                    { id: 'pie', icon: <FaChartPie />, label: "Pie" },
                                    { id: 'box', icon: <FaBoxOpen />, label: "Range" }
                                ].map(t => (
                                    <button
                                        key={t.id}
                                        onClick={() => setChartType(t.id)}
                                        style={{
                                            padding: '10px 20px', borderRadius: '8px', border: 'none',
                                            background: chartType === t.id ? primaryColor : 'transparent',
                                            color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                                            transition: '0.3s'
                                        }}
                                    >
                                        {t.icon} {t.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            height: '350px',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '20px',
                            padding: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}>
                            {chartType === 'bar' && (
                                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', width: '100%', height: '250px' }}>
                                    {organizedData.map((row, i) => (
                                        <div key={i} style={{ width: '150px', textAlign: 'center' }}>
                                            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{row.count}</div>
                                            <div style={{
                                                height: `${row.count * 25}px`,
                                                background: `linear-gradient(to top, ${primaryColor}, #60a5fa)`,
                                                borderRadius: '10px 10px 0 0',
                                                boxShadow: `0 0 20px ${primaryColor}30`
                                            }}></div>
                                            <div style={{ marginTop: '15px', fontSize: '0.9rem' }}>{row.range}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {chartType === 'pie' && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                                    <svg width="220" height="220" viewBox="0 0 42 42" style={{ transform: 'rotate(-90deg)', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}>
                                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#1e293b" strokeWidth="6"></circle>
                                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={primaryColor} strokeWidth="6" strokeDasharray="20 80" strokeDashoffset="0"></circle>
                                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={accentColor} strokeWidth="6" strokeDasharray="40 60" strokeDashoffset="-20"></circle>
                                        <circle cx="21" cy="21" r="15.915" fill="transparent" stroke={warningColor} strokeWidth="6" strokeDasharray="40 60" strokeDashoffset="-60"></circle>
                                    </svg>
                                    <div style={{ display: 'grid', gap: '15px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '15px', height: '15px', background: primaryColor, borderRadius: '3px' }}></div> Budget (20%)</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '15px', height: '15px', background: accentColor, borderRadius: '3px' }}></div> Regular (40%)</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '15px', height: '15px', background: warningColor, borderRadius: '3px' }}></div> Premium (40%)</div>
                                    </div>
                                </div>
                            )}

                            {chartType === 'box' && (
                                <div style={{ width: '100%', textAlign: 'center' }}>
                                    <h4 style={{ color: primaryColor, marginBottom: '30px' }}>Dispersion Analysis (The Box Plot Logic)</h4>
                                    <div style={{ position: 'relative', width: '80%', margin: '0 auto', height: '100px', display: 'flex', alignItems: 'center' }}>
                                        {/* Main Range Line */}
                                        <div style={{ height: '4px', width: '100%', background: 'rgba(255,255,255,0.1)', position: 'absolute' }}></div>
                                        <div style={{ height: '40px', width: '2px', background: '#fff', position: 'absolute', left: '0' }}><span style={{ position: 'absolute', bottom: '-25px', left: '-15px' }}>₹300</span></div>
                                        <div style={{ height: '40px', width: '2px', background: '#fff', position: 'absolute', right: '0' }}><span style={{ position: 'absolute', bottom: '-25px', right: '-15px' }}>₹1500</span></div>

                                        {/* Interquartile Range (Box) */}
                                        <div style={{
                                            position: 'absolute', left: '20%', right: '20%', height: '60px',
                                            background: `${primaryColor}30`, border: `2px solid ${primaryColor}`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <div style={{ height: '100%', width: '3px', background: '#ff4d4d' }}></div> {/* Median */}
                                        </div>
                                    </div>
                                    <p style={{ marginTop: '50px', fontSize: '0.9rem', opacity: 0.6 }}>The box shows where 50% of the students fall. The whiskers show the total span.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="step-4" style={{ animation: 'slideInRight 0.5s' }}>
                        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', alignItems: 'center' }}>
                            <div style={{ fontSize: '2.5rem', color: accentColor }}><FaProjectDiagram /></div>
                            <h3 style={{ color: primaryColor, margin: 0 }}>Step 4: The Investigator's Verdict</h3>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                            <div className="stats-card" style={{ borderTop: `5px solid ${primaryColor}` }}>
                                <h4 style={{ color: primaryColor }}>The Diagnostics</h4>
                                <ul style={{ paddingLeft: '20px', lineHeight: '2', opacity: 0.9 }}>
                                    <li><strong>Mean Spending:</strong> ₹890</li>
                                    <li><strong>Mode Group:</strong> ₹501 - ₹1500 (80%)</li>
                                    <li><strong>Skewness:</strong> Data leans towards higher spending.</li>
                                </ul>
                            </div>
                            <div className="stats-card" style={{ borderTop: `5px solid ${accentColor}` }}>
                                <h4 style={{ color: accentColor }}>The Proposed Solution</h4>
                                <p style={{ lineHeight: '1.6', opacity: 0.9 }}>
                                    Based on the high frequency of "Oily" food and "Gourmet" spending, the school should:
                                </p>
                                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '10px', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    "Launch a **Health-First Cafeteria** with a fixed ₹600 monthly meal plan. This aligns with the 'Median' expenditure while improving student health."
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* High Contrast Navigation Buttons */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '60px',
                paddingTop: '30px',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                {step > 1 && (
                    <button
                        onClick={() => setStep(step - 1)}
                        className="stats-btn"
                        style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#fff', padding: '15px 40px' }}
                    >
                        Back to Phase {step - 1}
                    </button>
                )}
                <div style={{ flex: 1 }}></div>
                {step < 4 ? (
                    <button
                        onClick={() => setStep(step + 1)}
                        className="stats-btn"
                        style={{
                            background: '#2563eb', // Cobalt Blue (Standard High Contrast)
                            color: '#ffffff',
                            padding: '18px 50px',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            boxShadow: '0 10px 25px rgba(37, 99, 235, 0.5)', // Strong Shadow
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            transition: '0.3s transform'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        Advance to Phase {step + 1} <FaArrowRight />
                    </button>
                ) : (
                    <button
                        onClick={() => setStep(1)}
                        className="stats-btn"
                        style={{
                            background: accentColor,
                            color: '#fff',
                            padding: '18px 50px',
                            border: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        <FaUndo /> Restart New Analysis
                    </button>
                )}
            </div>

            {/* Lightbulb Pro Tip */}
            <div style={{ marginTop: '40px', textAlign: 'center', opacity: 0.6, fontSize: '0.85rem', display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
                <FaLightbulb /> <span>Pro-Tip: Statistical tools are only as good as the interpretation of the investigator.</span>
            </div>
        </div>
    );
};

export default CaseStudy;
