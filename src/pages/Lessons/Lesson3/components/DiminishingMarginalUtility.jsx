/**
 * DiminishingMarginalUtility.jsx - Topic 3 of Lesson 3
 *
 * Content included:
 * ✓ Statement of the Law of Diminishing Marginal Utility
 * ✓ Why this law operates (4 reasons with examples)
 * ✓ Two basic assumptions (expanded to 4)
 * ✓ Tabular presentation with examples
 * ✓ Diagrammatic presentation (MU curve) - FIXED with SVG
 * ✓ Exceptions to the law
 * ✓ Interactive graph visualization
 * ✓ Comparison with Law of Equi-Marginal Utility
 * ✓ Real-world applications
 * ✓ Practice problems
 *
 * Related quiz topic: dmu
 */

import { useState, useCallback } from 'react';
import {
  FaArrowDown,
  FaExclamationTriangle,
  FaChartLine,
  FaQuestion,
  FaBalanceScale,
  FaLightbulb,
  FaPlay,
  FaPause,
  FaRedo,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle
} from 'react-icons/fa';
import './component.css';

// ============================================================================
// UTILITY DATA CONFIGURATION
// ============================================================================

const UTILITY_DATA = [
  { unit: 1, mu: 20, tu: 20, label: 'Maximum satisfaction', description: 'First unit gives highest utility - intense want satisfaction' },
  { unit: 2, mu: 15, tu: 35, label: 'Utility diminishing', description: 'Second unit still valuable but less than first' },
  { unit: 3, mu: 10, tu: 45, label: 'Still diminishing', description: 'Want getting satisfied, utility continues to fall' },
  { unit: 4, mu: 5, tu: 50, label: 'Approaching saturation', description: 'Nearing full satisfaction, low additional utility' },
  { unit: 5, mu: 0, tu: 50, label: 'Saturation point', description: 'Complete satisfaction - no additional utility from more units' },
  { unit: 6, mu: -5, tu: 45, label: 'Negative utility', description: 'Disutility - consuming more causes dissatisfaction' },
];

// Graph configuration constants
const GRAPH_CONFIG = {
  width: 700,
  height: 450,
  padding: { top: 50, right: 80, bottom: 70, left: 80 },
  muRange: { min: -10, max: 25 },
  tuRange: { min: 0, max: 55 },
  animationDuration: 2000,
};

// ============================================================================
// CUSTOM HOOKS
// ============================================================================

/**
 * Hook for managing graph animation
 */
const useGraphAnimation = (duration = 2000) => {
  const [animationProgress, setAnimationProgress] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setAnimationProgress(0);

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setAnimationProgress(easedProgress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [duration, isAnimating]);

  const resetAnimation = useCallback(() => {
    setAnimationProgress(1);
    setIsAnimating(false);
  }, []);

  return { animationProgress, isAnimating, startAnimation, resetAnimation };
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

/**
 * Graph Control Button Component
 */
const GraphControlButton = ({ onClick, disabled, active, label, variant = 'default', icon }) => {
  const getButtonClass = () => {
    let baseClass = 'control-btn';
    if (variant === 'primary') baseClass += ' primary';
    if (variant === 'toggle') baseClass += ` toggle ${active ? 'active' : ''}`;
    if (variant === 'toggle-gold') baseClass += ` toggle ${active ? 'active gold' : ''}`;
    return baseClass;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonClass()}
    >
      {icon && icon()}
      {label}
    </button>
  );
};

/**
 * Interactive SVG Graph Component
 */
const UtilityGraph = ({
  data,
  showMU = true,
  showTU = true,
  animationProgress = 1,
  onPointHover,
  selectedUnit
}) => {
  const { width, height, padding, muRange, tuRange } = GRAPH_CONFIG;
  const graphWidth = width - padding.left - padding.right;
  const graphHeight = height - padding.top - padding.bottom;

  // Scale functions
  const xScale = useCallback((unit) => {
    return padding.left + ((unit - 0.5) / 6) * graphWidth;
  }, [padding.left, graphWidth]);

  const yScaleMU = useCallback((mu) => {
    const normalized = (muRange.max - mu) / (muRange.max - muRange.min);
    return padding.top + normalized * graphHeight;
  }, [padding.top, graphHeight, muRange]);

  const yScaleTU = useCallback((tu) => {
    return padding.top + graphHeight - (tu / tuRange.max) * graphHeight;
  }, [padding.top, graphHeight, tuRange]);

  // Generate line path for curves
  const generateLinePath = useCallback((dataPoints, scaleY, valueKey, progress = 1) => {
    const visibleCount = Math.ceil(dataPoints.length * progress);
    const points = dataPoints.slice(0, visibleCount).map(d => ({
      x: xScale(d.unit),
      y: scaleY(d[valueKey])
    }));

    if (points.length === 0) return '';

    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`;
    }
    return path;
  }, [xScale]);

  // Calculate visible points based on animation progress
  const visiblePointCount = Math.ceil(data.length * animationProgress);
  const visibleData = data.slice(0, visiblePointCount);

  // Zero line Y position
  const zeroLineY = yScaleMU(0);

  // Grid line values
  const muGridValues = [-5, 0, 5, 10, 15, 20];
  const tuGridValues = [0, 10, 20, 30, 40, 50];
  const xGridValues = [1, 2, 3, 4, 5, 6];

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="utility-graph-svg"
      role="img"
      aria-label="Marginal Utility and Total Utility curves showing diminishing marginal utility"
    >
      {/* Definitions for gradients and filters */}
      <defs>
        {/* MU Curve Gradient */}
        <linearGradient id="muGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ff00" />
          <stop offset="60%" stopColor="#88ff00" />
          <stop offset="80%" stopColor="#ffff00" />
          <stop offset="100%" stopColor="#ff6b6b" />
        </linearGradient>

        {/* TU Curve Gradient */}
        <linearGradient id="tuGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ff8c00" />
          <stop offset="100%" stopColor="#ffd700" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Strong Glow Filter for points */}
        <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Negative region pattern */}
        <pattern id="negativePattern" patternUnits="userSpaceOnUse" width="10" height="10">
          <path
            d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2"
            stroke="rgba(255,107,107,0.3)"
            strokeWidth="1"
          />
        </pattern>

        {/* Arrow marker for axis */}
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.5)" />
        </marker>
      </defs>

      {/* Background */}
      <rect
        x="0"
        y="0"
        width={width}
        height={height}
        fill="transparent"
        rx="15"
      />

      {/* Grid Lines */}
      <g className="grid-lines" opacity="0.5">
        {/* Horizontal grid lines for MU */}
        {muGridValues.map(mu => (
          <line
            key={`h-grid-${mu}`}
            x1={padding.left}
            y1={yScaleMU(mu)}
            x2={width - padding.right}
            y2={yScaleMU(mu)}
            stroke={mu === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.1)'}
            strokeWidth={mu === 0 ? 2 : 1}
            strokeDasharray={mu === 0 ? 'none' : '5,5'}
          />
        ))}

        {/* Vertical grid lines */}
        {xGridValues.map(unit => (
          <line
            key={`v-grid-${unit}`}
            x1={xScale(unit)}
            y1={padding.top}
            x2={xScale(unit)}
            y2={height - padding.bottom}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        ))}
      </g>

      {/* Negative Utility Region Highlight */}
      <g className="negative-region">
        <rect
          x={padding.left}
          y={zeroLineY}
          width={graphWidth}
          height={height - padding.bottom - zeroLineY}
          fill="url(#negativePattern)"
          opacity="0.5"
        />
        <rect
          x={padding.left}
          y={zeroLineY}
          width={graphWidth}
          height={height - padding.bottom - zeroLineY}
          fill="rgba(255,0,0,0.05)"
        />
      </g>

      {/* Y-Axis for MU (Left) */}
      <g className="y-axis-mu">
        <line
          x1={padding.left}
          y1={padding.top - 10}
          x2={padding.left}
          y2={height - padding.bottom}
          stroke="#00ff00"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Y-Axis Label */}
        <text
          x={padding.left - 55}
          y={height / 2}
          fill="#00ff00"
          fontSize="13"
          fontWeight="bold"
          textAnchor="middle"
          transform={`rotate(-90, ${padding.left - 55}, ${height / 2})`}
        >
          Marginal Utility (MU)
        </text>

        {/* MU Axis Tick Labels */}
        {muGridValues.map(mu => (
          <g key={`mu-label-${mu}`}>
            <text
              x={padding.left - 12}
              y={yScaleMU(mu) + 4}
              fill={mu < 0 ? '#ff6b6b' : mu === 0 ? '#ffff00' : '#00ff00'}
              fontSize="11"
              fontWeight="600"
              textAnchor="end"
            >
              {mu}
            </text>
            <line
              x1={padding.left - 5}
              y1={yScaleMU(mu)}
              x2={padding.left}
              y2={yScaleMU(mu)}
              stroke={mu < 0 ? '#ff6b6b' : '#00ff00'}
              strokeWidth="2"
            />
          </g>
        ))}
      </g>

      {/* Y-Axis for TU (Right) - Only show if TU curve is visible */}
      {showTU && (
        <g className="y-axis-tu">
          <line
            x1={width - padding.right}
            y1={padding.top - 10}
            x2={width - padding.right}
            y2={height - padding.bottom}
            stroke="#ffd700"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />

          {/* Y-Axis Label */}
          <text
            x={width - padding.right + 55}
            y={height / 2}
            fill="#ffd700"
            fontSize="13"
            fontWeight="bold"
            textAnchor="middle"
            transform={`rotate(90, ${width - padding.right + 55}, ${height / 2})`}
          >
            Total Utility (TU)
          </text>

          {/* TU Axis Tick Labels */}
          {tuGridValues.map(tu => (
            <g key={`tu-label-${tu}`}>
              <text
                x={width - padding.right + 12}
                y={yScaleTU(tu) + 4}
                fill="#ffd700"
                fontSize="11"
                fontWeight="600"
                textAnchor="start"
              >
                {tu}
              </text>
              <line
                x1={width - padding.right}
                y1={yScaleTU(tu)}
                x2={width - padding.right + 5}
                y2={yScaleTU(tu)}
                stroke="#ffd700"
                strokeWidth="2"
              />
            </g>
          ))}
        </g>
      )}

      {/* X-Axis */}
      <g className="x-axis">
        <line
          x1={padding.left}
          y1={height - padding.bottom}
          x2={width - padding.right + 10}
          y2={height - padding.bottom}
          stroke="#00ffff"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* X-Axis Label */}
        <text
          x={width / 2}
          y={height - 15}
          fill="#00ffff"
          fontSize="13"
          fontWeight="bold"
          textAnchor="middle"
        >
          Units of Commodity (Glasses of Water)
        </text>

        {/* X-Axis Tick Labels */}
        {xGridValues.map(unit => (
          <g key={`x-label-${unit}`}>
            <text
              x={xScale(unit)}
              y={height - padding.bottom + 22}
              fill="#00ffff"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
            >
              {unit}
            </text>
            <line
              x1={xScale(unit)}
              y1={height - padding.bottom}
              x2={xScale(unit)}
              y2={height - padding.bottom + 5}
              stroke="#00ffff"
              strokeWidth="2"
            />
          </g>
        ))}
      </g>

      {/* TU Curve */}
      {showTU && (
        <g className="tu-curve">
          {/* TU Line Path */}
          <path
            d={generateLinePath(data, yScaleTU, 'tu', animationProgress)}
            fill="none"
            stroke="url(#tuGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            className="tu-curve-path"
          />

          {/* TU Data Points */}
          {visibleData.map((d, i) => (
            <circle
              key={`tu-point-${i}`}
              cx={xScale(d.unit)}
              cy={yScaleTU(d.tu)}
              r={selectedUnit === d.unit ? 10 : 6}
              fill="#ffd700"
              stroke="#fff"
              strokeWidth="2"
              className="graph-point tu"
              style={{
                cursor: 'pointer',
                transition: 'r 0.2s ease',
                filter: selectedUnit === d.unit ? 'url(#strongGlow)' : 'none'
              }}
              onMouseEnter={() => onPointHover && onPointHover(d.unit)}
              onMouseLeave={() => onPointHover && onPointHover(null)}
            />
          ))}
        </g>
      )}

      {/* MU Curve */}
      {showMU && (
        <g className="mu-curve">
          {/* MU Line Path */}
          <path
            d={generateLinePath(data, yScaleMU, 'mu', animationProgress)}
            fill="none"
            stroke="url(#muGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            className="mu-curve-path"
          />

          {/* MU Data Points */}
          {visibleData.map((d, i) => {
            const pointColor = d.mu < 0 ? '#ff6b6b' : d.mu === 0 ? '#ffff00' : '#00ff00';
            const isSelected = selectedUnit === d.unit;

            return (
              <circle
                key={`mu-point-${i}`}
                cx={xScale(d.unit)}
                cy={yScaleMU(d.mu)}
                r={isSelected ? 12 : 8}
                fill={pointColor}
                stroke="#fff"
                strokeWidth="3"
                className={`graph-point ${d.mu < 0 ? 'negative' : d.mu === 0 ? 'zero' : 'positive'}`}
                filter={isSelected ? 'url(#strongGlow)' : 'url(#glow)'}
                style={{ cursor: 'pointer', transition: 'r 0.2s ease' }}
                onMouseEnter={() => onPointHover && onPointHover(d.unit)}
                onMouseLeave={() => onPointHover && onPointHover(null)}
              />
            );
          })}
        </g>
      )}

      {/* Saturation Point Marker */}
      {animationProgress >= 0.8 && showMU && (
        <g className="saturation-marker">
          {/* Vertical dashed line at saturation */}
          <line
            x1={xScale(5)}
            y1={yScaleMU(0) - 30}
            x2={xScale(5)}
            y2={yScaleMU(0) + 30}
            stroke="#ffff00"
            strokeWidth="2"
            strokeDasharray="6,4"
            opacity="0.8"
          />

          {/* Label box */}
          <rect
            x={xScale(5) - 65}
            y={yScaleMU(0) + 35}
            width="130"
            height="26"
            rx="6"
            fill="rgba(255,255,0,0.15)"
            stroke="#ffff00"
            strokeWidth="1.5"
          />
          <text
            x={xScale(5)}
            y={yScaleMU(0) + 53}
            fill="#ffff00"
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
          >
            ⚡ Saturation Point
          </text>
        </g>
      )}

      {/* Maximum TU Point Marker */}
      {showTU && animationProgress >= 0.8 && (
        <g className="max-tu-marker">
          <rect
            x={xScale(4.5) - 45}
            y={yScaleTU(50) - 32}
            width="90"
            height="22"
            rx="5"
            fill="rgba(255,215,0,0.15)"
            stroke="#ffd700"
            strokeWidth="1"
          />
          <text
            x={xScale(4.5)}
            y={yScaleTU(50) - 16}
            fill="#ffd700"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
          >
            Max TU = 50
          </text>
        </g>
      )}

      {/* Interactive Tooltip */}
      {selectedUnit !== null && (
        <g className="graph-tooltip">
          {(() => {
            const d = data.find(item => item.unit === selectedUnit);
            if (!d) return null;

            const tooltipX = xScale(d.unit);
            const tooltipY = Math.min(yScaleMU(d.mu), yScaleTU(d.tu)) - 75;
            const adjustedY = Math.max(tooltipY, padding.top + 10);
            const boxWidth = 170;
            const boxHeight = showTU ? 80 : 55;

            // Adjust X position if tooltip goes off screen
            let adjustedX = tooltipX - boxWidth / 2;
            if (adjustedX < 5) adjustedX = 5;
            if (adjustedX + boxWidth > width - 5) adjustedX = width - boxWidth - 5;

            const borderColor = d.mu < 0 ? '#ff6b6b' : d.mu === 0 ? '#ffff00' : '#00ffff';

            return (
              <>
                {/* Tooltip Background */}
                <rect
                  x={adjustedX}
                  y={adjustedY}
                  width={boxWidth}
                  height={boxHeight}
                  rx="8"
                  fill="rgba(0,0,0,0.92)"
                  stroke={borderColor}
                  strokeWidth="2"
                  className="graph-tooltip-bg"
                />

                {/* Tooltip Title */}
                <text
                  x={adjustedX + boxWidth / 2}
                  y={adjustedY + 20}
                  fill="#fff"
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="graph-tooltip-text title"
                >
                  Unit {d.unit}: {d.label}
                </text>

                {/* MU Value */}
                <text
                  x={adjustedX + boxWidth / 2}
                  y={adjustedY + 40}
                  fill={d.mu < 0 ? '#ff6b6b' : d.mu === 0 ? '#ffff00' : '#00ff00'}
                  fontSize="11"
                  fontWeight="600"
                  textAnchor="middle"
                  className="graph-tooltip-text mu"
                >
                  MU = {d.mu > 0 ? '+' : ''}{d.mu} utils
                </text>

                {/* TU Value */}
                {showTU && (
                  <text
                    x={adjustedX + boxWidth / 2}
                    y={adjustedY + 58}
                    fill="#ffd700"
                    fontSize="11"
                    fontWeight="600"
                    textAnchor="middle"
                    className="graph-tooltip-text tu"
                  >
                    TU = {d.tu} utils
                  </text>
                )}

                {/* Description */}
                <text
                  x={adjustedX + boxWidth / 2}
                  y={adjustedY + boxHeight - 8}
                  fill="#aaa"
                  fontSize="9"
                  textAnchor="middle"
                  fontStyle="italic"
                >
                  {d.description.substring(0, 30)}...
                </text>
              </>
            );
          })()}
        </g>
      )}

      {/* Legend */}
      <g className="graph-legend" transform={`translate(${padding.left + 10}, ${padding.top + 10})`}>
        <rect
          x="-8"
          y="-8"
          width={showTU ? "175" : "165"}
          height={showMU && showTU ? "58" : "33"}
          rx="8"
          fill="rgba(0,0,0,0.75)"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />

        {/* MU Legend Item */}
        {showMU && (
          <g className="graph-legend-item">
            <line x1="0" y1="10" x2="30" y2="10" stroke="url(#muGradient)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="15" cy="10" r="4" fill="#00ff00" stroke="#fff" strokeWidth="1" />
            <text x="40" y="14" fill="#00ff00" fontSize="11" fontWeight="bold" className="graph-legend-text mu">
              Marginal Utility (MU)
            </text>
          </g>
        )}

        {/* TU Legend Item */}
        {showTU && (
          <g className="graph-legend-item" transform={`translate(0, ${showMU ? 25 : 0})`}>
            <line x1="0" y1="10" x2="30" y2="10" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" />
            <circle cx="15" cy="10" r="4" fill="#ffd700" stroke="#fff" strokeWidth="1" />
            <text x="40" y="14" fill="#ffd700" fontSize="11" fontWeight="bold" className="graph-legend-text tu">
              Total Utility (TU)
            </text>
          </g>
        )}
      </g>
    </svg>
  );
};

/**
 * Reason Card Component
 */
const ReasonCard = ({ number, title, description, example, color = 'green' }) => {
  const colorStyles = {
    green: { borderColor: 'rgba(0, 255, 0, 0.3)', bgGradient: 'rgba(0, 255, 0, 0.08), rgba(0, 200, 0, 0.03)', textColor: '#00ff00', numberBg: 'rgba(0, 255, 0, 0.2)' },
    gold: { borderColor: 'rgba(255, 215, 0, 0.3)', bgGradient: 'rgba(255, 215, 0, 0.08), rgba(255, 165, 0, 0.03)', textColor: '#ffd700', numberBg: 'rgba(255, 215, 0, 0.2)' },
    cyan: { borderColor: 'rgba(0, 255, 255, 0.3)', bgGradient: 'rgba(0, 255, 255, 0.08), rgba(0, 200, 255, 0.03)', textColor: '#00ffff', numberBg: 'rgba(0, 255, 255, 0.2)' },
    red: { borderColor: 'rgba(255, 107, 107, 0.3)', bgGradient: 'rgba(255, 107, 107, 0.08), rgba(255, 0, 0, 0.03)', textColor: '#ff6b6b', numberBg: 'rgba(255, 107, 107, 0.2)' },
  };

  const style = colorStyles[color] || colorStyles.green;

  return (
    <div
      className="reason-card"
      style={{
        background: `linear-gradient(135deg, ${style.bgGradient})`,
        border: `1px solid ${style.borderColor}`,
      }}
    >
      <h4 style={{ color: style.textColor }}>
        <span
          className="reason-number"
          style={{ background: style.numberBg }}
        >
          {number}
        </span>
        {title}
      </h4>
      <p>{description}</p>
      <div className="example-note">
        <strong style={{ color: '#00ffff' }}>Example:</strong> {example}
      </div>
    </div>
  );
};

/**
 * Assumption Item Component
 */
const AssumptionItem = ({ number, title, description, color = 'cyan' }) => {
  const gradients = {
    cyan: 'linear-gradient(135deg, #00ffff, #0088ff)',
    gold: 'linear-gradient(135deg, #ffd700, #ff8c00)',
    green: 'linear-gradient(135deg, #00ff00, #00cc00)',
    purple: 'linear-gradient(135deg, #ba55d3, #9333ea)',
  };

  const textColors = {
    cyan: '#00ffff',
    gold: '#ffd700',
    green: '#00ff00',
    purple: '#ba55d3',
  };

  return (
    <div
      className="assumption-item"
      style={{ borderLeftColor: textColors[color] || textColors.cyan }}
    >
      <span
        className="assumption-number"
        style={{ background: gradients[color] || gradients.cyan }}
      >
        {number}
      </span>
      <div className="assumption-content">
        <h4 style={{ color: textColors[color] || textColors.cyan }}>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

/**
 * Exception Card Component
 */
const ExceptionCard = ({ icon, title, description, color }) => (
  <div
    className="exception-card"
    style={{ borderLeftColor: color }}
  >
    <h5 style={{ color: color }}>{icon} {title}</h5>
    <p>{description}</p>
  </div>
);

/**
 * Application Card Component
 */
const ApplicationCard = ({ icon, title, description, color }) => (
  <div className="application-card">
    <div
      className="application-icon"
      style={{ background: `${color}20` }}
    >
      {icon}
    </div>
    <div className="application-content">
      <h4 style={{ color: color }}>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

/**
 * Observation Card Component
 */
const ObservationCard = ({ icon, title, description, variant }) => (
  <div className={`observation-card ${variant}`}>
    <h5>{icon} {title}</h5>
    <p>{description}</p>
  </div>
);

/**
 * MU-TU Relationship Table Component
 */
const RelationshipTable = () => (
  <div className="relationship-box" style={{ marginTop: '1.5rem' }}>
    <h4 style={{ color: '#ba55d3', marginTop: 0 }}>🔗 Relationship Between MU and TU</h4>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr>
          <th style={{
            padding: '0.8rem',
            textAlign: 'left',
            color: '#00ff00',
            borderBottom: '1px solid rgba(186, 85, 211, 0.3)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}>
            When MU is...
          </th>
          <th style={{
            padding: '0.8rem',
            textAlign: 'left',
            color: '#ffd700',
            borderBottom: '1px solid rgba(186, 85, 211, 0.3)',
            background: 'rgba(0, 0, 0, 0.3)'
          }}>
            TU is...
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '0.8rem', color: '#00ff00' }}>Positive but decreasing</td>
          <td style={{ padding: '0.8rem', color: '#ffd700' }}>Increasing at decreasing rate</td>
        </tr>
        <tr style={{ background: 'rgba(255, 255, 0, 0.05)' }}>
          <td style={{ padding: '0.8rem', color: '#ffff00', fontWeight: 'bold' }}>Zero (Saturation Point)</td>
          <td style={{ padding: '0.8rem', color: '#ffff00', fontWeight: 'bold' }}>Maximum</td>
        </tr>
        <tr>
          <td style={{ padding: '0.8rem', color: '#ff6b6b' }}>Negative (Disutility)</td>
          <td style={{ padding: '0.8rem', color: '#ff6b6b' }}>Decreasing</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

const REASONS_DATA = [
  {
    number: 1,
    title: 'Satiability of Wants',
    description: 'Every human want is satiable (can be satisfied). Once partially satisfied, the intensity of want decreases progressively.',
    example: 'When hungry, the first roti gives high satisfaction. By the 5th roti, you\'re full — the want for food is complete.',
    color: 'green'
  },
  {
    number: 2,
    title: 'Variety of Uses',
    description: 'Different units of the same commodity are put to different uses with varying importance. First units satisfy the most urgent wants.',
    example: 'Water: 1st bucket for drinking (critical), 2nd for cooking, 3rd for bathing, 4th for washing, 5th for gardening.',
    color: 'gold'
  },
  {
    number: 3,
    title: 'Psychological Tendency',
    description: 'Human nature is such that repetition of the same experience reduces excitement and enjoyment. Novelty wears off with consumption.',
    example: 'Your favorite song — exciting the first time, but after 100 plays, it becomes boring.',
    color: 'cyan'
  },
  {
    number: 4,
    title: 'Introspection',
    description: 'Personal experience confirms this law. Everyone can observe in their own consumption that additional units give less satisfaction.',
    example: 'Think about eating ice cream — the first scoop is delightful, but by the fourth, you may feel sick!',
    color: 'red'
  }
];

const ASSUMPTIONS_DATA = [
  {
    number: 1,
    title: 'Standard/Homogeneous Units',
    description: 'The commodity must be consumed in identical, standard units. For example, each glass of water should be of the same size, each slice of pizza should be similar. If units vary, the law may not apply uniformly.',
    color: 'cyan'
  },
  {
    number: 2,
    title: 'Continuous Consumption',
    description: 'Consumption must occur continuously without significant time gaps. If there\'s a long gap between units (e.g., one ice cream today, another after a week), the intensity of want may return, and MU may not diminish.',
    color: 'gold'
  },
  {
    number: 3,
    title: 'Ceteris Paribus (Other Things Constant)',
    description: 'Consumer\'s income, tastes, preferences, fashion, and prices of related goods must remain unchanged. Also, the consumer should be of sound mind and normal behavior.',
    color: 'green'
  },
  {
    number: 4,
    title: 'Reasonable Quantity',
    description: 'Each unit consumed should be of reasonable/adequate size. Too small units (e.g., one spoon of rice) may actually show increasing utility initially until a reasonable portion is consumed.',
    color: 'purple'
  }
];

const EXCEPTIONS_DATA = [
  {
    icon: '💰',
    title: 'Money',
    description: 'For most people, additional money continues to give satisfaction as it can satisfy various wants. However, very rich people may experience DMU for money too.',
    color: '#ffd700'
  },
  {
    icon: '📚',
    title: 'Hobbies & Collections',
    description: 'Collecting stamps, coins, or antiques — each new item may increase satisfaction as the collection becomes more complete and valuable.',
    color: '#00ffff'
  },
  {
    icon: '🍺',
    title: 'Addiction (Drunkards)',
    description: 'For addicts, initial units may show increasing utility due to craving. However, this is an abnormal case and eventually DMU applies.',
    color: '#ff6b6b'
  },
  {
    icon: '🎵',
    title: 'Music & Reading',
    description: 'Appreciation for music or literature may increase with exposure. The more you understand, the more you enjoy subsequent experiences.',
    color: '#00ff00'
  },
  {
    icon: '💎',
    title: 'Rare/Unique Items',
    description: 'Fashion goods, antiques, or limited editions may give increasing utility due to their exclusivity and status symbol value.',
    color: '#ba55d3'
  },
  {
    icon: '🤑',
    title: 'Misers',
    description: 'People with abnormal attachment to wealth may get increasing satisfaction from each additional rupee regardless of its use.',
    color: '#ff8c00'
  }
];

const APPLICATIONS_DATA = [
  {
    icon: '🍕',
    title: 'All-You-Can-Eat Buffets',
    description: 'Restaurants profit because DMU limits how much you eat. First plate is enjoyed fully, but by the third, satisfaction drops dramatically. You reach saturation quickly!',
    color: '#ff6b6b'
  },
  {
    icon: '💸',
    title: 'Progressive Taxation',
    description: 'Higher tax rates for higher income because MU of money decreases with income. Taking ₹10,000 from a crorepati causes less disutility than from a middle-class person.',
    color: '#ffd700'
  },
  {
    icon: '🛒',
    title: 'Buy-One-Get-One Offers',
    description: 'Retailers discount second units because you value them less anyway. You\'d pay ₹500 for one shirt, but not ₹1,000 for two identical ones due to DMU.',
    color: '#00ff00'
  },
  {
    icon: '📱',
    title: 'Subscription Services',
    description: 'Netflix charges flat monthly fee because your viewing DMUs. You binge-watch 20 shows in week 1, but by month-end, you barely watch 2. Flat fee captures more value.',
    color: '#00ffff'
  },
  {
    icon: '💎',
    title: 'Luxury Brand Scarcity',
    description: 'Apple and Supreme create artificial scarcity to maintain high MU. If unlimited iPhones existed, MU would drop. Limited supply keeps each unit highly desirable.',
    color: '#ba55d3'
  }
];

const QUIZ_QUESTIONS = [
  'State the Law of Diminishing Marginal Utility in your own words.',
  'Why is the MU curve downward sloping from left to right?',
  'At what point is Total Utility maximum? What is MU at that point?',
  'Give two reasons why this law operates.',
  'Name any three exceptions to the Law of DMU.',
  'How is the Law of DMU related to the downward sloping demand curve?',
  'Differentiate between Law of DMU and Law of Equi-Marginal Utility.'
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function DiminishingMarginalUtility() {
  // State management
  const [showMUCurve, setShowMUCurve] = useState(true);
  const [showTUCurve, setShowTUCurve] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [activeTableRow, setActiveTableRow] = useState(null);

  // Animation hook
  const { animationProgress, isAnimating, startAnimation, resetAnimation } = useGraphAnimation(GRAPH_CONFIG.animationDuration);

  // Handle point hover in graph
  const handlePointHover = useCallback((unit) => {
    setSelectedUnit(unit);
    setActiveTableRow(unit);
  }, []);

  // Handle table row hover
  const handleTableRowHover = useCallback((unit) => {
    setActiveTableRow(unit);
    setSelectedUnit(unit);
  }, []);

  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Topic 3</span>
        <h2 className="section-title-lesson">Law of Diminishing Marginal Utility</h2>
        <p className="section-subtitle-lesson">The fundamental law of consumer behavior</p>
      </div>

      {/* ================================================================== */}
      {/* MAIN CONTENT CARD 1: Statement & Reasons */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          {/* Statement of the Law */}
          <h3 className="highlight-gold">📜 Statement of the Law</h3>

          <div className="law-statement-box">
            <p className="term">
              "As the quantity of a commodity consumed by a person increases, the utility
              derived from each successive unit goes on decreasing, provided other things
              remain constant."
            </p>
          </div>

          <p>
            This law is also known as the <strong className="highlight-text">Fundamental Law of Satisfaction</strong> or
            <strong className="highlight-text"> Gossen's First Law</strong> (named after German economist Hermann Heinrich Gossen).
            It explains why the first unit of consumption gives maximum satisfaction and each subsequent unit gives less.
            This is a universal phenomenon observed in consumption of all goods and services.
          </p>

          <div className="note-text">
            <strong>💡 Key Insight:</strong> This law explains the downward sloping demand curve — as price
            falls, consumers buy more units even though each additional unit gives less satisfaction.
            The law forms the foundation of consumer demand theory.
          </div>

          {/* Why the Law Operates */}
          <h3 className="highlight-green">🔍 Why Does This Law Operate?</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The Law of Diminishing Marginal Utility operates due to several psychological and economic reasons:
          </p>

          <div className="reasons-grid">
            {REASONS_DATA.map((reason) => (
              <ReasonCard
                key={reason.number}
                number={reason.number}
                title={reason.title}
                description={reason.description}
                example={reason.example}
                color={reason.color}
              />
            ))}
          </div>

          {/* Assumptions of the Law */}
          <h3 className="highlight-cyan">⚙️ Assumptions of the Law</h3>
          <p>For the Law of Diminishing Marginal Utility to hold true, certain conditions must be met:</p>

          <div className="assumptions-list">
            {ASSUMPTIONS_DATA.map((assumption) => (
              <AssumptionItem
                key={assumption.number}
                number={assumption.number}
                title={assumption.title}
                description={assumption.description}
                color={assumption.color}
              />
            ))}
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 2: Tabular & Diagrammatic Presentation */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          {/* Tabular Presentation */}
          <h3 className="highlight-gold">📊 Tabular Presentation</h3>
          <p>Let's understand DMU through a practical example of water consumption:</p>

          <div className="table-container">
            <table className="dmu-table">
              <thead>
                <tr>
                  <th>Unit of Water (Glasses)</th>
                  <th>Marginal Utility (Utils)</th>
                  <th>Total Utility (Utils)</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                {UTILITY_DATA.map((row) => (
                  <tr
                    key={row.unit}
                    className={activeTableRow === row.unit ? 'active' : ''}
                    style={{
                      background: activeTableRow === row.unit
                        ? 'rgba(255, 215, 0, 0.15)'
                        : row.unit % 2 === 0
                          ? 'rgba(255,255,255,0.02)'
                          : 'transparent',
                      transition: 'background 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={() => handleTableRowHover(row.unit)}
                    onMouseLeave={() => handleTableRowHover(null)}
                  >
                    <td style={{ fontWeight: 'bold', color: '#ffd700' }}>
                      {row.unit}{row.unit === 1 ? 'st' : row.unit === 2 ? 'nd' : row.unit === 3 ? 'rd' : 'th'}
                    </td>
                    <td
                      className={row.mu < 0 ? 'negative' : row.mu === 0 ? 'zero' : 'positive'}
                      style={{ textAlign: 'center' }}
                    >
                      {row.mu > 0 ? `+${row.mu}` : row.mu}
                    </td>
                    <td style={{ textAlign: 'center', color: '#00ffff', fontWeight: 'bold' }}>
                      {row.tu}
                    </td>
                    <td style={{
                      color: row.mu < 0 ? '#ff6b6b' : row.mu === 0 ? '#ffff00' : '#e0e0e0',
                      fontSize: '0.9rem'
                    }}>
                      {row.label}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Key Observations */}
          <div className="observations-grid">
            <ObservationCard
              icon="📉"
              title="MU Pattern"
              description="MU decreases: 20 → 15 → 10 → 5 → 0 → -5. Each unit gives less satisfaction than the previous one."
              variant="green"
            />
            <ObservationCard
              icon="📈"
              title="TU Pattern"
              description="TU increases at decreasing rate, reaches maximum (50) at saturation, then falls when MU becomes negative."
              variant="cyan"
            />
            <ObservationCard
              icon="⚡"
              title="Saturation Point"
              description="At 5th unit, MU = 0 and TU is maximum. Consumer should stop here for maximum satisfaction."
              variant="yellow"
            />
          </div>

          <h3 className="highlight-cyan" style={{ marginTop: '2rem' }}>📈 Diagrammatic Presentation</h3>

          {/* ADDED: Point of Saturation Graph (Moved from Consumer Equilibrium) */}
          <div className="demand-curve-derivation" style={{ marginBottom: '2rem' }}>
            <h4 className="text-center mb-4"><FaChartLine /> Point of Saturation: TU vs MU</h4>

            {/* Saturation SVG Graph */}
            <div className="graph-container" style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: '1rem', overflowX: 'auto' }}>
               <div style={{ minWidth: '600px', margin: '0 auto', position: 'relative' }}>
                  <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', fontFamily: 'sans-serif' }}>

                    {/* Background & Definitions */}
                    <defs>
                      <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#dc3545" />
                      </marker>
                    </defs>

                    {/* --- LEFT GRAPH: TOTAL UTILITY --- */}
                    <g transform="translate(60, 40)">
                       <text x="150" y="-15" textAnchor="middle" fill="#ccc" fontSize="16" fontWeight="bold">Total Utility (TU)</text>
                       <line x1="0" y1="300" x2="300" y2="300" stroke="#fff" strokeWidth="2" /> {/* X Axis */}
                       <line x1="0" y1="0" x2="0" y2="300" stroke="#fff" strokeWidth="2" />   {/* Y Axis */}
                       <text x="150" y="340" textAnchor="middle" fill="#aaa" fontSize="14">Quantity (Q)</text>
                       <text x="-30" y="150" textAnchor="middle" transform="rotate(-90, -30, 150)" fill="#aaa" fontSize="14">Total Utility</text>

                       {/* Y Marks */}
                       <text x="-10" y="65" textAnchor="end" fill="#fff" fontSize="12">40</text>
                       <circle cx="200" cy="60" r="6" fill="#003366" stroke="#fff" strokeWidth="2" />
                       <text x="215" y="55" fill="#0056b3" fontWeight="bold" fontSize="14">Saturation Point (Max TU)</text>
                       <path d="M 0 300 Q 100 60 200 60 T 320 200" fill="none" stroke="#0056b3" strokeWidth="4" />
                       <line x1="200" y1="60" x2="200" y2="300" stroke="#aaa" strokeDasharray="5 5" />
                       <text x="200" y="320" textAnchor="middle" fill="#fff" fontSize="14">4</text>
                    </g>

                    {/* --- RIGHT GRAPH: MARGINAL UTILITY --- */}
                    <g transform="translate(450, 40)">
                       <text x="150" y="-15" textAnchor="middle" fill="#ccc" fontSize="16" fontWeight="bold">Marginal Utility (MU)</text>
                       <line x1="0" y1="180" x2="300" y2="180" stroke="#fff" strokeWidth="2" /> {/* X Axis (Shifted up for negative y) */}
                       <line x1="0" y1="0" x2="0" y2="300" stroke="#fff" strokeWidth="2" />   {/* Y Axis */}
                       <text x="150" y="340" textAnchor="middle" fill="#aaa" fontSize="14">Quantity (Q)</text>
                       <text x="-30" y="150" textAnchor="middle" transform="rotate(-90, -30, 150)" fill="#aaa" fontSize="14">Marginal Utility</text>

                       {/* MU Line */}
                       <line x1="0" y1="60" x2="280" y2="228" stroke="#dc3545" strokeWidth="4" />
                       <circle cx="200" cy="180" r="6" fill="#800000" stroke="#fff" strokeWidth="2" />
                       <text x="215" y="170" fill="#dc3545" fontWeight="bold" fontSize="14">Zero MU (Saturation)</text>
                       <line x1="200" y1="180" x2="200" y2="180" stroke="#aaa" strokeDasharray="5 5" /> {/* Alignment check */}
                       <text x="200" y="200" textAnchor="middle" fill="#fff" fontSize="14">4</text>
                    </g>
                  </svg>
               </div>
            </div>
          </div>

          {/* Graph Controls */}
          <div className="graph-controls">
            <GraphControlButton
              onClick={startAnimation}
              disabled={isAnimating}
              icon={() => (isAnimating ? <FaPause /> : <FaPlay />)}
              label={isAnimating ? 'Animating...' : 'Animate Graph'}
              variant="primary"
            />

            <GraphControlButton
              onClick={resetAnimation}
              disabled={isAnimating}
              icon={() => <FaRedo />}
              label="Reset"
              variant="default"
            />

            <GraphControlButton
              onClick={() => setShowMUCurve(!showMUCurve)}
              active={showMUCurve}
              icon={() => (showMUCurve ? <FaEye /> : <FaEyeSlash />)}
              label="MU Curve"
              variant="toggle"
            />

            <GraphControlButton
              onClick={() => setShowTUCurve(!showTUCurve)}
              active={showTUCurve}
              icon={() => (showTUCurve ? <FaEye /> : <FaEyeSlash />)}
              label="TU Curve"
              variant="toggle-gold"
            />
          </div>

          {/* The SVG Graph */}
          <div className="graph-wrapper">
            <UtilityGraph
              data={UTILITY_DATA}
              showMU={showMUCurve}
              showTU={showTUCurve}
              animationProgress={animationProgress}
              onPointHover={handlePointHover}
              selectedUnit={selectedUnit}
            />
          </div>

          {/* Graph Explanation */}
          <div className="graph-explanation">
            <h4>
              <FaLightbulb style={{ color: '#ffd700' }} /> Understanding the Graph
            </h4>

            <div className="graph-explanation-item">
              <span className="arrow green">→</span>
              <p>
                <strong className="mu">MU Curve (Green):</strong> Slopes downward from left to right,
                showing diminishing marginal utility. Crosses the X-axis at unit 5 (saturation) and
                becomes negative after that.
              </p>
            </div>

            <div className="graph-explanation-item">
              <span className="arrow gold">→</span>
              <p>
                <strong className="tu">TU Curve (Gold):</strong> Rises at a decreasing rate,
                reaches maximum at saturation point (when MU = 0), then falls when MU becomes negative.
              </p>
            </div>

            <div className="graph-explanation-item">
              <span className="arrow yellow">→</span>
              <p>
                <strong className="saturation">Saturation Point:</strong> Where MU = 0 and TU is maximum.
                Rational consumer stops consumption here. Beyond this, consumption causes disutility.
              </p>
            </div>

            <div className="graph-explanation-item">
              <span className="arrow red">→</span>
              <p>
                <strong className="negative">Negative Utility Zone:</strong> The shaded region below the
                X-axis shows disutility — consuming more actually reduces total satisfaction.
              </p>
            </div>
          </div>

          {/* MU-TU Relationship Table */}
          <RelationshipTable />

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 3: Exceptions to the Law */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          <h3 className="highlight-gold" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaExclamationTriangle /> Exceptions to the Law
          </h3>

          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 0, 0, 0.05))',
            border: '2px solid rgba(255, 107, 107, 0.3)',
            borderRadius: '15px',
            padding: '1.5rem',
            marginTop: '1rem'
          }}>
            <p style={{ color: '#e0e0e0', marginTop: 0 }}>
              While the Law of DMU is universal, there are some exceptions where it may not strictly apply:
            </p>

            <div className="exceptions-grid">
              {EXCEPTIONS_DATA.map((exception, idx) => (
                <ExceptionCard
                  key={idx}
                  icon={exception.icon}
                  title={exception.title}
                  description={exception.description}
                  color={exception.color}
                />
              ))}
            </div>

            <div className="note-text warning" style={{ marginTop: '1.5rem', marginBottom: 0 }}>
              <strong>⚠️ Important:</strong> These are exceptions, not the rule. For normal consumption of most
              goods by most people under normal circumstances, the Law of DMU holds true. These exceptions
              usually arise due to abnormal psychological conditions or special nature of goods.
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 4: Comparison with Law of Equi-Marginal Utility */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          <h3 style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#ba55d3'
          }}>
            <FaBalanceScale /> Comparison: DMU vs. Equi-Marginal Utility
          </h3>

          <p>
            The Law of Diminishing Marginal Utility and the Law of Equi-Marginal Utility are related
            but serve different purposes in understanding consumer behavior. Let's understand both:
          </p>

          <div className="comparison-container">
            {/* DMU Card */}
            <div className="comparison-card dmu">
              <h4>
                <span style={{ fontSize: '1.5rem' }}>📉</span>
                Law of Diminishing MU
              </h4>
              <ul className="comparison-list">
                <li>
                  <span className="check">✓</span>
                  <span><strong>Focus:</strong> Single commodity consumption</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>States:</strong> MU decreases as consumption increases</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Purpose:</strong> Explains why we stop consuming more</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Question:</strong> How much of ONE good to consume?</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Also called:</strong> Gossen's First Law</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Basis:</strong> Psychological law of satiable wants</span>
                </li>
              </ul>
            </div>

            {/* EMU Card */}
            <div className="comparison-card emu">
              <h4>
                <span style={{ fontSize: '1.5rem' }}>⚖️</span>
                Law of Equi-Marginal Utility
              </h4>
              <ul className="comparison-list">
                <li>
                  <span className="check">✓</span>
                  <span><strong>Focus:</strong> Multiple commodity consumption</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>States:</strong> Equalize MU per rupee spent on all goods</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Purpose:</strong> Explains how to allocate limited income</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Question:</strong> How to divide money among MANY goods?</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Also called:</strong> Gossen's Second Law, Law of Substitution</span>
                </li>
                <li>
                  <span className="check">✓</span>
                  <span><strong>Basis:</strong> Derived from Law of DMU</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How They're Connected */}
          <div className="relationship-box">
            <h4 style={{ color: '#ffd700', marginTop: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🔗 How They're Connected
            </h4>
            <p style={{ color: '#e0e0e0', marginBottom: '1rem' }}>
              The Law of Equi-Marginal Utility is <strong>based on</strong> the Law of DMU. Here's how they work together:
            </p>
            <div className="relationship-steps">
              <div className="relationship-step">
                <span className="step-number">1</span>
                <span style={{ color: '#e0e0e0' }}>
                  DMU ensures that as you consume more of good A, its MU falls progressively
                </span>
              </div>
              <div className="relationship-step">
                <span className="step-number">2</span>
                <span style={{ color: '#e0e0e0' }}>
                  At some point, MU per rupee of A becomes less than MU per rupee of B
                </span>
              </div>
              <div className="relationship-step">
                <span className="step-number">3</span>
                <span style={{ color: '#e0e0e0' }}>
                  Rational consumer then shifts spending from A to B (substitution effect)
                </span>
              </div>
              <div className="relationship-step">
                <span className="step-number">4</span>
                <span style={{ color: '#e0e0e0' }}>
                  Equilibrium is reached when MU/Price is equal across all goods consumed
                </span>
              </div>
            </div>
          </div>

          {/* Formula Display */}
          <div className="formula-display">
            <h4>📐 Consumer Equilibrium Condition</h4>
            <div className="formula">
              MU<sub>x</sub>/P<sub>x</sub> = MU<sub>y</sub>/P<sub>y</sub> = MU<sub>m</sub>
            </div>
            <p className="explanation">
              Where MU<sub>m</sub> is the marginal utility of money (assumed constant).<br />
              Consumer maximizes total satisfaction when MU per rupee spent is equal across all goods.
            </p>
          </div>

          {/* Practical Example */}
          <div className="note-text" style={{ marginTop: '1.5rem' }}>
            <strong>💡 Practical Example:</strong> Suppose you have ₹100 to spend on apples (₹10 each) and oranges (₹5 each).
            <br /><br />
            <strong>Without Equi-Marginal Principle:</strong> You might buy 10 apples (₹100). But by the 10th apple, MU is very low.
            <br /><br />
            <strong>With Equi-Marginal Principle:</strong> You buy apples until MU<sub>apple</sub>/10 = MU<sub>orange</sub>/5.
            Perhaps 5 apples (₹50) + 10 oranges (₹50) gives MORE total satisfaction because you're equalizing MU per rupee!
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 5: Real-World Applications */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          <h3 className="highlight-green">🌍 Real-World Applications of DMU</h3>

          <p>
            The Law of Diminishing Marginal Utility is not just a theoretical concept — it has practical
            applications in everyday life, business decisions, and economic policy. Here are some examples:
          </p>

          <div className="applications-grid">
            {APPLICATIONS_DATA.map((app, idx) => (
              <ApplicationCard
                key={idx}
                icon={app.icon}
                title={app.title}
                description={app.description}
                color={app.color}
              />
            ))}
          </div>

          {/* Additional Applications in Economics */}
          <h4 style={{ color: '#00ffff', marginTop: '2rem' }}>
            <FaInfoCircle /> Importance in Economic Theory
          </h4>

          <div className="two-column" style={{ marginTop: '1rem' }}>
            <div className="column" style={{ borderColor: 'rgba(0, 255, 255, 0.3)' }}>
              <h4 style={{ color: '#00ffff' }}>📊 Demand Curve Derivation</h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.95rem' }}>
                The downward sloping demand curve is directly derived from the Law of DMU.
                As MU falls with each unit, consumers are willing to pay less for additional units.
                This is why demand curves slope downward from left to right.
              </p>
            </div>
            <div className="column" style={{ borderColor: 'rgba(255, 215, 0, 0.3)' }}>
              <h4 style={{ color: '#ffd700' }}>💰 Consumer Surplus</h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.95rem' }}>
                Consumer surplus exists because of DMU. You'd pay more for the first unit than
                the market price, but pay less for later units. The difference between what you'd
                pay and what you actually pay is consumer surplus.
              </p>
            </div>
            <div className="column" style={{ borderColor: 'rgba(0, 255, 0, 0.3)' }}>
              <h4 style={{ color: '#00ff00' }}>🏛️ Welfare Economics</h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.95rem' }}>
                Redistribution of income from rich to poor increases total welfare because
                MU of money is higher for the poor. This justifies progressive taxation and
                welfare programs in economic policy.
              </p>
            </div>
            <div className="column" style={{ borderColor: 'rgba(186, 85, 211, 0.3)' }}>
              <h4 style={{ color: '#ba55d3' }}>📈 Price Discrimination</h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.95rem' }}>
                Businesses use DMU to charge different prices: higher for first units,
                lower for subsequent ones (quantity discounts). Airlines charge more for
                last-minute bookings because urgency increases MU.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 6: Practice Problems */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          <h3 className="highlight-cyan">✏️ Practice Problems</h3>

          {/* Problem 1 */}
          <div className="example-box" style={{ marginTop: '1rem' }}>
            <h4>
              <span style={{ color: '#00ffff' }}>Problem 1:</span> Identify DMU in Action
            </h4>
            <div className="example-content">
              <p>
                Raj goes to a pizza restaurant. The marginal utilities he gets from eating pizza slices are:
              </p>
              <p style={{
                fontFamily: 'monospace',
                background: 'rgba(0,0,0,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                1st slice = 50 utils, 2nd = 40, 3rd = 30, 4th = 15, 5th = 5, 6th = 0 utils
              </p>

              <p style={{ marginTop: '1rem' }}><strong>Questions:</strong></p>
              <ol style={{ paddingLeft: '1.5rem', color: '#c0c0c0' }}>
                <li>Does this data follow the Law of DMU? Why?</li>
                <li>Calculate total utility from eating 4 slices.</li>
                <li>At which slice does Raj reach saturation?</li>
                <li>Should Raj eat a 7th slice if its MU is -10 utils?</li>
              </ol>

              <details style={{ marginTop: '1rem' }}>
                <summary style={{
                  cursor: 'pointer',
                  color: '#00ff00',
                  fontWeight: 'bold',
                  padding: '0.5rem',
                  background: 'rgba(0, 255, 0, 0.1)',
                  borderRadius: '5px',
                  border: '1px solid rgba(0, 255, 0, 0.3)'
                }}>
                  <FaCheckCircle style={{ marginRight: '0.5rem' }} />
                  Click to View Solution
                </summary>
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'rgba(0, 255, 0, 0.05)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #00ff00'
                }}>
                  <ol style={{ paddingLeft: '1.5rem', color: '#e0e0e0' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#00ff00' }}>Yes, it follows DMU</strong> — MU decreases with each
                      additional slice (50 → 40 → 30 → 15 → 5 → 0). This perfectly demonstrates diminishing marginal utility.
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#ffd700' }}>TU from 4 slices:</strong> 50 + 40 + 30 + 15 = <strong>135 utils</strong>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#ffff00' }}>Saturation at 6th slice</strong> where MU = 0.
                      Total satisfaction is maximum at 140 utils (50+40+30+15+5+0).
                    </li>
                    <li>
                      <strong style={{ color: '#ff6b6b' }}>No, should NOT eat 7th slice</strong> — MU is negative (-10),
                      meaning it would reduce total satisfaction from 140 to 130 utils. Eating more would cause discomfort/disutility.
                    </li>
                  </ol>
                </div>
              </details>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="example-box">
            <h4>
              <span style={{ color: '#ffd700' }}>Problem 2:</span> Application in Daily Life
            </h4>
            <div className="example-content">
              <p>
                Priya loves chocolate ice cream. On a hot summer day, she buys scoops from an ice cream parlor.
              </p>
              <p style={{
                fontFamily: 'monospace',
                background: 'rgba(0,0,0,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                MU: 1st = 60, 2nd = 45, 3rd = 25, 4th = 10, 5th = -5 utils. Each scoop costs ₹40.
              </p>

              <p style={{ marginTop: '1rem' }}><strong>Questions:</strong></p>
              <ol style={{ paddingLeft: '1.5rem', color: '#c0c0c0' }}>
                <li>Why does MU decrease with each scoop?</li>
                <li>How many scoops should Priya buy to maximize satisfaction?</li>
                <li>Explain why the 5th scoop has negative utility.</li>
              </ol>

              <details style={{ marginTop: '1rem' }}>
                <summary style={{
                  cursor: 'pointer',
                  color: '#ffd700',
                  fontWeight: 'bold',
                  padding: '0.5rem',
                  background: 'rgba(255, 215, 0, 0.1)',
                  borderRadius: '5px',
                  border: '1px solid rgba(255, 215, 0, 0.3)'
                }}>
                  <FaCheckCircle style={{ marginRight: '0.5rem' }} />
                  Click to View Solution
                </summary>
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'rgba(255, 215, 0, 0.05)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #ffd700'
                }}>
                  <ol style={{ paddingLeft: '1.5rem', color: '#e0e0e0' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#ffd700' }}>MU decreases due to:</strong>
                      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                        <li>Want for ice cream gets progressively satisfied</li>
                        <li>Feeling full after multiple scoops</li>
                        <li>Possible brain freeze or discomfort</li>
                        <li>Psychological principle — first experience is most exciting</li>
                      </ul>
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong style={{ color: '#00ff00' }}>Buy 4 scoops</strong> — These give positive MU (60, 45, 25, 10).
                      Total satisfaction = 140 utils. The 5th scoop reduces satisfaction, so stop at 4.
                    </li>
                    <li>
                      <strong style={{ color: '#ff6b6b' }}>5th scoop has negative utility because:</strong> Priya is
                      completely full and eating more causes discomfort, nausea, or feeling too cold. The ice cream
                      is no longer enjoyable — it becomes a source of disutility.
                    </li>
                  </ol>
                </div>
              </details>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="example-box">
            <h4>
              <span style={{ color: '#ba55d3' }}>Problem 3:</span> Economic Application
            </h4>
            <div className="example-content">
              <p>
                A movie ticket costs ₹200. Amit's marginal utility from watching movies in a month:
              </p>
              <p style={{
                fontFamily: 'monospace',
                background: 'rgba(0,0,0,0.3)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                1st movie = 100 utils, 2nd = 80, 3rd = 60, 4th = 40, 5th = 20 utils
              </p>
              <p style={{ marginTop: '0.5rem' }}>
                Amit values 1 util = ₹2 (meaning 100 utils = ₹200 worth of satisfaction).
              </p>

              <p style={{ marginTop: '1rem' }}><strong>Question:</strong> How many movies should Amit watch to maximize value?</p>

              <details style={{ marginTop: '1rem' }}>
                <summary style={{
                  cursor: 'pointer',
                  color: '#ba55d3',
                  fontWeight: 'bold',
                  padding: '0.5rem',
                  background: 'rgba(186, 85, 211, 0.1)',
                  borderRadius: '5px',
                  border: '1px solid rgba(186, 85, 211, 0.3)'
                }}>
                  <FaCheckCircle style={{ marginRight: '0.5rem' }} />
                  Click to View Solution
                </summary>
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: 'rgba(186, 85, 211, 0.05)',
                  borderRadius: '8px',
                  borderLeft: '3px solid #ba55d3'
                }}>
                  <p style={{ color: '#e0e0e0' }}>
                    <strong>Convert MU to rupee value:</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', color: '#c0c0c0' }}>
                    <li>1st movie: 100 utils × ₹2 = ₹200 satisfaction</li>
                    <li>2nd movie: 80 utils × ₹2 = ₹160 satisfaction</li>
                    <li>3rd movie: 60 utils × ₹2 = ₹120 satisfaction</li>
                    <li>4th movie: 40 utils × ₹2 = ₹80 satisfaction</li>
                    <li>5th movie: 20 utils × ₹2 = ₹40 satisfaction</li>
                  </ul>

                  <p style={{ color: '#e0e0e0', marginTop: '1rem' }}>
                    <strong>Analysis (Cost = ₹200 per movie):</strong>
                  </p>
                  <ul style={{ paddingLeft: '1.5rem', color: '#c0c0c0' }}>
                    <li><span style={{ color: '#00ff00' }}>1st movie:</span> ₹200 satisfaction − ₹200 cost = ₹0 (break-even, worth watching)</li>
                    <li><span style={{ color: '#ff6b6b' }}>2nd movie:</span> ₹160 satisfaction − ₹200 cost = −₹40 (loss, NOT worth it!)</li>
                  </ul>

                  <p style={{
                    color: '#00ffff',
                    marginTop: '1rem',
                    padding: '0.5rem',
                    background: 'rgba(0, 255, 255, 0.1)',
                    borderRadius: '5px'
                  }}>
                    <strong>Answer:</strong> Amit should watch only <strong>1 movie</strong> per month. Beyond that,
                    the cost exceeds the satisfaction gained due to diminishing marginal utility. This explains why
                    people don't watch movies every day even though they enjoy them!
                  </p>
                </div>
              </details>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 7: Quick Quiz / Test Your Understanding */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          <div className="highlight-card gold" style={{ margin: 0 }}>
            <div className="highlight-icon">
              <FaQuestion />
            </div>
            <div className="highlight-content">
              <h3 style={{ marginTop: 0 }}>🧠 Test Your Understanding</h3>

              <p>Answer these questions to check your grasp of the Law of Diminishing Marginal Utility:</p>

              <ol style={{
                paddingLeft: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                color: '#e0e0e0',
                marginTop: '1rem'
              }}>
                {QUIZ_QUESTIONS.map((question, idx) => (
                  <li key={idx} style={{ lineHeight: 1.6 }}>{question}</li>
                ))}
              </ol>

              <div className="note-text" style={{ marginBottom: 0, marginTop: '1.5rem' }}>
                <strong>💡 Study Tip:</strong> Practice drawing the MU-TU relationship graph from memory.
                Label the saturation point and negative utility region clearly. This is frequently asked
                in board exams and helps in understanding consumer equilibrium concepts!
              </div>

              {/* Key Formulas Summary */}
              <div style={{
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 215, 0, 0.3)'
              }}>
                <h4 style={{ color: '#ffd700', marginTop: 0, marginBottom: '0.75rem' }}>
                  📝 Key Formulas to Remember
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}>
                  <li style={{
                    fontFamily: 'monospace',
                    color: '#00ffff',
                    padding: '0.5rem',
                    background: 'rgba(0, 255, 255, 0.1)',
                    borderRadius: '5px'
                  }}>
                    <strong>TU<sub>n</sub></strong> = MU<sub>1</sub> + MU<sub>2</sub> + MU<sub>3</sub> + ... + MU<sub>n</sub>
                  </li>
                  <li style={{
                    fontFamily: 'monospace',
                    color: '#00ff00',
                    padding: '0.5rem',
                    background: 'rgba(0, 255, 0, 0.1)',
                    borderRadius: '5px'
                  }}>
                    <strong>MU<sub>n</sub></strong> = TU<sub>n</sub> − TU<sub>n-1</sub>
                  </li>
                  <li style={{
                    fontFamily: 'monospace',
                    color: '#ffff00',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 0, 0.1)',
                    borderRadius: '5px'
                  }}>
                    <strong>At Saturation:</strong> MU = 0, TU = Maximum
                  </li>
                  <li style={{
                    fontFamily: 'monospace',
                    color: '#ff6b6b',
                    padding: '0.5rem',
                    background: 'rgba(255, 107, 107, 0.1)',
                    borderRadius: '5px'
                  }}>
                    <strong>When MU {'<'} 0:</strong> TU starts decreasing (Disutility)
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTENT CARD 8: Summary */}
      {/* ================================================================== */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">

          <h3 className="highlight-green">📋 Chapter Summary</h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {/* Summary Point 1 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 200, 255, 0.05))',
              border: '1px solid rgba(0, 255, 255, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <h4 style={{ color: '#00ffff', marginTop: 0, fontSize: '1rem' }}>
                📜 The Law States
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
                As consumption of a commodity increases, marginal utility derived from each
                successive unit decreases, other things remaining constant.
              </p>
            </div>

            {/* Summary Point 2 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 200, 0, 0.05))',
              border: '1px solid rgba(0, 255, 0, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <h4 style={{ color: '#00ff00', marginTop: 0, fontSize: '1rem' }}>
                🔍 Why It Operates
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
                Due to satiability of wants, variety of uses, psychological tendency of
                diminishing excitement, and personal introspection.
              </p>
            </div>

            {/* Summary Point 3 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05))',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <h4 style={{ color: '#ffd700', marginTop: 0, fontSize: '1rem' }}>
                ⚙️ Key Assumptions
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
                Standard units, continuous consumption, ceteris paribus (other things constant),
                and reasonable quantity per unit consumed.
              </p>
            </div>

            {/* Summary Point 4 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 0, 0.1), rgba(255, 200, 0, 0.05))',
              border: '1px solid rgba(255, 255, 0, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <h4 style={{ color: '#ffff00', marginTop: 0, fontSize: '1rem' }}>
                ⚡ Saturation Point
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
                Where MU = 0 and TU is maximum. Beyond this point, MU becomes negative
                and TU starts falling (disutility begins).
              </p>
            </div>

            {/* Summary Point 5 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(255, 0, 0, 0.05))',
              border: '1px solid rgba(255, 107, 107, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <h4 style={{ color: '#ff6b6b', marginTop: 0, fontSize: '1rem' }}>
                ⚠️ Exceptions
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
                Money (for most people), hobbies/collections, addiction cases, music/reading
                appreciation, rare items, and misers.
              </p>
            </div>

            {/* Summary Point 6 */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(186, 85, 211, 0.1), rgba(147, 51, 234, 0.05))',
              border: '1px solid rgba(186, 85, 211, 0.3)',
              borderRadius: '12px',
              padding: '1.25rem'
            }}>
              <h4 style={{ color: '#ba55d3', marginTop: 0, fontSize: '1rem' }}>
                🔗 Connection to EMU
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '0.9rem', margin: 0 }}>
                Law of Equi-Marginal Utility is based on DMU. Consumer equilibrium is achieved
                when MU/Price is equal across all goods.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      {/* Navigation Footer */}
      {/* ================================================================== */}
      <div className="section-navigation">
        <div className="nav-hint">
          <FaArrowDown style={{ opacity: 0.7 }} />
          <span>Previous: Concept of Utility</span>
          <span className="separator">|</span>
          <span>Next: Consumer Equilibrium</span>
          <FaArrowDown style={{ opacity: 0.7, transform: 'rotate(180deg)' }} />
        </div>
      </div>

    </section>
  );
}

export default DiminishingMarginalUtility;