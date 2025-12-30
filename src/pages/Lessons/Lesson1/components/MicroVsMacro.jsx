// Micro vs Macro Module - Economics and Economies (VK Ohri Grade 11)
import { FaSearch, FaGlobe, FaBalanceScale, FaChartLine, FaBuilding, FaUsers, FaMoneyBillWave, FaIndustry } from 'react-icons/fa';

function MicroVsMacro() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Branches</span>
        <h2 className="section-title-lesson">Microeconomics vs Macroeconomics</h2>
        <p className="section-subtitle-lesson">
          Understanding the two major branches of economic study and their distinct perspectives
        </p>
      </div>

      {/* Introduction */}
      <div className="content-card">
        <p className="intro-text">
          Economics is broadly divided into two branches: <span className="highlight-gold">Microeconomics</span> and
          <span className="highlight-green"> Macroeconomics</span>. These terms were first coined by Norwegian economist
          <strong> Ragnar Frisch</strong> in 1933. Understanding the distinction between these two is crucial for
          analyzing different economic phenomena.
        </p>

        <div className="etymology-box">
          <div className="etymology-item">
            <h4>Micro</h4>
            <p>From Greek "Mikros" meaning <strong>small</strong></p>
          </div>
          <div className="etymology-item">
            <h4>Macro</h4>
            <p>From Greek "Makros" meaning <strong>large</strong></p>
          </div>
        </div>
      </div>

      {/* Visual Comparison */}
      <div className="branch-comparison">
        {/* Microeconomics */}
        <div className="branch-card micro">
          <div className="branch-header">
            <div className="branch-icon gold">
              <FaSearch />
            </div>
            <h3>Microeconomics</h3>
            <span className="branch-subtitle">Price Theory</span>
          </div>

          <div className="branch-definition">
            <p>
              <strong>Microeconomics</strong> is the study of economic behaviour of <span className="highlight-gold">individual units</span> of
              the economy such as a consumer, a household, a firm, or an industry. It examines how these units
              make decisions and interact with each other.
            </p>
          </div>

          <div className="branch-features">
            <h4>Key Features:</h4>
            <ul>
              <li>Studies individual economic units</li>
              <li>Focuses on specific markets</li>
              <li>Analyzes price determination</li>
              <li>Based on assumption of full employment</li>
              <li>Uses partial equilibrium analysis</li>
            </ul>
          </div>

          <div className="branch-scope">
            <h4>Scope of Study:</h4>
            <div className="scope-items">
              <div className="scope-item">
                <FaUsers className="scope-icon" />
                <span>Consumer Behaviour</span>
              </div>
              <div className="scope-item">
                <FaBuilding className="scope-icon" />
                <span>Producer Behaviour</span>
              </div>
              <div className="scope-item">
                <FaMoneyBillWave className="scope-icon" />
                <span>Price Determination</span>
              </div>
              <div className="scope-item">
                <FaBalanceScale className="scope-icon" />
                <span>Factor Pricing</span>
              </div>
            </div>
          </div>

          <div className="branch-examples">
            <h4>Examples:</h4>
            <ul>
              <li>Price of wheat in Delhi market</li>
              <li>Demand for smartphones</li>
              <li>Salary of an engineer</li>
              <li>Output of a single firm</li>
              <li>Rent in a particular area</li>
            </ul>
          </div>
        </div>

        {/* Macroeconomics */}
        <div className="branch-card macro">
          <div className="branch-header">
            <div className="branch-icon green">
              <FaGlobe />
            </div>
            <h3>Macroeconomics</h3>
            <span className="branch-subtitle">Income Theory</span>
          </div>

          <div className="branch-definition">
            <p>
              <strong>Macroeconomics</strong> is the study of economic behaviour of the <span className="highlight-green">economy as a whole</span>.
              It deals with aggregate quantities like national income, total employment, general price level,
              and total output of the entire economy.
            </p>
          </div>

          <div className="branch-features">
            <h4>Key Features:</h4>
            <ul>
              <li>Studies economy as a whole</li>
              <li>Focuses on aggregate variables</li>
              <li>Analyzes national income determination</li>
              <li>Deals with unemployment and inflation</li>
              <li>Uses general equilibrium analysis</li>
            </ul>
          </div>

          <div className="branch-scope">
            <h4>Scope of Study:</h4>
            <div className="scope-items">
              <div className="scope-item">
                <FaChartLine className="scope-icon" />
                <span>National Income</span>
              </div>
              <div className="scope-item">
                <FaUsers className="scope-icon" />
                <span>Employment Level</span>
              </div>
              <div className="scope-item">
                <FaMoneyBillWave className="scope-icon" />
                <span>General Price Level</span>
              </div>
              <div className="scope-item">
                <FaIndustry className="scope-icon" />
                <span>Economic Growth</span>
              </div>
            </div>
          </div>

          <div className="branch-examples">
            <h4>Examples:</h4>
            <ul>
              <li>India's GDP growth rate</li>
              <li>National unemployment rate</li>
              <li>Inflation rate in the country</li>
              <li>Balance of trade deficit</li>
              <li>Total savings of the economy</li>
            </ul>
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
                <th>Microeconomics</th>
                <th>Macroeconomics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Meaning</strong></td>
                <td>Study of individual economic units</td>
                <td>Study of economy as a whole</td>
              </tr>
              <tr>
                <td><strong>Scope</strong></td>
                <td>Specific markets and sectors</td>
                <td>Entire economy and aggregates</td>
              </tr>
              <tr>
                <td><strong>Also Called</strong></td>
                <td>Price Theory</td>
                <td>Income Theory</td>
              </tr>
              <tr>
                <td><strong>Method</strong></td>
                <td>Partial equilibrium (ceteris paribus)</td>
                <td>General equilibrium (all variables)</td>
              </tr>
              <tr>
                <td><strong>Variables</strong></td>
                <td>Individual prices, wages, output</td>
                <td>Aggregate income, employment, prices</td>
              </tr>
              <tr>
                <td><strong>Objective</strong></td>
                <td>Resource allocation efficiency</td>
                <td>Full employment and growth</td>
              </tr>
              <tr>
                <td><strong>Assumption</strong></td>
                <td>Full employment exists</td>
                <td>Unemployment may exist</td>
              </tr>
              <tr>
                <td><strong>Analogy</strong></td>
                <td>Studying individual trees</td>
                <td>Studying the entire forest</td>
              </tr>
              <tr>
                <td><strong>Example Questions</strong></td>
                <td>What determines price of rice?</td>
                <td>What determines national income?</td>
              </tr>
              <tr>
                <td><strong>Founder</strong></td>
                <td>Adam Smith, Alfred Marshall</td>
                <td>John Maynard Keynes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interdependence */}
      <div className="highlight-card gold">
        <div className="highlight-icon">
          <FaBalanceScale />
        </div>
        <div className="highlight-content">
          <h3>Interdependence of Micro and Macro Economics</h3>
          <p>
            Although microeconomics and macroeconomics are studied separately, they are <strong>interdependent</strong>
            and <strong>complementary</strong> to each other. According to <strong>Prof. Samuelson</strong>:
          </p>
          <div className="quote-box">
            <p>"There is no opposition between micro and macro economics. Both are absolutely essential."</p>
          </div>
          <ul className="bullet-list">
            <li><strong>Micro aggregated forms Macro:</strong> Individual decisions of millions of consumers and
            firms collectively determine national income and employment.</li>
            <li><strong>Macro influences Micro:</strong> Changes in aggregate demand affect individual businesses;
            inflation affects individual prices; national policies impact individual sectors.</li>
            <li><strong>Complementary tools:</strong> Both are needed for complete economic analysis and
            effective policy-making.</li>
          </ul>
        </div>
      </div>

      {/* Visual Example */}
      <div className="content-card">
        <h3 className="card-title">
          <FaChartLine className="title-icon green" />
          Understanding with Examples
        </h3>

        <div className="example-comparison">
          <div className="example-set">
            <h4 className="example-heading micro">Microeconomic Questions</h4>
            <ul className="example-list">
              <li>What is the price of wheat in Amritsar market?</li>
              <li>How many workers does Tata Motors employ?</li>
              <li>What is the production cost of Maruti cars?</li>
              <li>Why did the price of onions rise in Delhi?</li>
              <li>What determines the rent in South Mumbai?</li>
            </ul>
          </div>

          <div className="example-set">
            <h4 className="example-heading macro">Macroeconomic Questions</h4>
            <ul className="example-list">
              <li>What is India's total agricultural output?</li>
              <li>What is the unemployment rate in India?</li>
              <li>How much is India's total foreign exchange reserve?</li>
              <li>Why is inflation rising across the country?</li>
              <li>What is India's GDP and growth rate?</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-card">
        <h3>Key Takeaways</h3>
        <div className="takeaways-grid">
          <div className="takeaway">
            <span className="takeaway-icon gold">1</span>
            <p>Microeconomics studies individual units; Macroeconomics studies the whole economy</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon green">2</span>
            <p>Microeconomics is "Price Theory"; Macroeconomics is "Income Theory"</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon cyan">3</span>
            <p>Positive economics deals with facts; Normative economics deals with opinions</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon purple">4</span>
            <p>Both branches are interdependent and essential for complete economic analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MicroVsMacro;
