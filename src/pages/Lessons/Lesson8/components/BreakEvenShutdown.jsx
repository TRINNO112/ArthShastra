import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import '../../css/lessons.css';
import '../../css/quiz.css';

const BreakEvenShutdown = () => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 450 });
    const [activeScenario, setActiveScenario] = useState('all'); // all, breakeven, shutdown

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setDimensions(prev => ({ ...prev, width: containerRef.current.offsetWidth }));
            }
        };
        window.addEventListener('resize', updateWidth);
        updateWidth();
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        if (!dimensions.width) return;

        // Draw Chart Logic

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const { width, height } = dimensions;
        // Reduced margins for mobile
        const margin = { top: 20, right: 10, bottom: 40, left: 35 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        svg.attr('width', width).attr('height', height);

        // --- Definitions ---
        const defs = svg.append('defs');
        defs.append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', '0 0 10 10')
            .attr('refX', 5)
            .attr('refY', 5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto-start-reverse')
            .append('path')
            .attr('d', 'M 0 0 L 10 5 L 0 10 z')
            .attr('fill', '#888');

        const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

        // --- Scales ---
        // Synthetic data to represent textbook curves
        const xScale = d3.scaleLinear().domain([0, 10]).range([0, innerWidth]);
        const yScale = d3.scaleLinear().domain([0, 25]).range([innerHeight, 0]);

        // --- Data Generators ---
        // AC = Q^2 - 8Q + 22 + 10/Q  (Min around Q=4.5)
        // AVC = Q^2 - 8Q + 22        (Min around Q=4)
        // MC = 3Q^2 - 16Q + 22       (Intersects min AC and min AVC)

        // Let's use simpler quadratic forms for clean visual
        // MC = 2Q - 6 (too simple, linear)
        // Let's use plotted points for control:
        const range = d3.range(0.5, 9.5, 0.1);

        // Functions tuned for visual clarity
        const avcFn = (q) => 0.5 * Math.pow(q - 4, 2) + 6; // Min at Q=4, Val=6
        const acFn = (q) => avcFn(q) + 4 / q + 1; // AC > AVC
        // Adjust AC so its min is distinct. 
        // Let's try simpler:
        // AVC min usually at lower Q than AC min? No, ATC min is at higher Q than AVC min.
        // AVC min at Q=4, P=6.
        // MC must pass through (4,6)

        // MC function passing through (4,6) with slope 2*0.5*(q-4) -> slope 0 at 4.
        // Actually MC slope is twice AVC slope.
        // If TVC = 0.5(Q-4)^2*Q + 6Q ... too complex.

        // Visual Approximation:
        const avcData = range.map(q => ({ q, val: 0.4 * Math.pow(q - 4, 2) + 6 }));
        const acData = range.map(q => ({ q, val: 0.4 * Math.pow(q - 4.5, 2) + 8.5 })); // Min at Q=4.5, P=8.5

        // MC needs to cut AVC at (4, 6) and AC at (4.5, 8.5)
        // Previous equation (1.33Q^2...) shot up to 70 at Q=9.5.
        // Let's use a milder curve that still fits the intersection points but stays < 25.
        // Maybe cubic? Or just clamped/adjusted range.
        // Or change the function entirely. curve has to be J shaped.
        // Let's force it to flatten or rise slower after the intersection.
        // Or simply reduce the domain of the chart to focus on the key area (0-7?). 
        // No, user wants J shape.

        // Let's fit a parabola passing through (4,6), (4.5, 8.5) and say (8, 20).
        // vertex form: a(x-h)^2 + k. 
        // If min is at 2.5: a(4-2.5)^2 + k = 6?? No min is separate.

        // Let's try 0.8 * Q^2 - 4 * Q + 10.
        // Q=4: 0.8*16 - 16 + 10 = 12.8 - 6 = 6.8. Close.
        // Q=9: 0.8*81 - 36 + 10 = 64.8 - 26 = 38 (Still high).

        // Let's just Clamp it visually or stop the line earlier.
        // The user complained about the "long red line".
        // Let's cap the data generation at Q=7 or 8 where it hits the top.
        // 1.33Q^2 - 6.32Q + 10 reaches 25 when: 1.33Q^2 - 6.32Q - 15 = 0.
        // Q approx 6.5.
        // So we strictly filter mcData to where val <= 25.

        const mcFn = q => 1.33 * q * q - 6.32 * q + 10;
        const mcData = range.map(q => ({ q, val: mcFn(q) })).filter(d => d.val <= 24); // Cut off before top


        // --- Drawing Curves ---
        const line = d3.line().x(d => xScale(d.q)).y(d => yScale(d.val)).curve(d3.curveBasis);

        const addPath = (data, color, width, dash) => {
            const p = g.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', color)
                .attr('stroke-width', width)
                .attr('d', line);

            if (dash) p.attr('stroke-dasharray', dash);

            // Animation
            const len = p.node().getTotalLength();
            p.attr("stroke-dasharray", dash ? `${dash} ${len}` : `${len} ${len}`)
                .attr("stroke-dashoffset", len)
                .transition()
                .duration(2000)
                .ease(d3.easeCubicOut)
                .attr("stroke-dashoffset", 0);
        };

        // AVC
        addPath(avcData, '#00bfff', 2, '5,5');

        // AC
        addPath(acData, '#ffd700', 2);

        // MC
        addPath(mcData, '#ff6b6b', 3);

        // --- Points of Interest ---
        const breakEvenPoint = { q: 4.5, p: 8.5 };
        const shutdownPoint = { q: 4, p: 6 };

        // --- Price Lines (Interactive) ---
        const drawPriceLine = (point, label, color, id) => {
            const isActive = activeScenario === 'all' || activeScenario === id;
            if (isActive) {
                // Dashed line from axis
                g.append('line')
                    .attr('x1', 0).attr('x2', innerWidth).attr('y1', yScale(point.p)).attr('y2', yScale(point.p))
                    .attr('stroke', color).attr('stroke-width', 2).attr('stroke-dasharray', '4,4');

                // Point
                g.append('circle')
                    .attr('cx', xScale(point.q)).attr('cy', yScale(point.p))
                    .attr('r', 6).attr('fill', color).attr('stroke', '#fff');

                // Label
                g.append('text')
                    .attr('x', innerWidth - 10).attr('y', yScale(point.p) - 8)
                    .attr('text-anchor', 'end')
                    .attr('fill', color).style('font-weight', 'bold')
                    .text(label);
            }
        };

        drawPriceLine(breakEvenPoint, 'P₁ = Min AC (Break-Even)', '#ffd700', 'breakeven');
        drawPriceLine(shutdownPoint, 'P₂ = Min AVC (Shutdown)', '#00bfff', 'shutdown');

        // --- Axes ---
        g.append('line').attr('x1', 0).attr('y1', innerHeight).attr('x2', innerWidth + 20).attr('y2', innerHeight)
            .attr('stroke', '#888').attr('stroke-width', 1.5).attr('marker-end', 'url(#arrow)');

        g.append('line').attr('x1', 0).attr('y1', innerHeight).attr('x2', 0).attr('y2', -20)
            .attr('stroke', '#888').attr('stroke-width', 1.5).attr('marker-end', 'url(#arrow)');

        // Labels
        g.append('text').attr('x', innerWidth / 2).attr('y', innerHeight + 40).attr('fill', '#ccc').text('Output (Q)').style('text-anchor', 'middle');
        g.append('text').attr('transform', 'rotate(-90)').attr('x', -innerHeight / 2).attr('y', -40).attr('fill', '#ccc').text('Price / Cost').style('text-anchor', 'middle');

        // Curve Labels
        // Labels moved down as per user request
        g.append('text').attr('x', xScale(9)).attr('y', yScale(acData[acData.length - 1].val) + 5).attr('fill', '#ffd700').text('AC').style('font-weight', 'bold');
        g.append('text').attr('x', xScale(9)).attr('y', yScale(avcData[avcData.length - 1].val) + 35).attr('fill', '#00bfff').text('AVC').style('font-weight', 'bold');
        g.append('text').attr('x', xScale(6.2)).attr('y', yScale(mcData[mcData.length - 1].val) - 10).attr('fill', '#ff6b6b').text('MC').style('font-weight', 'bold');


    }, [dimensions, activeScenario]);

    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Concept</span>
                <h2 className="section-title-lesson">Shutdown & Break-Even Points</h2>
                <p className="section-subtitle-lesson">Critical price levels for decision making in the short run.</p>
            </div>

            <div className="content-card">
                <div className="chart-controls" style={{ display: 'flex', gap: '10px', marginBottom: '15px', justifyContent: 'center' }}>
                    <button
                        className={`comic-button ${activeScenario === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveScenario('all')}
                        style={{
                            background: activeScenario === 'all' ? '#ffd700' : '#333',
                            color: activeScenario === 'all' ? '#000' : '#fff',
                            border: '3px solid #000',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            boxShadow: '4px 4px 0px #000',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontFamily: '"Comic Neue", "cursive", sans-serif'
                        }}
                    >
                        Show All
                    </button>
                    <button
                        className={`comic-button ${activeScenario === 'breakeven' ? 'active' : ''}`}
                        onClick={() => setActiveScenario('breakeven')}
                        style={{
                            background: activeScenario === 'breakeven' ? '#ffd700' : '#333',
                            color: activeScenario === 'breakeven' ? '#000' : '#fff',
                            border: '3px solid #000',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            boxShadow: '4px 4px 0px #000',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontFamily: '"Comic Neue", "cursive", sans-serif'
                        }}
                    >
                        Break Even
                    </button>
                    <button
                        className={`comic-button ${activeScenario === 'shutdown' ? 'active' : ''}`}
                        onClick={() => setActiveScenario('shutdown')}
                        style={{
                            background: activeScenario === 'shutdown' ? '#00bfff' : '#333',
                            color: activeScenario === 'shutdown' ? '#000' : '#fff',
                            border: '3px solid #000',
                            padding: '10px 20px',
                            fontWeight: 'bold',
                            boxShadow: '4px 4px 0px #000',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontFamily: '"Comic Neue", "cursive", sans-serif'
                        }}
                    >
                        Shutdown Only
                    </button>
                </div>

                <div ref={containerRef} className="chart-wrapper-flex panel-screen chart-full-width" style={{ height: '450px', padding: 0 }}>
                    <svg ref={svgRef} className="chart-container-d3" style={{ height: '100%', width: '100%' }}></svg>
                </div>

                <div className="explanation-content" style={{ marginTop: '30px', padding: '20px' }}>

                    <div className="comic-panel-caption" style={{
                        background: '#000',
                        border: '2px solid #fff',
                        padding: '15px',
                        boxShadow: '5px 5px 0px #333',
                        marginBottom: '20px'
                    }}>
                        <h3 style={{
                            color: '#ffd700',
                            fontFamily: '"Comic Neue", "cursive", sans-serif',
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                            borderBottom: '2px dashed #ffd700',
                            paddingBottom: '10px',
                            margin: 0
                        }}>
                            <span style={{ fontSize: '2rem', marginRight: '10px' }}>⚡</span>
                            Analysis Log
                        </h3>
                    </div>

                    <div className="concept-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>

                        {/* BREAK EVEN */}
                        <div className="comic-card" style={{
                            background: '#1a1a2e',
                            border: '2px solid #ffd700',
                            borderRadius: '10px',
                            padding: '20px',
                            position: 'relative',
                            boxShadow: '0 4px 15px rgba(255, 215, 0, 0.1)'
                        }}>
                            <div style={{
                                position: 'absolute', top: '-12px', left: '20px',
                                background: '#ffd700', color: '#000',
                                padding: '2px 10px', fontWeight: 'bold',
                                fontFamily: 'monospace', borderRadius: '4px'
                            }}>
                                CASE 01
                            </div>
                            <h4 style={{
                                color: '#fff', fontSize: '1.2rem', fontWeight: 'bold',
                                marginTop: '10px', marginBottom: '15px',
                                display: 'flex', alignItems: 'center', gap: '8px'
                            }}>
                                <span style={{ color: '#ffd700' }}>●</span> Break-Even Point (E)
                            </h4>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.9rem', color: '#ccc' }}>
                                <strong>CONDITION:</strong> Price = Min AC
                                <br />
                                <strong>RESULT:</strong> TR = TC
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '8px' }}>✅ Earning <strong>Normal Profit</strong> only.</li>
                                <li style={{ marginBottom: '8px' }}>🚀 If Price &gt; Min AC → <span style={{ color: '#4ade80' }}>Super-Normal Profit</span>.</li>
                                <li>⚠️ If Price &lt; Min AC → <span style={{ color: '#f87171' }}>Loss Zone</span>.</li>
                            </ul>
                        </div>

                        {/* SHUTDOWN */}
                        <div className="comic-card" style={{
                            background: '#1a1a2e',
                            border: '2px solid #00bfff',
                            borderRadius: '10px',
                            padding: '20px',
                            position: 'relative',
                            boxShadow: '0 4px 15px rgba(0, 191, 255, 0.1)'
                        }}>
                            <div style={{
                                position: 'absolute', top: '-12px', left: '20px',
                                background: '#00bfff', color: '#000',
                                padding: '2px 10px', fontWeight: 'bold',
                                fontFamily: 'monospace', borderRadius: '4px'
                            }}>
                                CASE 02
                            </div>
                            <h4 style={{
                                color: '#fff', fontSize: '1.2rem', fontWeight: 'bold',
                                marginTop: '10px', marginBottom: '15px',
                                display: 'flex', alignItems: 'center', gap: '8px'
                            }}>
                                <span style={{ color: '#00bfff' }}>●</span> Shutdown Point (S)
                            </h4>
                            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '6px', fontFamily: 'monospace', fontSize: '0.9rem', color: '#ccc' }}>
                                <strong>CONDITION:</strong> Price = Min AVC
                                <br />
                                <strong>RESULT:</strong> Loss = TFC
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '15px', color: '#aaa', fontSize: '0.9rem', lineHeight: '1.6' }}>
                                <li style={{ marginBottom: '8px' }}>🛑 Covers <strong>Variable Cost</strong> only.</li>
                                <li style={{ marginBottom: '8px' }}>👉 If P ≥ Min AVC: <strong>Continue</strong> (Minimizing Loss).</li>
                                <li>💀 If P &lt; Min AVC: <strong>SHUT DOWN</strong> immediately.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreakEvenShutdown;
