// Introduction.jsx - Scarcity and Choice
import { FaExclamationCircle, FaExchangeAlt, FaBalanceScale, FaLightbulb, FaInfinity, FaHourglassHalf, FaRandom } from 'react-icons/fa';

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
        <p className="intro-text" style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
          The <strong style={{ color: '#ffd700' }}>Economic Problem</strong> is fundamentally a problem of <strong>Choice</strong>.
          Every individual, business, and government faces this problem daily. Whether you're deciding how to spend your
          pocket money, a company is choosing between hiring more workers or buying new equipment, or a government is
          deciding between building hospitals or schools - all face the same underlying challenge.
        </p>

        <p className="intro-text" style={{ fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '25px' }}>
          This problem exists because of a fundamental mismatch in our world: <strong style={{ color: '#00ff88' }}>our wants are unlimited</strong>,
          but <strong style={{ color: '#ff6b6b' }}>our resources to fulfill those wants are limited</strong>. This gap between what we
          want and what we can have creates the need for economics as a discipline.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(255,215,0,0.15), rgba(0,150,255,0.15))',
          padding: '25px',
          borderRadius: '14px',
          border: '2px solid rgba(255,215,0,0.3)',
          marginBottom: '25px'
        }}>
          <h4 style={{ color: '#ffd700', margin: '0 0 15px 0', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaLightbulb />
            Real-World Example
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
            Imagine you have ₹1000 to spend this month. You want to buy new clothes (₹800), go to a movie with friends (₹400),
            buy a new book (₹300), and save for a gaming console (₹500). Your wants total ₹2000, but you only have ₹1000.
            You must <strong>choose</strong> which wants to satisfy and which to postpone. This is the economic problem in action!
          </p>
        </div>

        <h4 style={{ color: 'white', fontSize: '1.2rem', marginTop: '30px', marginBottom: '20px' }}>
          Why Does This Problem Exist?
        </h4>

        <div className="feature-grid">
          <div className="feature-item">
            <div className="feature-icon purple">
              <FaInfinity />
            </div>
            <h4>1. Unlimited Human Wants</h4>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              Human wants are <strong>endless and ever-growing</strong>. As soon as one want is satisfied, another emerges.
              When you get a smartphone, you want a better one. When you have food, you want tastier food. When you have
              a house, you want a bigger house. This is human nature - our desires continuously multiply.
            </p>
            <div style={{
              background: 'rgba(157,78,221,0.1)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.75)'
            }}>
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
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              Resources needed to produce goods and services are <strong>limited in supply</strong>. This includes natural resources
              (land, minerals, water), human resources (labor, skills), and capital resources (machinery, factories, money).
              No country has unlimited oil, unlimited workers, or unlimited money to spend.
            </p>
            <div style={{
              background: 'rgba(255,107,107,0.1)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.75)'
            }}>
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
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
              Most resources can be used in <strong>multiple ways</strong>. The same piece of land can be used to build a
              hospital, a school, a shopping mall, or a park. The same ₹1 crore can be invested in healthcare, education,
              or infrastructure. When resources have alternative uses, choosing one use means giving up others.
            </p>
            <div style={{
              background: 'rgba(0,212,255,0.1)',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
              fontSize: '0.85rem',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.75)'
            }}>
              <strong>Real Example:</strong> A farmer has 10 acres of land. He can grow rice (feeds more people) or wheat
              (earns more money). He can't do both on the same land at the same time. His choice depends on what he
              values more - feeding more people or earning more income.
            </div>
          </div>
        </div>
      </div>

      <div className="content-card" style={{ marginTop: '25px' }}>
        <h3 className="card-title">
          <FaBalanceScale className="title-icon gold" />
          The Concept of Scarcity
        </h3>
        <p className="intro-text" style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '20px' }}>
          <strong style={{ color: '#ffd700' }}>Scarcity</strong> does not mean shortage or poverty. It's a relative concept.
          Scarcity exists when the <strong>demand for a resource exceeds its supply</strong> at zero price. Even rich countries
          face scarcity because wants are unlimited.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: '25px'
        }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(0,255,136,0.1), rgba(0,255,136,0.05))',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid rgba(0,255,136,0.3)'
          }}>
            <h4 style={{ color: '#00ff88', margin: '0 0 12px 0', fontSize: '1.1rem' }}>
              ✓ What Scarcity IS
            </h4>
            <ul style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.9rem',
              lineHeight: '1.8',
              paddingLeft: '20px',
              margin: 0
            }}>
              <li>A universal phenomenon affecting all economies</li>
              <li>The gap between unlimited wants and limited resources</li>
              <li>The reason why we must make choices</li>
              <li>Relative to wants (even air can be scarce if wants exceed supply)</li>
              <li>Permanent - it cannot be eliminated completely</li>
            </ul>
          </div>

          <div style={{
            background: 'linear-gradient(145deg, rgba(255,107,107,0.1), rgba(255,107,107,0.05))',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid rgba(255,107,107,0.3)'
          }}>
            <h4 style={{ color: '#ff6b6b', margin: '0 0 12px 0', fontSize: '1.1rem' }}>
              ✗ What Scarcity is NOT
            </h4>
            <ul style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.9rem',
              lineHeight: '1.8',
              paddingLeft: '20px',
              margin: 0
            }}>
              <li>Not the same as poverty (rich countries also face scarcity)</li>
              <li>Not a temporary shortage (shortage can be fixed, scarcity persists)</li>
              <li>Not about having "nothing" (it's about not having "enough")</li>
              <li>Not solvable by just producing more (wants grow faster)</li>
              <li>Not limited to physical goods (time, attention are also scarce)</li>
            </ul>
          </div>
        </div>

        <div style={{
          background: 'rgba(255,215,0,0.1)',
          padding: '20px',
          borderRadius: '12px',
          border: '2px solid rgba(255,215,0,0.3)',
          marginTop: '25px'
        }}>
          <h4 style={{ color: '#ffd700', margin: '0 0 12px 0', fontSize: '1.1rem' }}>
            🌍 Global Perspective
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.8', margin: 0 }}>
            Even the richest countries like the USA, Japan, or Germany face scarcity. They have limited land, limited labor,
            and limited time. They cannot satisfy all wants of all citizens simultaneously. For instance, the US government
            must choose between spending on military, healthcare, education, or infrastructure. This choice exists because
            resources (the budget) are scarce relative to all the things citizens want their government to provide.
          </p>
        </div>
      </div>

      <div className="highlight-card purple" style={{ marginTop: '25px' }}>
        <div className="highlight-icon">
          <FaExchangeAlt />
        </div>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '15px' }}>The Inevitable Need for Choice</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', marginBottom: '15px' }}>
            Because resources are scarce and have alternative uses, <strong>choice becomes inevitable</strong>. Every economic
            agent - individuals, firms, and governments - must decide:
          </p>
          <ul style={{ fontSize: '0.95rem', lineHeight: '1.9', paddingLeft: '25px' }}>
            <li><strong>What to produce?</strong> - Should we produce guns or butter? Hospitals or schools?</li>
            <li><strong>How to produce?</strong> - Should we use labor-intensive or capital-intensive methods?</li>
            <li><strong>For whom to produce?</strong> - Should goods go to rich or poor? Young or old?</li>
            <li><strong>When to produce?</strong> - Should we produce now or save resources for future?</li>
          </ul>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.8', marginTop: '15px', marginBottom: 0 }}>
            These choices form the core of economics. <strong>Economics is essentially the study of how societies make
            choices to allocate scarce resources among competing uses to satisfy unlimited wants.</strong>
          </p>
        </div>
      </div>

      <div className="highlight-card cyan" style={{ marginTop: '25px' }}>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '15px' }}>💡 Key Takeaway</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', margin: 0 }}>
            The economic problem of <strong style={{ color: '#00d4ff' }}>scarcity and choice</strong> is universal and permanent.
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
