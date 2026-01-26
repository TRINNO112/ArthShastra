# 🌳 Ultra-Large Project Map

A comprehensive directory tree of the entire **ArthShastra** codebase.
*Generated: Jan 2026*

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
