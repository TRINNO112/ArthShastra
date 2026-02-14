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
    {
      question: "AC curve is U-shaped because:",
      options: ["Increasing returns", "Diminishing returns", "Fixed costs spread", "All of above"],
      correct: 3,
      explanation: "Spreading FC + diminishing returns cause U-shape."
    },
    {
      question: "Total Cost (TC) is equal to:",
      options: ["TFC + TVC", "AFC + AVC", "MC × Q", "AR × Q"],
      correct: 0,
      explanation: "Total Cost is the sum of Total Fixed Cost and Total Variable Cost."
    },
    {
      question: "Which of the following is a fixed cost?",
      options: ["Cost of raw materials", "Wages of casual labor", "Rent of factory building", "Electricity charges based on usage"],
      correct: 2,
      explanation: "Rent of factory is a fixed cost as it does not change with the level of output."
    },
    {
      question: "Average Fixed Cost (AFC) curve:",
      options: ["Is U-shaped", "Is a rectangular hyperbola", "Rises continuously", "Is horizontal"],
      correct: 1,
      explanation: "AFC = TFC/Q. As output rises, AFC falls continuously forming a rectangular hyperbola. It never touches either axis."
    },
    {
      question: "Average Variable Cost (AVC) curve is:",
      options: ["Always falling", "Always rising", "U-shaped", "A rectangular hyperbola"],
      correct: 2,
      explanation: "AVC first falls due to increasing returns, then rises due to diminishing returns, forming a U-shape."
    },
    {
      question: "When MC is less than AC:",
      options: ["AC is rising", "AC is falling", "AC is constant", "AC is at minimum"],
      correct: 1,
      explanation: "When MC < AC, the marginal cost pulls the average down, so AC falls."
    },
    {
      question: "TFC curve is:",
      options: ["Upward sloping", "Downward sloping", "A horizontal straight line", "U-shaped"],
      correct: 2,
      explanation: "Total Fixed Cost remains constant at all levels of output, so it is a horizontal straight line."
    },
    {
      question: "TVC curve starts from:",
      options: ["The origin", "A positive point on Y-axis", "A positive point on X-axis", "The TFC curve"],
      correct: 0,
      explanation: "When output is zero, variable cost is zero. So TVC starts from the origin."
    },
    {
      question: "The vertical distance between TC and TVC curves is equal to:",
      options: ["MC", "AVC", "TFC", "AFC"],
      correct: 2,
      explanation: "Since TC = TFC + TVC, the gap between TC and TVC is always TFC (constant)."
    },
    {
      question: "MC curve cuts the AVC curve at its:",
      options: ["Maximum point", "Minimum point", "Any point", "Starting point"],
      correct: 1,
      explanation: "MC intersects AVC at AVC's minimum point. When MC < AVC, AVC falls; when MC > AVC, AVC rises."
    },
    {
      question: "Which cost can never be zero in the short run even if output is zero?",
      options: ["Variable cost", "Marginal cost", "Fixed cost", "Average cost"],
      correct: 2,
      explanation: "Fixed costs (rent, insurance) must be paid even when production is zero in the short run."
    },
    {
      question: "If TC at 5 units is ₹500 and TC at 4 units is ₹420, then MC of the 5th unit is:",
      options: ["₹100", "₹80", "₹500", "₹420"],
      correct: 1,
      explanation: "MC = Change in TC / Change in Q = (500 - 420) / 1 = ₹80."
    },
    {
      question: "In the long run, all costs are:",
      options: ["Fixed", "Variable", "Semi-variable", "Zero"],
      correct: 1,
      explanation: "In the long run, there are no fixed factors of production, so all costs become variable."
    },
    {
      question: "The Long-run Average Cost (LAC) curve is also called:",
      options: ["Planning curve", "Envelope curve", "Both (a) and (b)", "Neither (a) nor (b)"],
      correct: 2,
      explanation: "LAC is called the planning curve (helps plan plant size) and envelope curve (envelopes all short-run AC curves)."
    },
    {
      question: "Break-even point is where:",
      options: ["TR > TC", "TR = TC", "TR < TC", "MR = MC"],
      correct: 1,
      explanation: "At break-even, Total Revenue equals Total Cost, meaning the firm earns normal profit (zero economic profit)."
    },
    {
      question: "Shutdown point for a firm in the short run is where price equals:",
      options: ["AC", "AVC", "AFC", "MC"],
      correct: 1,
      explanation: "A firm shuts down when price falls below minimum AVC, as it cannot even cover variable costs."
    },
    {
      question: "Which of the following is a variable cost?",
      options: ["Rent of premises", "Interest on capital", "Cost of raw materials", "Insurance premium"],
      correct: 2,
      explanation: "Cost of raw materials varies directly with the level of output."
    },
    {
      question: "AC is equal to:",
      options: ["TC × Q", "AFC + AVC", "MC + AFC", "TFC / Q"],
      correct: 1,
      explanation: "Average Cost = Average Fixed Cost + Average Variable Cost (AC = AFC + AVC)."
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
    },
    {
      question: "TFC curve is a horizontal straight line parallel to the X-axis.",
      correct: true,
      explanation: "TFC remains constant at all output levels."
    },
    {
      question: "AFC can become zero at very high levels of output.",
      correct: false,
      explanation: "AFC continuously falls but never becomes zero. It is a rectangular hyperbola that approaches but never touches the X-axis."
    },
    {
      question: "The TC curve starts from the origin.",
      correct: false,
      explanation: "TC curve starts from the level of TFC on the Y-axis because even at zero output, fixed costs exist."
    },
    {
      question: "MC is not affected by fixed costs.",
      correct: true,
      explanation: "MC = Change in TC = Change in TVC (since TFC is constant). So MC depends only on variable costs."
    },
    {
      question: "When MC equals AC, AC is at its minimum.",
      correct: true,
      explanation: "MC cuts AC at its lowest point. Below this, MC < AC so AC falls; above this, MC > AC so AC rises."
    },
    {
      question: "The gap between AC and AVC curves keeps increasing as output rises.",
      correct: false,
      explanation: "The gap between AC and AVC equals AFC, which keeps decreasing as output increases. So the curves come closer."
    },
    {
      question: "Variable costs include costs of raw materials, fuel, and wages of casual workers.",
      correct: true,
      explanation: "All these costs change with the level of production, making them variable costs."
    },
    {
      question: "In the short run, at least one factor of production is fixed.",
      correct: true,
      explanation: "The short run is defined as the period during which at least one factor cannot be changed."
    }
  ]
};
