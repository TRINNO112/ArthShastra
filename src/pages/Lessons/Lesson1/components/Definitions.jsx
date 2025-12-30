// Definitions Module - Economics and Economies (VK Ohri Grade 11)
import { FaQuoteLeft, FaUser, FaStar, FaExclamationCircle, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';

function Definitions() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Definitions</span>
        <h2 className="section-title-lesson">Definitions of Economics</h2>
        <p className="section-subtitle-lesson">
          Understanding how economic thought evolved through different schools of thinking
        </p>
      </div>

      {/* Intro Text */}
      <div className="content-card">
        <p className="intro-text">
          Over the years, different economists have defined economics in different ways, reflecting
          their understanding of the subject and the economic issues of their time. These definitions
          can be broadly classified into <span className="highlight-gold">four categories</span>:
          Wealth Definition, Welfare Definition, Scarcity Definition, and Growth Definition.
        </p>
      </div>

      {/* Definition 1: Adam Smith */}
      <div className="definition-card">
        <div className="definition-header">
          <div className="economist-avatar gold">
            <FaUser />
          </div>
          <div className="economist-info">
            <h3>Adam Smith (1723-1790)</h3>
            <span className="definition-type">Wealth Definition</span>
          </div>
        </div>

        <div className="definition-quote">
          <FaQuoteLeft className="quote-icon" />
          <p>"Economics is the science of wealth."</p>
        </div>

        <div className="definition-explanation">
          <h4>Explanation:</h4>
          <p>
            In his famous book <em>"An Enquiry into the Nature and Causes of the Wealth of Nations"</em> (1776),
            Adam Smith defined economics as an inquiry into the nature and causes of wealth of nations.
            According to him, economics studies how wealth is:
          </p>
          <ul className="bullet-list">
            <li><strong>Produced</strong> - How goods and services are created</li>
            <li><strong>Distributed</strong> - How wealth spreads among different sections</li>
            <li><strong>Exchanged</strong> - How trade and commerce function</li>
            <li><strong>Consumed</strong> - How goods and services are used</li>
          </ul>
        </div>

        <div className="criticism-section">
          <h4><FaTimesCircle className="icon-red" /> Criticism:</h4>
          <ul className="bullet-list criticism">
            <li>Too narrow - focuses only on material wealth</li>
            <li>Ignores human welfare and well-being</li>
            <li>Does not consider services (doctors, teachers, etc.)</li>
            <li>Termed economics as a "dismal science" by Thomas Carlyle</li>
          </ul>
        </div>
      </div>

      {/* Definition 2: Alfred Marshall */}
      <div className="definition-card">
        <div className="definition-header">
          <div className="economist-avatar green">
            <FaUser />
          </div>
          <div className="economist-info">
            <h3>Alfred Marshall (1842-1924)</h3>
            <span className="definition-type">Welfare Definition</span>
          </div>
        </div>

        <div className="definition-quote">
          <FaQuoteLeft className="quote-icon" />
          <p>"Economics is the study of mankind in the ordinary business of life; it examines that part of individual and social action which is most closely connected with the attainment and with the use of the material requisites of well-being."</p>
        </div>

        <div className="definition-explanation">
          <h4>Explanation:</h4>
          <p>
            In his book <em>"Principles of Economics"</em> (1890), Marshall shifted focus from wealth to human welfare.
            Key aspects of his definition:
          </p>
          <ul className="bullet-list">
            <li><strong>Primary concern is human beings</strong> - not just wealth accumulation</li>
            <li><strong>Ordinary business of life</strong> - earning and spending income</li>
            <li><strong>Material welfare</strong> - goods that satisfy human wants</li>
            <li><strong>Social science</strong> - studies individuals living in society</li>
          </ul>
        </div>

        <div className="merits-section">
          <h4><FaCheckCircle className="icon-green" /> Merits:</h4>
          <ul className="bullet-list merits">
            <li>Shifted focus from wealth to human welfare</li>
            <li>Made economics a respectable social science</li>
            <li>Emphasized material well-being of individuals</li>
          </ul>
        </div>

        <div className="criticism-section">
          <h4><FaTimesCircle className="icon-red" /> Criticism:</h4>
          <ul className="bullet-list criticism">
            <li>Limited to material welfare - ignores non-material aspects</li>
            <li>Cannot classify activities as economic or non-economic</li>
            <li>Welfare is subjective - difficult to measure</li>
            <li>Does not address the fundamental problem of scarcity</li>
          </ul>
        </div>
      </div>

      {/* Definition 3: Lionel Robbins - MOST ACCEPTED */}
      <div className="definition-card featured">
        <div className="featured-badge">
          <FaStar /> Most Accepted Definition
        </div>

        <div className="definition-header">
          <div className="economist-avatar cyan">
            <FaUser />
          </div>
          <div className="economist-info">
            <h3>Lionel Robbins (1898-1984)</h3>
            <span className="definition-type">Scarcity Definition</span>
          </div>
        </div>

        <div className="definition-quote featured-quote">
          <FaQuoteLeft className="quote-icon" />
          <p>"Economics is the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses."</p>
        </div>

        <div className="definition-explanation">
          <h4>Explanation:</h4>
          <p>
            In his book <em>"An Essay on the Nature and Significance of Economic Science"</em> (1932),
            Robbins presented what is now the most widely accepted definition. The key elements are:
          </p>

          <div className="key-elements-grid">
            <div className="key-element">
              <h5>Unlimited Wants (Ends)</h5>
              <p>Human wants are unlimited, diverse, and recurring. When one want is satisfied, another emerges.</p>
            </div>

            <div className="key-element">
              <h5>Scarce Resources (Means)</h5>
              <p>The resources to satisfy wants are limited. Time, money, and natural resources are all scarce.</p>
            </div>

            <div className="key-element">
              <h5>Alternative Uses</h5>
              <p>Resources can be put to different uses. The same money can buy food, clothes, or entertainment.</p>
            </div>

            <div className="key-element">
              <h5>Choice & Prioritization</h5>
              <p>Since wants exceed resources, we must make choices and prioritize our needs.</p>
            </div>
          </div>
        </div>

        <div className="merits-section">
          <h4><FaCheckCircle className="icon-green" /> Merits:</h4>
          <ul className="bullet-list merits">
            <li><strong>Universal application</strong> - applies to all societies and economies</li>
            <li><strong>Scientific approach</strong> - made economics an analytical science</li>
            <li><strong>Addresses fundamental problem</strong> - scarcity and choice</li>
            <li><strong>Neutral stance</strong> - does not make value judgments</li>
          </ul>
        </div>

        <div className="criticism-section">
          <h4><FaTimesCircle className="icon-red" /> Criticism:</h4>
          <ul className="bullet-list criticism">
            <li>Does not address economic growth and development</li>
            <li>Makes economics too theoretical and abstract</li>
            <li>Ignores distribution aspects of economics</li>
          </ul>
        </div>
      </div>

      {/* Definition 4: Samuelson */}
      <div className="definition-card">
        <div className="definition-header">
          <div className="economist-avatar purple">
            <FaUser />
          </div>
          <div className="economist-info">
            <h3>Paul A. Samuelson (1915-2009)</h3>
            <span className="definition-type">Growth Definition</span>
          </div>
        </div>

        <div className="definition-quote">
          <FaQuoteLeft className="quote-icon" />
          <p>"Economics is the study of how men and society choose, with or without the use of money, to employ the scarce productive resources which could have alternative uses, to produce various commodities over time and distribute them for consumption now and in the future among various people and groups of society."</p>
        </div>

        <div className="definition-explanation">
          <h4>Explanation:</h4>
          <p>
            Nobel laureate Samuelson expanded Robbins' definition to include:
          </p>
          <ul className="bullet-list">
            <li><strong>Time dimension</strong> - considers present and future needs</li>
            <li><strong>Economic growth</strong> - how economies develop over time</li>
            <li><strong>Distribution</strong> - among various groups in society</li>
            <li><strong>Dynamic nature</strong> - economics as an evolving science</li>
          </ul>
        </div>
      </div>

      {/* Important Concepts Section */}
      <div className="content-card">
        <h3 className="card-title">
          <FaExclamationCircle className="title-icon gold" />
          Key Economic Concepts
        </h3>

        <div className="concepts-detailed">
          <div className="concept-box">
            <h4>Scarcity</h4>
            <p>
              <strong>Scarcity</strong> refers to the basic economic problem that arises because resources are
              limited while human wants are unlimited. It is the fundamental cause of all economic problems.
            </p>
            <div className="example-note">
              <strong>Example:</strong> India has limited water resources, but the demand for water for agriculture,
              industry, and domestic use keeps growing with population.
            </div>
          </div>

          <div className="concept-box">
            <h4>Opportunity Cost</h4>
            <p>
              <strong>Opportunity cost</strong> is the value of the next best alternative that is given up
              when making a choice. Every economic decision involves an opportunity cost.
            </p>
            <div className="example-note">
              <strong>Example:</strong> If you have Rs. 500 and choose to buy a book instead of a movie ticket,
              the opportunity cost of the book is the enjoyment you would have received from the movie.
            </div>
          </div>

          <div className="concept-box">
            <h4>Utility</h4>
            <p>
              <strong>Utility</strong> is the satisfaction or benefit that a consumer gets from consuming a good
              or service. It is subjective and varies from person to person.
            </p>
            <div className="example-note">
              <strong>Example:</strong> A glass of water has very high utility for a thirsty person in a desert,
              but low utility for someone who has just had plenty of water.
            </div>
          </div>

          <div className="concept-box">
            <h4>Wants vs Needs</h4>
            <p>
              <strong>Needs</strong> are basic requirements for survival (food, water, shelter), while
              <strong> Wants</strong> are desires that go beyond basic needs (luxury cars, designer clothes).
            </p>
            <div className="example-note">
              <strong>Example:</strong> Food is a need; eating at a 5-star restaurant is a want.
            </div>
          </div>
        </div>
      </div>

      {/* Summary Table */}
      <div className="content-card">
        <h3 className="card-title">Comparison of Definitions</h3>
        <div className="table-container">
          <table className="comparison-table-premium">
            <thead>
              <tr>
                <th>Economist</th>
                <th>Year</th>
                <th>Focus</th>
                <th>Key Feature</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Adam Smith</td>
                <td>1776</td>
                <td>Wealth</td>
                <td>Production & consumption of wealth</td>
              </tr>
              <tr>
                <td>Alfred Marshall</td>
                <td>1890</td>
                <td>Welfare</td>
                <td>Material well-being of people</td>
              </tr>
              <tr className="highlight-row">
                <td>Lionel Robbins</td>
                <td>1932</td>
                <td>Scarcity</td>
                <td>Unlimited wants, scarce resources</td>
              </tr>
              <tr>
                <td>Paul Samuelson</td>
                <td>1948</td>
                <td>Growth</td>
                <td>Dynamic, includes time dimension</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Real-World Applications of Definitions */}
      <div className="content-card">
        <h3 className="card-title">
          <FaStar className="title-icon gold" />
          Real-World Examples: Definitions in Action
        </h3>
        <p>
          Let's see how these economic definitions apply to real-life situations in India:
        </p>

        <div className="real-world-examples">
          <div className="rw-example-card">
            <h4>Scarcity in India's Water Crisis</h4>
            <p>
              <strong>The Problem:</strong> India has 18% of the world's population but only 4% of freshwater resources.
              Cities like Chennai, Bangalore, and Delhi face severe water shortages.
            </p>
            <p>
              <strong>Economic Lens:</strong> This is a classic example of <span className="highlight-cyan">Robbins' definition</span> -
              unlimited wants (water for drinking, agriculture, industry) vs. scarce means (limited water resources)
              with alternative uses (should water go to farmers or factories?).
            </p>
          </div>

          <div className="rw-example-card">
            <h4>Budget Allocation Dilemma</h4>
            <p>
              <strong>The Situation:</strong> In Union Budget 2023-24, the government had to decide: More money for defense
              or healthcare? More for highways or education?
            </p>
            <p>
              <strong>Economic Lens:</strong> This reflects the <span className="highlight-cyan">problem of choice</span>.
              With limited tax revenue, government must prioritize. Every rupee spent on defense is a rupee not spent
              on schools - demonstrating <em>opportunity cost</em>.
            </p>
          </div>

          <div className="rw-example-card">
            <h4>Your Smartphone Purchase Decision</h4>
            <p>
              <strong>The Scenario:</strong> You have Rs. 20,000 saved. Should you buy a new phone, invest in a course,
              save for college, or go on a trip?
            </p>
            <p>
              <strong>Economic Lens:</strong> This is <span className="highlight-cyan">Robbins' definition</span> at the
              individual level - your limited money (scarce means) can be used for multiple purposes (alternative uses)
              to satisfy your many desires (unlimited wants). You must make a choice!
            </p>
          </div>

          <div className="rw-example-card">
            <h4>Indian Railways: Welfare vs Profit</h4>
            <p>
              <strong>The Reality:</strong> Indian Railways runs at a loss on passenger services but subsidizes them
              for public welfare, while earning profit from freight services.
            </p>
            <p>
              <strong>Economic Lens:</strong> This shows <span className="highlight-green">Marshall's welfare focus</span> -
              the government prioritizes material well-being of common people over pure profit motive. It's not just
              about wealth creation, but welfare creation.
            </p>
          </div>

          <div className="rw-example-card">
            <h4>Jio's Market Disruption</h4>
            <p>
              <strong>The Event:</strong> In 2016, Reliance Jio launched free 4G services, disrupting the telecom market.
              Data prices crashed from Rs. 250/GB to Rs. 10/GB.
            </p>
            <p>
              <strong>Economic Lens:</strong> <span className="highlight-gold">Adam Smith's wealth definition</span> explains
              how wealth is created through production (building telecom infrastructure), distributed (among shareholders
              and employees), and exchanged (services sold to consumers).
            </p>
          </div>

          <div className="rw-example-card">
            <h4>India's GDP Growth Target</h4>
            <p>
              <strong>The Goal:</strong> India aims to become a $5 trillion economy and eventually $10 trillion.
              This requires sustained 7-8% annual growth.
            </p>
            <p>
              <strong>Economic Lens:</strong> This perfectly illustrates <span className="highlight-purple">Samuelson's growth definition</span> -
              focusing on economic growth over time, ensuring resources are used for both present consumption and
              future development. It's dynamic economics in action.
            </p>
          </div>
        </div>
      </div>

      {/* Student Activity */}
      <div className="highlight-card green">
        <div className="highlight-icon">
          <FaLightbulb />
        </div>
        <div className="highlight-content">
          <h3>Think About It!</h3>
          <p>
            Which definition would best explain these scenarios? Match them mentally:
          </p>
          <ul className="bullet-list">
            <li><strong>Tata building a new factory in Gujarat:</strong> (Hint: Think about wealth creation)</li>
            <li><strong>Government providing free ration during COVID:</strong> (Hint: Think about welfare)</li>
            <li><strong>A family deciding between buying a car or investing in FD:</strong> (Hint: Think about scarcity and choice)</li>
            <li><strong>RBI's 5-year plan for financial inclusion:</strong> (Hint: Think about time dimension)</li>
          </ul>
          <p className="note-text">
            <strong>Tip:</strong> In exams, questions often ask you to identify which economist's definition
            best applies to a given situation. Practice connecting real scenarios to definitions!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Definitions;
