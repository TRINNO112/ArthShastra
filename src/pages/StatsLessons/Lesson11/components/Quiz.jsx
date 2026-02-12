import React from 'react';
import SharedQuiz from '../../../Lessons/components/SharedQuiz';

const Quiz = () => {
    // 10 MCQ Questions
    const mcqQuestions = [
        {
            id: 'cor1',
            question: "When two variables change in the same direction, the correlation is said to be:",
            options: ["Negative", "Positive", "Zero", "Linear"],
            correct: 1,
            explanation: "In positive correlation, if one variable increases, the other also increases."
        },
        {
            id: 'cor2',
            question: "The range of Karl Pearson's correlation coefficient (r) is:",
            options: ["0 to 1", "-1 to 0", "-1 to +1", "None of these"],
            correct: 2,
            explanation: "The value of correlation coefficient 'r' always lies between -1 and +1."
        },
        {
            id: 'cor3',
            question: "If r = 0, it means there is:",
            options: ["Perfect positive correlation", "Perfect negative correlation", "No linear correlation", "High degree of correlation"],
            correct: 2,
            explanation: "r = 0 indicates absence of any linear relationship between the variables."
        },
        {
            id: 'cor4',
            question: "Scatter diagram helps us to:",
            options: ["Calculate r precisely", "Know the direction visualization", "Find the mean", "None of the above"],
            correct: 1,
            explanation: "Scatter diagram is a visual method to see the direction and nature of relationship, but doesn't give a precise value."
        },
        {
            id: 'cor5',
            question: "Rank correlation method was developed by:",
            options: ["Karl Pearson", "Spearman", "Fisher", "Bowley"],
            correct: 1,
            explanation: "Charles Spearman developed the Rank Correlation method."
        },
        {
            id: 'cor6',
            question: "In the formula R = 1 - (6ΣD²)/N(N²-1), 'D' stands for:",
            options: ["Deviation from Mean", "Difference of Ranks", "Data count", "None"],
            correct: 1,
            explanation: "D is the difference between the ranks of the two variables (R1 - R2)."
        },
        {
            id: 'cor7',
            question: "Which correlation is suitable for qualitative data like beauty or honesty?",
            options: ["Karl Pearson's", "Spearman's Rank", "Scatter Diagram", "None"],
            correct: 1,
            explanation: "Spearman's Rank correlation is designed for qualitative data that can be ranked."
        },
        {
            id: 'cor8',
            question: "If r = -1, the correlation is:",
            options: ["Perfect Positive", "Perfect Negative", "Zero", "Low Degree"],
            correct: 1,
            explanation: "r = -1 indicates a perfect negative correlation where points lie on a straight line falling downwards."
        },
        {
            id: 'cor9',
            question: "If X increases and Y decreases, the correlation is:",
            options: ["Positive", "Negative", "Zero", "Complex"],
            correct: 1,
            explanation: "Opposite direction movement indicates negative correlation."
        },
        {
            id: 'cor10',
            question: "Karl Pearson's coefficient is defined as the covariance divided by product of:",
            options: ["Means", "Standard Deviations", "Variances", "Medians"],
            correct: 1,
            explanation: "r = Cov(X,Y) / (σx * σy)."
        }
    ];

    // 5 True/False Questions
    const tfQuestions = [
        {
            id: 'tf1',
            question: "Correlation implies causation.",
            correct: false,
            explanation: "Correlation only shows relationship, not cause-and-effect. Ice cream sales and crime correlate (due to heat), but one doesn't cause the other."
        },
        {
            id: 'tf2',
            question: "Karl Pearson's method is only for linear correlation.",
            correct: true,
            explanation: "It measures the strength of a linear relationship."
        },
        {
            id: 'tf3',
            question: "Scatter diagram gives a precise numerical value of correlation.",
            correct: false,
            explanation: "Scatter diagram is a visual method; it does not give a numerical value."
        },
        {
            id: 'tf4',
            question: "The value of rank correlation can never be negative.",
            correct: false,
            explanation: "Rank correlation also ranges from -1 to +1, so it can be negative."
        },
        {
            id: 'tf5',
            question: "If r = 0.8, it is a high degree of positive correlation.",
            correct: true,
            explanation: "Values between 0.7 and 1 are considered high degree."
        }
    ];

    return (
        <SharedQuiz
            title="Correlation Challenge"
            subtitle="Test your understanding of relationships between variables"
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-11"
        />
    );
};

export default Quiz;
