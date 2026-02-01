/**
 * NatureAndDistrust.jsx
 * Section 3 of Lesson 1: Nature of Stats & Distrust
 */

import { FaBalanceScale, FaPalette, FaFlask, FaExclamationTriangle, FaUserTie, FaShoppingCart, FaIndustry } from 'react-icons/fa';

function NatureAndDistrust() {
    return (
        <div className="stats-section">

            {/* Basic Economic Terms */}
            <section className="stats-card">
                <h3 className="stats-card-heading primary">
                    <FaUserTie /> KEY ECONOMIC TERMS
                </h3>
                <p style={{ marginBottom: '20px' }}>Before diving deeper, let's understand the key players in economics:</p>

                <div className="stats-grid-2">
                    <div className="stats-grid-item">
                        <h4><FaShoppingCart /> CONSUMER</h4>
                        <p>One who consumes goods and services for the satisfaction of wants.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4><FaIndustry /> PRODUCER</h4>
                        <p>One who produces or sells goods/services for the generation of income.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4><FaUserTie /> SERVICE HOLDER</h4>
                        <p>One who is in a job and works for others to earn wages/salary.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4><FaUserTie /> SERVICE PROVIDER</h4>
                        <p>One who provides services to others for payment (e.g., Doctor, Lawyer).</p>
                    </div>
                </div>
            </section>

            {/* Nature of Statistics */}
            <section className="stats-card">
                <h3 className="stats-card-heading secondary">
                    <FaBalanceScale /> NATURE OF STATISTICS
                </h3>
                <p style={{ marginBottom: '20px' }}>Is Statistics a Science or an Art? It is actually <strong>BOTH</strong>.</p>

                <div className="stats-grid-2">
                    <div className="stats-grid-item primary">
                        <h4><FaFlask /> AS A SCIENCE</h4>
                        <ul className="stats-list">
                            <li>It studies numerical data in a systematic manner.</li>
                            <li>It uses scientific methods (collection, analysis, etc.).</li>
                            <li>It assumes valid laws and principles.</li>
                        </ul>
                    </div>
                    <div className="stats-grid-item secondary">
                        <h4><FaPalette /> AS AN ART</h4>
                        <ul className="stats-list">
                            <li>It involves the application of given methods to solve problems.</li>
                            <li>It relates data to real-life problems.</li>
                            <li>Interpretation requires skill and experience.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Distrust of Statistics */}
            <section className="stats-card">
                <h3 className="stats-card-heading primary" style={{ borderColor: 'var(--stats-error)', color: 'var(--stats-error)' }}>
                    <FaExclamationTriangle /> DISTRUST OF STATISTICS
                </h3>

                <div className="stats-definition" style={{ borderLeftColor: 'var(--stats-error)', background: '#fef2f2' }}>
                    <p className="stats-definition-text">
                        <strong>"Statistics can prove anything."</strong><br />
                        Distrust refers to the lack of confidence in statistical data and methods. It arises not because statistics is wrong, but because it can be easily manipulated.
                    </p>
                </div>

                <div className="stats-grid-3" style={{ marginTop: '20px' }}>
                    <div className="stats-grid-item">
                        <h4>1. Clay in hands of Potter</h4>
                        <p>Data can be moulded in any direction by the user to support their own bias.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>2. Figures don't lie...</h4>
                        <p>"...but liars figure." Statistical outcomes can be altered by changing the sample or method.</p>
                    </div>
                    <div className="stats-grid-item">
                        <h4>3. Can prove contradictory results</h4>
                        <p>The same data can often be used to prove two opposite viewpoints if manipulated.</p>
                    </div>
                </div>

                <div className="stats-note success">
                    <strong>REMEDY:</strong> Distrust can be removed by legitimate use of data, checking reliability of sources, and avoiding bias.
                </div>
            </section>

        </div>
    );
}

export default NatureAndDistrust;
