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

        <div className="explanation-content" style={{ marginTop: '30px', color: '#e0e0e0' }}>
          <h3 className="text-xl font-bold mb-4 text-gold" style={{ color: '#ffd700', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Explained: Nature of Cost Curves</h3>

          <div className="concept-block mb-6" style={{ marginBottom: '20px' }}>
            <h4 className="text-lg font-semibold text-[#00ff88] mb-2" style={{ color: '#00ff88', fontSize: '1.1rem' }}>1. Why are AC, AVC, and MC U-shaped?</h4>
            <p className="mb-2" style={{ lineHeight: '1.6', color: '#ccc' }}>
              This is due to the <strong>Law of Variable Proportions</strong>:
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#aaa', marginTop: '5px' }}>
              <li style={{ marginBottom: '5px' }}><strong>Phase 1 (Falling Cost):</strong> Initially, as output increases, efficiency rises due to better utilization of fixed factors (Increasing Returns to Factor), so costs fall.</li>
              <li><strong>Phase 2 (Rising Cost):</strong> Eventually, diminishing returns set in. Overcrowding of variable factors on fixed factors causes efficiency to drop, so costs rise.</li>
            </ul>
          </div>

          <div className="concept-block mb-6" style={{ marginBottom: '20px' }}>
            <h4 className="text-lg font-semibold text-[#ff6b6b] mb-2" style={{ color: '#ff6b6b', fontSize: '1.1rem' }}>2. Relationship between MC and AC</h4>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#ccc', lineHeight: '1.6' }}>
              <li style={{ marginBottom: '8px' }}><strong>When MC &lt; AC:</strong> MC pulls AC down. (AC falls).</li>
              <li style={{ marginBottom: '8px' }}><strong>When MC = AC:</strong> AC is at its minimum point. MC always cuts AC from below at its lowest point.</li>
              <li><strong>When MC &gt; AC:</strong> MC pulls AC up. (AC rises).</li>
            </ul>
          </div>

          <div className="concept-block">
            <h4 className="text-lg font-semibold text-[#00bfff] mb-2" style={{ color: '#00bfff', fontSize: '1.1rem' }}>3. AC vs AVC</h4>
            <p className="mb-2" style={{ lineHeight: '1.6', color: '#ccc' }}>
              AC always lies above AVC because AC = AVC + AFC.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#aaa', marginTop: '5px' }}>
              <li>The vertical gap between AC and AVC is equal to AFC (Average Fixed Cost).</li>
              <li>As output rises, AFC falls continuously. Thus, the gap between AC and AVC keeps narrowing but <strong>they never intersect</strong> because AFC can never be zero.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCurvesChart;
