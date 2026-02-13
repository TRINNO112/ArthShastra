import React from 'react';
import { FaTools, FaCheckCircle, FaLightbulb, FaExclamationTriangle, FaShieldAlt, FaBalanceScale, FaMicrochip, FaArrowRight, FaSearchPlus, FaChartPie } from 'react-icons/fa';

const StatsUsageIntro = () => {
    return (
        <div className="stats-usage-intro" style={{ animation: 'fadeIn 0.7s ease-out' }}>
            {/* Hero Section */}
            <div className="stats-card intro-hero" style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(37, 99, 235, 0.05) 100%)',
                borderLeft: '8px solid var(--stats-primary)',
                padding: '40px',
                marginBottom: '40px',
                borderRadius: '20px'
            }}>
                <h2 className="stats-card-heading primary" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
                    <FaTools /> Statistics: From Theory to Action
                </h2>
                <p style={{ color: 'var(--stats-text)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '900px' }}>
                    Congratulations! You've navigated through the complex world of Mean, Median, Dispersion, Correlation, and Index Numbers. But in Economics, numbers without purpose are just ink on paper. This final chapter is the <strong>Integration Phase</strong>—where we take these isolated tools and build a complete mechanism to diagnose, analyze, and solve national economic problems.
                </p>
            </div>

            {/* Graphical Lifecycle Infographic */}
            <div className="stats-card" style={{ marginBottom: '40px', padding: '40px', background: 'rgba(255,255,255,0.01)', border: '1px dashed rgba(255,255,255,0.1)' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '1.5rem', opacity: 0.9 }}>
                    <FaChartPie style={{ marginRight: '10px' }} /> The Statistical Lifecycle
                </h3>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    position: 'relative'
                }}>
                    {[
                        { icon: <FaSearchPlus />, label: "Question", color: "#3b82f6" },
                        { icon: <FaDatabase />, label: "Collection", color: "#8b5cf6" },
                        { icon: <FaMicrochip />, label: "Analysis", color: "#ec4899" },
                        { icon: <FaCheckCircle />, label: "Policy", color: "#10b981" }
                    ].map((item, idx) => (
                        <React.Fragment key={idx}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px',
                                flex: '1',
                                minWidth: '120px'
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `${item.color}20`,
                                    border: `2px solid ${item.color}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: item.color,
                                    boxShadow: `0 0 20px ${item.color}30`
                                }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{item.label}</span>
                            </div>
                            {idx < 3 && (
                                <div className="infographic-arrow" style={{
                                    fontSize: '1.5rem',
                                    opacity: 0.3,
                                    transform: 'rotate(0deg)',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <FaArrowRight />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Critical Frameworks for Analysis - 4 Columns */}
            <div className="stats-card" style={{ background: 'var(--stats-bg-alt)', borderRadius: '25px', padding: '40px' }}>
                <h3 style={{ marginBottom: '30px', fontSize: '1.8rem', textAlign: 'center' }}>Critical Frameworks for Analysis</h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
                    <div style={{ padding: '25px', borderRadius: '15px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
                        <h4 style={{ color: '#ef4444', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaShieldAlt /> Ethical Rigor
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>
                            Data can be manipulated to tell lies. As a professional, you must ensure that your <strong>Sampling Method</strong> is unbiased and truthful.
                        </p>
                    </div>

                    <div style={{ padding: '25px', borderRadius: '15px', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
                        <h4 style={{ color: '#f59e0b', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaExclamationTriangle /> Limitation Scope
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>
                            Statistics deals with <strong>Aggregates</strong>. It doesn't describe individuals. Always look for hidden outliers that skew the mean.
                        </p>
                    </div>

                    <div style={{ padding: '25px', borderRadius: '15px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                        <h4 style={{ color: '#3b82f6', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaMicrochip /> Computational Integrity
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>
                            In the age of Big Data, manual calculation is rare. Accuracy depends on choosing the correct <strong>Software & Algorithms</strong>.
                        </p>
                    </div>

                    <div style={{ padding: '25px', borderRadius: '15px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaCheckCircle /> Policy Outcome
                        </h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5', opacity: 0.85 }}>
                            The project is incomplete without a <strong>Solution</strong>. Findings must lead to actionable advice for governments or firms.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rich Context Section */}
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', marginTop: '40px' }}>
                <div className="stats-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <h3 style={{ color: 'var(--stats-primary)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <FaLightbulb /> Why This Chapter Matters?
                    </h3>
                    <div style={{ marginTop: '20px', lineHeight: '1.7', opacity: 0.9 }}>
                        <p>A single number like GDP or the Sensex Index summarizes the behavior of millions. Understanding the <em>Use</em> of these tools ensures you don't misinterpret the "pressure" of the economy.</p>
                    </div>
                </div>

                <div className="stats-card" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <h3 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <FaBalanceScale /> The Economic Barometers
                    </h3>
                    <p style={{ marginTop: '20px', lineHeight: '1.7', opacity: 0.9 }}>
                        Just as a doctor uses a thermometer, economists use <strong>Statistical Barometers</strong> to diagnose hunger, poverty, and inflation. Without them, we are blind.
                    </p>
                </div>
            </div>
        </div>
    );
};

// Mock icon for Infographic
const FaDatabase = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M448 73.1c0 38.2-100.3 69.1-224 69.1S0 111.3 0 73.1 100.3 4.1 224 4.1s224 30.9 224 69.0zm0 112.1c0 38.2-100.3 69.1-224 69.1S0 223.4 0 185.2v88.3c0 38.2 100.3 69.1 224 69.1s224-30.9 224-69.1v-88.3zm0 185.3c0 38.2-100.3 69.1-224 69.1S0 408.8 0 370.6v88.3c0 38.2 100.3 69.1 224 69.1s224-30.9 224-69.1v-88.3z"></path>
    </svg>
);

export default StatsUsageIntro;
