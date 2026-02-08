import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { FaToggleOn, FaToggleOff, FaExclamationTriangle } from 'react-icons/fa';

const TwoVariableGraph = () => {
    const [useFalseBase, setUseFalseBase] = useState(false);

    // Data: Imports vs Exports (values > 500 to justify false base)
    const data = [
        { year: '2015', exports: 520, imports: 510 },
        { year: '2016', exports: 540, imports: 530 },
        { year: '2017', exports: 560, imports: 580 },
        { year: '2018', exports: 580, imports: 600 },
        { year: '2019', exports: 550, imports: 620 },
        { year: '2020', exports: 530, imports: 590 },
    ];

    // Domain configuration based on toggle
    const yDomain = useFalseBase ? [500, 640] : [0, 640];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">TWO VARIABLE GRAPH & FALSE BASE LINE</h2>
            <p className="stats-subtitle">Comparing Datasets with High Values</p>

            <div className="stats-grid-2">
                {/* Left: Controls & Theory */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>False Base Line Concept</h3>

                    <div className="stats-toggle-container" style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ color: '#cbd5e1' }}>Activate False Base Line?</span>
                            <button
                                onClick={() => setUseFalseBase(!useFalseBase)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem', color: useFalseBase ? '#10b981' : '#64748b', display: 'flex' }}
                            >
                                {useFalseBase ? <FaToggleOn /> : <FaToggleOff />}
                            </button>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: useFalseBase ? '#10b981' : '#94a3b8' }}>
                            {useFalseBase
                                ? "Active! Y-Axis starts at 500. Space is saved, variations are clearer."
                                : "Inactive. Y-Axis starts at 0. Line is flattened at top."}
                        </p>
                    </div>

                    <div className="stats-badge warning">
                        <FaExclamationTriangle style={{ marginRight: '8px' }} />
                        <strong>Why use it?</strong>
                        <p style={{ margin: '10px 0 0 0', lineHeight: '1.5' }}>
                            When values are very high (e.g., starting at 500) but variations are small, starting from 0 wastes space.
                            A "kink" or "break" on the Y-axis allows us to zoom in on the relevant range.
                        </p>
                    </div>
                </div>

                {/* Right: Chart */}
                <div className="stats-card" style={{ height: '400px', background: '#0f172a' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis
                                dataKey="year"
                                stroke="#94a3b8"
                                label={{ value: 'Year', position: 'insideBottom', offset: -15, fill: '#94a3b8' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                label={{
                                    value: 'Value ($ Million)',
                                    angle: -90,
                                    position: 'insideLeft',
                                    offset: 5,
                                    style: { textAnchor: 'middle' },
                                    fill: '#94a3b8'
                                }}
                                domain={yDomain}
                                allowDataOverflow={true} // Ensures clean cut
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                            />
                            <Legend verticalAlign="top" height={36} />

                            <Line
                                type="monotone"
                                dataKey="exports"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                name="Exports"
                                dot={{ r: 4 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="imports"
                                stroke="#ec4899"
                                strokeWidth={3}
                                name="Imports"
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#64748b', marginTop: '10px' }}>
                        {useFalseBase ? "Graph with False Base Line (Kink)" : "Graph starting from Absolute Zero"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TwoVariableGraph;
