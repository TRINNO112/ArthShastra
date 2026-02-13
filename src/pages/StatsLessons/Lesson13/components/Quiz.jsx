import React from 'react';
import SharedQuiz from '../../../Lessons/components/SharedQuiz';

const Quiz = () => {
    const mcqQuestions = [
        {
            id: 'su1',
            question: "What is the first step in conducting a statistical project?",
            options: ["Data Collection", "Problem Identification", "Interpretation", "Organization"],
            correct: 1,
            explanation: "Before doing anything, you must define exactly 'what' you are studying and 'why'."
        },
        {
            id: 'su2',
            question: "Which type of data is collected for the first time by the investigator?",
            options: ["Secondary Data", "Primary Data", "External Data", "Published Data"],
            correct: 1,
            explanation: "Primary data is first-hand information collected specifically for the current project."
        },
        {
            id: 'su3',
            question: "Using Census data from a government website for your project is an example of:",
            options: ["Primary collection", "Field survey", "Secondary collection", "Direct observation"],
            correct: 2,
            explanation: "Using pre-existing data published by others is secondary data collection."
        },
        {
            id: 'su4',
            question: "Frequency Distribution is primarily used during which project stage?",
            options: ["Identification", "Collection", "Organization", "Analysis"],
            correct: 2,
            explanation: "Organization involves sorting raw data into tables and frequency distributions."
        },
        {
            id: 'su5',
            question: "Calculating the arithmetic mean to find the average pocket money of students is:",
            options: ["Data Presentation", "Statistical Analysis", "Data Collection", "Hypothesis"],
            correct: 1,
            explanation: "Analysis involves using statistical tools (Mean, SD, etc.) to process organized data."
        },
        {
            id: 'su6',
            question: "The final step 'Interpretation' involves:",
            options: ["Drawing conclusions", "Sorting data", "Drawing graphs", "Printing the report"],
            correct: 0,
            explanation: "Interpretation is where you explain what the numbers actually mean for the real world."
        },
        {
            id: 'su7',
            question: "A 'Pilot Survey' is conducted to:",
            options: ["Collect final data", "Test the questionnaire", "Appoint investigators", "Save money"],
            correct: 1,
            explanation: "A pilot survey is a small-scale trial run to check for flaws in the survey design."
        },
        {
            id: 'su8',
            question: "Which statistical tool helps in measuring the relationship between two variables?",
            options: ["Mean", "Standard Deviation", "Correlation", "Index Numbers"],
            correct: 2,
            explanation: "Correlation (Lesson 11) measures how two economic variables move together."
        },
        {
            id: 'su9',
            question: "Statistical reports should ideally include:",
            options: ["Only numbers", "Only graphs", "Numbers, Graphs, and Interpretation", "None of these"],
            correct: 2,
            explanation: "A complete report needs data, visual aids, and textual explanation."
        },
        {
            id: 'su10',
            question: "When a survey covers Every unit of the population, it is called:",
            options: ["Sample Survey", "Census", "Random Survey", "Pilot Study"],
            correct: 1,
            explanation: "Census covers 100% of the population, whereas a sample covers only a part."
        },
        {
            id: 'su11',
            question: "Sampling error occurs when:",
            options: ["The whole population is studied", "Calculations are wrong", "A part is used to represent the whole", "Data is lost"],
            correct: 2,
            explanation: "Sampling errors arise because a sample might not perfectly represent the entire population."
        },
        {
            id: 'su12',
            question: "Which tool is used to monitor inflation levels?",
            options: ["Dispersion", "Index Numbers", "Mode", "Mean"],
            correct: 1,
            explanation: "Index numbers (CPI/WPI) are specifically designed to track price changes over time."
        },
        {
            id: 'su13',
            question: "A questionnaire should ideally have:",
            options: ["Very long questions", "Logical sequence of questions", "Complicated math", "Many personal questions"],
            correct: 1,
            explanation: "Questions should be simple, objective, and follow a logical flow."
        },
        {
            id: 'su14',
            question: "The choice of a 'Base Year' falls under which study?",
            options: ["Correlation", "Index Numbers", "Classification", "Median"],
            correct: 1,
            explanation: "Base year selection is critical for constructing Index Numbers."
        },
        {
            id: 'su15',
            question: "In Economics, 'Univariate' distribution means:",
            options: ["Study of 1 variable", "Study of 2 variables", "Study of many variables", "No variables"],
            correct: 0,
            explanation: "Uni means one; univariate analysis deals with a single variable like 'Price'."
        },
        {
            id: 'su16',
            question: "Bivariate analysis is used to find:",
            options: ["Individual Mean", "Relationship between 2 variables", "Data range", "Median"],
            correct: 1,
            explanation: "Bi means two; it is used for correlation and regression analysis."
        },
        {
            id: 'su17',
            question: "Statistical conclusions are always:",
            options: ["100% true for individuals", "True only on average", "Always false", "Only for math, not life"],
            correct: 1,
            explanation: "Statistics deals with aggregates; conclusions apply to the group, not necessarily every individual."
        },
        {
            id: 'su18',
            question: "Graphs like Ogives help in finding:",
            options: ["Arithmetic Mean", "Median", "Standard Deviation", "Coefficient of Variation"],
            correct: 1,
            explanation: "The intersection of 'less than' and 'more than' ogives indicates the Median."
        },
        {
            id: 'su19',
            question: "What makes statistics a 'Science'?",
            options: ["It has systematic methods", "It uses chemicals", "It is only taught in schools", "It is old"],
            correct: 0,
            explanation: "Its systematic approach to data makes it a statistical science."
        },
        {
            id: 'su20',
            question: "Data collected from an old newspaper is:",
            options: ["Primary", "Secondary", "Tertiary", "Illegal"],
            correct: 1,
            explanation: "Since the data already existed in the newspaper, it is secondary."
        }
    ];

    const tfQuestions = [
        {
            id: 'stf1',
            question: "The first step in a statistical project is Data Collection.",
            correct: false,
            explanation: "False. Problem Identification must come first."
        },
        {
            id: 'stf2',
            question: "Census method is cheaper than Sample method.",
            correct: false,
            explanation: "False. Census is very expensive as it covers everyone."
        },
        {
            id: 'stf3',
            question: "Index Numbers are called 'Economic Barometers'.",
            correct: true,
            explanation: "True. They measure the economic 'weather' or changes."
        },
        {
            id: 'stf4',
            question: "Questionnaires should avoid personal or sensitive questions.",
            correct: true,
            explanation: "True. This ensures higher response rates and accuracy."
        },
        {
            id: 'stf5',
            question: "Interpretation follows Data Analysis.",
            correct: true,
            explanation: "True. You analyze first, then interpret what you found."
        },
        {
            id: 'stf6',
            question: "Median can be found using Bar Diagrams.",
            correct: false,
            explanation: "False. Ogives or Histograms are used for finding Median/Mode."
        },
        {
            id: 'stf7',
            question: "Secondary data is always more reliable than primary data.",
            correct: false,
            explanation: "False. Primary data is often more targeted and fresh."
        },
        {
            id: 'stf8',
            question: "A project report must contain suggested policy measures.",
            correct: true,
            explanation: "True. In Economics, studies should lead to actionable advice."
        },
        {
            id: 'stf9',
            question: "Statistics can prove anything, even if it's false.",
            correct: false,
            explanation: "False. While data can be manipulated (distrust), legitimate statistics aim for truth."
        },
        {
            id: 'stf10',
            question: "This is the final chapter of Grade 11 Statistics.",
            correct: true,
            explanation: "True! You've mastered the entire curriculum."
        }
    ];

    return (
        <SharedQuiz
            title="Statistical Tools Mastery"
            subtitle="The Final 30-Question Assessment"
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-13"
        />
    );
};

export default Quiz;
