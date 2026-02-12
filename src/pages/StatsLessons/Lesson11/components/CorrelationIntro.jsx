import React from 'react';
import { FaProjectDiagram, FaChartLine, FaChartBar, FaSortNumericDown } from 'react-icons/fa';

const CorrelationIntro = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">CORRELATION</h2>
                <p className="stats-subtitle">Exploring Relationships Between Variables</p>
            </div>

            {/* ═══ WHAT IS CORRELATION? ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaProjectDiagram /> What is Correlation?
                </h3>
                <div className="stats-definition">
                    <p className="stats-definition-text">
                        So far, we have studied <strong style={{ color: '#3b82f6' }}>univariate distributions</strong> (data with one variable, like height).
                        But in real life, variables often move together.
                    </p>
                    <p className="stats-definition-text" style={{ marginTop: '10px' }}>
                        <strong style={{ color: '#fff' }}>Correlation</strong> is a statistical tool used to study the relationship between <strong style={{ color: '#10b981' }}>two or more variables</strong>.
                        It tells us if a change in one variable results in a change in the other.
                    </p>
                    <div style={{ marginTop: '15px', display: 'flex', gap: '15px' }}>
                        <div style={{ flex: 1, padding: '12px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', borderRadius: '8px' }}>
                            <strong style={{ color: '#3b82f6', display: 'block', marginBottom: '4px' }}>Example 1</strong>
                            As <strong>Temperature</strong> goes UP ⬆️, ice cream sales go UP ⬆️.
                            <div style={{ fontSize: '0.8rem', color: '#fff', marginTop: '4px' }}>(Positive Correlation)</div>
                        </div>
                        <div style={{ flex: 1, padding: '12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px' }}>
                            <strong style={{ color: '#ef4444', display: 'block', marginBottom: '4px' }}>Example 2</strong>
                            As <strong>Price</strong> goes UP ⬆️, demand goes DOWN ⬇️.
                            <div style={{ fontSize: '0.8rem', color: '#fff', marginTop: '4px' }}>(Negative Correlation)</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══ TYPES OF CORRELATION ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    Types of Correlation
                </h3>
                <div className="stats-grid-2">
                    {/* Positive */}
                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #10b981' }}>
                        <h4 style={{ color: '#10b981', margin: '0 0 8px 0', fontSize: '1rem' }}>1. Positive Correlation</h4>
                        <p style={{ color: 'var(--stats-text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Both variables move in the <strong style={{ color: '#fff' }}>same direction</strong>.
                            If X rises, Y rises. If X falls, Y falls.
                            <br /><br />
                            <em style={{ color: 'var(--stats-text-muted)' }}>Examples: Income & Expenditure, Height & Weight.</em>
                        </p>
                    </div>

                    {/* Negative */}
                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #ef4444' }}>
                        <h4 style={{ color: '#ef4444', margin: '0 0 8px 0', fontSize: '1rem' }}>2. Negative Correlation</h4>
                        <p style={{ color: 'var(--stats-text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Variables move in <strong style={{ color: '#fff' }}>opposite directions</strong>.
                            If X rises, Y falls (and vice versa).
                            <br /><br />
                            <em style={{ color: 'var(--stats-text-muted)' }}>Examples: Price & Demand, Speed & Time to destination.</em>
                        </p>
                    </div>

                    {/* Linear */}
                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #3b82f6' }}>
                        <h4 style={{ color: '#3b82f6', margin: '0 0 8px 0', fontSize: '1rem' }}>3. Linear Correlation</h4>
                        <p style={{ color: 'var(--stats-text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Checkered change in X leads to a <strong style={{ color: '#fff' }}>constant ratio</strong> change in Y.
                            Points usually form a straight line.
                        </p>
                    </div>

                    {/* Non-Linear */}
                    <div style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #8b5cf6' }}>
                        <h4 style={{ color: '#8b5cf6', margin: '0 0 8px 0', fontSize: '1rem' }}>4. Non-Linear (Curvilinear)</h4>
                        <p style={{ color: 'var(--stats-text)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Change ratio is <strong style={{ color: '#fff' }}>not constant</strong>.
                            Points form a curve rather than a straight line.
                        </p>
                    </div>
                </div>
            </div>

            {/* ═══ METHODS OF STUDYING CORRELATION ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#ec4899' }}>
                    <FaChartLine /> Methods to Study Correlation
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '20px' }}>
                    We will explore these three methods in this chapter:
                </p>

                <div style={{ display: 'grid', gap: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                        <div style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                            <FaProjectDiagram />
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>Scatter Diagram</h4>
                            <p style={{ margin: 0, color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                                A graphical method. We plot points (X,Y) on a graph to visualize the direction and closeness of the relationship. Simple but imprecise.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                        <div style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                            <FaChartBar />
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>Karl Pearson's Coefficient (r)</h4>
                            <p style={{ margin: 0, color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                                A precise quantitative method using Mean and Standard Deviation.
                                The value 'r' lies between <strong>-1 and +1</strong>. Best for numeric data.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                        <div style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                            <FaSortNumericDown />
                        </div>
                        <div>
                            <h4 style={{ color: '#fff', margin: '0 0 5px 0' }}>Spearman's Rank Correlation (R)</h4>
                            <p style={{ margin: 0, color: 'var(--stats-text-muted)', fontSize: '0.9rem' }}>
                                Used when data cannot be measured precisely (e.g., beauty, honesty, wisdom) but can be <strong>ranked</strong>.
                                Uses ranks instead of actual values.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorrelationIntro;
