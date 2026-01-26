import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './component.css';

const TotalCostCurves = () => {
    const svgRef = useRef();
    const containerRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 450 });

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
        // --- FIXED SCHEDULE DATA (Same as CostCurvesChart for consistency) ---
        // Q: 0 to 10. TFC=10.
        // TC values taken from CostCurvesChart logic

        const fixedData = [
            { output: 0, tc: 10, tvc: 0, tfc: 10 },
            { output: 1, tc: 20, tvc: 10, tfc: 10 },
            { output: 2, tc: 28, tvc: 18, tfc: 10 },
            { output: 3, tc: 34, tvc: 24, tfc: 10 },
            { output: 4, tc: 38, tvc: 28, tfc: 10 },
            { output: 5, tc: 42, tvc: 32, tfc: 10 },
            { output: 6, tc: 48, tvc: 38, tfc: 10 },
            { output: 7, tc: 56, tvc: 46, tfc: 10 },
            { output: 8, tc: 66, tvc: 56, tfc: 10 },
            { output: 9, tc: 78, tvc: 68, tfc: 10 },
            { output: 10, tc: 92, tvc: 82, tfc: 10 }
        ];

        if (!dimensions.width) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const { width, height } = dimensions;
        const margin = { top: 30, right: 60, bottom: 50, left: 60 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        svg.attr('width', width).attr('height', height);

        // Define Arrow Marker
        svg.append('defs').append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', '0 0 10 10')
            .attr('refX', 5)
            .attr('refY', 5)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto-start-reverse')
            .append('path')
            .attr('d', 'M 0 0 L 10 5 L 0 10 z')
            .attr('fill', '#999');

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // --- Scales ---
        const xScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, innerWidth]);

        const yScale = d3.scaleLinear()
            .domain([0, 100])
            .range([innerHeight, 0]);

        // --- Axes with Arrows ---
        const xAxis = d3.axisBottom(xScale).ticks(10).tickFormat(d => `Q${d}`);
        const yAxis = d3.axisLeft(yScale).tickValues(d3.range(0, 101, 10)).tickFormat(d => `₹${d}`);

        // Custom X Axis Line with Arrow
        g.append('line')
            .attr('x1', 0)
            .attr('y1', innerHeight)
            .attr('x2', innerWidth + 10) // Extend slightly
            .attr('y2', innerHeight)
            .attr('stroke', '#888')
            .attr('stroke-width', 1.5)
            .attr('marker-end', 'url(#arrow)');

        // Custom Y Axis Line with Arrow
        g.append('line')
            .attr('x1', 0)
            .attr('y1', innerHeight)
            .attr('x2', 0)
            .attr('y2', -10) // Extend up slightly
            .attr('stroke', '#888')
            .attr('stroke-width', 1.5)
            .attr('marker-end', 'url(#arrow)');

        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(xAxis)
            .select(".domain").remove(); // Remove default domain line

        g.append('g')
            .call(yAxis)
            .select(".domain").remove(); // Remove default domain line

        // Axis Labels
        g.append('text')
            .attr('x', innerWidth / 2)
            .attr('y', innerHeight + 40)
            .attr('fill', '#ccc')
            .style('font-size', '14px')
            .style('text-anchor', 'middle')
            .text('Output (Units)');

        g.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('x', -innerHeight / 2)
            .attr('y', -45)
            .attr('fill', '#ccc')
            .style('font-size', '14px')
            .style('text-anchor', 'middle')
            .text('Cost (₹)');

        // --- Gridlines ---
        const makeXGrid = () => d3.axisBottom(xScale).ticks(10);
        const makeYGrid = () => d3.axisLeft(yScale).tickValues(d3.range(0, 101, 10));

        g.append('g')
            .attr('class', 'grid')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(makeXGrid().tickSize(-innerHeight).tickFormat(''))
            .attr('stroke-opacity', 0.1);

        g.append('g')
            .attr('class', 'grid')
            .call(makeYGrid().tickSize(-innerWidth).tickFormat(''))
            .attr('stroke-opacity', 0.1);

        // --- Line Generator ---
        const lineGenerator = (key) => d3.line()
            .x(d => xScale(d.output))
            .y(d => yScale(d[key]))
            .curve(d3.curveMonotoneX);

        // --- Paths ---
        const paths = [
            { key: 'tc', color: '#00ff88', width: 3, label: 'TC' },
            { key: 'tvc', color: '#ff6b6b', width: 2, label: 'TVC' },
            { key: 'tfc', color: '#00bfff', width: 2, label: 'TFC', dash: '5,5' }
        ];

        paths.forEach(p => {
            const pathData = fixedData;

            const path = g.append('path')
                .datum(pathData)
                .attr('fill', 'none')
                .attr('stroke', p.color)
                .attr('stroke-width', p.width)
                .attr('d', lineGenerator(p.key));

            if (p.dash) path.attr('stroke-dasharray', p.dash);

            // Labels at end of lines
            const lastPt = pathData[pathData.length - 1];
            g.append('text')
                .attr('x', xScale(lastPt.output) + 10)
                .attr('y', yScale(lastPt[p.key]))
                .attr('fill', p.color)
                .attr('dy', '0.35em')
                .style('font-size', '12px')
                .style('font-weight', 'bold')
                .text(p.label);

            // Animation
            const length = path.node().getTotalLength();
            path.attr("stroke-dasharray", p.dash ? `${p.dash} ${length}` : `${length} ${length}`)
                .attr("stroke-dashoffset", length)
                .transition()
                .duration(2000)
                .ease(d3.easeCubicOut)
                .attr("stroke-dashoffset", 0);
        });

        // --- Tooltip & Dots ---
        const tooltip = d3.select(containerRef.current)
            .append("div")
            .style("position", "absolute")
            .style("visibility", "hidden")
            .style("background", "rgba(0,0,0,0.9)")
            .style("color", "#fff")
            .style("padding", "10px")
            .style("border-radius", "6px")
            .style("font-size", "12px")
            .style("pointer-events", "none")
            .style("z-index", "1000")
            .style("border", "1px solid rgba(255,255,255,0.2)");

        paths.forEach(p => {
            g.selectAll(`.dot-${p.key}`)
                .data(fixedData)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d.output))
                .attr('cy', d => yScale(d[p.key]))
                .attr('r', 4)
                .attr('fill', '#1a1a2e')
                .attr('stroke', p.color)
                .attr('stroke-width', 2)
                .on("mouseover", (event, d) => {
                    tooltip.style("visibility", "visible")
                        .html(`<strong>Output: ${d.output}</strong><br/>${p.label}: ₹${d[p.key]}`);
                    d3.select(event.currentTarget).attr('r', 6).attr('fill', p.color);
                })
                .on("mousemove", (event) => {
                    const bounds = containerRef.current.getBoundingClientRect();
                    tooltip.style("top", (event.clientY - bounds.top - 40) + "px")
                        .style("left", (event.clientX - bounds.left + 10) + "px");
                })
                .on("mouseout", (event) => {
                    tooltip.style("visibility", "hidden");
                    d3.select(event.currentTarget).attr('r', 4).attr('fill', '#1a1a2e');
                });
        });

    }, [dimensions]);

    return (
        <section className="lesson-section">
            <div className="content-card">
                <div ref={containerRef} className="chart-wrapper-flex" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <svg ref={svgRef} className="chart-container-d3" style={{ height: '450px' }}></svg>

                    <div className="chart-legend-bottom" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
                        <h4 className="legend-title" style={{ width: '100%', textAlign: 'center', marginBottom: '5px' }}>Key</h4>
                        <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="legend-line" style={{ background: '#00ff88', width: '30px', height: '3px' }}></span>
                            <div style={{ fontSize: '0.9rem', color: '#ccc' }}><strong>TC</strong> (Total Cost)</div>
                        </div>
                        <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="legend-line" style={{ background: '#ff6b6b', width: '30px', height: '2px' }}></span>
                            <div style={{ fontSize: '0.9rem', color: '#ccc' }}><strong>TVC</strong> (Total Variable Cost)</div>
                        </div>
                        <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="legend-line" style={{ borderTop: '2px dashed #00bfff', width: '30px' }}></span>
                            <div style={{ fontSize: '0.9rem', color: '#ccc' }}><strong>TFC</strong> (Total Fixed Cost)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TotalCostCurves;
