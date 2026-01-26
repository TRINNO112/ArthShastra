import React from 'react';
import { FaRocket, FaBalanceScale, FaExclamationTriangle } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const StagesOfProduction = () => {
  return (
    <section className="stages-section">
      <h3 className="gradient-text-green text-center mb-4">The Three Stages of Production</h3>

      <div className="stages-grid-enhanced">
        {/* Stage I */}
        <div className="stage-card-modern stage-1-glow">
          <div className="icon-wrapper s1">
            <FaRocket />
          </div>
          <h4>Stage I: Increasing Returns</h4>
          <p className="stage-desc">
            TP increases at an increasing rate first, then at a diminishing rate.
            <strong> MP increases</strong> initially.
          </p>
          <ul className="stage-features">
            <li>✅ Better utilization of fixed factor</li>
            <li>✅ Increased specialization</li>
            <li>❌ Not rational to stop here (can produce more)</li>
          </ul>
        </div>

        {/* Stage II */}
        <div className="stage-card-modern stage-2-glow highlight-card">
          <div className="stage-badge-top">Rational Stage</div>
          <div className="icon-wrapper s2">
            <FaBalanceScale />
          </div>
          <h4>Stage II: Diminishing Returns</h4>
          <p className="stage-desc">
            TP increases at a diminishing rate.
            <strong> MP falls but is positive</strong>.
          </p>
          <ul className="stage-features">
            <li>✅ Optimal combination of factors</li>
            <li>✅ Total output hits MAX</li>
            <li>🎯 Producer operates here</li>
          </ul>
        </div>

        {/* Stage III */}
        <div className="stage-card-modern stage-3-glow">
          <div className="icon-wrapper s3">
            <FaExclamationTriangle />
          </div>
          <h4>Stage III: Negative Returns</h4>
          <p className="stage-desc">
            TP starts falling.
            <strong> MP becomes negative</strong>.
          </p>
          <ul className="stage-features">
            <li>❌ Overcrowding of variable factor</li>
            <li>❌ Zero management coordination</li>
            <li>❌ Total output declines</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StagesOfProduction;
