import React, { useState } from 'react';
import { FaListOl, FaCalculator, FaTable, FaLightbulb, FaInfoCircle } from 'react-icons/fa';

const ConstructionMethods = () => {

    // Helper to render fractions
    const Fraction = ({ num, den }) => (
        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', margin: '0 5px' }}>
            <span style={{ display: 'block', borderBottom: '1px solid #fff', paddingBottom: '2px' }}>{num}</span>
            <span style={{ display: 'block', paddingTop: '2px' }}>{den}</span>
        </span>
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">CONSTRUCTION METHODS</h2>
                <p className="stats-subtitle">The Foundation: Simple (Unweighted) Methods</p>
            </div>

            {/* ═══ INTRODUCTION TO SIMPLE METHODS ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading secondary">
                    <FaInfoCircle /> When to Use Simple Methods?
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    Simple index numbers are used when we assume that all items in our "basket" have <strong style={{ color: '#fff' }}>Equal Importance</strong>. While this is rarely true in real life (buying 1kg of diamonds is different from 1kg of salt), these methods provide a quick, preliminary look at price movements without needing complex consumption data.
                </p>
            </div>

            {/* ═══ METHOD 1: SIMPLE AGGREGATIVE ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaListOl /> 1. Simple Aggregative Method
                </h3>
                <p style={{ color: 'var(--stats-text)', marginBottom: '20px', lineHeight: '1.7' }}>
                    This is the most straightforward "bulk" comparison. We simply add up the prices of all commodities in the current period and compare that total to the sum of their prices in the base period. The ratio is then multiplied by 100 to yield a percentage.
                </p>

                <div className="stats-formula" style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '20px', fontSize: '1.4rem' }}>
                    <span>P₀₁ = </span>
                    <Fraction
                        num={<span>&Sigma;P₁</span>}
                        den={<span>&Sigma;P₀</span>}
                    />
                    <span> &times; 100</span>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #64748b' }}>
                        <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}><strong>Components:</strong></p>
                        <ul className="stats-list" style={{ margin: 0 }}>
                            <li><strong style={{ color: '#fff' }}>&Sigma;P₁:</strong> Summation of prices of all commodities in the current year.</li>
                            <li><strong style={{ color: '#fff' }}>&Sigma;P₀:</strong> Summation of prices of all commodities in the base year.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ═══ EXAMPLE CASE ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#10b981' }}>
                    <FaTable /> Real-World Demo
                </h3>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Commodity</th>
                                <th>Unit</th>
                                <th>2015 Price (P₀)</th>
                                <th>2024 Price (P₁)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Wheat</td><td>Quintal</td><td>₹1800</td><td>₹2200</td></tr>
                            <tr><td>Rice</td><td>Quintal</td><td>₹2500</td><td>₹3200</td></tr>
                            <tr><td>Sugar</td><td>kg</td><td>₹30</td><td>₹45</td></tr>
                            <tr style={{ fontWeight: 'bold', background: 'rgba(16, 185, 129, 0.1)' }}>
                                <td>TOTAL (&Sigma;)</td>
                                <td>-</td>
                                <td>₹4330</td>
                                <td>₹5445</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="stats-formula" style={{ marginTop: '20px' }}>
                    <span>P₀₁ = </span>
                    <Fraction num="5445" den="4330" />
                    <span> &times; 100 = </span>
                    <strong style={{ color: '#10b981' }}>125.75</strong>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--stats-text-muted)', textAlign: 'center', marginTop: '10px' }}>
                    Interpretation: The general price level for these commodities has risen by 25.75% over the 9-year period.
                </p>
            </div>

            {/* ═══ METHOD 2: AVERAGE OF RELATIVES ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#ec4899' }}>
                    <FaCalculator /> 2. Simple Average of Price Relatives
                </h3>
                <p style={{ color: 'var(--stats-text)', marginBottom: '20px', lineHeight: '1.7' }}>
                    Instead of summing raw prices, we first calculate the **percentage change** (Price Relative) for each individual commodity. Then, we find the arithmetic mean of these percentages. This prevents high-priced items (like electronics) from overshadowing low-priced items (like pins) in the final index.
                </p>

                <div className="stats-formula" style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '20px', fontSize: '1.4rem' }}>
                    <span>P₀₁ = </span>
                    <Fraction
                        num={<span>&Sigma; [ (P₁ / P₀) &times; 100 ]</span>}
                        den={<span>N</span>}
                    />
                </div>

                <div className="stats-problem-box" style={{ marginTop: '20px', padding: '15px' }}>
                    <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--stats-text)' }}>
                        <FaLightbulb style={{ color: '#f59e0b', marginRight: '8px' }} />
                        <strong>Scientific Advantage:</strong> This method is superior to the aggregative method because it is independent of the units of measurement. Whether you measure wheat in kg or tons, the "Price Relative" remains exactly the same.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConstructionMethods;
