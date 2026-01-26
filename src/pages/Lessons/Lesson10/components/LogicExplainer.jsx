import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHandHoldingUsd, FaStopCircle, FaArrowUp } from 'react-icons/fa';

const LogicExplainer = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 0,
            title: "Phase 1: MC < MR",
            icon: <FaArrowUp />,
            color: "cyan",
            content: "When Marginal Cost is less than Marginal Revenue, it means the cost of producing one more unit is LESS than the revenue gained from selling it. A rational producer will continue to produce more because each additional unit adds to the total profit."
        },
        {
            id: 1,
            title: "Phase 2: MC = MR (Equilibrium)",
            icon: <FaHandHoldingUsd />,
            color: "gold",
            content: "At this point, the cost of the last unit produced is exactly equal to the revenue from it. Total Profit is maximized here. There is no incentive to produce more (cost would exceed revenue) or less (profit would be missed)."
        },
        {
            id: 2,
            title: "Phase 3: MC > MR",
            icon: <FaStopCircle />,
            color: "purple", // Using purple instead of red for a premium look, or implied 'stop'
            content: "If production continues beyond equilibrium, the cost of additional units exceeds the revenue they generate. This reduces total profit. A rational producer would never operate in this zone."
        }
    ];

    return (
        <div className="section-container">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Rational Analysis</span>
                <h2 className="section-title-lesson">Why Equilibrium?</h2>
                <p className="section-subtitle-lesson">
                    Understanding the producer's mindset through cost-benefit analysis.
                </p>
            </div>

            <div className="phase-grid-layout">
                <div className="phase-list">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`phase-btn-premium ${activeStep === index ? 'active' : ''}`}
                            onClick={() => setActiveStep(index)}
                        >
                            <h4 style={{ color: `var(--neon-${step.color})`, marginBottom: '5px' }}>{step.title}</h4>
                            <p>{step.content}</p>
                        </div>
                    ))}
                </div>

                <div className="phase-visual-premium">
                    <div className={`phase-icon ${steps[activeStep].color}`} style={{ color: `var(--neon-${steps[activeStep].color})` }}>
                        {steps[activeStep].icon}
                    </div>
                    <h3 style={{ fontSize: '2rem', marginBottom: '15px', color: 'white' }}>
                        {activeStep === 0 ? "Keep Producing!" : activeStep === 1 ? "Stop Here!" : "Don't Go Here!"}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', margin: '0 auto' }}>
                        {activeStep === 0 && "Profit is still increasing with every new unit."}
                        {activeStep === 1 && "Maximum profit achieved. Golden Rule satisfied."}
                        {activeStep === 2 && "Each extra unit now eats into your profits."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogicExplainer;
