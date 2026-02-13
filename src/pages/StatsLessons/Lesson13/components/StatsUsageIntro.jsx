import React from 'react';
import { FaTools, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const StatsUsageIntro = () => {
    return (
        <div className="stats-usage-intro" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card intro-card" style={{ borderLeft: '5px solid var(--stats-primary)', paddingLeft: '20px' }}>
                <h2 className="stats-card-heading primary">
                    <FaTools /> The Power of Statistical Tools
                </h2>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '12px' }}>
                    <p style={{ color: 'var(--stats-text)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '15px' }}>
                        In this final chapter, we bridge the gap between "Learning Statistics" and "Using Statistics." Theoretical models, formulas, and graphs are essentially the "alphabet" of economics—this chapter is where we learn to write the "sentences" that solve real-world problems.
                    </p>
                    <p style={{ color: 'var(--stats-text)', fontSize: '1rem', lineHeight: '1.6' }}>
                        Statistical tools are not just for examinations; they are the backbone of policy formulation. When the government decides to increase the minimum wage or a company decides to launch a new product, they rely on the methodologies we've studied: Collection, Organization, Presentation, and Analysis.
                    </p>
                </div>

                <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
                    <div className="stats-card-small" style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: 'var(--stats-primary)', marginBottom: '10px' }}>
                            <FaCheckCircle style={{ marginRight: '8px' }} /> Quantitative vs Qualitative
                        </h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>While stats focuses on numbers (Quantitative), real-world usage requires understanding the context (Qualitative)—such as social factors that numbers might miss.</p>
                    </div>
                    <div className="stats-card-small" style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>
                            <FaCheckCircle style={{ marginRight: '8px' }} /> Ethical Data Usage
                        </h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>With great data comes great responsibility. Statistical tools must be used without bias to ensure that conclusions are fair and factually representative.</p>
                    </div>
                    <div className="stats-card-small" style={{ background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <h4 style={{ color: '#10b981', marginBottom: '10px' }}>
                            <FaCheckCircle style={{ marginRight: '8px' }} /> The Final Objective
                        </h4>
                        <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>The ultimate goal of any statistical study in Economics is to suggest actionable solutions to problems like poverty, unemployment, and inflation.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsUsageIntro;
