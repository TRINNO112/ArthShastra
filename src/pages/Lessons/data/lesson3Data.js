/**
 * Lesson 3 Data - Consumer Equilibrium: Utility Analysis
 * Based on VK Ohri's Grade 11 Economics Textbook
 *
 * TODO: Add actual quiz questions for:
 * - Who is a Consumer
 * - Concept of Utility (TU, MU, relationship)
 * - Law of Diminishing Marginal Utility
 * - Consumer Equilibrium (one commodity & two commodity cases)
 * - Limitations of Utility Analysis
 */

// MCQ Questions - Add more as needed
export const lesson3Data = {
  mcqQuestions: [
    {
      id: 1,
      question: "What is the definition of a consumer in economics?",
      options: [
        "A person who buys goods only for resale",
        "A person who purchases goods and services for personal consumption",
        "A person who produces goods and services",
        "A person who sells goods in the market"
      ],
      correct: 1,
      topic: "who-is-consumer"
    },
    {
      id: 2,
      question: "Utility in economics refers to:",
      options: [
        "The price of a commodity",
        "The usefulness of a commodity in satisfying wants",
        "The quantity of a commodity",
        "The quality of a commodity"
      ],
      correct: 1,
      topic: "concept-of-utility"
    },
    {
      id: 3,
      question: "Total Utility reaches maximum when:",
      options: [
        "Marginal Utility is zero",
        "Marginal Utility is positive",
        "Marginal Utility is negative",
        "Marginal Utility is maximum"
      ],
      correct: 0,
      topic: "concept-of-utility"
    },
    {
      id: 4,
      question: "The Law of Diminishing Marginal Utility states that:",
      options: [
        "As consumption increases, total utility increases",
        "As consumption of a commodity increases, MU decreases",
        "As price increases, demand decreases",
        "As income increases, consumption increases"
      ],
      correct: 1,
      topic: "dmu"
    },
    {
      id: 5,
      question: "Consumer equilibrium through utility analysis in one commodity case occurs when:",
      options: [
        "MU = Price",
        "MU > Price",
        "MU < Price",
        "Price = 0"
      ],
      correct: 0,
      topic: "consumer-equilibrium"
    },
    {
      id: 6,
      question: "Which is a basic assumption of utility analysis?",
      options: [
        "Utility can be measured in monetary terms",
        "Utility can be measured in cardinal numbers",
        "Utility cannot be measured",
        "Only one commodity can be consumed"
      ],
      correct: 1,
      topic: "limitations"
    }
    // TODO: Add more MCQ questions covering all topics
  ],

  // True/False Questions - Add more as needed
  tfQuestions: [
    {
      id: 1,
      question: "A consumer is someone who buys goods for personal consumption.",
      correct: true,
      topic: "who-is-consumer"
    },
    {
      id: 2,
      question: "Utility is the same as usefulness.",
      correct: true,
      topic: "concept-of-utility"
    },
    {
      id: 3,
      question: "Total Utility always increases with each additional unit consumed.",
      correct: false,
      topic: "concept-of-utility"
    },
    {
      id: 4,
      question: "Marginal Utility is the additional utility from consuming one more unit.",
      correct: true,
      topic: "concept-of-utility"
    },
    {
      id: 5,
      question: "The Law of Diminishing Marginal Utility operates only for normal goods.",
      correct: false,
      topic: "dmu"
    },
    {
      id: 6,
      question: "In two commodity case, consumer equilibrium is when MUx/Px = MUy/Py.",
      correct: true,
      topic: "consumer-equilibrium"
    }
    // TODO: Add more T/F questions
  ],

  // Practice/Essay Questions
  practiceQuestions: [
    {
      id: 1,
      question: "Explain the concept of a consumer. Differentiate between a consumer and a producer.",
      points: 3,
      topic: "who-is-consumer"
    },
    {
      id: 2,
      question: "Define Total Utility and Marginal Utility. Explain the relationship between them with a table and diagram.",
      points: 4,
      topic: "concept-of-utility"
    },
    {
      id: 3,
      question: "State and explain the Law of Diminishing Marginal Utility. Discuss its two basic assumptions.",
      points: 4,
      topic: "dmu"
    },
    {
      id: 4,
      question: "Explain the conditions of consumer equilibrium in the case of two commodities.",
      points: 4,
      topic: "consumer-equilibrium"
    },
    {
      id: 5,
      question: "Discuss the basic limitations of utility analysis.",
      points: 3,
      topic: "limitations"
    }
  ]
};

/**
 * Data structure for TU and MU illustration
 * TODO: Add detailed numerical examples for teaching
 */
export const tuMuIllustrationData = [
  { units: 1, mu: 20, tu: 20 },
  { units: 2, mu: 15, tu: 35 },
  { units: 3, mu: 10, tu: 45 },
  { units: 4, mu: 5, tu: 50 },
  { units: 5, mu: 0, tu: 50 },
  { units: 6, mu: -5, tu: 45 }
  // TODO: Customize with actual textbook examples
];

/**
 * DMU tabular presentation data
 * TODO: Add more examples showing diminishing MU
 */
export const dmuTableData = [
  { unit: 1, mu: 10, tu: 10, comment: "First unit gives highest satisfaction" },
  { unit: 2, mu: 8, tu: 18, comment: "Second unit gives less satisfaction" },
  { unit: 3, mu: 6, tu: 24, comment: "Third unit gives even less" },
  { unit: 4, mu: 4, tu: 28, comment: "Utility continues to diminish" },
  { unit: 5, mu: 2, tu: 30, comment: "Approaching saturation" }
  // TODO: Add more rows as needed
];

/**
 * Consumer Equilibrium cases data
 * TODO: Add detailed numerical examples
 */
export const equilibriumCases = {
  oneCommodity: {
    example: [
      { unit: 1, mu: 20, price: 5, decision: "Buy (MU > P)" },
      { unit: 2, mu: 15, price: 5, decision: "Buy (MU > P)" },
      { unit: 3, mu: 10, price: 5, decision: "Buy (MU = P)" },
      { unit: 4, mu: 5, price: 5, decision: "Stop (MU < P)" }
    ],
    condition: "Consumer will buy units as long as MU >= Price",
    equilibriumPoint: "At unit 3, MU = Price = 10"
  },
  twoCommodity: {
    example: [
      { commodity: "Apple", mu: 20, price: 5, mup: 4 },
      { commodity: "Orange", mu: 15, price: 3, mup: 5 }
    ],
    condition: "Consumer equilibrium when MUx/Px = MUy/Py",
    explanation: "In the example, MU Apple / P Apple = 4, MU Orange / P Orange = 5. Consumer should buy more Oranges and fewer Apples."
  }
};
