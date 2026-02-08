import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { FaLightbulb, FaMousePointer, FaCheckCircle } from 'react-icons/fa';

const GraphAnalysis = () => {
    const [selectedYear, setSelectedYear] = useState(null);

    const data = [
        { year: '2018', sales: 40, note: "Start of the period. Moderate sales." },
        { year: '2019', sales: 55, note: "Steady growth observed." },
        { year: '2020', sales: 30, note: "Sharp decline due to external factors (Pandemic implication)." },
        { year: '2021', sales: 70, note: "Strong V-shaped recovery! Highest growth rate." },
        { year: '2022', sales: 85, note: "Peak performance achieved." },
        { year: '2023', sales: 80, note: "Slight correction but stable." },
    ];

    const handlePointClick = (dataPoint) => {
        setSelectedYear(dataPoint);
    };

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">TREND ANALYSIS</h2>
            <p className="stats-subtitle">Interpret the Story Behind the Graph</p>

            <div className="stats-grid-2">
                {/* Left: Interactive Instructions & Feedback */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FaMousePointer style={{ color: '#3b82f6' }} /> Interactive Analysis
                    </h3>
                    <p style={{ color: '#cbd5e1', marginBottom: '20px' }}>
                        A graph is not just lines; it's a story. Click on the <strong>points in the graph</strong> to uncover the analysis for each year.
                    </p>

                    {selectedYear ? (
                        <div className="animate-popIn" style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #10b981' }}>
                            <h4 style={{ color: '#fff', margin: '0 0 10px 0' }}>Year: {selectedYear.year} | Sales: {selectedYear.sales} Cr</h4>
                            <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
                                <FaCheckCircle style={{ color: '#10b981', marginRight: '8px' }} />
                                {selectedYear.note}
                            </p>
                        </div>
                    ) : (
                        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '10px', textAlign: 'center', color: '#64748b' }}>
                            Click a point on the line chart to reveal insights.
                        </div>
                    )}

                    <div className="stats-badge info" style={{ marginTop: '20px' }}>
                        <FaLightbulb style={{ marginRight: '8px' }} />
                        <strong>Analyst Tip:</strong> Look for sudden "Breaks" or "Peaks". A sharp drop (like 2020) usually indicates a major event.
                    </div>
                </div>

                {/* Right: Chart */}
                <div className="stats-card" style={{ height: '400px', background: '#0f172a' }}>
                    <h4 style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '10px' }}>Company Sales (in Crores)</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                            onClick={(e) => {
                                if (e && e.activePayload) {
                                    handlePointClick(e.activePayload[0].payload);
                                }
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis
                                dataKey="year"
                                stroke="#94a3b8"
                                label={{ value: 'Year', position: 'insideBottom', offset: -15, fill: '#94a3b8' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                label={{ value: 'Sales (Cr)', angle: -90, position: 'insideLeft', offset: 15, style: { textAnchor: 'middle' }, fill: '#94a3b8' }}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                                cursor={{ stroke: '#fff', strokeWidth: 1, strokeDasharray: '4 4' }}
                            />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#f59e0b"
                                strokeWidth={4}
                                activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2, cursor: 'pointer' }}
                                dot={{ r: 6, fill: '#1e293b', stroke: '#f59e0b', strokeWidth: 2, cursor: 'pointer' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default GraphAnalysis;
