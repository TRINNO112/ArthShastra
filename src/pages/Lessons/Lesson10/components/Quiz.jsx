import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson10Data } from '../../data/lesson10Data';

const Quiz = () => (
    <SharedQuiz
        mcqQuestions={lesson10Data.mcqQuestions}
        tfQuestions={lesson10Data.tfQuestions}
        quizId="lesson10-quiz"
        title="Producer's Equilibrium Quiz"
    />
);
export default Quiz;
