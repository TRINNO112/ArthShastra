import React, { useState } from 'react';
import { FaCalculator, FaTable, FaLightbulb, FaEye, FaEyeSlash } from 'react-icons/fa';

const PracticalProblems = () => {
    const [showSol1, setShowSol1] = useState(false);
    const [showSol2, setShowSol2] = useState(false);

    // Helper to render fractions
    const Fraction = ({ num, den }) => (
        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', margin: '0 5px' }}>
            <span style={{ display: 'block', borderBottom: '1px solid #fff', paddingBottom: '2px' }}>{num}</span>
            <span style={{ display: 'block', paddingTop: '2px' }}>{den}</span>
        </span>
    );

    // Square root wrapper (No top border)
    const Sqrt = ({ children }) => (
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span>
            <span style={{ paddingTop: '2px' }}>{children}</span>
        </span>
    );

    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">PRACTICAL PROBLEMS</h2>
                <p className="stats-subtitle">Step-by-Step Numerical Solutions</p>
            </div>

            {/* ═══ PROBLEM 1: Karl Pearson ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaCalculator /> Problem 1: Find Correlation (r)
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: 'var(--stats-radius)', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                        Calculate Karl Pearson's coefficient of correlation from the following data:
                    </p>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 'bold', color: '#3b82f6', width: '30px' }}>X:</div>
                        <div style={{ color: '#fff' }}>6, 2, 10, 4, 8</div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ fontWeight: 'bold', color: '#ec4899', width: '30px' }}>Y:</div>
                        <div style={{ color: '#fff' }}>9, 11, 5, 8, 7</div>
                    </div>

                    {/* Problem 1 Scatter Plot Visualization */}
                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--stats-text-muted)', marginBottom: '10px', textAlign: 'center' }}>Data Visualization</h4>
                        <div style={{ height: '150px', position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                            <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                {/* Grid Lines */}
                                {[20, 40, 60, 80, 100].map(val => (
                                    <React.Fragment key={val}>
                                        <line x1="10" y1={110 - val} x2="110" y2={110 - val} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        <line x1={10 + val} y1="10" x2={10 + val} y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                    </React.Fragment>
                                ))}
                                {/* Axes */}
                                <line x1="10" y1="10" x2="10" y2="110" stroke="#64748b" strokeWidth="2" />
                                <line x1="10" y1="110" x2="110" y2="110" stroke="#64748b" strokeWidth="2" />
                                <text x="110" y="125" fill="#64748b" fontSize="10" textAnchor="middle">X</text>
                                <text x="0" y="10" fill="#64748b" fontSize="10" textAnchor="middle">Y</text>

                                {/* Points (6,9), (2,11), (10,5), (4,8), (8,7) scaled to 12 unit axis */}
                                {[
                                    { x: 6, y: 9 }, { x: 2, y: 11 }, { x: 10, y: 5 }, { x: 4, y: 8 }, { x: 8, y: 7 }
                                ].map((p, i) => (
                                    <circle key={i} cx={10 + (p.x / 12) * 100} cy={110 - (p.y / 12) * 100} r="4" fill="#ec4899" />
                                ))}

                                {/* Trend suggestion (visual only) */}
                                <line x1={10 + (2 / 12) * 100} y1={110 - (11 / 12) * 100} x2={10 + (10 / 12) * 100} y2={110 - (5 / 12) * 100} stroke="rgba(236, 72, 153, 0.3)" strokeWidth="2" strokeDasharray="4" />
                            </svg>
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--stats-text-muted)', marginTop: '5px' }}>
                            Visual Pattern: General downward trend (r = -0.92)
                        </p>
                    </div>
                </div>

                <div className="stats-solution-toggle">
                    <button
                        onClick={() => setShowSol1(!showSol1)}
                        className="stats-btn"
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            background: showSol1 ? 'rgba(16, 185, 129, 0.2)' : 'var(--stats-primary)',
                            borderColor: showSol1 ? '#10b981' : 'transparent',
                            marginBottom: '15px'
                        }}
                    >
                        {showSol1 ? <><FaEyeSlash /> Hide Solution</> : <><FaEye /> Show Detailed Solution</>}
                    </button>

                    {showSol1 && (
                        <div style={{ animation: 'slideDown 0.3s ease-out' }}>
                            <h4 style={{ color: '#10b981', borderBottom: '1px solid rgba(16, 185, 129, 0.3)', paddingBottom: '10px', marginBottom: '15px' }}>Solution: Actual Mean Method</h4>

                            {/* Step 1: Means */}
                            <p style={{ color: 'var(--stats-text)', marginBottom: '10px' }}>
                                <strong>Step 1: Calculate Means</strong><br />
                                &Sigma;X = 30, N = 5 &rArr; Mean (X&#772;) = 30/5 = 6<br />
                                &Sigma;Y = 40, N = 5 &rArr; Mean (&#562;) = 40/5 = 8
                            </p>

                            {/* Table */}
                            <div className="stats-table-container" style={{ marginBottom: '20px' }}>
                                <table className="stats-table" style={{ fontSize: '0.9rem', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>X</th>
                                            <th>Y</th>
                                            <th>x (X-X&#772;)</th>
                                            <th>y (Y-&#562;)</th>
                                            <th>x²</th>
                                            <th>y²</th>
                                            <th>xy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>6</td><td>9</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
                                        <tr><td>2</td><td>11</td><td>-4</td><td>3</td><td>16</td><td>9</td><td>-12</td></tr>
                                        <tr><td>10</td><td>5</td><td>4</td><td>-3</td><td>16</td><td>9</td><td>-12</td></tr>
                                        <tr><td>4</td><td>8</td><td>-2</td><td>0</td><td>4</td><td>0</td><td>0</td></tr>
                                        <tr><td>8</td><td>7</td><td>2</td><td>-1</td><td>4</td><td>1</td><td>-2</td></tr>
                                        <tr style={{ fontWeight: 'bold', background: 'rgba(255,255,255,0.05)' }}>
                                            <td>Sum=30</td>
                                            <td>Sum=40</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>&Sigma;x²=40</td>
                                            <td>&Sigma;y²=20</td>
                                            <td>&Sigma;xy=-26</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Calculation */}
                            <div className="stats-formula" style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>
                                <span>r = </span>
                                <Fraction
                                    num={<span>&Sigma;xy</span>}
                                    den={<Sqrt><span>&Sigma;x<sup>2</sup> &times; &Sigma;y<sup>2</sup></span></Sqrt>}
                                />
                                <span> = </span>
                                <Fraction
                                    num={<span>-26</span>}
                                    den={<Sqrt><span>40 &times; 20</span></Sqrt>}
                                />
                                <span> = </span>
                                <Fraction
                                    num={<span>-26</span>}
                                    den={<Sqrt><span>800</span></Sqrt>}
                                />
                            </div>
                            <div className="stats-formula" style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>
                                <span> = </span>
                                <Fraction
                                    num={<span>-26</span>}
                                    den={<span>28.28</span>}
                                />
                                <span> = <strong style={{ color: '#ef4444' }}>-0.92</strong></span>
                            </div>

                            <p style={{ color: 'var(--stats-text)', background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                                <strong>Interpretation:</strong> There is a <strong style={{ color: '#ef4444' }}>High Degree of Negative Correlation</strong> between X and Y.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* ═══ PROBLEM 2: Spearman Rank ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading primary">
                    <FaTable /> Problem 2: Rank Correlation (R)
                </h3>
                <div className="stats-problem-box" style={{ background: 'var(--stats-bg-alt)', padding: '20px', borderRadius: 'var(--stats-radius)', marginBottom: '20px' }}>
                    <p style={{ color: 'var(--stats-text)', marginBottom: '15px' }}>
                        Two judges ranked 5 participants in a beauty contest as follows:
                    </p>
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', alignItems: 'center' }}>
                        <div style={{ fontWeight: 'bold', color: '#10b981', minWidth: '100px', whiteSpace: 'nowrap' }}>Judge 1:</div>
                        <div style={{ color: '#fff' }}>1, 2, 3, 4, 5</div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ fontWeight: 'bold', color: '#f59e0b', minWidth: '100px', whiteSpace: 'nowrap' }}>Judge 2:</div>
                        <div style={{ color: '#fff' }}>5, 4, 3, 2, 1</div>
                    </div>

                    {/* Problem 2 Scatter Plot Visualization */}
                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0,0,0,0.2)', borderRadius: '8px' }}>
                        <h4 style={{ fontSize: '0.9rem', color: 'var(--stats-text-muted)', marginBottom: '10px', textAlign: 'center' }}>Rank Visualization</h4>
                        <div style={{ height: '150px', position: 'relative', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
                            <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                {/* Grid Lines */}
                                {[20, 40, 60, 80, 100].map(val => (
                                    <React.Fragment key={val}>
                                        <line x1="10" y1={110 - val} x2="110" y2={110 - val} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                        <line x1={10 + val} y1="10" x2={10 + val} y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                                    </React.Fragment>
                                ))}
                                {/* Axes */}
                                <line x1="10" y1="10" x2="10" y2="110" stroke="#64748b" strokeWidth="2" />
                                <line x1="10" y1="110" x2="110" y2="110" stroke="#64748b" strokeWidth="2" />
                                <text x="110" y="125" fill="#64748b" fontSize="10" textAnchor="middle">R1</text>
                                <text x="0" y="10" fill="#64748b" fontSize="10" textAnchor="middle">R2</text>

                                {/* Points: (1,5), (2,4), (3,3), (4,2), (5,1) */}
                                {[
                                    { x: 1, y: 5 }, { x: 2, y: 4 }, { x: 3, y: 3 }, { x: 4, y: 2 }, { x: 5, y: 1 }
                                ].map((p, i) => (
                                    <circle key={i} cx={10 + (p.x / 6) * 100} cy={110 - (p.y / 6) * 100} r="4" fill="#f59e0b" />
                                ))}

                                {/* Perfect Negative Trend */}
                                <line x1={10 + (1 / 6) * 100} y1={110 - (5 / 6) * 100} x2={10 + (5 / 6) * 100} y2={110 - (1 / 6) * 100} stroke="rgba(245, 158, 11, 0.3)" strokeWidth="2" strokeDasharray="4" />
                            </svg>
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--stats-text-muted)', marginTop: '5px' }}>
                            Visual Pattern: Perfect downward diagonal line (R = -1)
                        </p>
                    </div>
                </div>

                <div className="stats-solution-toggle">
                    <button
                        onClick={() => setShowSol2(!showSol2)}
                        className="stats-btn"
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            background: showSol2 ? 'rgba(16, 185, 129, 0.2)' : 'var(--stats-primary)',
                            borderColor: showSol2 ? '#10b981' : 'transparent',
                            marginBottom: '15px'
                        }}
                    >
                        {showSol2 ? <><FaEyeSlash /> Hide Solution</> : <><FaEye /> Show Detailed Solution</>}
                    </button>

                    {showSol2 && (
                        <div style={{ animation: 'slideDown 0.3s ease-out' }}>
                            <h4 style={{ color: '#10b981', borderBottom: '1px solid rgba(16, 185, 129, 0.3)', paddingBottom: '10px', marginBottom: '15px' }}>Solution</h4>

                            {/* Table */}
                            <div className="stats-table-container" style={{ marginBottom: '20px' }}>
                                <table className="stats-table" style={{ fontSize: '0.9rem', width: '100%' }}>
                                    <thead>
                                        <tr>
                                            <th>R1 (Judge 1)</th>
                                            <th>R2 (Judge 2)</th>
                                            <th>D (R1 - R2)</th>
                                            <th>D²</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>5</td><td>-4</td><td>16</td></tr>
                                        <tr><td>2</td><td>4</td><td>-2</td><td>4</td></tr>
                                        <tr><td>3</td><td>3</td><td>0</td><td>0</td></tr>
                                        <tr><td>4</td><td>2</td><td>2</td><td>4</td></tr>
                                        <tr><td>5</td><td>1</td><td>4</td><td>16</td></tr>
                                        <tr style={{ fontWeight: 'bold', background: 'rgba(255,255,255,0.05)' }}>
                                            <td>N=5</td>
                                            <td></td>
                                            <td>&Sigma;D = 0</td>
                                            <td>&Sigma;D² = 40</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Calculation */}
                            <div className="stats-formula" style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>
                                <span>R = 1 - </span>
                                <Fraction
                                    num={<span>6 &Sigma;D²</span>}
                                    den={<span>N(N² - 1)</span>}
                                />
                                <span> = 1 - </span>
                                <Fraction
                                    num={<span>6 &times; 40</span>}
                                    den={<span>5(25 - 1)</span>}
                                />
                            </div>
                            <div className="stats-formula" style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>
                                <span> = 1 - </span>
                                <Fraction
                                    num={<span>240</span>}
                                    den={<span>5 &times; 24</span>}
                                />
                                <span> = 1 - </span>
                                <Fraction
                                    num={<span>240</span>}
                                    den={<span>120</span>}
                                />
                                <span> = 1 - 2 = <strong style={{ color: '#ef4444' }}>-1</strong></span>
                            </div>

                            <p style={{ color: 'var(--stats-text)', background: 'rgba(239, 68, 68, 0.1)', padding: '10px', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                                <strong>Interpretation:</strong> There is a <strong style={{ color: '#ef4444' }}>Perfect Negative Correlation</strong> (-1) between the rankings of the two judges. They have completely opposite tastes!
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default PracticalProblems;
