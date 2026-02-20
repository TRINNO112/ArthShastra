import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaBalanceScale, FaChartLine, FaCoins, FaShoppingCart,
    FaGlobeAmericas, FaChartBar, FaLock,
    FaCompass, FaScroll, FaGem, FaMapMarkerAlt
} from 'react-icons/fa';
import './Games.css';

// Import AI Generated Maps
import bgOcean from '../../assets/bg.png';
import imgJungle from '../../assets/jungle.png';
import imgAtoll from '../../assets/atoll.png';
import imgVolcano from '../../assets/volcano.png';
import imgHarbor from '../../assets/harbor.png';
import imgCrystal from '../../assets/crystal.png';
import imgSnow from '../../assets/snow.png';
import imgWhirlpool from '../../assets/whirlpool.png'; // We'll use this for the end node!

// Added specific x/y offsets to make the layout asymmetric and island-like
const GAMES = [
    {
        id: 'market-maker',
        title: 'Market Maker',
        desc: 'Set prices for goods and watch supply-demand curves react in real time.',
        icon: <FaBalanceScale />,
        topic: 'Supply & Demand',
        difficulty: 'Medium',
        status: 'coming-soon',
        biome: 'jungle',
        image: imgJungle,
        offset: { x: -25, y: 0 } // Percentage off-center
    },
    {
        id: 'price-hunter',
        title: 'Price Hunter',
        desc: 'Sort goods into elastic vs inelastic categories. Drag and drop items!',
        icon: <FaShoppingCart />,
        topic: 'Elasticity',
        difficulty: 'Easy',
        status: 'coming-soon',
        biome: 'atoll',
        image: imgAtoll,
        offset: { x: 30, y: 0 }
    },
    {
        id: 'budget-boss',
        title: 'Budget Boss',
        desc: 'You are the Finance Minister. Allocate the national budget across sectors.',
        icon: <FaCoins />,
        topic: 'Government Budget',
        difficulty: 'Hard',
        status: 'coming-soon',
        biome: 'volcano',
        image: imgVolcano,
        offset: { x: -15, y: 0 }
    },
    {
        id: 'trade-tycoon',
        title: 'Trade Tycoon',
        desc: 'Make import/export decisions for your country. Balance trade deficits.',
        icon: <FaGlobeAmericas />,
        topic: 'International Trade',
        difficulty: 'Hard',
        status: 'coming-soon',
        biome: 'harbor',
        image: imgHarbor,
        offset: { x: 20, y: 0 }
    },
    {
        id: 'graph-guesser',
        title: 'Graph Guesser',
        desc: 'A graph appears — identify which economic concept it represents.',
        icon: <FaChartLine />,
        topic: 'All Topics',
        difficulty: 'Medium',
        status: 'coming-soon',
        biome: 'crystal',
        image: imgCrystal,
        offset: { x: -35, y: 0 }
    },
    {
        id: 'stat-sorter',
        title: 'Stat Sorter',
        desc: 'Match data types to the correct chart or statistical measure.',
        icon: <FaChartBar />,
        topic: 'Statistics',
        difficulty: 'Easy',
        status: 'coming-soon',
        biome: 'snow',
        image: imgSnow,
        offset: { x: 15, y: 0 }
    },
];

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
            <div className="gm-ocean-bg" style={{ backgroundImage: `url(${bgOcean})` }} />
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
                        Chart your course through the islands of knowledge. Each territory holds a unique trial.
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
                                className={`gm-island gm-biome-${game.biome} ${isLocked ? 'gm-island-locked' : ''}`}
                                variants={islandVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-100px' }}
                                style={{
                                    backgroundImage: `url(${game.image})`
                                }}
                            >
                                {/* The node point that the SVG path connects to */}
                                <div className="gm-island-node">
                                    <FaMapMarkerAlt />
                                </div>

                                {/* Island Content overlay (Darkens the image slightly) */}
                                <div className="gm-island-content">
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
                                        <div className="gm-island-btn gm-island-btn-locked">
                                            LOCKED
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}

                {/* End marker (Whirlpool) */}
                <div className="gm-island-container" style={{ transform: 'translateX(0%)', marginTop: '60px' }}>
                    <div
                        className="gm-island-node gm-node-end"
                        style={{
                            backgroundImage: `url(${imgWhirlpool})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '50%',
                            border: '2px solid rgba(74, 201, 227, 0.4)',
                            boxShadow: '0 0 30px rgba(74, 201, 227, 0.5)'
                        }}
                    >
                        <span className="gm-end-label">More Expeditions Coming Soon!</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Games;
