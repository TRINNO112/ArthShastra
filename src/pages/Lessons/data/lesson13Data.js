
export const lesson13Data = {
    title: "Market Equilibrium",
    subtitle: "The Perfect Balance of Forces",

    // Scenarios for the Simulation Engine
    scenarios: {
        'initial': {
            id: 'initial',
            title: "Market Equilibrium (E)",
            description: "The point where Demand equals Supply. No tendency to change.",
            dShift: 0, sShift: 0,
            label: "P* = Equilibrium Price, Q* = Equilibrium Quantity"
        },
        // --- SIMPLE SHIFTS ---
        'demand-increase': {
            id: 'demand-increase',
            title: "Increase in Demand",
            description: "Demand Curve shifts Right. Price Rises, Quantity Rises.",
            dShift: 20, sShift: 0,
            label: "Excess Demand at old Price → P rises to E'"
        },
        'demand-decrease': {
            id: 'demand-decrease',
            title: "Decrease in Demand",
            description: "Demand Curve shifts Left. Price Falls, Quantity Falls.",
            dShift: -20, sShift: 0,
            label: "Excess Supply at old Price → P falls to E'"
        },
        'supply-increase': {
            id: 'supply-increase',
            title: "Increase in Supply",
            description: "Supply Curve shifts Right. Price Falls, Quantity Rises.",
            dShift: 0, sShift: 20,
            label: "Excess Supply at old Price → P falls to E'"
        },
        'supply-decrease': {
            id: 'supply-decrease',
            title: "Decrease in Supply",
            description: "Supply Curve shifts Left. Price Rises, Quantity Falls.",
            dShift: 0, sShift: -20,
            label: "Excess Demand at old Price → P rises to E'"
        },

        // --- SIMULTANEOUS SHIFTS (SAME DIRECTION) ---
        'both-increase-equal': {
            id: 'both-increase-equal',
            title: "D & S Both Increase (Equal)",
            description: "Both shift Right equally. Q Rises, Price Unchanged.",
            dShift: 20, sShift: 20,
            label: "E' is directly to the right of E"
        },
        'both-increase-d-more': {
            id: 'both-increase-d-more',
            title: "D & S Both Inc (D > S)",
            description: "Demand shifts more than Supply. Q Rises, Price Rises.",
            dShift: 30, sShift: 10,
            label: "Big D-shift pulls Price up"
        },
        'both-increase-s-more': {
            id: 'both-increase-s-more',
            title: "D & S Both Inc (S > D)",
            description: "Supply shifts more than Demand. Q Rises, Price Falls.",
            dShift: 10, sShift: 30,
            label: "Big S-shift pushes Price down"
        },
        'both-decrease-equal': {
            id: 'both-decrease-equal',
            title: "D & S Both Decrease (Equal)",
            description: "Both shift Left equally. Q Falls, Price Unchanged.",
            dShift: -20, sShift: -20,
            label: "E' is directly to the left of E"
        },
        'both-decrease-d-more': {
            id: 'both-decrease-d-more',
            title: "D & S Both Dec (D > S)",
            description: "Demand falls more than Supply. Q Falls, Price Falls.",
            dShift: -30, sShift: -10,
            label: "Weak Demand crashes Price"
        },

        // --- SIMULTANEOUS SHIFTS (OPPOSITE DIRECTION) ---
        'opposite-d-inc-s-dec': {
            id: 'opposite-d-inc-s-dec',
            title: "D Increases, S Decreases",
            description: "Price Rises Sharply. Q change depends on magnitude.",
            dShift: 20, sShift: -20,
            label: "Double pressure on Price to Rise"
        },
        'opposite-d-dec-s-inc': {
            id: 'opposite-d-dec-s-inc',
            title: "D Decreases, S Increases",
            description: "Price Falls Sharply. Q change depends on magnitude.",
            dShift: -20, sShift: 20,
            label: "Double pressure on Price to Fall"
        },
    },

    // Quiz Data
    mcqQuestions: [
        {
            id: 1,
            question: "If Demand increases while Supply remains constant, what happens to Equilibrium Price and Quantity?",
            options: [
                "Price Rises, Quantity Falls",
                "Price Falls, Quantity Rises",
                "Price Rises, Quantity Rises",
                "Price Falls, Quantity Falls"
            ],
            correctAnswer: 2,
            explanation: "An increase in demand creates excess demand at the old price, pushing price up. Higher price induces more supply, increasing quantity."
        },
        {
            id: 2,
            question: "What happens if both Demand and Supply increase by the exact same amount?",
            options: [
                "Price Rises, Quantity Rises",
                "Price remains Constant, Quantity Rises",
                "Price Falls, Quantity Rises",
                "Price Constant, Quantity Constant"
            ],
            correctAnswer: 1,
            explanation: "The upward pressure on price from D-increase is exactly cancelled by the downward pressure from S-increase. Quantity definitely rises."
        },
        {
            id: 3,
            question: "In a situation of Excess Supply, market price tends to...",
            options: [
                "Rise",
                "Fall",
                "Remain Constant",
                "Become Zero"
            ],
            correctAnswer: 1,
            explanation: "Excess supply means sellers have unsold stock. They will lower prices to compete, driving the market down to equilibrium."
        },
        {
            id: 4,
            question: "Technological progress reduces production costs. How does this affect equilibrium?",
            options: [
                "Supply shifts right, Price falls",
                "Supply shifts left, Price rises",
                "Demand shifts right, Price rises",
                "No change"
            ],
            correctAnswer: 0,
            explanation: "Better technology increases supply (shifts right). This creates excess supply at the old price, causing price to fall and quantity to rise."
        },
        {
            id: 5,
            question: "If Demand decreases MORE than Supply decreases, what is the net effect on Price?",
            options: [
                "Price Rises",
                "Price Falls",
                "Price stays same",
                "Cannot be determined"
            ],
            correctAnswer: 1,
            explanation: "A large decrease in demand pulls price down strongly. A small decrease in supply pushes price up slightly. The net effect is a Fall in Price."
        },
        {
            id: 6,
            question: "A 'Price Ceiling' set below the equilibrium price causes:",
            options: [
                "Excess Supply (Surplus)",
                "Excess Demand (Shortage)",
                "Market Equilibrium",
                "Shift in Supply Curve"
            ],
            correctAnswer: 1,
            explanation: "A Price Ceiling prevents price from rising to equilibrium. At the low ceiling price, QD > QS, creating a shortage."
        },
        {
            id: 7,
            question: "Goods X and Y are Substitutes. If Price of X rises, what happens to Market for Y?",
            options: [
                "Demand for Y increases",
                "Demand for Y decreases",
                "Supply of Y increases",
                "Supply of Y decreases"
            ],
            correctAnswer: 0,
            explanation: "Since X is more expensive, consumers switch to the substitute Y. Demand for Y shifts right."
        },
        {
            id: 8,
            question: "Goods A and B are Complements. If Price of A falls, what happens to Market for B?",
            options: [
                "Demand for B increases",
                "Demand for B decreases",
                "Supply of B increases",
                "Supply of B decreases"
            ],
            correctAnswer: 0,
            explanation: "Cheaper A means more people buy A. Since B is used with A, demand for B also rises."
        },
        {
            id: 9,
            question: "If consumer income rises (Normal Good), equilibrium price ___ and quantity ___.",
            options: [
                "Falls, Falls",
                "Rises, Falls",
                "Falls, Rises",
                "Rises, Rises"
            ],
            correctAnswer: 3,
            explanation: "Higher income increases Demand (Shift Right). This pushes both Equilibrium Price and Quantity up."
        },
        {
            id: 10,
            question: "Simultaneous Decrease: If Demand drops MASSIVELY and Supply drops slightly, Price will:",
            options: [
                "Rise",
                "Fall",
                "Stay Constant",
                "Fluctuate wildly"
            ],
            correctAnswer: 1,
            explanation: "The massive drop in demand (lowering price) outweighs the slight drop in supply (raising price). Net effect is lower price."
        },
        {
            id: 11,
            question: "Equilibrium price is also called:",
            options: [
                "Maximum price",
                "Minimum price",
                "Market-clearing price",
                "Ceiling price"
            ],
            correctAnswer: 2,
            explanation: "At equilibrium, quantity demanded equals quantity supplied — the market 'clears' with no excess demand or supply."
        },
        {
            id: 12,
            question: "A 'Price Floor' (Minimum Support Price) set above equilibrium causes:",
            options: [
                "Shortage",
                "Surplus (Excess Supply)",
                "No effect",
                "Equilibrium"
            ],
            correctAnswer: 1,
            explanation: "At the high floor price, QS > QD, creating a surplus. The government often buys the excess (like in MSP for crops)."
        },
        {
            id: 13,
            question: "If supply increases while demand remains constant:",
            options: [
                "Price rises, Quantity falls",
                "Price falls, Quantity rises",
                "Price rises, Quantity rises",
                "Price falls, Quantity falls"
            ],
            correctAnswer: 1,
            explanation: "Increased supply creates excess supply at old price. Price falls and quantity rises to reach new equilibrium."
        },
        {
            id: 14,
            question: "Excess Demand at a given price means:",
            options: [
                "QD < QS",
                "QD > QS",
                "QD = QS",
                "Both QD and QS are zero"
            ],
            correctAnswer: 1,
            explanation: "Excess demand means quantity demanded exceeds quantity supplied at the prevailing price."
        },
        {
            id: 15,
            question: "In the Walrasian approach, equilibrium is reached through adjustment of:",
            options: [
                "Quantity",
                "Price",
                "Technology",
                "Government policy"
            ],
            correctAnswer: 1,
            explanation: "Walras focused on price adjustment: excess demand pushes price up, excess supply pushes price down, until equilibrium."
        },
        {
            id: 16,
            question: "In the Marshallian approach, equilibrium is reached through adjustment of:",
            options: [
                "Price",
                "Quantity (output)",
                "Income",
                "Tastes"
            ],
            correctAnswer: 1,
            explanation: "Marshall focused on quantity adjustment: if demand price > supply price, firms increase output, and vice versa."
        },
        {
            id: 17,
            question: "If both Demand and Supply decrease, the effect on equilibrium quantity is:",
            options: [
                "Quantity definitely rises",
                "Quantity definitely falls",
                "Quantity stays the same",
                "Cannot be determined"
            ],
            correctAnswer: 1,
            explanation: "Both decreases reduce quantity. Whether price rises or falls depends on which shift is larger."
        },
        {
            id: 18,
            question: "Government imposes a tax on a commodity. This will:",
            options: [
                "Shift demand to the left",
                "Shift supply to the left, raising equilibrium price",
                "Shift supply to the right",
                "Have no effect on equilibrium"
            ],
            correctAnswer: 1,
            explanation: "Tax increases cost of production, shifting supply leftward. This raises equilibrium price and reduces quantity."
        },
        {
            id: 19,
            question: "If D increases and S decreases simultaneously, what happens to price?",
            options: [
                "Definitely falls",
                "Definitely rises",
                "Remains the same",
                "Cannot be determined"
            ],
            correctAnswer: 1,
            explanation: "Both shifts push price upward: increased demand raises price, decreased supply also raises price. Price definitely rises."
        },
        {
            id: 20,
            question: "At equilibrium, which of the following is true?",
            options: [
                "There is excess demand",
                "There is excess supply",
                "Quantity demanded equals quantity supplied",
                "Price is at its maximum"
            ],
            correctAnswer: 2,
            explanation: "Equilibrium is defined as the point where QD = QS. There is no tendency for the market to change."
        }
    ],

    // True/False Questions
    tfQuestions: [
        {
            id: 1,
            question: "A shift in Demand causes a movement along the Supply curve.",
            correctAnswer: true,
            explanation: "True. When Demand shifts, we move along the stationary Supply curve to a new equilibrium."
        },
        {
            id: 2,
            question: "Equilibrium is permanent and never changes once reached.",
            correctAnswer: false,
            explanation: "False. Equilibrium is stable only until a new shock (shift in D or S) disturbs it."
        },
        {
            id: 3,
            question: "An increase in the price of inputs shifts the Supply curve to the Right.",
            correctAnswer: false,
            explanation: "False. Higher costs reduce profitability, shifting Supply to the Left (Decrease)."
        },
        {
            id: 4,
            question: "If D and S both increase, Equilibrium Quantity must increase.",
            correctAnswer: true,
            explanation: "True. Both shifts push Q upward. Even if Price effect is ambiguous, Q definitely rises."
        },
        {
            id: 5,
            question: "A Price Floor is only binding if set ABOVE the equilibrium price.",
            correctAnswer: true,
            explanation: "True. A floor below equilibrium is irrelevant because the market price is already higher than the floor."
        },
        {
            id: 6,
            question: "Excess supply at a given price will push the price downward.",
            correctAnswer: true,
            explanation: "True. Sellers compete to sell unsold stock by lowering prices until equilibrium is restored."
        },
        {
            id: 7,
            question: "A Price Ceiling above the equilibrium price has no practical effect.",
            correctAnswer: true,
            explanation: "True. If the ceiling is above equilibrium, the market naturally settles below it, making the ceiling non-binding."
        },
        {
            id: 8,
            question: "If Demand increases and Supply decreases, the effect on quantity is always determinable.",
            correctAnswer: false,
            explanation: "False. The effect on quantity depends on the relative magnitudes of the two shifts and is therefore indeterminate."
        },
        {
            id: 9,
            question: "Market equilibrium ensures that there is no wastage of resources.",
            correctAnswer: true,
            explanation: "True. At equilibrium, exactly the quantity demanded is produced and sold — no surplus or shortage exists."
        },
        {
            id: 10,
            question: "A subsidy to producers shifts the supply curve to the right and lowers equilibrium price.",
            correctAnswer: true,
            explanation: "True. Subsidy reduces cost, increases supply (rightward shift), creating excess supply that pushes price down."
        }
    ]
};
