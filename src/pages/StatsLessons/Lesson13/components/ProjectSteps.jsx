import React from 'react';
import { FaProjectDiagram, FaClipboardList, FaSearch, FaChartBar, FaFileAlt } from 'react-icons/fa';

const ProjectSteps = () => {
    const steps = [
        { icon: <FaSearch />, title: "Problem Identification", desc: "Defining the objective of the study (e.g., 'Analyzing the impact of social media on student study hours')." },
        { icon: <FaClipboardList />, title: "Data Collection", desc: "Choosing primary surveys for first-hand student feedback or secondary logs from app-usage databases." },
        { icon: <FaProjectDiagram />, title: "Organization", desc: "Classifying the raw response hours into a frequency distribution (e.g., 0-2 hours, 2-4 hours)." },
        { icon: <FaChartBar />, title: "Analysis", desc: "Calculating the Mean study time and its Correlation with screen time to find patterns." },
        { icon: <FaFileAlt />, title: "Interpretation", desc: "Concluding whether high screen time directly reduces study efficiency and suggesting better habits." }
    ];

    return (
        <div className="project-steps" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ paddingLeft: '20px', marginBottom: '30px' }}>
                <h3 className="stats-card-heading" style={{ color: 'var(--stats-primary)' }}>
                    <FaClipboardList /> How to Conduct a Statistical Project
                </h3>

                <div className="timeline" style={{ marginTop: '30px', position: 'relative' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="timeline-item" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                            <div className="timeline-icon" style={{
                                width: '50px',
                                height: '50px',
                                background: 'var(--stats-primary)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                color: '#fff',
                                flexShrink: 0
                            }}>
                                {step.icon}
                            </div>
                            <div className="timeline-content" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: '15px', width: '100%' }}>
                                <h4 style={{ color: 'var(--stats-primary)', marginBottom: '5px' }}>Step {index + 1}: {step.title}</h4>
                                <p style={{ margin: 0, fontSize: '0.95rem' }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Worked Example Section */}
            <div className="stats-card" style={{ borderLeft: '5px solid #ec4899', paddingLeft: '20px' }}>
                <h3 className="stats-card-heading" style={{ color: '#ec4899' }}>
                    <FaProjectDiagram /> Worked Example: The "Street Food" Study
                </h3>
                <div className="stats-problem-box" style={{ background: 'rgba(236, 72, 153, 0.05)', padding: '20px', borderRadius: '15px' }}>
                    <p style={{ color: 'var(--stats-text)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        Imagine you want to study the <strong>Expenditure on Street Food</strong> by students. Here is how your project would look:
                    </p>
                    <ul style={{ marginTop: '15px', display: 'grid', gap: '10px' }}>
                        <li><strong>1. Identification:</strong> "How much do Grade 11 students spend on street food monthly?"</li>
                        <li><strong>2. Collection:</strong> You distribute a Google Form (Primary Data) to 50 classmates.</li>
                        <li><strong>3. Organization:</strong> You create a table with class intervals (₹0-500, ₹501-1000, etc.).</li>
                        <li><strong>4. Analysis:</strong> You find that the <em>Mean</em> expenditure is ₹1,200/month.</li>
                        <li><strong>5. Conclusion:</strong> You observe that students living in hostels spend 40% more than locals, and suggest healthier cafeteria options.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectSteps;
