import React from 'react';
import { FaProjectDiagram, FaClipboardList, FaSearch, FaChartBar, FaFileAlt, FaUserEdit, FaCheckDouble } from 'react-icons/fa';

const ProjectSteps = () => {
    const methodology = [
        { icon: <FaSearch />, title: "Problem Definition", desc: "Identify the critical economic question. Is it about poverty, unemployment, or consumer behavior?" },
        { icon: <FaUserEdit />, title: "Pilot Survey", desc: "Always conduct a trial run with a small group to check if your questions are clear and unbiased." },
        { icon: <FaClipboardList />, title: "Data Collection Strategy", desc: "Choose your source. Primary (Survey/Interview) or Secondary (Reports/Websites)." },
        { icon: <FaProjectDiagram />, title: "Data Processing", desc: "Clean the raw data, classify it into frequency arrays, and organize it into formal tables." },
        { icon: <FaChartBar />, title: "Analytical Tools", desc: "Apply Mean, Median, Correlation, or Index Numbers depending on the objective." },
        { icon: <FaFileAlt />, title: "Final Interpretation", desc: "Translate numbers into words. What does a Correlation of 0.8 actually mean for the policy?" }
    ];

    return (
        <div className="project-methodology" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ padding: '30px', borderLeft: '5px solid var(--stats-primary)' }}>
                <h3 className="stats-card-heading" style={{ color: 'var(--stats-primary)', fontSize: '1.8rem' }}>
                    <FaClipboardList /> The Professional Methodology
                </h3>
                <p style={{ margin: '15px 0 30px', opacity: 0.8 }}>Before starting your Case Study, you must follow this rigorous 6-step framework used by professional economists.</p>

                <div className="methodology-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {methodology.map((step, index) => (
                        <div key={index} style={{
                            background: 'var(--stats-bg-alt)',
                            padding: '25px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                position: 'absolute',
                                right: '-10px',
                                top: '-10px',
                                fontSize: '4rem',
                                opacity: 0.05,
                                color: 'var(--stats-primary)'
                            }}>
                                {step.icon}
                            </div>
                            <h4 style={{ color: 'var(--stats-primary)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>0{index + 1}</span> {step.title}
                            </h4>
                            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.85 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Checklist Section */}
            <div className="stats-card" style={{ marginTop: '30px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                <h4 style={{ color: '#10b981', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FaCheckDouble /> Investigator's Checklist
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>✓ Accuracy in data entry</div>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>✓ Logical sequencing of survey</div>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>✓ Clear sampling objective</div>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px' }}>✓ Confidentiality of respondents</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSteps;
