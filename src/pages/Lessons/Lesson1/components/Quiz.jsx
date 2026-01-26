import { lesson1Data } from '../../data/lesson1Data';
import SharedQuiz from '../../components/SharedQuiz';

const Quiz = () => {
  return (
    <SharedQuiz
      mcqQuestions={lesson1Data?.mcqQuestions || []}
      tfQuestions={lesson1Data?.tfQuestions || []}
      quizId="lesson1-quiz"
      title="Lesson 1 Quiz"
      subtitle="Test your knowledge on Introduction to Microeconomics"
    />
  );
};

export default Quiz;
