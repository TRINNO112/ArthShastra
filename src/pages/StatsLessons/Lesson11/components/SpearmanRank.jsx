import React from 'react';
import { FaSortNumericDown, FaTrophy, FaExclamationTriangle } from 'react-icons/fa';

const SpearmanRank = () => {

    // Helper to render fractions (Reusing consistency)
    const Fraction = ({ num, den }) => (
        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', margin: '0 5px' }}>
            <span style={{ display: 'block', borderBottom: '1px solid rgba(255,255,255,0.6)', paddingBottom: '2px' }}>{num}</span>
            <span style={{ display: 'block', paddingTop: '2px' }}>{den}</span>
        </span>
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">SPEARMAN'S RANK CORRELATION</h2>
                <p className="stats-subtitle">When Data Can Only Be Ranked</p>
            </div>

            {/* ═══ INTRODUCTION ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaTrophy /> Qualitative Data
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    Sometimes, we cannot measure data in numbers (e.g., Beauty, Honesty, Wisdom).
                    However, we can <strong>Rank</strong> them (1st, 2nd, 3rd).
                    Spearman's Rank Correlation (denoted by <strong style={{ color: '#fff', fontSize: '1.1rem' }}>R</strong> or <strong style={{ color: '#fff', fontSize: '1.1rem' }}>&rho;</strong>) is used here.
                </p>
            </div>

            {/* ═══ FORMULA ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#ec4899' }}>
                    <FaSortNumericDown /> The Formula
                </h3>
                <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                    The formula depends on whether ranks are unique or repeated.
                    For Class 11, we focus on <strong>unique ranks</strong>.
                </p>

                <div className="stats-formula" style={{ fontSize: '1.3rem', padding: '25px', background: 'var(--stats-bg-alt)' }}>
                    <span>R = 1 - </span>
                    <Fraction
                        num={<span>6&Sigma;D<sup>2</sup></span>}
                        den={<span>N(N<sup>2</sup> - 1)</span>}
                    />
                </div>

                <div style={{ marginTop: '15px', color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                    <p>Where:</p>
                    <ul style={{ lineHeight: '1.8' }}>
                        <li><strong style={{ color: '#fff' }}>R</strong> = Rank Correlation Coefficients</li>
                        <li><strong style={{ color: '#fff' }}>D</strong> = Difference between Ranks (R<sub>1</sub> - R<sub>2</sub>)</li>
                        <li><strong style={{ color: '#fff' }}>N</strong> = Number of pairs observations</li>
                    </ul>
                </div>
            </div>

            {/* ═══ STEPS TO CALCULATE ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#3b82f6' }}>
                    Step-by-Step Calculation
                </h3>

                <div style={{ display: 'grid', gap: '15px' }}>
                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #3b82f6' }}>
                        <h4 style={{ color: '#3b82f6', margin: '0 0 5px 0' }}>Step 1: Assign Ranks</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--stats-text-muted)' }}>
                            Rank the values of X (R₁) and Y (R₂). Give Rank 1 to the highest value, Rank 2 to the next, etc.
                        </p>
                    </div>

                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #10b981' }}>
                        <h4 style={{ color: '#10b981', margin: '0 0 5px 0' }}>Step 2: Find Difference (D)</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--stats-text-muted)' }}>
                            Calculate difference of ranks: D = |R₁ - R₂|
                        </p>
                    </div>

                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #ec4899' }}>
                        <h4 style={{ color: '#ec4899', margin: '0 0 5px 0' }}>Step 3: Square & Sum</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--stats-text-muted)' }}>
                            Square the differences (D²) and find their sum (&Sigma;D²). then apply the formula.
                        </p>
                    </div>
                </div>
            </div>

            {/* ═══ SPECIAL CASE ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    <FaExclamationTriangle /> Important Note
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    Spearman's Rank Correlation is the <strong>only method</strong> when data is qualitative.
                    It is generally easier to calculate than Pearson's method but slightly less precise for large numerical datasets.
                </p>
            </div>

        </div>
    );
};

export default SpearmanRank;
