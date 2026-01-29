import React, { useState, useEffect } from 'react';
import { FaGlobe, FaNewspaper, FaArrowUp, FaArrowDown } from 'react-icons/fa';

const NewsWire = () => {
    const [news, setNews] = useState([]);
    const [activeAlert, setActiveAlert] = useState(null);
    const [reputation, setReputation] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [gameStatus, setGameStatus] = useState('playing'); // playing, finished

    const newsItems = [
        { id: 1, time: '09:30', source: 'REUTERS', title: 'Lithium Discovery in Nevada causes massive supply surge', impact: 'SUPPLY_UP' },
        { id: 2, time: '10:15', source: 'BLOOMBERG', title: 'Consumer Income Hits Record Highs as Tax Cuts Take Effect', impact: 'DEMAND_UP' },
        { id: 3, time: '11:45', source: 'WSJ', title: 'Hurricane Floris destroys 40% of Orange Crop', impact: 'SUPPLY_DOWN' },
        { id: 4, time: '13:20', source: 'CNBC', title: 'Study Links Coffee to Cancer: Consumers panic', impact: 'DEMAND_DOWN' },
        { id: 5, time: '14:00', source: 'FT', title: 'New Robot Technology slashes car manufacturing costs by 50%', impact: 'SUPPLY_UP' },
        { id: 6, time: '15:30', source: 'CNBC', title: 'Government sets Price Floor for Wheat', impact: 'SUPPLY_UP' }
    ];

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < newsItems.length) {
                setNews(prev => [newsItems[i], ...prev]);
                setActiveAlert(newsItems[i]);
                i++;
            } else {
                clearInterval(timer);
                setTimeout(() => setGameStatus('finished'), 3000); // End game after last item
            }
        }, 3500);
        return () => clearInterval(timer);
    }, [gameStatus]); // Add gameStatus dependency to allow restart

    const handleRestart = () => {
        setNews([]);
        setActiveAlert(null);
        setReputation(0);
        setGameStatus('playing');
    };

    const getRank = () => {
        if (reputation >= 50) return "MARKET MAKER (LEGEND)";
        if (reputation >= 30) return "SENIOR ANALYST";
        if (reputation >= 10) return "JUNIOR TRADER";
        return "INTERN (REKT)";
    };

    const handlePrediction = (prediction) => {
        if (!activeAlert) return;

        let isCorrect = false;
        // Simple logic: 
        // Demand UP or Supply DOWN = Price UP (BUY)
        // Demand DOWN or Supply UP = Price DOWN (SELL)

        if (prediction === 'BUY') {
            if (activeAlert.impact === 'DEMAND_UP' || activeAlert.impact === 'SUPPLY_DOWN') isCorrect = true;
        } else if (prediction === 'SELL') {
            if (activeAlert.impact === 'DEMAND_DOWN' || activeAlert.impact === 'SUPPLY_UP') isCorrect = true;
        }

        if (isCorrect) {
            setReputation(prev => prev + 10);
            setFeedback("CORRECT! Execution confirmed.");
        } else {
            setReputation(prev => Math.max(0, prev - 5));
            setFeedback("WRONG! Stop loss triggered.");
        }

        setTimeout(() => setFeedback(null), 2000);
    };

    return (
        <section className="terminal-section">
            <h2 className="terminal-title">REAL-TIME NEWS WIRE</h2>

            <div className="newswire-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                {/* LEFT: LIVE FEED */}
                <div className="terminal-card" style={{ height: '400px', overflowY: 'auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <FaGlobe color="#00ff88" />
                            <span style={{ fontWeight: 'bold' }}>GLOBAL MARKET FEED</span>
                        </div>
                        <div style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>REP: <span style={{ color: '#00ff88' }}>{reputation}</span></div>
                    </div>

                    {news.length === 0 && gameStatus === 'playing' && <div style={{ color: '#666', fontStyle: 'italic' }}>Connecting to satellite...</div>}

                    {news.map((item, idx) => {
                        if (!item) return null; // Safety check
                        return (
                            <div key={idx} style={{
                                marginBottom: '10px',
                                padding: '10px',
                                borderLeft: `3px solid ${item.impact && item.impact.includes('UP') ? '#00ff88' : '#ff4444'}`,
                                background: '#161b22',
                                animation: 'fadeIn 0.5s ease-out'
                            }}>
                                <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{item.source}</span>
                                    <span>{item.time}</span>
                                </div>
                                <div style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>{item.title}</div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT: IMPACT ANALYZER (Mini Game) */}
                <div className="terminal-card">
                    {gameStatus === 'finished' ? (
                        <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
                            <h3 style={{ color: '#fff', marginBottom: '20px' }}>SESSION COMPLETE</h3>

                            <div style={{ fontSize: '3rem', color: '#00ff88', fontFamily: 'monospace', marginBottom: '10px' }}>
                                {reputation}
                            </div>
                            <div style={{ color: '#888', marginBottom: '30px' }}>FINAL REPUTATION SCORE</div>

                            <div style={{ background: '#161b22', padding: '15px', border: '1px solid #333', marginBottom: '30px' }}>
                                <div style={{ color: '#666', fontSize: '0.8rem' }}>RANK ASSIGNED:</div>
                                <div style={{ color: '#ffd700', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' }}>{getRank()}</div>
                            </div>

                            <button className="sim-btn" onClick={handleRestart} style={{ borderColor: '#00ff88', color: '#00ff88', width: '100%' }}>
                                START NEW SESSION
                            </button>
                        </div>
                    ) : activeAlert ? (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ background: '#ff4444', color: '#000', padding: '5px', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
                                BREAKING NEWS
                            </div>
                            <h3>{activeAlert.title}</h3>
                            <p style={{ color: '#888', margin: '15px 0' }}>How will the market react?</p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <button className="sim-btn" onClick={() => handlePrediction('BUY')} style={{ borderColor: '#00ff88', color: '#00ff88' }}>
                                    <FaArrowUp /> BUY (Price UP)
                                </button>
                                <button className="sim-btn" onClick={() => handlePrediction('SELL')} style={{ borderColor: '#ff4444', color: '#ff4444' }}>
                                    <FaArrowDown /> SELL (Price DOWN)
                                </button>
                            </div>

                            {feedback && (
                                <div style={{ marginTop: '20px', padding: '10px', background: feedback.includes('CORRECT') ? 'rgba(0,255,136,0.2)' : 'rgba(255,68,68,0.2)', color: '#fff', fontWeight: 'bold' }}>
                                    {feedback}
                                </div>
                            )}

                            <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#555' }}>
                                *Predict correctly to earn Analyst Reputation
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#666' }}>
                            Waiting for market signals...
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};

export default NewsWire;
