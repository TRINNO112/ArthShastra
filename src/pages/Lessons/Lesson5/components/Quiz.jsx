import { lesson5Data } from '../../data/lesson5Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={lesson5Data?.mcqQuestions || []}
            tfQuestions={lesson5Data?.tfQuestions || []}
            quizId="lesson5-quiz"
            title="Theory of Demand Quiz"
            subtitle="Test your understanding of Demand & Elasticity"
        />
    );
};

export default Quiz;
