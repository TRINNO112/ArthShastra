import React from 'react';
import { FaFileInvoiceDollar, FaUserTie, FaCoins, FaIndustry, FaCalculator, FaMoneyBillWave } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const Introduction = () => {
    return (
        <section className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">The Blueprint Room</span>
                <h2 className="section-title-lesson">Concept of Cost</h2>
                <p className="section-subtitle-lesson">Expenditure on Factor & Non-Factor Inputs</p>
            </div>

            <div className="content-card animate-fadeInUp" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', border: '2px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan" style={{ fontFamily: '"Comic Neue", "cursive", sans-serif', letterSpacing: '1px', fontSize: '1.5rem', marginBottom: '20px' }}>
                        <FaIndustry /> The Cost Universe: A Comic Hierarchy
                    </h3>

                    {/* COMIC PANEL CONTAINER */}
                    <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>

                        {/* PANEL 1: EXPLICIT COST */}
                        <div className="comic-panel" style={{ background: '#fff', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#00ff88', color: '#000', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(5deg)' }}>PAID</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaFileInvoiceDollar /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Explicit Cost</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "I am the <strong>Receipt</strong>! The actual money leaving your pocket. Wages, Rent, Raw Materials—if you pay it, I track it!"
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', background: '#eee', padding: '5px', borderRadius: '5px', border: '1px solid #aaa' }}>
                                <FaCalculator /> Accounting Cost
                            </div>
                        </div>

                        {/* PANEL 2: IMPLICIT COST */}
                        <div className="comic-panel" style={{ background: '#FFE4B5', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', top: '-10px', left: '-10px', background: '#ffd700', color: '#000', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-5deg)' }}>HIDDEN</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaUserTie /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Implicit Cost</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "I am the <strong>Ghost</strong>! No receipt, but I exist. The salary you <em>could</em> have earned, the rent you <em>sacrificed</em>."
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.5)', padding: '5px', borderRadius: '5px', border: '1px solid #000' }}>
                                <FaCoins /> Opportunity Cost
                            </div>
                        </div>

                        {/* PANEL 3: TOTAL COST FORMULA */}
                        <div className="comic-panel" style={{ background: '#FFD1DC', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#ff69b4', color: '#fff', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(2deg)' }}>TOTAL</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaMoneyBillWave /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Economic Cost</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "I am the <strong>Big Boss</strong>! I combine what you paid (Explicit) AND what you sacrificed (Implicit) plus a bit of Normal Profit."
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '1rem', fontWeight: 'bold', background: 'rgba(255,255,255,0.5)', padding: '5px', borderRadius: '5px', border: '1px solid #000' }}>
                                TC = Explicit + Implicit
                            </div>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', marginTop: '30px', color: '#aaa', fontStyle: 'italic' }}>
                        * In Economics, we ALWAYS count the hidden costs! *
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Introduction;
