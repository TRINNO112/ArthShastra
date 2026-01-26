import React from 'react';
import { FaPizzaSlice, FaStore } from 'react-icons/fa';

const RealWorldExample = () => {
    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Case Study</span>
                <h2 className="section-title-lesson">The Pizza Shop Dilemma</h2>
                <p className="section-subtitle-lesson">Applying economic theory to a Friday night rush.</p>
            </div>

            <div className="premium-card" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.05), rgba(255, 165, 0, 0.05))', borderColor: 'rgba(255, 165, 0, 0.3)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                    <div style={{ background: 'var(--gradient-gold)', padding: '15px', borderRadius: '12px', color: 'black', fontSize: '2rem' }}>
                        <FaPizzaSlice />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Joe's Pizzeria</h3>
                        <p style={{ color: 'var(--text-secondary)' }}>Selling Price per Pizza (MR): <strong>₹500</strong></p>
                    </div>
                </div>

                <div className="bullet-list" style={{ marginLeft: '10px' }}>
                    <div className="highlight-card green" style={{ marginBottom: '15px' }}>
                        <div className="highlight-content">
                            <h4>Current Output: 50 Pizzas</h4>
                            <p>Joe's oven has space. Staff is relaxed. <br />Cost to make 51st Pizza (MC): <strong>₹200</strong>.</p>
                            <p className="term" style={{ color: 'var(--neon-green)' }}>Decision: PRODUCE! (Gain ₹300)</p>
                        </div>
                    </div>

                    <div className="highlight-card gold" style={{ marginBottom: '15px' }}>
                        <div className="highlight-content">
                            <h4>Current Output: 100 Pizzas</h4>
                            <p>Oven is full. Staff is rushing. Overtime pay starts.<br />Cost to make 101st Pizza (MC): <strong>₹500</strong>.</p>
                            <p className="term" style={{ color: 'var(--neon-gold)' }}>Decision: STOP! (Equilibrium Reached)</p>
                        </div>
                    </div>

                    <div className="highlight-card purple" style={{ marginBottom: '0' }}>
                        <div className="highlight-content">
                            <h4>Scenario: Output 110 Pizzas</h4>
                            <p>Chaos. Dough shortage. Paying double overtime.<br />Cost to make 111th Pizza (MC): <strong>₹800</strong>.</p>
                            <p className="term" style={{ color: 'var(--error)' }}>Result: LOSS! (Losing ₹300 per pizza)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RealWorldExample;
