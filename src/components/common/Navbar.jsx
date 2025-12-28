// Navbar Component - ArthShastra
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaGoogle, FaSignOutAlt, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const { user, login, logout, isAuthenticated, loading } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
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
              <button className="auth-btn logout" onClick={() => { logout(); closeMobileMenu(); }}>
                <FaSignOutAlt /> Logout
              </button>
            ) : (
              <button className="auth-btn login" onClick={() => { login(); closeMobileMenu(); }}>
                <FaGoogle /> Login with Google
              </button>
            )}
          </div>
        </nav>

        {/* Desktop Auth */}
        <div className="nav-auth">
          {loading ? (
            <div className="auth-loading">Loading...</div>
          ) : isAuthenticated ? (
            <div className="user-menu">
              <div className="user-info">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="user-avatar" />
                ) : (
                  <div className="user-avatar-placeholder">
                    <FaUser />
                  </div>
                )}
                <span className="user-name">{user?.name?.split(' ')[0]}</span>
              </div>
              <button className="auth-btn logout-btn" onClick={logout}>
                <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <button className="auth-btn login-btn" onClick={login}>
              <FaGoogle /> Login
            </button>
          )}
        </div>

        {/* Hamburger Menu */}
        <button className="hamburger" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
