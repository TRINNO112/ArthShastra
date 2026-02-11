import React, { useState } from 'react';
import { FaCalculator, FaPlus, FaTrash, FaArrowRight } from 'react-icons/fa';

/**
 * MedianCalculator — Interactive tool to calculate Median
 * Students enter their own data and see step-by-step solution
 */
const MedianCalculator = () => {
    const [inputValue, setInputValue] = useState('');
    const [dataPoints, setDataPoints] = useState([]);
    const [result, setResult] = useState(null);

    const addValue = () => {
        const num = parseFloat(inputValue);
        if (!isNaN(num)) {
            setDataPoints([...dataPoints, num]);
            setInputValue('');
            setResult(null);
        }
    };

    const removeValue = (index) => {
        setDataPoints(dataPoints.filter((_, i) => i !== index));
        setResult(null);
    };

    const resetAll = () => {
        setDataPoints([]);
        setInputValue('');
        setResult(null);
    };

    const calculateMedian = () => {
        if (dataPoints.length < 2) return;

        const sorted = [...dataPoints].sort((a, b) => a - b);
        const n = sorted.length;
        const steps = [];

        steps.push(`Data: ${dataPoints.join(', ')}`);
        steps.push(`Sorted (Ascending): ${sorted.join(', ')}`);
        steps.push(`N = ${n}`);

        let median;
        if (n % 2 !== 0) {
            const pos = (n + 1) / 2;
            median = sorted[pos - 1];
            steps.push(`N is Odd → M = ((${n} + 1) ÷ 2)th item = ${pos}th item`);
            steps.push(`${pos}th item = ${median}`);
        } else {
            const pos1 = n / 2;
            const pos2 = pos1 + 1;
            median = (sorted[pos1 - 1] + sorted[pos2 - 1]) / 2;
            steps.push(`N is Even → M = Average of ${pos1}th and ${pos2}th items`);
            steps.push(`M = (${sorted[pos1 - 1]} + ${sorted[pos2 - 1]}) ÷ 2 = ${median}`);
        }

        setResult({ median, steps, sorted });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') addValue();
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">MEDIAN CALCULATOR</h2>
                <p className="stats-subtitle">Enter your values and see step-by-step solution</p>
            </div>

            {/* Input Area */}
            <div className="stats-card">
                <h3 className="stats-card-heading primary">
                    <FaCalculator /> Enter Data Points
                </h3>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter a number..."
                        style={{
                            flex: 1, padding: '12px 16px', borderRadius: 'var(--stats-radius)',
                            background: 'var(--stats-bg-alt)', border: '1px solid var(--stats-border)',
                            color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-mono)',
                            outline: 'none'
                        }}
                    />
                    <button className="stats-btn stats-btn-primary" onClick={addValue} disabled={!inputValue}>
                        <FaPlus /> Add
                    </button>
                </div>

                {/* Data Points Display */}
                {dataPoints.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--stats-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            Your Data ({dataPoints.length} values)
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {dataPoints.map((val, i) => (
                                <div key={i} style={{
                                    display: 'flex', alignItems: 'center', gap: '8px',
                                    padding: '6px 12px', borderRadius: 'var(--stats-radius)',
                                    background: 'var(--stats-bg-alt)', border: '1px solid var(--stats-border)',
                                    color: '#fff', fontFamily: 'var(--font-mono)', fontSize: '0.9rem'
                                }}>
                                    {val}
                                    <FaTrash
                                        style={{ fontSize: '0.7rem', color: 'var(--stats-error)', cursor: 'pointer', opacity: 0.7 }}
                                        onClick={() => removeValue(i)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={calculateMedian}
                        disabled={dataPoints.length < 2}
                        style={{ flex: 1, justifyContent: 'center', opacity: dataPoints.length < 2 ? 0.5 : 1 }}
                    >
                        <FaArrowRight /> Calculate Median
                    </button>
                    {dataPoints.length > 0 && (
                        <button className="stats-btn stats-btn-outline" onClick={resetAll}>
                            Reset
                        </button>
                    )}
                </div>
            </div>

            {/* Result Card */}
            {result && (
                <div className="stats-card" style={{ marginTop: '20px' }}>
                    <h3 className="stats-card-heading" style={{ color: 'var(--stats-success)' }}>
                        <FaCalculator /> Step-by-Step Solution
                    </h3>

                    {/* Sorted Visual */}
                    <div style={{
                        display: 'flex', justifyContent: 'center', gap: '6px',
                        marginBottom: '24px', flexWrap: 'wrap'
                    }}>
                        {result.sorted.map((val, i) => {
                            const n = result.sorted.length;
                            const isMiddle = n % 2 !== 0
                                ? i === Math.floor(n / 2)
                                : (i === n / 2 - 1 || i === n / 2);
                            return (
                                <div key={i} style={{
                                    width: '42px', height: '42px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 'var(--stats-radius)',
                                    fontWeight: 'bold', fontSize: '0.85rem',
                                    background: isMiddle ? 'var(--stats-primary)' : 'var(--stats-white)',
                                    color: isMiddle ? '#fff' : 'var(--stats-text-muted)',
                                    border: isMiddle ? '2px solid var(--stats-primary-light)' : '1px solid var(--stats-border)',
                                    transform: isMiddle ? 'scale(1.1)' : 'none',
                                    boxShadow: isMiddle ? '0 0 12px rgba(59, 130, 246, 0.3)' : 'none'
                                }}>
                                    {val}
                                </div>
                            );
                        })}
                    </div>

                    {/* Steps */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {result.steps.map((step, i) => (
                            <li key={i} style={{
                                display: 'flex', gap: '12px', color: 'var(--stats-text)',
                                padding: '8px 0',
                                borderBottom: i < result.steps.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                                lineHeight: '1.6'
                            }}>
                                <span style={{ color: 'var(--stats-text-muted)', fontFamily: 'var(--font-mono)', minWidth: '24px' }}>
                                    {i + 1}.
                                </span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Final Answer */}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '24px' }}>
                        <div className="stats-highlight" style={{
                            background: 'rgba(59, 130, 246, 0.12)', border: '1px solid rgba(59, 130, 246, 0.3)',
                            padding: '16px 32px', fontSize: '1.2rem'
                        }}>
                            <span style={{ color: 'var(--stats-primary-light)', fontWeight: '700' }}>
                                Median (M) = {result.median}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MedianCalculator;
