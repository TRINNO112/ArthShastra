import React, { useState } from 'react';
import { PieChart as RePieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import { FaCalculator, FaLightbulb, FaChartPie, FaBalanceScale } from 'react-icons/fa';

const PieChartExplorer = () => {
    // Mode: 'single' or 'compare'
    const [mode, setMode] = useState('single');

    // Data 2020
    const data2020 = [
        { name: 'Food', value: 45, color: '#ec4899' },
        { name: 'Rent', value: 25, color: '#8b5cf6' },
        { name: 'Misc', value: 20, color: '#3b82f6' },
        { name: 'Saving', value: 10, color: '#10b981' },
    ];

    // Data 2024 (Comparative)
    const data2024 = [
        { name: 'Food', value: 35, color: '#ec4899' },
        { name: 'Rent', value: 30, color: '#8b5cf6' },
        { name: 'Misc', value: 15, color: '#3b82f6' },
        { name: 'Saving', value: 20, color: '#10b981' }, // Savings Increased
    ];

    // Calculator State
    const [calcValue, setCalcValue] = useState('');
    const [calcTotal, setCalcTotal] = useState('');
    const [calcResult, setCalcResult] = useState(null);

    const calculateDegree = () => {
        if (!calcValue || !calcTotal) return;
        const degree = (parseFloat(calcValue) / parseFloat(calcTotal)) * 360;
        setCalcResult(degree.toFixed(2));
    };

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">PIE DIAGRAM (CIRCLE DIAGRAM)</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                <button
                    className={`stats-btn ${mode === 'single' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                    onClick={() => setMode('single')}
                >
                    <FaChartPie /> Standard View
                </button>
                <button
                    className={`stats-btn ${mode === 'compare' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                    onClick={() => setMode('compare')}
                >
                    <FaBalanceScale /> Comparative View (2 Years)
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '30px', alignItems: 'start' }}>

                {/* Left: The Charts */}
                <div className="stats-card">
                    {mode === 'single' ? (
                        <>
                            <h3 className="stats-card-heading primary">Yearly Expenditure Breakdown</h3>
                            <div style={{ width: '100%', height: '400px' }}>
                                <ResponsiveContainer>
                                    <RePieChart>
                                        <Pie
                                            data={data2020}
                                            cx="50%" cy="50%"
                                            outerRadius={140}
                                            dataKey="value"
                                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                        >
                                            {data2020.map((e, i) => <Cell key={i} fill={e.color} />)}
                                        </Pie>
                                        <Tooltip contentStyle={{ background: '#1e293b', border: 'none' }} itemStyle={{ color: '#fff' }} />
                                        <Legend />
                                    </RePieChart>
                                </ResponsiveContainer>
                            </div>
                        </>
                    ) : (
                        <>
                            <h3 className="stats-card-heading primary">Comparison: 2020 vs 2024</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '350px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h4 style={{ color: '#ec4899' }}>2020 (Low Savings)</h4>
                                    <ResponsiveContainer width="100%" height="90%">
                                        <RePieChart>
                                            <Pie data={data2020} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                                                {data2020.map((e, i) => <Cell key={i} fill={e.color} />)}
                                            </Pie>
                                            <Tooltip />
                                        </RePieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h4 style={{ color: '#10b981' }}>2024 (High Savings)</h4>
                                    <ResponsiveContainer width="100%" height="90%">
                                        <RePieChart>
                                            <Pie data={data2024} cx="50%" cy="50%" outerRadius={80} dataKey="value">
                                                {data2024.map((e, i) => <Cell key={i} fill={e.color} />)}
                                            </Pie>
                                            <Tooltip />
                                        </RePieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
                                Notice how the Green slice (Savings) has doubled in size? Diagrams make this easy to spot!
                            </div>
                        </>
                    )}
                </div>

                {/* Right: The Logic & Calculator */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="stats-card" style={{ borderLeft: '4px solid var(--stats-gold)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: 'var(--stats-gold)' }}>
                            <FaLightbulb size={24} />
                            <h3 style={{ margin: 0, color: '#fff' }}>The Formula</h3>
                        </div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
                            A circle is 360°. To find the angle of any component:
                        </p>
                        <div style={{ background: '#0f172a', padding: '15px', borderRadius: '8px', fontFamily: 'monospace', textAlign: 'center', color: '#38bdf8' }}>
                            (Component Value ÷ Total Value) × 360°
                        </div>
                    </div>

                    {/* Calculator */}
                    <div className="stats-card" style={{ background: '#1e293b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <FaCalculator />
                            <h3 style={{ margin: 0 }}>Degree Calculator</h3>
                        </div>
                        <input
                            type="number" className="stats-input" placeholder="Component Value (e.g., 500)"
                            value={calcValue} onChange={(e) => setCalcValue(e.target.value)}
                            style={{ width: '100%', marginBottom: '10px', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: '#fff' }}
                        />
                        <input
                            type="number" className="stats-input" placeholder="Total Value (e.g., 2000)"
                            value={calcTotal} onChange={(e) => setCalcTotal(e.target.value)}
                            style={{ width: '100%', marginBottom: '15px', padding: '10px', borderRadius: '8px', background: '#0f172a', border: '1px solid #475569', color: '#fff' }}
                        />
                        <button
                            onClick={calculateDegree}
                            style={{ width: '100%', padding: '12px', background: 'var(--stats-primary)', border: 'none', borderRadius: '8px', color: '#fff', fontWeight: 'bold' }}
                        >
                            Calculate Angle
                        </button>
                        {calcResult && (
                            <div className="animate-popIn" style={{ marginTop: '20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--stats-gold)' }}>{calcResult}°</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PieChartExplorer;
