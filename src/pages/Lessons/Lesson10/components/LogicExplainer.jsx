import React, { useState } from 'react';
import { FaTerminal, FaPlay, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import '../lesson10.css';

const LogicExplainer = () => {
    const [step, setStep] = useState(0);

    const steps = [
        {
            line: 1,
            code: "CHECK: Is MR > MC?",
            comment: "// Is Revenue > Cost?",
            output: "YES. Profit increases. Strategy: SCALE UP! 🚀",
            status: "Running..."
        },
        {
            line: 2,
            code: "CHECK: Is MR == MC?",
            comment: "// Is Revenue = Cost?",
            output: "YES. Max Profit Reached. Strategy: HOLD POSITION. 📍",
            status: "Eq. Found"
        },
        {
            line: 3,
            code: "CHECK: Is MC > MR?",
            comment: "// Is Cost > Revenue?",
            output: "WARNING: LOSS DETECTED. Strategy: SCALE DOWN! 🛑",
            status: "Error"
        }
    ];

    return (
        <div className="lesson-section">
            <div className="startup-header">
                <span className="startup-subtitle">LOGIC_CORE</span>
                <h2 className="startup-title" style={{ fontSize: '2.5rem' }}>THE PROFIT ALGORITHM 📟</h2>
            </div>

            <div className="terminal-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div className="terminal-header">
                    <div className="terminal-dots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="terminal-title">producer_brain.exe</div>
                </div>

                <div className="terminal-body">
                    <p style={{ color: '#8b949e' }}>Initializing Profit Maximization Protocol...</p>
                    <br />

                    {steps.map((s, index) => (
                        <div
                            key={index}
                            onClick={() => setStep(index)}
                            style={{
                                opacity: step === index ? 1 : 0.5,
                                cursor: 'pointer',
                                transition: 'all 0.3s',
                                borderLeft: step === index ? '3px solid var(--neon-cyan)' : '3px solid transparent',
                                paddingLeft: '15px',
                                marginBottom: '20px'
                            }}
                        >
                            <div style={{ fontFamily: 'monospace', fontSize: '1.1rem' }}>
                                <span style={{ color: '#ff79c6' }}>STEP {index + 1}:</span>
                                <span style={{ color: '#f1fa8c', marginLeft: '10px' }}>{s.code}</span>
                                <span style={{ color: '#6272a4', marginLeft: '15px', fontStyle: 'italic' }}>{s.comment}</span>
                            </div>

                            {step === index && (
                                <div className="code-block animate-fadeInUp" style={{ marginTop: '10px', background: '#1e1e1e', borderLeftColor: index === 2 ? '#ff5555' : (index === 1 ? '#f1fa8c' : '#50fa7b') }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <FaTerminal />
                                        <strong>OUTPUT:</strong> {s.output}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    <div style={{ marginTop: '30px', borderTop: '1px solid #333', paddingTop: '15px', textAlign: 'center' }}>
                        <button className="startup-subtitle" style={{ background: 'transparent', cursor: 'pointer' }} onClick={() => setStep((step + 1) % 3)}>
                            <FaPlay style={{ fontSize: '0.8rem', marginRight: '5px' }} /> NEXT STEP
                        </button>
                    </div>

                </div>
            </div>

            <p style={{ textAlign: 'center', color: '#888', marginTop: '20px' }}>
                *Click on any step or use Next to simulate the decision process.
            </p>

        </div>
    );
};

export default LogicExplainer;
