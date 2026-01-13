// Data for Lesson 5: Theory of Demand
import { FaChartLine, FaShoppingBasket, FaUsers, FaArrowDown, FaPercentage, FaClipboardList, FaExchangeAlt, FaListUl } from 'react-icons/fa';

export const lesson5Data = {
  title: "Theory of Demand",
  subtitle: "Consumer Behaviour and Market Demand",

  // Navigation Sections
  sections: [
    { id: 'concept-demand', name: 'Concept of Demand', icon: FaChartLine },
    { id: 'determinants', name: 'Determinants', icon: FaShoppingBasket },
    { id: 'law-demand', name: 'Law of Demand', icon: FaArrowDown },
    { id: 'movement-shift', name: 'Movement vs Shift', icon: FaExchangeAlt },
    { id: 'elasticity', name: 'Price Elasticity', icon: FaPercentage },
    { id: 'factors-elasticity', name: 'Factors of Elasticity', icon: FaListUl },
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
  ],

  // Quiz Data
  mcqQuestions: [
    {
      question: "Which of the following is NOT a determinant of demand for a normal good?",
      options: [
        "Price of the good",
        "Income of the consumer",
        "Cost of production",
        "Tastes and preferences"
      ],
      correctAnswer: 2,
      explanation: "Cost of production affects supply, not demand. Demand depends on price, income, related goods, tastes, etc."
    },
    {
      question: "Law of Demand states that there is an inverse relationship between:",
      options: [
        "Income and Quantity Demanded",
        "Price and Quantity Demanded",
        "Price of Substitutes and Quantity Demanded",
        "Tastes and Quantity Demanded"
      ],
      correctAnswer: 1,
      explanation: "The Law of Demand states that other things remaining equal, quantity demanded decreases when price increases, and vice versa."
    },
    {
      question: "If the price of Tea increases, the demand for Coffee will:",
      options: [
        "Increase",
        "Decrease",
        "Remain constant",
        "Become zero"
      ],
      correctAnswer: 0,
      explanation: "Tea and Coffee are Substitute Goods. When price of a substitute (Tea) rises, consumers switch to the other good (Coffee), increasing its demand."
    },
    {
      question: "Demand for Salt is likely to be:",
      options: [
        "Perfectly Elastic",
        "Highly Elastic",
        "Inelastic",
        "Unitary Elastic"
      ],
      correctAnswer: 2,
      explanation: "Salt is a necessity with no close substitutes and takes a very small portion of income, so its demand is inelastic (price changes don't affect consumption much)."
    },
    {
      question: "Movement along the demand curve occurs due to change in:",
      options: [
        "Own Price of the commodity",
        "Income of Consumer",
        "Price of Related Goods",
        "Tastes and Preferences"
      ],
      correctAnswer: 0,
      explanation: "Change in Own Price leads to 'Extension' or 'Contraction' of demand, shown as movement along the same curve. Other factors cause a 'Shift'."
    },
    {
      question: "Which of the following goods has inelastic demand?",
      options: [
        "Luxury Car",
        "Life Saving Medicine",
        "Air Conditioner",
        "Pizza"
      ],
      correctAnswer: 1,
      explanation: "Life Saving Medicines are absolute necessities and cannot be postponed, so their demand is inelastic."
    },
    {
      question: "A rightward shift in demand curve indicates:",
      options: [
        "Decrease in Demand",
        "Increase in Demand",
        "Contraction of Demand",
        "Extension of Demand"
      ],
      correctAnswer: 1,
      explanation: "Rightward shift represents an Increase in Demand at the same price, caused by favorable changes in other factors."
    }
  ],

  tfQuestions: [
    {
      question: "Demand and Want are the same thing in economics.",
      answer: false,
      explanation: "Want is just a desire effectively backed by purchasing power, but Demand also requires willingness to spend at a given price and time."
    },
    {
      question: "For inferior goods, demand falls when income rises.",
      answer: true,
      explanation: "Inferior goods have a negative income effect. As people get richer, they buy less of inferior goods and switch to superior alternatives."
    },
    {
      question: "A vertical demand curve represents perfectly elastic demand.",
      answer: false,
      explanation: "A vertical demand curve represents Perfectly Inelastic Demand (Ed = 0). Perfectly Elastic Demand is a horizontal line."
    },
    {
      question: "Total Expenditure Method is one way to measure Price Elasticity of Demand.",
      answer: true,
      explanation: "Yes, along with Percentage Method and Geometric Method, Total Expenditure Method (Relation between Price and Total Outlay) is used."
    },
    {
      question: "If a good has many substitutes, its demand is likely to be inelastic.",
      answer: false,
      explanation: "If a good has many substitutes, its demand is Elastic because consumers can easily switch to other goods if price rises."
    }
  ]
};
