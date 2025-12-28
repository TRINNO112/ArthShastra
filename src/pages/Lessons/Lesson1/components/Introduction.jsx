// Introduction Module - Economics and Economies (VK Ohri Grade 11)
import { FaLightbulb, FaHistory, FaGlobe, FaBookOpen, FaChartLine, FaUsers } from 'react-icons/fa';

function Introduction() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 1</span>
        <h2 className="section-title-lesson">Introduction to Economics</h2>
        <p className="section-subtitle-lesson">
          Understanding the foundation of economic thinking and its relevance in everyday life
        </p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <p className="intro-text">
            <span className="highlight-gold">Economics</span> is one of the most important social sciences that studies
            how individuals, businesses, governments, and societies make choices to allocate
            <span className="highlight-green"> scarce resources</span> to satisfy their
            <span className="highlight-cyan"> unlimited wants</span> and needs. It is the study of how people
            and societies choose to use their limited resources to satisfy their unlimited desires.
          </p>
        </div>
      </div>

      {/* Etymology Box */}
      <div className="highlight-card gold">
        <div className="highlight-icon">
          <FaBookOpen />
        </div>
        <div className="highlight-content">
          <h3>Origin of the Word "Economics"</h3>
          <p>
            The word <strong>"Economics"</strong> is derived from the Greek word <strong>"Oikonomia"</strong> which means
            <strong> "household management"</strong>. It is formed by combining two Greek words:
          </p>
          <ul className="bullet-list">
            <li><span className="term">Oikos</span> - meaning "house" or "household"</li>
            <li><span className="term">Nomos</span> - meaning "management" or "law"</li>
          </ul>
          <p className="note-text">
            Just as a household must manage its limited income to meet various needs, an economy must
            manage its limited resources to satisfy the wants of its people.
          </p>
        </div>
      </div>

      {/* Father of Economics */}
      <div className="highlight-card green">
        <div className="highlight-icon">
          <FaHistory />
        </div>
        <div className="highlight-content">
          <h3>Father of Economics</h3>
          <p>
            <strong>Adam Smith</strong> (1723-1790), a Scottish economist and philosopher, is widely regarded as the
            <strong> "Father of Economics"</strong>. His groundbreaking work <em>"An Enquiry into the Nature and Causes
            of the Wealth of Nations"</em> (1776) laid the foundation for modern economic thought.
          </p>
          <div className="quote-box">
            <p>"The real tragedy of the poor is the poverty of their aspirations."</p>
            <span className="quote-author">- Adam Smith</span>
          </div>
        </div>
      </div>

      {/* Indian Contribution */}
      <div className="highlight-card cyan">
        <div className="highlight-icon">
          <FaGlobe />
        </div>
        <div className="highlight-content">
          <h3>Economics in Ancient India</h3>
          <p>
            Long before Adam Smith, <strong>Kautilya (Chanakya)</strong> wrote <strong>"Arthashastra"</strong> around
            <strong> 300 BCE</strong>, which is considered one of the earliest treatises on economic and political theory.
            The Arthashastra discussed:
          </p>
          <ul className="bullet-list">
            <li>State administration and governance</li>
            <li>Taxation policies and revenue collection</li>
            <li>Trade and commerce regulations</li>
            <li>Agricultural economics and land management</li>
            <li>Price controls and market regulations</li>
          </ul>
          <p className="note-text">
            This makes Indian economic thought over 2,000 years older than Western economic theory!
          </p>
        </div>
      </div>

      {/* Why Study Economics */}
      <div className="content-card">
        <h3 className="card-title">
          <FaLightbulb className="title-icon gold" />
          Why Study Economics?
        </h3>
        <p>
          Economics affects every aspect of our daily lives - from the price of essential commodities to
          government policies that shape our nation's future. Understanding economics helps us:
        </p>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon gold">
              <FaChartLine />
            </div>
            <h4>Make Better Decisions</h4>
            <p>Understand trade-offs and opportunity costs in personal and professional choices</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon green">
              <FaUsers />
            </div>
            <h4>Understand Society</h4>
            <p>Comprehend how markets work, why prices change, and how policies affect citizens</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon cyan">
              <FaGlobe />
            </div>
            <h4>Analyze Global Events</h4>
            <p>Interpret international trade, currency fluctuations, and economic crises</p>
          </div>

          <div className="feature-item">
            <div className="feature-icon purple">
              <FaBookOpen />
            </div>
            <h4>Career Advancement</h4>
            <p>Apply economic principles in business, finance, policy-making, and research</p>
          </div>
        </div>
      </div>

      {/* Economics in Daily Life */}
      <div className="content-card">
        <h3 className="card-title">
          <FaGlobe className="title-icon green" />
          Economics in Daily Life
        </h3>
        <p>
          Every day, we make numerous economic decisions without even realizing it. Here are some examples:
        </p>

        <div className="example-grid">
          <div className="example-card">
            <h4>Personal Finance</h4>
            <ul>
              <li>Budgeting monthly income</li>
              <li>Saving for future goals</li>
              <li>Investment decisions</li>
              <li>Loan and credit choices</li>
            </ul>
          </div>

          <div className="example-card">
            <h4>Consumer Choices</h4>
            <ul>
              <li>Comparing prices before buying</li>
              <li>Choosing between brands</li>
              <li>Deciding quantity to purchase</li>
              <li>Timing of purchases (sales, offers)</li>
            </ul>
          </div>

          <div className="example-card">
            <h4>Career Decisions</h4>
            <ul>
              <li>Choosing a profession</li>
              <li>Salary negotiations</li>
              <li>Job market analysis</li>
              <li>Skill development investments</li>
            </ul>
          </div>

          <div className="example-card">
            <h4>Civic Understanding</h4>
            <ul>
              <li>Understanding government budgets</li>
              <li>Impact of taxes on income</li>
              <li>Inflation effects on savings</li>
              <li>Policy implications on society</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Concepts Preview */}
      <div className="key-concepts-card">
        <h3>Key Concepts You'll Learn</h3>
        <div className="concepts-grid">
          <div className="concept-tag gold">Scarcity</div>
          <div className="concept-tag green">Choice</div>
          <div className="concept-tag cyan">Opportunity Cost</div>
          <div className="concept-tag purple">Utility</div>
          <div className="concept-tag gold">Wants vs Needs</div>
          <div className="concept-tag green">Economic Systems</div>
          <div className="concept-tag cyan">Micro vs Macro</div>
          <div className="concept-tag purple">Resource Allocation</div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;