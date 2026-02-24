// ─────────────────────────────────────────────
//  Tapri Tycoon — Game Logic
//  Teaches: Fixed Cost vs Variable Cost
// ─────────────────────────────────────────────

export const FIXED_COST_PER_DAY = 250;     // ₹200 rent + ₹50 depreciation
export const VARIABLE_COST_PER_CUP = 8;
export const BASE_DEMAND = { 12: 140, 15: 100, 20: 55 };

// ── Situation Cards ────────────────────────────────────────────────────────────
// Each card: { id, day, character, emoji, title, body, choices: [{label, effect}] }
// effect keys: fcModifier, vcModifier, revenueModifier, cashDelta, customersDelta, priceOverride

export const SITUATION_CARDS = {
  '1A': {
    id: '1A', day: 1,
    character: 'Sharma Uncle', emoji: '🧓',
    title: 'Sharma Uncle wants free chai!',
    body: '"Beta, ek cutting dena… bina paise ke. Tu toh meri aankhon ka tara hai."',
    choices: [
      {
        label: '🫖 Give free chai (₹15 cash lost)',
        flavorText: 'Sharma Uncle beams and tells the whole mohalla. Footfall up!',
        effect: { cashDelta: -15, customersDelta: 5 }
      },
      {
        label: '🙅 Politely refuse',
        flavorText: 'Sharma Uncle sulks. He tells the neighbourhood aunties your chai is "thanda".',
        effect: { customersDelta: -8 }
      }
    ]
  },
  '1B': {
    id: '1B', day: 1,
    character: 'Chhotu', emoji: '👦',
    title: 'Chhotu spills 8 cups!',
    body: 'Chhotu, your helper, trips and spills a full tray of 8 ready cups. Oops.',
    choices: [
      {
        label: '😤 Remake them (extra VC +₹64)',
        flavorText: 'Customers get their chai. Crisis averted. Chhotu gets an earful.',
        effect: { vcModifier: 64 }
      },
      {
        label: '🤷 Tell those customers to come back later',
        flavorText: 'Some customers leave. Fewer cups sold today.',
        effect: { customersDelta: -3 }
      }
    ]
  },
  '2A': {
    id: '2A', day: 2,
    character: 'Dimple Didi', emoji: '👩‍🎓',
    title: 'Dimple wants aesthetic chai for her reel!',
    body: '"Bhaiya, can you make it look fancy? Whipped cream, rose petal — I\'ll tag you in my reel!"',
    choices: [
      {
        label: '✨ Make it fancy (₹30 cash + 10 customers + 1.3× revenue)',
        flavorText: 'The reel goes viral! New customers flood in and everyone pays more.',
        effect: { cashDelta: -30, customersDelta: 10, revenueModifier: 0.3 }
      },
      {
        label: '😐 Serve normal chai',
        flavorText: 'Dimple posts a disappointed selfie. Some potential customers skip you.',
        effect: { customersDelta: -5 }
      }
    ]
  },
  '2B': {
    id: '2B', day: 2,
    character: 'Landlord', emoji: '🏠',
    title: 'Landlord springs a surprise rent hike!',
    body: '"Yaar, rates badh gaye hain. Aaj se ₹200 zyada. Theek hai na?" (It is not theek.)',
    choices: [
      {
        label: '😩 Pay the extra rent (+₹200 FC today)',
        flavorText: 'You pay up. At least the stall stays open.',
        effect: { fcModifier: 200 }
      },
      {
        label: '🤝 Negotiate — park stall on the street instead',
        flavorText: 'You dodge the rent but the location is bad. Revenue takes a hit.',
        effect: { revenueModifier: -0.5 }
      }
    ]
  },
  '3A': {
    id: '3A', day: 3,
    character: 'Raju Bhai', emoji: '🏪',
    title: 'Raju Bhai opens a rival tapri!',
    body: '"Competition is good for consumers, bhai." He\'s selling at ₹10. Your customers are eyeing him.',
    choices: [
      {
        label: '💪 Match price (forced to ₹12, +20 customers)',
        flavorText: 'You stay competitive. Lots of cups sold at a slim margin.',
        effect: { customersDelta: 20, priceOverride: 12 }
      },
      {
        label: '🎖️ Stay premium, accept fewer customers',
        flavorText: 'Loyalists stay. But footfall dips sharply.',
        effect: { customersDelta: -15 }
      }
    ]
  },
  '3B': {
    id: '3B', day: 3,
    character: 'School Group', emoji: '🎒',
    title: '25 kids want chai on a school trip!',
    body: 'A teacher marches in with 25 thirsty kids. You don\'t have enough ingredients!',
    choices: [
      {
        label: '🛒 Rush to buy extra ingredients (+₹100 VC, +25 customers)',
        flavorText: 'You scramble but manage it. The kids loved it!',
        effect: { vcModifier: 100, customersDelta: 25 }
      },
      {
        label: '😞 Turn them away (no stock)',
        flavorText: 'The teacher reviews you 1-star on Google Maps.',
        effect: { customersDelta: 0 }
      }
    ]
  },
  '3C': {
    id: '3C', day: 3,
    character: 'Inspector Sahib', emoji: '👮',
    title: 'Inspector Sahib demands a "fee"!',
    body: '"Bhai, license check. ₹100 lagenge… informal processing fee." He winks.',
    choices: [
      {
        label: '💸 Pay the bribe (₹100 cash gone)',
        flavorText: 'He leaves. You continue business as usual.',
        effect: { cashDelta: -100 }
      },
      {
        label: '😤 Refuse — you know your rights',
        flavorText: 'He "checks your stall" for an hour. Customers get annoyed and leave.',
        effect: { customersDelta: -10 }
      }
    ]
  },
  '4A': {
    id: '4A', day: 4,
    character: 'Neighbor Aunty', emoji: '👵',
    title: 'Aunty hogs the only table all day!',
    body: '"Baith ke chai pee rahi hoon… thoda aur baith leti hoon." She\'s been there 4 hours.',
    choices: [
      {
        label: '😊 Let her be — she\'s a regular',
        flavorText: 'She stays all day but brings her kitty party friends. +8 customers.',
        effect: { customersDelta: 8 }
      },
      {
        label: '🙏 Politely request she move',
        flavorText: 'She moves but gives you the cold shoulder. Others notice the awkwardness.',
        effect: { customersDelta: -5 }
      }
    ]
  },
  '4B': {
    id: '4B', day: 4,
    character: 'Pintu', emoji: '📱',
    title: 'Pintu spreads a WhatsApp rumour!',
    body: '"Bhai, kisi ne WhatsApp kiya hai that your chai uses recycled water. Fake news!"',
    choices: [
      {
        label: '📢 Pay for a counter-promo (₹50 cash, but +15 customers)',
        flavorText: 'You hand out flyers. Most people come to check — and buy.',
        effect: { cashDelta: -50, customersDelta: 15 }
      },
      {
        label: '🙈 Ignore it',
        flavorText: 'The rumour spreads. A LOT of regulars skip today.',
        effect: { customersDelta: -25 }
      }
    ]
  },
  '5A': {
    id: '5A', day: 5,
    character: 'Chhotu', emoji: '👦',
    title: 'Chhotu drops the entire sugar bag!',
    body: 'The 5 kg sugar bag hits the floor. It\'s all dirt and ants now. You need sugar.',
    choices: [
      {
        label: '🛍️ Buy new bag immediately (₹80 cash)',
        flavorText: 'Operations resume. Chhotu is apologetic but alive.',
        effect: { cashDelta: -80 }
      },
      {
        label: '🍵 Sell unsweetened chai for the day',
        flavorText: 'Customers are horrified. Most leave.',
        effect: { customersDelta: -20 }
      }
    ]
  },
  '5B': {
    id: '5B', day: 5,
    character: 'Dimple Didi', emoji: '👩‍🎓',
    title: 'Dimple Didi has a brand deal for you!',
    body: '"A tea brand wants to sponsor your stall! ₹300 cash + ₹150 of free ingredients."',
    choices: [
      {
        label: '🤝 Accept the deal (+₹300 cash, +₹150 VC offset)',
        flavorText: 'Free cash and ingredients! The brand logo clashes with the vibe but whatever.',
        effect: { cashDelta: 300, vcModifier: -150 }
      },
      {
        label: '✊ Decline, keep it authentic',
        flavorText: 'No change today. Your brand stays pure.',
        effect: {}
      }
    ]
  },
  '5C': {
    id: '5C', day: 5,
    character: 'Neighbourhood', emoji: '🎉',
    title: 'Diwali eve festival nearby!',
    body: 'The lane is decorated, music is playing — and everyone wants chai!',
    choices: [
      {
        label: '🎊 Fully stock up (+₹80 VC, +20 customers, +1.2× revenue)',
        flavorText: 'Festival footfall is insane. Every cup sells at a premium!',
        effect: { vcModifier: 80, customersDelta: 20, revenueModifier: 0.2 }
      },
      {
        label: '🕯️ Just run the regular stall (+15 customers)',
        flavorText: 'You still do well — extra footfall without extra prep.',
        effect: { customersDelta: 15 }
      }
    ]
  },
  '6A': {
    id: '6A', day: 6,
    character: 'Sharma Uncle', emoji: '🧓',
    title: 'Sharma Uncle demands a permanent discount!',
    body: '"Beta, mujhe toh hamesha 50% off milna chahiye. Main itna regular hoon!"',
    choices: [
      {
        label: '😅 Agree (revenue −5% per cup, +5 customers)',
        flavorText: 'Sharma Uncle is thrilled. He brings two friends. Net: slightly okay.',
        effect: { revenueModifier: -0.05, customersDelta: 5 }
      },
      {
        label: '🙅 Refuse politely',
        flavorText: 'Uncle storms off and bad-mouths you to 12 neighbours.',
        effect: { customersDelta: -12 }
      }
    ]
  },
  '6B': {
    id: '6B', day: 6,
    character: 'Weather', emoji: '🌧️',
    title: 'Surprise rain hits the tapri!',
    body: 'The tarpaulin is leaking! You need a quick fix or customers will leave.',
    choices: [
      {
        label: '🔧 Buy a tarp fix (₹150 cash lost, +25 chai-loving customers)',
        flavorText: 'Rain = chai weather. Fully covered stall gets a RUSH.',
        effect: { cashDelta: -150, customersDelta: 25 }
      },
      {
        label: '☔ Leave it — brave customers only',
        flavorText: 'Most leave. The brave ten stay. Revenue dips.',
        effect: { customersDelta: -10 }
      }
    ]
  },
  '6C': {
    id: '6C', day: 6,
    character: 'Inspector Sahib', emoji: '👮',
    title: 'Inspector Sahib is back — with a constable!',
    body: '"Last time you refused. Aaj ₹200. Bhai, ek baar aur mouka de raha hoon."',
    choices: [
      {
        label: '💸 Pay ₹200 and get on with it',
        flavorText: 'Painful, but the stall stays operational.',
        effect: { cashDelta: -200 }
      },
      {
        label: '📞 Call the anti-corruption helpline',
        flavorText: 'He leaves but the drama kills your afternoon vibe.',
        effect: { revenueModifier: -0.4 }
      }
    ]
  },
  '7A': {
    id: '7A', day: 7,
    character: 'Raju Bhai', emoji: '🏪',
    title: 'Raju Bhai offers to sell his customer list!',
    body: '"Bhai, I\'m closing my tapri. ₹200 for my customer contacts — 30 regulars."',
    choices: [
      {
        label: '🤝 Buy the list (₹200 cash, +30 customers on last day!)',
        flavorText: 'The last day ends with a BANG. Worth every rupee.',
        effect: { cashDelta: -200, customersDelta: 30 }
      },
      {
        label: '🤷 Skip it',
        flavorText: 'Modest last day. Regular customers only. +10 anyway.',
        effect: { customersDelta: 10 }
      }
    ]
  },
  '7B': {
    id: '7B', day: 7,
    character: 'Chhotu', emoji: '👦',
    title: 'Chhotu invited the whole mohalla!',
    body: '"Bhaiya maine WhatsApp par daal diya — GRAND FINALE DAY! Free lucky draw!" You did NOT approve this.',
    choices: [
      {
        label: '🎉 Embrace it (extra ingredients +₹400 VC, +40 customers)',
        flavorText: 'The mohalla shows up. Chaos but incredible sales!',
        effect: { vcModifier: 400, customersDelta: 40 }
      },
      {
        label: '😤 Cancel it — run normal operations',
        flavorText: 'You cancel. Chhotu pouts. A normal but dignified final day.',
        effect: {}
      }
    ]
  }
};

// Cards assigned per day
export const DAY_CARDS = {
  1: ['1A', '1B'],
  2: ['2A', '2B'],
  3: ['3A', '3B', '3C'],
  4: ['4A', '4B'],
  5: ['5A', '5B', '5C'],
  6: ['6A', '6B', '6C'],
  7: ['7A', '7B'],
};

// ── Initial State ──────────────────────────────────────────────────────────────
export const INITIAL_STATE = {
  phase: 'MORNING',   // 'MORNING' | 'SITUATION' | 'SUMMARY' | 'GAME_OVER'
  currentDay: 1,
  maxDays: 7,
  cash: 2000,
  showRules: false,
  today: {
    cupsPlanned: null,
    priceChosen: null,
    fcToday: FIXED_COST_PER_DAY,
    vcToday: 0,
    tcToday: 0,
    revenueToday: 0,
    profitToday: 0,
    cupsSold: 0,
    customersToday: 0,
    fcModifier: 0,
    vcModifier: 0,
    revenueModifier: 1.0,
    flavorTexts: [],
  },
  cardQueue: [],
  currentCardIndex: 0,
  lastChoiceEffect: null,
  history: [],
  totalProfit: 0,
  bonusScore: 0,
};

function buildToday() {
  return { ...INITIAL_STATE.today, fcModifier: 0, vcModifier: 0, revenueModifier: 1.0, flavorTexts: [] };
}

function previewTC(cupsPlanned, vcModifier) {
  const vc = (VARIABLE_COST_PER_CUP * (cupsPlanned || 0)) + (vcModifier || 0);
  const fc = FIXED_COST_PER_DAY;
  return { vcToday: vc, tcToday: fc + vc };
}

function previewCustomers(priceChosen) {
  return BASE_DEMAND[priceChosen] ?? 0;
}

// ── Reducer ────────────────────────────────────────────────────────────────────
export function gameReducer(state, action) {
  switch (action.type) {

    case 'INIT_GAME':
      return { ...INITIAL_STATE };

    case 'SET_CUPS': {
      const cups = action.payload;
      const { vcToday, tcToday } = previewTC(cups, state.today.vcModifier);
      return {
        ...state,
        today: { ...state.today, cupsPlanned: cups, vcToday, tcToday }
      };
    }

    case 'SET_PRICE': {
      const price = action.payload;
      const customers = previewCustomers(price);
      return {
        ...state,
        today: { ...state.today, priceChosen: price, customersToday: customers }
      };
    }

    case 'CONFIRM_MORNING': {
      if (!state.today.cupsPlanned || !state.today.priceChosen) return state;
      const cardQueue = DAY_CARDS[state.currentDay] || [];
      return {
        ...state,
        phase: 'SITUATION',
        cardQueue,
        currentCardIndex: 0,
        lastChoiceEffect: null,
      };
    }

    case 'RESOLVE_CARD': {
      const { cardId, choiceIndex } = action.payload;
      const card = SITUATION_CARDS[cardId];
      if (!card) return state;
      const choice = card.choices[choiceIndex];
      const eff = choice.effect;

      let today = { ...state.today };
      let cash = state.cash;

      if (eff.cashDelta) cash += eff.cashDelta;
      if (eff.fcModifier) today.fcModifier = (today.fcModifier || 0) + eff.fcModifier;
      if (eff.vcModifier) today.vcModifier = (today.vcModifier || 0) + eff.vcModifier;
      if (eff.customersDelta) today.customersToday = Math.max(0, today.customersToday + eff.customersDelta);
      if (eff.revenueModifier) today.revenueModifier = Math.max(0.1, (today.revenueModifier || 1.0) + eff.revenueModifier);
      if (eff.priceOverride) today.priceChosen = eff.priceOverride;

      // Recompute VC/TC preview after modifiers change
      const { vcToday, tcToday } = previewTC(today.cupsPlanned, today.vcModifier);
      today.vcToday = vcToday;
      today.tcToday = tcToday;

      today.flavorTexts = [...(today.flavorTexts || []), choice.flavorText];

      return {
        ...state,
        cash,
        today,
        lastChoiceEffect: { flavorText: choice.flavorText, effect: eff },
      };
    }

    case 'ADVANCE_CARD': {
      const nextIndex = state.currentCardIndex + 1;
      if (nextIndex >= state.cardQueue.length) {
        return { ...state, phase: 'SUMMARY', lastChoiceEffect: null };
      }
      return { ...state, currentCardIndex: nextIndex, lastChoiceEffect: null };
    }

    case 'FINALIZE_DAY': {
      const { today, currentDay, maxDays } = state;
      const cupsSold = Math.min(today.cupsPlanned, today.customersToday);
      const revenue = today.priceChosen * cupsSold * (today.revenueModifier || 1.0);
      const fc = FIXED_COST_PER_DAY + (today.fcModifier || 0);
      const vc = (VARIABLE_COST_PER_CUP * today.cupsPlanned) + (today.vcModifier || 0);
      const tc = fc + vc;
      const profit = revenue - tc;

      const newHistory = [
        ...state.history,
        { day: currentDay, fc, vc, tc, revenue: Math.round(revenue), profit: Math.round(profit) }
      ];
      const newCash = state.cash + profit;
      const newTotalProfit = state.totalProfit + profit;
      const nextDay = currentDay + 1;
      const nextPhase = nextDay > maxDays ? 'GAME_OVER' : 'MORNING';

      return {
        ...state,
        phase: nextPhase,
        currentDay: nextDay > maxDays ? currentDay : nextDay,
        cash: newCash,
        totalProfit: newTotalProfit,
        history: newHistory,
        today: buildToday(),
        lastChoiceEffect: null,
      };
    }

    case 'ANSWER_QUIZ': {
      const { fc, vc } = action.payload;
      let bonus = 0;
      if (fc === true) bonus += 50;
      if (vc === true) bonus += 50;
      return { ...state, bonusScore: state.bonusScore + bonus };
    }

    case 'TOGGLE_RULES':
      return { ...state, showRules: !state.showRules };

    default:
      return state;
  }
}
