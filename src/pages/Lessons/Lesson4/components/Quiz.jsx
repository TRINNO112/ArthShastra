import { lesson4Data } from '../../data/lesson4Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={lesson4Data?.mcqQuestions || []}
            tfQuestions={lesson4Data?.tfQuestions || []}
            quizId="lesson4-quiz"
            title="Indifference Curve Quiz"
            subtitle="Test your knowledge on Ordinal Utility Analysis"
        />
    );
};

export default Quiz;
