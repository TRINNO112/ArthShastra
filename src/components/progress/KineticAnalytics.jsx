import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaChartBar, FaChartArea, FaBolt, FaArrowUp, FaArrowDown, FaMinus, FaBraille } from 'react-icons/fa';
import './KineticAnalytics.css';

const getRank = (score) => {
    if (score >= 90) return { label: 'MASTER', tier: 'master' };
    if (score >= 70) return { label: 'PRO', tier: 'pro' };
    if (score >= 50) return { label: 'INTERMEDIATE', tier: 'intermediate' };
    if (score > 0) return { label: 'BEGINNER', tier: 'beginner' };
    return { label: 'UNRANKED', tier: 'unranked' };
};

const getBarColor = (score) => {
    if (score >= 80) return 'var(--ka-green)';
    if (score >= 50) return 'var(--ka-yellow)';
    return 'var(--ka-red)';
};

const getBarColorRaw = (score) => {
    if (score >= 80) return '#2ECC40';
    if (score >= 50) return '#FFDC00';
    return '#FF4136';
};

const getTrend = (data) => {
    if (data.length < 2) return 'neutral';
    const recent = data.slice(-3);
    const avg = recent.reduce((s, d) => s + d.score, 0) / recent.length;
    const older = data.slice(0, Math.max(1, data.length - 3));
    const olderAvg = older.reduce((s, d) => s + d.score, 0) / older.length;
    if (avg > olderAvg + 5) return 'up';
    if (avg < olderAvg - 5) return 'down';
    return 'neutral';
};

const CHART_TYPES = [
    { id: 'bar', icon: <FaChartBar />, label: 'Bar' },
    { id: 'line', icon: <FaChartLine />, label: 'Line' },
    { id: 'area', icon: <FaChartArea />, label: 'Area' },
    { id: 'scatter', icon: <FaBraille />, label: 'Scatter' },
];

const KineticAnalytics = ({ quizHistory, chartData }) => {
    const [chartType, setChartType] = useState('bar');
    const [hoveredPoint, setHoveredPoint] = useState(null);

    const microQuizzes = quizHistory.filter(q => q.quizId?.includes('micro'));
    const statsQuizzes = quizHistory.filter(q => q.quizId?.includes('stats'));

    const microBest = Math.max(0, ...microQuizzes.map(q => q.percentage || 0));
    const statsBest = Math.max(0, ...statsQuizzes.map(q => q.percentage || 0));

    const microRank = getRank(microBest);
    const statsRank = getRank(statsBest);

    const microAvg = microQuizzes.length > 0
        ? Math.round(microQuizzes.reduce((s, q) => s + (q.percentage || 0), 0) / microQuizzes.length)
        : 0;
    const statsAvg = statsQuizzes.length > 0
        ? Math.round(statsQuizzes.reduce((s, q) => s + (q.percentage || 0), 0) / statsQuizzes.length)
        : 0;

    const trend = getTrend(chartData);
    const maxScore = 100;

    // SVG dimensions for line/area chart
    const svgH = 260;
    const padX = 45;
    const padTop = 20;
    const padBot = 30;

    const buildPoints = () => {
        if (chartData.length === 0) return [];
        const usableW = Math.max(chartData.length * 72, 300) - padX * 2;
        return chartData.map((d, i) => ({
            x: padX + (chartData.length === 1 ? usableW / 2 : (i / (chartData.length - 1)) * usableW),
            y: padTop + ((maxScore - d.score) / maxScore) * (svgH - padTop - padBot),
            score: d.score,
            label: d.quizLabel,
        }));
    };

    const points = buildPoints();
    const svgW = Math.max(chartData.length * 72, 300);
    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x},${p.y}`).join(' ');
    const chartBottom = svgH - padBot;
    const areaPath = linePath
        ? `${linePath} L ${points[points.length - 1]?.x},${chartBottom} L ${points[0]?.x},${chartBottom} Z`
        : '';

    const renderChart = () => {
        if (chartData.length === 0) {
            return (
                <div className="ka-empty">
                    <FaChartBar className="ka-empty-icon" />
                    <p>Take your first quiz to see your performance chart!</p>
                </div>
            );
        }

        if (chartType === 'bar') {
            return (
                <div className="ka-bar-chart">
                    <div className="ka-chart-y-axis">
                        <span>100%</span>
                        <span>75%</span>
                        <span>50%</span>
                        <span>25%</span>
                        <span>0%</span>
                    </div>
                    <div className="ka-chart-scroll">
                        <div className="ka-chart-area" style={{ minWidth: `${Math.max(chartData.length * 72, 200)}px` }}>
                            <div className="ka-grid-lines">
                                <div className="ka-grid-line" style={{ bottom: '100%' }} />
                                <div className="ka-grid-line" style={{ bottom: '75%' }} />
                                <div className="ka-grid-line ka-grid-line-pass" style={{ bottom: '50%' }} />
                                <div className="ka-grid-line" style={{ bottom: '25%' }} />
                                <div className="ka-grid-line ka-grid-line-zero" style={{ bottom: '0%' }} />
                            </div>
                            <div className="ka-bars-container">
                                {chartData.map((d, i) => {
                                    const barPct = (d.score / maxScore) * 100;
                                    return (
                                        <div key={i} className="ka-bar-wrapper" title={`${d.name}: ${d.score}%`}>
                                            <div className="ka-bar-label-top" style={{ bottom: `calc(${barPct}% + 4px)` }}>{d.score}%</div>
                                            <motion.div
                                                className="ka-bar"
                                                initial={{ height: 0 }}
                                                animate={{ height: `${barPct}%` }}
                                                transition={{ duration: 0.8, delay: 0.1 + i * 0.04, ease: 'circOut' }}
                                                style={{ background: getBarColor(d.score) }}
                                            />
                                            <div className="ka-bar-label">{d.quizLabel}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        // Line, Area, or Scatter chart
        const showLine = chartType === 'line' || chartType === 'area';
        return (
            <div className="ka-bar-chart">
                <div className="ka-chart-scroll">
                    <svg
                        width={svgW}
                        height={svgH}
                        className="ka-svg-chart"
                        onMouseLeave={() => setHoveredPoint(null)}
                    >
                        {/* Grid lines */}
                        {[0, 25, 50, 75, 100].map(pct => (
                            <line
                                key={pct}
                                x1={padX} x2={svgW}
                                y1={padTop + ((100 - pct) / 100) * (svgH - padTop - padBot)}
                                y2={padTop + ((100 - pct) / 100) * (svgH - padTop - padBot)}
                                stroke={pct === 50 ? 'rgba(255,220,0,0.15)' : pct === 0 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)'}
                                strokeWidth="1"
                            />
                        ))}
                        {/* Y-axis vertical line */}
                        <line
                            x1={padX} x2={padX}
                            y1={padTop}
                            y2={svgH - padBot}
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="1"
                        />
                        {/* X-axis horizontal line */}
                        <line
                            x1={padX} x2={svgW}
                            y1={svgH - padBot}
                            y2={svgH - padBot}
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="1"
                        />
                        {/* Y-axis labels */}
                        {[0, 25, 50, 75, 100].map(pct => (
                            <text
                                key={`y-${pct}`}
                                x={padX - 6}
                                y={padTop + ((100 - pct) / 100) * (svgH - padTop - padBot) + 3}
                                textAnchor="end"
                                fill="var(--text-muted, #888)"
                                fontSize="8"
                                fontWeight="700"
                            >{pct}%</text>
                        ))}
                        {/* Area fill */}
                        {chartType === 'area' && areaPath && (
                            <motion.path
                                d={areaPath}
                                fill="url(#areaGradient)"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        )}
                        {/* Line connecting dots (line & area only) */}
                        {showLine && linePath && (
                            <motion.path
                                d={linePath}
                                fill="none"
                                stroke="var(--ka-green)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="drop-shadow(0 0 4px rgba(46,204,64,0.5))"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, ease: 'easeOut' }}
                            />
                        )}
                        {/* Hover crosshair line */}
                        {hoveredPoint !== null && (
                            <line
                                x1={points[hoveredPoint].x}
                                x2={points[hoveredPoint].x}
                                y1={padTop}
                                y2={chartBottom}
                                stroke="rgba(255,255,255,0.15)"
                                strokeWidth="1"
                                strokeDasharray="3,3"
                            />
                        )}
                        {/* Dots */}
                        {points.map((p, i) => {
                            const isHovered = hoveredPoint === i;
                            const dotR = chartType === 'scatter' ? 5.5 : 4.5;
                            return (
                                <g key={i}
                                    onMouseEnter={() => setHoveredPoint(i)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {/* Invisible larger hit area */}
                                    <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
                                    {/* Glow ring on hover */}
                                    {isHovered && (
                                        <circle
                                            cx={p.x} cy={p.y}
                                            r={dotR + 6}
                                            fill="none"
                                            stroke={getBarColorRaw(p.score)}
                                            strokeWidth="1.5"
                                            opacity="0.4"
                                        />
                                    )}
                                    <motion.circle
                                        cx={p.x} cy={p.y}
                                        r={isHovered ? dotR + 2 : dotR}
                                        fill={getBarColorRaw(p.score)}
                                        stroke="#14141e"
                                        strokeWidth="2"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.3 + i * 0.06 }}
                                        style={{ filter: `drop-shadow(0 0 ${isHovered ? '8' : '4'}px ${getBarColorRaw(p.score)})` }}
                                    />
                                    {/* Tooltip box on hover */}
                                    {isHovered && (
                                        <g>
                                            <rect
                                                x={p.x - 40} y={p.y - 38}
                                                width="80" height="24"
                                                rx="3"
                                                fill="rgba(20,20,30,0.95)"
                                                stroke={getBarColorRaw(p.score)}
                                                strokeWidth="1.5"
                                            />
                                            <text
                                                x={p.x} y={p.y - 22}
                                                textAnchor="middle"
                                                fill="#fff"
                                                fontSize="10"
                                                fontWeight="700"
                                            >{p.label}: {p.score}%</text>
                                        </g>
                                    )}
                                    {/* Bottom label (quiz name) - in padBot zone */}
                                    <text
                                        x={p.x} y={chartBottom + 14}
                                        textAnchor="middle"
                                        fill={isHovered ? '#fff' : 'var(--text-muted, #888)'}
                                        fontSize="8"
                                        fontWeight="700"
                                    >{p.label}</text>
                                </g>
                            );
                        })}
                        <defs>
                            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgba(46,204,64,0.3)" />
                                <stop offset="100%" stopColor="rgba(46,204,64,0)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        );
    };

    return (
        <div className="ka-container">
            {/* Subject Cards Row - stacked on top */}
            <div className="ka-subjects-row">
                <motion.div
                    className="ka-subject-card ka-micro"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="ka-subject-header">
                        <div className="ka-subject-icon"><FaChartLine /></div>
                        <h3>Microeconomics</h3>
                    </div>
                    <div className="ka-subject-stats">
                        <div className="ka-stat-row">
                            <span className="ka-stat-key">Best</span>
                            <span className="ka-stat-val" style={{ color: getBarColor(microBest) }}>{microBest}%</span>
                        </div>
                        <div className="ka-stat-row">
                            <span className="ka-stat-key">Avg</span>
                            <span className="ka-stat-val">{microAvg}%</span>
                        </div>
                        <div className="ka-stat-row">
                            <span className="ka-stat-key">Attempts</span>
                            <span className="ka-stat-val">{microQuizzes.length}</span>
                        </div>
                    </div>
                    <div className="ka-progress-track">
                        <motion.div
                            className="ka-progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${microBest}%` }}
                            transition={{ duration: 1.2, ease: 'circOut' }}
                            style={{ background: getBarColor(microBest) }}
                        />
                    </div>
                    <div className={`ka-rank ka-rank-${microRank.tier}`}>
                        <FaBolt /> {microRank.label}
                    </div>
                </motion.div>

                <motion.div
                    className="ka-subject-card ka-stats"
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <div className="ka-subject-header">
                        <div className="ka-subject-icon"><FaChartBar /></div>
                        <h3>Statistics</h3>
                    </div>
                    <div className="ka-subject-stats">
                        <div className="ka-stat-row">
                            <span className="ka-stat-key">Best</span>
                            <span className="ka-stat-val" style={{ color: getBarColor(statsBest) }}>{statsBest}%</span>
                        </div>
                        <div className="ka-stat-row">
                            <span className="ka-stat-key">Avg</span>
                            <span className="ka-stat-val">{statsAvg}%</span>
                        </div>
                        <div className="ka-stat-row">
                            <span className="ka-stat-key">Attempts</span>
                            <span className="ka-stat-val">{statsQuizzes.length}</span>
                        </div>
                    </div>
                    <div className="ka-progress-track">
                        <motion.div
                            className="ka-progress-fill"
                            initial={{ width: 0 }}
                            animate={{ width: `${statsBest}%` }}
                            transition={{ duration: 1.2, ease: 'circOut' }}
                            style={{ background: getBarColor(statsBest) }}
                        />
                    </div>
                    <div className={`ka-rank ka-rank-${statsRank.tier}`}>
                        <FaBolt /> {statsRank.label}
                    </div>
                </motion.div>
            </div>

            {/* Chart Section - below the cards */}
            <motion.div
                className="ka-chart-section"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
            >
                <div className="ka-chart-header">
                    <h3>Quiz Performance</h3>
                    <div className="ka-chart-controls">
                        <div className="ka-chart-switcher">
                            {CHART_TYPES.map(ct => (
                                <button
                                    key={ct.id}
                                    className={`ka-chart-type-btn ${chartType === ct.id ? 'active' : ''}`}
                                    onClick={() => setChartType(ct.id)}
                                    title={ct.label}
                                >
                                    {ct.icon}
                                </button>
                            ))}
                        </div>
                        <div className={`ka-trend ka-trend-${trend}`}>
                            {trend === 'up' && <><FaArrowUp /> Improving</>}
                            {trend === 'down' && <><FaArrowDown /> Declining</>}
                            {trend === 'neutral' && <><FaMinus /> Steady</>}
                        </div>
                    </div>
                </div>

                {renderChart()}

                <div className="ka-chart-legend">
                    <span className="ka-legend-item"><span className="ka-legend-dot" style={{ background: 'var(--ka-green)' }} /> 80%+</span>
                    <span className="ka-legend-item"><span className="ka-legend-dot" style={{ background: 'var(--ka-yellow)' }} /> 50-79%</span>
                    <span className="ka-legend-item"><span className="ka-legend-dot" style={{ background: 'var(--ka-red)' }} /> Below 50%</span>
                </div>
            </motion.div>
        </div>
    );
};

export default KineticAnalytics;
