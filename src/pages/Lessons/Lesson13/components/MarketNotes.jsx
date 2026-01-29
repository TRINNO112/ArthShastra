import React from 'react';
import { FaCommentAlt, FaLightbulb, FaExclamationTriangle } from 'react-icons/fa';

const MarketNotes = () => {
    return (
        <section className="terminal-section">
            <h2 className="terminal-title" style={{ fontFamily: '"Comic Neue", cursive', letterSpacing: '2px', color: '#ffd700', textShadow: '3px 3px 0 #000' }}>
                TRADER'S NOTEBOOK
            </h2>

            <div style={{
                background: '#fff',
                color: '#000',
                padding: '30px',
                borderRadius: '5px',
                border: '4px solid #000',
                boxShadow: '10px 10px 0 #333',
                fontFamily: '"Comic Neue", cursive',
                maxWidth: '900px',
                margin: '0 auto'
            }}>

                {/* COMIC HEADER */}
                <div style={{ borderBottom: '3px dashed #000', paddingBottom: '20px', marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ margin: 0, fontSize: '2.5rem', textTransform: 'uppercase' }}>Issue #13: The Balance</h1>
                        <span style={{ background: '#000', color: '#fff', padding: '2px 8px', fontWeight: 'bold' }}>PRICE MECHANISM EDITION</span>
                    </div>
                    <div style={{ border: '3px solid #000', padding: '10px', transform: 'rotate(-3deg)', fontWeight: 'bold' }}>
                        TOP SECRET <br /> TRADING STRATEGIES
                    </div>
                </div>

                {/* COMIC GRID */}
                <div className="market-notes-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                    {/* PANEL 1: VIABLE vs NON-VIABLE */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#ffd700', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 1: THE INDUSTRY
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Viable vs Non-Viable Industry</h3>
                        <p><strong>Viable:</strong> Supply & Demand curves actually intersect! A price exists where both buyers and sellers are happy.</p>
                        <p style={{ marginTop: '10px' }}><strong>Non-Viable:</strong> They never meet (e.g., Commercial Space Travel... for now). Cost is too high, or price willing to pay is too low.</p>
                        <div style={{ marginTop: '15px', textAlign: 'center' }}>
                            <FaLightbulb size={30} color="#ffd700" style={{ filter: 'drop-shadow(2px 2px 0 #000)' }} />
                        </div>
                    </div>

                    {/* PANEL 2: PRICE CEILING */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#ff6b6b', color: '#fff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 2: GOVT INTERVENTION
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Price Ceiling (Max Price)</h3>
                        <p>Government sets a max price <strong>BELOW</strong> equilibrium (e.g., Rent Control).</p>
                        <div style={{ background: '#eee', padding: '10px', marginTop: '10px', borderRadius: '10px', border: '2px solid #000', position: 'relative' }}>
                            <FaCommentAlt style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#000', fontSize: '20px' }} />
                            "Great for buyers? Maybe. But it causes SHORTAGES (Excess Demand) & Black Markets!"
                        </div>
                    </div>

                    {/* PANEL 3: PRICE FLOOR */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#4ecdc4', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 3: SUPPORT
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Price Floor (Min Price)</h3>
                        <p>Government sets a min price <strong>ABOVE</strong> equilibrium (e.g., Minimum Wage).</p>
                        <div style={{ background: '#eee', padding: '10px', marginTop: '10px', borderRadius: '10px', border: '2px solid #000', position: 'relative' }}>
                            <FaCommentAlt style={{ position: 'absolute', top: '-10px', right: '-10px', color: '#000', fontSize: '20px' }} />
                            "Great for sellers? Maybe. But it causes SURPLUS (Excess Supply)."
                        </div>
                    </div>

                    {/* PANEL 4: THE INVISIBLE HAND */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa', background: '#000', color: '#fff' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#fff', color: '#000', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 4: FINAL THOUGHT
                        </div>
                        <h3 style={{ marginTop: '15px', color: '#ffd700' }}>Adam Smith's Vision</h3>
                        <p>If left alone, the market fixes itself...</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px', color: '#ccc' }}>
                            <li>Excess Demand? Price Rises.</li>
                            <li>Excess Supply? Price Falls.</li>
                        </ul>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            <FaExclamationTriangle size={40} color="#ffd700" />
                            <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>"EQUILIBRIUM IS INEVITABLE"</div>
                        </div>
                    </div>


                    {/* PANEL 5: SHIFT vs MOVEMENT */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#00bfff', color: '#fff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 5: THE ROOKIE MISTAKE
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Shift vs. Movement</h3>
                        <p><strong>Movement:</strong> Only happens if PRICE changes. You slide along the curve.</p>
                        <p style={{ marginTop: '10px' }}><strong>Shift:</strong> Happens if ANYTHING ELSE changes (Income, Tastes, Tech). The whole curve jumps!</p>
                        <div style={{ marginTop: '15px', borderLeft: '4px solid #00bfff', paddingLeft: '10px', fontStyle: 'italic', color: '#555' }}>
                            "Price changes Quantity Demanded. Income changes Demand."
                        </div>
                    </div>

                    {/* PANEL 6: RELATED GOODS */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#ff4444', color: '#fff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 6: MARKET SPIES
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Related Goods</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px', fontSize: '0.9rem' }}>
                            <div style={{ background: '#ffe6e6', padding: '10px', borderRadius: '5px' }}>
                                <strong>Substitutes</strong><br />
                                (Tea & Coffee)<br />
                                P(Tea) ⬆ = D(Coffee) ⬆
                            </div>
                            <div style={{ background: '#e6fffa', padding: '10px', borderRadius: '5px' }}>
                                <strong>Complements</strong><br />
                                (Car & Petrol)<br />
                                P(Car) ⬇ = D(Petrol) ⬆
                            </div>
                        </div>
                    </div>

                    {/* PANEL 7: NORMAL vs INFERIOR */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#888', color: '#fff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 7: INCOME EFFECT
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Rich vs. Poor Goods</h3>
                        <p><strong>Normal Good:</strong> Income ⬆ = Demand ⬆ (e.g., iPhone, Sushi)</p>
                        <p style={{ marginTop: '10px' }}><strong>Inferior Good:</strong> Income ⬆ = Demand ⬇ (e.g., Instant Noodles, Bus Rides). You switch to better stuff!</p>
                    </div>

                    {/* PANEL 8: THE ELASTICITY FACTOR */}
                    <div style={{ border: '3px solid #000', padding: '15px', position: 'relative', boxShadow: '5px 5px 0 #aaa' }}>
                        <div style={{ position: 'absolute', top: '-15px', left: '10px', background: '#a29bfe', color: '#fff', border: '2px solid #000', padding: '5px 10px', fontWeight: 'bold' }}>
                            PANEL 8: SENSITIVITY
                        </div>
                        <h3 style={{ marginTop: '15px' }}>Elasticity's Secret</h3>
                        <p>If Supply shifts, who pays the price?</p>
                        <p style={{ marginTop: '10px' }}><strong>Inelastic Demand:</strong> Price swings wildy ↕. Quantity changes little.</p>
                        <p><strong>Elastic Demand:</strong> Price barely moves. Quantity swings wildy ↔.</p>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#888' }}>
                    PAGE 13 // ARTHSHASTRA CHRONICLES
                </div>

            </div>
        </section>
    );
};

export default MarketNotes;
