# ArthShastra

An interactive economics learning platform built with React and Vite, featuring lessons, quizzes, and progress tracking powered by Firebase.

## 🌟 Tech Stack

- **Frontend**: React 19, Vite
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
│   │               ├── PriceCeilingFloor.jsx
│   │               ├── ShiftsInEquilibrium.jsx
│   │               └── SupplyDemandEquilibrium.jsx
│   │
│   └── StatsLessons/   # 📊 STATISTICS MODULES (Consolidated Design System)
│       ├── Lesson1/ (Introduction & Scope)
│       ├── Lesson2/ (Collection of Data)
│       ├── Lesson3/ (Organization of Data)
│       ├── Lesson4/ (Presentation - Tabular)
│       ├── Lesson5/ (Presentation - Diagrammatic)
│       ├── Lesson13/ (Project Work & Case Study)
│       └── ...
│
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


### 📈 Education Status Update
- **Microeconomics**: Grade 12 (Pending)
- **IED**: Grade 12 (Pending)
- **Statistics**: Construction Started 🚧

### 🎨 Lesson Design Styles
Each lesson features a unique visual identity to keep learning engaging:

| Lesson       | Style Theme                      |
| :---         | :---                             |
| **Lesson 1** | Leonardo da Vinci Notebook       |
| **Lesson 2** | Comic Book / Graphic Novel       |
| **Lesson 3** | Brutalism Design                 |
| **Lesson 4** | Brutalism Design                 |
| **Lesson 5** | Comic Book Theme                 |
| **Lesson 6** | Brutalism Design                 |
| **Lesson 7** | Modern Abstract                  |
| **Lesson 8** | Industrial Factory Theme         |
| **Lesson 9** | Corporate Finance Gold           |
| **Lesson 10**| Strategic Balance / Game Theory  |
| **Lesson 11**| Logistics & Supply Chain         |
| **Lesson 12**| Marketplace Simulation           |
| **Lesson 13**| Terminal / Hacker Theme          |
| **Stats (All)**| Unified Vintage & Modern Mix     |
| **- System** | *Consolidated for Efficiency*    |

---


---

## 📚 Complete Curriculum Roadmap

The ArthShastra curriculum covers the entire Grade 11 Microeconomics syllabus, broken down into interactive modules.

### Unit 1: Introduction to Microeconomics
#### 📘 [Lesson 1: Introduction](src/pages/Lessons/Lesson1)
**Theme**: *Leonardo da Vinci Notebook*
- **Concept of Economics**: Scarcity, Choice, and Wealth.
- **Micro vs Macro**: The fundamental differences.
- **Positive vs Normative**: Scientific analysis vs Value judgments.
- **Economy Types**: Centrally Planned, Market, and Mixed Economies.

#### 👑 [Lesson 2: Central Problems](src/pages/Lessons/Lesson2)
**Theme**: *Comic Book / Graphic Novel*
- **What to Produce?**: The allocation of resources.
- **How to Produce?**: Labor intensive vs Capital intensive techniques.
- **For Whom to Produce?**: Distribution of income and welfare.
- **PPC (Production Possibility Curve)**: Shifts, Rotations, and Opportunity Cost.

---

### Unit 2: Consumer Equilibrium and Demand
#### 🏛️ [Lesson 3: Consumer Equilibrium (Utility)](src/pages/Lessons/Lesson3)
**Theme**: *Brutalism Design*
- **Total & Marginal Utility**: The law of diminishing returns.
- **Single Commodity Case**: Equilibrium condition (MUx = Px).
- **Two Commodity Case**: Law of Equi-Marginal Utility.

#### 📉 [Lesson 4: Indifference Curve Analysis](src/pages/Lessons/Lesson4)
**Theme**: *Brutalism Design*
- **Indifference Statistics**: Monotonic preferences and the MRS.
- **Budget Line**: Evaluation of purchasing power and price ratio.
- **Consumer's Equilibrium**: Tangency of IC and Budget Line.

#### 🗯️ [Lesson 5: Theory of Demand](src/pages/Lessons/Lesson5)
**Theme**: *Comic Book Theme*
- **Law of Demand**: Inverse relationship between Price and Quantity.
- **Determinants**: Income, Price of Related Goods (Substitutes/Complements).
- **Exceptions**: Giffen Goods and Veblen Goods.

#### 💢 [Lesson 6: Price Elasticity of Demand](src/pages/Lessons/Lesson6)
**Theme**: *Brutalism Design*
- **Measurement**: Percentage Method and Geometric Method.
- **Degrees**: Perfectly Elastic to Perfectly Inelastic.
- **Factors**: Nature of commodity, Time period, Availability of substitutes.

---

### Unit 3: Producer Behaviour and Supply
#### 🏭 [Lesson 7: Production Function](src/pages/Lessons/Lesson7)
**Theme**: *Modern Abstract*
- **Short Run vs Long Run**: Fixed and Variable factors.
- **Law of Variable Proportions**: TP, AP, and MP relationships.
- **Returns to a Factor**: Increasing, Diminishing, and Negative returns.

#### 🏭 [Lesson 8: Concept of Cost](src/pages/Lessons/Lesson8)
**Theme**: *Industrial Factory Theme*
- **Categories**: Fixed vs Variable, Explicit vs Implicit.
- **Cost Curves**: The 'U' shape of AC, AVC, and MC.
- **Relationships**: Why MC intersects AC at its minimum.

#### 💰 [Lesson 9: Concept of Revenue](src/pages/Lessons/Lesson9)
**Theme**: *Corporate Finance Gold*
- **TR, AR, MR**: Definitions and calculations.
- **Market Forms**: Revenue curves in Perfect vs Imperfect completion.
- **Behavior**: Relationship between TR, AR, and MR.

#### ⚖️ [Lesson 10: Producer's Equilibrium](src/pages/Lessons/Lesson10)
**Theme**: *Strategic Balance / Game Theory*
- **Conditions**: MC = MR and MC must be rising.
- **Analysis**: Break-even point and Shutdown point.
- **Examples**: Numerical determination of profit maximization.

#### 🚚 [Lesson 11: Theory of Supply](src/pages/Lessons/Lesson11)
**Theme**: *Logistics & Supply Chain*
- **Determinants**: Price, Tech, Input prices, Taxes.
- **Law of Supply**: Direct relationship between Price and Quantity.
- **Elasticity**: Responsiveness of supply to price changes.

---

### Unit 4: Forms of Market & Price Determination
#### 🏙️ [Lesson 12: Forms of Market](src/pages/Lessons/Lesson12)
**Theme**: *Marketplace Simulation*
- **Perfect Competition**: Large buyers/sellers, homogeneous product.
- **Monopoly**: Single seller, price maker.
- **Monopolistic Competition**: Product differentiation.
- **Oligopoly**: Interdependence and cartels.

#### 💻 [Lesson 13: Market Equilibrium](src/pages/Lessons/Lesson13)
**Theme**: *Terminal / Hacker Theme*
- **Equilibrium Price**: Intersection of Demand and Supply.
- **Shifts**: Effect of change in demand and supply on equilibrium.
- **Price Control**: Price Ceilings and Price Floors.

---

### Unit 5: Statistics for Economics
#### 📰 [Stats Lesson 1: Introduction](src/pages/StatsLessons/Lesson1)
**Theme**: *Vintage Newspaper*
- **Nature of Statistics**: Plural and Singular sense.
- **Importance**: Why we need data to stop guessing.
- **Distrust of Stats**: "Lies, Damned Lies, and Statistics."

#### 📊 [Stats Lesson 2: Collection of Data](src/pages/StatsLessons/Lesson2)
**Theme**: *Modern Data Dashboard*
- **Primary vs Secondary**: Direct vs Indirect collection.
- **Census vs Sample**: When to count everyone vs when to guess.
- **Sampling Errors**: Why your data might be lying to you.

#### 📁 [Stats Lesson 13: Project Work & Case Study](src/pages/StatsLessons/Lesson13)
**Theme**: *Project Archive / Case Study*
- **The Case Study**: Real-world data analysis engine.
- **Project Steps**: From hypothesis to conclusion.
- **Data Visualization**: Making numbers look less boring.

---

## 🛠️ Engineering Architecture

ArthShastra is built for scale. Understanding the architecture is key to contributing.

### Directory Structure
```text
src/
├── assets/             # Global static images/icons
├── components/         # Global shared UI (Buttons, Modals, Cards)
├── context/            # React Context (Auth, Theme)
├── css/                # Global Variables (index.css)
├── data/               # Global static data
├── hooks/              # Custom Hooks (useScrollTop, usesAuth)
├── pages/
│   ├── Home/           # Landing Page
│   ├── Lessons/        # THE CORE ENGINE
│   │   ├── css/        # Centralized Lesson Styles
│   │   │   └── lessons.css
│   │   ├── components/ # Shared Lesson Components
│   │   │   └── Quiz.jsx
│   │   ├── Lesson1/    # Individual Lesson Modules
│   │   ├── Lesson2/
│   │   └── ...
├── services/           # Backend Integrations (Firebase)
└── App.jsx             # Main Router
```

### Key Technical Decisions
1.  **Vite**: Selected for HMR speed. We strictly use `vite.config.js`.
2.  **No Redux**: State is localized or handled via Context API. This reduces boilerplate.
3.  **Firebase**: Used for:
    -   **Auth**: Google/Email Sign-in.
    -   **Firestore**: Storing user progress (`users/{uid}/progress/{lessonId}`).
    -   **Performance**: Real-time listeners are minimized to save costs.
4.  **CSS Variables**: We use a robust system of CSS variables for theming.
    -   `--card-bg`: Dark mode card backgrounds.
    -   `--neon-blue`: Primary accent color.
    -   `--text-primary`: Main text color.

---

### 🎨 Component Design System

We use a "Atomic Design" inspired approach but simplified for educational content.

---

### 📊 The Statistics Efficiency Realization
> [!NOTE] 
> **Unit 5 Strategy Shift**: In Microeconomics, every lesson was a "unique visual invention" (Comic, Brutalism, Industrial). While artistic, this was too time-consuming to develop. 
> 
> For **Statistics**, we have shifted to a **Unified Themes Architecture**. All Stats lessons now share a high-end **Vintage Newspaper / Modern Data Dashboard** hybrid. This ensures a professional "Researcher Archive" vibe throughout the unit.

---

### 1. The Lesson Container
Every lesson page (`LessonX.jsx`) follows this strict layout:
- **Header**: Back button + Breadcrumbs.
- **Nav**: Horizontal scrolling tab bar for sections.
- **Main**: The content area rendering the active component.
- **Footer**: Prev/Next buttons + Progress dots.

### 2. Cards
We have three types of cards in `lessons.css`:
- `.content-card`: Standard padding, white/dark bg, subtle shadow.
- `.highlight-card`: Colored border, used for definitions/formulas.
- `.interactive-card`: Hover effects, used for clickable elements.

### 3. Quizzes
The `Quiz.jsx` component is a complex engine that supports:
- **Multiple Choice**: Standard options.
- **True/False**: Boolean logic.
- **Feedback**: Immediate detailed explanation on correct/incorrect answers.
- **Score Tracking**: Auto-logs to Firebase upon completion.

---

## 🤝 Developer Guide: How to Build a Lesson

Want to add Lesson 14? Follow the **"Factory Model"**:

### Step 1: Create the Directory
Copy the folder structure of `Lesson12` to `Lesson14`.
Rename all files from `12` to `14`.

### Step 2: Define Data
Edit `data/lesson14Data.js`. This is where you define the structure.
```javascript
export const lesson14Data = {
    title: "National Income",
    sections: [
        { id: 'intro', name: 'Introduction', icon: FaBook },
        { id: 'methods', name: 'Measurement', icon: FaCalculator }
    ],
    // ...
}
```

### Step 3: Build Components
Create atomic components in `Lesson14/components/`.
**Rule**: Do NOT write inline CSS. Use classes from `lessons.css`.

### Step 4: Wire it Up
Import your components into `Lesson14.jsx` and map them in the `renderActiveSection` switch statement.

### Step 5: Route It
Add the route in `App.jsx`:
```jsx
<Route path="/lessons/14" element={<Lesson14 />} />
```

---

## 🐛 Troubleshooting

### Common Issues
**1. "Firebase API Key Missing"**
- Ensure you have a `.env` file in the root.
- It must contain `VITE_FIREBASE_API_KEY`, etc.
- Restart the dev server after creating `.env`.

**2. "Module Not Found"**
- Check your imports. We use absolute paths or relative paths.
- Ensure case sensitivity (Windows ignores it, Linux enforces it).

**3. "Styles Not Applying"**
- Did you import `../../css/lessons.css`?
- Are you using valid class names? Check `lessons.css` for typos.

---

## 📜 License & Assignments
**Copyright © 2026 ArthShastra Education**.
Built for CBSE Grade 11 & 12 Economics students.
Concept & Code by **TRINNO ASPHALT**.

*“Economics is the art of making the most of life.” - George Bernard Shaw*



---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

---

*Documentation updated: Jan 2026 - CSS Architecture Consolidated*
