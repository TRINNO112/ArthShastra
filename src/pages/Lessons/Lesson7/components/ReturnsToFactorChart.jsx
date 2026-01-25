import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { FaChartLine, FaInfoCircle, FaSearch, FaProjectDiagram } from 'react-icons/fa';
import './component.css';

const productionData = [
  { labor: 0, tp: 0, ap: 0, mp: 0 },
  { labor: 1, tp: 10, ap: 10, mp: 10 },
  { labor: 2, tp: 25, ap: 12.5, mp: 15 },
  { labor: 3, tp: 36, ap: 12, mp: 11 },
  { labor: 4, tp: 44, ap: 11, mp: 8 },
  { labor: 5, tp: 48, ap: 9.6, mp: 4 },
  { labor: 6, tp: 48, ap: 8, mp: 0 },
  { labor: 7, tp: 45, ap: 6.4, mp: -3 },
  { labor: 8, tp: 40, ap: 5, mp: -5 },
  { labor: 9, tp: 30, ap: 3.33, mp: -10 },
  { labor: 10, tp: 15, ap: 1.5, mp: -15 },
];

const ReturnsToFactorChart = () => {
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
    if (!dimensions.width) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    const margin = { top: 40, right: 30, bottom: 60, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.attr('width', width).attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleLinear()
      .domain([0, 10]) // Expanded domain
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain([-20, 60]) // Expanded domain
      .range([innerHeight, 0]);

    // Gradients
    const defs = svg.append('defs');

    // TP Gradient
    const tpGradient = defs.append('linearGradient')
      .attr('id', 'tp-gradient')
      .attr('x1', '0%').attr('y1', '0%')
      .attr('x2', '100%').attr('y2', '0%');
    tpGradient.append('stop').attr('offset', '0%').attr('stop-color', '#00ff88').attr('stop-opacity', 0.8);
    tpGradient.append('stop').attr('offset', '100%').attr('stop-color', '#00cc66').attr('stop-opacity', 1);

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

    // Axis Labels
    g.append('text')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + 40)
      .attr('fill', '#ccc')
      .attr('text-anchor', 'middle')
      .text('Units of Labor (L)');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerHeight / 2)
      .attr('y', -45)
      .attr('fill', '#ccc')
      .attr('text-anchor', 'middle')
      .text('Output (Q)');

    // Generators
    const lineGenerator = (key) => d3.line()
      .x(d => xScale(d.labor))
      .y(d => yScale(d[key]))
      .curve(d3.curveMonotoneX);

    // Draw Areas
    const areaTP = d3.area()
      .x(d => xScale(d.labor))
      .y0(innerHeight)
      .y1(d => yScale(d.tp))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(productionData)
      .attr('fill', 'url(#tp-gradient)')
      .attr('fill-opacity', 0.1)
      .attr('d', areaTP);

    // Draw Lines
    const paths = [
      { key: 'tp', color: '#00ff88', width: 3 },
      { key: 'ap', color: '#ffd700', width: 2, dash: '5,5' },
      { key: 'mp', color: '#ff6b6b', width: 2 }
    ];

    paths.forEach(p => {
      const path = g.append('path')
        .datum(productionData)
        .attr('fill', 'none')
        .attr('stroke', p.color)
        .attr('stroke-width', p.width)
        .attr('d', lineGenerator(p.key));

      if (p.dash) path.attr('stroke-dasharray', p.dash);

      // Animate
      const length = path.node().getTotalLength();
      path.attr("stroke-dasharray", p.dash ? `${p.dash} ${length}` : `${length} ${length}`)
        .attr("stroke-dashoffset", length)
        .transition()
        .duration(2000)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);
    });

    // Stage Delimiters
    const drawStageLine = (laborVal, color) => {
      g.append('line')
        .attr('x1', xScale(laborVal))
        .attr('y1', 0)
        .attr('x2', xScale(laborVal))
        .attr('y2', innerHeight)
        .attr('stroke', color)
        .attr('stroke-width', 1)
        .attr('stroke-dasharray', '4,4')
        .attr('opacity', 0.5);
    };

    drawStageLine(2, '#ffd700');
    drawStageLine(6, '#ff6b6b');

    // Interactive Dots & Tooltip
    const tooltip = d3.select(containerRef.current)
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(0,0,0,0.85)")
      .style("color", "#fff")
      .style("padding", "8px")
      .style("border-radius", "8px")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("z-index", "10");

    paths.forEach(p => {
      g.selectAll(`.dot-${p.key}`)
        .data(productionData)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(d.labor))
        .attr('cy', d => yScale(d[p.key]))
        .attr('r', 4)
        .attr('fill', '#1a1a2e')
        .attr('stroke', p.color)
        .attr('stroke-width', 2)
        .on("mouseover", (event, d) => {
          tooltip.style("visibility", "visible")
            .html(`<strong>Labor: ${d.labor}</strong><br/>${p.key.toUpperCase()}: ${d[p.key]}`);
          d3.select(event.currentTarget).attr('r', 6).attr('fill', p.color);
        })
        .on("mousemove", (event) => {
          tooltip.style("top", (event.clientY - containerRef.current.getBoundingClientRect().top - 40) + "px")
            .style("left", (event.clientX - containerRef.current.getBoundingClientRect().left + 10) + "px");
        })
        .on("mouseout", (event) => {
          tooltip.style("visibility", "hidden");
          d3.select(event.currentTarget).attr('r', 4).attr('fill', '#1a1a2e');
        });
    });


  }, [dimensions]);

  return (
    <div className='chart-section-wrapper'>
      <div className="chart-wrapper-flex">
        <div className="chart-container-d3" ref={containerRef}>
          <svg ref={svgRef}></svg>
        </div>

        <div className="chart-legend-side">
          <h4 className="legend-title">Key</h4>

          <div className="legend-item-group">
            <div className="legend-row">
              <span className="legend-line" style={{ background: '#00ff88', height: '3px' }}></span>
              <div className="legend-text">
                <span className="legend-label">Total Product (TP)</span>
                <span className="legend-desc">Total output produced</span>
              </div>
            </div>
          </div>

          <div className="legend-item-group">
            <div className="legend-row">
              <span className="legend-line" style={{ borderTop: '2px dashed #ffd700' }}></span>
              <div className="legend-text">
                <span className="legend-label">Average Product (AP)</span>
                <span className="legend-desc">Output per worker</span>
              </div>
            </div>
          </div>

          <div className="legend-item-group">
            <div className="legend-row">
              <span className="legend-line" style={{ background: '#ff6b6b', height: '2px' }}></span>
              <div className="legend-text">
                <span className="legend-label">Marginal Product (MP)</span>
                <span className="legend-desc">Change in output from last worker</span>
              </div>
            </div>
          </div>

          <div className="legend-stages">
            <h5>Stages</h5>
            <div className="stage-mini"><span className="stage-dot s1"></span> Stage I: Increasing</div>
            <div className="stage-mini"><span className="stage-dot s2"></span> Stage II: Diminishing</div>
            <div className="stage-mini"><span className="stage-dot s3"></span> Stage III: Negative</div>
          </div>
        </div>
      </div>

      <div className="lesson-section-wrapper mt-8">
        <div className="analysis-card animate-fade-in">
          <div className="analysis-header">
            <FaSearch /> Analysis of the Curves
          </div>

          <div className="analysis-point">
            <FaChartLine className="analysis-icon text-green" />
            <div>
              <strong className="text-green">Total Product (TP) Curve:</strong>
              <p>Starts from origin, increases at an increasing rate (convex shape), then increases at a diminishing rate (concave shape), reaches a maximum, and finally falls.</p>
            </div>
          </div>

          <div className="analysis-point">
            <FaChartLine className="analysis-icon text-red" />
            <div>
              <strong className="text-red">Marginal Product (MP) Curve:</strong>
              <p>Inverted 'U' shape. It rises, reaches a maximum (before AP), and then falls. <strong>It cuts the X-axis (becomes zero) when TP is maximum.</strong></p>
            </div>
          </div>

          <div className="analysis-point">
            <FaChartLine className="analysis-icon text-gold" />
            <div>
              <strong className="text-gold">Average Product (AP) Curve:</strong>
              <p>Also inverted 'U' shape. It rises, reaches a maximum, and then falls. Importantly, <strong>MP intersects AP at its maximum point</strong>. Even when MP becomes negative, AP remains positive.</p>
            </div>
          </div>

          <div className="p-4 bg-white/5 rounded-lg border border-gold/20 mt-4 flex gap-4 items-start">
            <FaProjectDiagram className="text-3xl text-gold mt-1 flex-shrink-0" />
            <div>
              <h5 className="text-gold font-bold mb-1">Key Relationship: MP vs AP</h5>
              <p className="text-sm text-gray-300">
                When MP &gt; AP, AP rises.<br />
                When MP = AP, AP is at its maximum.<br />
                When MP &lt; AP, AP falls.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsToFactorChart;
