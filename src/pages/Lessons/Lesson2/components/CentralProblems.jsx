// CentralProblems.jsx - Enhanced Brutalist 🏗️
import { FaCogs, FaUsers, FaIndustry, FaBalanceScale, FaMicrochip, FaServer, FaCodeBranch } from 'react-icons/fa';
import '../lesson2-retro.css';

function CentralProblems() {
  return (
    <section>

      {/* HEADER */}
      <div className="feature-box">
        <h2>ALLOCATION ALGORITHMS</h2>
        <p>
          Executing 3 Sub-Routines to optimize resource distribution.
        </p>
      </div>

      <div className="section-header">
        CORE DECISION MATRIX
      </div>

      {/* THE PROCESS GRID */}
      <div className="cards-grid">

        {/* PROBLEM 1: WHAT TO PRODUCE */}
        <div className="card">
          <div className="card-content">
            <div className="card-number">01</div>
            <h3>Select Output</h3>
            <p>
              <strong>Determine composition of final build.</strong><br />
              [A] DEFENSE_PACK (Guns/Tanks)<br />
              [B] CIVIL_PACK (Food/Homes)<br />
              <br />
              <em>WARNING: Cannot compile both at 100%. Buffer Overflow.</em>
            </p>
          </div>
        </div>

        {/* PROBLEM 2: HOW TO PRODUCE */}
        <div className="card">
          <div className="card-content">
            <div className="card-number">02</div>
            <h3>Select Method</h3>
            <p>
              <strong>Choose compilation technique.</strong><br />
              <strong>LIT (Labor Intensive):</strong> Uses active workforce.<br />
              <strong>CIT (Capital Intensive):</strong> Uses automated machinery.
            </p>
          </div>
        </div>

        {/* PROBLEM 3: FOR WHOM */}
        <div className="card">
          <div className="card-content">
            <div className="card-number">03</div>
            <h3>Target User</h3>
            <p>
              <strong>Map output to user segments.</strong><br />
              Class A: "Elite" (High Purchasing Power)<br />
              Class B: "Masses" (Low Purchasing Power)<br />
              <br />
              <em>CONFLICT: Equity != Efficiency</em>
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default CentralProblems;
