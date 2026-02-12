import React from 'react';
import SharedQuiz from '../../../Lessons/components/SharedQuiz';

const Quiz = () => {
    // 10 MCQ Questions
    const mcqQuestions = [
        {
            id: 'idx1',
            question: "Index Numbers are also known as:",
            options: ["Economic Barometers", "Statistical Scales", "Mathematical Balances", "Financial Meters"],
            correct: 0,
            explanation: "Index numbers are called economic barometers as they measure the 'pressure' or changes in the economy."
        },
        {
            id: 'idx2',
            question: "The index value assigned to the base year is always:",
            options: ["0", "1", "100", "10"],
            correct: 2,
            explanation: "Base year is the reference point and is always taken as 100."
        },
        {
            id: 'idx3',
            question: "Laspeyres index is based on weights of:",
            options: ["Current Year", "Base Year", "Average of both", "Normal Year"],
            correct: 1,
            explanation: "Laspeyres method uses base year quantities (q₀) as weights."
        },
        {
            id: 'idx4',
            question: "Which index number is considered the 'Ideal' index?",
            options: ["Laspeyres", "Paasche", "Fisher", "Bowley"],
            correct: 2,
            explanation: "Fisher's index is 'Ideal' because it is the geometric mean of L and P and satisfies essential consistency tests."
        },
        {
            id: 'idx5',
            question: "Fisher's Ideal Index is calculated as:",
            options: ["(L + P) / 2", "√(L × P)", "L × P", "None"],
            correct: 1,
            explanation: "Fisher's index is the geometric mean, which is the square root of the product of L and P."
        },
        {
            id: 'idx6',
            question: "Consumer Price Index (CPI) is also called:",
            options: ["Wholesale Price Index", "Cost of Living Index", "Production Index", "Inflation Meter"],
            correct: 1,
            explanation: "CPI measures the cost of maintaining a certain standard of living for consumers."
        },
        {
            id: 'idx7',
            question: "The formula for Price Relative is:",
            options: ["(P₀ / P₁) × 100", "(P₁ / P₀) × 100", "P₁ - P₀", "P₁ + P₀"],
            correct: 1,
            explanation: "Price relative shows current price as a percentage of base price."
        },
        {
            id: 'idx8',
            question: "Which index is used to measure inflation in most economies?",
            options: ["CPI", "WPI", "Both A and B", "Neither"],
            correct: 2,
            explanation: "Both Consumer and Wholesale Price Indices are used to track different levels of inflation."
        },
        {
            id: 'idx9',
            question: "If the salary of a worker increases from ₹1000 to ₹1500 but the CPI increases from 100 to 200, the 'Real Wage' has:",
            options: ["Increased", "Decreased", "Stayed Same", "Doubled"],
            correct: 1,
            explanation: "Real Wage = (1500/200)*100 = 750. Since 750 < 1000, the real wage has decreased."
        },
        {
            id: 'idx10',
            question: "WPI does NOT include changes in prices of:",
            options: ["Fuel", "Services", "Manufactured Goods", "Primary Articles"],
            correct: 1,
            explanation: "Wholesale Price Index (WPI) focuses on goods and does not include services."
        }
    ];

    // 5 True/False Questions
    const tfQuestions = [
        {
            id: 'tf1',
            question: "Index numbers measure absolute changes in variables.",
            correct: false,
            explanation: "No, they measure 'relative' changes expressed as percentages."
        },
        {
            id: 'tf2',
            question: "Paasche index uses current year quantities as weights.",
            correct: true,
            explanation: "Paasche method uses q₁ (current year quantity) as the weight."
        },
        {
            id: 'tf3',
            question: "The base year should be a period of economic instability.",
            correct: false,
            explanation: "The base year should be a 'normal' year with no major disruptions like war or natural disasters."
        },
        {
            id: 'tf4',
            question: "Purchasing Power of Money is the reciprocal of the Price Index.",
            correct: true,
            explanation: "As prices go up (index increases), the value of money goes down."
        },
        {
            id: 'tf5',
            question: "The average of relatives method gives equal weight to all items.",
            correct: true,
            explanation: "Since it calculates percentage change for each item individually before averaging, it doesn't favor high-priced items."
        }
    ];

    return (
        <SharedQuiz
            title="Index Number Challenge"
            subtitle="Master the barometers of the economy"
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-12"
        />
    );
};

export default Quiz;
