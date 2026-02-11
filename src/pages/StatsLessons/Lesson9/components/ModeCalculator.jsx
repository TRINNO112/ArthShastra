import React, { useState } from 'react';
import { FaCalculator, FaPlus, FaTrash, FaArrowRight } from 'react-icons/fa';

/**
 * ModeCalculator — Interactive tool to find Mode from entered data
 */
const ModeCalculator = () => {
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

    const calculateMode = () => {
        if (dataPoints.length < 2) return;

        const sorted = [...dataPoints].sort((a, b) => a - b);
        const steps = [];

        // Count frequencies
        const freqMap = {};
        sorted.forEach(val => { freqMap[val] = (freqMap[val] || 0) + 1; });

        steps.push(`Data: ${dataPoints.join(', ')}`);
        steps.push(`Sorted: ${sorted.join(', ')}`);

        // Show frequency table
        const freqEntries = Object.entries(freqMap).map(([val, count]) => ({ val: Number(val), count }));
        const freqStr = freqEntries.map(e => `${e.val} → ${e.count}`).join(', ');
        steps.push(`Frequency Count: ${freqStr}`);

        // Find max frequency
        const maxFreq = Math.max(...freqEntries.map(e => e.count));
        const modes = freqEntries.filter(e => e.count === maxFreq);

        let modeValue;
        if (maxFreq === 1) {
            steps.push('All values appear only once → No Mode exists');
            modeValue = 'No Mode';
        } else if (modes.length === 1) {
            steps.push(`Highest frequency = ${maxFreq} (for value ${modes[0].val})`);
            steps.push(`Mode (Z) = ${modes[0].val}`);
            modeValue = modes[0].val;
        } else {
            const modeValuesStr = modes.map(m => m.val).join(' and ');
            steps.push(`Highest frequency = ${maxFreq} (for values ${modeValuesStr})`);
            steps.push(`Data is ${modes.length === 2 ? 'Bimodal' : 'Multimodal'}`);
            modeValue = modeValuesStr + (modes.length === 2 ? ' (Bimodal)' : ' (Multimodal)');
        }

        setResult({ mode: modeValue, steps, freqEntries, maxFreq, sorted });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') addValue();
    };

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">MODE CALCULATOR</h2>
                <p className="stats-subtitle">Enter your values and find the most frequent one</p>
            </div>

            {/* Input Area */}
            <div className="stats-card">
                <h3 className="stats-card-heading secondary">
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

                {/* Data Display */}
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
                        onClick={calculateMode}
                        disabled={dataPoints.length < 2}
                        style={{ flex: 1, justifyContent: 'center', opacity: dataPoints.length < 2 ? 0.5 : 1 }}
                    >
                        <FaArrowRight /> Find Mode
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

                    {/* Visual — Values with Mode highlighted */}
                    <div style={{
                        display: 'flex', justifyContent: 'center', gap: '6px',
                        marginBottom: '24px', flexWrap: 'wrap'
                    }}>
                        {result.sorted.map((val, i) => {
                            const isMode = result.freqEntries.some(e => e.val === val && e.count === result.maxFreq) && result.maxFreq > 1;
                            return (
                                <div key={i} style={{
                                    width: '42px', height: '42px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 'var(--stats-radius)',
                                    fontWeight: 'bold', fontSize: '0.85rem',
                                    background: isMode ? 'var(--stats-success)' : 'var(--stats-white)',
                                    color: isMode ? '#fff' : 'var(--stats-text-muted)',
                                    border: isMode ? '2px solid #34d399' : '1px solid var(--stats-border)',
                                    boxShadow: isMode ? '0 0 12px rgba(16, 185, 129, 0.3)' : 'none'
                                }}>
                                    {val}
                                </div>
                            );
                        })}
                    </div>

                    {/* Frequency Table */}
                    <div className="stats-table-container" style={{ marginBottom: '20px' }}>
                        <table className="stats-table">
                            <thead>
                                <tr>
                                    <th>Value (x)</th>
                                    <th>Frequency (f)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result.freqEntries.map((entry, i) => (
                                    <tr key={i} style={{
                                        background: entry.count === result.maxFreq && result.maxFreq > 1
                                            ? 'rgba(16, 185, 129, 0.1)' : 'transparent'
                                    }}>
                                        <td style={{
                                            fontWeight: entry.count === result.maxFreq ? '700' : '400',
                                            color: entry.count === result.maxFreq && result.maxFreq > 1 ? '#fff' : 'var(--stats-text)'
                                        }}>
                                            {entry.val}
                                        </td>
                                        <td style={{
                                            fontWeight: entry.count === result.maxFreq ? '700' : '400',
                                            color: entry.count === result.maxFreq && result.maxFreq > 1 ? 'var(--stats-success)' : 'var(--stats-text)'
                                        }}>
                                            {entry.count} {entry.count === result.maxFreq && result.maxFreq > 1 && '← Highest'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                            background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.3)',
                            padding: '16px 32px', fontSize: '1.2rem'
                        }}>
                            <span style={{ color: 'var(--stats-success)', fontWeight: '700' }}>
                                Mode (Z) = {result.mode}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModeCalculator;
