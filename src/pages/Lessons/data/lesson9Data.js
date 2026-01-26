export const lesson9Data = {
    sections: [
        { id: 'intro', name: 'Introduction to Revenue' },
        { id: 'calculations', name: 'Revenue Calculations' },
        { id: 'curves-perfect', name: 'Perfect Competition' },
        { id: 'curves-imperfect', name: 'Imperfect Competition' },
        { id: 'relationships', name: 'TR-MR Relationship' },
        { id: 'examples', name: 'Real World Examples' },
        { id: 'practice', name: 'Practice Problems' },
        { id: 'quiz', name: 'Quiz' }
    ],
    mcqQuestions: [
        {
            id: 1,
            question: "Which of the following is true when Price remains constant at all levels of output?",
            options: ["AR = MR", "AR > MR", "AR < MR", "TR is constant"],
            correctAnswer: "AR = MR",
            explanation: "In perfect competition (constant price), Average Revenue (Price) equals Marginal Revenue because every additional unit is sold at the same price."
        },
        {
            id: 2,
            question: "If Total Revenue (TR) is increasing at a constant rate, then Marginal Revenue (MR) must be:",
            options: ["Increasing", "Decreasing", "Constant", "Zero"],
            correctAnswer: "Constant",
            explanation: "Constant rate of increase in TR implies that the addition to revenue (MR) is the same for each unit, hence MR is constant."
        },
        {
            id: 3,
            question: "When MR is negative, TR will:",
            options: ["Increase", "Decrease", "Remain Constant", "Become Zero"],
            correctAnswer: "Decrease",
            explanation: "Marginal Revenue represents the addition to Total Revenue. If the addition is negative, the Total sum (TR) must fall."
        },
        {
            id: 4,
            question: "Formula for Average Revenue (AR) is:",
            options: ["TR / Q", "dTR / dQ", "P × Q", "TR - TC"],
            correctAnswer: "TR / Q",
            explanation: "Average Revenue is revenue per unit of output, calculated as Total Revenue divided by Quantity (TR/Q). It is also equal to Price."
        },
        {
            id: 5,
            question: "In a monopoly market, the AR curve slopes:",
            options: ["Upwards", "Downwards", "Horizontal", "Vertical"],
            correctAnswer: "Downwards",
            explanation: "A monopolist must lower the price to sell more units. Since AR = Price, the AR curve slopes downwards."
        },
        {
            id: 6,
            question: "If a firm sells 10 units at ₹5 each, and 11 units at ₹4 each, what is the MR of the 11th unit?",
            options: ["₹4", "₹-6", "₹54", "₹44"],
            correctAnswer: "₹-6",
            explanation: "TR(10) = 50. TR(11) = 44. MR = TR(11) - TR(10) = 44 - 50 = -6."
        },
        {
            id: 7,
            question: "Total Revenue is maximum when Marginal Revenue is:",
            options: ["Maximum", "Minimum", "Zero", "Negative"],
            correctAnswer: "Zero",
            explanation: "TR stops increasing and reaches its peak exactly when the addition from the next unit (MR) becomes zero."
        },
        {
            id: 8,
            question: "AR curve is also known as:",
            options: ["Supply Curve", "Demand Curve", "Cost Curve", "Indifference Curve"],
            correctAnswer: "Demand Curve",
            explanation: "The AR curve shows the relationship between Price and Quantity demanded, which is the definition of the Demand Curve."
        },
        {
            id: 9,
            question: "Under which market form is the TR curve a straight line passing through the origin?",
            options: ["Perfect Competition", "Monopoly", "Monopolistic Competition", "Oligopoly"],
            correctAnswer: "Perfect Competition",
            explanation: "Under Perfect Competition, Price is constant, so TR increases proportionally with Output (linear)."
        },
        {
            id: 10,
            question: "Can Marginal Revenue be negative?",
            options: ["Yes", "No", "Only in Perfect Competition", "Never"],
            correctAnswer: "Yes",
            explanation: "Yes, if a firm has to lower price drastically to sell one more unit, the loss on previous units might outweight the gain from the new unit, making MR negative."
        }
    ],
    tfQuestions: [
        {
            id: 1,
            question: "Profit is the same thing as Revenue.",
            correctAnswer: "False",
            explanation: "Revenue is total receipts (Income). Profit is Revenue minus Costs (Income - Expenses)."
        },
        {
            id: 2,
            question: "AR is always equal to Price.",
            correctAnswer: "True",
            explanation: "Since TR = P × Q, and AR = TR / Q, substituting gives AR = (P×Q)/Q = P. This holds true for all market forms."
        },
        {
            id: 3,
            question: "If MR is positive, TR must be rising.",
            correctAnswer: "True",
            explanation: "Positve MR adds to the total, causing TR to rise."
        },
        {
            id: 4,
            question: "The area under the MR curve represents Total Revenue.",
            correctAnswer: "True",
            explanation: "Mathematically, the integral (summation) of Marginal values gives the Total value."
        },
        {
            id: 5,
            question: "In Perfect Competition, slope of TR curve is constant.",
            correctAnswer: "True",
            explanation: "The slope of TR is MR. In Perfect Competition, MR is constant (equal to Price), so the slope of TR is constant."
        }
    ]
};
