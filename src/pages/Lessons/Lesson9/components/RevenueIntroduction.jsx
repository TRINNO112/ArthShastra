import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartPie, FaChartLine, FaInfoCircle } from 'react-icons/fa';
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

            {/* Interactive Distinction */}
            <div className="content-card mt-5">
                <h4 className="card-title"><FaInfoCircle className="text-blue-400" /> Revenue vs. Profit</h4>
                <p className="mb-4 text-gray-300">Click the buttons to see the difference:</p>

                <div className="flex gap-4 mb-4">
                    <button
                        className={`option-btn ${activeTab === 'revenue' ? 'selected' : ''}`}
                        onClick={() => setActiveTab('revenue')}
                    >
                        Show Revenue
                    </button>
                    <button
                        className={`option-btn ${activeTab === 'profit' ? 'selected' : ''}`}
                        onClick={() => setActiveTab('profit')}
                    >
                        Show Profit
                    </button>
                </div>

                <div className="comparison-container">
                    {activeTab === 'revenue' ? (
                        <div className="animate-fade-in w-full">
                            <h5 className="comparison-value text-gradient-gold">₹ 10,000</h5>
                            <div className="comparison-label">Total Sales (100 units @ ₹100)</div>
                            <p className="comparison-quote" style={{ borderLeftColor: '#00ff88', color: '#00ff88' }}>"This is the Top Line"</p>
                            <p className="mt-6 text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
                                Revenue is the raw income from sales <strong>before</strong> any expenses are deducted.
                                It shows the pure market demand for the product.
                            </p>
                        </div>
                    ) : (
                        <div className="animate-fade-in w-full">
                            <h5 className="comparison-value text-gradient-green">₹ 2,000</h5>
                            <div className="comparison-label">Total Sales (₹10,000) - Total Cost (₹8,000)</div>
                            <p className="comparison-quote" style={{ borderLeftColor: '#ffd700', color: '#ffd700' }}>"This is the Bottom Line"</p>
                            <div className="mt-6 text-sm text-gray-300 leading-relaxed max-w-lg mx-auto">
                                <p className="mb-2 text-lg font-bold text-white">Profit = TR - TC</p>
                                <p>It represents the actual financial gain of the firm after paying for all inputs (Land, Labor, Capital).</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};

export default RevenueIntroduction;
