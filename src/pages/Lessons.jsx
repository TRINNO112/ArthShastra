// Lessons Page - ArthShastra (Premium Redesign)
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  FaBook,
  FaChartLine,
  FaCheck,
  FaArrowRight,
  FaClock,
  FaQuestionCircle,
  FaGraduationCap,
  FaLayerGroup,
  FaFire,
  FaTrophy,
  FaPlay,
  FaStar,
  FaBookOpen
} from 'react-icons/fa';
import {
  HiSparkles,
  HiAcademicCap,
  HiBookOpen,
  HiChartBar,
  HiLightningBolt,
  HiCheckCircle,
  HiClock,
  HiDocumentText
} from 'react-icons/hi';
import {
  BsGraphUp,
  BsBarChartFill,
  BsLightning,
  BsPlayCircleFill,
  BsCheckCircleFill,
  BsCircle
} from 'react-icons/bs';
import {
  RiGovernmentLine,
  RiBookReadLine,
  RiStackLine
} from 'react-icons/ri';
import { IoStatsChart, IoTrendingUp } from 'react-icons/io5';
import { getUnifiedStats } from '../services/firebase';
import './Lessons.css';

// Lesson data - Class 11 & 12 Economics (TR Jain & VK Ohri CBSE 2024-25)
const lessonsData = {
  // ============== CLASS 11 ==============
  statistics: {
    name: 'Statistics for Economics',
    shortName: 'Statistics',
    grade: '11',
    icon: '📊',
    color: 'cyan',
    description: 'Learn to collect, organize and analyze economic data',
    chapters: [
      { id: 'stats-1', title: 'Introduction to Statistics', description: 'Meaning, scope, functions and importance of statistics in Economics', duration: '25 min', questions: 12, completed: false, difficulty: 'Easy' },
      { id: 'stats-2', title: 'Collection of Data', description: 'Sources of data - primary and secondary; methods of data collection', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'stats-3', title: 'Organisation of Data', description: 'Meaning and types of variables; Frequency distribution', duration: '25 min', questions: 12, completed: false, difficulty: 'Medium' },
      { id: 'stats-4', title: 'Presentation of Data - Tables', description: 'Textual and tabular presentation of data', duration: '20 min', questions: 10, completed: false, difficulty: 'Easy' },
      { id: 'stats-5', title: 'Diagrammatic Presentation', description: 'Bar diagrams and pie diagrams', duration: '25 min', questions: 12, completed: false, difficulty: 'Medium' },
      { id: 'stats-6', title: 'Frequency Diagrams', description: 'Histogram, frequency polygon and ogive', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'stats-7', title: 'Arithmetic Line Graphs', description: 'Time series graphs and their interpretation', duration: '20 min', questions: 10, completed: false, difficulty: 'Easy' },
      { id: 'stats-8', title: 'Measures of Central Tendency - Mean', description: 'Arithmetic mean - simple and weighted; combined mean', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'stats-9', title: 'Measures of Central Tendency - Median & Mode', description: 'Median, quartiles and mode calculation', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'stats-10', title: 'Measures of Dispersion', description: 'Range, quartile deviation, mean deviation, standard deviation', duration: '40 min', questions: 20, completed: false, difficulty: 'Hard' },
      { id: 'stats-11', title: 'Correlation', description: 'Meaning, types and methods of measuring correlation', duration: '35 min', questions: 15, completed: false, difficulty: 'Hard' },
      { id: 'stats-12', title: 'Index Numbers', description: 'Meaning, types, methods of construction; uses and limitations', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'stats-13', title: 'Use of Statistical Tools', description: 'Application in understanding economic issues and problems', duration: '25 min', questions: 12, completed: false, difficulty: 'Easy' },
    ]
  },
  micro11: {
    name: 'Introductory Microeconomics',
    shortName: 'Microeconomics',
    grade: '11',
    icon: '📈',
    color: 'gold',
    description: 'Study individual economic units - consumers, firms & markets',
    chapters: [
      { id: 'micro11-1', title: 'Economics and Economy', description: 'Meaning of economy, central problems, PPC, opportunity cost', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'micro11-2', title: 'Central Problems of an Economy', description: 'What, How & For Whom to produce; PPC Curve and Opportunity Cost', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'micro11-3', title: 'Consumer’s Equilibrium — Utility Analysis', description: 'Indifference curve, budget line, consumer equilibrium using IC', duration: '40 min', questions: 20, completed: false, difficulty: 'Hard' },
      { id: 'micro11-4', title: 'Consumer’s Equilibrium — Indifference Curve Analysis', description: 'Demand, law of demand, demand curve, determinants of demand', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'micro11-5', title: 'Theory of Demand', description: 'Meaning, types, measurement methods, factors affecting elasticity', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'micro11-6', title: 'Price Elasticity of Demand', description: 'Short run & long run; TP, AP, MP; Law of variable proportions', duration: '35 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'micro11-7', title: 'Production Function and Returns to a Factor', description: 'Short run costs - TFC, TVC, TC, AFC, AVC, AC, MC; relationship', duration: '40 min', questions: 20, completed: false, difficulty: 'Hard' },
      { id: 'micro11-8', title: 'Concepts of Cost', description: 'TR, AR, MR; relationship between AR and MR curves', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'micro11-9', title: 'Concept of Revenue', description: 'MC-MR approach; profit maximization; break-even point', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'micro11-10', title: 'Producer’s Equilibrium', description: 'Law of supply, supply curve, determinants, elasticity of supply', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'micro11-11', title: 'Theory of Supply', description: 'Perfect competition, monopoly, monopolistic competition, oligopoly', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'micro11-12', title: 'Forms of Market', description: 'Equilibrium price, effects of shifts in demand and supply', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'micro11-13', title: 'Market Equilibrium Under Perfect Competition and Effects of Shifts in Demand and Supply', description: 'Price ceiling, price floor, and their effects on market', duration: '25 min', questions: 12, completed: false, difficulty: 'Easy' },
    ]
  },
  // ============== CLASS 12 ==============
  macro: {
    name: 'Introductory Macroeconomics',
    shortName: 'Macroeconomics',
    grade: '12',
    icon: '🏛️',
    color: 'green',
    description: 'Study the economy as a whole - national income, money & policy',
    chapters: [
      { id: 'macro-1', title: 'Introduction to Macroeconomics', description: 'Meaning, scope, importance; Micro vs Macro economics', duration: '20 min', questions: 10, completed: false, difficulty: 'Easy' },
      { id: 'macro-2', title: 'Circular Flow of Income', description: 'Two sector, three sector and four sector models', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'macro-3', title: 'National Income - Basic Concepts', description: 'GDP, GNP, NDP, NNP at market price and factor cost', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'macro-4', title: 'Methods of Calculating National Income', description: 'Value added, income and expenditure methods with numericals', duration: '45 min', questions: 25, completed: false, difficulty: 'Hard' },
      { id: 'macro-5', title: 'Money - Meaning & Functions', description: 'Evolution of money, functions, money supply measures (M1-M4)', duration: '25 min', questions: 12, completed: false, difficulty: 'Easy' },
      { id: 'macro-6', title: 'Commercial Banks', description: 'Functions, balance sheet, credit creation process', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'macro-7', title: 'Central Bank (RBI)', description: 'Functions of RBI, monetary policy and its instruments', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'macro-8', title: 'Aggregate Demand & Supply', description: 'Components of AD, AS; determination of equilibrium income', duration: '40 min', questions: 20, completed: false, difficulty: 'Hard' },
      { id: 'macro-9', title: 'Investment Multiplier', description: 'Concept, working, formula; relationship with MPC and MPS', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'macro-10', title: 'Excess & Deficient Demand', description: 'Meaning, causes, measures to correct; inflationary & deflationary gap', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'macro-11', title: 'Government Budget', description: 'Components, types of budget, revenue & capital items', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'macro-12', title: 'Budget Deficits', description: 'Revenue deficit, fiscal deficit, primary deficit; implications', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'macro-13', title: 'Balance of Payments', description: 'Current account, capital account; BOP surplus and deficit', duration: '35 min', questions: 18, completed: false, difficulty: 'Hard' },
      { id: 'macro-14', title: 'Foreign Exchange Rate', description: 'Meaning, types, determination; foreign exchange market', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
    ]
  },
  indian: {
    name: 'Indian Economic Development',
    shortName: 'Indian Economy',
    grade: '12',
    icon: '🇮🇳',
    color: 'orange',
    description: 'Explore India\'s economic journey and current challenges',
    chapters: [
      { id: 'indian-1', title: 'Indian Economy on Eve of Independence', description: 'State of agriculture, industry, foreign trade under British rule', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'indian-2', title: 'Indian Economy 1950-1990', description: 'Goals of five year plans; agriculture, industry, trade policies', duration: '40 min', questions: 20, completed: false, difficulty: 'Medium' },
      { id: 'indian-3', title: 'Economic Reforms Since 1991', description: 'LPG reforms; liberalisation, privatisation, globalisation', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'indian-4', title: 'Poverty', description: 'Meaning, types, causes, measurement; poverty alleviation programmes', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'indian-5', title: 'Human Capital Formation', description: 'Meaning, sources, importance; role of education and health', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'indian-6', title: 'Rural Development', description: 'Credit, marketing, diversification; role of cooperatives', duration: '30 min', questions: 15, completed: false, difficulty: 'Medium' },
      { id: 'indian-7', title: 'Employment', description: 'Types of unemployment; employment generation programmes', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'indian-8', title: 'Infrastructure', description: 'Energy, health infrastructure; problems and policies', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
      { id: 'indian-9', title: 'Environment & Sustainable Development', description: 'Environmental degradation; sustainable development strategies', duration: '30 min', questions: 15, completed: false, difficulty: 'Easy' },
      { id: 'indian-10', title: 'Comparative Development - India & Neighbours', description: 'Comparison with China and Pakistan; development indicators', duration: '35 min', questions: 18, completed: false, difficulty: 'Medium' },
    ]
  }
};

function Lessons() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [userStats, setUserStats] = useState(null);

  // Load stats from Firebase
  useEffect(() => {
    const fetchStats = async () => {
      const result = await getUnifiedStats();
      if (result.success) {
        setUserStats(result.stats);
      }
    };
    fetchStats();
  }, []);

  // Load from localStorage or URL params with memory persistence
  const getInitialGrade = () => {
    const urlGrade = searchParams.get('grade');
    if (urlGrade) return urlGrade;
    const savedGrade = localStorage.getItem('arthshastra-selected-grade');
    return savedGrade || '11';
  };

  const getInitialSubject = () => {
    const urlSubject = searchParams.get('subject');
    if (urlSubject) return urlSubject;
    const savedSubject = localStorage.getItem('arthshastra-selected-subject');
    return savedSubject || 'statistics';
  };

  const [activeGrade, setActiveGrade] = useState(getInitialGrade());
  const [activeSubject, setActiveSubject] = useState(getInitialSubject());

  // Save to localStorage whenever grade or subject changes
  useEffect(() => {
    localStorage.setItem('arthshastra-selected-grade', activeGrade);
    localStorage.setItem('arthshastra-selected-subject', activeSubject);
    // Update URL params
    setSearchParams({ grade: activeGrade, subject: activeSubject });
  }, [activeGrade, activeSubject, setSearchParams]);

  // Get subjects based on active grade
  const getSubjectsForGrade = (grade) => {
    return Object.entries(lessonsData)
      .filter(([, value]) => value.grade === grade)
      .map(([key, value]) => ({ key, ...value }));
  };

  const grade11Subjects = getSubjectsForGrade('11');
  const grade12Subjects = getSubjectsForGrade('12');

  const currentSubjects = activeGrade === '11' ? grade11Subjects : grade12Subjects;
  const currentSubject = lessonsData[activeSubject];

  // Handle grade change
  const handleGradeChange = (grade) => {
    setActiveGrade(grade);
    const subjects = getSubjectsForGrade(grade);
    if (subjects.length > 0) {
      setActiveSubject(subjects[0].key);
    }
  };

  // Calculate stats
  const totalQuestions = currentSubject?.chapters.reduce((acc, ch) => acc + ch.questions, 0) || 0;
  const totalDuration = currentSubject?.chapters.reduce((acc, ch) => parseInt(ch.duration) + acc, 0) || 0;

  // Real stats from Firebase
  const completedFromFirebase = userStats?.lessons?.completedIds || [];
  const quizCompletedFromFirebase = userStats?.quizzes?.completedIds || [];

  const completedChapters = currentSubject?.chapters.filter(ch =>
    completedFromFirebase.includes(ch.id) || quizCompletedFromFirebase.includes(ch.id)
  ).length || 0;

  const progressPercent = currentSubject ? Math.round((completedChapters / currentSubject.chapters.length) * 100) : 0;

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'difficulty-easy';
      case 'Medium': return 'difficulty-medium';
      case 'Hard': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="lessons-page">
      {/* Floating Background Elements */}
      <div className="lessons-bg-elements">
        <div className="lessons-float-circle circle-1"></div>
        <div className="lessons-float-circle circle-2"></div>
        <div className="lessons-grid-pattern"></div>
      </div>

      {/* Page Header */}
      <div className="lessons-header">
        <div className="header-badge">
          <HiSparkles /> CBSE 2024-25 Syllabus
        </div>
        <h1>
          <span className="title-icon"><HiBookOpen /></span>
          <span className="title-text">Explore Lessons</span>
        </h1>
        <p>Master Economics with comprehensive lessons designed for Class 11 & 12 students</p>
      </div>

      {/* Grade Selection Cards */}
      <div className="grade-selector">
        <div
          className={`grade-card ${activeGrade === '11' ? 'active' : ''}`}
          onClick={() => handleGradeChange('11')}
        >
          <div className="grade-card-glow"></div>
          <div className="grade-card-content">
            <span className="grade-number">11</span>
            <div className="grade-info">
              <h3>Class 11</h3>
              <p>Statistics & Microeconomics</p>
            </div>
            <div className="grade-chapters">
              <RiStackLine /> 26 Chapters
            </div>
          </div>
          {activeGrade === '11' && <div className="grade-active-indicator"><BsCheckCircleFill /></div>}
        </div>

        <div
          className={`grade-card ${activeGrade === '12' ? 'active' : ''}`}
          onClick={() => handleGradeChange('12')}
        >
          <div className="grade-card-glow"></div>
          <div className="grade-card-content">
            <span className="grade-number">12</span>
            <div className="grade-info">
              <h3>Class 12</h3>
              <p>Macro & Indian Economy</p>
            </div>
            <div className="grade-chapters">
              <RiStackLine /> 24 Chapters
            </div>
          </div>
          {activeGrade === '12' && <div className="grade-active-indicator"><BsCheckCircleFill /></div>}
        </div>
      </div>

      {/* Subject Cards */}
      <div className="subject-cards">
        {currentSubjects.map((subject) => (
          <div
            key={subject.key}
            className={`subject-card ${subject.color} ${activeSubject === subject.key ? 'active' : ''}`}
            onClick={() => setActiveSubject(subject.key)}
          >
            <div className="subject-card-bg"></div>
            <div className="subject-card-content">
              <span className="subject-emoji">{subject.icon}</span>
              <h3>{subject.shortName}</h3>
              <p>{subject.chapters.length} Chapters</p>
            </div>
            {activeSubject === subject.key && (
              <div className="subject-active-badge">
                <HiCheckCircle /> Selected
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Current Subject Header */}
      {currentSubject && (
        <>
          <div className={`subject-hero ${currentSubject.color}`}>
            <div className="subject-hero-bg"></div>
            <div className="subject-hero-content">
              <div className="subject-hero-left">
                <span className="subject-hero-icon">{currentSubject.icon}</span>
                <div className="subject-hero-text">
                  <h2>{currentSubject.name}</h2>
                  <p>{currentSubject.description}</p>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="subject-stats">
                <div className="stat-mini">
                  <HiDocumentText className="stat-mini-icon" />
                  <div>
                    <span className="stat-mini-value">{currentSubject.chapters.length}</span>
                    <span className="stat-mini-label">Chapters</span>
                  </div>
                </div>
                <div className="stat-mini">
                  <HiClock className="stat-mini-icon" />
                  <div>
                    <span className="stat-mini-value">{totalDuration}</span>
                    <span className="stat-mini-label">Minutes</span>
                  </div>
                </div>
                <div className="stat-mini">
                  <HiChartBar className="stat-mini-icon" />
                  <div>
                    <span className="stat-mini-value">{totalQuestions}+</span>
                    <span className="stat-mini-label">Questions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="subject-progress">
              <div className="progress-header">
                <span>Your Progress</span>
                <span className="progress-percent">{progressPercent}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span className="progress-text">
                {completedChapters} of {currentSubject.chapters.length} chapters completed
              </span>
            </div>
          </div>

          {/* Chapters List */}
          <div className="chapters-section">
            <div className="chapters-header">
              <h3><RiBookReadLine /> All Chapters</h3>
              <div className="chapters-legend">
                <span className="legend-item"><span className="dot easy"></span> Easy</span>
                <span className="legend-item"><span className="dot medium"></span> Medium</span>
                <span className="legend-item"><span className="dot hard"></span> Hard</span>
              </div>
            </div>

            <div className="chapters-grid">
              {currentSubject.chapters.map((chapter, index) => {
                const isCompleted = completedFromFirebase.includes(chapter.id) || quizCompletedFromFirebase.includes(chapter.id);
                return (
                  <Link
                    to={`/lesson/${chapter.id}`}
                    key={chapter.id}
                    className={`chapter-card ${currentSubject.color} ${isCompleted ? 'completed' : ''}`}
                  >
                    <div className="chapter-card-inner">
                      {/* Chapter Number */}
                      <div className="chapter-number-wrapper">
                        <div className={`chapter-number ${isCompleted ? 'done' : ''}`}>
                          {isCompleted ? <FaCheck /> : index + 1}
                        </div>
                        {isCompleted && <span className="completed-badge">Done</span>}
                      </div>

                      {/* Chapter Content */}
                      <div className="chapter-content">
                        <div className="chapter-title-row">
                          <h4>{chapter.title}</h4>
                          <span className={`difficulty-badge ${getDifficultyColor(chapter.difficulty)}`}>
                            {chapter.difficulty}
                          </span>
                        </div>
                        <p className="chapter-description">{chapter.description}</p>

                        <div className="chapter-meta">
                          <span className="meta-item">
                            <FaClock /> {chapter.duration}
                          </span>
                          <span className="meta-item">
                            <FaQuestionCircle /> {chapter.questions} MCQs
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="chapter-action">
                        <div className="action-btn">
                          {isCompleted ? (
                            <>Review <FaArrowRight /></>
                          ) : (
                            <>Start <BsPlayCircleFill /></>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="chapter-card-glow"></div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}

      {/* Quick Tips Section */}
      <div className="tips-section">
        <div className="tips-card">
          <div className="tips-icon"><HiLightningBolt /></div>
          <div className="tips-content">
            <h4>Pro Tip</h4>
            <p>Complete chapters in order for best understanding. Each chapter builds on concepts from previous ones!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lessons;
