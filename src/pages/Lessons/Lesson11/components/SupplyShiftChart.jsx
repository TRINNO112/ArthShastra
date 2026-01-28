import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SupplyShiftChart = ({ shiftType }) => { // 'none', 'right', 'left'
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

        const xScale = d3.scaleLinear().domain([0, 60]).range([0, innerWidth]);
        const yScale = d3.scaleLinear().domain([0, 6]).range([innerHeight, 0]);
        const xAxis = d3.axisBottom(xScale).ticks(6);
        const yAxis = d3.axisLeft(yScale).ticks(6);

        g.append("g").attr("transform", `translate(0,${innerHeight})`).call(xAxis).attr("font-size", "12px").attr("color", "#333")
            .append("text").attr("x", innerWidth / 2).attr("y", 40).attr("fill", "#000").attr("font-weight", "bold").text("Quantity Supplied");
        g.append("g").call(yAxis).attr("font-size", "12px").attr("color", "#333")
            .append("text").attr("transform", "rotate(-90)").attr("x", -innerHeight / 2).attr("y", -45).attr("fill", "#000").attr("font-weight", "bold").text("Price (₹)");

        g.append("g").attr("class", "grid").attr("opacity", 0.2).call(d3.axisLeft(yScale).tickSize(-innerWidth).tickFormat("")).style("stroke-dasharray", "3 3").attr("color", "#000");
        g.append("g").attr("class", "grid").attr("opacity", 0.2).attr("transform", `translate(0,${innerHeight})`).call(d3.axisBottom(xScale).tickSize(-innerHeight).tickFormat("")).style("stroke-dasharray", "3 3").attr("color", "#000");

        // S1: Q = 10P (Base)
        const dataS1 = [{ p: 0, q: 0 }, { p: 6, q: 60 }];
        // S2 (Right/Increase): Q = 10P + 20
        const dataS2 = [{ p: 0, q: 20 }, { p: 4, q: 60 }];
        // S3 (Left/Decrease): Q = 10P - 20 (Visual approximation: starts at P=2)
        const dataS3 = [{ p: 2, q: 0 }, { p: 6, q: 40 }];

        const lineGenerator = d3.line().x(d => xScale(d.q)).y(d => yScale(d.p));

        // Draw S1
        g.append("path").datum(dataS1).attr("fill", "none").attr("stroke", "#555").attr("stroke-width", 3)
            .attr("stroke-dasharray", shiftType === 'none' ? "0" : "5 5")
            .attr("opacity", shiftType === 'none' ? 1 : 0.5)
            .attr("d", lineGenerator);
        g.append("text").attr("x", xScale(60)).attr("y", yScale(6) - 10).attr("fill", "#000").attr("font-weight", "bold").text("S1");

        // Marker
        svg.append("defs").append("marker").attr("id", "arrow-shift").attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5)
            .attr("markerWidth", 6).attr("markerHeight", 6).attr("orient", "auto-start-reverse")
            .append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("fill", shiftType === 'right' ? "#006400" : "#cc0000");

        if (shiftType === 'right') {
            const path = g.append("path").datum(dataS2).attr("fill", "none").attr("stroke", "#006400").attr("stroke-width", 4).attr("d", lineGenerator).attr("opacity", 0);
            path.transition().duration(800).attr("opacity", 1);
            g.append("text").attr("x", xScale(60)).attr("y", yScale(4) - 10).attr("fill", "#006400").attr("font-weight", "bold").text("S2 (Right)").attr("opacity", 0).transition().delay(500).duration(500).attr("opacity", 1);

            // Arrow
            const yArrow = yScale(3);
            const xStart = xScale(30);
            const xEnd = xScale(50);
            g.append("line").attr("x1", xStart).attr("y1", yArrow).attr("x2", xStart).attr("y2", yArrow).attr("stroke", "#006400").attr("stroke-width", 2).attr("marker-end", "url(#arrow-shift)").transition().delay(400).duration(800).attr("x2", xEnd);
        } else if (shiftType === 'left') {
            const path = g.append("path").datum(dataS3).attr("fill", "none").attr("stroke", "#cc0000").attr("stroke-width", 4).attr("d", lineGenerator).attr("opacity", 0);
            path.transition().duration(800).attr("opacity", 1);
            g.append("text").attr("x", xScale(40)).attr("y", yScale(6) - 10).attr("fill", "#cc0000").attr("font-weight", "bold").text("S3 (Left)").attr("opacity", 0).transition().delay(500).duration(500).attr("opacity", 1);

            // Arrow
            const yArrow = yScale(3);
            const xStart = xScale(30);
            const xEnd = xScale(10);
            g.append("line").attr("x1", xStart).attr("y1", yArrow).attr("x2", xStart).attr("y2", yArrow).attr("stroke", "#cc0000").attr("stroke-width", 2).attr("marker-end", "url(#arrow-shift)").transition().delay(400).duration(800).attr("x2", xEnd);
        }

    }, [shiftType]);

    return <svg ref={svgRef} width="100%" height="350" viewBox="0 0 450 350" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}></svg>;
};

export default SupplyShiftChart;
