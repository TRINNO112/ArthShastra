import { lesson8Data } from '../../data/lesson8Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
  return (
    <SharedQuiz
      mcqQuestions={lesson8Data?.mcqQuestions || []}
      tfQuestions={lesson8Data?.tfQuestions || []}
      quizId="lesson8-quiz"
      title="Cost Analysis Quiz"
      subtitle="Test your understanding of Cost Curves and Relationships"
    />
  );
};

export default Quiz;
