/**
 * lesson2Quiz.js
 * Quiz Data for Lesson 2: Collection of Data
 * Topics: Sources, Methods, Census vs Sample, Errors
 */

export const lesson2McqQuestions = [
    // --- SOURCES OF DATA ---
    {
        id: "q1",
        question: "Data originally collected by the investigator for the first time is called:",
        options: ["Secondary Data", "Primary Data", "Published Data", "Raw Data"],
        correct: 1,
        explanation: "Primary data is first-hand information collected from the source of origin."
    },
    {
        id: "q2",
        question: "Which data is more reliable and accurate?",
        options: ["Primary Data", "Secondary Data", "Both are equal", "None"],
        correct: 0,
        explanation: "Primary data is collected by the investigator himself, so it is more reliable."
    },
    {
        id: "q3",
        question: "Data collected from WHO reports or Census of India is:",
        options: ["Primary Data", "Secondary Data", "Internal Data", "None"],
        correct: 1,
        explanation: "Since it is already collected by someone else (WHO/Govt) and used by you, it is Secondary Data."
    },
    {
        id: "q4",
        question: "Which source of data involves less time and money?",
        options: ["Primary Source", "Secondary Source", "Direct Investigation", "Census"],
        correct: 1,
        explanation: "Secondary data is already available/published, saving the cost and time of fresh collection."
    },
    {
        id: "q5",
        question: "Internal sources of data include:",
        options: ["Government Reports", "Company's own records", "Journals", "Newspapers"],
        correct: 1,
        explanation: "Internal sources refer to data generated within the organization itself."
    },

    // --- METHODS OF COLLECTION ---
    {
        id: "q6",
        question: "Which method is best for a small area requiring high accuracy?",
        options: ["Direct Personal Investigation", "Indirect Oral Investigation", "Mailed Questionnaire", "Local Correspondents"],
        correct: 0,
        explanation: "Direct Personal Investigation gives the highest accuracy but is suitable only for small areas due to cost/time."
    },
    {
        id: "q7",
        question: "Indirect Oral Investigation is suitable when:",
        options: ["Informants are illiterate", "Direct contact is not possible", "Area is large", "All of the above"],
        correct: 3,
        explanation: "It is used when direct access to informants is difficult or they are reluctant/unable to give info."
    },
    {
        id: "q8",
        question: "Which method is used by news channels and media houses?",
        options: ["Census Method", "Sample Method", "Information from Local Correspondents", "Mailed Questionnaire"],
        correct: 2,
        explanation: "Local correspondents (reporters) provide regular updates from different areas."
    },
    {
        id: "q9",
        question: "The person who helps the investigator in collecting data is called:",
        options: ["Respondent", "Enumerator", "Correspondent", "Editor"],
        correct: 1,
        explanation: "An Enumerator is a trained person who asks questions and fills the schedule for the respondent."
    },
    {
        id: "q10",
        question: "The method with the lowest response rate is:",
        options: ["Direct Personal", "Mailed Questionnaire", "Enumerator Method", "None"],
        correct: 1,
        explanation: "In Mailed Questionnaire method, many respondents fail to return the filled questionnaire."
    },
    {
        id: "q11",
        question: "A 'Schedule' is filled by:",
        options: ["Respondent", "Investigator", "Enumerator", "None"],
        correct: 2,
        explanation: "Questionnaire is filled by Respondent; Schedule is filled by Enumerator."
    },

    // --- QUALITIES OF QUESTIONNAIRE ---
    {
        id: "q12",
        question: "A good questionnaire should NOT have:",
        options: ["Simple questions", "Logical sequence", "Personal/Controversial questions", "Instructions"],
        correct: 2,
        explanation: "Questions should not be personal or controversial as it may offend the respondent."
    },
    {
        id: "q13",
        question: "questions with options Yes/No are called:",
        options: ["Multiple Choice", "Dichotomous", "Open-ended", "Leading questions"],
        correct: 1,
        explanation: "Dichotomous questions have only two possible answers (True/False, Yes/No)."
    },

    // --- CENSUS VS SAMPLE ---
    {
        id: "q14",
        question: "Census method is suitable for:",
        options: ["Large population", "Heterogeneous population", "Homogeneous population", "Infinite population"],
        correct: 1,
        explanation: "When units are diverse (heterogeneous), every unit needs to be studied (Census)."
    },
    {
        id: "q15",
        question: "Which method is economical (cheaper)?",
        options: ["Census Method", "Sample Method", "Both are equal", "None"],
        correct: 1,
        explanation: "Sampling involves studying only a portion of the population, saving cost and time."
    },
    {
        id: "q16",
        question: "Reliability of sampling data depends on:",
        options: ["Size of sample", "Method of sampling", "Training of enumerators", "All of the above"],
        correct: 3,
        explanation: "Accuracy depends on sample size, representativeness, and the bias of collectors."
    },
    {
        id: "q17",
        question: "Every 10th year Census of India uses:",
        options: ["Sample Method", "Census Method", "Random Sampling", "Quota Sampling"],
        correct: 1,
        explanation: "It is a complete enumeration of every household in India."
    },

    // --- TYPES OF SAMPLING ---
    {
        id: "q18",
        question: "In which method, every item has an equal chance of selection?",
        options: ["Purposive Sampling", "Random Sampling", "Quota Sampling", "Convenience Sampling"],
        correct: 1,
        explanation: "Random sampling gives equal probability to every unit (Lottery method)."
    },
    {
        id: "q19",
        question: "Purposive sampling is also known as:",
        options: ["Deliberate Sampling", "Random Sampling", "Systematic Sampling", "Stratified Sampling"],
        correct: 0,
        explanation: "The investigator deliberately selects units they think are representative."
    },
    {
        id: "q20",
        question: "Stratified Sampling is best when population is:",
        options: ["Homogeneous", "Heterogeneous", "Small", "Very large"],
        correct: 1,
        explanation: "Population is divided into strata (groups) based on different characteristics."
    },
    {
        id: "q21",
        question: "Selecting every nth item from a list is called:",
        options: ["Systematic Sampling", "Convenience Sampling", "Quota Sampling", "Random Sampling"],
        correct: 0,
        explanation: "Systematic sampling follows a fixed interval (e.g., every 10th student)."
    },

    // --- ERRORS ---
    {
        id: "q22",
        question: "Difference between estimated value and actual value is called:",
        options: ["Bias", "Statistical Error", "Mistake", "None"],
        correct: 1,
        explanation: "Error = Actual Value - Estimated (Sample) Value."
    },
    {
        id: "q23",
        question: "Sampling errors occur due to:",
        options: ["Wrong calculation", "Biased enumerator", "Studying a part of population", "Wrong questionnaire"],
        correct: 2,
        explanation: "Sampling errors arise simply because we studied a sample, not the whole population."
    },
    {
        id: "q24",
        question: "Non-sampling errors include:",
        options: ["Errors of measurement", "Errors of non-response", "Errors of recording", "All of the above"],
        correct: 3,
        explanation: "These are human/procedural errors that can occur in both Census and Sample methods."
    },
    {
        id: "q25",
        question: "As sample size increases, sampling error:",
        options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
        correct: 1,
        explanation: "Larger samples represent the population better, reducing the error margin."
    }
];

export const lesson2TfQuestions = [];
