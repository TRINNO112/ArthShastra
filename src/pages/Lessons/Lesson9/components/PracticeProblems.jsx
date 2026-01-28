import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaCheckCircle, FaTimesCircle, FaChartLine, FaRobot, FaUserTie, FaBuilding, FaBullhorn, FaNewspaper, FaBalanceScale } from 'react-icons/fa';
import '../lesson9.css';

const PracticeProblems = () => {
    // 7 Questions Data directed at Revenue Concepts + Market Forms
    const analystReports = [
        {
            id: 'q1',
            user: 'Market_Maker_01',
            role: 'Senior Analyst',
            avatarBg: 'var(--trade-gold)',
            avatarColor: '#000',
            icon: <FaChartLine />,
            content: "Looking at the Q3 data: Total Revenue (TR) hits ₹200 for 10 units sold. Simple math, but critical for the quarterly report.",
            question: "What is the Average Revenue (AR)?",
            options: [
                { label: '₹20', correct: true },
                { label: '₹200', correct: false },
                { label: '₹2', correct: false }
            ],
            explanation: "Spot on! AR = TR / Q = 200 / 10 = ₹20.",
            likes: 420
        },
        {
            id: 'q2',
            user: 'Algo_Bot_V9',
            role: 'HFT Algorithm',
            avatarBg: 'var(--trade-blue)',
            avatarColor: '#fff',
            icon: <FaRobot />,
            content: ">> SEQUENCE ALERT: TR(4) = 100. TR(5) = 110. CALCULATING MARGINAL ADDITION... 🤖",
            question: "What is the Marginal Revenue (MR) of the 5th unit?",
            options: [
                { label: '10', correct: true },
                { label: '110', correct: false },
                { label: '210', correct: false }
            ],
            explanation: "Affirmative. MR = TR(n) - TR(n-1) = 110 - 100 = 10.",
            likes: 1024
        },
        {
            id: 'q3',
            user: 'Bear_Market_Guru',
            role: 'Short Seller',
            avatarBg: 'var(--trade-red)',
            avatarColor: '#fff',
            icon: <FaUserTie />,
            content: "The moment Marginal Revenue covers zero and goes negative... that's when the Top Line (TR) starts bleeding. SHORT IT! 📉",
            question: "When MR is Zero, Total Revenue is...?",
            options: [
                { label: 'Minimum', correct: false },
                { label: 'Maximum', correct: true },
                { label: 'Negative', correct: false }
            ],
            explanation: "Correct! TR peaks exactly when the marginal addition (MR) hits zero.",
            likes: 890
        },
        {
            id: 'q4',
            user: 'Perfect_Price_Inc',
            role: 'Commodity Trader',
            avatarBg: 'var(--trade-green)',
            avatarColor: '#000',
            icon: <FaBalanceScale />,
            content: "In our perfect world, we can't change the price. We just sell, sell, sell at the market rate. The MR curve never bends!",
            question: "Shape of MR curve in Perfect Competition?",
            options: [
                { label: 'Downward Sloping', correct: false },
                { label: 'Horizontal Line', correct: true },
                { label: 'Vertical Line', correct: false }
            ],
            explanation: "Yes! In Perfect Competition, P = AR = MR, so it's a horizontal line.",
            likes: 56
        },
        {
            id: 'q5',
            user: 'Econ_Professor_X',
            role: 'Academic',
            avatarBg: '#fff',
            avatarColor: '#000',
            icon: <FaNewspaper />,
            content: "Theoretical Question: Can Marginal Revenue ever be negative? Think about the elasticity of demand on the lower half of the curve. 🤔",
            question: "Can MR be Negative?",
            options: [
                { label: 'Yes', correct: true },
                { label: 'No', correct: false },
                { label: 'Only in Dream', correct: false }
            ],
            explanation: "Correct. If demand is inelastic, lowering price to sell more reduces Total Revenue, making MR negative.",
            likes: 125
        },
        {
            id: 'q6',
            user: 'Chart_Wizard',
            role: 'Technical Analyst',
            avatarBg: '#ff00ff',
            avatarColor: '#fff',
            icon: <FaBullhorn />,
            content: "Looking at a rare pattern: Rectangular Hyperbola AR curve. This implies something specific about the Total Revenue...",
            question: "If AR is Rectangular Hyperbola, TR is...?",
            options: [
                { label: 'Constant', correct: true },
                { label: 'Increasing', correct: false },
                { label: 'Decreasing', correct: false }
            ],
            explanation: "Correct! Unit Elasticity means % Change in P = % Change in Q, so TR remains constant.",
            likes: 77
        },
        {
            id: 'q7',
            user: 'Intern_Dave',
            role: 'Junior Analyst',
            avatarBg: '#888',
            avatarColor: '#fff',
            icon: <FaUserTie />,
            content: "Boss asked me to define 'Revenue per unit'. Is it Average Revenue or Marginal Revenue? I'm scared to ask. 😰",
            question: "Revenue per unit is called:",
            options: [
                { label: 'Marginal Revenue', correct: false },
                { label: 'Average Revenue', correct: true },
                { label: 'Total Revenue', correct: false }
            ],
            explanation: "You got this, Dave! AR is literally Price, which is Revenue per Unit.",
            likes: 33
        }
    ];

    // State
    const [userVotes, setUserVotes] = useState({});
    const [likes, setLikes] = useState({});

    const handleVote = (qId, isCorrect) => {
        if (userVotes[qId]) return; // Prevent re-voting
        setUserVotes(prev => ({ ...prev, [qId]: isCorrect ? 'correct' : 'wrong' }));

        // Auto-like if correct
        if (isCorrect) {
            setLikes(prev => ({ ...prev, [qId]: (analystReports.find(p => p.id === qId).likes || 0) + 1 }));
        }
    };

    return (
        <section className="lesson-section">
            <div className="market-header">
                <span className="market-status" style={{ borderColor: 'var(--trade-gold)', color: 'var(--trade-gold)' }}>● LIVE FEED</span>
                <h2 className="market-title">Analyst Terminal 🎓</h2>
                <p style={{ color: '#aaa' }}>REAL-TIME FEED • QUIZZES • CERTIFICATION</p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>

                {analystReports.map((post) => (
                    <div key={post.id} className="trading-card animate-fadeInUp" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--trade-border)' }}>

                        {/* HEADER */}
                        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid var(--trade-border)' }}>
                            <div style={{
                                background: post.avatarBg, color: post.avatarColor,
                                width: '50px', height: '50px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                                marginRight: '15px', boxShadow: `0 0 15px ${post.avatarBg}`
                            }}>
                                {post.icon}
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: '#fff', fontSize: '1.1rem', fontFamily: 'monospace' }}>
                                    {post.user} <FaCheckCircle style={{ color: 'var(--trade-blue)', fontSize: '0.9rem' }} />
                                </strong>
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>{post.role}</span>
                            </div>
                        </div>

                        {/* CONTENT */}
                        <div style={{ padding: '25px', color: '#eee', fontSize: '1.1rem', lineHeight: '1.6', fontFamily: 'Inter, sans-serif' }}>
                            <p>{post.content}</p>
                        </div>

                        {/* QUIZ INTERACTION */}
                        <div style={{ padding: '20px', background: 'rgba(0,0,0,0.3)', borderTop: '1px dashed var(--trade-border)' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--trade-gold)', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                <FaComment style={{ marginRight: '5px' }} /> ANALYST QUERY: {post.question}
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
                                            borderRadius: '4px',
                                            border: '1px solid ' + (userVotes[post.id] && opt.correct ? 'var(--trade-green)' : 'var(--trade-border)'),
                                            background: userVotes[post.id] === 'correct' && opt.correct ? 'rgba(0,255,157,0.1)' : 'var(--trade-bg)',
                                            color: userVotes[post.id] && opt.correct ? 'var(--trade-green)' : '#ccc',
                                            cursor: userVotes[post.id] ? 'default' : 'pointer',
                                            transition: 'all 0.3s ease',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontFamily: 'monospace'
                                        }}
                                        className={userVotes[post.id] === 'wrong' && !opt.correct ? 'opacity-50' : ''}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* FOOTER / FEEDBACK */}
                        <div style={{ padding: '15px 20px', borderTop: '1px solid var(--trade-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.5)' }}>

                            <div style={{ display: 'flex', gap: '20px', color: '#666', fontSize: '1rem' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: userVotes[post.id] === 'correct' ? 'var(--trade-red)' : 'inherit' }}>
                                    <FaHeart className={userVotes[post.id] === 'correct' ? 'animate-bounce' : ''} />
                                    {likes[post.id] || post.likes} LIKES
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaShare /> SHARE_INTEL</span>
                            </div>

                            {userVotes[post.id] && (
                                <div className="feedback-reveal" style={{
                                    padding: '5px 15px',
                                    borderRadius: '4px',
                                    background: userVotes[post.id] === 'correct' ? 'rgba(0,255,157,0.1)' : 'rgba(255,59,59,0.1)',
                                    color: userVotes[post.id] === 'correct' ? 'var(--trade-green)' : 'var(--trade-red)',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontFamily: 'monospace'
                                }}>
                                    {userVotes[post.id] === 'correct' ? <FaCheckCircle /> : <FaTimesCircle />}
                                    {userVotes[post.id] === 'correct' ? post.explanation : "INCORRECT ANALYSIS. TRY AGAIN."}
                                </div>
                            )}

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default PracticeProblems;
