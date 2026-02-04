import React from 'react';

const MethodsOfCollection = () => {
    return (
        <div className="stats-section">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>METHODS OF COLLECTION</h2>
            <p className="stats-subtitle">How do we gather Primary Data?</p>

            <div className="stats-grid-3">
                {/* Method 1 */}
                <div className="stats-grid-item primary">
                    <h4>Direct Personal Investigation</h4>
                    <p>Investigator personally contacts the informants and conducts face-to-face interviews.</p>
                    <div className="stats-note info" style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        <strong>Best for:</strong> Confidential, complex, or limited scope data.
                    </div>
                </div>

                {/* Method 2 */}
                <div className="stats-grid-item primary">
                    <h4>Indirect Oral Investigation</h4>
                    <p>Information is obtained not from the person concerned, but from "witnesses" or third parties.</p>
                    <div className="stats-note info" style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        <strong>Best for:</strong> Police enquiries, sensitive issues (drug addiction).
                    </div>
                </div>

                {/* Method 3 */}
                <div className="stats-grid-item primary">
                    <h4>Information from Correspondents</h4>
                    <p>Local agents (correspondents) are appointed in different areas to send reports regularly.</p>
                    <div className="stats-note info" style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                        <strong>Best for:</strong> News agencies, price quotations.
                    </div>
                </div>
            </div>

            {/* Questionnaires */}
            <div className="stats-card">
                <h3 className="stats-card-heading secondary">Questionnaire Methods</h3>
                <p style={{ marginBottom: '20px' }}>
                    A list of questions related to the enquiry is prepared. This can be executed in two ways:
                </p>

                <div className="stats-grid-2">
                    <div className="stats-grid-item">
                        <h4>1. Mailed Questionnaire</h4>
                        <p>Questionnaires are sent by post/email with a request to fill and return.</p>
                        <ul className="stats-list">
                            <li><strong>Merit:</strong> Wide coverage, cheap, original.</li>
                            <li><strong>Demerit:</strong> Low response rate, only for literates.</li>
                        </ul>
                    </div>

                    <div className="stats-grid-item">
                        <h4>2. Enumerator Method</h4>
                        <p>Enumerators (trained staff) go to informants with the questionnaire and fill it themselves.</p>
                        <ul className="stats-list">
                            <li><strong>Merit:</strong> Accurate, works for illiterates.</li>
                            <li><strong>Demerit:</strong> Expensive, time consuming (e.g., Census).</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Qualities of Good Questionnaire */}
            <div className="stats-card">
                <h3 className="stats-card-heading">Qualities of a Good Questionnaire</h3>
                <ul className="stats-list">
                    <li><strong>Limited Questions:</strong> Should not be too long (-&gt; boredom).</li>
                    <li><strong>Simple & Clear:</strong> No ambiguity or complex math.</li>
                    <li><strong>Proper Order:</strong> Logical sequence of questions.</li>
                    <li><strong>No Personal Questions:</strong> Avoid hurting sentiments.</li>
                    <li><strong>Cross Verification:</strong> Questions should allow checking truthfulness.</li>
                </ul>
            </div>

        </div>
    );
};

export default MethodsOfCollection;
