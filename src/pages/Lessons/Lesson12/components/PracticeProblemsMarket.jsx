import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaCheckCircle, FaTimesCircle, FaGlobe, FaWifi, FaLeaf, FaTooth, FaTrain, FaIndustry, FaLightbulb, FaShoppingBag, FaBolt, FaCar } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const PracticeProblemsMarket = () => {
    // 10 Questions Data
    const marketPosts = [
        {
            id: 'q1',
            user: 'SparkleWhite_Official',
            avatarColor: '#fff',
            avatarBg: '#d8bfd8', // Purple
            icon: <FaTooth />,
            role: 'Brand Manager',
            content: "Launch Alert! 🚀 Our NEW 'Mint-Chocolate' flavor is here! Unlike standard brands, WE give you 12-hour freshness + whitening. Don't settle for boring paste! #ShineBright",
            question: "Which market allows this product differentiation?",
            options: [
                { label: 'Perfect Competition', correct: false },
                { label: 'Monopolistic Comp', correct: true },
                { label: 'Monopoly', correct: false }
            ],
            explanation: "Correct! Product Differentiation (Brand, Flavor) is a key feature of Monopolistic Competition.",
            likes: 142
        },
        {
            id: 'q2',
            user: 'Global_Energy_Alliance',
            avatarColor: '#000',
            avatarBg: '#ffd700', // Gold
            icon: <FaGlobe />,
            role: 'Energy Cartel',
            content: "⚠️ IMPORTANT UPDATE: Due to market conditions, we (the major nations) have decided to cut supply by 2M barrels per day. Prices will adjust accordingly. 📉📈 #Energy #GlobalEcon",
            question: "A few giants controlling supply is...?",
            options: [
                { label: 'Oligopoly', correct: true },
                { label: 'Monopoly', correct: false },
                { label: 'Perfect Competition', correct: false }
            ],
            explanation: "Spot on! Steps taken by a few large sellers (Cartel) define Oligopoly.",
            likes: 890
        },
        {
            id: 'q3',
            user: 'Desi_Kisan_Ram',
            avatarColor: '#000',
            avatarBg: '#00ff00', // Green
            icon: <FaLeaf />,
            role: 'Wheat Farmer',
            content: "Finally reached the Mandi! Selling my wheat at ₹2,200/quintal just like everyone else. Tried asking for ₹2,210 but nobody bought. 🌾🚜 #HardWork #MarketPrice",
            question: "Identical price & product indicates...?",
            options: [
                { label: 'Oligopoly', correct: false },
                { label: 'Perfect Competition', correct: true },
                { label: 'Monopolistic Comp', correct: false }
            ],
            explanation: "Correct! In Perfect Competition, sellers are Price Takers.",
            likes: 56
        },
        {
            id: 'q4',
            user: 'Indian_Railways_Official',
            avatarColor: '#fff',
            avatarBg: '#ff4444', // Red
            icon: <FaTrain />,
            role: 'Public Transport',
            content: "Dear Passengers, Ticket prices for AC-1 have been revised. We thank you for choosing us (as you have no other choice for trains!). 🚂🇮🇳 #NationLifeline",
            question: "Single Seller with no substitutes?",
            options: [
                { label: 'Monopolistic Comp', correct: false },
                { label: 'Oligopoly', correct: false },
                { label: 'Monopoly', correct: true }
            ],
            explanation: "Yes! A Single Seller with no close substitutes is a Monopoly.",
            likes: 1205
        },
        {
            id: 'q5',
            user: 'SkyHigh_Airlines',
            avatarColor: '#fff',
            avatarBg: '#00bfff', // Cyan
            icon: <FaIndustry />,
            role: 'Aviation Giant',
            content: "We noticed 'StarJet' just lowered their Mumbai-Delhi fare. We are MATCHING their price immediately! Can't lose our flyers. ✈️💸 #PriceWar",
            question: "Reacting to a competitor's price change is?",
            options: [
                { label: 'Perfect Competition', correct: false },
                { label: 'Oligopoly', correct: true },
                { label: 'Monopoly', correct: false }
            ],
            explanation: "Correct! 'Interdependence' (Reacting to rivals) is a hallmark of Oligopoly.",
            likes: 340
        },
        {
            id: 'q6',
            user: 'City_Power_Grid',
            avatarColor: '#000',
            avatarBg: '#ff8c00', // Orange
            icon: <FaBolt />,
            role: 'Utility Provider',
            content: "Maintenance Alert: Power cut from 2-4 PM. We apologize. (Also, don't try switching providers, we are the only line to your house). ⚡🔌",
            question: "This natural barrier to entry creates a...?",
            options: [
                { label: 'Monopoly', correct: true },
                { label: 'Oligopoly', correct: false },
                { label: 'Perfect Competition', correct: false }
            ],
            explanation: "Right! Capital costs creating a Natural Monopoly.",
            likes: 45
        },
        {
            id: 'q7',
            user: 'Luxe_Soap_Co',
            avatarColor: '#fff',
            avatarBg: '#ff69b4', // Pink
            icon: <FaShoppingBag />,
            role: 'Beauty Brand',
            content: "Did you see our new TV Ad with the Superstar? 🌟 Spending millions on ads because we need you to love OUR brand over the others! 🛁✨",
            question: "High Selling Costs (Ads) are vital in?",
            options: [
                { label: 'Perfect Competition', correct: false },
                { label: 'Monopoly', correct: false },
                { label: 'Monopolistic Comp', correct: true }
            ],
            explanation: "Correct! Selling Costs are essential to differentiate products in Monopolistic Comp.",
            likes: 8900
        },
        {
            id: 'q8',
            user: 'Stock_Trader_Pro',
            avatarColor: '#000',
            avatarBg: '#eeeeee', // Grey
            icon: <FaChartLine />, // Need to import or swap
            role: 'Day Trader',
            content: "Buying 100 shares of Tata Motors. There are millions of buyers and sellers right now. The price is fixed by the screen ticks! 📈📉",
            question: "Large number of buyers/sellers refers to?",
            options: [
                { label: 'Monopoly', correct: false },
                { label: 'Perfect Competition', correct: true },
                { label: 'Oligopoly', correct: false }
            ],
            explanation: "Yes! Financial markets are close to Perfect Competition.",
            likes: 230
        },
        {
            id: 'q9',
            user: 'Auto_Insiders',
            avatarColor: '#fff',
            avatarBg: '#333', // Dark
            icon: <FaCar />,
            role: 'Auto Analyst',
            content: "Breaking: Entry into the Car Market is tough! You need Billions in capital. That's why only 4-5 big players exist. 🚗🚙",
            question: "Restricted Entry leading to few firms?",
            options: [
                { label: 'Monopolistic Comp', correct: false },
                { label: 'Oligopoly', correct: true },
                { label: 'Perfect Competition', correct: false }
            ],
            explanation: "Correct! High Barriers to entry result in an Oligopoly.",
            likes: 567
        },
        {
            id: 'q10',
            user: 'Local_Bulb_Maker',
            avatarColor: '#000',
            avatarBg: '#7fffd4', // Aquamarine
            icon: <FaLightbulb />,
            role: 'Entrepreneur',
            content: "Just started making LED bulbs! It was so easy to enter this market. If I fail, I can leave easily too. No big deal. 💡",
            question: "Free Entry and Exit is a feature of?",
            options: [
                { label: 'Monopoly', correct: false },
                { label: 'Monopolistic Comp', correct: true }, // Also Perfect, but usually Monopolistic in real world context of brands
                { label: 'Oligopoly', correct: false }
            ],
            explanation: "Correct! Monopolistic (and Perfect) Competition feature Free Entry/Exit.",
            likes: 12
        }
    ];

    // State
    const [userVotes, setUserVotes] = useState({});
    const [likes, setLikes] = useState({});

    const handleVote = (qId, isCorrect) => {
        if (userVotes[qId]) return;
        setUserVotes(prev => ({ ...prev, [qId]: isCorrect ? 'correct' : 'wrong' }));
        if (isCorrect) {
            setLikes(prev => ({ ...prev, [qId]: (marketPosts.find(p => p.id === qId).likes || 0) + 1 }));
        }
    };


    return (
        <div className="lesson-section" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Social Feed</span>
                <h2 className="section-title-lesson">MarketGram 2.0</h2>
                <p className="section-subtitle-lesson">Scroll the Feed • Spot the Market • Drop a Like</p>
            </div>

            {/* WIDE FEED CONTAINER */}
            <div className="social-feed-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                {marketPosts.map((post) => (
                    <div key={post.id} className="social-post animate-fadeInUp" style={{
                        background: 'rgba(20, 20, 25, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '20px',
                        marginBottom: '40px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                        overflow: 'hidden'
                    }}>

                        {/* Header */}
                        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{
                                background: post.avatarBg,
                                color: post.avatarColor,
                                width: '50px', height: '50px',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                                marginRight: '15px',
                                boxShadow: '0 0 15px ' + post.avatarBg
                            }}>
                                {post.icon}
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: '#fff', fontSize: '1.1rem' }}>{post.user} <FaCheckCircle style={{ color: '#1DA1F2', fontSize: '0.9rem' }} /></strong>
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>{post.role} • Sponsored</span>
                            </div>
                        </div>

                        {/* Content Body */}
                        <div style={{ padding: '25px', color: '#eee', fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '300' }}>
                            <p>{post.content}</p>
                        </div>

                        {/* Interactive Quiz Bar */}
                        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)' }}>
                            <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                <FaComment style={{ marginRight: '5px' }} /> Quiz: {post.question}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                {post.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleVote(post.id, opt.correct)}
                                        disabled={!!userVotes[post.id]}
                                        style={{
                                            flex: '1 1 150px',
                                            padding: '12px 20px',
                                            borderRadius: '30px',
                                            border: '1px solid ' + (userVotes[post.id] && opt.correct ? '#00ff00' : 'rgba(255,255,255,0.2)'),
                                            background: userVotes[post.id] === 'correct' && opt.correct ? 'rgba(0,255,0,0.1)' : 'transparent',
                                            color: userVotes[post.id] && opt.correct ? '#00ff00' : '#fff',
                                            cursor: userVotes[post.id] ? 'default' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            textAlign: 'center',
                                            fontWeight: '500'
                                        }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Footer / Feedback */}
                        <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '25px', color: userVotes[post.id] === 'correct' ? '#ff4444' : '#666', fontSize: '1.1rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'color 0.2s' }}>
                                    <FaHeart className={userVotes[post.id] === 'correct' ? 'animate-bounce' : ''} />
                                    {likes[post.id] || post.likes}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaShare /> Share</span>
                            </div>

                            {userVotes[post.id] && (
                                <div className="animate-slideIn" style={{
                                    padding: '5px 15px',
                                    borderRadius: '5px',
                                    background: userVotes[post.id] === 'correct' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)',
                                    color: userVotes[post.id] === 'correct' ? '#00ff00' : '#ff4444',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    {userVotes[post.id] === 'correct' ? <FaCheckCircle /> : <FaTimesCircle />}
                                    {userVotes[post.id] === 'correct' ? post.explanation : "Incorrect. Try again!"}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

// Simple import for the one missing icon in my list above, though react-icons/fa usually has FaChartLine.
import { FaChartLine } from 'react-icons/fa';

export default PracticeProblemsMarket;
