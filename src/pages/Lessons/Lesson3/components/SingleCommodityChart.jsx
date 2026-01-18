import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const SingleCommodityChart = ({ data, price }) => {
    const containerRef = useRef(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: null });

    useEffect(() => {
        if (!data || !containerRef.current) return;

        // Clear previous SVG
        d3.select(containerRef.current).selectAll("*").remove();

        // Dimensions
        const margin = { top: 40, right: 30, bottom: 50, left: 60 };
        const width = containerRef.current.clientWidth - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3.select(containerRef.current)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // X Axis
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.units) + 1])
            .range([0, width]);

        // Y Axis
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => Math.max(d.mu, d.price)) + 5])
            .range([height, 0]);

        // Grid lines
        const make_x_gridlines = () => d3.axisBottom(x).ticks(data.length);
        const make_y_gridlines = () => d3.axisLeft(y).ticks(5);

        svg.append("g")
            .attr("class", "grid")
            .attr("transform", `translate(0,${height})`)
            .style("opacity", "0.1")
            .call(make_x_gridlines()
                .tickSize(-height)
                .tickFormat("")
            );

        svg.append("g")
            .attr("class", "grid")
            .style("opacity", "0.1")
            .call(make_y_gridlines()
                .tickSize(-width)
                .tickFormat("")
            );

        // X Axis rendering
        svg.append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x).ticks(data.length))
            .attr("color", "#fff")
            .style("font-size", "12px");

        // Y Axis rendering
        svg.append("g")
            .call(d3.axisLeft(y))
            .attr("color", "#fff")
            .style("font-size", "12px");

        // Axis Labels
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", height + 40)
            .style("text-anchor", "middle")
            .style("fill", "#fff")
            .text("Units of Commodity");

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", -45)
            .attr("x", -height / 2)
            .style("text-anchor", "middle")
            .style("fill", "#fff")
            .text("Marginal Utility / Price");

        // Price Line (Horizontal)
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#e74c3c")
            .attr("stroke-width", 2)
            .attr("stroke-dasharray", "5,5")
            .attr("d", d3.line()
                .x(d => x(d.units))
                .y(d => y(price))
            );

        svg.append("text")
            .attr("x", width - 10)
            .attr("y", y(price) - 10)
            .attr("text-anchor", "end")
            .style("fill", "#e74c3c")
            .style("font-size", "12px")
            .text(`Price = ${price}`);

        // MU Curve
        const line = d3.line()
            .curve(d3.curveMonotoneX)
            .x(d => x(d.units))
            .y(d => y(d.mu));

        // Area Generator for Surplus (MU > Price)
        const areaSurplus = d3.area()
            .curve(d3.curveMonotoneX)
            .x(d => x(d.units))
            .y0(d => y(price))
            .y1(d => Math.min(y(d.mu), y(price))); // Ensures we don't go below price line visual if logic fails, but mathematically we filter data

        // We can just clip the path or just draw areas based on filtered data if curves intersect cleanly. 
        // For simplicity in this specific "Lesson", we can assume simple intersection.

        // Draw Curve
        const path = svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "#00ffff")
            .attr("stroke-width", 3)
            .attr("d", line);

        // Animate Curve
        const totalLength = path.node().getTotalLength();
        path
            .attr("stroke-dasharray", totalLength + " " + totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(2000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0);

        // Points
        svg.selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => x(d.units))
            .attr("cy", d => y(d.mu))
            .attr("r", 6)
            .attr("fill", d => d.mu === price ? "#ffd700" : (d.mu > price ? "#28a745" : "#dc3545"))
            .attr("stroke", "#fff")
            .attr("stroke-width", 2)
            .style("cursor", "pointer")
            .on("mouseenter", (event, d) => {
                const eqText = d.mu === price ? " (Equilibrium)" : "";
                setTooltip({
                    visible: true,
                    x: event.pageX,
                    y: event.pageY,
                    content: (
                        <div>
                            <strong>Unit: {d.units}</strong><br />
                            MU: {d.mu}<br />
                            Price: {d.price}<br />
                            <span style={{ color: d.mu >= price ? '#4cd137' : '#e84118' }}>
                                {d.mu >= price ? "Surplus" : "Deficit"}: {d.mu - d.price}
                            </span>
                            {eqText && <strong style={{ color: '#ffd700' }}><br />EQUILIBRIUM!</strong>}
                        </div>
                    )
                });

                d3.select(event.currentTarget).attr("r", 9);
            })
            .on("mousemove", (event) => {
                setTooltip(prev => ({ ...prev, x: event.pageX, y: event.pageY }));
            })
            .on("mouseleave", (event) => {
                setTooltip(prev => ({ ...prev, visible: false }));
                d3.select(event.currentTarget).attr("r", 6);
            });

        // Equilibrium Line (Vertical)
        const eqPoint = data.find(d => d.mu === price);
        if (eqPoint) {
            svg.append("line")
                .attr("x1", x(eqPoint.units))
                .attr("y1", y(eqPoint.mu))
                .attr("x2", x(eqPoint.units))
                .attr("y2", height)
                .attr("stroke", "#ffd700")
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "4 4");

            svg.append("text")
                .attr("x", x(eqPoint.units))
                .attr("y", y(eqPoint.mu) - 15)
                .attr("text-anchor", "middle")
                .style("fill", "#ffd700")
                .style("font-weight", "bold")
                .text("E");
        }

    }, [data, price]);

    return (
        <div style={{ position: 'relative' }}>
            <div ref={containerRef} style={{ width: '100%', height: '400px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px' }} />

            {tooltip.visible && (
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    // We use fixed or calculating relative to container, but pageX is global. 
                    // Simplest is generic fixed tooltip or portals. 
                    // For this snippet, let's try inline absolute if we can map coordinates, 
                    // OR use a fixed overlay. Let's use fixed for safety with pageX.
                }}>
                    {/* Actually, React Portal is best, but let's just use fixed position style on the div itself */}
                </div>
            )}
            {tooltip.visible && (
                <div style={{
                    position: 'fixed',
                    left: tooltip.x + 15,
                    top: tooltip.y - 15,
                    background: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '10px',
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

export default SingleCommodityChart;
