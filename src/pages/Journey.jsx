import { motion } from 'framer-motion';
import { FaPenNib, FaCode, FaRocket, FaCoffee, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Journey.css';

function Journey() {
    const lore = [
        {
            date: 'DEC 25, 2025 - 08:14 AM',
            title: 'THE CHRISTMAS SEED',
            desc: 'Thursday morning. While everyone else was opening presents and being normal, I opened Visual Studio Code. Started this folder because Economics textbooks are the best cure for insomnia and I wanted to build a Learning Management System that actually... doesn\'t suck.',
            icon: <FaCalendarAlt />
        },
        {
            date: 'DEC 28, 2025 - 11:42 PM',
            title: 'THE "BIG BANG" COMMIT',
            desc: 'First initial commit. 17,000 insertions of pure raw potential (and some boilerplate I probably didn\'t need, lol). The foundation of ArthShastra was officially laid. It was like a digital Big Bang, but with more CSS syntax errors.',
            icon: <FaCode />
        },
        {
            date: 'EARLY JAN 2026',
            title: 'THE RECHARTS BREAKUP',
            desc: 'Initially used Recharts for a few graphs, but it felt like wearing a suit that\'s two sizes too small. It was too "clean" and didn\'t let me do the "Dirty Work" of custom economic modeling. So, I dumped it for D3. Harder to learn, but at least I can now draw curves that actually make sense.',
            icon: <FaPenNib />
        },
        {
            date: 'MID JAN 2026',
            title: 'DYNAMIC THEMES INVASION',
            desc: 'Decided that every lesson needed its own personality. Leonardo da Vinci notebooks, Comic books, Industrial factories... because if the content is hard, the visuals should at least be cool. This is where "Brutalism" and "Corporate Gold" themes entered the chat.',
            icon: <FaRocket />
        },
        {
            date: 'LATE JAN 2026',
            title: 'THE STATISTICS PUSH',
            desc: 'Realized that Microeconomics is just one side of the coin. Started the Statistics module. Figured out how to make "Collection of Data" actually interesting through modern dashboard aesthetics and newspaper themes.',
            icon: <FaRocket />
        },
        {
            date: 'FEB 2026 - THE UPGRADE',
            title: 'REACT 19 & THE "EDGE"',
            desc: 'Upgraded to React 19 because why not? Living on the technical edge while studying for pre-boards is the ultimate adrenaline rush. Switched to a centralized CSS architecture because 9,000 lines of inline styles was becoming a digital health hazard.',
            icon: <FaRocket />
        },
        {
            date: 'FEB 10, 2026',
            title: 'ANTIGRAVITY INTEGRATION',
            desc: 'Realized that building this solo was slowing me down. Integrated Antigravity (me!) into the development workflow. Moving away from standard IDE limits and into a custom AI-driven researcher environment.',
            icon: <FaRocket />
        },
        {
            date: 'FEB 12, 2026',
            title: 'THE STATS PIVOT',
            desc: 'Economics had 13 different designs. It was a creative high, but a scalability nightmare. For Statistics, we consolidated. Unified themes (Newspaper + Dashboard) across all lessons. Efficiency is finally winning over artistic chaos.',
            icon: <FaRocket />
        },
        {
            date: 'NOW',
            title: 'BOARD EXAM REALITY',
            desc: 'The realization hits: I am a Class 12th student. Building this while studying for my own boards is the ultimate balancing act. Macroeconomics coming soon... eventually. Probably wasting my time on developing this thing, but hey, it\'s better than rote memorization!',
            icon: <FaCoffee />
        }
    ];

    return (
        <div className="journey-analog">
            <div className="paper-texture"></div>

            <header className="journey-hero">
                <Link to="/about" className="back-to-archives">← BACK TO ARCHIVES</Link>
                <div className="vertical-tape">TOP SECRET</div>
                <div className="hero-box">
                    <h1>THE <span className="highlight-ink">CHRONICLES</span></h1>
                    <p className="meta-info">[LOG ID: DEC25-FEB15]</p>
                </div>
            </header>

            <div className="chronicle-line">
                {lore.map((step, index) => (
                    <motion.div
                        key={index}
                        className="lore-card"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="lore-date">{step.date}</div>
                        <div className="lore-content-box">
                            <div className="lore-icon">{step.icon}</div>
                            <div className="lore-text">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <footer className="chronicle-footer">
                <p>TO BE CONTINUED... (PENDING BOARD EXAMS)</p>
            </footer>
        </div>
    );
}

export default Journey;
