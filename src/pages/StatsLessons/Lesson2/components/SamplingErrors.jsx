import React from 'react';

const SamplingErrors = () => {
    return (
        <div className="stats-section">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>TYPES OF ERRORS</h2>
            <p className="stats-subtitle">Mistakes that can occur during data collection</p>

            <div className="stats-grid-2">
                {/* Sampling Errors */}
                <div className="stats-card" style={{ borderTop: '4px solid var(--stats-primary)' }}>
                    <h3 className="stats-card-heading primary">Sampling Errors</h3>
                    <p>
                        Errors that arise because we are studying a <strong>sample</strong> instead of the whole population. These are inherent to the sampling method.
                    </p>
                    <div className="stats-note info">
                        <strong>Cause:</strong> The sample selected is not perfectly representative of the population.
                    </div>
                    <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        Can be minimized by: Increase in sample size.
                    </p>
                </div>

                {/* Non-Sampling Errors */}
                <div className="stats-card" style={{ borderTop: '4px solid var(--stats-error)' }}>
                    <h3 className="stats-card-heading" style={{ color: 'var(--stats-error)', borderColor: 'var(--stats-error)' }}>Non-Sampling Errors</h3>
                    <p>
                        Errors that can occur in <strong>both</strong> Census and Sample surveys. These are more serious human errors.
                    </p>
                    <ul className="stats-list">
                        <li><strong>Measurement Error:</strong> Wrong recording of values.</li>
                        <li><strong>Non-Response Error:</strong> Respondent refuses to answer.</li>
                        <li><strong>Sampling Bias:</strong> Deliberately choosing favorable samples.</li>
                    </ul>
                </div>
            </div>

            {/* Error Formula */}
            <div className="stats-formula">
                Sampling Error = Estimated Value - True Value
            </div>

            {/* Bias vs Error */}
            <div className="stats-grid-2">
                <div className="stats-grid-item" style={{ background: 'linear-gradient(to right, rgba(239, 68, 68, 0.05), transparent)' }}>
                    <h4>Biased Errors</h4>
                    <p>Errors that occur systematically due to prejudice or faulty instruments (e.g., a weighing scale that always adds 1kg).</p>
                </div>
                <div className="stats-grid-item" style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.05), transparent)' }}>
                    <h4>Unbiased Errors</h4>
                    <p>Random errors that cancel each other out in the long run (e.g., accidental over-estimation in one and under-estimation in another).</p>
                </div>
            </div>
        </div>
    );
};

export default SamplingErrors;
