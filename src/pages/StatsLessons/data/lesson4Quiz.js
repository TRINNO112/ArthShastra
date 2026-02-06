/**
 * lesson4Quiz.js
 * Quiz Data for Lesson 4: Presentation of Data (Textual & Tabular)
 * Topics: Textual Presentation, Anatomy of Tables, Types of Tables
 */

export const lesson4McqQuestions = [
    // --- TEXTUAL PRESENTATION ---
    {
        id: "q1",
        question: "Textual presentation of data is most suitable when:",
        options: ["Data is voluminous", "Data is small", "Comparison is the main goal", "Data is complex"],
        correct: 1,
        explanation: "Textual presentation is best for small datasets where a few figures can be woven into the text."
    },
    {
        id: "q2",
        question: "Which of the following is a major drawback of textual presentation?",
        options: ["It is too simple", "It takes less space", "Comparison is difficult", "It requires a graph"],
        correct: 2,
        explanation: "One has to read the entire text to grasp the data, making quick comparison difficult."
    },

    // --- ANATOMY OF A TABLE ---
    {
        id: "q3",
        question: "The systematic arrangement of data in columns and rows is known as:",
        options: ["Tabulation", "Classification", "Analysis", "Interpretation"],
        correct: 0,
        explanation: "Tabulation is the process of presenting data in a structured table format."
    },
    {
        id: "q4",
        question: "The heading of the rows given in the first column of a table is called:",
        options: ["Caption", "Stub", "Head Note", "Title"],
        correct: 1,
        explanation: "The Stub (or Stub Head) is the leftmost column that describes the row contents."
    },
    {
        id: "q5",
        question: "The column headings in a table are known as:",
        options: ["Stubs", "Captions", "Footnotes", "Source Notes"],
        correct: 1,
        explanation: "Captions are the headings for the vertical columns."
    },
    {
        id: "q6",
        question: "Which part of the table indicates the units of measurement (e.g., 'in Million Tons')?",
        options: ["Title", "Head Note", "Footnote", "Source Note"],
        correct: 1,
        explanation: "The Head Note is placed just below the title to specify units."
    },
    {
        id: "q7",
        question: "Where is the 'Source Note' usually placed in a table?",
        options: ["At the top", "Below the title", "At the bottom", "In the body"],
        correct: 2,
        explanation: "The Source Note is placed at the footer to acknowledge where the data refers to."
    },
    {
        id: "q8",
        question: "A statement given below the table to clarify some specific item is called:",
        options: ["Head Note", "Footnote", "Caption", "Stub"],
        correct: 1,
        explanation: "Footnotes are used to clarify exceptions or specific details about a data point."
    },
    {
        id: "q9",
        question: "The main part of the table containing numerical figures is called:",
        options: ["Caption", "Stub", "Body", "Title"],
        correct: 2,
        explanation: "The Body (or Field) contains the actual numerical data."
    },

    // --- TYPES OF TABLES: PURPOSE ---
    {
        id: "q10",
        question: "A table used as a 'storehouse of information' for general reference is called:",
        options: ["Special Purpose Table", "General Purpose Table", "Derived Table", "Summary Table"],
        correct: 1,
        explanation: "General Purpose Tables (like Census) contain detailed raw data for reference."
    },
    {
        id: "q11",
        question: "Special Purpose Tables are also known as:",
        options: ["Reference Tables", "Summary Tables", "Original Tables", "Master Tables"],
        correct: 1,
        explanation: "They summarize data to analyze a specific problem."
    },

    // --- TYPES OF TABLES: ORIGINALITY ---
    {
        id: "q12",
        question: "A table in which data is presented in the same form as it was collected is:",
        options: ["Derived Table", "Original Table", "Complex Table", "Treble Table"],
        correct: 1,
        explanation: "Original Tables present absolute/raw figures."
    },
    {
        id: "q13",
        question: "Tables presenting data in percentages, ratios, or averages are called:",
        options: ["Original Tables", "Derived Tables", "Reference Tables", "Simple Tables"],
        correct: 1,
        explanation: "Derived Tables express data as derivatives (rates/ratios) of the original data."
    },

    // --- TYPES OF TABLES: CONSTRUCTION ---
    {
        id: "q14",
        question: "A table which presents data according to only one characteristic is:",
        options: ["Double Table", "Simple Table", "Complex Table", "Manifold Table"],
        correct: 1,
        explanation: "Simple Table (First Order) shows only one characteristic."
    },
    {
        id: "q15",
        question: "A table classifying data by TWO characteristics (e.g., Gender and Stream) is:",
        options: ["Simple Table", "Double Table", "Treble Table", "Manifold Table"],
        correct: 1,
        explanation: "Double Table represents two characteristics."
    },
    {
        id: "q16",
        question: "If data is classified by three characteristics (e.g., Location, Gender, Literacy), it is:",
        options: ["Double Table", "Treble Table", "Manifold Table", "Simple Table"],
        correct: 1,
        explanation: "Treble Table deals with three characteristics."
    },
    {
        id: "q17",
        question: "A table dealing with more than three characteristics is generally called:",
        options: ["Treble Table", "Manifold Table", "Double Table", "Simple Table"],
        correct: 1,
        explanation: "Manifold Table describes data with many (multiple) characteristics."
    },

    // --- FEATURES & GUIDELINES ---
    {
        id: "q18",
        question: "The title of a table should be:",
        options: ["Long and detailed", "Brief and self-explanatory", "Vague and short", "Placed at the bottom"],
        correct: 1,
        explanation: "A good title is concise but clearly states what the table is about."
    },
    {
        id: "q19",
        question: "'Stub Items' refers to:",
        options: ["The column headings", "The individual rows description", "The footnotes", "The totals"],
        correct: 1,
        explanation: "Stub items are the descriptions of the rows in the Stub column."
    },
    {
        id: "q20",
        question: "Which term is used for the total of the 'Caption' headings?",
        options: ["Box Head", "Stub Head", "Field", "Source"],
        correct: 0,
        explanation: "The entire upper part containing columns and sub-columns is often called the Box Head."
    },
    {
        id: "q21",
        question: "Abbreviation 'etc.' should be avoided in:",
        options: ["Footnotes", "Table Title and Headings", "Source Note", "None"],
        correct: 1,
        explanation: "Using 'etc.' in titles or headings creates ambiguity."
    },
    {
        id: "q22",
        question: "Figures in a table should preferably be:",
        options: ["Approximated if large", "Always exact", "Written in words", "Random"],
        correct: 0,
        explanation: "Large figures are often approximated (rounded off) to make the table readable."
    },
    {
        id: "q23",
        question: "Ideally, items to be compared should be placed in:",
        options: ["Adjacent columns/rows", "Different tables", "Footnotes", "Far apart"],
        correct: 0,
        explanation: "Placing comparable items side-by-side facilitates easier analysis."
    },
    {
        id: "q24",
        question: "What is the primary function of a table?",
        options: ["To decorate the report", "To confuse the reader", "To present data systematically for analysis", "To hide data errors"],
        correct: 2,
        explanation: "The goal is systematic presentation to simplify complex data."
    },
    {
        id: "q25",
        question: "If a table does not have a Title, it is considered:",
        options: ["Complete", "Incomplete and Poor", "Abstract", "Derived"],
        correct: 1,
        explanation: "The Title is the most essential part; without it, the context is lost."
    }
];

export const lesson4TfQuestions = [];
