import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, ReferenceLine } from 'recharts';
import { FaChartLine } from 'react-icons/fa';
import './component.css';

const productionData = [
  { labor: 0, tp: 0, ap: null, mp: null },
  { labor: 1, tp: 10, ap: 10, mp: 10 },
  { labor: 2, tp: 25, ap: 12.5, mp: 15 },
  { labor: 3, tp: 36, ap: 12, mp: 11 },
  { labor: 4, tp: 44, ap: 11, mp: 8 },
  { labor: 5, tp: 48, ap: 9.6, mp: 4 },
  { labor: 6, tp: 48, ap: 8, mp: 0 },
  { labor: 7, tp: 45, ap: 6.4, mp: -3 },
  { labor: 8, tp: 40, ap: 5, mp: -5 },
];

function ReturnsToFactorChart() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 7</span>
        <h2 className="section-title-lesson">Returns to Factor Graph</h2>
        <p className="section-subtitle-lesson">TP (Inverted U), AP (Bell), MP (Hill → Negative) with stage regions</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-gold">
            <FaChartLine /> TP, AP, MP Curves <FaChartLine />
          </h3>
          <p>Key points: MP max at L=2 (inflection), AP max L=2 (intersection), MP=0 L=6. Stages shaded.</p>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="labor" label={{ value: 'Labor Units (L)', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'Product', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tp" stroke="#00ff88" strokeWidth={3} name="Total Product (TP)" dot={{ fill: '#00ff88', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="ap" stroke="#ffd700" strokeWidth={3} name="Average Product (AP)" dot={{ fill: '#ffd700', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="mp" stroke="#ff6b6b" strokeWidth={3} name="Marginal Product (MP)" dot={{ fill: '#ff6b6b', strokeWidth: 2 }} connectNulls={false} />
                {/* Stage Regions */}
                <ReferenceLine x={2} stroke="#00ff88" strokeDasharray="5 5" label="MP Max" />
                <ReferenceLine x={6} stroke="#ffd700" strokeDasharray="5 5" label="MP=0" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-legend">
            <div className="legend-item tp">TP: Inverted U - Max output</div>
            <div className="legend-item ap">AP: Bell - Avg per worker</div>
            <div className="legend-item mp">MP: Hill → Neg - Additional worker</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReturnsToFactorChart;
