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
src/pages/Lessons/
├── css/
│   ├── lessons.css          # (5000+ lines) The Master Stylesheet
│   └── quiz.css             # Unified Quiz Styles
│
├── components/
│   └── SharedQuiz.jsx       # The Universal Quiz Engine
│
├── Lesson1/ (Introduction)
│   ├── Lesson1.jsx
│   └── components/
│       ├── Introduction.jsx
│       ├── Scarcity.jsx
│       └── Quiz.jsx
│
├── Lesson2/ (Central Problems)
│   ├── Lesson2.jsx
│   └── components/
│       ├── WhatHowForWhom.jsx
│       ├── PPCurve.jsx      # Production Possibility Curve Logic
│       └── OpportunityCost.jsx
│
├── Lesson3/ (Consumer Equilibrium - Utility)
│   ├── Lesson3.jsx
│   └── components/
│       ├── ConceptOfUtility.jsx
│       ├── DiminishingMarginalUtility.jsx (Law of DMU)
│       ├── ConsumerEquilibrium.jsx
│       └── TwoCommodityChart.jsx
│
├── Lesson4/ (Indifference Curve Analysis)
│   ├── Lesson4.jsx
│   └── components/
│       ├── IndifferenceCurve.jsx
│       ├── BudgetLine.jsx
│       └── OptimalChoice.jsx
│
├── Lesson5/ (Theory of Demand)
│   ├── Lesson5.jsx
│   └── components/
│       ├── DemandSchedule.jsx
│       ├── LawOfDemand.jsx
│       └── ShiftVsMovement.jsx
│
├── Lesson6/ (Elasticity of Demand)
│   ├── Lesson6.jsx
│   └── components/
│       ├── PriceElasticity.jsx
│       ├── GeometricMethod.jsx
│       └── InteractiveSimulator.jsx
│
├── Lesson7/ (Production Function)
│   ├── Lesson7.jsx
│   └── components/
│       ├── ReturnsToFactor.jsx
│       ├── StagesOfProduction.jsx # The 3 Stages Visualizer
│       └── ProductionSimulator.jsx
│
└── Lesson8/ (Cost Analysis)
    ├── Lesson8.jsx
    └── components/
        ├── ShortRunCosts.jsx
        ├── LongRunCosts.jsx
        ├── CostCurvesChart.jsx  # Complex D3/Recharts Visualization
        └── BreakEvenPoint.jsx
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
