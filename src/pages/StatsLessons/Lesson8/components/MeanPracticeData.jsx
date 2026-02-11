import React from 'react';

// Helper for Vertical Fractions
export const Fraction = ({ num, den }) => (
    <span style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', verticalAlign: 'middle', margin: '0 4px' }}>
        <span style={{ borderBottom: '1px solid currentColor', padding: '0 4px', display: 'block' }}>{num}</span>
        <span style={{ display: 'block', padding: '0 4px' }}>{den}</span>
    </span>
);

// Helper for X-Bar (Mean Symbol)
export const XBar = ({ sub }) => (
    <span style={{ display: 'inline-block' }}>
        <span style={{ textDecoration: 'overline' }}>X</span>
        {sub && <sub style={{ verticalAlign: 'sub', fontSize: '0.7em' }}>{sub}</sub>}
    </span>
);

// --- Styles for Tables ---
const tableStyle = { width: '100%', minWidth: '300px', fontSize: '0.9rem', textAlign: 'center', borderCollapse: 'collapse', overflowX: 'auto' };
const thStyle = { background: 'rgba(0, 153, 255, 0.1)', color: 'var(--neon-blue)', padding: '12px', border: '1px solid var(--border-color)', fontWeight: '600', whiteSpace: 'nowrap' };
const tdStyle = { padding: '10px', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' };
const highlightTd = { ...tdStyle, color: 'var(--neon-gold)', fontWeight: 'bold' };
const resultTd = { ...tdStyle, color: 'var(--neon-green)', fontWeight: 'bold' };
const rowHighlight = { background: 'rgba(255, 255, 255, 0.05)' };


// ==========================================
// INDIVIDUAL SERIES PROBLEMS
// ==========================================

const ind_q1_table = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>Student</th>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => <td key={n} style={tdStyle}>{n}</td>)}</tr></thead>
            <tbody><tr><th style={thStyle}>Marks (x<sub>i</sub>)</th>{[40, 50, 55, 78, 58, 60, 73, 35, 43, 48].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr></tbody>
        </table>
    </div>
);

const ind_q1_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>S.No</th><th style={thStyle}>Marks (x<sub>i</sub>)</th></tr></thead>
            <tbody>
                {[40, 50, 55, 78, 58, 60, 73, 35, 43, 48].map((x, i) => (
                    <tr key={i}><td style={tdStyle}>{i + 1}</td><td style={tdStyle}>{x}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={highlightTd}>N = 10</td><td style={resultTd}>Σx<sub>i</sub> = 540</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const ind_q2_table = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>Month</th>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => <td key={m} style={tdStyle}>{m}</td>)}</tr></thead>
            <tbody><tr><th style={thStyle}>Income (₹)</th>{[1500, 1800, 2000, 1600, 2200, 2500].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr></tbody>
        </table>
    </div>
);

const ind_q2_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>Month</th><th style={thStyle}>x<sub>i</sub> (Income)</th><th style={thStyle}>d<sub>i</sub> (x<sub>i</sub> - 2000)</th></tr></thead>
            <tbody>
                {[
                    { m: 'Jan', x: 1500, d: -500 }, { m: 'Feb', x: 1800, d: -200 }, { m: 'Mar', x: 2000, d: 0 },
                    { m: 'Apr', x: 1600, d: -400 }, { m: 'May', x: 2200, d: 200 }, { m: 'Jun', x: 2500, d: 500 }
                ].map((row, i) => (
                    <tr key={i}><td style={tdStyle}>{row.m}</td><td style={tdStyle}>{row.x}</td><td style={tdStyle}>{row.d}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}>N=6</td><td style={tdStyle}></td><td style={resultTd}>Σd<sub>i</sub> = -400</td>
                </tr>
            </tbody>
        </table>
    </div>
);


// ==========================================
// DISCRETE SERIES PROBLEMS
// ==========================================

const disc_q1_table = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Wages(x<sub>i</sub>)</th>{[10, 20, 30, 40, 50].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>Workers(f<sub>i</sub>)</th>{[4, 5, 3, 2, 5].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);

const disc_q1_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>x<sub>i</sub></th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>f<sub>i</sub>x<sub>i</sub></th></tr></thead>
            <tbody>
                {[{ x: 10, f: 4 }, { x: 20, f: 5 }, { x: 30, f: 3 }, { x: 40, f: 2 }, { x: 50, f: 5 }].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.x}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.x * r.f}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}>Total</td><td style={highlightTd}>Σf<sub>i</sub> = 19</td><td style={resultTd}>Σf<sub>i</sub>x<sub>i</sub> = 560</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const disc_q2_table = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Height(cm)</th>{[150, 155, 160, 165, 170].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>Students(f<sub>i</sub>)</th>{[8, 12, 16, 10, 4].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);

const disc_q2_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>x<sub>i</sub></th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>d<sub>i</sub> (x<sub>i</sub>-160)</th><th style={thStyle}>f<sub>i</sub>d<sub>i</sub></th></tr></thead>
            <tbody>
                {[
                    { x: 150, f: 8, d: -10, fd: -80 }, { x: 155, f: 12, d: -5, fd: -60 }, { x: 160, f: 16, d: 0, fd: 0 }, // Changed f to 16 to make mean nice
                    { x: 165, f: 10, d: 5, fd: 50 }, { x: 170, f: 4, d: 10, fd: 40 }
                ].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.x}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.d}</td><td style={tdStyle}>{r.fd}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}></td><td style={highlightTd}>Σf<sub>i</sub> = 50</td><td style={tdStyle}></td><td style={resultTd}>Σf<sub>i</sub>d<sub>i</sub> = -50</td>
                </tr>
            </tbody>
        </table>
    </div>
);

// Missing Frequency Sol
const disc_q3_table = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Marks(x<sub>i</sub>)</th>{[10, 20, 30, 40, 50].map(v => <td key={v} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>Freq(f<sub>i</sub>)</th>{[5, 8, '?', 12, 5].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);
// Sum: 5+8+f+12+5 = 30+f
// Mean is given as 31.
// 5(10)+8(20)+f(30)+12(40)+5(50) = 50+160+30f+480+250 = 940+30f
// 31 = (940+30f)/(30+f) => 930+31f = 940+30f => f = 10. Correct.

const disc_q3_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>x<sub>i</sub></th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>f<sub>i</sub>x<sub>i</sub></th></tr></thead>
            <tbody>
                {[
                    { x: 10, f: 5, fx: 50 }, { x: 20, f: 8, fx: 160 }, { x: 30, f: 'f', fx: '30f' },
                    { x: 40, f: 12, fx: 480 }, { x: 50, f: 5, fx: 250 }
                ].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.x}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.fx}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}>Total</td><td style={highlightTd}>Σf<sub>i</sub> = 30 + f</td><td style={resultTd}>Σf<sub>i</sub>x<sub>i</sub> = 940 + 30f</td>
                </tr>
            </tbody>
        </table>
    </div>
);


// ==========================================
// CONTINUOUS SERIES PROBLEMS
// ==========================================

const cont_q1_table = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Marks</th>{['0-10', '10-20', '20-30', '30-40', '40-50'].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>Students</th>{[5, 10, 20, 10, 5].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);

const cont_q1_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>CI</th><th style={thStyle}>x<sub>i</sub> (Mid)</th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>f<sub>i</sub>x<sub>i</sub></th></tr></thead>
            <tbody>
                {[
                    { c: '0-10', m: 5, f: 5, fm: 25 }, { c: '10-20', m: 15, f: 10, fm: 150 }, { c: '20-30', m: 25, f: 20, fm: 500 },
                    { c: '30-40', m: 35, f: 10, fm: 350 }, { c: '40-50', m: 45, f: 5, fm: 225 }
                ].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.c}</td><td style={tdStyle}>{r.m}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.fm}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}></td><td style={tdStyle}></td><td style={highlightTd}>Σf<sub>i</sub> = 50</td><td style={resultTd}>Σf<sub>i</sub>x<sub>i</sub> = 1250</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const cont_q2_table = ( // Inclusive
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Class (Inclusive)</th>{['0-9', '10-19', '20-29', '30-39', '40-49'].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>Frequency</th>{[8, 12, 10, 6, 4].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);

const cont_q2_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>CI (Exclusive)</th><th style={thStyle}>x<sub>i</sub></th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>u<sub>i</sub> (x<sub>i</sub>-A)/c</th><th style={thStyle}>f<sub>i</sub>u<sub>i</sub></th></tr></thead>
            <tbody>
                {[
                    { c: '-0.5-9.5', m: 4.5, f: 8, d: -2, fd: -16 }, { c: '9.5-19.5', m: 14.5, f: 12, d: -1, fd: -12 },
                    { c: '19.5-29.5', m: 24.5, f: 10, d: 0, fd: 0 }, { c: '29.5-39.5', m: 34.5, f: 6, d: 1, fd: 6 },
                    { c: '39.5-49.5', m: 44.5, f: 4, d: 2, fd: 8 }
                ].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.c}</td><td style={tdStyle}>{r.m}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.d}</td><td style={tdStyle}>{r.fd}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}>C=10, A=24.5</td><td style={tdStyle}></td><td style={highlightTd}>Σf<sub>i</sub> = 40</td><td style={tdStyle}></td><td style={resultTd}>Σf<sub>i</sub>u<sub>i</sub> = -14</td>
                </tr>
            </tbody>
        </table>
    </div>
);


// ==========================================
// CUMULATIVE & MISSING SERIES PROBLEMS
// ==========================================

const cum_q1_table = ( // Less Than
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Marks</th>{['<10', '<20', '<30', '<40', '<50'].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>No. of Students</th>{[5, 17, 31, 41, 49].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);

const cum_q1_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>CI</th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>x<sub>i</sub></th><th style={thStyle}>f<sub>i</sub>x<sub>i</sub></th></tr></thead>
            <tbody>
                {[
                    { c: '0-10', f: 5, m: 5, fm: 25 }, { c: '10-20', f: 12, m: 15, fm: 180 }, // 17-5=12
                    { c: '20-30', f: 14, m: 25, fm: 350 }, // 31-17=14
                    { c: '30-40', f: 10, m: 35, fm: 350 }, // 41-31=10
                    { c: '40-50', f: 8, m: 45, fm: 360 }   // 49-41=8
                ].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.c}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.m}</td><td style={tdStyle}>{r.fm}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}></td><td style={highlightTd}>Σf<sub>i</sub> = 49</td><td style={tdStyle}></td><td style={resultTd}>Σf<sub>i</sub>x<sub>i</sub> = 1265</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const cum_q2_table = ( // More Than
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <tbody>
                <tr><th style={thStyle}>Marks</th>{['>0', '>10', '>20', '>30', '>40', '>50'].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
                <tr><th style={thStyle}>No. of Students</th>{[50, 45, 30, 15, 5, 0].map((v, i) => <td key={i} style={tdStyle}>{v}</td>)}</tr>
            </tbody>
        </table>
    </div>
);

const cum_q2_sol = (
    <div style={{ overflowX: 'auto' }}>
        <table style={tableStyle}>
            <thead><tr><th style={thStyle}>CI</th><th style={thStyle}>f<sub>i</sub></th><th style={thStyle}>x<sub>i</sub></th><th style={thStyle}>f<sub>i</sub>x<sub>i</sub></th></tr></thead>
            <tbody>
                {[
                    { c: '0-10', f: 5, m: 5, fm: 25 },   // 50-45
                    { c: '10-20', f: 15, m: 15, fm: 225 }, // 45-30
                    { c: '20-30', f: 15, m: 25, fm: 375 }, // 30-15
                    { c: '30-40', f: 10, m: 35, fm: 350 }, // 15-5
                    { c: '40-50', f: 5, m: 45, fm: 225 }    // 5-0
                ].map((r, i) => (
                    <tr key={i}><td style={tdStyle}>{r.c}</td><td style={tdStyle}>{r.f}</td><td style={tdStyle}>{r.m}</td><td style={tdStyle}>{r.fm}</td></tr>
                ))}
                <tr style={rowHighlight}>
                    <td style={tdStyle}></td><td style={highlightTd}>Σf<sub>i</sub> = 50</td><td style={tdStyle}></td><td style={resultTd}>Σf<sub>i</sub>x<sub>i</sub> = 1200</td>
                </tr>
            </tbody>
        </table>
    </div>
);

const corrected_mean_sol = (
    <div style={{ padding: '15px', background: 'rgba(30, 41, 59, 0.5)', borderRadius: '8px', color: '#cbd5e1' }}>
        <p><strong>Given:</strong> <XBar /> = 40, N = 100.</p>
        <p>1. Calculate Incorrect Σx<sub>i</sub>:<br />
            Σx<sub>i</sub> = N × <XBar /> = 100 × 40 = 4000</p>
        <p>2. Correct Σx<sub>i</sub>:<br />
            Correct Σx<sub>i</sub> = 4000 - Wrong Item + Correct Item<br />
            = 4000 - 83 + 53 = 3970</p>
        <p>3. Calculate Correct Mean:<br />
            Correct Mean = 3970 / 100 = 39.7</p>
    </div>
);

const combined_mean_sol = (
    <div style={{ padding: '15px', background: 'rgba(30, 41, 59, 0.5)', borderRadius: '8px', color: '#cbd5e1' }}>
        <p><strong>Group 1:</strong> N<sub>1</sub> = 50, <XBar sub="1" /> = 60 <br />
            <strong>Group 2:</strong> N<sub>2</sub> = 40, <XBar sub="2" /> = 55</p>
        <p>Formula: <XBar sub="12" /> = (N<sub>1</sub><XBar sub="1" /> + N<sub>2</sub><XBar sub="2" />) / (N<sub>1</sub> + N<sub>2</sub>)</p>
        <p>Calculation:<br />
            <XBar sub="12" /> = (50 × 60 + 40 × 55) / (50 + 40)<br />
            = (3000 + 2200) / 90 = 5200 / 90 = 57.78</p>
    </div>
);


export const practiceData = [
    {
        id: 'individual',
        title: 'Type 1: Individual Series',
        problems: [
            {
                q: "1. Calculate Arithmetic Mean of marks: 40, 50, 55, 78, 58, 60, 73, 35, 43, 48.",
                table: ind_q1_table,
                solTable: ind_q1_sol,
                calc: <span>Mean <XBar /> = <Fraction num="Σxᵢ" den="N" /> = <Fraction num="540" den="10" /> = 54 Marks</span>
            },
            {
                q: "2. Calculate Mean Income using Short-cut Method (Assumed Mean = 2000).",
                table: ind_q2_table,
                solTable: ind_q2_sol,
                calc: <span>Mean <XBar /> = A + <Fraction num="Σdᵢ" den="N" /> = 2000 + <Fraction num="-400" den="6" /> = 2000 - 66.67 = 1933.33</span>
            },
            {
                q: "3. The mean of 5 numbers is 24. If one number is excluded, their mean becomes 22. Find the excluded number.",
                table: null,
                solTable: <div style={{ padding: '10px', color: '#cbd5e1' }}><XBar sub="1" /> = 24, N<sub>1</sub> = 5 ⇒ Σx<sub>i1</sub> = 120<br /><XBar sub="2" /> = 22, N<sub>2</sub> = 4 ⇒ Σx<sub>i2</sub> = 88<br />Excluded Number = 120 - 88 = 32</div>,
                calc: <span>Ans: 32</span>
            },
            {
                q: "4. The mean height of 10 students is 150cm. Later it was found that one value was wrongly copied as 140 instead of 160. Find correct mean.",
                table: null,
                solTable: <div style={{ padding: '10px', color: '#cbd5e1' }}>Wrong Σx<sub>i</sub> = 150 × 10 = 1500<br />Correct Σx<sub>i</sub> = 1500 - 140 + 160 = 1520<br />Correct Mean = 1520 / 10 = 152 cm</div>,
                calc: <span>Correct Mean: 152 cm</span>
            }
        ]
    },
    {
        id: 'discrete',
        title: 'Type 2: Discrete Series',
        problems: [
            {
                q: "1. Calculate Mean using Direct Method.",
                table: disc_q1_table,
                solTable: disc_q1_sol,
                calc: <span>Mean <XBar /> = <Fraction num="Σfᵢxᵢ" den="Σfᵢ" /> = <Fraction num="560" den="19" /> = 29.47</span>
            },
            {
                q: "2. Calculate Mean using Short-cut Method (Assumed Mean = 160).",
                table: disc_q2_table,
                solTable: disc_q2_sol,
                calc: <span>Mean <XBar /> = A + <Fraction num="Σfᵢdᵢ" den="Σfᵢ" /> = 160 + <Fraction num="-50" den="50" /> = 160 - 1 = 159</span>
            },
            {
                q: "3. Find the missing frequency if Mean is 31. X: 10, 20, 30, 40, 50. f: 5, 8, ?, 12, 5.", // Simple conceptual
                table: disc_q3_table,
                solTable: disc_q3_sol,
                calc: <span><XBar /> = Σfᵢxᵢ / Σfᵢ ⇒ 31 = (940 + 30f) / (30 + f) ⇒ 930 + 31f = 940 + 30f ⇒ f = 10</span>
            }
        ]
    },
    {
        id: 'continuous',
        title: 'Type 3: Continuous Series',
        problems: [
            {
                q: "1. Calculate Mean using Direct Method.",
                table: cont_q1_table,
                solTable: cont_q1_sol,
                calc: <span>Mean <XBar /> = <Fraction num="Σfᵢxᵢ" den="Σfᵢ" /> = <Fraction num="1250" den="50" /> = 25</span>
            },
            {
                q: "2. Calculate Mean from Inclusive Series (Step-Deviation).",
                table: cont_q2_table,
                solTable: cont_q2_sol,
                calc: <span>Mean <XBar /> = A + (<Fraction num="Σfᵢuᵢ" den="Σfᵢ" />) × C = 24.5 + (<Fraction num="-14" den="40" />) × 10 = 24.5 - 3.5 = 21</span>
            },
            {
                q: "3. Calculate Mean (Open-ended). Below 10, 10-20, 20-30, 30-40, Above 40. f: 5, 10, 20, 10, 5.", // Same as logic as Q1 essentially
                table: <div style={{ padding: '5px', color: '#94a3b8' }}>Assume equal class width of 10. Below 10 → 0-10. Above 40 → 40-50.</div>,
                solTable: cont_q1_sol, // Reusing Q1 logic for efficiency as numbers match
                calc: <span>Since pattern is width 10, assume 0-10 and 40-50. Mean = 25.</span>
            }
        ]
    },
    {
        id: 'cumulative',
        title: 'Type 4: Cumulative & Special Cases',
        problems: [
            {
                q: "1. Calculate Mean from 'Less Than' Cumulative Frequency Distribution.",
                table: cum_q1_table,
                solTable: cum_q1_sol,
                calc: <span>Mean <XBar /> = <Fraction num="Σfᵢxᵢ" den="Σfᵢ" /> = <Fraction num="1265" den="49" /> = 25.82</span>
            },
            {
                q: "2. Calculate Mean from 'More Than' Cumulative Frequency Distribution.",
                table: cum_q2_table,
                solTable: cum_q2_sol,
                calc: <span>Mean <XBar /> = <Fraction num="Σfᵢxᵢ" den="Σfᵢ" /> = <Fraction num="1200" den="50" /> = 24</span>
            },
            {
                q: "3. Correct Mean: Mean of 100 items is 40. One item 53 was misread as 83. Find correct mean.",
                table: null,
                solTable: corrected_mean_sol,
                calc: <span>Correct Mean = 39.7</span>
            },
            {
                q: "4. Combined Mean: Class A has 50 students with mean 60. Class B has 40 students with mean 55. Find combined mean.",
                table: null,
                solTable: combined_mean_sol,
                calc: <span>Combined Mean = 57.78</span>
            }
        ]
    }
];
