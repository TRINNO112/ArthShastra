// Introduction.jsx - Project Genesis 📟
import { FaExclamationTriangle, FaInfinity, FaBatteryQuarter, FaDatabase, FaTerminal, FaNetworkWired } from 'react-icons/fa';
import '../lesson2-retro.css';

function Introduction() {
  return (
    <section>
      {/* HEADER: SYSTEM BOOT */}
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <span style={{ color: 'var(--retro-dim)', fontSize: '0.9rem' }}>// SYSTEM_BOOT.SEQUENCE</span>
            <h1 className="retro-header-lg">PROTOCOL: SCARCITY</h1>
          </div>
          <div style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--retro-dim)' }}>
            <div>STATUS: CRITICAL</div>
            <div>UPTIME: 2094 CYCLES</div>
          </div>
        </div>
      </div>

      {/* DASHBOARD: THE CORE CONFLICT */}
      <div className="terminal-card">
        <h3 className="retro-header-md"><FaTerminal /> SYSTEM DIAGNOSTICS</h3>

        <div className="metric-grid">

          {/* WANTS: UNLIMITED */}
          <div className="metric-box">
            <div className="metric-label">Human Wants Database</div>
            <div className="metric-value-lg" style={{ color: 'var(--retro-cyan)' }}>
              <FaInfinity />
            </div>
            <div className="metric-status status-ok">UNLIMITED</div>
            <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#888' }}>
              {'>'} Housing_Upgrade<br />
              {'>'} Better_Food<br />
              {'>'} Entertainment_Max
            </div>
          </div>

          {/* CONFLICT INDICATOR */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ color: 'var(--retro-amber)', fontSize: '2rem', animation: 'blink 1s infinite' }}>VS</div>
          </div>

          {/* RESOURCES: LIMITED */}
          <div className="metric-box" style={{ borderColor: 'var(--retro-amber)' }}>
            <div className="metric-label">Resource Reserves</div>
            <div className="metric-value-lg" style={{ color: 'var(--retro-amber)' }}>
              <FaBatteryQuarter /> 14%
            </div>
            <div className="metric-status status-warn">DEPLETING</div>
            <div style={{ fontSize: '0.8rem', marginTop: '10px', color: '#888' }}>
              {'>'} Land_Plot: FULL<br />
              {'>'} Capital: LOW<br />
              {'>'} Time: 24h_LIMIT
            </div>
          </div>

        </div>

        {/* THE SYSTEM ALERT (Scarcity Definition) */}
        <div className="sys-alert">
          <h4 style={{ color: 'var(--retro-amber)', marginTop: 0 }}><FaExclamationTriangle /> CRITICAL ERROR: RESOURCES_INSUFFICIENT</h4>
          <p className="sys-text">
            Input Demand exceeds Output Capacity. The system cannot satisfy all requests simultaneously.
            <br /><br />
            <span className="glow-text" style={{ color: 'var(--retro-text)' }}>
              INITIATING <span style={{ color: 'var(--retro-green)' }}>CHOICE_PROTOCOL.EXE</span>...
            </span>
          </p>
        </div>
      </div>

      {/* WHY IT HAPPENS: ROOT CAUSE ANALYSIS */}
      <div className="terminal-card">
        <h3 className="retro-header-md"><FaNetworkWired /> ROOT CAUSE ANALYSIS</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

          <div style={{ padding: '15px', border: '1px solid #333' }}>
            <div style={{ color: 'var(--retro-cyan)', fontSize: '1.5rem', marginBottom: '10px' }}>01. WANTS++</div>
            <p className="sys-text" style={{ fontSize: '0.9rem' }}>
              Human desires are recursive. Satisfying `Request_A` spawns `Request_B`. It is a viral loop.
            </p>
          </div>

          <div style={{ padding: '15px', border: '1px solid #333' }}>
            <div style={{ color: 'var(--retro-amber)', fontSize: '1.5rem', marginBottom: '10px' }}>02. SUPPLY--</div>
            <p className="sys-text" style={{ fontSize: '0.9rem' }}>
              Physical assets (Oil, Silicon, Land) have hard caps. They do not regenerate instantly.
            </p>
          </div>

          <div style={{ padding: '15px', border: '1px solid #333' }}>
            <div style={{ color: 'var(--retro-green)', fontSize: '1.5rem', marginBottom: '10px' }}>03. ALT_USES</div>
            <p className="sys-text" style={{ fontSize: '0.9rem' }}>
              Resources are versatile. Steel can build `Weapons` OR `Hospitals`. It cannot do both.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Introduction;
