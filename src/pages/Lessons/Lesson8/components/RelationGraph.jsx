import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RelationGraph = ({ type }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 300;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        svg.attr('viewBox', `0 0 ${width} ${height}`)
            .style('background', 'rgba(255,255,255,0.02)')
            .style('border-radius', '12px')
            .style('border', '1px solid rgba(255,255,255,0.1)');

        // Axes
        const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        // Draw simplistic axes
        g.append('line').attr('x1', 0).attr('y1', innerHeight).attr('x2', innerWidth).attr('y2', innerHeight).attr('stroke', '#666').attr('stroke-width', 1.5);
        g.append('line').attr('x1', 0).attr('y1', innerHeight).attr('x2', 0).attr('y2', 0).attr('stroke', '#666').attr('stroke-width', 1.5);

        if (type === 'ac-mc') {
            // Draw U-shaped AC
            const acPath = d3.path();
            acPath.moveTo(20, 40);
            acPath.quadraticCurveTo(innerWidth / 2, innerHeight + 40, innerWidth - 20, 40);
            g.append('path').attr('d', acPath.toString()).attr('stroke', '#ffd700').attr('fill', 'none').attr('stroke-width', 2);

            // Draw MC cutting AC at min
            const mcPath = d3.path();
            mcPath.moveTo(20, 100);
            mcPath.quadraticCurveTo(innerWidth / 2 + 20, innerHeight, innerWidth - 20, 0); // Cuts through min approx
            // Adjust to ensure visual intersection look
            const mcLine = d3.line().curve(d3.curveBasis)([[30, 120], [100, 140], [140, 95], [200, 10]]); // Customized points
            g.append('path').attr('d', mcLine).attr('stroke', '#ff6b6b').attr('fill', 'none').attr('stroke-width', 2);

            // Labels
            g.append('text').attr('x', innerWidth - 30).attr('y', 35).attr('fill', '#ffd700').style('font-size', '10px').text('AC');
            g.append('text').attr('x', innerWidth - 30).attr('y', 10).attr('fill', '#ff6b6b').style('font-size', '10px').text('MC');

            // Intersection Marker
            g.append('circle').attr('cx', 133).attr('cy', 88).attr('r', 3).attr('fill', '#fff'); // Approx coordinate
        }
        else if (type === 'tc-mc') {
            // Draw S-shaped TC
            const tcData = [[0, innerHeight], [50, innerHeight - 30], [100, innerHeight - 80], [150, innerHeight - 100], [250, 20]];
            const tcLine = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveBasis);
            g.append('path').attr('d', tcLine(tcData)).attr('stroke', '#00ff88').attr('fill', 'none').attr('stroke-width', 2);

            // Draw MC (U-shape)
            const mcData = [[0, 80], [100, 120], [200, 40], [250, 10]]; // Rough inverted U logic? No MC is U shaped.
            // MC falls then rises.
            const mcLine = d3.line().curve(d3.curveBasis)([[20, 60], [100, 100], [240, 10]]);
            g.append('path').attr('d', mcLine).attr('stroke', '#ff6b6b').attr('fill', 'none').attr('stroke-width', 2);

            g.append('text').attr('x', 240).attr('y', 30).attr('fill', '#00ff88').style('font-size', '10px').text('TC');
            g.append('text').attr('x', 240).attr('y', 5).attr('fill', '#ff6b6b').style('font-size', '10px').text('MC');
        }

    }, [type]);

    return <svg ref={svgRef} style={{ width: '100%', height: 'auto', maxHeight: '200px' }}></svg>;
};

export default RelationGraph;
