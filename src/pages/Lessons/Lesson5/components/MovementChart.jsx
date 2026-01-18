import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MovementChart = ({ type }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous render

        const width = 450;
        const height = 350;
        const margin = { top: 40, right: 40, bottom: 50, left: 60 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // --- Scales ---
        const xScale = d3.scaleLinear().domain([0, 60]).range([0, innerWidth]);
        const yScale = d3.scaleLinear().domain([0, 6]).range([innerHeight, 0]);

        // --- Axes ---
        const xAxis = d3.axisBottom(xScale).ticks(6);
        const yAxis = d3.axisLeft(yScale).ticks(6);

        // X Axis
        g.append("g")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(xAxis)
            .attr("font-size", "12px")
            .attr("color", "#fff")
            .append("text")
            .attr("x", innerWidth / 2)
            .attr("y", 40)
            .attr("fill", "#fff")
            .attr("font-weight", "bold")
            .text("Quantity (Units)");

        // Y Axis
        g.append("g")
            .call(yAxis)
            .attr("font-size", "12px")
            .attr("color", "#fff")
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("x", -innerHeight / 2)
            .attr("y", -45)
            .attr("fill", "#fff")
            .attr("font-weight", "bold")
            .attr("text-anchor", "middle")
            .text("Price (₹)");

        // Grid lines
        g.append("g")
            .attr("class", "grid")
            .attr("opacity", 0.1)
            .call(d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat(""))
            .style("stroke-dasharray", "3 3");

        g.append("g")
            .attr("class", "grid")
            .attr("opacity", 0.1)
            .attr("transform", `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale).tickSize(-innerHeight).tickFormat(""))
            .style("stroke-dasharray", "3 3");


        // --- Data Calculation Function (Linear Demand: Q = 60 - 10P) ---
        // P = 5 -> Q = 10 (Point A)
        // P = 1 -> Q = 50 (Point B)
        const demandCurve = [
            { p: 6, q: 0 },
            { p: 0, q: 60 }
        ];

        // --- Draw Curve ---
        const lineGenerator = d3.line()
            .x(d => xScale(d.q))
            .y(d => yScale(d.p));

        g.append("path")
            .datum(demandCurve)
            .attr("fill", "none")
            .attr("stroke", "#00d4ff")
            .attr("stroke-width", 3)
            .attr("d", lineGenerator);

        // --- Points ---
        const pointHigh = { p: 5, q: 10, label: "A" };
        const pointLow = { p: 1, q: 50, label: "B" };

        const drawPoint = (point, color) => {
            const cx = xScale(point.q);
            const cy = yScale(point.p);

            // Dashed Lines
            g.append("line")
                .attr("x1", cx).attr("y1", cy)
                .attr("x2", cx).attr("y2", innerHeight)
                .attr("stroke", color).attr("stroke-dasharray", "4 4");

            g.append("line")
                .attr("x1", 0).attr("y1", cy)
                .attr("x2", cx).attr("y2", cy)
                .attr("stroke", color).attr("stroke-dasharray", "4 4");

            // Circle
            g.append("circle")
                .attr("cx", cx).attr("cy", cy).attr("r", 6).attr("fill", color);

            // Label
            g.append("text")
                .attr("x", cx + 10).attr("y", cy - 10)
                .attr("fill", color).attr("font-weight", "bold")
                .text(`${point.label} (${point.q}, ₹${point.p})`);
        };

        drawPoint(pointHigh, "#ffd700"); // A
        drawPoint(pointLow, "#ffd700");  // B

        // --- Animation Logic ---
        // Arrow marker
        svg.append("defs").append("marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 5)
            .attr("refY", 5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto-start-reverse")
            .append("path")
            .attr("d", "M 0 0 L 10 5 L 0 10 z")
            .attr("fill", type === 'extension' ? "#00ff00" : "#ff4444");

        if (type === 'extension') {
            // A -> B (Down)
            // Draw separate arrow path along the curve
            // Start: A (10, 5), End: B (50, 1)
            // Mid control point offset for curve? The line is straight here, so straight arrow is fine but offset slightly.

            const x1 = xScale(pointHigh.q) + 10;
            const y1 = yScale(pointHigh.p) + 10;
            const x2 = xScale(pointLow.q) - 10;
            const y2 = yScale(pointLow.p) - 10;

            g.append("line")
                .attr("x1", x1).attr("y1", y1)
                .attr("x2", x1).attr("y2", y1) // Start at source
                .attr("stroke", "#00ff00")
                .attr("stroke-width", 3)
                .attr("marker-end", "url(#arrow)")
                .transition().duration(1000)
                .attr("x2", x2).attr("y2", y2);

            g.append("text")
                .attr("x", (x1 + x2) / 2 + 20).attr("y", (y1 + y2) / 2)
                .attr("fill", "#00ff00").attr("font-size", "14px").attr("font-weight", "bold")
                .text("Extension")
                .attr("opacity", 0)
                .transition().delay(500).duration(500).attr("opacity", 1);

        } else if (type === 'contraction') {
            // B -> A (Up)
            const x1 = xScale(pointLow.q) - 10;
            const y1 = yScale(pointLow.p) - 10;
            const x2 = xScale(pointHigh.q) + 10;
            const y2 = yScale(pointHigh.p) + 10;

            g.append("line")
                .attr("x1", x1).attr("y1", y1)
                .attr("x2", x1).attr("y2", y1)
                .attr("stroke", "#ff4444")
                .attr("stroke-width", 3)
                .attr("marker-end", "url(#arrow)")
                .transition().duration(1000)
                .attr("x2", x2).attr("y2", y2);

            g.append("text")
                .attr("x", (x1 + x2) / 2 + 20).attr("y", (y1 + y2) / 2)
                .attr("fill", "#ff4444").attr("font-size", "14px").attr("font-weight", "bold")
                .text("Contraction")
                .attr("opacity", 0)
                .transition().delay(500).duration(500).attr("opacity", 1);
        }

    }, [type]);

    return <svg ref={svgRef} width="100%" height="350" viewBox="0 0 450 350" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}></svg>;
};

export default MovementChart;
