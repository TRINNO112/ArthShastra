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
      .domain([0, d3.max(data, d => Math.max(
        d.ac !== '-' ? Number(d.ac) : 0,
        d.avc !== '-' ? Number(d.avc) : 0,
        Number(d.mc) || 0
      )) * 1.1])
      .range([innerHeight, 0]);

    // Gradients (Removed TC gradient)

    // Grid ... (Keep as is)
    // ...

    // Line generator
    const lineGenerator = (key) => d3.line()
      .defined(d => d[key] !== '-' && d[key] !== null && !isNaN(d[key]))
      .x(d => xScale(d.output))
      .y(d => yScale(d[key]))
      .curve(d3.curveMonotoneX);

    // Paths (Removed TC)
    const paths = [
      { key: 'mc', color: '#ff6b6b', width: 3, label: 'MC' },
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

    // Area under TC (REMOVED to prevent scale skewing)


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
    // Dots & Tooltip Interaction
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

    // --- Highlight Minimum Points (Intersections) ---
    const validData = data.filter(d => d.ac !== '-' && d.avc !== '-' && !isNaN(d.ac) && !isNaN(d.avc));
    if (validData.length > 0) {
      // Find min AC/AVC
      const minACPoint = validData.reduce((prev, curr) => (parseFloat(curr.ac) < parseFloat(prev.ac) ? curr : prev));
      const minAVCPoint = validData.reduce((prev, curr) => (parseFloat(curr.avc) < parseFloat(prev.avc) ? curr : prev));

      const keyPoints = [
        { pt: minACPoint, label: 'Min AC', color: '#ffd700', yVal: minACPoint.ac },
        { pt: minAVCPoint, label: 'Shut-down', color: '#00bfff', yVal: minAVCPoint.avc }
      ];

      keyPoints.forEach(kp => {
        // Dotted vertical line from axis up to curve
        g.append('line')
          .attr('x1', xScale(kp.pt.output))
          .attr('x2', xScale(kp.pt.output))
          .attr('y1', innerHeight)
          .attr('y2', yScale(kp.yVal))
          .attr('stroke', kp.color)
          .attr('stroke-width', 1.5)
          .attr('stroke-dasharray', '4,4')
          .attr('opacity', 0.6);

        // Highlight Circle
        g.append('circle')
          .attr('cx', xScale(kp.pt.output))
          .attr('cy', yScale(kp.yVal))
          .attr('r', 6)
          .attr('fill', 'none')
          .attr('stroke', kp.color)
          .attr('stroke-width', 2);

        // Label
        g.append('text')
          .attr('x', xScale(kp.pt.output))
          .attr('y', yScale(kp.yVal) - 10)
          .attr('fill', kp.color)
          .attr('text-anchor', 'middle')
          .style('font-size', '11px')
          .style('font-weight', 'bold')
          .text(kp.label);
      });
    }
  }, [dimensions, data]);

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Cost Curves</h2>
        <p className="section-subtitle-lesson">TC rising, MC/AC/AVC U-shapes. MC cuts AC at minimum.</p>
      </div>

      <div className="content-card">
        <div ref={containerRef} className="chart-wrapper-flex" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <svg ref={svgRef} className="chart-container-d3" style={{ height: '450px' }}></svg>

          <div className="chart-legend-bottom" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '15px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px' }}>
            <h4 className="legend-title" style={{ width: '100%', textAlign: 'center', marginBottom: '5px' }}>Key</h4>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ background: '#00ff88', width: '30px', height: '3px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                <strong>TC</strong> (Total Cost)
              </div>
            </div>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ background: '#ff6b6b', width: '30px', height: '2px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                <strong>MC</strong> (Marginal Cost)
              </div>
            </div>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ borderTop: '2px dashed #ffd700', width: '30px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                <strong>AC</strong> (Average Cost)
              </div>
            </div>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ borderTop: '2px dashed #00bfff', width: '30px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
                <strong>AVC</strong> (Avg Variable Cost)
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCurvesChart;
