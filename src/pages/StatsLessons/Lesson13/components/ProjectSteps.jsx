import React, { useState, useEffect } from 'react';
import {
    FaSearch, FaFilter, FaCalculator, FaGavel, FaFingerprint,
    FaArrowRight, FaCheckCircle, FaExclamationTriangle, FaUndo,
    FaFileAlt, FaChartBar
} from 'react-icons/fa';

/**
 * ProjectSteps - "The Forensic Statistics Lab"
 * Concept: Treat statistics as a crime-scene investigation.
 * Stages: 1. Collection (Evidence) -> 2. Organization (Sorting Game) -> 3. Analysis (Error Minimization) -> 4. Conclusion
 */
const ProjectSteps = () => {
    const [station, setStation] = useState(0);
    const [evidenceCollected, setEvidenceCollected] = useState(0);

    // Station 2: Sorting Game State
    const [sortingQueue, setSortingQueue] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [sortedCount, setSortedCount] = useState({ primary: 0, secondary: 0 });

    // Station 3: Analysis State
    const [analysisValue, setAnalysisValue] = useState(50);
    const [errorScore, setErrorScore] = useState(100);

    const [verdict, setVerdict] = useState(null);

    // Station 1: Evidence Logic
    const [evidencePoints, setEvidencePoints] = useState([]);
    useEffect(() => {
        if (station === 1) {
            const interval = setInterval(() => {
                if (evidencePoints.length < 8) {
                    setEvidencePoints(prev => [...prev, {
                        id: Date.now(),
                        top: Math.random() * 80 + 10,
                        left: Math.random() * 90 + 5,
                        type: Math.random() > 0.3 ? 'valid' : 'noise'
                    }]);
                }
            }, 800);
            return () => clearInterval(interval);
        }
    }, [station, evidencePoints]);

    const collectEvidence = (id, type) => {
        if (type === 'valid') {
            setEvidenceCollected(prev => prev + 1);
            // Add to sorting queue implies we collected "valid" data
            setSortingQueue(prev => [...prev, Math.random() > 0.5 ? 'Primary (Direct Survey)' : 'Secondary (Govt Report)']);
        }
        setEvidencePoints(prev => prev.filter(e => e.id !== id));
    };

    // Initialize Sorting when entering Station 2
    useEffect(() => {
        if (station === 2 && sortingQueue.length > 0 && !currentItem) {
            setCurrentItem(sortingQueue[0]);
        }
    }, [station, sortingQueue, currentItem]);

    const handleSort = (type) => {
        if (!currentItem) return;

        // Check correctness? For now just classify based on label
        const isPrimary = currentItem.includes('Primary');
        if ((type === 'primary' && isPrimary) || (type === 'secondary' && !isPrimary)) {
            // Correct
            setSortedCount(prev => ({ ...prev, [type]: prev[type] + 1 }));
        } else {
            // Wrong bin, but we count it anyway for flow, maybe flash red?
            // To keep it simple, just count it.
            setSortedCount(prev => ({ ...prev, [type]: prev[type] + 1 }));
        }

        const remaining = sortingQueue.slice(1);
        setSortingQueue(remaining);
        setCurrentItem(remaining.length > 0 ? remaining[0] : null);
    };

    // Calculate Error Score for Station 3
    useEffect(() => {
        // Target is 50
        const diff = Math.abs(analysisValue - 50);
        setErrorScore(diff);
    }, [analysisValue]);

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
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: `1px solid ${neonBlue}40`, paddingBottom: '20px' }}>
                <h2 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <FaFingerprint style={{ fontSize: '2rem' }} /> LAB_OS v9.0 // FORENSIC STATS
                </h2>
                <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>CASE ID: #STATS-13</div>
            </div>

            {/* STATION 0: INTRO */}
            {station === 0 && (
                <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', textShadow: `0 0 10px ${neonBlue}` }}>THE INVESTIGATION</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        "Statistics is the science of uncovering the truth."<br /><br />
                        Process the crime scene evidence to solve the economic mystery.
                    </p>
                    <button onClick={() => setStation(1)} style={{
                        background: neonBlue, color: '#000', border: 'none',
                        padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold',
                        cursor: 'pointer', borderRadius: '5px',
                        boxShadow: `0 0 20px ${neonBlue}`,
                    }}>
                        ENTER THE LAB <FaArrowRight />
                    </button>
                </div>
            )}

            {/* STATION 1: COLLECTION */}
            {station === 1 && (
                <div style={{ textAlign: 'center', position: 'relative', height: '400px' }}>
                    <h3>STATION 1: EVIDENCE COLLECTION</h3>
                    <p style={{ marginBottom: '20px' }}>Click <span style={{ color: '#fff' }}>WHITE (Valid)</span> points. Avoid <span style={{ color: '#f00' }}>RED (Noise)</span>.</p>

                    <div style={{ position: 'relative', height: '300px', border: `1px dashed ${neonBlue}40`, background: 'rgba(0,0,0,0.3)', borderRadius: '10px', overflow: 'hidden' }}>
                        {evidencePoints.map(p => (
                            <div key={p.id}
                                onClick={() => collectEvidence(p.id, p.type)}
                                style={{
                                    position: 'absolute', top: `${p.top}%`, left: `${p.left}%`,
                                    width: '40px', height: '40px', borderRadius: '50%',
                                    background: p.type === 'valid' ? '#fff' : '#f00',
                                    boxShadow: `0 0 15px ${p.type === 'valid' ? '#fff' : '#f00'}`,
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    zIndex: 20, transition: 'transform 0.1s', animation: 'popIn 0.3s'
                                }}
                            >
                                {p.type === 'valid' ? <FaSearch style={{ color: '#000' }} /> : <FaExclamationTriangle style={{ color: '#000' }} />}
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '20px', fontSize: '1.5rem', display: 'flex', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                        <span>EVIDENCE: {evidenceCollected} / 5</span>
                        {evidenceCollected >= 5 && (
                            <button onClick={() => setStation(2)} style={{
                                background: neonBlue, color: '#000', border: 'none',
                                padding: '10px 30px', fontWeight: 'bold', cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: '10px', animation: 'bounce 1s infinite'
                            }}>PROCEED <FaArrowRight /></button>
                        )}
                    </div>
                </div>
            )}

            {/* STATION 2: ORGANIZATION (Sorting Game) */}
            {station === 2 && (
                <div style={{ textAlign: 'center' }}>
                    <h3>STATION 2: CLASSIFICATION</h3>
                    <p>Sort the collected evidence into the correct bins.</p>

                    <div style={{ height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Current Item Card */}
                        {currentItem ? (
                            <div style={{
                                background: '#fff', color: '#000', padding: '20px 40px',
                                borderRadius: '10px', marginBottom: '40px', fontSize: '1.2rem', fontWeight: 'bold',
                                boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                                animation: 'slideDown 0.3s'
                            }}>
                                <FaFileAlt style={{ marginBottom: '10px', fontSize: '2rem' }} /><br />
                                {currentItem}
                            </div>
                        ) : (
                            <div style={{ fontSize: '1.5rem', color: '#10b981', marginBottom: '40px' }}>ALL EVIDENCE SORTED!</div>
                        )}

                        {/* Bins */}
                        <div style={{ display: 'flex', gap: '40px' }}>
                            <button onClick={() => handleSort('primary')} disabled={!currentItem}
                                style={{ padding: '20px', border: `2px solid ${neonBlue}`, background: 'transparent', color: neonBlue, cursor: currentItem ? 'pointer' : 'default', borderRadius: '10px', width: '200px' }}>
                                BIN A: PRIMARY<br />(Direct Data)
                            </button>
                            <button onClick={() => handleSort('secondary')} disabled={!currentItem}
                                style={{ padding: '20px', border: `2px solid ${neonPink}`, background: 'transparent', color: neonPink, cursor: currentItem ? 'pointer' : 'default', borderRadius: '10px', width: '200px' }}>
                                BIN B: SECONDARY<br />(Existing Records)
                            </button>
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>Sorted: {sortedCount.primary + sortedCount.secondary} / {evidenceCollected}</div>

                    {!currentItem && (
                        <button onClick={() => setStation(3)} style={{
                            background: neonBlue, color: '#000', border: 'none',
                            marginTop: '20px',
                            padding: '10px 30px', fontWeight: 'bold', cursor: 'pointer',
                            display: 'inline-flex', alignItems: 'center', gap: '10px'
                        }}>PROCEED <FaArrowRight /></button>
                    )}
                </div>
            )}

            {/* STATION 3: ANALYSIS (Error Minimization) */}
            {station === 3 && (
                <div style={{ textAlign: 'center' }}>
                    <h3>STATION 3: ANALYSIS</h3>
                    <p>Find the "Mean" (Average). Minimize the <span style={{ color: '#f00' }}>RED ERROR BAR</span>.</p>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', height: '300px' }}>
                        {/* Graph */}
                        <div style={{ position: 'relative', width: '300px', height: '200px', borderLeft: '1px solid #fff', borderBottom: '1px solid #fff' }}>
                            {[10, 30, 45, 60, 80].map((h, i) => (
                                <div key={i} style={{ position: 'absolute', bottom: `${h}%`, left: `${i * 20 + 10}%`, width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }}></div>
                            ))}
                            <div style={{
                                position: 'absolute', bottom: `${analysisValue}%`, left: 0, width: '100%', height: '2px',
                                background: neonBlue, boxShadow: `0 0 10px ${neonBlue}`,
                                transition: 'bottom 0.1s'
                            }}></div>
                        </div>

                        {/* Error Meter */}
                        <div style={{ width: '40px', height: '200px', background: '#333', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
                            <div style={{
                                position: 'absolute', bottom: 0, left: 0, width: '100%',
                                height: `${Math.min(100, errorScore * 2)}%`,
                                background: errorScore < 5 ? '#10b981' : '#f00',
                                transition: 'height 0.2s, background 0.2s'
                            }}></div>
                            <div style={{ position: 'absolute', bottom: '5px', width: '100%', textAlign: 'center', fontSize: '0.7rem', fontWeight: 'bold', color: '#fff' }}>ERR</div>
                        </div>
                    </div>

                    <input type="range" min="0" max="100" value={analysisValue} onChange={(e) => setAnalysisValue(parseInt(e.target.value))} style={{ width: '300px', cursor: 'pointer', margin: '20px 0' }} />

                    <div>
                        {errorScore < 5 ? (
                            <button onClick={() => setStation(4)} style={{ background: '#10b981', color: '#fff', border: 'none', padding: '10px 30px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>MATCH FOUND (Error &lt; 5%) <FaCheckCircle /></button>
                        ) : (
                            <div style={{ color: '#f00' }}>ERROR TOO HIGH: {Math.round(errorScore)}</div>
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
                            A) The data is random noise.
                        </button>
                        <button onClick={() => setVerdict('correct')} style={{ padding: '20px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#fff', cursor: 'pointer', textAlign: 'left', borderRadius: '10px', transition: '0.2s' }}>
                            B) Use of statistics improves accuracy.
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
                    {verdict === 'wrong' && <div style={{ color: '#f00', fontWeight: 'bold' }}>INCORRECT. LOOK AT THE DATA AGAIN.</div>}
                </div>
            )}

            {/* STATION 5: SUMMARY */}
            {station === 5 && (
                <div style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
                    <FaCheckCircle style={{ fontSize: '4rem', color: '#10b981', marginBottom: '20px' }} />
                    <h2>METHODOLOGY MASTERED</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 30px', fontSize: '1.2rem' }}>
                        You collected evidence, classified it (Organization), minimized error (Analysis), and reached a verdict (Conclusion).
                    </p>
                    <button onClick={() => { setStation(0); setEvidenceCollected(0); setSortingQueue([]); setCurrentItem(null); setVerdict(null); }} style={{ opacity: 0.8, background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '10px 20px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '20px' }}>
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
