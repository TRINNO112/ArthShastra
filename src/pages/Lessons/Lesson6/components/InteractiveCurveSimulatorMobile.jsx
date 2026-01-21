import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as d3 from 'd3';
import { FaChartLine, FaArrowsAltH, FaSyncAlt, FaInfoCircle, FaLevelUpAlt, FaLevelDownAlt } from 'react-icons/fa';

const ELASTICITY_MODES = {
    PERFECTLY_INELASTIC: { id: 'pi', label: 'P. Inelastic', e: 0, desc: 'Quantity remains constant.' },
    INELASTIC: { id: 'i', label: 'Inelastic', e: 0.5, desc: 'Q changes less than P.' },
    UNITARY: { id: 'u', label: 'Unitary', e: 1.0, desc: 'Q and P change equally.' },
    ELASTIC: { id: 'e', label: 'Elastic', e: 2.5, desc: 'Q changes more than P.' },
    PERFECTLY_ELASTIC: { id: 'pe', label: 'P. Elastic', e: Infinity, desc: 'Infinite response at fixed P.' }
};

const InteractiveCurveSimulatorMobile = () => {
    const svgRef = useRef(null);
    const containerRef = useRef(null);

    // --- State ---
    const [mode, setMode] = useState('u');
    const [p1, setP1] = useState(60);
    const [p2, setP2] = useState(40);
    const [baseQ, setBaseQ] = useState(100);
    const [width, setWidth] = useState(350);

    const height = 300;

    const calculateQ = useCallback((p, currentMode, shift) => {
        if (currentMode === 'pi') return shift;
        if (currentMode === 'pe') return shift;
        if (currentMode === 'u') {
            const K = 50 * shift;
            return K / p;
        }
        const modeObj = Object.values(ELASTICITY_MODES).find(m => m.id === currentMode);
        const b = modeObj ? modeObj.e : 1;
        const q = shift - b * (p - 50);
        return Math.max(0, q);
    }, []);

    const q1 = useMemo(() => calculateQ(p1, mode, baseQ), [p1, mode, baseQ, calculateQ]);
    const q2 = useMemo(() => calculateQ(p2, mode, baseQ), [p2, mode, baseQ, calculateQ]);

    const graphMaxP = useMemo(() => Math.max(100, p1 + 30, p2 + 30), [p1, p2]);
    const graphMaxQ = useMemo(() => Math.max(200, baseQ + 30, q1 + 30, q2 + 30), [baseQ, q1, q2]);

    const currentModeInfo = Object.values(ELASTICITY_MODES).find(m => m.id === mode);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setWidth(containerRef.current.clientWidth - 20);
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        if (!svgRef.current) return;

        const margin = { top: 20, right: 10, bottom: 40, left: 45 };
        const innerW = width - margin.left - margin.right;
        const innerH = height - margin.top - margin.bottom;

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear().domain([0, graphMaxQ]).range([0, innerW]);
        const yScale = d3.scaleLinear().domain([0, graphMaxP]).range([innerH, 0]);

        // Axis
        const xAxis = d3.axisBottom(xScale).ticks(5).tickSize(-innerH).tickPadding(10);
        const yAxis = d3.axisLeft(yScale).ticks(5).tickSize(-innerW).tickPadding(10);

        g.append("g").attr("transform", `translate(0,${innerH})`).call(xAxis).attr("class", "mobile-premium-axis");
        g.append("g").call(yAxis).attr("class", "mobile-premium-axis");

        // Curve Data
        let curveData = [];
        if (mode === 'pi') {
            curveData = [{ p: 0, q: baseQ }, { p: graphMaxP, q: baseQ }];
        } else if (mode === 'pe') {
            curveData = [{ p: 50, q: 0 }, { p: 50, q: graphMaxQ }];
        } else if (mode === 'u') {
            const K = 50 * baseQ;
            for (let p_val = graphMaxP; p_val >= 1; p_val -= 2) {
                const q_val = K / p_val;
                if (q_val <= graphMaxQ) curveData.push({ p: p_val, q: q_val });
            }
        } else {
            for (let p_val = 5; p_val <= graphMaxP; p_val += 5) {
                const q_val = calculateQ(p_val, mode, baseQ);
                if (q_val >= 0 && q_val <= graphMaxQ) curveData.push({ p: p_val, q: q_val });
            }
        }

        const line = d3.line().x(d => xScale(d.q)).y(d => yScale(d.p)).curve(mode === 'u' ? d3.curveMonotoneX : d3.curveLinear);

        g.append("path")
            .datum(curveData)
            .attr("fill", "none")
            .attr("stroke", "#4facfe")
            .attr("stroke-width", 4)
            .attr("d", line);

        const renderPoint = (p, q, label, color) => {
            const actualP = mode === 'pe' ? 50 : p;
            const x = xScale(q);
            const y = yScale(actualP);

            g.append("line").attr("x1", 0).attr("y1", y).attr("x2", x).attr("y2", y).attr("stroke", color).attr("stroke-dasharray", "4,4").attr("opacity", 0.4);
            g.append("line").attr("x1", x).attr("y1", innerH).attr("x2", x).attr("y2", y).attr("stroke", color).attr("stroke-dasharray", "4,4").attr("opacity", 0.4);

            g.append("circle").attr("cx", x).attr("cy", y).attr("r", 5).attr("fill", color).attr("stroke", "#000").attr("stroke-width", 2);

            // Labels near axis
            g.append("text").attr("x", -5).attr("y", y + 4).attr("fill", color).attr("text-anchor", "end").attr("class", "mobile-label-txt").text(`P${label}`);
            g.append("text").attr("x", x).attr("y", innerH + 20).attr("fill", color).attr("text-anchor", "middle").attr("class", "mobile-label-txt").text(`Q${label}`);

            return { x, y };
        };

        const pt1 = renderPoint(p1, q1, "1", "#fff");
        const pt2 = renderPoint(p2, q2, "2", "#fbbf24");

        // Delta labels (Simplified)
        if (Math.abs(pt1.y - pt2.y) > 10) {
            g.append("text").attr("x", -35).attr("y", (pt1.y + pt2.y) / 2).attr("fill", "#fbbf24").attr("class", "mobile-delta-label").text("ΔP");
        }
        if (Math.abs(pt1.x - pt2.x) > 10) {
            g.append("text").attr("x", (pt1.x + pt2.x) / 2).attr("y", innerH + 35).attr("fill", "#fbbf24").attr("class", "mobile-delta-label").text("ΔQ");
        }

    }, [p1, p2, mode, baseQ, width, calculateQ, q1, q2, graphMaxP, graphMaxQ]);

    return (
        <div className="mobile-simulator-root" ref={containerRef}>
            <div className="mobile-sim-header">
                <h3 className="mobile-sim-title">Elasticity <span className="neon">Lab</span></h3>
                <div className="mobile-mode-scroll">
                    {Object.values(ELASTICITY_MODES).map(m => (
                        <button key={m.id} onClick={() => setMode(m.id)} className={`mobile-mode-btn ${mode === m.id ? 'active' : ''}`}>
                            {m.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mobile-sim-display">
                <svg ref={svgRef} width={width} height={height} />
            </div>

            <div className="mobile-sim-controls">
                <div className="mobile-sim-card">
                    <div className="sim-row">
                        <span>P1: ${p1}</span>
                        <input type="range" min="5" max="150" value={p1} onChange={(e) => setP1(+e.target.value)} />
                    </div>
                    <div className="sim-row">
                        <span>P2: ${p2}</span>
                        <input type="range" min="5" max="150" value={p2} onChange={(e) => setP2(+e.target.value)} />
                    </div>
                    <div className="sim-row">
                        <span>Scale: {baseQ}</span>
                        <input type="range" min="40" max="250" value={baseQ} onChange={(e) => setBaseQ(+e.target.value)} />
                    </div>
                </div>

                <div className="mobile-sim-theory">
                    <strong>{currentModeInfo?.label}</strong>
                    <p>{currentModeInfo?.desc}</p>
                </div>
            </div>

            <style>{`
                .mobile-simulator-root {
                    background: #0f172a;
                    padding: 10px;
                    border-radius: 20px;
                    color: #fff;
                    font-family: system-ui, sans-serif;
                    border: 1px solid rgba(255,255,255,0.1);
                    margin: 10px 0;
                }
                .mobile-sim-header { margin-bottom: 10px; }
                .mobile-sim-title { font-size: 20px; margin-bottom: 10px; }
                .mobile-mode-scroll { 
                    display: flex; 
                    gap: 8px; 
                    overflow-x: auto; 
                    padding-bottom: 8px;
                    scrollbar-width: none;
                }
                .mobile-mode-scroll::-webkit-scrollbar { display: none; }
                .mobile-mode-btn { 
                    white-space: nowrap; 
                    padding: 6px 12px; 
                    border-radius: 12px; 
                    border: 1px solid rgba(255,255,255,0.2);
                    background: rgba(255,255,255,0.05);
                    color: #94a3b8;
                    font-size: 12px;
                    font-weight: 600;
                }
                .mobile-mode-btn.active { background: #fff; color: #000; border-color: #fff; }
                
                .mobile-sim-display { background: rgba(0,0,0,0.3); border-radius: 15px; margin-bottom: 15px; padding: 5px; }
                .mobile-premium-axis text { fill: #64748b; font-size: 10px; }
                .mobile-premium-axis line, .mobile-premium-axis path { stroke: rgba(255,255,255,0.05); }
                .mobile-label-txt { font-size: 10px; font-weight: 700; }
                .mobile-delta-label { font-size: 10px; font-weight: 700; }

                .sim-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 12px; font-size: 12px; }
                .sim-row input { flex: 1; accent-color: #22d3ee; height: 4px; }
                
                .mobile-sim-theory { background: rgba(34,211,238,0.1); padding: 10px; border-radius: 12px; border: 1px solid rgba(34,211,238,0.2); }
                .mobile-sim-theory strong { display: block; font-size: 13px; color: #22d3ee; margin-bottom: 4px; }
                .mobile-sim-theory p { font-size: 11px; color: #94a3b8; margin: 0; line-height: 1.4; }
                .neon { color: #22d3ee; }
            `}</style>
        </div>
    );
};

export default InteractiveCurveSimulatorMobile;
