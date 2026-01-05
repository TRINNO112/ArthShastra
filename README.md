# ArthShastra

An interactive economics learning platform built with React and Vite, featuring lessons, quizzes, and progress tracking powered by Firebase.

## Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **Styling**: CSS with CSS Variables (dark theme with neon accents)
- **Icons**: React Icons (FontAwesome)
- **Backend**: Firebase (Authentication, Firestore)
- **Deployment**: GitHub Pages

## Project Structure

```
ArthShastra/
├── src/
│   ├── App.jsx              # Main app with routing
│   ├── App.css              # App-level styles
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global base styles
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx   # Navigation bar component
│   │   │   ├── Navbar.css
│   │   │   └── TopicSnippets.jsx
│   │   └── ui/              # Reusable UI components (future)
│   │
│   ├── context/
│   │   └── AuthContext.jsx  # Authentication state management
│   │
│   ├── services/
│   │   └── firebase.js      # Firebase config & functions
│   │
│   ├── styles/
│   │   └── variables.css    # CSS variables for theming
│   │
│   ├── hooks/               # Custom React hooks (future)
│   │
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── Home.css
│   │   ├── About.jsx        # About page
│   │   ├── About.css
│   │   ├── Lessons.jsx      # Lessons hub/listing
│   │   ├── Lessons.css
│   │   └── Lessons/         # Individual lesson folders
│   │       ├── Lesson1/     # Economics & Economies
│   │       │   ├── Lesson1.jsx
│   │       │   ├── index.js
│   │       │   └── components/
│   │       │       ├── Introduction.jsx
│   │       │       ├── Definitions.jsx
│   │       │       ├── EconomicProblems.jsx
│   │       │       ├── PositiveNormative.jsx
│   │       │       ├── MicroVsMacro.jsx
│   │       │       ├── TypesOfEconomies.jsx
│   │       │       ├── SimpleAndComplexEconomies.jsx
│   │       │       ├── Quiz.jsx
│   │       │       └── index.js
│   │       │
│   │       ├── Lesson2/     # Production, Consumption & Revenue
│   │       │   ├── Lesson2.jsx
│   │       │   ├── index.js
│   │       │   └── components/
│   │       │       ├── Introduction.jsx
│   │       │       ├── CentralProblems.jsx
│   │       │       ├── OpportunityCost.jsx
│   │       │       ├── OpportunityCostCalculator.jsx
│   │       │       ├── PPC.jsx
│   │       │       ├── PPCAssumptions.jsx
│   │       │       ├── PPCScenario.jsx
│   │       │       ├── AttainableUnattainable.jsx
│   │       │       ├── TabularRepresentation.jsx
│   │       │       ├── SlopeMOC.jsx
│   │       │       ├── Quiz.jsx
│   │       │       └── index.js
│   │       │
│   │       ├── Lesson3/     # Empty (future lessons)
│   │       │   └── components/
│   │       │
│   │       ├── css/
│   │       │   └── lessons.css     # Shared lesson styles
│   │       │
│   │       └── data/
│   │           ├── lesson1Data.js  # Lesson 1 quiz questions
│   │           └── lesson2Data.js  # Lesson 2 quiz questions
│   │
│   └── assets/              # Images, static assets
│
├── public/                  # Static public files
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## How Lessons Are Structured

Each lesson follows a modular, component-based architecture:

### Folder Structure for a Lesson

```
Lesson[N]/
├── Lesson[N].jsx            # Main container component
├── index.js                 # Export file
└── components/
    ├── Introduction.jsx     # First section
    ├── [TopicName].jsx      # Additional sections
    ├── [AnotherTopic].jsx
    ├── Quiz.jsx             # Reusable quiz component
    └── index.js             # Component exports
```

### Main Lesson Component Pattern (`Lesson[N].jsx`)

```jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaBookOpen, FaClipboardList } from 'react-icons/fa';
import { Section1, Section2, Quiz } from './components';
import { lesson[N]Data } from '../data/lesson[N]Data';
import { logLessonProgress } from '../../../services/firebase';
import '../css/lessons.css';

const sections = [
  { id: 'intro', name: 'Introduction', icon: FaBookOpen },
  { id: 'section2', name: 'Section Name', icon: FaBookOpen },
  { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
];

function Lesson[N]() {
  const [activeSection, setActiveSection] = useState('intro');
  const [startTime] = useState(() => Date.now());
  const lessonId = 'micro11-[N]';

  // Track time spent and completion
  useEffect(() => {
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000 / 60);
      const completed = activeSection === 'quiz';
      if (timeSpent > 0) {
        logLessonProgress(lessonId, timeSpent, completed);
      }
    };
  }, [startTime, lessonId, activeSection]);

  const currentIndex = sections.findIndex(s => s.id === activeSection);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'intro': return <Section1 />;
      case 'section2': return <Section2 />;
      case 'quiz': return <Quiz mcqQuestions={lesson[N]Data.mcqQuestions} tfQuestions={lesson[N]Data.tfQuestions} />;
      default: return <Section1 />;
    }
  };

  return (
    <div className="lesson-page">
      {/* Header with back link */}
      <header className="lesson-header">
        <Link to="/lessons" className="back-link">
          <FaArrowLeft /> Back to Lessons
        </Link>
      </header>

      {/* Navigation */}
      <nav className="lesson-nav">
        {sections.map((section, index) => (
          <button
            key={section.id}
            className={`nav-item ${activeSection === section.id ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <section.icon />
            <span>{section.name}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="lesson-content">
        {renderActiveSection()}
      </main>

      {/* Footer Navigation */}
      <footer className="lesson-footer">
        <button disabled={currentIndex === 0} onClick={() => setActiveSection(sections[currentIndex - 1].id)}>
          Previous
        </button>
        <div className="progress-dots">
          {sections.map((_, i) => (
            <span key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} />
          ))}
        </div>
        <button disabled={currentIndex === sections.length - 1} onClick={() => setActiveSection(sections[currentIndex + 1].id)}>
          Next
        </button>
      </footer>
    </div>
  );
}

export default Lesson[N];
```

### Section Component Pattern

```jsx
import { FaIcon } from 'react-icons/fa';

function SectionName() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter X</span>
        <h2 className="section-title-lesson">Section Title</h2>
        <p className="section-subtitle-lesson">Subtitle description</p>
      </div>

      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p>Main content text...</p>
        </div>
      </div>

      {/* Highlighted cards */}
      <div className="highlight-card gold">
        <div className="highlight-icon"><FaIcon /></div>
        <div className="highlight-content">
          <h3>Key Point Title</h3>
          <p>Explanation...</p>
        </div>
      </div>
    </section>
  );
}

export default SectionName;
```

## How to Add a New Lesson

### Step 1: Create Lesson Folder Structure

Create `src/pages/Lessons/Lesson3/` with:
```
Lesson3/
├── Lesson3.jsx
├── index.js
└── components/
    ├── Introduction.jsx
    ├── Topic1.jsx
    ├── Topic2.jsx
    ├── Quiz.jsx
    └── index.js
```

### Step 2: Create Lesson Data File

Create `src/pages/Lessons/data/lesson3Data.js`:

```javascript
export const lesson3Data = {
  mcqQuestions: [
    {
      id: 1,
      question: "Question text?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correct: 0  // Index of correct answer (0-3)
    }
    // Add more MCQs...
  ],
  tfQuestions: [
    {
      id: 1,
      question: "Statement to evaluate?",
      correct: true  // true or false
    }
    // Add more T/F questions...
  ]
};
```

### Step 3: Create Section Components

Create each section component in `components/` folder following the pattern above.

### Step 4: Export Components

**`src/pages/Lessons/Lesson3/components/index.js`**:
```javascript
export { default as Introduction } from './Introduction';
export { default as Topic1 } from './Topic1';
export { default as Topic2 } from './Topic2';
export { default as Quiz } from './Quiz';
```

**`src/pages/Lessons/Lesson3/index.js`**:
```javascript
export { default } from './Lesson3';
```

### Step 5: Add to Routing

Edit `src/App.jsx`:

```jsx
import Lesson3 from './pages/Lessons/Lesson3';

<Route path="/lesson/micro11-3" element={<Lesson3 />} />
```

### Step 6: Add to Lessons Hub

Edit `src/pages/Lessons.jsx`, add to `lessonsData.micro11.chapters`:

```javascript
{
  id: 'micro11-3',
  title: 'Lesson Title',
  description: 'Lesson description',
  duration: '35 min',
  questions: 15,
  completed: false,
  difficulty: 'Medium'
}
```

## CSS Styling System

### Available CSS Classes

**Section Layout:**
- `.lesson-section` - Main section container
- `.section-header-lesson` - Section header
- `.section-title-lesson` - Section title
- `.section-subtitle-lesson` - Section subtitle
- `.section-badge-lesson` - Chapter badge

**Cards:**
- `.content-card` - Main content container with glow effect
- `.card-glow` - Glow effect (child of content-card)
- `.card-content` - Content area (child of content-card)
- `.highlight-card` - Highlighted info card
  - `.gold` - Gold accent
  - `.green` - Green accent
  - `.cyan` - Cyan accent

**Text Styling:**
- `.highlight-gold`, `.highlight-green`, `.highlight-cyan` - Colored text
- `.quote-box` - Blockquote container
- `.bullet-list` - Styled list
- `.term` - Key term definition
- `.note-text` - Note/warning text

### CSS Variables

Defined in `src/styles/variables.css`:
```css
:root {
  --bg-primary: #0a0a0f
  --bg-secondary: #1a1a2e
  --neon-gold: #ffd700
  --neon-green: #00ff88
  --neon-cyan: #00d9ff
  --text-primary: #ffffff
  --text-secondary: #a0a0b8
  --shadow-glow: 0 0 30px rgba(255, 215, 0, 0.3)
  --border-radius: 16px
}
```

## Firebase Integration

### Key Functions (`src/services/firebase.js`)

**Authentication:**
- `signInWithGoogle()` - Google sign-in
- `signOutUser()` - Sign out
- `onAuthChange(callback)` - Listen to auth state changes
- `getUserId()` - Get current user ID

**Progress Tracking:**
- `logLessonProgress(lessonId, timeSpent, completed)` - Log lesson completion
- `submitDetailedQuizAttempt(quizId, attemptData)` - Submit quiz results
- `updateUserStats(userId, statsUpdate)` - Update user statistics

### Firestore Collections

**`users`** - User profiles and stats
**`quiz-history`** - Quiz attempt records

## Available Icons

Import from `react-icons/fa`:
- `FaArrowLeft` - Back navigation
- `FaBookOpen` - Introduction sections
- `FaLightbulb` - Definitions/tips
- `FaExclamationTriangle` - Problems/warnings
- `FaBalanceScale` - Comparisons
- `FaGlobe` - Global/economy topics
- `FaClipboardList` - Quiz
- `FaChevronRight`, `FaChevronLeft` - Navigation arrows
- `FaFlask` - Analysis/experiments
- `FaLink` - Connections

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Route Naming Convention

- **Microeconomics Class 11**: `/lesson/micro11-[1-13]`
- **Macroeconomics Class 12**: `/lesson/macro-[1-14]` (planned)
- **Statistics Class 11**: `/lesson/stats-[1-13]` (planned)
- **Indian Economy Class 12**: `/lesson/indian-[1-10]` (planned)
