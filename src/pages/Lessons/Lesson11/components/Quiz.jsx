import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson11Data } from '../../data/lesson11Data';

const Quiz = () => (
    <SharedQuiz
        mcqQuestions={lesson11Data.mcqQuestions}
        tfQuestions={lesson11Data.tfQuestions}
        quizId="lesson11-quiz"
        title="Theory of Supply Quiz"
    />
);
export default Quiz;
