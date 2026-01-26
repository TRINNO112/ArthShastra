import React from 'react';
import { FaBalanceScale, FaBan, FaMicrochip, FaClock, FaExclamationTriangle, FaCheckDouble } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const AssumptionsLimitations = () => {
    return (
        <section className="lesson-section-wrapper">
            <div className="section-header-lesson mb-8">
                <h3 className="section-title-modern"><FaBalanceScale /> Assumptions & Limitations</h3>
                <p className="section-subtitle-lesson">The boundaries within which the Law of Variable Proportions operates.</p>
            </div>

            <div className="assumptions-grid-modern">
                {/* Assumption 1 */}
                <div className="analysis-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <div className="analysis-header text-gold">
                        <FaMicrochip /> Constant Technology
                    </div>
                    <div className="p-2">
                        <p className="text-gray-300 mb-4">
                            We assume the <strong>state of technology remains unchanged</strong>. If technology improves, the same inputs could produce more output, invalidating the law.
                        </p>
                        <div className="example-box-small">
                            <strong>Example:</strong> Replacing manual looms with power looms would instantly increase output, disrupting the schedule.
                        </div>
                    </div>
                </div>

                {/* Assumption 2 */}
                <div className="analysis-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="analysis-header text-gold">
                        <FaCheckDouble /> Homogeneous Factors
                    </div>
                    <div className="p-2">
                        <p className="text-gray-300 mb-4">
                            All units of the variable factor (e.g., Labor) are assumed to be <strong>identical in efficiency and skill</strong>.
                        </p>
                        <div className="example-box-small">
                            <strong>Example:</strong> If the 4th worker is an expert and the 1st was a novice, productivity might rise instead of falling.
                        </div>
                    </div>
                </div>

                {/* Assumption 3 */}
                <div className="analysis-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="analysis-header text-gold">
                        <FaClock /> Short Run Only
                    </div>
                    <div className="p-2">
                        <p className="text-gray-300 mb-4">
                            The law operates only in the <strong>Short Run</strong> where some factors (like Land/Capital) are fixed and only one is variable.
                        </p>
                        <div className="example-box-small">
                            <strong>Example:</strong> We cannot suddenly buy a new factory building (Fixed Factor) to increase production overnight.
                        </div>
                    </div>
                </div>

                {/* Assumption 4 */}
                <div className="analysis-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <div className="analysis-header text-gold">
                        <FaExclamationTriangle /> Variable Proportions
                    </div>
                    <div className="p-2">
                        <p className="text-gray-300 mb-4">
                            The ratio between fixed and variable factors <strong>must be alterable</strong>. If factors must be used in a fixed ratio (e.g., 1 Driver per 1 Truck), this law doesn't apply.
                        </p>
                        <div className="example-box-small">
                            <strong>Example:</strong> 2 Drivers for 1 Truck doesn't necessarily double output; the ratio must limit the variable factor.
                        </div>
                    </div>
                </div>
            </div>

            <div className="critical-limitation-card">
                <FaBan className="critical-icon" />
                <div>
                    <h4 className="critical-title">Critical Limitation</h4>
                    <p className="critical-text">
                        This law fails if the <strong>Fixed Factor is indivisible</strong> or if the factors are <strong>perfect substitutes</strong> for each other. It strictly relies on the imperfect substitutability between Labor and Capital.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AssumptionsLimitations;
