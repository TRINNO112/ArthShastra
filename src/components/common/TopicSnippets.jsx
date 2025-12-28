// TopicSnippets Component - Quick concept cards for key economics topics
import { useState } from 'react';
import {
  BsGraphUp,
  BsGraphDown,
  BsArrowLeftRight,
  BsBank,
  BsCashStack,
  BsPieChart,
  BsBuilding,
  BsGlobe,
  BsLightning,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs';
import {
  RiGovernmentLine,
  RiExchangeDollarLine,
  RiScales3Line,
  RiLineChartLine
} from 'react-icons/ri';
import {
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineCurrencyRupee,
  HiOutlineScale,
  HiOutlineChartBar,
  HiOutlineGlobe
} from 'react-icons/hi';
import {
  IoWalletOutline,
  IoCartOutline,
  IoBusinessOutline,
  IoPricetagOutline
} from 'react-icons/io5';
import './TopicSnippets.css';

// Topic data - Key economics concepts
const topicSnippets = [
  // MICROECONOMICS TOPICS
  {
    id: 1,
    title: 'Demand',
    category: 'Micro',
    icon: HiOutlineTrendingUp,
    color: 'gold',
    definition: 'Quantity of a good that consumers are willing and able to buy at various prices.',
    keyPoint: 'Law: Price ↑ → Demand ↓',
    example: 'When phone prices drop during sales, more people buy them.'
  },
  {
    id: 2,
    title: 'Supply',
    category: 'Micro',
    icon: HiOutlineTrendingDown,
    color: 'green',
    definition: 'Quantity of a good that producers are willing to sell at various prices.',
    keyPoint: 'Law: Price ↑ → Supply ↑',
    example: 'Farmers grow more wheat when wheat prices increase.'
  },
  {
    id: 3,
    title: 'Equilibrium',
    category: 'Micro',
    icon: HiOutlineScale,
    color: 'cyan',
    definition: 'Point where demand equals supply - no shortage or surplus.',
    keyPoint: 'Market clears at this price',
    example: 'The price at which all produced goods are sold.'
  },
  {
    id: 4,
    title: 'Elasticity',
    category: 'Micro',
    icon: BsArrowLeftRight,
    color: 'purple',
    definition: 'Measure of how much demand/supply changes when price changes.',
    keyPoint: 'Ed = %ΔQd / %ΔP',
    example: 'Luxury goods are elastic; necessities are inelastic.'
  },
  {
    id: 5,
    title: 'Consumer Equilibrium',
    category: 'Micro',
    icon: IoWalletOutline,
    color: 'orange',
    definition: 'Point where consumer maximizes satisfaction given their budget.',
    keyPoint: 'MUx/Px = MUy/Py',
    example: 'Deciding how much to spend on food vs entertainment.'
  },
  {
    id: 6,
    title: 'Market Forms',
    category: 'Micro',
    icon: IoBusinessOutline,
    color: 'purple',
    definition: 'Structure of markets based on competition level.',
    keyPoint: '4 types: Perfect, Monopoly, Oligopoly, Monopolistic',
    example: 'Railways = Monopoly; Telecom = Oligopoly'
  },
  {
    id: 7,
    title: 'Utility',
    category: 'Micro',
    icon: HiOutlineTrendingUp,
    color: 'gold',
    definition: 'Satisfaction or benefit derived from consuming a good or service.',
    keyPoint: 'TU = Sum of all MU',
    example: 'First slice of pizza gives more satisfaction than the fifth slice.'
  },
  {
    id: 8,
    title: 'Marginal Utility',
    category: 'Micro',
    icon: BsGraphDown,
    color: 'pink',
    definition: 'Additional satisfaction from consuming one more unit of a good.',
    keyPoint: 'Law of Diminishing MU',
    example: 'Each additional glass of water gives less satisfaction when thirsty.'
  },
  {
    id: 9,
    title: 'Production Function',
    category: 'Micro',
    icon: BsBuilding,
    color: 'cyan',
    definition: 'Relationship between inputs used and output produced.',
    keyPoint: 'Q = f(L, K)',
    example: 'A factory using more workers and machines produces more goods.'
  },
  {
    id: 10,
    title: 'Cost Concepts',
    category: 'Micro',
    icon: IoPricetagOutline,
    color: 'orange',
    definition: 'Different types of costs incurred in production process.',
    keyPoint: 'TC = TFC + TVC',
    example: 'Rent (fixed) + Raw materials (variable) = Total Cost'
  },
  {
    id: 11,
    title: 'Revenue',
    category: 'Micro',
    icon: HiOutlineCurrencyRupee,
    color: 'green',
    definition: 'Total income received by a firm from selling its output.',
    keyPoint: 'TR = P × Q',
    example: 'Selling 100 pens at ₹10 each = ₹1000 total revenue.'
  },
  {
    id: 12,
    title: 'Perfect Competition',
    category: 'Micro',
    icon: HiOutlineUserGroup,
    color: 'cyan',
    definition: 'Market with many buyers/sellers, identical products, free entry/exit.',
    keyPoint: 'Price = MR = AR',
    example: 'Agricultural markets like wheat and rice trading.'
  },
  {
    id: 13,
    title: 'Monopoly',
    category: 'Micro',
    icon: BsBuilding,
    color: 'purple',
    definition: 'Single seller controls entire market with no close substitutes.',
    keyPoint: 'Price Maker, MR < AR',
    example: 'Indian Railways for passenger trains in most routes.'
  },
  {
    id: 14,
    title: 'Opportunity Cost',
    category: 'Micro',
    icon: RiScales3Line,
    color: 'gold',
    definition: 'Value of the next best alternative foregone when making a choice.',
    keyPoint: 'Trade-off in every decision',
    example: 'Studying economics means giving up time for playing cricket.'
  },
  {
    id: 15,
    title: 'PPC Curve',
    category: 'Micro',
    icon: RiLineChartLine,
    color: 'pink',
    definition: 'Shows maximum combinations of two goods an economy can produce.',
    keyPoint: 'Concave to origin (↑ Opp. Cost)',
    example: 'Choosing between producing guns vs butter with limited resources.'
  },
  // MACROECONOMICS TOPICS
  {
    id: 16,
    title: 'GDP',
    category: 'Macro',
    icon: HiOutlineChartBar,
    color: 'gold',
    definition: 'Total market value of all final goods & services produced in a country in a year.',
    keyPoint: 'GDP = C + I + G + (X-M)',
    example: "India's GDP is around $3.7 trillion (2024)."
  },
  {
    id: 17,
    title: 'National Income',
    category: 'Macro',
    icon: HiOutlineCurrencyRupee,
    color: 'green',
    definition: 'Total income earned by all factors of production in a country.',
    keyPoint: 'NI = GDP - Depreciation + NFIA',
    example: 'Wages + Rent + Interest + Profit = National Income'
  },
  {
    id: 18,
    title: 'Inflation',
    category: 'Macro',
    icon: BsGraphUp,
    color: 'pink',
    definition: 'Sustained increase in general price level over time.',
    keyPoint: 'Measured by CPI & WPI',
    example: 'If inflation is 6%, ₹100 today = ₹94 purchasing power next year.'
  },
  {
    id: 19,
    title: 'Deflation',
    category: 'Macro',
    icon: BsGraphDown,
    color: 'cyan',
    definition: 'Sustained decrease in general price level over time.',
    keyPoint: 'Opposite of inflation',
    example: 'Japan experienced deflation in 1990s - prices kept falling.'
  },
  {
    id: 20,
    title: 'Money Supply',
    category: 'Macro',
    icon: BsCashStack,
    color: 'green',
    definition: 'Total amount of money circulating in the economy.',
    keyPoint: 'M1, M2, M3, M4 measures',
    example: 'RBI controls money supply through monetary policy.'
  },
  {
    id: 21,
    title: 'Fiscal Policy',
    category: 'Macro',
    icon: RiGovernmentLine,
    color: 'purple',
    definition: "Government's use of taxation and spending to influence the economy.",
    keyPoint: 'Tool: Budget (Revenue & Expenditure)',
    example: 'Tax cuts to boost spending during recession.'
  },
  {
    id: 22,
    title: 'Monetary Policy',
    category: 'Macro',
    icon: BsBank,
    color: 'gold',
    definition: "Central bank's policy to control money supply and interest rates.",
    keyPoint: 'Tools: Repo Rate, CRR, SLR',
    example: 'RBI raises repo rate to control inflation.'
  },
  {
    id: 23,
    title: 'Balance of Payments',
    category: 'Macro',
    icon: HiOutlineGlobe,
    color: 'cyan',
    definition: 'Record of all economic transactions between residents and rest of world.',
    keyPoint: 'Current A/c + Capital A/c = 0',
    example: 'Exports, imports, remittances, FDI are all recorded.'
  },
  {
    id: 24,
    title: 'Foreign Exchange',
    category: 'Macro',
    icon: RiExchangeDollarLine,
    color: 'orange',
    definition: 'Rate at which one currency can be exchanged for another.',
    keyPoint: 'Flexible vs Fixed rates',
    example: '1 USD = ₹83 means you need ₹83 to buy 1 dollar.'
  },
  {
    id: 25,
    title: 'Government Budget',
    category: 'Macro',
    icon: RiGovernmentLine,
    color: 'pink',
    definition: 'Annual financial statement showing government revenue and expenditure.',
    keyPoint: 'Revenue Budget + Capital Budget',
    example: 'Union Budget presented every February in India.'
  },
  {
    id: 26,
    title: 'Fiscal Deficit',
    category: 'Macro',
    icon: BsPieChart,
    color: 'purple',
    definition: 'Excess of total expenditure over total receipts excluding borrowings.',
    keyPoint: 'FD = Total Exp - Total Receipts (excl. borrowings)',
    example: "India's fiscal deficit target is around 5.1% of GDP (2024-25)."
  },
  {
    id: 27,
    title: 'Multiplier Effect',
    category: 'Macro',
    icon: BsLightning,
    color: 'gold',
    definition: 'Increase in final income greater than initial investment.',
    keyPoint: 'K = 1/(1-MPC) = 1/MPS',
    example: '₹100 investment with MPC=0.8 creates ₹500 income (K=5).'
  },
  {
    id: 28,
    title: 'Aggregate Demand',
    category: 'Macro',
    icon: HiOutlineTrendingUp,
    color: 'green',
    definition: 'Total demand for goods and services in an economy at a given price level.',
    keyPoint: 'AD = C + I + G + (X-M)',
    example: 'Consumer spending + business investment + govt spending + net exports.'
  },
  {
    id: 29,
    title: 'Credit Creation',
    category: 'Macro',
    icon: BsBank,
    color: 'cyan',
    definition: 'Process by which banks create credit/money through lending.',
    keyPoint: 'Credit = Initial Deposit × (1/CRR)',
    example: 'With 10% CRR, ₹1000 deposit creates ₹10,000 credit.'
  },
  {
    id: 30,
    title: 'Central Bank Functions',
    category: 'Macro',
    icon: BsBank,
    color: 'orange',
    definition: 'Key roles of RBI in managing the economy.',
    keyPoint: 'Banker to Govt + Banks, Currency Issue',
    example: 'RBI acts as lender of last resort during banking crises.'
  }
];

function TopicSnippets() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [flippedCards, setFlippedCards] = useState({});
  const [showAll, setShowAll] = useState(false);

  const filteredTopics = activeCategory === 'all'
    ? topicSnippets
    : topicSnippets.filter(topic => topic.category.toLowerCase() === activeCategory);

  // Show only first 12 cards unless "Show All" is clicked
  const displayedTopics = showAll ? filteredTopics : filteredTopics.slice(0, 12);
  const hasMoreTopics = filteredTopics.length > 12;

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Reset showAll when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section className="topic-snippets">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">Quick Learn</span>
          <h2 className="section-title">Topic Snippets</h2>
          <p className="section-subtitle">
            Grasp key economics concepts in seconds. Click any card to see examples!
          </p>
          <div className="snippet-stats">
            <span className="stat-pill micro-pill">
              <BsGraphUp /> 15 Micro Topics
            </span>
            <span className="stat-pill macro-pill">
              <RiGovernmentLine /> 15 Macro Topics
            </span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="snippet-filters">
          <button
            className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            All Topics
          </button>
          <button
            className={`filter-btn ${activeCategory === 'micro' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('micro')}
          >
            <BsGraphUp /> Microeconomics
          </button>
          <button
            className={`filter-btn ${activeCategory === 'macro' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('macro')}
          >
            <RiGovernmentLine /> Macroeconomics
          </button>
        </div>

        {/* Snippets Grid */}
        <div className="snippets-grid">
          {displayedTopics.map((topic) => {
            const IconComponent = topic.icon;
            const isFlipped = flippedCards[topic.id];

            return (
              <div
                key={topic.id}
                className={`snippet-card ${topic.color} ${isFlipped ? 'flipped' : ''}`}
                onClick={() => toggleFlip(topic.id)}
              >
                <div className="snippet-inner">
                  {/* Front of card */}
                  <div className="snippet-front">
                    <div className="snippet-header">
                      <div className={`snippet-icon ${topic.color}`}>
                        <IconComponent />
                      </div>
                      <span className={`snippet-category ${topic.category.toLowerCase()}`}>
                        {topic.category}
                      </span>
                    </div>

                    <h3 className="snippet-title">{topic.title}</h3>
                    <p className="snippet-definition">{topic.definition}</p>

                    <div className="snippet-key-point">
                      <BsLightning className="key-icon" />
                      <span>{topic.keyPoint}</span>
                    </div>

                    <span className="flip-hint">Click for example</span>
                  </div>

                  {/* Back of card */}
                  <div className="snippet-back">
                    <div className={`snippet-icon ${topic.color}`}>
                      <IconComponent />
                    </div>
                    <h3 className="snippet-title">{topic.title}</h3>
                    <div className="example-label">Real World Example</div>
                    <p className="snippet-example">{topic.example}</p>
                    <span className="flip-hint">Click to go back</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {hasMoreTopics && (
          <div className="show-more-container">
            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <BsChevronLeft /> Show Less
                </>
              ) : (
                <>
                  Show All {filteredTopics.length} Topics <BsChevronRight />
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="snippets-cta">
          <p>Want to learn these topics in detail?</p>
          <a href="/lessons" className="snippets-link">
            Explore Full Lessons <BsChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default TopicSnippets;
