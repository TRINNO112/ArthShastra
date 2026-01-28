import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const EquilibriumGraph = ({ scenarioData }) => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 400 });

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
        if (!dimensions.width || !scenarioData) return;

        const { dShift, sShift } = scenarioData;
        const width = dimensions.width;
        const height = dimensions.height;
        const margin = { top: 40, right: 40, bottom: 40, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove(); // Clear previous

        svg.attr("width", width).attr("height", height);

        // --- CLIP PATH ---
        // Prevent lines from drawing outside the grid
        svg.append("defs").append("clipPath")
            .attr("id", "chart-clip")
            .append("rect")
            .attr("width", innerWidth)
            .attr("height", innerHeight);

        const g = svg.append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Create a separate group for the lines that applies the clipping
        const lineGroup = g.append("g").attr("clip-path", "url(#chart-clip)");

        // --- SCALES ---
        const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);
        const yScale = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

        // --- GRID ---
        const makeXGrid = () => d3.axisBottom(xScale).ticks(10);
        const makeYGrid = () => d3.axisLeft(yScale).ticks(10);

        g.append("g").attr("class", "grid")
            .attr("transform", `translate(0,${innerHeight})`)
            .call(makeXGrid().tickSize(-innerHeight).tickFormat(""))
            .style("stroke-opacity", 0.1)
            .style("stroke", "#00ff88");

        g.append("g").attr("class", "grid")
            .call(makeYGrid().tickSize(-innerWidth).tickFormat(""))
            .style("stroke-opacity", 0.1)
            .style("stroke", "#00ff88");

        // --- AXES ---
        g.append("line").attr("x1", 0).attr("y1", innerHeight).attr("x2", innerWidth).attr("y2", innerHeight).attr("stroke", "#888").attr("stroke-width", 2);
        g.append("line").attr("x1", 0).attr("y1", innerHeight).attr("x2", 0).attr("y2", 0).attr("stroke", "#888").attr("stroke-width", 2);

        // Labels
        g.append("text").attr("x", innerWidth / 2).attr("y", innerHeight + 35).attr("fill", "#888").style("text-anchor", "middle").text("Quantity (Q)");

        // MANUAL ADJUSTMENT: Change the 'x' value below to move Price label up/down.
        // Current: Moves it 20px upwards from center. (More positive = Upwards)
        g.append("text").attr("transform", "rotate(-90)").attr("x", (-innerHeight / 2) + 20).attr("y", -35).attr("fill", "#888").style("text-anchor", "middle").text("Price (P)");


        // --- CURVE GENERATION ---
        // Base Curves: D0 and S0
        // D0: P = 100 - Q (Passes 50,50)
        // S0: P = Q (Passes 50,50)

        // Data Points for Lines (0 to 120 to ensure full coverage even with shifts)
        const range = d3.range(-20, 121, 5);

        // INITIAL CURVES
        const d0Data = range.map(q => ({ q, p: 100 - q }));
        const s0Data = range.map(q => ({ q, p: q }));

        // NEW CURVES (SHIFTED)
        // D1: P = 100 - Q + dShift (Shift is vertical for simplicity in math, acts as horizontal too)
        // If dShift = 20, D curve moves UP/RIGHT. 
        const d1Data = range.map(q => ({ q, p: 100 - q + dShift }));
        const s1Data = range.map(q => ({ q, p: q - sShift })); // S shift is tricky. If S shifts RIGHT (increase), P decreases. So P = Q - 20 corresponds to RIGHT shift.

        // Line Generators
        const line = d3.line().x(d => xScale(d.q)).y(d => yScale(d.p));

        // --- DRAW CURVES (Inside LineGroup) ---

        // OLD DEMAND (D0)
        lineGroup.append("path")
            .datum(d0Data)
            .attr("fill", "none")
            .attr("stroke", "#ff4444") // Red for Demand
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", dShift !== 0 ? "5,5" : "0") // Dashed if shifted
            .attr("opacity", dShift !== 0 ? 0.5 : 1)
            .attr("d", line);

        // OLD SUPPLY (S0)
        lineGroup.append("path")
            .datum(s0Data)
            .attr("fill", "none")
            .attr("stroke", "#00bfff") // Blue for Supply
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", sShift !== 0 ? "5,5" : "0") // Dashed if shifted
            .attr("opacity", sShift !== 0 ? 0.5 : 1)
            .attr("d", line);

        // NEW DEMAND (D1) - Only if shifted
        if (dShift !== 0) {
            const d1Path = lineGroup.append("path")
                .datum(d1Data)
                .attr("fill", "none")
                .attr("stroke", "#ff4444")
                .attr("stroke-width", 3)
                .attr("d", line);

            // D1 Label (Use normal group to avoid clipping label if close to edge, or keep inside if desired. Keeping outside usually safer for text visibility but might look weird if line disappears. Let's keep label inside but slightly offset logic)
            // Ideally label should be positioned at a visible point.
            g.append("text").attr("x", xScale(90)).attr("y", yScale(100 - 90 + dShift) - 10).attr("fill", "#ff4444").text("D'");

            // Animation for D1
            const len = d1Path.node().getTotalLength();
            d1Path.attr("stroke-dasharray", len + " " + len).attr("stroke-dashoffset", len)
                .transition().duration(1000).ease(d3.easeCubic).attr("stroke-dashoffset", 0);
        } else {
            g.append("text").attr("x", xScale(90)).attr("y", yScale(10)).attr("fill", "#ff4444").text("D");
        }

        // NEW SUPPLY (S1) - Only if shifted
        if (sShift !== 0) {
            const s1Path = lineGroup.append("path")
                .datum(s1Data)
                .attr("fill", "none")
                .attr("stroke", "#00bfff")
                .attr("stroke-width", 3)
                .attr("d", line);

            // S1 Label
            g.append("text").attr("x", xScale(90)).attr("y", yScale(90 - sShift) - 10).attr("fill", "#00bfff").text("S'");

            // Animation for S1
            const len = s1Path.node().getTotalLength();
            s1Path.attr("stroke-dasharray", len + " " + len).attr("stroke-dashoffset", len)
                .transition().duration(1000).ease(d3.easeCubic).attr("stroke-dashoffset", 0);
        } else {
            g.append("text").attr("x", xScale(90)).attr("y", yScale(90)).attr("fill", "#00bfff").text("S");
        }


        // --- EQUILIBRIUM POINTS ---

        // INITIAL E0: D0 = S0 => 100 - Q = Q => 2Q = 100 => Q=50, P=50
        const e0 = { q: 50, p: 50 };

        // NEW E1: D1 = S1 => 100 - Q + dShift = Q - sShift 
        // 2Q = 100 + dShift + sShift => Q = (100 + d + s) / 2
        // P = Q - sShift
        const newQ = (100 + dShift + sShift) / 2;
        const newP = newQ - sShift;
        const e1 = { q: newQ, p: newP };

        // Draw E0
        if (dShift !== 0 || sShift !== 0) {
            g.append("circle").attr("cx", xScale(e0.q)).attr("cy", yScale(e0.p)).attr("r", 4).attr("fill", "#888");
            g.append("text").attr("x", xScale(e0.q)).attr("y", yScale(e0.p) - 10).attr("fill", "#888").style("font-size", "10px").text("E");
        }

        // Draw E1 (The Main Star)
        g.append("circle")
            .attr("cx", xScale(e1.q)).attr("cy", yScale(e1.p))
            .attr("r", 0) // Animate radius
            .attr("fill", "#00ff88")
            .attr("stroke", "#fff")
            .attr("stroke-width", 2)
            .transition().delay(1000).duration(500).attr("r", 6);

        g.append("text")
            .attr("x", xScale(e1.q) + 10).attr("y", yScale(e1.p))
            .attr("fill", "#00ff88").style("font-weight", "bold")
            .attr("opacity", 0)
            .text(dShift === 0 && sShift === 0 ? "E (Equilibrium)" : "E' (New)")
            .transition().delay(1200).duration(500).attr("opacity", 1);


        // --- GUIDELINES FOR E1 ---
        // Dashed lines to axis
        const guide = g.append("g").attr("opacity", 0);
        guide.append("line").attr("x1", xScale(e1.q)).attr("y1", yScale(e1.p)).attr("x2", xScale(e1.q)).attr("y2", innerHeight)
            .attr("stroke", "#00ff88").attr("stroke-dasharray", "4,4");
        guide.append("line").attr("x1", xScale(e1.q)).attr("y1", yScale(e1.p)).attr("x2", 0).attr("y2", yScale(e1.p))
            .attr("stroke", "#00ff88").attr("stroke-dasharray", "4,4");

        // Axis Values
        guide.append("text").attr("x", xScale(e1.q)).attr("y", innerHeight + 15).attr("fill", "#00ff88").style("text-anchor", "middle").style("font-size", "12px").text(`Q=${newQ}`);
        guide.append("text").attr("x", -5).attr("y", yScale(e1.p) + 5).attr("fill", "#00ff88").style("text-anchor", "end").style("font-size", "12px").text(`P=${newP}`);

        guide.transition().delay(1500).duration(500).attr("opacity", 1);

    }, [dimensions, scenarioData]);

    return (
        <div ref={containerRef} style={{ width: '100%', height: '400px', background: '#0d1117', borderRadius: '8px', border: '1px solid #30363d' }}>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default EquilibriumGraph;
