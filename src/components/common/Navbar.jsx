// Navbar Component - ArthShastra
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  FaGoogle,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaUserGraduate,
  FaSchool,
  FaBook,
  FaChartLine,
  FaEdit,
  FaSave,
  FaEnvelope,
  FaIdCard,
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaFire,
  FaMedal,
  FaBirthdayCake,
  FaVenusMars
} from 'react-icons/fa';
import { HiSparkles, HiAcademicCap } from 'react-icons/hi';
import './Navbar.css';

// Indian states list
const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Puducherry', 'Chandigarh'
];

function Navbar() {
  const { user, login, logout, isAuthenticated, loading, updateUserProfile } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'stats'
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
    phone: '',
    parentPhone: '',
    dateOfBirth: '',
    gender: ''
  });

  // Pre-fill profile data when user changes
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
        phone: user.phone || '',
        parentPhone: user.parentPhone || '',
        dateOfBirth: user.dateOfBirth || '',
        gender: user.gender || ''
      });
    }
  }, [user]);

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
    setIsEditing(false);
    setActiveTab('profile');
  };

  const closeProfileModal = () => {
    setShowProfileModal(false);
    setIsEditing(false);
  };

  const handleGoogleLogin = async () => {
    const result = await login();
    if (result.success) {
      closeAuthModal();
      // Show profile modal for new users to complete their profile
      if (result.isNewUser) {
        setTimeout(() => {
          setShowProfileModal(true);
          setIsEditing(true);
        }, 500);
      }
    }
  };

  const handleProfileUpdate = async () => {
    if (updateUserProfile) {
      const result = await updateUserProfile(profileData);
      if (result.success) {
        setIsEditing(false);
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    closeProfileModal();
    closeMobileMenu();
  };

  const formatTime = (ms) => {
    if (!ms) return '0 min';
    const minutes = Math.floor(ms / 60000);
    const hours = Math.floor(minutes / 60);
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    }
    return `${minutes} min`;
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <>
      <header className="nav-header">
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            ArthShastra
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/lessons"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Lessons
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Quiz
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Progress
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              About
            </NavLink>

            {/* Mobile Auth Button */}
            <div className="mobile-auth">
              {isAuthenticated ? (
                <button className="auth-btn logout" onClick={handleLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              ) : (
                <button className="auth-btn login" onClick={openAuthModal}>
                  <FaUser /> Sign In
                </button>
              )}
            </div>
          </nav>

          {/* Desktop Auth */}
          <div className="nav-auth">
            {loading ? (
              <div className="auth-loading">Loading...</div>
            ) : isAuthenticated ? (
              <div className="user-menu" onClick={openProfileModal}>
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
              </div>
            ) : (
              <button className="auth-btn login-btn" onClick={openAuthModal}>
                <FaUser /> Sign In
              </button>
            )}
          </div>

          {/* Hamburger Menu */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="modal-overlay" onClick={closeAuthModal}>
          <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeAuthModal}>
              <FaTimes />
            </button>

            <div className="modal-header">
              <div className="modal-icon">
                <HiAcademicCap />
              </div>
              <h2>Welcome to ArthShastra</h2>
              <p>Sign in to track your progress and save your quiz scores</p>
            </div>

            <div className="modal-content">
              <div className="auth-benefits">
                <div className="benefit-item">
                  <FaChartLine className="benefit-icon" />
                  <span>Track your learning progress</span>
                </div>
                <div className="benefit-item">
                  <FaTrophy className="benefit-icon" />
                  <span>Save quiz scores & achievements</span>
                </div>
                <div className="benefit-item">
                  <FaBook className="benefit-icon" />
                  <span>Resume where you left off</span>
                </div>
                <div className="benefit-item">
                  <HiSparkles className="benefit-icon" />
                  <span>Personalized learning experience</span>
                </div>
              </div>

              <button className="google-signin-btn" onClick={handleGoogleLogin}>
                <FaGoogle className="google-icon" />
                <span>Continue with Google</span>
              </button>

              <p className="auth-note">
                By signing in, you agree to our Terms of Service and Privacy Policy.
                Your data is safe with us.
              </p>
            </div>

            <div className="modal-footer">
              <p>
                <FaUserGraduate className="footer-icon" />
                Join 5,000+ students already learning!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="modal-overlay" onClick={closeProfileModal}>
          <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProfileModal}>
              <FaTimes />
            </button>

            <div className="profile-header">
              <div className="profile-avatar-large">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.name} />
                ) : (
                  <div className="avatar-placeholder-large">
                    <FaUser />
                  </div>
                )}
                {user?.stats?.currentStreak > 0 && (
                  <div className="avatar-streak">
                    <FaFire /> {user.stats.currentStreak}
                  </div>
                )}
              </div>
              <div className="profile-title">
                <h2>{user?.displayName || user?.name || 'Student'}</h2>
                <p className="profile-email">
                  <FaEnvelope /> {user?.email || 'Guest User'}
                </p>
                {user?.className && user?.board && (
                  <p className="profile-class-info">
                    Class {user.className} • {user.board}
                  </p>
                )}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="profile-tabs">
              <button
                className={`profile-tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <FaUser /> Profile
              </button>
              <button
                className={`profile-tab ${activeTab === 'stats' ? 'active' : ''}`}
                onClick={() => setActiveTab('stats')}
              >
                <FaChartLine /> Stats
              </button>
            </div>

            <div className="profile-content">
              {activeTab === 'profile' && (
                <>
                  {isEditing ? (
                    <div className="profile-form">
                      {/* Basic Info */}
                      <div className="form-section">
                        <h4 className="form-section-title">Basic Information</h4>

                        <div className="form-group">
                          <label><FaIdCard /> Display Name</label>
                          <input
                            type="text"
                            value={profileData.displayName}
                            onChange={(e) => setProfileData({ ...profileData, displayName: e.target.value })}
                            placeholder="Enter your name"
                          />
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label><FaBirthdayCake /> Date of Birth</label>
                            <input
                              type="date"
                              value={profileData.dateOfBirth}
                              onChange={(e) => setProfileData({ ...profileData, dateOfBirth: e.target.value })}
                            />
                          </div>
                          <div className="form-group">
                            <label><FaVenusMars /> Gender</label>
                            <select
                              value={profileData.gender}
                              onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Academic Info */}
                      <div className="form-section">
                        <h4 className="form-section-title">Academic Information</h4>

                        <div className="form-row">
                          <div className="form-group">
                            <label><FaUserGraduate /> Class</label>
                            <select
                              value={profileData.className}
                              onChange={(e) => setProfileData({ ...profileData, className: e.target.value })}
                            >
                              <option value="">Select Class</option>
                              <option value="11">Class 11</option>
                              <option value="12">Class 12</option>
                              <option value="dropout">Dropout/Repeater</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label><FaBook /> Board</label>
                            <select
                              value={profileData.board}
                              onChange={(e) => setProfileData({ ...profileData, board: e.target.value })}
                            >
                              <option value="">Select Board</option>
                              <option value="CBSE">CBSE</option>
                              <option value="ICSE">ICSE</option>
                              <option value="State Board">State Board</option>
                              <option value="IB">IB</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label><FaSchool /> School Name</label>
                          <input
                            type="text"
                            value={profileData.school}
                            onChange={(e) => setProfileData({ ...profileData, school: e.target.value })}
                            placeholder="Enter your school name"
                          />
                        </div>

                        <div className="form-row">
                          <div className="form-group">
                            <label><FaCalendarAlt /> Exam Year</label>
                            <select
                              value={profileData.examYear}
                              onChange={(e) => setProfileData({ ...profileData, examYear: parseInt(e.target.value) })}
                            >
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label><FaTrophy /> Target Score (%)</label>
                            <select
                              value={profileData.targetScore}
                              onChange={(e) => setProfileData({ ...profileData, targetScore: e.target.value })}
                            >
                              <option value="">Select Target</option>
                              <option value="60">60% and above</option>
                              <option value="70">70% and above</option>
                              <option value="80">80% and above</option>
                              <option value="90">90% and above</option>
                              <option value="95">95% and above</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label><FaClock /> Daily Study Hours</label>
                          <select
                            value={profileData.studyHoursPerDay}
                            onChange={(e) => setProfileData({ ...profileData, studyHoursPerDay: e.target.value })}
                          >
                            <option value="">Select Hours</option>
                            <option value="1">Less than 1 hour</option>
                            <option value="2">1-2 hours</option>
                            <option value="3">2-3 hours</option>
                            <option value="4">3-4 hours</option>
                            <option value="5">More than 4 hours</option>
                          </select>
                        </div>
                      </div>

                      {/* Location Info */}
                      <div className="form-section">
                        <h4 className="form-section-title">Location</h4>

                        <div className="form-row">
                          <div className="form-group">
                            <label><FaMapMarkerAlt /> City</label>
                            <input
                              type="text"
                              value={profileData.city}
                              onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
                              placeholder="Enter your city"
                            />
                          </div>
                          <div className="form-group">
                            <label><FaMapMarkerAlt /> State</label>
                            <select
                              value={profileData.state}
                              onChange={(e) => setProfileData({ ...profileData, state: e.target.value })}
                            >
                              <option value="">Select State</option>
                              {indianStates.map(state => (
                                <option key={state} value={state}>{state}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="form-section">
                        <h4 className="form-section-title">Contact (Optional)</h4>

                        <div className="form-row">
                          <div className="form-group">
                            <label><FaPhone /> Your Phone</label>
                            <input
                              type="tel"
                              value={profileData.phone}
                              onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                          <div className="form-group">
                            <label><FaPhone /> Parent's Phone</label>
                            <input
                              type="tel"
                              value={profileData.parentPhone}
                              onChange={(e) => setProfileData({ ...profileData, parentPhone: e.target.value })}
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button className="cancel-btn" onClick={() => setIsEditing(false)}>
                          Cancel
                        </button>
                        <button className="save-btn" onClick={handleProfileUpdate}>
                          <FaSave /> Save Profile
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="profile-info">
                      {!user?.isProfileComplete && (
                        <div className="profile-incomplete-banner">
                          <span>Complete your profile for a better experience!</span>
                          <button onClick={() => setIsEditing(true)}>Complete Now</button>
                        </div>
                      )}

                      <div className="info-grid">
                        <div className="info-item">
                          <FaUserGraduate className="info-icon" />
                          <div>
                            <span className="info-label">Class</span>
                            <span className="info-value">
                              {user?.className ? `Class ${user.className}` : 'Not set'}
                            </span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaBook className="info-icon" />
                          <div>
                            <span className="info-label">Board</span>
                            <span className="info-value">{user?.board || 'Not set'}</span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaSchool className="info-icon" />
                          <div>
                            <span className="info-label">School</span>
                            <span className="info-value">{user?.school || 'Not set'}</span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaMapMarkerAlt className="info-icon" />
                          <div>
                            <span className="info-label">Location</span>
                            <span className="info-value">
                              {user?.city && user?.state
                                ? `${user.city}, ${user.state}`
                                : 'Not set'}
                            </span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaTrophy className="info-icon" />
                          <div>
                            <span className="info-label">Target Score</span>
                            <span className="info-value">
                              {user?.targetScore ? `${user.targetScore}%+` : 'Not set'}
                            </span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaCalendarAlt className="info-icon" />
                          <div>
                            <span className="info-label">Exam Year</span>
                            <span className="info-value">{user?.examYear || 'Not set'}</span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaClock className="info-icon" />
                          <div>
                            <span className="info-label">Daily Study</span>
                            <span className="info-value">
                              {user?.studyHoursPerDay ? `${user.studyHoursPerDay} hours` : 'Not set'}
                            </span>
                          </div>
                        </div>

                        <div className="info-item">
                          <FaCalendarAlt className="info-icon" />
                          <div>
                            <span className="info-label">Member Since</span>
                            <span className="info-value">{formatDate(user?.createdAt)}</span>
                          </div>
                        </div>
                      </div>

                      <button className="edit-profile-btn" onClick={() => setIsEditing(true)}>
                        <FaEdit /> Edit Profile
                      </button>
                    </div>
                  )}
                </>
              )}

              {activeTab === 'stats' && (
                <div className="stats-tab">
                  <div className="stats-overview">
                    <div className="stat-card">
                      <FaFire className="stat-icon fire" />
                      <div className="stat-info">
                        <span className="stat-number">{user?.stats?.currentStreak || 0}</span>
                        <span className="stat-label">Day Streak</span>
                      </div>
                    </div>

                    <div className="stat-card">
                      <FaMedal className="stat-icon gold" />
                      <div className="stat-info">
                        <span className="stat-number">{user?.stats?.longestStreak || 0}</span>
                        <span className="stat-label">Best Streak</span>
                      </div>
                    </div>

                    <div className="stat-card">
                      <FaTrophy className="stat-icon trophy" />
                      <div className="stat-info">
                        <span className="stat-number">{user?.stats?.bestScore || 0}%</span>
                        <span className="stat-label">Best Score</span>
                      </div>
                    </div>

                    <div className="stat-card">
                      <FaChartLine className="stat-icon chart" />
                      <div className="stat-info">
                        <span className="stat-number">{user?.stats?.averageScore || 0}%</span>
                        <span className="stat-label">Avg Score</span>
                      </div>
                    </div>
                  </div>

                  <div className="detailed-stats">
                    <h4>Learning Progress</h4>
                    <div className="stats-list">
                      <div className="stats-row">
                        <span className="stats-label">Lessons Completed</span>
                        <span className="stats-value">{user?.stats?.lessonsCompleted || 0}</span>
                      </div>
                      <div className="stats-row">
                        <span className="stats-label">Quizzes Taken</span>
                        <span className="stats-value">{user?.stats?.quizzesTaken || 0}</span>
                      </div>
                      <div className="stats-row">
                        <span className="stats-label">Quizzes Passed</span>
                        <span className="stats-value">{user?.stats?.quizzesPassed || 0}</span>
                      </div>
                      <div className="stats-row">
                        <span className="stats-label">Questions Attempted</span>
                        <span className="stats-value">{user?.stats?.totalQuestionsAttempted || 0}</span>
                      </div>
                      <div className="stats-row">
                        <span className="stats-label">Correct Answers</span>
                        <span className="stats-value">{user?.stats?.totalCorrectAnswers || 0}</span>
                      </div>
                      <div className="stats-row">
                        <span className="stats-label">Total Time Spent</span>
                        <span className="stats-value">{formatTime(user?.stats?.totalTimeSpent)}</span>
                      </div>
                      <div className="stats-row">
                        <span className="stats-label">Login Count</span>
                        <span className="stats-value">{user?.loginCount || 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="profile-footer">
              <button className="logout-btn-large" onClick={handleLogout}>
                <FaSignOutAlt /> Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
