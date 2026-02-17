import { motion } from 'framer-motion';
import { FaPenNib, FaCode, FaRocket, FaCoffee, FaCalendarAlt, FaPalette, FaChartBar, FaBolt, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Journey.css';

function Journey() {
    const lore = [
        {
            date: 'DEC 25, 2025',
            time: '08:14 AM',
            title: 'THE CHRISTMAS SEED',
            desc: 'Thursday morning. While everyone else was opening presents and being normal, I opened Visual Studio Code. Started this folder because Economics textbooks are the best cure for insomnia and I wanted to build a Learning Management System that actually... doesn\'t suck.',
            icon: <FaCalendarAlt />,
            tag: 'ORIGIN',
            tapeColor: '#e8d5b0'
        },
        {
            date: 'DEC 28, 2025',
            time: '11:42 PM',
            title: 'THE "BIG BANG" COMMIT',
            desc: 'First initial commit. 17,000 insertions of pure raw potential (and some boilerplate I probably didn\'t need, lol). The foundation of ArthShastra was officially laid. It was like a digital Big Bang, but with more CSS syntax errors.',
            icon: <FaCode />,
            tag: 'MILESTONE',
            tapeColor: '#b8d4b0'
        },
        {
            date: 'EARLY JAN 2026',
            time: null,
            title: 'THE RECHARTS BREAKUP',
            desc: 'Initially used Recharts for a few graphs, but it felt like wearing a suit that\'s two sizes too small. It was too "clean" and didn\'t let me do the "Dirty Work" of custom economic modeling. So, I dumped it for D3. Harder to learn, but at least I can now draw curves that actually make sense.',
            icon: <FaPenNib />,
            tag: 'PIVOT',
            tapeColor: '#d4b0b0'
        },
        {
            date: 'MID JAN 2026',
            time: null,
            title: 'DYNAMIC THEMES INVASION',
            desc: 'Decided that every lesson needed its own personality. Leonardo da Vinci notebooks, Comic books, Industrial factories... because if the content is hard, the visuals should at least be cool. This is where "Brutalism" and "Corporate Gold" themes entered the chat.',
            icon: <FaPalette />,
            tag: 'DESIGN',
            tapeColor: '#c8b0d4'
        },
        {
            date: 'LATE JAN 2026',
            time: null,
            title: 'THE STATISTICS PUSH',
            desc: 'Realized that Microeconomics is just one side of the coin. Started the Statistics module. Figured out how to make "Collection of Data" actually interesting through modern dashboard aesthetics and newspaper themes.',
            icon: <FaChartBar />,
            tag: 'EXPANSION',
            tapeColor: '#b0c8d4'
        },
        {
            date: 'FEB 2026',
            time: null,
            title: 'REACT 19 & THE "EDGE"',
            desc: 'Upgraded to React 19 because why not? Living on the technical edge while studying for pre-boards is the ultimate adrenaline rush. Switched to a centralized CSS architecture because 9,000 lines of inline styles was becoming a digital health hazard.',
            icon: <FaBolt />,
            tag: 'UPGRADE',
            tapeColor: '#e0d4a0'
        },
        {
            date: 'FEB 12, 2026',
            time: null,
            title: 'THE STATS PIVOT',
            desc: 'Economics had 13 different designs. It was a creative high, but a scalability nightmare. For Statistics, we consolidated. Unified themes (Newspaper + Dashboard) across all lessons. Efficiency is finally winning over artistic chaos.',
            icon: <FaRocket />,
            tag: 'REFACTOR',
            tapeColor: '#d4c0a0'
        },
        {
            date: 'NOW',
            time: null,
            title: 'BOARD EXAM REALITY',
            desc: 'The realization hits: I am a Class 12th student. Building this while studying for my own boards is the ultimate balancing act. Macroeconomics coming soon... eventually. Probably wasting my time on developing this thing, but hey, it\'s better than rote memorization!',
            icon: <FaCoffee />,
            tag: 'CURRENT',
            tapeColor: '#d4b0b0'
        }
    ];

    const cardVariants = {
        hidden: (isLeft) => ({
            opacity: 0,
            x: isLeft ? -60 : 60,
            rotate: isLeft ? -2 : 2,
        }),
        visible: {
            opacity: 1,
            x: 0,
            rotate: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 15,
            }
        }
    };

    return (
        <div className="jrn-page">
            {/* Paper grain texture */}
            <div className="jrn-paper-grain" />

            {/* Header */}
            <header className="jrn-header">
                <Link to="/about" className="jrn-back">
                    <FaArrowLeft /> Back to Archives
                </Link>
                <motion.div
                    className="jrn-title-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="jrn-notebook-holes">
                        <span /><span /><span />
                    </div>
                    <div className="jrn-title-tape">FIELD NOTES</div>
                    <h1 className="jrn-title">The Chronicles</h1>
                    <p className="jrn-subtitle">A handwritten account of how ArthShastra came to be — from Christmas morning to board exam panic.</p>
                    <div className="jrn-title-meta">
                        <span>{lore.length} entries</span>
                        <span className="jrn-meta-sep">/</span>
                        <span>Dec 2025 — Present</span>
                        <span className="jrn-meta-sep">/</span>
                        <span>Ongoing</span>
                    </div>
                </motion.div>
            </header>

            {/* Timeline */}
            <div className="jrn-timeline">
                <div className="jrn-timeline-line" />
                {lore.map((step, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            className={`jrn-entry ${isLeft ? 'jrn-entry-left' : 'jrn-entry-right'}`}
                            custom={isLeft}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-80px' }}
                        >
                            {/* Ink dot on the timeline */}
                            <div className="jrn-ink-dot" />

                            {/* Connector line from dot to card */}
                            <div className="jrn-connector" />

                            {/* Card */}
                            <div className="jrn-card">
                                {/* Tape strip at top */}
                                <div className="jrn-tape" style={{ background: step.tapeColor }} />

                                <div className="jrn-card-top">
                                    <div className="jrn-card-icon">{step.icon}</div>
                                    <span className="jrn-card-tag">{step.tag}</span>
                                    <span className="jrn-card-number">#{String(index + 1).padStart(2, '0')}</span>
                                </div>

                                <div className="jrn-card-date">
                                    {step.date}{step.time && <span className="jrn-card-time"> — {step.time}</span>}
                                </div>

                                <h3 className="jrn-card-title">{step.title}</h3>
                                <p className="jrn-card-desc">{step.desc}</p>

                                {/* Notebook ruled lines behind text */}
                                <div className="jrn-ruled-lines" aria-hidden="true">
                                    {[...Array(6)].map((_, i) => <div key={i} className="jrn-ruled-line" />)}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Footer */}
            <motion.footer
                className="jrn-footer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="jrn-footer-doodle">~</div>
                <p>To be continued...</p>
                <span>(pending board exams)</span>
            </motion.footer>
        </div>
    );
}

export default Journey;
