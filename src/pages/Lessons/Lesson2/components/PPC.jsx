// PPC.jsx
import PPCVisualizer from './PPCVisualizer';
import '../lesson2-core.css';

function PPC() {
  return (
    <section>
      <h2 className="royal-section-title">Production Possibility Frontier</h2>

      {/* Main Layout: Graph + Core Definition */}
      <div className="lesson-grid-2" style={{ marginBottom: '30px' }}>

        {/* Left Col: GRAPH */}
        <div className="lesson-card" style={{ gridColumn: '1 / -1', minHeight: 'unset' }}>
          <h3 className="card-title">Interactive Graph</h3>
          <div className="graph-container">
            <PPCVisualizer />
          </div>
        </div>

        {/* Bottom Col: Concepts */}
        <div className="lesson-card">
          <h3 className="card-title">What is PPC?</h3>
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            The <strong>PPC (Production Possibility Curve)</strong> shows all possible combinations of two goods an economy can produce when:
          </p>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Resources are Fixed:</strong> Land, Labor, Capital are constant.</li>
            <li><strong>Technology is Constant:</strong> No new inventions.</li>
            <li><strong>Full Efficiency:</strong> No waste of resources.</li>
          </ul>
        </div>

        <div className="lesson-card">
          <h3 className="card-title">Key Properties</h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ background: '#f0f9ff', padding: '10px', border: '2px solid #000', borderRadius: '6px' }}>
              <strong>1. Slopes Downward</strong>
              <br />
              Inverse relationship: To produce more X, you must sacrifice Y.
            </li>
            <li style={{ background: '#fffbeb', padding: '10px', border: '2px solid #000', borderRadius: '6px' }}>
              <strong>2. Concave to Origin</strong>
              <br />
              Marginal Opportunity Cost (MOC) increases as you move down.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default PPC;
