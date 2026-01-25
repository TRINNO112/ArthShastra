import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { FaChartLine, FaInfoCircle } from 'react-icons/fa';
import './component.css';

const CostCurvesChart = ({ data }) => {
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
    if (!dimensions.width || !data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    const margin = { top: 40, right: 30, bottom: 60, left: 70 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.output)])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.tc, d.ac, d.avc, d.afc || 0))])
      .range([innerHeight, 0]);

    // Gradients
    const defs = svg.append('defs');

    const tcGradient = defs.append('linearGradient')
      .attr('id', 'tc-gradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '100%').attr('y2', '0%');
    tcGradient.append('stop').attr('offset', '0%').attr('stop-color', '#00ff88').attr('stop-opacity', 0.8);
    tcGradient.append('stop').attr('offset', '100%').attr('stop-color', '#00cc66').attr('stop-opacity', 1);

    // Grid
    g.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale).ticks(10).tickSize(-innerHeight).tickFormat(''))
      .selectAll('.tick line')
      .style('stroke', 'rgba(255,255,255,0.05)');

    g.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale).ticks(10).tickSize(-innerWidth).tickFormat(''))
      .selectAll('.tick line')
      .style('stroke', 'rgba(255,255,255,0.05)');

    // Axes
    const xAxis = d3.axisBottom(xScale).ticks(10);
    const yAxis = d3.axisLeft(yScale).ticks(10);

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .attr('color', '#888')
      .selectAll('text')
      .attr('fill', '#ccc')
      .style('font-size', '12px');

    g.append('g')
      .call(yAxis)
      .attr('color', '#888')
      .selectAll('text')
      .attr('fill', '#ccc')
      .style('font-size', '12px');

    // Labels
    g.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + 40)
      .attr('fill', '#ccc')
      .attr('text-anchor', 'middle')
      .style('font-size', '14px')
      .text('Output (Q)');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerHeight / 2)
      .attr('y', -50)
      .attr('fill', '#ccc')
      .attr('text-anchor', 'middle')
      .style('font-size', '14px')
      .text('Cost (₹)');

    // Line generator
    const lineGenerator = (key) => d3.line()
      .x(d => xScale(d.output))
      .y(d => yScale(d[key]))
      .curve(d3.curveMonotoneX);

    // Paths
    const paths = [
      { key: 'tc', color: '#00ff88', width: 3, label: 'TC' },
      { key: 'mc', color: '#ff6b6b', width: 2, label: 'MC' },
      { key: 'ac', color: '#ffd700', width: 2, dash: '5,5', label: 'AC' },
      { key: 'avc', color: '#00bfff', width: 2, dash: '3,3', label: 'AVC' }
    ];

    paths.forEach(p => {
      const path = g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', p.color)
        .attr('stroke-width', p.width)
        .attr('d', lineGenerator(p.key));

      if (p.dash) path.attr('stroke-dasharray', p.dash);

      const length = path.node().getTotalLength();
      path.attr("stroke-dasharray", p.dash ? `${p.dash} ${length}` : `${length} ${length}`)
        .attr("stroke-dashoffset", length)
        .transition()
        .duration(2000)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);
    });

    // Area under TC
    const areaTC = d3.area()
      .x(d => xScale(d.output))
      .y0(innerHeight)
      .y1(d => yScale(d.tc))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(data)
      .attr('fill', 'url(#tc-gradient)')
      .attr('fill-opacity', 0.1)
      .attr('d', areaTC);

    // Tooltip
    const tooltip = d3.select(containerRef.current)
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0,0,0,0.85)")
      .style("color", "#fff")
      .style("padding", "12px")
      .style("border-radius", "8px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("z-index", "1000")
      .style("box-shadow", "0 4px 12px rgba(0,0,0,0.5)");

    // Dots
    paths.forEach(p => {
      g.selectAll(`.dot-${p.key}`)
        .data(data)
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
            .html(`<strong>Q: ${d.output}</strong><br/>${p.label}: ₹${d[p.key]}`);
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
  }, [dimensions, data]);

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Cost Curves</h2>
        <p className="section-subtitle-lesson">TC rising, MC/AC/AVC U-shapes. MC cuts AC at minimum.</p>
      </div>

      <div className="content-card">
        <div ref={containerRef} className="chart-wrapper-flex">
          <svg ref={svgRef} className="chart-container-d3"></svg>
          <div className="chart-legend-side">
            <h4 className="legend-title">Key</h4>
            <div className="legend-item-group">
              <div className="legend-row">
                <span className="legend-line" style={{ background: '#00ff88', height: '3px' }}></span>
                <div className="legend-text">
                  <span className="legend-label">Total Cost (TC)</span>
                  <span className="legend-desc">FC + VC (always rising)</span>
                </div>
              </div>
            </div>
            <div className="legend-item-group">
              <div className="legend-row">
                <span className="legend-line" style={{ background: '#ff6b6b', height: '2px' }}></span>
                <div className="legend-text">
                  <span className="legend-label">Marginal Cost (MC)</span>
                  <span className="legend-desc">ΔTC/ΔQ (U-shape)</span>
                </div>
              </div>
            </div>
            <div className="legend-item-group">
              <div className="legend-row">
                <span className="legend-line" style={{ borderTop: '2px dashed #ffd700' }}></span>
                <div className="legend-text">
                  <span className="legend-label">Average Cost (AC)</span>
                  <span className="legend-desc">TC/Q (U-min at MC intersect)</span>
                </div>
              </div>
            </div>
            <div className="legend-item-group">
              <div className="legend-row">
                <span className="legend-line" style={{ borderTop: '2px dashed #00bfff' }}></span>
                <div className="legend-text">
                  <span className="legend-label">Average Variable Cost (AVC)</span>
                  <span className="legend-desc">VC/Q (U-shape)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCurvesChart;
