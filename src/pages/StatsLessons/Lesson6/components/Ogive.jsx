import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { FaArrowUp, FaArrowDown, FaBezierCurve } from 'react-icons/fa';

const Ogive = () => {
    const [viewMode, setViewMode] = useState('both'); // 'less', 'more', 'both'

    // Data: Marks 0-10, 10-20, etc.
    // Less Than Ogive: Plot Upper Limit vs Cumulative Frequency (Rising)
    // More Than Ogive: Plot Lower Limit vs Cumulative Frequency (Falling)
    // Total Frequency (N) = 60. Median is at N/2 = 30.

    const lessThanData = [
        { limit: 0, val: 0 }, // Start point
        { limit: 10, val: 5 },
        { limit: 20, val: 15 },
        { limit: 30, val: 30 }, // Median Point (approx)
        { limit: 40, val: 50 },
        { limit: 50, val: 58 },
        { limit: 60, val: 60 }
    ];

    const moreThanData = [
        { limit: 0, val: 60 },
        { limit: 10, val: 55 },
        { limit: 20, val: 45 },
        { limit: 30, val: 30 }, // Median Point (approx)
        { limit: 40, val: 10 },
        { limit: 50, val: 2 },
        { limit: 60, val: 0 } // End point
    ];

    // Merging data for Recharts to handle both lines on same axis
    const mergedData = [
        { limit: 0, less: 0, more: 60 },
        { limit: 10, less: 5, more: 55 },
        { limit: 20, less: 15, more: 45 },
        { limit: 30, less: 30, more: 30 }, // Intersection
        { limit: 40, less: 50, more: 10 },
        { limit: 50, less: 58, more: 2 },
        { limit: 60, less: 60, more: 0 }
    ];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">OGIVE (CUMULATIVE FREQUENCY CURVE)</h2>
            <p className="stats-subtitle">Locating the Median Graphically</p>

            <div className="stats-grid-2">
                {/* Left: Controls & Theory */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>Two Types of Ogives</h3>

                    <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
                        <div
                            className={`stats-card ${viewMode === 'less' ? 'active-border' : ''}`}
                            onClick={() => setViewMode('less')}
                            style={{ cursor: 'pointer', background: viewMode === 'less' ? 'rgba(59, 130, 246, 0.1)' : '#1e293b' }}
                        >
                            <h4 style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaArrowUp /> Less Than Ogive
                            </h4>
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                                Plot <strong>Upper Limits</strong> against Cumulative Frequency. Curve rises upwards.
                            </p>
                        </div>

                        <div
                            className={`stats-card ${viewMode === 'more' ? 'active-border' : ''}`}
                            onClick={() => setViewMode('more')}
                            style={{ cursor: 'pointer', background: viewMode === 'more' ? 'rgba(236, 72, 153, 0.1)' : '#1e293b' }}
                        >
                            <h4 style={{ color: '#ec4899', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FaArrowDown /> More Than Ogive
                            </h4>
                            <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                                Plot <strong>Lower Limits</strong> against Cumulative Frequency. Curve falls downwards.
                            </p>
                        </div>

                        <button
                            className="stats-btn stats-btn-primary"
                            onClick={() => setViewMode('both')}
                            style={{ justifyContent: 'center', background: viewMode === 'both' ? '#10b981' : '#334155' }}
                        >
                            <FaBezierCurve style={{ marginRight: '10px' }} /> Show Intersection (Median)
                        </button>
                    </div>

                    {viewMode === 'both' && (
                        <div className="stats-badge success animate-popIn">
                            <strong>Median Rules:</strong> The point where both curves intersect corresponds to the Median value on the X-axis.
                        </div>
                    )}
                </div>

                {/* Right: The Chart */}
                <div className="stats-card" style={{ height: '500px', background: '#0f172a' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={mergedData}
                            margin={{ top: 20, right: 80, left: 10, bottom: 40 }} // Adjusted margins 
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis
                                dataKey="limit"
                                stroke="#94a3b8"
                                label={{ value: 'Class Limits (Marks)', position: 'insideBottom', offset: -25, fill: '#94a3b8' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                label={{
                                    value: 'Cumulative Frequency',
                                    angle: -90,
                                    position: 'insideLeft',
                                    offset: 10,
                                    style: { textAnchor: 'middle' },
                                    fill: '#94a3b8'
                                }}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                            />

                            {/* Less Than Curve */}
                            {(viewMode === 'less' || viewMode === 'both') && (
                                <Line
                                    type="monotone"
                                    dataKey="less"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                    name="Less Than"
                                />
                            )}

                            {/* More Than Curve */}
                            {(viewMode === 'more' || viewMode === 'both') && (
                                <Line
                                    type="monotone"
                                    dataKey="more"
                                    stroke="#ec4899"
                                    strokeWidth={3}
                                    dot={{ r: 4 }}
                                    name="More Than"
                                />
                            )}

                            {/* Median Reference Lines */}
                            {viewMode === 'both' && (
                                <>
                                    <ReferenceLine x={30} stroke="#10b981" strokeDasharray="5 5" label={{ value: 'Median = 30', fill: '#10b981', position: 'top' }} />
                                    <ReferenceLine y={30} stroke="#10b981" strokeDasharray="5 5" label={{ value: 'N/2 = 30', fill: '#10b981', position: 'right' }} />
                                </>
                            )}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Ogive;
