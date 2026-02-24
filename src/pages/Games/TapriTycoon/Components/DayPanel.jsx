// DayPanel.jsx — Handles Morning / Situation / Summary phases
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITUATION_CARDS, FIXED_COST_PER_DAY, VARIABLE_COST_PER_CUP } from '../Engine/gameLogic';

const CUP_OPTIONS = [50, 100, 150];
const PRICE_OPTIONS = [12, 15, 20];

// ── Framer variants ────────────────────────────────────────────────────────────
const fadeSlide = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit:    { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

// ── Morning Phase ──────────────────────────────────────────────────────────────
function MorningPhase({ state, dispatch }) {
  const { today, currentDay, cash } = state;
  const cups = today.cupsPlanned;
  const price = today.priceChosen;
  const vc = cups ? VARIABLE_COST_PER_CUP * cups : 0;
  const tc = FIXED_COST_PER_DAY + vc;
  const canOpen = cups !== null && price !== null;

  return (
    <motion.div key="morning" {...fadeSlide}>
      <div className="tt-morning-header">
        <span className="tt-day-badge">DAY {currentDay} / 7</span>
        <span className="tt-morning-title">☕ Morning Setup</span>
      </div>

      {/* Fixed Cost banner */}
      <div className="tt-fc-banner">
        <span className="tt-fc-label">FIXED COST (FC)</span>
        <span className="tt-fc-value">₹{FIXED_COST_PER_DAY}</span>
        <span className="tt-fc-note">
          ₹200 rent + ₹50 depreciation — <strong>paid no matter how many cups you sell!</strong>
        </span>
      </div>

      {/* Cups to prepare */}
      <div className="tt-section-label">How many cups to prepare?</div>
      <div className="tt-button-row">
        {CUP_OPTIONS.map(c => (
          <button
            key={c}
            className={`tt-option-btn ${cups === c ? 'selected' : ''}`}
            onClick={() => dispatch({ type: 'SET_CUPS', payload: c })}
          >
            {c} cups
          </button>
        ))}
      </div>

      {/* Variable Cost preview */}
      <div className="tt-vc-preview">
        <div>
          <div className="tt-vc-label">VARIABLE COST (VC)</div>
          <div className="tt-vc-formula">₹8 × {cups ?? '?'} cups</div>
        </div>
        <div className="tt-vc-value">₹{cups ? vc : '—'}</div>
      </div>

      {/* Price per cup */}
      <div className="tt-section-label">Price per cup?</div>
      <div className="tt-button-row">
        {PRICE_OPTIONS.map(p => (
          <button
            key={p}
            className={`tt-option-btn ${price === p ? 'selected' : ''}`}
            onClick={() => dispatch({ type: 'SET_PRICE', payload: p })}
          >
            ₹{p}
          </button>
        ))}
      </div>

      {/* TC preview */}
      <div className="tt-tc-preview">
        <span className="tt-tc-label">TOTAL COST (TC) = FC + VC</span>
        <span className="tt-tc-value">₹{canOpen ? tc : '—'}</span>
      </div>

      <button
        className="tt-open-btn"
        disabled={!canOpen}
        onClick={() => dispatch({ type: 'CONFIRM_MORNING' })}
      >
        🫖 Open the Tapri!
      </button>
    </motion.div>
  );
}

// ── Situation Phase ────────────────────────────────────────────────────────────
function SituationPhase({ state, dispatch }) {
  const { cardQueue, currentCardIndex, lastChoiceEffect } = state;
  const [chosenIndex, setChosenIndex] = useState(null);

  const cardId = cardQueue[currentCardIndex];
  const card = SITUATION_CARDS[cardId];
  if (!card) return null;

  const total = cardQueue.length;
  const current = currentCardIndex + 1;

  function handleChoice(idx) {
    if (chosenIndex !== null) return;
    setChosenIndex(idx);
    dispatch({ type: 'RESOLVE_CARD', payload: { cardId, choiceIndex: idx } });
  }

  function handleContinue() {
    setChosenIndex(null);
    dispatch({ type: 'ADVANCE_CARD' });
  }

  return (
    <motion.div key={`situation-${cardId}`} {...fadeSlide} className="tt-card-wrapper">
      <div className="tt-card-counter">Situation {current} of {total}</div>

      <div className="tt-situation-card">
        <div className="tt-card-character">
          <span className="tt-card-emoji">{card.emoji}</span>
          <span className="tt-card-character-name">{card.character}</span>
        </div>
        <div className="tt-card-title">{card.title}</div>
        <div className="tt-card-body">{card.body}</div>
      </div>

      <div className="tt-choices">
        {card.choices.map((choice, idx) => (
          <button
            key={idx}
            className={`tt-choice-btn ${chosenIndex === idx ? 'chosen' : ''}`}
            onClick={() => handleChoice(idx)}
            disabled={chosenIndex !== null}
          >
            {choice.label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lastChoiceEffect && (
          <motion.div
            className="tt-effect-reveal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="tt-effect-text">💬 {lastChoiceEffect.flavorText}</div>
            <div className="tt-effect-delta">{effectSummary(lastChoiceEffect.effect)}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {lastChoiceEffect && (
        <motion.button
          className="tt-continue-btn"
          onClick={handleContinue}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3 } }}
        >
          Continue →
        </motion.button>
      )}
    </motion.div>
  );
}

function effectSummary(eff) {
  if (!eff) return '';
  const parts = [];
  if (eff.cashDelta)        parts.push(`Cash: ₹${eff.cashDelta > 0 ? '+' : ''}${eff.cashDelta}`);
  if (eff.customersDelta)   parts.push(`Customers: ${eff.customersDelta > 0 ? '+' : ''}${eff.customersDelta}`);
  if (eff.fcModifier)       parts.push(`FC: +₹${eff.fcModifier} (one-time)`);
  if (eff.vcModifier)       parts.push(`VC: ${eff.vcModifier > 0 ? '+' : ''}₹${eff.vcModifier}`);
  if (eff.revenueModifier)  parts.push(`Revenue ×: ${eff.revenueModifier > 0 ? '+' : ''}${eff.revenueModifier.toFixed(2)}`);
  if (eff.priceOverride)    parts.push(`Price overridden to ₹${eff.priceOverride}`);
  return parts.join('  |  ') || 'No change';
}

// ── Summary Phase ──────────────────────────────────────────────────────────────
function SummaryPhase({ state, dispatch }) {
  const { today, currentDay, history } = state;
  // Get last history entry (just pushed by FINALIZE_DAY... but we call FINALIZE_DAY on "Next Day")
  // So during SUMMARY phase we compute preview from today's state
  const cups = today.cupsPlanned;
  const price = today.priceChosen;
  const customers = today.customersToday;
  const cupsSold = Math.min(cups, customers);
  const revenue = Math.round(price * cupsSold * (today.revenueModifier || 1.0));
  const fc = FIXED_COST_PER_DAY + (today.fcModifier || 0);
  const vc = (VARIABLE_COST_PER_CUP * cups) + (today.vcModifier || 0);
  const tc = fc + vc;
  const profit = revenue - tc;
  const maxBar = Math.max(fc, vc, tc, revenue, 1);

  const bars = [
    { label: 'Fixed Cost',    value: fc,      color: '#3B82F6', cls: 'fc' },
    { label: 'Variable Cost', value: vc,      color: '#F97316', cls: 'vc' },
    { label: 'Total Cost',    value: tc,      color: '#EF4444', cls: 'tc' },
    { label: 'Revenue',       value: revenue, color: '#22C55E', cls: 'rev' },
  ];

  const profitClass = profit > 0 ? 'positive' : profit < 0 ? 'negative' : 'neutral';

  return (
    <motion.div key="summary" {...fadeSlide}>
      <div className="tt-summary-header">
        <span className="tt-day-badge">DAY {currentDay} SUMMARY</span>
        <span className="tt-summary-title">📋 End of Day</span>
      </div>

      {/* Cost bars */}
      <div className="tt-cost-bars">
        {bars.map((bar, i) => (
          <motion.div
            className="tt-bar-row"
            key={bar.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0, transition: { delay: i * 0.15 } }}
          >
            <span className="tt-bar-label" style={{ color: bar.color }}>
              <span className={`tt-concept-pill ${bar.cls}`}>{bar.label}</span>
            </span>
            <div className="tt-bar-track">
              <motion.div
                className="tt-bar-fill"
                style={{ background: bar.color }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.round((bar.value / maxBar) * 100)}%`, transition: { delay: i * 0.15, duration: 0.5 } }}
              />
            </div>
            <span className="tt-bar-value" style={{ color: bar.color }}>₹{bar.value}</span>
          </motion.div>
        ))}
      </div>

      {/* Summary numbers */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, background: '#F9FAFB', borderRadius: '10px', padding: '10px 14px', border: '1px solid #E5E7EB', minWidth: '120px' }}>
          <div style={{ fontFamily: 'var(--tt-font-hand)', fontSize: '0.85rem', color: '#9CA3AF' }}>Cups Sold</div>
          <div style={{ fontFamily: 'var(--tt-font-mono)', fontWeight: 700, fontSize: '1.3rem', color: '#374151' }}>
            {cupsSold} / {cups}
          </div>
        </div>
        <div style={{ flex: 1, background: '#F9FAFB', borderRadius: '10px', padding: '10px 14px', border: '1px solid #E5E7EB', minWidth: '120px' }}>
          <div style={{ fontFamily: 'var(--tt-font-hand)', fontSize: '0.85rem', color: '#9CA3AF' }}>Customers</div>
          <div style={{ fontFamily: 'var(--tt-font-mono)', fontWeight: 700, fontSize: '1.3rem', color: '#374151' }}>
            {customers}
          </div>
        </div>
      </div>

      {/* Profit box */}
      <div className={`tt-profit-box ${profitClass}`}>
        <div className="tt-profit-label">Today's Profit = Revenue − TC</div>
        <div className={`tt-profit-value ${profitClass}`}>
          {profit >= 0 ? '+' : ''}₹{profit}
        </div>
      </div>

      {/* Flavor texts */}
      {today.flavorTexts && today.flavorTexts.length > 0 && (
        <div className="tt-flavor-chips">
          {today.flavorTexts.map((txt, i) => (
            <div key={i} className="tt-flavor-chip">"{txt}"</div>
          ))}
        </div>
      )}

      <button
        className="tt-next-btn"
        onClick={() => dispatch({ type: 'FINALIZE_DAY' })}
      >
        {state.currentDay >= state.maxDays ? '🏁 See Final Results!' : `Day ${currentDay + 1} →`}
      </button>
    </motion.div>
  );
}

// ── Root DayPanel ──────────────────────────────────────────────────────────────
export default function DayPanel({ state, dispatch }) {
  return (
    <div className="tt-day-panel">
      <AnimatePresence mode="wait">
        {state.phase === 'MORNING' && (
          <MorningPhase key="morning" state={state} dispatch={dispatch} />
        )}
        {state.phase === 'SITUATION' && (
          <SituationPhase key={`sit-${state.currentCardIndex}`} state={state} dispatch={dispatch} />
        )}
        {state.phase === 'SUMMARY' && (
          <SummaryPhase key="summary" state={state} dispatch={dispatch} />
        )}
      </AnimatePresence>
    </div>
  );
}
