/**
 * Quiz.jsx
 * Wrapper component for Lesson 1 Quiz
 */

import SharedQuiz from '../../components/SharedQuiz';
import { lesson1McqQuestions, lesson1TfQuestions } from '../../data/lesson1Quiz';

function Quiz() {
    return (
        <SharedQuiz
            mcqQuestions={lesson1McqQuestions}
            tfQuestions={lesson1TfQuestions}
            quizId="stats-lesson1"
            title="Lesson 1 Assessment"
            subtitle="Test your knowledge on Introduction to Statistics"
        />
    );
}

export default Quiz;
