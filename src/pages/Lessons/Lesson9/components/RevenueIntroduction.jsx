import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartPie, FaChartLine, FaWallet, FaArrowRight, FaLightbulb } from 'react-icons/fa';
import '../../css/lessons.css';

const RevenueIntroduction = () => {
    const [activeTab, setActiveTab] = useState('revenue');

    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson">Concept</span>
                <h2 className="section-title-lesson">Introduction to Revenue</h2>
                <p className="section-subtitle-lesson">Understanding the money a firm earns from sales.</p>
            </div>

            {/* Hero Definition */}
            <div className="content-card featured-card">
                <div className="card-glow"></div>
                <div className="card-content">
                    <h3 className="card-title">
                        <FaMoneyBillWave className="title-icon gold" /> What is Revenue?
                    </h3>
                    <p className="intro-text">
                        <strong>Revenue</strong> refers to the money receipts of a firm from the sale of its output. It is the sales proceeds or sales turnover of a firm.
                    </p>
                    <div className="quote-box">
                        <p>"Revenue is not Profit. Revenue is the income generated, while Profit is the income left after covering all costs."</p>
                    </div>
                </div>
            </div>

            {/* The 3 Concepts */}
            <h3 className="subsection-title text-center mt-5 mb-4">The Three Concepts of Revenue</h3>
            <div className="feature-grid three-col"> {/* Reusing grid styles */}

                <div className="feature-item">
                    <div className="feature-icon gold"><FaChartPie /></div>
                    <h4>Total Revenue (TR)</h4>
                    <p>Total amount of money received from selling a specific quantity of output.</p>
                    <div className="formula-box">TR = Price × Quantity</div>
                </div>

                <div className="feature-item">
                    <div className="feature-icon cyan"><FaChartLine /></div>
                    <h4>Average Revenue (AR)</h4>
                    <p>Revenue earned per unit of output. It is the same as the <strong>Price</strong> of the commodity.</p>
                    <div className="formula-box">AR = TR / Q = Price</div>
                </div>

                <div className="feature-item">
                    <div className="feature-icon green"><FaMoneyBillWave /></div>
                    <h4>Marginal Revenue (MR)</h4>
                    <p>Addition to Total Revenue derived from selling one more unit of output.</p>
                    <div className="formula-box">MR = TR<sub>n</sub> - TR<sub>n-1</sub></div>
                </div>

            </div>

            {/* Redesigned Dashboard Component */}
            <div className="rev-profit-dashboard">
                <div className={`dashboard-glow ${activeTab === 'profit' ? 'profit-glow' : ''}`}></div>
                <div className="dashboard-inner">

                    {/* Header with Toggle */}
                    <div className="dashboard-header-row">
                        <div className="dashboard-title">
                            <FaWallet className={activeTab === 'revenue' ? 'text-gold' : 'text-green-400'} />
                            <span>Financial Snapshot</span>
                        </div>
                        <div className="premium-toggle-group" style={{ margin: 0 }}>
                            <button
                                className={`premium-toggle-btn ${activeTab === 'revenue' ? 'active' : ''}`}
                                onClick={() => setActiveTab('revenue')}
                            >
                                Revenue View
                            </button>
                            <button
                                className={`premium-toggle-btn ${activeTab === 'profit' ? 'active' : ''}`}
                                onClick={() => setActiveTab('profit')}
                            >
                                Profit View
                            </button>
                        </div>
                    </div>

                    {/* Dynamic Content */}
                    {activeTab === 'revenue' ? (
                        <div className="animate-fade-in">
                            <div className="metric-display-container">
                                <div className="metric-label">Total Sales (Top Line)</div>
                                <div className="metric-value-giant metric-gold">₹ 10,000</div>
                                <div className="metric-subtext">100 Units sold @ ₹100 each</div>
                            </div>

                            <div className="deep-dive-box" style={{ borderColor: '#ffd700' }}>
                                <div className="deep-dive-title">
                                    <FaLightbulb className="text-gold" /> Why "Top Line"?
                                </div>
                                <p className="deep-dive-text">
                                    Revenue sits at the very top of an Income Statement. It represents the <strong>Gross Income</strong> before any expenses (Rent, Wages, Raw Material) are paid.
                                    High revenue means high demand, but not necessarily high wealth.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            <div className="metric-display-container">
                                <div className="metric-label">Net Gain (Bottom Line)</div>
                                <div className="metric-value-giant metric-green">₹ 2,000</div>

                                {/* Waterfall Visual */}
                                <div className="waterfall-container">
                                    <div className="waterfall-step">
                                        <div className="waterfall-box wf-revenue">₹10,000</div>
                                        <small>Revenue</small>
                                    </div>
                                    <div className="wf-operator">-</div>
                                    <div className="waterfall-step">
                                        <div className="waterfall-box wf-cost">₹8,000</div>
                                        <small>Costs</small>
                                    </div>
                                    <div className="wf-operator">=</div>
                                    <div className="waterfall-step">
                                        <div className="waterfall-box wf-profit">₹2,000</div>
                                        <small>Profit</small>
                                    </div>
                                </div>
                            </div>

                            <div className="deep-dive-box" style={{ borderColor: '#00ff88' }}>
                                <div className="deep-dive-title">
                                    <FaLightbulb className="text-green-400" /> Why "Bottom Line"?
                                </div>
                                <p className="deep-dive-text">
                                    Profit is what remains after all obligations are met. It is the <strong>Net Income</strong>.
                                    A firm maximizes PROFIT, not just Revenue. If costs are higher than revenue, the firm makes a Loss.
                                </p>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </section>
    );
};

export default RevenueIntroduction;
