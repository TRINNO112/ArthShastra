import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const TwoCommodityChart = ({ data, maxUnits }) => {
    const containerRef = useRef(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });

    useEffect(() => {
        if (!data || !containerRef.current) return;

        d3.select(containerRef.current).selectAll("*").remove();

        const margin = { top: 60, right: 60, bottom: 60, left: 60 };
        const width = containerRef.current.clientWidth - margin.left - margin.right;
        const height = 450 - margin.top - margin.bottom;

        const svg = d3.select(containerRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // X Axis (Bottom) - Units of X (0 to max)
        const x = d3.scaleLinear()
            .domain([0, maxUnits])
            .range([0, width]);

        // X Axis (Top) - Units of Y (max to 0) - Effectively reversed visual for the same `x` coordinate
        // BUT we want the top axis ticks to label the REVERSE values.
        // The coordinate system is the same: x=0 (left) means X=0 and Y=Max.
        const xTopScale = d3.scaleLinear()
            .domain([maxUnits, 0]) // Left is Max Y, Right is 0 Y
            .range([0, width]);

        // Y Axis - MU/Price
        const maxY = d3.max(data, d => Math.max(d.mux, d.muy)) + 2;
        const y = d3.scaleLinear()
            .domain([0, maxY])
            .range([height, 0]);

        // Add X axes
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).ticks(maxUnits))
            .attr("color", "#00ffff")
            .style("font-size", "12px");

        svg.append("g")
            .call(d3.axisTop(xTopScale).ticks(maxUnits))
            .attr("color", "#ff69b4")
            .style("font-size", "12px");

        // Add Y axis
        svg.append("g")
            .call(d3.axisLeft(y))
            .attr("color", "#fff")
            .style("font-size", "12px");

        // Labels
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height + 40)
            .style("text-anchor", "middle")
            .style("fill", "#00ffff")
            .text("Units of Good X (consumed)");

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", -35)
            .style("text-anchor", "middle")
            .style("fill", "#ff69b4")
            .text("Units of Good Y (consumed)");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -45)
            .attr("x", -height / 2)
            .style("text-anchor", "middle")
            .style("fill", "#fff")
            .text("Marginal Utility per Rupee (MU/P)");

        // Grid
        svg.append("g")
            .attr("class", "grid")
            .style("opacity", "0.1")
            .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

        // Lines
        const lineX = d3.line()
            .curve(d3.curveMonotoneX)
            .x(d => x(d.unitsX))
            .y(d => y(d.mux)); // MUx / Px

        const lineY = d3.line()
            .curve(d3.curveMonotoneX)
            // For Y, we plot against the X axis based on how many units of Y correspond to that X position.
            // Logic: At pixel x=0, we are at "0 Units X" and "Max Units Y".
            // Our data likely comes as a row: { unitsX: 1, unitsY: 9, mux: ..., muy: ... }
            // So we just plot y(d.muy) against x(d.unitsX) because d.unitsX represents the horizontal position.
            .x(d => x(d.unitsX))
            .y(d => y(d.muy)); // MUy / Py

        // Draw MUx
        const pathX = svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#00ffff")
            .attr("stroke-width", 3)
            .attr("d", lineX);

        // Draw MUy
        const pathY = svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#ff69b4")
            .attr("stroke-width", 3)
            .attr("d", lineY);

        // Animation
        [pathX, pathY].forEach(path => {
            const len = path.node().getTotalLength();
            path.attr("stroke-dasharray", len + " " + len)
                .attr("stroke-dashoffset", len)
                .transition()
                .duration(2000)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0);
        });

        // Dots & Interactivity
        const makeDots = (valKey, color, label) => {
            svg.selectAll(`.dot-${label}`)
                .data(data)
                .enter()
                .append("circle")
                .attr("cx", d => x(d.unitsX))
                .attr("cy", d => y(d[valKey]))
                .attr("r", 5)
                .attr("fill", color)
                .attr("stroke", "#fff")
                .style("cursor", "pointer")
                .on("mouseenter", (event, d) => {
                    const isEq = Math.abs(d.mux - d.muy) < 0.5; // Approx equality or Exact
                    setTooltip({
                        visible: true,
                        x: event.pageX,
                        y: event.pageY,
                        content: (
                            <div style={{ textAlign: 'left' }}>
                                <strong style={{ color: '#fff' }}>Bundle: {d.unitsX} X + {d.unitsY} Y</strong><hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '5px 0' }} />
                                <div style={{ color: '#00ffff' }}>MUx/Px: {d.mux.toFixed(1)}</div>
                                <div style={{ color: '#ff69b4' }}>MUy/Py: {d.muy.toFixed(1)}</div>
                                {isEq && <div style={{ color: '#ffd700', marginTop: '5px', fontWeight: 'bold' }}>✨ EQUILIBRIUM!</div>}
                                {!isEq && d.mux > d.muy && <div style={{ color: '#aaa', marginTop: '5px', fontSize: '0.8em' }}>Result: Buy more X</div>}
                                {!isEq && d.muy > d.mux && <div style={{ color: '#aaa', marginTop: '5px', fontSize: '0.8em' }}>Result: Buy more Y</div>}
                            </div>
                        )
                    });
                    d3.select(event.currentTarget).attr("r", 8);
                })
                .on("mousemove", (event) => setTooltip(p => ({ ...p, x: event.pageX, y: event.pageY })))
                .on("mouseleave", (e) => {
                    setTooltip(p => ({ ...p, visible: false }));
                    d3.select(e.currentTarget).attr("r", 5);
                });
        };

        makeDots('mux', '#00ffff', 'x');
        makeDots('muy', '#ff69b4', 'y');

        // Equilibrium Point Highlight
        // Find closest point where MUx approx equals MUy
        // Since we generate discrete data, we find the index where the difference is minimal.
        let eqIndex = -1;
        let minDiff = Infinity;

        data.forEach((d, i) => {
            const diff = Math.abs(d.mux - d.muy);
            if (diff < minDiff) {
                minDiff = diff;
                eqIndex = i;
            }
        });

        if (eqIndex !== -1 && minDiff < 1) { // Threshold
            const eq = data[eqIndex];
            svg.append("circle")
                .attr("cx", x(eq.unitsX))
                .attr("cy", y(eq.mux))
                .attr("r", 15)
                .attr("fill", "none")
                .attr("stroke", "#ffd700")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "4 2")
                .style("animation", "spin 10s linear infinite"); // Pure CCS animation would be better but we left it simple

            // Dashed line down
            svg.append("line")
                .attr("x1", x(eq.unitsX))
                .attr("y1", y(eq.mux))
                .attr("x2", x(eq.unitsX))
                .attr("y2", height)
                .attr("stroke", "#ffd700")
                .attr("stroke-dasharray", "3 3");

            svg.append("text")
                .attr("x", x(eq.unitsX))
                .attr("y", y(eq.mux) - 20)
                .attr("text-anchor", "middle")
                .style("fill", "#ffd700")
                .style("font-weight", "bold")
                .text("E");
        }

    }, [data, maxUnits]);

    return (
        <div style={{ position: 'relative' }}>
            <div ref={containerRef} style={{ width: '100%', height: '450px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }} />

            {tooltip.visible && (
                <div style={{
                    position: 'fixed',
                    left: tooltip.x + 15,
                    top: tooltip.y - 15,
                    background: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '12px',
                    borderRadius: '8px',
                    pointerEvents: 'none',
                    zIndex: 1000,
                    fontSize: '0.9rem',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
                }}>
                    {tooltip.content}
                </div>
            )}
        </div>
    );
};

export default TwoCommodityChart;
