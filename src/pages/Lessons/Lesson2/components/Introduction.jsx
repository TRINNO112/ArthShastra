// Introduction.jsx - Scarcity and Choice
import { FaExclamationCircle, FaExchangeAlt, FaBalanceScale, FaLightbulb, FaInfinity, FaHourglassHalf, FaRandom } from 'react-icons/fa';
import './components.css';

function Introduction() {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 2</span>
        <h2 className="section-title-lesson">Scarcity and Choice</h2>
        <p className="section-subtitle-lesson">
          Understanding the fundamental economic problem that affects every society
        </p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <h3 className="card-title">
          <FaExclamationCircle className="title-icon gold" />
          What is the Economic Problem?
        </h3>
        <p className="intro-text intro-economic-problem">
          The <strong className="intro-highlight-gold">Economic Problem</strong> is fundamentally a problem of <strong>Choice</strong>.
          Every individual, business, and government faces this problem daily. Whether you're deciding how to spend your
          pocket money, a company is choosing between hiring more workers or buying new equipment, or a government is
          deciding between building hospitals or schools - all face the same underlying challenge.
        </p>

        <p className="intro-text intro-economic-problem-secondary">
          This problem exists because of a fundamental mismatch in our world: <strong className="intro-highlight-green">our wants are unlimited</strong>,
          but <strong className="intro-highlight-red">our resources to fulfill those wants are limited</strong>. This gap between what we
          want and what we can have creates the need for economics as a discipline.
        </p>

        <div className="intro-example-box">
          <h4 className="intro-example-heading">
            <FaLightbulb />
            Real-World Example
          </h4>
          <p className="intro-example-text">
            Imagine you have ₹1000 to spend this month. You want to buy new clothes (₹800), go to a movie with friends (₹400),
            buy a new book (₹300), and save for a gaming console (₹500). Your wants total ₹2000, but you only have ₹1000.
            You must <strong>choose</strong> which wants to satisfy and which to postpone. This is the economic problem in action!
          </p>
        </div>

        <h4 className="intro-section-heading">
          Why Does This Problem Exist?
        </h4>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon purple">
              <FaInfinity />
            </div>
            <h4>1. Unlimited Human Wants</h4>
            <p className="intro-feature-text">
              Human wants are <strong>endless and ever-growing</strong>. As soon as one want is satisfied, another emerges.
              When you get a smartphone, you want a better one. When you have food, you want tastier food. When you have
              a house, you want a bigger house. This is human nature - our desires continuously multiply.
            </p>
            <div className="intro-key-point-box-purple">
              <strong>Key Point:</strong> Wants are not just about survival (food, shelter). They include comfort (AC, car),
              luxury (branded items), status (latest gadgets), and aspirations (foreign vacation). Each satisfied want creates
              space for new wants to emerge.
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon red">
              <FaHourglassHalf />
            </div>
            <h4>2. Limited/Scarce Resources</h4>
            <p className="intro-feature-text">
              Resources needed to produce goods and services are <strong>limited in supply</strong>. This includes natural resources
              (land, minerals, water), human resources (labor, skills), and capital resources (machinery, factories, money).
              No country has unlimited oil, unlimited workers, or unlimited money to spend.
            </p>
            <div className="intro-key-point-box-red">
              <strong>Example:</strong> India has limited agricultural land. Even if we want to produce infinite food,
              we cannot because land is scarce. Similarly, there are only 24 hours in a day - your time is scarce.
              Even billionaires cannot buy more hours in a day!
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon cyan">
              <FaRandom />
            </div>
            <h4>3. Alternative Uses of Resources</h4>
            <p className="intro-feature-text">
              Most resources can be used in <strong>multiple ways</strong>. The same piece of land can be used to build a
              hospital, a school, a shopping mall, or a park. The same ₹1 crore can be invested in healthcare, education,
              or infrastructure. When resources have alternative uses, choosing one use means giving up others.
            </p>
            <div className="intro-key-point-box-cyan">
              <strong>Real Example:</strong> A farmer has 10 acres of land. He can grow rice (feeds more people) or wheat
              (earns more money). He can't do both on the same land at the same time. His choice depends on what he
              values more - feeding more people or earning more income.
            </div>
          </div>
        </div>
      </div>

      <div className="content-card intro-content-card-margin">
        <h3 className="card-title">
          <FaBalanceScale className="title-icon gold" />
          The Concept of Scarcity
        </h3>
        <p className="intro-text intro-scarcity-text">
          <strong className="intro-highlight-gold">Scarcity</strong> does not mean shortage or poverty. It's a relative concept.
          Scarcity exists when the <strong>demand for a resource exceeds its supply</strong> at zero price. Even rich countries
          face scarcity because wants are unlimited.
        </p>

        <div className="intro-scarcity-grid">
          <div className="intro-scarcity-is-box">
            <h4 className="intro-scarcity-is-heading">
              ✓ What Scarcity IS
            </h4>
            <ul className="intro-scarcity-is-list">
              <li>A universal phenomenon affecting all economies</li>
              <li>The gap between unlimited wants and limited resources</li>
              <li>The reason why we must make choices</li>
              <li>Relative to wants (even air can be scarce if wants exceed supply)</li>
              <li>Permanent - it cannot be eliminated completely</li>
            </ul>
          </div>

          <div className="intro-scarcity-not-box">
            <h4 className="intro-scarcity-not-heading">
              ✗ What Scarcity is NOT
            </h4>
            <ul className="intro-scarcity-not-list">
              <li>Not the same as poverty (rich countries also face scarcity)</li>
              <li>Not a temporary shortage (shortage can be fixed, scarcity persists)</li>
              <li>Not about having "nothing" (it's about not having "enough")</li>
              <li>Not solvable by just producing more (wants grow faster)</li>
              <li>Not limited to physical goods (time, attention are also scarce)</li>
            </ul>
          </div>
        </div>

        <div className="intro-global-perspective-box">
          <h4 className="intro-global-perspective-heading">
            🌍 Global Perspective
          </h4>
          <p className="intro-global-perspective-text">
            Even the richest countries like the USA, Japan, or Germany face scarcity. They have limited land, limited labor,
            and limited time. They cannot satisfy all wants of all citizens simultaneously. For instance, the US government
            must choose between spending on military, healthcare, education, or infrastructure. This choice exists because
            resources (the budget) are scarce relative to all the things citizens want their government to provide.
          </p>
        </div>
      </div>

      <div className="highlight-card purple intro-choice-card-margin">
        <div className="highlight-icon">
          <FaExchangeAlt />
        </div>
        <div className="highlight-content">
          <h3 className="intro-choice-heading-margin">The Inevitable Need for Choice</h3>
          <p className="intro-choice-text">
            Because resources are scarce and have alternative uses, <strong>choice becomes inevitable</strong>. Every economic
            agent - individuals, firms, and governments - must decide:
          </p>
          <ul className="intro-choice-list">
            <li><strong>What to produce?</strong> - Should we produce guns or butter? Hospitals or schools?</li>
            <li><strong>How to produce?</strong> - Should we use labor-intensive or capital-intensive methods?</li>
            <li><strong>For whom to produce?</strong> - Should goods go to rich or poor? Young or old?</li>
            <li><strong>When to produce?</strong> - Should we produce now or save resources for future?</li>
          </ul>
          <p className="intro-choice-summary">
            These choices form the core of economics. <strong>Economics is essentially the study of how societies make
            choices to allocate scarce resources among competing uses to satisfy unlimited wants.</strong>
          </p>
        </div>
      </div>

      <div className="highlight-card cyan intro-key-takeaway-card-margin">
        <div className="highlight-content">
          <h3 className="intro-key-takeaway-heading-margin">💡 Key Takeaway</h3>
          <p className="intro-key-takeaway-text">
            The economic problem of <strong className="intro-key-takeaway-highlight">scarcity and choice</strong> is universal and permanent.
            It exists in all economic systems - capitalism, socialism, or mixed economy. It affects individuals (limited money),
            firms (limited capital), and governments (limited budget). Understanding this problem is the first step in understanding
            all economic theories and policies. Everything in economics - from demand and supply to inflation and unemployment -
            ultimately traces back to this fundamental problem of choosing how to use scarce resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
