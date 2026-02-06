import React from 'react';
import { FaEye, FaBrain, FaBalanceScale, FaCheckCircle, FaRuler, FaHeading, FaTable } from 'react-icons/fa';

const DiagramIntro = () => {
    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title">WHY DIAGRAMS?</h2>
            <p className="stats-subtitle">"A picture is worth a thousand words."</p>

            {/* Benefits Cards */}
            <div className="stats-grid-3">
                <div className="stats-card">
                    <div style={{ color: '#ec4899', fontSize: '2rem', marginBottom: '10px' }}><FaEye /></div>
                    <h3 className="stats-card-heading">Attractive</h3>
                    <p>Diagrams are visually appealing and reading them saves time compared to tables.</p>
                </div>
                <div className="stats-card">
                    <div style={{ color: '#8b5cf6', fontSize: '2rem', marginBottom: '10px' }}><FaBrain /></div>
                    <h3 className="stats-card-heading">Memorable</h3>
                    <p>Visual information is retained in memory for a longer period than raw figures.</p>
                </div>
                <div className="stats-card">
                    <div style={{ color: '#10b981', fontSize: '2rem', marginBottom: '10px' }}><FaBalanceScale /></div>
                    <h3 className="stats-card-heading">Comparable</h3>
                    <p>They facilitate quick comparison between different datasets at a glance.</p>
                </div>
            </div>

            <h3 className="stats-title" style={{ marginTop: '50px' }}>GENERAL RULES FOR CONSTRUCTION</h3>
            <div style={{ background: '#0f172a', padding: '30px', borderRadius: '15px', border: '1px solid #334155' }}>
                <div className="stats-grid-2">

                    <RuleItem icon={<FaHeading />} title="1. Proper Title" desc="Every diagram must have a sequential number, a clear title, and the time period it refers to." />
                    <RuleItem icon={<FaRuler />} title="2. Proper Scale" desc="Scale must be chosen to fit the paper size. Mention 1cm = 100 units clearly." />
                    <RuleItem icon={<FaCheckCircle />} title="3. Index (Legend)" desc="Essential when using multiple colors. Explains what each shade/pattern represents." />
                    <RuleItem icon={<FaTable />} title="4. Source Note" desc="Always verify credibility by mentioning the data source at the bottom." />
                    <RuleItem icon={<FaCheckCircle />} title="5. Simplicity" desc="Avoid overcrowding. A diagram should be self-explanatory and neat." />
                    <RuleItem icon={<FaCheckCircle />} title="6. Choice of Technique" desc="Use Bar Diagrams for comparisons and Pie Charts for proportional breakdowns." />

                </div>
            </div>

            <div className="stats-badge warning" style={{ marginTop: '30px' }}>
                <strong>Note:</strong> Diagrams are an <em>approximation</em>. For precise analysis, tables are preferred.
            </div>
        </div>
    );
};

// Helper Sub-component
const RuleItem = ({ icon, title, desc }) => (
    <div style={{ display: 'flex', gap: '15px', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
        <div style={{ fontSize: '1.5rem', color: 'var(--stats-gold)' }}>{icon}</div>
        <div>
            <h4 style={{ color: '#fff', marginBottom: '5px' }}>{title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.4' }}>{desc}</p>
        </div>
    </div>
);

export default DiagramIntro;
