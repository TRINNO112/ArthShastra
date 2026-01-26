import React from 'react';
import { FaTrain, FaGlobeAmericas } from 'react-icons/fa';
import '../../css/lessons.css';

const RealWorldExamples = () => {
    return (
        <section className="lesson-section">
            <div className="section-header-lesson">
                <span className="section-badge-lesson text-pink-400">Context</span>
                <h2 className="section-title-lesson">Real World Examples</h2>
                <p className="section-subtitle-lesson">Understanding Revenue curves in different markets.</p>
            </div>

            <div className="example-grid-premium">

                {/* Example 1: Perfect Competition Proxy */}
                <div className="example-card-premium">
                    <div className="example-icon-wrapper" style={{ background: 'rgba(0, 255, 136, 0.15)', color: '#00ff88' }}>
                        <FaGlobeAmericas />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Commodity Markets</h4>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                        In global commodity markets like Wheat or Gold, sellers are "Price Takers".
                        The market sets the price (e.g., ₹20/kg), and you can sell as much as you want at that price.
                    </p>
                    <div className="example-details-box">
                        <div className="example-row">
                            <span className="text-muted">Market Form:</span>
                            <span className="text-green-400 font-bold">Perfect Competition</span>
                        </div>
                        <div className="example-row">
                            <span className="text-muted">Revenue Curve:</span>
                            <span className="text-gold font-bold">Horizontal (P = MR)</span>
                        </div>
                    </div>
                </div>

                {/* Example 2: Monopoly Proxy */}
                <div className="example-card-premium">
                    <div className="example-icon-wrapper" style={{ background: 'rgba(96, 165, 250, 0.15)', color: '#60a5fa' }}>
                        <FaTrain />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Indian Railways</h4>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                        As a monopoly, Railways is a "Price Maker". But to increase passengers (Quantity),
                        they might need to lower fares or offer discounts, making the price curve slope downwards.
                    </p>
                    <div className="example-details-box">
                        <div className="example-row">
                            <span className="text-muted">Market Form:</span>
                            <span className="text-blue-400 font-bold">Monopoly</span>
                        </div>
                        <div className="example-row">
                            <span className="text-muted">Revenue Curve:</span>
                            <span className="text-gold font-bold">Downward Sloping</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default RealWorldExamples;
