import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import '../css/lessons.css';

/**
 * Microeconomics Navigation Component
 * Preserves the Desktop Horizontal Scroll design while providing
 * a Sticky Collapsible Menu for Mobile.
 */
const MicroTopicsMenu = ({ sections, activeSection, onSectionChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const activeItem = sections.find(s => s.id === activeSection) || sections[0];
    const currentIndex = sections.findIndex(s => s.id === activeSection);

    const handleSelect = (id) => {
        onSectionChange(id);
        setIsOpen(false);
    };

    return (
        <>
            {/* ════════════════ DESKTOP VIEW (Horizontal Scroll) ════════════════ */}
            <nav className="lesson-nav micro-desktop-nav">
                <div className="nav-container">
                    <div className="nav-scroll">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;
                            const isCompleted = index < currentIndex;

                            return (
                                <button
                                    key={section.id}
                                    className={`nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                    onClick={() => handleSelect(section.id)}
                                >
                                    <span className="nav-icon"><Icon /></span>
                                    <span className="nav-text">{section.name}</span>
                                    {isCompleted && <span className="nav-check">✓</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* ════════════════ MOBILE VIEW (Sticky Menu) ════════════════ */}
            <div className="micro-topic-menu">
                <div
                    className={`micro-menu-bar ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="micro-menu-info">
                        <span className="micro-menu-label">CURRENT TOPIC</span>
                        <div className="micro-menu-current">
                            {activeItem.icon && <activeItem.icon className="micro-current-icon" />}
                            <span>{activeItem.name}</span>
                        </div>
                    </div>
                    <button className="micro-menu-toggle">
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>

                <div className={`micro-menu-dropdown ${isOpen ? 'open' : ''}`}>
                    <div className="micro-menu-list">
                        {sections.map((section, index) => {
                            const Icon = section.icon;
                            const isActive = activeSection === section.id;

                            return (
                                <button
                                    key={section.id}
                                    className={`micro-menu-item ${isActive ? 'active' : ''}`}
                                    onClick={() => handleSelect(section.id)}
                                >
                                    <span className="micro-item-icon"><Icon /></span>
                                    <span className="micro-item-text">{section.name}</span>
                                    {isActive && <div className="micro-active-dot"></div>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MicroTopicsMenu;
