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

            <div className="phase-grid-layout">

                {/* Interactive Controls */}
                <div className="flex flex-col gap-4">
                    <button
                        className={`phase-btn-premium ${phase === 1 ? 'active' : ''}`}
                        style={phase === 1 ? { borderColor: '#00ff88', borderLeftWidth: '4px' } : {}}
                        onClick={() => setPhase(1)}
                    >
                        <h4 className="font-bold mb-2 text-lg" style={{ color: '#00ff88' }}>Phase 1: MR {'>'} 0</h4>
                        <p className="text-sm text-gray-300 m-0">As long as Marginal Revenue is positive, adding it increases Total Revenue.</p>
                    </button>

                    <button
                        className={`phase-btn-premium ${phase === 2 ? 'active' : ''}`}
                        style={phase === 2 ? { borderColor: '#ffd700', borderLeftWidth: '4px' } : {}}
                        onClick={() => setPhase(2)}
                    >
                        <h4 className="font-bold mb-2 text-lg" style={{ color: '#ffd700' }}>Phase 2: MR = 0</h4>
                        <p className="text-sm text-gray-300 m-0">When Marginal Revenue hits zero, Total Revenue stops rising and hits its peak.</p>
                    </button>

                    <button
                        className={`phase-btn-premium ${phase === 3 ? 'active' : ''}`}
                        style={phase === 3 ? { borderColor: '#ff6b6b', borderLeftWidth: '4px' } : {}}
                        onClick={() => setPhase(3)}
                    >
                        <h4 className="font-bold mb-2 text-lg" style={{ color: '#ff6b6b' }}>Phase 3: MR {'<'} 0</h4>
                        <p className="text-sm text-gray-300 m-0">When Marginal Revenue is negative, it drags down the Total Revenue.</p>
                    </button>
                </div>

                {/* Visual Explanation */}
                <div className="phase-visual-premium">
                    <FaProjectDiagram
                        className="phase-icon"
                        style={{ color: phase === 1 ? '#00ff88' : phase === 2 ? '#ffd700' : '#ff6b6b', transition: 'color 0.5s' }}
                    />

                    {phase === 1 && (
                        <div className="animate-fade-in content-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Phase 1: Increasing Returns</h3>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md mx-auto">
                                "Every new sale brings <span className="text-green-400 font-bold">Positive Cash</span>."
                                <br /><br />
                                <span className="text-cyan-400 font-bold text-xl">TR ↑ Increases</span>
                            </p>
                        </div>
                    )}

                    {phase === 2 && (
                        <div className="animate-fade-in content-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Phase 2: Maximum Point</h3>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md mx-auto">
                                "The last sale added <span className="text-gold font-bold">Zero Value</span>."
                                <br /><br />
                                <span className="text-cyan-400 font-bold text-xl">TR is @ MAX</span>
                            </p>
                        </div>
                    )}

                    {phase === 3 && (
                        <div className="animate-fade-in content-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Phase 3: Diminishing Returns</h3>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-md mx-auto">
                                "Selling more actually <span className="text-red-400 font-bold">Loses Money</span>."
                                <br /><br />
                                <span className="text-cyan-400 font-bold text-xl">TR ↓ Falls</span>
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};
export default TRMRRelationship;
