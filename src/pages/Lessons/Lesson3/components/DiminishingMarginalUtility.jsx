/**
 * DiminishingMarginalUtility.jsx - Topic 3 of Lesson 3
 *
 * Content to add:
 * - Statement of the Law of Diminishing Marginal Utility
 * - Why this law operates (reasons)
 * - Two basic assumptions
 * - Tabular presentation with examples
 * - Diagrammatic presentation (MU curve)
 * - Exceptions to the law
 *
 * Related quiz topic: dmu
 */

import { FaArrowDown, FaExclamationTriangle, FaTable, FaChartLine, FaQuestion } from 'react-icons/fa';

function DiminishingMarginalUtility() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Law of Diminishing Marginal Utility</h2>
        <p className="section-subtitle-lesson">The fundamental law of consumer behavior</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* Statement of the Law */}
          <h3 className="highlight-gold">Statement of the Law</h3>
          <p className="term">
            "As the quantity of a commodity consumed by a person increases, the utility
            derived from each successive unit goes on decreasing, provided other things
            remain constant."
          </p>
          <p>
            {/* TODO: Add detailed explanation */}
            This law is also known as the Fundamental Law of Satisfaction or Law of Equi-Marginal Utility.
            It explains why the first unit of consumption gives maximum satisfaction and each
            subsequent unit gives less.
          </p>

          {/* Why the Law Operates */}
          <h3 className="highlight-green">Why Does This Law Operate?</h3>
          <div className="two-column">
            <div className="column">
              <div className="reason-card">
                <h4>1. Completeness of Want</h4>
                <p>Every want is specific and limited. Once partially satisfied, the intensity of want decreases.</p>
              </div>
            </div>
            <div className="column">
              <div className="reason-card">
                <h4>2. Variety in Wants</h4>
                <p>Different units of the same commodity satisfy different kinds of wants with different intensities.</p>
              </div>
            </div>
          </div>

          {/* TODO: Add more reasons */}
          <div className="note-text">
            <strong>Example:</strong> The first glass of water when thirsty gives great satisfaction.
            The second glass gives less, and by the fifth glass, you may not want any more.
          </div>

          {/* Two Basic Assumptions */}
          <h3 className="highlight-cyan">Two Basic Assumptions</h3>
          <div className="assumptions-list">
            <div className="assumption-item">
              <span className="assumption-number">1</span>
              <div className="assumption-content">
                <h4>Standard Units</h4>
                <p>Units of the commodity are measured in standard/identical units (e.g., one glass, one slice)</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">2</span>
              <div className="assumption-content">
                <h4>No Change in Other Factors</h4>
                <p>Taste, income, price of related goods, and consumer's psychology remain unchanged during consumption</p>
              </div>
            </div>
          </div>

          {/* Tabular Presentation */}
          <h3 className="highlight-gold">Tabular Presentation</h3>
          <div className="table-container">
            <table className="dmu-table">
              <thead>
                <tr>
                  <th>Unit of Water</th>
                  <th>Marginal Utility (Utils)</th>
                  <th>Total Utility (Utils)</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st</td>
                  <td>20</td>
                  <td>20</td>
                  <td>Maximum satisfaction</td>
                </tr>
                <tr>
                  <td>2nd</td>
                  <td>15</td>
                  <td>35</td>
                  <td>Utility diminishing</td>
                </tr>
                <tr>
                  <td>3rd</td>
                  <td>10</td>
                  <td>45</td>
                  <td>Still diminishing</td>
                </tr>
                <tr>
                  <td>4th</td>
                  <td>5</td>
                  <td>50</td>
                  <td>Approaching saturation</td>
                </tr>
                <tr>
                  <td>5th</td>
                  <td>0</td>
                  <td>50</td>
                  <td>Saturation point</td>
                </tr>
                <tr>
                  <td>6th</td>
                  <td>-5</td>
                  <td>45</td>
                  <td>Negative utility (disutility)</td>
                </tr>
              </tbody>
            </table>
            <p className="table-note">TODO: Add more detailed examples from textbook</p>
          </div>

          {/* Diagrammatic Presentation */}
          <h3 className="highlight-cyan">Diagrammatic Presentation</h3>
          <div className="diagram-placeholder">
            <h4><FaChartLine /> MU Curve</h4>
            <div className="placeholder-image">
              <p>TODO: Add diagram showing:</p>
              <ul>
                <li>X-axis: Units of commodity</li>
                <li>Y-axis: Marginal Utility (Utils)</li>
                <li>MU curve sloping downward from left to right</li>
                <li>MU curve cutting X-axis at saturation point</li>
                <li>Negative MU region shown below X-axis</li>
              </ul>
            </div>
          </div>

          {/* Exceptions to the Law */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaExclamationTriangle /></div>
            <div className="highlight-content">
              <h3>Exceptions to the Law</h3>
              <p>In some rare cases, the law may not operate:</p>
              <ul className="bullet-list">
                <li><strong>Abnormal Persons:</strong> People with unusual psychological conditions</li>
                <li><strong>Strange Habits:</strong> Collecting items (stamps, coins) - more gives more satisfaction</li>
                <li><strong>New Discoveries:</strong> When you discover the utility of something you previously undervalued</li>
                <li><strong>Irregular Consumption:</strong> Long gaps between consumption</li>
              </ul>
            </div>
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
              <li>More real-world examples</li>
              <li>Interactive MU calculator</li>
              <li>Graph visualization</li>
              <li>Practice problems with answers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          <FaArrowDown /> Previous: Concept of Utility
          <span className="separator">|</span>
          Next: Concept of Consumer Equilibrium
        </div>
      </div>
    </section>
  );
}

export default DiminishingMarginalUtility;

/*
 * FUTURE IMPROVEMENTS:
 * - Add interactive graph visualization
 * - Add more real-world examples
 * - Add quiz questions specifically on exceptions
 * - Add video explanation
 * - Add comparison with Law of Equi-Marginal Utility
 */
