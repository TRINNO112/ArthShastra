import SharedQuiz from '../../components/SharedQuiz';

const mcqQuestions = [
    { id: 'l8-mcq-1', question: "Arithmetic Mean is a measure of:", options: ["Dispersion", "Central Tendency", "Correlation", "Skewness"], correct: 1 },
    { id: 'l8-mcq-2', question: "Which symbol denotes Arithmetic Mean?", options: ["Σ", "N", "X̄ (X-bar)", "Md"], correct: 2 },
    { id: 'l8-mcq-3', question: "The sum of deviations of observations from their Arithmetic Mean is always:", options: ["Positive", "Negative", "Zero", "One"], correct: 2 },
    { id: 'l8-mcq-4', question: "The formula for Direct Method (Individual Series) is:", options: ["ΣX / N", "A + Σd / N", "Σf X / N", "None"], correct: 0 },
    { id: 'l8-mcq-5', question: "In calculations, 'A' in the short-cut method stands for:", options: ["Actual Mean", "Assumed Mean", "Average", "Area"], correct: 1 },
    { id: 'l8-mcq-6', question: "Which average is affected most by extreme values?", options: ["Median", "Mode", "Arithmetic Mean", "None"], correct: 2 },
    { id: 'l8-mcq-7', question: "If every observation is increased by 5, the new Mean will:", options: ["Increase by 5", "Decrease by 5", "Remain same", "Increase by 5 times"], correct: 0 },
    { id: 'l8-mcq-8', question: "Combined mean of two groups can be calculated if we know:", options: ["Only Means", "Only Numbers", "Means and Numbers of both groups", "None"], correct: 2 },
    { id: 'l8-mcq-9', question: "Weighted Mean is used when:", options: ["All items are equally important", "Items have different importance", "Data is small", "Data is large"], correct: 1 },
    { id: 'l8-mcq-10', question: "Step-deviation method makes calculation:", options: ["More complex", "Simpler and faster", "Less accurate", "Impossible"], correct: 1 },
];

const tfQuestions = [
    { id: 'l8-tf-1', question: "Arithmetic Mean can be calculated for qualitative data such as beauty or intelligence.", correct: false },
    { id: 'l8-tf-2', question: "Arithmetic Mean is based on all observations in the data.", correct: true },
    { id: 'l8-tf-3', question: "For open-ended frequency distributions, Arithmetic Mean can be computed easily.", correct: false },
    { id: 'l8-tf-4', question: "If the Mean of 5 numbers is 10 and one number (10) is removed, the Mean of remaining 4 numbers is still 10.", correct: true },
    { id: 'l8-tf-5', question: "The mid-point of the class interval 20-30 is 25.", correct: true },
];

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-lesson8-quiz"
            title="Arithmetic Mean Quiz"
            subtitle="Test your understanding of Mean & its Methods"
        />
    );
};

export default Quiz;
