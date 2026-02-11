import React from 'react';

/**
 * Lesson 10: Measures of Dispersion — Practice Problems Data
 * 
 * NCERT Class 11 Statistics Ch. 6
 * Topics: Range, Quartile Deviation, Mean Deviation, Standard Deviation, Variance, CV
 */

/* =============================================
   RANGE PROBLEMS (3)
   ============================================= */
export const rangeProblems = [
    {
        id: 'r1',
        title: 'Range: Individual Series',
        question: 'Find the Range of: 10, 17, 25, 30, 42, 50, 8',
        solution: {
            steps: [
                'Arrange in ascending order: 8, 10, 17, 25, 30, 42, 50',
                'Largest Value (L) = 50',
                'Smallest Value (S) = 8',
                'Range = L - S = 50 - 8 = 42'
            ],
            result: 42,
        }
    },
    {
        id: 'r2',
        title: 'Range: Discrete Series',
        question: 'Find the Range from the frequency distribution:',
        headers: ['x', 'f'],
        rows: [
            { x: 5, f: 3 },
            { x: 10, f: 8 },
            { x: 15, f: 15 },
            { x: 20, f: 10 },
            { x: 25, f: 5 }
        ],
        solution: {
            steps: [
                'L = Largest value = 25',
                'S = Smallest value = 5',
                'Range = L - S = 25 - 5 = 20'
            ],
            result: 20,
        }
    },
    {
        id: 'r3',
        title: 'Range: Continuous Series',
        question: 'Find the Range:',
        headers: ['Class Interval', 'f'],
        rows: [
            { class: '10-20', f: 5 },
            { class: '20-30', f: 8 },
            { class: '30-40', f: 12 },
            { class: '40-50', f: 7 },
            { class: '50-60', f: 3 }
        ],
        solution: {
            steps: [
                'Upper limit of the last class (L) = 60',
                'Lower limit of the first class (S) = 10',
                'Range = L - S = 60 - 10 = 50'
            ],
            result: 50,
        }
    }
];

/* Helper for fractions */
const Fraction = ({ num, den }) => (
    <span style={{ display: 'inline-block', textAlign: 'center', verticalAlign: 'middle', margin: '0 4px' }}>
        <span style={{ display: 'block', borderBottom: '1px solid currentColor', paddingBottom: '1px', fontSize: '0.9em' }}>{num}</span>
        <span style={{ display: 'block', paddingTop: '1px', fontSize: '0.9em' }}>{den}</span>
    </span>
);

/* =============================================
   QUARTILE DEVIATION PROBLEMS (4)
   ============================================= */
export const qdProblems = [
    {
        id: 'qd1',
        title: 'Q.D.: Individual Series',
        question: 'Find Q1, Q3 and Quartile Deviation: 15, 18, 20, 22, 25, 27, 30, 35, 40',
        solution: {
            steps: [
                'Data (already sorted): 15, 18, 20, 22, 25, 27, 30, 35, 40',
                'N = 9',
                <span>Q<sub>1</sub> = Size of <Fraction num="N+1" den="4" /> th item = <Fraction num="10" den="4" /> = 2.5th item</span>,
                'Q1 = 18 + 0.5(20 - 18) = 18 + 1 = 19',
                <span>Q<sub>3</sub> = Size of <Fraction num="3(N+1)" den="4" /> th item = <Fraction num="30" den="4" /> = 7.5th item</span>,
                'Q3 = 30 + 0.5(35 - 30) = 30 + 2.5 = 32.5',
                <span>Q.D. = <Fraction num={<>Q<sub>3</sub> - Q<sub>1</sub></>} den="2" /> = <Fraction num="32.5 - 19" den="2" /> = 6.75</span>
            ],
            result: 6.75,
        }
    },
    {
        id: 'qd2',
        title: 'Coefficient of Q.D.',
        question: 'From the above data, find the Coefficient of Quartile Deviation.',
        solution: {
            steps: [
                <span>Q<sub>1</sub> = 19, Q<sub>3</sub> = 32.5 (from previous)</span>,
                <span>Coeff of Q.D. = <Fraction num={<>Q<sub>3</sub> - Q<sub>1</sub></>} den={<>Q<sub>3</sub> + Q<sub>1</sub></>} /></span>,
                <span>= <Fraction num="32.5 - 19" den="32.5 + 19" /></span>,
                <span>= <Fraction num="13.5" den="51.5" /> = 0.262</span>
            ],
            result: 0.262,
        }
    },
    {
        id: 'qd3',
        title: 'Q.D.: Discrete Series',
        question: 'Compute Q.D.:',
        headers: ['x', 'f'],
        rows: [
            { x: 10, f: 3 },
            { x: 20, f: 7 },
            { x: 30, f: 15 },
            { x: 40, f: 10 },
            { x: 50, f: 5 }
        ],
        solution: {
            tableHeaders: ['x', 'f', 'c.f.'],
            tableRows: [
                { x: 10, f: 3, cf: 3 },
                { x: 20, f: 7, cf: 10 },
                { x: 30, f: 15, cf: 25 },
                { x: 40, f: 10, cf: 35 },
                { x: 50, f: 5, cf: 40 }
            ],
            steps: [
                'N = 40',
                <span>Q<sub>1</sub> = Size of <Fraction num="N+1" den="4" /> = <Fraction num="41" den="4" /> = 10.25th item</span>,
                'c.f. just exceeding 10.25 is 25, so Q1 = 30',
                <span>Q<sub>3</sub> = Size of <Fraction num="3(N+1)" den="4" /> = 30.75th item</span>,
                'c.f. just exceeding 30.75 is 35, so Q3 = 40',
                <span>Q.D. = <Fraction num="40 - 30" den="2" /> = 5</span>
            ],
            result: 5,
        }
    },
    {
        id: 'qd4',
        title: 'Q.D.: Continuous Series',
        question: 'Calculate Q.D.:',
        headers: ['Class', 'f'],
        rows: [
            { class: '0-10', f: 5 },
            { class: '10-20', f: 12 },
            { class: '20-30', f: 18 },
            { class: '30-40', f: 10 },
            { class: '40-50', f: 5 }
        ],
        solution: {
            tableHeaders: ['Class', 'f', 'c.f.'],
            tableRows: [
                { class: '0-10', f: 5, cf: 5 },
                { class: '10-20', f: 12, cf: 17 },
                { class: '20-30', f: 18, cf: 35 },
                { class: '30-40', f: 10, cf: 45 },
                { class: '40-50', f: 5, cf: 50 }
            ],
            steps: [
                'N = 50',
                <span>Q<sub>1</sub>: N/4 = 12.5, Q<sub>1</sub> class = 10-20 (c.f. 17 &gt; 12.5)</span>,
                <span>Q<sub>1</sub> = 10 + <Fraction num="12.5 - 5" den="12" /> &times; 10 = 10 + 6.25 = 16.25</span>,
                <span>Q<sub>3</sub>: 3N/4 = 37.5, Q<sub>3</sub> class = 30-40 (c.f. 45 &gt; 37.5)</span>,
                <span>Q<sub>3</sub> = 30 + <Fraction num="37.5 - 35" den="10" /> &times; 10 = 30 + 2.5 = 32.5</span>,
                <span>Q.D. = <Fraction num="32.5 - 16.25" den="2" /> = 8.125</span>
            ],
            result: 8.125,
        }
    }
];

/* =============================================
   MEAN DEVIATION PROBLEMS (5)
   ============================================= */
export const mdProblems = [
    {
        id: 'md1',
        title: 'M.D. from Mean: Individual Series',
        question: 'Calculate M.D. from Mean: 2, 4, 7, 8, 9',
        solution: {
            steps: [
                <span>Mean = <Fraction num="2 + 4 + 7 + 8 + 9" den="5" /> = <Fraction num="30" den="5" /> = 6</span>,
                'Deviations |x - Mean|:  |2-6|=4, |4-6|=2, |7-6|=1, |8-6|=2, |9-6|=3',
                'Sum of |x - Mean| = 4 + 2 + 1 + 2 + 3 = 12',
                <span>M.D.(X&#772;) = <Fraction num="Sum" den="N" /> = <Fraction num="12" den="5" /> = 2.4</span>
            ],
            result: 2.4,
        }
    },
    {
        id: 'md2',
        title: 'M.D. from Median: Individual Series',
        question: 'Calculate M.D. from Median: 3, 5, 7, 7, 9, 11, 13',
        solution: {
            steps: [
                'Data already sorted: 3, 5, 7, 7, 9, 11, 13',
                'N = 7 (Odd), Median (M) = 4th item = 7',
                'Deviations |x - M|:  |3-7|=4, |5-7|=2, |7-7|=0, |7-7|=0, |9-7|=2, |11-7|=4, |13-7|=6',
                'Sum of |x - M| = 4 + 2 + 0 + 0 + 2 + 4 + 6 = 18',
                <span>M.D.(M) = <Fraction num="Sum" den="N" /> = <Fraction num="18" den="7" /> = 2.571</span>
            ],
            result: 2.571,
        }
    },
    {
        id: 'md3',
        title: 'M.D. from Mean: Discrete Series',
        question: 'Compute M.D. about Mean:',
        headers: ['x', 'f'],
        rows: [
            { x: 5, f: 4 },
            { x: 10, f: 6 },
            { x: 15, f: 10 },
            { x: 20, f: 8 },
            { x: 25, f: 2 }
        ],
        solution: {
            tableHeaders: ['x', 'f', 'f.x', '|x - Mean|', 'f.|x - Mean|'],
            tableRows: [
                { x: 5, f: 4, fx: 20, d: 9, fd: 36 },
                { x: 10, f: 6, fx: 60, d: 4, fd: 24 },
                { x: 15, f: 10, fx: 150, d: 1, fd: 10 },
                { x: 20, f: 8, fx: 160, d: 6, fd: 48 },
                { x: 25, f: 2, fx: 50, d: 11, fd: 22 }
            ],
            steps: [
                'Sum of f.x = 20+60+150+160+50 = 440',
                'N = Sum of f = 30',
                <span>Mean (X&#772;) = <Fraction num="440" den="30" /> = 14.67 (approx 14 for deviations)</span>,
                <span>Calculate |x - X&#772;| for each x and multiply by f</span>,
                'Sum of f.|x - Mean| = 36+24+10+48+22 = 140',
                <span>M.D.(X&#772;) = <Fraction num="140" den="30" /> = 4.67</span>
            ],
            result: 4.67,
        }
    },
    {
        id: 'md4',
        title: 'M.D. from Mean: Continuous Series',
        question: 'Compute M.D. about Mean:',
        headers: ['Class', 'f'],
        rows: [
            { class: '0-10', f: 5 },
            { class: '10-20', f: 8 },
            { class: '20-30', f: 15 },
            { class: '30-40', f: 16 },
            { class: '40-50', f: 6 }
        ],
        solution: {
            tableHeaders: ['Class', 'Mid (m)', 'f', 'f.m', '|m - Mean|', 'f.|m - Mean|'],
            tableRows: [
                { class: '0-10', m: 5, f: 5, fm: 25, d: 21, fd: 105 },
                { class: '10-20', m: 15, f: 8, fm: 120, d: 11, fd: 88 },
                { class: '20-30', m: 25, f: 15, fm: 375, d: 1, fd: 15 },
                { class: '30-40', m: 35, f: 16, fm: 560, d: 9, fd: 144 },
                { class: '40-50', m: 45, f: 6, fm: 270, d: 19, fd: 114 }
            ],
            steps: [
                'Find mid-values (m) of each class',
                'Sum of f.m = 25+120+375+560+270 = 1350',
                'N = 50',
                <span>Mean = <Fraction num="1350" den="50" /> = 27 (approx 26 for working)</span>,
                'Calculate |m - Mean| for each class and multiply by f',
                'Sum of f.|m - Mean| = 105+88+15+144+114 = 466',
                <span>M.D.(X&#772;) = <Fraction num="466" den="50" /> = 9.32</span>
            ],
            result: 9.32,
        }
    },
    {
        id: 'md5',
        title: 'Coefficient of M.D.',
        question: 'From the above continuous series, find Coefficient of M.D.',
        solution: {
            steps: [
                'M.D.(Mean) = 9.32 (calculated above)',
                'Mean = 27',
                <span>Coefficient of M.D. = <Fraction num="M.D.(Mean)" den="Mean" /></span>,
                <span>= <Fraction num="9.32" den="27" /> = 0.345</span>
            ],
            result: 0.345,
        }
    }
];

/* =============================================
   STANDARD DEVIATION PROBLEMS (6)
   ============================================= */
export const sdProblems = [
    {
        id: 'sd1',
        title: 'S.D.: Individual Series (Direct Method)',
        question: 'Find the Standard Deviation: 4, 6, 8, 10, 12',
        solution: {
            tableHeaders: ['x', 'x - Mean', '(x - Mean)²'],
            tableRows: [
                { x: 4, d: -4, d2: 16 },
                { x: 6, d: -2, d2: 4 },
                { x: 8, d: 0, d2: 0 },
                { x: 10, d: 2, d2: 4 },
                { x: 12, d: 4, d2: 16 }
            ],
            steps: [
                <span>Mean = <Fraction num="4+6+8+10+12" den="5" /> = <Fraction num="40" den="5" /> = 8</span>,
                'Calculate deviations (x - Mean) and square them',
                'Sum of (x - Mean)² = 16+4+0+4+16 = 40',
                <span>Variance (&sigma;<sup>2</sup>) = <Fraction num="Sum (x-Mean)²" den="N" /> = <Fraction num="40" den="5" /> = 8</span>,
                <span>S.D. (&sigma;) = <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}>8</span></span> = 2.83</span>
            ],
            result: 2.83,
        }
    },
    {
        id: 'sd2',
        title: 'S.D.: Individual Series (Step Deviation)',
        question: 'Using Step Deviation Method, find S.D.: 10, 20, 30, 40, 50',
        solution: {
            tableHeaders: ['x', 'd = (x-A)/h', 'd²'],
            tableRows: [
                { x: 10, d: -2, d2: 4 },
                { x: 20, d: -1, d2: 1 },
                { x: 30, d: 0, d2: 0 },
                { x: 40, d: 1, d2: 1 },
                { x: 50, d: 2, d2: 4 }
            ],
            steps: [
                'Take Assumed Mean A = 30, Step h = 10',
                <span>d = <Fraction num="x - 30" den="10" /></span>,
                'Sum of d = -2-1+0+1+2 = 0',
                'Sum of d² = 4+1+0+1+4 = 10',
                <span>S.D. = h &times; <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}><Fraction num="&Sigma;d²" den="N" /> - (<Fraction num="&Sigma;d" den="N" />)<sup>2</sup></span></span></span>,
                <span>S.D. = 10 &times; <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}><Fraction num="10" den="5" /> - 0</span></span> = 10 &times; 1.414 = 14.14</span>
            ],
            result: 14.14,
        }
    },
    {
        id: 'sd3',
        title: 'S.D.: Discrete Series',
        question: 'Find Standard Deviation and Variance:',
        headers: ['x', 'f'],
        rows: [
            { x: 4, f: 3 },
            { x: 8, f: 5 },
            { x: 12, f: 9 },
            { x: 16, f: 5 },
            { x: 20, f: 3 }
        ],
        solution: {
            tableHeaders: ['x', 'f', 'f.x', 'x-Mean', '(x-Mean)²', 'f(x-Mean)²'],
            tableRows: [
                { x: 4, f: 3, fx: 12, d: -8, d2: 64, fd2: 192 },
                { x: 8, f: 5, fx: 40, d: -4, d2: 16, fd2: 80 },
                { x: 12, f: 9, fx: 108, d: 0, d2: 0, fd2: 0 },
                { x: 16, f: 5, fx: 80, d: 4, d2: 16, fd2: 80 },
                { x: 20, f: 3, fx: 60, d: 8, d2: 64, fd2: 192 }
            ],
            steps: [
                'Sum of f.x = 12+40+108+80+60 = 300',
                <span>N = 25, Mean = <Fraction num="300" den="25" /> = 12</span>,
                <span>Sum of f(x-Mean)² = 192+80+0+80+192 = 544</span>,
                <span>Variance = <Fraction num="544" den="25" /> = 21.76</span>,
                <span>S.D. = <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}>21.76</span></span> = 4.665</span>
            ],
            result: '4.665 (Variance = 21.76)',
        }
    },
    {
        id: 'sd4',
        title: 'S.D.: Continuous Series',
        question: 'Find S.D. using Step Deviation Method:',
        headers: ['Class', 'f'],
        rows: [
            { class: '0-10', f: 5 },
            { class: '10-20', f: 8 },
            { class: '20-30', f: 15 },
            { class: '30-40', f: 16 },
            { class: '40-50', f: 6 }
        ],
        solution: {
            tableHeaders: ['Class', 'Mid (m)', 'f', 'd=(m-A)/h', 'f.d', 'f.d²'],
            tableRows: [
                { class: '0-10', m: 5, f: 5, d: -2, fd: -10, fd2: 20 },
                { class: '10-20', m: 15, f: 8, d: -1, fd: -8, fd2: 8 },
                { class: '20-30', m: 25, f: 15, d: 0, fd: 0, fd2: 0 },
                { class: '30-40', m: 35, f: 16, d: 1, fd: 16, fd2: 16 },
                { class: '40-50', m: 45, f: 6, d: 2, fd: 12, fd2: 24 }
            ],
            steps: [
                'A = 25 (mid-value of middle class), h = 10',
                <span>d = <Fraction num="m - 25" den="10" /></span>,
                'Sum of f.d = -10-8+0+16+12 = 10',
                'Sum of f.d² = 20+8+0+16+24 = 68',
                'N = 50',
                <span>S.D. = h &times; <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}><Fraction num="&Sigma;fd²" den="N" /> - (<Fraction num="&Sigma;fd" den="N" />)<sup>2</sup></span></span></span>,
                <span>S.D. = 10 &times; <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}><Fraction num="68" den="50" /> - (<Fraction num="10" den="50" />)<sup>2</sup></span></span></span>,
                <span>S.D. = 10 &times; <span style={{ display: 'inline-flex', alignItems: 'center' }}><span style={{ fontSize: '1.2em', marginRight: '2px' }}>&radic;</span><span style={{ borderTop: '1px solid currentColor', paddingTop: '1px' }}>1.36 - 0.04</span></span> = 10 &times; 1.149 = 11.49</span>
            ],
            result: 11.49,
        }
    },
    {
        id: 'sd5',
        title: 'Coefficient of Variation (C.V.)',
        question: 'From the above continuous data, find the Coefficient of Variation.',
        solution: {
            steps: [
                'S.D. = 11.49 (from previous)',
                <span>Mean = A + <Fraction num="&Sigma;fd" den="N" /> &times; h = 25 + <Fraction num="10" den="50" /> &times; 10 = 25 + 2 = 27</span>,
                <span>C.V. = <Fraction num="S.D." den="Mean" /> &times; 100</span>,
                <span>C.V. = <Fraction num="11.49" den="27" /> &times; 100 = 42.56%</span>
            ],
            result: '42.56%',
        }
    },
    {
        id: 'sd6',
        title: 'Comparing Two Series using C.V.',
        question: 'Series A: Mean = 50, S.D. = 10. Series B: Mean = 40, S.D. = 12. Which is more consistent?',
        solution: {
            steps: [
                <span>C.V.(A) = <Fraction num="S.D." den="Mean" /> &times; 100 = <Fraction num="10" den="50" /> &times; 100 = 20%</span>,
                <span>C.V.(B) = <Fraction num="S.D." den="Mean" /> &times; 100 = <Fraction num="12" den="40" /> &times; 100 = 30%</span>,
                'Lower C.V. means MORE consistent',
                'C.V.(A) = 20% < C.V.(B) = 30%',
                'Therefore, Series A is more consistent'
            ],
            result: 'Series A (C.V. = 20%)',
        }
    }
];
