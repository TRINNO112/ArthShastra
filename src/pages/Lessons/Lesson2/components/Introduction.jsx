// Introduction.jsx - Scarcity and Choice
import { FaExclamationCircle, FaExchangeAlt, FaBalanceScale } from 'react-icons/fa';

function Introduction() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 2</span>
        <h2 className="section-title-lesson">Scarcity and Choice</h2>
        <p className="section-subtitle-lesson">
          The foundation of all economic problems
        </p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <h3 className="card-title">
          <FaExclamationCircle className="title-icon gold" />
          The Economic Problem
        </h3>
        <p className="intro-text">
          According to <strong>VK Ohri</strong>, the "Economic Problem" is essentially the problem of
          <span className="highlight-gold"> Choice</span>. It arises because our resources are limited,
          but our wants are unlimited.
        </p>

        <div className="highlight-card gold">
          <div className="highlight-icon">
            <FaExchangeAlt />
          </div>
          <div className="highlight-content">
            <h3>Three Main Causes</h3>
            <ul className="bullet-list">
              <li><strong>Unlimited Human Wants:</strong> Human wants are never-ending; as soon as one is satisfied, another arises.</li>
              <li><strong>Limited/Scarce Resources:</strong> Resources like land, labor, and capital are limited in supply relative to demand.</li>
              <li><strong>Alternative Uses:</strong> Resources can be put to more than one use (e.g., land can be used for farming or building a factory).</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="highlight-card cyan">
        <div className="highlight-icon">
          <FaBalanceScale />
        </div>
        <div className="highlight-content">
          <h3>The Law of Choice</h3>
          <p>
            When resources are scarce and have alternative uses, we are forced to decide which want to satisfy first.
            This decision-making is called <strong>Economic Choice</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
