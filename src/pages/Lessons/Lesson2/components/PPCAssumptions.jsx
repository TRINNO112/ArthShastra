// PPCAssumptions.jsx
import { FaClipboardCheck, FaCogs, FaBan, FaChartLine } from 'react-icons/fa';
import '../lesson2-core.css';

function PPCAssumptions() {
  const comicCardStyle = (color) => ({
    border: '3px solid #000',
    background: '#fff',
    boxShadow: `6px 6px 0px ${color}`,
    padding: '20px',
    position: 'relative',
    color: '#000' // Force Black Text
  });

  const comicHeaderStyle = (bg) => ({
    background: bg,
    color: '#000',
    border: '3px solid #000',
    display: 'inline-block',
    padding: '5px 15px',
    fontWeight: '900',
    textTransform: 'uppercase',
    marginBottom: '15px',
    transform: 'rotate(-2deg)',
    fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'
  });

  return (
    <section>
      {/* Removed inline style to allow CSS class to take effect */}
      <h2 className="section-title">
        Game Rules <span style={{ fontSize: '0.6em', verticalAlign: 'middle', background: '#000', color: '#fff', padding: '2px 8px', transform: 'rotate(2deg)', display: 'inline-block' }}>(Assumptions)</span>
      </h2>

      <div className="lesson-grid-2">

        {/* Assumption 1 */}
        <div style={comicCardStyle('#2563eb')}>
          <div style={comicHeaderStyle('#cbd5e1')}>Rule #1: The Setup</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}>
            <FaClipboardCheck color="#000" /> Fixed Resources
          </h3>
          <p style={{ fontWeight: 500, color: '#000' }}>
            You have what you have! Land, Labor, Capital are <strong>LOCKED</strong>. No spawning new items mid-game.
            <br /><br />
            <span style={{ background: '#facc15', border: '2px solid #000', padding: '2px 8px', fontWeight: 'bold' }}>Strict Budget!</span>
          </p>
        </div>

        {/* Assumption 2 */}
        <div style={comicCardStyle('#facc15')}>
          <div style={comicHeaderStyle('#cbd5e1')}>Rule #2</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}>
            <FaCogs color="#000" /> Constant Tech
          </h3>
          <p style={{ fontWeight: 500, color: '#000' }}>
            No upgrades! The technology is frozen in time. You can't invent a better machine right now.
          </p>
        </div>

        {/* Assumption 3 */}
        <div style={comicCardStyle('#22c55e')}>
          <div style={comicHeaderStyle('#cbd5e1')}>Rule #3</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}>
            <FaChartLine color="#000" /> Full Efficiency
          </h3>
          <p style={{ fontWeight: 500, color: '#000' }}>
            No lazy workers! Every resource is working at <strong>MAXIMUM POWER</strong>. No waste allowed.
          </p>
        </div>

        {/* Assumption 4 */}
        <div style={comicCardStyle('#ef4444')}>
          <div style={comicHeaderStyle('#cbd5e1')}>Rule #4: Simplicity</div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: '#000' }}>
            <FaBan color="#000" /> Two Goods Only
          </h3>
          <p style={{ fontWeight: 500, color: '#000' }}>
            Simple world! We only produce <strong>2 Things</strong> (e.g. Guns vs Butter). Nothing else exists.
          </p>
        </div>

      </div>
    </section>
  );
}

export default PPCAssumptions;
