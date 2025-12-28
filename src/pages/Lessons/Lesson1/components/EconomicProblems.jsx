// Economic Problems Module - Economics and Economies (VK Ohri Grade 11)
import { FaQuestion, FaCogs, FaUsers, FaInfinity, FaExclamationTriangle, FaChartPie, FaIndustry, FaTractor } from 'react-icons/fa';

function EconomicProblems() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Central Problems</span>
        <h2 className="section-title-lesson">The Economic Problem</h2>
        <p className="section-subtitle-lesson">
          Understanding why every economy faces the challenge of making economic choices
        </p>
      </div>

      {/* The Basic Problem */}
      <div className="content-card featured-card">
        <div className="featured-icon-wrapper">
          <FaExclamationTriangle />
        </div>
        <h3 className="card-title">What is the Economic Problem?</h3>
        <p className="intro-text">
          The <span className="highlight-gold">economic problem</span> or the <span className="highlight-gold">basic problem of economics</span> arises
          because of the fundamental conflict between:
        </p>
        <div className="conflict-visual">
          <div className="conflict-item left">
            <FaInfinity className="conflict-icon" />
            <h4>Unlimited Wants</h4>
            <p>Human desires are endless and ever-growing</p>
          </div>
          <div className="conflict-vs">VS</div>
          <div className="conflict-item right">
            <FaChartPie className="conflict-icon" />
            <h4>Scarce Resources</h4>
            <p>Resources to satisfy wants are limited</p>
          </div>
        </div>
        <p>
          This mismatch between unlimited wants and limited means forces every society to make
          <span className="highlight-green"> choices</span> about how to use its resources efficiently.
        </p>
      </div>

      {/* Characteristics of Human Wants */}
      <div className="content-card">
        <h3 className="card-title">
          <FaUsers className="title-icon gold" />
          Characteristics of Human Wants
        </h3>
        <p>According to VK Ohri, human wants have the following important characteristics:</p>

        <div className="characteristics-grid">
          <div className="characteristic-card">
            <span className="char-number">1</span>
            <h4>Wants are Unlimited</h4>
            <p>There is no end to human wants. As soon as one want is satisfied, another arises. This is the nature of human psychology.</p>
            <div className="example-small">Example: After buying a bicycle, you want a motorcycle; after a motorcycle, a car.</div>
          </div>

          <div className="characteristic-card">
            <span className="char-number">2</span>
            <h4>A Particular Want is Satiable</h4>
            <p>While wants as a whole are unlimited, a single specific want can be satisfied at a given time.</p>
            <div className="example-small">Example: Your hunger can be satisfied with food, but soon you'll feel hungry again.</div>
          </div>

          <div className="characteristic-card">
            <span className="char-number">3</span>
            <h4>Wants are Recurring</h4>
            <p>Once a want is satisfied, it tends to reappear after some time. This is why economies continuously produce goods.</p>
            <div className="example-small">Example: Need for food, clothing, and shelter recurs daily or seasonally.</div>
          </div>

          <div className="characteristic-card">
            <span className="char-number">4</span>
            <h4>Wants are Complementary</h4>
            <p>Some wants require other goods to be satisfied together. Satisfying one want may create the need for another.</p>
            <div className="example-small">Example: Car requires petrol; smartphone requires internet connection.</div>
          </div>

          <div className="characteristic-card">
            <span className="char-number">5</span>
            <h4>Wants are Competitive</h4>
            <p>Given limited resources, satisfying one want means sacrificing another. Wants compete for the same resources.</p>
            <div className="example-small">Example: With Rs. 1000, you can either buy books or clothes, not both.</div>
          </div>

          <div className="characteristic-card">
            <span className="char-number">6</span>
            <h4>Wants Vary in Urgency</h4>
            <p>Not all wants are equally important. Some are urgent (needs) while others can wait (luxuries).</p>
            <div className="example-small">Example: Food and medicine are more urgent than entertainment.</div>
          </div>
        </div>
      </div>

      {/* Characteristics of Resources */}
      <div className="content-card">
        <h3 className="card-title">
          <FaCogs className="title-icon green" />
          Characteristics of Economic Resources
        </h3>

        <div className="resource-features">
          <div className="resource-feature">
            <div className="resource-icon gold">1</div>
            <div className="resource-content">
              <h4>Resources are Scarce</h4>
              <p>The supply of resources is limited compared to demand. Land, labor, capital, and entrepreneurship are all finite.</p>
            </div>
          </div>

          <div className="resource-feature">
            <div className="resource-icon green">2</div>
            <div className="resource-content">
              <h4>Resources have Alternative Uses</h4>
              <p>Most resources can be used for multiple purposes. A piece of land can be used for farming, housing, or industry.</p>
            </div>
          </div>

          <div className="resource-feature">
            <div className="resource-icon cyan">3</div>
            <div className="resource-content">
              <h4>Resources can be Combined</h4>
              <p>Resources are used in combination to produce goods and services. Production requires land, labor, and capital together.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Central Problems */}
      <div className="central-problems-section">
        <h3 className="section-subtitle">The Three Central Problems of an Economy</h3>
        <p className="intro-text center">
          Every economy, whether rich or poor, capitalist or socialist, must answer these three fundamental questions:
        </p>

        {/* Problem 1 */}
        <div className="problem-card">
          <div className="problem-number gold">
            <span>1</span>
          </div>
          <div className="problem-content">
            <h4>What to Produce?</h4>
            <p className="problem-subtitle">(Problem of Allocation of Resources)</p>

            <div className="problem-explanation">
              <p>
                Since resources are limited, every economy must decide which goods and services to produce and
                in what quantities. This involves two sub-decisions:
              </p>

              <div className="sub-decisions">
                <div className="sub-decision">
                  <h5>Which goods to produce?</h5>
                  <p>Consumer goods (food, clothes) or Capital goods (machines, factories)?</p>
                </div>
                <div className="sub-decision">
                  <h5>How much to produce?</h5>
                  <p>What should be the quantity of each good produced?</p>
                </div>
              </div>

              <div className="example-box">
                <FaQuestion className="example-icon" />
                <div>
                  <strong>Example Questions:</strong>
                  <ul>
                    <li>Should the country produce more defense equipment or healthcare facilities?</li>
                    <li>Should resources go to luxury cars or public transport?</li>
                    <li>How much wheat vs rice should be grown?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem 2 */}
        <div className="problem-card">
          <div className="problem-number green">
            <span>2</span>
          </div>
          <div className="problem-content">
            <h4>How to Produce?</h4>
            <p className="problem-subtitle">(Problem of Choice of Technique)</p>

            <div className="problem-explanation">
              <p>
                Once it is decided what to produce, the next question is about the technique or method
                of production. There are broadly two techniques:
              </p>

              <div className="techniques-comparison">
                <div className="technique-card">
                  <FaUsers className="technique-icon" />
                  <h5>Labour-Intensive Technique</h5>
                  <p>Uses more labor and less capital</p>
                  <ul>
                    <li>Lower cost of labor</li>
                    <li>Higher employment</li>
                    <li>Suitable for developing countries with surplus labor</li>
                  </ul>
                </div>

                <div className="technique-card">
                  <FaIndustry className="technique-icon" />
                  <h5>Capital-Intensive Technique</h5>
                  <p>Uses more machines and less labor</p>
                  <ul>
                    <li>Higher productivity</li>
                    <li>Better quality products</li>
                    <li>Suitable for developed countries</li>
                  </ul>
                </div>
              </div>

              <div className="example-box">
                <FaTractor className="example-icon" />
                <div>
                  <strong>Example:</strong>
                  <p>
                    In agriculture, India uses labour-intensive methods (manual harvesting) while the USA uses
                    capital-intensive methods (combine harvesters). The choice depends on resource availability
                    and economic conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem 3 */}
        <div className="problem-card">
          <div className="problem-number cyan">
            <span>3</span>
          </div>
          <div className="problem-content">
            <h4>For Whom to Produce?</h4>
            <p className="problem-subtitle">(Problem of Distribution of Output)</p>

            <div className="problem-explanation">
              <p>
                This problem deals with the distribution of goods and services among members of society.
                It involves deciding:
              </p>

              <div className="distribution-points">
                <div className="dist-point">
                  <span className="dist-icon">1</span>
                  <p><strong>Who gets how much?</strong> - Distribution of national income</p>
                </div>
                <div className="dist-point">
                  <span className="dist-icon">2</span>
                  <p><strong>Personal vs Functional distribution</strong> - Among individuals vs factors of production</p>
                </div>
                <div className="dist-point">
                  <span className="dist-icon">3</span>
                  <p><strong>Equity vs Efficiency</strong> - Fair distribution vs maximum output</p>
                </div>
              </div>

              <div className="example-box">
                <FaChartPie className="example-icon" />
                <div>
                  <strong>Example Questions:</strong>
                  <ul>
                    <li>Should luxury goods be produced for the rich or essential goods for the poor?</li>
                    <li>How should the national income be distributed among workers, landlords, and capitalists?</li>
                    <li>What should be the balance between private consumption and public services?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Problem */}
      <div className="content-card">
        <h3 className="card-title">
          <FaChartPie className="title-icon purple" />
          The Problem of Economic Growth
        </h3>
        <p>
          Apart from the three central problems, modern economists also consider a fourth problem:
          <span className="highlight-gold"> Economic Growth</span>. This deals with:
        </p>
        <ul className="bullet-list">
          <li><strong>Are resources being used efficiently?</strong> - Full employment of resources</li>
          <li><strong>Is the economy growing?</strong> - Increase in production capacity over time</li>
          <li><strong>How to achieve higher growth?</strong> - Investment, technology, and human capital development</li>
        </ul>
        <div className="highlight-card purple">
          <div className="highlight-content">
            <p>
              <strong>Note:</strong> The problem of economic growth is particularly important for developing countries
              like India, which need to expand their production possibilities to meet the needs of a growing population
              and raise living standards.
            </p>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-card">
        <h3>Key Takeaways</h3>
        <div className="takeaways-grid">
          <div className="takeaway">
            <span className="takeaway-icon gold">1</span>
            <p>Economic problem arises due to unlimited wants and scarce resources</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon green">2</span>
            <p>"What to produce" deals with allocation of resources</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon cyan">3</span>
            <p>"How to produce" deals with choice of production technique</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon purple">4</span>
            <p>"For whom to produce" deals with distribution of output</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EconomicProblems;
