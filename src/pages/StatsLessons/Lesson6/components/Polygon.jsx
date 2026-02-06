import React, { useState } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaWaveSquare, FaBezierCurve } from 'react-icons/fa';

const Polygon = () => {
    const [chartType, setChartType] = useState('polygon'); // 'polygon' (Linear) or 'curve' (Smooth)
    const [showHistogram, setShowHistogram] = useState(true);

    // Data for Numeric Axis (Midpoints)
    const data = [
        { mid: 0, freq: 0, range: 'Start' }, // Hypothetical Start (Closed Loop)
        { mid: 5, freq: 5, range: '0-10' },
        { mid: 15, freq: 12, range: '10-20' },
        { mid: 25, freq: 25, range: '20-30' },
        { mid: 35, freq: 15, range: '30-40' },
        { mid: 45, freq: 10, range: '40-50' },
        { mid: 55, freq: 4, range: '50-60' },
        { mid: 60, freq: 0, range: 'End' }   // Hypothetical End (Closed Loop)
    ];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">FREQUENCY POLYGON & CURVE</h2>
            <p className="stats-subtitle">Connecting the mid-points</p>

            <div className="stats-grid-2">
                {/* Left: Controls */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>Construction Rules</h3>
                    <ul style={{ color: '#cbd5e1', lineHeight: '1.8', paddingLeft: '20px', marginBottom: '30px' }}>
                        <li>Plot the <strong>Mid-points</strong> of class intervals.</li>
                        <li>Join these points with straight lines (Polygon) or freehand curve (Frequency Curve).</li>
                        <li><strong>Important:</strong> The polygon should close at the base (X-axis) by extending to the mid-points of imaginary previous and next classes.</li>
                    </ul>

                    <div className="stats-toggle-container" style={{ background: '#1e293b', padding: '20px', borderRadius: '15px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ color: '#94a3b8', display: 'block', marginBottom: '10px' }}>Chart Style:</label>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <button
                                    className={`stats-btn ${chartType === 'polygon' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                    onClick={() => setChartType('polygon')}
                                >
                                    <FaWaveSquare /> Polygon
                                </button>
                                <button
                                    className={`stats-btn ${chartType === 'curve' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                    onClick={() => setChartType('curve')}
                                >
                                    <FaBezierCurve /> Curve
                                </button>
                            </div>
                        </div>

                        <div>
                            <label style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                <input
                                    type="checkbox"
                                    checked={showHistogram}
                                    onChange={(e) => setShowHistogram(e.target.checked)}
                                    style={{ accentColor: '#10b981', width: '18px', height: '18px' }}
                                />
                                Show Underlying Histogram
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right: The Chart */}
                <div className="stats-card" style={{ height: '500px', background: '#0f172a' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />

                            <XAxis
                                type="number"
                                dataKey="mid"
                                domain={[0, 60]}
                                ticks={[0, 10, 20, 30, 40, 50, 60]}
                                stroke="#94a3b8"
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                label={{ value: 'Class Intervals', position: 'insideBottom', offset: -15, fill: '#94a3b8' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                tick={{ fill: '#94a3b8' }}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                                labelFormatter={(value) => `Mid-point: ${value}`}
                            />

                            {/* The Histogram Bars (Optional) */}
                            {showHistogram && (
                                <Bar
                                    dataKey="freq"
                                    fill="rgba(59, 130, 246, 0.2)"
                                    stroke="rgba(59, 130, 246, 0.5)"
                                    barSize={40} // Adjusted width
                                    isAnimationActive={false}
                                />
                            )}

                            {/* The Line (Polygon or Curve) */}
                            <Line
                                type={chartType === 'curve' ? "monotone" : "linear"}
                                dataKey="freq"
                                stroke={chartType === 'curve' ? "#10b981" : "#a855f7"}
                                strokeWidth={3}
                                dot={{ r: 5, fill: '#fff', strokeWidth: 2 }}
                                activeDot={{ r: 8 }}
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                    <div style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', marginTop: '15px', padding: '0 20px', lineHeight: '1.4' }}>
                        Note: We added hypothetical start (0) and end (60) points with zero frequency to close the loop on the X-axis.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Polygon;
