# Lesson 2 Components - CSS Extraction Progress

## 📊 Overall Progress: 4/11 Files Complete (36%)

---

## ✅ COMPLETED FILES (Do NOT modify these)

### 1. OpportunityCost.jsx ✅
- Import added: `import './components.css';`
- All inline styles replaced with CSS classes
- Classes used: `moc-formula-box`, `moc-formula-numerator`, `moc-formula-denominator`

### 2. PPC.jsx ✅
- Import added: `import './components.css';`
- All inline styles replaced with CSS classes
- Classes used: `ppc-properties-list`, `ppc-shifts-list`

### 3. Introduction.jsx ✅
- Import added: `import './components.css';`
- All 37 inline styles replaced with CSS classes
- Classes used: `intro-economic-problem`, `intro-highlight-gold`, `intro-example-box`, etc.

### 4. PPCVisualizer.jsx ✅
- Import added: `import './components.css';`
- All 65 inline styles replaced with CSS classes
- Dynamic button styling converted to `getButtonClassName()` helper function
- Dynamic scenario colors converted to `getColorClass()` helper function
- Classes used: `ppc-visualizer-*` (50+ classes)

---

## 🟡 CSS CLASSES READY (Components need updating)

These files have CSS classes already created in `components.css`. Just need to replace inline styles with className attributes.

### 5. AttainableUnattainable.jsx (39 inline styles)
**CSS Classes Already Created:** ✅
- `attainable-graph-container`
- `attainable-tooltip`
- `attainable-tooltip-text`
- `attainable-tooltip-value-green`
- `attainable-tooltip-value-cyan`
- `attainable-legend`
- `attainable-legend-item`
- `attainable-legend-dot-green/gold/red`
- `attainable-legend-label`
- `attainable-point-selector`
- `attainable-point-selector-heading`
- `attainable-point-grid`
- `attainable-point-button-base`
- `attainable-point-button-inactive`
- `attainable-point-button-active`
- `attainable-point-details`
- `attainable-point-details-content`
- `attainable-point-details-icon`
- `attainable-point-details-text`
- `attainable-point-details-title`
- `attainable-point-details-description`
- `attainable-point-details-production`
- `attainable-point-details-production-text`
- `attainable-feature-grid`
- `attainable-feature-list`
- `attainable-movement-card`
- `attainable-movement-heading`
- `attainable-movement-text`
- `attainable-movement-text-last`

**What to do:**
1. Add `import './components.css';` at the top
2. Replace tooltip inline styles (lines 115-128) with `attainable-tooltip` classes
3. Replace legend inline styles (lines 248-288) with `attainable-legend` classes
4. Replace point selector inline styles (lines 292-324) with `attainable-point-*` classes
5. Replace point details inline styles (lines 328-374) with `attainable-point-details-*` classes
6. Replace feature grid inline styles (lines 377-413) with `attainable-feature-*` classes
7. Replace movement card inline styles (lines 415-429) with `attainable-movement-*` classes
8. Create helper function for dynamic button styling (like PPCVisualizer.jsx)

### 6. PPCAssumptions.jsx (24 inline styles)
**CSS Classes Already Created:** ✅
- `assumptions-intro-box`
- `assumptions-intro-content`
- `assumptions-intro-icon`
- `assumptions-intro-heading`
- `assumptions-intro-text`
- `assumptions-grid`
- `assumption-card`
- `assumption-card-icon-bg`
- `assumption-card-content`
- `assumption-card-icon`
- `assumption-card-text`
- `assumption-card-badge-container`
- `assumption-card-badge`
- `assumption-card-title`
- `assumption-card-description`
- `assumption-card-detail-box`
- `assumption-card-detail-text`
- `assumption-card-detail-icon`
- `assumptions-takeaway-card`
- `assumptions-takeaway-heading`
- `assumptions-takeaway-text`
- `assumptions-feature-grid`
- `assumptions-feature-text`

**What to do:**
1. Add `import './components.css';` at the top
2. Replace intro box inline styles (lines 51-71) with `assumptions-intro-*` classes
3. Replace grid inline styles (line 73) with `assumptions-grid`
4. Replace assumption cards inline styles (lines 75-167) with `assumption-card-*` classes
5. Handle dynamic styles (border colors, backgrounds) with inline style or CSS variables
6. Replace takeaway card inline styles (lines 172-184) with `assumptions-takeaway-*` classes
7. Replace feature grid inline styles (lines 187-209) with `assumptions-feature-*` classes

### 7. TabularRepresentation.jsx (37 inline styles)
**CSS Classes Already Created:** ✅
- `tabular-table-container`
- `tabular-table`
- `tabular-table-head`
- `tabular-table-th-base`
- `tabular-table-th-combination/wheat/rice/cost`
- `tabular-table-row`
- `tabular-table-row-even`
- `tabular-table-row-selected`
- `tabular-table-td-combination`
- `tabular-table-combination-badge`
- `tabular-table-combination-badge-selected/normal`
- `tabular-table-td-number`
- `tabular-table-td-cost`
- `tabular-selected-details`
- `tabular-selected-details-header`
- `tabular-selected-details-icon`
- `tabular-selected-details-title`
- `tabular-selected-details-text`
- `tabular-graph-container`
- `tabular-graph-heading`
- `tabular-graph-heading-icon`
- `tabular-graph-note`
- `tabular-feature-grid`
- `tabular-feature-text`
- `tabular-insights-card`
- `tabular-insights-heading`
- `tabular-insights-list`

**What to do:**
1. Add `import './components.css';` at the top
2. Replace tooltip inline styles (lines 84-98) with appropriate classes
3. Replace table container inline styles (lines 124-130) with `tabular-table-container`
4. Replace table inline styles (lines 131-252) with `tabular-table-*` classes
5. Replace selected details inline styles (lines 257-279) with `tabular-selected-details-*` classes
6. Replace graph container inline styles (lines 282-386) with `tabular-graph-*` classes
7. Replace feature grid inline styles (lines 389-422) with `tabular-feature-*` classes
8. Replace insights card inline styles (lines 424-437) with `tabular-insights-*` classes
9. Handle dynamic row highlighting with conditional className

---

## 🔴 TODO: Extract CSS & Update Components (4 files remaining)

These files have NOT been touched yet. Need to extract CSS and update components from scratch.

### 8. CentralProblems.jsx (105 inline styles) 🔴
**Status:** Not started
**Estimated inline styles:** 105
**What to do:**
1. Read the file completely
2. Identify all inline style objects
3. Create semantic CSS class names (e.g., `central-problems-*`)
4. Add all CSS classes to `components.css`
5. Replace all inline styles in the component with className
6. Add `import './components.css';`
7. Test the build

### 9. OpportunityCostCalculator.jsx (98 inline styles) 🔴
**Status:** Not started
**Estimated inline styles:** 98
**What to do:**
1. Read the file completely
2. Identify all inline style objects (likely has calculator UI, buttons, result displays)
3. Create semantic CSS class names (e.g., `occ-calculator-*`)
4. Add all CSS classes to `components.css`
5. Replace all inline styles in the component with className
6. Handle any dynamic calculations/state-based styling
7. Add `import './components.css';`
8. Test the build

### 10. PPCScenario.jsx (53 inline styles) 🔴
**Status:** Not started
**Estimated inline styles:** 53
**What to do:**
1. Read the file completely
2. Identify all inline style objects
3. Create semantic CSS class names (e.g., `ppc-scenario-*`)
4. Add all CSS classes to `components.css`
5. Replace all inline styles in the component with className
6. Add `import './components.css';`
7. Test the build

### 11. SlopeMOC.jsx (62 inline styles) 🔴
**Status:** Not started
**Estimated inline styles:** 62
**What to do:**
1. Read the file completely
2. Identify all inline style objects (likely has charts, formulas, calculations)
3. Create semantic CSS class names (e.g., `slope-moc-*`)
4. Add all CSS classes to `components.css`
5. Replace all inline styles in the component with className
6. Add `import './components.css';`
7. Test the build

---

## 🎯 How to Resume This Task

When you want to continue, tell Claude:

```
Continue the CSS extraction for Lesson 2 components.
Read the file: src/pages/Lessons/Lesson2/components/CSS-EXTRACTION-TODO.md
Start with the files marked 🟡 (CSS classes ready), then move to 🔴 (not started).
```

---

## 📋 Checklist for Each File

- [ ] Read the component file completely
- [ ] Identify all `style={{...}}` occurrences
- [ ] Create semantic CSS class names
- [ ] Add CSS classes to `components.css` with proper comments
- [ ] Replace inline styles with `className` in component
- [ ] Add `import './components.css';` if not present
- [ ] Handle dynamic styles (create helper functions or conditional classNames)
- [ ] Test build: `npm run build`
- [ ] Verify visual appearance unchanged

---

## 🔧 Helper Patterns

### Pattern 1: Dynamic Button Styles
```javascript
// Instead of:
style={{
  background: isActive ? 'gold' : 'gray',
  color: isActive ? 'black' : 'white'
}}

// Use:
className={`button-base ${isActive ? 'button-active' : 'button-inactive'}`}
```

### Pattern 2: Dynamic Colors
```javascript
// Instead of:
style={{ color: point.color, background: `${point.color}20` }}

// Create helper:
const getColorClass = (color) => {
  const map = { '#ffd700': 'gold', '#00ff88': 'green', '#ff6b6b': 'red' };
  return `color-${map[color] || 'default'}`;
}
```

### Pattern 3: Hover Effects
```javascript
// Instead of:
onMouseEnter={(e) => { e.currentTarget.style.background = 'blue'; }}

// Use CSS:
.my-element:hover {
  background: blue;
}
```

---

## 📊 Final Statistics

- **Total Files:** 11
- **Completed:** 4 (36%)
- **CSS Ready:** 3 (27%)
- **Remaining:** 4 (37%)
- **Total Inline Styles:** ~525
- **Extracted So Far:** ~107 (20%)
- **Remaining:** ~418 (80%)

---

## ✅ Build Status

Last successful build: After completing 4 files
- All completed files are working correctly
- CSS file size increased by ~10KB
- No build errors
- Visual appearance preserved

---

## 🚀 Next Session Priority

1. **First:** Complete AttainableUnattainable.jsx (CSS classes ready)
2. **Second:** Complete PPCAssumptions.jsx (CSS classes ready)
3. **Third:** Complete TabularRepresentation.jsx (CSS classes ready)
4. **Then:** Extract CentralProblems.jsx (largest remaining file)
5. **Finally:** Complete remaining 3 files

---

## 📝 Notes

- The `components.css` file is located at: `src/pages/Lessons/Lesson2/components/components.css`
- All CSS follows BEM-like naming: `component-element-modifier`
- Dynamic styles requiring JS logic should use helper functions
- Hover effects have been moved to CSS `:hover` pseudo-classes where possible
- Build command: `npm run build`
- Dev command: `npm run dev`

---

**Last Updated:** 2026-01-06
**Progress:** 4/11 files complete, 3/11 have CSS ready
**Next Task:** Update components with ready CSS classes
