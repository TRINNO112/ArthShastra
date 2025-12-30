// Simple and Complex Economies Module - Economics and Economies (VK Ohri Grade 11)
import { FaCity, FaCampground, FaExchangeAlt, FaLink, FaUsers, FaTools } from 'react-icons/fa';

function SimpleAndComplexEconomies() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 1</span>
        <h2 className="section-title-lesson">Simple vs Complex Economies</h2>
        <p className="section-subtitle-lesson">
          Understanding the evolution of economic structures and their characteristics
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="comparison-grid">
        <div className="comparison-card simple">
          <div className="comparison-header">
            <FaCampground className="comparison-icon" />
            <h3>Simple Economy</h3>
          </div>
          <div className="comparison-content">
            <p className="comparison-desc">
              A simple economy is one where human wants are limited and individuals are self-sufficient to a large extent.
            </p>
            <ul className="comparison-list">
              <li>
                <FaUsers />
                <span>Limited and low level of wants</span>
              </li>
              <li>
                <FaTools />
                <span>Basic and traditional techniques of production</span>
              </li>
              <li>
                <FaExchangeAlt />
                <span>Low degree of exchange and interdependence</span>
              </li>
              <li>
                <FaLink />
                <span>Direct relationship between producers and consumers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="comparison-card complex">
          <div className="comparison-header">
            <FaCity className="comparison-icon" />
            <h3>Complex Economy</h3>
          </div>
          <div className="comparison-content">
            <p className="comparison-desc">
              A complex economy is one where human wants are numerous and individuals are highly dependent on each other.
            </p>
            <ul className="comparison-list">
              <li>
                <FaUsers />
                <span>Unlimited and high level of wants</span>
              </li>
              <li>
                <FaTools />
                <span>Advanced and modern techniques of production</span>
              </li>
              <li>
                <FaExchangeAlt />
                <span>High degree of exchange and interdependence</span>
              </li>
              <li>
                <FaLink />
                <span>Large networks and global markets</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Differences Table */}
      <div className="content-card">
        <h3 className="card-title">
          <FaExchangeAlt className="title-icon gold" />
          Key Differences at a Glance
        </h3>
        <div className="table-responsive">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Basis of Difference</th>
                <th>Simple Economy</th>
                <th>Complex Economy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Wants</strong></td>
                <td>Limited and not very high</td>
                <td>Multiple and very high</td>
              </tr>
              <tr>
                <td><strong>Exchange</strong></td>
                <td>Limited exchange</td>
                <td>Large scale exchange</td>
              </tr>
              <tr>
                <td><strong>Interdependence</strong></td>
                <td>Low degree of interdependence</td>
                <td>High degree of interdependence</td>
              </tr>
              <tr>
                <td><strong>Production</strong></td>
                <td>Production for self-consumption</td>
                <td>Production for the market</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Important Note */}
      <div className="highlight-card cyan">
        <div className="highlight-icon">
          <FaLink />
        </div>
        <div className="highlight-content">
          <h3>Relationship between Income and Multiplicity of Wants</h3>
          <p>
            According to <strong>T.R. Jain & V.K. Ohri</strong>, the complexity of an economy is directly related to the
            level of income. As income increases, human wants multiply, leading to a transition from a simple
            to a complex economic structure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SimpleAndComplexEconomies;
