import React from 'react';
import { FaWeightHanging, FaStar, FaInfoCircle, FaCheckDouble, FaTimes } from 'react-icons/fa';

const WeightedMethods = () => {

    // Helper to render fractions
    const Fraction = ({ num, den }) => (
        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', margin: '0 5px' }}>
            <span style={{ display: 'block', borderBottom: '1px solid #fff', paddingBottom: '2px' }}>{num}</span>
            <span style={{ display: 'block', paddingTop: '2px' }}>{den}</span>
        </span>
    );

    const Sqrt = ({ children }) => (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span>
            <span style={{ paddingTop: '2px' }}>{children}</span>
        </span>
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">WEIGHTED INDEX NUMBERS</h2>
                <p className="stats-subtitle">Mastering Complexity: Laspeyres, Paasche & Fisher</p>
            </div>

            {/* ═══ WHY WEIGHTS? ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaWeightHanging /> The Necessity of Weights
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '15px' }}>
                    In reality, commodities do not hold equal importance in a consumer's budget. For instance, a 10% increase in the price of <strong style={{ color: '#fff' }}>Wheat</strong> has a far greater impact on the cost of living than a 10% increase in the price of <strong style={{ color: '#fff' }}>Paper Clips</strong>.
                    <br /><br />
                    To reflect this reality, we assign <strong style={{ color: '#3b82f6' }}>Weights (q)</strong> representing the quantities consumed. Weighted indices are the standard tools used by the World Bank, IMF, and Governments for calculating inflation and national income.
                </p>
            </div>

            {/* ═══ THE "BIG THREE" METHODS ═══ */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '24px' }}>

                {/* Laspeyres */}
                <div className="stats-card" style={{ borderTop: '4px solid #3b82f6' }}>
                    <h4 style={{ color: '#3b82f6', marginBottom: '15px' }}>1. Laspeyres Method</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.6' }}>
                        This method uses <strong style={{ color: '#fff' }}>Base Year Quantities (q₀)</strong> as weights. It is essentially the cost of the "original basket" at today's prices compared to back then.
                    </p>
                    <div className="stats-formula" style={{ background: 'rgba(59, 130, 246, 0.1)', fontSize: '1.2rem', padding: '15px' }}>
                        <span>L = </span>
                        <Fraction num={<span>&Sigma;P₁q₀</span>} den={<span>&Sigma;P₀q₀</span>} />
                        <span> &times; 100</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--stats-text-muted)' }}>
                        <FaCheckDouble style={{ color: '#3b82f6', marginRight: '5px' }} /> Easy to calculate since quantities remain fixed.
                    </p>
                </div>

                {/* Paasche */}
                <div className="stats-card" style={{ borderTop: '4px solid #ec4899' }}>
                    <h4 style={{ color: '#ec4899', marginBottom: '15px' }}>2. Paasche Method</h4>
                    <p style={{ fontSize: '0.9rem', marginBottom: '15px', lineHeight: '1.6' }}>
                        This method uses <strong style={{ color: '#fff' }}>Current Year Quantities (q₁)</strong> as weights. It reflects the cost of what people are buying *right now* at current vs. base prices.
                    </p>
                    <div className="stats-formula" style={{ background: 'rgba(236, 72, 153, 0.1)', fontSize: '1.2rem', padding: '15px' }}>
                        <span>P = </span>
                        <Fraction num={<span>&Sigma;P₁q₁</span>} den={<span>&Sigma;P₀q₁</span>} />
                        <span> &times; 100</span>
                    </div>
                    <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'var(--stats-text-muted)' }}>
                        <FaTimes style={{ color: '#ec4899', marginRight: '5px' }} /> Difficult to compute regularly as it requires frequent quantity surveys.
                    </p>
                </div>

            </div>

            {/* ═══ FISHER'S IDEAL INDEX ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', color: 'rgba(245, 158, 11, 0.05)' }}>
                    <FaStar />
                </div>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    <FaStar style={{ color: '#f59e0b' }} /> Fisher's Ideal Index
                </h3>
                <p style={{ color: 'var(--stats-text)', marginBottom: '20px', lineHeight: '1.7' }}>
                    Irving Fisher proposed this method to overcome the biases of Laspeyres (which overestimates) and Paasche (which underestimates). It is the **Geometric Mean** of both methods, mathematically reconciling the two perspectives.
                </p>

                <div className="stats-formula" style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '25px', fontSize: '1.5rem' }}>
                    <span>F = </span>
                    <Sqrt>
                        <span>L &times; P</span>
                    </Sqrt>
                    <span> = </span>
                    <Sqrt>
                        <Fraction num={<span>&Sigma;P₁q₀</span>} den={<span>&Sigma;P₀q₀</span>} />
                        <span> &times; </span>
                        <Fraction num={<span>&Sigma;P₁q₁</span>} den={<span>&Sigma;P₀q₁</span>} />
                    </Sqrt>
                    <span> &times; 100</span>
                </div>

                <div className="stats-definition" style={{ marginTop: '20px', borderLeft: '3px solid #f59e0b' }}>
                    <h5 style={{ color: '#f59e0b', marginBottom: '10px' }}>What Makes it "Ideal"?</h5>
                    <ul className="stats-list" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                        <li><strong style={{ color: '#fff' }}>Dual Weighting:</strong> It considers the consumption patterns of both the base year and the current year.</li>
                        <li><strong style={{ color: '#fff' }}>Mathematical Precision:</strong> Based on the geometric mean, it is less affected by extreme values than arithmetic averages.</li>
                        <li><strong style={{ color: '#fff' }}>Consistency Tests:</strong> It is the only major index that passes the <strong style={{ color: '#f59e0b' }}>Time Reversal Test</strong> and the <strong style={{ color: '#f59e0b' }}>Factor Reversal Test</strong>.</li>
                    </ul>
                </div>
            </div>

            {/* ═══ COMPARISON SUMMARY ═══ */}
            <div className="stats-problem-box" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <p style={{ margin: 0, color: '#93c5fd', lineHeight: '1.6' }}>
                    <FaInfoCircle style={{ marginRight: '8px' }} />
                    <strong style={{ color: '#fff' }}>Summary for Exams:</strong>
                    When asked for the "Perfect" solution, always choose Fisher. However, expect the calculations to be tedious since you must compute four separate summations (&Sigma;P₁q₀, &Sigma;P₀q₀, &Sigma;P₁q₁, &Sigma;P₀q₁) before applying the final formula.
                </p>
            </div>
        </div>
    );
};

export default WeightedMethods;
