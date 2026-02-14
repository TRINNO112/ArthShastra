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
        },
        {
            id: 11,
            question: "Total Revenue (TR) is calculated as:",
            options: ["Price × Quantity", "Price / Quantity", "Price + Quantity", "Price - Cost"],
            correctAnswer: "Price × Quantity",
            explanation: "TR = P × Q. It is the total amount of money received by the firm from selling its output."
        },
        {
            id: 12,
            question: "Under imperfect competition, the MR curve lies:",
            options: ["Above the AR curve", "Below the AR curve", "On the AR curve", "Parallel to X-axis"],
            correctAnswer: "Below the AR curve",
            explanation: "Under imperfect competition, to sell more, price must fall. MR falls faster than AR because MR reflects the revenue loss on all previous units too."
        },
        {
            id: 13,
            question: "If TR at 5 units is ₹100 and TR at 6 units is ₹108, then MR of the 6th unit is:",
            options: ["₹108", "₹100", "₹8", "₹18"],
            correctAnswer: "₹8",
            explanation: "MR = TR(6) - TR(5) = 108 - 100 = ₹8."
        },
        {
            id: 14,
            question: "Under perfect competition, the TR curve is:",
            options: ["A downward-sloping curve", "A straight line from origin with positive slope", "An inverted U-shape", "A horizontal line"],
            correctAnswer: "A straight line from origin with positive slope",
            explanation: "Since P is constant, TR = P × Q increases linearly, forming a straight line through the origin."
        },
        {
            id: 15,
            question: "Under imperfect competition, the TR curve is:",
            options: ["A straight line", "An inverted U-shape (rises then falls)", "A horizontal line", "Always increasing"],
            correctAnswer: "An inverted U-shape (rises then falls)",
            explanation: "TR first rises (when MR > 0), reaches maximum (when MR = 0), and then falls (when MR < 0)."
        },
        {
            id: 16,
            question: "Revenue refers to:",
            options: ["Profit earned by a firm", "Income received from sale of output", "Cost of production", "Wages paid to workers"],
            correctAnswer: "Income received from sale of output",
            explanation: "Revenue is the income (receipts) a firm gets from selling its goods and services."
        },
        {
            id: 17,
            question: "When AR is falling, MR:",
            options: ["Falls faster than AR", "Falls slower than AR", "Remains constant", "Rises"],
            correctAnswer: "Falls faster than AR",
            explanation: "When the firm lowers price to sell more, MR drops more steeply because it also accounts for the revenue lost on all previous units."
        },
        {
            id: 18,
            question: "If AR = ₹10 at all levels of output, MR is:",
            options: ["₹10", "₹0", "Greater than ₹10", "Less than ₹10"],
            correctAnswer: "₹10",
            explanation: "Constant AR (price) means perfect competition. Here AR = MR = Price = ₹10."
        },
        {
            id: 19,
            question: "The relationship between AR and MR under monopoly can be expressed as:",
            options: ["MR = AR", "MR > AR", "MR < AR", "MR = 2 × AR"],
            correctAnswer: "MR < AR",
            explanation: "Under monopoly, price must be lowered to sell more. MR is always less than AR (price) for all units after the first."
        },
        {
            id: 20,
            question: "If a firm's AR is ₹20 and it sells 10 units, its TR is:",
            options: ["₹20", "₹10", "₹200", "₹30"],
            correctAnswer: "₹200",
            explanation: "TR = AR × Q = 20 × 10 = ₹200."
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
        },
        {
            id: 6,
            question: "Under imperfect competition, AR and MR curves are both downward sloping.",
            correctAnswer: "True",
            explanation: "Both AR and MR fall as output increases, but MR falls at a faster rate than AR."
        },
        {
            id: 7,
            question: "MR can never be greater than AR.",
            correctAnswer: "False",
            explanation: "For the very first unit sold, MR = AR. Under perfect competition, MR always equals AR. So MR is not always less than AR."
        },
        {
            id: 8,
            question: "TR is always positive regardless of output level.",
            correctAnswer: "True",
            explanation: "TR = Price × Quantity. Since both price and quantity are positive (or zero), TR can never be negative."
        },
        {
            id: 9,
            question: "Under perfect competition, the MR curve is a horizontal straight line.",
            correctAnswer: "True",
            explanation: "Since price is constant, MR = Price at every level of output, forming a horizontal line."
        },
        {
            id: 10,
            question: "When MR = 0, a rational firm under imperfect competition should stop increasing output.",
            correctAnswer: "True",
            explanation: "At MR = 0, TR is maximum. Beyond this, MR becomes negative and TR starts falling."
        }
    ]
};
