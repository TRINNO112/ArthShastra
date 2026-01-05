/**
 * ConceptOfUtility.jsx - Topic 2 of Lesson 3
 *
 * Content to add:
 * - Meaning of utility
 * - Measurement of utility
 * - Total Utility (TU) - definition and illustration
 * - Marginal Utility (MU) - definition and illustration
 * - Relationship between TU and MU (with table and diagram)
 *
 * Related quiz topic: concept-of-utility
 */

import { FaLightbulb, FaChartLine, FaTable, FaArrowUp, FaArrowDown } from 'react-icons/fa';

function ConceptOfUtility() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 3</span>
        <h2 className="section-title-lesson">Concept of Utility</h2>
        <p className="section-subtitle-lesson">Understanding utility, total utility, and marginal utility</p>
      </div>

      {/* Main Content Card */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* Meaning of Utility */}
          <h3 className="highlight-gold">What is Utility?</h3>
          <p className="term">
            "Utility is the want-satisfying power of a commodity."
          </p>
          <p>
            {/* TODO: Add detailed explanation of utility */}
            Utility refers to the capacity of a good or service to satisfy a consumer's want.
            It is subjective - what has utility for one person may not have utility for another.
          </p>

          {/* Key Points about Utility */}
          <div className="highlight-card green">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h3>Key Characteristics of Utility</h3>
              <ul className="bullet-list">
                <li><strong>Subjective:</strong> Depends on individual's preferences</li>
                <li><strong>Context-dependent:</strong> Changes with situation and time</li>
                <li><strong>Not related to usefulness:</strong> A cigarette has utility for a smoker</li>
                <li><strong>Measurable:</strong> Can be measured in hypothetical units called "utils"</li>
              </ul>
            </div>
          </div>

          {/* Total Utility */}
          <h3 className="highlight-gold">Total Utility (TU)</h3>
          <p className="term">
            "Total Utility is the total satisfaction derived from consuming all units of a commodity."
          </p>
          <p>
            {/* TODO: Add detailed explanation with formula */}
            TU represents the aggregate satisfaction a consumer gets from consuming a certain
            quantity of a good or service. It is the sum of utilities from each unit consumed.
          </p>

          <div className="formula-box">
            <strong>Formula:</strong> TU<sub>n</sub> = MU<sub>1</sub> + MU<sub>2</sub> + MU<sub>3</sub> + ... + MU<sub>n</sub>
          </div>

          {/* Marginal Utility */}
          <h3 className="highlight-gold">Marginal Utility (MU)</h3>
          <p className="term">
            "Marginal Utility is the additional satisfaction from consuming one more unit of a commodity."
          </p>
          <p>
            {/* TODO: Add detailed explanation with formula */}
            MU is the change in total utility when one additional unit is consumed.
            It measures the incremental satisfaction from each additional unit.
          </p>

          <div className="formula-box">
            <strong>Formula:</strong> MU<sub>n</sub> = TU<sub>n</sub> - TU<sub>n-1</sub>
          </div>

          {/* TU and MU Relationship Table */}
          <h3 className="highlight-cyan">Relationship Between TU and MU</h3>
          <p>
            {/* TODO: Add explanation of the relationship */}
            The relationship between Total Utility and Marginal Utility is crucial to understand:
          </p>

          {/* Placeholder for table */}
          <div className="table-container placeholder-table">
            <table className="utility-table">
              <thead>
                <tr>
                  <th>Units</th>
                  <th>MU (Utils)</th>
                  <th>TU (Utils)</th>
                  <th>Observation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>20</td>
                  <td>20</td>
                  <td>First unit - highest MU</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>15</td>
                  <td>35</td>
                  <td>MU decreases but positive</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10</td>
                  <td>45</td>
                  <td>MU continues to fall</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>50</td>
                  <td>MU approaching zero</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>0</td>
                  <td>50</td>
                  <td>Saturation point - TU maximum</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>-5</td>
                  <td>45</td>
                  <td>Negative MU - TU decreases</td>
                </tr>
              </tbody>
            </table>
            <p className="table-note">TODO: Add detailed table from textbook with real examples</p>
          </div>

          {/* Key Observations */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaChartLine /></div>
            <div className="highlight-content">
              <h3>Key Observations</h3>
              <ul className="bullet-list">
                <li>When MU is positive, TU is rising</li>
                <li>When MU is zero, TU is at maximum (saturation point)</li>
                <li>When MU is negative, TU starts falling</li>
                <li>MU curve falls continuously and cuts x-axis at saturation point</li>
              </ul>
            </div>
          </div>

          {/* Diagram Placeholder */}
          <div className="diagram-placeholder">
            <h3><FaChartLine /> TU and MU Curves</h3>
            <div className="placeholder-image">
              <p>TODO: Add diagram showing:</p>
              <ul>
                <li>TU curve rising, reaching maximum, then falling</li>
                <li>MU curve falling continuously, cutting x-axis</li>
                <li>Relationship at each point</li>
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
              <li>More numerical examples of TU and MU calculation</li>
              <li>Real-world illustrations (water paradox, diamond paradox)</li>
              <li>Interactive calculator for TU and MU</li>
              <li>Derivation of MU curve from indifference curves</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          <FaArrowUp /> Previous: Who is a Consumer
          <span className="separator">|</span>
          Next: Law of Diminishing Marginal Utility
        </div>
      </div>
    </section>
  );
}

export default ConceptOfUtility;

/*
 * FUTURE IMPROVEMENTS:
 * - Add interactive TU/MU calculator
 * - Add real-world examples with actual numbers
 * - Add video explanation of the relationship
 * - Add graph visualization using Chart.js or Recharts
 * - Add more practice problems
 */
