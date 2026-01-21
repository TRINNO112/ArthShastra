import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import * as d3 from 'd3';
import { FaChartLine, FaArrowsAltH, FaSyncAlt, FaInfoCircle, FaLevelUpAlt, FaLevelDownAlt } from 'react-icons/fa';

const ELASTICITY_MODES = {
    PERFECTLY_INELASTIC: { id: 'pi', label: 'Perfectly Inelastic', short: 'P. Inelastic', e: 0, desc: 'Quantity (Q) remains constant at all prices.' },
    INELASTIC: { id: 'i', label: 'Inelastic', short: 'Inelastic', e: 0.5, desc: 'Quantity changes by a smaller percentage than price.' },
    UNITARY: { id: 'u', label: 'Unitary', short: 'Unitary', e: 1.0, desc: 'Percentage change in Q equals percentage change in P (Hyperbola).' },
    ELASTIC: { id: 'e', label: 'Elastic', short: 'Elastic', e: 2.5, desc: 'Quantity changes by a larger percentage than price.' },
    PERFECTLY_ELASTIC: { id: 'pe', label: 'Perfectly Elastic', short: 'P. Elastic', e: Infinity, desc: 'Consumers buy all at fixed price, zero above.' }
};

const InteractiveCurveSimulator = () => {
    const svgRef = useRef(null);
    const containerRef = useRef(null);
    const labViewRef = useRef(null);

    // --- State ---
    const [mode, setMode] = useState('u');
    const [p1, setP1] = useState(60);
    const [p2, setP2] = useState(40);
    const [baseQ, setBaseQ] = useState(100);
    const [dimensions, setDimensions] = useState({ width: 800, height: 500 });
    const [isMobile, setIsMobile] = useState(false);

    // Dynamic scale limits (Ensure enough room for labels)
    const MAX_P = Math.max(100, p1 + 40, p2 + 40);
    const MAX_Q = Math.max(200, baseQ + 50);

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

    // Effective graph limits after calculating quantities
    const graphMaxP = useMemo(() => Math.max(100, p1 + 40, p2 + 40), [p1, p2]);
    const graphMaxQ = useMemo(() => Math.max(Math.max(200, baseQ + 50), q1 + 40, q2 + 40), [baseQ, q1, q2]);

    const currentModeInfo = Object.values(ELASTICITY_MODES).find(m => m.id === mode);

    useEffect(() => {
        const resizer = () => {
            if (labViewRef.current) {
                const rect = labViewRef.current.getBoundingClientRect();
                const paddingW = window.innerWidth < 1200 ? 60 : 80;
                const availableW = Math.max(400, rect.width - paddingW);

                setIsMobile(window.innerWidth < 1200);
                setDimensions({
                    width: availableW,
                    height: window.innerWidth < 1200 ? availableW * 0.8 : 400 // Shorter height
                });
            }
        };
        resizer();
        window.addEventListener('resize', resizer);
        return () => window.removeEventListener('resize', resizer);
    }, []);

    useEffect(() => {
        if (!svgRef.current) return;

        const { width, height } = dimensions;
        const margin = isMobile
            ? { top: 20, right: 20, bottom: 50, left: 60 }
            : { top: 30, right: 30, bottom: 50, left: 70 }; // Further reduced margins

        const innerW = width - margin.left - margin.right;
        const innerH = height - margin.top - margin.bottom;

        // --- MANUAL TUNING ---
        const P_ARROW_OFFSET = 0;   // Change this to move ΔP arrow left/right
        const Q_ARROW_OFFSET = -9;  // Change this to move ΔQ arrow up/down
        const ARROW_HEAD_SHRINK = 5; // <--- Change this to move the arrowhead BACK
        const Q_LABEL_OFFSET = 10;    // <--- Change this to move Q1/Q2 circles UP (-) or DOWN (+)
        // ---------------------

        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        // Background Grid Pattern
        const defs = svg.append("defs");
        const pattern = defs.append("pattern")
            .attr("id", "grid-dots")
            .attr("width", 20)
            .attr("height", 20)
            .attr("patternUnits", "userSpaceOnUse");
        pattern.append("circle")
            .attr("cx", 1)
            .attr("cy", 1)
            .attr("r", 1)
            .attr("fill", "rgba(255,255,255,0.05)");

        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear().domain([0, graphMaxQ]).range([0, innerW]);
        const yScale = d3.scaleLinear().domain([0, graphMaxP]).range([innerH, 0]);

        // Background Rect for Grid
        g.append("rect")
            .attr("width", innerW)
            .attr("height", innerH)
            .attr("fill", "url(#grid-dots)");

        // Glow Filter
        const filter = defs.append("filter").attr("id", "high-glow").attr("x", "-50%").attr("y", "-50%").attr("width", "200%").attr("height", "200%");
        filter.append("feGaussianBlur").attr("stdDeviation", isMobile ? "2" : "6").attr("result", "blur");
        const feMerge = filter.append("feMerge");
        feMerge.append("feMergeNode").attr("in", "blur");
        feMerge.append("feMergeNode").attr("in", "SourceGraphic");

        const curveGrad = defs.append("linearGradient").attr("id", "simulator-grad").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
        curveGrad.append("stop").attr("offset", "0%").attr("stop-color", "#00f2fe");
        curveGrad.append("stop").attr("offset", "100%").attr("stop-color", "#4facfe");

        defs.append("marker").attr("id", "arrow-gold").attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerWidth", 4).attr("markerHeight", 4).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 Z").attr("fill", "#fbbf24");

        // --- Axis ---
        const xAxis = d3.axisBottom(xScale).ticks(isMobile ? 5 : 10).tickSize(-innerH).tickPadding(20);
        const yAxis = d3.axisLeft(yScale).ticks(isMobile ? 5 : 10).tickSize(-innerW).tickPadding(20);

        g.append("g").attr("transform", `translate(0,${innerH})`).call(xAxis).attr("class", "premium-axis");
        g.append("g").call(yAxis).attr("class", "premium-axis");

        // Axis Titles (Adjust these to move "QUANTITY" and "PRICE")
        g.append("text").attr("x", innerW / 2).attr("y", innerH + 70).attr("fill", "#64748b").attr("class", "axis-title").style("text-anchor", "middle").text("QUANTITY");
        g.append("text").attr("x", -40).attr("y", -15).attr("fill", "#64748b").attr("class", "axis-title").text("PRICE ($)");

        // --- Logic: Generate Curve (Fixing the Vertical Drop Artifact) ---
        let curveData = [];
        if (mode === 'pi') {
            curveData = [{ p: 0, q: baseQ }, { p: graphMaxP, q: baseQ }];
        } else if (mode === 'pe') {
            curveData = [{ p: 50, q: 0 }, { p: 50, q: graphMaxQ }];
        } else if (mode === 'u') {
            const K = 50 * baseQ;
            // Adaptive step for hyperbola
            for (let p_val = graphMaxP; p_val >= 1; p_val -= 0.5) {
                const q_val = K / p_val;
                if (q_val <= graphMaxQ) {
                    curveData.push({ p: p_val, q: q_val });
                } else {
                    curveData.push({ p: K / graphMaxQ, q: graphMaxQ });
                    break;
                }
            }
        } else {
            for (let p_val = 5; p_val <= graphMaxP; p_val += 2) {
                const q_val = calculateQ(p_val, mode, baseQ);
                if (q_val >= 0 && q_val <= graphMaxQ) curveData.push({ p: p_val, q: q_val });
            }
        }

        const line = d3.line().x(d => xScale(d.q)).y(d => yScale(d.p)).curve(mode === 'u' ? d3.curveMonotoneX : d3.curveLinear);

        // Path
        g.append("path")
            .datum(curveData)
            .attr("fill", "none")
            .attr("stroke", "url(#simulator-grad)")
            .attr("stroke-width", isMobile ? 5 : 8)
            .attr("stroke-linecap", "round")
            .attr("d", line)
            .style("filter", "url(#high-glow)");

        // Points
        const renderPoint = (p, q, label, color) => {
            const actualP = mode === 'pe' ? 50 : p;
            const x = xScale(q);
            const y = yScale(actualP);

            // Dashed lines
            g.append("line").attr("x1", 0).attr("y1", y).attr("x2", x).attr("y2", y).attr("stroke", color).attr("stroke-dasharray", "6,6").attr("opacity", 0.5);
            g.append("line").attr("x1", x).attr("y1", innerH).attr("x2", x).attr("y2", y).attr("stroke", color).attr("stroke-dasharray", "6,6").attr("opacity", 0.5);

            // Labels (Manually adjust these offsets to move P and Q)
            const r = isMobile ? 12 : 18;
            const labelP_X = -r - 10;
            g.append("circle").attr("cx", labelP_X).attr("cy", y).attr("r", r).attr("fill", "#0f172a").attr("stroke", color).attr("stroke-width", 2).style("box-shadow", "0 0 10px " + color);
            g.append("text").attr("x", labelP_X).attr("y", y + 5).attr("fill", color).attr("text-anchor", "middle").attr("class", "label-txt").text(`P${label}`);

            const labelQ_Y = innerH + 18 + Q_LABEL_OFFSET; // Updated with manual offset
            g.append("circle").attr("cx", x).attr("cy", labelQ_Y).attr("r", r).attr("fill", "#0f172a").attr("stroke", color).attr("stroke-width", 2).style("box-shadow", "0 0 10px " + color);
            g.append("text").attr("x", x).attr("y", labelQ_Y + 5).attr("fill", color).attr("text-anchor", "middle").attr("class", "label-txt").text(`Q${label}`);

            // Main point
            g.append("circle").attr("cx", x).attr("cy", y).attr("r", isMobile ? 7 : 12).attr("fill", color).attr("stroke", "#000").attr("stroke-width", 3).style("filter", "drop-shadow(0 0 10px " + color + ")");

            return { x, y };
        };

        const pt1 = renderPoint(p1, q1, "1", "#fff");
        const pt2 = renderPoint(p2, q2, "2", "#fbbf24");

        // Arrows (Positioned exactly BETWEEN labels, avoiding overlap)

        const arrowGapP = (isMobile ? (12 + 10) : (18 + 10)) + P_ARROW_OFFSET;
        const arrowGapQ = (isMobile ? (12 + 8) : (18 + 10)) + Q_ARROW_OFFSET + Q_LABEL_OFFSET; // Sync with label move
        const r = isMobile ? 12 : 18;

        if (mode !== 'pe' && Math.abs(p1 - p2) > 2) {
            const xPos = -arrowGapP;
            const y1_edge = pt1.y + (pt2.y > pt1.y ? r : -r);
            const y2_edge = pt2.y + (pt2.y > pt1.y ? -r - ARROW_HEAD_SHRINK : r + ARROW_HEAD_SHRINK);

            g.append("line")
                .attr("x1", xPos).attr("y1", y1_edge)
                .attr("x2", xPos).attr("y2", y2_edge)
                .attr("stroke", "#fbbf24").attr("stroke-width", 3).attr("marker-end", "url(#arrow-gold)");
            g.append("text").attr("x", xPos - 15).attr("y", (pt1.y + pt2.y) / 2).attr("fill", "#fbbf24").attr("class", "delta-label").style("text-anchor", "end").text("ΔP");
        }

        if (mode !== 'pi' && Math.abs(q1 - q2) > 2) {
            const yPos = innerH + arrowGapQ;
            const x1_edge = pt1.x + (pt2.x > pt1.x ? r : -r);
            const x2_edge = pt2.x + (pt2.x > pt1.x ? -r - ARROW_HEAD_SHRINK : r + ARROW_HEAD_SHRINK);

            g.append("line")
                .attr("x1", x1_edge).attr("y1", yPos)
                .attr("x2", x2_edge).attr("y2", yPos)
                .attr("stroke", "#fbbf24").attr("stroke-width", 3).attr("marker-end", "url(#arrow-gold)");
            g.append("text").attr("x", (pt1.x + pt2.x) / 2).attr("y", yPos + 25).attr("fill", "#fbbf24").attr("class", "delta-label").text("ΔQ");
        }

    }, [p1, p2, mode, baseQ, dimensions, calculateQ, isMobile, q1, q2, graphMaxP, graphMaxQ]);

    return (
        <div className="premium-lab-root" ref={containerRef}>
            {/* Header */}
            <div className="lab-header">
                <div className="lab-header-left">
                    <div className="lab-badge">
                        <span className="badge-text">ADVANCED SIMULATOR</span>
                        <div className="shimmer-bar"></div>
                    </div>
                    <h2 className="lab-title">Elasticity <span className="neon">Dynamics</span></h2>
                    <p className="lab-subtitle">Explore market sensitivity through real-time demand curve simulation.</p>
                </div>

                <div className="mode-tabs">
                    {Object.values(ELASTICITY_MODES).map(m => (
                        <button key={m.id} onClick={() => setMode(m.id)} className={`mode-tab ${mode === m.id ? 'active' : ''}`}>
                            {m.short}
                        </button>
                    ))}
                </div>
            </div>

            {/* Layout */}
            <div className="lab-main">
                <div className="lab-sidebar">
                    <div className="p-card glass">
                        <h4 className="card-title"><FaSyncAlt className="spin" /> MARKET DATA</h4>
                        <div className="control-item">
                            <div className="control-header">
                                <span>INITIAL PRICE (P1)</span>
                                <span className="badge white">${p1}</span>
                            </div>
                            <input type="range" min="5" max="150" value={p1} onChange={(e) => setP1(+e.target.value)} className="p-slider white" />
                        </div>
                        <div className="control-item">
                            <div className="control-header">
                                <span>TARGET PRICE (P2)</span>
                                <span className="badge gold">${p2}</span>
                            </div>
                            <input type="range" min="5" max="150" value={p2} onChange={(e) => setP2(+e.target.value)} className="p-slider gold" />
                        </div>
                    </div>

                    <div className="p-card glass">
                        <h4 className="card-title"><FaArrowsAltH /> POSITIONING</h4>
                        <div className="control-item">
                            <div className="control-header">
                                <span>DEMAND SCALE (Q)</span>
                                <span className="badge cyan">{baseQ}</span>
                            </div>
                            <input type="range" min="40" max="250" value={baseQ} onChange={(e) => setBaseQ(+e.target.value)} className="p-slider cyan" />
                        </div>
                    </div>

                    <div className="p-card glass theory">
                        <h4 className="card-title text-cyan-400"><FaInfoCircle /> INSIGHT</h4>
                        <div className="theory-box">
                            <div className="theory-id">{currentModeInfo?.label}</div>
                            <div className="theory-text">{currentModeInfo?.desc}</div>
                        </div>
                    </div>
                </div>

                <div className="lab-view glass" ref={labViewRef}>
                    <svg ref={svgRef} width={dimensions.width} height={dimensions.height} style={{ overflow: 'visible' }} />

                    {!isMobile && (
                        <div className="lab-hud">
                            <div className="hud-line">
                                <div className={`hud-indicator ${mode.includes('e') ? 'active' : ''}`}></div>
                                <span className="hud-title">REAL-TIME TELEMETRY</span>
                            </div>
                            <div className="hud-grid">
                                <div className="hud-cell">
                                    <span className="hud-label">PRICE VARIATION</span>
                                    <span className="hud-val">{Math.abs(p1 - p2)}% {p2 < p1 ? <FaLevelDownAlt className="down" /> : <FaLevelUpAlt className="up" />}</span>
                                </div>
                                <div className="hud-cell">
                                    <span className="hud-label">QUANTITY IMPACT</span>
                                    <span className="hud-val">{mode === 'pi' ? 0 : Math.abs(q1 - q2).toFixed(1)} <FaArrowsAltH className="dim" /></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .premium-lab-root {
                    background: radial-gradient(circle at 0% 0%, #0f172a 0%, #000 100%);
                    padding: 50px;
                    border-radius: 48px;
                    color: #fff;
                    font-family: 'Inter', system-ui, sans-serif;
                    box-shadow: 0 40px 120px rgba(0,0,0,0.8), inset 0 0 80px rgba(34,211,238,0.05);
                    border: 1px solid rgba(255,255,255,0.05);
                    position: relative;
                    overflow: visible;
                }
                .lab-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; gap: 40px; }
                .lab-badge { 
                    background: linear-gradient(90deg, rgba(34,211,238,0.2), rgba(34,211,238,0));
                    border-left: 3px solid #22d3ee; 
                    padding: 8px 18px; 
                    border-radius: 4px; 
                    display: inline-block; 
                    position: relative; 
                    overflow: hidden;
                }
                .badge-text { font-size: 11px; font-weight: 900; letter-spacing: 3px; color: #22d3ee; }
                .shimmer-bar { position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transform: translateX(-100%); animation: shim 3s infinite; }
                @keyframes shim { 100% { transform: translateX(100%); } }

                .lab-title { 
                    font-size: 72px; 
                    font-weight: 900; 
                    margin: 15px 0 5px; 
                    letter-spacing: -4px; 
                    background: linear-gradient(to bottom right, #fff 50%, #64748b);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .neon { 
                    color: #22d3ee; 
                    -webkit-text-fill-color: initial; 
                    text-shadow: 0 0 40px rgba(34,211,238,0.6); 
                    font-style: italic;
                }
                .lab-subtitle { color: #94a3b8; font-size: 18px; font-weight: 500; letter-spacing: -0.5px; opacity: 0.8; }

                .mode-tabs { display: flex; gap: 4px; background: rgba(15,23,42,0.8); padding: 6px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
                .mode-tab { padding: 14px 22px; border: none; background: transparent; color: #64748b; font-weight: 900; font-size: 10px; text-transform: uppercase; cursor: pointer; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 14px; letter-spacing: 1px; }
                .mode-tab:hover { color: #fff; }
                .mode-tab.active { background: #fff; color: #000; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(255,255,255,0.2); }

                .lab-main { display: grid; grid-template-columns: 320px 1fr; gap: 40px; }
                .glass { 
                    background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)) !important; 
                    backdrop-filter: blur(30px) !important; 
                    border: 1px solid rgba(255,255,255,0.1) !important; 
                    border-radius: 40px !important; 
                    box-shadow: 0 30px 60px rgba(0,0,0,0.4) !important; 
                    overflow: visible !important; /* Ensure nothing inside is clipped */
                }
                
                .p-card { padding: 35px; margin-bottom: 30px; transition: transform 0.3s; }
                .p-card:hover { transform: scale(1.02); border-color: rgba(34,211,238,0.2) !important; }
                .card-title { font-size: 11px; color: #64748b; font-weight: 900; letter-spacing: 3px; margin-bottom: 30px; display: flex; align-items: center; gap: 10px; }
                .control-header { display: flex; justify-content: space-between; font-size: 12px; font-weight: 900; color: #fff; margin-bottom: 15px; opacity: 0.9; }
                .badge { padding: 5px 12px; border-radius: 10px; font-weight: 900; font-family: monospace; font-size: 14px; }
                .badge.white { background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2); }
                .badge.gold { background: rgba(251,191,36,0.1); color: #fbbf24; border: 1px solid rgba(251,191,36,0.2); }
                .badge.cyan { background: rgba(34,211,238,0.1); color: #22d3ee; border: 1px solid rgba(34,211,238,0.2); }

                .p-slider { -webkit-appearance: none; width: 100%; height: 8px; border-radius: 20px; background: rgba(255,255,255,0.05); outline: none; margin-bottom: 35px; border: 1px solid rgba(255,255,255,0.05); }
                .p-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 26px; height: 26px; border-radius: 50%; cursor: pointer; border: 5px solid #000; transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                .p-slider.white::-webkit-slider-thumb { background: #fff; box-shadow: 0 0 20px rgba(255,255,255,0.4); }
                .p-slider.gold::-webkit-slider-thumb { background: #fbbf24; box-shadow: 0 0 20px rgba(251,191,36,0.4); }
                .p-slider.cyan::-webkit-slider-thumb { background: #22d3ee; box-shadow: 0 0 20px rgba(34,211,238,0.4); }
                .p-slider::-webkit-slider-thumb:hover { transform: scale(1.3) rotate(15deg); }

                .theory-id { 
                    display: block; 
                    color: #fff; 
                    font-weight: 900; 
                    font-size: 16px; 
                    margin-bottom: 15px; 
                    text-transform: uppercase; 
                    letter-spacing: 1px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    padding-bottom: 10px;
                }
                .theory-text { 
                    display: block; 
                    color: #94a3b8; 
                    font-size: 15px; 
                    line-height: 1.7; 
                    font-style: italic; 
                    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
                }

                .lab-view { padding: 0; position: relative; display: flex; align-items: center; justify-content: flex-start; overflow: visible; background: radial-gradient(circle at center, rgba(34,211,238,0.03) 0%, transparent 100%) !important; }
                .premium-axis text { fill: #64748b; font-weight: 900; font-size: 12px; }
                .premium-axis line, .premium-axis path { stroke: rgba(255,255,255,0.05); }
                .axis-title { font-weight: 900; font-size: 13px; letter-spacing: 2px; }
                .label-txt { font-weight: 900; font-size: 12px; font-family: monospace; }
                .delta-label { font-weight: 900; font-size: 13px; text-anchor: middle; font-family: monospace; }

                .lab-hud { position: absolute; top: 15px; right: 40px; background: rgba(0,0,0,0.85); border: 1px solid rgba(255,255,255,0.1); border-radius: 28px; padding: 25px; min-width: 280px; backdrop-filter: blur(20px); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
                .hud-line { display: flex; align-items: center; gap: 10px; margin-bottom: 25px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px; }
                .hud-indicator { width: 10px; height: 10px; background: #ef4444; border-radius: 50%; box-shadow: 0 0 15px #ef4444; animation: blink 2s infinite; }
                .hud-indicator.active { background: #22d3ee; box-shadow: 0 0 15px #22d3ee; }
                @keyframes blink { 50% { opacity: 0.4; } }
                .hud-title { font-size: 10px; font-weight: 900; color: #475569; letter-spacing: 3px; }
                .hud-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
                .hud-label { display: block; font-size: 10px; color: #64748b; font-weight: 900; margin-bottom: 8px; letter-spacing: 1px; }
                .hud-val { font-size: 18px; font-weight: 900; display: flex; align-items: center; gap: 8px; color: #fff; }
                .up { color: #22d3ee; } .down { color: #f87171; } .dim { opacity: 0.2; }

                .spin { animation: rotate 5s linear infinite; }
                @keyframes rotate { 100% { transform: rotate(360deg); } }

                @media (max-width: 1200px) {
                    .lab-main { grid-template-columns: 1fr; }
                    .lab-header { flex-direction: column; align-items: flex-start; }
                    .lab-title { font-size: 56px; }
                    .premium-lab-root { padding: 30px; }
                }
            `}</style>
        </div>
    );
};

export default InteractiveCurveSimulator;
