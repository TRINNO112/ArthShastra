# ArthShastra AI Coding Guidelines

## Project Overview
ArthShastra is an interactive economics learning platform built with React 18 + Vite, featuring modular lesson components, Firebase authentication, and comprehensive progress tracking. The app follows VK Ohri's Grade 11 economics textbook structure.

## Architecture Patterns

### Lesson Component Structure
Each lesson follows a consistent pattern in `src/pages/Lessons/Lesson[N]/`:
- **Main Component** (`Lesson[N].jsx`): Manages section navigation, progress tracking, and Firebase logging
- **Section Components** (`components/`): Modular content sections (Introduction, Definitions, Quiz, etc.)
- **Data File** (`../data/lesson[N]Data.js`): Contains MCQ and TF quiz questions
- **Export File** (`index.js`): Component exports

**Example Lesson Structure:**
```
Lesson1/
├── Lesson1.jsx          # Main container with navigation
├── index.js            # export { default } from './Lesson1'
└── components/
    ├── Introduction.jsx
    ├── Definitions.jsx
    ├── Quiz.jsx        # Reusable quiz component
    └── index.js        # Named exports for all sections
```

### Section Component Pattern
All section components follow this structure:
```jsx
function SectionName() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter X</span>
        <h2 className="section-title-lesson">Section Title</h2>
        <p className="section-subtitle-lesson">Description</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p>Main content...</p>
        </div>
      </div>

      <div className="highlight-card gold">
        <div className="highlight-icon"><FaIcon /></div>
        <div className="highlight-content">
          <h3>Key Point</h3>
          <p>Explanation...</p>
        </div>
      </div>
    </section>
  );
}
```

### Quiz Data Structure
Quiz questions stored in `src/pages/Lessons/data/lesson[N]Data.js`:
```javascript
export const lesson1Data = {
  mcqQuestions: [
    {
      id: 1,
      question: "Question text?",
      options: ["A", "B", "C", "D"],
      correct: 0  // Index of correct answer
    }
  ],
  tfQuestions: [
    {
      id: 1,
      question: "Statement?",
      correct: true
    }
  ]
};
```

## Styling System

### CSS Variables (src/styles/variables.css)
```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #1a1a2e;
  --neon-gold: #ffd700;
  --neon-green: #00ff88;
  --neon-cyan: #00d9ff;
  --text-primary: #ffffff;
  --text-secondary: #a0a0b8;
}
```

### Key CSS Classes
- `.lesson-section` - Main section container
- `.content-card` - Primary content with glow effect
- `.highlight-card` - Key points (`.gold`, `.green`, `.cyan` variants)
- `.highlight-gold/green/cyan` - Colored text spans
- `.term` - Key term definitions
- `.bullet-list` - Styled lists
- `.quote-box` - Blockquotes

## Firebase Integration

### Authentication Flow
- Google Sign-In via `signInWithGoogle()`
- Anonymous users get `anon_[timestamp]` IDs
- User data stored in `users` collection with stats and profile

### Progress Tracking
```javascript
// Log lesson completion
logLessonProgress(lessonId, timeSpentMinutes, completed)

// Submit quiz results
submitDetailedQuizAttempt(quizId, {
  totalScore,
  totalQuestions,
  totalTimeSpent,
  questionAnalytics
})
```

### Collections
- `users` - User profiles, stats, recent activity
- `quiz-history` - Detailed quiz attempt records

## Routing & Navigation

### Route Structure
- `/` - Home page
- `/lessons` - Lessons hub
- `/lesson/micro11-[1-13]` - Microeconomics lessons
- `/about` - About page

### Adding New Lessons
1. Create lesson folder structure
2. Add route in `src/App.jsx`
3. Update lessons data in `src/pages/Lessons.jsx`
4. Create quiz data file

## Development Workflow

### Build Commands
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build
npm run deploy   # Deploy to GitHub Pages
```

### Key Dependencies
- `react-router-dom` v7 - Client-side routing
- `firebase` v12 - Auth & Firestore
- `react-icons/fa` - FontAwesome icons
- `d3` & `recharts` - Data visualization
- `gh-pages` - GitHub Pages deployment

## Component Communication

### Props Passing
- Quiz components receive `mcqQuestions` and `tfQuestions` props
- Section components are stateless, receive no props
- Main lesson components manage all state (activeSection, progress)

### State Management
- `AuthContext` - Global user authentication state
- Local component state for UI interactions
- `localStorage` - Persist section progress (`lesson[N]-activeSection`)

## File Organization

### Import Patterns
```jsx
// Firebase services
import { logLessonProgress } from '../../../services/firebase';

// Component imports
import { Introduction, Definitions } from './components';

// Data imports
import { lesson1Data } from '../data/lesson1Data';
```

### Export Patterns
```javascript
// Main component export
export default Lesson1;

// Named exports for sections
export { default as Introduction } from './Introduction';
export { default as Quiz } from './Quiz';
```

## Performance Considerations

### Code Splitting
- Manual chunks in `vite.config.js` for vendor libraries
- Lazy loading not implemented (small app size)

### Firebase Optimization
- Offline persistence enabled
- Batched writes for stats updates
- Server timestamps for consistency

## Deployment

### GitHub Pages Setup
- `base: '/ArthShastra/'` in vite.config.js
- `homepage` field in package.json
- `npm run deploy` uses gh-pages package

### Build Optimization
- SWC compiler (faster than Babel)
- ES2015 target
- CSS code splitting enabled</content>
<parameter name="filePath">c:\Users\Amit Pathak\Documents\ArthShastra\.github\copilot-instructions.md