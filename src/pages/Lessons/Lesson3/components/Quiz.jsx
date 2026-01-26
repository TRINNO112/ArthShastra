import { lesson3Data } from '../../data/lesson3Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
  return (
    <SharedQuiz
      mcqQuestions={lesson3Data?.mcqQuestions || []}
      tfQuestions={lesson3Data?.tfQuestions || []}
      quizId="lesson3-quiz"
      title="Consumer Equilibrium Quiz"
      subtitle="Test your knowledge on Utility Analysis"
    />
  );
};

export default Quiz;
