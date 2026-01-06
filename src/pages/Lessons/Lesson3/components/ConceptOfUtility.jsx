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
import './component.css';

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
            "Utility is the want-satisfying power of a commodity. It is the capacity of a good or
            service to satisfy human wants."
          </p>
          <p>
            Utility refers to the satisfaction, pleasure, or benefit that a consumer derives from
            consuming a good or service. It is the psychological feeling of satisfaction that
            arises from consumption. For example, when you're thirsty and drink water, the satisfaction
            you get is the utility of water. When you eat your favorite food, the happiness you feel
            is the utility of that food.
          </p>
          <p>
            <strong>Important:</strong> Utility is purely subjective and varies from person to person,
            time to time, and place to place. What gives high utility to one person may give little or
            no utility to another. A vegetarian person gets zero utility from meat, while a non-vegetarian
            may derive high utility from it. The utility of an umbrella is high during monsoon but low
            in winter.
          </p>

          <div className="note-text">
            <h4><strong>Real-World Example - Understanding Utility:</strong></h4>
            <p>
              Consider a smartphone. Different people derive different utilities from it:
            </p>
            <ul className="bullet-list">
              <li><strong>For a student:</strong> High utility for online classes, research, and communication</li>
              <li><strong>For a businessperson:</strong> High utility for emails, video calls, and managing work</li>
              <li><strong>For an elderly person unfamiliar with technology:</strong> Low utility, may prefer a basic phone</li>
              <li><strong>For a person who already has 3 smartphones:</strong> Very low marginal utility from a 4th phone</li>
            </ul>
            <p>
              Same commodity (smartphone), but different levels of satisfaction (utility) for different people!
            </p>
          </div>

          {/* Key Points about Utility */}
          <div className="highlight-card green">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h3>Key Characteristics of Utility</h3>
              <ul className="bullet-list">
                <li><strong>Subjective Nature:</strong> Utility depends on individual preferences, tastes,
                and psychology. Ice cream gives high utility to someone who loves sweets but low utility
                to someone who dislikes sweet foods.</li>
                <li><strong>Context-Dependent:</strong> Utility changes with situation, time, and place.
                A raincoat has high utility during monsoon but almost zero utility in summer. Hot tea
                gives more utility in winter than in summer.</li>
                <li><strong>Not Related to Usefulness or Morality:</strong> Utility is about satisfaction,
                not about whether something is useful or morally right. A cigarette has utility for a smoker
                even though it's harmful. A luxury watch gives utility through prestige even if its practical
                value is just telling time.</li>
                <li><strong>Measurable in Utils:</strong> In cardinal utility theory, utility can be measured
                in hypothetical units called "utils" (like weight in kg or temperature in °C). If eating one
                ice cream gives 20 utils and listening to a song gives 15 utils, you can quantify satisfaction.</li>
                <li><strong>Relative Concept:</strong> Utility comparisons are meaningful only for the same
                person. You can say "I get more satisfaction from pizza (30 utils) than from burger (20 utils)",
                but you cannot compare your satisfaction with someone else's satisfaction meaningfully.</li>
              </ul>
            </div>
          </div>

          {/* Total Utility */}
          <h3 className="highlight-gold">Total Utility (TU)</h3>
          <p className="term">
            "Total Utility is the aggregate sum of satisfaction that a consumer derives from the
            consumption of all units of a commodity at a given time."
          </p>
          <p>
            TU represents the cumulative satisfaction a consumer gets from consuming a certain
            quantity of a good or service. It is calculated by adding up the utilities (satisfaction)
            from each successive unit consumed. As you consume more units of a commodity, your total
            utility initially increases, reaches a maximum point (saturation), and then may start
            declining if you consume too much (causing disutility or negative utility).
          </p>

          <div className="formula-box">
            <strong>Formula:</strong> TU<sub>n</sub> = MU<sub>1</sub> + MU<sub>2</sub> + MU<sub>3</sub> + ... + MU<sub>n</sub>
            <br />
            <p className="note-text">
              Where TU<sub>n</sub> is total utility from n units, and MU<sub>1</sub>, MU<sub>2</sub>...
              are marginal utilities from 1st, 2nd... units respectively.
            </p>
          </div>

          <div className="note-text">
            <h4><strong>Real-World Example - Total Utility:</strong></h4>
            <p>
              <strong>Scenario:</strong> You're eating samosas at a party. Let's track your total satisfaction:
            </p>
            <ul className="bullet-list">
              <li><strong>1st samosa:</strong> You're hungry, gives 50 utils of satisfaction. TU = 50 utils</li>
              <li><strong>2nd samosa:</strong> Still tasty, gives 40 utils more. TU = 50 + 40 = 90 utils</li>
              <li><strong>3rd samosa:</strong> Starting to feel full, gives 25 utils more. TU = 90 + 25 = 115 utils</li>
              <li><strong>4th samosa:</strong> Almost full, gives 10 utils more. TU = 115 + 10 = 125 utils</li>
              <li><strong>5th samosa:</strong> Feeling too full, gives 0 utils. TU = 125 utils (maximum/saturation)</li>
              <li><strong>6th samosa:</strong> Uncomfortable, reduces satisfaction by 15 utils. TU = 125 - 15 = 110 utils</li>
            </ul>
            <p>
              Notice how your total satisfaction increased with each samosa initially, reached a maximum
              at 5 samosas, then decreased when you ate too much!
            </p>
          </div>

          {/* Marginal Utility */}
          <h3 className="highlight-gold">Marginal Utility (MU)</h3>
          <p className="term">
            "Marginal Utility is the additional satisfaction that a consumer derives from consuming
            one more unit of a commodity."
          </p>
          <p>
            MU is the change in total utility resulting from the consumption of one additional unit
            of a good or service. It measures the incremental or extra satisfaction gained from each
            successive unit. The word "marginal" in economics always means "additional" or "extra."
            So marginal utility is simply the extra utility you get from consuming one more unit.
          </p>
          <p>
            For example, if consuming 3 units of a good gives you 100 utils of total satisfaction,
            and consuming 4 units gives you 115 utils, then the marginal utility of the 4th unit is:
            MU<sub>4</sub> = 115 - 100 = 15 utils.
          </p>

          <div className="formula-box">
            <strong>Formula:</strong> MU<sub>n</sub> = TU<sub>n</sub> - TU<sub>n-1</sub>
            <br />
            <strong>Or:</strong> MU<sub>n</sub> = ΔTU / ΔQ (Change in Total Utility / Change in Quantity)
            <br />
            <p className="note-text">
              Where MU<sub>n</sub> is marginal utility of nth unit, TU<sub>n</sub> is total utility
              from n units, and TU<sub>n-1</sub> is total utility from (n-1) units.
            </p>
          </div>

          <div className="note-text">
            <h4><strong>Real-World Example - Marginal Utility:</strong></h4>
            <p>
              <strong>Scenario:</strong> You're buying bottles of cold drinks on a hot day:
            </p>
            <ul className="bullet-list">
              <li><strong>1st bottle:</strong> You're very thirsty, MU = 100 utils (very high satisfaction)</li>
              <li><strong>2nd bottle:</strong> Still refreshing, MU = 60 utils (satisfaction decreases)</li>
              <li><strong>3rd bottle:</strong> Starting to feel full, MU = 30 utils (even less satisfaction)</li>
              <li><strong>4th bottle:</strong> Barely want it, MU = 10 utils (minimal satisfaction)</li>
              <li><strong>5th bottle:</strong> Don't want anymore, MU = 0 utils (no satisfaction)</li>
              <li><strong>6th bottle:</strong> Forced to drink, MU = -20 utils (negative satisfaction/disutility)</li>
            </ul>
            <p>
              <strong>Key Insight:</strong> Notice how the marginal utility keeps falling with each additional
              bottle? This demonstrates the Law of Diminishing Marginal Utility - as you consume more of a
              good, the extra satisfaction from each additional unit decreases!
            </p>
          </div>

          {/* TU and MU Relationship Table */}
          <h3 className="highlight-cyan">Relationship Between TU and MU</h3>
          <p>
            The relationship between Total Utility (TU) and Marginal Utility (MU) is fundamental
            to understanding consumer behavior. These two concepts are interconnected, and changes
            in one affect the other in specific ways. Understanding this relationship helps explain
            how consumers make consumption decisions and why they stop consuming at a certain point.
          </p>

          {/* Table with real example */}
          <div className="table-container">
            <table className="utility-table">
              <thead>
                <tr>
                  <th>Units of Ice Cream</th>
                  <th>MU (Utils)</th>
                  <th>TU (Utils)</th>
                  <th>Observation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td>-</td>
                  <td>0</td>
                  <td>No consumption, no utility</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>20</td>
                  <td>20</td>
                  <td>First unit - highest MU, TU starts rising</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>15</td>
                  <td>35</td>
                  <td>MU decreases but positive, TU increases</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10</td>
                  <td>45</td>
                  <td>MU continues to fall, TU still rising</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>50</td>
                  <td>MU approaching zero, TU rising slowly</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>0</td>
                  <td>50</td>
                  <td>Saturation point - MU = 0, TU maximum</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>-5</td>
                  <td>45</td>
                  <td>Negative MU (disutility), TU decreases</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>-10</td>
                  <td>35</td>
                  <td>MU more negative, TU falls further</td>
                </tr>
              </tbody>
            </table>
            <p className="table-note">
              <strong>Example Context:</strong> Eating ice creams on a hot summer day. The first ice cream
              gives maximum satisfaction, but each additional one gives less satisfaction until you feel sick.
            </p>
          </div>

          {/* Key Observations */}
          <div className="highlight-card gold">
            <div className="highlight-icon"><FaChartLine /></div>
            <div className="highlight-content">
              <h3>Key Relationships Between TU and MU</h3>
              <ul className="bullet-list">
                <li><strong>When MU is Positive:</strong> TU is rising. As long as consuming an additional
                unit gives positive satisfaction (MU {'>'}  0), your total satisfaction increases. This happens
                in the initial stages of consumption (Units 1-4 in the table above).</li>
                <li><strong>When MU is Zero:</strong> TU is at maximum (saturation point). This is the optimal
                consumption point where total satisfaction is highest. Consuming more units beyond this won't
                increase satisfaction (Unit 5 in the table).</li>
                <li><strong>When MU is Negative:</strong> TU starts falling. If you're forced to consume more
                units beyond saturation, you experience disutility (negative satisfaction), and your total
                satisfaction decreases (Units 6-7 in the table).</li>
                <li><strong>Rate of Change:</strong> TU increases at a decreasing rate when MU is positive
                but diminishing. The slope of TU curve equals MU at any point.</li>
                <li><strong>Visual Pattern:</strong> MU curve slopes downward continuously and cuts the x-axis
                at the saturation point. TU curve rises, reaches a peak, then falls.</li>
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

      {/* Additional Content - Paradoxes and Practice */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="highlight-green">The Diamond-Water Paradox (Paradox of Value)</h3>
          <p>
            One of the most famous puzzles in economics is the diamond-water paradox, first discussed
            by Adam Smith. It illustrates the difference between total utility and marginal utility.
          </p>

          <div className="highlight-card gold">
            <div className="highlight-icon"><FaLightbulb /></div>
            <div className="highlight-content">
              <h3>The Paradox Explained</h3>
              <p>
                <strong>The Question:</strong> Water is essential for life and has enormous total utility,
                yet it's cheap. Diamonds are not essential and have limited practical use, yet they're
                extremely expensive. Why?
              </p>
              <br />
              <p>
                <strong>The Answer:</strong> Price is determined by marginal utility, not total utility!
              </p>
              <div className="two-column">
                <div className="column">
                  <h4>Water:</h4>
                  <ul className="bullet-list">
                    <li><strong>Total Utility:</strong> Very high (essential for survival)</li>
                    <li><strong>Supply:</strong> Abundant</li>
                    <li><strong>Marginal Utility:</strong> Low (because we have plenty, one more glass doesn't matter much)</li>
                    <li><strong>Price:</strong> Low (based on low MU)</li>
                  </ul>
                </div>
                <div className="column">
                  <h4>Diamonds:</h4>
                  <ul className="bullet-list">
                    <li><strong>Total Utility:</strong> Relatively low (not essential)</li>
                    <li><strong>Supply:</strong> Scarce/Rare</li>
                    <li><strong>Marginal Utility:</strong> High (because they're rare, one more diamond matters a lot)</li>
                    <li><strong>Price:</strong> High (based on high MU)</li>
                  </ul>
                </div>
              </div>
              <br />
              <p className="note-text">
                <strong>Key Lesson:</strong> In a desert without water, the marginal utility of water
                becomes extremely high, and people would pay enormous amounts for it. Context matters!
                This shows how scarcity affects marginal utility and therefore price.
              </p>
            </div>
          </div>

          <h3 className="highlight-cyan">Practice Problems: Calculating TU and MU</h3>

          <div className="note-text">
            <h4><strong>Problem 1:</strong> Calculate Missing Values</h4>
            <p>Complete the table below and calculate the missing TU and MU values:</p>

            <div className="table-container">
              <table className="utility-table">
                <thead>
                  <tr>
                    <th>Units</th>
                    <th>MU (Utils)</th>
                    <th>TU (Utils)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>30</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>?</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>15</td>
                    <td>?</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>?</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>0</td>
                    <td>?</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4><strong>Solution:</strong></h4>
            <ul className="bullet-list">
              <li><strong>TU<sub>1</sub>:</strong> = MU<sub>1</sub> = 30 utils</li>
              <li><strong>MU<sub>2</sub>:</strong> = TU<sub>2</sub> - TU<sub>1</sub> = 50 - 30 = 20 utils</li>
              <li><strong>TU<sub>3</sub>:</strong> = TU<sub>2</sub> + MU<sub>3</sub> = 50 + 15 = 65 utils</li>
              <li><strong>MU<sub>4</sub>:</strong> = TU<sub>4</sub> - TU<sub>3</sub> = 70 - 65 = 5 utils</li>
              <li><strong>TU<sub>5</sub>:</strong> = TU<sub>4</sub> + MU<sub>5</sub> = 70 + 0 = 70 utils (maximum)</li>
            </ul>
          </div>

          <div className="note-text">
            <h4><strong>Problem 2:</strong> Real-World Application</h4>
            <p>
              Priya is buying chocolates. The marginal utilities she gets are: 1st chocolate = 40 utils,
              2nd = 30 utils, 3rd = 20 utils, 4th = 10 utils, 5th = 0 utils.
            </p>
            <p><strong>Questions:</strong></p>
            <ol className="bullet-list">
              <li>Calculate the total utility from consuming 4 chocolates.</li>
              <li>At which unit does Priya reach saturation?</li>
              <li>Should Priya buy a 6th chocolate if its MU is -10 utils?</li>
            </ol>

            <h4><strong>Solution:</strong></h4>
            <ol className="bullet-list">
              <li><strong>TU from 4 chocolates:</strong> = 40 + 30 + 20 + 10 = 100 utils</li>
              <li><strong>Saturation point:</strong> At 5th unit where MU = 0 (TU = 100 + 0 = 100 utils maximum)</li>
              <li><strong>Should buy 6th?</strong> No! MU is negative (-10), meaning TU would fall to 90 utils.
              Consuming it would reduce her total satisfaction. She should stop at 5 chocolates.</li>
            </ol>
          </div>

          <h3 className="highlight-gold">Key Takeaways</h3>
          <div className="assumptions-list">
            <div className="assumption-item">
              <span className="assumption-number">1</span>
              <div className="assumption-content">
                <h4>Utility is Subjective</h4>
                <p>Different people get different satisfaction from the same good. Your utility from a product
                depends on your personal preferences, needs, and circumstances.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">2</span>
              <div className="assumption-content">
                <h4>TU = Sum of all MUs</h4>
                <p>Total utility is calculated by adding marginal utilities of all units consumed. This helps
                us understand the cumulative satisfaction from consumption.</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">3</span>
              <div className="assumption-content">
                <h4>MU Diminishes with Consumption</h4>
                <p>As you consume more units, the additional satisfaction from each unit typically decreases.
                This is the Law of Diminishing Marginal Utility (covered in next topic).</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">4</span>
              <div className="assumption-content">
                <h4>Price Reflects Marginal Utility</h4>
                <p>Market prices are determined by marginal utility, not total utility. This explains why
                essential goods like water can be cheap while non-essential goods like diamonds are expensive.</p>
              </div>
            </div>
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
