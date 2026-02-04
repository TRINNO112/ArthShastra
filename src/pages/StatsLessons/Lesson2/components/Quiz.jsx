import React from 'react';
import SharedQuiz from '../../components/SharedQuiz';
import { lesson2McqQuestions, lesson2TfQuestions } from '../../data/lesson2Quiz';

const Quiz = () => {
    return (
        <div className="stats-section">
            <SharedQuiz
                mcqQuestions={lesson2McqQuestions}
                tfQuestions={lesson2TfQuestions}
                quizId="stats-lesson2"
                title="Lesson 2 Assessment"
                subtitle="Test your knowledge on Collection of Data"
            />
        </div>
    );
};

export default Quiz;
