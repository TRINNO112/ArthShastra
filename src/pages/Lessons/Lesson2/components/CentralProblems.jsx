// CentralProblems.jsx - What, How, For Whom
import { FaBoxOpen, FaCogs, FaUsers, FaLightbulb } from 'react-icons/fa';

function CentralProblems() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Concept Breakdown</span>
        <h2 className="section-title-lesson">The Three Central Problems</h2>
        <p className="section-subtitle-lesson">
          Every economy, whether Capitalist, Socialist, or Mixed, must solve these three fundamental questions.
        </p>
      </div>

      {/* Problem 1: What to Produce */}
      <div className="problem-card">
        <div className="problem-number gold">
          <span>1</span>
        </div>
        <div className="problem-content">
          <h4>What to Produce?</h4>
          <p className="problem-subtitle">The problem of allocation of resources</p>
          <div className="problem-explanation">
            <p>
              An economy must decide which goods and services to produce and in what quantities. This involves two aspects:
            </p>
            <div className="sub-decisions">
              <div className="sub-decision">
                <h5>Types of Goods</h5>
                <p>Consumer Goods (food, clothes) vs Capital Goods (machinery, tools).</p>
              </div>
              <div className="sub-decision">
                <h5>Quantity</h5>
                <p>How many units of each should be produced with the given resources.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem 2: How to Produce */}
      <div className="problem-card">
        <div className="problem-number green">
          <span>2</span>
        </div>
        <div className="problem-content">
          <h4>How to Produce?</h4>
          <p className="problem-subtitle">The problem of choice of technique</p>
          <div className="problem-explanation">
            <p>
              This refers to the selection of the most efficient production method:
            </p>
            <div className="techniques-comparison">
              <div className="technique-card">
                <FaUsers className="technique-icon" />
                <h5>Labor Intensive Technique (LIT)</h5>
                <p>Uses more labor and less capital. Helps in generating employment.</p>
              </div>
              <div className="technique-card">
                <FaCogs className="technique-icon" />
                <h5>Capital Intensive Technique (CIT)</h5>
                <p>Uses more capital (machines) and less labor. Increases efficiency and growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem 3: For Whom to Produce */}
      <div className="problem-card">
        <div className="problem-number cyan">
          <span>3</span>
        </div>
        <div className="problem-content">
          <h4>For Whom to Produce?</h4>
          <p className="problem-subtitle">The problem of distribution of output</p>
          <div className="problem-explanation">
            <p>
              Who will consume the goods? Should we produce for the rich (luxury goods) or the poor (essential goods)?
              It relates to the <strong>distribution of national income</strong> among factors of production (land, labor, capital, enterprise).
            </p>
          </div>
        </div>
      </div>

      <div className="highlight-card purple">
        <div className="highlight-icon">
          <FaLightbulb />
        </div>
        <div className="highlight-content">
          <h3>Pro-Tip for Exams</h3>
          <p>
            In VK Ohri's textbook, it's mentioned that <strong>What to produce</strong> deals with the composition of output,
            <strong> How to produce</strong> deals with efficiency, and <strong>For whom to produce</strong> deals with equity (fairness).
          </p>
        </div>
      </div>
    </section>
  );
}

export default CentralProblems;
