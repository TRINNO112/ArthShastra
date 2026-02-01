# Statistics Lessons - Development Guide

## 📁 Folder Structure

```
src/pages/
├── Lessons/              # Microeconomics Grade 11 (existing)
├── StatsLessons/         # Statistics Grade 11 (this folder)
│   ├── css/
│   │   └── stats-theme.css       # CENTRAL STYLING SYSTEM
│   ├── components/
│   │   └── StatsComingSoon.jsx   # Coming Soon placeholder
│   ├── Lesson1/                  # Introduction to Statistics
│   │   ├── Lesson1.jsx
│   │   └── components/
│   ├── Lesson2/                  # Collection of Data
│   │   └── Lesson2.jsx
│   └── ... (Lesson3-13)
└── MacroLessons/         # Future: Macroeconomics Grade 12
```

---

## 🎨 Design Theme: "Graph Paper"

Statistics uses a unique **Graph Paper / Data Dashboard** aesthetic:

### Color Palette
| Variable | Value | Usage |
|----------|-------|-------|
| `--stats-primary` | `#1a73e8` | Primary blue (headers, buttons) |
| `--stats-secondary` | `#00897b` | Teal accent (highlights) |
| `--stats-bg` | `#f8fafc` | Light background |
| `--stats-grid` | `#e2e8f0` | Grid lines |
| `--stats-text` | `#1e293b` | Main text |
| `--stats-success` | `#10b981` | Correct/positive |
| `--stats-warning` | `#f59e0b` | Warnings |
| `--stats-error` | `#ef4444` | Errors |

### Typography
- **Headings**: `'Inter', sans-serif` - Clean, modern
- **Body**: `'Inter', sans-serif` - Readable
- **Code/Data**: `'JetBrains Mono', monospace` - For formulas & numbers

### Key Design Elements
1. **Graph Paper Background**: Light grid pattern
2. **Data Cards**: White cards with subtle shadows
3. **Formula Boxes**: Monospace font, blue border
4. **Charts**: Clean, minimal with grid lines
5. **Tables**: Striped rows, clear headers

---

## 📦 Components

### Central Components (in `StatsLessons/components/`)

| Component | Purpose |
|-----------|---------|
| `StatsComingSoon.jsx` | Placeholder for undeveloped lessons |
| `StatsHeader.jsx` | Consistent lesson header |
| `StatsCard.jsx` | Content card wrapper |
| `StatsFormula.jsx` | Formula display |
| `StatsTable.jsx` | Data tables |
| `StatsQuiz.jsx` | Quiz component |

### CSS Classes

```css
/* Layout */
.stats-page          /* Main page wrapper */
.stats-container     /* Content container */
.stats-header        /* Lesson header */

/* Cards */
.stats-card          /* Content card */
.stats-card-heading  /* Card heading */
.stats-definition    /* Definition box */
.stats-formula       /* Formula display */
.stats-note          /* Note/highlight box */

/* Tables */
.stats-table         /* Data tables */
.stats-table-container

/* Interactive */
.stats-btn           /* Buttons */
.stats-tab           /* Tab navigation */
.stats-chart         /* Chart containers */
```

---

## 📚 Chapters

| Lesson | Title | Status |
|--------|-------|--------|
| 1 | Introduction to Statistics | 🟢 Develop First |
| 2 | Collection of Data | 🔜 Coming Soon |
| 3 | Organisation of Data | 🔜 Coming Soon |
| 4 | Presentation of Data - Tables | 🔜 Coming Soon |
| 5 | Diagrammatic Presentation | 🔜 Coming Soon |
| 6 | Frequency Diagrams | 🔜 Coming Soon |
| 7 | Arithmetic Line Graphs | 🔜 Coming Soon |
| 8 | Measures of Central Tendency - Mean | 🔜 Coming Soon |
| 9 | Median & Mode | 🔜 Coming Soon |
| 10 | Measures of Dispersion | 🔜 Coming Soon |
| 11 | Correlation | 🔜 Coming Soon |
| 12 | Index Numbers | 🔜 Coming Soon |
| 13 | Use of Statistical Tools | 🔜 Coming Soon |

---

## 🔗 Routing

In `App.jsx`, routes follow pattern:
```jsx
<Route path="/lesson/stats-1" element={<StatsLesson1 />} />
<Route path="/lesson/stats-2" element={<StatsLesson2 />} />
// ... etc
```

---

## ✅ Development Checklist for New Lesson

1. [ ] Create `LessonX/` folder in `StatsLessons/`
2. [ ] Create `LessonX.jsx` main component
3. [ ] Import `stats-theme.css` at top
4. [ ] Create section components in `components/`
5. [ ] Add route in `App.jsx`
6. [ ] Test navigation from Lessons page

---

## 🔄 Context for Future Chats

When continuing development:
1. **Read this README first** for styling context
2. **Use `stats-theme.css`** - never create inline styles for common elements
3. **Follow the Graph Paper theme** - light, clean, data-focused
4. **Import central CSS**: `import '../css/stats-theme.css';`
5. **Use existing components** from `StatsLessons/components/`
