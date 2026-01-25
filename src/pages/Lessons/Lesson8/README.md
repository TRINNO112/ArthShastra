# Lesson8: Concepts of Cost - Full Implementation Plan

## Overview
Short-run cost concepts: Fixed Costs (FC), Variable Costs (VC), Total Costs (TC), Marginal Cost (MC), Average Cost (AC), Average Variable Cost (AVC), Average Fixed Cost (AFC). U-shaped curves, short-run/long-run distinctions.

## Directory Structure
```
Lesson8/
├── Lesson8.jsx                 # Main orchestrator, costData array, sections nav
├── index.js                    # export default Lesson8
├── README.md                   # This file
└── components/
    ├── index.js                # Barrel exports
    ├── component.css           # Styles (tables, tooltips, cards)
    ├── Introduction.jsx        # Definitions
    ├── CostSchedule.jsx        # Interactive table (hover tooltip MC/AC)
    ├── CostCurvesChart.jsx     # D3 TC/MC/AC/AVC curves (adapt ReturnsToFactorChart)
    ├── FixedVariableCosts.jsx  # FC/VC cards/grid
    ├── ShortLongRun.jsx        # Comparison tables
    ├── RealWorldExamples.jsx   # Factory examples
    ├── PracticeProblems.jsx    # Calc table + solutions
    └── Quiz.jsx                # MCQ/TF from lesson8Data
```
data/lesson8Data.js: sections, quizzes.

## costData (in Lesson8.jsx)
```
const costData = [
  { output: 0, fc: 100, vc: 0, tc: 100, mc: '-', ac: '-', avc: '-', afc: '-', stage: 'Zero' },
  { output: 1, fc: 100, vc: 50, tc: 150, mc: 50, ac: 150, avc: 50, afc: 100, stage: 'I' },
  // ... 10 rows, MC U-dip-rise, AC min at MC intersect
];
```

## Formulas
- TC = FC + VC
- MC = ΔTC / ΔQ
- AC = TC / Q
- AVC = VC / Q
- AFC = FC / Q (falls continuously)

## Components Detail
1. **CostSchedule.jsx**: ProductionSchedule clone. Columns: Q, FC, VC, TC, MC, AC, AVC, AFC, Stage. Hover tooltip MC/AC calc, viewport-fixed.
2. **CostCurvesChart.jsx**: ReturnsToFactorChart clone. Lines: TC green solid, MC red, AC gold dashed, AVC cyan dashed. X=output, Y=₹cost. Legend, tooltips, animation.
3. **FixedVariableCosts.jsx**: 2-column grid cards (FC examples, VC examples).
4. **ShortLongRun.jsx**: Tables (Short: 1 FC, Long: all VC).
5. **PracticeProblems.jsx**: Editable table (input VC → auto MC/AC).
6. **Quiz.jsx**: Standard from lesson1Data pattern.

## Dependencies
- D3.js (charts)
- react-icons/fa (icons)
- Firebase (progress)

## Integration
- App.jsx: `<Route path=\"/lesson/micro11-8\" element={<Lesson8 />} />`
- Lessons.jsx: Add chapter entry.

## Test Checklist
- Nav persistence (localStorage)
- Table hover tooltip viewport-fixed
- D3 chart responsive/animated
- Quiz loads lesson8Data
- Firebase logs on exit

Ready for implementation.