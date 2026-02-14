// Data for Lesson 6: Price Elasticity of Demand
import { FaPercentage, FaCalculator, FaListUl, FaLightbulb, FaClipboardList, FaChartBar } from 'react-icons/fa';

export const lesson6Data = {
  title: "Price Elasticity of Demand",
  subtitle: "Measuring Consumer Responsiveness",

  // Navigation Sections
  sections: [
    { id: 'introduction', name: 'Introduction', icon: FaPercentage },
    { id: 'concept-measurement', name: 'Concept & Measurement', icon: FaCalculator },
    { id: 'types-elasticity', name: 'Types of Elasticity', icon: FaListUl },
    { id: 'factors-affecting', name: 'Factors Affecting', icon: FaLightbulb },
    { id: 'applications', name: 'Applications', icon: FaChartBar },
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
  ],

  // Quiz Data
  mcqQuestions: [
    {
      question: "If the price elasticity of demand for a good is 2.5, this means:",
      options: [
        "Demand is perfectly elastic",
        "A 1% increase in price causes a 2.5% decrease in quantity demanded",
        "The good is a necessity",
        "Demand is perfectly inelastic"
      ],
      correctAnswer: 1,
      explanation: "Price elasticity of 2.5 means the good is relatively elastic - quantity demanded changes more than proportionately to price changes."
    },
    {
      question: "Which of the following goods would likely have the most elastic demand?",
      options: [
        "Salt",
        "Luxury cars",
        "Life-saving medicines",
        "Electricity"
      ],
      correctAnswer: 1,
      explanation: "Luxury cars have many substitutes and are not necessities, making their demand more elastic compared to essential goods."
    },
    {
      question: "The total expenditure method shows that demand is elastic when:",
      options: [
        "Total expenditure increases as price increases",
        "Total expenditure decreases as price increases",
        "Total expenditure remains constant as price changes",
        "Price and quantity move in the same direction"
      ],
      correctAnswer: 1,
      explanation: "For elastic demand, a price increase causes a larger percentage decrease in quantity demanded, reducing total revenue."
    },
    {
      question: "Which factor does NOT affect price elasticity of demand?",
      options: [
        "Availability of substitutes",
        "Time period",
        "Cost of production",
        "Proportion of income spent on the good"
      ],
      correctAnswer: 2,
      explanation: "Cost of production affects supply, not demand elasticity. The other factors all influence how responsive consumers are to price changes."
    },
    {
      question: "For a good with unitary elastic demand, if price increases by 10%, quantity demanded will:",
      options: [
        "Increase by 10%",
        "Decrease by 10%",
        "Remain unchanged",
        "Decrease by more than 10%"
      ],
      correctAnswer: 1,
      explanation: "Unitary elastic demand (Ed = 1) means percentage change in quantity equals percentage change in price, but in opposite direction."
    },
    {
      question: "The formula for price elasticity of demand by percentage method is:",
      options: [
        "Percentage change in price / Percentage change in quantity demanded",
        "Percentage change in quantity demanded / Percentage change in price",
        "Change in quantity / Change in price",
        "Price / Quantity"
      ],
      correctAnswer: 1,
      explanation: "Ed = (% change in Qd) / (% change in P). It measures the responsiveness of quantity demanded to a change in price."
    },
    {
      question: "Price elasticity of demand is always:",
      options: [
        "Positive",
        "Negative",
        "Zero",
        "Greater than one"
      ],
      correctAnswer: 1,
      explanation: "Due to the inverse relationship between price and quantity demanded, the elasticity coefficient is always negative. We often use its absolute value."
    },
    {
      question: "If Ed = 0, the demand curve is:",
      options: [
        "Horizontal",
        "Vertical",
        "Downward sloping",
        "Upward sloping"
      ],
      correctAnswer: 1,
      explanation: "Ed = 0 means perfectly inelastic demand — quantity demanded does not change regardless of price change. The curve is a vertical straight line."
    },
    {
      question: "If Ed = ∞ (infinity), the demand curve is:",
      options: [
        "Vertical",
        "Horizontal",
        "Downward sloping with steep slope",
        "Upward sloping"
      ],
      correctAnswer: 1,
      explanation: "Ed = ∞ means perfectly elastic demand — even the slightest price change causes infinite change in quantity. The curve is horizontal."
    },
    {
      question: "When total expenditure remains constant as price changes, demand is:",
      options: [
        "Elastic (Ed > 1)",
        "Inelastic (Ed < 1)",
        "Unitary elastic (Ed = 1)",
        "Perfectly elastic"
      ],
      correctAnswer: 2,
      explanation: "When total expenditure (P × Q) remains unchanged with price change, the percentage changes in P and Q are equal, giving Ed = 1."
    },
    {
      question: "The geometric (point) method of measuring elasticity uses the formula:",
      options: [
        "Upper segment / Lower segment of the demand curve",
        "Lower segment / Upper segment of the demand curve",
        "Total length / Upper segment",
        "Lower segment / Total length"
      ],
      correctAnswer: 1,
      explanation: "At any point on a straight-line demand curve, Ed = Lower segment / Upper segment (measured from that point)."
    },
    {
      question: "At the midpoint of a straight-line demand curve, elasticity is:",
      options: [
        "Greater than 1",
        "Less than 1",
        "Equal to 1",
        "Equal to 0"
      ],
      correctAnswer: 2,
      explanation: "At the midpoint, upper segment = lower segment, so Ed = lower/upper = 1 (unitary elastic)."
    },
    {
      question: "Which of the following has the most inelastic demand?",
      options: [
        "Entertainment",
        "Luxury furniture",
        "Salt",
        "Foreign holidays"
      ],
      correctAnswer: 2,
      explanation: "Salt is a necessity with no close substitutes and takes a negligible proportion of income, making its demand highly inelastic."
    },
    {
      question: "If the price of a good falls from ₹20 to ₹15 and quantity demanded rises from 100 to 150, the elasticity (percentage method) is:",
      options: [
        "0.5",
        "1",
        "2",
        "1.5"
      ],
      correctAnswer: 2,
      explanation: "% change in Q = (50/100)×100 = 50%. % change in P = (5/20)×100 = 25%. Ed = 50/25 = 2."
    },
    {
      question: "Goods with many close substitutes tend to have:",
      options: [
        "Inelastic demand",
        "Elastic demand",
        "Unitary elastic demand",
        "Perfectly inelastic demand"
      ],
      correctAnswer: 1,
      explanation: "When many substitutes exist, consumers can easily switch, making demand more responsive (elastic) to price changes."
    },
    {
      question: "A good that takes a large proportion of consumer's income will have:",
      options: [
        "More elastic demand",
        "Less elastic demand",
        "Perfectly inelastic demand",
        "No relationship with income proportion"
      ],
      correctAnswer: 0,
      explanation: "If a good takes a large share of income (like housing), consumers are very sensitive to its price changes, making demand elastic."
    },
    {
      question: "Elasticity at the upper end (near Y-axis) of a straight-line demand curve is:",
      options: [
        "Equal to zero",
        "Equal to one",
        "Greater than one",
        "Less than one"
      ],
      correctAnswer: 2,
      explanation: "Near the Y-axis, the lower segment is much longer than the upper segment, so Ed = lower/upper > 1."
    },
    {
      question: "Using the total expenditure method, if price rises and total expenditure also rises, demand is:",
      options: [
        "Elastic",
        "Inelastic",
        "Unitary elastic",
        "Perfectly elastic"
      ],
      correctAnswer: 1,
      explanation: "If total expenditure rises with price, quantity fell proportionately less than price rose, meaning Ed < 1 (inelastic)."
    },
    {
      question: "The number of uses of a commodity affects its elasticity because:",
      options: [
        "More uses mean less elastic demand",
        "More uses mean more elastic demand",
        "Number of uses has no effect",
        "More uses mean perfectly inelastic demand"
      ],
      correctAnswer: 1,
      explanation: "A commodity with many uses (like electricity) has elastic demand — a fall in price leads to its use in more applications."
    },
    {
      question: "Price elasticity of demand for a commodity group (like food) compared to a specific item (like rice) is:",
      options: [
        "More elastic",
        "Less elastic",
        "Equally elastic",
        "Cannot be compared"
      ],
      correctAnswer: 1,
      explanation: "Broadly defined groups have fewer substitutes. Specific items (rice) can be substituted by other items (wheat), so their demand is more elastic."
    }
  ],

  tfQuestions: [
    {
      question: "Perfectly inelastic demand means that consumers are completely unresponsive to price changes.",
      answer: true,
      explanation: "Perfectly inelastic demand (Ed = 0) occurs when quantity demanded doesn't change at all with price changes, like for essential life-saving drugs."
    },
    {
      question: "The demand for necessities tends to be more elastic than the demand for luxuries.",
      answer: false,
      explanation: "Necessities tend to have inelastic demand because consumers must buy them regardless of price. Luxuries have more elastic demand."
    },
    {
      question: "In the long run, demand for most goods becomes more elastic.",
      answer: true,
      explanation: "Over time, consumers can find substitutes, change habits, or adjust their consumption patterns, making demand more elastic in the long run."
    },
    {
      question: "Price elasticity of demand is always measured in percentage terms to allow comparison.",
      answer: true,
      explanation: "Using percentages eliminates the problem of different units of measurement, making elasticity comparable across goods."
    },
    {
      question: "A perfectly elastic demand curve is a vertical straight line.",
      answer: false,
      explanation: "Perfectly elastic demand (Ed = ∞) is a horizontal straight line. A vertical line represents perfectly inelastic demand (Ed = 0)."
    },
    {
      question: "Total expenditure method can distinguish between elastic and inelastic demand but cannot give the exact value of elasticity.",
      answer: true,
      explanation: "The total expenditure method only tells whether Ed > 1, Ed < 1, or Ed = 1. For exact numerical value, use the percentage method."
    },
    {
      question: "Elasticity and slope of the demand curve are the same thing.",
      answer: false,
      explanation: "Slope is ΔP/ΔQ (constant along a straight line), while elasticity varies at every point on a straight-line demand curve."
    },
    {
      question: "At the point where the demand curve meets the X-axis, elasticity is zero.",
      answer: true,
      explanation: "At the X-axis intercept, the lower segment = 0, so Ed = 0/upper segment = 0 (perfectly inelastic)."
    },
    {
      question: "Habit-forming goods like cigarettes tend to have inelastic demand.",
      answer: true,
      explanation: "Addictive or habit-forming goods are difficult to give up, so quantity demanded is relatively unresponsive to price changes."
    },
    {
      question: "If the government wants to increase tax revenue, it should tax goods with elastic demand.",
      answer: false,
      explanation: "Taxing elastic goods causes large drops in quantity, reducing revenue. Tax inelastic goods for higher revenue since quantity barely changes."
    }
  ]
};
