// Positive vs Normative Economics Module - Economics and Economies (VK Ohri Grade 11)
import { FaBalanceScale, FaFlask, FaGavel, FaChartBar, FaNewspaper, FaLightbulb, FaCheckCircle, FaTimesCircle, FaQuoteLeft, FaGlobe, FaRupeeSign, FaIndustry, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

function PositiveNormative() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Economic Analysis</span>
        <h2 className="section-title-lesson">Positive vs Normative Economics</h2>
        <p className="section-subtitle-lesson">
          Understanding the difference between facts and value judgments in economic analysis
        </p>
      </div>

      {/* Introduction */}
      <div className="content-card">
        <p className="intro-text">
          Economics can be studied from two fundamentally different perspectives:
          <span className="highlight-gold"> Positive Economics</span> which deals with <strong>"what is"</strong> and
          <span className="highlight-green"> Normative Economics</span> which deals with <strong>"what ought to be"</strong>.
          This distinction was first clearly articulated by <strong>John Neville Keynes</strong> (father of John Maynard Keynes)
          and later emphasized by economist <strong>Milton Friedman</strong>.
        </p>
      </div>

      {/* Visual Comparison Cards */}
      <div className="branch-comparison">
        {/* Positive Economics */}
        <div className="branch-card micro">
          <div className="branch-header">
            <div className="branch-icon gold">
              <FaFlask />
            </div>
            <h3>Positive Economics</h3>
            <span className="branch-subtitle">"What Is" - Science of Economics</span>
          </div>

          <div className="branch-definition">
            <p>
              <strong>Positive Economics</strong> is the branch of economics that deals with
              <span className="highlight-gold"> objective analysis</span> and <span className="highlight-gold">factual statements</span>.
              It focuses on describing and explaining economic phenomena based on facts and
              cause-and-effect relationships that can be tested and verified.
            </p>
          </div>

          <div className="branch-features">
            <h4>Key Characteristics:</h4>
            <ul>
              <li><strong>Fact-based:</strong> Based on observable facts and data</li>
              <li><strong>Testable:</strong> Statements can be verified or falsified</li>
              <li><strong>Objective:</strong> Does not involve personal opinions or value judgments</li>
              <li><strong>Descriptive:</strong> Describes "what is" or "what will be"</li>
              <li><strong>Scientific:</strong> Follows scientific methodology</li>
              <li><strong>Universal:</strong> Same conclusions regardless of the analyst</li>
            </ul>
          </div>

          <div className="branch-examples">
            <h4>Real-World Examples:</h4>
            <ul>
              <li>"India's GDP growth rate was 7.2% in 2022-23"</li>
              <li>"If RBI increases interest rates, borrowing will decrease"</li>
              <li>"Inflation in India was 6.7% in December 2023"</li>
              <li>"When petrol prices rise, demand for public transport increases"</li>
              <li>"The unemployment rate among youth is higher than adults"</li>
            </ul>
          </div>
        </div>

        {/* Normative Economics */}
        <div className="branch-card macro">
          <div className="branch-header">
            <div className="branch-icon green">
              <FaGavel />
            </div>
            <h3>Normative Economics</h3>
            <span className="branch-subtitle">"What Ought To Be" - Art of Economics</span>
          </div>

          <div className="branch-definition">
            <p>
              <strong>Normative Economics</strong> is the branch of economics that deals with
              <span className="highlight-green"> value judgments</span> and <span className="highlight-green">opinions</span>.
              It focuses on what the economy should look like or what particular policy actions should
              be recommended to achieve desirable goals.
            </p>
          </div>

          <div className="branch-features">
            <h4>Key Characteristics:</h4>
            <ul>
              <li><strong>Opinion-based:</strong> Based on values, ethics, and beliefs</li>
              <li><strong>Not testable:</strong> Cannot be proved right or wrong</li>
              <li><strong>Subjective:</strong> Involves personal judgments</li>
              <li><strong>Prescriptive:</strong> Prescribes "what should be"</li>
              <li><strong>Policy-oriented:</strong> Often used for policy recommendations</li>
              <li><strong>Varies:</strong> Different people may reach different conclusions</li>
            </ul>
          </div>

          <div className="branch-examples">
            <h4>Real-World Examples:</h4>
            <ul>
              <li>"India should aim for 8% GDP growth rate"</li>
              <li>"Government ought to provide free healthcare to all"</li>
              <li>"Inflation must be brought below 4%"</li>
              <li>"Petrol prices should be reduced to help the poor"</li>
              <li>"The government should create more jobs for youth"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Differentiator Card */}
      <div className="highlight-card gold">
        <div className="highlight-icon">
          <FaLightbulb />
        </div>
        <div className="highlight-content">
          <h3>How to Identify Positive vs Normative Statements</h3>
          <p>Here's a simple trick to differentiate between the two:</p>
          <div className="identification-tips">
            <div className="tip-box">
              <h4>Positive Statements</h4>
              <ul className="bullet-list">
                <li>Can be tested with data and facts</li>
                <li>Use words like: "is", "was", "will", "causes", "leads to"</li>
                <li>Describe relationships without judging them</li>
                <li>Everyone can agree if the statement is true or false</li>
              </ul>
            </div>
            <div className="tip-box">
              <h4>Normative Statements</h4>
              <ul className="bullet-list">
                <li>Cannot be tested - it's a matter of opinion</li>
                <li>Use words like: "should", "ought to", "must", "fair", "better"</li>
                <li>Express what is desirable or good</li>
                <li>People can disagree based on their values</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="content-card">
        <h3 className="card-title">
          <FaBalanceScale className="title-icon cyan" />
          Detailed Comparison
        </h3>

        <div className="table-container">
          <table className="comparison-table-premium">
            <thead>
              <tr>
                <th>Basis</th>
                <th>Positive Economics</th>
                <th>Normative Economics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nature</strong></td>
                <td>Objective, factual</td>
                <td>Subjective, value-based</td>
              </tr>
              <tr>
                <td><strong>Focus</strong></td>
                <td>"What is" or "what will be"</td>
                <td>"What ought to be"</td>
              </tr>
              <tr>
                <td><strong>Verification</strong></td>
                <td>Can be tested and verified</td>
                <td>Cannot be tested or verified</td>
              </tr>
              <tr>
                <td><strong>Basis</strong></td>
                <td>Facts, data, and evidence</td>
                <td>Ethics, opinions, and values</td>
              </tr>
              <tr>
                <td><strong>Value Judgment</strong></td>
                <td>Does not involve value judgments</td>
                <td>Involves value judgments</td>
              </tr>
              <tr>
                <td><strong>Approach</strong></td>
                <td>Descriptive and explanatory</td>
                <td>Prescriptive and advisory</td>
              </tr>
              <tr>
                <td><strong>Agreement</strong></td>
                <td>All economists should agree</td>
                <td>Economists may disagree</td>
              </tr>
              <tr>
                <td><strong>Also Called</strong></td>
                <td>Science of Economics</td>
                <td>Art of Economics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-World Indian Examples Section */}
      <div className="content-card">
        <h3 className="card-title">
          <FaGlobe className="title-icon purple" />
          Real-World Examples from India
        </h3>
        <p>
          Let's understand the difference through contemporary Indian economic issues:
        </p>

        <div className="example-comparison-grid">
          {/* Example 1: GST */}
          <div className="example-pair">
            <div className="example-topic">
              <FaRupeeSign className="topic-icon" />
              <h4>Goods and Services Tax (GST)</h4>
            </div>
            <div className="example-statements">
              <div className="statement positive">
                <span className="statement-label">Positive</span>
                <p>"GST collection in India crossed ₹1.65 lakh crore in October 2023"</p>
              </div>
              <div className="statement normative">
                <span className="statement-label">Normative</span>
                <p>"GST rates on essential goods should be reduced to help common people"</p>
              </div>
            </div>
          </div>

          {/* Example 2: Unemployment */}
          <div className="example-pair">
            <div className="example-topic">
              <FaUsers className="topic-icon" />
              <h4>Unemployment</h4>
            </div>
            <div className="example-statements">
              <div className="statement positive">
                <span className="statement-label">Positive</span>
                <p>"India's unemployment rate was 7.4% in October 2023 according to CMIE"</p>
              </div>
              <div className="statement normative">
                <span className="statement-label">Normative</span>
                <p>"Government should create 10 million jobs annually to tackle unemployment"</p>
              </div>
            </div>
          </div>

          {/* Example 3: Inflation */}
          <div className="example-pair">
            <div className="example-topic">
              <FaChartBar className="topic-icon" />
              <h4>Inflation</h4>
            </div>
            <div className="example-statements">
              <div className="statement positive">
                <span className="statement-label">Positive</span>
                <p>"Food inflation in India rose to 8.7% due to erratic monsoon"</p>
              </div>
              <div className="statement normative">
                <span className="statement-label">Normative</span>
                <p>"RBI should keep inflation below 4% to protect consumers' purchasing power"</p>
              </div>
            </div>
          </div>

          {/* Example 4: Public Welfare */}
          <div className="example-pair">
            <div className="example-topic">
              <FaHandHoldingHeart className="topic-icon" />
              <h4>Public Welfare</h4>
            </div>
            <div className="example-statements">
              <div className="statement positive">
                <span className="statement-label">Positive</span>
                <p>"MGNREGA provides 100 days of guaranteed employment to rural households"</p>
              </div>
              <div className="statement normative">
                <span className="statement-label">Normative</span>
                <p>"MGNREGA wages should be increased to ₹300 per day for better livelihood"</p>
              </div>
            </div>
          </div>

          {/* Example 5: Industry */}
          <div className="example-pair">
            <div className="example-topic">
              <FaIndustry className="topic-icon" />
              <h4>Industrial Policy</h4>
            </div>
            <div className="example-statements">
              <div className="statement positive">
                <span className="statement-label">Positive</span>
                <p>"FDI inflows to India reached $84 billion in 2022-23"</p>
              </div>
              <div className="statement normative">
                <span className="statement-label">Normative</span>
                <p>"India should further liberalize FDI norms in defense sector"</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Both Matter */}
      <div className="highlight-card green">
        <div className="highlight-icon">
          <FaBalanceScale />
        </div>
        <div className="highlight-content">
          <h3>Why Do Both Perspectives Matter?</h3>
          <p>
            Both positive and normative economics are essential for effective economic analysis and policy-making:
          </p>
          <div className="importance-grid">
            <div className="importance-item">
              <h4>Positive Economics is Important Because:</h4>
              <ul className="bullet-list">
                <li>It provides the factual foundation for understanding economic issues</li>
                <li>It helps predict the consequences of different policies</li>
                <li>It enables objective analysis free from political bias</li>
                <li>It answers questions like "If we do X, what will happen?"</li>
              </ul>
            </div>
            <div className="importance-item">
              <h4>Normative Economics is Important Because:</h4>
              <ul className="bullet-list">
                <li>It helps society decide what goals to pursue</li>
                <li>It guides policy-makers in making value-based choices</li>
                <li>It addresses questions of fairness and equity</li>
                <li>It answers questions like "Should we do X or Y?"</li>
              </ul>
            </div>
          </div>
          <div className="quote-box">
            <p>"Positive economics tells us what the options are; normative economics helps us choose among them."</p>
          </div>
        </div>
      </div>

      {/* Economic Debates Section */}
      <div className="content-card">
        <h3 className="card-title">
          <FaNewspaper className="title-icon gold" />
          Contemporary Economic Debates
        </h3>
        <p>
          Many economic debates arise because people confuse positive statements with normative ones,
          or because they have different normative views. Here are some examples:
        </p>

        <div className="debate-cards">
          <div className="debate-card">
            <h4>Minimum Wage Debate</h4>
            <div className="debate-content">
              <p><strong>Positive aspect:</strong> "Raising minimum wage may lead to some job losses in low-skill sectors" (can be studied)</p>
              <p><strong>Normative aspect:</strong> "Workers deserve a living wage that allows them to meet basic needs" (value judgment)</p>
            </div>
          </div>

          <div className="debate-card">
            <h4>Privatization Debate</h4>
            <div className="debate-content">
              <p><strong>Positive aspect:</strong> "Privatized firms often show improved efficiency and profitability" (can be measured)</p>
              <p><strong>Normative aspect:</strong> "Strategic sectors like defense should remain under government control" (value judgment)</p>
            </div>
          </div>

          <div className="debate-card">
            <h4>Environmental Policy</h4>
            <div className="debate-content">
              <p><strong>Positive aspect:</strong> "Carbon emissions cause global warming" (scientific fact)</p>
              <p><strong>Normative aspect:</strong> "India should prioritize development over strict emission controls" (value judgment)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Questions */}
      <div className="content-card">
        <h3 className="card-title">
          <FaLightbulb className="title-icon cyan" />
          Practice: Identify Positive or Normative
        </h3>
        <p>Try to identify whether each statement is positive or normative:</p>

        <div className="practice-questions">
          <div className="practice-item">
            <p className="practice-statement">"Higher education leads to higher income levels."</p>
            <span className="answer-tag positive">Positive</span>
            <p className="explanation">This is a cause-and-effect relationship that can be tested with data.</p>
          </div>

          <div className="practice-item">
            <p className="practice-statement">"The government should provide free education up to college level."</p>
            <span className="answer-tag normative">Normative</span>
            <p className="explanation">Contains "should" and represents a value judgment about what policy ought to be.</p>
          </div>

          <div className="practice-item">
            <p className="practice-statement">"Demonetization in 2016 reduced cash transactions in the economy."</p>
            <span className="answer-tag positive">Positive</span>
            <p className="explanation">This is a factual statement about what happened, which can be verified.</p>
          </div>

          <div className="practice-item">
            <p className="practice-statement">"Rich people ought to pay more taxes than poor people."</p>
            <span className="answer-tag normative">Normative</span>
            <p className="explanation">Contains "ought to" and represents a value judgment about fairness.</p>
          </div>

          <div className="practice-item">
            <p className="practice-statement">"If import duties are increased, domestic manufacturers will benefit."</p>
            <span className="answer-tag positive">Positive</span>
            <p className="explanation">This is a prediction based on cause-effect analysis, which can be tested.</p>
          </div>
        </div>
      </div>

      {/* VK Ohri's Perspective */}
      <div className="highlight-card cyan">
        <div className="highlight-icon">
          <FaQuoteLeft />
        </div>
        <div className="highlight-content">
          <h3>Important Point from VK Ohri</h3>
          <p>
            According to the textbook, both positive and normative economics have their place in economic analysis:
          </p>
          <ul className="bullet-list">
            <li><strong>Positive economics</strong> is essential for understanding how the economy works</li>
            <li><strong>Normative economics</strong> is essential for policy-making and achieving social goals</li>
            <li>Good economic analysis requires both - first understand "what is" (positive), then decide "what should be" (normative)</li>
            <li>Most government policies are based on normative considerations guided by positive analysis</li>
          </ul>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-card">
        <h3>Key Takeaways</h3>
        <div className="takeaways-grid">
          <div className="takeaway">
            <span className="takeaway-icon gold">1</span>
            <p>Positive economics deals with facts and "what is"; Normative deals with opinions and "what ought to be"</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon green">2</span>
            <p>Positive statements can be verified with data; Normative statements cannot be proved right or wrong</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon cyan">3</span>
            <p>Words like "should", "ought to", "must", "fair" indicate normative statements</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon purple">4</span>
            <p>Both are essential - positive helps understand, normative helps decide policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PositiveNormative;
