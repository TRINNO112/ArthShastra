import { lesson2Data } from '../../data/lesson2Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={lesson2Data?.mcqQuestions || []}
            tfQuestions={lesson2Data?.tfQuestions || []}
            quizId="lesson2-quiz"
            title="Lesson 2 Quiz"
            subtitle="Test your knowledge on Central Problems & PPC"
            titleClass="royal-section-title"
        />
    );
};

export default Quiz;
