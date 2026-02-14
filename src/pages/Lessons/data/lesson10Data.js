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
        },
        {
            id: 4,
            question: "Producer's Equilibrium can also be determined using which alternative approach?",
            options: ["AR = AC approach", "TR - TC approach", "MR - AR approach", "AFC = AVC approach"],
            correctAnswer: 1,
            explanation: "The TR-TC approach finds equilibrium where the difference (profit) between TR and TC is maximum."
        },
        {
            id: 5,
            question: "Under the TR-TC approach, profit is maximum when:",
            options: ["TR is maximum", "TC is minimum", "The positive difference between TR and TC is maximum", "TR equals TC"],
            correctAnswer: 2,
            explanation: "Profit = TR - TC. Equilibrium is at the output level where this difference is the greatest positive value."
        },
        {
            id: 6,
            question: "If MR > MC, the producer is in a state of:",
            options: ["Equilibrium", "Sub-optimal output (should increase)", "Over-production (should decrease)", "Loss"],
            correctAnswer: 1,
            explanation: "When MR > MC, each additional unit adds more to revenue than to cost, so the producer should increase output to raise profit."
        },
        {
            id: 7,
            question: "At equilibrium under perfect competition:",
            options: ["Price = MC (with MC rising)", "Price > MC", "Price < MC", "Price = AC"],
            correctAnswer: 0,
            explanation: "Under perfect competition, MR = Price. So equilibrium condition MR = MC becomes Price = MC, with MC rising."
        },
        {
            id: 8,
            question: "Which of the following is NOT a condition for producer's equilibrium?",
            options: ["MR = MC", "MC must be rising", "AR must be falling", "MC cuts MR from below"],
            correctAnswer: 2,
            explanation: "AR falling is a feature of imperfect competition, not a condition for equilibrium. The conditions are MR = MC and MC rising."
        },
        {
            id: 9,
            question: "In the schedule, at which output level is the producer in equilibrium (MR = MC, MC rising)?",
            options: ["Q = 4", "Q = 5", "Q = 6", "Q = 7"],
            correctAnswer: 2,
            explanation: "At Q = 6, MR (10) = MC (10) and MC is rising after this point (MC goes from 7 to 10 to 15). Both conditions are satisfied."
        },
        {
            id: 10,
            question: "What happens to profit when a producer continues to produce beyond the equilibrium output?",
            options: ["Profit increases", "Profit decreases", "Profit stays the same", "Profit becomes zero"],
            correctAnswer: 1,
            explanation: "Beyond equilibrium, MC > MR, so each additional unit adds more to cost than to revenue, reducing total profit."
        },
        {
            id: 11,
            question: "Under imperfect competition, the MR curve:",
            options: ["Is a horizontal line", "Slopes downward", "Slopes upward", "Is vertical"],
            correctAnswer: 1,
            explanation: "Under imperfect competition (monopoly, etc.), the firm must lower its price to sell more, so MR falls as output increases."
        },
        {
            id: 12,
            question: "A producer is in equilibrium when the slope of the TC curve equals the slope of the TR curve because:",
            options: ["TC = TR at that point", "MC = MR at that point", "AC = AR at that point", "Profit = 0 at that point"],
            correctAnswer: 1,
            explanation: "The slope of TC is MC and the slope of TR is MR. When slopes are equal, MC = MR."
        },
        {
            id: 13,
            question: "If at the current output, MC = MR but MC is falling, the producer should:",
            options: ["Stay at this output", "Reduce output", "Increase output", "Shut down production"],
            correctAnswer: 1,
            explanation: "If MC is falling at MR=MC, the second condition is not met. The producer should reduce output to where MC is rising and equals MR."
        },
        {
            id: 14,
            question: "Normal profit is included in:",
            options: ["Revenue", "Total Cost", "Super-normal profit", "Marginal Cost"],
            correctAnswer: 1,
            explanation: "Normal profit is considered the minimum return to keep the entrepreneur in business and is included as part of total cost."
        },
        {
            id: 15,
            question: "When TR = TC, the firm earns:",
            options: ["Super-normal profit", "Losses", "Normal profit (break-even)", "Abnormal profit"],
            correctAnswer: 2,
            explanation: "When TR = TC, economic profit is zero. The firm earns only normal profit, which is already included in TC."
        },
        {
            id: 16,
            question: "If a firm's TR is ₹1000 and TC is ₹800, the firm earns:",
            options: ["Normal profit of ₹200", "Super-normal profit of ₹200", "Loss of ₹200", "No profit"],
            correctAnswer: 1,
            explanation: "Super-normal (economic) profit = TR - TC = 1000 - 800 = ₹200."
        },
        {
            id: 17,
            question: "In a perfectly competitive market, a firm is a price taker because:",
            options: ["There are few sellers", "Products are differentiated", "There are many buyers and sellers with homogeneous products", "Government fixes the price"],
            correctAnswer: 2,
            explanation: "With many sellers and identical products, no single firm can influence the market price."
        },
        {
            id: 18,
            question: "Under the MR-MC approach, the equilibrium output is where:",
            options: ["The gap between MR and MC is maximum", "MR and MC curves intersect with MC rising", "MR curve is at its highest", "MC curve is at its lowest"],
            correctAnswer: 1,
            explanation: "Equilibrium is at the intersection of MR and MC, with the additional condition that MC is rising (cuts MR from below)."
        },
        {
            id: 19,
            question: "Loss minimisation occurs when:",
            options: ["TR > TC", "TR < TC but TR > TVC", "TR < TVC", "TR = 0"],
            correctAnswer: 1,
            explanation: "When TR < TC but TR > TVC, the firm covers all variable costs and part of fixed costs. Producing is better than shutting down."
        },
        {
            id: 20,
            question: "Which of the following is true at the point of producer's equilibrium?",
            options: ["Profit per unit is maximum", "Total profit is maximum", "Revenue per unit is maximum", "Cost per unit is minimum"],
            correctAnswer: 1,
            explanation: "Producer's equilibrium maximises total profit, not necessarily profit per unit."
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
        },
        {
            id: 3,
            question: "The MR = MC condition alone is sufficient for producer's equilibrium.",
            isTrue: false,
            explanation: "Both conditions are needed: MR = MC AND MC must be rising (cutting MR from below)."
        },
        {
            id: 4,
            question: "Under perfect competition, MR = AR = Price.",
            isTrue: true,
            explanation: "In perfect competition, the firm sells all units at the same market price, so AR = MR = Price."
        },
        {
            id: 5,
            question: "A firm should shut down in the short run if it cannot cover its variable costs.",
            isTrue: true,
            explanation: "If TR < TVC, the firm loses more by producing than by shutting down, as it cannot even cover variable costs."
        },
        {
            id: 6,
            question: "The TR-TC approach and the MR-MC approach always give the same equilibrium output.",
            isTrue: true,
            explanation: "Both approaches are mathematically equivalent and will identify the same profit-maximising output level."
        },
        {
            id: 7,
            question: "Super-normal profit means TR is greater than TC.",
            isTrue: true,
            explanation: "Super-normal (economic) profit exists when Total Revenue exceeds Total Cost (including normal profit)."
        },
        {
            id: 8,
            question: "At equilibrium, the producer always earns a positive profit.",
            isTrue: false,
            explanation: "Equilibrium means profit is maximised, but the maximum profit could be zero (break-even) or even negative (loss minimisation)."
        },
        {
            id: 9,
            question: "In the long run, a perfectly competitive firm earns only normal profit.",
            isTrue: true,
            explanation: "Free entry and exit ensure that super-normal profits are competed away in the long run."
        },
        {
            id: 10,
            question: "If MR is constant and MC is rising, there can be only one equilibrium point.",
            isTrue: true,
            explanation: "A rising MC curve will intersect a horizontal MR line at exactly one point, giving a unique equilibrium."
        }
    ]
};
