# Lesson 5: Theory of Demand and Elasticity

## Overview

This chapter covers the fundamental principles of consumer demand, explaining how consumers react to changes in price and other factors. It also introduces the concept of Price Elasticity of Demand, which measures the magnitude of consumer responsiveness. This lesson forms the basis for understanding market mechanisms.

**Chapter Reference**: Class 11 Microeconomics (NCERT / VK Ohri Textbook)
**Duration**: ~90 minutes
**Quiz Questions**: 25 MCQs + 10 True/False

---

## Learning Objectives

After completing this lesson, students will be able to:

1.  **Define** Demand and distinguish it from Desire and Want.
2.  **Explain** the determinants of Individual Demand and Market Demand.
3.  **State and Explain** the Law of Demand, including its assumptions, reasons, and exceptions.
4.  **Distinguish** between 'Change in Quantity Demanded' (Movement) and 'Change in Demand' (Shift).
5.  **Understand** the concept of Price Elasticity of Demand (Ed).
6.  **Calculate** elasticity using Percentage, Total Expenditure, and Geometric methods.
7.  **Identify** the degrees of elasticity and factors affecting it.

---

## Lesson Structure

### Part 1: Theory of Demand

#### Section 1: Concept of Demand
- Meaning of Demand (Qt, Price, Time)
- Individual Demand Schedule and Curve
- Market Demand Schedule and Curve
- Slope of Demand Curve

#### Section 2: Determinants of Demand (Demand Function)
- Price of the commodity (Px)
- Price of related goods (Pr): Substitutes and Complements
- Income of the consumer (Y): Normal vs Inferior goods
- Tastes and Preferences (T)
- Expectations of future price (E)
- Market determinants (Population, Income Distribution)

#### Section 3: Law of Demand
- Statement of the Law
- Assumptions (Ceteris Paribus)
- Why does Demand Curve slope downwards? (Income effect, Substitution effect, DMU)
- Exceptions to the Law (Giffen goods, Veblen goods, Emergencies)

#### Section 4: Movement vs Shift in Demand Curve
- **Movement**: Expansion and Contraction of Demand (Price change)
- **Shift**: Increase and Decrease in Demand (Other factors change)
- Cross-price effects (Impact of change in price of substitutes/complements)

### Part 2: Elasticity of Demand

#### Section 5: Concept of Price Elasticity
- Meaning and Definition
- Degrees of Elasticity:
  1. Perfectly Elastic (Ed = ∞)
  2. Perfectly Inelastic (Ed = 0)
  3. Unitary Elastic (Ed = 1)
  4. More than Unitary (Ed > 1)
  5. Less than Unitary (Ed < 1)

#### Section 6: Measurement of Price Elasticity
- **Percentage (Proportionate) Method**: Formula and numericals
- **Total Expenditure Method**: Relationship between Price, Expenditure, and Elasticity
- **Geometric (Point) Method**: Lower segment / Upper segment

#### Section 7: Factors Affecting Elasticity
- Nature of commodity (Necessity vs Luxury)
- Availability of substitutes
- Multiple uses
- Postponement of consumption
- Income level of consumer
- Habits

#### Section 8: Quiz
- Comprehensive assessment covering both Demand theory and Elasticity calculations

---

## Key Concepts

### Demand Function
The functional relationship between demand for a commodity and its determinants.
```
Dx = f(Px, Pr, Y, T, E)
```

### Relationship between Goods
| Type | Relationship | Example | Impact of Price Rise of A |
|------|--------------|---------|---------------------------|
| **Substitute Goods** | Can be used in place of each other | Tea & Coffee | Demand for B Rises |
| **Complementary Goods** | Used together to satisfy a want | Car & Petrol | Demand for B Falls |

### Law of Demand
Other things remaining constant (Ceteris Paribus), there is an **inverse relationship** between the price of a commodity and its quantity demanded.

### Giffen Paradox
A specific type of inferior good where demand falls when price falls (violating law of demand), named after Sir Robert Giffen.

---

## Comparison: Movement vs Shift

| Aspect | Movement along Demand Curve | Shift in Demand Curve |
|--------|-----------------------------|-----------------------|
| **Other Name** | Change in Quantity Demanded | Change in Demand |
| **Cause** | Change in Price of the commodity | Change in Other Factors (Income, Tastes, etc.) |
| **Graphical Effect** | Upward or Downward movement on same line | Rightward or Leftward shift of the line |
| **Types** | Expansion & Contraction | Increase & Decrease |

---

## Visual Diagrams

### Law of Demand Curve
```
 Price (P)
   ^
   |
 P1+-----\
   |      \
 P2+-------\
   |        \   DD (Demand Curve)
   +---------+-----> Quantity (Q)
     Q1    Q2
```
*Inverse relationship: As P falls from P1 to P2, Q rises from Q1 to Q2.*

### Shift in Demand (Increase)
```
 Price (P)
   ^    D1    D2
   |      \     \
 P +-------\-----\
   |        \     \
   |         \     \
   +----------+-----+--> Quantity (Q)
              Q1    Q2
```
*At the same Price P, Quantity increases from Q1 to Q2 due to other factors.*

---

## Mathematical Formulas

### 1. Percentage Method (Elasticity)
```
Ed = (-) (Percentage Change in Q / Percentage Change in P)
   = (-) (ΔQ/ΔP) × (P/Q)
```
*Note: Minus sign is often ignored to state the absolute value of elasticity.*

### 2. Total Expenditure Method
- **Ed > 1**: Price and Expenditure move in **Opposite** directions.
- **Ed < 1**: Price and Expenditure move in **Same** direction.
- **Ed = 1**: Expenditure remains **Constant** when Price changes.

### 3. Geometric Method
```
Ed at a point = Lower Segment of Demand Curve / Upper Segment of Demand Curve
```

---

## Common Exam Questions

1.  **Distinguish**: Between 'Expansion of Demand' and 'Increase in Demand' with diagrams.
2.  **Reasoning**: Why does the demand curve slope downwards? Explain three reasons.
3.  **Numerical**: Calculate Ed given initial Price/Qty and new Price/Qty.
4.  **Relationship**: How does the demand for a good change when the price of its substitute rises?
5.  **Factors**: Explain how the 'nature of commodity' effects its price elasticity.

---

## Practice Questions

1.  A consumer buys 50 units at ₹10. When price falls to ₹8, he buys 100 units. Calculate Price Elasticity.
2.  Explain the effect of rise in income of a consumer on the demand for an inferior good.
3.  Draw a demand curve with unitary elasticity (Ed = 1) at all points (Rectangular Hyperbola).
4.  Why is the demand for water inelastic while demand for luxury cars elastic?
5.  Differentiate between Normal Goods and Inferior Goods.

---

## References

- NCERT Class 11 Introductory Microeconomics - Chapter 3 & 4
- VK Ohri & TR Jain - Theory of Demand
- Alfred Marshall's Principles of Economics

---

## Notes for Developers

When implementing this lesson, consider the following layout strategies:
- **Interactive Graphs**: Use `Recharts` or SVG to show movements and shifts dynamically. Buttons like "Increase Price", "Decrease Income" should animate the curve.
- **Calculators**: Create a small input form for Elasticity Calculation where students input P1, P2, Q1, Q2 and get Ed.
- **Icons**:
  - Theory: `FaChartLine`
  - Determinants: `FaSitemap`
  - Law: `FaGavel` (or `FaBalanceScale`)
  - Elasticity: `FaExpandArrowsAlt`
  - Quiz: `FaClipboardCheck`
