import React, { useState } from 'react';
import { FaProjectDiagram } from 'react-icons/fa';
import '../../css/lessons.css';

const TRMRRelationship = () => {
    const [phase, setPhase] = useState(1);

    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson text-blue-400">Analysis</span>
                <h2 className="section-title-lesson">Relationship between TR and MR</h2>
                <p className="section-subtitle-lesson">Explaining the 3 Phases of Revenue.</p>
            </div>

            <div className="phase-grid">

                {/* Interactive Controls */}
                <div className="flex flex-col gap-4">
                    <button
                        className={`phase-btn ${phase === 1 ? 'active border-green-400' : 'inactive'}`}
                        style={{ borderLeft: phase === 1 ? '4px solid #00ff88' : '' }}
                        onClick={() => setPhase(1)}
                    >
                        <h4 className="text-green-400 font-bold mb-1">Phase 1: MR {'>'} 0</h4>
                        <p className="text-sm text-gray-300 m-0">TR Increases</p>
                    </button>
                    <button
                        className={`phase-btn ${phase === 2 ? 'active border-gold' : 'inactive'}`}
                        style={{ borderLeft: phase === 2 ? '4px solid #ffd700' : '' }}
                        onClick={() => setPhase(2)}
                    >
                        <h4 className="text-gold font-bold mb-1">Phase 2: MR = 0</h4>
                        <p className="text-sm text-gray-300 m-0">TR is Maximum</p>
                    </button>
                    <button
                        className={`phase-btn ${phase === 3 ? 'active border-red-400' : 'inactive'}`}
                        style={{ borderLeft: phase === 3 ? '4px solid #ff6b6b' : '' }}
                        onClick={() => setPhase(3)}
                    >
                        <h4 className="text-red-400 font-bold mb-1">Phase 3: MR {'<'} 0</h4>
                        <p className="text-sm text-gray-300 m-0">TR Falls</p>
                    </button>
                </div>

                {/* Visual Explanation */}
                <div className="content-card phase-visual">
                    <FaProjectDiagram
                        className="phase-icon"
                        style={{ color: phase === 1 ? '#00ff88' : phase === 2 ? '#ffd700' : '#ff6b6b' }}
                    />

                    {phase === 1 && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-white mb-4">Phase 1: Increasing Returns</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                As long as Marginal Revenue is <span className="text-green-400 font-bold">Positive</span>,
                                every additional unit sold adds to the total.
                                Thus, <span className="text-cyan-400 font-bold">Total Revenue Increases</span>.
                            </p>
                        </div>
                    )}

                    {phase === 2 && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-white mb-4">Phase 2: Maximum Point</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                When Marginal Revenue hits <span className="text-gold font-bold">Zero</span>,
                                no more revenue is added by selling extra units.
                                At this point, <span className="text-cyan-400 font-bold">Total Revenue is Maximum</span>.
                            </p>
                        </div>
                    )}

                    {phase === 3 && (
                        <div className="animate-fade-in">
                            <h3 className="text-xl font-bold text-white mb-4">Phase 3: Diminishing Returns</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                When Marginal Revenue becomes <span className="text-red-400 font-bold">Negative</span>,
                                selling more units actually reduces the total earnings.
                                Thus, <span className="text-cyan-400 font-bold">Total Revenue Starts Falling</span>.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};
export default TRMRRelationship;
