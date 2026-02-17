import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaBalanceScale, FaChartLine, FaCoins, FaShoppingCart,
    FaGlobeAmericas, FaChartBar, FaLock,
    FaCompass, FaScroll, FaGem
} from 'react-icons/fa';
import './Games.css';

const GAMES = [
    {
        id: 'market-maker',
        title: 'Market Maker',
        desc: 'Set prices for goods and watch supply-demand curves react in real time. Find the equilibrium before time runs out!',
        icon: <FaBalanceScale />,
        topic: 'Supply & Demand',
        difficulty: 'Medium',
        status: 'coming-soon',
    },
    {
        id: 'price-hunter',
        title: 'Price Hunter',
        desc: 'Sort goods into elastic vs inelastic categories. Drag and drop items before the clock ticks down!',
        icon: <FaShoppingCart />,
        topic: 'Elasticity',
        difficulty: 'Easy',
        status: 'coming-soon',
    },
    {
        id: 'budget-boss',
        title: 'Budget Boss',
        desc: 'You are the Finance Minister. Allocate the national budget across sectors and see how your decisions affect the economy.',
        icon: <FaCoins />,
        topic: 'Government Budget',
        difficulty: 'Hard',
        status: 'coming-soon',
    },
    {
        id: 'trade-tycoon',
        title: 'Trade Tycoon',
        desc: 'Make import/export decisions for your country. Balance trade deficits, manage tariffs, and grow your GDP.',
        icon: <FaGlobeAmericas />,
        topic: 'International Trade',
        difficulty: 'Hard',
        status: 'coming-soon',
    },
    {
        id: 'graph-guesser',
        title: 'Graph Guesser',
        desc: 'A graph appears — identify which economic concept it represents. Speed and accuracy both matter!',
        icon: <FaChartLine />,
        topic: 'All Topics',
        difficulty: 'Medium',
        status: 'coming-soon',
    },
    {
        id: 'stat-sorter',
        title: 'Stat Sorter',
        desc: 'Match data types to the correct chart or statistical measure. How well do you know your stats toolkit?',
        icon: <FaChartBar />,
        topic: 'Statistics',
        difficulty: 'Easy',
        status: 'coming-soon',
    },
];

const difficultyStars = (d) => {
    if (d === 'Easy') return '★';
    if (d === 'Medium') return '★★';
    return '★★★';
};

const cardVariants = {
    hidden: (isLeft) => ({
        opacity: 0,
        x: isLeft ? -50 : 50,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 80, damping: 14 }
    }
};

function Games() {
    const trailRef = useRef(null);
    const [svgPath, setSvgPath] = useState('');
    const [trailSize, setTrailSize] = useState({ w: 0, h: 0 });

    // Build curvy SVG path connecting all nodes
    useEffect(() => {
        const buildPath = () => {
            if (!trailRef.current) return;
            const trail = trailRef.current;
            const nodes = trail.querySelectorAll('.gm-node');
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

            // Build a curvy path using cubic beziers between each pair
            let d = `M ${points[0].x} ${points[0].y}`;

            for (let i = 0; i < points.length - 1; i++) {
                const curr = points[i];
                const next = points[i + 1];
                const midY = (curr.y + next.y) / 2;

                // Control points swing in the opposite direction of the next card
                // to create that winding, ocean-route feel
                const swingAmount = (trailRect.width * 0.2);
                const direction = i % 2 === 0 ? 1 : -1;

                const cp1x = curr.x + (swingAmount * direction);
                const cp1y = midY - (next.y - curr.y) * 0.1;
                const cp2x = next.x - (swingAmount * direction);
                const cp2y = midY + (next.y - curr.y) * 0.1;

                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
            }

            setSvgPath(d);
        };

        // Build after a short delay to let layout settle
        const timer = setTimeout(buildPath, 300);
        window.addEventListener('resize', buildPath);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', buildPath);
        };
    }, []);

    return (
        <div className="gm-page">
            <div className="gm-parchment" />
            <div className="gm-map-lines" />

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
                    <h1 className="gm-title">The Economics Arena</h1>
                    <p className="gm-subtitle">
                        Choose your quest. Each game tests a different skill from your economics and statistics journey.
                    </p>
                </div>
                <div className="gm-header-stats">
                    <div className="gm-header-stat">
                        <span className="gm-header-stat-val">{GAMES.length}</span>
                        <span className="gm-header-stat-label">Quests</span>
                    </div>
                    <div className="gm-header-stat">
                        <span className="gm-header-stat-val">0</span>
                        <span className="gm-header-stat-label">Completed</span>
                    </div>
                    <div className="gm-header-stat">
                        <span className="gm-header-stat-val"><FaGem /></span>
                        <span className="gm-header-stat-label">Rewards</span>
                    </div>
                </div>
            </motion.header>

            {/* Trail Map */}
            <div className="gm-trail" ref={trailRef}>
                {/* Curvy SVG trail path */}
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
                            stroke="#c4a87a"
                            strokeWidth="3"
                            strokeDasharray="10 8"
                            strokeLinecap="round"
                            opacity="0.35"
                        />
                    </svg>
                )}

                {GAMES.map((game, index) => {
                    const isLeft = index % 2 === 0;
                    const isLocked = game.status === 'coming-soon';

                    return (
                        <motion.div
                            key={game.id}
                            className={`gm-stop ${isLeft ? 'gm-stop-left' : 'gm-stop-right'}`}
                            custom={isLeft}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {/* Trail node — numbered circle on the path */}
                            <div className={`gm-node ${isLocked ? 'gm-node-locked' : 'gm-node-active'}`}>
                                <span>{index + 1}</span>
                            </div>

                            {/* Quest card */}
                            <motion.div
                                className={`gm-card ${isLocked ? 'gm-card-locked' : ''}`}
                                whileHover={!isLocked ? { y: -4, scale: 1.01 } : {}}
                            >
                                {isLocked && (
                                    <div className="gm-card-lock">
                                        <FaLock />
                                        <span>COMING SOON</span>
                                    </div>
                                )}

                                <div className="gm-card-head">
                                    <div className="gm-card-icon">{game.icon}</div>
                                    <div className="gm-card-meta">
                                        <span className="gm-card-topic">{game.topic}</span>
                                        <span className="gm-card-diff" title={game.difficulty}>
                                            {difficultyStars(game.difficulty)} {game.difficulty}
                                        </span>
                                    </div>
                                </div>

                                <h3 className="gm-card-title">{game.title}</h3>
                                <p className="gm-card-desc">{game.desc}</p>

                                {!isLocked ? (
                                    <Link to={`/games/${game.id}`} className="gm-card-btn">
                                        START QUEST
                                    </Link>
                                ) : (
                                    <div className="gm-card-btn gm-card-btn-locked">
                                        LOCKED
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    );
                })}

                {/* End marker */}
                <div className="gm-trail-end">
                    <div className="gm-node gm-node-end">?</div>
                    <p>More quests ahead...</p>
                </div>
            </div>

            {/* Footer */}
            <motion.footer
                className="gm-footer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <p>Complete lessons to unlock new games!</p>
            </motion.footer>
        </div>
    );
}

export default Games;
