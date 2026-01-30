// Types of Economies Module - Economics and Economies (VK Ohri Grade 11)
import { FaCrown, FaCoins, FaHammer, FaHandshake, FaCheckCircle, FaScroll } from 'react-icons/fa';
import '../lesson1.css';

function TypesOfEconomies() {
  return (
    <section className="lesson-container-library">

      {/* HEADER */}
      <div className="section-header-lesson" style={{ background: 'transparent', border: 'none', boxShadow: 'none', paddingBottom: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <FaCrown size={40} color="#1a0f0a" />
        </div>
        <h2 className="library-title" style={{ fontSize: '3rem', color: '#1a0f0a' }}>Chapter IV: The Three Systems</h2>
        <p className="library-subtitle" style={{ color: '#3e2723' }}>"How Nations Organize Their Wealth"</p>
      </div>

      {/* EXHIBIT CONTAINER */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', marginTop: '30px' }}>

        {/* EXHIBIT A: MARKET */}
        <div className="evidence-file" style={{ flex: '1 1 300px', background: '#fffde7', border: '1px solid #fbc02d', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', left: '20px', background: '#fbc02d', color: '#000', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', transform: 'rotate(-2deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT A
          </div>
          <div style={{ textAlign: 'center', marginTop: '15px', paddingBottom: '10px' }}>
            <FaCoins size={32} color="#f9a825" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.6rem', color: '#f9a825', margin: '5px 0' }}>Market Economy</h3>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#f9a825' }}>CAPITALISM • FREE ENTERPRISE</div>
          </div>
          <div style={{ fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p>Decisions guided by <strong>Price Mechanism</strong> (Demand & Supply). No government role.</p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#f9a825' }}>✓</strong> Private Property</li>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#f9a825' }}>✓</strong> Profit Motive</li>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#f9a825' }}>✓</strong> Consumer Sovereignty</li>
            </ul>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Example: USA, Singapore
            </div>
          </div>
        </div>

        {/* EXHIBIT B: PLANNED */}
        <div className="evidence-file" style={{ flex: '1 1 300px', background: '#ffebee', border: '1px solid #ef5350', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#ef5350', color: '#fff', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', transform: 'rotate(2deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT B
          </div>
          <div style={{ textAlign: 'center', marginTop: '15px', paddingBottom: '10px' }}>
            <FaHammer size={32} color="#c62828" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.6rem', color: '#c62828', margin: '5px 0' }}>Planned Economy</h3>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#c62828' }}>SOCIALISM • COMMAND</div>
          </div>
          <div style={{ fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p>Decisions made by <strong>Central Authority</strong> (Government). Social welfare is key.</p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#c62828' }}>✓</strong> State Ownership</li>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#c62828' }}>✓</strong> Social Welfare</li>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#c62828' }}>✓</strong> No Consumer Choice</li>
            </ul>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Example: North Korea, Cuba
            </div>
          </div>
        </div>

        {/* EXHIBIT C: MIXED */}
        <div className="evidence-file" style={{ flex: '1 1 300px', background: '#e8eaf6', border: '1px solid #5c6bc0', padding: '20px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(0deg)', background: '#5c6bc0', color: '#fff', padding: '5px 15px', fontWeight: 'bold', fontFamily: 'Special Elite', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
            EXHIBIT C
          </div>
          <div style={{ textAlign: 'center', marginTop: '15px', paddingBottom: '10px' }}>
            <FaHandshake size={32} color="#283593" />
            <h3 style={{ fontFamily: 'Cinzel', fontSize: '1.6rem', color: '#283593', margin: '5px 0' }}>Mixed Economy</h3>
            <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#283593' }}>COEXISTENCE • BALANCE</div>
          </div>
          <div style={{ fontFamily: 'Crimson Text', fontSize: '1.1rem', color: '#1a0f0a' }}>
            <p><strong>Public & Private</strong> sectors coexist. Market operates with regulation.</p>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem' }}>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#283593' }}>✓</strong> Dual Ownership</li>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#283593' }}>✓</strong> Profit + Welfare</li>
              <li style={{ marginBottom: '5px' }}><strong style={{ color: '#283593' }}>✓</strong> Regulated Market</li>
            </ul>
            <div style={{ marginTop: '10px', fontSize: '0.9rem', fontStyle: 'italic' }}>
              Example: <strong style={{ color: '#283593' }}>India</strong>, France
            </div>
          </div>
        </div>

      </div>

      {/* ARCHIVE COMPARISON */}
      <div className="open-book-card" style={{ marginTop: '40px' }}>
        <h3 style={{ fontFamily: 'Cinzel', textAlign: 'center', color: '#1a0f0a' }}>System Comparison Archive</h3>
        <div className="table-responsive">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Crimson Text' }}>
            <thead>
              <tr style={{ background: '#f5f5f5', borderBottom: '2px solid #5d4037' }}>
                <th style={{ padding: '10px', color: '#1a0f0a' }}>Feature</th>
                <th style={{ padding: '10px', color: '#f9a825' }}>Market</th>
                <th style={{ padding: '10px', color: '#c62828' }}>Planned</th>
                <th style={{ padding: '10px', color: '#283593' }}>Mixed</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'center', color: '#1a0f0a' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', textAlign: 'left', color: '#1a0f0a' }}>Ownership</td>
                <td style={{ color: '#1a0f0a' }}>Private</td>
                <td style={{ color: '#1a0f0a' }}>Government</td>
                <td style={{ color: '#1a0f0a' }}>Both</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee', textAlign: 'center', color: '#1a0f0a' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', textAlign: 'left', color: '#1a0f0a' }}>Motive</td>
                <td style={{ color: '#1a0f0a' }}>Profit</td>
                <td style={{ color: '#1a0f0a' }}>Social Welfare</td>
                <td style={{ color: '#1a0f0a' }}>Profit + Welfare</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default TypesOfEconomies;
