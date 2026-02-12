import React from 'react';
import { FaShoppingCart, FaStore, FaMoneyBillWave, FaPercentage, FaExchangeAlt, FaBalanceScale } from 'react-icons/fa';

const CPIWPI = () => {

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
                <h2 className="stats-title">SPECIAL PURPOSE INDICES</h2>
                <p className="stats-subtitle">Navigating CPI, WPI & Macroeconomic Reality</p>
            </div>

            {/* ═══ THE COMPARISON ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaExchangeAlt /> CPI vs. WPI: The Difference
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '20px' }}>
                    While both measure inflation, they look at it from different ends of the supply chain. <strong style={{ color: '#fff' }}>WPI</strong> tracks the price at which manufacturers sell in bulk, while <strong style={{ color: '#fff' }}>CPI</strong> tracks the price you pay at the local grocery store.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>

                    {/* CPI Details */}
                    <div style={{ background: 'rgba(16, 185, 129, 0.05)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #10b981' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '10px' }}><FaShoppingCart /> Consumer Price Index</h4>
                        <ul className="stats-list" style={{ fontSize: '0.85rem' }}>
                            <li><strong style={{ color: '#fff' }}>Perspective:</strong> The Consumer's side.</li>
                            <li><strong style={{ color: '#fff' }}>Composition:</strong> Includes food, fuel, clothing, and <strong style={{ color: '#10b981' }}>Services</strong> (rent, education, medical).</li>
                            <li><strong style={{ color: '#fff' }}>Base Year:</strong> In India, the base year is often updated (currently 2012 for many series).</li>
                            <li><strong style={{ color: '#fff' }}>Usage:</strong> Fixing wages and Dearness Allowance (DA).</li>
                        </ul>
                    </div>

                    {/* WPI Details */}
                    <div style={{ background: 'rgba(245, 158, 11, 0.05)', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #f59e0b' }}>
                        <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}><FaStore /> Wholesale Price Index</h4>
                        <ul className="stats-list" style={{ fontSize: '0.85rem' }}>
                            <li><strong style={{ color: '#fff' }}>Perspective:</strong> The Producer's side.</li>
                            <li><strong style={{ color: '#fff' }}>Composition:</strong> Primarily manufactured goods, fuel, and power. No services.</li>
                            <li><strong style={{ color: '#fff' }}>Base Year:</strong> In India, the current series is 2011-12.</li>
                            <li><strong style={{ color: '#fff' }}>Usage:</strong> Tracking business cycles and industry-wide costs.</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* ═══ REAL WAGE & PURCHASING POWER ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading secondary">
                    <FaMoneyBillWave /> Purchasing Power: The True Value of Money
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '20px' }}>
                    Purchasing power refers to the quantity of goods and services that can be bought with a unit of money. It is the <strong style={{ color: '#fff' }}>Inverse</strong> of the price index. When the price index goes up (Inflation), the purchasing power of your ₹100 note goes down.
                </p>

                <div style={{ display: 'grid', gap: '15px' }}>
                    <div className="stats-formula" style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '20px', fontSize: '1.2rem' }}>
                        <span style={{ color: '#3b82f6' }}>Real Wage = </span>
                        <Fraction
                            num={<span>Money Wage</span>}
                            den={<span>Consumer Price Index</span>}
                        />
                        <span> &times; 100</span>
                    </div>

                    <div className="stats-formula" style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '20px', fontSize: '1.2rem' }}>
                        <span style={{ color: '#10b981' }}>Purchasing Power = </span>
                        <Fraction
                            num={<span>1</span>}
                            den={<span>Price Index</span>}
                        />
                    </div>
                </div>
            </div>

            {/* ═══ POLICY USES ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#8b5cf6' }}>
                    <FaBalanceScale /> Why Governments Care
                </h3>
                <div style={{ columns: 2, gap: '30px' }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--stats-text)' }}>
                        <strong style={{ color: '#8b5cf6' }}>1. Inflation Monitoring:</strong> The RBI uses these indices to decide if they should increase interest rates to control spending.
                    </p>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--stats-text)' }}>
                        <strong style={{ color: '#8b5cf6' }}>2. National Income:</strong> Economists "deflate" GDP by using price indices to see if the country is actually producing more, or just charging higher prices.
                    </p>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--stats-text)' }}>
                        <strong style={{ color: '#8b5cf6' }}>3. Market Trends:</strong> Businesses use WPI to anticipate future retail price hikes and adjust their inventory.
                    </p>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--stats-text)' }}>
                        <strong style={{ color: '#8b5cf6' }}>4. Wage Adjustment:</strong> Labor unions use CPI to demand higher wages and inflation-linked bonuses.
                    </p>
                </div>
            </div>

            {/* ═══ RATE OF INFLATION ═══ */}
            <div className="stats-card" style={{ marginTop: '24px', border: '1px solid #8b5cf650' }}>
                <h4 style={{ color: '#8b5cf6', marginBottom: '15px' }}><FaPercentage /> The Inflation Formula</h4>
                <div className="stats-formula" style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '20px', fontSize: '1.2rem' }}>
                    <span>Rate (%) = </span>
                    <Fraction
                        num={<span>P₁ - P₀</span>}
                        den={<span>P₀</span>}
                    />
                    <span> &times; 100</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--stats-text-muted)', textAlign: 'center', marginTop: '10px' }}>
                    (Where P₁ is Current Index and P₀ is Previous Index)
                </p>
            </div>
        </div>
    );
};

export default CPIWPI;
