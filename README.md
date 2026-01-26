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
│   │       │   ├── lessons.css  # The 'Mother' CSS file (All shared styles)
│   │       │   └── quiz.css     # Shared Quiz Styles
│   │       │
│   │       ├── components/
│   │       │   └── SharedQuiz.jsx  # The Universal Quiz Logic
│   │       │
│   │       ├── data/        # Quiz Data Files
│   │       │   ├── lesson1Data.js
│   │       │   └── ...
│   │       │
│   │       ├── Lesson1/     # Lesson Module
│   │       │   ├── components/
│   │       │   │   ├── TopicXYZ.jsx
│   │       │   │   └── Quiz.jsx
│   │       │
│   │       └── Lesson[N]/   # Consistent structure
```

---

## 🎨 CSS Styling System

To prevent the "CSS Mess" of the past, we now use a consolidated styling strategy:

1.  **`lessons.css`**: This is the **Single Source of Truth** for all lesson content.
    - Generic Classes: `.content-card`, `.highlight-card`, `.bullet-list`
    - Layouts: `.two-column`, `.flex-wrap`
    - Themes: `.highlight-gold`, `.neon-green`
    - Specifics: Lesson 7 Simulator, Lesson 8 Cost Curves, Lesson 4 Graphs.

2.  **`quiz.css`**: Dedicated styles for the Quiz interface.

3.  **Local CSS**: Individual component CSS files (e.g., inside `Lesson3/components/`) are **DEPRECATED**. Do not import them. Always import `../../css/lessons.css`.

### How to Style New Content
- Use existing classes from `lessons.css` whenever possible.
- If you need a new style, add it to `src/pages/Lessons/css/lessons.css` with a comment indicating the lesson it belongs to.
- **DO NOT** create a new `component.css` in your lesson folder.

---

## 🧩 Shared Component Architecture

### Quizzes
All quizzes are wrappers around `SharedQuiz.jsx`.
- Logic: `src/pages/Lessons/components/SharedQuiz.jsx`
- Data: `src/pages/Lessons/data/lesson[N]Data.js`

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

---

*Documentation updated: Jan 2026 - CSS Architecture Consolidated*
