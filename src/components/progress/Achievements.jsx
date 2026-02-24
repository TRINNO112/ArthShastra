import React, { useState } from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { FaLock, FaTimes } from 'react-icons/fa';
import './Achievements.css';

const getProgressHint = (badge, stats, lessonsCompleted) => {
    if (badge.unlocked) return null;

    switch (badge.id) {
        case 'first_lesson':
            return 'Complete your first lesson to unlock!';
        case 'quiz_master':
            return `${Math.max(0, 5 - (stats.quizzesPassed || 0))} more quizzes to pass`;
        case 'streak_3':
            return `${Math.max(0, 3 - (stats.currentStreak || 0))} more days needed`;
        case 'halfway':
            return `${Math.max(0, 13 - lessonsCompleted)} more lessons to go`;
        case 'top_scorer':
            return `Need ${Math.max(0, 90 - (stats.bestScore || 0))}% more on best score`;
        case 'determined':
            return `${Math.max(0, 60 - (stats.totalTimeSpent || 0))}min more study time`;
        case 'night_owl':
            return 'Visit between 10 PM - 5 AM';
        case 'early_bird':
            return 'Visit between 5 AM - 8 AM';
        case 'perfectionist':
            return 'Score 100% on any quiz';
        case 'scholar':
            return `${Math.max(0, 10 - lessonsCompleted)} more lessons to complete`;
        case 'marathon':
            return `${Math.max(0, 300 - (stats.totalTimeSpent || 0))}min more study time`;
        case 'loyal':
            return `${Math.max(0, 7 - (stats.currentStreak || 0))} more streak days`;
        default:
            return 'Keep going!';
    }
};

const Achievements = ({ badges, stats, lessonsCompleted }) => {
    const [selectedBadge, setSelectedBadge] = useState(null);

    const unlockedCount = badges.filter(b => b.unlocked).length;

    return (
        <>
            <div className="ach-header-row">
                <div className="ach-count">
                    <span className="ach-count-num">{unlockedCount}</span>
                    <span className="ach-count-sep">/</span>
                    <span className="ach-count-total">{badges.length}</span>
                    <span className="ach-count-label">UNLOCKED</span>
                </div>
            </div>

            <div className="ach-grid">
                {badges.map((badge, i) => (
                    <motion.div
                        key={badge.id}
                        className={`ach-card ${badge.unlocked ? 'unlocked' : 'locked'}`}
                        style={{ '--ach-color': badge.color }}
                        onClick={() => setSelectedBadge(badge)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.04 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="ach-card-icon-wrap">
                            <div className={`ach-card-icon ${badge.unlocked ? 'glow' : ''}`}>
                                {badge.unlocked ? badge.icon : <FaLock />}
                            </div>
                            {badge.unlocked && <div className="ach-shimmer" />}
                        </div>
                        <div className="ach-card-info">
                            <h4 className="ach-card-name">{badge.name}</h4>
                            <p className="ach-card-hint">
                                {badge.unlocked
                                    ? badge.desc.split('.')[0] + '.'
                                    : getProgressHint(badge, stats, lessonsCompleted)
                                }
                            </p>
                        </div>
                        {badge.unlocked && <div className="ach-card-check">&#10003;</div>}
                    </motion.div>
                ))}
            </div>

            {/* Badge Detail Popup */}
            <AnimatePresence>
                {selectedBadge && (
                    <motion.div
                        className="ach-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedBadge(null)}
                    >
                        <motion.div
                            className={`ach-modal ${selectedBadge.unlocked ? 'unlocked' : 'locked'}`}
                            style={{ '--ach-color': selectedBadge.color }}
                            initial={{ scale: 0.5, opacity: 0, rotateX: 20 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.5, opacity: 0, rotateX: -20 }}
                            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="ach-modal-close" onClick={() => setSelectedBadge(null)}>
                                <FaTimes />
                            </button>

                            {/* Icon with pulse ring */}
                            <div className="ach-modal-icon-area">
                                {selectedBadge.unlocked && <div className="ach-pulse-ring" />}
                                {selectedBadge.unlocked && <div className="ach-pulse-ring ring-2" />}
                                <div className={`ach-modal-icon ${selectedBadge.unlocked ? 'glow' : ''}`}>
                                    {selectedBadge.unlocked ? selectedBadge.icon : <FaLock />}
                                </div>
                            </div>

                            <h3 className="ach-modal-name">{selectedBadge.name}</h3>

                            <div className={`ach-modal-status ${selectedBadge.unlocked ? 'unlocked' : ''}`}>
                                {selectedBadge.unlocked ? 'UNLOCKED' : 'LOCKED'}
                            </div>

                            <p className="ach-modal-desc">{selectedBadge.desc}</p>

                            {!selectedBadge.unlocked && (
                                <div className="ach-modal-progress-hint">
                                    {getProgressHint(selectedBadge, stats, lessonsCompleted)}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Achievements;
