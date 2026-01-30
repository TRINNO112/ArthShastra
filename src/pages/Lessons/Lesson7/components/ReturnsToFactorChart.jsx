import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { FaChartLine, FaInfoCircle, FaSearch, FaProjectDiagram } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

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

      {/* COMIC HEADER */}
      <div className="comic-panel blue" style={{ textAlign: 'center', padding: '15px', marginBottom: '20px' }}>
        <h3 className="text-banger" style={{ fontSize: '2rem', margin: 0, color: '#0d47a1' }}>
          <FaProjectDiagram /> PERFORMANCE MONITOR
        </h3>
        <p style={{ fontFamily: 'Comic Neue', fontWeight: 'bold' }}>Real-time visualization of Input vs Output.</p>
      </div>

      <div className="chart-wrapper-flex" style={{ background: '#000', border: '4px solid #333', borderRadius: '10px', boxShadow: '0 0 20px rgba(0,0,0,0.8)', padding: '20px', position: 'relative', flexDirection: 'column' }}>

        {/* MONITOR FRAME EFFECT */}
        <div style={{ position: 'absolute', top: '10px', right: '10px', color: '#00ff00', fontFamily: 'Share Tech Mono' }}>● LIVE FEED</div>
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', color: '#666', fontFamily: 'Share Tech Mono' }}>SYS.OP.77</div>

        <div className="chart-container-d3" ref={containerRef} style={{ marginBottom: '20px' }}>
          <svg ref={svgRef}></svg>
        </div>
      </div>

      {/* LEGEND MOVED TO BOTTOM */}
      <div className="chart-legend-bottom" style={{ background: '#111', borderTop: '1px solid #333', padding: '15px', borderRadius: '0 0 8px 8px' }}>
        <h4 className="legend-title" style={{ fontFamily: 'Bangers', letterSpacing: '1px', color: '#fff', textAlign: 'center', marginBottom: '15px' }}>CONTROL PANEL</h4>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <div className="legend-item-group">
            <div className="legend-row">
              <span className="legend-line" style={{ background: '#00ff88', height: '4px', boxShadow: '0 0 5px #00ff88' }}></span>
              <div className="legend-text">
                <span className="legend-label" style={{ color: '#00ff88' }}>TP (Total)</span>
              </div>
            </div>
          </div>

          <div className="legend-item-group">
            <div className="legend-row">
              <span className="legend-line" style={{ borderTop: '2px dashed #ffd700' }}></span>
              <div className="legend-text">
                <span className="legend-label" style={{ color: '#ffd700' }}>AP (Average)</span>
              </div>
            </div>
          </div>

          <div className="legend-item-group">
            <div className="legend-row">
              <span className="legend-line" style={{ background: '#ff6b6b', height: '3px' }}></span>
              <div className="legend-text">
                <span className="legend-label" style={{ color: '#ff6b6b' }}>MP (Marginal)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="legend-stages" style={{ marginTop: '15px', textAlign: 'center', borderTop: '1px dashed #333', paddingTop: '10px' }}>
          <span style={{ fontFamily: 'Bangers', color: '#fff', marginRight: '10px' }}>ZONES:</span>
          <span className="stage-mini" style={{ color: '#00ff88', marginRight: '15px' }}><span className="stage-dot s1"></span> I: RISE</span>
          <span className="stage-mini" style={{ color: '#ffd700', marginRight: '15px' }}><span className="stage-dot s2"></span> II: PEAK</span>
          <span className="stage-mini" style={{ color: '#ff6b6b' }}><span className="stage-dot s3"></span> III: FALL</span>
        </div>
      </div>

      <div className="lesson-section-wrapper mt-8">
        <div className="comic-panel animate-fade-in">
          <div className="analysis-header" style={{ borderBottom: '2px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
            <h4 className="text-banger" style={{ fontSize: '1.8rem', margin: 0 }}> <FaSearch /> DECODING THE CURVES</h4>
          </div>

          <div className="analysis-point">
            <FaChartLine className="analysis-icon text-green" />
            <div>
              <strong className="text-green text-banger" style={{ fontSize: '1.2rem' }}>TP CURVE</strong>
              <p>Climbs like a mountain. Steep at first (Convex), then slows down (Concave), peaks, and drops off the cliff.</p>
            </div>
          </div>

          <div className="analysis-point">
            <FaChartLine className="analysis-icon text-red" />
            <div>
              <strong className="text-red text-banger" style={{ fontSize: '1.2rem' }}>MP CURVE (THE LEADER)</strong>
              <p>The first to rise and the first to fall! It cuts through the X-axis exactly when TP hits the summit.</p>
            </div>
          </div>

          <div className="analysis-point">
            <FaChartLine className="analysis-icon text-gold" />
            <div>
              <strong className="text-gold text-banger" style={{ fontSize: '1.2rem' }}>AP CURVE</strong>
              <p>The slow and steady one. It follows MP. NOTE: <strong>AP is at MAX when MP cuts it.</strong></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReturnsToFactorChart;
