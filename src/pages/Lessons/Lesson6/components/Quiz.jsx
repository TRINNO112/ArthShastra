import { lesson6Data } from '../../data/lesson6Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
  return (
    <SharedQuiz
      mcqQuestions={lesson6Data?.mcqQuestions || []}
      tfQuestions={lesson6Data?.tfQuestions || []}
      quizId="lesson6-quiz"
      title="Elasticity of Demand Quiz"
      subtitle="Check your understanding of Price Elasticity concepts"
    />
  );
};

export default Quiz;
