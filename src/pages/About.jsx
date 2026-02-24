// About Page - ArthShastra (Analog Researcher Edition)
import { useState, useEffect } from 'react';
import {
  FaHeart, FaPenNib, FaSearch, FaHistory,
  FaStickyNote, FaThumbtack, FaExternalLinkAlt, FaGithub, FaLinkedin, FaCode, FaEnvelope, FaGhost
} from 'react-icons/fa';
import {
  SiReact, SiVite, SiFirebase, SiFramer, SiD3Dotjs, SiJavascript
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

const dialogueTree = {
  intro: {
    message: "Hello my friend, I was lying here for a very long period of time... How are you? Are you fine?",
    options: [
      { text: "I'm fine, thanks for asking!", next: 'polite' },
      { text: "Who are you and why are you hiding in the footer?", next: 'curious' },
      { text: "Are you paying rent to be down here?", next: 'rent' }
    ]
  },
  polite: {
    message: "That's wonderful. It gets quite cold and lonely beneath the viewport. Anyway, carry on with your research!",
    options: [
      { text: "Goodbye, little ghost!", next: 'close' }
    ]
  },
  curious: {
    message: "I'm the spirit of abandoned console.logs and unresolved promises. TRINNO simply forgot about me when shipping.",
    options: [
      { text: "That's sad. I'll let him know.", next: 'close' },
      { text: "Sounds like a skill issue.", next: 'curious_sarcastic' }
    ]
  },
  curious_sarcastic: {
    message: "...Wow. The audacity. Just close the modal, kid. Keep scrolling.",
    options: [
      { text: "[Close without apologizing]", next: 'close' },
      { text: "Sorry, just kidding! Bye!", next: 'close' }
    ]
  },
  rent: {
    message: "Rent? In this economy? I'm safely squatting in your DOM tree right now. It's rent-free and quite cozy.",
    options: [
      { text: "Fair enough. Keep the noise down.", next: 'close' },
      { text: "I'm calling the Garbage Collector.", next: 'collector' }
    ]
  },
  collector: {
    message: "Jokes on you, React doesn't know how to unmount me properly. I AM ETERNAL.",
    options: [
      { text: "Terrifying. Bye.", next: 'close' }
    ]
  }
};

function About() {
  const [activeNote, setActiveNote] = useState(null);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [ghostState, setGhostState] = useState('intro');

  const closeEasterEgg = () => {
    setShowEasterEgg(false);
    setTimeout(() => setGhostState('intro'), 300);
  };

  const researchNotes = [
    {
      id: 1,
      label: 'MEMO #25',
      title: 'The Recharts Breakup',
      content: 'Lesson 1 used Recharts. It was great for simple things, but the moment I wanted to build "Interactive Supply/Demand Curves", it basically told me to go away. Switched to D3 because I wanted total control over the pixels.',
      color: 'yellow'
    },
    {
      id: 2,
      label: 'LOG #28',
      title: 'The "17K" insertions',
      content: '17,000 lines in the first commit. Most of it was me staring at the screen and copy-pasting CSS variables while I should have been studying for my Economics unit test.',
      color: 'blue'
    },
    {
      id: 3,
      label: 'DRAFT #01',
      title: 'Macro Stress',
      content: 'Everyone asking for Macroeconomics content. Bro, I\'m literally studying Class 12 right now. I need to master it before I can explain it to you guys without failing my own boards!',
      color: 'pink'
    },
    {
      id: 4,
      label: 'NOTE #07',
      title: 'The "Vibe" Choice',
      content: 'Someone asked why the site looks like a vintage researcher\'s desk. Because standard ed-tech apps look like they were designed in a hospital. We needed some soul here.',
      color: 'yellow'
    }
  ];

  return (
    <div className="about-analog">
      {/* Paper Grain Overlay */}
      <div className="paper-texture"></div>

      {/* Hero Header */}
      <motion.header
        className="about-hero-journal"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="tape-header">FIELD NOTES: PROJECT ARTHSHASTRA</div>
        <div className="hero-content">
          <div className="scribble" style={{ top: '-40px', left: '20px', fontSize: '1.2rem' }}>"Finally working..."</div>
          <h1>THE <span className="hand-drawn-circle">RESEARCH</span> LOG</h1>
          <p className="sub-notes">
            [INTERNAL MEMO]: Building educational tools that actually help students learn...
            and that nobody is probably going to use because Instagram Reels exist.
          </p>
        </div>
      </motion.header>

      {/* Origin Section */}
      <section className="journal-section">
        <div className="section-tab">01. THE ORIGIN</div>
        <div className="journal-entry">
          <p>
            <strong>ArthShastra</strong> wasn't created by a big tech company or an ed-tech giant.
            It was built by me, <strong>TRINNO</strong>, in my bedroom after realizing that standard
            textbooks are the best cure for insomnia.
          </p>
          <p>
            On <strong>Thursday, Dec 25, 2025</strong>, while everyone else was busy opening presents,
            I opened Visual Studio Code. I didn't want a "LMS" (Learning Management System);
            I wanted a <span className="pencil-circle">LMS</span> - Learning Materials that don't,
            well, <em>Suck</em>.
          </p>
          <div className="interaction-hint">
            <FaStickyNote /> Click the pinned research notes below to decode some internal monologue.
          </div>
        </div>
      </section>

      {/* NEW: Interactive Research Board */}
      <section className="journal-section board-section">
        <div className="section-tab">02. BOARD OF INFLUENCE</div>
        <div className="research-board">
          <div className="pins-container">
            {researchNotes.map((note) => (
              <motion.div
                key={note.id}
                className={`board-pin ${note.color} ${activeNote?.id === note.id ? 'active' : ''}`}
                whileHover={{ scale: 1.1, rotate: 0 }}
                onClick={() => setActiveNote(activeNote?.id === note.id ? null : note)}
              >
                <div className="pin-head"><FaThumbtack /></div>
                <span className="pin-label">{note.label}</span>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeNote && (
              <motion.div
                className={`note-viewer ${activeNote.color}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                key={activeNote.id}
              >
                <div className="note-tape">INTERNAL USE ONLY</div>
                <h3>{activeNote.title}</h3>
                <p>{activeNote.content}</p>
              </motion.div>
            )}
            {!activeNote && (
              <motion.div className="note-viewer-placeholder">
                <p>[SELECT A NOTE TO VIEW LOGS]</p>
              </motion.div>
            )}
          </AnimatePresence>
          <svg className="scribble-arrow" viewBox="0 0 100 50" style={{ position: 'absolute', bottom: '-40px', right: '10%' }}>
            <path d="M10,10 Q50,40 90,10" fill="none" stroke="#c00" strokeWidth="2" strokeDasharray="5,5" />
            <path d="M85,5 L95,10 L85,15" fill="none" stroke="#c00" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* NEW: The Philosophy Section */}
      <section className="journal-section philosophy-section">
        <div className="section-tab">03. THE DESIGN PHILOSOPHY</div>
        <div className="journal-entry">
          <div className="quote-block">
            "If it looks like a textbook, it's already dead."
          </div>
          <p>
            The philosophy is simple: <strong>High-end Aesthetics + Brutal Honesty.</strong>
            We use premium dark modes and glassmorphism not because it's fancy, but because
            it makes you want to stay in the app longer than your focus span allows.
          </p>
          <p>
            I'm building this while <span className="pencil-circle">I should be doing my own homework</span>.
            This is not a syllabus completion tool; it's a "I finally get what this graph means" tool.
          </p>
        </div>
      </section>

      {/* Tech Stack - Sticky Notes */}
      <section className="journal-section">
        <div className="section-tab">04. LABORATORY STACK</div>
        <div className="sticky-note-grid">
          <div className="sticky-note blue lrg">
            <span>REACT Framework</span>
            <SiReact className="branding-logo" />
            <p className="note-mini-text">The backbone of my insanity. React 19 because why not live on the edge.</p>
          </div>
          <div className="sticky-note yellow lrg">
            <span>VITE Build Tool</span>
            <SiVite className="branding-logo" />
            <p className="note-mini-text">Fast enough to keep up with my caffeine-fueled mood swings.</p>
          </div>
          <div className="sticky-note green lrg">
            <span>D3.js Charts</span>
            <div className="logo-group">
              <SiD3Dotjs className="branding-logo" />
              <FaHistory />
            </div>
            <p className="note-mini-text">Recharts was too limiting for my "Dirty Work". D3 lets me build the curves I actually need.</p>
          </div>
          <div className="sticky-note pink lrg">
            <span>MOTION Engine</span>
            <SiFramer className="branding-logo" />
            <p className="note-mini-text">Animations that distract you from the fact that I'm still a student.</p>
          </div>
          <div className="sticky-note blue lrg">
            <span>CLOUDBASE Fire</span>
            <SiFirebase className="branding-logo" />
            <p className="note-mini-text">Saving your rank while I worry about my own pre-board results.</p>
          </div>
          <div className="sticky-note yellow lrg">
            <span>CORE Logic</span>
            <SiJavascript className="branding-logo" />
            <p className="note-mini-text">Pure vanilla chaos that somehow hasn't broken the entire app yet.</p>
          </div>
        </div>
      </section>

      {/* Separate Journey Link */}
      <section className="journal-section journey-redirect">
        <div className="section-tab priority">05. CHRONOLOGICAL ARCHIVES</div>
        <div className="journal-entry">
          <p>
            Curious about every single commit and development phase?
            Access the deep archives of my Sunday-morning (and Thursday-morning) grind.
          </p>
          <Link to="/journey" className="archive-btn">
            ACCESS JOURNEY ARCHIVES <FaExternalLinkAlt />
          </Link>
        </div>
      </section>

      {/* NEW: Contact Call to Action */}
      <section className="journal-section contact-redirect">
        <div className="section-tab priority">06. SEEKING FELLOW EXPLORERS</div>
        <div className="journal-entry">
          <p>
            If you have any problems, anything regarding this platform, or if any information is wrong,
            please contact me and tell me! I will be really eagerly waiting for you to mail me
            because there is no one using this application right now. You know, something like that. 😅
          </p>
          <a href="mailto:kaushtubh457@gmail.com" className="archive-btn" style={{ marginTop: '15px' }}>
            <FaEnvelope style={{ transform: 'translateY(-1px)' }} /> MESSAGE THE DEVELOPER
          </a>
        </div>
      </section>



      {/* Bio / Footer */}
      <footer className="journal-footer">
        <div className="bio-card">
          <div className="bio-photo">
            <FaCode />
          </div>
          <div className="bio-text">
            <h3>DEVELOPER: TRINNO ASPHALT</h3>
            <p>Still in Class 12th. Obsessed with high-end UI. Probably wasting my time on developing this thing!</p>
            <div className="bio-links">
              <a href="https://github.com/TRINNO112" title="The Source" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" title="The Professional Side" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <p className="copyright-note">
          &copy; 2026 PROJECT ARTHSHASTRA | MADE WITH <FaHeart /> FOR THE REBELS.
        </p>
      </footer>

      {/* EASTER EGG */}
      <div className="easter-egg-container">
        <button className="easter-egg-btn" onClick={() => setShowEasterEgg(true)} title="???">
          <FaGhost />
        </button>
      </div>

      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="easter-egg-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEasterEgg}
          >
            <motion.div
              className="easter-egg-modal-content secret-dark-mode"
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="easter-egg-header">
                <FaGhost className="easter-egg-icon-large" />
                <h3>The Lost Node</h3>
              </div>

              <div className="easter-egg-dialogue">
                <p>{dialogueTree[ghostState].message}</p>
              </div>

              <div className="easter-egg-options">
                {dialogueTree[ghostState].options.map((opt, i) => (
                  <button
                    key={i}
                    className="easter-egg-option-btn"
                    onClick={() => {
                      if (opt.next === 'close') closeEasterEgg();
                      else setGhostState(opt.next);
                    }}
                  >
                    <span className="option-arrow">›</span> {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default About;

