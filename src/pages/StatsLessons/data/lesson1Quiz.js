/**
 * lesson1Quiz.js
 * Quiz Data for Lesson 1: Introduction to Statistics
 * Topics: Meaning, Scope, Functions, Importance, Limitations
 */

export const lesson1McqQuestions = [
    // --- MEANING & DEFINITIONS ---
    {
        id: "q1",
        question: "In plural sense, which of the following is NOT a characteristic of Statistics?",
        options: ["Aggregate of facts", "Numerically expressed", "Affected by multiplicity of causes", "Based on a single isolated fact"],
        correct: 3,
        explanation: "Statistics deals with aggregates of facts. A single isolated figure (like Ram's height) is not statistics."
    },
    {
        id: "q2",
        question: "Who is known as the 'Father of Statistics' (Global)?",
        options: ["Adam Smith", "Gottfried Achenwall", "Alfred Marshall", "P.C. Mahalanobis"],
        correct: 1,
        explanation: "Gottfried Achenwall is often credited with coining the term 'Statistics'."
    },
    {
        id: "q3",
        question: "Who is known as the 'Father of Indian Statistics'?",
        options: ["Dadabhai Naoroji", "V.K.R.V. Rao", "P.C. Mahalanobis", "C.R. Rao"],
        correct: 2,
        explanation: "P.C. Mahalanobis is the father of Indian Statistics and founded the ISI."
    },
    {
        id: "q4",
        question: "Statistics in singular sense refers to:",
        options: ["Statistical Data", "Statistical Methods", "Descriptive Statistics", "Inductive Statistics"],
        correct: 1,
        explanation: "In singular sense, statistics refers to the methods (Collection, Organisation, Presentation, Analysis, Interpretation)."
    },
    {
        id: "q5",
        question: "'Statistics are straws out of which economists make bricks.' Who said this?",
        options: ["Bowley", "Marshall", "Boddington", "Seligman"],
        correct: 1,
        explanation: "Alfred Marshall highlighted the importance of data for building economic theories."
    },

    // --- STAGES & SCOPE ---
    {
        id: "q6",
        question: "What is the correct sequence of statistical stages?",
        options: [
            "Analysis -> Collection -> Presentation -> Interpretation",
            "Collection -> Organisation -> Presentation -> Analysis -> Interpretation",
            "Collection -> Presentation -> Organisation -> Analysis",
            "Organisation -> Collection -> Analysis -> Interpretation"
        ],
        correct: 1,
        explanation: "The correct sequence is COPDAI: Collection, Organisation, Presentation, Analysis, Interpretation."
    },
    {
        id: "q7",
        question: "Which stage involves drawing conclusions from data?",
        options: ["Analysis", "Interpretation", "Presentation", "Collection"],
        correct: 1,
        explanation: "Interpretation involves drawing conclusions and making decisions based on the analyzed data."
    },
    {
        id: "q8",
        question: "Subject matter of statistics includes:",
        options: ["Descriptive Statistics", "Inferential Statistics", "Both A and B", "None of these"],
        correct: 2,
        explanation: "Statistics covers both Descriptive (describing data) and Inferential (drawing conclusions about population from sample)."
    },
    {
        id: "q9",
        question: "Which of the following belongs to Descriptive Statistics?",
        options: ["Estimation", "Hypothesis Testing", "Measures of Central Tendency", "Prediction"],
        correct: 2,
        explanation: "Mean, Median, Mode (Central Tendency) are used to describe the characteristics of data."
    },
    {
        id: "q10",
        question: "As an 'Art', Statistics relates to:",
        options: ["Systematic study", "Application of methods to solve problems", "Universal laws", "None of the above"],
        correct: 1,
        explanation: "As an Art, statistics is about skill in handling data and applying methods to real-world problems."
    },

    // --- FUNCTIONS & IMPORTANCE ---
    {
        id: "q11",
        question: "Which is NOT a function of statistics?",
        options: ["To simplify complex data", "To study individual units", "To help in policy making", "To test hypotheses"],
        correct: 1,
        explanation: "Statistics studies aggregates, not individual units. This is a limitation, not a function."
    },
    {
        id: "q12",
        question: "Statistics facilitates comparison between:",
        options: ["Different time periods", "Different regions", "Different sectors", "All of the above"],
        correct: 3,
        explanation: "Comparative analysis is a key function, allowing comparison across time, space, and categories."
    },
    {
        id: "q13",
        question: "Statistics converts qualitative data into quantitative data. This statement is:",
        options: ["Partially True", "False", "True", "None of these"],
        correct: 1,
        explanation: "Statistics cannot convert quality into quantity directly; it assigns ranks/scores to measure it."
    },
    {
        id: "q14",
        question: "In Economics, 'Construction of Index Numbers' is a function of:",
        options: ["Production", "Exchange", "Distribution", "Consumption"],
        correct: 1,
        explanation: "Index numbers (like price index) help in understanding exchange value and inflation."
    },
    {
        id: "q15",
        question: "Economic planning without statistics is like:",
        options: ["A ship without a rudder", "A bird without wings", "A car without wheels", "A house without a roof"],
        correct: 0,
        explanation: "Statistics provides the necessary data for navigation and direction in planning."
    },

    // --- LIMITATIONS ---
    {
        id: "q16",
        question: "Statistics laws are true:",
        options: ["Always", "Never", "On an average", "Individually"],
        correct: 2,
        explanation: "Unlike physical laws, statistical laws are true only on average and in the long run."
    },
    {
        id: "q17",
        question: "Statistics can be misused. This limitation is known as:",
        options: ["Distrust of Statistics", "Error of Statistics", "Bias of Statistics", "None of these"],
        correct: 0,
        explanation: "The potential for data manipulation leads to 'Distrust of Statistics'."
    },
    {
        id: "q18",
        question: "Statistics deals with:",
        options: ["Qualitative data only", "Quantitative data only", "Both A and B", "None"],
        correct: 1,
        explanation: "Statistics strictly deals with numerical (quantitative) data."
    },
    {
        id: "q19",
        question: "Statistical results are prone to:",
        options: ["Personal Bias", "Mathematical Errors", "Sampling Errors", "All of the above"],
        correct: 3,
        explanation: "Bias in collection, calculation errors, or unrepresentative samples can all affect results."
    },
    {
        id: "q20",
        question: "'Figures don't lie, but liars figure.' This statement refers to:",
        options: ["Accuracy of data", "Distrust of statistics", "Collection of data", "Presentation of data"],
        correct: 1,
        explanation: "It highlights how data can be manipulated to mislead people."
    },

    // --- KEY TERMS ---
    {
        id: "q21",
        question: "The root cause of all economic problems is:",
        options: ["Poverty", "Unemployment", "Scarcity", "Inflation"],
        correct: 2,
        explanation: "Scarcity of resources in relation to unlimited wants is the fundamental economic problem."
    },
    {
        id: "q22",
        question: "A person who consumes goods and services for satisfaction involves in:",
        options: ["Production", "Consumption", "Distribution", "Exchange"],
        correct: 1,
        explanation: "Consumption is the act of using goods/services to satisfy wants."
    },
    {
        id: "q23",
        question: "Who is a 'Service Holder'?",
        options: ["A doctor treating patients", "A teacher teaching in a school for salary", "A shopkeeper selling goods", "A farmer growing crops"],
        correct: 1,
        explanation: "A service holder works for others and receives remuneration (salary/wages)."
    },
    {
        id: "q24",
        question: "Which of these is NOT an economic activity?",
        options: ["Production", "Consumption", "Social Service", "Distribution"],
        correct: 2,
        explanation: "Social service is non-economic as it is not done for monetary gain."
    },
    {
        id: "q25",
        question: "Data regarding 'Beauty of a flower' is:",
        options: ["Quantitative Data", "Qualitative Data", "Statistical Data", "None"],
        correct: 1,
        explanation: "Beauty is an attribute (quality), not a numerical value, so it is qualitative."
    }
];

export const lesson1TfQuestions = [];
