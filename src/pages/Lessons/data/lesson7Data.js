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
    }
  ]
};
