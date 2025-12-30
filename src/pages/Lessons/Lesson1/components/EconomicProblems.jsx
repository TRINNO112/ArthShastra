// Economic Problems Module - Economics and Economies (VK Ohri Grade 11)
import { FaQuestion, FaCogs, FaUsers, FaInfinity, FaExclamationTriangle, FaChartPie, FaIndustry, FaTractor, FaGlobe } from 'react-icons/fa';

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

      {/* Real-World Examples of Central Problems in India */}
      <div className="content-card">
        <h3 className="card-title">
          <FaGlobe className="title-icon purple" />
          Central Problems in Real India
        </h3>
        <p>
          Let's see how India tackles these central economic problems with real examples:
        </p>

        <div className="india-examples-grid">
          <div className="india-example">
            <h4 className="example-problem gold">What to Produce?</h4>
            <div className="example-scenarios">
              <div className="scenario">
                <strong>Defense vs Development:</strong>
                <p>India spends about Rs. 6 lakh crore on defense (2024-25). This money could build 60,000 schools
                or 20,000 hospitals. The government must decide: security or social services?</p>
              </div>
              <div className="scenario">
                <strong>Bullet Train vs Local Trains:</strong>
                <p>The Mumbai-Ahmedabad bullet train project costs Rs. 1.1 lakh crore. Critics argue this money
                could upgrade existing railways serving millions of daily commuters. This is the "what to produce" dilemma!</p>
              </div>
              <div className="scenario">
                <strong>Electric vs Petrol Vehicles:</strong>
                <p>Should India's auto industry focus on EVs (Tata Nexon EV, Ola Electric) or continue with
                traditional vehicles? The choice affects jobs, environment, and technology investment.</p>
              </div>
            </div>
          </div>

          <div className="india-example">
            <h4 className="example-problem green">How to Produce?</h4>
            <div className="example-scenarios">
              <div className="scenario">
                <strong>Traditional vs Modern Farming:</strong>
                <p>Punjab uses tractors and combine harvesters (capital-intensive), while Bihar relies on manual
                labor (labour-intensive). Punjab produces more per hectare, but Bihar employs more people.</p>
              </div>
              <div className="scenario">
                <strong>Handloom vs Power Loom:</strong>
                <p>Varanasi silk sarees are made by hand (preserves jobs, cultural heritage but costly).
                Surat produces synthetic sarees by machines (cheaper but displaces artisans).</p>
              </div>
              <div className="scenario">
                <strong>Metro Construction:</strong>
                <p>Delhi Metro chose advanced tunnel-boring machines (capital-intensive), while some cities use
                more labor for construction. The choice depends on time constraints and employment goals.</p>
              </div>
            </div>
          </div>

          <div className="india-example">
            <h4 className="example-problem cyan">For Whom to Produce?</h4>
            <div className="example-scenarios">
              <div className="scenario">
                <strong>Luxury Cars vs Affordable Cars:</strong>
                <p>Should Maruti make more Balenos (middle class) or should Indian factories produce more
                Mercedes and BMWs (rich)? Market economy says: whoever can pay. Mixed economy balances both.</p>
              </div>
              <div className="scenario">
                <strong>Private Hospitals vs Government Hospitals:</strong>
                <p>Apollo and Fortis serve those who can afford premium healthcare. AIIMS and government hospitals
                serve the masses. India must balance quality private care with accessible public healthcare.</p>
              </div>
              <div className="scenario">
                <strong>PDS (Ration Shops):</strong>
                <p>The Public Distribution System provides subsidized rice and wheat to poor families.
                This is government intervention to ensure basic food reaches those who cannot afford market prices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COVID-19 Case Study */}
      <div className="highlight-card gold">
        <div className="highlight-icon">
          <FaExclamationTriangle />
        </div>
        <div className="highlight-content">
          <h3>Case Study: COVID-19 and Economic Problems</h3>
          <p>
            The COVID-19 pandemic perfectly illustrated all three central problems:
          </p>
          <div className="covid-examples">
            <div className="covid-example">
              <h4>What to Produce?</h4>
              <p>Should factories produce PPE kits and ventilators, or continue making regular products?
              Car companies like Mahindra started making ventilators. Textile mills shifted to making masks.</p>
            </div>
            <div className="covid-example">
              <h4>How to Produce?</h4>
              <p>Vaccines could be produced domestically (Covaxin by Bharat Biotech) or imported (Pfizer).
              India chose to boost domestic production - supporting local manufacturing despite higher initial costs.</p>
            </div>
            <div className="covid-example">
              <h4>For Whom to Produce?</h4>
              <p>Who gets vaccines first? Healthcare workers, elderly, or general public? Government prioritized
              frontline workers, then vulnerable groups, demonstrating distributive choices in crisis.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Everyday Examples Students Can Relate To */}
      <div className="content-card">
        <h3 className="card-title">
          <FaUsers className="title-icon green" />
          Economic Problems in Your Daily Life
        </h3>
        <p>
          You face these central problems too, even as a student:
        </p>

        <div className="student-examples">
          <div className="student-example-card">
            <h4>Your Family's Monthly Budget</h4>
            <div className="family-decisions">
              <p><strong>What to "produce"?</strong> Should family income go toward a vacation, new furniture,
              your coaching classes, or savings?</p>
              <p><strong>How to "produce"?</strong> Should mom cook at home (time-intensive) or order food
              (money-intensive)?</p>
              <p><strong>For whom?</strong> Should money be spent on your education, sibling's wedding,
              or parents' health insurance?</p>
            </div>
          </div>

          <div className="student-example-card">
            <h4>Your Study Time Allocation</h4>
            <div className="family-decisions">
              <p><strong>What to "produce"?</strong> Study Physics or Economics today? Prepare for board exams
              or competitive entrance?</p>
              <p><strong>How to "produce"?</strong> Self-study (more effort, less money) or take tuitions
              (less effort, more money)?</p>
              <p><strong>For whom?</strong> Study to please parents, for your own career, or to help your
              future family?</p>
            </div>
          </div>

          <div className="student-example-card">
            <h4>School's Resource Allocation</h4>
            <div className="family-decisions">
              <p><strong>What to "produce"?</strong> Should school invest in a new computer lab or a sports
              complex?</p>
              <p><strong>How to "produce"?</strong> Hire more teachers (labour-intensive) or buy smart boards
              (capital-intensive)?</p>
              <p><strong>For whom?</strong> Should fees be uniform or should there be scholarships for
              economically weaker students?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Production Possibility Curve Intro */}
      <div className="highlight-card cyan">
        <div className="highlight-icon">
          <FaChartPie />
        </div>
        <div className="highlight-content">
          <h3>Coming Up: Production Possibility Curve (PPC)</h3>
          <p>
            The central problems of an economy are often illustrated using the <strong>Production Possibility Curve</strong>
            or <strong>Production Possibility Frontier (PPF)</strong>. This graphical tool shows:
          </p>
          <ul className="bullet-list">
            <li>All possible combinations of two goods an economy can produce with given resources</li>
            <li>The trade-offs involved in choosing between alternatives</li>
            <li>The concept of opportunity cost visually</li>
            <li>How economic growth shifts possibilities outward</li>
          </ul>
          <p className="note-text">
            <strong>Preview:</strong> In the next chapter, you'll learn how the PPC helps visualize the "what to produce"
            problem - showing that producing more of one good means producing less of another!
          </p>
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
