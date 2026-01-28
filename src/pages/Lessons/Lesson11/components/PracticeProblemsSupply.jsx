import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaCheckCircle, FaTimesCircle, FaIndustry, FaDollarSign, FaBolt, FaTruck, FaGlobe, FaBoxOpen, FaChartLine } from 'react-icons/fa';
import '../../Lesson5/components/lesson5.css';

const PracticeProblemsSupply = () => {
    // 10 Questions Data
    const supplyPosts = [
        {
            id: 's1',
            user: 'Factory_Boss',
            avatarColor: '#fff',
            avatarBg: '#ff9900',
            icon: <FaIndustry />,
            role: 'Producer',
            content: "Market Price just jumped from ₹50 to ₹70! My profit margin is looking huge right now. 🤑 Guess what I'm gonna do?",
            question: "According to Law of Supply, the producer will...?",
            options: [
                { label: 'Reduce Supply', correct: false },
                { label: 'Increase Supply', correct: true },
                { label: 'Keep it same', correct: false }
            ],
            explanation: "Correct! Higher Price = Higher Quantity Supplied (Extension).",
            likes: 240
        },
        {
            id: 's2',
            user: 'Cotton_Traders_Ltd',
            avatarColor: '#fff',
            avatarBg: '#ff4444',
            icon: <FaBoxOpen />,
            role: 'Supplier',
            content: "Update: Raw Cotton prices have doubled due to bad weather. 🌧️ Producing shirts is costing us way more now.",
            question: "Higher Input Cost leads to?",
            options: [
                { label: 'Right Shift (Increase)', correct: false },
                { label: 'Left Shift (Decrease)', correct: true },
                { label: 'Movement Down', correct: false }
            ],
            explanation: "Correct! Increased Cost = Decreased Supply (Left Shift).",
            likes: 89
        },
        {
            id: 's3',
            user: 'Robo_Tech_Corp',
            avatarColor: '#000',
            avatarBg: '#00ffff',
            icon: <FaBolt />,
            role: 'Innovator',
            content: "Just installed AI-driven Arms! Production speed is up 500% and waste is near zero. The future is here. 🤖⚡",
            question: "Technological Improvement causes?",
            options: [
                { label: 'Supply Curve shifts Right', correct: true },
                { label: 'Supply Curve shifts Left', correct: false },
                { label: 'Movement Upward', correct: false }
            ],
            explanation: "Yes! Better Tech reduces cost, increasing Supply (Right Shift).",
            likes: 1560
        },
        {
            id: 's4',
            user: 'Tax_Department_Gov',
            avatarColor: '#fff',
            avatarBg: '#555',
            icon: <FaGlobe />,
            role: 'Government',
            content: "Notice: GST on Automobiles is increased by 5% effective midnight. 🏛️📉",
            question: "An increase in Tax will make the Supply Curve...?",
            options: [
                { label: 'Shift Left', correct: true },
                { label: 'Shift Right', correct: false },
                { label: 'Expand', correct: false }
            ],
            explanation: "Correct! Taxes increase cost, shifting Supply to the Left.",
            likes: 12
        },
        {
            id: 's5',
            user: 'Coffee_Estates',
            avatarColor: '#000',
            avatarBg: '#6f4e37',
            icon: <FaBoxOpen />,
            role: 'Farmer',
            content: "Tea prices are crashing in the market. Coffee prices are stable. I think I'll use my land to grow Coffee instead of Tea.",
            question: "This is an example of...?",
            options: [
                { label: 'Change in Technology', correct: false },
                { label: 'Price of Related Goods', correct: true },
                { label: 'Change in Income', correct: false }
            ],
            explanation: "Right! Resources shift to the more profitable substitute (Related Good).",
            likes: 445
        },
        {
            id: 's6',
            user: 'Stock_Speculator',
            avatarColor: '#fff',
            avatarBg: '#8800ff',
            icon: <FaDollarSign />,
            role: 'Trader',
            content: "Rumor: Onions will be ₹100/kg next week (Current: ₹40). Holding my stock back for now! 🤐📦",
            question: "Expectation of Price Rise causes Current Supply to?",
            options: [
                { label: 'Increase', correct: false },
                { label: 'Decrease', correct: true },
                { label: 'Remain Constant', correct: false }
            ],
            explanation: "Correct! Sellers hoard stock to sell later at high profit.",
            likes: 67
        },
        {
            id: 's7',
            user: 'Transport_Union',
            avatarColor: '#000',
            avatarBg: '#ffff00',
            icon: <FaTruck />,
            role: 'Logistics',
            content: "Strike Alert! No trucks will move for 3 days. Supply chains are halted. 🛑🚚",
            question: "Transport breakdown affects supply as...?",
            options: [
                { label: 'Decrease (Left Shift)', correct: true },
                { label: 'Contraction', correct: false },
                { label: 'Increase', correct: false }
            ],
            explanation: "Yes! Breakdown in infrastructure reduces Market Supply.",
            likes: 230
        },
        {
            id: 's8',
            user: 'Green_Energy_Fund',
            avatarColor: '#000',
            avatarBg: '#00ff00',
            icon: <FaBolt />,
            role: 'Government',
            content: "Great news! We are offering a 20% Subsidy to all Solar Panel makers! Go Green! ☀️🌿",
            question: "A Subsidy works opposite to a Tax. It causes?",
            options: [
                { label: 'Left Shift', correct: false },
                { label: 'Right Shift', correct: true },
                { label: 'No Change', correct: false }
            ],
            explanation: "Correct! Subsidies lower cost, increasing Supply.",
            likes: 900
        },
        {
            id: 's9',
            user: 'Econ_Student_101',
            avatarColor: '#fff',
            avatarBg: '#333',
            icon: <FaIndustry />,
            role: 'Learner',
            content: "Wait, if the Price of the good ITSELF changes, do we call it a Shift? 🤔 #Confused",
            question: "Change in Own Price causes...",
            options: [
                { label: 'Shift in Supply', correct: false },
                { label: 'Movement along Curve', correct: true },
                { label: 'Both', correct: false }
            ],
            explanation: "Spot on! Own Price = Movement (Extension/Contraction). Other factors = Shift.",
            likes: 56
        },
        {
            id: 's10',
            user: 'Market_Analyst',
            avatarColor: '#000',
            avatarBg: '#00bfff',
            icon: <FaChartLine />,
            role: 'Pro',
            content: "More firms are entering the Smartphone market every day. What happens to the Market Supply Curve? 📈",
            question: "Increase in Number of Firms leads to?",
            options: [
                { label: 'Right Shift', correct: true },
                { label: 'Left Shift', correct: false },
                { label: 'Movement Up', correct: false }
            ],
            explanation: "Correct! More sellers = More total supply = Right Shift.",
            likes: 1205
        }
    ];

    // State
    const [userVotes, setUserVotes] = useState({});
    const [likes, setLikes] = useState({});

    const handleVote = (qId, isCorrect) => {
        if (userVotes[qId]) return;
        setUserVotes(prev => ({ ...prev, [qId]: isCorrect ? 'correct' : 'wrong' }));
        if (isCorrect) {
            setLikes(prev => ({ ...prev, [qId]: (supplyPosts.find(p => p.id === qId).likes || 0) + 1 }));
        }
    };


    return (
        <div className="lesson-section" style={{ fontFamily: '"Inter", "Segoe UI", sans-serif' }}>
            <div className="section-header-lesson animate-fadeInUp">
                <span className="section-badge-lesson animate-scaleIn">Social Feed</span>
                <h2 className="section-title-lesson">SupplyGram</h2>
                <p className="section-subtitle-lesson">Scroll • Learn • Like</p>
            </div>

            {/* WIDE FEED CONTAINER */}
            <div className="social-feed-container" style={{ maxWidth: '1100px', margin: '0 auto' }}>

                {supplyPosts.map((post) => (
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

export default PracticeProblemsSupply;
