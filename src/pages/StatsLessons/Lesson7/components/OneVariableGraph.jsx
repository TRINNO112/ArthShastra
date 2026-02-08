import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaInfoCircle } from 'react-icons/fa';

const OneVariableGraph = () => {
    // Data: India's Population (Approx in Crores)
    const data = [
        { year: '1951', pop: 36.1 },
        { year: '1961', pop: 43.9 },
        { year: '1971', pop: 54.8 },
        { year: '1981', pop: 68.3 },
        { year: '1991', pop: 84.6 },
        { year: '2001', pop: 102.8 },
        { year: '2011', pop: 121.0 }
    ];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">ONE VARIABLE GRAPH</h2>
            <p className="stats-subtitle">Example: India's Population Growth</p>

            <div className="stats-grid-2">
                {/* Left: Info */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>Interpreting the Graph</h3>
                    <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>
                        This is the simplest form of an Arithmetic Line Graph. We plot only <strong>one variable</strong> (Population) against time.
                    </p>

                    <ul style={{ color: '#cbd5e1', lineHeight: '1.8' }}>
                        <li><strong>Trend:</strong> Notice the continuous upward slope.</li>
                        <li><strong>Steepness:</strong> A steeper line indicates faster growth.</li>
                        <li><strong>Points:</strong> Each dot represents the census value for that decade.</li>
                    </ul>

                    <div className="stats-badge warning" style={{ marginTop: '20px' }}>
                        <FaInfoCircle style={{ marginRight: '8px' }} />
                        <strong>Observation:</strong> Population has more than tripled from 1951 to 2011!
                    </div>
                </div>

                {/* Right: Chart */}
                <div className="stats-card" style={{ height: '400px', background: '#0f172a' }}>
                    <h4 style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '10px' }}>India's Population Line Graph</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
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
                                    value: 'Population (Crores)',
                                    angle: -90,
                                    position: 'insideLeft',
                                    offset: 10,
                                    style: { textAnchor: 'middle' },
                                    fill: '#94a3b8'
                                }}
                                domain={[0, 140]}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                                formatter={(value) => [`${value} Cr`, 'Population']}
                            />
                            <Line
                                type="monotone"
                                dataKey="pop"
                                stroke="#10b981"
                                strokeWidth={3}
                                dot={{ r: 5, fill: '#fff', strokeWidth: 2 }}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default OneVariableGraph;
