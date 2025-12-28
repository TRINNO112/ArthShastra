// Home Page - ArthShastra (Premium Redesign v2)
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FaBook,
  FaChartLine,
  FaGraduationCap,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaQuoteLeft,
  FaChartBar,
  FaClipboardCheck,
  FaBrain,
  FaChartPie,
  FaUniversity,
  FaCoins,
  FaBalanceScale,
  FaGlobe,
  FaFileAlt,
  FaBolt,
  FaShieldAlt,
  FaInfinity,
  FaClock,
  FaLayerGroup,
  FaCompass,
  FaMedal
} from 'react-icons/fa';
import {
  HiSparkles,
  HiAcademicCap,
  HiChartBar,
  HiLightningBolt,
  HiBookOpen,
  HiPresentationChartLine,
  HiCube,
  HiTemplate,
  HiCurrencyRupee,
  HiClipboardList,
  HiTrendingUp,
  HiUserGroup,
  HiDocumentText,
  HiCheckCircle,
  HiBadgeCheck
} from 'react-icons/hi';
import {
  BsGraphUp,
  BsBank,
  BsPieChart,
  BsBarChart,
  BsLightning,
  BsShieldCheck,
  BsInfinity,
  BsClockHistory,
  BsGrid3X3Gap,
  BsAward
} from 'react-icons/bs';
import {
  IoAnalytics,
  IoBookOutline,
  IoSchool,
  IoTrendingUp,
  IoStatsChart,
  IoDocumentTextOutline,
  IoCheckmarkDone,
  IoFlash,
  IoRibbon
} from 'react-icons/io5';
import {
  RiMoneyDollarCircleLine,
  RiGovernmentLine,
  RiLineChartLine,
  RiPieChartLine,
  RiStackLine,
  RiMedalLine,
  RiShieldCheckLine,
  RiTimeLine,
  RiGridLine,
  RiBookReadLine,
  RiPresentationLine,
  RiBarChartBoxLine,
  RiFileList3Line
} from 'react-icons/ri';
import TopicSnippets from '../components/common/TopicSnippets';
import './Home.css';

function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="home">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Hero Section - Premium Design */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge-wrapper">
              <span className="hero-badge">
                <HiSparkles className="badge-icon" />
                Class 11 & 12 Economics
                <span className="badge-new">2024-25</span>
              </span>
            </div>

            <h1 className="hero-title">
              <span className="title-line">Master Economics</span>
              <span className="title-gradient">The Smart Way</span>
            </h1>

            <p className="hero-description">
              India's most interactive learning platform for CBSE Class 11 & 12 Economics.
              Learn <span className="highlight">Micro</span> & <span className="highlight-green">Macro</span> economics
              with comprehensive lessons, visual explanations, and progress tracking.
            </p>

            <div className="hero-cta">
              <Link to="/lessons" className="btn btn-primary btn-glow">
                <FaRocket className="btn-icon" />
                <span>Start Learning Free</span>
                <div className="btn-shine"></div>
              </Link>
              <Link to="/about" className="btn btn-glass">
                <FaPlay className="btn-icon" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-item">
                <HiCheckCircle className="trust-icon" />
                <span>100% Free Forever</span>
              </div>
              <div className="trust-item">
                <HiBadgeCheck className="trust-icon" />
                <span>CBSE Aligned</span>
              </div>
              <div className="trust-item">
                <IoBookOutline className="trust-icon" />
                <span>Clear English</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - 3D Stats Cards */}
          <div className="hero-visual">
            <div className="stats-showcase">
              <div className="stat-card-3d stat-gold">
                <div className="stat-glow"></div>
                <div className="stat-icon-wrapper">
                  <RiBookReadLine />
                </div>
                <div className="stat-content">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Chapters</span>
                </div>
                <div className="stat-decoration"></div>
              </div>

              <div className="stat-card-3d stat-green">
                <div className="stat-glow"></div>
                <div className="stat-icon-wrapper">
                  <RiBarChartBoxLine />
                </div>
                <div className="stat-content">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">Questions</span>
                </div>
                <div className="stat-decoration"></div>
              </div>

              <div className="stat-card-3d stat-cyan">
                <div className="stat-glow"></div>
                <div className="stat-icon-wrapper">
                  <HiUserGroup />
                </div>
                <div className="stat-content">
                  <span className="stat-number">5K+</span>
                  <span className="stat-label">Students</span>
                </div>
                <div className="stat-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Brand Bar */}
      <section className="brand-bar">
        <div className="brand-scroll">
          <div className="brand-item"><BsGraphUp className="brand-icon" /> Microeconomics</div>
          <div className="brand-item"><RiGovernmentLine className="brand-icon" /> Macroeconomics</div>
          <div className="brand-item"><IoTrendingUp className="brand-icon" /> Demand & Supply</div>
          <div className="brand-item"><BsBank className="brand-icon" /> Money & Banking</div>
          <div className="brand-item"><FaClipboardCheck className="brand-icon" /> Practice Quizzes</div>
          <div className="brand-item"><BsGraphUp className="brand-icon" /> Microeconomics</div>
          <div className="brand-item"><RiGovernmentLine className="brand-icon" /> Macroeconomics</div>
          <div className="brand-item"><IoTrendingUp className="brand-icon" /> Demand & Supply</div>
          <div className="brand-item"><BsBank className="brand-icon" /> Money & Banking</div>
          <div className="brand-item"><FaClipboardCheck className="brand-icon" /> Practice Quizzes</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Simple Process</span>
            <h2 className="section-title">How ArthShastra Works</h2>
            <p className="section-subtitle">Three simple steps to master Economics</p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-icon">
                <FaCompass />
              </div>
              <h3>Choose Your Topic</h3>
              <p>Select from Micro or Macro economics. Each chapter is organized as per CBSE Class 11 & 12 syllabus.</p>
              <div className="step-line"></div>
            </div>

            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-icon">
                <FaBrain />
              </div>
              <h3>Learn Concepts</h3>
              <p>Read comprehensive explanations in clear English with diagrams and real-world examples.</p>
              <div className="step-line"></div>
            </div>

            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-icon">
                <FaTrophy />
              </div>
              <h3>Practice & Score</h3>
              <p>Take quizzes, track your progress, and become confident for your board exams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topic Snippets Section */}
      <TopicSnippets />

      {/* Features Section - Premium Bento Grid */}
      <section className="features">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">Everything You Need to Excel</h2>
            <p className="section-subtitle">Built specifically for Class 11 & 12 students preparing for boards</p>
          </div>

          <div className="bento-grid">
            {/* Large Card - Top Left */}
            <div className="bento-card bento-large">
              <div className="bento-glow"></div>
              <div className="bento-icon-wrapper bento-icon-gold">
                <HiBookOpen />
              </div>
              <h3>Complete CBSE Syllabus</h3>
              <p>Every single topic from Class 11 & 12 Economics covered in detail. From Consumer Equilibrium to Government Budget - we've got it all.</p>
              <div className="bento-tags">
                <span className="bento-tag">Class 11</span>
                <span className="bento-tag">Class 12</span>
                <span className="bento-tag">2024-25</span>
              </div>
              <div className="bento-pattern"></div>
            </div>

            {/* Tall Card - Right */}
            <div className="bento-card bento-tall">
              <div className="bento-glow"></div>
              <div className="bento-icon-wrapper bento-icon-green">
                <IoAnalytics />
              </div>
              <h3>Visual Learning</h3>
              <p>Complex graphs and diagrams explained step-by-step with interactive visuals that make concepts stick.</p>
              <div className="bento-visual">
                <div className="mini-chart">
                  <div className="chart-bar bar-1"></div>
                  <div className="chart-bar bar-2"></div>
                  <div className="chart-bar bar-3"></div>
                  <div className="chart-bar bar-4"></div>
                </div>
              </div>
            </div>

            {/* Small Card */}
            <div className="bento-card bento-small">
              <div className="bento-icon-wrapper bento-icon-cyan">
                <RiFileList3Line />
              </div>
              <h3>Clear Notes</h3>
              <p>Well-structured notes in simple English.</p>
            </div>

            {/* Small Card */}
            <div className="bento-card bento-small">
              <div className="bento-icon-wrapper bento-icon-purple">
                <HiClipboardList />
              </div>
              <h3>MCQ Practice</h3>
              <p>Topic-wise questions with explanations.</p>
            </div>

            {/* Medium Card */}
            <div className="bento-card bento-medium bento-highlight">
              <div className="bento-glow-strong"></div>
              <div className="bento-icon-wrapper bento-icon-gold">
                <BsLightning />
              </div>
              <h3>Smart Quizzes</h3>
              <p>Instant feedback on every answer. Know exactly where you went wrong and learn from mistakes immediately.</p>
            </div>

            {/* Wide Card - Bottom */}
            <div className="bento-card bento-wide">
              <div className="bento-content-row">
                <div className="bento-icon-wrapper bento-icon-green">
                  <BsInfinity />
                </div>
                <div className="bento-text">
                  <h3>100% Free - No Hidden Charges</h3>
                  <p>Quality education should be accessible to everyone. ArthShastra is completely free with no premium tiers or locked content. Learn everything without paying a single rupee.</p>
                </div>
                <div className="free-badge">
                  <RiShieldCheckLine />
                  <span>Forever Free</span>
                </div>
              </div>
            </div>

            {/* Small Card */}
            <div className="bento-card bento-small">
              <div className="bento-icon-wrapper bento-icon-pink">
                <BsClockHistory />
              </div>
              <h3>Track Progress</h3>
              <p>See your improvement over time.</p>
            </div>

            {/* Small Card */}
            <div className="bento-card bento-small">
              <div className="bento-icon-wrapper bento-icon-orange">
                <IoFlash />
              </div>
              <h3>Quick Revision</h3>
              <p>Summary notes for last-minute prep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section - Premium Cards */}
      <section className="subjects">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Start Learning</span>
            <h2 className="section-title">Choose Your Subject</h2>
            <p className="section-subtitle">Both subjects are essential for your board exam success</p>
          </div>

          <div className="subjects-grid">
            <Link to="/lessons?subject=micro" className="subject-card-premium micro">
              <div className="subject-bg"></div>
              <div className="subject-content">
                <div className="subject-badge">Part A</div>
                <div className="subject-icon-wrapper">
                  <BsGraphUp />
                </div>
                <h3>Microeconomics</h3>
                <p>Study of individual economic units - consumers, firms, and markets</p>

                <ul className="subject-topics">
                  <li><HiCheckCircle /> Consumer Behavior</li>
                  <li><HiCheckCircle /> Demand & Supply</li>
                  <li><HiCheckCircle /> Market Forms</li>
                  <li><HiCheckCircle /> Price Determination</li>
                </ul>

                <div className="subject-footer">
                  <span className="chapter-count">
                    <RiStackLine /> 10 Chapters
                  </span>
                  <span className="start-btn">
                    Start Learning <FaArrowRight />
                  </span>
                </div>
              </div>
              <div className="card-shine"></div>
            </Link>

            <Link to="/lessons?subject=macro" className="subject-card-premium macro">
              <div className="subject-bg"></div>
              <div className="subject-content">
                <div className="subject-badge">Part B</div>
                <div className="subject-icon-wrapper">
                  <RiGovernmentLine />
                </div>
                <h3>Macroeconomics</h3>
                <p>Study of economy as a whole - national income, money, and fiscal policy</p>

                <ul className="subject-topics">
                  <li><HiCheckCircle /> National Income</li>
                  <li><HiCheckCircle /> Money & Banking</li>
                  <li><HiCheckCircle /> Government Budget</li>
                  <li><HiCheckCircle /> Balance of Payments</li>
                </ul>

                <div className="subject-footer">
                  <span className="chapter-count">
                    <RiStackLine /> 10 Chapters
                  </span>
                  <span className="start-btn">
                    Start Learning <FaArrowRight />
                  </span>
                </div>
              </div>
              <div className="card-shine"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">Student Reviews</span>
            <h2 className="section-title">What Students Say</h2>
            <p className="section-subtitle">Join thousands of happy learners</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                "Economics seemed so difficult before, but ArthShastra's clear explanations made everything click! Scored 95 in boards."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">R</div>
                <div className="author-info">
                  <span className="author-name">Rahul Sharma</span>
                  <span className="author-school">DPS, Delhi • Class 12</span>
                </div>
                <div className="rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>

            <div className="testimonial-card featured">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                "The quizzes are amazing! They helped me identify my weak areas. Macroeconomics is no longer scary thanks to ArthShastra."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">P</div>
                <div className="author-info">
                  <span className="author-name">Priya Patel</span>
                  <span className="author-school">KV, Mumbai • Class 11</span>
                </div>
                <div className="rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                "Best free resource for Economics! The progress tracking motivated me to study daily. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">A</div>
                <div className="author-info">
                  <span className="author-name">Amit Kumar</span>
                  <span className="author-school">JNV, Bihar • Class 12</span>
                </div>
                <div className="rating">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Got questions? We've got answers</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-icon"><BsShieldCheck /></div>
              <h4>Is ArthShastra really free?</h4>
              <p>Yes! ArthShastra is 100% free. All lessons, quizzes, and features are available without any payment or hidden charges.</p>
            </div>
            <div className="faq-item">
              <div className="faq-icon"><HiAcademicCap /></div>
              <h4>Which syllabus does it cover?</h4>
              <p>We cover the complete CBSE Class 11 & 12 Economics syllabus (2024-25) including both Microeconomics and Macroeconomics.</p>
            </div>
            <div className="faq-item">
              <div className="faq-icon"><IoDocumentTextOutline /></div>
              <h4>Are explanations easy to understand?</h4>
              <p>Yes! All concepts are explained in clear, simple English with diagrams and real-world examples for better understanding.</p>
            </div>
            <div className="faq-item">
              <div className="faq-icon"><IoStatsChart /></div>
              <h4>Can I track my progress?</h4>
              <p>Absolutely! Create a free account to track completed lessons, quiz scores, and see your improvement over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-bg-elements">
            <div className="cta-circle cta-circle-1"></div>
            <div className="cta-circle cta-circle-2"></div>
          </div>

          <div className="cta-content">
            <span className="cta-badge">
              <HiLightningBolt /> Start Today
            </span>
            <h2>Ready to Master Economics?</h2>
            <p>
              {isAuthenticated
                ? `Welcome back, ${user?.name}! Continue your learning journey and ace your exams.`
                : 'Join thousands of Class 11 & 12 students who are already learning smarter with ArthShastra.'
              }
            </p>
            <div className="cta-buttons">
              <Link to="/lessons" className="btn btn-primary btn-glow btn-large">
                <FaGraduationCap />
                <span>{isAuthenticated ? 'Continue Learning' : 'Get Started - It\'s Free'}</span>
                <div className="btn-shine"></div>
              </Link>
            </div>
            <p className="cta-note">
              <BsShieldCheck className="note-icon" /> No credit card required. No sign-up needed to browse lessons.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
