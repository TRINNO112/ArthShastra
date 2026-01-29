import React from 'react';

const EquilibriumGraph = () => {
    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Visual Analysis</span>
                <h2 className="section-title-lesson">Equilibrium Graph</h2>
                <p className="section-subtitle-lesson">
                    Visualizing the point where Producer's Equilibrium is achieved.
                </p>
            </div>

            <div className="premium-card" style={{ padding: '20px', background: 'rgba(13, 17, 23, 0.8)', borderRadius: '12px', border: '1px solid #30363d' }}>
                <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto', position: 'relative' }}>

                    {/* PURE SVG IMPLEMENTATION - SCALES PERFECTLY */}
                    <svg viewBox="0 0 500 350" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>

                        {/* DEFS for Arrow Markers */}
                        <defs>
                            <marker id="arrowhead-light" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#ccc" />
                            </marker>
                        </defs>

                        {/* Y AXIS */}
                        <line x1="50" y1="300" x2="50" y2="20" stroke="#ccc" strokeWidth="2" markerEnd="url(#arrowhead-light)" />
                        <text x="40" y="20" textAnchor="end" fontSize="16" fontWeight="bold" fill="#ccc">Y</text>
                        <text x="30" y="150" textAnchor="middle" transform="rotate(-90, 30, 150)" fontSize="14" fill="#888" fontWeight="bold" letterSpacing="1">Revenue & Cost</text>

                        {/* X AXIS */}
                        <line x1="50" y1="300" x2="480" y2="300" stroke="#ccc" strokeWidth="2" markerEnd="url(#arrowhead-light)" />
                        <text x="480" y="320" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ccc">X</text>
                        <text x="50" y="320" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#ccc">O</text>
                        <text x="265" y="340" textAnchor="middle" fontSize="18" fill="#aaa" fontWeight="bold">Output</text>

                        {/* MR LINE (Horizontal) */}
                        <line x1="50" y1="120" x2="450" y2="120" stroke="#00ffff" strokeWidth="2" />
                        <text x="460" y="125" textAnchor="start" fontSize="16" fill="#00ffff" fontWeight="bold">MR</text>

                        {/* MC CURVE (Bezier) */}
                        {/* Calculated path to intersect exactly at (118,120) and (382,120) */}
                        <path d="M 80 20 Q 250 525 420 20" fill="none" stroke="#00ff00" strokeWidth="2" />
                        <text x="425" y="40" textAnchor="start" fontSize="16" fill="#00ff00" fontWeight="bold">MC</text>

                        {/* INTERSECTION 1 (g / Q1) */}
                        <circle cx="118" cy="120" r="6" fill="#fff" />
                        <text x="118" y="100" textAnchor="middle" fontSize="18" fill="#00ff00" fontWeight="bold">g</text>
                        <line x1="118" y1="120" x2="118" y2="300" stroke="#4682B4" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="118" y="320" textAnchor="middle" fontSize="16" fill="#aaa" fontWeight="bold">Q<tspan dy="3" fontSize="12">1</tspan></text>

                        {/* INTERSECTION 2 (h / Q2) */}
                        <circle cx="382" cy="120" r="6" fill="#fff" />
                        <text x="382" y="100" textAnchor="middle" fontSize="18" fill="#00ff00" fontWeight="bold">h</text>
                        <line x1="382" y1="120" x2="382" y2="300" stroke="#4682B4" strokeWidth="2" strokeDasharray="5,5" />
                        <text x="382" y="320" textAnchor="middle" fontSize="16" fill="#aaa" fontWeight="bold">Q<tspan dy="3" fontSize="12">2</tspan></text>

                        {/* DIRECTION ARROW AT 'h' */}
                        <line x1="382" y1="120" x2="420" y2="80" stroke="#fff" strokeWidth="2" markerEnd="url(#arrowhead-light)" />

                    </svg>

                    {/* CAPTION */}
                    <div style={{ textAlign: 'center', marginTop: '10px', padding: '10px', border: '2px solid #00ff00', color: '#00ff00', fontWeight: 'bold', fontSize: '1.2rem', background: '#000' }}>
                        Perfect Competition Market
                    </div>
                </div>
            </div>

            <div className="note-text" style={{ textAlign: 'center', marginTop: '20px', color: '#ccc' }}>
                At point <strong>g</strong> (Q1), MC cuts MR from above (Profit is not max).<br />
                At point <strong>h</strong> (Q2), MC cuts MR from below (Equilibrium achieved).
            </div>
        </div>
    );
};

export default EquilibriumGraph;
