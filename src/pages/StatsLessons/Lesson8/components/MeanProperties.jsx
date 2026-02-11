import React, { useState } from 'react';
import { XBar } from './MeanPracticeData';
import './MeanComponents.css';

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
                        <code style={{ background: '#334155', padding: '2px 5px', borderRadius: '4px' }}>Σ(x<sub>i</sub> - <XBar />) = 0</code>
                    </p>

                    <div style={{ background: 'rgba(0,0,0,0.2)', padding: '15px', borderRadius: '10px' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', borderBottom: '1px solid #475569', paddingBottom: '10px', marginBottom: '10px' }}>
                            <span style={{ color: '#94a3b8' }}>x<sub>i</sub> (Data)</span>
                            <span style={{ color: '#94a3b8' }}>d<sub>i</sub> (x<sub>i</sub> - 30)</span>
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
                            <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>Σd<sub>i</sub> = 0</span>
                        </div>
                    </div>
                </div>

                {/* Property 2 */}
                {/* Property 2: Highlighted Box */}
                <div className="stats-card property-highlight-box">
                    <h3 style={{ color: '#fff', marginBottom: '15px' }}>Property 2: Effect of Change</h3>
                    <p style={{ color: '#e2e8f0', marginBottom: '15px' }}>
                        If each observation is increased/multiplied by a constant <strong>k</strong>, the Mean also increases/multiplies by <strong>k</strong>.
                    </p>

                    <div className="effect-control-row">
                        <select
                            value={operation}
                            onChange={(e) => setOperation(e.target.value)}
                            className="stats-input"
                            style={{ flex: 1 }}
                        >
                            <option value="add">Add (+)</option>
                            <option value="multiply">Multiply (×)</option>
                        </select>
                        <span style={{ color: '#fff', whiteSpace: 'nowrap' }}>Constant (k):</span>
                        <input
                            type="number"
                            value={modifier}
                            onChange={(e) => setModifier(Number(e.target.value))}
                            className="stats-input"
                            style={{ width: '80px' }}
                        />
                    </div>

                    <div className="effect-visual-row">
                        <div className="mean-value-box">
                            <div className="mean-value-label">Old Mean</div>
                            <div className="mean-value-display">{originalMean}</div>
                        </div>

                        <div className="effect-arrow">
                            <span>{operation === 'add' ? `+ ${modifier}` : `× ${modifier}`}</span>
                            &#8594;
                        </div>

                        <div className="mean-value-box">
                            <div className="mean-value-label">New Mean</div>
                            <div className="mean-value-display highlight">{newMean}</div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                        {operation === 'add'
                            ? `Checking: ${originalMean} + ${modifier} = ${Math.round((originalMean + modifier) * 100) / 100}`
                            : `Checking: ${originalMean} × ${modifier} = ${Math.round((originalMean * modifier) * 100) / 100}`
                        }
                        {Math.abs(newMean - (operation === 'add' ? originalMean + modifier : originalMean * modifier)) < 0.01
                            ? " ✅ Verified"
                            : ""}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeanProperties;
