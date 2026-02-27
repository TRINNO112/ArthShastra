# Tapri Tycoon — Fixed vs Variable Cost

> *Run a chai stall for 7 days. Learn the difference between Fixed Cost, Variable Cost, and Total Cost — the hard way.*

---

## Table of Contents

1. [Overview](#overview)
2. [Financial Concepts Taught](#financial-concepts-taught)
3. [Gameplay Flow](#gameplay-flow)
4. [The Three Phases of Each Day](#the-three-phases-of-each-day)
   - [Morning Setup](#morning-setup)
   - [Situation Cards](#situation-cards)
   - [Day Summary](#day-summary)
5. [Cost & Revenue Formulas](#cost--revenue-formulas)
6. [Demand Elasticity](#demand-elasticity)
7. [Situation Cards — All 15 Events](#situation-cards--all-15-events)
8. [Star Rating System](#star-rating-system)
9. [The Live Cost Chart](#the-live-cost-chart)
10. [Game Over Screen](#game-over-screen)
11. [Components & File Structure](#components--file-structure)
12. [State Shape](#state-shape)
13. [Reducer Actions](#reducer-actions)
14. [Design System](#design-system)
15. [Strategy Tips](#strategy-tips)

---

## Overview

**Tapri Tycoon** is a 7-day business simulation game set inside a chai tapri (street tea stall) in a bustling Indian neighbourhood. The player makes daily production and pricing decisions, then navigates surprise situations — a nosy landlord, a mischievous Chhotu, an Instagram-obsessed Dimple Didi, and a corrupt Inspector Sahib — before seeing the financial outcome of the day.

The core learning objective is to build an **intuitive understanding** of three foundational cost concepts:

| Concept | Plain English |
|---|---|
| **Fixed Cost (FC)** | Cost you pay every single day — whether you sell 1 cup or 1000 cups |
| **Variable Cost (VC)** | Cost that changes with how much you produce |
| **Total Cost (TC)** | The full bill: FC + VC |

By the end of 7 days, the player has personally experienced these concepts through profit and loss, not just memorised definitions.

**Starting Cash:** Rs. 2,000
**Game Duration:** 7 days
**Winning condition:** Maximise total profit and end with positive cash.

---

## Financial Concepts Taught

### Fixed Cost (FC)
- **Value:** Rs. 250 per day (Rs. 200 rent + Rs. 50 equipment depreciation)
- **Key insight:** This is deducted every day regardless of how many cups are sold, even if the tapri is empty.
- **Colour code throughout the game:** Blue
- **Visualised as:** A perfectly flat horizontal line on the cost chart — always at Rs. 250.

### Variable Cost (VC)
- **Value:** Rs. 8 per cup *prepared* (not per cup *sold*)
- **Key insight:** VC depends on production decisions, not sales. If you prepare 150 cups and sell only 60, you still paid VC for all 150.
- **Colour code:** Orange
- **Formula:** `VC = Rs. 8 × cups prepared`

### Total Cost (TC)
- **Value:** FC + VC for the day
- **Colour code:** Red
- **Formula:** `TC = 250 + (8 × cups prepared)`

### Revenue
- **Formula:** `Revenue = price per cup × cups sold × revenue modifier`
- **Key insight:** Revenue is only earned on cups *sold*. Unsold cups are a waste — you paid VC for them with zero return.
- **Colour code:** Green

### Profit
- **Formula:** `Profit = Revenue − TC`
- Positive profit → cash goes up (green)
- Negative profit → cash goes down (red)

### Break-Even Intuition
The lesson box at game end explicitly states:
> "FC is always Rs. 250 — even on a rainy day with zero customers. VC only rises when you prepare more cups. To break even, Revenue must cover your Total Cost."

---

## Gameplay Flow

```
Start Game (Cash: Rs. 2000)
        |
        v
  ┌─────────────────────────────────┐
  │         Day N — MORNING         │  Pick cups + price → preview TC
  └─────────────┬───────────────────┘
                |
                v
  ┌─────────────────────────────────┐
  │       Day N — SITUATION         │  2–3 cards, each with 2 choices
  └─────────────┬───────────────────┘
                |
                v
  ┌─────────────────────────────────┐
  │        Day N — SUMMARY          │  Animated bars, profit/loss reveal
  └─────────────┬───────────────────┘
                |
         Day < 7? ──── Yes ──→ Next Day
                |
               No
                v
  ┌─────────────────────────────────┐
  │          GAME OVER              │  Stars, stats, reviewer cards
  └─────────────────────────────────┘
```

---

## The Three Phases of Each Day

### Morning Setup

This is the **decision phase**. The player sees the day number and must make two choices:

**1. How many cups to prepare?**

| Option | Cups | Variable Cost |
|--------|------|---------------|
| Small batch | 50 cups | Rs. 400 |
| Medium batch | 100 cups | Rs. 800 |
| Large batch | 150 cups | Rs. 1,200 |

**2. At what price to sell each cup?**

| Price | Base Demand | Notes |
|-------|------------|-------|
| Rs. 12 | 140 customers | High volume, low margin |
| Rs. 15 | 100 customers | Balanced |
| Rs. 20 | 55 customers | Low volume, high margin |

As the player selects cups and price, the UI **updates live** to show:
- Variable Cost preview (orange)
- Total Cost preview (red, dashed border): `TC = FC + VC`

The "Open the Tapri!" button is disabled until both choices are made.

---

### Situation Cards

After opening, **2–3 surprise events** happen. Each card features a neighbourhood character with a scenario that demands a decision. The player picks one of two choices, sees the mechanical effect revealed (cash delta, customer delta, FC/VC/revenue modifier change), then moves to the next card.

**Effects stack** — all card outcomes modify the day's running totals before the final calculation at end-of-day.

Possible effect types:
- `cashDelta` — immediate cash gain or loss
- `fcModifier` — adds to (or subtracts from) today's FC
- `vcModifier` — adds to (or subtracts from) today's VC
- `customersDelta` — increases or decreases customers arriving today
- `revenueModifier` — multiplies revenue (e.g., +0.3 = ×1.3 revenue; floor is ×0.1)
- `priceOverride` — forces the player's chosen price to a new value

---

### Day Summary

Once all situation cards are resolved, the day is **finalised**. The summary screen shows:

- **Animated bar chart** — horizontal bars for FC, VC, TC, and Revenue animate in sequence, making the proportional relationships visually obvious.
- **Cups Sold vs. Cups Prepared** — highlights waste if you over-prepared.
- **Customers today** — modified by all card effects.
- **Profit box** — `Revenue − TC`, coloured green or red.
- **Flavor text chips** — memorable quotes from the day's situations.
- A button to advance to the next day (or "See Final Results!" on Day 7).

---

## Cost & Revenue Formulas

All final calculations fire at the `FINALIZE_DAY` action:

```
cups_sold      = min(cups_planned, customers_today)

fc_today       = 250 + fc_modifier          (from situation cards)
vc_today       = (8 × cups_planned) + vc_modifier
tc_today       = fc_today + vc_today

revenue_today  = price_chosen × cups_sold × revenue_modifier

profit_today   = revenue_today − tc_today
cash          += profit_today
total_profit  += profit_today
```

> **Note:** `revenue_modifier` starts at 1.0 each day and is adjusted additively by cards (e.g., a card giving +0.3 makes it 1.3). The floor is hard-coded at 0.1 so revenue can never drop to zero purely from card effects.

---

## Demand Elasticity

The game teaches **price-demand trade-offs** through BASE_DEMAND:

| Price | Customers | Revenue per 100 cups sold |
|-------|-----------|--------------------------|
| Rs. 12 | 140 | Rs. 1,200 |
| Rs. 15 | 100 | Rs. 1,500 |
| Rs. 20 | 55 | Rs. 1,100 |

At Rs. 15, you get the highest revenue per unit sold and enough volume to cover TC. Rs. 12 maximises customers but squeezes margin. Rs. 20 has the best per-cup margin but risks customers not covering your production batch.

The optimal strategy depends on your batch size and the situation card outcomes for the day.

---

## Situation Cards — All 15 Events

### Day 1

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 1A | Sharma Uncle | Wants free chai "for goodwill" | Accept: −Rs. 15 cash, +5 customers | Decline: −8 customers |
| 1B | Chhotu | Accidentally spills 8 cups | Clean up: +Rs. 64 VC | Blame him: −3 customers |

---

### Day 2

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 2A | Dimple Didi | Wants an Instagrammable chai setup for her reel | Agree: −Rs. 30 cash, +10 customers, ×1.3 revenue | Refuse: −5 customers |
| 2B | Landlord | Surprise rent hike demand | Pay: +Rs. 200 FC | Refuse, move to street: ×0.5 revenue |

---

### Day 3

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 3A | Raju Bhai | Opens rival tapri selling chai at Rs. 10 | Price war: force price to Rs. 12, +20 customers | Hold price: −15 customers |
| 3B | School Group | 25 surprise kids arrive demanding chai | Serve them: +Rs. 100 VC, +25 customers | Turn away: no change |
| 3C | Inspector Sahib | Demands Rs. 100 "inspection fee" | Pay bribe: −Rs. 100 cash | Refuse: −10 customers (he lingers) |

---

### Day 4

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 4A | Neighbour Aunty | Occupies the only table all day for free | Let her stay: +8 customers (she brings friends) | Ask her to leave: −5 customers |
| 4B | Pintu | Spreads a WhatsApp rumour that your chai cures cold | Embrace the rumour: −Rs. 50 cash (for signboard), +15 customers | Deny it publicly: −25 customers |

---

### Day 5

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 5A | Chhotu | Drops the entire sugar bag on the floor | Buy new bag: −Rs. 80 cash | No sugar today: −20 customers |
| 5B | Dimple Didi | Returns with a brand sponsorship offer | Accept: +Rs. 300 cash, −Rs. 150 VC | Decline: no change |
| 5C | Neighbourhood | Diwali eve — festival crowd gathers nearby | Set up extra stall: +Rs. 80 VC, +20 customers, ×1.2 revenue | Serve normally: +15 customers |

---

### Day 6

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 6A | Sharma Uncle | Demands a permanent 50% discount "or he tells everyone you're bad" | Agree: −0.05 revenue modifier, +5 customers | Refuse: −12 customers |
| 6B | Weather | Surprise rain floods the stall | Fix the leak: −Rs. 150 cash, +25 customers (shelter seekers) | Move inside: −10 customers |
| 6C | Inspector Sahib | Returns with a constable, demands Rs. 200 | Pay: −Rs. 200 cash | Refuse (call anti-corruption hotline): ×0.6 revenue (disruption) |

---

### Day 7

| Card | Character | Scenario | Choice A | Choice B |
|------|-----------|----------|----------|----------|
| 7A | Raju Bhai | Offers to sell you his loyal customer list | Buy list: −Rs. 200 cash, +30 customers | Decline: +10 customers (organic word-of-mouth) |
| 7B | Chhotu | Announces a "Grand Finale Day" on WhatsApp without asking | Let it ride: +Rs. 400 VC (extra supplies needed), +40 customers | Cancel it: no change |

---

## Star Rating System

At the end of Day 7, the player is rated based on **total profit accumulated** across all 7 days:

| Stars | Condition | Tagline |
|-------|-----------|---------|
| ⭐ | Cash < Rs. 0 | The tapri had to close down |
| ⭐⭐ | Total Profit < Rs. 0 | You barely survived |
| ⭐⭐⭐ | Total Profit Rs. 0 – Rs. 499 | A chai stall with character |
| ⭐⭐⭐⭐ | Total Profit Rs. 500 – Rs. 1,999 | A proper tapri entrepreneur |
| ⭐⭐⭐⭐⭐ | Total Profit ≥ Rs. 2,000 | The Chai Tycoon of the neighbourhood |

---

## The Live Cost Chart

The **CostChart** component renders a live SVG line graph (420×280 viewBox) that updates at the end of every day.

### Four lines plotted:

| Line | Colour | Description |
|------|--------|-------------|
| Fixed Cost | Blue dashed | Ideally flat at Rs. 250; rises if cards add to FC |
| Variable Cost | Orange solid | Grows with cups prepared |
| Total Cost | Red solid | FC + VC |
| Revenue | Green solid | Price × cups sold × modifier |

### Features:
- **Graph-paper background** (SVG pattern) for a ledger/notebook aesthetic
- **Y-axis** — Rs. values with `k` notation above Rs. 1,000; 5 evenly spaced gridlines
- **X-axis** — D1 through D7 labels
- **Animated line draw** — CSS `stroke-dashoffset` animation from 2000 to 0 on each render
- **Data point dots** on each line at every completed day
- **FC annotation** — label "Rs. 250 — always flat!" rendered next to the FC line
- **Empty state** — friendly message shown before Day 1 is complete

---

## Game Over Screen

After Day 7 is finalised, a full-screen overlay appears with:

### Stats Grid
| Stat | Source |
|------|--------|
| Total Profit | Sum of all `profitToday` values |
| Final Cash | Starting Rs. 2,000 ± all daily profits |
| Total Revenue | Sum of all `revenueToday` values |
| Total Cost | Sum of all `tcToday` values |

### What You Learned Box
A blue callout card summarising the key lesson:
> "Fixed Cost (FC) is always Rs. 250 — even on a rainy day with zero customers. Variable Cost (VC) only rises when you prepare more cups. To break even, Revenue must cover your Total Cost."

### Reviewer Cards
Five neighbourhood characters each give a star rating and a written review. Their review text changes based on whether your total profit was below Rs. 500, between Rs. 500 and Rs. 2,000, or above Rs. 2,000.

| Character | Emoji | Personality |
|-----------|-------|-------------|
| Sharma Uncle | 👴 | The freeloader who always has opinions |
| Dimple Didi | 💁‍♀️ | The Instagram influencer |
| Chhotu | 🧒 | The accident-prone helper |
| Inspector Sahib | 👮 | The corrupt-but-official authority |
| Raju Bhai | 🤵 | The rival tapri owner |

### Play Again
"Run the Tapri Again!" dispatches `INIT_GAME`, resetting all state to the initial values.

---

## Components & File Structure

```
TapriTycoon/
├── TapriTycoon.jsx          Root component, layout, Game Over overlay, Rules modal
├── TapriTycoon.css          All styles — warm chai theme (cream, saffron, chai-brown)
├── Engine/
│   └── gameLogic.js         Constants, all 15 situation cards, INITIAL_STATE, useReducer logic
├── Components/
│   ├── DayPanel.jsx         MorningPhase, SituationPhase, SummaryPhase UI
│   └── CostChart.jsx        Pure SVG animated line chart
└── README.md                This file
```

### TapriTycoon.jsx
- Renders the two-column layout (DayPanel left, CostChart right)
- Houses the `<GameOverOverlay>` and `<RulesModal>` components
- Passes `state` and `dispatch` down to children via props
- Reads `state.phase === 'GAME_OVER'` to show the overlay

### Engine/gameLogic.js
- `FIXED_COST_PER_DAY = 250`
- `VARIABLE_COST_PER_CUP = 8`
- `BASE_DEMAND = { 12: 140, 15: 100, 20: 55 }`
- `SITUATION_CARDS` — array of all 15 card definitions
- `INITIAL_STATE` — full starting state object
- `gameReducer(state, action)` — handles all state transitions

### Components/DayPanel.jsx
- Internally switches between `MorningPhase`, `SituationPhase`, and `SummaryPhase` based on `state.phase`
- **MorningPhase** — cup/price selection, live TC preview
- **SituationPhase** — card rendering, choice locking, effect reveal, continue button
- **SummaryPhase** — animated bars, stats, profit/loss display, flavor texts

### Components/CostChart.jsx
- Stateless/pure component — receives `history[]` from state
- Computes Y-axis domain from all values in history
- Renders SVG polylines with CSS draw animation
- Shows annotation label on the FC line

---

## State Shape

```js
{
  phase: 'MORNING' | 'SITUATION' | 'SUMMARY' | 'GAME_OVER',
  currentDay: 1–7,
  maxDays: 7,
  cash: 2000,           // current cash balance
  showRules: false,
  totalProfit: 0,        // cumulative profit across all days
  bonusScore: 0,         // reserved for future quiz feature
  history: [],           // array of completed day snapshots

  cardQueue: [],         // card IDs for today's situations
  currentCardIndex: 0,
  lastChoiceEffect: null | { flavorText, effect },

  today: {
    cupsPlanned: null,
    priceChosen: null,
    fcToday: 250,
    vcToday: 0,
    tcToday: 0,
    revenueToday: 0,
    profitToday: 0,
    cupsSold: 0,
    customersToday: 0,
    fcModifier: 0,        // accumulated card additions to FC
    vcModifier: 0,        // accumulated card additions/subtractions to VC
    revenueModifier: 1.0, // multiplier (floor: 0.1)
    flavorTexts: []       // outcome quotes shown on Summary screen
  }
}
```

Each entry in `history[]` has the shape:
```js
{
  day: Number,
  fc: Number,
  vc: Number,
  tc: Number,
  revenue: Number,
  profit: Number
}
```

---

## Reducer Actions

| Action Type | Triggered By | What It Does |
|-------------|-------------|--------------|
| `INIT_GAME` | "Play Again" button | Resets entire state to `INITIAL_STATE` |
| `TOGGLE_RULES` | Rules button in header | Toggles `showRules` boolean |
| `SET_CUPS` | Cup selection buttons | Sets `today.cupsPlanned`, recomputes VC/TC preview |
| `SET_PRICE` | Price selection buttons | Sets `today.priceChosen`, recomputes revenue/demand preview |
| `OPEN_TAPRI` | "Open the Tapri!" button | Transitions phase to `SITUATION`, builds `cardQueue` for the day |
| `RESOLVE_CARD` | Choice button click | Applies card effects to `today` modifiers, sets `lastChoiceEffect` |
| `NEXT_CARD` | "Continue →" button | Advances `currentCardIndex`; transitions to `SUMMARY` after last card |
| `FINALIZE_DAY` | "Day N →" button | Runs all final formulas, pushes to `history`, updates cash/totalProfit |
| `ANSWER_QUIZ` | *(future feature)* | Awards `bonusScore += 50` for correct answers |

---

## Design System

The game uses a **warm chai-house aesthetic** throughout:

### Colour Palette
| Token | Hex | Usage |
|-------|-----|-------|
| Cream | `#FFF8EE` | Page background |
| Saffron | `#F4A012` | Accent, current day dot, buttons |
| Chai Brown | `#6B3A2A` | Text, borders |
| Fixed Cost Blue | `#3B82F6` | FC values and bars |
| Variable Cost Orange | `#F97316` | VC values and bars |
| Total Cost Red | `#EF4444` | TC values and bars |
| Revenue Green | `#22C55E` | Revenue values and bars |

### Typography
| Font | Usage |
|------|-------|
| **Caveat** (handwritten) | UI labels, narrative text, situation cards — gives a notebook/diary feel |
| **JetBrains Mono** (monospace) | All numbers, Rs. values, formulas — reinforces the ledger/accounts metaphor |

### Layout
- Two-column grid: DayPanel (left) + CostChart (right)
- Collapses to single column on viewports below 900px
- Graph-paper pattern (SVG) used on both the page background and chart interior

---

## Strategy Tips

1. **Never prepare more cups than your expected demand.** Unsold cups are pure waste — you paid Rs. 8 each with zero return.

2. **Rs. 15 is usually the sweet spot.** It gives 100 base customers and the highest revenue per cup among mid-range options.

3. **Watch your cash, not just your profit.** Some situation card effects hit cash directly (outside the profit formula), so you can be profitable on paper but cash-strapped in reality.

4. **On Day 2, if the landlord appears, think carefully.** Paying +Rs. 200 FC is painful but a ×0.5 revenue modifier for the day can be catastrophic if you chose a large batch.

5. **Day 7 is the big swing.** Chhotu's "Grand Finale Day" (+40 customers, +Rs. 400 VC) is worth taking if you're going for the 5-star rating — but only if your cash can absorb the VC spike.

6. **Dimple Didi's sponsorship on Day 5 is almost always correct** — Rs. 300 cash + VC reduction is a free boost with no downside.

7. **The FC line on the chart should always be flat.** If it isn't, a landlord card hit you. That's the visual reminder that some costs are outside your control.

---

*Built with React + useReducer. Part of the ArthShastra financial literacy game series.*
