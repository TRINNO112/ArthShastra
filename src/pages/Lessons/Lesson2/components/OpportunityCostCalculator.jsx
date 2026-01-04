// OpportunityCostCalculator.jsx - Interactive Opportunity Cost Calculator
import { useState } from 'react';
import { FaCalculator, FaCoins, FaClock, FaGraduationCap, FaBriefcase, FaRocket } from 'react-icons/fa';

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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '15px',
          marginBottom: '30px'
        }}>
          {calculators.map((calc) => {
            const Icon = calc.icon;
            const isActive = activeCalculator === calc.id;
            return (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                style={{
                  padding: '20px',
                  background: isActive
                    ? `linear-gradient(135deg, ${calc.color}, ${calc.color}cc)`
                    : 'rgba(255,255,255,0.05)',
                  color: isActive ? '#0a0a15' : 'white',
                  border: `2px solid ${calc.color}`,
                  borderRadius: '14px',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? '700' : '500',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: isActive ? `0 4px 20px ${calc.color}40` : 'none'
                }}
              >
                <Icon style={{ fontSize: '2rem', color: isActive ? '#0a0a15' : calc.color }} />
                <span>{calc.name}</span>
              </button>
            );
          })}
        </div>

        {/* Money Calculator */}
        {activeCalculator === 'money' && (
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,215,0,0.1), rgba(255,215,0,0.05))',
            padding: '30px',
            borderRadius: '18px',
            border: '2px solid rgba(255,215,0,0.3)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <FaCoins style={{ fontSize: '3rem', color: '#ffd700', marginBottom: '10px' }} />
              <h3 style={{ color: '#ffd700', fontSize: '1.5rem', margin: '0 0 10px 0' }}>
                Investment Opportunity Cost
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                Compare two investment options and see what you're giving up!
              </p>
            </div>

            {/* Inputs */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  💰 Amount to Invest ($)
                </label>
                <input
                  type="number"
                  value={moneyAmount}
                  onChange={(e) => setMoneyAmount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,215,0,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  📈 Investment 1 Return (% per year)
                </label>
                <input
                  type="number"
                  value={moneyOption1Return}
                  onChange={(e) => setMoneyOption1Return(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(0,255,136,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  📉 Investment 2 Return (% per year)
                </label>
                <input
                  type="number"
                  value={moneyOption2Return}
                  onChange={(e) => setMoneyOption2Return(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(0,212,255,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            {/* Results */}
            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '25px',
              borderRadius: '14px',
              border: '2px solid rgba(255,215,0,0.4)'
            }}>
              <h4 style={{ color: '#ffd700', margin: '0 0 20px 0', fontSize: '1.2rem', textAlign: 'center' }}>
                📊 Analysis Results
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
                <div style={{
                  background: 'rgba(0,255,136,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,255,136,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Investment 1 Returns
                  </p>
                  <p style={{ color: '#00ff88', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    ${moneyResults.option1Return.toFixed(2)}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(0,212,255,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,212,255,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Investment 2 Returns
                  </p>
                  <p style={{ color: '#00d4ff', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    ${moneyResults.option2Return.toFixed(2)}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255,107,107,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,107,107,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Opportunity Cost
                  </p>
                  <p style={{ color: '#ff6b6b', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    ${moneyResults.opportunityCost.toFixed(2)}
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(255,215,0,0.15)',
                borderRadius: '10px',
                borderLeft: '4px solid #ffd700'
              }}>
                <p style={{ color: 'white', fontSize: '1rem', margin: 0 }}>
                  💡 <strong>Recommendation:</strong> {moneyResults.betterOption} gives better returns.
                  By choosing it, your opportunity cost (what you give up) is ${moneyResults.opportunityCost.toFixed(2)}.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Time Calculator */}
        {activeCalculator === 'time' && (
          <div style={{
            background: 'linear-gradient(145deg, rgba(0,212,255,0.1), rgba(0,212,255,0.05))',
            padding: '30px',
            borderRadius: '18px',
            border: '2px solid rgba(0,212,255,0.3)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <FaClock style={{ fontSize: '3rem', color: '#00d4ff', marginBottom: '10px' }} />
              <h3 style={{ color: '#00d4ff', fontSize: '1.5rem', margin: '0 0 10px 0' }}>
                Time Allocation Calculator
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                Time is money! See what you're sacrificing when choosing one activity over another.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  ⏰ Total Hours Available
                </label>
                <input
                  type="number"
                  value={hoursAvailable}
                  onChange={(e) => setHoursAvailable(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(0,212,255,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  💼 Activity 1: Hours Spent
                </label>
                <input
                  type="number"
                  value={activity1Hours}
                  max={hoursAvailable}
                  onChange={(e) => setActivity1Hours(Math.min(Number(e.target.value), hoursAvailable))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(0,255,136,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  💵 Activity 1: Value/Hour ($)
                </label>
                <input
                  type="number"
                  value={activity1Value}
                  onChange={(e) => setActivity1Value(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(0,255,136,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  💰 Activity 2: Value/Hour ($)
                </label>
                <input
                  type="number"
                  value={activity2Value}
                  onChange={(e) => setActivity2Value(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,215,0,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '25px',
              borderRadius: '14px',
              border: '2px solid rgba(0,212,255,0.4)'
            }}>
              <h4 style={{ color: '#00d4ff', margin: '0 0 20px 0', fontSize: '1.2rem', textAlign: 'center' }}>
                ⏱️ Time Breakdown
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px' }}>
                <div style={{
                  background: 'rgba(0,255,136,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,255,136,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Activity 1 Hours
                  </p>
                  <p style={{ color: '#00ff88', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    {timeResults.activity1Hours}h
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255,215,0,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,215,0,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Activity 2 Hours
                  </p>
                  <p style={{ color: '#ffd700', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    {timeResults.activity2Hours}h
                  </p>
                </div>

                <div style={{
                  background: 'rgba(0,212,255,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,212,255,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Activity 1 Total Value
                  </p>
                  <p style={{ color: '#00d4ff', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    ${timeResults.activity1TotalValue.toFixed(0)}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255,107,107,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,107,107,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Opportunity Cost
                  </p>
                  <p style={{ color: '#ff6b6b', fontSize: '1.5rem', fontWeight: '700', margin: 0 }}>
                    ${timeResults.opportunityCost.toFixed(0)}
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '20px',
                padding: '15px',
                background: 'rgba(0,212,255,0.15)',
                borderRadius: '10px',
                borderLeft: '4px solid #00d4ff'
              }}>
                <p style={{ color: 'white', fontSize: '1rem', margin: 0 }}>
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
          <div style={{
            background: 'linear-gradient(145deg, rgba(157,78,221,0.1), rgba(157,78,221,0.05))',
            padding: '30px',
            borderRadius: '18px',
            border: '2px solid rgba(157,78,221,0.3)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <FaGraduationCap style={{ fontSize: '3rem', color: '#9d4edd', marginBottom: '10px' }} />
              <h3 style={{ color: '#9d4edd', fontSize: '1.5rem', margin: '0 0 10px 0' }}>
                Education Investment Calculator
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>
                Is college worth it? Calculate the true cost and break-even point!
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  📚 Years of Education
                </label>
                <input
                  type="number"
                  value={yearsEducation}
                  onChange={(e) => setYearsEducation(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(157,78,221,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  💼 Salary Without Degree ($/year)
                </label>
                <input
                  type="number"
                  value={salaryWithoutDegree}
                  onChange={(e) => setSalaryWithoutDegree(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,215,0,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  🎓 Salary With Degree ($/year)
                </label>
                <input
                  type="number"
                  value={salaryWithDegree}
                  onChange={(e) => setSalaryWithDegree(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(0,255,136,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div>
                <label style={{ color: 'white', fontSize: '0.95rem', marginBottom: '8px', display: 'block' }}>
                  💰 Total Education Cost ($)
                </label>
                <input
                  type="number"
                  value={educationCost}
                  onChange={(e) => setEducationCost(Number(e.target.value))}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'rgba(0,0,0,0.3)',
                    border: '2px solid rgba(255,107,107,0.3)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{
              background: 'rgba(0,0,0,0.4)',
              padding: '25px',
              borderRadius: '14px',
              border: '2px solid rgba(157,78,221,0.4)'
            }}>
              <h4 style={{ color: '#9d4edd', margin: '0 0 20px 0', fontSize: '1.2rem', textAlign: 'center' }}>
                📈 ROI Analysis
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(255,215,0,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,215,0,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Earnings Lost During Study
                  </p>
                  <p style={{ color: '#ffd700', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
                    ${educationResults.earningsLostDuringStudy.toLocaleString()}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(255,107,107,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,107,107,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Total Opportunity Cost
                  </p>
                  <p style={{ color: '#ff6b6b', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
                    ${educationResults.totalOpportunityCost.toLocaleString()}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(0,255,136,0.1)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0,255,136,0.3)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Additional Yearly Salary
                  </p>
                  <p style={{ color: '#00ff88', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
                    ${educationResults.additionalYearlySalary.toLocaleString()}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(157,78,221,0.2)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '1px solid rgba(157,78,221,0.5)'
                }}>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: '0 0 5px 0' }}>
                    Break-Even Point
                  </p>
                  <p style={{ color: '#9d4edd', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>
                    {educationResults.breakEvenYears.toFixed(1)} years
                  </p>
                </div>
              </div>

              <div style={{
                marginTop: '20px',
                padding: '20px',
                background: educationResults.breakEvenYears <= 10 ? 'rgba(0,255,136,0.15)' : 'rgba(255,215,0,0.15)',
                borderRadius: '12px',
                borderLeft: `4px solid ${educationResults.breakEvenYears <= 10 ? '#00ff88' : '#ffd700'}`
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  {educationResults.breakEvenYears <= 10 ? (
                    <FaRocket style={{ fontSize: '1.5rem', color: '#00ff88' }} />
                  ) : (
                    <FaBriefcase style={{ fontSize: '1.5rem', color: '#ffd700' }} />
                  )}
                  <h4 style={{ color: 'white', margin: 0, fontSize: '1.1rem' }}>
                    {educationResults.breakEvenYears <= 10 ? 'Great Investment!' : 'Consider Carefully'}
                  </h4>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
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

      <div className="highlight-card cyan" style={{ marginTop: '25px' }}>
        <div className="highlight-content">
          <h3 style={{ marginBottom: '12px' }}>🎯 Understanding Opportunity Cost</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
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
