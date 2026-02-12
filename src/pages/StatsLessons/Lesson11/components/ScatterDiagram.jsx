import React from 'react';
import { FaChartLine, FaArrowUp, FaArrowDown, FaRandom } from 'react-icons/fa';

const ScatterDiagram = () => {

    // Mini-chart component using SVG for correct trend lines
    const MiniScatter = ({ type, color, title, desc }) => {
        // SVG coordinate system: (0,0) is top-left, Y increases downward
        // Use fixed points for cleaner, predictable illustration in standard charts
        const points = type === 'positive'
            ? [{ x: 10, y: 10 }, { x: 20, y: 25 }, { x: 30, y: 30 }, { x: 40, y: 45 }, { x: 50, y: 55 }, { x: 60, y: 60 }, { x: 70, y: 75 }, { x: 80, y: 85 }, { x: 90, y: 90 }]
            : type === 'negative'
                ? [{ x: 10, y: 90 }, { x: 20, y: 75 }, { x: 30, y: 70 }, { x: 40, y: 55 }, { x: 50, y: 45 }, { x: 60, y: 40 }, { x: 70, y: 25 }, { x: 80, y: 15 }, { x: 90, y: 10 }]
                : [{ x: 15, y: 40 }, { x: 25, y: 80 }, { x: 35, y: 20 }, { x: 45, y: 60 }, { x: 55, y: 30 }, { x: 65, y: 85 }, { x: 75, y: 10 }, { x: 85, y: 50 }, { x: 95, y: 70 }];

        return (
            <div style={{
                background: 'var(--stats-bg-alt)',
                borderRadius: 'var(--stats-radius)',
                padding: '20px',
                border: `1px solid ${color}20`,
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
                <div style={{ height: '160px', marginBottom: '15px' }}>
                    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                        {/* Background with Grid */}
                        <rect x="0" y="0" width="100" height="100" fill="rgba(255,255,255,0.02)" rx="4" />
                        {[20, 40, 60, 80].map(val => (
                            <React.Fragment key={val}>
                                <line x1="0" y1={val} x2="100" y2={val} stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                                <line x1={val} y1="0" x2={val} y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
                            </React.Fragment>
                        ))}

                        {/* Axes */}
                        <line x1="0" y1="0" x2="0" y2="100" stroke="var(--stats-text-muted)" strokeWidth="1" />
                        <line x1="0" y1="100" x2="100" y2="100" stroke="var(--stats-text-muted)" strokeWidth="1" />

                        {/* Data Points */}
                        {points.map((p, i) => (
                            <circle key={i} cx={p.x} cy={100 - p.y} r="3" fill={color} />
                        ))}

                        {/* Professional Trend Line */}
                        {type === 'positive' && (
                            <line x1="5" y1="95" x2="95" y2="5" stroke={color} strokeWidth="1" strokeDasharray="4" opacity="0.4" />
                        )}
                        {type === 'negative' && (
                            <line x1="5" y1="5" x2="95" y2="95" stroke={color} strokeWidth="1" strokeDasharray="4" opacity="0.4" />
                        )}
                    </svg>
                </div>
                <h4 style={{ color: color, margin: '5px 0', fontSize: '1.1rem', fontWeight: '700' }}>{title}</h4>
                <p style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem', margin: 0, lineHeight: '1.4' }}>{desc}</p>
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

                    {/* Positive */}
                    <MiniScatter
                        type="positive"
                        color="#10b981"
                        title="Positive Correlation"
                        desc="Points go UP from left to right. Both variables increase together."
                    />

                    {/* Negative */}
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
