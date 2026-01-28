import React from 'react';
import { FaStore, FaShoppingCart, FaHandshake, FaGlobe, FaSitemap, FaBalanceScale } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const ConceptOfMarket = () => {
    return (
        <div className="lesson-section">
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Introduction</span>
                <h2 className="section-title-lesson">Concept of Market</h2>
                <p className="section-subtitle-lesson">Where Supply meets Demand</p>
            </div>

            <div className="content-card animate-fadeInUp">
                <div className="card-content">
                    <h3 className="highlight-gold"><FaStore /> What is a Market?</h3>
                    <p className="definition-text" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#e0e0e0' }}>
                        In Economics, a <strong>Market</strong> refers to any arrangement that brings
                        <span style={{ color: '#ffd700' }}> Buyers</span> and
                        <span style={{ color: '#00ffff' }}> Sellers</span> in contact with each other
                        to exchange goods or services.
                    </p>

                    <div className="note-box" style={{ marginTop: '2rem', borderColor: '#00ffff' }}>
                        <strong style={{ color: '#00ffff' }}>Key Insight:</strong>
                        <p>It does NOT have to be a physical place (like a Mall or Mandi). Amazon (Digital), The Stock Exchange (Financial), and Labor Markets are all valid markets.</p>
                    </div>

                    <h4 style={{ marginTop: '2rem', color: '#ff99cc' }}>Essential Elements of a Market</h4>
                    <div className="reasons-grid-enhanced" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
                        <div className="reason-card-interactive cyan">
                            <div className="card-icon"><FaShoppingCart /></div>
                            <h4>Buyers & Sellers</h4>
                            <p>Both parties must exist. One to demand, one to supply.</p>
                        </div>
                        <div className="reason-card-interactive gold">
                            <div className="card-icon"><FaHandshake /></div>
                            <h4>Product/Service</h4>
                            <p>A commodity to be exchanged (Goods, Services, Labor, Capital).</p>
                        </div>
                        <div className="reason-card-interactive purple">
                            <div className="card-icon"><FaGlobe /></div>
                            <h4>Contact</h4>
                            <p>Interaction (Physical or Digital) to settle Price and Quantity.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* BASIS OF MARKET FORMS */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px' }}>
                <div className="card-content">
                    <h3 className="highlight-purple"><FaBalanceScale /> Basis of Market Classification</h3>
                    <p style={{ marginBottom: '20px', color: '#ccc' }}>How do we distinguish between different markets? We look at:</p>

                    <ul className="bullet-list-large">
                        <li>
                            <strong style={{ color: '#00ffff' }}>Number of Buyers & Sellers:</strong> <span style={{ color: '#aaa' }}>Is there one seller (Monopoly) or many (Perfect Comp)?</span>
                        </li>
                        <li>
                            <strong style={{ color: '#ffd700' }}>Nature of the Commodity:</strong> <span style={{ color: '#aaa' }}>Is the product Homogeneous (Identical) or Differentiated (UniqueBrand)?</span>
                        </li>
                        <li>
                            <strong style={{ color: '#ff4444' }}>Freedom of Entry & Exit:</strong> <span style={{ color: '#aaa' }}>Can new firms enter easily? (Free vs Restricted).</span>
                        </li>
                        <li>
                            <strong style={{ color: '#00ff00' }}>Control over Price:</strong> <span style={{ color: '#aaa' }}>Is the firm a Price Taker or Price Maker?</span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* COMIC STRIP MARKET HIERARCHY */}
            <div className="content-card animate-fadeInUp" style={{ marginTop: '30px', background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)', border: '2px solid #333', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <div className="card-content">
                    <h3 className="highlight-cyan" style={{ fontFamily: '"Comic Neue", "cursive", sans-serif', letterSpacing: '1px', fontSize: '1.5rem', marginBottom: '20px' }}>
                        <FaSitemap /> The Market Universe: A Comic Hierarchy
                    </h3>

                    {/* COMIC PANEL CONTAINER */}
                    <div className="comic-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

                        {/* PANEL 1: PERFECT COMPETITION */}
                        <div className="comic-panel" style={{ background: '#fff', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#00ff00', color: '#000', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(5deg)' }}>IDEAL</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaBalanceScale /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Perfect Competition</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "I am the <strong>Perfect</strong> Market! I have infinite sellers and identical products. No one can control the price but me (The Market Force)!"
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', background: '#eee', padding: '5px', borderRadius: '5px', border: '1px solid #aaa' }}>
                                <FaStore /> Wheat, Stocks
                            </div>
                        </div>

                        {/* PANEL 2: MONOPOLY */}
                        <div className="comic-panel" style={{ background: '#FA8072', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', top: '-10px', left: '-10px', background: '#ff4444', color: '#fff', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-5deg)' }}>KING</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaGlobe /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Monopoly</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "I am the <strong>One & Only</strong>! No competition. No substitutes. I set the price, you just pay it!"
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.3)', padding: '5px', borderRadius: '5px', border: '1px solid #000' }}>
                                <FaStore /> Railways
                            </div>
                        </div>

                        {/* PANEL 3: MONOPOLISTIC COMP */}
                        <div className="comic-panel" style={{ background: '#DDA0DD', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#d8bfd8', color: '#000', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(2deg)' }}>BRAND</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaShoppingCart /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Monopolistic Comp</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "We are many, but we are <strong>Different</strong>! I sell Lux, she sells Dove. We compete with style and ads!"
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.3)', padding: '5px', borderRadius: '5px', border: '1px solid #000' }}>
                                <FaStore /> Soaps, Toothpaste
                            </div>
                        </div>

                        {/* PANEL 4: OLIGOPOLY */}
                        <div className="comic-panel" style={{ background: '#FFE4B5', color: '#000', padding: '15px', borderRadius: '10px', boxShadow: '5px 5px 0px #000', position: 'relative', border: '3px solid #000' }}>
                            <div className="panel-badge" style={{ position: 'absolute', bottom: '-10px', left: '-10px', background: '#ffd700', color: '#000', padding: '5px 10px', fontWeight: 'bold', border: '2px solid #000', transform: 'rotate(-3deg)' }}>GIANTS</div>
                            <div style={{ textAlign: 'center', fontSize: '3rem', color: '#000', marginTop: '10px' }}><FaHandshake /></div>
                            <h4 style={{ textAlign: 'center', fontWeight: '900', textTransform: 'uppercase', marginBottom: '10px', borderBottom: '2px solid #000', paddingBottom: '5px' }}>Oligopoly</h4>
                            <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                "Just a <strong>Few of Us</strong> rule this town. If I change my price, he reacts visually. We watch each other closely."
                            </p>
                            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.8rem', background: 'rgba(255,255,255,0.3)', padding: '5px', borderRadius: '5px', border: '1px solid #000' }}>
                                <FaStore /> Cars, Telecom
                            </div>
                        </div>

                    </div>

                    <div style={{ textAlign: 'center', marginTop: '30px', color: '#aaa', fontStyle: 'italic' }}>
                        * The Market Universe - Choose your Player *
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ConceptOfMarket;
