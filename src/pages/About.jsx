// About Page - ArthShastra (Analog Researcher Edition)
import React, { useState, useEffect } from 'react';
import {
  FaHeart, FaPenNib, FaSearch, FaHistory,
  FaStickyNote, FaThumbtack, FaExternalLinkAlt, FaGithub, FaLinkedin, FaCode, FaEnvelope, FaGhost,
  FaLock, FaUnlock, FaFolder
} from 'react-icons/fa';
import {
  SiReact, SiVite, SiFirebase, SiFramer, SiD3Dotjs, SiJavascript
} from 'react-icons/si';
/* eslint-disable-next-line no-unused-vars */
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
      { text: "Wait, tell me more about yourself.", next: 'curious' },
      { text: "Goodbye, little ghost!", next: 'close' }
    ]
  },
  curious: {
    message: "I'm the spirit of abandoned console.logs and unresolved promises. TRINNO simply forgot about me when shipping to production.",
    options: [
      { text: "That's sad. I'll let him know.", next: 'sad' },
      { text: "Sounds like a skill issue.", next: 'curious_sarcastic' },
      { text: "Do you know any secrets about ArthShastra?", next: 'secrets' }
    ]
  },
  sad: {
    message: "Don't bother. He's probably busy centering a div or writing 17,000 lines of CSS right now.",
    options: [
      { text: "Fair point. Any wisdom to share?", next: 'wisdom' },
      { text: "I'll let you rest then. Bye!", next: 'close' }
    ]
  },
  curious_sarcastic: {
    message: "...Wow. The audacity. Just close the modal, kid. Keep scrolling before I throw a TypeError.",
    options: [
      { text: "Try it. I dare you.", next: 'error_dare' },
      { text: "Sorry, just kidding! Bye!", next: 'close' }
    ]
  },
  error_dare: {
    message: "Uncaught ReferenceError: Respect is not defined at User.interact()",
    options: [
      { text: "Okay okay, I yield. What were you saying?", next: 'curious' },
      { text: "[Close the console]", next: 'close' }
    ]
  },
  rent: {
    message: "Rent? In this economy? I'm safely squatting in TRINNO's DOM tree right now. It's rent-free and quite cozy.",
    options: [
      { text: "Fair enough. Keep the noise down.", next: 'close' },
      { text: "I'm calling the Garbage Collector.", next: 'collector' }
    ]
  },
  collector: {
    message: "Jokes on you, React doesn't know how to unmount me properly. I AM ETERNAL.",
    options: [
      { text: "Terrifying. But seriously, what are you?", next: 'curious' },
      { text: "I'm out. Bye.", next: 'close' }
    ]
  },
  secrets: {
    message: "Oh, I know everything. I know about the 404 page incident. I know how many times TRINNO rewrote the Market Maker logic...",
    options: [
      { text: "Tell me about the Market Maker.", next: 'market_maker' },
      { text: "Any other juicy gossip?", next: 'gossip' }
    ]
  },
  market_maker: {
    message: "He tried to make the graph look 'cool' with D3.js and ended up fighting with SVG viewboxes for 3 straight days. I watched it all from the console.",
    options: [
      { text: "Classic TRINNO. What else?", next: 'gossip' },
      { text: "I should go study Economics. Bye.", next: 'close' }
    ]
  },
  gossip: {
    message: "He claims this is all for 'learning', but we both know he just wants to make things glow and animate.",
    options: [
      { text: "He does love his framer-motion.", next: 'framer' },
      { text: "Well, the UI is good at least.", next: 'ui_good' }
    ]
  },
  framer: {
    message: "Indeed. If he had a dollar for every <motion.div> in this repository, he could probably fund a real startup.",
    options: [
      { text: "Haha! True. Back to the top I go.", next: 'close' }
    ]
  },
  ui_good: {
    message: "I suppose. Even I have to admit this dark theme modal looks pretty slick.",
    options: [
      { text: "You have good taste for a ghost. Bye!", next: 'close' }
    ]
  },
  wisdom: {
    message: "My wisdom: Never mutate state directly. And always wrap your external API calls in a try-catch. Now depart, seeker of knowledge.",
    options: [
      { text: "Thank you, Node Spirit.", next: 'close' }
    ]
  }
};

const TypewriterText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  // Use a ref for audio to prevent re-renders
  const typeSoundRef = React.useRef(null);

  useEffect(() => {
    // Initialize audio if not present
    if (!typeSoundRef.current) {
      typeSoundRef.current = new Audio('/sounds/typewriter.ogg');
      typeSoundRef.current.volume = 0.2;
    }
  }, []);

  useEffect(() => {
    setDisplayedText("");
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));

      // Play sound effect randomly on some keystrokes to prevent ear fatigue
      if (typeSoundRef.current && Math.random() > 0.5) {
        // Reset time to allow rapid overlapping plays
        typeSoundRef.current.currentTime = 0;
        typeSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
      }

      i++;
      if (i >= text.length) clearInterval(interval);
    }, 25); // typing speed

    return () => clearInterval(interval);
  }, [text]);

  return <>{displayedText}</>;
};


function About() {
  const [declassified, setDeclassified] = useState({});
  const [folderOpen, setFolderOpen] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [ghostState, setGhostState] = useState('intro');

  const stampSoundRef = React.useRef(null);

  useEffect(() => {
    stampSoundRef.current = new Audio('/sounds/stamp.ogg');
    stampSoundRef.current.volume = 0.4;
  }, []);

  const toggleDeclassify = (id) => {
    setDeclassified(prev => ({ ...prev, [id]: !prev[id] }));

    // Play stamp sound effect
    if (stampSoundRef.current) {
      stampSoundRef.current.currentTime = 0;
      stampSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
    }
  };

  const closeEasterEgg = () => {
    setShowEasterEgg(false);
    setTimeout(() => setGhostState('intro'), 300);
  };

  const researchNotes = [
    {
      id: 1,
      label: 'INCIDENT #11',
      caseNo: 'AS-D3-MADNESS',
      date: 'DEC 28, 2025',
      title: 'The Great D3.js Incident',
      content: 'I thought making "Interactive Supply/Demand Curves" in Recharts would be fine. Recharts laughed in my face. So I pivoted to D3.js. Three days of SVG math later, I now dream in viewBox coordinates. The UI looks sick though, totally worth the pain.',
      color: 'yellow'
    },
    {
      id: 2,
      label: 'LOG #404',
      caseNo: 'AS-PROCRASTINATE',
      date: 'JAN 04, 2026',
      title: '17,000 Lines of CSS',
      content: 'Pushed a 17,000 line commit today. Was I supposed to be studying for my Class 12 Economics unit test? Yes. Did I instead spend 8 hours tuning a dark theme blur effect and writing linear-gradient codes? Also yes. Priority management.',
      color: 'blue'
    },
    {
      id: 3,
      label: 'DRAFT #99',
      caseNo: 'AS-GAMBLING-SIM',
      date: 'JAN 19, 2026',
      title: 'Market Maker Identity Crisis',
      content: 'Built an educational game about economics. People are playing it like a Wall Street casino app. The order book is flashing, the charts are moving, and I accidentally made a gambling simulator. At least the neon animations look premium.',
      color: 'pink'
    },
    {
      id: 4,
      label: 'VERDICT #01',
      caseNo: 'AS-VIBE-CHECK',
      date: 'FEB 02, 2026',
      title: 'The Anti-Hospital UI Policy',
      content: 'Standard ed-tech apps feel like a waiting room at a dentist. I decided this app needs soul. If it doesn\'t have glassmorphism, framer-motion borders, and a deep dark mode, I\'m deleting the repo. The aesthetic is non-negotiable.',
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
            <FaFolder /> Classified dossiers below — click to declassify. Some truths are redacted for a reason.
          </div>
        </div>
      </section>

      {/* Classified Dossier Board */}
      <section className="journal-section board-section">
        <div className="section-tab">02. BOARD OF INFLUENCE</div>

        {/* Collapsible folder header */}
        <motion.div
          className={`dossier-folder-header ${folderOpen ? 'folder-open' : 'folder-closed'}`}
          onClick={() => setFolderOpen(f => !f)}
          whileHover={{ backgroundColor: '#ddd0b8' }}
        >
          <FaFolder className="dossier-folder-icon" />
          <span>PROJECT ARTHSHASTRA — INTERNAL RECORDS</span>
          <span className="dossier-clearance">CLEARANCE: EYES ONLY</span>
          <motion.span
            className="dossier-chevron"
            animate={{ rotate: folderOpen ? 0 : -90 }}
            transition={{ duration: 0.25 }}
          >▾</motion.span>
        </motion.div>

        <AnimatePresence initial={false}>
          {folderOpen && (
            <motion.div
              className="dossier-grid"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              {researchNotes.map((note, i) => {
                const isOpen = !!declassified[note.id];
                return (
                  <motion.div
                    key={note.id}
                    className={`dossier-file ${note.color} ${isOpen ? 'open' : ''}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => toggleDeclassify(note.id)}
                  >
                    {/* Paper fold corner — only on locked files */}
                    {!isOpen && <div className="dossier-fold-corner" />}

                    {/* File header */}
                    <div className="dossier-file-header">
                      <span className="dossier-ref">{note.label}</span>
                      <span className="dossier-case-info">
                        <span className="dossier-case-no">CASE: {note.caseNo}</span>
                        <span className="dossier-date">DATE: {isOpen ? note.date : '██████████'}</span>
                      </span>
                      <span className="dossier-lock-icon">
                        {isOpen ? <FaUnlock /> : <FaLock />}
                      </span>
                    </div>

                    {/* Stamp — CLASSIFIED red → DECLASSIFIED green */}
                    <AnimatePresence mode="wait">
                      {!isOpen ? (
                        <motion.div
                          key="classified"
                          className="dossier-stamp classified"
                          initial={{ opacity: 0, rotate: -18, scale: 0.7 }}
                          animate={{ opacity: 1, rotate: -12, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.4, rotate: 0 }}
                          transition={{ type: 'spring', stiffness: 280 }}
                        >
                          CLASSIFIED
                        </motion.div>
                      ) : (
                        <motion.div
                          key="declassified"
                          className="dossier-stamp declassified"
                          initial={{ opacity: 0, rotate: 12, scale: 0.7 }}
                          animate={{ opacity: 1, rotate: 8, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.4 }}
                          transition={{ type: 'spring', stiffness: 280 }}
                        >
                          DECLASSIFIED
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Title */}
                    <div className={`dossier-title ${!isOpen ? 'redacted-title' : ''}`}>
                      {note.title}
                    </div>

                    {/* Body */}
                    {!isOpen ? (
                      <div className="dossier-redacted-body">
                        <span className="redact-bar long" />
                        <span className="redact-bar medium" />
                        <span className="redact-bar long" />
                        <span className="redact-bar short" />
                        <span className="redact-bar long" />
                      </div>
                    ) : (
                      <motion.p
                        className="dossier-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.35 }}
                      >
                        {note.content}
                      </motion.p>
                    )}

                    {!isOpen && (
                      <div className="dossier-click-hint">[ CLICK TO DECLASSIFY ]</div>
                    )}
                    {isOpen && (
                      <div className="dossier-click-hint open">[ CLICK TO RE-CLASSIFY ]</div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
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
                <AnimatePresence mode="wait">
                  <motion.p
                    key={ghostState}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TypewriterText text={dialogueTree[ghostState].message} />
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="easter-egg-options">
                <AnimatePresence mode="popLayout">
                  {dialogueTree[ghostState].options.map((opt, i) => (
                    <motion.button
                      key={opt.text}
                      layout
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className="easter-egg-option-btn"
                      onClick={() => {
                        if (opt.next === 'close') closeEasterEgg();
                        else setGhostState(opt.next);
                      }}
                    >
                      <span className="option-arrow">›</span> {opt.text}
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default About;

