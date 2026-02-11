import SharedQuiz from '../../components/SharedQuiz';

const mcqQuestions = [
    { id: 'l6-mcq-1', question: "Frequency Diagrams are used for ________ variables.", options: ["Discrete", "Continuous", "Qualitative", "None of these"], correct: 1 },
    { id: 'l6-mcq-2', question: "Which diagram is drawn by joining mid-points of the tops of histogram bars?", options: ["Ogive", "Bar Diagram", "Frequency Polygon", "Pie Chart"], correct: 2 },
    { id: 'l6-mcq-3', question: "A Histogram is valid for ________ series only.", options: ["Individual", "Discrete", "Continuous", "All of these"], correct: 2 },
    { id: 'l6-mcq-4', question: "In a Histogram, the height of the rectangle represents:", options: ["Class Width", "Frequency", "Upper Limit", "Lower Limit"], correct: 1 },
    { id: 'l6-mcq-5', question: "The Graphical calculation of Mode is done through:", options: ["Ogive", "Histogram", "Frequency Polygon", "Pie Chart"], correct: 1 },
    { id: 'l6-mcq-6', question: "The Graphical calculation of Median is done through:", options: ["Ogive", "Histogram", "Frequency Polygon", "Simple Bar Diagram"], correct: 0 },
    { id: 'l6-mcq-7', question: "An Ogive is also known as:", options: ["Frequency Curve", "Cumulative Frequency Curve", "Histogram", "Frequency Polygon"], correct: 1 },
    { id: 'l6-mcq-8', question: "For Unequal Class Intervals, we construct a Histogram using:", options: ["Frequency", "Frequency Density", "Cumulative Frequency", "Class Mark"], correct: 1 },
    { id: 'l6-mcq-9', question: "Formula for Frequency Density is:", options: ["Frequency × Class Width", "Frequency / Class Width", "Class Width / Frequency", "Frequency / 2"], correct: 1 },
    { id: 'l6-mcq-10', question: "Intersection of More Than and Less Than Ogive gives:", options: ["Mean", "Median", "Mode", "Range"], correct: 1 },
    { id: 'l6-mcq-11', question: "Less Than Ogive is plotted against:", options: ["Lower Limits", "Upper Limits", "Mid-points", "Frequencies"], correct: 1 },
    { id: 'l6-mcq-12', question: "More Than Ogive is plotted against:", options: ["Lower Limits", "Upper Limits", "Mid-points", "Frequencies"], correct: 0 },
    { id: 'l6-mcq-13', question: "Histogram is never drawn for ________ series.", options: ["Individual and Discrete", "Continuous only", "Exclusive", "Inclusive after adjustment"], correct: 0 },
    { id: 'l6-mcq-14', question: "A smooth freehand curve passing through frequency polygon points is:", options: ["Histogram", "Bar Diagram", "Frequency Curve", "Ogive"], correct: 2 },
    { id: 'l6-mcq-15', question: "In a 'More than' ogive, the curve slopes:", options: ["Upwards", "Downwards", "Horizontal", "Vertical"], correct: 1 },
    { id: 'l6-mcq-16', question: "Area of frequency polygon is equal to area of:", options: ["Ogive", "Corresponding Histogram", "Pie Chart", "None"], correct: 1 },
    { id: 'l6-mcq-17', question: "To convert inclusive series (10-19) to exclusive (9.5-19.5), we use correction factor:", options: ["0.1", "0.5", "1.0", "5.0"], correct: 1 },
    { id: 'l6-mcq-18', question: "The shape of a normal frequency curve is:", options: ["U-Shaped", "J-Shaped", "Bell-Shaped", "S-Shaped"], correct: 2 },
    { id: 'l6-mcq-19', question: "What is plotted on X-axis for a Frequency Polygon?", options: ["Upper Limits", "Lower Limits", "Mid-values (Class Marks)", "Frequency"], correct: 2 },
    { id: 'l6-mcq-20', question: "If intervals are 0-10, 10-20, what is the Mid-value for first class?", options: ["5", "10", "0", "15"], correct: 0 },
];

const tfQuestions = [
    { id: 'l6-tf-1', question: "A frequency polygon can be drawn without first drawing a histogram.", correct: true },
    { id: 'l6-tf-2', question: "In a histogram, the width of all bars must always be equal.", correct: false },
    { id: 'l6-tf-3', question: "An ogive is always an increasing or decreasing curve, never both at the same time.", correct: true },
    { id: 'l6-tf-4', question: "Histogram and Bar Diagram are the same thing.", correct: false },
    { id: 'l6-tf-5', question: "The base of a frequency polygon is closed by extending it to imaginary classes on both sides at zero frequency.", correct: true },
    { id: 'l6-tf-6', question: "A 'Less Than' ogive starts from the upper limit of the first class interval.", correct: true },
    { id: 'l6-tf-7', question: "For a histogram with unequal class widths, frequency density must be used instead of frequency.", correct: true },
    { id: 'l6-tf-8', question: "Ogives can only be used to find the Median, not Quartiles or Percentiles.", correct: false },
    { id: 'l6-tf-9', question: "In a histogram, there are gaps between the bars.", correct: false },
    { id: 'l6-tf-10', question: "The x-axis of a frequency polygon represents the class marks (mid-values) of the class intervals.", correct: true },
];

const Quiz = () => {
    return (
        <SharedQuiz
            mcqQuestions={mcqQuestions}
            tfQuestions={tfQuestions}
            quizId="stats-lesson6-quiz"
            title="Frequency Diagrams Quiz"
            subtitle="Test your understanding of Histograms, Frequency Polygons & Ogives"
        />
    );
};

export default Quiz;
