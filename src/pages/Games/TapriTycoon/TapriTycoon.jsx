// TapriTycoon.jsx — Root component
// Teaches: Fixed Cost vs Variable Cost
import { useReducer, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gameReducer, INITIAL_STATE } from './Engine/gameLogic';
import DayPanel from './Components/DayPanel';
import CostChart from './Components/CostChart';
import './TapriTycoon.css';

// ── Game Over: Star Rating + Reviewer Cards ─────────────────────────────────────
function starRating(totalProfit, cash) {
  if (cash < 0) return { stars: '⭐', tagline: 'This tapri closed. RIP. Sharma Uncle is devastated.' };
  if (totalProfit < 0) return { stars: '⭐⭐', tagline: 'Bhai went bankrupt. Chai was fine though.' };
  if (totalProfit < 500) return { stars: '⭐⭐⭐', tagline: 'Average. The stall is a little chaotic but okay.' };
  if (totalProfit < 2000) return { stars: '⭐⭐⭐⭐', tagline: 'Good chai, a bit expensive. Will come again.' };
  return { stars: '⭐⭐⭐⭐⭐', tagline: 'Best chai in the city! Bhai sahab is a business genius.' };
}

function reviewerCards(totalProfit) {
  const good = totalProfit >= 500;
  const great = totalProfit >= 2000;
  return [
    {
      emoji: '🧓', name: 'Sharma Uncle',
      stars: great ? '⭐⭐⭐⭐⭐' : good ? '⭐⭐⭐' : '⭐⭐',
      text: great
        ? '"Beta, teri chai se mujhe khushbu aati hai sapne mein. Aaj bhi free thi."'
        : good
        ? '"Theek thaak hai. Thodi aur meethi hoti toh perfect tha."'
        : '"Chai bekaar thi. Aur unhone free bhi nahi di. Shame shame."',
    },
    {
      emoji: '👩‍🎓', name: 'Dimple Didi',
      stars: great ? '⭐⭐⭐⭐⭐' : good ? '⭐⭐⭐⭐' : '⭐⭐',
      text: great
        ? '"My reel got 50K likes because of this tapri. Worth every rupee."'
        : good
        ? '"The aesthetic was okay but the cup was plain. No reel potential."'
        : '"Girl, even my sad reels don\'t look this depressing."',
    },
    {
      emoji: '👦', name: 'Chhotu',
      stars: '⭐⭐⭐⭐⭐',
      text: great
        ? '"Bhaiya ne aaj mujhe bonus diya! ₹10! Best day of my life!"'
        : '"Bhaiya thoda gusse mein rehte hain… lekin chai mast banate hain."',
    },
    {
      emoji: '👮', name: 'Inspector Sahib',
      stars: great ? '⭐⭐⭐' : '⭐⭐⭐⭐',
      text: great
        ? '"This stall is suspiciously profitable. I\'ll be back for another inspection."'
        : '"Very cooperative establishment. Processing fee was very reasonable."',
    },
    {
      emoji: '🏪', name: 'Raju Bhai',
      stars: good ? '⭐⭐⭐' : '⭐⭐⭐⭐',
      text: good
        ? '"Competitor tha, lekin respect hai. Good business sense."'
        : '"I tried to give him tips and he didn\'t listen. Bhai you had potential."',
    },
  ];
}

function GameOverOverlay({ state, dispatch }) {
  const { totalProfit, cash, history } = state;
  const { stars, tagline } = starRating(totalProfit, cash);
  const reviews = reviewerCards(totalProfit);

  const totalRevenue = history.reduce((s, h) => s + h.revenue, 0);
  const totalTC = history.reduce((s, h) => s + h.tc, 0);

  return (
    <motion.div
      className="tt-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="tt-gameover-panel"
        initial={{ scale: 0.85, y: 40 }}
        animate={{ scale: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } }}
      >
        <div className="tt-gameover-title">🫖 Tapri Reviews Are In!</div>
        <div className="tt-gameover-stars">{stars}</div>
        <div className="tt-gameover-tagline">{tagline}</div>

        <div className="tt-gameover-stats">
          <div className="tt-gameover-stat">
            <div className="tt-gameover-stat-label">Total Profit</div>
            <div className={`tt-gameover-stat-value ${totalProfit >= 0 ? 'positive' : 'negative'}`}>
              {totalProfit >= 0 ? '+' : ''}₹{Math.round(totalProfit)}
            </div>
          </div>
          <div className="tt-gameover-stat">
            <div className="tt-gameover-stat-label">Final Cash</div>
            <div className={`tt-gameover-stat-value ${cash >= 0 ? 'positive' : 'negative'}`}>
              ₹{Math.round(cash)}
            </div>
          </div>
          <div className="tt-gameover-stat">
            <div className="tt-gameover-stat-label">Total Revenue</div>
            <div className="tt-gameover-stat-value positive">₹{totalRevenue}</div>
          </div>
          <div className="tt-gameover-stat">
            <div className="tt-gameover-stat-label">Total Cost</div>
            <div className="tt-gameover-stat-value negative">₹{totalTC}</div>
          </div>
        </div>

        {/* Key lesson */}
        <div style={{
          background: '#EFF6FF', border: '2px solid #3B82F6', borderRadius: '12px',
          padding: '14px 16px', marginBottom: '20px'
        }}>
          <div style={{ fontFamily: 'var(--tt-font-hand)', fontWeight: 700, color: '#1D4ED8', marginBottom: '6px', fontSize: '1.1rem' }}>
            📚 What you learned:
          </div>
          <div style={{ fontFamily: 'var(--tt-font-hand)', fontSize: '0.95rem', color: '#1E40AF', lineHeight: 1.5 }}>
            <strong>Fixed Cost (FC)</strong> = ₹250/day, no matter how much you sell.
            <br />
            <strong>Variable Cost (VC)</strong> = ₹8 × cups prepared — rises with output.
            <br />
            <strong>Total Cost (TC)</strong> = FC + VC. Profit only comes when Revenue &gt; TC!
          </div>
        </div>

        <div className="tt-reviews-title">Customer Reviews 📝</div>
        <div className="tt-reviews-list">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="tt-review-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
            >
              <div className="tt-review-reviewer">
                <span className="tt-review-emoji">{r.emoji}</span>
                <span className="tt-review-name">{r.name}</span>
                <span className="tt-review-stars">{r.stars}</span>
              </div>
              <div className="tt-review-text">{r.text}</div>
            </motion.div>
          ))}
        </div>

        <button
          className="tt-play-again-btn"
          onClick={() => dispatch({ type: 'INIT_GAME' })}
        >
          ☕ Run the Tapri Again!
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Rules Modal ─────────────────────────────────────────────────────────────────
function RulesModal({ onClose }) {
  return (
    <motion.div className="tt-rules-overlay" onClick={onClose}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="tt-rules-panel" onClick={e => e.stopPropagation()}
        initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
        <div className="tt-rules-title">☕ How to Play</div>
        <ul className="tt-rules-list">
          <li>🗓️ Run your tapri for <strong>7 days</strong></li>
          <li>📦 Each morning: choose cups to prepare + price per cup</li>
          <li>🔵 <strong>Fixed Cost (FC) = ₹250/day</strong> — paid regardless of sales</li>
          <li>🟠 <strong>Variable Cost (VC) = ₹8 × cups prepared</strong> — more cups = more cost</li>
          <li>🃏 Situation cards happen each day — your choices change costs & customers</li>
          <li>💰 Profit = Revenue − Total Cost. Keep cash positive!</li>
          <li>📈 Watch the cost graph build — FC stays flat, VC rises with output</li>
        </ul>
        <button className="tt-rules-close" onClick={onClose}>Got it, let's sell chai!</button>
      </motion.div>
    </motion.div>
  );
}

// ── Root Component ──────────────────────────────────────────────────────────────
export default function TapriTycoon() {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: 'INIT_GAME' });
  }, []);

  const { phase, currentDay, maxDays, cash, history, showRules } = state;

  return (
    <div className="tt-game-container">
      {/* Graph paper background */}
      <div className="tt-bg-grid" />

      {/* Header */}
      <header className="tt-header">
        <div className="tt-header-title">
          <span>☕</span>
          Tapri Tycoon
        </div>

        <div className="tt-day-progress">
          {Array.from({ length: maxDays }, (_, i) => {
            const day = i + 1;
            let cls = '';
            if (day < currentDay || phase === 'GAME_OVER') cls = 'done';
            else if (day === currentDay) cls = 'current';
            return <div key={day} className={`tt-day-dot ${cls}`} title={`Day ${day}`} />;
          })}
        </div>

        <div className="tt-header-stats">
          <div className={`tt-stat-chip ${cash < 0 ? 'negative' : ''}`}>
            💰 ₹{Math.round(cash)}
          </div>
          <div className="tt-stat-chip">
            📅 Day {phase === 'GAME_OVER' ? maxDays : currentDay}/{maxDays}
          </div>
          <button className="tt-rules-btn" onClick={() => dispatch({ type: 'TOGGLE_RULES' })}>
            📖 Rules
          </button>
        </div>
      </header>

      {/* Main layout */}
      <div className="tt-main-layout">
        {/* Left: Day Panel */}
        <div>
          {phase !== 'GAME_OVER' && (
            <DayPanel state={state} dispatch={dispatch} />
          )}
          {phase === 'GAME_OVER' && (
            <div className="tt-day-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontFamily: 'var(--tt-font-hand)', fontSize: '1.2rem' }}>
              Game over! See results →
            </div>
          )}
        </div>

        {/* Right: Cost Chart */}
        <div className="tt-chart-panel">
          <div className="tt-chart-title">📊 Cost vs Revenue Chart</div>
          <div className="tt-chart-legend">
            <div className="tt-legend-item">
              <div className="tt-legend-dot" style={{ background: '#3B82F6' }} />
              <span>Fixed Cost</span>
            </div>
            <div className="tt-legend-item">
              <div className="tt-legend-dot" style={{ background: '#F97316' }} />
              <span>Variable Cost</span>
            </div>
            <div className="tt-legend-item">
              <div className="tt-legend-dot" style={{ background: '#EF4444' }} />
              <span>Total Cost</span>
            </div>
            <div className="tt-legend-item">
              <div className="tt-legend-dot" style={{ background: '#22C55E' }} />
              <span>Revenue</span>
            </div>
          </div>
          <div className="tt-chart-svg-wrapper">
            <CostChart history={history} currentDay={currentDay} />
          </div>
        </div>
      </div>

      {/* Overlays */}
      <AnimatePresence>
        {phase === 'GAME_OVER' && (
          <GameOverOverlay key="gameover" state={state} dispatch={dispatch} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRules && (
          <RulesModal key="rules" onClose={() => dispatch({ type: 'TOGGLE_RULES' })} />
        )}
      </AnimatePresence>
    </div>
  );
}
