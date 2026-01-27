import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const TwoCommodityChart = ({ data, totalIncome }) => {
    const containerRef = useRef(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });

    useEffect(() => {
        if (!data || !containerRef.current) return;

        // Clear
        d3.select(containerRef.current).selectAll("*").remove();

        // Dimensions
        const margin = { top: 60, right: 60, bottom: 60, left: 60 };
        const width = containerRef.current.clientWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(containerRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Scales
        const x = d3.scaleLinear()
            .domain([0, totalIncome])
            .range([0, width]);

        // Find Max Y to set domain
        const maxY = d3.max(data, d => Math.max(d.mux, d.muy)) + 4;

        // Ensure even number for cleaner 2-step ticks
        const yDomainMax = Math.ceil(maxY / 2) * 2;

        const y = d3.scaleLinear()
            .domain([0, yDomainMax])
            .range([height, 0]);

        // AXES

        // Left Y Axis (MUx)
        const yAxisLeft = d3.axisLeft(y)
            .ticks(yDomainMax / 2) // Request roughly 1 tick per 2 units
            .tickFormat(d => d % 2 === 0 ? d : ""); // Only show even numbers just in case

        svg.append("g")
            .call(yAxisLeft)
            .attr("color", "#00ffff")
            .style("font-size", "12px");

        // Right Y Axis (MUy)
        const yAxisRight = d3.axisRight(y)
            .ticks(yDomainMax / 2)
            .tickFormat(d => d % 2 === 0 ? d : "");

        svg.append("g")
            .attr("transform", `translate(${width}, 0)`)
            .call(yAxisRight)
            .attr("color", "#ff69b4")
            .style("font-size", "12px");

        // Bottom X Axis
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).ticks(totalIncome))
            .attr("color", "#fff")
            .style("font-size", "12px");

        // Grid lines (Horizontal)
        svg.append("g")
            .attr("class", "grid")
            .style("opacity", "0.1")
            .call(d3.axisLeft(y).ticks(yDomainMax / 2).tickSize(-width).tickFormat(""));

        // LABELS
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -45)
            .attr("x", -height / 2)
            .style("text-anchor", "middle")
            .style("fill", "#00ffff")
            .style("font-weight", "bold")
            .text("Marginal Utility of X (MUx)");

        svg.append("text")
            .attr("transform", "rotate(90)")
            .attr("y", -width - 45) // Adjust for right side
            .attr("x", height / 2)
            .style("text-anchor", "middle")
            .style("fill", "#ff69b4")
            .style("font-weight", "bold")
            .text("Marginal Utility of Y (MUy)");

        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height + 40)
            .style("text-anchor", "middle")
            .style("fill", "#fff")
            .text("← Money Spent on Y  |  Money Spent on X →");

        // Plot Lines (Using Linear Curve to prevent Spiderweb loops)
        const lineX = d3.line()
            .curve(d3.curveLinear) // Straight lines between points
            .x(d => x(d.unitsX))
            .y(d => y(d.mux));

        const lineY = d3.line()
            .curve(d3.curveLinear) // Straight lines
            .x(d => x(d.unitsX))
            .y(d => y(d.muy));

        // Draw Paths
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#00ffff")
            .attr("stroke-width", 3)
            .attr("d", lineX);

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#ff69b4")
            .attr("stroke-width", 3)
            .attr("d", lineY);

        // Calculate Intersection visually for the "E" point
        // Find where mux == muy in the data
        const eqData = data.find(d => Math.abs(d.mux - d.muy) < 0.1);

        if (eqData) {
            const cx = x(eqData.unitsX);
            const cy = y(eqData.mux);

            // Dotted Dropline
            svg.append("line")
                .attr("x1", cx)
                .attr("y1", cy)
                .attr("x2", cx)
                .attr("y2", height)
                .attr("stroke", "#ffd700")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "4 4");

            // Circle
            svg.append("circle")
                .attr("cx", cx)
                .attr("cy", cy)
                .attr("r", 8)
                .attr("fill", "#ffd700")
                .attr("stroke", "#fff")
                .attr("stroke-width", 2);

            // Label
            svg.append("text")
                .attr("x", cx)
                .attr("y", cy - 15)
                .attr("text-anchor", "middle")
                .attr("fill", "#ffd700")
                .style("font-weight", "bold")
                .style("font-size", "14px")
                .text("E");
        }

        // Dots
        svg.selectAll(".dot-x")
            .data(data).enter().append("circle")
            .attr("cx", d => x(d.unitsX))
            .attr("cy", d => y(d.mux))
            .attr("r", 5)
            .attr("fill", "#00ffff")
            .on("mouseover", (e, d) => setTooltip({ visible: true, x: e.pageX, y: e.pageY, content: `Spend ${d.unitsX} on X: MUx=${d.mux}` }))
            .on("mouseout", () => setTooltip({ ...tooltip, visible: false }));

        svg.selectAll(".dot-y")
            .data(data).enter().append("circle")
            .attr("cx", d => x(d.unitsX))
            .attr("cy", d => y(d.muy))
            .attr("r", 5)
            .attr("fill", "#ff69b4")
            .on("mouseover", (e, d) => setTooltip({ visible: true, x: e.pageX, y: e.pageY, content: `Spend ${d.unitsY} on Y: MUy=${d.muy}` }))
            .on("mouseout", () => setTooltip({ ...tooltip, visible: false }));

    }, [data, totalIncome]);

    return (
        <div style={{ position: 'relative' }}>
            <div ref={containerRef} style={{ width: '100%', height: '400px' }} />
            {tooltip.visible && (
                <div style={{
                    position: 'fixed',
                    left: tooltip.x + 10,
                    top: tooltip.y - 10,
                    background: 'rgba(0,0,0,0.8)',
                    padding: '8px',
                    borderRadius: '4px',
                    color: '#fff',
                    pointerEvents: 'none',
                    zIndex: 1000
                }}>
                    {tooltip.content}
                </div>
            )}
        </div>
    );
};

export default TwoCommodityChart;
