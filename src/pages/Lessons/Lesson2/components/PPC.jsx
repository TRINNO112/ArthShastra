// PPC.jsx
import PPCVisualizer from './PPCVisualizer';
import '../lesson2-core.css';

function PPC() {
  return (
    <section>
      <h2 className="section-title">Production Possibility Frontier (PPC)</h2>

      <div className="lesson-card">
        <h3 className="card-title">Graphical Representation</h3>
        {/* Graph Container with Enforced Height */}
        <div className="graph-container">
          <PPCVisualizer />
        </div>
      </div>

      <div className="lesson-grid-2">
        <div className="lesson-card">
          <h3 className="card-title">What is PPC?</h3>
          <p>
            The PPC is a curve showing alternative production possibilities of two goods given:
          </p>
          <ul>
            <li>Resources are fixed and fully efficient.</li>
            <li>Technology is constant.</li>
          </ul>
        </div>
        <div className="lesson-card">
          <h3 className="card-title">Key Properties</h3>
          <ul>
            <li><strong>Slopes Downward:</strong> Inverse relationship (More of X = Less of Y).</li>
            <li><strong>Concave to Origin:</strong> Due to increasing Marginal Opportunity Cost.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PPC;
