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
        },
        {
            question: "Supply refers to the quantity of a good that a seller is:",
            options: [
                "Willing to sell",
                "Able to sell",
                "Willing and able to sell at a given price and time",
                "Forced to sell by the government"
            ],
            correctAnswer: 2,
            explanation: "Supply in economics requires both willingness and ability to offer goods for sale at a specific price during a specific time period."
        },
        {
            question: "The supply curve slopes upward from left to right because:",
            options: [
                "Higher price means lower cost",
                "Higher price means more profit, incentivising more production",
                "Lower price means more production",
                "Costs decrease with output"
            ],
            correctAnswer: 1,
            explanation: "At higher prices, producers earn more profit per unit and are motivated to supply more, giving the curve a positive slope."
        },
        {
            question: "Which of the following will cause a rightward shift of the supply curve?",
            options: [
                "Increase in the price of inputs",
                "Imposition of a new tax",
                "Improvement in technology",
                "Decrease in number of firms"
            ],
            correctAnswer: 2,
            explanation: "Better technology reduces production costs, allowing firms to supply more at every price (rightward shift)."
        },
        {
            question: "Increase in the number of firms in an industry will:",
            options: [
                "Decrease market supply",
                "Increase market supply",
                "Have no effect on market supply",
                "Decrease individual supply"
            ],
            correctAnswer: 1,
            explanation: "More firms mean more producers offering goods, increasing the total market supply (rightward shift)."
        },
        {
            question: "A subsidy given by the government to producers will:",
            options: [
                "Shift supply curve to the left",
                "Shift supply curve to the right",
                "Have no effect on supply",
                "Shift demand curve to the right"
            ],
            correctAnswer: 1,
            explanation: "A subsidy reduces the effective cost of production, encouraging more supply at every price (rightward shift)."
        },
        {
            question: "If the goal of a firm changes from profit maximization to sales maximization, supply will:",
            options: [
                "Decrease",
                "Increase",
                "Remain unchanged",
                "Become zero"
            ],
            correctAnswer: 1,
            explanation: "A firm aiming for sales maximization produces and sells more output compared to profit maximization."
        },
        {
            question: "Market supply is the:",
            options: [
                "Supply of the largest firm",
                "Average supply of all firms",
                "Horizontal summation of individual supply curves",
                "Vertical summation of individual supply curves"
            ],
            correctAnswer: 2,
            explanation: "Market supply at each price is the sum of quantities supplied by all individual firms (horizontal summation)."
        },
        {
            question: "Price elasticity of supply measures:",
            options: [
                "Responsiveness of quantity supplied to change in income",
                "Responsiveness of quantity supplied to change in own price",
                "Responsiveness of supply to change in technology",
                "Responsiveness of demand to change in price"
            ],
            correctAnswer: 1,
            explanation: "Price elasticity of supply = (% change in quantity supplied) / (% change in price)."
        },
        {
            question: "If Es > 1, supply is:",
            options: [
                "Inelastic",
                "Elastic",
                "Unitary elastic",
                "Perfectly inelastic"
            ],
            correctAnswer: 1,
            explanation: "Es > 1 means quantity supplied changes proportionately more than price, indicating elastic supply."
        },
        {
            question: "Supply of perishable goods (like fresh flowers) is:",
            options: [
                "Perfectly elastic",
                "Highly elastic",
                "Relatively inelastic",
                "Unitary elastic"
            ],
            correctAnswer: 2,
            explanation: "Perishable goods cannot be stored, so producers cannot significantly increase supply in response to higher prices, making supply inelastic."
        },
        {
            question: "Contraction of supply means:",
            options: [
                "Supply curve shifts to the left",
                "Less quantity supplied at a lower price (movement along the curve)",
                "Supply curve shifts to the right",
                "Supply decreases due to higher taxes"
            ],
            correctAnswer: 1,
            explanation: "Contraction is a decrease in quantity supplied due to fall in own price — an upward-to-leftward movement along the same supply curve."
        },
        {
            question: "Expectation of rise in future price will cause current supply to:",
            options: [
                "Increase",
                "Decrease",
                "Remain the same",
                "Become perfectly elastic"
            ],
            correctAnswer: 1,
            explanation: "If producers expect prices to rise, they may hold back current supply (decrease) to sell more in the future at higher prices."
        },
        {
            question: "A supply curve passing through the origin has elasticity:",
            options: [
                "Greater than 1",
                "Less than 1",
                "Equal to 1",
                "Equal to 0"
            ],
            correctAnswer: 2,
            explanation: "Any straight-line supply curve passing through the origin has unitary elasticity (Es = 1), regardless of its slope."
        },
        {
            question: "An increase in the price of a related good (which the firm can also produce) will:",
            options: [
                "Increase supply of the given good",
                "Decrease supply of the given good",
                "Have no effect on supply",
                "Increase demand for the given good"
            ],
            correctAnswer: 1,
            explanation: "If an alternative product becomes more profitable, the firm may shift resources to produce it, reducing supply of the original good."
        },
        {
            question: "Which of the following is an exception to the Law of Supply?",
            options: [
                "Agricultural products affected by natural factors",
                "Luxury goods",
                "Electronic goods",
                "Textiles"
            ],
            correctAnswer: 0,
            explanation: "Agricultural supply depends heavily on weather and seasons, not just price. Output cannot be increased merely because price rises."
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
        },
        {
            question: "The supply curve always has a positive slope.",
            answer: false,
            explanation: "Generally yes, but there are exceptions like backward-bending supply curve of labour and supply of perishable goods."
        },
        {
            question: "Change in own price causes a shift in the supply curve.",
            answer: false,
            explanation: "Change in own price causes movement along the supply curve (expansion or contraction), not a shift."
        },
        {
            question: "A tax on production is equivalent to an increase in cost and shifts supply to the left.",
            answer: true,
            explanation: "Tax raises the effective cost of production, reducing profitability and causing firms to supply less at every price."
        },
        {
            question: "Price elasticity of supply is always positive.",
            answer: true,
            explanation: "Since price and quantity supplied move in the same direction (Law of Supply), elasticity of supply is positive."
        },
        {
            question: "If a straight-line supply curve meets the Y-axis (above origin), its elasticity is greater than one.",
            answer: true,
            explanation: "A straight-line supply curve with a positive Y-intercept has Es > 1 at every point."
        },
        {
            question: "In the very short run (market period), supply is perfectly elastic.",
            answer: false,
            explanation: "In the market period, supply is perfectly INELASTIC (vertical) because output cannot be changed at all."
        },
        {
            question: "A decrease in the number of sellers in the market will decrease market supply.",
            answer: true,
            explanation: "Fewer sellers means less total quantity offered at every price, shifting market supply leftward."
        },
        {
            question: "Supply is a flow concept, measured over a period of time.",
            answer: true,
            explanation: "Supply is always expressed as quantity per unit of time (e.g., 100 units per week), making it a flow concept."
        }
    ]
};
