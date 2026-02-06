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
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                    <RuleItem icon={<FaHeading />} title="Title" desc="Every diagram must have a clear, precise title at the top." />
                    <RuleItem icon={<FaRuler />} title="Proper Scale" desc="Choose a scale that fits the size of the paper. Frame the diagram centrally." />
                    <RuleItem icon={<FaCheckCircle />} title="Index / Legend" desc="If different colors/shades are used, an index must explain what they represent." />
                    <RuleItem icon={<FaTable />} title="Source Note" desc="Always mention where the data came from at the bottom." />
                    <RuleItem icon={<FaCheckCircle />} title="Simplicity" desc="Do not overcrowd. It should be as simple and self-explanatory as possible." />
                    <RuleItem icon={<FaCheckCircle />} title="Selection of Type" desc="Choose the right diagram (Bar vs Pie) based on the nature of data." />

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
