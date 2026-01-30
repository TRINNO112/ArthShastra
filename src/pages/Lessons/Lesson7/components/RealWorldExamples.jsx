import React, { useState } from 'react';
import { FaTractor, FaUserPlus, FaUndo } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

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
            <h3 className="section-title-modern text-center text-banger" style={{ fontSize: '3rem', marginBottom: '30px' }}>
                <FaTractor /> REAL WORLD LAB
            </h3>

            {/* Interactive Simulator: Retro Console Style */}
            <div className="simulator-container" style={{ maxWidth: '800px', margin: '0 auto', background: '#333', borderRadius: '20px', padding: '20px', border: '5px solid #000', boxShadow: '10px 10px 0px rgba(0,0,0,0.5)' }}>

                {/* SCREEN */}
                <div style={{ background: '#c5e1a5', borderRadius: '10px', padding: '20px', border: '5px inset #555', fontFamily: 'VT323, monospace', position: 'relative' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
                        <span>FARM SIMULATOR 3000</span>
                        <span>BAT: 100%</span>
                    </div>

                    <div className="simulator-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div className="farm-visual" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                            {Array.from({ length: maxFarmers }).map((_, i) => (
                                <div key={i} className={`farm-plot ${i < farmers ? 'occupied' : 'empty'}`}
                                    style={{
                                        aspectRatio: '1', background: i < farmers ? '#8d6e63' : '#a5d6a7', borderRadius: '5px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', border: '2px dashed #558b2f'
                                    }}>
                                    {i < farmers ? '🧑‍🌾' : '🌱'}
                                </div>
                            ))}
                        </div>

                        <div className="stats-panel" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ background: '#000', color: '#00ff00', padding: '10px', fontFamily: 'Share Tech Mono' }}>
                                <div style={{ fontSize: '0.8rem' }}>TOTAL OUTPUT</div>
                                <div style={{ fontSize: '1.5rem' }}>{currentOutput} TONS</div>
                            </div>
                            <div style={{ background: '#000', color: marginalOutput < 0 ? 'red' : '#00ff00', padding: '10px', fontFamily: 'Share Tech Mono' }}>
                                <div style={{ fontSize: '0.8rem' }}>MARGINAL (MP)</div>
                                <div style={{ fontSize: '1.5rem' }}>{marginalOutput > 0 ? '+' : ''}{marginalOutput}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '15px', background: '#000', color: '#fff', padding: '10px', borderRadius: '5px' }}>
                        <span style={{ color: '#f1c40f' }}>ADVISOR:</span> {marginalOutput > 8 ? "Looking good! Keep hiring!" : marginalOutput > 0 ? "Crowded... efficiency dropping." : "STOP!! IDIOTS ARE RUINING THE CROP!"}
                    </div>
                </div>

                {/* CONTROLS */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
                    <button onClick={addFarmer} disabled={farmers >= maxFarmers} style={{ background: '#d32f2f', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #b71c1c', fontWeight: 'bold', boxShadow: '2px 4px 0px #7f0000', pointerEvents: farmers >= maxFarmers ? 'none' : 'auto' }}>A</button>
                    <button onClick={reset} style={{ background: '#1976d2', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0d47a1', fontWeight: 'bold', boxShadow: '2px 4px 0px #002171' }}>B</button>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', color: '#ccc' }}>
                        <span>A: ADD</span>
                        <span>B: RESET</span>
                    </div>
                </div>

            </div>

            {/* Other Examples: CASE FILES */}
            <div className="examples-list-modern factory-grid-2" style={{ marginTop: '50px' }}>
                <div className="comic-panel animate-fadeInLeft" style={{ transform: 'rotate(-1deg)' }}>
                    <h5 className="text-banger" style={{ fontSize: '1.5rem' }}><FaTractor /> CASE FILE: #FACTORY</h5>
                    <p><strong>Scenario:</strong> 1 Machine, 100 Workers.</p>
                    <p><strong>Result:</strong> Workers waiting in line. Machine idle time = 0. Worker idle time = 90%.</p>
                </div>
                <div className="comic-panel animate-fadeInRight" style={{ transform: 'rotate(1deg)' }}>
                    <h5 className="text-banger" style={{ fontSize: '1.5rem' }}><FaUserPlus /> CASE FILE: #CODING</h5>
                    <p><strong>Scenario:</strong> "The Mythical Man-Month"</p>
                    <p><strong>Result:</strong> Adding more developers to a late project makes it LATER due to communication chaos!</p>
                </div>
            </div>
        </section>
    );
};

export default RealWorldExamples;
