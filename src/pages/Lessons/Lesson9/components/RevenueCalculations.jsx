import React, { useState } from 'react';
import { FaLaptopCode, FaRobot, FaCogs } from 'react-icons/fa';
import '../lesson9.css';

const RevenueCalculations = () => {
    const [inputs, setInputs] = useState([{ q: 1, p: 10 }, { q: 2, p: 9 }, { q: 3, p: 8 }]);

    // Auto-calculate logic
    const calculate = (q, p, prevTR) => {
        const tr = q * p;
        const ar = q > 0 ? tr / q : 0;
        const mr = prevTR !== null ? tr - prevTR : '-';
        return { tr, ar, mr };
    };

    const rows = [];
    let prevTR = null;
    inputs.forEach((input, index) => {
        const { tr, ar, mr } = calculate(input.q, input.p, index === 0 ? 0 : prevTR);
        rows.push({ ...input, tr, ar, mr });
        prevTR = tr;
    });

    const updatePrice = (index, val) => {
        const newInputs = [...inputs];
        newInputs[index].p = parseFloat(val) || 0;
        setInputs(newInputs);
    };

    return (
        <section className="lesson-section">
            <div className="market-header">
                <span className="market-status" style={{ borderColor: 'var(--trade-blue)', color: 'var(--trade-blue)' }}>● LIVE EXECUTION</span>
                <h2 className="market-title">THE ALGO-BOT 🤖</h2>
                <p style={{ color: '#aaa' }}>QUANTITATIVE ANALYSIS TERMINAL</p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>

                <div className="trading-card blue">
                    <div className="card-header-row">
                        <span className="stock-symbol text-blue-400">{`>> ALGO_TRADING_SEQUENCE_INIT`}</span>
                        <FaCogs style={{ color: 'var(--trade-blue)', animation: 'spin 10s linear infinite' }} />
                    </div>

                    <div style={{ background: '#000', padding: '20px', borderRadius: '4px', border: '1px solid #333', fontFamily: 'monospace' }}>

                        <div className="algo-grid-header" style={{ borderBottom: '1px solid #333', paddingBottom: '10px', color: '#666', fontSize: '0.9rem' }}>
                            <div>QTY (Q)</div>
                            <div>PRICE (P)</div>
                            <div style={{ textAlign: 'right' }}>TOTAL REV (TR)</div>
                            <div style={{ textAlign: 'right' }}>MARGINAL REV (MR)</div>
                        </div>

                        {rows.map((row, i) => (
                            <div key={i} className="algo-grid-row" style={{ padding: '15px 0', borderBottom: '1px dashed #222', alignItems: 'center' }}>

                                {/* Q */}
                                <div style={{ color: '#fff' }}>{row.q}</div>

                                {/* P Input */}
                                <div>
                                    <input
                                        type="number"
                                        value={row.p}
                                        onChange={(e) => updatePrice(i, e.target.value)}
                                        style={{
                                            background: '#111', border: '1px solid #444', color: 'var(--trade-gold)',
                                            width: '80px', padding: '5px', textAlign: 'center', fontFamily: 'monospace'
                                        }}
                                    />
                                </div>

                                {/* TR Result */}
                                <div style={{ textAlign: 'right', color: 'var(--trade-green)', fontWeight: 'bold' }}>
                                    ₹ {row.tr.toFixed(2)}
                                </div>

                                {/* MR Result */}
                                <div style={{ textAlign: 'right', fontWeight: 'bold', color: row.mr === '-' ? '#666' : parseFloat(row.mr) < 0 ? 'var(--trade-red)' : 'var(--trade-blue)' }}>
                                    {row.mr !== '-' ? `₹ ${parseFloat(row.mr).toFixed(2)}` : '-'}
                                </div>

                            </div>
                        ))}

                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.8rem', color: '#666' }}>
                            STATUS: <span style={{ color: 'var(--trade-green)' }}>ONLINE</span> | LATENCY: 12ms
                        </div>
                        <button
                            onClick={() => setInputs([...inputs, { q: inputs.length + 1, p: 0 }])}
                            className="trade-btn active"
                            style={{ fontSize: '0.8rem' }}
                        >
                            + ADD EXECUTION ROW
                        </button>
                    </div>

                </div>

                <div className="trading-card" style={{ border: '1px dashed #333', textAlign: 'center', color: '#666' }}>
                    <p>TYPE IN THE "PRICE" COLUMN TO SIMULATE MARKET CONDITIONS.</p>
                </div>

            </div>
        </section>
    );
};
export default RevenueCalculations;
