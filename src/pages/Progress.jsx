import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { db } from '../services/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import {
    FaFire, FaBookOpen, FaClock, FaTrophy, FaCalendarAlt,
    FaGraduationCap, FaChartBar, FaHistory, FaStar, FaBolt,
    FaSkullCrossbones, FaRedo, FaTimes, FaLock, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import resetOwl from '../assets/reset-owl.png';
import './Progress.css';

const Progress = () => {
    const { user, loading: authLoading, resetStats } = useAuth();
    const [quizHistory, setQuizHistory] = useState([]);
    const [combinedActivity, setCombinedActivity] = useState([]);
    const [recentLessons, setRecentLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resetting, setResetting] = useState(false);
    const [showResetConfirm, setShowResetConfirm] = useState(false);
    const [selectedBadge, setSelectedBadge] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [calendarMonth, setCalendarMonth] = useState(() => {
        const now = new Date();
        return { year: now.getFullYear(), month: now.getMonth() };
    });
    // Track active days from activity_logs
    const [activeDays, setActiveDays] = useState(new Set());

    useEffect(() => {
        const fetchProgressData = async () => {
            if (!user || user.isAnonymous) {
                setLoading(false);
                return;
            }

            let quizzes = [];
            let activities = [];

            // Fetch Quiz attempts
            try {
                const q = query(
                    collection(db, 'quiz_attempts'),
                    where('userId', '==', user.uid)
                );
                const querySnapshot = await getDocs(q);
                quizzes = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        _source: 'quiz',
                        ...data,
                        date: data.timestamp?.toDate ? data.timestamp.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'N/A'
                    };
                });
                quizzes.sort((a, b) => {
                    const ta = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
                    const tb = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
                    return tb - ta;
                });
                quizzes = quizzes.slice(0, 10);
            } catch (error) {
                console.error("Error fetching quiz_attempts:", error);
            }

            // Fetch Activity logs
            try {
                const aq = query(
                    collection(db, 'activity_logs'),
                    where('userId', '==', user.uid)
                );
                const aquerySnapshot = await getDocs(aq);
                activities = aquerySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        _source: 'activity',
                        ...data,
                        date: data.timestamp?.toDate ? data.timestamp.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }) : 'N/A'
                    };
                });
                activities.sort((a, b) => {
                    const ta = a.timestamp?.toMillis ? a.timestamp.toMillis() : 0;
                    const tb = b.timestamp?.toMillis ? b.timestamp.toMillis() : 0;
                    return tb - ta;
                });

                // Build active days set for calendar
                const days = new Set();
                activities.forEach(a => {
                    if (a.timestamp?.toDate) {
                        const d = a.timestamp.toDate();
                        days.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
                    }
                });
                // Also add quiz days
                quizzes.forEach(q => {
                    if (q.timestamp?.toDate) {
                        const d = q.timestamp.toDate();
                        days.add(`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`);
                    }
                });
                setActiveDays(days);

                activities = activities.slice(0, 20);
            } catch (error) {
                console.error("Error fetching activity_logs:", error);
            }

            // Extract recent lesson visits (unique)
            const lessonVisits = activities
                .filter(a => a.type === 'lesson_visit' && a.details?.lessonName)
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
            setCombinedActivity(combined.slice(0, 15));
            setLoading(false);
        };

        if (!authLoading) {
            fetchProgressData();
        }
    }, [user, authLoading]);

    const handleResetStats = async () => {
        if (!resetStats) return;
        setResetting(true);
        await resetStats();
        setResetting(false);
        setShowResetConfirm(false);
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

    // Chart data: each quiz attempt as a separate bar
    // Compute percentage from totalScore/totalQuestions as fallback if percentage field is 0/missing
    const chartData = quizHistory.map((attempt, i) => {
        let score = attempt.percentage || 0;
        // Fallback: compute from raw scores if percentage is 0 but we have data
        if (score === 0 && attempt.totalScore > 0 && attempt.totalQuestions > 0) {
            score = Math.round((attempt.totalScore / attempt.totalQuestions) * 100);
        }
        const quizLabel = attempt.quizId
            ?.replace('micro11-', 'M')
            ?.replace('stats-', 'S') || `#${i + 1}`;
        return {
            name: `${quizLabel} (${attempt.date !== 'N/A' ? attempt.date : '?'})`,
            score,
            quizLabel,
            date: attempt.date
        };
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
    };

    const badges = [
        { id: 'first_lesson', name: 'First Step', desc: 'Complete your first lesson by passing a quiz with 50% or more.', icon: <FaBookOpen />, color: '#0074D9', unlocked: lessonsCompleted >= 1 },
        { id: 'quiz_master', name: 'Quiz Master', desc: 'Pass 5 different quizzes with a score of 50% or more.', icon: <FaTrophy />, color: '#FFDC00', unlocked: stats.quizzesPassed >= 5 },
        { id: 'streak_3', name: 'Hot Streak', desc: 'Study for 3 consecutive days without missing a single day.', icon: <FaFire />, color: '#FF4136', unlocked: stats.currentStreak >= 3 },
        { id: 'halfway', name: 'Halfway Hero', desc: 'Complete 50% of the syllabus (13 out of 26 lessons).', icon: <FaGraduationCap />, color: '#2ECC40', unlocked: completionPercentage >= 50 },
        { id: 'top_scorer', name: 'Elite Scorer', desc: 'Score 90% or higher on any single quiz attempt.', icon: <FaStar />, color: '#FFDC00', unlocked: stats.bestScore >= 90 },
        { id: 'determined', name: 'Persistent', desc: 'Spend a total of 60 minutes or more studying across all lessons.', icon: <FaClock />, color: '#0074D9', unlocked: stats.totalTimeSpent >= 60 },
        { id: 'night_owl', name: 'Night Owl', desc: 'Visit the app between 10 PM and 5 AM. Only the brave study at night!', icon: <FaSkullCrossbones />, color: '#B10DC9', unlocked: new Date().getHours() > 22 || new Date().getHours() < 5 },
        { id: 'early_bird', name: 'Early Bird', desc: 'Visit the app between 5 AM and 8 AM. Early morning revision!', icon: <FaCalendarAlt />, color: '#FF851B', unlocked: new Date().getHours() >= 5 && new Date().getHours() < 8 },
        { id: 'perfectionist', name: 'Perfectionist', desc: 'Score a perfect 100% on any quiz. No mistakes allowed!', icon: <HiSparkles />, color: '#FFDC00', unlocked: stats.bestScore === 100 },
        { id: 'scholar', name: 'Scholar', desc: 'Complete 10 or more lessons by passing their quizzes.', icon: <FaGraduationCap />, color: '#2ECC40', unlocked: lessonsCompleted >= 10 },
        { id: 'marathon', name: 'Marathon', desc: 'Spend a total of 5 hours (300 minutes) studying. True dedication!', icon: <FaClock />, color: '#0074D9', unlocked: stats.totalTimeSpent >= 300 },
        { id: 'loyal', name: 'Loyal Learner', desc: 'Maintain a 7-day study streak. A full week of consistency!', icon: <FaStar />, color: '#FF4136', unlocked: stats.currentStreak >= 7 }
    ];

    const getActivityLabel = (activity) => {
        if (activity._source === 'quiz') {
            return activity.quizId?.replace('micro11-', 'Micro Lesson ')?.replace('stats-', 'Stats Lesson ') || 'Quiz Attempt';
        }
        return activity.details?.lessonName || activity.details?.lessonId?.replace('micro11-', 'Micro ')?.replace('stats-', 'Stats ') || activity.type?.replace('_', ' ') || 'Activity';
    };

    // Calendar helpers
    const calendarMonthName = new Date(calendarMonth.year, calendarMonth.month).toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    const daysInMonth = new Date(calendarMonth.year, calendarMonth.month + 1, 0).getDate();
    const firstDayOfWeek = new Date(calendarMonth.year, calendarMonth.month, 1).getDay(); // 0=Sun
    const today = new Date();

    const calendarDays = [];
    for (let i = 0; i < firstDayOfWeek; i++) calendarDays.push(null);
    for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

    const prevMonth = () => {
        setCalendarMonth(prev => {
            if (prev.month === 0) return { year: prev.year - 1, month: 11 };
            return { ...prev, month: prev.month - 1 };
        });
    };
    const nextMonth = () => {
        setCalendarMonth(prev => {
            if (prev.month === 11) return { year: prev.year + 1, month: 0 };
            return { ...prev, month: prev.month + 1 };
        });
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
                    <motion.div
                        className="cp-streak-badge"
                        variants={itemVariants}
                        onClick={() => setShowCalendar(true)}
                        style={{ cursor: 'pointer' }}
                        title="Click to view your study calendar"
                    >
                        <FaFire className="cp-streak-fire" />
                        <span>{stats.currentStreak} DAY STREAK!</span>
                        <FaCalendarAlt />
                    </motion.div>
                )}
                {stats.currentStreak === 0 && (
                    <motion.div
                        className="cp-streak-badge cp-streak-inactive"
                        variants={itemVariants}
                        onClick={() => setShowCalendar(true)}
                        style={{ cursor: 'pointer' }}
                        title="Click to view your study calendar"
                    >
                        <FaCalendarAlt />
                        <span>VIEW CALENDAR</span>
                    </motion.div>
                )}
            </motion.header>

            {/* === STREAK CALENDAR MODAL === */}
            <AnimatePresence>
                {showCalendar && (
                    <motion.div
                        className="cp-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowCalendar(false)}
                    >
                        <motion.div
                            className="cp-calendar-modal"
                            initial={{ scale: 0.8, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 40 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="cp-calendar-header">
                                <button className="cp-calendar-nav" onClick={prevMonth}><FaChevronLeft /></button>
                                <h3 className="cp-calendar-title">{calendarMonthName}</h3>
                                <button className="cp-calendar-nav" onClick={nextMonth}><FaChevronRight /></button>
                            </div>
                            <div className="cp-calendar-weekdays">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                    <div key={d} className="cp-calendar-weekday">{d}</div>
                                ))}
                            </div>
                            <div className="cp-calendar-grid">
                                {calendarDays.map((day, i) => {
                                    if (day === null) return <div key={`empty-${i}`} className="cp-calendar-day empty" />;
                                    const key = `${calendarMonth.year}-${calendarMonth.month}-${day}`;
                                    const isActive = activeDays.has(key);
                                    const isToday = day === today.getDate() && calendarMonth.month === today.getMonth() && calendarMonth.year === today.getFullYear();
                                    return (
                                        <div
                                            key={day}
                                            className={`cp-calendar-day ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}`}
                                        >
                                            {isActive ? (
                                                <FaFire className="cp-calendar-fire" />
                                            ) : (
                                                <span>{day}</span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="cp-calendar-legend">
                                <span><FaFire style={{ color: 'var(--comic-red)' }} /> Active Day</span>
                                <span className="cp-calendar-today-dot" /> Today
                            </div>
                            <button className="cp-calendar-close" onClick={() => setShowCalendar(false)}>CLOSE</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData} barCategoryGap="20%">
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
                                <XAxis
                                    dataKey="quizLabel"
                                    stroke="#6b6b80"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis stroke="#6b6b80" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={v => `${v}%`} />
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
                                    formatter={(value) => [`${value}%`, 'Score']}
                                    labelFormatter={(label, payload) => {
                                        if (payload && payload[0]) return `${payload[0].payload.name}`;
                                        return label;
                                    }}
                                />
                                <Bar
                                    dataKey="score"
                                    animationDuration={1500}
                                    radius={[4, 4, 0, 0]}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={entry.score >= 80 ? '#2ECC40' : entry.score >= 50 ? '#FFDC00' : '#FF4136'}
                                            stroke={entry.score >= 80 ? '#2ECC40' : entry.score >= 50 ? '#FFDC00' : '#FF4136'}
                                            strokeWidth={2}
                                        />
                                    ))}
                                </Bar>
                            </BarChart>
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
                                    <div className={`cp-activity-icon ${activity._source === 'quiz' ? 'quiz' : 'lesson'}`}>
                                        {activity._source === 'quiz' ? <FaBolt /> : <FaBookOpen />}
                                    </div>
                                    <div className="cp-activity-info">
                                        <h4>{getActivityLabel(activity)}</h4>
                                        <p>{activity.timestamp?.toDate ? activity.timestamp.toDate().toLocaleString() : 'Recent'}</p>
                                    </div>
                                    {activity._source === 'quiz' && (
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
                                onClick={() => setSelectedBadge(badge)}
                            >
                                <div className="cp-badge-circle">
                                    <div className="cp-badge-icon">
                                        {badge.unlocked ? badge.icon : <FaLock />}
                                    </div>
                                </div>
                                <span className="cp-badge-name">{badge.unlocked ? badge.name : '???'}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* === BADGE DETAIL POPUP === */}
            <AnimatePresence>
                {selectedBadge && (
                    <motion.div
                        className="cp-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedBadge(null)}
                    >
                        <motion.div
                            className="cp-badge-modal"
                            initial={{ scale: 0.7, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.7, y: 30 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="cp-badge-modal-close" onClick={() => setSelectedBadge(null)}><FaTimes /></button>
                            <div
                                className={`cp-badge-modal-circle ${selectedBadge.unlocked ? 'unlocked' : ''}`}
                                style={{ '--badge-color': selectedBadge.color }}
                            >
                                <div className="cp-badge-modal-icon">
                                    {selectedBadge.unlocked ? selectedBadge.icon : <FaLock />}
                                </div>
                            </div>
                            <h3 className="cp-badge-modal-name" style={{ color: selectedBadge.unlocked ? selectedBadge.color : 'var(--text-muted)' }}>
                                {selectedBadge.name}
                            </h3>
                            <div className={`cp-badge-modal-status ${selectedBadge.unlocked ? 'unlocked' : ''}`}>
                                {selectedBadge.unlocked ? 'UNLOCKED!' : 'LOCKED'}
                            </div>
                            <p className="cp-badge-modal-desc">{selectedBadge.desc}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* === RESET SECTION (Owl Design) === */}
            <motion.div className="cp-reset-section" variants={itemVariants}>
                <button
                    className="cp-reset-btn"
                    onClick={() => setShowResetConfirm(true)}
                    disabled={resetting}
                >
                    <FaRedo />
                    {resetting ? 'RESETTING...' : 'RESET ALL STATS'}
                </button>
                <p className="cp-reset-warning">This will wipe all progress data. Use with caution!</p>
            </motion.div>

            {/* === RESET CONFIRM MODAL (Owl) === */}
            <AnimatePresence>
                {showResetConfirm && (
                    <motion.div
                        className="cp-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowResetConfirm(false)}
                    >
                        <motion.div
                            className="cp-reset-modal"
                            initial={{ scale: 0.8, y: 40 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 40 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="cp-reset-owl" style={{ backgroundImage: `url(${resetOwl})` }} />
                            <div className="cp-reset-modal-content">
                                <h3>Reset All Stats?</h3>
                                <p>Are you sure? This will delete all your progress, badges, and history. This action cannot be undone!</p>
                                <div className="cp-reset-modal-actions">
                                    <button className="cp-reset-cancel" onClick={() => setShowResetConfirm(false)}>
                                        No, Keep My Stats
                                    </button>
                                    <button className="cp-reset-confirm" onClick={handleResetStats} disabled={resetting}>
                                        {resetting ? 'Resetting...' : 'Yes, Reset Everything'}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Progress;
