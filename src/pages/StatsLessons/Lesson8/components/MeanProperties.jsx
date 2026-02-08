import React, { useState } from 'react';
import { FaChartBar, FaVideo, FaCheckSquare } from 'react-icons/fa';

const MeanProperties = () => {
    // Demo Data for Property 1: Sum(X - Mean) = 0
    const [data1] = useState([10, 20, 30, 40, 50]);
    const mean1 = 30;

    // Demo Data for Property 2: Change of Origin/Scale
    const [originalData] = useState([2, 4, 6, 8, 10]);
    const [modifier, setModifier] = useState(2);
    const [operation, setOperation] = useState('add'); // add, multiply

    const originalMean = 6;
    const modifiedData = originalData.map(val => operation === 'add' ? val + modifier : val * modifier);
    const newMean = modifiedData.reduce((a, b) => a + b, 0) / modifiedData.length;

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">PROPERTIES OF ARITHMETIC MEAN</h2>
            <p className="stats-subtitle">Key Mathematical Characteristics</p>

            <div className="stats-grid-2">
                {/* Property 1 */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Property 1: Sum of Deviations is Zero</h3>
                    <p style={{ color: '#cbd5e1', marginBottom: '15px' }}>
                        The sum of deviations of items from their arithmetic mean is always <strong>zero</strong>.
                        <br />
                        <code style={{ background: '#334155', padding: '2px 5px', borderRadius: '4px' }}>Σ(X - X̄) = 0</code>
                    </p>

                    <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', borderBottom: '1px solid #475569', paddingBottom: '10px', marginBottom: '10px' }}>
                            <span style={{ color: '#94a3b8' }}>X (Data)</span>
                            <span style={{ color: '#94a3b8' }}>d (X - 30)</span>
                        </div>
                        {data1.map((val, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '5px' }}>
                                <span style={{ color: '#fff' }}>{val}</span>
                                <span style={{ color: val === 30 ? '#fff' : val > 30 ? '#10b981' : '#ef4444' }}>
                                    {val - mean1}
                                </span>
                            </div>
                        ))}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', borderTop: '1px solid #475569', paddingTop: '10px', marginTop: '10px' }}>
                            <span style={{ color: '#fff', fontWeight: 'bold' }}>Mean = 30</span>
                            <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Σd = 0</span>
                        </div>
                    </div>
                </div>

                {/* Property 2 */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Property 2: Effect of Change</h3>
                    <p style={{ color: '#cbd5e1', marginBottom: '15px' }}>
                        If each observation is increased/multiplied by a constant <strong>k</strong>, the Mean also increases/multiplies by <strong>k</strong>.
                    </p>

                    <div style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <select
                            value={operation}
                            onChange={(e) => setOperation(e.target.value)}
                            className="stats-input"
                            style={{ width: '120px' }}
                        >
                            <option value="add">Add (+)</option>
                            <option value="multiply">Multiply (×)</option>
                        </select>
                        <span style={{ color: '#fff' }}>Constant (k):</span>
                        <input
                            type="number"
                            value={modifier}
                            onChange={(e) => setModifier(Number(e.target.value))}
                            className="stats-input"
                            style={{ width: '60px' }}
                        />
                    </div>

                    <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div>
                                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Original Mean</div>
                                <div style={{ color: '#fff', fontSize: '1.2rem' }}>{originalMean}</div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b', fontSize: '1.5rem' }}>
                                &#8594;
                            </div>
                            <div>
                                <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>New Mean</div>
                                <div style={{ color: '#10b981', fontSize: '1.2rem', fontWeight: 'bold' }}>{newMean}</div>
                            </div>
                        </div>
                        <p style={{ color: '#cbd5e1', fontSize: '0.9rem', textAlign: 'center' }}>
                            {operation === 'add'
                                ? `Checking: ${originalMean} + ${modifier} = ${Math.round((originalMean + modifier) * 100) / 100}`
                                : `Checking: ${originalMean} × ${modifier} = ${Math.round((originalMean * modifier) * 100) / 100}`
                            }
                            {Math.abs(newMean - (operation === 'add' ? originalMean + modifier : originalMean * modifier)) < 0.01
                                ? " ✅ Verified"
                                : ""}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeanProperties;
