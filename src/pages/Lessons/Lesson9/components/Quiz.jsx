import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson9Data } from '../../data/lesson9Data';

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={lesson9Data.mcqQuestions}
            tfQuestions={lesson9Data.tfQuestions}
            quizId="lesson9-quiz"
            title="Revenue Concept Quiz"
            subtitle="Test your understanding of TR, AR, and MR"
        />
    );
};

export default Quiz;
