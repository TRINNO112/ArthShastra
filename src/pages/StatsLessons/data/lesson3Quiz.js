/**
 * lesson3Quiz.js
 * Quiz Data for Lesson 3: Organisation of Data
 * Topics: Classification, Variables, Frequency Distribution
 */

export const lesson3McqQuestions = [
    // --- BASICS OF CLASSIFICATION ---
    {
        id: "q1",
        question: "The process of arranging things in groups or classes according to their resemblances is called:",
        options: ["Collection", "Classification", "Presentation", "Analysis"],
        correct: 1,
        explanation: "Classification helps in organizing raw data into groups based on similarities."
    },
    {
        id: "q2",
        question: "Which of the following is NOT an objective of classification?",
        options: ["To simplify data", "To facilitate comparison", "To collect data", "To show relationship"],
        correct: 2,
        explanation: "Collection is a separate stage. Classification organizes data *after* collection."
    },
    {
        id: "q3",
        question: "Classification of data on the basis of time is called:",
        options: ["Geographical", "Chronological", "Qualitative", "Quantitative"],
        correct: 1,
        explanation: "Chronological classification arranges data according to time (years, months, etc.)."
    },
    {
        id: "q4",
        question: "Data classified according to location or area is called:",
        options: ["Spatial Classification", "Temporal Classification", "Qualitative Classification", "Manifold Classification"],
        correct: 0,
        explanation: "Spatial (or Geographical) classification uses location (states, cities, countries) as the basis."
    },
    {
        id: "q5",
        question: "Classification based on attributes like honesty, beauty, or religion is:",
        options: ["Quantitative", "Qualitative", "Chronological", "Spatial"],
        correct: 1,
        explanation: "Qualitative classification is based on quality or attributes that cannot be measured numerically."
    },

    // --- VARIABLES ---
    {
        id: "q6",
        question: "A characteristic which is capable of being measured and changes its value over time is called:",
        options: ["Attribute", "Variable", "Constant", "None"],
        correct: 1,
        explanation: "A Variable (like height, weight, price) changes value and can be measured."
    },
    {
        id: "q7",
        question: "Which of the following is a Discrete Variable?",
        options: ["Height of students", "Weight of students", "Number of children in a family", "Temperature"],
        correct: 2,
        explanation: "Number of children can only be whole numbers (1, 2, 3), so it is Discrete."
    },
    {
        id: "q8",
        question: "A variable that can take any value (integral or fractional) within a range is:",
        options: ["Discrete Variable", "Continuous Variable", "Ordinal Variable", "Nominal Variable"],
        correct: 1,
        explanation: "Continuous variables (like height 5.5ft) can take any value, including fractions."
    },
    {
        id: "q9",
        question: "Weight of a person is an example of:",
        options: ["Discrete Variable", "Continuous Variable", "Attribute", "Qualitative Data"],
        correct: 1,
        explanation: "Weight can be 60.5 kg, 60.55 kg, etc., making it continuous."
    },
    {
        id: "q10",
        question: "Number of goals scored in a match is:",
        options: ["Continuous Variable", "Discrete Variable", "Constant", "Qualitative Variable"],
        correct: 1,
        explanation: "You cannot score 1.5 goals. It jumps from 1 to 2. Hence, Discrete."
    },

    // --- TYPES OF SERIES ---
    {
        id: "q11",
        question: "A series in which items are listed singly is called:",
        options: ["Discrete Series", "Continuous Series", "Individual Series", "Frequency Series"],
        correct: 2,
        explanation: "Individual series lists raw data item by item without grouping."
    },
    {
        id: "q12",
        question: "In a Discrete Series (Frequency Array), data is presented:",
        options: ["Individually", "With exact measurements and frequency", "In class intervals", "None of these"],
        correct: 1,
        explanation: "Discrete series shows exact values (X) with their corresponding frequencies (f)."
    },
    {
        id: "q13",
        question: "Frequency Distribution is also known as:",
        options: ["Individual Series", "Discrete Series", "Continuous Series", "Simple Series"],
        correct: 2,
        explanation: "Continuous series groups data into class intervals (0-10, 10-20), representing a distribution."
    },
    {
        id: "q14",
        question: "The number of times an observation repeats itself is called its:",
        options: ["Range", "Frequency", "Tally", "Class Limit"],
        correct: 1,
        explanation: "Frequency denotes how many times a value occurs in the dataset."
    },
    {
        id: "q15",
        question: "The difference between Upper Limit and Lower Limit of a class is called:",
        options: ["Mid-value", "Frequency", "Class Magnitude", "Range"],
        correct: 2,
        explanation: "Class Magnitude (or Interval) = Upper Limit (L2) - Lower Limit (L1)."
    },

    // --- CONSTRUCTION OF FREQUENCY DISTRIBUTION ---
    {
        id: "q16",
        question: "In Exclusive Method, the upper limit of a class interval is:",
        options: ["Included in the same class", "Excluded from the class", "Included in the previous class", "None"],
        correct: 1,
        explanation: "In Exclusive method (0-10), the upper limit (10) is excluded and counted in the next class (10-20)."
    },
    {
        id: "q17",
        question: "In Inclusive Method, the upper limit is:",
        options: ["Excluded", "Included in the same class", "Included in the next class", "Ignored"],
        correct: 1,
        explanation: "In Inclusive method (0-9), the upper limit (9) is included in that very class."
    },
    {
        id: "q18",
        question: "Formula for finding Mid-value is:",
        options: ["(L1 - L2) / 2", "(L1 + L2) / 2", "L2 - L1", "L1 x L2"],
        correct: 1,
        explanation: "Mid-value = (Lower Limit + Upper Limit) / 2."
    },
    {
        id: "q19",
        question: "To convert Inclusive series to Exclusive, we subtract and add:",
        options: ["1", "0.5", "difference/2", "range/2"],
        correct: 2,
        explanation: "We take half the difference between U.L of first class and L.L of next class (usually 0.5)."
    },
    {
        id: "q20",
        question: "Open-end series is one in which:",
        options: ["Frequencies are missing", "Lower limit of 1st class and upper limit of last class are missing", "Mid-values are missing", "Class intervals are unequal"],
        correct: 1,
        explanation: "Example: 'Below 10' and 'Above 50'. The limits are open."
    },

    // --- EXTRA CONCEPTS ---
    {
        id: "q21",
        question: "Tally marks are used to determine:",
        options: ["Class limits", "Frequency", "Range", "Mid-values"],
        correct: 1,
        explanation: "We mark a tally for each item to count the total frequency."
    },
    {
        id: "q22",
        question: "The sum of frequencies of a distribution is denoted by:",
        options: ["X", "N or Σf", "R", "C"],
        correct: 1,
        explanation: "N or Σf represents the total number of observations."
    },
    {
        id: "q23",
        question: "Unequal class intervals are used when:",
        options: ["Data is uniform", "Range is small", "Data is concentrated in some groups and sparse in others", "Never used"],
        correct: 2,
        explanation: "We adjust interval size (0-5, 5-20) based on data density."
    },
    {
        id: "q24",
        question: "Which series is better for comparison?",
        options: ["Exclusive Series", "Inclusive Series", "Individual Series", "None"],
        correct: 0,
        explanation: "Exclusive series is continuous and standard, making comparison and calculation easier."
    },
    {
        id: "q25",
        question: "Range is:",
        options: ["Lowest value", "Highest value", "Difference between Highest and Lowest value", "Sum of observations"],
        correct: 2,
        explanation: "Range = Largest Value (L) - Smallest Value (S)."
    }
];

export const lesson3TfQuestions = [];
