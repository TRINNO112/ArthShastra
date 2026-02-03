# ArthShastra

An interactive economics learning platform built with React and Vite, featuring lessons, quizzes, and progress tracking powered by Firebase.

## 🌟 Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **Styling**: CSS with CSS Variables (dark theme with neon accents)
- **Icons**: React Icons (FontAwesome)
- **Backend**: Firebase (Authentication, Firestore)
- **Deployment**: GitHub Pages

---

## 📊 Project Health Audit (Jan 2026)

### Inline CSS Status
- **Total Inline Styles**: ~902 instances.
- **Verdict**: **Manageable / Safe**.
- **Assessment**: While high, React handles inline styles efficiently. The visual "lag" concerns are unfounded at this scale. For future lessons, prefer `lessons.css` classes for complex layouts to keep code clean, but use inline styles for dynamic values (animations, charts) without fear.

### 🏗️ Scalability Strategy: "The Factory Model"
To reach the goal of **1 Lesson Per Day**, we are shifting from "Hand-Crafted Components" to "Templated Content".

**The Plan:**
1. **Create Reusable Layouts**: Instead of building `<div>` structures for every page, we will build generic components like `<LessonPage>`, `<ConceptCard>`, `<InteractiveGraph>`.
2. **Data-Driven Content**: Future lessons can be defined in JSON/JS files, which the templates render automatically.
3. **Unified Styling**: All new lessons will strictly use `lessons.css` classes, reducing decision fatigue.

---

## 🌳 The Ultra-Large Project Map

A detailed view of the current Microeconomics curriculum implementation.

```text
ArthShastra/
├── .github/
│   └── workflows/
│       └── (GitHub Action definitions)
│
├── .vscode/
│   └── settings.json
│
├── public/                 # Static assets served as-is
│   ├── vite.svg
│   └── (other static resources)
│
├── src/
│   ├── assets/             # Bundled assets
│   │   └── react.svg
│   │
│   ├── components/         # Global Shared Components
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   └── Input.jsx
│   │   └── ui/
│   │       ├── Card.jsx
│   │       └── Modal.jsx
│   │
│   ├── context/            # Global State
│   │   └── AuthContext.jsx
│   │
│   ├── data/
│   │   └── (Global static data)
│   │
│   ├── hooks/              # Custom React Hooks
│   │   └── useScrollTop.js
│   │
│   ├── pages/              # Application Routes
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Lessons.jsx     # Dashboard
│   │   ├── Lessons.css
│   │   │
│   │   └── Lessons/        # 🎓 LEARING CONTENT MODULES
│   │       │
│   │       ├── css/        # 🎨 CENTRALIZED STYLING
│   │       │   ├── lessons.css  # [MASTER] All Lesson Styles (5000+ lines)
│   │       │   └── quiz.css     # Shared Quiz Styles
│   │       │
│   │       ├── components/ # 🧩 SHARED LESSON COMPONENTS
│   │       │   ├── SharedQuiz.jsx
│   │       │   ├── index.js
│   │       │   └── (No local CSS files here)
│   │       │
│   │       ├── data/       # 📄 SHARED DATA
│   │       │   ├── lesson1Data.js
│   │       │   ├── lesson2Data.js
│   │       │   └── ... (Data for all lessons)
│   │       │
│   │       ├── Lesson1/ (Introduction)
│   │       │   ├── Lesson1.jsx
│   │       │   └── components/
│   │       │       ├── Introduction.jsx
│   │       │       ├── Scarcity.jsx
│   │       │       └── Quiz.jsx
│   │       │
│   │       ├── Lesson2/ (Central Problems)
│   │       │   ├── Lesson2.jsx
│   │       │   └── components/
│   │       │       ├── AttainableUnattainable.jsx
│   │       │       ├── OpportunityCost.jsx
│   │       │       ├── PPCVisualizer.jsx
│   │       │       ├── PPCurve.jsx
│   │       │       ├── ProductionPossibilityCurve.jsx (Wrapper)
│   │       │       ├── Quiz.jsx
│   │       │       ├── SlopeMOC.jsx
│   │       │       ├── TabularRepresentation.jsx
│   │       │       └── WhatHowForWhom.jsx
│   │       │
│   │       ├── Lesson3/ (Consumer Equilibrium - Utility)
│   │       │   ├── Lesson3.jsx
│   │       │   └── components/
│   │       │       ├── ConceptOfUtility.jsx
│   │       │       ├── ConsumerEquilibrium.jsx
│   │       │       ├── DiminishingMarginalUtility.jsx
│   │       │       ├── LimitationsOfUtility.jsx
│   │       │       ├── Quiz.jsx
│   │       │       ├── SingleCommodityChart.jsx
│   │       │       ├── TwoCommodityChart.jsx
│   │       │       └── WhoIsConsumer.jsx
│   │       │
│   │       ├── Lesson4/ (Indifference Curve)
│   │       │   ├── Lesson4.jsx
│   │       │   └── components/
│   │       │       ├── BudgetLine.jsx
│   │       │       ├── ConsumerEquilibriumIC.jsx
│   │       │       ├── IntroToIC.jsx
│   │       │       ├── MRSConcept.jsx
│   │       │       ├── MeaningOfIC.jsx
│   │       │       ├── PropertiesOfIC.jsx
│   │       │       └── Quiz.jsx
│   │       │
│   │       ├── Lesson5/ (Theory of Demand)
│   │       │   ├── Lesson5.jsx
│   │       │   └── components/
│   │       │       ├── DemandCurve.jsx
│   │       │       ├── DemandDescription.jsx
│   │       │       ├── DemandFunction.jsx
│   │       │       ├── LawOfDemand.jsx
│   │       │       ├── Quiz.jsx
│   │       │       └── ShiftVsMovement.jsx
│   │       │
│   │       ├── Lesson6/ (Elasticity)
│   │       │   ├── Lesson6.jsx
│   │       │   └── components/
│   │       │       ├── Applications.jsx
│   │       │       ├── ConceptAndMeasurement.jsx
│   │       │       ├── FactorsAffecting.jsx
│   │       │       ├── InteractiveCurveSimulator.jsx
│   │       │       ├── InteractiveCurveSimulatorMobile.jsx
│   │       │       ├── Introduction.jsx
│   │       │       ├── Quiz.jsx
│   │       │       └── TypesOfElasticity.jsx
│   │       │
│   │       ├── Lesson7/ (Production Function)
│   │       │   ├── Lesson7.jsx
│   │       │   └── components/
│   │       │       ├── AssumptionsLimitations.jsx
│   │       │       ├── PracticeProblems.jsx
│   │       │       ├── ProductionFunction.jsx
│   │       │       ├── ProductionSchedule.jsx
│   │       │       ├── Quiz.jsx
│   │       │       ├── RealWorldExamples.jsx
│   │       │       ├── ReturnsToFactorChart.jsx
│   │       │       └── StagesOfProduction.jsx
│   │       │
│   │       └── Lesson8/ (Cost)
│   │           ├── Lesson8.jsx
│   │           └── components/
│   │               ├── BreakEvenShutdown.jsx
│   │               ├── CostCurvesChart.jsx
│   │               ├── CostRelationships.jsx
│   │               ├── CostSchedule.jsx
│   │               ├── FixedVariableCosts.jsx
│   │               ├── LACEnvelopeChart.jsx
│   │               ├── PracticeProblems.jsx
│   │               ├── RealWorldExamples.jsx
│   │               ├── ShortLongRun.jsx
│   │               └── TotalCostCurves.jsx
│   │
│   ├── services/           # Backend Logic
│   │   └── firebase.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── CLAUDE.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 CSS Styling System

To prevent the "CSS Mess" of the past, we now use a consolidated styling strategy:

1.  **`lessons.css`**: This is the **Single Source of Truth** for all lesson content.
    - Generic Classes: `.content-card`, `.highlight-card`, `.bullet-list`
    - Layouts: `.two-column`, `.flex-wrap`
    - Themes: `.highlight-gold`, `.neon-green`
    - Specifics: Lesson 7 Simulator, Lesson 8 Cost Curves, Lesson 4 Graphs.

2.  **`quiz.css`**: Dedicated styles for the Quiz interface.

3.  **Local CSS**: Individual component CSS files (e.g., inside `Lesson3/components/`) are **DEPRECATED**. Do not import them. Always import `../../css/lessons.css`.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

---

*Documentation updated: Jan 2026 - CSS Architecture Consolidated*
