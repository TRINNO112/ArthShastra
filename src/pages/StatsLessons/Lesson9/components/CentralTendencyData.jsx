import React from 'react';

// ─── Helper: Renders X̄ (X-bar) ───
export const XBar = () => <span style={{ textDecoration: 'overline' }}>X</span>;

/* =============================================
   MEDIAN PROBLEMS (6 Problems)
   ============================================= */
export const medianProblems = [
    {
        id: 'm1',
        type: 'individual_odd',
        title: 'Median: Individual Series (Odd N)',
        question: 'Find the Median from the following data: 25, 15, 23, 40, 27, 25, 23, 25, 20',
        data: [25, 15, 23, 40, 27, 25, 23, 25, 20],
        solution: {
            steps: [
                'Arrange data in ascending order: 15, 20, 23, 23, 25, 25, 25, 27, 40',
                'N = 9 (Odd)',
                'Median (M) = Size of ((N + 1) ÷ 2)th item',
                'M = ((9 + 1) ÷ 2)th item = 5th item',
                '5th item in the arranged series = 25'
            ],
            result: 25,
        }
    },
    {
        id: 'm2',
        type: 'individual_even',
        title: 'Median: Individual Series (Even N)',
        question: 'Calculate Median: 10, 32, 17, 19, 21, 22, 9, 35',
        data: [10, 32, 17, 19, 21, 22, 9, 35],
        solution: {
            steps: [
                'Ascending Order: 9, 10, 17, 19, 21, 22, 32, 35',
                'N = 8 (Even)',
                'M = Average of (N/2)th and (N/2 + 1)th items',
                'M = Average of 4th and 5th items',
                'M = (19 + 21) ÷ 2 = 40 ÷ 2 = 20'
            ],
            result: 20,
        }
    },
    {
        id: 'm3',
        type: 'individual_odd',
        title: 'Median: Individual Series (Odd N)',
        question: 'Find the Median: 3, 7, 1, 9, 5, 11, 8',
        data: [3, 7, 1, 9, 5, 11, 8],
        solution: {
            steps: [
                'Ascending Order: 1, 3, 5, 7, 8, 9, 11',
                'N = 7 (Odd)',
                'M = ((7 + 1) ÷ 2)th item = 4th item',
                '4th item = 7'
            ],
            result: 7,
        }
    },
    {
        id: 'm4',
        type: 'discrete',
        title: 'Median: Discrete Series',
        question: 'Find Median from the following frequency distribution:',
        headers: ['xᵢ', 'fᵢ'],
        rows: [
            { x: 10, f: 2 },
            { x: 20, f: 8 },
            { x: 30, f: 16 },
            { x: 40, f: 26 },
            { x: 50, f: 20 },
            { x: 60, f: 16 },
            { x: 70, f: 7 },
            { x: 80, f: 4 }
        ],
        solution: {
            tableHeaders: ['xᵢ', 'fᵢ', 'c.f.'],
            tableRows: [
                { x: 10, f: 2, cf: 2 },
                { x: 20, f: 8, cf: 10 },
                { x: 30, f: 16, cf: 26 },
                { x: 40, f: 26, cf: 52 },
                { x: 50, f: 20, cf: 72 },
                { x: 60, f: 16, cf: 88 },
                { x: 70, f: 7, cf: 95 },
                { x: 80, f: 4, cf: 99 }
            ],
            steps: [
                'Calculate Cumulative Frequencies (c.f.)',
                'N = Σfᵢ = 99',
                '(N + 1) ÷ 2 = (99 + 1) ÷ 2 = 50',
                'Look for the cumulative frequency ≥ 50 → c.f. = 52',
                'Corresponding xᵢ = 40'
            ],
            result: 40,
        }
    },
    {
        id: 'm5',
        type: 'continuous',
        title: 'Median: Continuous Series (Marks)',
        question: 'Calculate the Median marks from the following distribution:',
        headers: ['Marks (Class)', 'Students (fᵢ)'],
        rows: [
            { class: '0–10', f: 5 },
            { class: '10–20', f: 10 },
            { class: '20–30', f: 20 },
            { class: '30–40', f: 40 },
            { class: '40–50', f: 20 },
            { class: '50–60', f: 5 }
        ],
        solution: {
            tableHeaders: ['Class', 'fᵢ', 'c.f.'],
            tableRows: [
                { class: '0–10', f: 5, cf: 5 },
                { class: '10–20', f: 10, cf: 15 },
                { class: '20–30', f: 20, cf: 35 },
                { class: '30–40', f: 40, cf: 75, highlight: true },
                { class: '40–50', f: 20, cf: 95 },
                { class: '50–60', f: 5, cf: 100 }
            ],
            steps: [
                'N = Σfᵢ = 100',
                'N ÷ 2 = 50',
                'Locate the class where c.f. first exceeds 50 → 30–40 (Median Class)',
                'L = 30, N/2 = 50, c.f. = 35 (preceding class), f = 40, h = 10',
                'M = 30 + ((50 − 35) ÷ 40) × 10',
                'M = 30 + (15 ÷ 40) × 10 = 30 + 3.75 = 33.75'
            ],
            result: 33.75,
        }
    },
    {
        id: 'm6',
        type: 'continuous',
        title: 'Median: Continuous Series (Wages)',
        question: 'Find the Median wage:',
        headers: ['Wages (₹)', 'No. of Workers (fᵢ)'],
        rows: [
            { class: '100–200', f: 15 },
            { class: '200–300', f: 20 },
            { class: '300–400', f: 30 },
            { class: '400–500', f: 20 },
            { class: '500–600', f: 15 }
        ],
        solution: {
            tableHeaders: ['Class', 'fᵢ', 'c.f.'],
            tableRows: [
                { class: '100–200', f: 15, cf: 15 },
                { class: '200–300', f: 20, cf: 35 },
                { class: '300–400', f: 30, cf: 65, highlight: true },
                { class: '400–500', f: 20, cf: 85 },
                { class: '500–600', f: 15, cf: 100 }
            ],
            steps: [
                'N = Σfᵢ = 100',
                'N ÷ 2 = 50',
                'Median Class = 300–400 (c.f. first exceeds 50)',
                'L = 300, N/2 = 50, c.f. = 35, f = 30, h = 100',
                'M = 300 + ((50 − 35) ÷ 30) × 100',
                'M = 300 + (15 ÷ 30) × 100 = 300 + 50 = 350'
            ],
            result: 350,
        }
    }
];

/* =============================================
   MODE PROBLEMS (5 Problems)
   ============================================= */
export const modeProblems = [
    {
        id: 'z1',
        type: 'individual_inspection',
        title: 'Mode: Individual Series (By Inspection)',
        question: 'Find the Mode: 2, 5, 3, 5, 7, 5, 8, 1, 5, 3',
        data: [2, 5, 3, 5, 7, 5, 8, 1, 5, 3],
        solution: {
            steps: [
                'Arrange: 1, 2, 3, 3, 5, 5, 5, 5, 7, 8',
                'Frequency count: 1→1, 2→1, 3→2, 5→4, 7→1, 8→1',
                '5 appears most frequently (4 times)',
                'Mode (Z) = 5'
            ],
            result: 5,
        }
    },
    {
        id: 'z2',
        type: 'individual_bimodal',
        title: 'Mode: Bimodal Data',
        question: 'Find the Mode: 10, 20, 20, 30, 30, 40',
        data: [10, 20, 20, 30, 30, 40],
        solution: {
            steps: [
                'Frequency: 10→1, 20→2, 30→2, 40→1',
                'Both 20 and 30 have the highest frequency (2 each)',
                'This is Bimodal — the data has TWO modes'
            ],
            result: '20 and 30 (Bimodal)',
        }
    },
    {
        id: 'z3',
        type: 'discrete_inspection',
        title: 'Mode: Discrete Series (By Inspection)',
        question: 'Find the Mode:',
        headers: ['Size (xᵢ)', 'Frequency (fᵢ)'],
        rows: [
            { x: 10, f: 5 },
            { x: 20, f: 8 },
            { x: 30, f: 12 },
            { x: 40, f: 15 },
            { x: 50, f: 10 },
            { x: 60, f: 6 }
        ],
        solution: {
            steps: [
                'Inspect the frequency column',
                'Highest frequency = 15 (for xᵢ = 40)',
                'Mode (Z) = 40'
            ],
            result: 40,
        }
    },
    {
        id: 'z4',
        type: 'mode_grouping',
        title: 'Mode: Grouping Method (Ambiguous Case)',
        question: 'Find Mode using Grouping Method when frequencies are close:',
        headers: ['X', 'f'],
        rows: [
            { x: 10, f: 8 },
            { x: 15, f: 12 },
            { x: 20, f: 36 },
            { x: 25, f: 35 },
            { x: 30, f: 28 },
            { x: 35, f: 18 },
            { x: 40, f: 9 }
        ],
        solution: {
            note: 'Since frequencies 36 and 35 are very close, we use the Grouping & Analysis Table method to confirm the modal value.',
            steps: [
                'Prepare Grouping Table (6 columns of frequency combinations)',
                'Prepare Analysis Table — Tally which value appears most often',
                'Column I: Highest = 36 (X = 20)',
                'Column II–VI: Grouping confirms concentration around X = 20',
                'Analysis Table confirms: Z = 20'
            ],
            result: 20,
        }
    },
    {
        id: 'z5',
        type: 'mode_continuous',
        title: 'Mode: Continuous Series',
        question: 'Compute Mode from the data:',
        headers: ['Class Interval', 'Frequency (fᵢ)'],
        rows: [
            { class: '0–5', f: 2 },
            { class: '5–10', f: 4 },
            { class: '10–15', f: 10 },
            { class: '15–20', f: 8 },
            { class: '20–25', f: 4 },
            { class: '25–30', f: 2 }
        ],
        solution: {
            steps: [
                'Modal Class (highest fᵢ) = 10–15   (fᵢ = 10)',
                'l₁ = 10 (Lower limit of modal class)',
                'f₁ = 10 (Frequency of modal class)',
                'f₀ = 4  (Frequency of preceding class)',
                'f₂ = 8  (Frequency of succeeding class)',
                'h = 5   (Class width)',
                'Z = 10 + ((10 − 4) ÷ (2×10 − 4 − 8)) × 5',
                'Z = 10 + (6 ÷ 8) × 5 = 10 + 3.75 = 13.75'
            ],
            result: 13.75,
        }
    }
];
