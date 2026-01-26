import React, { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import '../../css/lessons.css';

const RevenueCalculations = () => {
    const [inputs, setInputs] = useState([{ q: 1, p: 10 }, { q: 2, p: 9 }, { q: 3, p: 8 }]);
    const [showFormulas, setShowFormulas] = useState(false);

    const calculate = (q, p, prevTR) => {
        const tr = q * p;
        const ar = tr / q;
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

    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Interactive</span>
                <h2 className="section-title-lesson">Revenue Calculator</h2>
                <p className="section-subtitle-lesson">See how TR, AR, and MR change with Price and Output.</p>
            </div>

            <div className="content-card">
                <div className="calc-header">
                    <h4 className="card-title text-gold m-0"><FaCalculator className="title-icon" /> Live Calculation Table</h4>
                    <button className="option-btn text-sm px-3" onClick={() => setShowFormulas(!showFormulas)}>
                        {showFormulas ? 'Hide Formulas' : 'Show Formulas'}
                    </button>
                </div>

                {showFormulas && (
                    <div className="quote-box formula-grid">
                        <div>TR = Price × Q</div>
                        <div>AR = TR ÷ Q</div>
                        <div>MR = TR<sub>n</sub> - TR<sub>n-1</sub></div>
                    </div>
                )}

                <div className="table-responsive">
                    <table className="practice-table">
                        <thead>
                            <tr>
                                <th>Output (Q)</th>
                                <th>Price (AR)</th>
                                <th>Total Revenue (TR)</th>
                                <th>Marginal Revenue (MR)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.q}</td>
                                    <td>
                                        <div className="input-cell">
                                            <span className="text-gold">₹</span>
                                            <input
                                                type="number"
                                                value={row.p}
                                                onChange={(e) => {
                                                    const newInputs = [...inputs];
                                                    newInputs[i].p = parseFloat(e.target.value) || 0;
                                                    setInputs(newInputs);
                                                }}
                                                className="premium-input input-cell-field"
                                            />
                                        </div>
                                    </td>
                                    <td className="font-bold text-green-400">₹ {row.tr}</td>
                                    <td className={`font-bold ${parseFloat(row.mr) < 0 ? 'text-red-400' : 'text-cyan-400'}`}>
                                        {row.mr !== '-' ? `₹ ${row.mr}` : '-'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="note-text text-center">
                    * Edit the Price column to simulate different market conditions (Perfect vs Imperfect competition).
                </p>
            </div>
        </section>
    );
};
export default RevenueCalculations;
