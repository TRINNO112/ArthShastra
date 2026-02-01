// PPCAssumptions.jsx - Assumptions of Production Possibility Curve
import { FaListOl, FaCheckCircle, FaInfoCircle, FaLightbulb } from 'react-icons/fa';
import '../lesson2-retro.css';

function PPCAssumptions() {
  const assumptions = [
    {
      id: 1,
      title: 'Fixed Resources',
      description: 'The total quantity of resources (land, labor, capital, and entrepreneurship) available to the economy is fixed and given.',
      detail: 'Resources can be transferred from the production of one good to another, but the total amount remains constant.',
      icon: '🔒',
      color: '#ffd700'
    },
    {
      id: 2,
      title: 'Full and Efficient Utilization',
      description: 'All available resources are fully employed and are being used in the most efficient manner possible.',
      detail: 'There is no unemployment of resources and no wastage. The economy is operating at its maximum productive capacity.',
      icon: '⚡',
      color: '#00ff88'
    },
    {
      id: 3,
      title: 'Constant Technology',
      description: 'The state of technology and production techniques remain unchanged during the period under consideration.',
      detail: 'Any change in technology would shift the PPC, but we assume it remains constant to isolate the effects of resource allocation.',
      icon: '🔧',
      color: '#00d4ff'
    },
    {
      id: 4,
      title: 'Only Two Goods',
      description: 'The economy produces only two types of goods or services.',
      detail: 'This simplification allows us to represent the production possibilities on a two-dimensional graph. In reality, economies produce thousands of goods.',
      icon: '📦',
      color: '#ff6b6b'
    }
  ];

  const getDynamicStyles = (color) => {
    return {
      '--assumption-color': color,
      '--assumption-border': `2px solid ${color}40`,
      '--assumption-bg-gradient': `linear-gradient(135deg, ${color}, ${color}cc)`,
      '--assumption-shadow': `0 4px 15px ${color}40`,
      '--assumption-badge-bg': `${color}20`,
      '--assumption-hover-shadow': `0 10px 30px ${color}30`
    };
  };

  return (
    <section className="lesson-section">
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 className="retro-header-lg">PPC ASSUMPTIONS</h2>
        <p className="sys-text" style={{ color: 'var(--retro-dim)' }}>
          [MODEL_CONSTRAINTS]: Underlying logic for the frontier.
        </p>
      </div>

      <div className="terminal-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FaInfoCircle size={30} style={{ color: 'var(--retro-cyan)' }} />
          <h3 className="retro-header-md" style={{ margin: 0 }}>WHY ASSUMPTIONS MATTER?</h3>
        </div>
        <p className="sys-text" style={{ marginTop: '10px' }}>
          The Production Possibility Curve is a simplified economic model. Like all models, it makes certain assumptions
          to help us understand complex real-world phenomena.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {assumptions.map((assumption) => (
          <div key={assumption.id} className="terminal-card" style={{ marginBottom: 0, borderColor: assumption.color }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', color: assumption.color }}>#0{assumption.id}</span>
              <span style={{ fontSize: '1.5rem' }}>{assumption.icon}</span>
            </div>
            <h4 style={{ fontFamily: 'var(--font-header)', fontSize: '1.5rem', color: '#fff', marginBottom: '10px' }}>{assumption.title}</h4>
            <p className="sys-text" style={{ fontSize: '0.9rem', marginBottom: '10px' }}>{assumption.description}</p>
            <div style={{ borderTop: `1px solid ${assumption.color}`, paddingTop: '10px', fontSize: '0.8rem', color: '#888' }}>
              {assumption.detail}
            </div>
          </div>
        ))}
      </div>

      <div className="highlight-card cyan assumptions-takeaway-card">
        <div className="highlight-content">
          <h3 className="assumptions-takeaway-heading">
            <FaCheckCircle />
            Key Takeaway
          </h3>
          <p className="assumptions-takeaway-text">
            <strong>Remember:</strong> These assumptions create an <em>idealized model</em> of production possibilities.
            In the real world, resources may not be fully employed, technology constantly evolves, and economies produce
            thousands of goods. However, the PPC still provides valuable insights into the fundamental economic problem
            of scarcity and the trade-offs involved in resource allocation.
          </p>
        </div>
      </div>

      <div className="feature-grid assumptions-feature-grid">
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaInfoCircle />
          </div>
          <h4>What if assumptions are violated?</h4>
          <p className="assumptions-feature-text">
            If any assumption is violated, the PPC may shift or change shape. For example, technological improvements
            would shift the curve outward, while unemployment would mean the economy operates inside the curve.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon purple">
            <FaLightbulb />
          </div>
          <h4>Real-World Application</h4>
          <p className="assumptions-feature-text">
            Despite these simplifying assumptions, the PPC framework helps policymakers understand production trade-offs,
            opportunity costs, and the benefits of technological progress and increased resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PPCAssumptions;
