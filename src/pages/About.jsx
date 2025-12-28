// About Page - ArthShastra
import { FaGithub, FaLinkedin, FaHeart, FaCode } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <span className="about-badge">About ArthShastra</span>
        <h1>
          Learn Economics,
          <span className="text-gradient"> The Desi Way</span>
        </h1>
        <p>
          An interactive learning platform designed for Class 12 Commerce students
          who want to master Economics without the boring textbook experience.
        </p>
      </section>

      {/* Story Section */}
      <section className="about-section">
        <div className="section-header">
          <h2>The Story</h2>
        </div>
        <div className="about-card">
          <p>
            <strong>ArthShastra</strong> was born out of a simple observation:
            most students struggle with Economics not because it's hard,
            but because it's taught in a way that doesn't connect with them.
          </p>
          <p>
            Complex concepts explained in simple Hindi/Hinglish.
            Interactive quizzes that actually make you think.
            Progress tracking so you know exactly where you stand.
          </p>
          <p>
            This is what <em>real learning</em> looks like.
          </p>
        </div>
      </section>

      {/* What's Covered */}
      <section className="about-section">
        <div className="section-header">
          <h2>What's Covered</h2>
        </div>
        <div className="coverage-grid">
          <div className="coverage-card micro">
            <div className="coverage-icon">📈</div>
            <h3>Microeconomics</h3>
            <ul>
              <li>Consumer Behavior & Demand</li>
              <li>Producer Behavior & Supply</li>
              <li>Market Forms & Price Determination</li>
              <li>Elasticity Concepts</li>
              <li>Cost & Revenue Analysis</li>
            </ul>
          </div>
          <div className="coverage-card macro">
            <div className="coverage-icon">🏛️</div>
            <h3>Macroeconomics</h3>
            <ul>
              <li>National Income Accounting</li>
              <li>Money & Banking</li>
              <li>Government Budget & Fiscal Policy</li>
              <li>Balance of Payments</li>
              <li>Foreign Exchange</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-section">
        <div className="section-header">
          <h2>Built With</h2>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span>React</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">⚡</span>
            <span>Vite</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔥</span>
            <span>Firebase</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎨</span>
            <span>CSS3</span>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="about-section">
        <div className="section-header">
          <h2>Created By</h2>
        </div>
        <div className="creator-card">
          <div className="creator-avatar">TA</div>
          <div className="creator-info">
            <h3>Trinno Asphalt</h3>
            <p>Developer & Creator of ArthShastra</p>
            <p className="creator-tagline">
              <FaCode /> Building educational tools that actually help students learn.
            </p>
          </div>
          <div className="creator-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Message */}
      <section className="about-footer">
        <p>
          Made with <FaHeart className="heart" /> for students who deserve better learning resources.
        </p>
      </section>
    </div>
  );
}

export default About;
