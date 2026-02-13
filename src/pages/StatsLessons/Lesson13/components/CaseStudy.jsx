import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
    FaTable, FaDatabase, FaChartBar, FaFileSignature, FaArrowRight,
    FaUndo, FaChartPie, FaListUl, FaChalkboardTeacher,
    FaLightbulb, FaUser, FaUsers, FaTrophy, FaStar
} from 'react-icons/fa';

/**
 * CaseStudy Component - The "Raw to Refined" Redesign
 * Features: Draggable Raw Data Cards, Interactive Charts, Pictograms, Gamified Achievements.
 */
const CaseStudy = () => {
    const [step, setStep] = useState(1);
    const [chartType, setChartType] = useState('bar');
    const [hoveredPieSection, setHoveredPieSection] = useState(null); // 'low', 'mid', 'high'
    const [achievements, setAchievements] = useState([]); // 'row_master', 'grid_master'
    const [showToast, setShowToast] = useState(null); // 'Row Master Unlocked!', etc.

    // Theme Colors
    const primaryColor = "#4f46e5"; // Indigo
    const accentColor = "#10b981";  // Emerald
    const warningColor = "#f59e0b"; // Amber
    const darkBg = "#0f172a";       // Slate 900
    const cardBg = "#1e293b";       // Slate 800

    // Data - 20 Students
    const rawData = [
        { name: "Aman", exp: 450, type: "Oily" }, { name: "Priya", exp: 1200, type: "Healthy" },
        { name: "Rahul", exp: 800, type: "Oily" }, { name: "Sanya", exp: 1500, type: "Gourmet" },
        { name: "Vikram", exp: 300, type: "Snack" }, { name: "Neha", exp: 950, type: "Healthy" },
        { name: "Arjun", exp: 1100, type: "Oily" }, { name: "Isha", exp: 600, type: "Snack" },
        { name: "Karan", exp: 1350, type: "Gourmet" }, { name: "Maya", exp: 400, type: "Healthy" },
        { name: "Rohan", exp: 850, type: "Oily" }, { name: "Ananya", exp: 1450, type: "Gourmet" },
        { name: "Sameer", exp: 550, type: "Snack" }, { name: "Tanvi", exp: 900, type: "Healthy" },
        { name: "Kabir", exp: 1250, type: "Oily" }, { name: "Zoya", exp: 700, type: "Snack" },
        { name: "Aditya", exp: 1150, type: "Healthy" }, { name: "Simran", exp: 350, type: "Oily" },
        { name: "Yash", exp: 1050, type: "Gourmet" }, { name: "Riya", exp: 500, type: "Snack" }
    ];

    // State for Draggable Cards
    const [cards, setCards] = useState([]);

    // Initialize random positions only once on mount
    useEffect(() => {
        const initialCards = rawData.map((item, index) => ({
            ...item,
            id: index,
            x: Math.random() * 80 + 5, // %
            y: Math.random() * 80 + 5, // %
            rotation: Math.random() * 40 - 20,
            zIndex: Math.floor(Math.random() * 10),
            isDragging: false
        }));
        setCards(initialCards);
    }, []);

    // Achievement Logic
    const checkAchievements = (currentCards) => {
        // ROW MASTER: Check if 5+ cards are aligned roughly in a Y-row
        // Sort by Y position
        const sortedByY = [...currentCards].sort((a, b) => a.y - b.y);
        let maxRowStreak = 0;
        let currentRowStreak = 1;

        for (let i = 1; i < sortedByY.length; i++) {
            // If Y difference is less than 5%, consider them in same "row"
            if (Math.abs(sortedByY[i].y - sortedByY[i - 1].y) < 5) {
                currentRowStreak++;
            } else {
                maxRowStreak = Math.max(maxRowStreak, currentRowStreak);
                currentRowStreak = 1;
            }
        }
        maxRowStreak = Math.max(maxRowStreak, currentRowStreak);

        const newAchievements = [...achievements];
        let toastMsg = null;

        if (maxRowStreak >= 5 && !achievements.includes('row_master')) {
            newAchievements.push('row_master');
            toastMsg = "🏆 Achievement Unlocked: Row Master!";
        }

        if (maxRowStreak >= 15 && !achievements.includes('grid_master')) {
            newAchievements.push('grid_master');
            toastMsg = "🌟 MEGA Achievement: GRID MASTER!";
        }

        if (toastMsg) {
            setAchievements(newAchievements);
            setShowToast(toastMsg);
            setTimeout(() => setShowToast(null), 3000);
        }
    };

    // Drag Logic
    const dragItem = useRef(null);
    const dragOffset = useRef({ x: 0, y: 0 });

    const handleMouseDown = (e, index) => {
        dragItem.current = index;
        const card = cards[index];
        const container = e.currentTarget.parentElement.getBoundingClientRect();
        dragOffset.current = {
            startX: e.clientX,
            startY: e.clientY,
            startTop: card.y,
            startLeft: card.x,
            width: container.width,
            height: container.height
        };
        setCards(prev => prev.map((c, i) => i === index ? { ...c, zIndex: 100, isDragging: true } : c));
    };

    const handleMouseMove = (e) => {
        if (dragItem.current === null) return;

        const { startX, startY, startTop, startLeft, width, height } = dragOffset.current;
        const deltaX = ((e.clientX - startX) / width) * 100;
        const deltaY = ((e.clientY - startY) / height) * 100;

        setCards(prev => prev.map((c, i) => {
            if (i === dragItem.current) {
                return {
                    ...c,
                    x: Math.min(95, Math.max(0, startLeft + deltaX)),
                    y: Math.min(90, Math.max(0, startTop + deltaY)),
                    rotation: 0
                };
            }
            return c;
        }));
    };

    const handleMouseUp = () => {
        if (dragItem.current !== null) {
            setCards(prev => {
                const newCards = prev.map((c, i) => i === dragItem.current ? { ...c, isDragging: false, rotation: Math.random() * 4 - 2 } : c);
                checkAchievements(newCards); // Check achievements on drop
                return newCards;
            });
            dragItem.current = null;
        }
    };

    const organizedData = [
        { range: "0 - 500", count: 4, percent: 20, label: "Budget", color: warningColor },
        { range: "501 - 1000", count: 8, percent: 40, label: "Standard", color: accentColor },
        { range: "1001 - 1500", count: 8, percent: 40, label: "Premium", color: primaryColor }
    ];

    const teacherNotes = {
        1: (
            <>
                <p><strong>Step 1: The Chaos of Collection.</strong> This is <strong>Raw Data</strong>. Go ahead, <strong>drag the cards around!</strong> Try to align them in a row. Can you become a <strong>"Row Master"</strong>?</p>
            </>
        ),
        2: (
            <>
                <p><strong>Step 2: Creating Order.</strong> We classify the data into groups. Now we can see a pattern: most students spend in the mid-to-high range. This tabular form is the first step of analysis.</p>
            </>
        ),
        3: (
            <>
                <p><strong>Step 3: Visual Storytelling.</strong> Charts make patterns obvious instantly. Explore the <strong>Bar Chart</strong> for quantity, <strong>Pie Chart</strong> for proportions, and <strong>Pictogram</strong> to see individual impact.</p>
            </>
        ),
        4: (
            <>
                <p><strong>Step 4: The Conclusion.</strong> Statistics leads to action. High spending on unhealthy food suggests we need a policy intervention: A subsidized healthy canteen.</p>
            </>
        )
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
                width: '100%',
                color: '#e2e8f0',
                fontFamily: "'Inter', sans-serif",
                overflow: 'hidden',
                userSelect: 'none'
            }}>
            {/* Header */}
            <div style={{
                marginBottom: '40px',
                textAlign: 'center',
                padding: '20px',
                background: `linear-gradient(135deg, ${primaryColor}20, transparent)`,
                borderRadius: '20px',
                border: `1px solid ${primaryColor}40`
            }}>
                <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                    <FaDatabase style={{ color: primaryColor }} /> Case Study: Campus Food Economy
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
                    <span style={{ opacity: 0.7 }}>From Raw Surveys to Policy Decisions</span>
                    {/* Achievement Badges */}
                    {achievements.includes('row_master') && <span title="Row Master: Aligned 5+ cards" style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '5px' }}><FaTrophy /> Row Master</span>}
                    {achievements.includes('grid_master') && <span title="Grid Master: Organized everything!" style={{ color: '#f472b6', display: 'flex', alignItems: 'center', gap: '5px' }}><FaStar /> GRID MASTER</span>}
                </div>
            </div>

            {/* Teacher's Note */}
            <div style={{
                background: '#1e293b',
                borderLeft: `6px solid ${warningColor}`,
                padding: '20px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '40px',
                display: 'flex', gap: '20px', alignItems: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ fontSize: '1.8rem', color: warningColor }}><FaChalkboardTeacher /></div>
                <div style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>{teacherNotes[step]}</div>
            </div>

            {/* Achievement Toast */}
            {showToast && (
                <div style={{
                    position: 'fixed', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
                    background: 'rgba(0, 0, 0, 0.9)', color: '#fbbf24', padding: '20px 40px',
                    borderRadius: '50px', border: '2px solid #fbbf24',
                    fontSize: '1.5rem', fontWeight: 'bold', zIndex: 1000,
                    animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}>
                    {showToast}
                </div>
            )}

            {/* Main Stage */}
            <div style={{
                position: 'relative',
                minHeight: '600px',
                background: '#0f172a',
                borderRadius: '24px',
                border: '1px solid #334155',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.5)',
                transition: 'all 0.5s ease'
            }}>
                {/* STEP 1: RAW DATA (DRAGGABLE) */}
                {step === 1 && (
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', animation: 'fadeIn 1s' }}>
                        {cards.map((item, index) => (
                            <div key={item.id}
                                onMouseDown={(e) => handleMouseDown(e, index)}
                                style={{
                                    position: 'absolute',
                                    top: `${item.y}%`,
                                    left: `${item.x}%`,
                                    transform: `rotate(${item.rotation}deg) scale(${item.isDragging ? 1.1 : 1})`,
                                    zIndex: item.zIndex,
                                    background: '#fff',
                                    color: '#1e293b',
                                    padding: '15px 20px',
                                    borderRadius: '4px',
                                    boxShadow: item.isDragging ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                                    width: '160px',
                                    fontFamily: "'Courier New', Courier, monospace",
                                    cursor: item.isDragging ? 'grabbing' : 'grab',
                                    transition: item.isDragging ? 'none' : 'transform 0.2s, box-shadow 0.2s',
                                }}
                            >
                                <div style={{ borderBottom: '1px dashed #cbd5e1', paddingBottom: '5px', marginBottom: '5px', fontWeight: 'bold', color: primaryColor }}>{item.name}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.4rem', fontWeight: '900' }}>₹{item.exp}</span>
                                    <span style={{ fontSize: '0.7rem', background: item.type === 'Healthy' ? '#10b981' : item.type === 'Oily' ? '#f43f5e' : '#f59e0b', color: '#fff', padding: '2px 6px', borderRadius: '4px' }}>{item.type}</span>
                                </div>
                            </div>
                        ))}
                        {/* Instruction Hint */}
                        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '20px', pointerEvents: 'none', color: '#fff', fontSize: '0.9rem' }}>
                            Drag cards into a straight horizontal line to get achievements!
                        </div>
                    </div>
                )}

                {/* STEP 2: TABLE */}
                {step === 2 && (
                    <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', animation: 'slideUp 0.5s ease-out' }}>
                        <h3 style={{ textAlign: 'center', color: accentColor, marginBottom: '30px' }}>Organized Frequency Table</h3>
                        <table style={{ width: '90%', margin: '0 auto', borderCollapse: 'collapse', background: '#1e293b', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}>
                            <thead style={{ background: primaryColor, color: '#fff' }}>
                                <tr>
                                    <th style={{ padding: '20px', textAlign: 'left' }}>Expenditure Range</th>
                                    <th style={{ padding: '20px', textAlign: 'center' }}>Student Count</th>
                                    <th style={{ padding: '20px', textAlign: 'left' }}>Distribution</th>
                                </tr>
                            </thead>
                            <tbody>
                                {organizedData.map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #334155' }}>
                                        <td style={{ padding: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>₹{row.range}</td>
                                        <td style={{ padding: '20px', fontSize: '1.5rem', textAlign: 'center', color: accentColor }}>{row.count}</td>
                                        <td style={{ padding: '20px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ flex: 1, background: '#334155', height: '10px', borderRadius: '5px', overflow: 'hidden' }}>
                                                    <div style={{ width: `${row.percent}%`, background: accentColor, height: '100%' }}></div>
                                                </div>
                                                <span>{row.percent}%</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* STEP 3: VISUALIZATION */}
                {step === 3 && (
                    <div style={{ padding: '40px', height: '100%', animation: 'fadeIn 0.5s' }}>
                        {/* Chart Toggle Buttons */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
                            {['bar', 'pie', 'pictogram'].map(type => (
                                <button key={type} onClick={() => setChartType(type)}
                                    style={{
                                        padding: '10px 25px',
                                        background: chartType === type ? primaryColor : '#334155',
                                        border: 'none', borderRadius: '8px', color: '#fff',
                                        cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', transition: '0.3s'
                                    }}>
                                    {type === 'bar' && <FaChartBar />}
                                    {type === 'pie' && <FaChartPie />}
                                    {type === 'pictogram' && <FaUsers />}
                                    {type.charAt(0).toUpperCase() + type.slice(1)} View
                                </button>
                            ))}
                        </div>

                        {/* Chart Area */}
                        <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

                            {/* BAR CHART WITH AXES */}
                            {chartType === 'bar' && (
                                <div style={{
                                    width: '80%',
                                    height: '320px',
                                    position: 'relative',
                                    borderLeft: '2px solid #94a3b8',
                                    borderBottom: '2px solid #94a3b8',
                                    display: 'flex',
                                    alignItems: 'flex-end',  // Ensure bars align to bottom
                                    justifyContent: 'space-around',
                                    padding: '0 20px'
                                }}>
                                    {/* Y-Axis Label */}
                                    <div style={{ position: 'absolute', left: '-50px', top: '50%', transform: 'rotate(-90deg)', color: '#94a3b8', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>Number of Students</div>

                                    {/* Y-Axis Markers */}
                                    {[0, 2, 4, 6, 8, 10].map(val => (
                                        <div key={val} style={{ position: 'absolute', left: '-25px', bottom: `${val * 10}%`, color: '#64748b', fontSize: '0.8rem' }}>{val}</div>
                                    ))}

                                    {organizedData.map((d, i) => (
                                        <div key={i} style={{
                                            textAlign: 'center',
                                            width: '20%',
                                            height: '100%', // Container needs full height for flex-end to work
                                            display: 'flex', // Inner flex to bottom align
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{
                                                height: `${d.count * 10}%`, // 10% per student (max 10)
                                                width: '50px', // Explicit width
                                                background: `linear-gradient(to top, ${d.color}, ${primaryColor})`,
                                                borderRadius: '6px 6px 0 0',
                                                transition: 'height 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                                                boxShadow: `0 0 15px ${d.color}40`,
                                                marginBottom: '5px' // Space from axis
                                            }}>
                                                <span style={{ display: 'block', marginTop: '-25px', color: '#fff', fontWeight: 'bold' }}>{d.count}</span>
                                            </div>
                                            <div style={{ position: 'absolute', bottom: '-30px', color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 'bold', width: '100px' }}>{d.range}</div>
                                        </div>
                                    ))}

                                    {/* X-Axis Label */}
                                    <div style={{ position: 'absolute', bottom: '-50px', left: '0', right: '0', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>Expenditure Range (₹)</div>
                                </div>
                            )}

                            {/* PIE CHART WITH HOVER */}
                            {chartType === 'pie' && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                                    <div style={{ position: 'relative', width: '320px', height: '320px' }}>
                                        <svg viewBox="0 0 32 32" style={{ transform: 'rotate(-90deg)', borderRadius: '50%', overflow: 'visible' }}>
                                            {/* Low Spending (20%) */}
                                            <circle r="16" cx="16" cy="16" fill="transparent"
                                                stroke={warningColor} strokeWidth={hoveredPieSection === 'low' ? "8" : "6"}
                                                strokeDasharray="20 80"
                                                style={{ transition: 'all 0.3s' }}
                                                onMouseEnter={() => setHoveredPieSection('low')} onMouseLeave={() => setHoveredPieSection(null)}
                                            />
                                            {/* Mid Spending (40%) */}
                                            <circle r="16" cx="16" cy="16" fill="transparent"
                                                stroke={accentColor} strokeWidth={hoveredPieSection === 'mid' ? "8" : "6"}
                                                strokeDasharray="40 60" strokeDashoffset="-20"
                                                style={{ transition: 'all 0.3s' }}
                                                onMouseEnter={() => setHoveredPieSection('mid')} onMouseLeave={() => setHoveredPieSection(null)}
                                            />
                                            {/* High Spending (40%) */}
                                            <circle r="16" cx="16" cy="16" fill="transparent"
                                                stroke={primaryColor} strokeWidth={hoveredPieSection === 'high' ? "8" : "6"}
                                                strokeDasharray="40 60" strokeDashoffset="-60"
                                                style={{ transition: 'all 0.3s' }}
                                                onMouseEnter={() => setHoveredPieSection('high')} onMouseLeave={() => setHoveredPieSection(null)}
                                            />
                                        </svg>

                                        {/* Center Text */}
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: hoveredPieSection === 'low' ? warningColor : hoveredPieSection === 'mid' ? accentColor : hoveredPieSection === 'high' ? primaryColor : '#fff' }}>
                                                {hoveredPieSection ? (hoveredPieSection === 'low' ? '20%' : '40%') : '100%'}
                                            </div>
                                            <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>Share</div>
                                        </div>
                                    </div>

                                    {/* Legend */}
                                    <div style={{ display: 'grid', gap: '15px' }}>
                                        <div onMouseEnter={() => setHoveredPieSection('high')} onMouseLeave={() => setHoveredPieSection(null)}
                                            style={{ cursor: 'pointer', padding: '10px 15px', background: hoveredPieSection === 'high' ? 'rgba(255,255,255,0.05)' : 'transparent', borderRadius: '8px', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '15px', height: '15px', background: primaryColor, borderRadius: '4px' }}></div>
                                            <div>
                                                <div style={{ fontWeight: 'bold' }}>Premium (High)</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>₹1001 - ₹1500</div>
                                            </div>
                                        </div>
                                        <div onMouseEnter={() => setHoveredPieSection('mid')} onMouseLeave={() => setHoveredPieSection(null)}
                                            style={{ cursor: 'pointer', padding: '10px 15px', background: hoveredPieSection === 'mid' ? 'rgba(255,255,255,0.05)' : 'transparent', borderRadius: '8px', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '15px', height: '15px', background: accentColor, borderRadius: '4px' }}></div>
                                            <div>
                                                <div style={{ fontWeight: 'bold' }}>Standard (Mid)</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>₹501 - ₹1000</div>
                                            </div>
                                        </div>
                                        <div onMouseEnter={() => setHoveredPieSection('low')} onMouseLeave={() => setHoveredPieSection(null)}
                                            style={{ cursor: 'pointer', padding: '10px 15px', background: hoveredPieSection === 'low' ? 'rgba(255,255,255,0.05)' : 'transparent', borderRadius: '8px', transition: '0.2s', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{ width: '15px', height: '15px', background: warningColor, borderRadius: '4px' }}></div>
                                            <div>
                                                <div style={{ fontWeight: 'bold' }}>Budget (Low)</div>
                                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>₹0 - ₹500</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* PICTOGRAM - REPLACES BOX PLOT */}
                            {chartType === 'pictogram' && (
                                <div style={{ width: '100%', textAlign: 'center', padding: '0 40px' }}>
                                    <h4 style={{ color: '#94a3b8', marginBottom: '30px' }}>Each icon represents 1 Student</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '15px', justifyContent: 'center' }}>
                                        {/* Render 20 Icons */}
                                        {/* 4 Low (Warning Color) */}
                                        {[...Array(4)].map((_, i) => (
                                            <div key={`low-${i}`} style={{ color: warningColor, animation: 'fadeIn 0.3s' }}>
                                                <FaUser style={{ fontSize: '2rem' }} />
                                            </div>
                                        ))}
                                        {/* 8 Mid (Accent Color) */}
                                        {[...Array(8)].map((_, i) => (
                                            <div key={`mid-${i}`} style={{ color: accentColor, animation: 'fadeIn 0.5s' }}>
                                                <FaUser style={{ fontSize: '2rem' }} />
                                            </div>
                                        ))}
                                        {/* 8 High (Primary Color) */}
                                        {[...Array(8)].map((_, i) => (
                                            <div key={`high-${i}`} style={{ color: primaryColor, animation: 'fadeIn 0.7s' }}>
                                                <FaUser style={{ fontSize: '2rem' }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '12px', height: '12px', background: warningColor, borderRadius: '50%' }}></div> Budget (4)</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '12px', height: '12px', background: accentColor, borderRadius: '50%' }}></div> Standard (8)</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '12px', height: '12px', background: primaryColor, borderRadius: '50%' }}></div> Premium (8)</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* STEP 4: CONCLUSION */}
                {step === 4 && (
                    <div style={{ padding: '60px', textAlign: 'center', animation: 'fadeIn 0.8s' }}>
                        <div style={{ fontSize: '4rem', color: accentColor, marginBottom: '20px' }}><FaFileSignature /></div>
                        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>Policy Recommendation</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 40px', color: '#cbd5e1' }}>
                            "Based on the analysis, we observe high spending correlated with unhealthy food choices.
                            Recommendation: Implement a <strong>Subsidized Healthy Meal Plan</strong> at ₹600/month."
                        </p>
                        <button onClick={() => setStep(1)} style={{ padding: '15px 40px', fontSize: '1.2rem', fontWeight: 'bold', background: primaryColor, color: '#fff', border: 'none', borderRadius: '50px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                            <FaUndo /> Restart Analysis
                        </button>
                    </div>
                )}
            </div>

            {/* Controls */}
            {step < 4 && (
                <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}>
                    <button onClick={() => setStep(s => s + 1)} style={{ background: '#fff', color: '#000', border: 'none', padding: '15px 50px', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '50px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 0 20px rgba(255,255,255,0.2)', transition: 'transform 0.2s' }}>
                        Next Phase <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default CaseStudy;
