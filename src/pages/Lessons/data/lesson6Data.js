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
    }
  ]
};