import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { lesson10Data } from '../../data/lesson10Data';

const EquilibriumGraph = () => {
    const d3Container = useRef(null);

    useEffect(() => {
        if (d3Container.current && lesson10Data.scheduleData) {
            const data = lesson10Data.scheduleData;

            // Clear previous SVG
            d3.select(d3Container.current).selectAll("*").remove();

            // Set dimensions
            const margin = { top: 40, right: 40, bottom: 60, left: 60 };
            const containerWidth = d3Container.current.clientWidth;
            const width = Math.min(containerWidth, 800) - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            const svg = d3.select(d3Container.current)
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);

            // Scales
            const x = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.q) + 1])
                .range([0, width]);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => Math.max(d.mr, d.mc)) + 5])
                .range([height, 0]);

            // Axes
            const xAxis = d3.axisBottom(x).ticks(data.length);
            const yAxis = d3.axisLeft(y);

            // Add X Axis
            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(xAxis)
                .attr("color", "#94a3b8")
                .select(".domain").attr("stroke", "#475569");

            // Add Y Axis
            svg.append("g")
                .call(yAxis)
                .attr("color", "#94a3b8")
                .select(".domain").attr("stroke", "#475569");

            // Axis Labels
            svg.append("text")
                .attr("text-anchor", "middle")
                .attr("x", width / 2)
                .attr("y", height + 40)
                .attr("fill", "#cbd5e1")
                .text("Output (Units)");

            svg.append("text")
                .attr("text-anchor", "middle")
                .attr("transform", "rotate(-90)")
                .attr("y", -45)
                .attr("x", -height / 2)
                .attr("fill", "#cbd5e1")
                .text("Revenue / Cost (₹)");

            // Grid lines
            svg.append("g")
                .attr("class", "grid")
                .attr("opacity", 0.1)
                .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));
            svg.append("g")
                .attr("class", "grid")
                .attr("opacity", 0.1)
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x).tickSize(-height).tickFormat(""));

            // Line Generators
            const lineMR = d3.line()
                .x(d => x(d.q))
                .y(d => y(d.mr))
                .curve(d3.curveMonotoneX);

            const lineMC = d3.line()
                .x(d => x(d.q))
                .y(d => y(d.mc))
                .curve(d3.curveMonotoneX);

            // Area Generators for Profit/Loss Zones
            // Profit Zone: Area between MR and MC where MR >= MC (contributing to profit)
            // This is visually the area below MR and above MC, from Q=0 to Q=Equilibrium
            const areaProfit = d3.area()
                .x(d => x(d.q))
                .y0(d => y(d.mr)) // Top curve (MR is constant at 10)
                .y1(d => y(d.mc)) // Bottom curve (MC starts high, dips, then rises)
                .defined(d => d.mr >= d.mc || d.q <= 6) // Crude logic: shade purely where MR > MC, or simply up to EQ point? 
                // Better logic: Shade purely the integral area between curves up to intersection.
                // Since MC starts at 15 (Loss) then dips to 4, then rises to 10.
                // Area 1: Q=0 to Q=1 (MC > MR, Loss). 
                // Area 2: Q=1 to Q=6 (MR > MC, Profit).
                // We want to highlight the PROFIT accumulation zone.
                .defined(d => d.mr >= d.mc)
                .curve(d3.curveMonotoneX);

            // Loss Zone: Area where MC > MR (after equilibrium)
            const areaLoss = d3.area()
                .x(d => x(d.q))
                .y0(d => y(d.mr))
                .y1(d => y(d.mc))
                .defined(d => d.mc >= d.mr && d.q >= 6)
                .curve(d3.curveMonotoneX);


            // Draw Areas first (so lines are on top)
            // PROFIT ZONE
            svg.append("path")
                .datum(data)
                .attr("fill", "rgba(0, 255, 136, 0.15)") // Slightly stronger green
                .attr("stroke", "rgba(0, 255, 136, 0.3)")
                .attr("d", areaProfit);

            // Profit Label
            svg.append("text")
                .attr("x", x(4)) // Roughly middle of profit zone
                .attr("y", y(7)) // Roughly middle height
                .attr("text-anchor", "middle")
                .attr("fill", "#00ff88")
                .attr("font-size", "0.9rem")
                .attr("font-weight", "bold")
                .attr("opacity", 0.8)
                .text("PROFIT");

            // LOSS ZONE
            svg.append("path")
                .datum(data)
                .attr("fill", "rgba(255, 107, 107, 0.1)")
                .attr("d", areaLoss);

            // Draw MR Line
            const pathMR = svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "#00e5ff") // Cyan
                .attr("stroke-width", 3)
                .attr("d", lineMR);

            // Draw MC Line
            const pathMC = svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "#ffaa00") // Gold
                .attr("stroke-width", 3)
                .attr("d", lineMC);

            // Add Dash animation for lines
            const totalLengthMR = pathMR.node().getTotalLength();
            pathMR.attr("stroke-dasharray", totalLengthMR + " " + totalLengthMR)
                .attr("stroke-dashoffset", totalLengthMR)
                .transition()
                .duration(2000)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0);

            const totalLengthMC = pathMC.node().getTotalLength();
            pathMC.attr("stroke-dasharray", totalLengthMC + " " + totalLengthMC)
                .attr("stroke-dashoffset", totalLengthMC)
                .transition()
                .duration(2000)
                .ease(d3.easeLinear)
                .attr("stroke-dashoffset", 0);


            // Labels for Lines
            svg.append("text")
                .attr("x", x(7.5))
                .attr("y", y(10) - 10)
                .attr("fill", "#00e5ff")
                .attr("font-weight", "bold")
                .text("MR = AR = Price");

            svg.append("text")
                .attr("x", x(7.5))
                .attr("y", y(18))
                .attr("fill", "#ffaa00")
                .attr("font-weight", "bold")
                .text("MC");

            // Highlight Equilibrium Point (Q=6, P=10)
            const equilibriumPoint = { q: 6, p: 10 };

            // Drop lines
            svg.append("line")
                .attr("x1", x(equilibriumPoint.q))
                .attr("y1", y(equilibriumPoint.p))
                .attr("x2", x(equilibriumPoint.q))
                .attr("y2", height)
                .attr("stroke", "rgba(255,255,255,0.3)")
                .attr("stroke-dasharray", "4")
                .transition().delay(2000).duration(500).attr("opacity", 1); // Delay appearance

            svg.append("line")
                .attr("x1", x(equilibriumPoint.q))
                .attr("y1", y(equilibriumPoint.p))
                .attr("x2", 0)
                .attr("y2", y(equilibriumPoint.p))
                .attr("stroke", "rgba(255,255,255,0.3)")
                .attr("stroke-dasharray", "4")
                .transition().delay(2000).duration(500).attr("opacity", 1);


            // Equilibrium Dot
            svg.append("circle")
                .attr("cx", x(equilibriumPoint.q))
                .attr("cy", y(equilibriumPoint.p))
                .attr("r", 6)
                .attr("fill", "#00ff88") // Green for success/equilibrium
                .attr("stroke", "#fff")
                .attr("stroke-width", 2)
                .transition().delay(2000).duration(500)
                .attr("r", 8);

            // Tooltip Label for Equilibrium
            svg.append("text")
                .attr("x", x(equilibriumPoint.q))
                .attr("y", y(equilibriumPoint.p) - 15)
                .attr("text-anchor", "middle")
                .attr("fill", "#00ff88")
                .attr("font-weight", "bold")
                .text("Equilibrium (E)")
                .attr("opacity", 0)
                .transition().delay(2200).duration(500)
                .attr("opacity", 1);

            // Interactive Focus Overlay
            const focus = svg.append("g")
                .style("display", "none");

            focus.append("circle")
                .attr("r", 5)
                .attr("fill", "white");

            // Tooltip div (external to SVG but positioned absolute)
            const tooltip = d3.select(d3Container.current)
                .append("div")
                .style("position", "absolute")
                .style("visibility", "hidden")
                .style("background", "rgba(15, 23, 42, 0.95)")
                .style("border", "1px solid rgba(255,255,255,0.2)")
                .style("padding", "10px")
                .style("border-radius", "8px")
                .style("color", "white")
                .style("font-size", "0.9rem")
                .style("pointer-events", "none")
                .style("box-shadow", "0 10px 25px rgba(0,0,0,0.5)");

            // Overlay for hover detection
            svg.append("rect")
                .attr("width", width)
                .attr("height", height)
                .style("fill", "none")
                .style("pointer-events", "all")
                .on("mouseover", () => {
                    focus.style("display", null);
                    tooltip.style("visibility", "visible");
                })
                .on("mouseout", () => {
                    focus.style("display", "none");
                    tooltip.style("visibility", "hidden");
                })
                .on("mousemove", (event) => {
                    const x0 = x.invert(d3.pointer(event)[0]);
                    const i = d3.bisector(d => d.q).left(data, x0, 1);
                    const d0 = data[i - 1];
                    const d1 = data[i];
                    const d = x0 - d0.q > d1.q - x0 ? d1 : d0;

                    focus.attr("transform", `translate(${x(d.q)},${y(d.mc)})`);

                    tooltip
                        .html(`<strong>Output: ${d.q}</strong><br>MC: ₹${d.mc}<br>MR: ₹${d.mr}<br>Profit: ₹${d.profit}`)
                        .style("top", (event.pageY - d3Container.current.getBoundingClientRect().top - 100) + "px") // Adjust positioning
                        .style("left", (event.pageX - d3Container.current.getBoundingClientRect().left + 20) + "px");

                    // Highlight logic in tooltip if Equilibrium
                    if (d.q === 6) {
                        tooltip.style("border-color", "#00ff88");
                    } else {
                        tooltip.style("border-color", "rgba(255,255,255,0.2)");
                    }
                });

        }
    }, []);

    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Visual Analysis</span>
                <h2 className="section-title-lesson">Equilibrium Graph</h2>
                <p className="section-subtitle-lesson">
                    Visualizing the point where Producer's Equilibrium is achieved.
                </p>
            </div>

            <div className="premium-card" style={{ height: '500px', position: 'relative' }}>
                <div ref={d3Container} style={{ width: '100%', height: '100%' }}></div>
            </div>
            <div className="note-text" style={{ textAlign: 'center', marginTop: '10px' }}>
                Note: The producer reaches equilibrium at Point E where MC intersects MR from below.
            </div>
        </div>
    );
};

export default EquilibriumGraph;
