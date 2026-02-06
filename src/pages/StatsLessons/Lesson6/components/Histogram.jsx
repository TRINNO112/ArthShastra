import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaToggleOn, FaToggleOff, FaInfoCircle } from 'react-icons/fa';

const Histogram = () => {
    const [showGap, setShowGap] = useState(false); // Default to Histogram (No Gap)
    const [dataset, setDataset] = useState('marks');

    // Data mapped to numeric midpoints for continuous axis
    const marksData = [
        { mid: 5, freq: 5, range: '0-10' },
        { mid: 15, freq: 10, range: '10-20' },
        { mid: 25, freq: 15, range: '20-30' },
        { mid: 35, freq: 20, range: '30-40' },
        { mid: 45, freq: 12, range: '40-50' },
        { mid: 55, freq: 8, range: '50-60' },
    ];

    const incomeData = [
        { mid: 12.5, freq: 8, range: '10-15' },
        { mid: 17.5, freq: 15, range: '15-20' },
        { mid: 22.5, freq: 25, range: '20-25' },
        { mid: 27.5, freq: 10, range: '25-30' },
    ];

    const data = dataset === 'marks' ? marksData : incomeData;

    // Config for Axes
    const xParams = dataset === 'marks'
        ? { ticks: [0, 10, 20, 30, 40, 50, 60], domain: [0, 60] }
        : { ticks: [10, 15, 20, 25, 30], domain: [10, 30] };

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">HISTOGRAM</h2>
            <p className="stats-subtitle">The Area Diagram</p>

            <div className="stats-grid-2">
                {/* Left: Controls & Theory */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>Understanding Histograms</h3>

                    <div className="stats-toggle-container" style={{ background: '#1e293b', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ color: '#cbd5e1' }}>Gap between bars?</span>
                            <button
                                onClick={() => setShowGap(!showGap)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '2rem', color: showGap ? '#ef4444' : '#10b981', display: 'flex' }}
                            >
                                {showGap ? <FaToggleOn /> : <FaToggleOff />}
                            </button>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: showGap ? '#ef4444' : '#10b981' }}>
                            {showGap ? "Incorrect! Use for Bar Diagrams (Discrete)." : "Correct! Creating a continuous area."}
                        </p>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ color: '#94a3b8', display: 'block', marginBottom: '10px' }}>Select Dataset:</label>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                className={`stats-btn ${dataset === 'marks' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                onClick={() => setDataset('marks')}
                            >
                                Marks Distribution
                            </button>
                            <button
                                className={`stats-btn ${dataset === 'income' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                onClick={() => setDataset('income')}
                            >
                                Daily Wages
                            </button>
                        </div>
                    </div>

                    <div className="stats-badge info">
                        <FaInfoCircle style={{ marginRight: '8px' }} />
                        <strong>Key Feature:</strong> Area of rectangle = Frequency. (For equal intervals, Height = Frequency).
                    </div>
                </div>

                {/* Right: The Chart */}
                <div className="stats-card" style={{ height: '400px', background: '#0f172a' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />

                            <XAxis
                                type="number"
                                dataKey="mid"
                                domain={xParams.domain}
                                ticks={xParams.ticks}
                                stroke="#94a3b8"
                                tick={{ fill: '#94a3b8', fontSize: 12 }}
                                label={{ value: 'Class Intervals', position: 'insideBottom', offset: -15, fill: '#94a3b8' }}
                            />
                            <YAxis
                                stroke="#94a3b8"
                                tick={{ fill: '#94a3b8' }}
                                label={{ value: 'Frequency', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                labelFormatter={(value) => `Mid-point: ${value}`}
                            />
                            <Bar
                                dataKey="freq"
                                fill="#3b82f6"
                                stroke="#1e293b"
                                strokeWidth={1}
                                barSize={showGap ? 30 : 65} // Manual width adjustment for visual "touching" feel on desktop
                            />
                        </BarChart>
                    </ResponsiveContainer>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.8rem', marginTop: '10px' }}>
                        Note: X-Axis shows continuous scale with boundary values.
                    </p>
                </div>
            </div>

            {/* Unequal Intervals Note */}
            <div className="stats-card" style={{ marginTop: '30px', borderLeft: '4px solid #f59e0b' }}>
                <h3 style={{ color: '#f59e0b', marginBottom: '10px' }}>What if Class Intervals are Unequal?</h3>
                <p style={{ color: '#cbd5e1' }}>
                    If widths vary (e.g., 0-10, 10-20, 20-40), we simply cannot plot Frequency directly.
                    We must calculate <strong>Frequency Density</strong>:
                    <br /><br />
                    <code style={{ background: '#334155', padding: '5px 10px', borderRadius: '4px', color: '#fff' }}>Frequency Density = Frequency / Class Width</code>
                </p>
            </div>
        </div>
    );
};

export default Histogram;
