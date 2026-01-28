import { lesson3Data } from '../../data/lesson3Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = ({ mcqQuestions, tfQuestions, quizId, title, subtitle }) => {
  return (
    <SharedQuiz
      mcqQuestions={mcqQuestions || lesson3Data?.mcqQuestions || []}
      tfQuestions={tfQuestions || lesson3Data?.tfQuestions || []}
      quizId={quizId || "lesson3-quiz"}
      title={title || "Consumer Equilibrium Quiz"}
      subtitle={subtitle || "Test your knowledge on Utility Analysis"}
    />
  );
};

export default Quiz;
