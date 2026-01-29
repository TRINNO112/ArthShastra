import React, { useState, useEffect } from 'react';

const OrderBook = () => {
    // Mock Data Generators
    const generateOrders = (basePrice, count, type) => {
        return Array.from({ length: count }, (_, i) => ({
            price: type === 'bid' ? basePrice - i * 0.5 - Math.random() : basePrice + i * 0.5 + Math.random(),
            amount: Math.floor(Math.random() * 100) + 10,
            total: 0 // calc later
        }));
    };

    const [bids] = useState(generateOrders(100, 8, 'bid'));
    const [asks] = useState(generateOrders(100.5, 8, 'ask'));

    return (
        <section className="terminal-section">
            <h2 className="terminal-title">LEVEL 2 MARKET DATA (ORDER BOOK)</h2>
            <p style={{ color: '#888', marginBottom: '20px' }}>See the invisible hand at work. Buyers (Bids) meet Sellers (Asks).</p>

            <div className="orderbook-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: '#000', padding: '2px' }}>

                {/* BIDS (BUYERS) */}
                <div className="terminal-card" style={{ padding: 0, margin: 0, borderRight: '1px solid #333' }}>
                    <div style={{ padding: '10px', background: '#161b22', borderBottom: '1px solid #333', textAlign: 'center', color: '#00ff88' }}>
                        BIDS (BUYERS)
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #333', color: '#666', padding: '5px' }}>
                            <div style={{ textAlign: 'right' }}>Qty</div>
                            <div style={{ textAlign: 'right' }}>Price</div>
                        </div>
                        {bids.map((order, i) => (
                            <div key={i} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '5px' }}>
                                <div style={{ textAlign: 'right', fontFamily: 'monospace', zIndex: 1, position: 'relative' }}>{order.amount}</div>
                                <div style={{ textAlign: 'right', fontFamily: 'monospace', color: '#00ff88', zIndex: 1, position: 'relative' }}>{order.price.toFixed(2)}</div>
                                <div style={{
                                    position: 'absolute',
                                    right: 0, top: 0, bottom: 0,
                                    width: `${(order.amount / 150) * 100}%`,
                                    background: 'rgba(0, 255, 136, 0.1)',
                                    zIndex: 0
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ASKS (SELLERS) */}
                <div className="terminal-card" style={{ padding: 0, margin: 0 }}>
                    <div style={{ padding: '10px', background: '#161b22', borderBottom: '1px solid #333', textAlign: 'center', color: '#ff4444' }}>
                        ASKS (SELLERS)
                    </div>
                    <div style={{ fontSize: '0.9rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #333', color: '#666', padding: '5px' }}>
                            <div style={{ textAlign: 'left' }}>Price</div>
                            <div style={{ textAlign: 'left' }}>Qty</div>
                        </div>
                        {asks.map((order, i) => (
                            <div key={i} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '5px' }}>
                                <div style={{ textAlign: 'left', fontFamily: 'monospace', color: '#ff4444', zIndex: 1, position: 'relative' }}>{order.price.toFixed(2)}</div>
                                <div style={{ textAlign: 'left', fontFamily: 'monospace', zIndex: 1, position: 'relative' }}>{order.amount}</div>
                                <div style={{
                                    position: 'absolute',
                                    left: 0, top: 0, bottom: 0,
                                    width: `${(order.amount / 150) * 100}%`,
                                    background: 'rgba(255, 68, 68, 0.1)',
                                    zIndex: 0
                                }}></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div style={{ fontSize: '1.2rem', fontFamily: 'monospace' }}>
                    ALGO SPREAD: <span style={{ color: '#fff' }}>{(asks[0].price - bids[0].price).toFixed(2)}</span>
                </div>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>The spread must close to 0 for a trade to happen!</p>
            </div>
        </section>
    );
};

export default OrderBook;
