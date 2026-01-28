import React from 'react';
import { FaCity, FaGasPump, FaWifi, FaLeaf } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const MarketScenarios = () => {
    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Application</span>
                <h2 className="section-title-lesson">Real World Scenarios</h2>
                <p className="section-subtitle-lesson">Analyze. Apply. Understand.</p>
            </div>

            <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: '1fr' }}>

                {/* Scenario 1: Jio */}
                <div className="reason-card-interactive" style={{ borderLeft: '4px solid #ff4444', background: 'linear-gradient(135deg, rgba(255, 68, 68, 0.1), rgba(0,0,0,0.2))' }}>
                    <div className="card-header-flex">
                        <div className="card-icon" style={{ color: '#ff4444' }}><FaWifi /></div>
                        <h4 style={{ color: '#ffcccc' }}>The Telecom Wars (Jio vs Airtel)</h4>
                    </div>
                    <p style={{ marginTop: '10px', color: '#ddd' }}>
                        <strong>Observation:</strong> When Jio entered, it slashed prices. Airtel and Vodafone forced to follow suit immediately.
                    </p>
                    <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
                        <strong>Analysis:</strong> This is classic <strong>Oligopoly</strong>.
                        <br /> Feature: <strong>Interdependence</strong>. Action by one firm forces reaction by others.
                        <br /> Outcome: Price Wars initially, then Price Stability.
                    </div>
                </div>

                {/* Scenario 2: Railways */}
                <div className="reason-card-interactive" style={{ borderLeft: '4px solid #d8bfd8', background: 'linear-gradient(135deg, rgba(216, 191, 216, 0.1), rgba(0,0,0,0.2))' }}>
                    <div className="card-header-flex">
                        <div className="card-icon" style={{ color: '#d8bfd8' }}><FaCity /></div>
                        <h4 style={{ color: '#f3e5f5' }}>Indian Railways</h4>
                    </div>
                    <p style={{ marginTop: '10px', color: '#ddd' }}>
                        <strong>Observation:</strong> You want to travel by train from Delhi to Mumbai. You have only one option: IRCTC.
                    </p>
                    <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
                        <strong>Analysis:</strong> This is a <strong>Monopoly</strong>.
                        <br /> Feature: <strong>Single Seller</strong> & <strong>No Substitutes</strong>.
                        <br /> Govt controls it to ensure public welfare (Public Monopoly).
                    </div>
                </div>

                {/* Scenario 3: Vegetable Market */}
                <div className="reason-card-interactive" style={{ borderLeft: '4px solid #00ff00', background: 'linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0,0,0,0.2))' }}>
                    <div className="card-header-flex">
                        <div className="card-icon" style={{ color: '#00ff00' }}><FaLeaf /></div>
                        <h4 style={{ color: '#ccffcc' }}>The Local Sabzi Mandi (Vegetable Market)</h4>
                    </div>
                    <p style={{ marginTop: '10px', color: '#ddd' }}>
                        <strong>Observation:</strong> Hundreds of vendors selling Potato. All potatoes look same. Price is ₹20/kg everywhere.
                    </p>
                    <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
                        <strong>Analysis:</strong> This is closest to <strong>Perfect Competition</strong>.
                        <br /> Feature: <strong>Large No. of Sellers</strong> & <strong>Homogeneous Product</strong>.
                        <br /> No vendor can charge ₹25, or buyers will move to the next cart.
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MarketScenarios;
