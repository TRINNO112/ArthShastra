// Introduction.jsx - Enhanced Brutalist 🏗️
import { FaExclamationTriangle, FaInfinity, FaBatteryQuarter, FaDatabase, FaTerminal, FaNetworkWired } from 'react-icons/fa';
import '../lesson2-retro.css';

function Introduction() {
  return (
    <section>
      {/* HEADER: SYSTEM BOOT */}
      <div className="feature-box">
        <h2>PROTOCOL: SCARCITY</h2>
        <p>
          <strong>STATUS: CRITICAL // UPTIME: 2094 CYCLES</strong><br /><br />
          Input Demand exceeds Output Capacity. The system cannot satisfy all requests simultaneously.
          INITIATING CHOICE_PROTOCOL.EXE...
        </p>
      </div>

      <div className="section-header">
        SYSTEM DIAGNOSTICS
      </div>

      {/* CORE CONFLICT GRID */}
      <div className="cards-grid">

        {/* WANTS: UNLIMITED */}
        <div className="card">
          <div className="card-content">
            <div className="card-number">∞</div>
            <h3>Human Wants</h3>
            <p>
              <strong>STATUS: UNLIMITED</strong><br />
              Desires are recursive. Satisfying `Request_A` spawns `Request_B`. It is a viral loop.
            </p>
          </div>
        </div>

        {/* RESOURCES: LIMITED */}
        <div className="card">
          <div className="card-content">
            <div className="card-number">14%</div>
            <h3>Resource Reserves</h3>
            <p>
              <strong>STATUS: DEPLETING</strong><br />
              Physical assets (Oil, Silicon, Land) have hard caps. They do not regenerate instantly.
            </p>
          </div>
        </div>

        {/* ALTERNATIVE USES */}
        <div className="card">
          <div className="card-content">
            <div className="card-number">ALT</div>
            <h3>Alternative Uses</h3>
            <p>
              Resources are versatile. Steel can build `Weapons` OR `Hospitals`. It cannot do both.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Introduction;
