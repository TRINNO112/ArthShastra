/**
 * Lesson 10: Measures of Dispersion — Practice Problems Data
 * 
 * NCERT Class 11 Statistics Ch. 6
 * Topics: Range, Quartile Deviation, Mean Deviation, Standard Deviation, Variance, CV
 * 
 * NOTE: Avoid using special Unicode symbols like the square root sign
 * as they may not render in all browsers/fonts. Use plain text descriptions instead.
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
                'Q1 = Size of (N+1)/4 th item = 10/4 = 2.5th item',
                'Q1 = 18 + 0.5 x (20 - 18) = 18 + 1 = 19',
                'Q3 = Size of 3(N+1)/4 th item = 30/4 = 7.5th item',
                'Q3 = 30 + 0.5 x (35 - 30) = 30 + 2.5 = 32.5',
                'Q.D. = (Q3 - Q1) / 2 = (32.5 - 19) / 2 = 6.75'
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
                'Q1 = 19, Q3 = 32.5 (from previous)',
                'Coefficient of Q.D. = (Q3 - Q1) / (Q3 + Q1)',
                '= (32.5 - 19) / (32.5 + 19)',
                '= 13.5 / 51.5 = 0.262'
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
                'Q1 = Size of (N+1)/4 th item = 41/4 = 10.25th item',
                'c.f. just exceeding 10.25 is 25, so Q1 = 30',
                'Q3 = Size of 3(N+1)/4 th item = 3 x 41/4 = 30.75th item',
                'c.f. just exceeding 30.75 is 35, so Q3 = 40',
                'Q.D. = (Q3 - Q1) / 2 = (40 - 30) / 2 = 5'
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
                'Q1: N/4 = 12.5, Q1 class = 10-20 (c.f. = 17 >= 12.5)',
                'Q1 = 10 + ((12.5 - 5) / 12) x 10 = 10 + 6.25 = 16.25',
                'Q3: 3N/4 = 37.5, Q3 class = 30-40 (c.f. = 45 >= 37.5)',
                'Q3 = 30 + ((37.5 - 35) / 10) x 10 = 30 + 2.5 = 32.5',
                'Q.D. = (Q3 - Q1) / 2 = (32.5 - 16.25) / 2 = 8.125'
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
                'Mean = (2 + 4 + 7 + 8 + 9) / 5 = 30 / 5 = 6',
                'Deviations |x - Mean|:  |2-6|=4, |4-6|=2, |7-6|=1, |8-6|=2, |9-6|=3',
                'Sum of |x - Mean| = 4 + 2 + 1 + 2 + 3 = 12',
                'M.D.(Mean) = Sum / N = 12 / 5 = 2.4'
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
                'M.D.(M) = Sum / N = 18 / 7 = 2.571'
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
                'Mean = 440 / 30 = 14.67 (approx 14 for deviations)',
                'Calculate |x - Mean| for each x and multiply by f',
                'Sum of f.|x - Mean| = 36+24+10+48+22 = 140',
                'M.D.(Mean) = 140 / 30 = 4.67'
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
                'Mean = 1350 / 50 = 27 (approx 26 for working)',
                'Calculate |m - Mean| for each class and multiply by f',
                'Sum of f.|m - Mean| = 105+88+15+144+114 = 466',
                'M.D.(Mean) = 466 / 50 = 9.32'
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
                'Coefficient of M.D. = M.D.(Mean) / Mean',
                '= 9.32 / 27 = 0.345'
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
                'Mean = (4+6+8+10+12) / 5 = 40 / 5 = 8',
                'Calculate deviations (x - Mean) and square them',
                'Sum of (x - Mean)² = 16+4+0+4+16 = 40',
                'Variance = Sum of (x - Mean)² / N = 40 / 5 = 8',
                'S.D. = Square root of 8 = 2.83'
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
                'd = (x - 30) / 10',
                'Sum of d = -2-1+0+1+2 = 0',
                'Sum of d² = 4+1+0+1+4 = 10',
                'S.D. = h x Square root of (Sum d²/N - (Sum d/N)²)',
                'S.D. = 10 x Square root of (10/5 - 0) = 10 x 1.414 = 14.14'
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
                'N = 25, Mean = 300/25 = 12',
                'Sum of f(x-Mean)² = 192+80+0+80+192 = 544',
                'Variance = 544 / 25 = 21.76',
                'S.D. = Square root of 21.76 = 4.665'
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
                'd = (m - 25) / 10',
                'Sum of f.d = -10-8+0+16+12 = 10',
                'Sum of f.d² = 20+8+0+16+24 = 68',
                'N = 50',
                'S.D. = h x Square root of (Sum f.d²/N - (Sum f.d/N)²)',
                'S.D. = 10 x Square root of (68/50 - (10/50)²)',
                'S.D. = 10 x Square root of (1.36 - 0.04) = 10 x 1.149 = 11.49'
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
                'Mean = A + (Sum f.d / N) x h = 25 + (10/50) x 10 = 25 + 2 = 27',
                'C.V. = (S.D. / Mean) x 100',
                'C.V. = (11.49 / 27) x 100 = 42.56%'
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
                'C.V. of Series A = (S.D./Mean) x 100 = (10/50) x 100 = 20%',
                'C.V. of Series B = (S.D./Mean) x 100 = (12/40) x 100 = 30%',
                'Lower C.V. means MORE consistent',
                'C.V.(A) = 20% < C.V.(B) = 30%',
                'Therefore, Series A is more consistent'
            ],
            result: 'Series A (C.V. = 20%)',
        }
    }
];
