import React, { useState } from 'react';
import { FaMoneyBillWave, FaChartPie, FaChartLine, FaWallet, FaArrowRight, FaLightbulb, FaBuilding, FaGlobeAmericas } from 'react-icons/fa';
import '../lesson9.css';

const RevenueIntroduction = () => {
    const [activeTab, setActiveTab] = useState('revenue');

    return (
        <section className="lesson-section">
            <div className="market-header">
                <span className="market-status">● MARKET OPEN</span>
                <h2 className="market-title">Concept of Revenue</h2>
                <p style={{ color: '#888', letterSpacing: '1px' }}>TICKER: <strong>REV</strong> | SECTOR: <strong>FINANCE</strong></p>
            </div>

            {/* TICKER TAPE */}
            <div className="ticker-tape-container">
                <div className="ticker-content">
                    <span className="ticker-item">TR = P × Q <span className="ticker-value up">▲ 2.5%</span></span>
                    <span className="ticker-item">AR = TR / Q <span className="ticker-value neutral">● 0.0%</span></span>
                    <span className="ticker-item">MR = ΔTR / ΔQ <span className="ticker-value down">▼ 1.2%</span></span>
                    <span className="ticker-item">PROFIT = TR - TC <span className="ticker-value up">▲ 5.0%</span></span>
                    <span className="ticker-item">TR = P × Q <span className="ticker-value up">▲ 2.5%</span></span>
                    <span className="ticker-item">AR = TR / Q <span className="ticker-value neutral">● 0.0%</span></span>
                    <span className="ticker-item">MR = ΔTR / ΔQ <span className="ticker-value down">▼ 1.2%</span></span>
                </div>
            </div>

            <div className="market-grid">

                {/* INTRO CARD IPO */}
                <div className="trading-card gold animate-fadeInLeft">
                    <div className="card-header-row">
                        <span className="stock-symbol text-gold">WHAT IS REVENUE?</span>
                        <FaGlobeAmericas style={{ color: '#444', fontSize: '1.5rem' }} />
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <FaBuilding style={{ fontSize: '3rem', color: '#333' }} />
                        <div>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>
                                Revenue is the <strong>Top Line</strong> income generated from sales.
                                Think of it as the total cash flowing into the company before bills are paid.
                            </p>
                            <div className="formula-badge">
                                "Sales Turnover" or "Receipts"
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMPARISON DASHBOARD */}
                <div className="trading-card green animate-fadeInRight">
                    <div className="card-header-row">
                        <span className="stock-symbol text-green-400">FINANCIAL SNAPSHOT</span>
                        <div className="trade-btn-group">
                            <button
                                className={`trade-btn ${activeTab === 'revenue' ? 'active' : ''}`}
                                onClick={() => setActiveTab('revenue')}
                            >
                                TOP LINE
                            </button>
                            <button
                                className={`trade-btn ${activeTab === 'profit' ? 'active profit' : ''}`}
                                onClick={() => setActiveTab('profit')}
                            >
                                BOTTOM LINE
                            </button>
                        </div>
                    </div>

                    {activeTab === 'revenue' ? (
                        <div className="animate-fade-in">
                            <h1 className="ticker-font text-gold" style={{ fontSize: '3rem', margin: '10px 0' }}>
                                $1,000,000
                            </h1>
                            <p className="text-gray-400">TOTAL REVENUE (GROSS)</p>
                            <p className="text-sm mt-2" style={{ color: '#666' }}>
                                All money received from customers. No expenses deducted yet.
                            </p>
                        </div>
                    ) : (
                        <div className="animate-fade-in">
                            <h1 className="ticker-font text-green-400" style={{ fontSize: '3rem', margin: '10px 0' }}>
                                $200,000
                            </h1>
                            <p className="text-gray-400">NET PROFIT</p>
                            <p className="text-sm mt-2" style={{ color: '#666' }}>
                                What remains after paying Wages, Rent, and Materials.
                            </p>
                            <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#ff4444' }}>
                                - $800,000 Expenses Deducted
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* THE BIG THREE CONCEPTS */}
            <h3 style={{ textAlign: 'center', marginTop: '50px', letterSpacing: '2px', color: '#666' }}>MARKET FUNDAMENTALS</h3>

            <div className="market-grid" style={{ marginTop: '20px' }}>

                {/* TR */}
                <div className="trading-card blue">
                    <div className="card-header-row">
                        <span className="stock-symbol" style={{ color: 'var(--trade-blue)' }}>TR</span>
                        <FaChartPie style={{ color: '#333' }} />
                    </div>
                    <h4>Total Revenue</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Total receipts from sale of Q units.</p>
                    <div className="formula-badge" style={{ color: 'var(--trade-blue)', borderColor: 'var(--trade-blue)' }}>
                        TR = Price × Quantity
                    </div>
                </div>

                {/* AR */}
                <div className="trading-card green">
                    <div className="card-header-row">
                        <span className="stock-symbol" style={{ color: 'var(--trade-green)' }}>AR</span>
                        <FaChartLine style={{ color: '#333' }} />
                    </div>
                    <h4>Average Revenue</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Revenue per unit. <strong>Always equals Price.</strong></p>
                    <div className="formula-badge" style={{ color: 'var(--trade-green)', borderColor: 'var(--trade-green)' }}>
                        AR = TR / Q = Price
                    </div>
                </div>

                {/* MR */}
                <div className="trading-card gold">
                    <div className="card-header-row">
                        <span className="stock-symbol" style={{ color: 'var(--trade-gold)' }}>MR</span>
                        <FaMoneyBillWave style={{ color: '#333' }} />
                    </div>
                    <h4>Marginal Revenue</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem' }}>Extra revenue from selling 1 more unit.</p>
                    <div className="formula-badge" style={{ color: 'var(--trade-gold)', borderColor: 'var(--trade-gold)' }}>
                        MR = TRn - TRn-1
                    </div>
                </div>

            </div>

        </section>
    );
};

export default RevenueIntroduction;
