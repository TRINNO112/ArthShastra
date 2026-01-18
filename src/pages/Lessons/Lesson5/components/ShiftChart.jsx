import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ShiftChart = ({ shiftType }) => { // 'none', 'right', 'left'
    const svgRef = useRef(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

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
            .attr("font-size", "12px").attr("color", "#fff")
            .append("text").attr("x", innerWidth / 2).attr("y", 40).attr("fill", "#fff").attr("font-weight", "bold")
            .text("Quantity (Units)");

        // Y Axis
        g.append("g")
            .call(yAxis)
            .attr("font-size", "12px").attr("color", "#fff")
            .append("text").attr("transform", "rotate(-90)").attr("x", -innerHeight / 2).attr("y", -45)
            .attr("fill", "#fff").attr("font-weight", "bold").attr("text-anchor", "middle")
            .text("Price (₹)");

        // Grid
        g.append("g").attr("class", "grid").attr("opacity", 0.1)
            .call(d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat("")).style("stroke-dasharray", "3 3");
        g.append("g").attr("class", "grid").attr("opacity", 0.1).attr("transform", `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale).tickSize(-innerHeight).tickFormat("")).style("stroke-dasharray", "3 3");


        // --- Base Curve D1 (Center) ---
        // Q = 40 - 5P (roughly centered)
        // P=6 -> Q=10. P=0 -> Q=40.
        const dataD1 = [{ p: 6, q: 10 }, { p: 0, q: 40 }];

        // --- Shifted Curves ---
        // Right (Increase): Q = 60 - 5P (Add 20 to Q)
        const dataD2 = [{ p: 6, q: 30 }, { p: 0, q: 60 }];

        // Left (Decrease): Q = 20 - 5P (Subtract 20 from Q)
        const dataD3 = [{ p: 4, q: 0 }, { p: 0, q: 20 }]; // Starts lower to keep positive Q

        const lineGenerator = d3.line().x(d => xScale(d.q)).y(d => yScale(d.p));

        // Draw D1 (Original)
        g.append("path")
            .datum(dataD1)
            .attr("fill", "none")
            .attr("stroke", "#fff")
            .attr("stroke-width", 3)
            .attr("stroke-dasharray", shiftType === 'none' ? "0" : "5 5")
            .attr("opacity", shiftType === 'none' ? 1 : 0.5)
            .attr("d", lineGenerator);

        g.append("text")
            .attr("x", xScale(10)).attr("y", yScale(6) - 10)
            .attr("fill", "#fff").attr("font-weight", "bold")
            .text("D1");

        // Arrow Marker
        svg.append("defs").append("marker")
            .attr("id", "arrow-shift")
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 5).attr("refY", 5)
            .attr("markerWidth", 6).attr("markerHeight", 6)
            .attr("orient", "auto-start-reverse")
            .append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", shiftType === 'right' ? "#00ff00" : "#ff4444");


        // --- Shift Logic ---
        if (shiftType === 'right') {
            const path = g.append("path")
                .datum(dataD2)
                .attr("fill", "none")
                .attr("stroke", "#00ff00")
                .attr("stroke-width", 4)
                .attr("d", lineGenerator)
                .attr("opacity", 0);

            path.transition().duration(800).attr("opacity", 1);

            g.append("text")
                .attr("x", xScale(30)).attr("y", yScale(6) - 10)
                .attr("fill", "#00ff00").attr("font-weight", "bold")
                .text("D2 (Right)")
                .attr("opacity", 0).transition().delay(500).duration(500).attr("opacity", 1);

            // Shift Arrows (Horizontal)
            const yArrow = yScale(3);
            const xStart = xScale(25); // on D1 @ P=3
            const xEnd = xScale(45);   // on D2 @ P=3

            g.append("line")
                .attr("x1", xStart).attr("y1", yArrow)
                .attr("x2", xStart).attr("y2", yArrow)
                .attr("stroke", "#00ff00").attr("stroke-width", 2)
                .attr("marker-end", "url(#arrow-shift)")
                .transition().delay(400).duration(800)
                .attr("x2", xEnd);

        } else if (shiftType === 'left') {
            const path = g.append("path")
                .datum(dataD3)
                .attr("fill", "none")
                .attr("stroke", "#ff4444")
                .attr("stroke-width", 4)
                .attr("d", lineGenerator)
                .attr("opacity", 0);

            path.transition().duration(800).attr("opacity", 1);

            g.append("text")
                .attr("x", xScale(0)).attr("y", yScale(4) - 10) // Approx position
                .attr("fill", "#ff4444").attr("font-weight", "bold")
                .text("D3 (Left)")
                .attr("opacity", 0).transition().delay(500).duration(500).attr("opacity", 1);

            // Shift Arrows (Horizontal)
            const yArrow = yScale(2);
            const xStart = xScale(30); // on D1 @ P=2
            const xEnd = xScale(10);   // on D3 @ P=2

            g.append("line")
                .attr("x1", xStart).attr("y1", yArrow)
                .attr("x2", xStart).attr("y2", yArrow)
                .attr("stroke", "#ff4444").attr("stroke-width", 2)
                .attr("marker-end", "url(#arrow-shift)")
                .transition().delay(400).duration(800)
                .attr("x2", xEnd);
        }

    }, [shiftType]);

    return <svg ref={svgRef} width="100%" height="350" viewBox="0 0 450 350" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}></svg>;
};

export default ShiftChart;
