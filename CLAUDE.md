# CLAUDE.md - Complete ArthShastra Lessons Guide (v3.0 - Full Directory Trees)

**Everything about webpage/lessons**: Directory trees for all lesson types (Simple 1-4, Advanced 5-7), file purposes, patterns, templates. Use for new lessons.

## 📂 Directory Trees Per Lesson Type

### Type 1: Simple Lessons (1-4) - Text-heavy, basic charts
**Lesson1 Tree**:
```
Lesson1/
├── Lesson1.jsx                 # Main: sections hard-coded, Quiz render
├── index.js                    # export default Lesson1
└── components/
    ├── index.js                # export Introduction, Definitions, etc.
    ├── Introduction.jsx        # Text + header
    ├── Definitions.jsx         # Bullet lists
    ├── EconomicProblems.jsx    # Cards
    ├── PositiveNormative.jsx   # Comparisons
    ├── MicroVsMacro.jsx        # Tables
    ├── TypesOfEconomies.jsx    # Icons + text
    ├── SimpleAndComplexEconomies.jsx # Examples
    └── Quiz.jsx                # MCQ/TF from lesson1Data
```
**lesson1Data.js**: mcq/tf questions only.

### Type 2: Recharts Lessons (Lesson2) - Basic interactive charts
**Lesson2 Tree**:
```
Lesson2/
├── Lesson2.jsx                 # Main: hard-coded sections
├── index.js
└── components/
    ├── index.js
    ├── Introduction.jsx
    ├── CentralProblems.jsx
    ├── OpportunityCost.jsx
    ├── OpportunityCostCalculator.jsx # State-based calc
    ├── PPC.jsx
    ├── PPCVisualizer.jsx       # Recharts ComposedChart
    ├── PPCAssumptions.jsx
    ├── PPCScenario.jsx         # Scenario selector
    ├── AttainableUnattainable.jsx
    ├── TabularRepresentation.jsx # Data table
    ├── SlopeMOC.jsx
    └── Quiz.jsx                # Import from Lesson1
    └── components.css          # Lesson-specific styles
```
**Key**: Recharts ResponsiveContainer, scenario switch.

### Type 3: D3 Lessons (3-4) - Custom graphs, CSS inheritance
**Lesson3 Tree**:
```
Lesson3/
├── Lesson3.jsx
├── index.js
└── components/
    ├── index.js
    ├── WhoIsConsumer.jsx
    ├── ConceptOfUtility.jsx
    ├── DiminishingMarginalUtility.jsx
    ├── ConsumerEquilibrium.jsx
    ├── LimitationsOfUtility.jsx
    ├── SingleCommodityChart.jsx # D3 utility curve
    ├── TwoCommodityChart.jsx   # D3 indifference
    └── Quiz.jsx
    └── component.css           # 800+ lines, vars (--neon-gold etc.)
```
Lesson4 imports Lesson3 CSS.

### Type 4: Advanced Lessons (5-7) - Sections data, D3 simulators, modern CSS
**Lesson7 Tree** (template for Lesson8):
```
Lesson7/
├── Lesson7.jsx                 # Main: sections from data, localStorage, Firebase
├── index.js
└── components/
    ├── index.js
    ├── ProductionFunction.jsx  # Intro
    ├── ProductionSchedule.jsx  # Table with productionData
    ├── ReturnsToFactorChart.jsx # D3 TP/AP/MP (adapt for costs)
    ├── StagesOfProduction.jsx  # Cards/grid
    ├── RealWorldExamples.jsx   # Examples grid
    ├── AssumptionsLimitations.jsx
    ├── PracticeProblems.jsx    # Table + solution
    └── Quiz.jsx                # Coming soon
    └── component.css           # Modern flex, chart-legend-side, responsive
```
**lesson7Data.js**: sections array with icons, mcq/tf.

## 🏗️ Webpage Structure (Full)
```
ArthShastra/
├── src/pages/Lessons/          # All lessons
│   ├── css/lessons.css         # Shared: lesson-page, nav, cards, gradients
│   ├── data/                   # lessonNData.js (sections/quizzes)
│   ├── Lesson1/ ... Lesson7/
│   └── Lessons.jsx             # Hub: micro11.chapters list
├── src/App.jsx                 # Routes: /lesson/micro11-N → LessonN
└── services/firebase.js        # logLessonProgress
```
**Flow**: Lessons hub → LessonN → Nav sections → Components.

## 📋 Lesson8 Plan (Concepts of Cost)
(From plan file - D3 CostCurvesChart TC/MC/AC/AVC U-curves, CostSchedule table, etc. 13 files.)

Ready to implement step-by-step.