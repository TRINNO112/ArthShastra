// Data for Lesson 11: Theory of Supply
import { FaTruck, FaChartLine, FaClipboardList, FaIndustry, FaExchangeAlt, FaUsers } from 'react-icons/fa';

export const lesson11Data = {
    title: "Theory of Supply",
    subtitle: "Producer Behaviour and Market Supply",

    // Navigation Sections
    sections: [
        { id: 'concept-supply', name: 'Concept of Supply', icon: FaTruck },
        { id: 'determinants', name: 'Determinants', icon: FaIndustry },
        { id: 'law-supply', name: 'Law of Supply', icon: FaChartLine },
        { id: 'market-supply', name: 'Market Supply', icon: FaUsers },
        { id: 'elasticity', name: 'Price Elasticity', icon: FaChartLine },
        { id: 'movement-shift', name: 'Movement vs Shift', icon: FaExchangeAlt },
        { id: 'practice', name: 'Practice Problems', icon: FaClipboardList },
        { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
    ],

    // Quiz Data
    mcqQuestions: [
        {
            question: "Which of the following is NOT a determinant of individual supply?",
            options: [
                "Price of the good itself",
                "Price of factors of production",
                "State of technology",
                "Gender of the producer"
            ],
            correctAnswer: 3,
            explanation: "Supply depends on economic factors like price, costs (input prices), and technology. Personal characteristics like gender do not determine market supply."
        },
        {
            question: "The Law of Supply indicates:",
            options: [
                "Inverse relationship between price and quantity supplied",
                "Direct relationship between price and quantity supplied",
                "No relationship between price and quantity supplied",
                "Direct relationship between price and income"
            ],
            correctAnswer: 1,
            explanation: "The Law of Supply states that, other things remaining constant, quantity supplied increases with an increase in price, and vice versa."
        },
        {
            question: "Movement along the supply curve occurs due to:",
            options: [
                "Change in Goal of the Firm",
                "Change in Technology",
                "Change in Own Price of the commodity",
                "Change in Government Policy"
            ],
            correctAnswer: 2,
            explanation: "Change in the commodity's own price causes expansion or contraction of supply, represented by movement along the same curve."
        },
        {
            question: "Which of the following causes a Leftward Shift in the supply curve?",
            options: [
                "Improvement in Technology",
                "Decrease in Price of Inputs",
                "Increase in Tax on production",
                "Increase in Price of the good"
            ],
            correctAnswer: 2,
            explanation: "An increase in tax raises the cost of production, discouraging producers and reducing supply at every price (Leftward Shift)."
        },
        {
            question: "If the price of raw material falls, the supply curve will:",
            options: [
                "Shift to the Right",
                "Shift to the Left",
                "Remain constant",
                "Become vertical"
            ],
            correctAnswer: 0,
            explanation: "Lower input costs increase profitability, encouraging producers to supply more at the same price, causing a Rightward Shift."
        }
    ],

    tfQuestions: [
        {
            question: "Supply and Stock are the same concept.",
            answer: false,
            explanation: "Stock is the total quantity available with the producer, while Supply is the portion of stock offered for sale at a specific price and time."
        },
        {
            question: "An improvement in technology always leads to an increase in supply.",
            answer: true,
            explanation: "Better technology reduces cost of production and increases efficiency, shifting the supply curve to the right (Increase in Supply)."
        }
    ]
};
