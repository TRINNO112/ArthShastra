// PPCVisualizer.jsx
import { useState, useMemo } from 'react';
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Label
} from 'recharts';
import { FaInfoCircle } from 'react-icons/fa';
import '../lesson2-core.css';

function PPCVisualizer() {
  const [scenario, setScenario] = useState('normal');

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

  const { curve, transformedCurve, domain } = useMemo(() => {
    const base = generatePPC(100, 100);
    let trans = null;
    let d = 120;

    switch (scenario) {
      case 'shift-right': trans = generatePPC(130, 130); d = 150; break;
      case 'shift-left': trans = generatePPC(70, 70); d = 120; break;
      case 'rotate-x': trans = generatePPC(140, 100); d = 160; break;
      case 'rotate-y': trans = generatePPC(100, 140); d = 160; break;
      default: break;
    }
    return { curve: base, transformedCurve: trans, domain: d };
  }, [scenario]);

  return (
    <div style={{ padding: '20px' }}>
      {/* Controls */}
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button className={`btn-toggle ${scenario === 'normal' ? 'active' : ''}`} onClick={() => setScenario('normal')}>Standard</button>
        <button className={`btn-toggle ${scenario === 'shift-right' ? 'active' : ''}`} onClick={() => setScenario('shift-right')}>Growth (Shift Right)</button>
        <button className={`btn-toggle ${scenario === 'shift-left' ? 'active' : ''}`} onClick={() => setScenario('shift-left')}>Decline (Shift Left)</button>
        <button className={`btn-toggle ${scenario === 'rotate-x' ? 'active' : ''}`} onClick={() => setScenario('rotate-x')}>Tech (Wheat)</button>
        <button className={`btn-toggle ${scenario === 'rotate-y' ? 'active' : ''}`} onClick={() => setScenario('rotate-y')}>Tech (Rice)</button>
      </div>

      {/* Graph */}
      <div style={{ height: '400px', width: '100%', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis type="number" dataKey="x" domain={[0, domain]} label={{ value: 'Wheat', position: 'bottom', offset: 0 }} />
            <YAxis type="number" domain={[0, domain]} label={{ value: 'Rice', angle: -90, position: 'insideLeft' }} />
            <Tooltip />

            {/* Base Curve */}
            <Line
              data={curve}
              type="monotone"
              dataKey="y"
              stroke={scenario === 'normal' ? '#2563eb' : '#cbd5e1'}
              strokeWidth={3}
              dot={false}
              name="PPC"
            />

            {/* Transformed Curve */}
            {transformedCurve && (
              <Line
                data={transformedCurve}
                type="monotone"
                dataKey="y"
                stroke="#16a34a"
                strokeWidth={3}
                dot={false}
                name="New PPC"
                strokeDasharray="5 5"
              />
            )}

            {/* Key Points (Only on Normal) */}
            {scenario === 'normal' && (
              <>
                <ReferenceDot x={50} y={70.7} r={6} fill="#16a34a" stroke="none" />
                <ReferenceDot x={30} y={35} r={6} fill="#f59e0b" stroke="none" />
                <ReferenceDot x={90} y={90} r={6} fill="#ef4444" stroke="none" />
              </>
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Legend / Info */}
      <div style={{ marginTop: '15px', display: 'flex', gap: '20px', fontSize: '0.9rem', color: '#64748b', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#16a34a' }}></span> Efficient
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></span> Inefficient
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span> Unattainable
        </div>
      </div>
    </div>
  );
}

export default PPCVisualizer;