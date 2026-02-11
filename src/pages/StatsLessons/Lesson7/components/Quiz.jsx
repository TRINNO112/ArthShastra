import SharedQuiz from '../../components/SharedQuiz';

const mcqQuestions = [
    { id: 'l7-mcq-1', question: "Arithmetic Line Graphs are also known as:", options: ["Frequency Polygons", "Time Series Graphs", "Histograms", "Ogives"], correct: 1 },
    { id: 'l7-mcq-2', question: "In a Time Series Graph, time is always plotted on:", options: ["X-Axis", "Y-Axis", "Any Axis", "Diagonal"], correct: 0 },
    { id: 'l7-mcq-3', question: "A 'False Base Line' is used when:", options: ["Values are very small", "Values start from zero", "Values are very high and far from zero", "Data is negative"], correct: 2 },
    { id: 'l7-mcq-4', question: "Which of these is NOT a rule for constructing line graphs?", options: ["Use proper scale", "X-axis represents time", "Y-axis must always start at 100", "Include a clear title"], correct: 2 },
    { id: 'l7-mcq-5', question: "To show a break in the Y-axis near the origin, we use:", options: ["A dashed line", "A kink or zig-zag line", "A red circle", "A gap in the paper"], correct: 1 },
    { id: 'l7-mcq-6', question: "If we plot India's population from 1950 to 2000, it is a:", options: ["One Variable Graph", "Two Variable Graph", "Pie Chart", "Histogram"], correct: 0 },
    { id: 'l7-mcq-7', question: "Comparing 'Exports' and 'Imports' over 10 years requires a:", options: ["One Variable Graph", "Two or More Variable Graph", "Frequency Polygon", "Ogive"], correct: 1 },
    { id: 'l7-mcq-8', question: "The Y-axis in a time series graph usually represents:", options: ["Time", "Variable Value (Dependent)", "Class Intervals", "None of these"], correct: 1 },
    { id: 'l7-mcq-9', question: "False Base Line helps to:", options: ["Make the graph look bigger", "Highlight small variations in high values", "Hide data", "Make the graph colorful"], correct: 1 },
    { id: 'l7-mcq-10', question: "Which quadrant is primarily used for time series graphs?", options: ["First Quadrant (+, +)", "Second Quadrant (-, +)", "Third Quadrant (-, -)", "Fourth Quadrant (+, -)"], correct: 0 },
    { id: 'l7-mcq-11', question: "Can negative values be plotted on a line graph?", options: ["Yes, below the X-axis", "No, never", "Only if time is negative", "Only in pie charts"], correct: 0 },
    { id: 'l7-mcq-12', question: "A graph showing 'Profit' and 'Loss' over years might cross:", options: ["The Y-axis only", "The X-axis (Zero line)", "The top border", "The legend"], correct: 1 },
    { id: 'l7-mcq-13', question: "The title of the graph should be:", options: ["Long and complex", "Short, clear, and descriptive", "At the bottom only", "Hidden"], correct: 1 },
    { id: 'l7-mcq-14', question: "Grid lines in a graph help in:", options: ["Decorating the graph", "Reading values accurately", "Confusing the reader", "None of the above"], correct: 1 },
    { id: 'l7-mcq-15', question: "If scale is 1cm = 10 units, and value is 55, it is plotted at:", options: ["5 cm", "5.5 cm", "6 cm", "4.5 cm"], correct: 1 },
    { id: 'l7-mcq-16', question: "Arithmetic Line Graphs are best for:", options: ["Spatial data", "Categorical data", "Chronological (Time-based) data", "Textual data"], correct: 2 },
    { id: 'l7-mcq-17', question: "Is 'False Base Line' applicable to X-axis?", options: ["Yes, if time series starts late (e.g., year 2000)", "No, never", "Only for negative time", "It is called False Time"], correct: 0 },
    { id: 'l7-mcq-18', question: "In a 'Two Variable Graph', we distinguish lines using:", options: ["Different lengths", "Different specific colors/styles (Legend)", "Invisible ink", "Writing text on lines only"], correct: 1 },
    { id: 'l7-mcq-19', question: "A steep upward line indicates:", options: ["No change", "Slow increase", "Rapid increase", "Rapid decrease"], correct: 2 },
    { id: 'l7-mcq-20', question: "A horizontal line indicates:", options: ["Constant value", "Rapid increase", "Decrease", "Zero value"], correct: 0 },
];

const tfQuestions = [
    { id: 'l7-tf-1', question: "Time series graphs can only show one variable at a time.", correct: false },
    { id: 'l7-tf-2', question: "The X-axis in a time series graph always represents the independent variable (time).", correct: true },
    { id: 'l7-tf-3', question: "A False Base Line is used when values are very close to zero.", correct: false },
    { id: 'l7-tf-4', question: "In an arithmetic line graph, consecutive points are joined by straight lines.", correct: true },
    { id: 'l7-tf-5', question: "An arithmetic line graph cannot be drawn for daily temperature data.", correct: false },
    { id: 'l7-tf-6', question: "A kink (zig-zag) on the Y-axis indicates that a portion of the scale has been omitted.", correct: true },
    { id: 'l7-tf-7', question: "The source note in a graph is typically placed at the top of the graph.", correct: false },
    { id: 'l7-tf-8', question: "Choosing the correct scale is essential for accurate representation in line graphs.", correct: true },
    { id: 'l7-tf-9', question: "When plotting two variables on the same graph, a legend is necessary to identify each line.", correct: true },
    { id: 'l7-tf-10', question: "A downward sloping line on a time series graph indicates an increase in the variable.", correct: false },
];

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-lesson7-quiz"
            title="Arithmetic Line Graphs Quiz"
            subtitle="Test your understanding of Time Series & Line Graphs"
        />
    );
};

export default Quiz;
