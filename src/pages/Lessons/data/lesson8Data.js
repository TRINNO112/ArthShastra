import { FaDollarSign, FaTable, FaChartLine, FaBalanceScale, FaClock, FaIndustry, FaCalculator, FaQuestionCircle, FaProjectDiagram } from 'react-icons/fa';

export const lesson8Data = {
  title: "Concepts of Cost",
  subtitle: "Short-run costs, TC/FC/VC, AC/MC curves (NCERT/VK Ohri Class 11)",
  sections: [
    { id: 'intro', name: 'Introduction', icon: FaDollarSign },
    { id: 'schedule', name: 'Cost Schedule', icon: FaTable },
    { id: 'curves', name: 'Cost Curves', icon: FaChartLine },
    { id: 'shutdown', name: 'Break-Even & Shutdown', icon: FaBalanceScale },
    { id: 'fixed-variable', name: 'Fixed vs Variable Costs', icon: FaBalanceScale },
    { id: 'short-long', name: 'Short vs Long Run', icon: FaClock },
    { id: 'relationships', name: 'Relationships', icon: FaProjectDiagram },
    { id: 'examples', name: 'Real-World Examples', icon: FaIndustry },
    { id: 'practice', name: 'Practice Problems', icon: FaCalculator },
    { id: 'quiz', name: 'Quiz', icon: FaQuestionCircle }
  ],
  mcqQuestions: [
    {
      question: "Fixed costs:",
      options: ["Vary with output", "Do not vary with output", "Are only labor costs", "Decrease with output"],
      correct: 1,
      explanation: "Fixed costs (rent, salaries) remain constant regardless of production level."
    },
    {
      question: "Marginal Cost is:",
      options: ["TC/Q", "ΔTC/ΔQ", "FC/Q", "VC/Q"],
      correct: 1,
      explanation: "MC = change in Total Cost per unit change in output."
    },
    // Add 6-10 more...
    {
      question: "AC curve is U-shaped because:",
      options: ["Increasing returns", "Diminishing returns", "Fixed costs spread", "All of above"],
      correct: 3,
      explanation: "Spreading FC + diminishing returns cause U-shape."
    }
  ],
  tfQuestions: [
    {
      question: "MC intersects AC at its minimum point.",
      correct: true,
      explanation: "When MC < AC, AC falls; MC > AC, AC rises."
    },
    {
      question: "In long run, all costs are variable.",
      correct: true,
      explanation: "No fixed factors in long run."
    }
    // Add 3 more...
  ]
};
