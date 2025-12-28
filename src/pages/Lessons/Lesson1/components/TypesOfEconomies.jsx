// Types of Economies Module - Economics and Economies (VK Ohri Grade 11)
import { FaBalanceScale, FaLandmark, FaHandshake, FaChartLine, FaCheckCircle, FaTimesCircle, FaFlag, FaGlobe } from 'react-icons/fa';

function TypesOfEconomies() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Economic Systems</span>
        <h2 className="section-title-lesson">Types of Economies</h2>
        <p className="section-subtitle-lesson">
          Understanding how different societies organize their economic activities
        </p>
      </div>

      {/* Introduction */}
      <div className="content-card">
        <p className="intro-text">
          An <span className="highlight-gold">economic system</span> or <span className="highlight-gold">economy</span> refers to the
          institutional framework within which a society organizes the ownership, production, distribution,
          and consumption of goods and services. The way an economy solves the central problems determines
          what type of economic system it is.
        </p>
        <p>
          Based on the degree of government intervention and the role of market forces, economies are
          classified into three main types:
        </p>
      </div>

      {/* Economy Types Overview */}
      <div className="economy-types-overview">
        <div className="type-preview gold">
          <span className="type-number">1</span>
          <h4>Market Economy</h4>
          <p>Capitalist / Free Enterprise</p>
        </div>
        <div className="type-preview green">
          <span className="type-number">2</span>
          <h4>Centrally Planned Economy</h4>
          <p>Socialist / Command</p>
        </div>
        <div className="type-preview cyan">
          <span className="type-number">3</span>
          <h4>Mixed Economy</h4>
          <p>Combination of Both</p>
        </div>
      </div>

      {/* Type 1: Market Economy */}
      <div className="economy-card">
        <div className="economy-header gold">
          <div className="economy-icon">
            <FaBalanceScale />
          </div>
          <div className="economy-title">
            <h3>Market Economy (Capitalist Economy)</h3>
            <span className="economy-aka">Also called: Free Market Economy, Free Enterprise System, Laissez-faire</span>
          </div>
        </div>

        <div className="economy-content">
          <div className="economy-definition">
            <p>
              A <strong>market economy</strong> is an economic system in which economic decisions and the pricing of
              goods and services are guided solely by the interactions of citizens and businesses with minimal government
              intervention. All central problems are solved through the <span className="highlight-gold">price mechanism</span>
              (forces of demand and supply).
            </p>
          </div>

          <div className="features-section">
            <h4><FaCheckCircle className="icon-green" /> Key Features:</h4>
            <div className="features-grid">
              <div className="feature-box">
                <h5>Private Property Rights</h5>
                <p>Individuals have the right to own, use, and dispose of their property. Property can be inherited.</p>
              </div>
              <div className="feature-box">
                <h5>Freedom of Enterprise</h5>
                <p>Anyone can start any business, produce any goods, and sell at any price decided by the market.</p>
              </div>
              <div className="feature-box">
                <h5>Profit Motive</h5>
                <p>The driving force of all economic activity. Producers aim to maximize profits.</p>
              </div>
              <div className="feature-box">
                <h5>Consumer Sovereignty</h5>
                <p>"Consumer is king." Production decisions are guided by consumer preferences.</p>
              </div>
              <div className="feature-box">
                <h5>Price Mechanism</h5>
                <p>Prices are determined by market forces of demand and supply. No government interference.</p>
              </div>
              <div className="feature-box">
                <h5>Competition</h5>
                <p>Free and fair competition among producers leads to efficiency and innovation.</p>
              </div>
            </div>
          </div>

          <div className="how-it-solves">
            <h4>How Central Problems are Solved:</h4>
            <div className="solution-grid">
              <div className="solution-item">
                <span className="solution-q">What to Produce?</span>
                <p>Guided by consumer preferences and profitability. Goods in high demand are produced more.</p>
              </div>
              <div className="solution-item">
                <span className="solution-q">How to Produce?</span>
                <p>Firms choose the least-cost method to maximize profits. Market determines efficient techniques.</p>
              </div>
              <div className="solution-item">
                <span className="solution-q">For Whom to Produce?</span>
                <p>Those who have purchasing power (money) get the goods. Income determines access.</p>
              </div>
            </div>
          </div>

          <div className="pros-cons">
            <div className="pros">
              <h4><FaCheckCircle className="icon-green" /> Merits:</h4>
              <ul>
                <li>Efficient allocation of resources</li>
                <li>Encourages innovation and entrepreneurship</li>
                <li>Consumer choice and variety</li>
                <li>Automatic functioning without government</li>
                <li>Higher economic growth potential</li>
              </ul>
            </div>
            <div className="cons">
              <h4><FaTimesCircle className="icon-red" /> Demerits:</h4>
              <ul>
                <li>Income inequality and exploitation</li>
                <li>Neglects social welfare and public goods</li>
                <li>Monopoly and market failures possible</li>
                <li>Unemployment and economic instability</li>
                <li>Over-exploitation of natural resources</li>
              </ul>
            </div>
          </div>

          <div className="country-examples">
            <h4><FaFlag className="icon-gold" /> Countries with Market Economy:</h4>
            <div className="country-flags">
              <span className="country-tag">USA</span>
              <span className="country-tag">UK</span>
              <span className="country-tag">Singapore</span>
              <span className="country-tag">Hong Kong</span>
              <span className="country-tag">Australia</span>
              <span className="country-tag">Japan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Type 2: Centrally Planned Economy */}
      <div className="economy-card">
        <div className="economy-header green">
          <div className="economy-icon">
            <FaLandmark />
          </div>
          <div className="economy-title">
            <h3>Centrally Planned Economy (Socialist Economy)</h3>
            <span className="economy-aka">Also called: Command Economy, Controlled Economy</span>
          </div>
        </div>

        <div className="economy-content">
          <div className="economy-definition">
            <p>
              A <strong>centrally planned economy</strong> is an economic system in which all major economic decisions
              (what to produce, how to produce, and for whom to produce) are made by a <span className="highlight-green">central planning authority</span>
              (usually the government). The government owns and controls the means of production.
            </p>
          </div>

          <div className="features-section">
            <h4><FaCheckCircle className="icon-green" /> Key Features:</h4>
            <div className="features-grid">
              <div className="feature-box">
                <h5>Government Ownership</h5>
                <p>All means of production (land, factories, mines) are owned by the government.</p>
              </div>
              <div className="feature-box">
                <h5>Central Planning</h5>
                <p>A central authority plans all economic activities. All decisions are centralized.</p>
              </div>
              <div className="feature-box">
                <h5>Social Welfare Motive</h5>
                <p>Economic activities aim at maximizing social welfare, not individual profit.</p>
              </div>
              <div className="feature-box">
                <h5>No Consumer Sovereignty</h5>
                <p>Consumers have limited choice. Government decides what to produce for people.</p>
              </div>
              <div className="feature-box">
                <h5>Fixed Prices</h5>
                <p>Prices are determined and controlled by the government, not market forces.</p>
              </div>
              <div className="feature-box">
                <h5>Equal Distribution</h5>
                <p>Aims for equal distribution of income and wealth to reduce inequality.</p>
              </div>
            </div>
          </div>

          <div className="how-it-solves">
            <h4>How Central Problems are Solved:</h4>
            <div className="solution-grid">
              <div className="solution-item">
                <span className="solution-q">What to Produce?</span>
                <p>Central planning authority decides based on social needs and national priorities.</p>
              </div>
              <div className="solution-item">
                <span className="solution-q">How to Produce?</span>
                <p>Government chooses the technique - often labour-intensive for full employment.</p>
              </div>
              <div className="solution-item">
                <span className="solution-q">For Whom to Produce?</span>
                <p>Distribution based on social needs, aiming for equity rather than efficiency.</p>
              </div>
            </div>
          </div>

          <div className="pros-cons">
            <div className="pros">
              <h4><FaCheckCircle className="icon-green" /> Merits:</h4>
              <ul>
                <li>Reduces economic inequality</li>
                <li>Full employment achievable</li>
                <li>Rapid economic development possible</li>
                <li>Essential goods available to all</li>
                <li>No economic exploitation</li>
              </ul>
            </div>
            <div className="cons">
              <h4><FaTimesCircle className="icon-red" /> Demerits:</h4>
              <ul>
                <li>Lack of consumer choice and freedom</li>
                <li>Inefficient resource allocation</li>
                <li>No incentive for innovation</li>
                <li>Bureaucratic delays and red tape</li>
                <li>Quality of goods often poor</li>
              </ul>
            </div>
          </div>

          <div className="country-examples">
            <h4><FaFlag className="icon-green" /> Countries with Planned Economy:</h4>
            <div className="country-flags">
              <span className="country-tag">Cuba</span>
              <span className="country-tag">North Korea</span>
              <span className="country-tag">Former USSR (before 1991)</span>
              <span className="country-tag">China (earlier)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Type 3: Mixed Economy */}
      <div className="economy-card featured">
        <div className="featured-badge">
          <FaGlobe /> Most Common System Today
        </div>

        <div className="economy-header cyan">
          <div className="economy-icon">
            <FaHandshake />
          </div>
          <div className="economy-title">
            <h3>Mixed Economy</h3>
            <span className="economy-aka">Combines features of both Market and Planned economies</span>
          </div>
        </div>

        <div className="economy-content">
          <div className="economy-definition">
            <p>
              A <strong>mixed economy</strong> is an economic system that combines elements of both
              <span className="highlight-gold"> market economy</span> and <span className="highlight-green">planned economy</span>.
              Both public and private sectors coexist and play important roles. The government
              regulates and intervenes to correct market failures and ensure social welfare.
            </p>
          </div>

          <div className="mixed-visual">
            <div className="mixed-component private">
              <h5>Private Sector</h5>
              <ul>
                <li>Consumer goods industries</li>
                <li>Services and retail</li>
                <li>Small and medium businesses</li>
                <li>Agriculture (private farms)</li>
              </ul>
            </div>
            <div className="mixed-plus">+</div>
            <div className="mixed-component public">
              <h5>Public Sector</h5>
              <ul>
                <li>Defense and security</li>
                <li>Infrastructure (roads, railways)</li>
                <li>Public utilities (electricity, water)</li>
                <li>Strategic industries</li>
              </ul>
            </div>
          </div>

          <div className="features-section">
            <h4><FaCheckCircle className="icon-green" /> Key Features:</h4>
            <div className="features-grid">
              <div className="feature-box">
                <h5>Coexistence of Sectors</h5>
                <p>Both public and private sectors operate together and contribute to the economy.</p>
              </div>
              <div className="feature-box">
                <h5>Government Regulation</h5>
                <p>Government regulates private sector to prevent exploitation and ensure fair practices.</p>
              </div>
              <div className="feature-box">
                <h5>Economic Planning</h5>
                <p>Government does indicative planning to guide economic development.</p>
              </div>
              <div className="feature-box">
                <h5>Price Mechanism with Controls</h5>
                <p>Market determines prices, but government controls prices of essential goods.</p>
              </div>
              <div className="feature-box">
                <h5>Social Security</h5>
                <p>Government provides social security measures for the poor and vulnerable.</p>
              </div>
              <div className="feature-box">
                <h5>Balanced Approach</h5>
                <p>Balances efficiency (market) with equity (government intervention).</p>
              </div>
            </div>
          </div>

          <div className="how-it-solves">
            <h4>How Central Problems are Solved:</h4>
            <div className="solution-grid">
              <div className="solution-item">
                <span className="solution-q">What to Produce?</span>
                <p>Both market forces and government priorities determine production decisions.</p>
              </div>
              <div className="solution-item">
                <span className="solution-q">How to Produce?</span>
                <p>Mostly market-driven, but government may promote employment-oriented techniques.</p>
              </div>
              <div className="solution-item">
                <span className="solution-q">For Whom to Produce?</span>
                <p>Market determines for private goods; government ensures essential goods for all.</p>
              </div>
            </div>
          </div>

          <div className="pros-cons">
            <div className="pros">
              <h4><FaCheckCircle className="icon-green" /> Merits:</h4>
              <ul>
                <li>Best of both systems combined</li>
                <li>Economic freedom with social justice</li>
                <li>Balanced economic development</li>
                <li>Correction of market failures</li>
                <li>Protection of weaker sections</li>
              </ul>
            </div>
            <div className="cons">
              <h4><FaTimesCircle className="icon-red" /> Demerits:</h4>
              <ul>
                <li>Inefficiency in public sector</li>
                <li>Corruption and red tape</li>
                <li>Conflict between sectors</li>
                <li>Difficult to balance priorities</li>
                <li>May not achieve goals of either system</li>
              </ul>
            </div>
          </div>

          <div className="country-examples">
            <h4><FaFlag className="icon-cyan" /> Countries with Mixed Economy:</h4>
            <div className="country-flags">
              <span className="country-tag highlight">India</span>
              <span className="country-tag">France</span>
              <span className="country-tag">Sweden</span>
              <span className="country-tag">Brazil</span>
              <span className="country-tag">Canada</span>
              <span className="country-tag">Germany</span>
            </div>
          </div>
        </div>
      </div>

      {/* India as Mixed Economy */}
      <div className="highlight-card gold">
        <div className="highlight-icon">
          <FaFlag />
        </div>
        <div className="highlight-content">
          <h3>India as a Mixed Economy</h3>
          <p>
            India adopted the <strong>mixed economy model</strong> after independence in 1947. The government
            took on the responsibility of developing heavy industries, infrastructure, and basic services,
            while private sector was allowed in consumer goods and other areas.
          </p>
          <ul className="bullet-list">
            <li><strong>Public Sector:</strong> Railways, Defense, Coal, Steel, Banking (nationalized)</li>
            <li><strong>Private Sector:</strong> Consumer goods, IT, Retail, Agriculture</li>
            <li><strong>Economic Reforms (1991):</strong> Liberalization increased role of private sector</li>
            <li><strong>Current Status:</strong> Moving towards more market-oriented economy with social welfare focus</li>
          </ul>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="content-card">
        <h3 className="card-title">
          <FaChartLine className="title-icon purple" />
          Comparison of Economic Systems
        </h3>

        <div className="table-container">
          <table className="comparison-table-premium">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Market Economy</th>
                <th>Planned Economy</th>
                <th>Mixed Economy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ownership</strong></td>
                <td>Private</td>
                <td>Government</td>
                <td>Both</td>
              </tr>
              <tr>
                <td><strong>Price Determination</strong></td>
                <td>Market forces</td>
                <td>Government</td>
                <td>Both (with controls)</td>
              </tr>
              <tr>
                <td><strong>Motive</strong></td>
                <td>Profit</td>
                <td>Social welfare</td>
                <td>Profit + Welfare</td>
              </tr>
              <tr>
                <td><strong>Role of Government</strong></td>
                <td>Minimal</td>
                <td>Maximum</td>
                <td>Moderate</td>
              </tr>
              <tr>
                <td><strong>Consumer Choice</strong></td>
                <td>Maximum</td>
                <td>Limited</td>
                <td>Considerable</td>
              </tr>
              <tr>
                <td><strong>Income Distribution</strong></td>
                <td>Unequal</td>
                <td>More equal</td>
                <td>Moderate inequality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="summary-card">
        <h3>Key Takeaways</h3>
        <div className="takeaways-grid">
          <div className="takeaway">
            <span className="takeaway-icon gold">1</span>
            <p>Market economy relies on price mechanism; decisions made by private individuals</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon green">2</span>
            <p>Planned economy has government ownership and central planning</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon cyan">3</span>
            <p>Mixed economy combines both systems; most countries follow this model</p>
          </div>
          <div className="takeaway">
            <span className="takeaway-icon purple">4</span>
            <p>India is a mixed economy with both public and private sectors</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypesOfEconomies;
