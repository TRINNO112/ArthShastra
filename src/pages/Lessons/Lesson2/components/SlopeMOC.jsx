// SlopeMOC.jsx
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
  ReferenceLine,
} from 'recharts';
import '../lesson2-core.css';

function SlopeMOC() {
  const [selectedSegment, setSelectedSegment] = useState('AB');

  // MOC Data
  const segments = [
    { id: 'AB', from: 'A', to: 'B', loss: 10.6, gain: 20, moc: 0.53 },
    { id: 'BC', from: 'B', to: 'C', loss: 11.9, gain: 20, moc: 0.60 },
    { id: 'CD', from: 'C', to: 'D', loss: 14.3, gain: 20, moc: 0.72 },
    { id: 'DE', from: 'D', to: 'E', loss: 18.5, gain: 20, moc: 0.93 },
    { id: 'EF', from: 'E', to: 'F', loss: 44.7, gain: 20, moc: 2.24 }
  ];

  const generateData = () => {
    const d = [];
    for (let i = 0; i <= 100; i += 2) {
      d.push({ x: i, y: 100 * Math.sqrt(1 - (i / 100)) });
    }
    return d;
  };
  const data = generateData();
  const current = segments.find(s => s.id === selectedSegment);

  return (
    <section>
      {/* Removed inline style to allow CSS class to take effect */}
      <h2 className="section-title">Slope & Marginal Opportunity Cost</h2>

      <div className="lesson-grid-2">
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #2563eb' }}>
          <div style={{ background: '#2563eb', color: '#fff', display: 'inline-block', padding: '5px 15px', fontWeight: '900', border: '3px solid #000', transform: 'rotate(-2deg)', marginBottom: '15px' }}>
            THE CONCEPT
          </div>
          <h3 className="card-title" style={{ fontSize: '1.5rem', color: '#000' }}>Rate of Sacrifice</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#000' }}>
            The slope of PPC is the <strong style={{ background: '#facc15', padding: '0 5px', border: '2px solid #000' }}>Rate of Sacrifice</strong>.
            As we move down the curve, the slope gets <em>STEEPER</em>.
            <br /><br />
            Meaning? We sacrifice <strong>MORE Rice</strong> to get the <strong>SAME Wheat</strong>.
          </p>

          <div className="results-box" style={{ background: '#fffbeb', border: '3px solid #000', boxShadow: '4px 4px 0px #000', transform: 'rotate(1deg)' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#555', textTransform: 'uppercase' }}>Magic Formula</div>
            <div className="results-value-big" style={{ fontSize: '2rem', color: '#000', textShadow: '2px 2px 0px #cbd5e1' }}>
              Slope = ΔLoss / ΔGain
            </div>
          </div>

          <h3 className="card-title" style={{ marginTop: '30px', borderTop: '3px dashed #000', paddingTop: '20px', color: '#000' }}>
            Try It Yourself!
          </h3>
          <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#000' }}>Select a move:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
            {segments.map(s => (
              <button
                key={s.id}
                className={`btn-toggle ${selectedSegment === s.id ? 'active' : ''}`}
                onClick={() => setSelectedSegment(s.id)}
                style={{
                  border: '3px solid #000',
                  fontWeight: 'bold',
                  background: selectedSegment === s.id ? '#facc15' : '#fff',
                  boxShadow: selectedSegment === s.id ? '4px 4px 0px #000' : '2px 2px 0px #cbd5e1',
                  transform: selectedSegment === s.id ? 'translate(-2px, -2px)' : 'none',
                  color: '#000'
                }}
              >
                {s.from} → {s.to}
              </button>
            ))}
          </div>

          {/* Current Segment Stats - FORCE WHITE TEXT ON BLACK BACKGROUND */}
          {current && (
            <div style={{ marginTop: '20px', padding: '15px', background: '#000', color: '#fff', border: '3px solid #000', borderRadius: '0px', boxShadow: '6px 6px 0px #ef4444' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ color: '#fff' }}>Sacrifice (Rice):</span>
                <strong style={{ color: '#ef4444' }}>{current.loss} units</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ color: '#fff' }}>Gain (Wheat):</span>
                <strong style={{ color: '#22c55e' }}>{current.gain} units</strong>
              </div>
              <div style={{ borderTop: '2px dashed #555', paddingTop: '10px', fontSize: '1.4rem', fontWeight: '900', textAlign: 'center', color: '#facc15' }}>
                MOC = {current.moc}
              </div>
            </div>
          )}
        </div>

        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #000' }}>
          <div style={{ background: '#000', color: '#fff', display: 'inline-block', padding: '5px 15px', fontWeight: '900', border: '3px solid #000', transform: 'rotate(1deg)', marginBottom: '15px' }}>
            VISUALIZER
          </div>
          <div className="graph-container" style={{ border: '3px solid #000' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#cbd5e1" />
                <XAxis type="number" dataKey="x" domain={[0, 110]} label={{ value: 'Wheat (X)', position: 'bottom', fill: '#000', fontWeight: 'bold' }} stroke="#000" tick={{ fill: '#000' }} />
                <YAxis type="number" dataKey="y" domain={[0, 110]} label={{ value: 'Rice (Y)', angle: -90, position: 'insideLeft', fill: '#000', fontWeight: 'bold' }} stroke="#000" tick={{ fill: '#000' }} />
                <Tooltip contentStyle={{ border: '3px solid #000', boxShadow: '4px 4px 0px #000', borderRadius: '0px', color: '#000' }} itemStyle={{ color: '#000' }} labelStyle={{ color: '#000' }} />
                <Line data={data} type="monotone" dataKey="y" stroke="#2563eb" strokeWidth={5} dot={false} strokeDasharray="5 5" />
                <ReferenceLine y={0} stroke="#000" strokeWidth={2} />
                <ReferenceLine x={0} stroke="#000" strokeWidth={2} />

                {/* Visualizing the Move dynamically */}
                {current && (() => {
                  // Calculate coordinates for visualization
                  let x1 = 0, x2 = 0;
                  if (current.id === 'AB') { x1 = 0; x2 = 20; }
                  else if (current.id === 'BC') { x1 = 20; x2 = 40; }
                  else if (current.id === 'CD') { x1 = 40; x2 = 60; }
                  else if (current.id === 'DE') { x1 = 60; x2 = 80; }
                  else if (current.id === 'EF') { x1 = 80; x2 = 100; }

                  const y1 = 100 * Math.sqrt(1 - (x1 / 100));
                  const y2 = 100 * Math.sqrt(1 - (x2 / 100));

                  return (
                    <>
                      <ReferenceDot x={x1} y={y1} r={6} fill="#ef4444" stroke="#000" strokeWidth={2} />
                      <ReferenceDot x={x2} y={y2} r={6} fill="#22c55e" stroke="#000" strokeWidth={2} />
                      {/* Connecting Line indicating the slope segment */}
                      <Line
                        data={[{ x: x1, y: y1 }, { x: x2, y: y2 }]}
                        type="linear"
                        dataKey="y"
                        stroke="#000"
                        strokeWidth={2}
                        dot={false}
                        isActive={false} // Prevent animation glitch
                        isAnimationActive={false}
                      />
                    </>
                  );
                })()}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SlopeMOC;