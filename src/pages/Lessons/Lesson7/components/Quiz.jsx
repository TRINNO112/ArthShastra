import { lesson7Data } from '../../data/lesson7Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={lesson7Data?.mcqQuestions || []}
            tfQuestions={lesson7Data?.tfQuestions || []}
            quizId="lesson7-quiz"
            title="Production Function Quiz"
            subtitle="Test your knowledge on Production concepts"
        />
    );
};

export default Quiz;
