import React, { useState, useEffect } from 'react';
import { FaCalculator, FaTable, FaMagic } from 'react-icons/fa';

const ArithmeticMean = () => {
    const [seriesType, setSeriesType] = useState('individual'); // individual, discrete, continuous
    const [method, setMethod] = useState('direct'); // direct, shortcut, stepdev

    // State for inputs
    const [rawData, setRawData] = useState("10, 20, 30, 40, 50");
    const [discreteX, setDiscreteX] = useState("10, 20, 30, 40, 50");
    const [discreteF, setDiscreteF] = useState("2, 4, 10, 6, 3");
    const [assumedMean, setAssumedMean] = useState(30);
    const [commonFactor, setCommonFactor] = useState(10);

    const [result, setResult] = useState(null);

    // Calculation Logic
    useEffect(() => {
        calculateMean();
    }, [seriesType, method, rawData, discreteX, discreteF, assumedMean, commonFactor]);

    const calculateMean = () => {
        try {
            if (seriesType === 'individual') {
                const x = rawData.split(',').map(n => Number(n.trim())).filter(n => !isNaN(n));
                const N = x.length;
                if (N === 0) return;

                let mean = 0;
                let steps = [];

                if (method === 'direct') {
                    // Direct: ΣX / N
                    const sumX = x.reduce((a, b) => a + b, 0);
                    mean = sumX / N;
                    steps = [
                        `ΣX = ${sumX}`,
                        `N = ${N}`,
                        `Mean (X̄) = ${sumX} / ${N} = ${mean.toFixed(2)}`
                    ];
                } else {
                    // Shortcut: A + Σd/N
                    const d = x.map(val => val - assumedMean);
                    const sumD = d.reduce((a, b) => a + b, 0);
                    mean = assumedMean + (sumD / N);
                    steps = [
                        `Assumed Mean (A) = ${assumedMean}`,
                        `Deviations (d = X - A): [${d.join(', ')}]`,
                        `Σd = ${sumD}`,
                        `Mean (X̄) = ${assumedMean} + (${sumD} / ${N}) = ${mean.toFixed(2)}`
                    ];
                }
                setResult({ mean, steps });

            } else if (seriesType === 'discrete') {
                const x = discreteX.split(',').map(n => Number(n.trim()));
                const f = discreteF.split(',').map(n => Number(n.trim()));

                if (x.length !== f.length || x.length === 0) return setResult(null);

                const N = f.reduce((a, b) => a + b, 0);
                let mean = 0;
                let steps = [];

                if (method === 'direct') {
                    // ΣfX / Σf
                    const fx = x.map((val, i) => val * f[i]);
                    const sumFX = fx.reduce((a, b) => a + b, 0);
                    mean = sumFX / N;
                    steps = [
                        `Σf = ${N}`,
                        `ΣfX = ${sumFX}`,
                        `Mean (X̄) = ${sumFX} / ${N} = ${mean.toFixed(2)}`
                    ];
                } else if (method === 'shortcut') {
                    // A + Σfd/Σf
                    const d = x.map(val => val - assumedMean);
                    const fd = d.map((dev, i) => dev * f[i]);
                    const sumFD = fd.reduce((a, b) => a + b, 0);
                    mean = assumedMean + (sumFD / N);
                    steps = [
                        `A = ${assumedMean}`,
                        `Σfd = ${sumFD}`,
                        `Mean (X̄) = ${assumedMean} + (${sumFD} / ${N}) = ${mean.toFixed(2)}`
                    ];
                } else if (method === 'stepdev') {
                    // A + (Σfd'/Σf) * C
                    const d = x.map(val => val - assumedMean);
                    const dPrime = d.map(val => val / commonFactor);
                    const fdPrime = dPrime.map((dp, i) => dp * f[i]);
                    const sumFDPrime = fdPrime.reduce((a, b) => a + b, 0);
                    mean = assumedMean + (sumFDPrime / N) * commonFactor;
                    steps = [
                        `A = ${assumedMean}, C = ${commonFactor}`,
                        `d' = (X - A) / C`,
                        `Σfd' = ${sumFDPrime}`,
                        `Mean (X̄) = ${assumedMean} + (${sumFDPrime} / ${N}) × ${commonFactor} = ${mean.toFixed(2)}`
                    ];
                }
                setResult({ mean, steps });
            }
        } catch (e) {
            console.error("Calc Error", e);
        }
    };

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">CALCULATING MEAN</h2>
            <p className="stats-subtitle">Interactive Mean Calculator</p>

            <div className="stats-grid-2">
                {/* Controls */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>Configuration</h3>

                    {/* Series Selector */}
                    <div style={{ marginBottom: '20px' }}>
                        <label className="stats-label-text">Select Series Type:</label>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {['individual', 'discrete'].map(type => (
                                <button
                                    key={type}
                                    className={`stats-btn ${seriesType === type ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                    onClick={() => setSeriesType(type)}
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {type} Series
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Method Selector */}
                    <div style={{ marginBottom: '20px' }}>
                        <label className="stats-label-text">Select Method:</label>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <button
                                className={`stats-btn ${method === 'direct' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                onClick={() => setMethod('direct')}
                            >
                                Direct
                            </button>
                            <button
                                className={`stats-btn ${method === 'shortcut' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                onClick={() => setMethod('shortcut')}
                            >
                                Short-cut
                            </button>
                            {seriesType !== 'individual' && (
                                <button
                                    className={`stats-btn ${method === 'stepdev' ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                                    onClick={() => setMethod('stepdev')}
                                >
                                    Step-Deviation
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Data Inputs */}
                    <div style={{ background: '#1e293b', padding: '15px', borderRadius: '10px' }}>
                        {seriesType === 'individual' && (
                            <div>
                                <label className="stats-label-text">Data (Values separated by comma):</label>
                                <input
                                    type="text"
                                    value={rawData}
                                    onChange={(e) => setRawData(e.target.value)}
                                    className="stats-input"
                                    style={{ background: '#0f172a', color: '#fff', border: '1px solid #334155' }}
                                />
                            </div>
                        )}

                        {seriesType === 'discrete' && (
                            <>
                                <div style={{ marginBottom: '10px' }}>
                                    <label className="stats-label-text">X (Values):</label>
                                    <input
                                        type="text"
                                        value={discreteX}
                                        onChange={(e) => setDiscreteX(e.target.value)}
                                        className="stats-input"
                                        style={{ background: '#0f172a', color: '#fff', border: '1px solid #334155' }}
                                    />
                                </div>
                                <div>
                                    <label className="stats-label-text">f (Frequencies):</label>
                                    <input
                                        type="text"
                                        value={discreteF}
                                        onChange={(e) => setDiscreteF(e.target.value)}
                                        className="stats-input"
                                        style={{ background: '#0f172a', color: '#fff', border: '1px solid #334155' }}
                                    />
                                </div>
                            </>
                        )}

                        {/* Extra Params for Shortcut/StepDev */}
                        {method !== 'direct' && (
                            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <label className="stats-label-text">Assumed Mean (A):</label>
                                    <input
                                        type="number"
                                        value={assumedMean}
                                        onChange={(e) => setAssumedMean(Number(e.target.value))}
                                        className="stats-input"
                                        style={{ background: '#0f172a', color: '#fff', border: '1px solid #334155' }}
                                    />
                                </div>
                                {method === 'stepdev' && (
                                    <div style={{ flex: 1 }}>
                                        <label className="stats-label-text">Common Factor (C):</label>
                                        <input
                                            type="number"
                                            value={commonFactor}
                                            onChange={(e) => setCommonFactor(Number(e.target.value))}
                                            className="stats-input"
                                            style={{ background: '#0f172a', color: '#fff', border: '1px solid #334155' }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Output */}
                <div className="stats-card">
                    <h3 style={{ color: '#fff', marginBottom: '20px' }}>Calculation Steps</h3>
                    {result ? (
                        <div>
                            <div style={{ fontSize: '2.5rem', color: '#10b981', fontWeight: 'bold', marginBottom: '20px' }}>
                                X̄ = {result.mean.toFixed(2)}
                            </div>
                            <div style={{ display: 'grid', gap: '10px' }}>
                                {result.steps.map((step, i) => (
                                    <div key={i} style={{ padding: '10px', background: '#1e293b', borderRadius: '5px', color: '#cbd5e1', borderLeft: '3px solid #3b82f6' }}>
                                        {step}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p style={{ color: '#ef4444' }}>Invalid Data Input</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArithmeticMean;
