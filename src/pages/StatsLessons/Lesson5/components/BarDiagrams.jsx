import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { FaChartBar, FaLayerGroup, FaPercentage, FaExchangeAlt, FaArrowUp } from 'react-icons/fa';

const BarDiagrams = () => {
    const [activeType, setActiveType] = useState('simple');

    // --- DATA SETS ---
    const simpleData = [
        { year: '2019', rate: 45 }, { year: '2020', rate: 35 },
        { year: '2021', rate: 50 }, { year: '2022', rate: 40 },
        { year: '2023', rate: 55 },
    ];

    const multipleData = [
        { state: 'Punjab', wheat: 80, rice: 60 },
        { state: 'Haryana', wheat: 70, rice: 50 },
        { state: 'UP', wheat: 90, rice: 85 },
    ];

    const componentData = [
        { year: '2021', rent: 4000, food: 6000, other: 2000 },
        { year: '2022', rent: 4500, food: 6500, other: 2500 },
        { year: '2023', rent: 5000, food: 7000, other: 3000 },
    ];

    // Percentage Data calculates the 100% stack automatically in Recharts if we use 'stackOffset="expand"'
    // But standard Component bars use 'stackId' without offset.
    // For Percentage Bar, we'll use a pre-calculated dataset or Recharts 'expand' feature.
    const percentageData = [
        { year: '2021', primary: 40, secondary: 30, tertiary: 30 },
        { year: '2022', primary: 35, secondary: 35, tertiary: 30 },
        { year: '2023', primary: 25, secondary: 40, tertiary: 35 },
    ];

    // Deviation Data (Profit/Loss)
    const deviationData = [
        { year: '2019', net: 20 },
        { year: '2020', net: -10 },
        { year: '2021', net: 15 },
        { year: '2022', net: -5 },
        { year: '2023', net: 30 },
    ];

    // --- CONFIG ---
    const types = [
        { id: 'simple', label: 'Simple Bar', icon: <FaChartBar />, desc: "Represents a single set of numerical data. Height determines magnitude." },
        { id: 'multiple', label: 'Multiple Bar', icon: <FaLayerGroup />, desc: "Compares two or more variables side-by-side for the same category." },
        { id: 'component', label: 'Sub-divided', icon: <FaExchangeAlt />, desc: "Shows Total Value AND its division into various components (Stacked)." },
        { id: 'percentage', label: 'Percentage', icon: <FaPercentage />, desc: "Shows relative proportion of components. Total height is always 100%." },
        { id: 'deviation', label: 'Deviation', icon: <FaArrowUp />, desc: "Used for Net Quantities (Profit/Loss). Bars can go below the X-axis." }
    ];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">TYPES OF BAR DIAGRAMS</h2>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', borderBottom: '1px solid #334155', paddingBottom: '20px' }}>
                {types.map(t => (
                    <button
                        key={t.id}
                        onClick={() => setActiveType(t.id)}
                        className={`stats-btn ${activeType === t.id ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px' }}
                    >
                        {t.icon} {t.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="stats-grid-2">

                {/* Left: Theory & Context */}
                <div>
                    <h3 className="stats-card-heading secondary" style={{ fontSize: '1.8rem', marginBottom: '15px' }}>
                        {types.find(t => t.id === activeType).label} Diagram
                    </h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '20px' }}>
                        {types.find(t => t.id === activeType).desc}
                    </p>

                    <div className="stats-card" style={{ background: '#1e293b', borderLeft: '4px solid var(--stats-gold)' }}>
                        <h4 style={{ color: 'var(--stats-gold)', margin: '0 0 10px 0' }}>When to use?</h4>
                        <ul className="stats-list" style={{ margin: 0 }}>
                            {activeType === 'simple' && <li>To show Birth Rate, Population, or Production over years.</li>}
                            {activeType === 'multiple' && <li>To compare Import vs Export, or Literacy Rates of Men vs Women.</li>}
                            {activeType === 'component' && <li>To show Total Cost AND its breakup (Material, Labour, Electricity).</li>}
                            {activeType === 'percentage' && <li>To compare the <em>change in structure</em> of data, ignoring absolute values.</li>}
                            {activeType === 'deviation' && <li>To show Net Profit/Loss, Surplus/Deficit, or Balance of Trade.</li>}
                        </ul>
                    </div>
                </div>

                {/* Right: Interactive Chart */}
                <div style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', border: '1px solid #334155', minHeight: '400px' }}>

                    <ResponsiveContainer width="100%" height={350}>
                        <BarChart
                            data={
                                activeType === 'simple' ? simpleData :
                                    activeType === 'multiple' ? multipleData :
                                        activeType === 'component' ? componentData :
                                            activeType === 'percentage' ? percentageData : deviationData
                            }
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            stackOffset={activeType === 'percentage' ? 'expand' : 'none'}
                            barSize={30}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis dataKey={activeType === 'multiple' ? 'state' : 'year'} stroke="#94a3b8" />
                            <YAxis
                                stroke="#94a3b8"
                                tickFormatter={activeType === 'percentage' ? (tick) => `${tick * 100}%` : undefined}
                            />
                            <Tooltip
                                contentStyle={{ background: '#1e293b', border: '1px solid #475569', color: '#fff' }}
                                formatter={activeType === 'percentage' ? (value) => `${(value * 100).toFixed(0)}%` : undefined}
                            />
                            <Legend />
                            {activeType === 'deviation' && <ReferenceLine y={0} stroke="#fff" />}

                            {/* CONDITIONAL RENDERING OF BARS */}

                            {activeType === 'simple' && (
                                <Bar dataKey="rate" name="Value" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                            )}

                            {activeType === 'multiple' && (
                                <>
                                    <Bar dataKey="wheat" name="Wheat" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="rice" name="Rice" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                </>
                            )}

                            {(activeType === 'component' || activeType === 'percentage') && (
                                <>
                                    <Bar dataKey={activeType === 'percentage' ? 'primary' : 'food'} stackId="a" name={activeType === 'percentage' ? 'Primary Sector' : 'Food'} fill="#ec4899" />
                                    <Bar dataKey={activeType === 'percentage' ? 'secondary' : 'rent'} stackId="a" name={activeType === 'percentage' ? 'Secondary Sector' : 'Rent'} fill="#8b5cf6" />
                                    <Bar dataKey={activeType === 'percentage' ? 'tertiary' : 'other'} stackId="a" name={activeType === 'percentage' ? 'Tertiary Sector' : 'Other'} fill="#10b981" radius={[4, 4, 0, 0]} />
                                </>
                            )}

                            {activeType === 'deviation' && (
                                <Bar dataKey="net" name="Net Profit/Loss" fill="#ef4444">
                                    {deviationData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.net > 0 ? '#10b981' : '#ef4444'} />
                                    ))}
                                </Bar>
                            )}

                        </BarChart>
                    </ResponsiveContainer>

                </div>

            </div>
        </div>
    );
};

export default BarDiagrams;
