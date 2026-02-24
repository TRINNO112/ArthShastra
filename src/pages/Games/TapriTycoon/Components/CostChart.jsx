// CostChart.jsx — Pure SVG cost graph for Tapri Tycoon
// Props: { history, currentDay }
// No dispatch — pure display component

const W = 420;
const H = 280;
const PAD = { top: 20, right: 20, bottom: 40, left: 55 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;
const MAX_DAYS = 7;

function scaleX(day) {
  // day 1..7 → x positions
  return PAD.left + ((day - 1) / (MAX_DAYS - 1)) * PLOT_W;
}

function scaleY(val, maxVal) {
  const safeMax = maxVal || 1;
  return PAD.top + PLOT_H - (val / safeMax) * PLOT_H;
}

function toPolyline(points, maxVal) {
  if (points.length === 0) return '';
  return points.map(([day, val]) => `${scaleX(day)},${scaleY(val, maxVal)}`).join(' ');
}

export default function CostChart({ history, currentDay }) {
  if (!history || history.length === 0) {
    return (
      <div className="tt-chart-empty">
        <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>📊</div>
        <div>Play Day 1 to see your costs!</div>
        <div style={{ fontSize: '0.85rem', marginTop: '6px', opacity: 0.6 }}>
          The graph updates after each day ends.
        </div>
      </div>
    );
  }

  // Build series arrays: [[day, value], ...]
  const fcPoints  = history.map(h => [h.day, h.fc]);
  const vcPoints  = history.map(h => [h.day, h.vc]);
  const tcPoints  = history.map(h => [h.day, h.tc]);
  const revPoints = history.map(h => [h.day, h.revenue]);

  // Max value for Y scale (with 15% headroom)
  const allVals = history.flatMap(h => [h.fc, h.vc, h.tc, h.revenue]);
  const maxVal  = Math.max(...allVals) * 1.15;

  // Y gridlines
  const yTicks = [0, 0.25, 0.5, 0.75, 1.0].map(t => Math.round(t * maxVal));

  // X ticks: every day
  const xTicks = Array.from({ length: MAX_DAYS }, (_, i) => i + 1);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      style={{ width: '100%', height: 'auto', display: 'block' }}
      aria-label="Cost chart"
    >
      <defs>
        {/* Graph paper background */}
        <pattern id="tt-graph-paper" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(92,64,14,0.07)" strokeWidth="0.5" />
        </pattern>
        {/* Clip path for plot area */}
        <clipPath id="tt-plot-clip">
          <rect x={PAD.left} y={PAD.top} width={PLOT_W} height={PLOT_H} />
        </clipPath>
      </defs>

      {/* Graph paper fill */}
      <rect x={PAD.left} y={PAD.top} width={PLOT_W} height={PLOT_H}
        fill="url(#tt-graph-paper)" />

      {/* Plot area border */}
      <rect x={PAD.left} y={PAD.top} width={PLOT_W} height={PLOT_H}
        fill="none" stroke="rgba(92,64,14,0.15)" strokeWidth="1" />

      {/* Y gridlines + labels */}
      {yTicks.map((tick, i) => {
        const y = scaleY(tick, maxVal);
        return (
          <g key={i}>
            <line x1={PAD.left} y1={y} x2={PAD.left + PLOT_W} y2={y}
              stroke="rgba(92,64,14,0.1)" strokeWidth="1" strokeDasharray="3,3" />
            <text x={PAD.left - 6} y={y + 4}
              textAnchor="end" fontSize="9" fill="#92400E" fontFamily="JetBrains Mono, monospace">
              {tick >= 1000 ? `₹${(tick / 1000).toFixed(1)}k` : `₹${tick}`}
            </text>
          </g>
        );
      })}

      {/* X axis labels */}
      {xTicks.map(day => {
        const x = scaleX(day);
        const done = day < currentDay;
        return (
          <g key={day}>
            <line x1={x} y1={PAD.top} x2={x} y2={PAD.top + PLOT_H}
              stroke="rgba(92,64,14,0.07)" strokeWidth="1" />
            <text x={x} y={PAD.top + PLOT_H + 14}
              textAnchor="middle" fontSize="10" fill={done ? '#92400E' : '#C4A17A'}
              fontFamily="JetBrains Mono, monospace">
              D{day}
            </text>
          </g>
        );
      })}

      {/* ── Data Lines ── */}
      <g clipPath="url(#tt-plot-clip)">
        {/* Revenue — green solid */}
        <polyline
          key={`rev-${history.length}`}
          points={toPolyline(revPoints, maxVal)}
          fill="none"
          stroke="#22C55E"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="tt-chart-line-animate"
        />

        {/* TC — red solid */}
        <polyline
          key={`tc-${history.length}`}
          points={toPolyline(tcPoints, maxVal)}
          fill="none"
          stroke="#EF4444"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="tt-chart-line-animate"
        />

        {/* VC — orange solid */}
        <polyline
          key={`vc-${history.length}`}
          points={toPolyline(vcPoints, maxVal)}
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="tt-chart-line-animate"
        />

        {/* FC — blue dashed (ALWAYS FLAT at 250 base) */}
        <polyline
          key={`fc-${history.length}`}
          points={toPolyline(fcPoints, maxVal)}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeDasharray="6,4"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="tt-chart-line-animate"
        />

        {/* Data point dots */}
        {history.map(h => (
          <g key={h.day}>
            <circle cx={scaleX(h.day)} cy={scaleY(h.fc, maxVal)}    r="3.5" fill="#3B82F6" />
            <circle cx={scaleX(h.day)} cy={scaleY(h.vc, maxVal)}    r="3.5" fill="#F97316" />
            <circle cx={scaleX(h.day)} cy={scaleY(h.tc, maxVal)}    r="3.5" fill="#EF4444" />
            <circle cx={scaleX(h.day)} cy={scaleY(h.revenue, maxVal)} r="3.5" fill="#22C55E" />
          </g>
        ))}
      </g>

      {/* FC annotation label */}
      {history.length > 0 && (
        <text
          x={scaleX(history[0].day) + 6}
          y={scaleY(history[0].fc, maxVal) - 6}
          fontSize="9.5"
          fill="#3B82F6"
          fontFamily="Caveat, cursive"
          fontWeight="700"
        >
          ₹250 — always flat!
        </text>
      )}

      {/* Axis labels */}
      <text x={PAD.left - 40} y={PAD.top + PLOT_H / 2}
        transform={`rotate(-90, ${PAD.left - 40}, ${PAD.top + PLOT_H / 2})`}
        textAnchor="middle" fontSize="10" fill="#92400E" fontFamily="Caveat, cursive" fontWeight="700">
        Amount (₹)
      </text>
      <text x={PAD.left + PLOT_W / 2} y={H - 4}
        textAnchor="middle" fontSize="10" fill="#92400E" fontFamily="Caveat, cursive" fontWeight="700">
        Day
      </text>
    </svg>
  );
}
