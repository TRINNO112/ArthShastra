import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson4McqQuestions, lesson4TfQuestions } from '../../data/lesson4Quiz';

const Quiz = () => {
    return (
        <div className="stats-section">
            <SharedQuiz
                mcqQuestions={lesson4McqQuestions}
                tfQuestions={lesson4TfQuestions}
                quizId="stats-lesson4"
                title="Lesson 4 Assessment"
                subtitle="Presentation of Data: Tables"
            />
        </div>
    );
};

export default Quiz;
