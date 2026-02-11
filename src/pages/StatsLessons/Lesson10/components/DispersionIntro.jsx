import React from 'react';
import { FaRulerHorizontal, FaChartLine, FaChartBar } from 'react-icons/fa';

const DispersionIntro = () => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            {/* Title */}
            <div className="stats-card" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 className="stats-title">MEASURES OF DISPERSION</h2>
                <p className="stats-subtitle">How Spread Out is the Data?</p>
            </div>

            {/* ═══ WHAT IS DISPERSION? ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading primary">
                    <FaRulerHorizontal /> What is Dispersion?
                </h3>
                <div className="stats-definition">
                    <p className="stats-definition-text">
                        In the previous chapter, you learned about <strong style={{ color: '#3b82f6' }}>Central Tendency</strong> — Mean, Median, and Mode — which tells us the "center" of data.
                    </p>
                    <p className="stats-definition-text" style={{ marginTop: '10px' }}>
                        But here's a problem: <strong style={{ color: '#fff' }}>two completely different datasets can have the exact same average!</strong>
                    </p>
                    <p className="stats-definition-text" style={{ marginTop: '10px' }}>
                        <strong style={{ color: '#10b981' }}>Dispersion</strong> solves this by measuring how <strong style={{ color: '#fff' }}>spread out</strong> the values are from the average.
                        Are most values close to the mean, or are they scattered far apart?
                    </p>
                </div>
            </div>

            {/* ═══ WHY AVERAGES ALONE AREN'T ENOUGH ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    Why Averages Alone Aren't Enough
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '20px' }}>
                    Imagine two students — both scored an average of 50 marks across 5 subjects.
                    But look at their individual marks:
                </p>

                <div className="stats-grid-2" style={{ margin: 0 }}>
                    {/* Student A */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ color: '#fff', fontWeight: '700', marginBottom: '10px', fontSize: '1.05rem' }}>Student A (Consistent)</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '10px' }}>
                            {[48, 49, 50, 51, 52].map((v, i) => (
                                <div key={i} style={{
                                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 'var(--stats-radius)', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981',
                                    border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.85rem', fontWeight: '600'
                                }}>{v}</div>
                            ))}
                        </div>
                        <div style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: '600' }}>
                            Mean = 50 &nbsp; | &nbsp; Range = 4 &nbsp; (Low Spread)
                        </div>
                    </div>
                    {/* Student B */}
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ color: '#fff', fontWeight: '700', marginBottom: '10px', fontSize: '1.05rem' }}>Student B (Inconsistent)</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '10px' }}>
                            {[20, 35, 50, 70, 75].map((v, i) => (
                                <div key={i} style={{
                                    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 'var(--stats-radius)', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444',
                                    border: '1px solid rgba(239, 68, 68, 0.3)', fontSize: '0.85rem', fontWeight: '600'
                                }}>{v}</div>
                            ))}
                        </div>
                        <div style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: '600' }}>
                            Mean = 50 &nbsp; | &nbsp; Range = 55 &nbsp; (High Spread)
                        </div>
                    </div>
                </div>

                <div className="stats-note info" style={{ marginTop: '15px', marginBottom: 0 }}>
                    Both students have <strong>the same Mean (50)</strong>, but Student A is much more <strong>consistent</strong>.
                    Student B's marks jump all over the place. <strong>Dispersion measures this difference!</strong>
                </div>
            </div>

            {/* ═══ REAL-WORLD IMPORTANCE ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#3b82f6' }}>
                    Why Dispersion Matters in Real Life
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '15px' }}>
                    Think about these examples:
                </p>
                <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                        {
                            emoji: '🏏',
                            title: 'Cricket — "Who is the better batsman?"',
                            text: 'Player A averages 40 runs (scores: 38, 39, 40, 41, 42). Player B also averages 40 (scores: 0, 10, 80, 60, 50). Who would you pick for a final? Player A — because he is consistent!'
                        },
                        {
                            emoji: '🌡️',
                            title: 'Temperature — "Which city has better weather?"',
                            text: 'City A: average temp 25°C with daily variation of ±2°C. City B: average 25°C but swings from 10°C to 40°C. Same mean, but City A is far more livable.'
                        },
                        {
                            emoji: '📊',
                            title: 'Income Inequality',
                            text: 'If the average income of a country is ₹50,000, but some earn ₹5,000 and others earn ₹5,00,000, the data is highly dispersed — indicating inequality.'
                        }
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', border: '1px solid var(--stats-border)' }}>
                            <h4 style={{ color: '#fff', margin: '0 0 6px 0', fontSize: '0.95rem' }}>{item.emoji} {item.title}</h4>
                            <p style={{ color: 'var(--stats-text-muted)', margin: 0, fontSize: '0.85rem', lineHeight: '1.7' }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ═══ THE FOUR MEASURES ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading">
                    <FaChartBar /> The Four Measures of Dispersion (NCERT)
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '20px' }}>
                    NCERT prescribes four methods to measure how spread out data is. They go from <strong style={{ color: '#fff' }}>simplest to most powerful</strong>:
                </p>

                <div style={{ display: 'grid', gap: '15px' }}>
                    {/* 1. Range */}
                    <div style={{ padding: '18px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #f59e0b' }}>
                        <h4 style={{ color: '#f59e0b', margin: '0 0 8px 0', fontSize: '1rem' }}>1. Range</h4>
                        <p style={{ color: 'var(--stats-text)', margin: '0 0 10px 0', lineHeight: '1.7', fontSize: '0.9rem' }}>
                            The <strong style={{ color: '#fff' }}>simplest</strong> measure. Just subtract the smallest value from the largest value.
                            Easy to calculate, but it only looks at two extreme values and ignores everything in between.
                        </p>
                        <div className="stats-formula" style={{ margin: 0 }}>
                            Range = L - S
                        </div>
                    </div>

                    {/* 2. Quartile Deviation */}
                    <div style={{ padding: '18px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #3b82f6' }}>
                        <h4 style={{ color: '#3b82f6', margin: '0 0 8px 0', fontSize: '1rem' }}>2. Quartile Deviation (Q.D.)</h4>
                        <p style={{ color: 'var(--stats-text)', margin: '0 0 10px 0', lineHeight: '1.7', fontSize: '0.9rem' }}>
                            Better than Range because it ignores extreme values. It looks at the <strong style={{ color: '#fff' }}>middle 50%</strong> of data.
                            Q<sub>1</sub> is the 25th percentile, Q<sub>3</sub> is the 75th percentile.
                        </p>
                        <div className="stats-formula" style={{ margin: 0 }}>
                            <span>Q.D. = </span>
                            <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                                <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                    Q<sub>3</sub> - Q<sub>1</sub>
                                </span>
                                <span style={{ display: 'block', paddingTop: '4px' }}>2</span>
                            </span>
                        </div>
                    </div>

                    {/* 3. Mean Deviation */}
                    <div style={{ padding: '18px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #10b981' }}>
                        <h4 style={{ color: '#10b981', margin: '0 0 8px 0', fontSize: '1rem' }}>3. Mean Deviation (M.D.)</h4>
                        <p style={{ color: 'var(--stats-text)', margin: '0 0 10px 0', lineHeight: '1.7', fontSize: '0.9rem' }}>
                            Find how far <strong style={{ color: '#fff' }}>each value</strong> is from the Mean (or Median), take the absolute value (ignore negative signs),
                            then find the average of all those distances.
                            Think of it as: "On average, how far are values from the center?"
                        </p>
                        <div className="stats-formula" style={{ margin: 0 }}>
                            <span>M.D. = </span>
                            <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                                <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                    &Sigma;f<sub>i</sub> |x<sub>i</sub> - X&#772;|
                                </span>
                                <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                            </span>
                        </div>
                    </div>

                    {/* 4. Standard Deviation */}
                    <div style={{ padding: '18px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)', borderLeft: '4px solid #ec4899' }}>
                        <h4 style={{ color: '#ec4899', margin: '0 0 8px 0', fontSize: '1rem' }}>4. Standard Deviation (S.D.)</h4>
                        <p style={{ color: 'var(--stats-text)', margin: '0 0 10px 0', lineHeight: '1.7', fontSize: '0.9rem' }}>
                            The <strong style={{ color: '#fff' }}>most important and widely used</strong> measure.
                            Instead of absolute values, we <strong style={{ color: '#fff' }}>square</strong> the deviations (so negatives become positive),
                            find the average of those squares (that's called <strong style={{ color: '#ec4899' }}>Variance</strong>),
                            then take the <strong style={{ color: '#fff' }}>square root</strong> to bring it back to original units.
                        </p>
                        <div className="stats-formula" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                            <span>&sigma;<sup>2</sup> = </span>
                            <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                                <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                    &Sigma;f<sub>i</sub>(x<sub>i</sub> - X&#772;)<sup>2</sup>
                                </span>
                                <span style={{ display: 'block', paddingTop: '4px' }}>N</span>
                            </span>
                        </div>
                        <p style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem', marginTop: '10px', marginBottom: 0 }}>
                            &sigma; = &#8730;Variance
                        </p>
                    </div>
                </div>
            </div>

            {/* ═══ ABSOLUTE vs RELATIVE ═══ */}
            <div className="stats-card" style={{ marginBottom: '24px' }}>
                <h3 className="stats-card-heading" style={{ borderColor: '#f59e0b' }}>
                    <FaChartLine /> Absolute vs Relative Measures
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '15px' }}>
                    <strong style={{ color: '#fff' }}>Absolute measures</strong> (Range, Q.D., M.D., S.D.) have the same unit as the data (e.g., rupees, marks).
                    But what if you want to compare two datasets with <em>different units</em> or <em>different scales</em>?
                    That's where <strong style={{ color: '#fff' }}>Relative measures</strong> (Coefficients) come in — they are <strong style={{ color: '#3b82f6' }}>unit-free percentages</strong>.
                </p>
                <div className="stats-table-container">
                    <table className="stats-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Measures</th>
                                <th>Unit</th>
                                <th>When to Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Absolute</td>
                                <td>Range, Q.D., M.D., S.D.</td>
                                <td>Same as data</td>
                                <td>Single series analysis</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: '600', color: '#fff' }}>Relative</td>
                                <td style={{ fontSize: '0.85rem' }}>Coeff. of Range, Coeff. of Q.D., Coeff. of M.D., C.V.</td>
                                <td>No unit (%)</td>
                                <td>Comparing two series</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* C.V. Explanation */}
                <div style={{ marginTop: '15px', padding: '15px', background: 'rgba(236, 72, 153, 0.08)', borderRadius: 'var(--stats-radius)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
                    <h4 style={{ color: '#ec4899', margin: '0 0 8px 0', fontSize: '0.9rem' }}>Coefficient of Variation (C.V.) — The King of Comparison</h4>
                    <div className="stats-formula" style={{ margin: '0 0 10px 0' }}>
                        <span>C.V. = </span>
                        <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle' }}>
                            <span style={{ display: 'block', borderBottom: '2px solid #fff', paddingBottom: '4px' }}>
                                &sigma;
                            </span>
                            <span style={{ display: 'block', paddingTop: '4px' }}>X&#772;</span>
                        </span>
                        <span> &times; 100</span>
                    </div>
                    <p style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem', margin: 0, lineHeight: '1.7' }}>
                        <strong style={{ color: '#fff' }}>Lower C.V. = More Consistent.</strong> If Series A has C.V. = 20% and Series B has C.V. = 35%,
                        then Series A is more consistent (less spread out relative to its mean).
                    </p>
                </div>
            </div>

            {/* ═══ QUICK SUMMARY ═══ */}
            <div className="stats-card">
                <h3 className="stats-card-heading" style={{ borderColor: '#10b981' }}>
                    Quick Summary — What's Coming Next
                </h3>
                <p style={{ color: 'var(--stats-text)', lineHeight: '1.8', marginBottom: '15px' }}>
                    In the following tabs, you'll practice each type with step-by-step solutions:
                </p>
                <div style={{ display: 'grid', gap: '8px' }}>
                    {[
                        { tab: 'Range & Q.D.', count: '7 problems', desc: 'Individual, Discrete, and Continuous series' },
                        { tab: 'Mean Deviation', count: '5 problems', desc: 'From Mean and Median, all three series types + Coefficient' },
                        { tab: 'Standard Deviation', count: '6 problems', desc: 'Direct Method, Step Deviation, Variance, C.V., Comparison' }
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 15px', background: 'var(--stats-bg-alt)', borderRadius: 'var(--stats-radius)' }}>
                            <span style={{ fontWeight: '700', color: '#fff', minWidth: '30px', textAlign: 'center', background: 'rgba(59, 130, 246, 0.15)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--stats-primary-light)' }}>
                                {i + 1}
                            </span>
                            <div>
                                <span style={{ color: '#fff', fontWeight: '600' }}>{item.tab}</span>
                                <span style={{ color: 'var(--stats-text-muted)', fontSize: '0.85rem' }}> — {item.count}</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--stats-text-muted)', fontSize: '0.8rem' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DispersionIntro;
