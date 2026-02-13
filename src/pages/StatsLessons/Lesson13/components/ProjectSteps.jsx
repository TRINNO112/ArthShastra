import React, { useState, useEffect } from 'react';
import {
    FaSearch, FaFilter, FaCalculator, FaGavel, FaFingerprint,
    FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaUndo
} from 'react-icons/fa';

/**
 * ProjectSteps - "The Forensic Statistics Lab"
 * Concept: Treat statistics as a crime-scene investigation.
 * Stages: 1. Collection (Evidence) -> 2. Organization (Sorting) -> 3. Analysis (Pattern) -> 4. Conclusion (Verdict)
 */
const ProjectSteps = () => {
    const [station, setStation] = useState(0); // 0: Intro, 1: Collect, 2: Sort, 3: Analyze, 4: Verdict, 5: Summary
    const [evidenceCollected, setEvidenceCollected] = useState(0);
    const [sortedCount, setSortedCount] = useState({ primary: 0, secondary: 0 });
    const [analysisValue, setAnalysisValue] = useState(50);
    const [verdict, setVerdict] = useState(null); // 'guilty', 'innocent'

    // Station 1: Evidence Logic
    const [evidencePoints, setEvidencePoints] = useState([]);
    useEffect(() => {
        if (station === 1) {
            const interval = setInterval(() => {
                if (evidencePoints.length < 10) {
                    setEvidencePoints(prev => [...prev, {
                        id: Date.now(),
                        top: Math.random() * 80 + 10,
                        left: Math.random() * 90 + 5,
                        type: Math.random() > 0.4 ? 'valid' : 'noise' // Slightly more valid ones
                    }]);
                }
            }, 800);
            return () => clearInterval(interval);
        }
    }, [station, evidencePoints]);

    const collectEvidence = (id, type) => {
        if (type === 'valid') {
            setEvidenceCollected(prev => prev + 1);
        }
        setEvidencePoints(prev => prev.filter(e => e.id !== id));
    };

    // Theme Colors
    const neonBlue = "#00f0ff";
    const neonPink = "#ff0099";
    const darkBg = "#0a0a12";

    return (
        <div style={{
            width: '100%',
            minHeight: '600px',
            background: darkBg,
            color: neonBlue,
            fontFamily: "'Courier New', Courier, monospace",
            borderRadius: '20px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
            border: `1px solid ${neonBlue}40`,
            boxShadow: `0 0 20px ${neonBlue}10`
        }}>
            {/* Header: CRT Screen Effect */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '10px',
                background: 'rgba(0, 240, 255, 0.1)',
                animation: 'scanline 5s linear infinite',
                pointerEvents: 'none',
                zIndex: 10
            }}></div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: `1px solid ${neonBlue}40`, paddingBottom: '20px' }}>
                <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <FaFingerprint style={{ fontSize: '2rem' }} /> LAB_OS v9.0 // FORENSIC STATS
                </h2>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>CASE ID: #STATS-13</div>
            </div>

            {/* STATION 0: INTRO */}
            {station === 0 && (
                <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px', textShadow: `0 0 10px ${neonBlue}` }}>THE INVESTIGATION</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        "Statistics is the science of uncovering the truth from the chaos of raw data."<br /><br />
                        Detectives use 4 steps to solve a crime. Economists use the same 4 steps to solve a problem.
                    </p>
                    <button onClick={() => setStation(1)} style={{
                        background: neonBlue, color: '#000', border: 'none',
                        padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold',
                        cursor: 'pointer', borderRadius: '5px',
                        boxShadow: `0 0 20px ${neonBlue}`,
                        zIndex: 20, position: 'relative'
                    }}>
                        ENTER THE LAB <FaArrowRight />
                    </button>
                    <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '40px', opacity: 0.5 }}>
                        <div>1. COLLECTION</div>
                        <div>2. ORGANIZATION</div>
                        <div>3. ANALYSIS</div>
                        <div>4. CONCLUSION</div>
                    </div>
                </div>
            )}

            {/* STATION 1: COLLECTION (Clicker Game) */}
            {station === 1 && (
                <div style={{ textAlign: 'center', position: 'relative', height: '400px' }}>
                    <h3>STATION 1: EVIDENCE COLLECTION</h3>
                    <p style={{ marginBottom: '20px' }}>Click the <span style={{ color: '#fff', fontWeight: 'bold' }}>WHITE</span> data points to collect them.</p>

                    <div style={{
                        position: 'relative', height: '300px', border: `1px dashed ${neonBlue}40`,
                        background: 'rgba(0,0,0,0.3)', borderRadius: '10px', overflow: 'hidden',
                        zIndex: 15
                    }}>
                        {evidencePoints.map(p => (
                            <div key={p.id}
                                onClick={() => collectEvidence(p.id, p.type)}
                                style={{
                                    position: 'absolute',
                                    top: `${p.top}%`, left: `${p.left}%`,
                                    width: '40px', height: '40px', // Larger hit area
                                    borderRadius: '50%',
                                    background: p.type === 'valid' ? '#fff' : '#f00',
                                    boxShadow: `0 0 15px ${p.type === 'valid' ? '#fff' : '#f00'}`,
                                    cursor: 'pointer',
                                    animation: 'popIn 0.3s',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    zIndex: 20 // Ensure clickable
                                }}
                            >
                                {p.type === 'valid' ? <FaSearch style={{ color: '#000', fontSize: '0.8rem' }} /> : <FaExclamationTriangle style={{ color: '#000', fontSize: '0.8rem' }} />}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '20px', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                        <span>EVIDENCE: {evidenceCollected} / 5</span>
                        {/* Button Appears Immediately when 5 collected */}
                        {evidenceCollected >= 5 && (
                            <button onClick={() => setStation(2)} style={{
                                background: neonBlue, color: '#000', border: 'none',
                                padding: '10px 30px', fontWeight: 'bold', cursor: 'pointer',
                                animation: 'bounce 1s infinite',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                zIndex: 30
                            }}>PROCEED <FaArrowRight /></button>
                        )}
                    </div>
                </div>
            )}

            {/* STATION 2: ORGANIZATION (Sorting) */}
            {station === 2 && (
                <div style={{ textAlign: 'center' }}>
                    <h3>STATION 2: ORGANIZATION</h3>
                    <p>We have collected raw data. Now we must sort it.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', margin: '40px 0' }}>
                        <div onClick={() => setSortedCount(p => ({ ...p, primary: p.primary + 1 }))}
                            style={{ padding: '40px', border: `2px solid ${neonBlue}`, cursor: 'pointer', borderRadius: '10px', boxShadow: `inset 0 0 20px ${neonBlue}20`, background: 'rgba(0, 240, 255, 0.05)' }}>
                            <h4>PRIMARY DATA</h4>
                            <div style={{ fontSize: '2rem' }}>{sortedCount.primary}</div>
                            <small>(Click to Sort)</small>
                        </div>
                        <div onClick={() => setSortedCount(p => ({ ...p, secondary: p.secondary + 1 }))}
                            style={{ padding: '40px', border: `2px solid ${neonPink}`, cursor: 'pointer', borderRadius: '10px', color: neonPink, boxShadow: `inset 0 0 20px ${neonPink}20`, background: 'rgba(255, 0, 153, 0.05)' }}>
                            <h4>SECONDARY DATA</h4>
                            <div style={{ fontSize: '2rem' }}>{sortedCount.secondary}</div>
                            <small>(Click to Sort)</small>
                        </div>
                    </div>

                    {(sortedCount.primary + sortedCount.secondary) >= 5 && (
                        <button onClick={() => setStation(3)} style={{
                            background: neonBlue, color: '#000', border: 'none',
                            padding: '10px 30px', fontWeight: 'bold', cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '10px'
                        }}>PROCEED <FaArrowRight /></button>
                    )}
                </div>
            )}

            {/* STATION 3: ANALYSIS (Pattern Matching) */}
            {station === 3 && (
                <div style={{ textAlign: 'center' }}>
                    <h3>STATION 3: ANALYSIS</h3>
                    <p>Find the "Mean" trend. Adjust the slider to match the pattern.</p>

                    <div style={{ position: 'relative', width: '300px', height: '200px', margin: '40px auto', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>
                        {/* Fake Plot Points */}
                        {[10, 30, 45, 60, 80].map((h, i) => (
                            <div key={i} style={{ position: 'absolute', bottom: `${h}%`, left: `${i * 20 + 10}%`, width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }}></div>
                        ))}
                        {/* User Line */}
                        <div style={{
                            position: 'absolute', bottom: `${analysisValue}%`, left: 0, width: '100%', height: '2px',
                            background: neonBlue, boxShadow: `0 0 10px ${neonBlue}`,
                            transition: 'bottom 0.1s'
                        }}></div>
                    </div>

                    <input type="range" min="0" max="100" value={analysisValue} onChange={(e) => setAnalysisValue(parseInt(e.target.value))} style={{ width: '300px', cursor: 'pointer' }} />

                    <div style={{ marginTop: '20px', minHeight: '50px' }}>
                        {(analysisValue > 40 && analysisValue < 60) ? (
                            <button onClick={() => setStation(4)} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '10px 30px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>MATCH FOUND <FaCheckCircle /></button>
                        ) : (
                            <div style={{ color: '#f00' }}>ALIGN THE BLUE LINE TO THE CENTER</div>
                        )}
                    </div>
                </div>
            )}

            {/* STATION 4: CONCLUSION (Verdict) */}
            {station === 4 && (
                <div style={{ textAlign: 'center' }}>
                    <h3>STATION 4: THE VERDICT</h3>
                    <p>Based on the analysis, what is the conclusion?</p>

                    <div style={{ display: 'grid', gap: '20px', maxWidth: '500px', margin: '40px auto' }}>
                        <button onClick={() => setVerdict('wrong')} style={{ padding: '20px', background: 'transparent', border: '1px solid #fff', color: '#fff', cursor: 'pointer', textAlign: 'left', borderRadius: '10px', transition: '0.2s' }}>
                            A) The data is inconclusive.
                        </button>
                        <button onClick={() => setVerdict('correct')} style={{ padding: '20px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#fff', cursor: 'pointer', textAlign: 'left', borderRadius: '10px', transition: '0.2s' }}>
                            B) Use of statistics improves decision accuracy by 40%.
                        </button>
                        <button onClick={() => setVerdict('wrong')} style={{ padding: '20px', background: 'transparent', border: '1px solid #fff', color: '#fff', cursor: 'pointer', textAlign: 'left', borderRadius: '10px', transition: '0.2s' }}>
                            C) Statistics is only for mathematicians.
                        </button>
                    </div>

                    {verdict === 'correct' && (
                        <div style={{ marginTop: '20px', animation: 'popIn 0.5s' }}>
                            <h2 style={{ color: '#10b981' }}>CASE SOLVED!</h2>
                            <button onClick={() => setStation(5)} style={{ background: neonBlue, color: '#000', border: 'none', padding: '15px 40px', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                                VIEW SUMMARY <FaGavel />
                            </button>
                        </div>
                    )}
                    {verdict === 'wrong' && <div style={{ color: '#f00', fontWeight: 'bold' }}>INCORRECT DEDUCTION. TRY AGAIN.</div>}
                </div>
            )}

            {/* STATION 5: SUMMARY */}
            {station === 5 && (
                <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
                    <FaCheckCircle style={{ fontSize: '4rem', color: '#10b981', marginBottom: '20px' }} />
                    <h2>METHODOLOGY MASTERED</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '1.2rem' }}>
                        You have successfully completed the 4 stages of statistical investigation.
                        By treating data like evidence, you ensure your economic policies are based on truth, not guesses.
                    </p>
                    <button onClick={() => { setStation(0); setEvidenceCollected(0); }} style={{ opacity: 0.8, background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '10px 20px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '20px' }}>
                        <FaUndo /> REPLAY SIMULATION
                    </button>
                </div>
            )}

            {/* Progress Bar */}
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: `${(station / 5) * 100}%`, height: '4px', background: neonBlue, transition: 'width 0.5s', boxShadow: `0 0 10px ${neonBlue}` }}></div>
        </div>
    );
};

export default ProjectSteps;
