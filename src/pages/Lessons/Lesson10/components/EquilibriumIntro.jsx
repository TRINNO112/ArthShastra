import React from 'react';
import { FaBalanceScale, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const EquilibriumIntro = () => {
    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Concept Definition</span>
                <h2 className="section-title-lesson">Producer's Equilibrium</h2>
                <p className="section-subtitle-lesson">
                    The rational point where a firm maximizes total profit or minimizes loss.
                </p>
            </div>

            <div className="definition-card featured">
                <div className="featured-badge">
                    <FaBalanceScale /> Core Concept
                </div>
                <div className="definition-header">
                    <div className="economist-avatar gold">
                        <FaBalanceScale />
                    </div>
                    <div className="economist-info">
                        <h3>What is Producer's Equilibrium?</h3>
                    </div>
                </div>
                <div className="intro-text">
                    <p>
                        A producer is said to be in equilibrium when they produce that level of output at which their profits are maximum. At this point, the producer has no tendency to increase or decrease their output. It is the "sweet spot" of production.
                    </p>
                    <p style={{ marginTop: '15px' }}>
                        <strong>Profit (π)</strong> is defined as the difference between Total Revenue (TR) and Total Cost (TC).
                        <br />
                        <span className="highlight-gold">π = TR - TC</span>
                    </p>
                </div>
            </div>

            <div className="feature-grid">
                <div className="feature-item">
                    <div className="feature-icon green">
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>$</span>
                    </div>
                    <h4>Gross vs Net Profit</h4>
                    <p>
                        We focus on Economic Profit, which accounts for both explicit and implicit costs.
                    </p>
                </div>
                <div className="feature-item">
                    <div className="feature-icon purple">
                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>N</span>
                    </div>
                    <h4>Normal Profit</h4>
                    <p>
                        The minimum profit needed to keep a firm in business (TR = TC). It is part of Total Cost.
                    </p>
                </div>
            </div>

            <div className="key-concepts-card" style={{ marginTop: '30px' }}>
                <h3>Two Essential Conditions (MR-MC Approach)</h3>
                <div className="feature-grid">
                    <div className="feature-item">
                        <div className="feature-icon cyan">
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>1</span>
                        </div>
                        <h4>MR = MC</h4>
                        <p>
                            Marginal Revenue must be equal to Marginal Cost. This is a necessary condition. If MR {'<'} MC, produce more. If MR &lt; MC, produce less.
                        </p>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon green">
                            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>2</span>
                        </div>
                        <h4>MC Cuts MR from Below</h4>
                        <p>
                            Marginal Cost must be rising at the point of intersection. This ensures that any further production will add more to cost than to revenue.
                        </p>
                    </div>
                </div>
            </div>

            <div className="highlight-card gold" style={{ marginTop: '30px' }}>
                <div className="highlight-icon">
                    <FaExclamationTriangle />
                </div>
                <div className="highlight-content">
                    <h3>Related Concepts: Boundaries of Production</h3>
                    <p>
                        Before reaching equilibrium, a producer must decide whether to produce at all.
                        Recall the concepts of <strong>Break-Even Point</strong> (TR = TC) and <strong>Shutdown Point</strong> (TR = TVC) from the Cost Analysis chapter.
                    </p>
                    <p className="note-text" style={{ color: 'var(--text-primary)', marginTop: '10px' }}>
                        <em>Hint: These determine the entry and exit conditions for a firm in the market!</em>
                    </p>
                </div>
            </div>

            <div className="quote-box">
                <p>"Rational producers always operate where the marginal benefit of the last unit equals its marginal cost."</p>
            </div>
        </div>
    );
};

export default EquilibriumIntro;
