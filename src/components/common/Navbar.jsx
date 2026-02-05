import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGoogle, FaSignOutAlt, FaUser, FaBars, FaTimes, FaUserGraduate, FaSchool,
  FaBook, FaChartLine, FaEdit, FaSave, FaEnvelope, FaIdCard, FaTrophy,
  FaCalendarAlt, FaMapMarkerAlt, FaClock, FaFire, FaMedal, FaBirthdayCake,
  FaVenusMars, FaBuilding, FaGlobeAmericas, FaHourglassHalf, FaBookOpen,
} from 'react-icons/fa';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi';
import './Navbar.css';
import ProfileModal from './ProfileModal';

function Navbar() {
  const { user, login, logout, isAuthenticated, loading, updateUserProfile } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Cleaned up unused state (activeTab, isEditing, profileData moved to ProfileModal)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openAuthModal = () => {
    setShowAuthModal(true);
    closeMobileMenu();
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
  };

  const openProfileModal = () => {
    setShowProfileModal(true);
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
  };

  const handleGoogleLogin = async () => {
    const result = await login();
    if (result.success) {
      closeAuthModal();
      if (result.isNewUser) {
        setTimeout(() => {
          setShowProfileModal(true);
        }, 500);
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    closeProfileModal();
    closeMobileMenu();
  };

  // Animation Variants (Kept for AuthModal if needed, or AuthModal could also be refactored later)
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

  return (
    <>
      <header className="nav-header">
        {/* ... (Header content) ... */}
        <div className="nav-container">
          {/* ... (Logo, etc) ... */}
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            ArthShastra
          </Link>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="nav-links">
            {['Home', 'Lessons', 'Quiz', 'Progress', 'About'].map((item) => (
              <NavLink
                key={item}
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item}
              </NavLink>
            ))}

            <div className="mobile-auth">
              {/* Mobile Auth button contents */}
            </div>
          </nav>

          {/* Desktop Auth */}
          <div className="nav-auth">
            {/* ... */}
            {loading ? (
              <div className="auth-loading">Loading...</div>
            ) : isAuthenticated ? (
              <motion.div
                className="user-menu"
                onClick={openProfileModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="user-info">
                  {user?.photoURL ? (
                    <img src={user.photoURL} alt={user.name} className="user-avatar" />
                  ) : (
                    <div className="user-avatar-placeholder">
                      <FaUser />
                    </div>
                  )}
                  <span className="user-name">{user?.displayName || user?.name?.split(' ')[0]}</span>
                  {user?.stats?.currentStreak > 0 && (
                    <span className="streak-badge">
                      <FaFire /> {user.stats.currentStreak}
                    </span>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.button
                className="auth-btn login-btn"
                onClick={openAuthModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaUser /> Sign In
              </motion.button>
            )}
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-container"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              <FaTimes />
            </button>

            {['Home', 'Lessons', 'Quiz', 'Progress', 'About'].map((item) => (
              <NavLink
                key={item}
                to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                {item}
              </NavLink>
            ))}

            <div className="mobile-auth-btn">
              {isAuthenticated ? (
                <>
                  <button
                    className="auth-btn"
                    onClick={() => { openProfileModal(); closeMobileMenu(); }}
                    style={{ width: '100%', justifyContent: 'center', marginBottom: '10px', background: 'var(--gradient-gold)', color: 'black' }}
                  >
                    <FaUser /> My Profile
                  </button>
                  <button className="auth-btn logout" onClick={handleLogout} style={{ width: '100%', justifyContent: 'center' }}>
                    <FaSignOutAlt /> Logout
                  </button>
                </>
              ) : (
                <button className="auth-btn login" onClick={openAuthModal} style={{ width: '100%', justifyContent: 'center' }}>
                  <FaUser /> Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal - Keeping reused logic for now or could be refactored too */}
      <AnimatePresence>
        {showAuthModal && (
          <motion.div
            className="modal-overlay"
            onClick={closeAuthModal}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="auth-modal"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
            >
              <button className="modal-close" onClick={closeAuthModal}>
                <FaTimes />
              </button>

              <div className="auth-modal-header">
                <div className="modal-icon">
                  <HiAcademicCap />
                </div>
                <h2>Welcome to ArthShastra</h2>
                <p>Sign in to track your progress and save your quiz scores</p>
              </div>

              <div className="auth-modal-content">
                <div className="auth-benefits">
                  <div className="benefit-item">
                    <FaChartLine className="benefit-icon" />
                    <span>Track your learning progress</span>
                  </div>
                  {/* ... (Keep original benefits items) ... */}
                </div>
                <button className="google-signin-btn" onClick={handleGoogleLogin}>
                  <FaGoogle className="google-icon" />
                  <span>Continue with Google</span>
                </button>
                <p className="auth-note">
                  By signing in, you agree to our Terms of Service.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NEW Profile Modal Component */}
      <ProfileModal
        isOpen={showProfileModal}
        onClose={closeProfileModal}
        user={user}
        onUpdateProfile={updateUserProfile}
        onLogout={handleLogout}
      />
    </>
  );
}

export default Navbar;
