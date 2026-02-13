import React, { useState, useEffect, useRef } from 'react';
import { FaGlobeAmericas, FaHospital, FaUniversity, FaChartLine, FaRobot, FaLeaf, FaArrowUp, FaSearch, FaRocket, FaShoppingCart, FaShieldAlt, FaFileSignature } from 'react-icons/fa';

/**
 * PracticalApplications - "The Lens of Truth"
 * Concept: User moves a "searchlight" (cursor) to reveal hidden statistical data
 * on top of a "real world" background. Expanded to 10 sectors.
 */
const PracticalApplications = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    // Track mouse position relative to container
    const handleMouseMove = (e) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const modules = [
        {
            id: 'health',
            icon: <FaHospital />,
            title: "Healthcare",
            stat: "R₀ = 1.2",
            desc: "Predicting Outbreaks",
            top: 20, left: 10,
            color: "#10b981"
        },
        {
            id: 'stocks',
            icon: <FaChartLine />,
            title: "Markets",
            stat: "σ = 15.4%",
            desc: "Risk Modelling",
            top: 20, left: 30,
            color: "#3b82f6"
        },
        {
            id: 'ai',
            icon: <FaRobot />,
            title: "AI / ML",
            stat: "P(x) > 0.9",
            desc: "Neural Nets",
            top: 20, left: 50,
            color: "#8b5cf6"
        },
        {
            id: 'space',
            icon: <FaRocket />,
            title: "Space",
            stat: "Δv = 9.8",
            desc: "Trajectory Calc",
            top: 20, left: 70,
            color: "#f43f5e"
        },
        {
            id: 'sports',
            icon: <FaArrowUp />,
            title: "Sports",
            stat: "xG = 2.4",
            desc: "Sabermetrics",
            top: 20, left: 90,
            color: "#f59e0b"
        },
        {
            id: 'economy',
            icon: <FaUniversity />,
            title: "Inflation",
            stat: "CPI ↑ 5.4%",
            desc: "Monetary Policy",
            top: 70, left: 10,
            color: "#f59e0b"
        },
        {
            id: 'climate',
            icon: <FaLeaf />,
            title: "Climate",
            stat: "+1.5°C",
            desc: "Time Series",
            top: 70, left: 30,
            color: "#059669"
        },
        {
            id: 'ecom',
            icon: <FaShoppingCart />,
            title: "E-Comm",
            stat: "CTR 2.1%",
            desc: "Recommenders",
            top: 70, left: 50,
            color: "#db2777"
        },
        {
            id: 'politics',
            icon: <FaSearch />,
            title: "Polling",
            stat: "±3% Margin",
            desc: "Sampling Error",
            top: 70, left: 70,
            color: "#6366f1"
        },
        {
            id: 'insurance',
            icon: <FaShieldAlt />,
            title: "Insurance",
            stat: "Risk 0.01",
            desc: "Actuarial Sci",
            top: 70, left: 90,
            color: "#475569"
        }
    ];

    return (
        <div style={{ padding: '0 20px 40px' }}>
            {/* Section Header */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', color: '#fff', fontSize: '2rem' }}>
                    <FaSearch style={{ color: '#3b82f6' }} /> The Lens of Truth
                </h2>
                <p style={{ opacity: 0.6, marginTop: '10px' }}>
                    Statistics reveals the hidden structure of reality. Move your cursor to see the truth.
                </p>
            </div>

            <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                style={{
                    width: '100%',
                    height: '600px',
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid #334155',
                    cursor: 'none', // Hide default cursor inside
                    background: '#0f172a'
                }}
            >
                {/* LAYER 1: THE REAL WORLD (Blurred, Grayscale) */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
                    filter: 'grayscale(100%) contrast(0.8) blur(0px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    {/* Blurred Icons */}
                    {modules.map((m, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: `${m.top}%`,
                            left: `${m.left}%`,
                            transform: 'translate(-50%, -50%)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            opacity: 0.3
                        }}>
                            <div style={{ fontSize: '4rem', color: '#fff' }}>{m.icon}</div>
                            <div style={{ marginTop: '10px', fontSize: '1.2rem', fontWeight: 'bold' }}>{m.title}</div>
                        </div>
                    ))}

                    <div style={{ opacity: 0.2, fontSize: '3rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '10px' }}>
                        The World As It Seems
                    </div>
                </div>

                {/* LAYER 2: THE STATISTICAL TRUTH (Revealed by "Lens") */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: '#0f172a', /* Dark background for the revealed part to make colors pop */
                    // The Magic: Clip Path creates the spotlight circle
                    clipPath: `circle(150px at ${mousePos.x}px ${mousePos.y}px)`,
                    pointerEvents: 'none', // Let mouse events pass through to container
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    {/* Vivid Grid */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 70, 229, 0.2) 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                    }}></div>

                    {/* Revealed Data Nodes */}
                    {modules.map((m, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: `${m.top}%`,
                            left: `${m.left}%`,
                            transform: 'translate(-50%, -50%)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            animation: 'float 4s ease-in-out infinite'
                        }}>
                            {/* Connecting Lines */}
                            <div style={{ position: 'absolute', width: '150px', height: '150px', border: `1px dashed ${m.color}`, borderRadius: '50%', animation: 'spin 10s linear infinite' }}></div>

                            <div style={{ fontSize: '4rem', color: m.color, filter: `drop-shadow(0 0 20px ${m.color})` }}>{m.icon}</div>

                            <div style={{
                                background: 'rgba(0,0,0,0.8)',
                                border: `1px solid ${m.color}`,
                                padding: '10px 20px',
                                borderRadius: '10px',
                                marginTop: '15px',
                                textAlign: 'center',
                                minWidth: '150px'
                            }}>
                                <div style={{ color: m.color, fontSize: '0.9rem', fontWeight: 'bold' }}>STATISTICS DETECTED</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '5px 0' }}>{m.stat}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{m.desc}</div>
                            </div>
                        </div>
                    ))}

                    {/* Floating Math Symbols in Background Layer 2 */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            color: 'rgba(255,255,255,0.1)',
                            fontSize: '2rem',
                            fontWeight: 'bold'
                        }}>
                            {['∑', 'µ', 'σ', '∫', 'π', 'λ'][i % 6]}
                        </div>
                    ))}
                </div>

                {/* The Physical "Lens" Ring (Optional Decoration) */}
                <div style={{
                    position: 'absolute',
                    top: mousePos.y - 150,
                    left: mousePos.x - 150,
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 0 50px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.1)',
                    pointerEvents: 'none',
                    transition: 'transform 0.1s ease-out' // smoother follow
                }}></div>

            </div>
        </div>
    );
};

export default PracticalApplications;
