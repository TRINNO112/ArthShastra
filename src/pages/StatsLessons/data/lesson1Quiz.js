/**
 * lesson1Quiz.js
 * Quiz Data for Lesson 1: Introduction to Statistics
 */

export const lesson1Data = [
    // MEANING & DEFINITION
    {
        id: 1,
        question: "In plural sense, which of the following is NOT a characteristic of Statistics?",
        options: [
            "Aggregate of facts",
            "Numerically expressed",
            "Affected by multiplicity of causes",
            "Based on a single isolated fact"
        ],
        correctAnswer: 3,
        explanation: "Statistics deals with aggregates of facts. A single isolated figure (like Ram's height) is not statistics."
    },
    {
        id: 2,
        question: "Who described Statistics as 'straws out of which economists make bricks'?",
        options: [
            "Alfred Marshall",
            "Adam Smith",
            "Prof. Bowley",
            "Seligman"
        ],
        correctAnswer: 0,
        explanation: "Marshall emphasized the importance of data (straws) for building economic theories (bricks)."
    },
    {
        id: 3,
        question: "Which of the following statements is correct regarding Statistics in singular sense?",
        options: [
            "It refers to aggregate of facts",
            "It refers to statistical methods",
            "It refers to numerical data",
            "It refers to qualitative data"
        ],
        correctAnswer: 1,
        explanation: "In singular sense, statistics refers to the methods used for collection, analysis, and interpretation of data."
    },
    {
        id: 4,
        question: "Statistics deals with qualitative data like honesty and beauty.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "False. Statistics only deals with quantitative (numerical) data. Qualitative attributes can only be studied if converted to numbers (ranks)."
    },

    // STAGES & SCOPE
    {
        id: 5,
        question: "Which of the following is the correct order of stages in statistical study?",
        options: [
            "Analysis → Collection → Presentation → Interpretation",
            "Collection → Organisation → Presentation → Analysis → Interpretation",
            "Collection → Presentation → Organisation → Analysis",
            "Organisation → Collection → Analysis → Interpretation"
        ],
        correctAnswer: 1,
        explanation: "The correct sequence is COPDAI: Collection, Organisation, Presentation, Analysis, Interpretation."
    },
    {
        id: 6,
        question: "Drawing conclusions from the analyzed data is known as:",
        options: [
            "Collection of Data",
            "Presentation of Data",
            "Interpretation of Data",
            "Organisation of Data"
        ],
        correctAnswer: 2,
        explanation: "Interpretation involves drawing conclusions and making decisions based on the analyzed data."
    },
    {
        id: 7,
        question: "Scope of statistics includes:",
        options: [
            "Nature of Statistics",
            "Subject Matter of Statistics",
            "Limitations of Statistics",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "The scope of statistics is broad and covers its nature (science/art), subject matter (descriptive/inferential), and limitations."
    },

    // FUNCTIONS & IMPORTANCE
    {
        id: 8,
        question: "Which of the following is a function of Statistics?",
        options: [
            "To simplify complex data",
            "To help in policy making",
            "To test hypotheses",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Statistics simplifies data, aids in policy formulation, and helps verify economic laws/hypotheses."
    },
    {
        id: 9,
        question: "Statistics facilitates comparison between:",
        options: [
            "Different time periods",
            "Different regions",
            "Different sectors",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Comparative analysis is a key function of statistics, allowing comparison across time, space, and categories."
    },
    {
        id: 10,
        question: "In Economics, Statistics is used for:",
        options: [
            "Production decisions",
            "Consumption analysis",
            "Distribution of income",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Statistics is vital in all branches of economics: Consumption, Production, Distribution, and Exchange."
    },

    // NATURE (SCIENCE OR ART)
    {
        id: 11,
        question: "Statistics is:",
        options: [
            "Only a Science",
            "Only an Art",
            "Both a Science and an Art",
            "Neither Science nor Art"
        ],
        correctAnswer: 2,
        explanation: "It is a Science because it has systematic methods and principles, and an Art because it involves the skillful application of these methods."
    },
    {
        id: 12,
        question: "As an 'Art', Statistics relates to:",
        options: [
            "Systematic study of data",
            "Application of methods to solve problems",
            "Universal laws",
            "None of the above"
        ],
        correctAnswer: 1,
        explanation: "As an Art, statistics is about applying methods to solve real-world problems and interpret data skillfully."
    },

    // KEY TERMS
    {
        id: 13,
        question: "A person who buys goods to satisfy his wants is called a:",
        options: [
            "Producer",
            "Consumer",
            "Service Holder",
            "Service Provider"
        ],
        correctAnswer: 1,
        explanation: "A Consumer is one who consumes goods and services for the satisfaction of wants."
    },
    {
        id: 14,
        question: "A person who is in a job and gets paid for it is called a:",
        options: [
            "Producer",
            "Consumer",
            "Service Holder",
            "Service Provider"
        ],
        correctAnswer: 2,
        explanation: "A Service Holder works for others and receives remuneration (wages/salary)."
    },
    {
        id: 15,
        question: "Scarcity is the root cause of:",
        options: [
            "Social problems",
            "Political problems",
            "Economic problems",
            "Religious problems"
        ],
        correctAnswer: 2,
        explanation: "Scarcity of resources in relation to unlimited wants gives rise to all economic problems (choice/allocation)."
    },

    // LIMITATIONS & DISTRUST
    {
        id: 16,
        question: "Statistics results are:",
        options: [
            "Always 100% accurate",
            "True only on average",
            "Always false",
            "True for every individual"
        ],
        correctAnswer: 1,
        explanation: "Statistical laws are not exact like physical laws; they are true only on average and in the long run."
    },
    {
        id: 17,
        question: "Statistics studies:",
        options: [
            "Individual units",
            "Aggregates of facts",
            "Qualitative attributes",
            "Single figures"
        ],
        correctAnswer: 1,
        explanation: "A major limitation is that statistics does not study individuals; it deals with aggregates/groups."
    },
    {
        id: 18,
        question: "The statement 'Figures don't lie, but liars figure' refers to:",
        options: [
            "Accuracy of statistics",
            "Distrust of statistics",
            "Importance of statistics",
            "Functions of statistics"
        ],
        correctAnswer: 1,
        explanation: "This famous quote highlights the Distrust of Statistics—how data can be manipulated to mislead."
    },
    {
        id: 19,
        question: "Distrust of statistics arises because:",
        options: [
            "Statistics is always wrong",
            "Statistics is useless",
            "Statistics can be easily misused/manipulated",
            "Statistics is difficult"
        ],
        correctAnswer: 2,
        explanation: "Distrust exists because statistical methods can be manipulated by biased users to prove false claims ('Clay in hands of potter')."
    },
    {
        id: 20,
        question: "Which of the following is a remedy to remove distrust of statistics?",
        options: [
            "Stop using statistics",
            "Blindly believe all data",
            "Consider the source and method of collection",
            "Use only one method always"
        ],
        correctAnswer: 2,
        explanation: "Critical examination of the source, bias, and methods used helps in trusting the correct data."
    }
];
