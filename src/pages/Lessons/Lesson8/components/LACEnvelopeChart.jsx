import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import './component.css';

const LACEnvelopeChart = () => {
    const svgRef = useRef();
    const wrapperRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 400 });

    useEffect(() => {
        const updateDims = () => {
            if (wrapperRef.current) {
                setDimensions({
                    width: wrapperRef.current.offsetWidth,
                    height: 400
                });
            }
        };
        window.addEventListener('resize', updateDims);
        updateDims();
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    useEffect(() => {
        if (!dimensions.width) return;

        const { width, height } = dimensions;
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove(); // Clear previous

        const margin = { top: 20, right: 30, bottom: 50, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Create Container Group
        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Scales
        const xScale = d3.scaleLinear().domain([0, 100]).range([0, innerWidth]);
        const yScale = d3.scaleLinear().domain([0, 100]).range([innerHeight, 0]);

        // Axes
        const xAxis = d3.axisBottom(xScale).ticks(5).tickFormat('');
        const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat('');

        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(xAxis)
            .style('color', 'rgba(255,255,255,0.2)');

        g.append('g')
            .call(yAxis)
            .style('color', 'rgba(255,255,255,0.2)');

        // Labels
        svg.append('text')
            .attr('x', width / 2)
            .attr('y', height - 10)
            .attr('fill', '#ccc')
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .text('Output (Q)');

        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('x', -height / 2)
            .attr('y', 15)
            .attr('fill', '#ccc')
            .attr('text-anchor', 'middle')
            .style('font-size', '12px')
            .text('Cost (₹)');

        // Gradients
        const defs = svg.append('defs');

        // SAC Gradients
        const sacGradient = defs.append('linearGradient').attr('id', 'sac-gradient').attr('x1', '0%').attr('y1', '0%').attr('x2', '0%').attr('y2', '100%');
        sacGradient.append('stop').attr('offset', '0%').attr('stop-color', '#00bfff').attr('stop-opacity', 1);
        sacGradient.append('stop').attr('offset', '100%').attr('stop-color', '#1e90ff').attr('stop-opacity', 0.5);

        // LAC Gradient
        const lacGradient = defs.append('linearGradient').attr('id', 'lac-gradient').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%');
        lacGradient.append('stop').attr('offset', '0%').attr('stop-color', '#ffd700');
        lacGradient.append('stop').attr('offset', '100%').attr('stop-color', '#ffaa00');

        // --- Data Generation ---
        // SAC Curves: Parabola equation y = a(x-h)^2 + k
        const generateParabola = (h, k, a, range) => {
            const points = [];
            for (let x = range[0]; x <= range[1]; x += 1) {
                points.push({ x, y: a * Math.pow(x - h, 2) + k });
            }
            return points;
        };

        const sac1 = generateParabola(25, 40, 0.1, [10, 45]); // Small Plant
        const sac2 = generateParabola(50, 30, 0.08, [30, 70]); // Medium Plant (Optimal)
        const sac3 = generateParabola(75, 40, 0.1, [55, 95]); // Large Plant

        // LAC Envelope: Flatter parabola connecting the bottoms
        const lac = generateParabola(50, 30, 0.03, [10, 90]);

        // Line Generator
        const line = d3.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveBasis); // Smooth curve

        // --- Draw Paths ---

        // Draw SACs
        [sac1, sac2, sac3].forEach((data, i) => {
            const path = g.append('path')
                .datum(data)
                .attr('fill', 'none')
                .attr('stroke', '#00bfff')
                .attr('stroke-width', 2)
                .attr('stroke-dasharray', '5,5')
                .attr('d', line)
                .attr('opacity', 0.7);

            // Animate
            const totalLength = path.node().getTotalLength();
            path.attr('stroke-dasharray', `5,5 ${totalLength}`) // dotted
                .attr('stroke-dashoffset', totalLength)
                .transition().duration(2000).delay(i * 500)
                .attr('stroke-dashoffset', 0);
        });

        // Draw LAC (Envelope)
        const lacPath = g.append('path')
            .datum(lac)
            .attr('fill', 'none')
            .attr('stroke', 'url(#lac-gradient)')
            .attr('stroke-width', 4)
            .attr('d', line)
            .style('filter', 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))');

        const lacLength = lacPath.node().getTotalLength();
        lacPath.attr('stroke-dasharray', lacLength)
            .attr('stroke-dashoffset', lacLength)
            .transition().duration(2500).delay(1500)
            .attr('stroke-dashoffset', 0);

        // --- Annotations ---
        const annotations = [
            { x: 25, y: 70, text: 'SAC1', color: '#00bfff' },
            { x: 50, y: 60, text: 'SAC2', color: '#00bfff' },
            { x: 75, y: 70, text: 'SAC3', color: '#00bfff' },
            { x: 50, y: 20, text: 'LAC (Envelope Curve)', color: '#ffd700', bold: true }
        ];

        annotations.forEach(an => {
            g.append('text')
                .attr('x', xScale(an.x))
                .attr('y', yScale(an.y))
                .attr('fill', an.color)
                .attr('text-anchor', 'middle')
                .style('font-weight', an.bold ? 'bold' : 'normal')
                .style('font-size', an.bold ? '14px' : '12px')
                .text(an.text)
                .attr('opacity', 0)
                .transition().duration(1000).delay(3000)
                .attr('opacity', 1);
        });

        // --- Interactive Tooltip ---
        const tooltip = d3.select(wrapperRef.current)
            .append('div')
            .attr('class', 'tooltip-d3')
            .style('opacity', 0);

        // Overlay for hover
        g.append('rect')
            .attr('width', innerWidth)
            .attr('height', innerHeight)
            .attr('fill', 'transparent')
            .on('mousemove', (event) => {
                const [mx] = d3.pointer(event);
                const xVal = xScale.invert(mx);

                // Find closest point on LAC
                // Simplify: use parabola equation y = 0.03(x-50)^2 + 30
                const cost = 0.03 * Math.pow(xVal - 50, 2) + 30;

                tooltip.style('opacity', 1)
                    .html(`<strong>Output:</strong> ${Math.round(xVal)}<br/><strong>Long Run Cost:</strong> ₹${cost.toFixed(2)}`)
                    .style('left', `${event.offsetX + 15}px`)
                    .style('top', `${event.offsetY - 20}px`);
            })
            .on('mouseleave', () => tooltip.style('opacity', 0));

    }, [dimensions]);

    return (
        <div ref={wrapperRef} className="chart-container-d3">
            <svg ref={svgRef} width="100%" height="100%"></svg>
        </div>
    );
};

export default LACEnvelopeChart;
