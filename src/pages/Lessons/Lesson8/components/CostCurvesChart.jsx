import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { FaChartLine, FaInfoCircle } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

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
    // --- FIXED SCHEDULE DATA (Textbook Example) ---
    // Q=0 to 10. TFC=10.
    // We construct a schedule where MC cuts AC at min.
    // Q: 0, 1,  2,  3,  4,  5,  6,  7,  8,  9, 10
    // TC: 10,20, 28, 34, 38, 42, 48, 56, 68, 84, 105 (Adjusted for smooth curves)

    const fixedData = [
      { output: 0, tc: 10, tvc: 0, ac: '-', avc: '-', mc: '-' },
      { output: 1, tc: 20, tvc: 10, ac: 20, avc: 10, mc: 10 },
      { output: 2, tc: 28, tvc: 18, ac: 14, avc: 9, mc: 8 },
      { output: 3, tc: 34, tvc: 24, ac: 11.33, avc: 8, mc: 6 },
      { output: 4, tc: 38, tvc: 28, ac: 9.5, avc: 7, mc: 4 },
      { output: 5, tc: 42, tvc: 32, ac: 8.4, avc: 6.4, mc: 4 },
      { output: 6, tc: 48, tvc: 38, ac: 8, avc: 6.33, mc: 6 }, // Min AC around here
      { output: 7, tc: 56, tvc: 46, ac: 8, avc: 6.57, mc: 8 },
      { output: 8, tc: 66, tvc: 56, ac: 8.25, avc: 7, mc: 10 },
      { output: 9, tc: 78, tvc: 68, ac: 8.66, avc: 7.55, mc: 12 },
      { output: 10, tc: 92, tvc: 82, ac: 9.2, avc: 8.2, mc: 14 }
    ];

    const chartData = fixedData; // Use fixed data instead of props

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    // Increased margins to "compress" the graph and ensure arrows/labels are visible
    const margin = { top: 40, right: 80, bottom: 80, left: 70 };
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
      .domain([0, 100]) // Fixed domain as requested (max TC is 92, so 100 is safe)
      .range([innerHeight, 0]);

    // --- Axes ---
    // X Axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(10)
      .tickFormat(d => `Q${d}`);

    // Custom X Arrow (visible length extended)
    g.append('line')
      .attr('x1', 0)
      .attr('y1', innerHeight)
      .attr('x2', innerWidth + 20) // Extend further into right margin
      .attr('y2', innerHeight)
      .attr('stroke', '#888')
      .attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#arrow)');

    // Custom Y Arrow
    g.append('line')
      .attr('x1', 0)
      .attr('y1', innerHeight)
      .attr('x2', 0)
      .attr('y2', -20) // Extend further up
      .attr('stroke', '#888')
      .attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#arrow)');

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .attr('color', '#888')
      .style('font-size', '12px')
      .select(".domain").remove();

    // Y Axis (Every 10 units)
    const yAxis = d3.axisLeft(yScale)
      .tickValues(d3.range(0, 101, 10)) // 0, 10, 20... 100
      .tickFormat(d => `₹${d}`);

    g.append('g')
      .call(yAxis)
      .attr('color', '#888')
      .style('font-size', '12px')
      .select(".domain").remove();

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
      .defined(d => d[key] !== '-' && d[key] !== null)
      .x(d => xScale(d.output))
      .y(d => yScale(d[key]))
      .curve(d3.curveMonotoneX);

    // --- Paths ---
    const paths = [
      { key: 'tc', color: '#00ff88', width: 3, label: 'TC' },
      { key: 'mc', color: '#ff6b6b', width: 3, label: 'MC' },
      { key: 'ac', color: '#ffd700', width: 2, dash: '5,5', label: 'AC' },
      { key: 'avc', color: '#00bfff', width: 2, dash: '3,3', label: 'AVC' }
    ];

    paths.forEach(p => {
      // For MC, we typically filtering out Q=0 anyway since it is '-', 
      // but explicitly ensuring it starts at Q=1 purely for visual clarity if needed.
      // Our data has '-' for MC at Q=0, so d3 defined() handles it.

      const path = g.append('path')
        .datum(chartData)
        .attr('fill', 'none')
        .attr('stroke', p.color)
        .attr('stroke-width', p.width)
        .attr('d', lineGenerator(p.key));
      // Removed marker-end from here

      if (p.dash) path.attr('stroke-dasharray', p.dash);

      // Animation
      const length = path.node().getTotalLength();
      path.attr("stroke-dasharray", p.dash ? `${p.dash} ${length}` : `${length} ${length}`)
        .attr("stroke-dashoffset", length)
        .transition()
        .duration(2000)
        .ease(d3.easeCubicOut)
        .attr("stroke-dashoffset", 0);
    });

    // --- Tooltip ---
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

    // --- Interaction Points ---
    paths.forEach(p => {
      g.selectAll(`.dot-${p.key}`)
        .data(chartData.filter(d => d[p.key] !== '-'))
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
      <div className="factory-header">
        <h2 className="factory-title">CONTROL PANEL</h2>
        <p className="factory-subtitle">UNIT 3: COST CURVE MONITORING SYSTEM</p>
      </div>

      <div className="control-panel" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
          <h4 style={{ color: 'var(--factory-yellow)', fontFamily: 'Black Ops One, cursive', margin: 0 }}>MAIN MONITOR [D3-VIS]</h4>
          <div style={{ display: 'flex', gap: '5px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'red', boxShadow: '0 0 5px red' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'yellow' }}></div>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'green' }}></div>
          </div>
        </div>

        <div className="panel-screen">
          <div ref={containerRef} className="chart-wrapper-flex" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <svg ref={svgRef} className="chart-container-d3" style={{ height: '450px', width: '100%' }}></svg>
          </div>
        </div>

        <div className="panel-screen" style={{ marginTop: '20px', border: '1px solid #333' }}>
          <div className="chart-legend-bottom" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '10px' }}>
            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ background: '#00ff88', width: '30px', height: '3px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#00ff88', fontFamily: 'monospace' }}>TC (Total)</div>
            </div>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ background: '#ff6b6b', width: '30px', height: '2px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#ff6b6b', fontFamily: 'monospace' }}>MC (Marginal)</div>
            </div>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ borderTop: '2px dashed #ffd700', width: '30px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#ffd700', fontFamily: 'monospace' }}>AC (Average)</div>
            </div>

            <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="legend-line" style={{ borderTop: '2px dashed #00bfff', width: '30px' }}></span>
              <div style={{ fontSize: '0.9rem', color: '#00bfff', fontFamily: 'monospace' }}>AVC (Avg Var)</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '40px auto' }}>
        <div className="blueprint-card">
          <h3 className="blueprint-title">SYSTEM DIAGNOSTICS: CURVE BEHAVIOR</h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div>
              <h4 style={{ color: 'var(--factory-yellow)', fontFamily: 'monospace' }}>1. LAW OF VARIABLE PROPORTIONS</h4>
              <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                &gt;&gt; <strong style={{ color: '#fff' }}>U-SHAPED CURVES:</strong> AC, AVC, MC initially fall due to efficiency (Increasing Returns), then rise due to overcrowding (Diminishing Returns).
              </p>
            </div>
            <div>
              <h4 style={{ color: 'var(--factory-rust)', fontFamily: 'monospace' }}>2. MC vs AC RELATIONSHIP</h4>
              <ul style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6', listStyle: 'none', padding: 0 }}>
                <li>[MC &lt; AC] -&gt; AC Falls</li>
                <li>[MC = AC] -&gt; AC Minimum</li>
                <li>[MC &gt; AC] -&gt; AC Rises</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '20px', borderTop: '1px dashed #fff', paddingTop: '10px' }}>
            <h4 style={{ color: 'var(--factory-blue)', fontFamily: 'monospace' }}>3. AC vs AVC GAP</h4>
            <p style={{ color: '#ccc', fontSize: '0.9rem' }}>
              The vertical distance is AFC. Since AFC falls continuously, AC and AVC get closer but <strong style={{ color: 'red' }}>NEVER TOUCH</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCurvesChart;
