import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { collection, query, where, orderBy, limit, getDocs } from 'firebase/firestore';
import { motion } from 'framer-motion';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import {
    FaFire, FaBookOpen, FaQrcode, FaClock, FaTrophy, FaCalendarAlt,
    FaGraduationCap, FaChartBar, FaHistory, FaMedal, FaStar, FaBolt,
    FaSkullCrossbones, FaRedo
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './Progress.css';

const Progress = () => {
    const { user, loading: authLoading, resetStats } = useAuth();
    const [quizHistory, setQuizHistory] = useState([]);
    const [combinedActivity, setCombinedActivity] = useState([]);
    const [recentLessons, setRecentLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resetting, setResetting] = useState(false);

    useEffect(() => {
        const fetchProgressData = async () => {
            if (!user || user.isAnonymous) {
                setLoading(false);
                return;
            }

            try {
                // Fetch Quiz attempts
                const q = query(
                    collection(db, 'quiz_attempts'),
                    where('userId', '==', user.uid),
                    orderBy('timestamp', 'desc'),
                    limit(10)
                );
                const querySnapshot = await getDocs(q);
                const quizzes = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    type: 'quiz',
                    ...doc.data(),
                    date: doc.data().timestamp?.toDate ? doc.data().timestamp.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'N/A'
                }));

                // Fetch Activity logs
                const aq = query(
                    collection(db, 'activity_logs'),
                    where('userId', '==', user.uid),
                    orderBy('timestamp', 'desc'),
                    limit(20)
                );
                const aquerySnapshot = await getDocs(aq);
                const activities = aquerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    type: 'activity',
                    ...doc.data(),
                    date: doc.data().timestamp?.toDate ? doc.data().timestamp.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'N/A'
                }));

                // Extract recent lesson visits (unique)
                const lessonVisits = activities
                    .filter(a => a.type === 'activity' && a.details?.lessonName)
                    .reduce((acc, a) => {
                        if (!acc.find(x => x.details?.lessonId === a.details?.lessonId)) {
                            acc.push(a);
                        }
                        return acc;
                    }, [])
                    .slice(0, 6);
                setRecentLessons(lessonVisits);

                // Merge and sort
                const combined = [...quizzes, ...activities].sort((a, b) => {
                    const timeA = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
                    const timeB = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
                    return timeB - timeA;
                });

                setQuizHistory(quizzes.slice().reverse());
                setCombinedActivity(combined.slice(0, 10));
            } catch (error) {
                console.error("Error fetching history:", error);
            } finally {
                setLoading(false);
            }
        };

        if (!authLoading) {
            fetchProgressData();
        }
    }, [user, authLoading]);

    const handleResetStats = async () => {
        if (!resetStats) return;
        const confirmed = window.confirm('KABOOM! This will reset ALL your stats to zero. Are you sure, hero?');
        if (!confirmed) return;
        setResetting(true);
        await resetStats();
        setResetting(false);
        window.location.reload();
    };

    if (authLoading || loading) {
        return (
            <div className="cp-container">
                <div className="cp-loading">
                    <div className="cp-loading-burst">
                        <FaBolt />
                    </div>
                    <p className="cp-loading-text">LOADING YOUR HERO STATS...</p>
                </div>
            </div>
        );
    }

    const stats = user?.stats || {};
    const totalLessons = 26;
    const lessonsCompleted = stats.lessonsCompleted || 0;
    const completionPercentage = Math.round((lessonsCompleted / totalLessons) * 100);

    const formatTime = (minutes) => {
        if (!minutes) return '0m';
        const hours = Math.floor(minutes / 60);
        if (hours > 0) return `${hours}h ${minutes % 60}m`;
        return `${minutes}m`;
    };

    const chartData = quizHistory.map(attempt => ({
        name: attempt.date,
        score: attempt.percentage || 0
    }));

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const badges = [
        { id: 'first_lesson', name: 'First Step', icon: <FaBookOpen />, color: '#0074D9', unlocked: lessonsCompleted >= 1 },
        { id: 'quiz_master', name: 'Quiz Master', icon: <FaTrophy />, color: '#FFDC00', unlocked: stats.quizzesPassed >= 5 },
        { id: 'streak_3', name: 'Hot Streak', icon: <FaFire />, color: '#FF4136', unlocked: stats.currentStreak >= 3 },
        { id: 'halfway', name: 'Halfway Hero', icon: <FaGraduationCap />, color: '#2ECC40', unlocked: completionPercentage >= 50 },
        { id: 'top_scorer', name: 'Elite Scorer', icon: <FaStar />, color: '#FFDC00', unlocked: stats.bestScore >= 90 },
        { id: 'determined', name: 'Persistent', icon: <FaClock />, color: '#0074D9', unlocked: stats.totalTimeSpent >= 60 },
        { id: 'night_owl', name: 'Night Owl', icon: <FaSkullCrossbones />, color: '#B10DC9', unlocked: new Date().getHours() > 22 || new Date().getHours() < 5 },
        { id: 'early_bird', name: 'Early Bird', icon: <FaCalendarAlt />, color: '#FF851B', unlocked: new Date().getHours() >= 5 && new Date().getHours() < 8 },
        { id: 'perfectionist', name: 'Perfectionist', icon: <HiSparkles />, color: '#FFDC00', unlocked: stats.bestScore === 100 },
        { id: 'scholar', name: 'Scholar', icon: <FaGraduationCap />, color: '#2ECC40', unlocked: lessonsCompleted >= 10 },
        { id: 'marathon', name: 'Marathon', icon: <FaClock />, color: '#0074D9', unlocked: stats.totalTimeSpent >= 300 },
        { id: 'loyal', name: 'Loyal Learner', icon: <FaStar />, color: '#FF4136', unlocked: stats.currentStreak >= 7 }
    ];

    const getActivityLabel = (activity) => {
        if (activity.type === 'quiz') {
            return activity.quizId?.replace('micro11-', 'Micro Lesson ')?.replace('stats-', 'Stats Lesson ') || 'Quiz Attempt';
        }
        return activity.details?.lessonName || activity.details?.lessonId?.replace('micro11-', 'Micro ')?.replace('stats-', 'Stats ') || activity.type?.replace('_', ' ') || 'Activity';
    };

    return (
        <motion.div
            className="cp-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* === COMIC HEADER === */}
            <motion.header className="cp-header" variants={itemVariants}>
                <div className="cp-title-burst">
                    <h1 className="cp-title">MY PROGRESS</h1>
                </div>
                {user?.name && (
                    <p className="cp-subtitle">
                        Welcome back, <strong>{user.name}</strong>! Your hero journey continues...
                    </p>
                )}
                {stats.currentStreak > 0 && (
                    <motion.div className="cp-streak-badge" variants={itemVariants}>
                        <FaFire className="cp-streak-fire" />
                        <span>{stats.currentStreak} DAY STREAK!</span>
                        <FaBolt />
                    </motion.div>
                )}
            </motion.header>

            {/* === STAT CARDS (Speech Bubbles) === */}
            <div className="cp-stats-row">
                <motion.div className="cp-stat-bubble cp-stat-blue" variants={itemVariants}>
                    <div className="cp-stat-icon"><FaBookOpen /></div>
                    <div className="cp-stat-value">{completionPercentage}%</div>
                    <div className="cp-stat-label">SYLLABUS</div>
                    <div className="cp-progress-bar">
                        <motion.div
                            className="cp-progress-fill cp-fill-blue"
                            initial={{ width: 0 }}
                            animate={{ width: `${completionPercentage}%` }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                    </div>
                    <div className="cp-bubble-tail"></div>
                </motion.div>

                <motion.div className="cp-stat-bubble cp-stat-yellow" variants={itemVariants}>
                    <div className="cp-stat-icon"><FaTrophy /></div>
                    <div className="cp-stat-value">{stats.bestScore || 0}%</div>
                    <div className="cp-stat-label">BEST SCORE</div>
                    <div className="cp-bubble-tail"></div>
                </motion.div>

                <motion.div className="cp-stat-bubble cp-stat-green" variants={itemVariants}>
                    <div className="cp-stat-icon"><FaClock /></div>
                    <div className="cp-stat-value">{formatTime(stats.totalTimeSpent)}</div>
                    <div className="cp-stat-label">STUDY TIME</div>
                    <div className="cp-bubble-tail"></div>
                </motion.div>

                <motion.div className="cp-stat-bubble cp-stat-red" variants={itemVariants}>
                    <div className="cp-stat-icon"><FaChartBar /></div>
                    <div className="cp-stat-value">{stats.quizzesTaken || 0}</div>
                    <div className="cp-stat-label">QUIZZES</div>
                    <div className="cp-bubble-tail"></div>
                </motion.div>
            </div>

            {/* === LAST CHAPTERS VISITED === */}
            <motion.div className="cp-panel" variants={itemVariants}>
                <div className="cp-caption-box">LAST CHAPTERS VISITED!</div>
                <div className="cp-chapters-grid">
                    {recentLessons.length > 0 ? (
                        recentLessons.map((lesson, i) => (
                            <div key={lesson.id} className="cp-chapter-card" style={{ '--card-index': i }}>
                                <div className="cp-chapter-number">
                                    {lesson.details?.chapter || `#${i + 1}`}
                                </div>
                                <div className="cp-chapter-name">
                                    {lesson.details?.lessonName || 'Unknown Lesson'}
                                </div>
                                <div className="cp-chapter-date">{lesson.date}</div>
                            </div>
                        ))
                    ) : (
                        <div className="cp-empty-panel">
                            <FaBookOpen className="cp-empty-icon" />
                            <p>No chapters visited yet. Start your first lesson!</p>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* === PERFORMANCE CHART === */}
            <motion.div className="cp-panel" variants={itemVariants}>
                <div className="cp-caption-box">PERFORMANCE HISTORY!</div>
                <div className="cp-chart-container">
                    {quizHistory.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="comicScore" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#FFDC00" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="#FFDC00" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                                <XAxis dataKey="name" stroke="#6b6b80" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#6b6b80" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                                <Tooltip
                                    contentStyle={{
                                        background: '#1a1a2e',
                                        border: '3px solid #FFDC00',
                                        borderRadius: '0',
                                        fontFamily: "'Comic Neue', cursive",
                                        fontWeight: 700,
                                        boxShadow: '4px 4px 0 #111'
                                    }}
                                    itemStyle={{ color: '#FFDC00' }}
                                    labelStyle={{ color: '#fff', fontWeight: 700 }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#FFDC00"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#comicScore)"
                                    animationDuration={2000}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="cp-empty-panel">
                            <FaHistory className="cp-empty-icon" />
                            <p>No quiz history yet. Take a quiz to see your power levels!</p>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* === SECONDARY GRID: ACTIVITY + ACHIEVEMENTS === */}
            <div className="cp-secondary-grid">
                {/* Recent Activity */}
                <motion.div className="cp-panel" variants={itemVariants}>
                    <div className="cp-caption-box">RECENT ACTIVITY!</div>
                    <div className="cp-activity-list">
                        {combinedActivity.length > 0 ? (
                            combinedActivity.map((activity) => (
                                <div key={activity.id} className="cp-activity-item">
                                    <div className={`cp-activity-icon ${activity.type === 'quiz' ? 'quiz' : 'lesson'}`}>
                                        {activity.type === 'quiz' ? <FaBolt /> : <FaBookOpen />}
                                    </div>
                                    <div className="cp-activity-info">
                                        <h4>{getActivityLabel(activity)}</h4>
                                        <p>{activity.timestamp?.toDate ? activity.timestamp.toDate().toLocaleString() : 'Recent'}</p>
                                    </div>
                                    {activity.type === 'quiz' && (
                                        <div className={`cp-score-badge ${
                                            activity.percentage >= 80 ? 'great' :
                                            activity.percentage >= 50 ? 'good' : 'fail'
                                        }`}>
                                            {activity.percentage}%
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="cp-empty-panel">
                                <p>No recent activity. Start exploring lessons!</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Achievements */}
                <motion.div className="cp-panel" variants={itemVariants}>
                    <div className="cp-caption-box cp-caption-red">ACHIEVEMENTS!</div>
                    <div className="cp-badge-grid">
                        {badges.map((badge) => (
                            <div
                                key={badge.id}
                                className={`cp-badge ${badge.unlocked ? 'unlocked' : ''}`}
                                style={{ '--badge-color': badge.color }}
                            >
                                <div className="cp-badge-burst">
                                    <div className="cp-badge-icon">
                                        {badge.unlocked ? badge.icon : '?'}
                                    </div>
                                </div>
                                <span className="cp-badge-name">{badge.unlocked ? badge.name : '???'}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* === RESET BUTTON === */}
            <motion.div className="cp-reset-section" variants={itemVariants}>
                <button
                    className="cp-reset-btn"
                    onClick={handleResetStats}
                    disabled={resetting}
                >
                    <FaRedo />
                    {resetting ? 'RESETTING...' : 'RESET ALL STATS'}
                </button>
                <p className="cp-reset-warning">This will wipe all progress data. Use with caution!</p>
            </motion.div>
        </motion.div>
    );
};

export default Progress;
