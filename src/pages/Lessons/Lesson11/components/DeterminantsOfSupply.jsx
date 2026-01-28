import React from 'react';
import { FaMoneyBillWave, FaCogs, FaBoxOpen, FaLandmark, FaRandom, FaCalendarAlt, FaBolt, FaComments, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';
// Using inline styles for the specific comic look requested

const DeterminantsOfSupply = () => {
    return (
        <div className="lesson-section" style={{ fontFamily: '"Comic Neue", "Bangers", cursive', maxWidth: '1200px', margin: '0 auto' }}>

            {/* COMIC HEADER */}
            <div className="section-header-lesson animate-fadeInUp" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <span className="section-badge-lesson" style={{ background: '#ffcc00', color: '#000', fontWeight: 'bold', border: '3px solid #000', transform: 'rotate(-2deg)', boxShadow: '3px 3px 0px #000' }}>
                    ISSUE #11 VOL. 2
                </span>
                <h2 className="section-title-lesson" style={{
                    fontFamily: '"Bangers", cursive',
                    fontSize: '4.5rem',
                    letterSpacing: '3px',
                    color: '#fff',
                    textShadow: '4px 4px 0px #000, 8px 8px 0px #ff3b30'
                }}>
                    THE LEAGUE OF SUPPLY
                </h2>
                <p className="section-subtitle-lesson" style={{ fontFamily: 'monospace', background: '#000', color: '#fff', display: 'inline-block', padding: '8px 20px', fontSize: '1.2rem', transform: 'rotate(1deg)' }}>
                    7 HEROES. 1 MISSION.
                </p>
            </div>

            {/* COMIC GRID - Styled like ConceptOfMarket.jsx */}
            <div className="comic-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '30px',
                padding: '20px'
            }}>

                {/* PANEL 1: PRICE (The Leader) */}
                <div className="comic-panel animate-fadeInUp" style={{
                    background: '#fff',
                    color: '#000',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px #000',
                    position: 'relative',
                    border: '3px solid #000',
                    transition: 'transform 0.3s ease'
                }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-15px', right: '-10px', background: '#ffcc00', color: '#000', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(5deg)', fontFamily: '"Bangers", cursive', fontSize: '1.2rem' }}>LEADER</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: '#000', textTransform: 'uppercase', fontFamily: '"Bangers", cursive' }}>OWN PRICE (Px)</h3>
                        <FaMoneyBillWave style={{ fontSize: '2rem', color: '#000' }} />
                    </div>

                    <div className="speech-bubble" style={{
                        background: '#e0f7fa',
                        padding: '15px',
                        borderRadius: '20px',
                        border: '2px solid #000',
                        marginBottom: '20px',
                        position: 'relative',
                        boxShadow: '3px 3px 0px rgba(0,0,0,0.2)'
                    }}>
                        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '1.1rem' }}>"I am the Law! Price UP <FaArrowUp /> means Supply UP <FaArrowUp />!"</p>
                    </div>

                    <div style={{ background: '#000', color: '#fff', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
                        POWER: MOVEMENT ALONG CURVE
                    </div>
                </div>

                {/* PANEL 2: INPUTS (The Villain) */}
                <div className="comic-panel animate-fadeInUp" style={{
                    background: '#ffefef',
                    color: '#000',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px #000',
                    position: 'relative',
                    border: '3px solid #000'
                }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-15px', left: '-10px', background: '#ff3b30', color: '#fff', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-5deg)', fontFamily: '"Bangers", cursive', fontSize: '1.2rem' }}>VILLAIN</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: '#ff3b30', textTransform: 'uppercase', fontFamily: '"Bangers", cursive' }}>INPUT COST (Pi)</h3>
                        <FaBoxOpen style={{ fontSize: '2rem', color: '#ff3b30' }} />
                    </div>

                    <div className="burst-shape" style={{
                        background: '#fff',
                        color: '#000',
                        padding: '15px',
                        clipPath: 'polygon(10% 0, 100% 0, 95% 100%, 5% 100%)',
                        fontWeight: 'bold',
                        border: '2px solid #000',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}>
                        "I will CRUSH your profits! Cost <FaArrowUp /> = Supply <FaArrowDown />"
                    </div>

                    <div style={{ background: '#ff3b30', color: '#fff', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', border: '2px solid #000' }}>
                        THREAT: LEFT SHIFT
                    </div>
                </div>

                {/* PANEL 3: TECH (The Futurist) */}
                <div className="comic-panel animate-fadeInUp" style={{
                    background: '#e0ffff',
                    color: '#000',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px #000',
                    position: 'relative',
                    border: '3px solid #000'
                }}>
                    <div className="panel-badge" style={{ position: 'absolute', bottom: '-15px', right: '-10px', background: '#00ffff', color: '#000', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(3deg)', fontFamily: '"Bangers", cursive', fontSize: '1.2rem' }}>FUTURIST</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: '#008b8b', textTransform: 'uppercase', fontFamily: '"Bangers", cursive' }}>TECH (T)</h3>
                        <FaCogs style={{ fontSize: '2rem', color: '#008b8b' }} />
                    </div>

                    <p style={{ fontFamily: 'monospace', fontSize: '1.1rem', background: '#fff', padding: '10px', border: '2px dashed #008b8b' }}>
                        &gt; SYSTEM UPGRADE...<br />
                        &gt; COST REDUCED...<br />
                        &gt; SUPPLY BOOSTED <FaArrowUp />
                    </p>

                    <div style={{ background: '#008b8b', color: '#fff', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', marginTop: '15px', border: '2px solid #000' }}>
                        EFFECT: RIGHT SHIFT
                    </div>
                </div>

                {/* PANEL 4: GOVT (The Governor) */}
                <div className="comic-panel animate-fadeInUp" style={{
                    background: '#f0fff0',
                    color: '#000',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px #000',
                    position: 'relative',
                    border: '3px solid #000'
                }}>
                    <div className="panel-badge" style={{ position: 'absolute', top: '-15px', left: '-5px', background: '#34c759', color: '#fff', padding: '5px 15px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-2deg)', fontFamily: '"Bangers", cursive', fontSize: '1.2rem' }}>GOVERNOR</div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: '#006400', textTransform: 'uppercase', fontFamily: '"Bangers", cursive' }}>POLICY (G)</h3>
                        <FaLandmark style={{ fontSize: '2rem', color: '#006400' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
                        <div style={{ background: '#ffcccc', padding: '8px', border: '2px solid #ff3b30' }}>
                            <strong>TAX</strong>
                            <div style={{ fontSize: '0.8rem' }}>Cost <FaArrowUp /></div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#ff3b30' }}>Supply <FaArrowDown /></div>
                        </div>
                        <div style={{ background: '#ccffcc', padding: '8px', border: '2px solid #34c759' }}>
                            <strong>SUBSIDY</strong>
                            <div style={{ fontSize: '0.8rem' }}>Cost <FaArrowDown /></div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#34c759' }}>Supply <FaArrowUp /></div>
                        </div>
                    </div>

                    <div style={{ background: '#006400', color: '#fff', padding: '10px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', border: '2px solid #000' }}>
                        EFFECT: SHIFT (L or R)
                    </div>
                </div>

                {/* PANEL 5: RELATED GOODS (The Rival) */}
                <div className="comic-panel animate-fadeInUp" style={{
                    background: '#f3e5f5',
                    color: '#000',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px #000',
                    position: 'relative',
                    border: '3px solid #000'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: '#6a0dad', textTransform: 'uppercase', fontFamily: '"Bangers", cursive' }}>RIVAL (Pr)</h3>
                        <FaRandom style={{ fontSize: '2rem', color: '#6a0dad' }} />
                    </div>
                    <div style={{ padding: '10px', background: '#fff', border: '2px solid #000', borderRadius: '8px' }}>
                        <p style={{ margin: 0 }}><strong>Tea vs Coffee:</strong></p>
                        <p style={{ margin: 0, fontSize: '0.9rem' }}>"If Coffee pays more, I'm ditching Tea!"</p>
                    </div>
                    <div style={{ marginTop: '15px', textAlign: 'center', fontWeight: 'bold', color: '#6a0dad' }}>
                        Inverse Relation with Substitute Price
                    </div>
                </div>

                {/* PANEL 6: FUTURE (The Oracle) */}
                <div className="comic-panel animate-fadeInUp" style={{
                    background: '#fff3e0',
                    color: '#000',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '8px 8px 0px #000',
                    position: 'relative',
                    border: '3px solid #000'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '3px solid #000', paddingBottom: '10px', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.8rem', fontWeight: '900', color: '#ff8c00', textTransform: 'uppercase', fontFamily: '"Bangers", cursive' }}>FUTURE (Pf)</h3>
                        <FaCalendarAlt style={{ fontSize: '2rem', color: '#ff8c00' }} />
                    </div>
                    <div style={{ background: '#000', color: '#fff', padding: '10px', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', border: '2px solid #ff8c00' }}>
                        <FaBolt />
                    </div>
                    <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>
                        "Price rising soon? <br /> I'll HOARD it now!"
                    </p>
                </div>

            </div>

            {/* COMIC SUMMARY FOOTER */}
            <div className="comic-footer animate-fadeInUp" style={{
                marginTop: '40px',
                background: '#fff',
                color: '#000',
                padding: '20px',
                border: '4px solid #000',
                textAlign: 'center',
                boxShadow: '10px 10px 0px #333'
            }}>
                <h3 style={{ fontFamily: '"Bangers", cursive', fontSize: '2.5rem', marginBottom: '10px' }}>TO BE CONTINUED...</h3>
                <p style={{ fontFamily: 'monospace', fontSize: '1.2rem' }}>Will the Supply Curve survive Dr. Input's attacks? Stay tuned!</p>
            </div>

        </div>
    );
};

export default DeterminantsOfSupply;
