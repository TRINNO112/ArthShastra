import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const RelationGraph = ({ type }) => {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 300;
        const height = 200;
        const margin = { top: 20, right: 20, bottom: 20, left: 30 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        svg.attr('viewBox', `0 0 ${width} ${height}`)
            .style('background', 'rgba(255,255,255,0.02)')
            .style('border-radius', '12px')
            .style('border', '1px solid rgba(255,255,255,0.1)');

        const g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

        // --- Math Functions for Accurate Curves ---
        // Cubic Cost: TC(q) = q^3 - 6q^2 + 15q + 20
        const range = d3.range(0.1, 7, 0.1); // q from 0.1 to 6

        // Scales
        const xScale = d3.scaleLinear().domain([0, 7]).range([0, innerWidth]);
        // Scales
        // Adjust Y-Domain based on type to prevent cutoff
        let maxVal = 80;
        if (type === 'tc-mc') maxVal = 180; // TC goes significantly higher

        const yScale = d3.scaleLinear().domain([0, maxVal]).range([innerHeight, 0]);

        // Axes
        g.append('path').attr('d', `M0,${innerHeight} L${innerWidth},${innerHeight}`).attr('stroke', '#666');
        g.append('path').attr('d', `M0,${innerHeight} L0,0`).attr('stroke', '#666');

        const lineGen = d3.line().x(d => xScale(d.q)).y(d => yScale(d.val)).curve(d3.curveMonotoneX);

        if (type === 'ac-mc') {
            const mcData = range.map(q => ({ q, val: 3 * q * q - 12 * q + 15 }));
            const acData = range.map(q => ({ q, val: q * q - 6 * q + 15 + 20 / q }));
            // Filter AC to stay within reasonable Y (cap at maxVal)
            const safeAcData = acData.filter(d => d.val <= maxVal);

            // Min AC is intersection
            const minAC = acData.reduce((prev, curr) => curr.val < prev.val ? curr : prev);

            g.append('path').datum(safeAcData).attr('d', lineGen).attr('stroke', '#ffd700').attr('stroke-width', 2).attr('fill', 'none');
            g.append('path').datum(mcData).attr('d', lineGen).attr('stroke', '#ff6b6b').attr('stroke-width', 2).attr('fill', 'none');

            // Labels at the end of curves
            const lastAC = safeAcData[safeAcData.length - 1];
            const lastMC = mcData[mcData.length - 1];

            g.append('text').attr('x', xScale(lastAC.q) + 5).attr('y', yScale(lastAC.val)).attr('fill', '#ffd700').style('font-size', '10px').style('font-weight', 'bold').text('AC');
            g.append('text').attr('x', xScale(lastMC.q) + 5).attr('y', yScale(lastMC.val)).attr('fill', '#ff6b6b').style('font-size', '10px').style('font-weight', 'bold').text('MC');

            // Highlight intersection
            g.append('circle').attr('cx', xScale(minAC.q)).attr('cy', yScale(minAC.val)).attr('r', 4).attr('fill', '#fff');
            g.append('line').attr('x1', xScale(minAC.q)).attr('x2', xScale(minAC.q)).attr('y1', innerHeight).attr('y2', yScale(minAC.val)).attr('stroke', 'rgba(255,255,255,0.3)').attr('stroke-dasharray', '3,3');
        }
        else if (type === 'tc-mc') {
            // TC vs MC
            const tcData = range.map(q => ({ q, val: q * q * q - 6 * q * q + 15 * q + 20 }));
            const mcData = range.map(q => ({ q, val: 3 * q * q - 12 * q + 15 }));

            g.append('path').datum(tcData).attr('d', lineGen).attr('stroke', '#00ff88').attr('stroke-width', 2).attr('fill', 'none');
            g.append('path').datum(mcData).attr('d', lineGen).attr('stroke', '#ff6b6b').attr('stroke-width', 2).attr('fill', 'none');

            // Labels at end
            const lastTC = tcData[tcData.length - 1];
            const lastMC = mcData[mcData.length - 1];

            g.append('text').attr('x', xScale(lastTC.q) + 5).attr('y', yScale(lastTC.val)).attr('fill', '#00ff88').style('font-size', '10px').style('font-weight', 'bold').text('TC');
            g.append('text').attr('x', xScale(lastMC.q) + 5).attr('y', yScale(lastMC.val)).attr('fill', '#ff6b6b').style('font-size', '10px').style('font-weight', 'bold').text('MC');

            // Inflection point: Min MC (q=2)
            g.append('line').attr('x1', xScale(2)).attr('x2', xScale(2)).attr('y1', innerHeight).attr('y2', 0).attr('stroke', 'rgba(255,255,255,0.2)').attr('stroke-dasharray', '2,2');
            g.append('text').attr('x', xScale(2)).attr('y', 10).text('Inflection').attr('fill', '#aaa').style('font-size', '9px').attr('text-anchor', 'middle');
        }
        else if (type === 'ac-avc') {
            // AC vs AVC vs AFC
            const acData = range.map(q => ({ q, val: q * q - 6 * q + 15 + 20 / q })).filter(d => d.val <= maxVal + 10);
            const avcData = range.map(q => ({ q, val: q * q - 6 * q + 15 }));
            const afcData = range.map(q => ({ q, val: 20 / q })).filter(d => d.val <= maxVal + 10);

            g.append('path').datum(acData).attr('d', lineGen).attr('stroke', '#ffd700').attr('stroke-width', 2).attr('fill', 'none');
            g.append('path').datum(avcData).attr('d', lineGen).attr('stroke', '#00bfff').attr('stroke-width', 2).attr('fill', 'none');
            g.append('path').datum(afcData).attr('d', lineGen).attr('stroke', '#ccc').attr('stroke-width', 1).attr('stroke-dasharray', '4,4').attr('opacity', 0.5).attr('fill', 'none');

            // Labels at end
            const lastAC = acData[acData.length - 1];
            const lastAVC = avcData[avcData.length - 1];
            const lastAFC = afcData[afcData.length - 1];

            // Offset alignment to avoid overlap
            g.append('text').attr('x', xScale(lastAC.q) + 5).attr('y', yScale(lastAC.val) - 5).attr('fill', '#ffd700').style('font-size', '10px').style('font-weight', 'bold').text('AC');
            g.append('text').attr('x', xScale(lastAVC.q) + 5).attr('y', yScale(lastAVC.val) + 5).attr('fill', '#00bfff').style('font-size', '10px').style('font-weight', 'bold').text('AVC');
            g.append('text').attr('x', xScale(lastAFC.q) + 5).attr('y', yScale(lastAFC.val)).attr('fill', '#ccc').style('font-size', '10px').text('AFC');
        }

    }, [type]);

    return <svg ref={svgRef} style={{ width: '100%', height: 'auto', maxHeight: '250px' }}></svg>;
};

export default RelationGraph;
