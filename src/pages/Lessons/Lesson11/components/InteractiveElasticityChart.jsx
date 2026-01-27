import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { FaCompressAlt, FaExpandAlt, FaRulerCombined } from 'react-icons/fa';

const InteractiveElasticityChart = () => {
    const svgRef = useRef(null);
    const [elasticityVal, setElasticityVal] = useState(1); // 0 (Vertical) to 2 (Horizontal), 1 = Unitary
    const containerRef = useRef(null);

    // Dimensions
    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 40, left: 40 };

    useEffect(() => {
        if (!containerRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous

        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);
        const yScale = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

        // Axes
        g.append("g")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale).ticks(5))
            .attr("color", "#aaa");

        g.append("g")
            .call(d3.axisLeft(yScale).ticks(5))
            .attr("color", "#aaa");

        // Labels
        g.append("text")
            .attr("x", innerWidth / 2)
            .attr("y", innerHeight + 35)
            .attr("fill", "#aaa")
            .style("text-anchor", "middle")
            .text("Quantity Supplied (Q)");

        g.append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -innerHeight / 2)
            .attr("y", -30)
            .attr("fill", "#aaa")
            .style("text-anchor", "middle")
            .text("Price (P)");

        // --- DRAW CURVE BASED ON ELASTICITY ---
        // Pivot point at center (50, 50) roughly, or origin?
        // Let's Pivot at (20, 20) so we can see the ray.
        const pivot = { q: 10, p: 10 };

        // Determine Slope angle.
        // Elasticity 0 = Vertical Line (90 deg from X? Parallel to Y)
        // Elasticity 1 = 45 deg line (Unitary)
        // Elasticity Inf = Horizontal Line (Parallel to X)

        // Map slider (0 to 2) to Angle.
        // 0 -> 0 slope (dx=0, dy=1 ??? No, Slope = dy/dx. Es = %dQ/%dP = (dQ/dP)*(P/Q). Slope of curve is dP/dQ.
        // Es = (1/slope) * (P/Q).
        // Vertical Line: dQ=0. Slope dP/dQ = Inf. Es = 0.
        // Horizontal Line: dP=0. Slope dP/dQ = 0. Es = Inf.
        // Unitary: Slope matches P/Q ratio roughly.

        // Simpler visual mapping:
        // Slider 0 (Inelastic) -> Steep Line (High dP, Low dQ). End Point (15, 90).
        // Slider 1 (Unitary) -> 45 deg. End Point (90, 90).
        // Slider 2 (Elastic) -> Flat Line (Low dP, High dQ). End Point (90, 15).

        let endQ, endP;

        if (elasticityVal <= 1) {
            // vertical to 45 deg
            // 0 -> (10, 90), 1 -> (90, 90)
            const factor = elasticityVal; // 0 to 1
            endQ = 10 + factor * 80;
            endP = 90;
        } else {
            // 45 deg to horizontal
            // 1 -> (90, 90), 2 -> (90, 10)
            const factor = elasticityVal - 1; // 0 to 1
            endQ = 90;
            endP = 90 - factor * 80;
        }

        // Draw Line
        g.append("line")
            .attr("x1", xScale(pivot.q))
            .attr("y1", yScale(pivot.p))
            .attr("x2", xScale(endQ))
            .attr("y2", yScale(endP))
            .attr("stroke", getElasticityColor(elasticityVal))
            .attr("stroke-width", 4)
            .attr("stroke-linecap", "round");


        // Add Dots
        g.append("circle")
            .attr("cx", xScale(pivot.q))
            .attr("cy", yScale(pivot.p))
            .attr("r", 5)
            .attr("fill", "#fff");

        g.append("circle")
            .attr("cx", xScale(endQ))
            .attr("cy", yScale(endP))
            .attr("r", 5)
            .attr("fill", "#fff");

        // Interaction Hint
        g.append("text")
            .attr("x", innerWidth / 2)
            .attr("y", innerHeight / 2)
            .attr("fill", "rgba(255,255,255,0.1)")
            .attr("font-size", "20")
            .attr("transform", "rotate(-20)")
            .style("text-anchor", "middle")
            .style("pointer-events", "none")
            .text(getElasticityText(elasticityVal));

    }, [elasticityVal]);

    const getElasticityColor = (val) => {
        if (val < 0.8) return "#ff4444"; // Inelastic
        if (val > 1.2) return "#00ff00"; // Elastic
        return "#ffd700"; // Unitary
    };

    const getElasticityText = (val) => {
        if (val < 0.1) return "Perfectly Inelastic";
        if (val < 0.9) return "Inelastic";
        if (val > 1.9) return "Perfectly Elastic";
        if (val > 1.1) return "Elastic";
        return "Unitary Elastic";
    };

    return (
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h4 style={{ textAlign: 'center', color: '#fff', marginBottom: '20px' }}>
                <FaCompressAlt onClick={() => setElasticityVal(0)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                Interactive Elasticity Explorer
                <FaExpandAlt onClick={() => setElasticityVal(2)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
            </h4>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: '#ff4444', fontWeight: 'bold' }}>Inelastic</span>
                <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.1"
                    value={elasticityVal}
                    onChange={(e) => setElasticityVal(parseFloat(e.target.value))}
                    style={{ width: '200px', accentColor: getElasticityColor(elasticityVal) }}
                />
                <span style={{ color: '#00ff00', fontWeight: 'bold' }}>Elastic</span>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '1.2rem', color: getElasticityColor(elasticityVal) }}>
                <strong>Es = {elasticityVal === 1 ? '1' : (elasticityVal < 1 ? '< 1' : '> 1')}</strong>
                <br />
                <small style={{ color: '#ccc' }}>{getElasticityText(elasticityVal)} Curve</small>
            </div>

            <div ref={containerRef} style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center' }}>
                <svg ref={svgRef} width={width} height={height} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}></svg>
            </div>
        </div>
    );
};

export default InteractiveElasticityChart;
