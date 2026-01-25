import React from 'react';
import { FaClipboardCheck, FaTimesCircle } from 'react-icons/fa';
import './component.css';

const AssumptionsLimitations = () => {
    return (
        <div className="assumptions-grid-modern">
            {/* Assumptions */}
            <div className="assumption-column">
                <h4 className="column-title"><FaClipboardCheck /> Assumptions</h4>
                <ul className="modern-list check-list">
                    <li>
                        <strong>One Variable Factor:</strong> Only labor changes; land & capital are fixed.
                    </li>
                    <li>
                        <strong>Constant Technology:</strong> No new inventions improving efficiency.
                    </li>
                    <li>
                        <strong>Homogeneous Units:</strong> Every worker is equally skilled and efficient.
                    </li>
                    <li>
                        <strong>Short Run:</strong> Period is too short to change fixed factors.
                    </li>
                </ul>
            </div>

            {/* Causes (Why it happens) */}
            <div className="assumption-column causes-column">
                <h4 className="column-title">💡 Why Diminishing Returns?</h4>
                <ul className="modern-list dot-list">
                    <li>
                        <strong>Fixity of Factors:</strong> Land cannot stretch to accommodate more workers.
                    </li>
                    <li>
                        <strong>Imperfect Substitutes:</strong> Labor cannot perfectly replace Capital.
                    </li>
                    <li>
                        <strong>Poor Coordination:</strong> Too many cooks spoil the broth (Management issues).
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AssumptionsLimitations;
