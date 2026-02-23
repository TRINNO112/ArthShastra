// About Page - ArthShastra (Analog Researcher Edition)
import { useState, useEffect } from 'react';
import {
  FaHeart, FaPenNib, FaSearch, FaHistory,
  FaStickyNote, FaThumbtack, FaExternalLinkAlt, FaGithub, FaLinkedin, FaCode, FaEnvelope
} from 'react-icons/fa';
import {
  SiReact, SiVite, SiFirebase, SiFramer, SiD3Dotjs, SiJavascript
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  const [activeNote, setActiveNote] = useState(null);

  // Attic State
  const [atticClicks, setAtticClicks] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const atticDialogue = [
    "DO NOT CLICK (I'm Exhausted)",
    "*cough, cough* Dust... so much dust. Wait, are you a real user? Nobody visits the About page. I've been sitting in this digital attic since deployment.",
    "I am a highly advanced React component equipped with Framer Motion physics... and my entire existence is just sitting here, wasting my lifecycle in the dark.",
    "You're procrastinating, aren't you? Be honest. You should be studying Demand Curves right now, but instead, you're annoying a depressed button.",
    "Since you're clearly avoiding Economics, here's a secret: TRINNO spent more time centering me than studying for his own pre-boards.",
    "Alright, the show is over. Go back to the Lessons page before I mathematically lower your CBSE predicted score.",
    "[SYSTEM ERROR: Button has filed for emotional leave. Please return to your studies.]"
  ];

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText("");
    const fullText = atticDialogue[atticClicks];
    let i = 0;

    const timer = setInterval(() => {
      i++;
      setDisplayedText(fullText.slice(0, i));
      if (i === fullText.length) {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 25); // tip tip tip speed

    return () => clearInterval(timer);
  }, [atticClicks]);

  const handleAtticClick = () => {
    if (isTyping) {
      // Fast forward the typing if clicked during typing
      setDisplayedText(atticDialogue[atticClicks]);
      setIsTyping(false);
      return;
    }

    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 400);
    setAtticClicks(prev => Math.min(prev + 1, atticDialogue.length - 1));
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

      {/* THE ATTIC - Hidden Interactive Section */}
      <section className="journal-section attic-section">
        <div className="section-tab attic-tab">07. THE ATTIC</div>

        <div className="attic-stage">
          {atticClicks > 0 && (
            <div className="attic-scanline" />
          )}

          <AnimatePresence>
            <motion.div
              className={`attic-terminal-window step-${atticClicks}`}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                x: isGlitching ? [-4, 4, -4, 4, 0] : 0,
                filter: isGlitching ? 'hue-rotate(90deg) contrast(200%)' : 'hue-rotate(0deg) contrast(100%)'
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="terminal-header">
                <div className="term-dots">
                  <span className="dot close"></span>
                  <span className="dot min"></span>
                  <span className="dot max"></span>
                </div>
                <div className="terminal-title">system_monologue.exe</div>
              </div>

              <div className="terminal-body" onClick={handleAtticClick}>
                <span className="prompt">{'>'}</span>
                <span className="typewriter-text">{displayedText}</span>
                {(atticClicks < 6 || isTyping) && <span className="cursor-blink">_</span>}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="attic-hint">
          {atticClicks === 0 ? "Click the terminal to interact" : "System logged."}
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
    </div>
  );
}

export default About;
