/**
 * ProductionFunction.jsx - Main component for Lesson 7: Production Function and Returns to a Factor
 *
 * Covers:
 * - Production function definition Q = f(L, K)
 * - Short-run production (variable labor, fixed capital)
 * - Total Product (TP), Average Product (AP), Marginal Product (MP)
 * - Three stages of production
 * - Production schedule table
 * - Graph placeholder for TP/AP/MP curves
 * - Assumptions and real-world examples
 */

import { FaFactory, FaChartLine, FaCalculator, FaTable, FaArrowUp, FaArrowDown, FaBalanceScale } from 'react-icons/fa';
import './component.css';

const productionData = [
  { labor: 0, tp: 0, ap: '-', mp: '-' },
  { labor: 1, tp: 10, ap: 10, mp: 10 },
  { labor: 2, tp: 25, ap: 12.5, mp: 15 },
  { labor: 3, tp: 36, ap: 12, mp: 11 },
  { labor: 4, tp: 44, ap: 11, mp: 8 },
  { labor: 5, tp: 48, ap: 9.6, mp: 4 },
  { labor: 6, tp: 48, ap: 8, mp: 0 },
  { labor: 7, tp: 45, ap: 6.4, mp: -3 },
  { labor: 8, tp: 40, ap: 5, mp: -5 },
];

function ProductionFunction() {
  return (
    <section className="lesson-section">
      {/* Section Header */}
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 7</span>
        <h2 className="section-title-lesson">Production Function & Returns to a Factor</h2>
        <p className="section-subtitle-lesson">How output changes when varying one input while others remain fixed</p>
      </div>

      {/* Main Content */}
      <div className="content-card">
        <div className="card-glow"></div>
        <div className="card-content">
          {/* Production Function Definition */}
          <h3 className="highlight-gold">
            <FaFactory /> What is Production Function?
          </h3>
          <div className="definition-quote-box">
            <p className="definition-text">
              <strong>Production Function</strong> shows the technical relationship between physical inputs (factors of production) and physical output.
              It represents the maximum output possible from given inputs under current technology.
            </p>
          </div>
          <div className="formula-box">
            <strong>Mathematical Form:</strong> <code>Q = f(L, K, T)</code>
            <p className="text-muted">
              Q = Output | L = Labor (Variable) | K = Capital (Fixed) | T = Technology
            </p>
          </div>

          {/* Short-Run Focus */}
          <h4 className="highlight-cyan">Short-Run Production (Focus of this Lesson)</h4>
          <p>
            In <strong>short-run</strong>, at least one factor is fixed (usually capital). We vary <strong>Labor (L)</strong>
            and observe changes in output. This leads to the <strong>Law of Variable Proportions</strong> (Returns to a Factor).
          </p>

          {/* Production Schedule Table */}
          <div className="table-container">
            <h5 className="text-center mb-3">
              <FaTable /> Production Schedule (Fixed Capital, Variable Labor)
            </h5>
            <table className="production-table">
              <thead>
                <tr>
                  <th>Labor Units</th>
                  <th>Total Product (TP)</th>
                  <th>Average Product (AP)</th>
                  <th>Marginal Product (MP)</th>
                  <th>Stage</th>
                </tr>
              </thead>
              <tbody>
                {productionData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.labor}</td>
                    <td className="text-gold font-bold">{row.tp}</td>
                    <td>{row.ap}</td>
                    <td className={row.mp > 0 ? 'text-green' : row.mp < 0 ? 'text-red' : 'text-gold'}>{row.mp}</td>
                    <td className="font-bold">
                      {idx === 0 ? 'Zero' : idx <= 2 ? 'I (Increasing)' : idx <= 6 ? 'II (Diminishing)' : 'III (Negative)'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Formulas */}
          <div className="formula-box-grid">
            <div>
              <strong>AP = TP / L</strong>
              <p>Average Product per worker</p>
            </div>
            <div>
              <strong>MP = ΔTP / ΔL</strong>
              <p>Marginal Product of labor</p>
            </div>
          </div>

          {/* Three Stages */}
          <h3 className="highlight-green">Three Stages of Production</h3>
          <div className="stages-grid">
            <div className="stage-card stage-1">
              <h4>Stage I: Increasing Returns</h4>
              <p>MP ↑, AP ↑ | Specialization begins</p>
            </div>
            <div className="stage-card stage-2">
              <h4>Stage II: Diminishing Returns</h4>
              <p>MP ↓, AP ↓ but >0 | Optimal range</p>
            </div>
            <div className="stage-card stage-3">
              <h4>Stage III: Negative Returns</h4>
              <p>MP < 0 | Overcrowding</p>
            </div>
          </div>

          {/* Graph Placeholder */}
          <div className="graph-container">
            <h5>TP, AP, MP Curves (Interactive Graph Coming Soon)</h5>
            <div className="graph-placeholder">
              <FaChartLine className="placeholder-icon" />
              <p>TP: Inverted U | AP: Bell | MP: Hill → Negative</p>
            </div>
          </div>

          {/* Assumptions */}
          <div className="assumptions-list">
            <div className="assumption-item">
              <span className="assumption-number">1</span>
              <div>
                <h5>One Variable Factor</h5>
                <p>Labor varies, capital fixed</p>
              </div>
            </div>
            <div className="assumption-item">
              <span className="assumption-number">2</span>
              <div>
                <h5>Technology Constant</h5>
                <p>State of art unchanged</p>
              </div>
            </div>
            {/* Add more */}
          </div>

          {/* Real-World Example */}
          <div className="highlight-card">
            <h4>🌾 Real-World: Farmer with Fixed Land</h4>
            <p>Adding workers initially increases output rapidly (Stage I). After optimal labor, each additional worker adds less (Stage II). Too many workers → overcrowding (Stage III).</p>
          </div>

          {/* Practice Problem */}
          <div className="example-box">
            <h5>Practice: From TP= [0,10,25,36,44], calculate AP/MP</h5>
            <p><strong>Solution:</strong> MP₁=10, MP₂=15... Identify stages.</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-navigation">
        <div className="nav-hint">
          Previous: Consumer Equilibrium | Next: Isoquants
        </div>
      </div>
    </section>
  );
}

export default ProductionFunction;
