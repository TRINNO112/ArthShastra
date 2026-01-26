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

            <div className="example-grid">

                {/* Example 1: Perfect Competition Proxy */}
                <div className="content-card">
                    <div className="example-header">
                        <div className="example-icon-box bg-green-500/20 text-green-400"><FaGlobeAmericas /></div>
                        <h4 className="text-xl font-bold text-white m-0">Commodity Markets (Wheat/Gold)</h4>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        In global commodity markets, individual farmers cannot influence the price. If the market price of wheat is ₹20/kg, they can sell 100kg or 1000kg at ₹20.
                    </p>
                    <div className="example-details-box">
                        <div className="example-row">
                            <span className="text-muted">Market Form:</span>
                            <span className="text-green-400 font-bold">Near-Perfect Competition</span>
                        </div>
                        <div className="example-row">
                            <span className="text-muted">Revenue Curve:</span>
                            <span className="text-gold font-bold">Horizontal AR (P = MR)</span>
                        </div>
                    </div>
                </div>


                {/* Example 2: Monopoly Proxy */}
                <div className="content-card">
                    <div className="example-header">
                        <div className="example-icon-box bg-blue-500/20 text-blue-400"><FaTrain /></div>
                        <h4 className="text-xl font-bold text-white m-0">Indian Railways</h4>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        As a monopoly service provider, Railways can set prices. However, to fill more seats in AC coaches (increase Quantity), they sometimes offer dynamic pricing or discounts.
                    </p>
                    <div className="example-details-box">
                        <div className="example-row">
                            <span className="text-muted">Market Form:</span>
                            <span className="text-blue-400 font-bold">Monopoly</span>
                        </div>
                        <div className="example-row">
                            <span className="text-muted">Revenue Curve:</span>
                            <span className="text-gold font-bold">Downward Sloping AR</span>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};
export default RealWorldExamples;
