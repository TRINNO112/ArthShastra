import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const SVG_W = 600;
const SVG_H = 400;
const PADDING = { top: 20, right: 30, bottom: 40, left: 50 };
const PLOT_W = SVG_W - PADDING.left - PADDING.right;
const PLOT_H = SVG_H - PADDING.top - PADDING.bottom;

export default function AdvancedChart({ market, currentMarketPrice }) {

    // Scales
    // P ranges from 0 to 100
    // Q ranges from 0 to maxDemand (up to 300)
    const MAX_P = 100;
    const MAX_Q = 300;

    const scaleX = (q) => PADDING.left + (q / MAX_Q) * PLOT_W;
    const scaleY = (p) => SVG_H - PADDING.bottom - (p / MAX_P) * PLOT_H;

    // Build curve lines based on gameLogic eq:
    // Qd = maxDemand - demandSlope * P  => P = (maxDemand - Qd) / demandSlope
    // Qs = minSupply + supplySlope * P  => P = (Qs - minSupply) / supplySlope

    const demandPoints = useMemo(() => {
        let pts = [];
        for (let q = 0; q <= market.maxDemand; q += 10) {
            const p = (market.maxDemand - q) / market.demandSlope;
            if (p >= 0 && p <= MAX_P) {
                pts.push(`${scaleX(q)},${scaleY(p)}`);
            }
        }
        return pts.length > 0 ? `M ${pts.join(' L ')}` : '';
    }, [market.maxDemand, market.demandSlope]);

    const supplyPoints = useMemo(() => {
        let pts = [];
        for (let q = market.minSupply; q <= MAX_Q; q += 10) {
            const p = (q - market.minSupply) / market.supplySlope;
            if (p >= 0 && p <= MAX_P) {
                pts.push(`${scaleX(q)},${scaleY(p)}`);
            }
        }
        return pts.length > 0 ? `M ${pts.join(' L ')}` : '';
    }, [market.minSupply, market.supplySlope]);

    // Current Price Market Intersection (where the player/market currently trades)
    // Find what Qd and Qs currently are at this floating market price
    const currentQd = Math.max(0, market.maxDemand - market.demandSlope * currentMarketPrice);
    const currentQs = Math.max(0, market.minSupply + market.supplySlope * currentMarketPrice);

    return (
        <div className="mm-chart-wrapper">
            <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="mm-advanced-svg">

                {/* Axes and Grid */}
                <g className="mm-grid-group">
                    {[0, 20, 40, 60, 80, 100].map(p => (
                        <line key={`y-${p}`} x1={scaleX(0)} y1={scaleY(p)} x2={scaleX(MAX_Q)} y2={scaleY(p)} className="mm-grid-line" />
                    ))}
                    {[0, 50, 100, 150, 200, 250, 300].map(q => (
                        <line key={`x-${q}`} x1={scaleX(q)} y1={scaleY(0)} x2={scaleX(q)} y2={scaleY(MAX_P)} className="mm-grid-line" />
                    ))}
                </g>

                {/* Axes Lines */}
                <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(0)} y2={scaleY(MAX_P)} className="mm-axis-stroke" />
                <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(MAX_Q)} y2={scaleY(0)} className="mm-axis-stroke" />

                {/* Dynamic Curves with Smooth Transitions */}
                {demandPoints && (
                    <motion.path
                        d={demandPoints}
                        className="mm-curve-demand"
                        initial={false}
                        animate={{ d: demandPoints }}
                        transition={{ type: 'spring', stiffness: 40, damping: 15 }}
                    />
                )}

                {supplyPoints && (
                    <motion.path
                        d={supplyPoints}
                        className="mm-curve-supply"
                        initial={false}
                        animate={{ d: supplyPoints }}
                        transition={{ type: 'spring', stiffness: 40, damping: 15 }}
                    />
                )}

                {/* Floating Equilibrium Point Target (Math eq) */}
                <motion.circle
                    cx={scaleX(market.currentEquilibriumQty)}
                    cy={scaleY(market.currentEquilibriumPrice)}
                    r={6}
                    className="mm-eq-target-dot"
                    animate={{
                        cx: scaleX(market.currentEquilibriumQty),
                        cy: scaleY(market.currentEquilibriumPrice)
                    }}
                    transition={{ type: 'spring', stiffness: 50 }}
                />

                {/* Live Floating Market Price (Noisy) */}
                <motion.g
                    animate={{ y: scaleY(currentMarketPrice) - scaleY(0) }}
                    transition={{ ease: "linear", duration: 0.1 }}
                >
                    <line x1={scaleX(0)} y1={scaleY(0)} x2={scaleX(MAX_Q)} y2={scaleY(0)} className="mm-live-price-line" />

                    {/* Intersection Dots at current market price */}
                    <circle cx={scaleX(currentQd)} cy={scaleY(0)} r={5} className="mm-live-intersect-demand" />
                    <circle cx={scaleX(currentQs)} cy={scaleY(0)} r={5} className="mm-live-intersect-supply" />

                    <text x={scaleX(0) - 45} y={scaleY(0) + 5} className="mm-live-price-label">₹{currentMarketPrice.toFixed(2)}</text>
                </motion.g>

                {/* Labels */}
                <text x="5" y="15" className="mm-axis-root-label">Price</text>
                <text x={SVG_W - 35} y={SVG_H - 10} className="mm-axis-root-label">Qty</text>
            </svg>
        </div>
    );
}
