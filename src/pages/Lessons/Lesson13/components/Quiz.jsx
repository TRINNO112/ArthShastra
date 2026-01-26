import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson13Data } from '../../data/lesson13Data';

const Quiz = () => (
    <SharedQuiz
        mcqQuestions={lesson13Data.mcqQuestions}
        tfQuestions={lesson13Data.tfQuestions}
        quizId="lesson13-quiz"
        title="Market Equilibrium Quiz"
    />
);
export default Quiz;
