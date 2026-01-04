// CentralProblems.jsx - What, How, For Whom
import { FaBoxOpen, FaCogs, FaUsers, FaLightbulb, FaIndustry, FaShoppingCart, FaBalanceScale, FaChartLine, FaHandHoldingUsd, FaGlobe } from 'react-icons/fa';

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
        <p className="intro-text" style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '25px' }}>
          Due to the fundamental problem of <strong style={{ color: '#ffd700' }}>scarcity</strong>, every economy faces three
          interrelated questions. These questions are not theoretical - they are practical problems that governments, businesses,
          and individuals must solve every day. The way these questions are answered defines the nature of an economic system.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(157,78,221,0.1))',
          padding: '20px',
          borderRadius: '12px',
          border: '2px solid rgba(255,215,0,0.3)',
          marginBottom: '30px'
        }}>
          <h4 style={{ color: '#ffd700', margin: '0 0 12px 0', fontSize: '1.1rem' }}>
            🎯 Why These Questions Arise
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
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
          <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>What to Produce?</h4>
          <p className="problem-subtitle" style={{ fontSize: '1rem', color: '#ffd700', marginBottom: '20px' }}>
            The problem of allocation of resources
          </p>
          <div className="problem-explanation">
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
              This is the first and most fundamental question. An economy must decide <strong>which goods and services</strong> to produce
              and <strong>in what quantities</strong>. Should we produce more food or more cars? More hospitals or more shopping malls?
              More military equipment or more schools? Since resources are limited, producing more of one thing means producing less of another.
            </p>

            <h5 style={{ color: 'white', fontSize: '1.1rem', marginTop: '25px', marginBottom: '15px' }}>
              Two Key Dimensions of This Problem:
            </h5>

            <div className="sub-decisions" style={{ display: 'grid', gap: '20px', marginBottom: '25px' }}>
              <div className="sub-decision" style={{
                background: 'rgba(0,255,136,0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid rgba(0,255,136,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FaShoppingCart style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                  <h5 style={{ color: '#00ff88', margin: 0, fontSize: '1.1rem' }}>A. Types of Goods</h5>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '15px' }}>
                  Should we produce <strong>Consumer Goods</strong> (goods that directly satisfy wants like food, clothes, phones)
                  or <strong>Capital Goods</strong> (goods used to produce other goods like machines, factories, tools)?
                </p>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#00ff88' }}>Real-World Example:</strong> After independence, India had to choose: produce more
                  food and clothes (consumer goods) to satisfy immediate needs, or build steel plants and dams (capital goods) for future
                  growth? India chose to focus more on capital goods (heavy industries) in the first Five Year Plans. This meant less
                  consumer goods initially, but potential for more production in the future.
                </div>
              </div>

              <div className="sub-decision" style={{
                background: 'rgba(0,212,255,0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid rgba(0,212,255,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FaChartLine style={{ fontSize: '1.5rem', color: '#00d4ff' }} />
                  <h5 style={{ color: '#00d4ff', margin: 0, fontSize: '1.1rem' }}>B. Quantity of Each Good</h5>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '15px' }}>
                  Once we decide the types, we must decide <strong>how much of each</strong> to produce. This is the problem of
                  <strong> composition of output</strong>. Should we produce 1000 cars and 5000 bikes, or 5000 cars and 1000 bikes?
                </p>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '8px', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <strong style={{ color: '#00d4ff' }}>Real-World Example:</strong> During COVID-19, countries had to quickly decide:
                  should we produce more masks and ventilators, or continue producing normal goods? The composition of output shifted
                  dramatically - factories that made clothes started making masks, car manufacturers made ventilators. This shows how
                  "what to produce" changes based on priorities.
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,215,0,0.1)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(255,215,0,0.3)',
              marginTop: '20px'
            }}>
              <h5 style={{ color: '#ffd700', margin: '0 0 12px 0', fontSize: '1rem' }}>
                💡 Key Economic Concepts Involved:
              </h5>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.8', paddingLeft: '20px', margin: 0, color: 'rgba(255,255,255,0.85)' }}>
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
      <div className="problem-card" style={{ marginTop: '30px' }}>
        <div className="problem-number green">
          <span>2</span>
        </div>
        <div className="problem-content">
          <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>How to Produce?</h4>
          <p className="problem-subtitle" style={{ fontSize: '1rem', color: '#00ff88', marginBottom: '20px' }}>
            The problem of choice of technique
          </p>
          <div className="problem-explanation">
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Once we decide <strong>what</strong> to produce, we must decide <strong>how</strong> to produce it. The same good can be
              produced using different methods or <strong>techniques of production</strong>. Should we use more workers (labor-intensive)
              or more machines (capital-intensive)? This choice affects efficiency, employment, and cost.
            </p>

            <h5 style={{ color: 'white', fontSize: '1.1rem', marginTop: '25px', marginBottom: '15px' }}>
              Two Main Techniques:
            </h5>

            <div className="techniques-comparison" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '25px' }}>
              <div className="technique-card" style={{
                background: 'linear-gradient(145deg, rgba(0,212,255,0.1), rgba(0,212,255,0.05))',
                padding: '25px',
                borderRadius: '14px',
                border: '2px solid rgba(0,212,255,0.3)'
              }}>
                <FaUsers style={{ fontSize: '3rem', color: '#00d4ff', marginBottom: '15px' }} />
                <h5 style={{ color: '#00d4ff', fontSize: '1.2rem', marginBottom: '12px' }}>Labor Intensive Technique (LIT)</h5>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '15px' }}>
                  Uses <strong>more human labor</strong> and <strong>less machinery/capital</strong>. Workers do most of the work
                  with simple tools.
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                  <h6 style={{ color: '#00d4ff', fontSize: '0.95rem', marginBottom: '10px' }}>✓ Advantages:</h6>
                  <ul style={{ fontSize: '0.85rem', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                    <li>Creates more employment opportunities</li>
                    <li>Requires less initial capital investment</li>
                    <li>Suitable for developing countries with surplus labor</li>
                    <li>Reduces income inequality (more people earn wages)</li>
                    <li>Uses locally available resources</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px' }}>
                  <h6 style={{ color: '#ff6b6b', fontSize: '0.95rem', marginBottom: '10px' }}>✗ Disadvantages:</h6>
                  <ul style={{ fontSize: '0.85rem', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                    <li>Lower productivity per worker</li>
                    <li>Higher production costs in the long run</li>
                    <li>Time-consuming production process</li>
                    <li>Quality may vary (human error)</li>
                    <li>Limited scalability</li>
                  </ul>
                </div>

                <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(0,212,255,0.15)', borderRadius: '8px', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <strong>Example:</strong> Hand-woven textiles in India, agricultural harvesting using manual labor,
                  construction using workers with basic tools, handicraft production.
                </div>
              </div>

              <div className="technique-card" style={{
                background: 'linear-gradient(145deg, rgba(157,78,221,0.1), rgba(157,78,221,0.05))',
                padding: '25px',
                borderRadius: '14px',
                border: '2px solid rgba(157,78,221,0.3)'
              }}>
                <FaCogs style={{ fontSize: '3rem', color: '#9d4edd', marginBottom: '15px' }} />
                <h5 style={{ color: '#9d4edd', fontSize: '1.2rem', marginBottom: '12px' }}>Capital Intensive Technique (CIT)</h5>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '15px' }}>
                  Uses <strong>more machinery/capital</strong> and <strong>less human labor</strong>. Most work is done by
                  machines and automation.
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px', marginBottom: '15px' }}>
                  <h6 style={{ color: '#9d4edd', fontSize: '0.95rem', marginBottom: '10px' }}>✓ Advantages:</h6>
                  <ul style={{ fontSize: '0.85rem', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                    <li>Higher productivity and efficiency</li>
                    <li>Lower production costs in the long run</li>
                    <li>Consistent quality (less human error)</li>
                    <li>Faster production speed</li>
                    <li>Better suited for mass production</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '10px' }}>
                  <h6 style={{ color: '#ff6b6b', fontSize: '0.95rem', marginBottom: '10px' }}>✗ Disadvantages:</h6>
                  <ul style={{ fontSize: '0.85rem', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                    <li>Creates unemployment (machines replace workers)</li>
                    <li>Requires large initial investment</li>
                    <li>Not suitable for countries with surplus labor</li>
                    <li>Increases income inequality (fewer workers needed)</li>
                    <li>Depends on imported technology in developing countries</li>
                  </ul>
                </div>

                <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(157,78,221,0.15)', borderRadius: '8px', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <strong>Example:</strong> Automated car manufacturing (Tesla, Maruti), mechanized farming with tractors
                  and harvesters, computer chip production, automated warehouses (Amazon).
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,215,0,0.1)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(255,215,0,0.3)',
              marginTop: '25px'
            }}>
              <h5 style={{ color: '#ffd700', margin: '0 0 15px 0', fontSize: '1.1rem' }}>
                🤔 Which Technique Should Be Chosen?
              </h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '12px', color: 'rgba(255,255,255,0.85)' }}>
                The choice depends on several factors:
              </p>
              <ul style={{ fontSize: '0.9rem', lineHeight: '1.8', paddingLeft: '20px', color: 'rgba(255,255,255,0.85)' }}>
                <li><strong>Factor Availability:</strong> Countries with surplus labor (like India, China) should prefer LIT.
                    Countries with labor shortage (like Japan, Germany) prefer CIT.</li>
                <li><strong>Economic Goals:</strong> If goal is employment generation, choose LIT. If goal is rapid growth, choose CIT.</li>
                <li><strong>Type of Product:</strong> Handicrafts need LIT, electronics need CIT.</li>
                <li><strong>Cost Consideration:</strong> Which technique minimizes the cost of production?</li>
                <li><strong>Stage of Development:</strong> Developing countries often start with LIT and gradually shift to CIT.</li>
              </ul>
            </div>

            <div style={{
              background: 'rgba(0,255,136,0.1)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(0,255,136,0.3)',
              marginTop: '20px'
            }}>
              <h5 style={{ color: '#00ff88', margin: '0 0 12px 0', fontSize: '1rem' }}>
                🌍 Real-World Scenario: India's Dilemma
              </h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.8', margin: 0, color: 'rgba(255,255,255,0.85)' }}>
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
      <div className="problem-card" style={{ marginTop: '30px' }}>
        <div className="problem-number cyan">
          <span>3</span>
        </div>
        <div className="problem-content">
          <h4 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>For Whom to Produce?</h4>
          <p className="problem-subtitle" style={{ fontSize: '1rem', color: '#00d4ff', marginBottom: '20px' }}>
            The problem of distribution of output
          </p>
          <div className="problem-explanation">
            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
              After deciding <strong>what</strong> to produce and <strong>how</strong> to produce, we must decide <strong>who gets
              to consume</strong> the produced goods. This is the problem of <strong>distribution</strong>. Should goods go to the
              rich or the poor? To urban or rural areas? To current generation or save for future generations?
            </p>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '25px', color: 'rgba(255,255,255,0.85)' }}>
              This problem essentially asks: <strong style={{ color: '#00d4ff' }}>How should the national income be distributed
              among different people in society?</strong> It's about <strong>equity</strong> and <strong>fairness</strong>.
            </p>

            <h5 style={{ color: 'white', fontSize: '1.1rem', marginTop: '25px', marginBottom: '15px' }}>
              Key Aspects of This Problem:
            </h5>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '25px' }}>
              <div style={{
                background: 'rgba(0,212,255,0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid rgba(0,212,255,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FaBalanceScale style={{ fontSize: '1.5rem', color: '#00d4ff' }} />
                  <h5 style={{ color: '#00d4ff', margin: 0, fontSize: '1.1rem' }}>Distribution Based on Income</h5>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '12px' }}>
                  In most economies, goods are distributed based on <strong>purchasing power</strong> (income). Those with higher
                  incomes can buy more goods. But this raises a question: Is this fair? Should the rich consume luxury goods while
                  the poor lack basic necessities?
                </p>
                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  <strong>Example:</strong> In India, the top 10% of people own 77% of the national wealth. This means production
                  is largely directed toward satisfying wants of the rich (luxury cars, expensive electronics) while many poor
                  people still lack access to basic healthcare and education.
                </div>
              </div>

              <div style={{
                background: 'rgba(157,78,221,0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid rgba(157,78,221,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FaHandHoldingUsd style={{ fontSize: '1.5rem', color: '#9d4edd' }} />
                  <h5 style={{ color: '#9d4edd', margin: 0, fontSize: '1.1rem' }}>Factors Determining Distribution</h5>
                </div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '12px' }}>
                  Who gets how much depends on:
                </p>
                <ul style={{ fontSize: '0.85rem', lineHeight: '1.7', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>Factor Ownership:</strong> Those who own land, labor, capital, or entrepreneurship earn income from it</li>
                  <li><strong>Wages & Salaries:</strong> Higher skills command higher wages</li>
                  <li><strong>Profits:</strong> Business owners get profits from their enterprises</li>
                  <li><strong>Rent:</strong> Landowners receive rent</li>
                  <li><strong>Interest:</strong> Capital owners receive interest on their investments</li>
                  <li><strong>Government Transfers:</strong> Subsidies, pensions, scholarships help redistribute income</li>
                </ul>
              </div>

              <div style={{
                background: 'rgba(255,215,0,0.1)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid rgba(255,215,0,0.3)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <FaGlobe style={{ fontSize: '1.5rem', color: '#ffd700' }} />
                  <h5 style={{ color: '#ffd700', margin: 0, fontSize: '1.1rem' }}>Different Economic Systems, Different Answers</h5>
                </div>

                <div style={{ marginTop: '15px' }}>
                  <div style={{ marginBottom: '15px' }}>
                    <h6 style={{ color: '#00ff88', fontSize: '0.95rem', marginBottom: '8px' }}>Capitalist Economy:</h6>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
                      Distribution based on purchasing power. "Those who can pay, get the goods." May lead to inequality but
                      provides incentives for hard work and innovation.
                    </p>
                  </div>

                  <div style={{ marginBottom: '15px' }}>
                    <h6 style={{ color: '#ff6b6b', fontSize: '0.95rem', marginBottom: '8px' }}>Socialist Economy:</h6>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
                      Distribution based on needs. "From each according to ability, to each according to need." Aims for equality
                      but may reduce incentives to work harder.
                    </p>
                  </div>

                  <div>
                    <h6 style={{ color: '#9d4edd', fontSize: '0.95rem', marginBottom: '8px' }}>Mixed Economy (Like India):</h6>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.7', margin: 0 }}>
                      Combines both approaches. Market determines most distribution, but government intervenes to ensure basic
                      needs of poor are met through subsidies, public distribution system, free education, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,107,107,0.1)',
              padding: '20px',
              borderRadius: '12px',
              border: '2px solid rgba(255,107,107,0.3)',
              marginTop: '20px'
            }}>
              <h5 style={{ color: '#ff6b6b', margin: '0 0 12px 0', fontSize: '1rem' }}>
                ⚠️ The Core Dilemma: Efficiency vs Equity
              </h5>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.8', margin: 0, color: 'rgba(255,255,255,0.85)' }}>
                This problem represents a fundamental trade-off in economics: <strong>Efficiency</strong> (producing maximum output)
                vs <strong>Equity</strong> (fair distribution). If we focus only on efficiency, income inequality increases. If we
                focus only on equity (equal distribution), people may lose incentive to work hard, reducing overall production.
                Finding the right balance is one of the biggest challenges in economic policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="highlight-card gold" style={{ marginTop: '30px' }}>
        <div className="highlight-icon">
          <FaLightbulb />
        </div>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '15px' }}>🎯 Key Takeaways</h3>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.9', paddingLeft: '25px', marginBottom: '15px' }}>
            <li><strong>What to produce</strong> deals with <strong>allocation of resources</strong> - deciding the composition of output</li>
            <li><strong>How to produce</strong> deals with <strong>efficiency</strong> - choosing the best technique of production</li>
            <li><strong>For whom to produce</strong> deals with <strong>equity/fairness</strong> - distributing output among people</li>
          </ul>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
            These three problems are <strong>interrelated</strong>. The answer to one affects the others. For example, if we choose
            capital-intensive technique (How), it may lead to unemployment, affecting income distribution (For Whom), which in turn
            affects demand and thus what to produce (What). Understanding these connections is crucial for economic analysis.
          </p>
        </div>
      </div>

      <div className="highlight-card purple" style={{ marginTop: '25px' }}>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '15px' }}>💡 Remember for Exams</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
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
