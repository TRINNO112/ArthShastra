// TabularRepresentation.jsx
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
} from 'recharts';
import '../lesson2-core.css';

function TabularRepresentation() {
  const [selectedRow, setSelectedRow] = useState(null);

  const productionSchedule = [
    { label: 'A', wheat: 0, rice: 100, cost: '-' },
    { label: 'B', wheat: 20, rice: 89, cost: '10.6' },
    { label: 'C', wheat: 40, rice: 77, cost: '11.9' },
    { label: 'D', wheat: 60, rice: 63, cost: '14.3' },
    { label: 'E', wheat: 80, rice: 44, cost: '18.5' },
    { label: 'F', wheat: 100, rice: 0, cost: '44.7' }
  ];

  const generateData = () => {
    const d = [];
    for (let i = 0; i <= 100; i += 5) {
      d.push({ wheat: i, rice: 100 * Math.sqrt(1 - (i / 100)) });
    }
    return d;
  };

  return (
    <section>
      <h2 className="section-title">Production Possibility Schedule</h2>

      <div className="lesson-grid-2">
        <div className="lesson-card">
          <h3 className="card-title">Production Data</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Point</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Wheat</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>Rice</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>MOC</th>
                </tr>
              </thead>
              <tbody>
                {productionSchedule.map((row) => (
                  <tr
                    key={row.label}
                    onClick={() => setSelectedRow(row.label)}
                    style={{
                      cursor: 'pointer',
                      background: selectedRow === row.label ? '#eff6ff' : 'transparent',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    <td style={{ padding: '12px', fontWeight: 'bold' }}>{row.label}</td>
                    <td style={{ padding: '12px' }}>{row.wheat}</td>
                    <td style={{ padding: '12px' }}>{row.rice}</td>
                    <td style={{ padding: '12px', color: '#64748b' }}>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lesson-card">
          <h3 className="card-title">Visual Plot</h3>
          <div className="graph-container">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis type="number" dataKey="wheat" domain={[0, 110]} />
                <YAxis type="number" domain={[0, 110]} />
                <Tooltip />
                <Line data={generateData()} type="monotone" dataKey="rice" stroke="#2563eb" strokeWidth={2} dot={false} />
                {productionSchedule.map((p) => (
                  <ReferenceDot
                    key={p.label}
                    x={p.wheat}
                    y={p.rice}
                    r={5}
                    fill={selectedRow === p.label ? '#2563eb' : '#94a3b8'}
                    stroke="none"
                  />
                ))}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabularRepresentation;
