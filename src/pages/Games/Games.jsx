import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaBalanceScale, FaChartLine, FaCoins, FaShoppingCart,
    FaGlobeAmericas, FaChartBar, FaLock, FaCompass, FaScroll, FaGem, FaMapMarkerAlt,
    FaRegCircle
} from 'react-icons/fa';
import './Games.css';

// Specific x/y offsets to make the layout asymmetric and island-like
const GAMES = [
    {
        id: 'market-maker',
        title: 'Market Maker',
        desc: 'Set prices for goods and watch supply-demand curves react in real time.',
        icon: <FaBalanceScale />,
        topic: 'Supply & Demand',
        difficulty: 'Medium',
        status: 'available',
        biome: 'jungle',
        offset: { x: -25, y: 0 }, // Percentage off-center
        size: 'large'
    },
    {
        id: 'price-hunter',
        title: 'Price Hunter',
        desc: 'Sort goods into elastic vs inelastic categories. Drag and drop items!',
        icon: <FaShoppingCart />,
        topic: 'Elasticity',
        difficulty: 'Easy',
        status: 'available',
        biome: 'atoll',
        offset: { x: 25, y: 0 },
        size: 'medium'
    },
    {
        id: 'budget-boss',
        title: 'Budget Boss',
        desc: 'You are the Finance Minister. Allocate the national budget across sectors.',
        icon: <FaCoins />,
        topic: 'Government Budget',
        difficulty: 'Hard',
        status: 'available',
        biome: 'volcano',
        offset: { x: -15, y: 0 },
        size: 'large'
    },
    {
        id: 'trade-tycoon',
        title: 'Trade Tycoon',
        desc: 'Make import/export decisions for your country. Balance trade deficits.',
        icon: <FaGlobeAmericas />,
        topic: 'International Trade',
        difficulty: 'Hard',
        status: 'available',
        biome: 'harbor',
        offset: { x: 20, y: 0 },
        size: 'medium'
    },
    {
        id: 'graph-guesser',
        title: 'Graph Guesser',
        desc: 'A graph appears — identify which economic concept it represents.',
        icon: <FaChartLine />,
        topic: 'All Topics',
        difficulty: 'Medium',
        status: 'available',
        biome: 'crystal',
        offset: { x: -18, y: 0 },
        size: 'medium'
    }
    // Reduced to 5 games per request
];

const hexSizes = {
    small: 'gm-hex-node-size-small',
    medium: 'gm-hex-node-size-medium',
    large: 'gm-hex-node-size-large'
};

const difficultyStars = (d) => {
    if (d === 'Easy') return '★';
    if (d === 'Medium') return '★★';
    return '★★★';
};

const islandVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: 'spring', stiffness: 60, damping: 12 }
    }
};

function Games() {
    const trailRef = useRef(null);
    const [svgPath, setSvgPath] = useState('');
    const [trailSize, setTrailSize] = useState({ w: 0, h: 0 });

    // Build curvy SVG path connecting all nodes organically
    useEffect(() => {
        const buildPath = () => {
            if (!trailRef.current) return;
            const trail = trailRef.current;
            const nodes = trail.querySelectorAll('.gm-island-node');
            if (nodes.length < 2) return;

            const trailRect = trail.getBoundingClientRect();
            setTrailSize({ w: trailRect.width, h: trailRect.height });

            // Get center of each node relative to the trail container
            const points = Array.from(nodes).map(node => {
                const r = node.getBoundingClientRect();
                return {
                    x: r.left - trailRect.left + r.width / 2,
                    y: r.top - trailRect.top + r.height / 2,
                };
            });

            // Build a smooth curve passing exactly through all points
            let d = `M ${points[0].x} ${points[0].y}`;

            for (let i = 0; i < points.length - 1; i++) {
                const curr = points[i];
                const next = points[i + 1];

                // Simple tension-based bezier control points
                // Forces the curve to go exactly from curr.x,curr.y to next.x,next.y
                const dx = next.x - curr.x;
                const dy = next.y - curr.y;

                // Swing direction alternating left and right
                const direction = i % 2 === 0 ? 1 : -1;
                // Scale swing based on distance and randomize slightly
                const swing = Math.min(Math.abs(dx) * 0.5 + 40, 120) * direction;

                const cp1x = curr.x + (dx * 0.2) + swing;
                const cp1y = curr.y + (dy * 0.2);
                const cp2x = next.x - (dx * 0.2) + swing;
                const cp2y = next.y - (dy * 0.2);

                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
            }

            setSvgPath(d);
        };

        const timer = setTimeout(buildPath, 800); // Wait slightly longer for framer motion to finish settling
        window.addEventListener('resize', buildPath);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', buildPath);
        };
    }, []);

    return (
        <div className="gm-page">
            <div className="gm-ocean-bg" />
            <div className="gm-ocean-particles" />

            {/* Header */}
            <motion.header
                className="gm-header"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="gm-compass"><FaCompass /></div>
                <div className="gm-header-content">
                    <div className="gm-header-tag"><FaScroll /> EXPEDITION MAP</div>
                    <h1 className="gm-title">The Economics Archipelago</h1>
                    <p className="gm-subtitle">
                        Chart your course through the economic challenges. Each territory holds a unique trial.
                    </p>
                </div>
                <div className="gm-header-stats">
                    <div className="gm-header-stat">
                        <span className="gm-header-stat-val">{GAMES.length}</span>
                        <span className="gm-header-stat-label">Islands</span>
                    </div>
                    <div className="gm-header-stat">
                        <span className="gm-header-stat-val">0</span>
                        <span className="gm-header-stat-label">Explored</span>
                    </div>
                    <div className="gm-header-stat">
                        <span className="gm-header-stat-val"><FaGem /></span>
                        <span className="gm-header-stat-label">Rewards</span>
                    </div>
                </div>
            </motion.header>

            {/* Ocean Archipelago Map */}
            <div className="gm-trail" ref={trailRef}>
                {/* Ship route SVG path */}
                {svgPath && (
                    <svg
                        className="gm-trail-svg"
                        width={trailSize.w}
                        height={trailSize.h}
                        viewBox={`0 0 ${trailSize.w} ${trailSize.h}`}
                        preserveAspectRatio="none"
                    >
                        <path
                            d={svgPath}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.4)"
                            strokeWidth="3"
                            strokeDasharray="8 12"
                            strokeLinecap="round"
                            className="gm-ship-route"
                        />
                    </svg>
                )}

                {GAMES.map((game, index) => {
                    const isLocked = game.status === 'coming-soon';

                    return (
                        <div
                            key={game.id}
                            className="gm-island-container"
                            style={{
                                // Apply the asymmetric offset to the container
                                transform: `translateX(${game.offset.x}%)`
                            }}
                        >
                            <motion.div
                                className={`gm-hex-node gm-biome-${game.biome} ${isLocked ? 'gm-node-locked' : 'gm-node-unlocked'} ${hexSizes[game.size]}`}
                                variants={islandVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-100px' }}
                            >
                                {/* Hexagon Base */}
                                <div className="gm-hex-border"></div>
                                <div className="gm-hex-inner"></div>

                                {/* Custom Biome Particles */}
                                <div className="gm-particles">
                                    <span className="gm-p"></span>
                                    <span className="gm-p"></span>
                                    <span className="gm-p"></span>
                                    <span className="gm-p"></span>
                                    <span className="gm-p"></span>
                                </div>

                                {/* The node point that the SVG path connects to */}
                                <div className="gm-island-node">
                                    <FaRegCircle />
                                </div>

                                {/* Island Content overlay */}
                                <div className="gm-hex-content">
                                    {isLocked && (
                                        <div className="gm-island-fog">
                                            <FaLock />
                                            <span>UNCHARTED TIDE</span>
                                        </div>
                                    )}

                                    <div className="gm-island-head">
                                        <div className="gm-island-icon">{game.icon}</div>
                                        <div className="gm-island-meta">
                                            <span className="gm-island-topic">{game.topic}</span>
                                            <span className="gm-island-diff" title={game.difficulty}>
                                                {difficultyStars(game.difficulty)} {game.difficulty}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="gm-island-title">{game.title}</h3>
                                    <p className="gm-island-desc">{game.desc}</p>

                                    {!isLocked ? (
                                        <Link to={`/games/${game.id}`} className="gm-island-btn">
                                            DOCK HERE
                                        </Link>
                                    ) : (
                                        <div className="gm-island-btn-locked">
                                            <div className="gm-locked-capsule-icon"><FaLock /></div>
                                            <span>AREA LOCKED</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                {/* End marker */}
                <div className="gm-island-container" style={{ transform: 'translateX(0%)', marginTop: '60px' }}>
                    <div className="gm-island-node gm-node-end">
                        <FaCompass />
                        <span className="gm-end-label">More Expeditions Coming Soon!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Games;
