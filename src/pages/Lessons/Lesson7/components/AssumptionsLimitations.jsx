import React from 'react';
import { FaBalanceScale, FaBan, FaMicrochip, FaClock, FaExclamationTriangle, FaCheckDouble } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const AssumptionsLimitations = () => {
    return (
        <section className="lesson-section-wrapper">
            <div className="section-header-lesson mb-8 text-center">
                <div style={{ background: '#f1c40f', color: '#000', display: 'inline-block', padding: '10px 20px', border: '3px solid #000', transform: 'rotate(-1deg)', boxShadow: '5px 5px 0px #000' }}>
                    <h3 className="section-title-modern text-banger" style={{ fontSize: '3rem', margin: 0 }}>
                        <FaBalanceScale /> FACTORY REGULATIONS
                    </h3>
                </div>
                <p className="section-subtitle-lesson mt-4">The strict rules for the "Law of Variable Proportions".</p>
            </div>

            <div className="assumptions-grid-modern" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                {/* Assumption 1 */}
                <div className="comic-panel blue" style={{ transform: 'rotate(-1deg)' }}>
                    <div className="analysis-header" style={{ color: '#0d47a1', borderBottom: '2px solid #0d47a1', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h4 className="text-banger" style={{ fontSize: '1.5rem', margin: 0 }}><FaMicrochip /> RULE #1: NO UPGRADES!</h4>
                    </div>
                    <p style={{ fontWeight: 'bold' }}>Technology must remain CONSTANT.</p>
                    <p className="text-sm">If you buy a robot, the whole law breaks.</p>
                </div>

                {/* Assumption 2 */}
                <div className="comic-panel blue" style={{ transform: 'rotate(1deg)' }}>
                    <div className="analysis-header" style={{ color: '#0d47a1', borderBottom: '2px solid #0d47a1', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h4 className="text-banger" style={{ fontSize: '1.5rem', margin: 0 }}><FaCheckDouble /> RULE #2: CLONES ONLY!</h4>
                    </div>
                    <p style={{ fontWeight: 'bold' }}>All variable factors (Workers) are IDENTICAL.</p>
                    <p className="text-sm">Worker #1 is exactly as skilled as Worker #10.</p>
                </div>

                {/* Assumption 3 */}
                <div className="comic-panel blue" style={{ transform: 'rotate(-1deg)' }}>
                    <div className="analysis-header" style={{ color: '#0d47a1', borderBottom: '2px solid #0d47a1', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h4 className="text-banger" style={{ fontSize: '1.5rem', margin: 0 }}><FaClock /> RULE #3: SHORT TERM!</h4>
                    </div>
                    <p style={{ fontWeight: 'bold' }}>We assume SHORT RUN only.</p>
                    <p className="text-sm">You can't build a new factory tomorrow.</p>
                </div>

                {/* Assumption 4 */}
                <div className="comic-panel blue" style={{ transform: 'rotate(1deg)' }}>
                    <div className="analysis-header" style={{ color: '#0d47a1', borderBottom: '2px solid #0d47a1', paddingBottom: '10px', marginBottom: '10px' }}>
                        <h4 className="text-banger" style={{ fontSize: '1.5rem', margin: 0 }}><FaExclamationTriangle /> RULE #4: FLEX RATIO!</h4>
                    </div>
                    <p style={{ fontWeight: 'bold' }}>Factor Ratio must be changeable.</p>
                    <p className="text-sm">If you need exactly 1 Driver per Truck, this law fails.</p>
                </div>
            </div>

            <div className="comic-panel" style={{ marginTop: '40px', background: '#000', color: '#fff', border: '3px solid #ff3b30' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <FaBan size={50} color="#ff3b30" />
                    <div>
                        <h4 className="text-banger" style={{ fontSize: '2rem', color: '#ff3b30', margin: 0 }}>CRITICAL FAILURE WARNING</h4>
                        <p style={{ fontSize: '1.1rem' }}>
                            This law <strong>EXPLODES</strong> if factors are Perfect Substitutes! <br />
                            It relies on the fact that Labor ≠ Capital.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssumptionsLimitations;
