// PPCAssumptions.jsx - Assumptions of Production Possibility Curve
import { FaListOl, FaCheckCircle, FaInfoCircle, FaLightbulb } from 'react-icons/fa';
import './components.css';

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
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Foundation Concepts</span>
        <h2 className="section-title-lesson">Assumptions of Production Possibility Curve</h2>
        <p className="section-subtitle-lesson">
          Understanding the fundamental assumptions that underlie the PPC model.
        </p>
      </div>

      <div className="content-card">
        <div className="assumptions-intro-box">
          <div className="assumptions-intro-content">
            <FaInfoCircle className="assumptions-intro-icon" />
            <div>
              <h3 className="assumptions-intro-heading">
                Why Assumptions Matter
              </h3>
              <p className="assumptions-intro-text">
                The Production Possibility Curve is a simplified economic model. Like all models, it makes certain assumptions
                to help us understand complex real-world phenomena. These assumptions allow us to focus on the fundamental
                trade-offs that economies face when allocating scarce resources.
              </p>
            </div>
          </div>
        </div>

        <div className="assumptions-grid">
          {assumptions.map((assumption) => (
            <div
              key={assumption.id}
              className="assumption-card"
              style={getDynamicStyles(assumption.color)}
            >
              <div className="assumption-card-icon-bg">
                {assumption.icon}
              </div>

              <div className="assumption-card-content">
                <div className="assumption-card-icon">
                  {assumption.icon}
                </div>
                <div className="assumption-card-text">
                  <div className="assumption-card-badge-container">
                    <span className="assumption-card-badge">
                      Assumption {assumption.id}
                    </span>
                  </div>
                  <h3 className="assumption-card-title">
                    {assumption.title}
                  </h3>
                  <p className="assumption-card-description">
                    {assumption.description}
                  </p>
                  <div className="assumption-card-detail-box">
                    <p className="assumption-card-detail-text">
                      <FaLightbulb className="assumption-card-detail-icon" />
                      {assumption.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
