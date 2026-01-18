// Convert the ConsumerEquilibrium SVG data to Recharts format
const consumerEquilibriumData = [
  // MUx data (blue curve) - 6 data points
  { units: 0, MUx: 12, MUy: 2 },    // Approximate point
  { units: 1, MUx: 10, MUy: 2 },    // (210, 150) in SVG
  { units: 2, MUx: 8, MUy: 4 },     // (320, 210) in SVG
  { units: 3, MUx: 6, MUy: 6 },     // (430, 270) - EQUILIBRIUM POINT
  { units: 4, MUx: 4, MUy: 8 },     // (540, 330) in SVG
  { units: 5, MUx: 2, MUy: 10 },    // (650, 390) in SVG
];

// From the SVG coordinates and labels:
// At equilibrium (units=3), both MUx/Px and MUy/Py = 6
// Consumer buys 3 units of X and 2 units of Y

console.log("Consumer Equilibrium Data:", consumerEquilibriumData);
