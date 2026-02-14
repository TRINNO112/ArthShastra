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
      question: "A rightward shift in demand curve indicates:",
      options: [
        "Decrease in Demand",
        "Increase in Demand",
        "Contraction of Demand",
        "Extension of Demand"
      ],
      correctAnswer: 1,
      explanation: "Rightward shift represents an Increase in Demand at the same price, caused by favorable changes in other factors."
    },
    {
      question: "Demand in economics means:",
      options: [
        "Desire for a commodity",
        "Need for a commodity",
        "Desire backed by ability and willingness to pay at a given price and time",
        "Quantity of goods purchased"
      ],
      correctAnswer: 2,
      explanation: "Demand requires three conditions: desire, ability to pay (purchasing power), and willingness to pay at a given price and time."
    },
    {
      question: "A Giffen good is one where:",
      options: [
        "Demand falls when price falls",
        "Demand rises when price rises",
        "Both (a) and (b)",
        "Demand is constant regardless of price"
      ],
      correctAnswer: 2,
      explanation: "For Giffen goods (inferior staples like coarse grain), demand rises with price rise and falls with price fall — an exception to the law of demand."
    },
    {
      question: "Which of the following is an exception to the Law of Demand?",
      options: [
        "Normal goods",
        "Veblen goods (goods of conspicuous consumption)",
        "Complementary goods",
        "Substitute goods"
      ],
      correctAnswer: 1,
      explanation: "Veblen goods (like diamonds, designer items) are bought for status. Higher price increases their prestige value, so demand rises with price."
    },
    {
      question: "The demand curve slopes downward from left to right because of:",
      options: [
        "Law of Diminishing Marginal Utility",
        "Income effect and Substitution effect",
        "New consumers entering at lower prices",
        "All of these"
      ],
      correctAnswer: 3,
      explanation: "The downward slope is explained by diminishing MU, income effect, substitution effect, and new buyers at lower prices."
    },
    {
      question: "If price of Petrol rises, demand for Cars will:",
      options: [
        "Increase",
        "Decrease",
        "Remain the same",
        "Cannot be determined"
      ],
      correctAnswer: 1,
      explanation: "Petrol and Cars are complementary goods. A rise in price of one reduces demand for the other."
    },
    {
      question: "Market demand is obtained by:",
      options: [
        "Multiplying individual demand by price",
        "Horizontal summation of individual demand curves",
        "Vertical summation of individual demand curves",
        "Averaging individual demands"
      ],
      correctAnswer: 1,
      explanation: "Market demand is the horizontal (quantity-wise) summation of all individual demand curves at each price level."
    },
    {
      question: "An increase in income leads to a leftward shift of the demand curve for:",
      options: [
        "Normal goods",
        "Luxury goods",
        "Inferior goods",
        "Complementary goods"
      ],
      correctAnswer: 2,
      explanation: "For inferior goods, as income rises, consumers shift to better alternatives, so demand decreases (leftward shift)."
    },
    {
      question: "Extension of demand refers to:",
      options: [
        "Increase in demand due to rise in income",
        "Rise in quantity demanded due to fall in own price",
        "Shift of demand curve to the right",
        "Rise in demand due to fall in price of complement"
      ],
      correctAnswer: 1,
      explanation: "Extension (expansion) of demand is movement downward along the same demand curve when own price falls."
    },
    {
      question: "Which of the following causes a shift in the demand curve?",
      options: [
        "Change in own price of the commodity",
        "Change in income of the consumer",
        "Movement along the curve",
        "Extension of demand"
      ],
      correctAnswer: 1,
      explanation: "Change in income (and other factors like tastes, prices of related goods) causes the entire demand curve to shift."
    },
    {
      question: "If consumers expect the price of a good to rise in the future, current demand will:",
      options: [
        "Decrease",
        "Increase",
        "Remain unchanged",
        "Become zero"
      ],
      correctAnswer: 1,
      explanation: "Expectation of future price rise makes consumers buy more now, increasing current demand."
    },
    {
      question: "The demand function is expressed as Dx = f(Px). This means:",
      options: [
        "Demand is a function of income",
        "Demand for good X depends on its own price",
        "Demand for good X depends on price of related goods",
        "Demand depends on tastes"
      ],
      correctAnswer: 1,
      explanation: "Dx = f(Px) is the simple demand function showing that demand for X is a function of its own price, other things constant."
    },
    {
      question: "A demand schedule shows:",
      options: [
        "Relationship between income and demand",
        "Relationship between price and quantity demanded in tabular form",
        "Total expenditure at different prices",
        "Supply and demand together"
      ],
      correctAnswer: 1,
      explanation: "A demand schedule is a tabular representation showing different quantities demanded at different price levels."
    },
    {
      question: "Contraction of demand is shown by:",
      options: [
        "Leftward shift of demand curve",
        "Rightward shift of demand curve",
        "Upward movement along the demand curve",
        "Downward movement along the demand curve"
      ],
      correctAnswer: 2,
      explanation: "Contraction means less quantity demanded at a higher price — shown by upward (leftward) movement along the same curve."
    },
    {
      question: "Which pair of goods are complementary?",
      options: [
        "Tea and Coffee",
        "Pen and Ink",
        "Coke and Pepsi",
        "Rice and Wheat"
      ],
      correctAnswer: 1,
      explanation: "Pen and Ink are used together (complementary). Tea-Coffee and Coke-Pepsi are substitutes. Rice-Wheat are substitutes."
    },
    {
      question: "Change in quantity demanded vs change in demand — which statement is correct?",
      options: [
        "Both mean the same thing",
        "Change in quantity demanded is due to own price; change in demand is due to other factors",
        "Change in demand is due to own price; change in quantity demanded is due to other factors",
        "Neither involves price changes"
      ],
      correctAnswer: 1,
      explanation: "Change in quantity demanded = movement along curve (own price change). Change in demand = shift of curve (other factors change)."
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
      question: "The Law of Demand holds true for Giffen goods.",
      answer: false,
      explanation: "Giffen goods are an exception to the Law of Demand. Their demand increases when price rises."
    },
    {
      question: "A fall in the price of a substitute leads to a decrease in demand for the given good.",
      answer: true,
      explanation: "If substitute becomes cheaper, consumers switch to it, reducing demand for the given good."
    },
    {
      question: "Change in own price causes a shift of the demand curve.",
      answer: false,
      explanation: "Change in own price causes movement along the demand curve (extension or contraction), not a shift."
    },
    {
      question: "Market demand curve is flatter than individual demand curves.",
      answer: true,
      explanation: "Market demand is the horizontal summation, so at each price the total quantity is larger, making the curve flatter."
    },
    {
      question: "An increase in the price of a complementary good leads to a decrease in demand.",
      answer: true,
      explanation: "Complements are used together. If the price of one rises, demand for both falls."
    },
    {
      question: "Demand curve always slopes downward from left to right.",
      answer: false,
      explanation: "Generally yes, but exceptions exist: Giffen goods and Veblen goods have upward-sloping demand curves."
    },
    {
      question: "A change in tastes in favour of a good shifts its demand curve to the right.",
      answer: true,
      explanation: "Favourable change in tastes increases demand at every price, shifting the curve rightward."
    },
    {
      question: "The substitution effect states that consumers buy more of a good when its price falls because it becomes relatively cheaper.",
      answer: true,
      explanation: "When a good's price falls, it becomes cheaper relative to substitutes, so consumers substitute towards it."
    }
  ]
};
