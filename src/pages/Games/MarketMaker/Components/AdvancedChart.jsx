import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const SVG_W = 1000;
const SVG_H = 650;
const PADDING = { top: 60, right: 80, bottom: 90, left: 110 };
const PLOT_W = SVG_W - PADDING.left - PADDING.right;
const PLOT_H = SVG_H - PADDING.top - PADDING.bottom;

export default function AdvancedChart({ market, currentMarketPrice, lastTradeTime }) {
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        if (lastTradeTime) {
            setPulse(true);
            const timer = setTimeout(() => setPulse(false), 600);
            return () => clearTimeout(timer);
        }
    }, [lastTradeTime]);

    // Dynamic Y-axis: always includes current price + equilibrium with 20% padding
    const MAX_Q = 300;
    const MAX_P = useMemo(() => {
        const highest = Math.max(currentMarketPrice, market.currentEquilibriumPrice, 50);
        // Round up to next clean multiple of 10, with 25% headroom
        return Math.ceil((highest * 1.35) / 10) * 10;
    }, [currentMarketPrice, market.currentEquilibriumPrice]);

    // Y-axis ticks: dynamic, always 6–8 nice steps
    const yTicks = useMemo(() => {
        const step = Math.ceil(MAX_P / 8 / 5) * 5;
        const ticks = [];
        for (let p = 0; p <= MAX_P; p += step) ticks.push(p);
        return ticks;
    }, [MAX_P]);

    const xTicks = [0, 50, 100, 150, 200, 250, 300];

    const scaleX = (q) => PADDING.left + (q / MAX_Q) * PLOT_W;
    const scaleY = (p) => SVG_H - PADDING.bottom - (p / MAX_P) * PLOT_H;

    const demandPoints = useMemo(() => {
        let pts = [];
        for (let q = 0; q <= market.maxDemand; q += 5) {
            const p = (market.maxDemand - q) / market.demandSlope;
            if (p >= 0 && p <= MAX_P * 1.1) {
                pts.push(`${scaleX(q)},${scaleY(p)}`);
            }
        }
        return pts.length > 0 ? `M ${pts.join(' L ')}` : '';
    }, [market.maxDemand, market.demandSlope, MAX_P]);

    const supplyPoints = useMemo(() => {
        let pts = [];
        for (let q = market.minSupply; q <= MAX_Q; q += 5) {
            const p = (q - market.minSupply) / market.supplySlope;
            if (p >= 0 && p <= MAX_P * 1.1) {
                pts.push(`${scaleX(q)},${scaleY(p)}`);
            }
        }
        return pts.length > 0 ? `M ${pts.join(' L ')}` : '';
    }, [market.minSupply, market.supplySlope, MAX_P]);

    const currentQd = Math.max(0, market.maxDemand - market.demandSlope * currentMarketPrice);
    const currentQs = Math.max(0, market.minSupply + market.supplySlope * currentMarketPrice);

    const priceY = scaleY(currentMarketPrice);
    const demandX = scaleX(currentQd);
    const supplyX = scaleX(currentQs);

    const eqX = scaleX(market.currentEquilibriumQty);
    const eqY = scaleY(market.currentEquilibriumPrice);

    // Clamp the price label Y to stay inside the chart area
    const labelY = Math.max(PADDING.top + 16, Math.min(SVG_H - PADDING.bottom - 16, priceY));

    return (
        <div className="mm-chart-wrapper">
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="mm-advanced-svg">
                <defs>
                    <clipPath id="chartClip">
                        <rect x={PADDING.left} y={PADDING.top} width={PLOT_W} height={PLOT_H} />
                    </clipPath>
                    <linearGradient id="demandGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0.02" />
                    </linearGradient>
                    <linearGradient id="supplyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.02" />
                    </linearGradient>
                    <filter id="glowDemand">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="glowSupply">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="glowWhite">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>

                {/* Grid Lines */}
                <g className="mm-grid-group">
                    {yTicks.map(p => (
                        <line key={`y-${p}`} x1={scaleX(0)} y1={scaleY(p)} x2={scaleX(MAX_Q)} y2={scaleY(p)} className="mm-grid-line" />
                    ))}
                    {xTicks.map(q => (
                        <line key={`x-${q}`} x1={scaleX(q)} y1={scaleY(0)} x2={scaleX(q)} y2={scaleY(MAX_P)} className="mm-grid-line" />
                    ))}
                </g>

                {/* Axes */}
                <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(0)} y2={scaleY(MAX_P)} className="mm-axis-stroke" />
                <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(MAX_Q)} y2={scaleY(0)} className="mm-axis-stroke" />

                {/* Y-axis tick labels */}
                {yTicks.filter(p => p > 0).map(p => (
                    <text key={`yt-${p}`} x={scaleX(0) - 15} y={scaleY(p) + 5} className="mm-tick-label" textAnchor="end">
                        ₹{p}
                    </text>
                ))}

                {/* X-axis tick labels */}
                {xTicks.filter(q => q > 0).map(q => (
                    <text key={`xt-${q}`} x={scaleX(q)} y={scaleY(0) + 25} className="mm-tick-label" textAnchor="middle">
                        {q}
                    </text>
                ))}

                {/* Curves — clipped to chart area */}
                <g clipPath="url(#chartClip)">
                    {demandPoints && (
                        <>
                            <motion.path d={demandPoints} fill="url(#demandGrad)" initial={false} animate={{ d: demandPoints }} />
                            <motion.path
                                d={demandPoints}
                                className="mm-curve-demand"
                                animate={{ d: demandPoints }}
                                transition={{ type: 'spring', stiffness: 40 }}
                                filter="url(#glowDemand)"
                            />
                        </>
                    )}
                    {supplyPoints && (
                        <>
                            <motion.path d={supplyPoints} fill="url(#supplyGrad)" initial={false} animate={{ d: supplyPoints }} />
                            <motion.path
                                d={supplyPoints}
                                className="mm-curve-supply"
                                animate={{ d: supplyPoints }}
                                transition={{ type: 'spring', stiffness: 40 }}
                                filter="url(#glowSupply)"
                            />
                        </>
                    )}

                    {/* Equilibrium crosshair */}
                    <line x1={eqX} y1={scaleY(0)} x2={eqX} y2={eqY} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1={scaleX(0)} y1={eqY} x2={eqX} y2={eqY} stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Live price horizontal line — clipped inside chart */}
                    <line className="mm-live-price-line" x1={PADDING.left} y1={priceY} x2={PADDING.left + PLOT_W} y2={priceY} />

                    {/* Trade pulse effect */}
                    {pulse && (
                        <motion.circle
                            cx={demandX} cy={priceY} r={30}
                            fill="rgba(255,255,255,0.3)"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        />
                    )}

                    {/* Intersection dots */}
                    <circle className="mm-live-intersect-demand" cx={demandX} cy={priceY} r={7} style={{ fill: '#ef4444' }} />
                    <circle className="mm-live-intersect-supply" cx={supplyX} cy={priceY} r={7} style={{ fill: '#10b981' }} />
                </g>

                {/* Equilibrium dot — outside clip so it's always visible */}
                <circle cx={eqX} cy={eqY} r={8} fill="#fff" filter="url(#glowWhite)" opacity={0.9} />
                <circle cx={eqX} cy={eqY} r={4} fill="#fbbf24" />
                <text x={eqX + 14} y={eqY - 12} fill="#fbbf24" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="700">
                    EQ ₹{market.currentEquilibriumPrice.toFixed(1)}
                </text>

                {/* Price label on Y-axis — clamped so it never goes off screen */}
                <rect x={PADDING.left - 108} y={labelY - 14} width={95} height={28} rx={6} fill="rgba(0,180,255,0.15)" stroke="rgba(76,201,240,0.4)" strokeWidth="1" />
                <text x={PADDING.left - 62} y={labelY + 5} className="mm-live-price-label" textAnchor="middle" style={{ fontSize: '14px' }}>
                    ₹{currentMarketPrice.toFixed(2)}
                </text>

                {/* Axis Labels */}
                <text x={25} y={25} className="mm-axis-root-label" style={{ fontSize: '14px', fontWeight: 800 }}>PRICE (₹)</text>
                <text x={SVG_W - 140} y={SVG_H - 15} className="mm-axis-root-label" style={{ fontSize: '14px', fontWeight: 800 }}>QUANTITY</text>

                {/* Legend */}
                <g transform={`translate(${PADDING.left + 20}, ${PADDING.top + 15})`}>
                    <rect x={-10} y={-15} width={200} height={55} rx={8} fill="rgba(0,0,0,0.6)" />
                    <line x1={0} y1={0} x2={30} y2={0} stroke="#ef4444" strokeWidth={4} />
                    <text x={38} y={5} fill="#ef4444" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="700">CUSTOMER DEMAND</text>
                    <line x1={0} y1={25} x2={30} y2={25} stroke="#10b981" strokeWidth={4} />
                    <text x={38} y={30} fill="#10b981" fontFamily="'JetBrains Mono', monospace" fontSize="12" fontWeight="700">SUPPLIER SUPPLY</text>
                </g>
            </svg>
        </div>
    );
}
