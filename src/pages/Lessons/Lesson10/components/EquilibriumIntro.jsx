import React from 'react';
import { FaBalanceScale, FaCheckCircle, FaExclamationTriangle, FaRocket, FaChartLine, FaCode, FaLaptopCode, FaServer } from 'react-icons/fa';
import '../lesson10.css';

const EquilibriumIntro = () => {
    return (
        <div className="lesson-section">

            {/* STARTUP HEADER */}
            <div className="startup-header animate-fadeInUp">
                <span className="startup-subtitle">EPISODE 10.0</span>
                <h2 className="startup-title">PRODUCER_EQUILIBRIUM</h2>
                <div style={{ color: 'var(--neon-green)', marginTop: '10px', fontSize: '1.2rem' }}>
                    &gt; MAXIMIZING_PROFITS_ALGORITHM.exe <span className="animate-blink">_</span>
                </div>
            </div>

            {/* PITCH DECK CARD */}
            <div className="pitch-card animate-fadeInUp hover-lift">
                <div className="pitch-icon"><FaRocket /></div>
                <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: '#fff' }}>THE UNICORN GOAL 🦄</h3>
                <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.8' }}>
                    In the Startup World, every founder chases the <strong style={{ color: 'var(--neon-purple)' }}>Sweet Spot</strong>.
                </p>
                <div className="code-block" style={{ textAlign: 'left', display: 'inline-block', width: '100%', maxWidth: '600px', marginTop: '20px' }}>
                    <span className="code-keyword">const</span> <span className="code-func">Equilibrium</span> = () ={'>'} {'{'}<br />
                    &nbsp;&nbsp;<span className="code-keyword">return</span> (<span className="code-string">"Max Profit Point"</span>);<br />
                    {'}'}
                </div>
                <p style={{ marginTop: '20px', color: '#888' }}>
                    It's the point where you produce *just enough* to make the most money, without wasting resources.
                </p>
            </div>

            {/* TERMINAL: THE LOGIC */}
            <div className="terminal-card animate-fadeInUp" style={{ marginTop: '40px' }}>
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="terminal-title">profit_logic.js</div>
                </div>
                <div className="terminal-body">
                    <div style={{ color: '#8b949e', marginBottom: '10px' }}>// Two Golden Rules for Equilibrium</div>

                    <div style={{ marginBottom: '20px' }}>
                        <span className="code-keyword">if</span> ( <span className="code-func">MR</span> == <span className="code-func">MC</span> ) {'{'}<br />
                        &nbsp;&nbsp;<span style={{ color: 'var(--neon-green)' }}>// Rule 1: Marginal Revenue equals Marginal Cost</span><br />
                        &nbsp;&nbsp;console.log(<span className="code-string">"NECESSARY CONDITION MET"</span>);<br />
                        {'}'}
                    </div>

                    <div>
                        <span className="code-keyword">if</span> ( <span className="code-func">MC_Slope</span> {'>'} <span className="code-func">MR_Slope</span> ) {'{'}<br />
                        &nbsp;&nbsp;<span style={{ color: 'var(--neon-green)' }}>// Rule 2: MC cuts MR from below (Cost is rising)</span><br />
                        &nbsp;&nbsp;console.log(<span className="code-string">"SUFFICIENT CONDITION MET. STOP HERE."</span>);<br />
                        {'}'}
                    </div>
                </div>
            </div>

            {/* FEATURES GRID */}
            <div className="dashboard-grid" style={{ marginTop: '30px' }}>

                <div className="terminal-card" style={{ marginBottom: 0 }}>
                    <div className="terminal-body" style={{ textAlign: 'center' }}>
                        <FaChartLine style={{ fontSize: '2.5rem', color: 'var(--neon-purple)', marginBottom: '15px' }} />
                        <h4>Gross vs Net</h4>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>We only care about <strong style={{ color: '#fff' }}>Economic Profit</strong> (Implicit Costs Included).</p>
                    </div>
                </div>

                <div className="terminal-card" style={{ marginBottom: 0 }}>
                    <div className="terminal-body" style={{ textAlign: 'center' }}>
                        <FaServer style={{ fontSize: '2.5rem', color: 'var(--neon-cyan)', marginBottom: '15px' }} />
                        <h4>Normal Profit</h4>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>Minimum revenue needed to keep the servers running (TR = TC).</p>
                    </div>
                </div>

            </div>

            <div className="highlight-card gold" style={{ marginTop: '30px', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid #ffd700', borderRadius: '10px' }}>
                <div className="highlight-content" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <FaExclamationTriangle style={{ color: '#ffd700', fontSize: '2rem' }} />
                    <div>
                        <h3 style={{ color: '#ffd700', margin: 0 }}>Startup Runway (Boundaries)</h3>
                        <p style={{ color: '#ccc', margin: 0, marginTop: '5px' }}>
                            Check <strong>Break-Even</strong> and <strong>Shutdown Points</strong> before scaling!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EquilibriumIntro;
