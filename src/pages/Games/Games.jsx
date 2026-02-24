import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaBalanceScale, FaChartLine, FaCoins, FaShoppingCart,
    FaGlobeAmericas, FaChartBar, FaLock, FaCompass, FaScroll, FaGem, FaMapMarkerAlt,
    FaRegCircle, FaCoffee
} from 'react-icons/fa';
import './Games.css';

// Specific x/y offsets to make the layout asymmetric and island-like
const GAMES = [
    {
        id: 'market-maker',
        title: 'Market Maker',
        desc: 'Run your own shop. Buy from suppliers, sell to customers. Watch Supply & Demand in action!',
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
    },
    {
        id: 'tapri-tycoon',
        title: 'Tapri Tycoon',
        desc: 'Run a chai stall for 7 days. Survive Sharma Uncle. Learn Fixed vs Variable Cost.',
        icon: <FaCoffee />,
        topic: 'Production & Costs',
        difficulty: 'Easy',
        status: 'available',
        biome: 'desert',
        offset: { x: 10, y: 0 },
        size: 'medium'
    }
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
    const [isEntering, setIsEntering] = useState(false);
    const [enteringGame, setEnteringGame] = useState(null);
    const navigate = useNavigate();

    const handleEntry = (gameId) => {
        const game = GAMES.find(g => g.id === gameId);
        setEnteringGame(game);
        setIsEntering(true);
        setTimeout(() => {
            navigate(`/games/${gameId}`);
        }, 3200);
    };

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
            <AnimatePresence>
                {isEntering && (
                    <motion.div
                        className="gm-anime-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Phase 1: Radial flash from center */}
                        <motion.div
                            className="gm-anime-flash"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 1.0, ease: 'easeOut' }}
                        />

                        {/* Phase 2: Speed lines radiating outward */}
                        <div className="gm-anime-speed-lines">
                            {[...Array(24)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="gm-anime-speed-line"
                                    style={{ '--angle': `${i * 15}deg` }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: [0, 1, 0], opacity: [0, 0.9, 0] }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.2 + i * 0.015,
                                        ease: 'easeOut'
                                    }}
                                />
                            ))}
                        </div>

                        {/* Phase 3: Vertical warp streaks (hyper-speed) */}
                        <div className="gm-anime-warps">
                            {[...Array(50)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="gm-anime-streak"
                                    initial={{
                                        x: `${Math.random() * 100}vw`,
                                        y: '110vh',
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: '-20vh',
                                        opacity: [0, 1, 0.5, 0],
                                    }}
                                    transition={{
                                        duration: 0.5 + Math.random() * 0.5,
                                        repeat: Infinity,
                                        delay: Math.random() * 0.8,
                                        ease: 'circIn'
                                    }}
                                    style={{
                                        height: `${Math.random() * 300 + 150}px`,
                                        width: `${Math.random() * 2.5 + 0.5}px`,
                                        background: `linear-gradient(to top, transparent, ${i % 4 === 0 ? '#4cc9f0' : i % 4 === 1 ? '#4361ee' : i % 4 === 2 ? '#52b788' : '#fff'})`,
                                        boxShadow: `0 0 12px ${i % 2 === 0 ? '#4cc9f0' : '#4361ee'}`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Phase 4: Game title zoom-in */}
                        <div className="gm-anime-center">
                            <motion.div
                                className="gm-anime-game-icon"
                                initial={{ scale: 0, rotate: -20 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.5, duration: 0.7, type: 'spring', stiffness: 160 }}
                            >
                                {enteringGame?.icon}
                            </motion.div>
                            <motion.h2
                                className="gm-anime-text"
                                initial={{ opacity: 0, y: 30, letterSpacing: '40px' }}
                                animate={{ opacity: 1, y: 0, letterSpacing: '8px' }}
                                transition={{ delay: 0.85, duration: 0.9, ease: 'easeOut' }}
                            >
                                {enteringGame?.title?.toUpperCase() || 'ENTERING...'}
                            </motion.h2>
                            <motion.p
                                className="gm-anime-subtext"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                            >
                                LOADING SIMULATION...
                            </motion.p>
                        </div>

                        {/* Phase 5: Final white wipe from center */}
                        <motion.div
                            className="gm-anime-wipe"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 6, opacity: [0, 0, 1] }}
                            transition={{ delay: 2.5, duration: 0.7, ease: 'easeIn' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

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
                                        <button onClick={() => handleEntry(game.id)} className="gm-island-btn">
                                            DOCK HERE
                                        </button>
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
