import React from 'react';
import { FaUserSecret, FaSearch, FaStamp, FaFileContract, FaFingerprint } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const MarketScenarios = () => {
    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Investigation</span>
                <h2 className="section-title-lesson">Market Case Files</h2>
                <p className="section-subtitle-lesson">Top Secret • Economics Department • Classified</p>
            </div>

            {/* DETECTIVE BOARD CONTAINER */}
            <div className="investigation-board" style={{
                background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://www.transparenttextures.com/patterns/cork-board.png")',
                padding: '40px 20px',
                borderRadius: '15px',
                border: '10px solid #4a3c31',
                boxShadow: 'inset 0 0 50px #000'
            }}>

                <h3 style={{ fontFamily: '"Courier New", monospace', color: '#fff', textAlign: 'center', borderBottom: '1px dashed #fff', paddingBottom: '10px', marginBottom: '40px' }}>
                    <FaUserSecret /> OPEN CASES: MARKET STRUCTURES
                </h3>

                <div className="cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

                    {/* CASE FILE #001: TELECOM */}
                    <div className="case-file" style={{
                        background: '#f4e4ba',
                        color: '#333',
                        padding: '20px',
                        transform: 'rotate(-2deg)',
                        boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
                        position: 'relative',
                        fontFamily: '"Courier New", monospace'
                    }}>
                        {/* Paper Clip Visual */}
                        <div style={{ width: '40px', height: '10px', background: '#888', borderRadius: '5px', position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)' }}></div>

                        {/* Stamp */}
                        <div style={{
                            position: 'absolute', top: '10px', right: '10px',
                            border: '3px solid #cc0000', color: '#cc0000',
                            padding: '5px 10px', fontWeight: 'bold',
                            transform: 'rotate(-15deg)', opacity: 0.8, fontSize: '1.2rem'
                        }}>
                            OLIGOPOLY
                        </div>

                        <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '15px' }}>
                            <FaFileContract /> CASE #001: TELECOM
                        </h4>

                        <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                            <strong>SUBJECTS:</strong> Jio, Airtel, VI
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', marginBottom: '15px' }}>
                            <strong><FaSearch /> OBSERVATION:</strong>
                            <p>Subject 'J' slashed prices. Subjects 'A' and 'V' were forced to copy immediately. Price war engaged.</p>
                        </div>

                        <div style={{ borderTop: '1px dashed #555', paddingTop: '10px', fontStyle: 'italic' }}>
                            <strong>DETECTIVE'S NOTE:</strong><br />
                            "Classic Interdependence. They watch each other. Few players rule the city."
                        </div>
                    </div>


                    {/* CASE FILE #002: RAILWAYS */}
                    <div className="case-file" style={{
                        background: '#e8e8e8',
                        color: '#333',
                        padding: '20px',
                        transform: 'rotate(1deg)',
                        boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
                        position: 'relative',
                        fontFamily: '"Courier New", monospace'
                    }}>
                        {/* Paper Clip Visual */}
                        <div style={{ width: '40px', height: '10px', background: '#888', borderRadius: '5px', position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)' }}></div>

                        {/* Stamp */}
                        <div style={{
                            position: 'absolute', top: '10px', right: '10px',
                            border: '3px solid #000', color: '#000',
                            padding: '5px 10px', fontWeight: 'bold',
                            transform: 'rotate(10deg)', opacity: 0.8, fontSize: '1.2rem'
                        }}>
                            MONOPOLY
                        </div>

                        <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '15px' }}>
                            <FaFileContract /> CASE #002: RAILWAYS
                        </h4>

                        <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                            <strong>SUBJECT:</strong> Indian Railways
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', marginBottom: '15px' }}>
                            <strong><FaSearch /> OBSERVATION:</strong>
                            <p>Witness wanted to travel Delhi-{'>'}Mumbai. Only 1 ticket counter available. No other trains exist.</p>
                        </div>

                        <div style={{ borderTop: '1px dashed #555', paddingTop: '10px', fontStyle: 'italic' }}>
                            <strong>DETECTIVE'S NOTE:</strong><br />
                            "Subject has total control. No substitutes found. The Public has no choice."
                        </div>
                    </div>


                    {/* CASE FILE #003: VEGETABLES */}
                    <div className="case-file" style={{
                        background: '#fdf5e6',
                        color: '#333',
                        padding: '20px',
                        transform: 'rotate(-1deg)',
                        boxShadow: '5px 5px 15px rgba(0,0,0,0.5)',
                        position: 'relative',
                        fontFamily: '"Courier New", monospace'
                    }}>
                        {/* Paper Clip Visual */}
                        <div style={{ width: '40px', height: '10px', background: '#888', borderRadius: '5px', position: 'absolute', top: '-5px', left: '50%', transform: 'translateX(-50%)' }}></div>

                        {/* Stamp */}
                        <div style={{
                            position: 'absolute', bottom: '10px', right: '10px',
                            border: '3px solid #006400', color: '#006400',
                            padding: '5px 10px', fontWeight: 'bold',
                            transform: 'rotate(-10deg)', opacity: 0.8, fontSize: '1.2rem'
                        }}>
                            PERFECT
                        </div>

                        <h4 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '15px' }}>
                            <FaFileContract /> CASE #003: MANDI
                        </h4>

                        <div style={{ fontSize: '0.9rem', marginBottom: '10px' }}>
                            <strong>SUBJECTS:</strong> 500 Potato Sellers
                        </div>

                        <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px', marginBottom: '15px' }}>
                            <strong><FaSearch /> OBSERVATION:</strong>
                            <p>All selling identical potatoes at identical price (₹20). Subject X tried to charge ₹21—buyers left immediately.</p>
                        </div>

                        <div style={{ borderTop: '1px dashed #555', paddingTop: '10px', fontStyle: 'italic' }}>
                            <strong>DETECTIVE'S NOTE:</strong><br />
                            "No leader found. Market forces are in control. Products are indistinguishable."
                        </div>
                    </div>

                </div>

                <div style={{ marginTop: '40px', textAlign: 'center', color: '#aaa', fontFamily: '"Courier New", monospace' }}>
                    <FaFingerprint size={30} style={{ opacity: 0.5 }} />
                    <p>-- END OF CLASSIFIED REPORT --</p>
                </div>

            </div>
        </div>
    );
};

export default MarketScenarios;
