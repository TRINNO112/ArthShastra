// PPCAssumptions.jsx - Assumptions of Production Possibility Curve
import { FaListOl, FaCheckCircle, FaInfoCircle, FaLightbulb } from 'react-icons/fa';

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
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(0,150,255,0.1))',
          padding: '20px',
          borderRadius: '12px',
          border: '2px solid rgba(255,215,0,0.3)',
          marginBottom: '30px'
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
            <FaInfoCircle style={{ color: '#ffd700', fontSize: '1.5rem', marginTop: '5px', flexShrink: 0 }} />
            <div>
              <h3 style={{ color: '#ffd700', margin: '0 0 10px 0', fontSize: '1.2rem' }}>
                Why Assumptions Matter
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: '1.7', fontSize: '0.95rem' }}>
                The Production Possibility Curve is a simplified economic model. Like all models, it makes certain assumptions
                to help us understand complex real-world phenomena. These assumptions allow us to focus on the fundamental
                trade-offs that economies face when allocating scarce resources.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {assumptions.map((assumption) => (
            <div
              key={assumption.id}
              style={{
                background: 'linear-gradient(145deg, rgba(10,10,25,0.6), rgba(20,15,40,0.6))',
                padding: '25px',
                borderRadius: '16px',
                border: `2px solid ${assumption.color}40`,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${assumption.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                fontSize: '2.5rem',
                opacity: 0.15
              }}>
                {assumption.icon}
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '15px' }}>
                <div style={{
                  fontSize: '2rem',
                  minWidth: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${assumption.color}, ${assumption.color}cc)`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 4px 15px ${assumption.color}40`
                }}>
                  {assumption.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{
                      color: assumption.color,
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      background: `${assumption.color}20`,
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      Assumption {assumption.id}
                    </span>
                  </div>
                  <h3 style={{
                    color: 'white',
                    margin: '0 0 10px 0',
                    fontSize: '1.3rem',
                    fontWeight: '600'
                  }}>
                    {assumption.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.75)',
                    margin: '0 0 12px 0',
                    fontSize: '0.95rem',
                    lineHeight: '1.6'
                  }}>
                    {assumption.description}
                  </p>
                  <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    padding: '12px 15px',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${assumption.color}`
                  }}>
                    <p style={{
                      color: 'rgba(255,255,255,0.65)',
                      margin: 0,
                      fontSize: '0.88rem',
                      lineHeight: '1.6',
                      fontStyle: 'italic'
                    }}>
                      <FaLightbulb style={{ color: assumption.color, marginRight: '8px' }} />
                      {assumption.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="highlight-card cyan" style={{ marginTop: '30px' }}>
        <div className="highlight-content">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <FaCheckCircle />
            Key Takeaway
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
            <strong>Remember:</strong> These assumptions create an <em>idealized model</em> of production possibilities.
            In the real world, resources may not be fully employed, technology constantly evolves, and economies produce
            thousands of goods. However, the PPC still provides valuable insights into the fundamental economic problem
            of scarcity and the trade-offs involved in resource allocation.
          </p>
        </div>
      </div>

      <div className="feature-grid" style={{ marginTop: '25px' }}>
        <div className="feature-item">
          <div className="feature-icon gold">
            <FaInfoCircle />
          </div>
          <h4>What if assumptions are violated?</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            If any assumption is violated, the PPC may shift or change shape. For example, technological improvements
            would shift the curve outward, while unemployment would mean the economy operates inside the curve.
          </p>
        </div>

        <div className="feature-item">
          <div className="feature-icon purple">
            <FaLightbulb />
          </div>
          <h4>Real-World Application</h4>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
            Despite these simplifying assumptions, the PPC framework helps policymakers understand production trade-offs,
            opportunity costs, and the benefits of technological progress and increased resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PPCAssumptions;
