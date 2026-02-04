// AttainableUnattainable.jsx
import { useState } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label,
} from 'recharts';
import '../lesson2-core.css';

function AttainableUnattainable() {
  const [selectedPoint, setSelectedPoint] = useState('A');

  const generatePPC = (maxX, maxY) => {
    const points = [];
    for (let i = 0; i <= 80; i++) {
      const t = i / 80;
      points.push({
        x: Number((maxX * t).toFixed(2)),
        y: Number((maxY * Math.sqrt(1 - t)).toFixed(2)),
      });
    }
    return points;
  };

  const ppcCurve = generatePPC(100, 100);

  const points = [
    { id: 'A', x: 50, y: 70.7, type: 'Efficient', desc: 'On the Curve. Resources fully utilized.', color: '#16a34a' },
    { id: 'B', x: 30, y: 35, type: 'Inefficient', desc: 'Inside the Curve. Unemployment or waste.', color: '#f59e0b' },
    { id: 'C', x: 90, y: 80, type: 'Unattainable', desc: 'Outside the Curve. Impossible without growth.', color: '#ef4444' }
  ];

  const active = points.find(p => p.id === selectedPoint);

  return (
    <section>
      <h2 className="section-title">Attainable & Unattainable Combinations</h2>

      <div className="lesson-grid-2">
        <div className="lesson-card">
          <h3 className="card-title">Graph Analysis</h3>
          <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis type="number" dataKey="x" domain={[0, 110]} label={{ value: 'Good X', position: 'bottom' }} />
                <YAxis type="number" dataKey="y" domain={[0, 110]} label={{ value: 'Good Y', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line data={ppcCurve} type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={3} dot={false} />

                {points.map(p => (
                  <ReferenceDot
                    key={p.id}
                    x={p.x}
                    y={p.y}
                    r={6}
                    fill={p.color}
                    stroke="none"
                    onClick={() => setSelectedPoint(p.id)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
            {points.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPoint(p.id)}
                style={{
                  padding: '5px 10px',
                  border: `1px solid ${p.color}`,
                  color: p.color,
                  borderRadius: '4px',
                  background: selectedPoint === p.id ? `${p.color}10` : 'transparent',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Point {p.id}
              </button>
            ))}
          </div>
        </div>

        <div className="lesson-card">
          <h3 className="card-title">Analysis</h3>
          {active && (
            <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px', borderLeft: `6px solid ${active.color}` }}>
              <h4 style={{ color: active.color, fontSize: '1.2rem', marginBottom: '10px' }}>Point {active.id}: {active.type}</h4>
              <p>{active.desc}</p>
            </div>
          )}

          <div style={{ marginTop: '30px' }}>
            <h4 style={{ borderBottom: '1px solid #e2e8f0', paddingBottom: '5px', marginBottom: '10px' }}>Key Concepts</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
              <li><strong>On the Line:</strong> Full Employment. Efficient.</li>
              <li><strong>Inside the Line:</strong> Underemployment. Inefficient.</li>
              <li><strong>Outside the Line:</strong> Scarcity Constraint. Growth needed.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AttainableUnattainable;
