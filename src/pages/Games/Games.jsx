import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
    FaBalanceScale, FaChartLine, FaCoins, FaShoppingCart,
    FaGlobeAmericas, FaChartBar, FaLock, FaCompass, FaScroll, FaGem, FaMapMarkerAlt,
    FaCoffee
} from 'react-icons/fa';
import './Games.css';

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
    },
    {
        id: 'tapri-tycoon',
        title: 'Tapri Tycoon',
        desc: 'Run a chai stall for 7 days. Survive Sharma Uncle. Learn Fixed vs Variable Cost.',
        icon: <FaCoffee />,
        topic: 'Production & Costs',
        difficulty: 'Easy',
        status: 'available',
        biome: 'atoll',
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
    }
];

// Pre-computed warp streaks (for entry animation)
const WARP_STREAKS = Array.from({ length: 50 }, () => ({
    x: `${Math.random() * 100}vw`,
    dur: 0.5 + Math.random() * 0.5,
    del: Math.random() * 0.8,
    h: `${Math.random() * 300 + 150}px`,
    w: `${Math.random() * 2.5 + 0.5}px`
}));

const difficultyStars = (d) => {
    if (d === 'Easy') return '★';
    if (d === 'Medium') return '★★';
    return '★★★';
};

function Games() {
    const [expandedId, setExpandedId] = useState(null);
    const [isEntering, setIsEntering] = useState(false);
    const [enteringGame, setEnteringGame] = useState(null);
    const navigate = useNavigate();

    const handleNodeClick = (gameId) => {
        setExpandedId(prev => prev === gameId ? null : gameId);
    };

    // Close popup when clicking outside
    const metroRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!expandedId) return;
            // If click is on a station node or popup, ignore
            if (e.target.closest('.gm-station-node') || e.target.closest('.gm-popup')) return;
            setExpandedId(null);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [expandedId]);

    const handleEntry = (gameId) => {
        const game = GAMES.find(g => g.id === gameId);
        setEnteringGame(game);
        setIsEntering(true);
        setTimeout(() => {
            navigate(`/games/${gameId}`);
        }, 3200);
    };

    return (
        <div className="gm-page">
            {/* ==================== ANIME ENTRY OVERLAY ==================== */}
            <AnimatePresence>
                {isEntering && (
                    <motion.div
                        className="gm-anime-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="gm-anime-flash"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 1.0, ease: 'easeOut' }}
                        />
                        <div className="gm-anime-speed-lines">
                            {[...Array(24)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="gm-anime-speed-line"
                                    style={{ '--angle': `${i * 15}deg` }}
                                    initial={{ scaleX: 0, opacity: 0 }}
                                    animate={{ scaleX: [0, 1, 0], opacity: [0, 0.9, 0] }}
                                    transition={{ duration: 0.9, delay: 0.2 + i * 0.015, ease: 'easeOut' }}
                                />
                            ))}
                        </div>
                        <div className="gm-anime-warps">
                            {WARP_STREAKS.map((rv, i) => (
                                <motion.div
                                    key={i}
                                    className="gm-anime-streak"
                                    initial={{ x: rv.x, y: '110vh', opacity: 0 }}
                                    animate={{ y: '-20vh', opacity: [0, 1, 0.5, 0] }}
                                    transition={{ duration: rv.dur, repeat: Infinity, delay: rv.del, ease: 'circIn' }}
                                    style={{
                                        height: rv.h, width: rv.w,
                                        background: `linear-gradient(to top, transparent, ${i % 4 === 0 ? '#4cc9f0' : i % 4 === 1 ? '#4361ee' : i % 4 === 2 ? '#52b788' : '#fff'})`,
                                        boxShadow: `0 0 12px ${i % 2 === 0 ? '#4cc9f0' : '#4361ee'}`,
                                    }}
                                />
                            ))}
                        </div>
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
                        <motion.div
                            className="gm-anime-wipe"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 6, opacity: [0, 0, 1] }}
                            transition={{ delay: 2.5, duration: 0.7, ease: 'easeIn' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ==================== OCEAN BACKGROUND ==================== */}
            <div className="gm-ocean-bg" />
            <div className="gm-ocean-particles" />

            {/* ==================== HEADER ==================== */}
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
                        <span className="gm-header-stat-label">Stations</span>
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

            {/* ==================== MAP DECORATIONS ==================== */}
            <div className="gm-map-decorations" aria-hidden="true">
                {/* Coordinate labels scattered across the page */}
                <span className="gm-coord gm-coord-1">N 28° 35' 12"</span>
                <span className="gm-coord gm-coord-2">E 77° 12' 45"</span>
                <span className="gm-coord gm-coord-3">DEPTH: 200m</span>
                <span className="gm-coord gm-coord-4">N 19° 04' 56"</span>
                <span className="gm-coord gm-coord-5">E 72° 52' 33"</span>
                <span className="gm-coord gm-coord-6">ALT: SEA LVL</span>

                {/* Sector labels */}
                <span className="gm-sector gm-sector-1">// SECTOR 01</span>
                <span className="gm-sector gm-sector-2">// SECTOR 02</span>
                <span className="gm-sector gm-sector-3">// SECTOR 03</span>

                {/* Contour circles */}
                <div className="gm-contour gm-contour-1" />
                <div className="gm-contour gm-contour-2" />
                <div className="gm-contour gm-contour-3" />
                <div className="gm-contour gm-contour-4" />

                {/* Crosshair markers */}
                <div className="gm-crosshair gm-crosshair-1">+</div>
                <div className="gm-crosshair gm-crosshair-2">+</div>
                <div className="gm-crosshair gm-crosshair-3">+</div>

                {/* Dotted boundary lines */}
                <div className="gm-boundary gm-boundary-h1" />
                <div className="gm-boundary gm-boundary-h2" />
                <div className="gm-boundary gm-boundary-v1" />
                <div className="gm-boundary gm-boundary-v2" />

                {/* Faded compass rose (large, background) */}
                <div className="gm-compass-rose">
                    <FaCompass />
                </div>
            </div>

            {/* ==================== METRO TRAIL ==================== */}
            <div className="gm-metro" ref={metroRef}>
                {/* The glowing metro line (CSS-drawn) */}
                <div className="gm-metro-line" />

                {GAMES.map((game, index) => {
                    const isLocked = game.status === 'coming-soon';
                    const isExpanded = expandedId === game.id;
                    // Alternate popup side: even = right, odd = left
                    const side = index % 2 === 0 ? 'right' : 'left';

                    return (
                        <motion.div
                            key={game.id}
                            className={`gm-station gm-station-${side}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            {/* Angled connector from line to node */}
                            <div className={`gm-connector gm-connector-${side}`} />

                            {/* Station Node (circular, on the line) */}
                            <button
                                className={`gm-station-node gm-biome-${game.biome} ${isLocked ? 'gm-node-locked' : ''} ${isExpanded ? 'gm-node-active' : ''}`}
                                onClick={() => !isLocked && handleNodeClick(game.id)}
                                aria-label={`${game.title} station`}
                            >
                                {/* Decorative outer ring */}
                                <span className="gm-node-ring" />
                                {/* Inner content */}
                                <div className="gm-node-icon">{game.icon}</div>
                                {isLocked && <div className="gm-node-lock"><FaLock /></div>}
                                {/* Pulse ring */}
                                {!isLocked && <span className="gm-node-pulse" />}
                            </button>

                            {/* Station label (always visible) */}
                            <div className={`gm-station-label gm-label-${side}`}>
                                <span className="gm-label-title">{game.title}</span>
                                <span className="gm-label-topic">{game.topic}</span>
                            </div>

                            {/* Expanded detail popup */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        className={`gm-popup gm-popup-${side} gm-biome-${game.biome}`}
                                        initial={{ opacity: 0, scale: 0.85, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.85, y: 10 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    >
                                        {/* Arrow pointing to node */}
                                        <div className={`gm-popup-arrow gm-popup-arrow-${side}`} />

                                        <div className="gm-popup-header">
                                            <div className="gm-popup-icon">{game.icon}</div>
                                            <div>
                                                <h3 className="gm-popup-title">{game.title}</h3>
                                                <div className="gm-popup-meta">
                                                    <span className="gm-popup-topic">{game.topic}</span>
                                                    <span className="gm-popup-diff">
                                                        {difficultyStars(game.difficulty)} {game.difficulty}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="gm-popup-desc">{game.desc}</p>

                                        {!isLocked ? (
                                            <button
                                                onClick={(e) => { e.stopPropagation(); handleEntry(game.id); }}
                                                className="gm-popup-btn"
                                            >
                                                DOCK HERE
                                            </button>
                                        ) : (
                                            <div className="gm-popup-locked">
                                                <FaLock /> AREA LOCKED
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {/* Milestone markers between stations */}
                            {index < GAMES.length - 1 && (
                                <div className="gm-milestones">
                                    <span className="gm-milestone-dot" />
                                    <span className="gm-milestone-dot" />
                                    <span className="gm-milestone-dot" />
                                </div>
                            )}
                        </motion.div>
                    );
                })}

                {/* ==================== END STATION ==================== */}
                <motion.div
                    className="gm-station gm-station-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="gm-station-node gm-node-terminus">
                        <FaCompass />
                    </div>
                    <span className="gm-terminus-label">More Expeditions Coming Soon!</span>
                </motion.div>
            </div>
        </div>
    );
}

export default Games;
