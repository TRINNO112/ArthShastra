import React, { useState } from 'react';
import { FaInfoCircle, FaMousePointer } from 'react-icons/fa';

const TabularBasics = () => {
    const [hoveredPart, setHoveredPart] = useState('none');

    const descriptions = {
        title: { label: "Table Title", desc: "A brief, self-explanatory title placed at the top. It answers 'What, Where, and When'." },
        number: { label: "Table Number", desc: "A unique identifier (e.g., Table 4.1) for easy reference in the text." },
        headnote: { label: "Head Note", desc: "A brief statement just below the title, usually indicating the units of measurement (e.g., 'in Million Tons')." },
        stub: { label: "Stub (Row Headings)", desc: "The leftmost column that describes the rows. It tells you what each horizontal line of data represents." },
        caption: { label: "Caption (Column Headings)", desc: "The top headings that describe the vertical columns." },
        body: { label: "Body (The Field)", desc: "The main part containing the numerical data. This is the heart of the table." },
        footnote: { label: "Footnote", desc: "Additional information or clarification about specific data items, placed at the bottom." },
        source: { label: "Source Note", desc: "Acknowledges where the data came from. Essential for verifying reliability." }
    };

    const handleEnter = (part) => setHoveredPart(part);
    const handleLeave = () => setHoveredPart('none');

    const getStyle = (part) => ({
        transition: 'all 0.2s ease',
        background: hoveredPart === part ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
        boxShadow: hoveredPart === part ? '0 0 0 2px #3b82f6' : 'none',
        cursor: 'crosshair',
        position: 'relative',
        zIndex: hoveredPart === part ? 10 : 1
    });

    return (
        <div className="stats-section animate-fadeIn">
            <h2 className="stats-title" style={{ fontSize: '2rem', marginBottom: '10px' }}>ANATOMY OF A TABLE</h2>
            <p className="stats-subtitle" style={{ marginBottom: '30px' }}>
                Hover over the table sections to inspect their specific names and functions.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '30px', alignItems: 'start' }}>

                {/* LEFT COLUMN: THE TABLE */}
                <div style={{
                    background: '#fff',
                    color: '#0f172a',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
                    fontFamily: '"Times New Roman", Times, serif'
                }}>
                    {/* Top Area */}
                    <div style={{ padding: '20px', borderBottom: '2px solid #334155' }}>
                        <div
                            onMouseEnter={() => handleEnter('number')}
                            onMouseLeave={handleLeave}
                            style={{ ...getStyle('number'), display: 'inline-block', fontWeight: 'bold', fontSize: '1.1rem', padding: '2px 6px', borderRadius: '4px' }}
                        >
                            Table 7.2
                        </div>
                        <div
                            onMouseEnter={() => handleEnter('title')}
                            onMouseLeave={handleLeave}
                            style={{ ...getStyle('title'), fontSize: '1.5rem', fontWeight: 'bold', marginTop: '5px', padding: '4px', borderRadius: '4px', textAlign: 'center', textTransform: 'uppercase' }}
                        >
                            Production of Food Grains in India
                        </div>
                        <div
                            onMouseEnter={() => handleEnter('headnote')}
                            onMouseLeave={handleLeave}
                            style={{ ...getStyle('headnote'), textAlign: 'right', fontStyle: 'italic', fontSize: '0.9rem', color: '#64748b', marginTop: '10px', padding: '2px 6px', borderRadius: '4px' }}
                        >
                            (in Million Tonnes)
                        </div>
                    </div>

                    {/* Table Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', borderBottom: '2px solid #334155' }}>

                        {/* Headers */}
                        <div
                            onMouseEnter={() => handleEnter('stub')}
                            onMouseLeave={handleLeave}
                            style={{ ...getStyle('stub'), padding: '15px', borderRight: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', fontWeight: 'bold', background: '#f8fafc', display: 'flex', alignItems: 'center' }}
                        >
                            Year / Crop
                        </div>
                        <div style={{ gridColumn: 'span 3' }}>
                            <div
                                onMouseEnter={() => handleEnter('caption')}
                                onMouseLeave={handleLeave}
                                style={{ ...getStyle('caption'), padding: '8px', textAlign: 'center', borderBottom: '1px solid #cbd5e1', fontWeight: 'bold', background: '#f8fafc' }}
                            >
                                Crops (Caption)
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                                {['Wheat', 'Rice', 'Pulses'].map((c, i) => (
                                    <div key={c}
                                        onMouseEnter={() => handleEnter('caption')}
                                        onMouseLeave={handleLeave}
                                        style={{ ...getStyle('caption'), padding: '8px', textAlign: 'center', borderRight: i < 2 ? '1px solid #cbd5e1' : 'none', borderBottom: '1px solid #cbd5e1', background: '#f8fafc', fontWeight: 'bold', fontSize: '0.95rem' }}
                                    >
                                        {c}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rows */}
                        {['2020-21', '2021-22', '2022-23'].map((year, idx) => (
                            <React.Fragment key={year}>
                                <div
                                    onMouseEnter={() => handleEnter('stub')}
                                    onMouseLeave={handleLeave}
                                    style={{ ...getStyle('stub'), padding: '12px 15px', borderRight: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', fontWeight: 'bold' }}
                                >
                                    {year}
                                </div>
                                <div onMouseEnter={() => handleEnter('body')} onMouseLeave={handleLeave} style={{ ...getStyle('body'), borderRight: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', padding: '12px', textAlign: 'center' }}>{100 + idx * 5}.2</div>
                                <div onMouseEnter={() => handleEnter('body')} onMouseLeave={handleLeave} style={{ ...getStyle('body'), borderRight: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', padding: '12px', textAlign: 'center' }}>{110 + idx * 4}.5</div>
                                <div onMouseEnter={() => handleEnter('body')} onMouseLeave={handleLeave} style={{ ...getStyle('body'), borderBottom: '1px solid #cbd5e1', padding: '12px', textAlign: 'center' }}>{20 + idx}.4</div>
                            </React.Fragment>
                        ))}

                    </div>

                    {/* Footer */}
                    <div style={{ padding: '15px', background: '#f1f5f9', fontSize: '0.85rem' }}>
                        <div
                            onMouseEnter={() => handleEnter('footnote')}
                            onMouseLeave={handleLeave}
                            style={{ ...getStyle('footnote'), marginBottom: '8px', padding: '4px', borderRadius: '4px' }}
                        >
                            <span style={{ fontWeight: 'bold' }}>* Note:</span> 2022-23 figures are provisional estimates.
                        </div>
                        <div
                            onMouseEnter={() => handleEnter('source')}
                            onMouseLeave={handleLeave}
                            style={{ ...getStyle('source'), padding: '4px', borderRadius: '4px' }}
                        >
                            <span style={{ fontWeight: 'bold' }}>Source:</span> Ministry of Agriculture, Govt. of India.
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: INFO PANEL */}
                <div style={{
                    position: 'sticky',
                    top: '20px',
                    background: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                    padding: '25px',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
                }}>
                    <div style={{
                        color: hoveredPart !== 'none' ? '#38bdf8' : '#64748b',
                        fontSize: '3rem',
                        marginBottom: '15px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        {hoveredPart !== 'none' ? <FaInfoCircle /> : <FaMousePointer className="animate-bounce" />}
                    </div>

                    <h3 style={{
                        fontSize: '1.5rem',
                        color: '#f8fafc',
                        marginBottom: '10px',
                        textAlign: 'center',
                        borderBottom: '1px solid #334155',
                        paddingBottom: '15px'
                    }}>
                        {hoveredPart !== 'none' ? descriptions[hoveredPart].label : "Hover over the Table"}
                    </h3>

                    <p style={{
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: '#cbd5e1',
                        textAlign: 'center'
                    }}>
                        {hoveredPart !== 'none'
                            ? descriptions[hoveredPart].desc
                            : "Move your mouse over different parts of the table on the left (like Title, Stub, or Body) to understand their specific role in data presentation."
                        }
                    </p>

                    {hoveredPart === 'none' && (
                        <div style={{ marginTop: '20px', fontSize: '0.8rem', color: '#64748b', textAlign: 'center' }}>
                            A good table must have all these essential parts.
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default TabularBasics;
