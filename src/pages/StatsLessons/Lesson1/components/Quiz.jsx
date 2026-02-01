/**
 * Quiz.jsx
 * Wrapper component for Lesson 1 Quiz
 */

import SharedQuiz from '../../components/SharedQuiz';
import { lesson1Data } from '../../data/lesson1Quiz';

function Quiz() {
    return <SharedQuiz questions={lesson1Data} />;
}

export default Quiz;
