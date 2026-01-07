// CentralProblems.jsx - What, How, For Whom
import { FaBoxOpen, FaCogs, FaUsers, FaLightbulb, FaIndustry, FaShoppingCart, FaBalanceScale, FaChartLine, FaHandHoldingUsd, FaGlobe } from 'react-icons/fa';
import './components.css';

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

      <div className="content-card">
        <p className="intro-text cp-intro-text">
          Due to the fundamental problem of <strong className="cp-intro-text-highlight">scarcity</strong>, every economy faces three
          interrelated questions. These questions are not theoretical - they are practical problems that governments, businesses,
          and individuals must solve every day. The way these questions are answered defines the nature of an economic system.
        </p>

        <div className="cp-why-box">
          <h4 className="cp-why-box-heading">
            🎯 Why These Questions Arise
          </h4>
          <p className="cp-why-box-text">
            Remember: Resources are <strong>limited</strong> but wants are <strong>unlimited</strong>. We cannot produce everything
            everyone wants. Therefore, we must make <strong>choices</strong>. These three central problems represent the most
            fundamental choices any economic system must make. Different economic systems (capitalism, socialism, mixed) answer
            these questions differently, but all must answer them.
          </p>
        </div>
      </div>

      {/* Problem 1: What to Produce */}
      <div className="problem-card">
        <div className="problem-number gold">
          <span>1</span>
        </div>
        <div className="problem-content">
          <h4 className="problem-title">What to Produce?</h4>
          <p className="problem-subtitle problem-subtitle-gold">
            The problem of allocation of resources
          </p>
          <div className="problem-explanation">
            <p className="problem-text">
              This is the first and most fundamental question. An economy must decide <strong>which goods and services</strong> to produce
              and <strong>in what quantities</strong>. Should we produce more food or more cars? More hospitals or more shopping malls?
              More military equipment or more schools? Since resources are limited, producing more of one thing means producing less of another.
            </p>

            <h5 className="problem-section-heading">
              Two Key Dimensions of This Problem:
            </h5>

            <div className="sub-decisions cp-sub-decisions">
              <div className="sub-decision cp-sub-decision-green">
                <div className="cp-icon-header">
                  <FaShoppingCart className="cp-icon-green" />
                  <h5 className="cp-icon-header-title-green">A. Types of Goods</h5>
                </div>
                <p className="cp-description-text">
                  Should we produce <strong>Consumer Goods</strong> (goods that directly satisfy wants like food, clothes, phones)
                  or <strong>Capital Goods</strong> (goods used to produce other goods like machines, factories, tools)?
                </p>
                <div className="cp-example-box">
                  <strong className="cp-example-highlight-green">Real-World Example:</strong> After independence, India had to choose: produce more
                  food and clothes (consumer goods) to satisfy immediate needs, or build steel plants and dams (capital goods) for future
                  growth? India chose to focus more on capital goods (heavy industries) in the first Five Year Plans. This meant less
                  consumer goods initially, but potential for more production in the future.
                </div>
              </div>

              <div className="sub-decision cp-sub-decision-cyan">
                <div className="cp-icon-header">
                  <FaChartLine className="cp-icon-cyan" />
                  <h5 className="cp-icon-header-title-cyan">B. Quantity of Each Good</h5>
                </div>
                <p className="cp-description-text">
                  Once we decide the types, we must decide <strong>how much of each</strong> to produce. This is the problem of
                  <strong> composition of output</strong>. Should we produce 1000 cars and 5000 bikes, or 5000 cars and 1000 bikes?
                </p>
                <div className="cp-example-box">
                  <strong className="cp-example-highlight-cyan">Real-World Example:</strong> During COVID-19, countries had to quickly decide:
                  should we produce more masks and ventilators, or continue producing normal goods? The composition of output shifted
                  dramatically - factories that made clothes started making masks, car manufacturers made ventilators. This shows how
                  "what to produce" changes based on priorities.
                </div>
              </div>
            </div>

            <div className="cp-key-concepts-box">
              <h5 className="cp-key-concepts-heading">
                💡 Key Economic Concepts Involved:
              </h5>
              <ul className="cp-key-concepts-list">
                <li><strong>Opportunity Cost:</strong> Producing more of good A means producing less of good B</li>
                <li><strong>Present vs Future:</strong> Consumer goods satisfy present wants; capital goods enable future production</li>
                <li><strong>Priorities:</strong> Essential goods (food, medicine) vs luxury goods (branded clothes, expensive cars)</li>
                <li><strong>Defense vs Development:</strong> More military spending means less spending on education/healthcare</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Problem 2: How to Produce */}
      <div className="problem-card problem-card-mt">
        <div className="problem-number green">
          <span>2</span>
        </div>
        <div className="problem-content">
          <h4 className="problem-title">How to Produce?</h4>
          <p className="problem-subtitle problem-subtitle-green">
            The problem of choice of technique
          </p>
          <div className="problem-explanation">
            <p className="problem-text">
              Once we decide <strong>what</strong> to produce, we must decide <strong>how</strong> to produce it. The same good can be
              produced using different methods or <strong>techniques of production</strong>. Should we use more workers (labor-intensive)
              or more machines (capital-intensive)? This choice affects efficiency, employment, and cost.
            </p>

            <h5 className="problem-section-heading">
              Two Main Techniques:
            </h5>

            <div className="techniques-comparison cp-techniques-comparison">
              <div className="technique-card cp-technique-card-cyan">
                <FaUsers className="cp-technique-icon-cyan" />
                <h5 className="cp-technique-title-cyan">Labor Intensive Technique (LIT)</h5>
                <p className="cp-description-text">
                  Uses <strong>more human labor</strong> and <strong>less machinery/capital</strong>. Workers do most of the work
                  with simple tools.
                </p>

                <div className="cp-adv-disadv-box">
                  <h6 className="cp-adv-heading-cyan">✓ Advantages:</h6>
                  <ul className="cp-adv-disadv-list">
                    <li>Creates more employment opportunities</li>
                    <li>Requires less initial capital investment</li>
                    <li>Suitable for developing countries with surplus labor</li>
                    <li>Reduces income inequality (more people earn wages)</li>
                    <li>Uses locally available resources</li>
                  </ul>
                </div>

                <div className="cp-adv-disadv-box">
                  <h6 className="cp-disadv-heading">✗ Disadvantages:</h6>
                  <ul className="cp-adv-disadv-list">
                    <li>Lower productivity per worker</li>
                    <li>Higher production costs in the long run</li>
                    <li>Time-consuming production process</li>
                    <li>Quality may vary (human error)</li>
                    <li>Limited scalability</li>
                  </ul>
                </div>

                <div className="cp-technique-example-cyan">
                  <strong>Example:</strong> Hand-woven textiles in India, agricultural harvesting using manual labor,
                  construction using workers with basic tools, handicraft production.
                </div>
              </div>

              <div className="technique-card cp-technique-card-purple">
                <FaCogs className="cp-technique-icon-purple" />
                <h5 className="cp-technique-title-purple">Capital Intensive Technique (CIT)</h5>
                <p className="cp-description-text">
                  Uses <strong>more machinery/capital</strong> and <strong>less human labor</strong>. Most work is done by
                  machines and automation.
                </p>

                <div className="cp-adv-disadv-box">
                  <h6 className="cp-adv-heading-purple">✓ Advantages:</h6>
                  <ul className="cp-adv-disadv-list">
                    <li>Higher productivity and efficiency</li>
                    <li>Lower production costs in the long run</li>
                    <li>Consistent quality (less human error)</li>
                    <li>Faster production speed</li>
                    <li>Better suited for mass production</li>
                  </ul>
                </div>

                <div className="cp-adv-disadv-box">
                  <h6 className="cp-disadv-heading">✗ Disadvantages:</h6>
                  <ul className="cp-adv-disadv-list">
                    <li>Creates unemployment (machines replace workers)</li>
                    <li>Requires large initial investment</li>
                    <li>Not suitable for countries with surplus labor</li>
                    <li>Increases income inequality (fewer workers needed)</li>
                    <li>Depends on imported technology in developing countries</li>
                  </ul>
                </div>

                <div className="cp-technique-example-purple">
                  <strong>Example:</strong> Automated car manufacturing (Tesla, Maruti), mechanized farming with tractors
                  and harvesters, computer chip production, automated warehouses (Amazon).
                </div>
              </div>
            </div>

            <div className="cp-decision-box">
              <h5 className="cp-decision-heading">
                🤔 Which Technique Should Be Chosen?
              </h5>
              <p className="cp-decision-text">
                The choice depends on several factors:
              </p>
              <ul className="cp-decision-list">
                <li><strong>Factor Availability:</strong> Countries with surplus labor (like India, China) should prefer LIT.
                    Countries with labor shortage (like Japan, Germany) prefer CIT.</li>
                <li><strong>Economic Goals:</strong> If goal is employment generation, choose LIT. If goal is rapid growth, choose CIT.</li>
                <li><strong>Type of Product:</strong> Handicrafts need LIT, electronics need CIT.</li>
                <li><strong>Cost Consideration:</strong> Which technique minimizes the cost of production?</li>
                <li><strong>Stage of Development:</strong> Developing countries often start with LIT and gradually shift to CIT.</li>
              </ul>
            </div>

            <div className="cp-scenario-box-green">
              <h5 className="cp-scenario-heading">
                🌍 Real-World Scenario: India's Dilemma
              </h5>
              <p className="cp-scenario-text">
                India faces a unique challenge. We have millions of unemployed people (suggesting we should use LIT to create jobs),
                but we also want rapid industrial growth (suggesting we should use CIT for efficiency). This is why India uses a
                <strong> mixed approach</strong> - CIT in modern industries like IT and automobiles, LIT in sectors like agriculture
                and handicrafts. This balances employment generation with productivity growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem 3: For Whom to Produce */}
      <div className="problem-card problem-card-mt">
        <div className="problem-number cyan">
          <span>3</span>
        </div>
        <div className="problem-content">
          <h4 className="problem-title">For Whom to Produce?</h4>
          <p className="problem-subtitle problem-subtitle-cyan">
            The problem of distribution of output
          </p>
          <div className="problem-explanation">
            <p className="problem-text">
              After deciding <strong>what</strong> to produce and <strong>how</strong> to produce, we must decide <strong>who gets
              to consume</strong> the produced goods. This is the problem of <strong>distribution</strong>. Should goods go to the
              rich or the poor? To urban or rural areas? To current generation or save for future generations?
            </p>

            <p className="cp-distribution-text">
              This problem essentially asks: <strong className="cp-distribution-text-highlight">How should the national income be distributed
              among different people in society?</strong> It's about <strong>equity</strong> and <strong>fairness</strong>.
            </p>

            <h5 className="problem-section-heading">
              Key Aspects of This Problem:
            </h5>

            <div className="cp-distribution-grid">
              <div className="cp-sub-decision-cyan">
                <div className="cp-icon-header">
                  <FaBalanceScale className="cp-icon-cyan" />
                  <h5 className="cp-icon-header-title-cyan">Distribution Based on Income</h5>
                </div>
                <p className="cp-distribution-description">
                  In most economies, goods are distributed based on <strong>purchasing power</strong> (income). Those with higher
                  incomes can buy more goods. But this raises a question: Is this fair? Should the rich consume luxury goods while
                  the poor lack basic necessities?
                </p>
                <div className="cp-example-box">
                  <strong>Example:</strong> In India, the top 10% of people own 77% of the national wealth. This means production
                  is largely directed toward satisfying wants of the rich (luxury cars, expensive electronics) while many poor
                  people still lack access to basic healthcare and education.
                </div>
              </div>

              <div className="cp-sub-decision-purple">
                <div className="cp-icon-header">
                  <FaHandHoldingUsd className="cp-icon-purple" />
                  <h5 className="cp-icon-header-title-purple">Factors Determining Distribution</h5>
                </div>
                <p className="cp-distribution-description">
                  Who gets how much depends on:
                </p>
                <ul className="cp-distribution-list">
                  <li><strong>Factor Ownership:</strong> Those who own land, labor, capital, or entrepreneurship earn income from it</li>
                  <li><strong>Wages & Salaries:</strong> Higher skills command higher wages</li>
                  <li><strong>Profits:</strong> Business owners get profits from their enterprises</li>
                  <li><strong>Rent:</strong> Landowners receive rent</li>
                  <li><strong>Interest:</strong> Capital owners receive interest on their investments</li>
                  <li><strong>Government Transfers:</strong> Subsidies, pensions, scholarships help redistribute income</li>
                </ul>
              </div>

              <div className="cp-sub-decision-gold">
                <div className="cp-icon-header">
                  <FaGlobe className="cp-icon-gold" />
                  <h5 className="cp-icon-header-title-gold">Different Economic Systems, Different Answers</h5>
                </div>

                <div className="cp-systems-container">
                  <div className="cp-system-item">
                    <h6 className="cp-system-heading-green">Capitalist Economy:</h6>
                    <p className="cp-system-text">
                      Distribution based on purchasing power. "Those who can pay, get the goods." May lead to inequality but
                      provides incentives for hard work and innovation.
                    </p>
                  </div>

                  <div className="cp-system-item">
                    <h6 className="cp-system-heading-red">Socialist Economy:</h6>
                    <p className="cp-system-text">
                      Distribution based on needs. "From each according to ability, to each according to need." Aims for equality
                      but may reduce incentives to work harder.
                    </p>
                  </div>

                  <div className="cp-system-item">
                    <h6 className="cp-system-heading-purple">Mixed Economy (Like India):</h6>
                    <p className="cp-system-text">
                      Combines both approaches. Market determines most distribution, but government intervenes to ensure basic
                      needs of poor are met through subsidies, public distribution system, free education, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cp-dilemma-box">
              <h5 className="cp-dilemma-heading">
                ⚠️ The Core Dilemma: Efficiency vs Equity
              </h5>
              <p className="cp-dilemma-text">
                This problem represents a fundamental trade-off in economics: <strong>Efficiency</strong> (producing maximum output)
                vs <strong>Equity</strong> (fair distribution). If we focus only on efficiency, income inequality increases. If we
                focus only on equity (equal distribution), people may lose incentive to work hard, reducing overall production.
                Finding the right balance is one of the biggest challenges in economic policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="highlight-card gold cp-takeaway-card">
        <div className="highlight-icon">
          <FaLightbulb />
        </div>
        <div className="highlight-content">
          <h3 className="cp-takeaway-heading">🎯 Key Takeaways</h3>
          <ul className="cp-takeaway-list">
            <li><strong>What to produce</strong> deals with <strong>allocation of resources</strong> - deciding the composition of output</li>
            <li><strong>How to produce</strong> deals with <strong>efficiency</strong> - choosing the best technique of production</li>
            <li><strong>For whom to produce</strong> deals with <strong>equity/fairness</strong> - distributing output among people</li>
          </ul>
          <p className="cp-takeaway-text">
            These three problems are <strong>interrelated</strong>. The answer to one affects the others. For example, if we choose
            capital-intensive technique (How), it may lead to unemployment, affecting income distribution (For Whom), which in turn
            affects demand and thus what to produce (What). Understanding these connections is crucial for economic analysis.
          </p>
        </div>
      </div>

      <div className="highlight-card purple cp-remember-card">
        <div className="highlight-content">
          <h3 className="cp-remember-heading">💡 Remember for Exams</h3>
          <p className="cp-remember-text">
            These three central problems exist in <strong>all economic systems</strong> - whether capitalist, socialist, or mixed.
            The difference lies not in whether these problems exist, but in <strong>how they are solved</strong>. In capitalist
            economies, market forces (demand and supply) solve them. In socialist economies, central planning authorities decide.
            In mixed economies (like India), both market forces and government planning play a role. This is a frequently asked exam
            question!
          </p>
        </div>
      </div>
    </section>
  );
}

export default CentralProblems;
