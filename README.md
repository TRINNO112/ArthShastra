# ArthShastra

An interactive economics learning platform built with React and Vite, featuring lessons, quizzes, and progress tracking powered by Firebase.

## 🌟 Tech Stack

- **Frontend**: React 18, Vite
- **Routing**: React Router v6
- **Styling**: CSS with CSS Variables (dark theme with neon accents)
- **Icons**: React Icons (FontAwesome)
- **Backend**: Firebase (Authentication, Firestore)
- **Deployment**: GitHub Pages

---

## 🏗️ Project Architecture (The "Clean" Structure)

This project follows a component-based architecture where each "Lesson" is a self-contained module, BUT they share critical infrastructure to avoid duplication.

### Directory Map

```
ArthShastra/
├── src/
│   ├── components/          # Global UI components
│   ├── pages/
│   │   ├── Lessons.jsx      # Main Lessons Hub
│   │   │
│   │   └── Lessons/         # The Core Content
│   │       ├── css/
│   │       │   ├── lessons.css  # Shared Lesson Styles
│   │       │   └── quiz.css     # Shared Quiz Styles (Single Source of Truth)
│   │       │
│   │       ├── components/
│   │       │   └── SharedQuiz.jsx  # The Universal Quiz Logic
│   │       │
│   │       ├── data/        # Quiz Data Files (JSON-like objects)
│   │       │   ├── lesson1Data.js
│   │       │   └── ...
│   │       │
│   │       ├── Lesson1/     # Lesson Module
│   │       │   ├── Lesson1.jsx        # Main Layout
│   │       │   ├── index.js           # Public Export
│   │       │   └── components/
│   │       │       ├── Introduction.jsx # Specific Content
│   │       │       ├── TopicXYZ.jsx
│   │       │       └── Quiz.jsx         # Wrapper for SharedQuiz
│   │       │
│   │       └── Lesson[N]/   # Same structure repeats...
```

---

## 🧩 Shared Component Architecture

To prevent code duplication and "yellow box" visual bugs, we use a **Shared Quiz** system.

### How Quizzes Work
1.  **Logic**: All quiz logic (timer, analytics, scoring) lives in **`src/pages/Lessons/components/SharedQuiz.jsx`**.
2.  **Style**: All quiz styling lives in **`src/pages/Lessons/css/quiz.css`**.
3.  **Data**: Each lesson has a data file in `src/pages/Lessons/data/lesson[N]Data.js`.
4.  **Usage**: Inside each Lesson folder, the `Quiz.jsx` component is just a thin wrapper.

**Example of `Lesson8/components/Quiz.jsx`:**
```javascript
import { lesson8Data } from '../../data/lesson8Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={lesson8Data.mcqQuestions}
            tfQuestions={lesson8Data.tfQuestions}
            quizId="lesson8-quiz"
            title="Cost Analysis Quiz"
            subtitle="Test your cost curves knowledge"
        />
    );
};
```

**Why this is better:**
- If you want to change the timer logic, you edit **one file**.
- If you want to fix a CSS bug, you edit **one file**.
- No more "importing from Lesson 3". Every lesson is equal.

---

## 🎨 CSS Styling System

### Main Files
- **`variables.css`**: Color palette (`--neon-gold`, `--bg-primary`).
- **`lessons.css`**: Layout for sections, cards, text, and headers.
- **`quiz.css`**: Styles for the quiz interface, results, and progress bars.

### Common Classes
- `.content-card`: Glassmorphic card container.
- `.highlight-text`: Gold text.
- `.neon-green`, `.neon-cyan`: Helper texts.
- `.section-header-lesson`: Standard center-aligned header.

---

## 📝 How to Add a New Lesson

1.  **Create Folder**: `src/pages/Lessons/Lesson[N]/`
2.  **Add Data**: Create `src/pages/Lessons/data/lesson[N]Data.js` with `mcqQuestions` and `tfQuestions`.
3.  **Add Components**: Create your content components (`Topic1.jsx`, etc.).
4.  **Add Quiz**: Copy `Quiz.jsx` from any other lesson and update the import to point to your new data file.
    ```javascript
    import { lesson[N]Data } from '../../data/lesson[N]Data';
    // ... rest is standard
    ```
5.  **Export**: Update `components/index.js` to export all components.
6.  **Route**: Add the route in `App.jsx` and the card in `Lessons.jsx`.

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

---

*Documentation updated: Jan 2026*
