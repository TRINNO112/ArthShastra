import { FaStore, FaBalanceScale, FaGem, FaUserFriends, FaGlobe, FaChartBar, FaClipboardList, FaLightbulb } from 'react-icons/fa';

export const lesson12Data = {
    title: "Forms of Market",
    subtitle: "Perfect Competition to Monopoly",

    sections: [
        { id: 'concept', name: 'Concept of Market', icon: FaStore },
        { id: 'perfect-competition', name: 'Perfect Competition', icon: FaBalanceScale },
        { id: 'monopoly', name: 'Monopoly', icon: FaGem },
        { id: 'monopolistic', name: 'Monopolistic Comp', icon: FaGlobe },
        { id: 'oligopoly', name: 'Oligopoly', icon: FaUserFriends },
        { id: 'comparison', name: 'Market Comparison', icon: FaChartBar },
        { id: 'scenarios', name: 'Real World Scenarios', icon: FaLightbulb },
        { id: 'practice', name: 'Practice Problems', icon: FaClipboardList },
        { id: 'quiz', name: 'Quiz', icon: FaLightbulb },
    ],

    introduction: {
        definition: "A Market is not just a place, but a mechanism where Buyers and Sellers interact to exchange goods and services.",
        keyEvolutions: [
            "Traditional: Physical Marketplace (Haat, Bazaar)",
            "Modern: Digital/Virtual Markets (Amazon, Flipkart)",
            "Financial: Stock Markets (NSE, BSE)"
        ]
    },

    mcqQuestions: [
        {
            id: 1,
            question: "In which market form is the product Homogeneous (Identical)?",
            options: ["Monopoly", "Perfect Competition", "Monopolistic Competition", "Oligopoly"],
            correctAnswer: 1,
            explanation: "In Perfect Competition, all sellers sell identical products (e.g., Wheat)."
        },
        {
            id: 2,
            question: "Which market has a single seller and no close substitutes?",
            options: ["Oligopoly", "Monopoly", "Perfect Competition", "Duopoly"],
            correctAnswer: 1,
            explanation: "Monopoly (Mono=Single) has only one seller controlling the entire supply."
        },
        {
            id: 3,
            question: "The Demand Curve for a firm under Perfect Competition is:",
            options: ["Downward Sloping", "Upward Sloping", "Horizontal (Perfectly Elastic)", "Vertical (Perfectly Inelastic)"],
            correctAnswer: 2,
            explanation: "Since the firm is a Price Taker, it can sell any amount at the same price. Hence, Horizontal."
        },
        {
            id: 4,
            question: "The 'Kinked Demand Curve' is a characteristic of:",
            options: ["Monopoly", "Monopolistic Competition", "Oligopoly", "Perfect Competition"],
            correctAnswer: 2,
            explanation: "Oligopoly firms face a Kinked curve due to price rigidity and interdependence."
        },
        {
            id: 5,
            question: "Product Differentiation is the main feature of:",
            options: ["Perfect Competition", "Monopoly", "Monopolistic Competition", "Oligopoly"],
            correctAnswer: 2,
            explanation: "In Monopolistic Competition, products are similar but differentiated (e.g., Soaps, Toothpaste)."
        }
    ],

    tfQuestions: [
        {
            id: 1,
            question: "In a Monopoly, the firm is a Price Taker.",
            correctAnswer: false,
            explanation: "False. A Monopolist is a Price MAKER."
        },
        {
            id: 2,
            question: "Under Perfect Competition, there are no barriers to entry or exit.",
            correctAnswer: true,
            explanation: "True. Firms can freely enter or leave the industry."
        },
        {
            id: 3,
            question: "Selling costs (Advertising) are very high in Perfect Competition.",
            correctAnswer: false,
            explanation: "False. Products are identical, so no need to advertise. Selling costs are high in Monopolistic Competition."
        },
        {
            id: 4,
            question: "Railways in India is an example of Monopoly.",
            correctAnswer: true,
            explanation: "True. It is a government-owned monopoly."
        },
        {
            id: 5,
            question: "In Oligopoly, firms are independent of each other.",
            correctAnswer: false,
            explanation: "False. There is high Interdependence in Oligopoly."
        }
    ]
};
