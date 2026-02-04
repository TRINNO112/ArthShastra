import React from 'react';

const ImportantTerms = () => {
    return (
        <div className="stats-section">
            <h2 className="stats-title" style={{ fontSize: '2rem' }}>IMPORTANT TERMS</h2>
            <p className="stats-subtitle">Key Vocabulary for Data Collection</p>

            <div className="stats-grid-2">
                {/* Investigator */}
                <div className="stats-definition">
                    <h4 style={{ color: 'var(--stats-primary-light)', marginBottom: '10px' }}>Investigator</h4>
                    <p className="stats-definition-text">
                        The person who plans and conducts the statistical enquiry. They are responsible for the entire process.
                    </p>
                </div>

                {/* Enumerator */}
                <div className="stats-definition">
                    <h4 style={{ color: 'var(--stats-secondary-light)', marginBottom: '10px' }}>Enumerator</h4>
                    <p className="stats-definition-text">
                        A person helping the investigator in field work. They actually go to the field to collect data from informants.
                    </p>
                </div>

                {/* Respondent */}
                <div className="stats-definition">
                    <h4 style={{ color: '#fbbf24', marginBottom: '10px' }}>Respondent</h4>
                    <p className="stats-definition-text">
                        The person from whom the statistical information is collected. Also known as the <em>Informant</em>.
                    </p>
                </div>

                {/* Survey */}
                <div className="stats-definition">
                    <h4 style={{ color: '#c084fc', marginBottom: '10px' }}>Survey</h4>
                    <p className="stats-definition-text">
                        A method of gathering information from a sample of people, usually with the intention of generalizing the results to a larger population.
                    </p>
                </div>
            </div>

            {/* Relationship Chain */}
            <div className="stats-card" style={{ textAlign: 'center' }}>
                <h3 className="stats-card-heading" style={{ justifyContent: 'center' }}>Data Flow Chain</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ padding: '10px 20px', background: 'var(--stats-bg-alt)', borderRadius: '8px', border: '1px solid var(--stats-border)' }}>
                        Investigator
                        <div style={{ fontSize: '0.8rem', color: 'var(--stats-text-muted)' }}>(Plans)</div>
                    </div>
                    <div style={{ color: 'var(--stats-primary)', fontSize: '1.5rem' }}>→</div>
                    <div style={{ padding: '10px 20px', background: 'var(--stats-bg-alt)', borderRadius: '8px', border: '1px solid var(--stats-border)' }}>
                        Enumerator
                        <div style={{ fontSize: '0.8rem', color: 'var(--stats-text-muted)' }}>(Collects)</div>
                    </div>
                    <div style={{ color: 'var(--stats-primary)', fontSize: '1.5rem' }}>→</div>
                    <div style={{ padding: '10px 20px', background: 'var(--stats-bg-alt)', borderRadius: '8px', border: '1px solid var(--stats-border)' }}>
                        Respondent
                        <div style={{ fontSize: '0.8rem', color: 'var(--stats-text-muted)' }}>(Answers)</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImportantTerms;
