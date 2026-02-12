import React, { useState } from 'react';
import { FaCalculator, FaTable, FaLightbulb } from 'react-icons/fa';

const PracticalProblems = () => {

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
                </div>

                <div className="stats-solution-toggle">
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
                    <div style={{ display: 'flex', gap: '20px', marginBottom: '10px' }}>
                        <div style={{ fontWeight: 'bold', color: '#10b981', width: '60px' }}>Judge 1:</div>
                        <div style={{ color: '#fff' }}>1, 2, 3, 4, 5</div>
                    </div>
                    <div style={{ display: 'flex', gap: '20px' }}>
                        <div style={{ fontWeight: 'bold', color: '#f59e0b', width: '60px' }}>Judge 2:</div>
                        <div style={{ color: '#fff' }}>5, 4, 3, 2, 1</div>
                    </div>
                </div>

                <div className="stats-solution-toggle">
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
            </div>

        </div>
    );
};

export default PracticalProblems;
