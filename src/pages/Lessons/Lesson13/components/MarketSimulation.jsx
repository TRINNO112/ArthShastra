import React, { useState } from 'react';
import EquilibriumGraph from './EquilibriumGraph';
import { lesson13Data } from '../../data/lesson13Data';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';

const MarketSimulation = () => {
    const [activeScenarioId, setActiveScenarioId] = useState('initial');
    const scenarios = lesson13Data.scenarios;
    const activeData = scenarios[activeScenarioId];

    return (
        <div className="terminal-section animate-fadeInUp">
            <h2 className="terminal-title">MARKET SIMULATION DECK</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px' }}>

                {/* GRAPH PANEL */}
                <div className="terminal-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>VISUALIZER: {activeData.title}</h3>
                        <div style={{ color: '#888', fontFamily: 'monospace' }}>RES: 1080p // 60FPS</div>
                    </div>

                    <EquilibriumGraph scenarioData={activeData} />

                    <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(0, 255, 136, 0.05)', borderLeft: '3px solid #00ff88', borderRadius: '4px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <FaInfoCircle color="#00ff88" style={{ marginTop: '3px' }} />
                            <div>
                                <strong style={{ color: '#00ff88' }}>ANALYSIS REPORT:</strong>
                                <p style={{ color: '#ccc', marginTop: '5px' }}>{activeData.description}</p>
                                <p style={{ color: '#888', marginTop: '5px', fontFamily: 'monospace', fontSize: '0.9rem' }}>&gt;&gt; {activeData.label}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTROLS PANEL */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                    {/* SIM 1: SIMPLE SHIFTS */}
                    <div className="sim-panel-group">
                        <div className="sim-group-title">1. BASIC SHIFTS</div>
                        <div className="sim-controls">
                            <button className={`sim-btn ${activeScenarioId === 'initial' ? 'active' : ''}`} onClick={() => setActiveScenarioId('initial')}>RESET</button>
                            <button className={`sim-btn ${activeScenarioId === 'demand-increase' ? 'active' : ''}`} onClick={() => setActiveScenarioId('demand-increase')}>D ↑</button>
                            <button className={`sim-btn ${activeScenarioId === 'demand-decrease' ? 'active' : ''}`} onClick={() => setActiveScenarioId('demand-decrease')}>D ↓</button>
                            <button className={`sim-btn ${activeScenarioId === 'supply-increase' ? 'active' : ''}`} onClick={() => setActiveScenarioId('supply-increase')}>S ↑</button>
                            <button className={`sim-btn ${activeScenarioId === 'supply-decrease' ? 'active' : ''}`} onClick={() => setActiveScenarioId('supply-decrease')}>S ↓</button>
                        </div>
                    </div>

                    {/* SIM 2: SAME DIRECTION */}
                    <div className="sim-panel-group">
                        <div className="sim-group-title">2. SIMULTANEOUS (SAME)</div>
                        <div className="sim-controls">
                            <button className={`sim-btn ${activeScenarioId === 'both-increase-equal' ? 'active' : ''}`} onClick={() => setActiveScenarioId('both-increase-equal')}>D↑ = S↑</button>
                            <button className={`sim-btn ${activeScenarioId === 'both-increase-d-more' ? 'active' : ''}`} onClick={() => setActiveScenarioId('both-increase-d-more')}>D↑ &gt; S↑</button>
                            <button className={`sim-btn ${activeScenarioId === 'both-increase-s-more' ? 'active' : ''}`} onClick={() => setActiveScenarioId('both-increase-s-more')}>D↑ &lt; S↑</button>
                            <button className={`sim-btn ${activeScenarioId === 'both-decrease-equal' ? 'active' : ''}`} onClick={() => setActiveScenarioId('both-decrease-equal')}>D↓ = S↓</button>
                        </div>
                    </div>

                    {/* SIM 3: OPPOSITE DIRECTION */}
                    <div className="sim-panel-group">
                        <div className="sim-group-title">3. SIMULTANEOUS (OPP)</div>
                        <div className="sim-controls">
                            <button className={`sim-btn ${activeScenarioId === 'opposite-d-inc-s-dec' ? 'active' : ''}`} onClick={() => setActiveScenarioId('opposite-d-inc-s-dec')}>D↑ & S↓</button>
                            <button className={`sim-btn ${activeScenarioId === 'opposite-d-dec-s-inc' ? 'active' : ''}`} onClick={() => setActiveScenarioId('opposite-d-dec-s-inc')}>D↓ & S↑</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MarketSimulation;
