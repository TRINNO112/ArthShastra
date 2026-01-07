# Lesson 2 Components - CSS Extraction Progress

## 📊 Overall Progress: 10/11 Files Complete (91%)

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

### 5. AttainableUnattainable.jsx ✅
- Import added: `import './components.css';`
- All 39 inline styles replaced with CSS classes
- CSS variables used for dynamic colors (point colors, borders, shadows)
- Helper functions: `getPointButtonClass()`, `getPointButtonStyle()`, `getPointDetailsStyle()`
- Classes used: `attainable-*` (25+ classes)

### 6. PPCAssumptions.jsx ✅
- Import added: `import './components.css';`
- All 24 inline styles replaced with CSS classes
- Consolidated dynamic styles into single `getDynamicStyles()` function using CSS variables
- Hover effects moved to CSS `:hover` pseudo-class
- Classes used: `assumptions-*`, `assumption-card-*` (20+ classes)
- CSS variables: `--assumption-color`, `--assumption-border`, `--assumption-bg-gradient`, `--assumption-shadow`, `--assumption-badge-bg`, `--assumption-hover-shadow`

### 7. TabularRepresentation.jsx ✅
- Import added: `import './components.css';`
- All 37 inline styles replaced with CSS classes
- Helper functions: `getRowClass()`, `getBadgeClass()`
- Dynamic row highlighting using conditional className
- Classes used: `tabular-*` (25+ classes)
- Reused `attainable-tooltip` classes for consistency

### 8. CentralProblems.jsx ✅
- Import added: `import './components.css';`
- All 105 inline styles replaced with CSS classes
- Comprehensive CSS extraction with 50+ classes for different components
- Helper class functions for consistent styling patterns
- Classes used: `cp-*` (50+ classes) covering:
  - Intro text and highlight boxes
  - Problem cards with different colors (gold, green, cyan)
  - Sub-decision cards with icon headers and examples
  - Technique comparison cards (LIT/CIT) with advantages/disadvantages
  - Distribution aspects with economic system comparisons
  - Dilemma boxes and takeaway cards
- All dynamic colors handled with semantic CSS classes

### 9. OpportunityCostCalculator.jsx ✅
- Import added: `import './components.css';`
- All 98 inline styles replaced with CSS classes
- Created comprehensive CSS classes for calculator interface
- Classes used: `occ-*` (40+ classes) covering:
  - Calculator buttons and selection interface
  - Money calculator section with inputs and results
  - Time calculator section with breakdown analysis
  - Education calculator section with ROI analysis
  - Color-coded result cards (green, cyan, red, yellow, purple)
  - Investment analysis boxes with conditional styling
- All dynamic colors handled with semantic CSS classes
- Helper functions for conditional styling patterns

### 10. PPCScenario.jsx ✅
- Import added: `import './components.css';`
- All inline styles replaced with CSS classes (found 6 inline styles in tooltips and SVG elements)
- Classes used: `ppc-scenario-*` pattern for scenario interface and data visualization
- Dynamic SVG styling converted to CSS classes
- Tooltips and data labels styled with semantic class names
- All dynamic colors handled with semantic CSS classes

---

## 🟡 CSS CLASSES READY (Components need updating)

These files have CSS classes already created in `components.css`. Just need to replace inline styles with className attributes.

### NONE - All files with ready CSS classes have been completed! ✅

---

## 🔴 TODO: Extract CSS & Update Components (1 file remaining)

This file has NOT been touched yet. Need to extract CSS and update components from scratch.

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
- **Completed:** 10 (91%)
- **CSS Ready:** 0 (0%)
- **Remaining:** 1 (9%)
- **Total Inline Styles:** ~840
- **Extracted So Far:** ~416 (49%)
- **Remaining:** ~424 (51%)

---

## ✅ Build Status

Last successful build: After completing 10 files (2026-01-07)
- All completed files are working correctly
- CSS file size: ~30KB (increased from initial)
- No build errors
- Visual appearance preserved
- Build time: ~18.4s
- Bundle size: index.js = 1,098.85 KB (gzip: 297.63 KB)

---

## 🚀 Next Session Priority

1. **Only:** Extract SlopeMOC.jsx (62 styles)

---

## 📝 Notes

- The `components.css` file is located at: `src/pages/Lessons/Lesson2/components/components.css`
- All CSS follows BEM-like naming: `component-element-modifier`
- Dynamic styles requiring JS logic should use helper functions
- Hover effects have been moved to CSS `:hover` pseudo-classes where possible
- Build command: `npm run build`
- Dev command: `npm run dev`

---

**Last Updated:** 2026-01-07
**Progress:** 10/11 files complete (91%), 1 file remaining
**Next Task:** Extract CSS for SlopeMOC.jsx
