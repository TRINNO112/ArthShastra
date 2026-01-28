import React from 'react';
import { FaGlobeAmericas, FaTrain, FaNewspaper, FaBroadcastTower } from 'react-icons/fa';
import '../lesson9.css';

const RealWorldExamples = () => {
    return (
        <section className="lesson-section">
            <div className="market-header">
                <span className="market-status" style={{ borderColor: '#fff', color: '#fff', background: 'rgba(255,255,255,0.1)' }}>● LIVE FEED</span>
                <h2 className="market-title">MARKET NEWS 📰</h2>
                <p style={{ color: '#aaa' }}>REAL-TIME CASE STUDIES</p>
            </div>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>

                {/* NEWS TICKER HEADLINE */}
                <div style={{ background: '#ff3b3b', color: '#fff', padding: '10px 20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '4px' }}>
                    <FaBroadcastTower className="animate-pulse" />
                    <span>BREAKING: RAILWAY PRICES SLASHED TO BOOST RIDERSHIP!</span>
                </div>

                <div className="market-grid" style={{ marginTop: '20px' }}>

                    {/* CARD 1: COMMODITIES */}
                    <div className="trading-card green">
                        <div className="card-header-row">
                            <span className="stock-symbol text-green-400">COMMODITIES</span>
                            <FaGlobeAmericas />
                        </div>
                        <h4 style={{ color: '#fff', marginBottom: '10px' }}>Global Gold Market</h4>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Gold sellers are classic <strong>Price Takers</strong>. The global market sets the rate (e.g., $2000/oz).
                            Individual sellers cannot influence this price.
                        </p>
                        <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                            <div className="ticker-font text-gold">REVENUE SHAPE: HORIZONTAL</div>
                            <div className="text-sm text-gray-500">P = MR (Constant)</div>
                        </div>
                    </div>

                    {/* CARD 2: MONOPOLY */}
                    <div className="trading-card blue">
                        <div className="card-header-row">
                            <span className="stock-symbol text-blue-400">UTILITIES</span>
                            <FaTrain />
                        </div>
                        <h4 style={{ color: '#fff', marginBottom: '10px' }}>Indian Railways</h4>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            A Monopoly player. To increase the number of passengers (Quantity), they often issue seasonal discounts.
                            Price must drop to sell more.
                        </p>
                        <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                            <div className="ticker-font text-blue-400">REVENUE SHAPE: DOWNWARD</div>
                            <div className="text-sm text-gray-500">MR {'<'} Price</div>
                        </div>
                    </div>

                    {/* CARD 3: OLIGOPOLY (Soft Drinks) */}
                    <div className="trading-card red">
                        <div className="card-header-row">
                            <span className="stock-symbol text-red-400">BEVERAGES</span>
                            <FaNewspaper />
                        </div>
                        <h4 style={{ color: '#fff', marginBottom: '10px' }}>Cola Wars (Oligopoly)</h4>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Few giants (Coke/Pepsi). Prices are rigid ("Sticky"). If one drops price, others follow (Price War).
                            If one raises, others don't.
                        </p>
                        <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                            <div className="ticker-font text-red-400">REVENUE SHAPE: KINKED</div>
                            <div className="text-sm text-gray-500">Unpredictable / Rigid</div>
                        </div>
                    </div>

                    {/* CARD 4: MONOPOLISTIC (Soaps) */}
                    <div className="trading-card gold">
                        <div className="card-header-row">
                            <span className="stock-symbol text-gold">FMCG</span>
                            <FaGlobeAmericas />
                        </div>
                        <h4 style={{ color: '#fff', marginBottom: '10px' }}>Soap Market (Lux vs Dove)</h4>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Many sellers, but product differentiation (Brand, Smell). Demand is elastic - you can raise price slightly
                            and loyal fans still buy.
                        </p>
                        <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                            <div className="ticker-font text-gold">REVENUE SHAPE: ELASTIC</div>
                            <div className="text-sm text-gray-500">Flatter Downward Curve</div>
                        </div>
                    </div>

                    {/* CARD 5: STREAMING (Oligopoly/Monopolistic Mix) */}
                    <div className="trading-card green">
                        <div className="card-header-row">
                            <span className="stock-symbol text-green-400">TECH</span>
                            <FaBroadcastTower />
                        </div>
                        <h4 style={{ color: '#fff', marginBottom: '10px' }}>Streaming (Netflix/Prime)</h4>
                        <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            High competition but unique content. They battle for subscribers. Pricing is competitive but tiered.
                        </p>
                        <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                            <div className="ticker-font text-green-400">REVENUE SHAPE: DOWNWARD</div>
                            <div className="text-sm text-gray-500">High Elasticity</div>
                        </div>
                    </div>

                </div>

            </div>
        </section >
    );
};
export default RealWorldExamples;
