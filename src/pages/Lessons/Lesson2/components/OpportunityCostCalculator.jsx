// OpportunityCostCalculator.jsx - Interactive Opportunity Cost Calculator
import { useState } from 'react';
import { FaCalculator, FaCoins, FaClock, FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';
import './components.css';

function OpportunityCostCalculator() {
  const [activeCalculator, setActiveCalculator] = useState('money');

  // Money Calculator State
  const [moneyAmount, setMoneyAmount] = useState(10000);
  const [moneyOption1Return, setMoneyOption1Return] = useState(8);
  const [moneyOption2Return, setMoneyOption2Return] = useState(5);

  // Time Calculator State
  const [hoursAvailable, setHoursAvailable] = useState(40);
  const [activity1Hours, setActivity1Hours] = useState(20);
  const [activity1Value, setActivity1Value] = useState(500);
  const [activity2Value, setActivity2Value] = useState(300);

  // Education Calculator State
  const [yearsEducation, setYearsEducation] = useState(4);
  const [salaryWithoutDegree, setSalaryWithoutDegree] = useState(30000);
  const [salaryWithDegree, setSalaryWithDegree] = useState(60000);
  const [educationCost, setEducationCost] = useState(50000);

  // Calculate Money Opportunity Cost
  const calculateMoneyOC = () => {
    const option1Return = (moneyAmount * moneyOption1Return) / 100;
    const option2Return = (moneyAmount * moneyOption2Return) / 100;
    const opportunityCost = Math.abs(option1Return - option2Return);
    const betterOption = option1Return > option2Return ? 'Investment 1' : 'Investment 2';
    return { option1Return, option2Return, opportunityCost, betterOption };
  };

  // Calculate Time Opportunity Cost
  const calculateTimeOC = () => {
    const activity2Hours = hoursAvailable - activity1Hours;
    const activity1TotalValue = (activity1Hours / hoursAvailable) * activity1Value;
    const activity2TotalValue = (activity2Hours / hoursAvailable) * activity2Value;
    const opportunityCost = activity2TotalValue;
    return { activity1Hours, activity2Hours, activity1TotalValue, activity2TotalValue, opportunityCost };
  };

  // Calculate Education Opportunity Cost
  const calculateEducationOC = () => {
    const earningsLostDuringStudy = salaryWithoutDegree * yearsEducation;
    const totalOpportunityCost = earningsLostDuringStudy + educationCost;
    const additionalYearlySalary = salaryWithDegree - salaryWithoutDegree;
    const breakEvenYears = totalOpportunityCost / additionalYearlySalary;
    return { earningsLostDuringStudy, totalOpportunityCost, additionalYearlySalary, breakEvenYears };
  };

  const moneyResults = calculateMoneyOC();
  const timeResults = calculateTimeOC();
  const educationResults = calculateEducationOC();

  const calculators = [
    { id: 'money', name: 'Investment Decision', icon: FaCoins, color: '#ffd700' },
    { id: 'time', name: 'Time Allocation', icon: FaClock, color: '#00d4ff' },
    { id: 'education', name: 'Education ROI', icon: FaGraduationCap, color: '#9d4edd' }
  ];

  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Interactive Calculator</span>
        <h2 className="section-title-lesson">Opportunity Cost Calculator</h2>
        <p className="section-subtitle-lesson">
          Calculate real opportunity costs for money, time, and education decisions!
        </p>
      </div>

      <div className="content-card">
        {/* Calculator Type Selection */}
        <div className="occ-calculator-container">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            const isActive = activeCalculator === calc.id;
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`occ-calculator-button ${isActive ? 'occ-calculator-button-active' : ''}`}
              >
                <Icon className="occ-calculator-icon" />
                <span>{calc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Money Calculator */}
        {activeCalculator === 'money' && (
          <div className="occ-money-calculator">
            <div className="occ-calculator-header">
              <FaCoins className="occ-calculator-icon-large" />
              <h3 className="occ-calculator-title">
                Investment Opportunity Cost
              </h3>
              <p className="occ-calculator-subtitle">
                Compare two investment options and see what you're giving up!
              </p>
            </div>

            {/* Inputs */}
            <div className="occ-input-grid">
              <div className="occ-input-group">
                <label className="occ-input-label">
                  💰 Amount to Invest ($)
                </label>
                <input
                  type="number"
                  value={moneyAmount}
                  onChange={(e) => setMoneyAmount(Number(e.target.value))}
                  className="occ-input-field"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  📈 Investment 1 Return (% per year)
                </label>
                <input
                  type="number"
                  value={moneyOption1Return}
                  onChange={(e) => setMoneyOption1Return(Number(e.target.value))}
                  className="occ-input-field occ-input-field-green"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  📉 Investment 2 Return (% per year)
                </label>
                <input
                  type="number"
                  value={moneyOption2Return}
                  onChange={(e) => setMoneyOption2Return(Number(e.target.value))}
                  className="occ-input-field occ-input-field-cyan"
                />
              </div>
            </div>

            {/* Results */}
            <div className="occ-results-container">
              <h4 className="occ-results-title">
                📊 Analysis Results
              </h4>

              <div className="occ-results-grid">
                <div className="occ-result-card occ-result-card-green">
                  <p className="occ-result-label">
                    Investment 1 Returns
                  </p>
                  <p className="occ-result-value">
                    ${moneyResults.option1Return.toFixed(2)}
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-cyan">
                  <p className="occ-result-label">
                    Investment 2 Returns
                  </p>
                  <p className="occ-result-value">
                    ${moneyResults.option2Return.toFixed(2)}
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-red">
                  <p className="occ-result-label">
                    Opportunity Cost
                  </p>
                  <p className="occ-result-value">
                    ${moneyResults.opportunityCost.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="occ-recommendation-box">
                <p className="occ-recommendation-text">
                  💡 <strong>Recommendation:</strong> {moneyResults.betterOption} gives better returns.
                  By choosing it, your opportunity cost (what you give up) is ${moneyResults.opportunityCost.toFixed(2)}.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Time Calculator */}
        {activeCalculator === 'time' && (
          <div className="occ-time-calculator">
            <div className="occ-calculator-header">
              <FaClock className="occ-calculator-icon-large" />
              <h3 className="occ-calculator-title">
                Time Allocation Calculator
              </h3>
              <p className="occ-calculator-subtitle">
                Time is money! See what you're sacrificing when choosing one activity over another.
              </p>
            </div>

            <div className="occ-education-input-grid">
              <div className="occ-input-group">
                <label className="occ-input-label">
                  ⏰ Total Hours Available
                </label>
                <input
                  type="number"
                  value={hoursAvailable}
                  onChange={(e) => setHoursAvailable(Number(e.target.value))}
                  className="occ-input-field occ-input-field-cyan"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  💼 Activity 1: Hours Spent
                </label>
                <input
                  type="number"
                  value={activity1Hours}
                  max={hoursAvailable}
                  onChange={(e) => setActivity1Hours(Math.min(Number(e.target.value), hoursAvailable))}
                  className="occ-input-field occ-input-field-green"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  💵 Activity 1: Value/Hour ($)
                </label>
                <input
                  type="number"
                  value={activity1Value}
                  onChange={(e) => setActivity1Value(Number(e.target.value))}
                  className="occ-input-field occ-input-field-green"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  💰 Activity 2: Value/Hour ($)
                </label>
                <input
                  type="number"
                  value={activity2Value}
                  onChange={(e) => setActivity2Value(Number(e.target.value))}
                  className="occ-input-field"
                />
              </div>
            </div>

            <div className="occ-time-results-container">
              <h4 className="occ-time-results-title">
                ⏱️ Time Breakdown
              </h4>

              <div className="occ-results-grid">
                <div className="occ-result-card occ-result-card-green">
                  <p className="occ-result-label">
                    Activity 1 Hours
                  </p>
                  <p className="occ-result-value">
                    {timeResults.activity1Hours}h
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-yellow">
                  <p className="occ-result-label">
                    Activity 2 Hours
                  </p>
                  <p className="occ-result-value-yellow">
                    {timeResults.activity2Hours}h
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-cyan">
                  <p className="occ-result-label">
                    Activity 1 Total Value
                  </p>
                  <p className="occ-result-value">
                    ${timeResults.activity1TotalValue.toFixed(0)}
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-red">
                  <p className="occ-result-label">
                    Opportunity Cost
                  </p>
                  <p className="occ-result-value">
                    ${timeResults.opportunityCost.toFixed(0)}
                  </p>
                </div>
              </div>

              <div className="occ-time-insight-box">
                <p className="occ-time-insight-text">
                  💡 <strong>Insight:</strong> By spending {timeResults.activity1Hours} hours on Activity 1,
                  you're giving up ${timeResults.opportunityCost.toFixed(0)} worth of Activity 2.
                  Choose wisely based on your priorities!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Education Calculator */}
        {activeCalculator === 'education' && (
          <div className="occ-education-calculator">
            <div className="occ-calculator-header">
              <FaGraduationCap className="occ-calculator-icon-large" />
              <h3 className="occ-calculator-title">
                Education Investment Calculator
              </h3>
              <p className="occ-calculator-subtitle">
                Is college worth it? Calculate the true cost and break-even point!
              </p>
            </div>

            <div className="occ-education-input-grid">
              <div className="occ-input-group">
                <label className="occ-input-label">
                  📚 Years of Education
                </label>
                <input
                  type="number"
                  value={yearsEducation}
                  onChange={(e) => setYearsEducation(Number(e.target.value))}
                  className="occ-input-field"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  💼 Salary Without Degree ($/year)
                </label>
                <input
                  type="number"
                  value={salaryWithoutDegree}
                  onChange={(e) => setSalaryWithoutDegree(Number(e.target.value))}
                  className="occ-input-field"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  🎓 Salary With Degree ($/year)
                </label>
                <input
                  type="number"
                  value={salaryWithDegree}
                  onChange={(e) => setSalaryWithDegree(Number(e.target.value))}
                  className="occ-input-field occ-input-field-green"
                />
              </div>

              <div className="occ-input-group">
                <label className="occ-input-label">
                  💰 Total Education Cost ($)
                </label>
                <input
                  type="number"
                  value={educationCost}
                  onChange={(e) => setEducationCost(Number(e.target.value))}
                  className="occ-input-field occ-input-field-red"
                />
              </div>
            </div>

            <div className="occ-education-results-container">
              <h4 className="occ-education-results-title">
                📈 ROI Analysis
              </h4>

              <div className="occ-education-results-grid">
                <div className="occ-result-card occ-result-card-yellow">
                  <p className="occ-result-label">
                    Earnings Lost During Study
                  </p>
                  <p className="occ-result-value-yellow">
                    ${educationResults.earningsLostDuringStudy.toLocaleString()}
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-red">
                  <p className="occ-result-label">
                    Total Opportunity Cost
                  </p>
                  <p className="occ-result-value">
                    ${educationResults.totalOpportunityCost.toLocaleString()}
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-green">
                  <p className="occ-result-label">
                    Additional Yearly Salary
                  </p>
                  <p className="occ-result-value">
                    ${educationResults.additionalYearlySalary.toLocaleString()}
                  </p>
                </div>

                <div className="occ-result-card occ-result-card-purple">
                  <p className="occ-result-label">
                    Break-Even Point
                  </p>
                  <p className="occ-result-value-purple">
                    {educationResults.breakEvenYears.toFixed(1)} years
                  </p>
                </div>
              </div>

              <div className={`occ-investment-box ${educationResults.breakEvenYears <= 10 ? 'occ-investment-great' : 'occ-investment-box-caution'}`}>
                <div className="occ-investment-header">
                  {educationResults.breakEvenYears <= 10 ? (
                    <FaRocket className="occ-investment-icon" />
                  ) : (
                    <FaBriefcase className="occ-investment-icon" />
                  )}
                  <h4 className="occ-investment-title">
                    {educationResults.breakEvenYears <= 10 ? 'Great Investment!' : 'Consider Carefully'}
                  </h4>
                </div>
                <p className="occ-investment-text">
                  After {educationResults.breakEvenYears.toFixed(1)} years of working with your degree,
                  you'll have recovered all costs (tuition + lost earnings).
                  {educationResults.breakEvenYears <= 10
                    ? ' This is a solid return on investment!'
                    : ' Make sure you consider non-financial benefits too!'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="highlight-card cyan occ-section-mt">
        <div className="highlight-content">
          <h3 className="occ-understanding-title">🎯 Understanding Opportunity Cost</h3>
          <p className="occ-understanding-text">
            Every choice has a cost - not just money, but what you give up by not choosing the next best alternative.
            These calculators help you make informed decisions by quantifying what you're sacrificing.
            Remember: opportunity cost isn't always about money; time, experiences, and personal growth matter too!
          </p>
        </div>
      </div>
    </section>
  );
}

export default OpportunityCostCalculator;
