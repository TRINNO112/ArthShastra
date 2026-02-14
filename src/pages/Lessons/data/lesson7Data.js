import {
  FaIndustry,
  FaTable,
  FaChartLine,
  FaArrowUp,
  FaBalanceScale,
  FaLightbulb,
  FaCalculator,
  FaClipboardList
} from 'react-icons/fa';

export const lesson7Data = {
  sections: [
    { id: 'production-function', name: 'Production Function', icon: FaIndustry },
    { id: 'production-schedule', name: 'Production Schedule', icon: FaTable },
    { id: 'returns-chart', name: 'Returns Chart', icon: FaChartLine },
    { id: 'stages', name: 'Stages of Production', icon: FaArrowUp },
    { id: 'assumptions', name: 'Assumptions & Limitations', icon: FaBalanceScale },
    { id: 'examples', name: 'Real World Examples', icon: FaLightbulb },
    { id: 'practice', name: 'Practice Problems', icon: FaCalculator },
    { id: 'quiz', name: 'Quiz', icon: FaClipboardList }
  ],
  mcqQuestions: [
    {
      question: "The production function shows the relationship between:",
      options: ["Costs and revenues", "Physical inputs and physical output", "Demand and supply", "Price and quantity"],
      correct: 1
    },
    {
      question: "Marginal product of labor is:",
      options: ["Total product divided by labor", "Change in total product due to one additional unit of labor", "Maximum possible output", "Fixed factor contribution"],
      correct: 1
    },
    {
      question: "A rational producer operates in which stage of production?",
      options: ["Stage I", "Stage II", "Stage III", "Stage IV"],
      correct: 1
    },
    {
      question: "The law of variable proportions applies in the:",
      options: ["Long run", "Short run", "Both short and long run", "Neither"],
      correct: 1
    },
    {
      question: "Production stops being rational when:",
      options: ["MP > 0", "MP = 0", "MP < 0", "AP = 0"],
      correct: 2
    },
    {
      question: "Average product rises when:",
      options: ["MP < AP", "MP > AP", "MP = AP", "MP = 0"],
      correct: 1
    },
    {
      question: "In stage I, both AP and MP are:",
      options: ["Decreasing", "Increasing", "Constant", "Negative"],
      correct: 1
    },
    {
      question: "Point of Inflexion is a point where:",
      options: ["TP stops increasing", "MP is maximum", "TP changes slope from convex to concave", "AP is maximum"],
      correct: 2
    },
    {
      question: "Which of the following is a cause of Increasing Returns to a Factor?",
      options: ["Fixity of factors", "Poor coordination", "Fuller utilization of fixed factor", "Managerial inefficiency"],
      correct: 2
    },
    {
      question: "When MP is zero, Total Product (TP) is:",
      options: ["Zero", "Minimum", "Maximum and constant", "Falling"],
      correct: 2
    },
    {
      question: "The period in which all factors of production are variable is called:",
      options: ["Short Run", "Market Period", "Long Run", "Very Short Run"],
      correct: 2
    },
    {
      question: "If Total Product (TP) is increasing at a decreasing rate, then Marginal Product (MP) must be:",
      options: ["Rising", "Falling but positive", "Negative", "Zero"],
      correct: 1
    },
    {
      question: "Which curve is known as the 'Envelope Curve' in the long run? (Bonus Concept)",
      options: ["LAC Curve", "TFC Curve", "AVC Curve", "SMC Curve"],
      correct: 0
    },
    {
      question: "What happens to AP when MP > AP?",
      options: ["AP falls", "AP remains constant", "AP rises", "AP becomes negative"],
      correct: 2
    },
    {
      question: "Returns to scale refers to the change in output when:",
      options: ["Only labor is increased", "Only capital is increased", "All inputs are changed proportionately", "Technology changes"],
      correct: 2
    },
    {
      question: "Which of the following is a cause of diminishing returns to a factor?",
      options: ["Better coordination of factors", "Optimum factor proportion", "Overcrowding and poor coordination due to excess variable factor", "Increasing efficiency"],
      correct: 2
    },
    {
      question: "AP is at its maximum when:",
      options: ["MP is zero", "MP equals AP", "MP is at maximum", "TP is at maximum"],
      correct: 1
    },
    {
      question: "In Stage III of production, TP is:",
      options: ["Rising", "At maximum", "Falling", "Constant"],
      correct: 2
    },
    {
      question: "The short-run production function is also known as:",
      options: ["Law of Returns to Scale", "Law of Variable Proportions", "Law of Demand", "Law of Supply"],
      correct: 1
    },
    {
      question: "MP curve cuts the AP curve:",
      options: ["From below at AP's minimum", "From above at AP's maximum", "At AP's minimum", "At AP's maximum"],
      correct: 3
    }
  ],
  tfQuestions: [
    {
      question: "The state of technology is assumed constant in the law of returns to a factor.",
      correct: true
    },
    {
      question: "Diminishing returns occur only after the point where MP is maximum.",
      correct: true
    },
    {
      question: "Marginal Product can never be negative in the short run.",
      correct: false
    },
    {
      question: "The Law of Variable Proportions applies to agriculture only.",
      correct: false
    },
    {
      question: "When TP is maximum, the slope of the TP curve is zero.",
      correct: true
    },
    {
      question: "Ideally, a firm should operate in Stage I where returns are increasing.",
      correct: false
    },
    {
      question: "AP can never be negative even when MP is negative.",
      correct: true
    },
    {
      question: "When MP is negative, adding more variable factor actually reduces total output.",
      correct: true
    },
    {
      question: "The law of variable proportions assumes that all units of the variable factor are equally efficient.",
      correct: true
    },
    {
      question: "In the long run, there are no fixed factors of production.",
      correct: true
    }
  ]
};
