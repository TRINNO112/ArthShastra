import React, { useState } from 'react';
import { FaCalculator, FaTable, FaLightbulb, FaEye, FaEyeSlash, FaCheckCircle, FaMoneyBillWave, FaArrowRight, FaQuestionCircle, FaStar } from 'react-icons/fa';

/**
 * AnimatedSolution Component
 * Handles smooth opening and closing animations by transitioning max-height and opacity.
 */
const AnimatedSolution = ({ isOpen, children, isConceptual }) => {
    return (
        <div style={{
            maxHeight: isOpen ? '1000px' : '0px',
            opacity: isOpen ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out',
            transform: isConceptual && isOpen ? 'scale(1)' : isConceptual ? 'scale(0.95)' : 'none',
            transformOrigin: 'top',
            marginTop: isOpen ? '20px' : '0px'
        }}>
            <div style={{
                paddingBottom: '20px',
                animation: isConceptual && isOpen ? 'boxOpen 0.5s ease-out' : 'none'
            }}>
                {children}
            </div>
        </div>
    );
};

const PracticalProblems = () => {
    const [activeSols, setActiveSols] = useState({});

    const toggleSol = (id) => {
        setActiveSols(prev => ({ ...prev, [id]: !prev[id] }));
    };

    // Helper to render textbook fractions
    const Fraction = ({ num, den, multiplier }) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', margin: '0 8px', verticalAlign: 'middle' }}>
            <span style={{ display: 'inline-block', textAlign: 'center' }}>
                <span style={{ display: 'block', borderBottom: '1px solid currentColor', padding: '0 5px', fontSize: '1.1em' }}>{num}</span>
                <span style={{ display: 'block', padding: '0 5px', fontSize: '1.1em' }}>{den}</span>
            </span>
            {multiplier && <span style={{ marginLeft: '10px' }}>&times; {multiplier}</span>}
        </span>
    );

    const Sqrt = ({ children }) => (
        <span style={{ display: 'inline-flex', alignItems: 'center', borderTop: '2px solid currentColor', position: 'relative', marginLeft: '12px', paddingLeft: '8px' }}>
            <span style={{
                position: 'absolute',
                left: '-12px',
                top: '-2px',
                fontSize: '1.8em',
                lineHeight: '1'
            }}>&radic;</span>
            <span style={{ padding: '4px 0' }}>{children}</span>
        </span>
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out', paddingBottom: '60px' }}>
            {/* Custom Animations Style */}
            <style>
                {`
                    @keyframes boxOpen {
                        0% { transform: perspective(500px) rotateX(-20deg) scale(0.9); opacity: 0; }
                        100% { transform: perspective(500px) rotateX(0deg) scale(1); opacity: 1; }
                    }
                `}
            </style>

            {/* Header */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px', borderBottom: '3px solid var(--stats-primary)', borderRadius: '15px' }}>
                <h2 className="stats-title" style={{ letterSpacing: '3px', textTransform: 'uppercase' }}>Examination Laboratory</h2>
                <p className="stats-subtitle">8 High-Impact Problems: 6 Numerical Challenges & 2 Conceptual Masterpieces</p>
            </div>

            {/* ═══ PROBLEM 1: WEIGHTED INDICES (Set 1) ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #3b82f6', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading primary">
                    <FaCalculator style={{ color: '#3b82f6' }} /> Problem 1: Weighted Aggregate (Standard Set)
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px', fontWeight: '500' }}>
                        Calculate (a) Laspeyres, (b) Paasche, and (c) Fisher's Ideal Index from the following consumption data:
                    </p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th rowSpan="2">Item</th>
                                    <th colSpan="2">Base Year (P₀, q₀)</th>
                                    <th colSpan="2">Current Year (P₁, q₁)</th>
                                </tr>
                                <tr>
                                    <th>Price</th><th>Qty</th><th>Price</th><th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Cloth</td><td>₹100</td><td>10</td><td>₹150</td><td>12</td></tr>
                                <tr><td>Fuel</td><td>₹50</td><td>20</td><td>₹80</td><td>15</td></tr>
                                <tr><td>Others</td><td>₹200</td><td>5</td><td>₹250</td><td>6</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button onClick={() => toggleSol('p1')} className="stats-btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', background: activeSols.p1 ? 'rgba(59, 130, 246, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p1 ? '#3b82f6' : 'transparent', fontWeight: 'bold' }}>
                    {activeSols.p1 ? <><FaEyeSlash /> Hide Solution</> : <><FaEye /> Reveal Step-by-Step Table</>}
                </button>

                <AnimatedSolution isOpen={activeSols.p1}>
                    <div className="stats-table-container">
                        <table className="stats-table" style={{ fontSize: '0.9rem' }}>
                            <thead style={{ background: 'rgba(59, 130, 246, 0.2)' }}>
                                <tr><th>Item</th><th>P₁q₀</th><th>P₀q₀</th><th>P₁q₁</th><th>P₀q₁</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Cloth</td><td>1500</td><td>1000</td><td>1800</td><td>1200</td></tr>
                                <tr><td>Fuel</td><td>1600</td><td>1000</td><td>1200</td><td>750</td></tr>
                                <tr><td>Others</td><td>1250</td><td>1000</td><td>1500</td><td>1200</td></tr>
                                <tr style={{ fontWeight: 'bold', background: 'rgba(255,255,255,0.05)' }}>
                                    <td>TOTAL</td><td>4350</td><td>3000</td><td>4500</td><td>3150</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
                        <div className="stats-formula" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span>L = </span><Fraction num="4350" den="3000" multiplier="100" /><span> = </span><strong style={{ color: '#3b82f6', marginLeft: '10px' }}>145.00</strong>
                        </div>
                        <div className="stats-formula" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span>P = </span><Fraction num="4500" den="3150" multiplier="100" /><span> = </span><strong style={{ color: '#ec4899', marginLeft: '10px' }}>142.86</strong>
                        </div>
                        <div className="stats-formula" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span>F = </span><Sqrt>145.00 &times; 142.86</Sqrt><span> = </span><strong style={{ color: '#f59e0b', marginLeft: '10px' }}>143.93</strong>
                        </div>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 2: CPI ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #10b981', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#10b981' }}>
                    <FaTable style={{ color: '#10b981' }} /> Problem 2: Cost of Living (Weighted Method)
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                        Compute the **CPI** using the family budget method for the following groups:
                    </p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr><th>Group</th><th>Weight (W)</th><th>Price Relative (I)</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Food</td><td>45</td><td>160</td></tr>
                                <tr><td>Rent</td><td>15</td><td>140</td></tr>
                                <tr><td>Clothing</td><td>20</td><td>180</td></tr>
                                <tr><td>Others</td><td>20</td><td>150</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button onClick={() => toggleSol('p2')} className="stats-btn" style={{ width: '100%', background: activeSols.p2 ? 'rgba(16, 185, 129, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p2 ? '#10b981' : 'transparent' }}>
                    {activeSols.p2 ? <><FaEyeSlash /> Hide Solution</> : <><FaEye /> Reveal Calculation Table</>}
                </button>

                <AnimatedSolution isOpen={activeSols.p2}>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
                                <tr><th>Group</th><th>W</th><th>I</th><th>W &times; I</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Food</td><td>45</td><td>160</td><td>7200</td></tr>
                                <tr><td>Rent</td><td>15</td><td>140</td><td>2100</td></tr>
                                <tr><td>Cloth</td><td>20</td><td>180</td><td>3600</td></tr>
                                <tr><td>Misc</td><td>20</td><td>150</td><td>3000</td></tr>
                                <tr style={{ fontWeight: 'bold' }}><td>TOTAL</td><td>100</td><td>-</td><td>15900</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="stats-formula" style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <span>CPI = </span><Fraction num="ΣWI" den="ΣW" /><span> = </span><Fraction num="15900" den="100" /><span> = </span><strong style={{ color: '#10b981', marginLeft: '10px' }}>159.00</strong>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 3: SIMPLE AGGREGATIVE ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #6366f1', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#6366f1' }}>
                    <FaCheckCircle style={{ color: '#6366f1' }} /> Problem 3: Simple Aggregative Method
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                        Calculate the Price Index for the current year (Base = 100):
                    </p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr><th>Commodity</th><th>Base Year (P₀)</th><th>Current Year (P₁)</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Wheat</td><td>₹2500</td><td>₹3200</td></tr>
                                <tr><td>Sugar</td><td>₹40</td><td>₹55</td></tr>
                                <tr><td>Oil</td><td>₹150</td><td>₹210</td></tr>
                                <tr><td>Salt</td><td>₹10</td><td>₹25</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button onClick={() => toggleSol('p3')} className="stats-btn" style={{ width: '100%', background: activeSols.p3 ? 'rgba(99, 102, 241, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p3 ? '#6366f1' : 'transparent' }}>
                    {activeSols.p3 ? 'Hide Solution' : 'Show Solution'}
                </button>

                <AnimatedSolution isOpen={activeSols.p3}>
                    <div className="stats-formula" style={{ display: 'flex', alignItems: 'center', fontSize: '1.25rem' }}>
                        <span>P₀₁ = </span><Fraction num="ΣP₁" den="ΣP₀" /><span> &times; 100 = </span><Fraction num="3490" den="2700" multiplier="100" /><span> = </span><strong style={{ color: '#6366f1', marginLeft: '10px' }}>129.26</strong>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 4: AVG OF RELATIVES ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #ec4899', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#ec4899' }}>
                    <FaCalculator style={{ color: '#ec4899' }} /> Problem 4: Simple Average of Price Relatives
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                        Compute the index using the arithmetic mean of price relatives:
                    </p>
                    <table className="stats-table">
                        <thead><tr><th>Item</th><th>Base (P₀)</th><th>Current (P₁)</th></tr></thead>
                        <tbody>
                            <tr><td>A</td><td>40</td><td>60</td></tr>
                            <tr><td>B</td><td>80</td><td>100</td></tr>
                            <tr><td>C</td><td>100</td><td>150</td></tr>
                        </tbody>
                    </table>
                </div>

                <button onClick={() => toggleSol('p4')} className="stats-btn" style={{ width: '100%', background: activeSols.p4 ? 'rgba(236, 72, 153, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p4 ? '#ec4899' : 'transparent' }}>
                    {activeSols.p4 ? 'Hide Solution' : 'Show Table Solution'}
                </button>

                <AnimatedSolution isOpen={activeSols.p4}>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead style={{ background: 'rgba(236, 72, 153, 0.2)' }}>
                                <tr><th>Item</th><th>P₀</th><th>P₁</th><th>I = (P₁/P₀) &times; 100</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>A</td><td>40</td><td>60</td><td>150.0</td></tr>
                                <tr><td>B</td><td>80</td><td>100</td><td>125.0</td></tr>
                                <tr><td>C</td><td>100</td><td>150</td><td>150.0</td></tr>
                                <tr style={{ fontWeight: 'bold' }}><td>Sum (Σ)</td><td colSpan="2">-</td><td>425.0</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="stats-formula" style={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                        <span>Index = </span><Fraction num="ΣI" den="N" /><span> = </span><Fraction num="425" den="3" /><span> = </span><strong style={{ color: '#ec4899', marginLeft: '10px' }}>141.67</strong>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 5: REAL WAGES ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #ef4444', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#ef4444' }}>
                    <FaMoneyBillWave style={{ color: '#ef4444' }} /> Problem 5: Purchasing Power Challenge
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                        A worker gets ₹10,000 in 2018 (CPI=100). In 2024, their salary is ₹18,000 but CPI is 200. Calculate their **Real Wage**.
                    </p>
                </div>

                <button onClick={() => toggleSol('p5')} className="stats-btn" style={{ width: '100%', background: activeSols.p5 ? 'rgba(239, 68, 68, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p5 ? '#ef4444' : 'transparent' }}>
                    {activeSols.p5 ? 'Hide Solution' : 'Show Calculation'}
                </button>

                <AnimatedSolution isOpen={activeSols.p5}>
                    <div className="stats-formula" style={{ display: 'flex', alignItems: 'center', fontSize: '1.3rem' }}>
                        <span>Real Wage = </span><Fraction num="Salary" den="CPI" /><span> &times; 100</span>
                    </div>
                    <div className="stats-formula" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <span>2024 Real Wage = </span><Fraction num="18000" den="200" multiplier="100" /><span> = </span><strong style={{ color: '#10b981', marginLeft: '10px' }}>₹9,000</strong>
                    </div>
                    <div className="stats-problem-box" style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '20px', background: 'rgba(245, 158, 11, 0.05)', marginTop: '15px' }}>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--stats-text)' }}>
                            <FaLightbulb style={{ color: '#f59e0b', marginRight: '8px' }} />
                            <strong>Reality Check:</strong> Although the notebook says ₹18,000, it effectively only buys what ₹9,000 could buy in 2018. The worker is poorer!
                        </p>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 6: WEIGHTED INDICES (Set 2) ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #8b5cf6', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#8b5cf6' }}>
                    <FaStar style={{ color: '#8b5cf6' }} /> Problem 6: Advanced Weighted Aggregate (Set B)
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px', fontWeight: '500' }}>
                        Another test! Calculate (a) Laspeyres, (b) Paasche, and (c) Fisher's indices:
                    </p>
                    <div className="stats-table-container">
                        <table className="stats-table">
                            <thead>
                                <tr><th>Item</th><th>P₀</th><th>q₀</th><th>P₁</th><th>q₁</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Fruit</td><td>₹80</td><td>5</td><td>₹100</td><td>4</td></tr>
                                <tr><td>Veg</td><td>₹40</td><td>10</td><td>₹60</td><td>8</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button onClick={() => toggleSol('p6')} className="stats-btn" style={{ width: '100%', background: activeSols.p6 ? 'rgba(139, 92, 246, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p6 ? '#8b5cf6' : 'transparent' }}>
                    {activeSols.p6 ? <><FaEyeSlash /> Hide Solution</> : <><FaEye /> Reveal Full Numerical Table</>}
                </button>

                <AnimatedSolution isOpen={activeSols.p6}>
                    <div className="stats-table-container">
                        <table className="stats-table" style={{ fontSize: '0.85rem' }}>
                            <thead style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
                                <tr><th>Item</th><th>P₁q₀</th><th>P₀q₀</th><th>P₁q₁</th><th>P₀q₁</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Fruit</td><td>500</td><td>400</td><td>400</td><td>320</td></tr>
                                <tr><td>Veg</td><td>600</td><td>400</td><td>480</td><td>320</td></tr>
                                <tr style={{ fontWeight: 'bold', background: 'rgba(255,255,255,0.05)' }}>
                                    <td>TOTAL</td><td>1100</td><td>800</td><td>880</td><td>640</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
                        <div className="stats-formula" style={{ display: 'flex', alignItems: 'center' }}>
                            <span>L = </span><Fraction num="1100" den="800" multiplier="100" /><span> = </span><strong style={{ color: '#3b82f6', marginLeft: '10px' }}>137.50</strong>
                        </div>
                        <div className="stats-formula" style={{ display: 'flex', alignItems: 'center' }}>
                            <span>P = </span><Fraction num="880" den="640" multiplier="100" /><span> = </span><strong style={{ color: '#ec4899', marginLeft: '10px' }}>137.50</strong>
                        </div>
                        <div className="stats-formula" style={{ display: 'flex', alignItems: 'center' }}>
                            <span>F = </span><Sqrt>137.50 &times; 137.50</Sqrt><span> = </span><strong style={{ color: '#f59e0b', marginLeft: '10px' }}>137.50</strong>
                        </div>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 7: CONCEPT CHECK A (Special Animation) ═══ */}
            <div className="stats-card" style={{ marginBottom: '30px', borderLeft: '5px solid #f59e0b', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    <FaQuestionCircle style={{ color: '#f59e0b' }} /> Problem 7: Why is Fisher's Index "Ideal"?
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px' }}>
                    <p style={{ color: 'var(--stats-text)', margin: 0 }}>
                        Explain why Fisher's index is theoretically superior to others. Mention the specific tests it satisfies.
                    </p>
                </div>

                <button onClick={() => toggleSol('p7')} className="stats-btn" style={{ width: '100%', background: activeSols.p7 ? 'rgba(245, 158, 11, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p7 ? '#f59e0b' : 'transparent', marginTop: '15px' }}>
                    {activeSols.p7 ? <><FaEyeSlash /> Hide Explanation</> : <><FaEye /> Reveal Conceptual Logic</>}
                </button>

                <AnimatedSolution isOpen={activeSols.p7} isConceptual={true}>
                    <div className="stats-problem-box" style={{ borderLeft: '4px solid #f59e0b', paddingLeft: '20px', background: 'rgba(245, 158, 11, 0.05)' }}>
                        <p style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.6' }}>
                            <FaArrowRight style={{ color: '#f59e0b', marginRight: '8px' }} />
                            Fisher's Index is "Ideal" because it uses the <strong>Geometric Mean</strong> to balance the biases of Laspeyres and Paasche. Crucially, it satisfies:
                            <br /><br />
                            1. <strong>Time Reversal Test:</strong> Consistency when base and current years are swapped.<br />
                            2. <strong>Factor Reversal Test:</strong> Consistency when price and quantity factors are swapped.
                        </p>
                    </div>
                </AnimatedSolution>
            </div>

            {/* ═══ PROBLEM 8: CONCEPT CHECK B (Special Animation) ═══ */}
            <div className="stats-card" style={{ borderLeft: '5px solid #06b6d4', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#06b6d4' }}>
                    <FaQuestionCircle style={{ color: '#06b6d4' }} /> Problem 8: The "Base Year" Protocol
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px' }}>
                    <p style={{ color: 'var(--stats-text)', margin: 0 }}>
                        What criteria must a year meet to be selected as a "Base Year" for index numbers?
                    </p>
                </div>

                <button onClick={() => toggleSol('p8')} className="stats-btn" style={{ width: '100%', background: activeSols.p8 ? 'rgba(6, 182, 212, 0.2)' : 'var(--stats-primary)', borderColor: activeSols.p8 ? '#06b6d4' : 'transparent', marginTop: '15px' }}>
                    {activeSols.p8 ? <><FaEyeSlash /> Hide Explanation</> : <><FaEye /> Reveal Professional Answer</>}
                </button>

                <AnimatedSolution isOpen={activeSols.p8} isConceptual={true}>
                    <div className="stats-problem-box" style={{ borderLeft: '4px solid #06b6d4', paddingLeft: '20px', background: 'rgba(6, 182, 212, 0.05)' }}>
                        <p style={{ margin: 0, color: 'var(--stats-text)', lineHeight: '1.6' }}>
                            <FaArrowRight style={{ color: '#06b6d4', marginRight: '8px' }} />
                            A Base Year must be a <strong>Normal Year</strong>. This means:
                            <ul style={{ marginTop: '10px' }}>
                                <li>No major economic shocks (War, Pandemic, Extreme Famine).</li>
                                <li>Relative social and political stability.</li>
                                <li>It should not be too distant from the current year to ensure relevance.</li>
                            </ul>
                        </p>
                    </div>
                </AnimatedSolution>
            </div>

        </div>
    );
};

export default PracticalProblems;
