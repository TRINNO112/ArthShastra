import React, { useState } from 'react';
import { FaArrowsAltH, FaExchangeAlt, FaBolt, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import SupplyMovementChart from './SupplyMovementChart';
import SupplyShiftChart from './SupplyShiftChart';
import '../../Lesson5/components/lesson5.css';

const MovementVsShiftSupply = () => {
    const [shiftType, setShiftType] = useState('none');
    const [moveType, setMoveType] = useState('extension');

    return (
        <div className="lesson-section" style={{ fontFamily: '"Comic Neue", "Bangers", cursive', maxWidth: '1200px', margin: '0 auto' }}>

            <div className="section-header-lesson animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span className="section-badge-lesson" style={{ background: '#ff3b30', color: '#fff', border: '3px solid #000', transform: 'rotate(-2deg)', boxShadow: '4px 4px 0px #000' }}>VS BATTLE</span>
                <h2 className="section-title-lesson" style={{ fontFamily: '"Bangers", cursive', fontSize: '4rem', textShadow: '4px 4px 0px #000' }}>
                    MOVEMENT vs SHIFT
                </h2>
                <p className="section-subtitle-lesson" style={{ background: '#fff', color: '#000', display: 'inline-block', padding: '5px 15px', border: '2px solid #000', fontWeight: 'bold' }}>
                    THE ULTIMATE SHOWDOWN
                </p>
            </div>

            <div className="comic-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>

                {/* LEFT PANEL: MOVEMENT */}
                <div className="comic-panel animate-fadeInLeft" style={{
                    background: '#fff',
                    border: '4px solid #000',
                    borderRadius: '15px',
                    padding: '25px',
                    boxShadow: '10px 10px 0px #000'
                }}>
                    <div style={{ background: '#ffd700', border: '3px solid #000', padding: '10px', textAlign: 'center', marginBottom: '20px', transform: 'rotate(-1deg)' }}>
                        <h3 style={{ margin: 0, fontSize: '2rem', fontFamily: '"Bangers", cursive', color: '#000' }}>MOVEMENT ALONG CURVE</h3>
                        <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>CAUSED BY OWN PRICE (Px)</span>
                    </div>

                    {/* CONTROLS */}
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', justifyContent: 'center' }}>
                        <button
                            onClick={() => setMoveType('extension')}
                            style={{
                                background: moveType === 'extension' ? '#00c851' : '#eee',
                                border: '3px solid #000',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: moveType === 'extension' ? 'inset 3px 3px 0px rgba(0,0,0,0.2)' : '4px 4px 0px #000',
                                transform: moveType === 'extension' ? 'translate(2px, 2px)' : 'none'
                            }}
                        >
                            <FaArrowUp /> EXPANSION
                        </button>
                        <button
                            onClick={() => setMoveType('contraction')}
                            style={{
                                background: moveType === 'contraction' ? '#ff4444' : '#eee',
                                border: '3px solid #000',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                color: moveType === 'contraction' ? '#fff' : '#000',
                                boxShadow: moveType === 'contraction' ? 'inset 3px 3px 0px rgba(0,0,0,0.2)' : '4px 4px 0px #000',
                                transform: moveType === 'contraction' ? 'translate(2px, 2px)' : 'none'
                            }}
                        >
                            <FaArrowDown /> CONTRACTION
                        </button>
                    </div>

                    {/* GRAPH CONTAINER */}
                    <div style={{ border: '3px solid #000', borderRadius: '10px', padding: '10px', background: '#f9f9f9' }}>
                        <SupplyMovementChart type={moveType} />
                    </div>

                    <div className="speech-bubble" style={{
                        marginTop: '20px',
                        background: '#1a1a1a', // DARK background as requested
                        color: '#ffff00',      // Neon Yellow text for visibility
                        border: '3px solid #000',
                        padding: '15px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.5)'
                    }}>
                        <strong>Result:</strong> {moveType === 'extension' ? "High Price? I produce MORE!" : "Low Price? I produce LESS!"}
                    </div>
                </div>

                {/* RIGHT PANEL: SHIFT */}
                <div className="comic-panel animate-fadeInRight" style={{
                    background: '#e0ffff',
                    border: '4px solid #000',
                    borderRadius: '15px',
                    padding: '25px',
                    boxShadow: '10px 10px 0px #000'
                }}>
                    <div style={{ background: '#00ffff', border: '3px solid #000', padding: '10px', textAlign: 'center', marginBottom: '20px', transform: 'rotate(1deg)' }}>
                        <h3 style={{ margin: 0, fontSize: '2rem', fontFamily: '"Bangers", cursive', color: '#000' }}>SHIFT OF CURVE</h3>
                        <span style={{ fontSize: '1rem', fontWeight: 'bold' }}>CAUSED BY OTHER FACTORS (Tech, Tax)</span>
                    </div>

                    {/* CONTROLS */}
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', justifyContent: 'center' }}>
                        <button
                            onClick={() => setShiftType('left')}
                            style={{
                                background: shiftType === 'left' ? '#ff4444' : '#eee',
                                border: '3px solid #000',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                color: shiftType === 'left' ? '#fff' : '#000',
                                boxShadow: shiftType === 'left' ? 'inset 3px 3px 0px rgba(0,0,0,0.2)' : '4px 4px 0px #000',
                                transform: shiftType === 'left' ? 'translate(2px, 2px)' : 'none'
                            }}
                        >
                            ⬅ DECREASE (Left)
                        </button>
                        <button
                            onClick={() => setShiftType('none')}
                            style={{
                                background: '#eee',
                                border: '3px solid #000',
                                padding: '10px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: '4px 4px 0px #000'
                            }}
                        >
                            RESET
                        </button>
                        <button
                            onClick={() => setShiftType('right')}
                            style={{
                                background: shiftType === 'right' ? '#00c851' : '#eee',
                                border: '3px solid #000',
                                padding: '10px 20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                boxShadow: shiftType === 'right' ? 'inset 3px 3px 0px rgba(0,0,0,0.2)' : '4px 4px 0px #000',
                                transform: shiftType === 'right' ? 'translate(2px, 2px)' : 'none'
                            }}
                        >
                            INCREASE (Right) ➡
                        </button>
                    </div>

                    {/* GRAPH CONTAINER */}
                    <div style={{ border: '3px solid #000', borderRadius: '10px', padding: '10px', background: '#fff' }}>
                        <SupplyShiftChart shiftType={shiftType} />
                    </div>

                    <div className="speech-bubble" style={{
                        marginTop: '20px',
                        background: '#1a1a1a', // DARK background for contrast
                        color: '#00ffff',      // Neon Cyan text
                        border: '3px solid #000',
                        padding: '15px',
                        borderRadius: '15px',
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        boxShadow: '4px 4px 0px rgba(0,0,0,0.5)'
                    }}>
                        <strong>Result:</strong> {shiftType === 'right' ? "New Tech! Supply increases at SAME price!" : shiftType === 'left' ? "More Tax! Supply drops at SAME price!" : "Original Curve."}
                    </div>
                </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'monospace', background: '#222', color: '#ffd700', padding: '15px', border: '3px solid #000', boxShadow: '5px 5px 0px #000' }}>
                GAME TIP: Only <strong>Price</strong> causes Movement. Everything else (Tech, Cost, Tax) causes a <strong>Shift</strong>!
            </div>

        </div>
    );
};

export default MovementVsShiftSupply;
