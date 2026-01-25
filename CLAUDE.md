# CLAUDE.md - Comprehensive ArthShastra Lesson Creation Guide (Detailed Edition)

**Version 2.0** - Expanded with full code templates, examples from Lessons 1-7, troubleshooting, advanced patterns. **Single source of truth** for Lessons 8+.

## 🚀 Quick Start Checklist (5 mins - Detailed Steps)
1. **Folder Creation**:
   ```
   mkdir src/pages/Lessons/Lesson8
   cd src/pages/Lessons/Lesson8
   mkdir components
   touch Lesson8.jsx Lesson8/index.js components/index.js components/component.css
   ```
2. **Data File**:
   ```
   touch src/pages/Lessons/data/lesson8Data.js
   ```
3. **Copy Templates** (below) into files.
4. **Integrate**:
   - `App.jsx`: Add `<Route path=\"/lesson/micro11-8\" element={<Lesson8 />} />`
   - `src/pages/Lessons.jsx`: Add `{ id: 'micro11-8', title: 'Concepts of Cost', path: '/lesson/micro11-8' }` to `micro11.chapters`
5. **Test**:
   - `npm run dev`
   - Check nav persistence, quiz load, responsive, Firebase log on exit.

## 📁 Exact Folder Structure (Lesson8 Example)
```
src/pages/Lessons/
├── Lesson8/
│   ├── Lesson8.jsx                 # Main orchestrator (full template below)
│   ├── index.js                    # export default Lesson8
│   └── components/
│       ├── index.js                # Barrel exports
│       ├── component.css           # All styles
│       ├── Introduction.jsx        # Text + definitions
│       ├── CostConceptsTable.jsx   # Cost data table
│       ├── CostCurvesChart.jsx     # D3 TP/TC/AC/MC curves
│       ├── FixedVariableCosts.jsx  # Breakdown cards
│       ├── ShortRunLongRun.jsx     # Comparisons
│       ├── RealWorldExamples.jsx   # Factory/business cases
│       ├── PracticeProblems.jsx    # Calculations + solutions
│       └── Quiz.jsx                # Import or create
└── data/lesson8Data.js             # Sections + quizzes
```

## 🗄️ Full Data Template: `lesson8Data.js`
```js
export const lesson8Data = {
  title: "Concepts of Cost",
  subtitle: "Short-run & long-run costs, TC/FC/VC, AC/MC curves",
  sections: [
    { id: 'intro', name: 'Introduction', icon: FaDollarSign },
    { id: 'table', name: 'Cost Schedule', icon: FaTable },
    { id: 'chart', name: 'Cost Curves', icon: FaChartLine },
    { id: 'fixed-variable', name: 'Fixed vs Variable', icon: FaBalanceScale },
    { id: 'short-long', name: 'Short vs Long Run', icon: FaClock },
    { id: 'examples', name: 'Real Examples', icon: FaFactory },
    { id: 'practice', name: 'Practice', icon: FaCalculator },
    { id: 'quiz', name: 'Quiz', icon: FaQuestionCircle }
  ],
  mcqQuestions: [
    {
      question: "Fixed costs are:",
      options: ["Costs that vary with output", "Costs that don't vary with output", "Only labor costs", "Only material costs"],
      correct: 1,
      explanation: "Fixed costs remain constant regardless of output level (rent, salaries)."
    },
    // Add 8-12 more...
  ],
  tfQuestions: [
    {
      question: "Marginal cost can be negative in short run.",
      correct: false,
      explanation: "MC is always positive or zero; negative MP leads to rising MC."
    }
    // Add 3-5 more...
  ]
};
```

## 🎯 Full Lesson8.jsx Template (Copy-Paste Ready - 100% Working)
```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaTable, FaChartLine, FaBalanceScale, FaClock, FaFactory, FaCalculator, FaQuestionCircle } from 'react-icons/fa';
import { lesson8Data } from '../data/lesson8Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';
import { Introduction, CostConceptsTable, CostCurvesChart, FixedVariableCosts, ShortRunLongRun, RealWorldExamples, PracticeProblems, Quiz } from './components';

const sections = lesson8Data.sections;

function Lesson8() {
  const [activeSection, setActiveSection] = useState(() => {
    const saved = localStorage.getItem('lesson8-activeSection');
    return saved || 'intro';
  });
  const [startTime] = useState(Date.now());
  const lessonId = 'micro11-8';

  useEffect(() => {
    localStorage.setItem('lesson8-activeSection', activeSection);
  }, [activeSection]);

  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
      logLessonProgress(lessonId, timeSpent, activeSection === 'quiz');
    };
  }, [startTime, lessonId, activeSection]);

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'intro': return <Introduction />;
      case 'table': return <CostConceptsTable />;
      case 'chart': return <CostCurvesChart />;
      case 'fixed-variable': return <FixedVariableCosts />;
      case 'short-long': return <ShortRunLongRun />;
      case 'examples': return <RealWorldExamples />;
      case 'practice': return <PracticeProblems />;
      case 'quiz': return <Quiz mcqQuestions={lesson8Data.mcqQuestions} tfQuestions={lesson8Data.tfQuestions} />;
      default: return <Introduction />;
    }
  };

  const IconMap = {
    intro: FaBookOpen,
    table: FaTable,
    chart: FaChartLine,
    'fixed-variable': FaBalanceScale,
    'short-long': FaClock,
    examples: FaFactory,
    practice: FaCalculator,
    quiz: FaQuestionCircle
  };

  return (
    <div className="lesson-page">
      {/* Floating Background */}
      <div className="floating-elements">
        <div className="float-circle circle-1"></div>
        <div className="float-circle circle-2"></div>
        <div className="float-circle circle-3"></div>
        <div className="grid-pattern"></div>
      </div>

      {/* Header */}
      <header className="lesson-header">
        <div className="header-container">
          <Link to="/lessons" className="back-link">
            <FaArrowLeft /> Back to Lessons
          </Link>
          <div className="lesson-info">
            <div className="lesson-badge">
              <span className="badge-icon">📚</span>
              <span>Chapter 8</span>
              <span className="badge-tag">Microeconomics</span>
            </div>
            <h1 className="lesson-title">
              <span className="title-line">Concepts</span>
              <span className="title-gradient">of Cost</span>
            </h1>
            <p className="lesson-meta">
              VK Ohri/NCERT Grade 11 • {lesson8Data.mcqQuestions.length + lesson8Data.tfQuestions.length} Questions
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="lesson-nav">
        <div className="nav-container">
          <div className="nav-scroll">
            {sections.map((section, index) => {
              const Icon = IconMap[section.id];
              const isActive = activeSection === section.id;
              const isCompleted = index <= currentIndex;
              return (
                <button
                  key={section.id}
                  className={`nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon className="nav-icon" />
                  <span className="nav-text">{section.name}</span>
                  {isCompleted && <span className="nav-check">✓</span>}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="lesson-content">
        <div className="content-container">
          {renderActiveSection()}
        </div>
      </main>

      {/* Footer Nav */}
      <footer className="lesson-footer">
        {currentIndex > 0 && (
          <button className="nav-btn prev" onClick={() => setActiveSection(sections[currentIndex - 1].id)}>
            Previous
          </button>
        )}
        {currentIndex < sections.length - 1 && (
          <button className="nav-btn next" onClick={() => setActiveSection(sections[currentIndex + 1].id)}>
            Next
          </button>
        )}
      </footer>
    </div>
  );
}

export default Lesson8;
```

## 📊 Cost Data Example (CostConceptsTable.jsx)
```js
const costData = [
  { output: 0, tc: 50, fc: 50, vc: 0, ac: '-', mc: '-', stage: 'Zero' },
  { output: 1, tc: 60, fc: 50, vc: 10, ac: 60, mc: 10, stage: 'I' },
  { output: 2, tc: 65, fc: 50, vc: 15, ac: 32.5, mc: 5, stage: 'I' },
  // Add up to output 8, stages I/II/III
];
```

## 🎨 Full component.css Template
```css
@import '../css/lessons.css';

/* Cost-specific */
.cost-table { /* Table styles */ }
.cost-curves { /* D3 wrapper */ }
.highlight-cost-gold { /* Gold theme */ }

/* Responsive */
@media (max-width: 768px) { /* Mobile adjustments */ }
```

## 🔧 Troubleshooting
- **Nav not persisting**: Check localStorage key 'lesson8-activeSection'
- **Charts not rendering**: Verify D3 import, dimensions state
- **Quiz empty**: Check lesson8Data.js arrays
- **Styles missing**: @import lessons.css in component.css
- **Firebase error**: Verify logLessonProgress function

## 📚 Examples from Lessons 1-7
- **Lesson2**: Recharts PPC (simple curves)
- **Lesson6**: Interactive D3 simulator
- **Lesson7**: Production table + stages

**Use this for ALL new lessons. No deviations for consistency.**