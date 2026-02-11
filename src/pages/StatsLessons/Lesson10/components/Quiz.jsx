import SharedQuiz from '../../components/SharedQuiz';

const mcqQuestions = [
    { id: 'l10-mcq-1', question: "Which measure of dispersion considers only two extreme values?", options: ["Mean Deviation", "Standard Deviation", "Range", "Quartile Deviation"], correct: 2 },
    { id: 'l10-mcq-2', question: "Quartile Deviation is also known as:", options: ["Full-Interquartile Range", "Semi-Interquartile Range", "Standard Range", "Mean Range"], correct: 1 },
    { id: 'l10-mcq-3', question: "In Mean Deviation, we use absolute values (|  |) because:", options: ["Negative deviations look ugly", "Sum of deviations from Mean is always zero", "It makes calculation harder", "It is a convention only"], correct: 1 },
    { id: 'l10-mcq-4', question: "Standard Deviation is the square root of:", options: ["Mean Deviation", "Variance", "Range", "Quartile Deviation"], correct: 1 },
    { id: 'l10-mcq-5', question: "Coefficient of Variation (C.V.) is used for:", options: ["Finding the average", "Comparing variability of two series with different units/means", "Computing Mode", "Drawing graphs"], correct: 1 },
    { id: 'l10-mcq-6', question: "Which measure of dispersion is considered the most reliable and widely used?", options: ["Range", "Quartile Deviation", "Mean Deviation", "Standard Deviation"], correct: 3 },
    { id: 'l10-mcq-7', question: "A lower value of C.V. indicates:", options: ["Higher dispersion", "More consistency", "Less consistency", "Higher Mean"], correct: 1 },
    { id: 'l10-mcq-8', question: "The formula for Quartile Deviation is:", options: ["Q3 + Q1", "(Q3 - Q1) / 2", "Q3 × Q1", "(Q3 + Q1) / 2"], correct: 1 },
    { id: 'l10-mcq-9', question: "If Standard Deviation of a series is 0, it means:", options: ["All values are negative", "All values are the same", "Data has extreme values", "Mean is zero"], correct: 1 },
    { id: 'l10-mcq-10', question: "In the Step Deviation method for S.D., 'h' represents:", options: ["Assumed Mean", "Number of items", "Class width", "Deviation"], correct: 2 },
];

const tfQuestions = [
    { id: 'l10-tf-1', question: "Range is the most reliable measure of dispersion.", correct: false },
    { id: 'l10-tf-2', question: "Variance is the square of Standard Deviation.", correct: true },
    { id: 'l10-tf-3', question: "Mean Deviation can be calculated from both Mean and Median.", correct: true },
    { id: 'l10-tf-4', question: "Coefficient of Variation has the same units as the original data.", correct: false },
    { id: 'l10-tf-5', question: "Standard Deviation is always a non-negative value.", correct: true },
];

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-lesson10-quiz"
            title="Measures of Dispersion Quiz"
            subtitle="Test your knowledge of Range, Q.D., M.D., S.D. & C.V."
        />
    );
};

export default Quiz;
