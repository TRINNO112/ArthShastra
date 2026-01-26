import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson12Data } from '../../data/lesson12Data';

const Quiz = () => (
    <SharedQuiz
        mcqQuestions={lesson12Data.mcqQuestions}
        tfQuestions={lesson12Data.tfQuestions}
        quizId="lesson12-quiz"
        title="Forms of Market Quiz"
    />
);
export default Quiz;
