/**
 * lesson5Quiz.js
 * Quiz Data for Lesson 5: Diagrammatic Presentation
 * Topics: Rules, Bar Diagrams (Simple, Multiple, Component), Pie Charts
 */

export const lesson5McqQuestions = [
    // --- INTRODUCTION & GENERAL RULES ---
    {
        id: "q1",
        question: "Diagrams are primarily used to:",
        options: ["Provide precise values", "Facilitate quick comparison", "Perform complex analysis", "Replace tables completely"],
        correct: 1,
        explanation: "The main utility of diagrams is to make data attractive and comparable at a glance."
    },
    {
        id: "q2",
        question: "Diagrams are considered:",
        options: ["More accurate than tables", "Less accurate than tables", "As accurate as tables", "None of these"],
        correct: 1,
        explanation: "Diagrams are visual approximations. Tables provide the exact numerical values."
    },
    {
        id: "q3",
        question: "Which of the following is NOT a general rule for constructing diagrams?",
        options: ["Every diagram must have a title", "Proper scale selection is mandatory", "Diagrams should be overcrowded with data", "Index should be provided"],
        correct: 2,
        explanation: "Simplicity is key. Overcrowding makes a diagram confusing and defeats its purpose."
    },
    {
        id: "q4",
        question: "One-dimensional diagrams are those where:",
        options: ["Only length is considered", "Only width is considered", "Both length and width are considered", "Area is considered"],
        correct: 0,
        explanation: "In one-dimensional diagrams (like Bar Diagrams), only the height (length) matters. Width is arbitrary."
    },
    {
        id: "q5",
        question: "Two-dimensional diagrams consider:",
        options: ["Only length", "Only width", "Length and Breadth (Area)", "Volume"],
        correct: 2,
        explanation: "Rectangles, Squares, and Pie charts are 2D diagrams where area represents the magnitude."
    },

    // --- BAR DIAGRAMS (SIMPLE) ---
    {
        id: "q6",
        question: "In a Simple Bar Diagram, the width of the bars:",
        options: ["Must be equal", "Must vary with data", "Can be anything", "Represents frequency"],
        correct: 0,
        explanation: "The width of all bars must be uniform. Only the height varies with data."
    },
    {
        id: "q7",
        question: "The gap between bars in a bar diagram should be:",
        options: ["Unequal", "Equidistant", "Zero", "Random"],
        correct: 1,
        explanation: "Proper and equal spacing between bars makes the diagram look neat and comparable."
    },
    {
        id: "q8",
        question: "Simple Bar Diagrams are suitable for:",
        options: ["Comparing multiple sets of data", "Showing parts of a whole", "Comparing a single set of data", "Continuous series"],
        correct: 2,
        explanation: "They are best for single variable data (e.g., Birth Rate over years)."
    },
    {
        id: "q9",
        question: "Bars can be constructed:",
        options: ["Vertically only", "Horizontally only", "Both Vertically and Horizontally", "Diagonally"],
        correct: 2,
        explanation: "Generally vertical, but horizontal bars are also used (especially for qualitative data)."
    },

    // --- BAR DIAGRAMS (MULTIPLE & COMPONENT) ---
    {
        id: "q10",
        question: "Which diagram is suitable for comparing two or more sets of data simultaneously?",
        options: ["Simple Bar Diagram", "Multiple Bar Diagram", "Pie Chart", "Histogram"],
        correct: 1,
        explanation: "Multiple Bar Diagrams place related bars side-by-side for easy comparison (e.g., Import vs Export)."
    },
    {
        id: "q11",
        question: "Sub-divided Bar Diagram is also known as:",
        options: ["Component Bar Diagram", "Percentage Bar Diagram", "Multiple Bar Diagram", "Deviation Bar Diagram"],
        correct: 0,
        explanation: "It shows the total value as well as its components (parts)."
    },
    {
        id: "q12",
        question: "To compare the *relative* share of components when total values differ widely, we use:",
        options: ["Simple Bar Diagram", "Component Bar Diagram", "Percentage Bar Diagram", "Multiple Bar Diagram"],
        correct: 2,
        explanation: "Percentage Bar Diagrams equalize the total height to 100, allowing for comparison of shares/ratios."
    },
    {
        id: "q13",
        question: "In a Percentage Bar Diagram, the total height of each bar represents:",
        options: ["Total Value", "100", "Average", "Frequency"],
        correct: 1,
        explanation: "All bars are of equal height (100%), and segments represent percentages."
    },
    {
        id: "q14",
        question: "Which diagram would you use to show the breakdown of a family's budget?",
        options: ["Simple Bar Diagram", "Component Bar Diagram", "Multiple Bar Diagram", "Line Graph"],
        correct: 1,
        explanation: "Component Bar (or Pie Chart) is ideal for showing how a Total is divided into parts."
    },
    {
        id: "q15",
        question: "Deviation Bar Diagrams are used to show:",
        options: ["Only positive values", "Net quantities (Positive and Negative)", "Percentages", "Time series"],
        correct: 1,
        explanation: "They show deviations (Surplus/Deficit, Profit/Loss) above and below a zero base line."
    },

    // --- PIE CHART ---
    {
        id: "q16",
        question: "A Pie Diagram is a:",
        options: ["One-dimensional diagram", "Two-dimensional diagram", "Three-dimensional diagram", "Pictogram"],
        correct: 1,
        explanation: "It uses the *area* of the circle (sectors) to represent data."
    },
    {
        id: "q17",
        question: "In a Pie Chart, the total angle at the center of the circle is:",
        options: ["180 degrees", "90 degrees", "360 degrees", "100 degrees"],
        correct: 2,
        explanation: "A complete circle represents 360 degrees."
    },
    {
        id: "q18",
        question: "The formula to calculate the degree for a component is:",
        options: ["(Value / Total) * 100", "(Value / Total) * 360", "(Total / Value) * 360", "(Value / 360) * Total"],
        correct: 1,
        explanation: "We convert the component's share of the total into degrees."
    },
    {
        id: "q19",
        question: "If a component is 25% of the total, its angle in a Pie Chart will be:",
        options: ["25 degrees", "90 degrees", "45 degrees", "180 degrees"],
        correct: 1,
        explanation: "25% of 360 = (25/100) * 360 = 90 degrees."
    },
    {
        id: "q20",
        question: "Pie Diagrams are suitable when:",
        options: ["Components are few", "Components are many", "Time series data is long", "Negative values exist"],
        correct: 0,
        explanation: "Too many sectors make a Pie Chart cluttered and hard to compare (typically 4-6 is ideal)."
    },

    // --- MIXED / GENERAL ---
    {
        id: "q21",
        question: "Which of the following creates a 'visual illusion' of the data?",
        options: ["Table", "Text", "Diagram", "Formula"],
        correct: 2,
        explanation: "Diagrams create a visual impression, though they lack the precision of tables."
    },
    {
        id: "q22",
        question: "Which diagram is best for showing 'Net Profit or Loss' over years?",
        options: ["Simple Bar", "Component Bar", "Deviation Bar", "Pie Chart"],
        correct: 2,
        explanation: "Deviation bars can extend below the x-axis to show negative values (Loss)."
    },
    {
        id: "q23",
        question: "Can diagrams replace tables completely?",
        options: ["Yes, always", "No, they are supplementary", "Yes, in modern statistics", "Depends on software"],
        correct: 1,
        explanation: "Diagrams are for visual overview; tables are needed for detailed analysis and raw data reference."
    },
    {
        id: "q24",
        question: "Source Note in a diagram is important to:",
        options: ["Fill space", "Show authority/authenticity", " Decorate the page", "Increase height"],
        correct: 1,
        explanation: "It validates the data and adds credibility."
    },
    {
        id: "q25",
        question: "When scale on Y-axis starts from a value other than zero, we use:",
        options: ["False Base Line (Kink)", "Double Scale", "Logarithmic Scale", "None"],
        correct: 0,
        explanation: "A Kink or False Base Line indicates that the scale begins from a higher value to show variations clearly."
    }
];

export const lesson5TfQuestions = [];
