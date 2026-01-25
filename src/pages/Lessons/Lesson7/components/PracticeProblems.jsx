import React, { useState } from 'react';
import { FaCalculator, FaLightbulb } from 'react-icons/fa';
import './component.css';

const PracticeProblems = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <section className="practice-section-modern">
            <h3 className="section-header-gold"><FaCalculator /> Test Your Knowledge</h3>

            <div className="problem-card">
                <div className="problem-header">
                    <span className="badge-problem">Q1</span>
                    <h4>Calculate Missing Values</h4>
                </div>

                <div className="problem-content">
                    <p>Given the following Total Product (TP) schedule, find the Marginal Product (MP) of the 3rd worker.</p>

                    <div className="mini-table-wrapper">
                        <table className="mini-table">
                            <thead>
                                <tr>
                                    <th>Labor</th>
                                    <th>TP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>10</td></tr>
                                <tr><td>2</td><td>24</td></tr>
                                <tr className="highlight-row"><td>3</td><td>35</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="problem-action">
                    <button
                        className="btn-reveal"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        {showAnswer ? 'Hide Solution' : 'Show Solution'}
                    </button>

                    {showAnswer && (
                        <div className="solution-panel animate-fade-in">
                            <div className="solution-step">
                                <strong>Formula:</strong> MPₙ = TPₙ - TPₙ₋₁
                            </div>
                            <div className="solution-step">
                                <strong>Calculation:</strong> MP₃ = TP₃ - TP₂ = 35 - 24
                            </div>
                            <div className="solution-final">
                                <strong>Answer:</strong> MP = 11
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="tip-box">
                <FaLightbulb className="icon-tip" />
                <p>
                    <strong>Tip:</strong> Always remember that MP is just the <em>change</em> in Total Product when looking at a schedule.
                </p>
            </div>
        </section>
    );
};

export default PracticeProblems;
