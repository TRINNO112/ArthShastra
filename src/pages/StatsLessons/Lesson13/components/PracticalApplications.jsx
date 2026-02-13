import React from 'react';
import { FaGlobeAmericas, FaHospital, FaUniversity, FaChartLine, FaRobot, FaLeaf, FaArrowUp } from 'react-icons/fa';

const PracticalApplications = () => {
    const apps = [
        {
            icon: <FaHospital />,
            title: "Healthcare Crisis Management",
            color: "#10b981",
            desc: "Calculating R-rates, hospital bed forecasting, and vaccine efficacy. Statistics is the front-line tool for public health safety."
        },
        {
            icon: <FaChartLine />,
            title: "Stock Market & Volatility",
            color: "#3b82f6",
            desc: "Using standard deviation and beta factors to predict market risk. Most 'algorithmic trading' is purely advanced statistics."
        },
        {
            icon: <FaUniversity />,
            title: "Monetary Policy (RBI)",
            color: "#f59e0b",
            desc: "Monitoring Consumer Price Indices (CPI) to set interest rates and fight national inflation. This is exactly what we learned in Lesson 12!"
        },
        {
            icon: <FaRobot />,
            title: "AI & Neural Networks",
            color: "#8b5cf6",
            desc: "Modern AI models learn patterns through probability and regression. Machine Learning is effectively 'High-Frequency Statistics'."
        },
        {
            icon: <FaLeaf />,
            title: "Climate Change Modeling",
            color: "#059669",
            desc: "Predicting global temperature rise using time-series analysis and regression models to design climate policy."
        },
        {
            icon: <FaArrowUp />,
            title: "National Census (NSSO)",
            color: "#ef4444",
            desc: "Planning the distribution of food grains and subsidies based on demographic survey data and aggregate means."
        }
    ];

    return (
        <div className="practical-apps" style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ borderLeft: '5px solid #3b82f6', background: 'rgba(255,255,255,0.01)' }}>
                <h3 className="stats-card-heading" style={{ color: '#3b82f6' }}>
                    <FaGlobeAmericas /> Statistics: Changing the World
                </h3>
                <p style={{ margin: '10px 0 30px', opacity: 0.8 }}>Beyond the classroom, these tools are used to govern nations, build technology, and save lives.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                    {apps.map((app, i) => (
                        <div key={i} className="app-case-premium" style={{
                            background: 'var(--stats-bg-alt)',
                            padding: '25px',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            cursor: 'default'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: `${app.color}15`,
                                color: app.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.5rem',
                                marginBottom: '20px'
                            }}>
                                {app.icon}
                            </div>
                            <h4 style={{ color: app.color, marginBottom: '10px' }}>{app.title}</h4>
                            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.8, margin: 0 }}>{app.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.5, fontSize: '0.9rem' }}>
                Note: These applications rely on the exact mathematical fundamentals covered in Chapters 1-12.
            </div>
        </div>
    );
};

export default PracticalApplications;
