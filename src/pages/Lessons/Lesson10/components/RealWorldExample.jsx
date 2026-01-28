import React from 'react';
import { FaPizzaSlice, FaFire, FaExclamationTriangle, FaCheckDouble, FaMoneyBillWave } from 'react-icons/fa';
import '../lesson10.css';

const RealWorldExample = () => {
    return (
        <div className="lesson-section">
            <div className="startup-header animate-fadeInUp">
                <span className="startup-subtitle">CASE_STUDY_10.1</span>
                <h2 className="startup-title" style={{ fontSize: '2.5rem', background: 'none', WebkitTextFillColor: 'initial', color: '#ffd700', textShadow: '0 0 10px rgba(255, 215, 0, 0.5)' }}>THE PIZZA SHOP DILEMMA 🍕</h2>
            </div>

            <div className="dashboard-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                {/* PANEL 1: SCALING UP */}
                <div className="comic-panel animate-fadeInLeft" style={{ animationDelay: '0.2s', background: '#e6fffa' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #000', paddingBottom: '10px' }}>
                        <h4 style={{ margin: 0, fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>STAGE 1: THE RUSH</h4>
                        <FaFire style={{ color: '#ff4444', fontSize: '1.5rem' }} />
                    </div>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <FaPizzaSlice style={{ fontSize: '4rem', color: '#ff9900' }} />
                        <h3>Output: 50 Pizzas</h3>
                    </div>
                    <div className="speech-bubble">
                        "Oven has space! Cost of next pizza? Only <strong>₹200</strong>. Selling for <strong>₹500</strong>. COOK MORE!"
                    </div>
                    <div style={{ marginTop: '15px', textAlign: 'center', fontWeight: 'bold', color: '#009900' }}>
                        <FaMoneyBillWave /> DECISION: PRODUCE!
                    </div>
                </div>

                {/* PANEL 2: EQUILIBRIUM */}
                <div className="comic-panel animate-fadeInUp" style={{ animationDelay: '0.4s', background: '#fffbea' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #000', paddingBottom: '10px' }}>
                        <h4 style={{ margin: 0, fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>STAGE 2: THE BALANCE</h4>
                        <FaCheckDouble style={{ color: '#ffd700', fontSize: '1.5rem' }} />
                    </div>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <FaPizzaSlice style={{ fontSize: '4rem', color: '#ffd700', filter: 'drop-shadow(2px 2px 0 #000)' }} />
                        <h3>Output: 100 Pizzas</h3>
                    </div>
                    <div className="speech-bubble">
                        "Oven is FULL. Cost of next pizza matches price (₹500). Max Profit achieved. <strong>DO NOT MOVE!</strong>"
                    </div>
                    <div style={{ marginTop: '15px', textAlign: 'center', fontWeight: 'bold', color: '#b38600' }}>
                        <FaCheckDouble /> DECISION: EQUILIBRIUM!
                    </div>
                </div>

                {/* PANEL 3: THE CRASH */}
                <div className="comic-panel animate-fadeInRight" style={{ animationDelay: '0.6s', background: '#fff5f5' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '3px solid #000', paddingBottom: '10px' }}>
                        <h4 style={{ margin: 0, fontFamily: '"Bangers", cursive', fontSize: '1.5rem' }}>STAGE 3: THE CHAOS</h4>
                        <FaExclamationTriangle style={{ color: '#ff0000', fontSize: '1.5rem' }} />
                    </div>
                    <div style={{ textAlign: 'center', margin: '20px 0' }}>
                        <FaPizzaSlice style={{ fontSize: '4rem', color: '#ff0000', transform: 'rotate(20deg)' }} />
                        <h3>Output: 110 Pizzas</h3>
                    </div>
                    <div className="speech-bubble" style={{ background: '#ffecec' }}>
                        "Paying double overtime! Dough shortage! Cost is <strong>₹800</strong> per pizza. LOSING MONEY!"
                    </div>
                    <div style={{ marginTop: '15px', textAlign: 'center', fontWeight: 'bold', color: '#cc0000' }}>
                        <FaExclamationTriangle /> DECISION: STOP!
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RealWorldExample;
