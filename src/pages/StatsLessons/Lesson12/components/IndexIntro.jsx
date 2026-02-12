import React from 'react';
import { FaHistory, FaShoppingCart, FaChartBar, FaCalendarAlt, FaStar, FaExclamationTriangle, FaCheckDouble, FaLightbulb } from 'react-icons/fa';

const IndexIntro = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title Section */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">THE ARCHITECTURE OF INDEX NUMBERS</h2>
                <p className="stats-subtitle">Mastering the Economic Barometers of Change</p>
            </div>

            {/* ═══ THE CORE CONCEPT ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaHistory /> What Exactly is an Index Number?
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    Imagine trying to measure the "heat" of the economy. You can't just look at the price of a single loaf of bread or a gallon of fuel, because prices fluctuate for different reasons. In statistics, an <strong style={{ color: '#fff' }}>Index Number</strong> is a specialized average designed to measure the relative change in a group of related variables over time.
                    <br /><br />
                    It doesn't just tell you that things are "more expensive"—it quantifies exactly how much the general price level, volume of production, or wage levels have shifted from a specific point in history. This is why economists call them <strong style={{ color: '#3b82f6' }}>Economic Barometers</strong>; they sense the underlying pressure and direction of the financial atmosphere.
                </p>
            </div>

            {/* ═══ CHARACTERISTICS ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#10b981' }}>
                    <FaCheckDouble /> Main Characteristics
                </h3>
                <div style={{ display: 'grid', gap: '15px' }}>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #10b981' }}>
                        <strong style={{ color: '#10b981' }}>1. Specialized Averages:</strong> Unlike a simple arithmetic mean, index numbers can average items measured in different units (kg, liters, pieces) by focusing on their percentage changes.
                    </div>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #10b981' }}>
                        <strong style={{ color: '#10b981' }}>2. Measures Relative Change:</strong> They don't reflect absolute values. If an index is 150, it doesn't mean the "price is 150"—it means there has been a 50% increase relative to the base.
                    </div>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #10b981' }}>
                        <strong style={{ color: '#10b981' }}>3. Group Variations:</strong> They measure the net effect of changes in a group of related variables, smoothing out individual anomalies.
                    </div>
                </div>
            </div>

            {/* ═══ IMPORTANCE ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#8b5cf6' }}>
                    <FaStar /> Why Do We Use Them?
                </h3>
                <ul className="stats-list" style={{ columns: 2 }}>
                    <li><strong style={{ color: '#8b5cf6' }}>Policy Formulation:</strong> Governments use them to decide interest rates and dearness allowances.</li>
                    <li><strong style={{ color: '#8b5cf6' }}>Deflating Values:</strong> Converting "Nominal" values into "Real" values (adjusting for inflation).</li>
                    <li><strong style={{ color: '#8b5cf6' }}>Trend Detection:</strong> spotting patterns in production, export, and import over decades.</li>
                    <li><strong style={{ color: '#8b5cf6' }}>Purchasing Power:</strong> Calculating how much your money is actually worth as prices rise.</li>
                </ul>
            </div>

            {/* ═══ PROBLEMS IN CONSTRUCTION ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    <FaExclamationTriangle /> Challenges in Construction
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '15px', color: 'var(--stats-text-muted)' }}>
                    Building an index is not just math; it requires critical economic decisions:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '15px', borderRadius: '8px' }}>
                        <h5 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>The Base Year Choice</h5>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>The year must be "normal"—free from wars, pandemics, or disasters. It shouldn't be too far in the past, or the comparison becomes irrelevant.</p>
                    </div>
                    <div style={{ background: 'rgba(59, 130, 246, 0.05)', padding: '15px', borderRadius: '8px' }}>
                        <h5 style={{ color: '#3b82f6', margin: '0 0 10px 0' }}>The Selection of Items</h5>
                        <p style={{ fontSize: '0.85rem', margin: 0 }}>We must pick commodities that represent the consumption habits of the specific group (e.g., a "Cost of Living" index for laborers vs. billionaires).</p>
                    </div>
                </div>
            </div>

            {/* ═══ KEY TERMS ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#ec4899' }}>
                    <FaLightbulb /> Working Vocabulary
                </h3>
                <div style={{ display: 'grid', gap: '15px' }}>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #3b82f6' }}>
                        <strong style={{ color: '#3b82f6' }}>P₀:</strong> Price in the Base Year. Usually represents the denominator in our formulas.
                    </div>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #10b981' }}>
                        <strong style={{ color: '#10b981' }}>P₁:</strong> Price in the Current Year (the year we are investigating).
                    </div>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #f59e0b' }}>
                        <strong style={{ color: '#f59e0b' }}>Price Relative (I):</strong> The ratio of current price to base price: $I = (P₁ / P₀) \times 100$.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexIntro;
