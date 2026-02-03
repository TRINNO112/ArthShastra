// SlopeMOC.jsx - Slope and Marginal Opportunity Cost
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
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
import '../lesson2-retro.css';

function SlopeMOC() {
  const [selectedSegment, setSelectedSegment] = useState('AB');

  // Production points for MOC calculation
  const productionPoints = [
    { label: 'A', wheat: 0, rice: 100 },
    { label: 'B', wheat: 20, rice: 89.4 },
    { label: 'C', wheat: 40, rice: 77.5 },
    { label: 'D', wheat: 60, rice: 63.2 },
    { label: 'E', wheat: 80, rice: 44.7 },
    { label: 'F', wheat: 100, rice: 0 }
  ];

  // Calculate MOC for each segment
  const mocSegments = [
    { id: 'AB', from: 'A', to: 'B', wheatGain: 20, riceLoss: 10.6, moc: 0.53 },
    { id: 'BC', from: 'B', to: 'C', wheatGain: 20, riceLoss: 11.9, moc: 0.60 },
    { id: 'CD', from: 'C', to: 'D', wheatGain: 20, riceLoss: 14.3, moc: 0.72 },
    { id: 'DE', from: 'D', to: 'E', wheatGain: 20, riceLoss: 18.5, moc: 0.93 },
    { id: 'EF', from: 'E', to: 'F', wheatGain: 20, riceLoss: 44.7, moc: 2.24 }
  ];

  const generatePPC = () => {
    const points = [];
    for (let i = 0; i <= 100; i += 2) {
      const t = i / 100;
      points.push({ wheat: 100 * t, rice: 100 * Math.sqrt(1 - t) });
    }
    return points;
  };

  const ppcCurve = generatePPC();
  const selectedSegmentData = mocSegments.find(s => s.id === selectedSegment);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const data = payload[0].payload;
      return (
        <div className="ppc-visualizer-tooltip">
          <p className="ppc-visualizer-tooltip-row">
            <span>Wheat:</span><strong>{data.wheat.toFixed(0)}</strong>
          </p>
          <p className="ppc-visualizer-tooltip-row">
            <span>Rice:</span><strong>{data.rice.toFixed(0)}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="lesson-section">
      <div className="section-header">SLOPE & MOC</div>

      <div className="feature-box">
        <p><strong>[MATH_ENGINE]</strong>: Calculating Marginal Opportunity Cost (Slope).</p>
      </div>

      <div className="cards-grid">

        {/* EXPLANATION */}
        <div className="card">
          <h3 style={{ borderBottom: '2px solid #000', paddingBottom: '10px' }}>THE LOGIC</h3>
          <p style={{ marginTop: '10px' }}>
            Slope = <strong>Rise / Run</strong>. <br />
            Since production of Rice goes DOWN (Negative Rise) as Wheat goes UP (Positive Run), the slope is negative.
          </p>
          <div style={{ marginTop: '20px', padding: '15px', border: '2px solid #000', backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
            MOC = |Slope| = Sacrificed / Gained
          </div>
        </div>

        {/* INTERACTIVE GRAPH */}
        <div className="card no-hover" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', fontSize: '12px' }}>
            INTERACTIVE VISUALIZER
          </div>
          <div style={{ paddingRight: '20px', height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis type="number" dataKey="wheat" domain={[0, 110]} />
                <YAxis type="number" domain={[0, 110]} />
                <Tooltip content={CustomTooltip} />
                <Line data={ppcCurve} type="monotone" dataKey="rice" stroke="#000" strokeWidth={3} dot={false} />

                {selectedSegmentData && (
                  <ReferenceLine
                    segment={[
                      { x: productionPoints.find(p => p.label === selectedSegmentData.from).wheat, y: productionPoints.find(p => p.label === selectedSegmentData.from).rice },
                      { x: productionPoints.find(p => p.label === selectedSegmentData.to).wheat, y: productionPoints.find(p => p.label === selectedSegmentData.to).rice }
                    ]}
                    stroke="#000" strokeWidth={4} strokeDasharray="5 5"
                  />
                )}

                {productionPoints.map((point) => (
                  <ReferenceDot
                    key={point.label}
                    x={point.wheat}
                    y={point.rice}
                    r={6}
                    fill={selectedSegmentData && (point.label === selectedSegmentData.from || point.label === selectedSegmentData.to) ? '#fff' : '#000'}
                    stroke="#000" strokeWidth={2}
                    label={{ value: point.label, position: 'top', fill: '#000', fontSize: 13, fontWeight: 'bold' }}
                  />
                ))}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* CONTROLS */}
      <div className="card no-hover" style={{ marginTop: '30px' }}>
        <h3>CALCULATION ENGINE</h3>
        <p style={{ marginBottom: '20px' }}>Select a movement between points to see the Math.</p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
          {mocSegments.map((segment) => (
            <button
              key={segment.id}
              onClick={() => setSelectedSegment(segment.id)}
              style={{
                padding: '10px 20px',
                backgroundColor: selectedSegment === segment.id ? '#000' : '#fff',
                color: selectedSegment === segment.id ? '#fff' : '#000',
                border: '3px solid #000',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              {segment.from} <FaArrowRight size={12} /> {segment.to}
            </button>
          ))}
        </div>

        {selectedSegmentData && (
          <div style={{ backgroundColor: '#000', color: '#fff', padding: '30px', border: '4px solid #000' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>RICE LOST (ΔY)</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff6b6b' }}>-{selectedSegmentData.riceLoss}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>WHEAT GAINED (ΔX)</div>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00ff88' }}>+{selectedSegmentData.wheatGain}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>MOC (SLOPE)</div>
                <div style={{ fontSize: '36px', fontWeight: '900', color: '#ffed4e' }}>{selectedSegmentData.moc}</div>
              </div>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}

export default SlopeMOC;