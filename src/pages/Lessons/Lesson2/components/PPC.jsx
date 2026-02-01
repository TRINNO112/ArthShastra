// PPC.jsx - The Production Frontier Grid 📟
import { FaChartLine, FaVectorSquare, FaExpand, FaCompress, FaLock } from 'react-icons/fa';
import PPCVisualizer from './PPCVisualizer';
import '../lesson2-retro.css';

function PPC() {
  return (
    <section>

      {/* HEADER */}
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 className="retro-header-lg" style={{ color: 'var(--retro-cyan)', textShadow: 'var(--glow-cyan)' }}>PRODUCTION POSSIBILITY FRONTIER</h2>
        <div className="sys-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#888' }}>
          [SIMULATION_MODE]: GRAPHICAL_RENDER
        </div>
      </div>

      {/* THE VISUALIZER FRAME */}
      <div className="terminal-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid var(--retro-cyan)' }}>
        {/* Toolbar */}
        <div style={{ background: 'rgba(0, 229, 255, 0.1)', padding: '10px 15px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--retro-cyan)' }}>
          <div style={{ display: 'flex', gap: '15px', color: 'var(--retro-cyan)', fontSize: '0.8rem' }}>
            <span><FaVectorSquare /> COORDS: X,Y</span>
            <span>FPS: 60</span>
          </div>
          <div style={{ color: 'var(--retro-text)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                  // MAX_CAPACITY_RENDER
          </div>
        </div>

        {/* Graph Container - Assuming PPCVisualizer can adapt to dark container or needs BG */}
        <div style={{ padding: '20px', background: '#000', position: 'relative' }}>
          {/* Grid Overlay Effect */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.3,
            pointerEvents: 'none'
          }}></div>

          <PPCVisualizer />
        </div>
      </div>

      {/* SIMULATION LOGS (Properties & Shifts) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>

        {/* PROPERTIES */}
        <div className="terminal-card">
          <h3 className="retro-header-md" style={{ fontSize: '1.4rem' }}>CURVE_PROPERTIES</h3>
          <ul className="sys-text" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px' }}>
              <strong style={{ color: 'var(--retro-green)' }}>{'>'}{'>'} Downward Slope</strong><br />
              <span style={{ fontSize: '0.9rem', color: '#888' }}>Reason: Inverse relationship. +Guns = -Butter.</span>
            </li>
            <li>
              <strong style={{ color: 'var(--retro-green)' }}>{'>'}{'>'} Concave Shape</strong><br />
              <span style={{ fontSize: '0.9rem', color: '#888' }}>Reason: MOC (Marginal Opportunity Cost) Increases. Resources represent specialization.</span>
            </li>
          </ul>
        </div>

        {/* SHIFTS */}
        <div className="terminal-card">
          <h3 className="retro-header-md" style={{ fontSize: '1.4rem' }}>SYSTEM_EVENTS (SHIFTS)</h3>
          <ul className="sys-text" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '15px', borderLeft: '3px solid var(--retro-green)', paddingLeft: '10px' }}>
              <strong>[UPGRADE]</strong> Right Shift<br />
              <span style={{ fontSize: '0.9rem' }}>Discovery of new resources or Tech++.</span>
            </li>
            <li style={{ borderLeft: '3px solid #ff3333', paddingLeft: '10px' }}>
              <strong>[CRASH]</strong> Left Shift<br />
              <span style={{ fontSize: '0.9rem' }}>Destruction of assets (War/Disaster).</span>
            </li>
          </ul>
        </div>

      </div>

      {/* CONSTRAINTS (Assumptions) */}
      <div className="sys-alert" style={{ background: '#111', borderLeftColor: '#888' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <FaLock /> <strong>SIMULATION_CONSTRAINTS</strong>
        </div>
        <div style={{ color: '#888', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
          1. Resources = FIXED<br />
          2. Technology = CONSTANT<br />
          3. Efficiency = 100%<br />
          4. Outputs = 2 (Two-Good Model)
        </div>
      </div>

    </section>
  );
}

export default PPC;
