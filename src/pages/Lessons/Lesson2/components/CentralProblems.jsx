// CentralProblems.jsx - The Allocation Algorithms 📟
import { FaCogs, FaUsers, FaIndustry, FaBalanceScale, FaMicrochip, FaServer, FaCodeBranch } from 'react-icons/fa';
import '../lesson2-retro.css';

function CentralProblems() {
  return (
    <section>

      {/* HEADER */}
      <div style={{ marginBottom: '30px', borderLeft: '4px solid var(--retro-green)', paddingLeft: '20px' }}>
        <h2 className="retro-header-lg" style={{ fontSize: '2rem', border: 'none', margin: 0 }}>ALLOCATION ALGORITHMS</h2>
        <p className="sys-text" style={{ color: 'var(--retro-dim)' }}>
          {'>'} Executing 3 Sub-Routines to optimization resource distribution.
        </p>
      </div>

      {/* THE PROCESS GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>

        {/* PROBLEM 1: WHAT TO PRODUCE */}
        <div className="terminal-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <h3 className="retro-header-md">01. SELECT_OUTPUT</h3>
            <FaServer style={{ color: 'var(--retro-dim)' }} />
          </div>

          <p className="sys-text" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
            Determine composition of final build.
          </p>

          <div style={{ background: '#111', padding: '10px', border: '1px dashed #333' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: '#ff3333' }}>[A] DEFENSE_PACK</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>Guns/Tanks</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#33ff00' }}>[B] CIVIL_PACK</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>Food/Homes</span>
            </div>
          </div>

          <div style={{ marginTop: '15px', fontSize: '0.8rem', color: 'var(--retro-amber)' }}>
            ⚠ WARNING: Cannot compile both at 100%. Buffer Overflow.
          </div>
        </div>

        {/* PROBLEM 2: HOW TO PRODUCE */}
        <div className="terminal-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <h3 className="retro-header-md">02. SELECT_METHOD</h3>
            <FaMicrochip style={{ color: 'var(--retro-dim)' }} />
          </div>

          <p className="sys-text" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
            Choose compilation technique (Efficiency vs Employment).
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ flex: 1, padding: '10px', border: '1px solid var(--retro-dim)', textAlign: 'center' }}>
              <FaUsers size={20} style={{ marginBottom: '5px' }} />
              <div style={{ fontSize: '0.8rem' }}>LIT</div>
              <div style={{ fontSize: '0.7rem', color: '#888' }}>Labor Intensive</div>
            </div>
            <div style={{ flex: 1, padding: '10px', border: '1px solid var(--retro-cyan)', boxShadow: '0 0 5px rgba(0,229,255,0.2)', textAlign: 'center' }}>
              <FaCogs size={20} style={{ marginBottom: '5px', color: 'var(--retro-cyan)' }} />
              <div style={{ fontSize: '0.8rem', color: 'var(--retro-cyan)' }}>CIT</div>
              <div style={{ fontSize: '0.7rem', color: '#888' }}>Capital Intensive</div>
            </div>
          </div>
        </div>

        {/* PROBLEM 3: FOR WHOM */}
        <div className="terminal-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
            <h3 className="retro-header-md">03. TARGET_USER</h3>
            <FaCodeBranch style={{ color: 'var(--retro-dim)' }} />
          </div>

          <p className="sys-text" style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
            Map output to user segments based on `Purchasing_Power`.
          </p>

          <div className="scrolling-log" style={{ height: '100px', fontSize: '1rem' }}>
            <li className="log-entry">Detecting User Classes...</li>
            <li className="log-entry">Class_A: "Elite" (High_Credit)</li>
            <li className="log-entry">Class_B: "Masses" (Low_Credit)</li>
            <li className="log-entry text-amber">CONFLICT: Equity != Efficiency</li>
            <li className="log-entry">Thinking<span className="caret">_</span></li>
          </div>
        </div>

      </div>

    </section>
  );
}

export default CentralProblems;
