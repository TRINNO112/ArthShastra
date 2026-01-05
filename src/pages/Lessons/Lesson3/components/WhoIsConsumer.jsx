/**
 * WhoIsConsumer.jsx - Topic 1 of Lesson 3
 *
 * Content to add:
 * - Definition of a consumer
 * - Characteristics of a consumer
 * - Difference between consumer and producer
 * - Types of consumers (direct/indirect)
 * - Consumer behavior basics
 *
 * Related quiz topic: who-is-consumer
 */

import { FaUser, FaShoppingCart, Fa-industry, FaArrowRight } from 'react-icons/fa';

function WhoIsConsumer() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Who is a Consumer?</h2>
        <p className="section-subtitle-lesson">Understanding the concept of a consumer in economics</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* TODO: Add detailed content about consumer definition */}
          <h3 className="highlight-gold">Definition of a Consumer</h3>
          <p className="term">
            "A consumer is a person who buys goods and services for personal consumption."
          </p>
          <p>
            {/* TODO: Add explanatory paragraph about consumer definition */}
            In economics, a consumer is the end-user of goods and services. Unlike a producer
            who creates or supplies goods, a consumer purchases them to satisfy their wants and needs.
          </p>

          {/* TODO: Add characteristics of a consumer */}
          <h3 className="highlight-green">Key Characteristics</h3>
          <ul className="bullet-list">
            <li>Has wants and needs to satisfy</li>
            <li>Purchases goods/services for personal consumption</li>
            <li>Makes purchasing decisions based on income and preferences</li>
            <li>Has limited income and unlimited wants (budget constraint)</li>
          </ul>

          {/* TODO: Add comparison with producer */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaUser /></div>
            <div className="highlight-content">
              <h3>Consumer vs Producer</h3>
              <p>
                <strong>Consumer:</strong> Buys and uses goods/services to satisfy wants<br />
                <strong>Producer:</strong> Creates goods/services to sell in the market
              </p>
            </div>
          </div>

          {/* TODO: Add types of consumers */}
          <h3 className="highlight-cyan">Types of Consumers</h3>
          <div className="two-column">
            <div className="column">
              <h4>Direct Consumers</h4>
              <p>Individuals who consume goods directly without further processing (e.g., eating food, wearing clothes)</p>
            </div>
            <div className="column">
              <h4>Indirect Consumers</h4>
              <p>Producers who use goods as raw materials to produce other goods (e.g., a baker using flour)</p>
            </div>
          </div>

          {/* TODO: Add consumer behavior introduction */}
          <div className="note-text">
            <strong>Note:</strong> Consumer behavior is the study of how individuals make decisions
            to spend their limited resources (income) on consumption.
          </div>
        </div>
      </div>

      {/* Placeholder for additional content */}
      <div className="content-card placeholder">
        <div className="card-glow"></div>
        <div className="card-content">
          <div className="placeholder-message">
            <h3>Content Coming Soon</h3>
            <p>This section needs the following content:</p>
            <ul>
              <li>More detailed examples of consumers</li>
              <li>Consumer rights and responsibilities</li>
              <li>Role of consumers in the economy</li>
              <li>Interactive examples</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          <FaArrowRight /> Next: Concept of Utility
        </div>
      </div>
    </section>
  );
}

export default WhoIsConsumer;

/*
 * FUTURE IMPROVEMENTS:
 * - Add real-world examples of consumers
 * - Add video explanation
 * - Add quiz questions
 * - Add consumer decision-making flowchart
 */
