import React from 'react';
import { FaChartLine, FaArrowUp, FaArrowDown, FaRandom } from 'react-icons/fa';

const ScatterDiagram = () => {

    // Mini-chart component for reusable scatter plots
    const MiniScatter = ({ type, color, title, desc }) => {
        // Generate points based on type
        const points = [];
        for (let i = 0; i < 20; i++) {
            let x = 10 + Math.random() * 80;
            let y;
            if (type === 'positive') {
                y = x + (Math.random() * 20 - 10); // y follows x
            } else if (type === 'negative') {
                y = 100 - x + (Math.random() * 20 - 10); // y opposes x
            } else {
                y = 10 + Math.random() * 80; // random
            }
            // Clamp
            y = Math.max(5, Math.min(95, y));
            points.push({ x, y });
        }

        return (
            <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 'var(--stats-radius)',
                padding: '15px',
                border: `1px solid ${color}30`,
                textAlign: 'center'
            }}>
                <div style={{
                    height: '120px',
                    borderLeft: '2px solid rgba(255,255,255,0.2)',
                    borderBottom: '2px solid rgba(255,255,255,0.2)',
                    position: 'relative',
                    marginBottom: '10px',
                    background: `linear-gradient(to bottom right, ${color}10, transparent)`,
                    overflow: 'hidden'
                }}>
                    {points.map((p, i) => (
                        <div key={i} style={{
                            position: 'absolute',
                            left: `${p.x}%`,
                            bottom: `${p.y}%`,
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: color,
                            boxShadow: `0 0 4px ${color}`
                        }} />
                    ))}
                    {type !== 'none' && (
                        <div style={{
                            position: 'absolute',
                            left: '10%', bottom: type === 'positive' ? '10%' : '90%',
                            width: '80%', height: '2px',
                            background: color,
                            opacity: 0.3,
                            transform: type === 'positive' ? 'rotate(-45deg)' : 'rotate(45deg)',
                            transformOrigin: type === 'positive' ? 'bottom left' : 'top left',
                            bottom: type === 'negative' ? 'auto' : '10%',
                            top: type === 'negative' ? '10%' : 'auto'
                        }} />
                    )}
                </div>
                <h4 style={{ color: color, margin: '5px 0', fontSize: '1rem' }}>{title}</h4>
                <p style={{ color: 'var(--stats-text-muted)', fontSize: '0.8rem', margin: 0 }}>{desc}</p>
            </div>
        );
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">SCATTER DIAGRAMS</h2>
                <p className="stats-subtitle">Visualizing the Relationship</p>
            </div>

            {/* ═══ WHAT IS IT? ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaChartLine /> The Simplest Visual Method
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8' }}>
                    A <strong style={{ color: '#fff' }}>Scatter Diagram</strong> is a graph where the values of two variables are plotted as points.
                    The pattern of points reveals the nature of the relationship.
                    It gives a visual idea but <strong style={{ color: '#ef4444' }}>does not give a precise numerical value</strong>.
                </p>
            </div>

            {/* ═══ TYPES OF CORRELATION GRAPHS ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    Interpreting the Graphs
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>

                    {/* Perfect Positive */}
                    <MiniScatter
                        type="positive"
                        color="#10b981"
                        title="Positive Correlation"
                        desc="Points go UP from left to right. Both variables increase together."
                    />

                    {/* Perfect Negative */}
                    <MiniScatter
                        type="negative"
                        color="#ef4444"
                        title="Negative Correlation"
                        desc="Points go DOWN from left to right. One increases, other decreases."
                    />

                    {/* No Correlation */}
                    <MiniScatter
                        type="none"
                        color="#fff"
                        title="No Correlation"
                        desc="Points are scattered randomly. No clear pattern."
                    />

                </div>
            </div>

            {/* ═══ STRENGTH OF CORRELATION ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#3b82f6' }}>
                    Degree of Correlation (Visual)
                </h3>
                <div style={{ display: 'grid', gap: '15px' }}>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #10b981' }}>
                        <strong style={{ color: '#10b981', display: 'block', marginBottom: '5px' }}>Perfect Correlation</strong>
                        All points lie exactly on a straight line.
                    </div>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #3b82f6' }}>
                        <strong style={{ color: '#3b82f6', display: 'block', marginBottom: '5px' }}>High Degree</strong>
                        Points are very close to a straight line (narrow band).
                    </div>
                    <div className="stats-definition" style={{ borderLeft: '3px solid #f59e0b' }}>
                        <strong style={{ color: '#f59e0b', display: 'block', marginBottom: '5px' }}>Low Degree</strong>
                        Points are widely scattered but still show a general trend.
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ScatterDiagram;
