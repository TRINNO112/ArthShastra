# ArthShastra - Economics Learning Platform

An interactive learning platform for Class 12 Economics (CBSE/ISC) built with React + Vite + Firebase.

---

## Project Overview

**ArthShastra** (meaning "Science of Wealth" in Sanskrit) is an educational platform designed to help Class 12 Commerce students master Microeconomics and Macroeconomics through interactive lessons, quizzes, and progress tracking.

### Features
- Interactive lessons with explanations in Hindi/Hinglish
- Topic-wise quizzes with instant feedback
- Progress tracking with Firebase
- Google Authentication + Anonymous mode
- Mobile-responsive neon-themed UI
- Personal dashboard with statistics

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework |
| **Vite** | Build tool & dev server |
| **React Router v6** | Client-side routing |
| **Firebase** | Auth, Firestore database, Hosting |
| **React Icons** | Icon library |
| **CSS Variables** | Theming & styling |

---

## Project Structure

```
ArthShastra/
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/
│   │   ├── common/         # Shared components (Navbar, Footer, Toast)
│   │   └── ui/             # Reusable UI components (Button, Card, Modal)
│   ├── context/
│   │   └── AuthContext.jsx # Authentication state management
│   ├── data/
│   │   ├── microeconomics.json  # Lesson content for Micro
│   │   └── macroeconomics.json  # Lesson content for Macro
│   ├── hooks/
│   │   ├── useAuth.js      # Authentication hook (exported from context)
│   │   ├── useProgress.js  # Progress tracking hook
│   │   └── useQuiz.js      # Quiz state management hook
│   ├── pages/
│   │   ├── Home.jsx        # Landing page
│   │   ├── About.jsx       # About page
│   │   ├── Lessons.jsx     # Lessons listing
│   │   ├── Lesson.jsx      # Individual lesson view
│   │   ├── Quiz.jsx        # Quiz interface
│   │   ├── Profile.jsx     # User profile
│   │   └── Progress.jsx    # Progress dashboard
│   ├── services/
│   │   └── firebase.js     # Firebase configuration & functions
│   ├── styles/
│   │   └── variables.css   # CSS variables & global styles
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Base styles
├── .env                    # Environment variables (Firebase keys)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Key Files Explained

### 1. `src/services/firebase.js`
Central Firebase configuration and all database operations.

**Exports:**
- `auth` - Firebase auth instance
- `db` - Firestore instance
- `getUserId()` - Get current user ID (auth or anonymous)
- `signInWithGoogle()` - Google sign-in
- `signOutUser()` - Sign out
- `onAuthChange(callback)` - Auth state listener
- `submitLessonAttempt()` - Save lesson progress
- `loadLessonProgress()` - Load previous answers
- `submitQuizAttempt()` - Save quiz results
- `getOverallStats()` - Get user's overall statistics

### 2. `src/context/AuthContext.jsx`
React Context for authentication state management.

**Provides:**
- `user` - Current user object
- `loading` - Auth loading state
- `error` - Auth error if any
- `login()` - Trigger Google sign-in
- `logout()` - Sign out user
- `isAuthenticated` - Boolean for auth status

**Usage:**
```jsx
import { useAuth } from './context/AuthContext';

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
}
```

### 3. `src/styles/variables.css`
All CSS custom properties (variables) for consistent theming.

**Key Variables:**
```css
--bg-primary: #0a0a0f        /* Main background */
--neon-gold: #ffd700         /* Primary accent (Economics theme) */
--neon-green: #00ff88        /* Secondary accent */
--text-primary: #ffffff      /* Main text */
--text-secondary: #a0a0b8    /* Muted text */
--border-radius: 16px        /* Standard border radius */
--shadow-glow: 0 0 30px ...  /* Neon glow effect */
```

---

## Firebase Collections

### `users`
Stores user profile information.
```javascript
{
  name: "User Name",
  email: "user@email.com",
  photoURL: "https://...",
  lastLogin: Timestamp
}
```

### `lesson-progress`
Document ID: `{userId}_lesson_{lessonId}`
```javascript
{
  userId: "abc123",
  lessonId: "micro-1",
  answers: { q1: "a", q2: "b", ... },
  score: 8,
  totalQuestions: 10,
  percentage: 80,
  timestamp: Timestamp,
  attempts: 3
}
```

### `quiz-progress`
Document ID: `{userId}_quiz_{quizId}`
```javascript
{
  userId: "abc123",
  quizId: "micro-chapter-1",
  answers: [...],
  score: 15,
  totalQuestions: 20,
  percentage: 75,
  timeSpent: 450, // seconds
  timestamp: Timestamp,
  attempts: 2
}
```

### `overall-progress`
Document ID: `{userId}`
```javascript
{
  lessons: {
    completed: 5,
    totalScore: 42,
    totalQuestions: 50,
    percentage: 84
  },
  quizzes: {
    completed: 3,
    totalScore: 55,
    totalQuestions: 60,
    percentage: 91
  },
  lastUpdated: Timestamp
}
```

---

## Getting Started

### 1. Install Dependencies
```bash
cd ArthShastra
npm install
```

### 2. Configure Firebase
Create a `.env` file in root:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Update `src/services/firebase.js` to use environment variables:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // ... etc
};
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

---

## Content Structure

### Microeconomics (10 Units)
1. Introduction to Microeconomics
2. Consumer Equilibrium - Utility Approach
3. Consumer Equilibrium - Indifference Curve
4. Demand & Law of Demand
5. Elasticity of Demand
6. Production Function
7. Cost & Revenue
8. Producer's Equilibrium
9. Supply & Elasticity of Supply
10. Market Forms & Price Determination

### Macroeconomics (10 Units)
1. Introduction to Macroeconomics
2. National Income - Basic Concepts
3. Circular Flow of Income
4. Methods of Calculating National Income
5. Money & Banking
6. Commercial Banks & Credit Creation
7. Central Bank & Monetary Policy
8. Government Budget
9. Balance of Payments
10. Foreign Exchange Rate

---

## Component Guide

### Creating a New Page
```jsx
// src/pages/NewPage.jsx
import { useAuth } from '../context/AuthContext';
import '../styles/NewPage.css';

function NewPage() {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Welcome, {user?.name}</h1>
    </div>
  );
}

export default NewPage;
```

### Adding to Router
```jsx
// In App.jsx
import NewPage from './pages/NewPage';

// Inside Routes
<Route path="/new-page" element={<NewPage />} />
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Deployment

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

---

## Contributing

1. Create a new branch for features
2. Follow existing code style
3. Test thoroughly before committing
4. Write meaningful commit messages

---

## License

This project is for educational purposes.

---

## Author

Created by Amit Pathak

---

## Related Projects

- [AccountsWizard](../AccountsWIzard) - Accounting learning platform for Class 11-12
