import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../css/stats-theme.css';

/**
 * Responsive Navigation Component
 * - Desktop (>768px): Shows a Grid of Buttons
 * - Mobile (<768px): Shows a Collapsible Menu
 */
const TopicsMenu = ({ topics, activeTab, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const activeTopic = topics.find(t => t.id === activeTab) || topics[0];

    // Handle Selection (Closes menu on mobile selection)
    const handleSelect = (id) => {
        onSelect(id);
        setIsOpen(false);
    };

    return (
        <>
            {/* ════════════════ DESKTOP VIEW (GRID) ════════════════ */}
            {/* Class 'cols-4' can be dynamically added based on topic count if needed */}
            <div className={`stats-desktop-grid ${topics.length > 3 ? 'cols-4' : ''}`}>
                {topics.map((topic) => (
                    <button
                        key={topic.id}
                        className={`stats-btn ${activeTab === topic.id ? 'stats-btn-primary' : 'stats-btn-outline'}`}
                        onClick={() => handleSelect(topic.id)}
                        style={{
                            justifyContent: 'center',
                            height: '100%',
                            // Special styling for Quiz button
                            borderColor: topic.id === 'quiz' && activeTab !== 'quiz' ? 'var(--stats-warning)' : undefined,
                            color: topic.id === 'quiz' && activeTab !== 'quiz' ? 'var(--stats-warning)' : undefined
                        }}
                    >
                        {topic.icon} {topic.label}
                    </button>
                ))}
            </div>

            {/* ════════════════ MOBILE VIEW (MENU) ════════════════ */}
            <div className="stats-topic-menu">
                {/* Main Bar */}
                <div
                    className={`stats-menu-bar ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="stats-menu-current">
                        <span className="stats-menu-label">CURRENT SECTION</span>
                        <span className="stats-menu-value">
                            {activeTopic.icon} {activeTopic.label}
                        </span>
                    </div>
                    <button className="stats-menu-toggle">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                {/* Dropdown List */}
                <div className={`stats-menu-dropdown ${isOpen ? 'open' : ''}`}>
                    <div className="stats-menu-list">
                        {topics.map((topic) => (
                            <button
                                key={topic.id}
                                className={`stats-menu-item ${activeTab === topic.id ? 'active' : ''}`}
                                onClick={() => handleSelect(topic.id)}
                            >
                                <span className="stats-menu-item-icon">{topic.icon}</span>
                                <span className="stats-menu-item-text">{topic.label}</span>
                                {activeTab === topic.id && <div className="stats-menu-indicator"></div>}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopicsMenu;
