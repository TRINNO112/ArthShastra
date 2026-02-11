import SharedQuiz from '../../components/SharedQuiz';

const mcqQuestions = [
    { id: 'l9-mcq-1', question: "Median divides a data set into:", options: ["Three equal parts", "Two equal halves", "Four equal parts", "Unequal parts"], correct: 1 },
    { id: 'l9-mcq-2', question: "For an odd number of observations, the Median is:", options: ["The average of two middle values", "The middle-most value", "The largest value", "The smallest value"], correct: 1 },
    { id: 'l9-mcq-3', question: "For an even number of observations (N), the Median is the average of:", options: ["(N/2)th and (N/2+1)th items", "1st and Nth items", "(N-1)th and (N+1)th items", "All items"], correct: 0 },
    { id: 'l9-mcq-4', question: "Mode of a data set is the value that:", options: ["Occurs least frequently", "Occurs most frequently", "Is in the middle", "Is the average"], correct: 1 },
    { id: 'l9-mcq-5', question: "A distribution having two modes is called:", options: ["Unimodal", "Bimodal", "Trimodal", "Multimodal"], correct: 1 },
    { id: 'l9-mcq-6', question: "The empirical relation between Mean, Median and Mode is:", options: ["Mode = 3 Median - 2 Mean", "Mode = 2 Median - 3 Mean", "Mode = Mean - Median", "Mode = Mean + Median"], correct: 0 },
    { id: 'l9-mcq-7', question: "In a continuous frequency distribution, Median is found using:", options: ["Direct counting", "Interpolation formula", "Grouping method", "Inspection"], correct: 1 },
    { id: 'l9-mcq-8', question: "The Modal class is determined by:", options: ["The class with smallest frequency", "The class with highest frequency", "The first class", "The last class"], correct: 1 },
    { id: 'l9-mcq-9', question: "Which measure of central tendency can be located graphically using Ogives?", options: ["Mean", "Mode", "Median", "Harmonic Mean"], correct: 2 },
    { id: 'l9-mcq-10', question: "Median is NOT affected by:", options: ["Number of observations", "Arrangement of data", "Extreme values", "Middle values"], correct: 2 },
];

const tfQuestions = [
    { id: 'l9-tf-1', question: "Median requires data to be arranged in ascending or descending order.", correct: true },
    { id: 'l9-tf-2', question: "Mode can be determined for qualitative (non-numerical) data.", correct: true },
    { id: 'l9-tf-3', question: "A data set always has exactly one Mode.", correct: false },
    { id: 'l9-tf-4', question: "Median is the best measure of central tendency when data has extreme outliers.", correct: true },
    { id: 'l9-tf-5', question: "For a symmetrical distribution, Mean = Median = Mode.", correct: true },
];

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-lesson9-quiz"
            title="Median & Mode Quiz"
            subtitle="Test your understanding of Median, Mode & their Applications"
        />
    );
};

export default Quiz;
