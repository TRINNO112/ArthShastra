import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaTimes, FaUser, FaEnvelope, FaChartLine, FaEdit, FaSave, FaSignOutAlt,
    FaFire, FaIdCard, FaBirthdayCake, FaVenusMars, FaUserGraduate, FaBook,
    FaSchool, FaCalendarAlt, FaTrophy, FaClock, FaMapMarkerAlt, FaGlobeAmericas,
    FaMedal, FaHourglassHalf, FaBookOpen, FaBuilding, FaTrash, FaExclamationTriangle,
    FaDoorOpen, FaUserEdit, FaCheck
} from 'react-icons/fa';
import { HiAcademicCap } from 'react-icons/hi';
import resetOwl from '../../assets/reset-owl.png';
import signoutOwl from '../../assets/signout-owl.png';
import './ProfileModal.css';

// Indian states list moved here
const INDIAN_STATES = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
];

// Helper functions embedded
const formatTime = (minutes) => {
    if (!minutes) return '0 min';
    const hours = Math.floor(minutes / 60);
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    return `${minutes} min`;
};

const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
};

const ProfileModal = ({ isOpen, onClose, user, onUpdateProfile, onLogout }) => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [confirmAction, setConfirmAction] = useState(null); // { type: 'reset' | 'logout' }
    const [profileData, setProfileData] = useState({
        displayName: '',
        className: '',
        school: '',
        board: '',
        city: '',
        state: '',
        targetScore: '',
        studyHoursPerDay: '',
        examYear: new Date().getFullYear() + 1,
        dateOfBirth: '',
        gender: ''
    });

    // Reset/Fill Logic
    useEffect(() => {
        if (isOpen) {
            setActiveTab('profile');
            setIsEditing(false);
            setConfirmAction(null);
        }
    }, [isOpen]);

    useEffect(() => {
        if (user && !user.isAnonymous) {
            setProfileData({
                displayName: user.displayName || user.name || '',
                className: user.className || '',
                school: user.school || '',
                board: user.board || '',
                city: user.city || '',
                state: user.state || '',
                targetScore: user.targetScore || '',
                studyHoursPerDay: user.studyHoursPerDay || '',
                examYear: user.examYear || new Date().getFullYear() + 1,
                dateOfBirth: user.dateOfBirth || '',
                gender: user.gender || ''
            });
        }
    }, [user]);

    const handleSave = async () => {
        await onUpdateProfile(profileData);
        setIsEditing(false);
    };

    const triggerResetStats = () => {
        setConfirmAction({
            type: 'reset',
            title: 'Reset All Stats?',
            message: 'Are you sure? This will delete all your progress, badges, and history. This action cannot be undone!',
            icon: <div className="pm-confirm-hero" style={{ backgroundImage: `url(${resetOwl})` }}></div>,
            confirmText: 'Yes, Reset Everything',
            cancelText: 'No, Keep My Stats',
            color: 'var(--pm-red)'
        });
    };

    const triggerLogout = () => {
        setConfirmAction({
            type: 'logout',
            title: 'Sign Out?',
            message: 'Are you sure you want to sign out? Come back soon to keep your streak alive!',
            icon: <div className="pm-confirm-hero" style={{ backgroundImage: `url(${signoutOwl})` }}></div>,
            confirmText: 'Yes,  Sign Out',
            cancelText: 'Stay Logged In',
            color: 'var(--pm-purple)'
        });
    };

    const confirmActionHandler = async () => {
        if (!confirmAction) return;

        if (confirmAction.type === 'reset') {
            try {
                const { resetUserStats } = await import('../../services/firebase');
                await resetUserStats();
                window.location.reload();
            } catch (error) {
                console.error("Failed to reset stats", error);
            }
        } else if (confirmAction.type === 'logout') {
            onLogout();
        }
        setConfirmAction(null);
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        visible: {
            opacity: 1, scale: 1, y: 0,
            transition: { type: "spring", stiffness: 300, damping: 15 }
        },
        exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2 } }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    if (typeof document === 'undefined') return null;

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="pm-overlay"
                    onClick={onClose}
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="pm-container"
                        onClick={(e) => e.stopPropagation()}
                        variants={modalVariants}
                    >
                        {/* CONFIRMATION OVERLAY */}
                        <AnimatePresence>
                            {confirmAction && (
                                <motion.div
                                    className="pm-confirm-overlay"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                >
                                    {/* Hero Image (Top 50%) */}
                                    {confirmAction.icon}

                                    {/* Content (Bottom 50%) */}
                                    <div className="pm-confirm-content">
                                        <h3>{confirmAction.title}</h3>
                                        <p>{confirmAction.message}</p>
                                        <div className="pm-confirm-actions">
                                            <button className="pm-btn-cancel" onClick={() => setConfirmAction(null)}>
                                                {confirmAction.cancelText}
                                            </button>
                                            <button
                                                className="pm-btn-danger"
                                                style={{ backgroundColor: confirmAction.color, borderColor: 'var(--pm-border)' }}
                                                onClick={confirmActionHandler}
                                            >
                                                {confirmAction.confirmText}
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button className="pm-close-btn" onClick={onClose}>
                            <FaTimes />
                        </button>

                        {/* HEADER */}
                        <div className="pm-header">
                            <div className="pm-avatar">
                                {user?.photoURL ? (
                                    <img src={user.photoURL} alt="Profile" />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#ccc' }}>
                                        <FaUser />
                                    </div>
                                )}
                                {user?.stats?.currentStreak > 0 && (
                                    <div className="pm-streak-badge">
                                        <FaFire /> {user.stats.currentStreak}
                                    </div>
                                )}
                            </div>
                            <div className="pm-title">
                                <h2>{user?.displayName || user?.name || 'Student'}</h2>
                            </div>
                            <div className="pm-email">
                                <FaEnvelope style={{ marginRight: 5 }} /> {user?.email || 'Guest User'}
                            </div>
                            {user?.className && user?.board && (
                                <div className="pm-class-info">
                                    Class {user.className} • {user.board}
                                </div>
                            )}
                        </div>

                        {/* TABS */}
                        <div className="pm-tabs">
                            <button
                                className={`pm-tab ${activeTab === 'profile' ? 'active' : ''}`}
                                onClick={() => setActiveTab('profile')}
                            >
                                <FaUser /> Profile
                            </button>
                            <button
                                className={`pm-tab ${activeTab === 'stats' ? 'active' : ''}`}
                                onClick={() => setActiveTab('stats')}
                            >
                                <FaChartLine /> Stats
                            </button>
                        </div>

                        {/* CONTENT */}
                        <div className="pm-content">
                            {activeTab === 'profile' && (
                                <>
                                    {isEditing ? (
                                        <motion.div
                                            className="pm-form"
                                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                        >
                                            {/* Basic Info */}
                                            <h4 className="pm-section-title">Basic Information</h4>
                                            <div className="pm-form-group">
                                                <label>Display Name</label>
                                                <input className="pm-input" type="text" value={profileData.displayName} onChange={e => setProfileData({ ...profileData, displayName: e.target.value })} />
                                            </div>

                                            {/* Academic Info */}
                                            <h4 className="pm-section-title">Academic Information</h4>
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                                <div className="pm-form-group">
                                                    <label>Class</label>
                                                    <select className="pm-select" value={profileData.className} onChange={e => setProfileData({ ...profileData, className: e.target.value })}>
                                                        <option value="">Select</option>
                                                        <option value="11">Class 11</option>
                                                        <option value="12">Class 12</option>
                                                    </select>
                                                </div>
                                                <div className="pm-form-group">
                                                    <label>Board</label>
                                                    <select className="pm-select" value={profileData.board} onChange={e => setProfileData({ ...profileData, board: e.target.value })}>
                                                        <option value="">Select</option>
                                                        <option value="CBSE">CBSE</option>
                                                        <option value="ICSE">ICSE</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="pm-actions">
                                                <button className="pm-btn-cancel" onClick={() => setIsEditing(false)}>Cancel</button>
                                                <button className="pm-btn-save" onClick={handleSave}><FaSave /> Save</button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        >
                                            <div className="pm-info-grid">
                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaUserGraduate /></div>
                                                    <div><span className="pm-label">Class</span><span className="pm-value">{user?.className || 'N/A'}</span></div>
                                                </div>
                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><HiAcademicCap /></div>
                                                    <div><span className="pm-label">Board</span><span className="pm-value">{user?.board || 'N/A'}</span></div>
                                                </div>
                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaMapMarkerAlt /></div>
                                                    <div><span className="pm-label">Location</span><span className="pm-value">{user?.city || 'Not set'}</span></div>
                                                </div>

                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaSchool /></div>
                                                    <div><span className="pm-label">School</span><span className="pm-value">{user?.school || 'Not set'}</span></div>
                                                </div>

                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaTrophy /></div>
                                                    <div><span className="pm-label">Target Score</span><span className="pm-value">{user?.targetScore ? `${user.targetScore}%+` : 'Not set'}</span></div>
                                                </div>

                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaCalendarAlt /></div>
                                                    <div><span className="pm-label">Exam Year</span><span className="pm-value">{user?.examYear || 'Not set'}</span></div>
                                                </div>

                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaClock /></div>
                                                    <div><span className="pm-label">Daily Study</span><span className="pm-value">{user?.studyHoursPerDay ? `${user.studyHoursPerDay} hours` : 'Not set'}</span></div>
                                                </div>

                                                <div className="pm-info-item">
                                                    <div className="pm-icon-box"><FaFire /></div>
                                                    <div><span className="pm-label">Member Since</span><span className="pm-value">{formatDate(user?.createdAt)}</span></div>
                                                </div>
                                            </div>

                                            <div className="pm-edit-container">
                                                <button className="pm-btn-primary pm-btn-icon-swap" onClick={() => setIsEditing(true)}>
                                                    <span className="pm-icon-normal"><FaEdit /></span>
                                                    <span className="pm-icon-hover"><FaUserEdit /></span>
                                                    <span>Edit Profile</span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </>
                            )}

                            {activeTab === 'stats' && (
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                >
                                    <div className="pm-stats-grid">
                                        <div className="pm-stat-card">
                                            <span className="pm-stat-number">{user?.stats?.currentStreak || 0}</span>
                                            <span className="pm-stat-label">Streak</span>
                                        </div>
                                        <div className="pm-stat-card">
                                            <span className="pm-stat-number">{user?.stats?.quizzes?.bestScore || 0}%</span>
                                            <span className="pm-stat-label">Best Score</span>
                                        </div>
                                        <div className="pm-stat-card">
                                            <span className="pm-stat-number">{formatTime(user?.stats?.totalTimeSpent)}</span>
                                            <span className="pm-stat-label">Time Spent</span>
                                        </div>
                                    </div>

                                    <div className="pm-detailed-stats">
                                        <h4>Learning Progress</h4>
                                        <div className="pm-stat-row">
                                            <span className="pm-row-label">Lessons Completed</span>
                                            <span className="pm-row-value">{user?.stats?.lessonsCompleted || 0}</span>
                                        </div>
                                        <div className="pm-stat-row">
                                            <span className="pm-row-label">Quizzes Passed</span>
                                            <span className="pm-row-value">{user?.stats?.quizzesPassed || 0}</span>
                                        </div>
                                        <div className="pm-stat-row">
                                            <span className="pm-row-label">Questions Attempted</span>
                                            <span className="pm-row-value">{user?.stats?.totalQuestionsAttempted || 0}</span>
                                        </div>
                                        <div className="pm-stat-row">
                                            <span className="pm-row-label">Correct Answers</span>
                                            <span className="pm-row-value">{user?.stats?.totalCorrectAnswers || 0}</span>
                                        </div>
                                        <div className="pm-stat-row">
                                            <span className="pm-row-label">Total Time Spent</span>
                                            <span className="pm-row-value">{formatTime(user?.stats?.totalTimeSpent)}</span>
                                        </div>
                                        <div className="pm-stat-row">
                                            <span className="pm-row-label">Login Count</span>
                                            <span className="pm-row-value">{user?.loginCount || 1}</span>
                                        </div>
                                    </div>

                                    <div className="pm-edit-container">
                                        <button className="pm-btn-danger pm-btn-icon-swap" onClick={triggerResetStats}>
                                            <span className="pm-icon-normal"><FaTrash /></span>
                                            <span className="pm-icon-hover"><FaExclamationTriangle /></span>
                                            <span>Reset All Stats</span>
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* FOOTER */}
                        <div className="pm-footer">
                            <button className="pm-logout-btn pm-btn-icon-swap" onClick={triggerLogout}>
                                <span className="pm-icon-normal"><FaSignOutAlt /></span>
                                <span className="pm-icon-hover"><FaDoorOpen /></span>
                                <span>Sign Out</span>
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default ProfileModal;
