import React, { useState } from 'react';
import { FaTractor, FaUserPlus, FaUndo } from 'react-icons/fa';
import './component.css';

const RealWorldExamples = () => {
    // Simulator State
    const [farmers, setFarmers] = useState(1);
    const maxFarmers = 8;

    // Simplified logic for the simulator
    const getOutput = (n) => {
        if (n === 0) return 0;
        // Simple quadratic-like curve for demo
        // 1->10, 2->22, 3->36, 4->48, 5->55, 6->58, 7->58, 8->55
        const data = [0, 10, 22, 36, 48, 55, 58, 58, 55];
        return data[n] || 0;
    };

    const currentOutput = getOutput(farmers);
    const prevOutput = getOutput(farmers - 1);
    const marginalOutput = currentOutput - prevOutput;

    const addFarmer = () => {
        if (farmers < maxFarmers) setFarmers(f => f + 1);
    };

    const reset = () => setFarmers(1);

    return (
        <section className="real-world-section">
            <h3 className="section-title-modern">Real World Application</h3>

            {/* Interactive Simulator */}
            <div className="simulator-container">
                <div className="simulator-header">
                    <h4>🧑‍🌾 The Fixed Land Problem (Simulator)</h4>
                    <p>You have 1 acre of land (Fixed Capital). Add farmers to see what happens.</p>
                </div>

                <div className="simulator-grid">
                    <div className="farm-visual">
                        <div className="farm-land">
                            {Array.from({ length: maxFarmers }).map((_, i) => (
                                <div key={i} className={`farm-plot ${i < farmers ? 'occupied' : 'empty'}`}>
                                    {i < farmers ? (
                                        <div className="farmer-icon animate-pop">🧑‍🌾</div>
                                    ) : (
                                        <div className="soil-texture">🌱</div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="controls">
                            <button
                                className="btn-add-farmer"
                                onClick={addFarmer}
                                disabled={farmers >= maxFarmers}
                            >
                                <FaUserPlus /> Add Farmer
                            </button>
                            <button className="btn-reset" onClick={reset}>
                                <FaUndo /> Reset
                            </button>
                        </div>
                    </div>

                    <div className="stats-panel">
                        <div className="stat-card">
                            <span className="stat-label">Total Wheat (TP)</span>
                            <span className="stat-value text-gold">{currentOutput} tons</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-label">Added by New Guy (MP)</span>
                            <span className={`stat-value ${marginalOutput < 0 ? 'text-red' : 'text-green'}`}>
                                {marginalOutput > 0 ? '+' : ''}{marginalOutput}
                            </span>
                        </div>

                        <div className="advisor-message">
                            <strong>Advisor says:</strong>
                            <p>
                                {marginalOutput > 8 ? "Great! The new guy is helping everyone work faster!" :
                                    marginalOutput > 0 ? "Output is growing, but slower. The land is getting crowded." :
                                        "STOP! They are stepping on each other's toes! Output dropped!"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Examples */}
            <div className="examples-list-modern">
                <div className="example-item">
                    <h5>🏭 Factory Floor</h5>
                    <p>Too many workers on one machine line causes waiting times (bottlenecks).</p>
                </div>
                <div className="example-item">
                    <h5>💻 Coding Team</h5>
                    <p>"The Mythical Man-Month": Adding more programmers to a late project makes it later due to communication overhead.</p>
                </div>
            </div>
        </section>
    );
};

export default RealWorldExamples;
