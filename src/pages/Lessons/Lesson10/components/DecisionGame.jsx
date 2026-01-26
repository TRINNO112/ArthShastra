import React, { useState } from 'react';
import { FaPlay, FaStop, FaTrophy, FaRedo } from 'react-icons/fa';

const DecisionGame = () => {
    const [step, setStep] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [history, setHistory] = useState([]);

    const scenarios = [
        { q: 4, mr: 10, mc: 4, decision: 'produce' },
        { q: 5, mr: 10, mc: 7, decision: 'produce' },
        { q: 6, mr: 10, mc: 10, decision: 'stop' }, // Equilibrium
        { q: 7, mr: 10, mc: 15, decision: 'stop_previous' } // Should have stopped at 6
    ];

    // Simple game logic:
    // We are at Q=4. Options: Produce Next Unit vs Stop.
    // If Q=4, next is 5. MC=7, MR=10. Profit = 3. Correct: Produce.
    // If Q=5, next is 6. MC=10, MR=10. Profit = 0 (Normal). Correct: Produce (to reach max cumulative).
    // If Q=6, next is 7. MC=15, MR=10. Loss = -5. Correct: Stop.

    const gameState = {
        0: { q: 4, nextMc: 7, mr: 10, message: "You are currently producing 4 units. Market Price (MR) is ₹10. Cost to produce Unit 5 is ₹7." },
        1: { q: 5, nextMc: 10, mr: 10, message: "Great! Profit calculated. Now at 5 units. MR is ₹10. Cost to produce Unit 6 is ₹10." },
        2: { q: 6, nextMc: 15, mr: 10, message: "Equilibrium Reached? Now at 6 units. MR is ₹10. Cost to produce Unit 7 is ₹15." },
        3: { q: 7, nextMc: 20, mr: 10, message: "You produced Unit 7. You lost money on this unit! Game Over." }
    };

    const handleDecision = (choice) => {
        // Choice: 'produce' or 'stop'
        const current = gameState[step];

        if (choice === 'produce') {
            if (step === 2) {
                // Producing Unit 7 (when at 6)
                setFeedback({ type: 'error', text: `Mistake! MC (15) > MR (10). You lost ₹5 on this unit.` });
                setScore(score - 5);
                setStep(3); // Game Over state logic
            } else {
                // Producing Unit 5 or 6
                const profit = current.mr - current.nextMc;
                setScore(score + profit);
                setFeedback({ type: 'success', text: `Correct! You gained ₹${profit} on this unit.` });
                setStep(step + 1);
            }
        } else {
            // Choice: Stop
            if (step === 2) {
                // Stopping at 6 (Correct Equilibrium)
                setFeedback({ type: 'success', text: "Perfect! You stopped exactly at Equilibrium (MR=MC). Maximum Profit secured!" });
                setStep(4); // Win
            } else if (step < 2) {
                // Stopping too early
                setFeedback({ type: 'warning', text: "You stopped too early! MR > MC, so you missed out on potential profit." });
                setStep(4); // End but not optimal
            } else {
                setStep(4);
            }
        }
    };

    const resetGame = () => {
        setStep(0);
        setScore(0);
        setFeedback(null);
    };

    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Interactive Simulation</span>
                <h2 className="section-title-lesson">The Producer's Dilemma</h2>
                <p className="section-subtitle-lesson">Make real-time decisions. Produce or Stop?</p>
            </div>

            <div className="premium-card" style={{ textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                {step === 4 || step === 3 ? (
                    <div className="game-result">
                        <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
                            {score >= 3 ? <FaTrophy color="var(--neon-gold)" /> : <FaStop color="var(--error)" />}
                        </div>
                        <h3>Game Over</h3>
                        <p className="metric-value-giant" style={{ fontSize: '3rem' }}>₹{score}</p>
                        <p style={{ color: 'var(--text-secondary)' }}>Total Additional Profit Gained</p>

                        <div className="quote-box" style={{ marginTop: '20px' }}>
                            {score >= 3 ? "Excellent! You followed the Golden Rule: Produce as long as MR ≥ MC." : "Keep practicing! Remember, stop only when MC starts to exceed MR."}
                        </div>

                        <button onClick={resetGame} className="premium-toggle-btn active" style={{ marginTop: '20px' }}>
                            <FaRedo /> Try Again
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="highlight-card cyan" style={{ width: '100%', maxWidth: '600px' }}>
                            <div className="highlight-content">
                                <h3>Current Output: {gameState[step].q} Units</h3>
                                <div className="feature-grid" style={{ marginTop: '15px' }}>
                                    <div className="feature-item" style={{ textAlign: 'center', padding: '15px' }}>
                                        <div style={{ color: 'var(--neon-cyan)', fontSize: '0.9rem' }}>Marginal Revenue</div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹10</div>
                                    </div>
                                    <div className="feature-item" style={{ textAlign: 'center', padding: '15px' }}>
                                        <div style={{ color: 'var(--neon-gold)', fontSize: '0.9rem' }}>Cost of Next Unit</div>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹{gameState[step].nextMc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>It will cost <strong>₹{gameState[step].nextMc}</strong> to make the next unit, and you will sell it for <strong>₹10</strong>.</p>

                        {feedback && (
                            <div style={{ padding: '10px', borderRadius: '8px', background: feedback.type === 'success' ? 'rgba(0,255,136,0.1)' : 'rgba(255,107,107,0.1)', color: feedback.type === 'success' ? 'var(--neon-green)' : 'var(--error)', marginBottom: '20px' }}>
                                {feedback.text}
                            </div>
                        )}

                        <div className="premium-toggle-group">
                            <button onClick={() => handleDecision('produce')} className="premium-toggle-btn" style={{ borderColor: 'var(--neon-green)', color: 'var(--neon-green)' }}>
                                <FaPlay /> Produce Next Unit
                            </button>
                            <button onClick={() => handleDecision('stop')} className="premium-toggle-btn" style={{ borderColor: 'var(--error)', color: 'var(--error)' }}>
                                <FaStop /> Stop Here
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default DecisionGame;
