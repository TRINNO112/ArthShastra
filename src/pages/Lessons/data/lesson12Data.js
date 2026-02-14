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
        },
        {
            id: 6,
            question: "How many sellers are there in a Duopoly?",
            options: ["One", "Two", "Few", "Many"],
            correctAnswer: 1,
            explanation: "Duopoly is a special case of Oligopoly with exactly two sellers."
        },
        {
            id: 7,
            question: "Under Perfect Competition, a firm is a:",
            options: ["Price maker", "Price taker", "Price leader", "Price discriminator"],
            correctAnswer: 1,
            explanation: "Individual firms have no market power and must accept the market-determined price."
        },
        {
            id: 8,
            question: "In Monopolistic Competition, sellers compete mainly through:",
            options: ["Price wars", "Product differentiation and advertising", "Collusion", "Government intervention"],
            correctAnswer: 1,
            explanation: "Firms differentiate their products through branding, quality, packaging, and advertising (non-price competition)."
        },
        {
            id: 9,
            question: "Which market form has the highest barriers to entry?",
            options: ["Perfect Competition", "Monopolistic Competition", "Oligopoly", "Monopoly"],
            correctAnswer: 3,
            explanation: "Monopoly has the strongest barriers (legal, natural, or technological) preventing new firms from entering."
        },
        {
            id: 10,
            question: "An example of Monopolistic Competition in India is:",
            options: ["Indian Railways", "Wheat market", "Toothpaste brands (Colgate, Pepsodent, etc.)", "OPEC"],
            correctAnswer: 2,
            explanation: "Toothpaste market has many sellers with differentiated products — a classic example of monopolistic competition."
        },
        {
            id: 11,
            question: "Under Monopoly, the firm's AR curve is:",
            options: ["Horizontal", "Upward sloping", "Downward sloping", "Vertical"],
            correctAnswer: 2,
            explanation: "A monopolist must lower the price to sell more units, so the AR (demand) curve slopes downward."
        },
        {
            id: 12,
            question: "Interdependence among firms is a key feature of:",
            options: ["Perfect Competition", "Monopoly", "Monopolistic Competition", "Oligopoly"],
            correctAnswer: 3,
            explanation: "In Oligopoly, each firm's decisions (pricing, output) affect and are affected by rival firms' decisions."
        },
        {
            id: 13,
            question: "Perfect knowledge of market conditions is an assumption of:",
            options: ["Monopoly", "Oligopoly", "Perfect Competition", "Monopolistic Competition"],
            correctAnswer: 2,
            explanation: "Perfect Competition assumes that buyers and sellers have complete information about prices and products."
        },
        {
            id: 14,
            question: "Selling costs are highest in which market form?",
            options: ["Perfect Competition", "Monopolistic Competition", "Monopoly", "Oligopoly"],
            correctAnswer: 1,
            explanation: "Monopolistic Competition involves heavy advertising and branding costs to differentiate products."
        },
        {
            id: 15,
            question: "Which market form is closest to real-world markets?",
            options: ["Perfect Competition", "Monopoly", "Monopolistic Competition", "None of these"],
            correctAnswer: 2,
            explanation: "Most real markets (restaurants, clothing, electronics) have features of monopolistic competition — many sellers with differentiated products."
        },
        {
            id: 16,
            question: "Under Perfect Competition, AR is equal to:",
            options: ["MC", "MR", "TC", "AFC"],
            correctAnswer: 1,
            explanation: "Since price is constant, every additional unit sold adds the same revenue. Hence AR = MR = Price."
        },
        {
            id: 17,
            question: "A patent or copyright creates which type of monopoly?",
            options: ["Natural monopoly", "Legal monopoly", "Voluntary monopoly", "Technological monopoly"],
            correctAnswer: 1,
            explanation: "Patents and copyrights are legal barriers granted by the government, creating a legal monopoly."
        },
        {
            id: 18,
            question: "In which market form do firms earn only normal profit in the long run?",
            options: ["Monopoly", "Oligopoly", "Perfect Competition", "None of these"],
            correctAnswer: 2,
            explanation: "Free entry and exit in perfect competition ensure super-normal profits are competed away in the long run."
        },
        {
            id: 19,
            question: "Price rigidity (sticky prices) is a characteristic of:",
            options: ["Perfect Competition", "Monopoly", "Monopolistic Competition", "Oligopoly"],
            correctAnswer: 3,
            explanation: "In Oligopoly, firms avoid price changes due to fear of price wars, leading to price rigidity."
        },
        {
            id: 20,
            question: "Which market form has zero selling costs?",
            options: ["Perfect Competition", "Monopolistic Competition", "Oligopoly", "Monopoly"],
            correctAnswer: 0,
            explanation: "In Perfect Competition, products are homogeneous and buyers have perfect knowledge, so there is no need for advertising."
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
        },
        {
            id: 6,
            question: "Under Monopolistic Competition, products are close substitutes but not identical.",
            correctAnswer: true,
            explanation: "True. Products are differentiated through branding, packaging, etc., but serve similar purposes."
        },
        {
            id: 7,
            question: "A monopolist can sell any quantity at any price it desires.",
            correctAnswer: false,
            explanation: "False. A monopolist can set price OR quantity, but not both. It is constrained by the demand curve."
        },
        {
            id: 8,
            question: "Under Perfect Competition, the MR curve is the same as the AR curve.",
            correctAnswer: true,
            explanation: "True. Since price is constant, AR = MR = Price, and both are represented by the same horizontal line."
        },
        {
            id: 9,
            question: "Oligopoly can exist with both homogeneous and differentiated products.",
            correctAnswer: true,
            explanation: "True. Pure oligopoly has identical products (steel, cement) while differentiated oligopoly has different products (cars, electronics)."
        },
        {
            id: 10,
            question: "The degree of competition is highest in Perfect Competition.",
            correctAnswer: true,
            explanation: "True. With many sellers, homogeneous products, and free entry/exit, competition is at its maximum."
        }
    ]
};
