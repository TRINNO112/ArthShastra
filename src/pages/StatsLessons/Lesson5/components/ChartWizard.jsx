import React, { useState } from 'react';
import { FaChartBar, FaChartPie, FaExchangeAlt, FaArrowUp, FaCheckCircle, FaTimesCircle, FaLightbulb, FaPercentage } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ChartWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const scenarios = [
        {
            id: 1,
            title: "Scenario 1: Net Profit & Loss",
            desc: "A company wants to show its Net Profit and Net Loss over the last 5 years. Some years had profits, others had losses.",
            correct: 'deviation',
            options: [
                { id: 'simple', label: 'Simple Bar Diagram', icon: <FaChartBar /> },
                { id: 'deviation', label: 'Deviation Bar Diagram', icon: <FaArrowUp /> },
                { id: 'pie', label: 'Pie Chart', icon: <FaChartPie /> }
            ],
            explanation: "Correct! Deviation Bar Diagrams are best for showing net quantities like Profit vs Loss because they can go below the axis (negative values).",
            previewData: [
                { name: '2019', val: 20 }, { name: '2020', val: -10 },
                { name: '2021', val: 15 }, { name: '2022', val: -5 }
            ]
        },
        {
            id: 2,
            title: "Scenario 2: Family Budget",
            desc: "You want to show how a family's Total Monthly Income (₹50,000) is divided into Rent, Food, Education, and Savings.",
            correct: 'pie',
            options: [
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> },
                { id: 'pie', label: 'Pie Chart (Circle Diagram)', icon: <FaChartPie /> },
                { id: 'deviation', label: 'Deviation Bar Diagram', icon: <FaArrowUp /> }
            ],
            explanation: "Excellent! A Pie Chart (or Component Bar) is perfect for showing the proportional breakdown of a 'Whole' into its parts.",
            previewData: [
                { name: 'Rent', val: 30 }, { name: 'Food', val: 40 },
                { name: 'Savings', val: 30 }
            ]
        },
        {
            id: 3,
            title: "Scenario 3: Import vs Export",
            desc: "The government wants to compare the Import and Export values of India side-by-side for the years 2020, 2021, and 2022.",
            correct: 'multiple',
            options: [
                { id: 'simple', label: 'Simple Bar Diagram', icon: <FaChartBar /> },
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> },
                { id: 'component', label: 'Sub-divided Bar', icon: <FaChartBar /> }
            ],
            explanation: "Spot on! Multiple Bar Diagrams are ideal for comparing two or more related variables (Import/Export) for the same time period.",
            previewData: [
                { name: '2020', imp: 40, exp: 30 },
                { name: '2021', imp: 50, exp: 45 },
                { name: '2022', imp: 60, exp: 55 }
            ]
        },
        {
            id: 4,
            title: "Scenario 4: Wheat Production Trend",
            desc: "Showing the total production of Wheat in India over the last 10 years to visualize the trend.",
            correct: 'simple',
            options: [
                { id: 'simple', label: 'Simple Bar Diagram', icon: <FaChartBar /> },
                { id: 'percentage', label: 'Percentage Bar Diagram', icon: <FaChartPie /> },
                { id: 'deviation', label: 'Deviation Bar', icon: <FaArrowUp /> }
            ],
            explanation: "Correct. Since there is only one variable (Wheat Production) changing over time, a Simple Bar Diagram is the cleanest choice.",
            previewData: [
                { name: '2010', val: 50 }, { name: '2015', val: 70 },
                { name: '2020', val: 90 }
            ]
        },
        {
            id: 5,
            title: "Scenario 5: Changing Sector Shares",
            desc: "You want to compare how the SHARE of Primary, Secondary, and Tertiary sectors in GDP changed from 1950 to 2020. The total value doesn't matter, only the proportion.",
            correct: 'percentage',
            options: [
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> },
                { id: 'component', label: 'Sub-divided Bar', icon: <FaChartBar /> },
                { id: 'percentage', label: 'Percentage Bar Diagram', icon: <FaPercentage /> }
            ],
            explanation: "Exactly! When comparing proportions (shares) and ignoring absolute totals, a Percentage Bar Diagram is the specific tool.",
            previewData: [
                { name: '1950', p: 60, s: 20, t: 20 },
                { name: '2020', p: 15, s: 30, t: 55 }
            ]
        },
        {
            id: 6,
            title: "Scenario 6: Birth Rate vs Death Rate",
            desc: "Comparing the Birth Rate and Death Rate of a country across 5 different decades.",
            correct: 'multiple',
            options: [
                { id: 'dataset', label: 'Time Series Graph', icon: <FaChartBar /> },
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> },
                { id: 'pie', label: 'Pie Chart', icon: <FaChartPie /> }
            ],
            explanation: "Correct! We are comparing two variables (Birth Rate & Death Rate) for multiple time periods.",
            previewData: [
                { name: '1980', imp: 40, exp: 15 },
                { name: '2020', imp: 20, exp: 10 }
            ]
        },
        {
            id: 7,
            title: "Scenario 7: Cost of Production Breakdown",
            desc: "A factory owner wants to see the Total Cost for 3 years, AND how much of that cost was Raw Material, Wages, and Rent.",
            correct: 'component',
            options: [
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> },
                { id: 'component', label: 'Sub-divided Bar Diagram', icon: <FaChartBar /> },
                { id: 'simple', label: 'Simple Bar Diagram', icon: <FaChartBar /> }
            ],
            explanation: "Perfect. Sub-divided (Component) bars show the Total Magnitude AND the division of components within that total.",
            previewData: [
                { name: '2021', p: 30, s: 20, t: 10 },
                { name: '2022', p: 40, s: 25, t: 15 }
            ]
        },
        {
            id: 8,
            title: "Scenario 8: Balance of Trade",
            desc: "Visualizing the Surplus (+) or Deficit (-) in a country's trade balance over 10 years.",
            correct: 'deviation',
            options: [
                { id: 'deviation', label: 'Deviation Bar Diagram', icon: <FaArrowUp /> },
                { id: 'percentage', label: 'Percentage Bar Diagram', icon: <FaPercentage /> },
                { id: 'component', label: 'Component Bar Diagram', icon: <FaChartBar /> }
            ],
            explanation: "Yes! Surplus is positive, Deficit is negative. Only Deviation Bars handle negative values effectively.",
            previewData: [
                { name: '2019', val: 5 }, { name: '2020', val: -12 },
                { name: '2021', val: -8 }, { name: '2022', val: 2 }
            ]
        },
        {
            id: 9,
            title: "Scenario 9: Student Composition",
            desc: "Showing the number of Arts, Science, and Commerce students in College A and College B.",
            correct: 'multiple',
            options: [
                { id: 'pie', label: 'Pie Chart', icon: <FaChartPie /> },
                { id: 'simple', label: 'Simple Bar Diagram', icon: <FaChartBar /> },
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> }
            ],
            explanation: "Correct. Comparing the same categories (Streams) across different groups (Colleges) works best with Multiple Bars.",
            previewData: [
                { name: 'Col A', imp: 50, exp: 30 },
                { name: 'Col B', imp: 40, exp: 45 }
            ]
        },
        {
            id: 10,
            title: "Scenario 10: Electricity Bill Components",
            desc: "Showing how your ₹1000 electricity bill is split into Energy Charge, Fixed Charge, and Taxes.",
            correct: 'pie',
            options: [
                { id: 'deviation', label: 'Deviation Bar Diagram', icon: <FaArrowUp /> },
                { id: 'pie', label: 'Pie Chart', icon: <FaChartPie /> },
                { id: 'multiple', label: 'Multiple Bar Diagram', icon: <FaExchangeAlt /> }
            ],
            explanation: "Excellente! Splitting a single total (Bill) into its constituents is the classic use case for a Pie Chart.",
            previewData: [
                { name: 'Energy', val: 600 }, { name: 'Fixed', val: 200 },
                { name: 'Tax', val: 200 }
            ]
        }
    ];

    const handleAnswer = (optionId) => {
        setSelectedOption(optionId);
        setShowResult(true);
        if (optionId === scenarios[currentStep].correct) {
            setScore(score + 1);
        }
    };

    const nextStep = () => {
        setShowResult(false);
        setSelectedOption(null);
        if (currentStep < scenarios.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep('finished');
        }
    };

    if (currentStep === 'finished') {
        return (
            <div className="stats-card animate-fadeIn" style={{ textAlign: 'center', padding: '50px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏆</div>
                <h2 style={{ color: '#fff', fontSize: '2.5rem' }}>Chart Master!</h2>
                <p style={{ fontSize: '1.2rem', color: '#cbd5e1' }}>You scored {score} out of {scenarios.length}</p>
                <div style={{ marginTop: '30px' }}>
                    <button
                        className="stats-btn stats-btn-primary"
                        onClick={() => { setCurrentStep(0); setScore(0); }}
                    >
                        Play Again
                    </button>
                </div>
            </div>
        );
    }

    const currentScenario = scenarios[currentStep];

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaLightbulb style={{ color: 'var(--stats-gold)' }} />
                CHART WIZARD
            </h2>
            <p className="stats-subtitle">Read the scenario and choose the best diagram to visualize the data.</p>

            <div className="stats-grid-2" style={{ alignItems: 'start' }}>
                {/* Left: The Scenario */}
                <div>
                    <div className="stats-card" style={{ borderLeft: '4px solid var(--stats-primary)', background: '#1e293b' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span style={{ fontWeight: 'bold', color: 'var(--stats-primary-light)' }}>QUESTION {currentStep + 1}/{scenarios.length}</span>
                            <span style={{ color: '#cbd5e1', background: 'rgba(255,255,255,0.1)', padding: '2px 10px', borderRadius: '12px' }}>Score: {score}</span>
                        </div>
                        <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px' }}>{currentScenario.title}</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#e2e8f0', marginBottom: '30px' }}>
                            {currentScenario.desc}
                        </p>

                        <div style={{ display: 'grid', gap: '15px' }}>
                            {currentScenario.options.map(opt => (
                                <button
                                    key={opt.id}
                                    onClick={() => !showResult && handleAnswer(opt.id)}
                                    // Improved Contrast Styles
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '15px',
                                        padding: '15px 20px',
                                        justifyContent: 'flex-start',
                                        background: showResult
                                            ? (opt.id === currentScenario.correct ? 'rgba(16, 185, 129, 0.25)' : (opt.id === selectedOption ? 'rgba(239, 68, 68, 0.25)' : '#334155')) /* Lighter inactive bg */
                                            : '#334155', /* Lighter default bg */
                                        border: showResult
                                            ? (opt.id === currentScenario.correct ? '2px solid #10b981' : (opt.id === selectedOption ? '2px solid #ef4444' : '2px solid transparent'))
                                            : '2px solid transparent',
                                        borderRadius: '12px',
                                        opacity: showResult && opt.id !== currentScenario.correct && opt.id !== selectedOption ? 0.6 : 1,
                                        cursor: showResult ? 'default' : 'pointer',
                                        transition: 'all 0.2s ease',
                                        color: '#fff', /* Brighter Text */
                                        fontWeight: '500',
                                        fontSize: '1.05rem'
                                    }}
                                >
                                    <span style={{ fontSize: '1.2rem', color: currentScenario.correct === opt.id && showResult ? '#10b981' : '#94a3b8' }}>{opt.icon}</span>
                                    <span>{opt.label}</span>
                                    {showResult && opt.id === currentScenario.correct && <FaCheckCircle style={{ marginLeft: 'auto', color: '#10b981', fontSize: '1.2rem' }} />}
                                    {showResult && opt.id === selectedOption && opt.id !== currentScenario.correct && <FaTimesCircle style={{ marginLeft: 'auto', color: '#ef4444', fontSize: '1.2rem' }} />}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: The Reveal */}
                <div>
                    {showResult ? (
                        <div className="stats-card animate-popIn" style={{ background: '#0f172a', border: '1px solid #334155' }}>
                            <h3 style={{ color: selectedOption === currentScenario.correct ? '#10b981' : '#ef4444', marginBottom: '10px' }}>
                                {selectedOption === currentScenario.correct ? 'Correct Choice!' : 'Not quite...'}
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '20px', lineHeight: '1.6' }}>
                                {currentScenario.explanation}
                            </p>

                            {/* Mini Chart Preview */}
                            <div style={{ height: '220px', width: '100%', padding: '15px', background: '#1e293b', borderRadius: '12px', border: '1px solid #334155' }}>
                                <ResponsiveContainer>
                                    {currentScenario.correct === 'pie' ? (
                                        <PieChart>
                                            <Pie data={currentScenario.previewData} dataKey="val" cx="50%" cy="50%" outerRadius={70}>
                                                <Cell fill="#ec4899" />
                                                <Cell fill="#8b5cf6" />
                                                <Cell fill="#10b981" />
                                            </Pie>
                                            <Tooltip contentStyle={{ background: '#0f172a', border: 'none', color: '#fff' }} />
                                        </PieChart>
                                    ) : (
                                        <BarChart data={currentScenario.previewData} stackOffset={currentScenario.correct === 'percentage' ? 'expand' : 'none'}>
                                            <XAxis dataKey="name" hide />
                                            <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ background: '#0f172a', border: 'none', color: '#fff' }} />
                                            {currentScenario.correct === 'multiple' ? (
                                                <>
                                                    <Bar dataKey="imp" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                                                    <Bar dataKey="exp" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                                </>
                                            ) : currentScenario.correct === 'component' || currentScenario.correct === 'percentage' ? (
                                                <>
                                                    <Bar dataKey="p" stackId="a" fill="#ec4899" />
                                                    <Bar dataKey="s" stackId="a" fill="#8b5cf6" />
                                                    <Bar dataKey="t" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
                                                </>
                                            ) : (
                                                <Bar dataKey="val" fill={currentScenario.correct === 'deviation' ? '#ef4444' : '#3b82f6'} radius={[4, 4, 0, 0]} >
                                                    {currentScenario.correct === 'deviation' && currentScenario.previewData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.val > 0 ? '#10b981' : '#ef4444'} />
                                                    ))}
                                                </Bar>
                                            )}
                                        </BarChart>
                                    )}
                                </ResponsiveContainer>
                            </div>

                            <button onClick={nextStep} className="stats-btn stats-btn-primary" style={{ width: '100%', marginTop: '20px', justifyContent: 'center', fontSize: '1.1rem', padding: '15px' }}>
                                {currentStep < scenarios.length - 1 ? 'Next Question' : 'Finish Quiz'}
                            </button>
                        </div>
                    ) : (
                        <div className="stats-card" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.7, border: '2px dashed #475569', background: 'rgba(30, 41, 59, 0.5)' }}>
                            <div style={{ textAlign: 'center', color: '#94a3b8' }}>
                                <div style={{ background: '#0f172a', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                                    <FaLightbulb size={40} color="#f59e0b" />
                                </div>
                                <h3 style={{ color: '#fff', marginBottom: '10px' }}>Waiting for your answer...</h3>
                                <p>Select an option on the left to reveal the solution.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChartWizard;
