import React, { useState } from 'react';
import { FaChartBar, FaCalculator, FaLightbulb } from 'react-icons/fa';

const KarlPearson = () => {

    // Helper to render fractions like in Lesson 10
    const Fraction = ({ num, den }) => (
        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', margin: '0 5px' }}>
            <span style={{ display: 'block', borderBottom: '1px solid #fff', paddingBottom: '2px' }}>{num}</span>
            <span style={{ display: 'block', paddingTop: '2px' }}>{den}</span>
        </span>
    );

    // Square root wrapper (No top border to avoid double-line with fraction)
    const Sqrt = ({ children }) => (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span>
            <span style={{ paddingTop: '2px' }}>{children}</span>
        </span>
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">KARL PEARSON'S METHOD</h2>
                <p className="stats-subtitle">The Product Moment Correlation Coefficient (r)</p>
            </div>

            {/* ═══ INTRODUCTION ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaChartBar /> The Gold Standard
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    Karl Pearson's method gives a precise numerical value, denoted by <strong style={{ color: '#fff', fontSize: '1.1rem' }}>r</strong>.
                    It is the most widely used method for measuring linear correlation.
                </p>

                <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: 'var(--stats-radius)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                    <div style={{ textAlign: 'center', color: '#fff', fontSize: '1.2rem', marginBottom: '10px' }}>
                        Properties of 'r'
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--stats-text)' }}>
                        <li style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: '#3b82f6' }}>Range:</strong> -1 &le; r &le; +1
                        </li>
                        <li style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: '#10b981' }}>+1:</strong> Perfect Positive Correlation
                        </li>
                        <li style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                            <strong style={{ color: '#ef4444' }}>-1:</strong> Perfect Negative Correlation
                        </li>
                        <li style={{ padding: '5px 0' }}>
                            <strong style={{ color: '#f59e0b' }}>0:</strong> No Linear Correlation
                        </li>
                    </ul>
                </div>
            </div>

            {/* ═══ FORMULA ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#ec4899' }}>
                    <FaCalculator /> The Formula
                </h3>
                <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                    The actual mean method is best when the mean is a whole number.
                </p>

                <div className="stats-formula" style={{ fontSize: '1.3rem', padding: '25px', background: 'var(--stats-bg-alt)' }}>
                    <span>r = </span>
                    <Fraction
                        num={<span>&Sigma;xy</span>}
                        den={<Sqrt><span>&Sigma;x<sup>2</sup> &times; &Sigma;y<sup>2</sup></span></Sqrt>}
                    />
                </div>

                <div style={{ marginTop: '15px', color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                    <p>Where:</p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong style={{ color: '#fff' }}>x</strong> = deviation from mean of X (X - X̄)</li>
                        <li><strong style={{ color: '#fff' }}>y</strong> = deviation from mean of Y (Y - Ȳ)</li>
                        <li><strong style={{ color: '#fff' }}>&Sigma;xy</strong> = Sum of product of deviations</li>
                    </ul>
                </div>
            </div>

            {/* ═══ INTERPRETATION ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    <FaLightbulb /> Interpreting the Result
                </h3>
                <div style={{ display: 'grid', gap: '15px' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                        <div style={{ width: '50px', fontWeight: 'bold', color: '#10b981', textAlign: 'right' }}>0.7 to 1</div>
                        <div style={{ flex: 1, borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
                            <strong style={{ color: '#fff' }}>High Degree</strong> Positive Correlation
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                        <div style={{ width: '50px', fontWeight: 'bold', color: '#f59e0b', textAlign: 'right' }}>0.2 to 0.7</div>
                        <div style={{ flex: 1, borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
                            <strong style={{ color: '#fff' }}>Moderate Degree</strong> Positive Correlation
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                        <div style={{ width: '50px', fontWeight: 'bold', color: '#ef4444', textAlign: 'right' }}>0 to 0.2</div>
                        <div style={{ flex: 1, borderLeft: '2px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
                            <strong style={{ color: '#fff' }}>Low Degree</strong> Positive Correlation
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default KarlPearson;
