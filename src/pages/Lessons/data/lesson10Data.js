export const lesson10Data = {
    scheduleData: [
        { q: 1, price: 10, tr: 10, tc: 15, mr: 10, mc: 15, profit: -5 },
        { q: 2, price: 10, tr: 20, tc: 22, mr: 10, mc: 7, profit: -2 },
        { q: 3, price: 10, tr: 30, tc: 27, mr: 10, mc: 5, profit: 3 },
        { q: 4, price: 10, tr: 40, tc: 31, mr: 10, mc: 4, profit: 9 },
        { q: 5, price: 10, tr: 50, tc: 38, mr: 10, mc: 7, profit: 12 },
        { q: 6, price: 10, tr: 60, tc: 48, mr: 10, mc: 10, profit: 12 },
        { q: 7, price: 10, tr: 70, tc: 63, mr: 10, mc: 15, profit: 7 },
        { q: 8, price: 10, tr: 80, tc: 83, mr: 10, mc: 20, profit: -3 }
    ],
    mcqQuestions: [
        {
            id: 1,
            question: "What is the primary condition for Producer's Equilibrium?",
            options: ["MR > MC", "MR = MC", "MR < MC", "TR = TC"],
            correctAnswer: 1,
            explanation: "The first condition involves MR = MC. This is necessary because if MR > MC, profit can be increased by producing more. If MR < MC, profit is increased by producing less."
        },
        {
            id: 2,
            question: "What is the second condition regarding the MC curve?",
            options: ["MC should be falling", "MC should be constant", "MC should exceed MR", "MC should cut MR from below"],
            correctAnswer: 3,
            explanation: "For stable equilibrium, MC must be rising at the point of intersection. This means the MC curve must cut the MR curve from below."
        },
        {
            id: 3,
            question: "If MC < MR, what should a rational producer do?",
            options: ["Stop production", "Decrease output", "Increase output", "Keep output constant"],
            correctAnswer: 2,
            explanation: "When MC < MR, the cost of producing an additional unit is less than the revenue gained from it, so the producer adds to total profit by increasing output."
        }
    ],
    tfQuestions: [
        {
            id: 1,
            question: "Producer's Equilibrium is always at the point of maximum profit.",
            isTrue: true,
            explanation: "Yes, by definition, equilibrium is the state where the producer has no incentive to change output because they are maximizing profit."
        },
        {
            id: 2,
            question: "It is possible to be in equilibrium when MC is falling.",
            isTrue: false,
            explanation: "No. If MC is falling at MR=MC, expanding output would further increase profit (since MC would drop below MR). Thus, MC must be rising."
        }
    ]
};

