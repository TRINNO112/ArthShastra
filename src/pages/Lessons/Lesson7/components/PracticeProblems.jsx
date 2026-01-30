import React, { useState } from 'react';
import { FaHeart, FaComment, FaShare, FaCheckCircle, FaTimesCircle, FaUserCircle, FaCalculator, FaIndustry, FaChartLine, FaExclamationTriangle, FaLightbulb } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const PracticeProblems = () => {
    // Social Feed Data
    const posts = [
        {
            id: 'q1',
            user: 'Econ_Student_01',
            role: 'Aspiring Economist',
            avatarBg: '#e1bee7', // Purple
            icon: <FaCalculator />,
            content: "Guys, I'm stuck on this calculation! 😩 If Total Product (TP) jumped from 24 to 35 when I hired the 3rd worker, what is the Marginal Product (MP)? #HomeworkHelp #Micro",
            question: "Help Econ_Student_01 find MP:",
            options: [
                { label: '10', correct: false },
                { label: '11', correct: true }, // 35 - 24 = 11
                { label: '12', correct: false }
            ],
            explanation: "Correct! MP = TP(3) - TP(2) = 35 - 24 = 11. Simple subtraction!",
            likes: 42
        },
        {
            id: 'q2',
            user: 'Factory_Boss_X',
            role: 'Production Manager',
            avatarBg: '#ffcc80', // Orange
            icon: <FaIndustry />,
            content: "My new worker is actually bringing DOWN my total output! Total Product went from 55 to 52. 📉 Should I fire him? What stage is this? #BusinessTrouble",
            question: "Which stage is the boss in?",
            options: [
                { label: 'Stage I (Increasing)', correct: false },
                { label: 'Stage II (Diminishing)', correct: false },
                { label: 'Stage III (Negative)', correct: true }
            ],
            explanation: "Exactly. When TP falls (and MP is negative), you are in Stage III. Fire that worker!",
            likes: 156
        },
        {
            id: 'q3',
            user: 'Optimization_Guru',
            role: 'Efficiency Expert',
            avatarBg: '#81d4fa', // Blue
            icon: <FaChartLine />,
            content: "Pro Tip: Being 'rational' isn't about producing the MOST. It's about stopping when efficiency is highest. At what point does a rational producer STOP adding workers? 🛑",
            question: "Rational Producer operates in...",
            options: [
                { label: 'Stage I (MP rises)', correct: false },
                { label: 'Stage II (MP falls but +ve)', correct: true },
                { label: 'Stage III (MP is -ve)', correct: false }
            ],
            explanation: "Spot on! Stage II is where you get diminishing but positive returns. It's the sweet spot.",
            likes: 890
        },
        {
            id: 'q4',
            user: 'Math_Wiz_KV',
            role: 'Tutor',
            avatarBg: '#a5d6a7', // Green
            icon: <FaLightbulb />,
            content: "Quiz Time! 🧠 Maximizing Average Product (AP) is cool, but do you know the condition? When is AP at its absolute MAX?",
            question: "AP is Max when...",
            options: [
                { label: 'AP = MP', correct: true },
                { label: 'MP = 0', correct: false },
                { label: 'TP is Max', correct: false }
            ],
            explanation: "Correct! The MP curve cuts the AP curve from above at its maximum point. So AP = MP.",
            likes: 230
        },
        {
            id: 'q5',
            user: 'Confused_Intern',
            role: 'New Hire',
            avatarBg: '#ef9a9a', // Red
            icon: <FaExclamationTriangle />,
            content: "Wait, so if MP is zero, does that mean we produced NOTHING? 0_o asking for a friend...",
            question: "If MP = 0, then TP is...?",
            options: [
                { label: 'Zero', correct: false },
                { label: 'Maximum', correct: true },
                { label: 'Falling', correct: false }
            ],
            explanation: "No! MP=0 means the *last* worker added nothing extra, so Total Product (TP) has reached its PEAK.",
            likes: 67
        }
    ];

    // State
    const [userVotes, setUserVotes] = useState({});
    const [likes, setLikes] = useState({});

    const handleVote = (qId, isCorrect) => {
        if (userVotes[qId]) return;
        setUserVotes(prev => ({ ...prev, [qId]: isCorrect ? 'correct' : 'wrong' }));
        if (isCorrect) {
            setLikes(prev => ({ ...prev, [qId]: (posts.find(p => p.id === qId).likes || 0) + 1 }));
        }
    };

    return (
        <section className="lesson-section" style={{ fontFamily: '"Comic Neue", "Inter", sans-serif' }}>
            <div className="section-header-lesson text-center mb-8">
                <div style={{ display: 'inline-block', background: '#2979ff', color: '#fff', padding: '5px 15px', transform: 'rotate(-2deg)', boxShadow: '3px 3px 0px #000', border: '2px solid #000', marginBottom: '10px' }}>
                    <h3 className="section-title-modern text-banger" style={{ fontSize: '2.5rem', margin: 0 }}>
                        <FaComment /> ECON-GRAM
                    </h3>
                </div>
                <p className="section-subtitle-lesson mt-2">See what the Economics Community is posting!</p>
            </div>

            <div className="social-feed-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {posts.map((post) => (
                    <div key={post.id} className="comic-panel animate-fadeInUp" style={{
                        background: '#fff',
                        borderRadius: '12px',
                        marginBottom: '30px',
                        border: '3px solid #000',
                        boxShadow: '8px 8px 0px rgba(0,0,0,0.8)',
                        padding: '0',
                        overflow: 'hidden'
                    }}>
                        {/* Header */}
                        <div style={{ padding: '15px', display: 'flex', alignItems: 'center', borderBottom: '2px solid #eee', background: '#f9f9f9' }}>
                            <div style={{
                                background: post.avatarBg,
                                color: '#000',
                                width: '45px', height: '45px',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem',
                                marginRight: '15px',
                                border: '2px solid #000'
                            }}>
                                {post.icon}
                            </div>
                            <div>
                                <strong style={{ display: 'block', color: '#000', fontSize: '1.1rem', fontFamily: 'Bangers', letterSpacing: '0.5px' }}>{post.user} <FaCheckCircle style={{ color: '#2979ff', fontSize: '0.9rem' }} /></strong>
                                <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold' }}>{post.role}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '20px', color: '#333', fontSize: '1.2rem', lineHeight: '1.5', fontFamily: 'Comic Neue', fontWeight: 'bold' }}>
                            <p>{post.content}</p>
                        </div>

                        {/* Poll / Quiz */}
                        <div style={{ padding: '15px 20px', background: '#e3f2fd', borderTop: '2px dashed #bbb', borderBottom: '2px dashed #bbb' }}>
                            <p style={{ fontSize: '0.9rem', color: '#1565c0', marginBottom: '10px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                🗳️ POLL: {post.question}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {post.options.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleVote(post.id, opt.correct)}
                                        disabled={!!userVotes[post.id]}
                                        style={{
                                            flex: '1 1 auto',
                                            padding: '8px 15px',
                                            borderRadius: '20px',
                                            border: '2px solid ' + (userVotes[post.id] && opt.correct ? '#00e676' : '#000'),
                                            background: userVotes[post.id] && opt.correct ? '#b9f6ca' : '#fff',
                                            color: '#000',
                                            cursor: userVotes[post.id] ? 'default' : 'pointer',
                                            fontWeight: 'bold',
                                            boxShadow: '2px 2px 0px #000',
                                            transform: userVotes[post.id] ? 'none' : 'translateY(0)',
                                            transition: 'transform 0.1s'
                                        }}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Feedback Footer */}
                        <div style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff' }}>
                            <div style={{ display: 'flex', gap: '20px', color: userVotes[post.id] === 'correct' ? '#f44336' : '#888', fontSize: '1.1rem', fontWeight: 'bold' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <FaHeart className={userVotes[post.id] === 'correct' ? 'animate-bounce' : ''} />
                                    {likes[post.id] || post.likes}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#555' }}><FaComment /> Reply</span>
                            </div>

                            {userVotes[post.id] && (
                                <div className="animate-fadeInRight" style={{
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    background: userVotes[post.id] === 'correct' ? '#e8f5e9' : '#ffebee',
                                    color: userVotes[post.id] === 'correct' ? '#2e7d32' : '#c62828',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    border: '1px solid ' + (userVotes[post.id] === 'correct' ? '#2e7d32' : '#c62828'),
                                    display: 'flex', alignItems: 'center', gap: '5px'
                                }}>
                                    {userVotes[post.id] === 'correct' ? <FaCheckCircle /> : <FaTimesCircle />}
                                    {userVotes[post.id] === 'correct' ? post.explanation : "Wrong! Try again."}
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
