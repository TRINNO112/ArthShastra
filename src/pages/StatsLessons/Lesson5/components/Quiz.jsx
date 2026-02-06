import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson5McqQuestions, lesson5TfQuestions } from '../../data/lesson5Quiz';

const Quiz = () => {
    return (
        <div className="stats-section">
            <SharedQuiz
                mcqQuestions={lesson5McqQuestions}
                tfQuestions={lesson5TfQuestions}
                quizId="stats-lesson5"
                title="Lesson 5 Assessment"
                subtitle="Diagrammatic Presentation"
            />
        </div>
    );
};

export default Quiz;
