import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson3McqQuestions, lesson3TfQuestions } from '../../data/lesson3Quiz';

const Quiz = () => {
    return (
        <div className="stats-section">
            <SharedQuiz
                mcqQuestions={lesson3McqQuestions}
                tfQuestions={lesson3TfQuestions}
                quizId="stats-lesson3"
                title="Lesson 3 Assessment"
                subtitle="Organisation of Data"
            />
        </div>
    );
};

export default Quiz;
