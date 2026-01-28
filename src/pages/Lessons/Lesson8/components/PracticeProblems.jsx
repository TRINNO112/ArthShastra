import React, { useState } from 'react';
import { FaCalculator, FaCheckCircle, FaTimesCircle, FaLightbulb } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const PracticeProblems = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  const [feedback, setFeedback] = useState({});

  const checkAnswer = (qId, correctVal) => {
    const val = answers[qId]?.trim().toLowerCase();
    const isCorrect = val === String(correctVal).toLowerCase();
    setFeedback({ ...feedback, [qId]: isCorrect ? 'correct' : 'incorrect' });
  };

  return (
    <section className="lesson-section">
      <div className="factory-header">
        <h2 className="factory-title">SAFETY INSPECTOR EXAM</h2>
        <p className="factory-subtitle">UNIT 6: FACTORY CERTIFICATION PROTOCOLS</p>
      </div>

      <div className="blueprint-card" style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'center' }}>
        <h3 className="blueprint-title">CERTIFICATION REQUIRED</h3>
        <p style={{ fontFamily: 'monospace', color: '#ccc' }}>
          &gt;&gt; PASSING SCORE: 100%
          <br />
          &gt;&gt; STATUS: PENDING INSPECTION
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Q1: Concept */}
        <div className="machinery-card" style={{ borderLeft: '5px solid #ffcc00', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ color: '#fff', margin: 0, fontFamily: 'monospace' }}>
              <FaLightbulb style={{ color: '#ffcc00', marginRight: '10px' }} /> SAFETY DRILL 01: ZERO OUTPUT
            </h4>
            <span style={{ background: '#333', color: '#aaa', padding: '2px 8px', fontSize: '0.8rem', fontFamily: 'monospace' }}>THEORY</span>
          </div>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            If Total Cost (TC) is zero at zero output, what is the value of Fixed Cost (FC)?
          </p>
          <div className="input-group" style={{ maxWidth: '300px' }}>
            <input
              type="text"
              placeholder="ENTER VALUE..."
              className="premium-input"
              style={{ background: '#000', border: '1px solid #555', color: '#fff', fontFamily: 'monospace' }}
              value={answers.q1}
              onChange={(e) => setAnswers({ ...answers, q1: e.target.value })}
            />
            <button className="safety-btn" onClick={() => checkAnswer('q1', '0')}>VERIFY</button>
          </div>
          {feedback.q1 && (
            <div className={`feedback ${feedback.q1}`} style={{ marginTop: '15px', padding: '10px', background: feedback.q1 === 'correct' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)', border: feedback.q1 === 'correct' ? '1px solid #00ff00' : '1px solid #ff0000' }}>
              {feedback.q1 === 'correct' ?
                <><FaCheckCircle style={{ color: '#00ff00' }} /> COMPLIANCE VERIFIED: In Long Run, all costs are variable, so FC=0.</> :
                <><FaTimesCircle style={{ color: '#ff0000' }} /> VIOLATION: If TC=0, then FC must be 0.</>
              }
            </div>
          )}
        </div>

        {/* Q2: Calculation */}
        <div className="machinery-card" style={{ borderLeft: '5px solid #00bfff', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ color: '#fff', margin: 0, fontFamily: 'monospace' }}>
              <FaCalculator style={{ color: '#00bfff', marginRight: '10px' }} /> LOAD TEST 02: MARGINAL CALC
            </h4>
            <span style={{ background: '#333', color: '#aaa', padding: '2px 8px', fontSize: '0.8rem', fontFamily: 'monospace' }}>MATH</span>
          </div>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            TC @ Q=4 is 200. TC @ Q=5 is 260. Calculate MC for Unit 5.
          </p>
          <div className="input-group" style={{ maxWidth: '300px' }}>
            <input
              type="number"
              placeholder="MC = ?"
              className="premium-input"
              style={{ background: '#000', border: '1px solid #555', color: '#fff', fontFamily: 'monospace' }}
              value={answers.q2}
              onChange={(e) => setAnswers({ ...answers, q2: e.target.value })}
            />
            <button className="safety-btn" style={{ background: '#00bfff', color: '#fff', borderColor: '#fff' }} onClick={() => checkAnswer('q2', '60')}>VERIFY</button>
          </div>
          {feedback.q2 && (
            <div className={`feedback ${feedback.q2}`} style={{ marginTop: '15px', padding: '10px', background: feedback.q2 === 'correct' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)', border: feedback.q2 === 'correct' ? '1px solid #00ff00' : '1px solid #ff0000' }}>
              {feedback.q2 === 'correct' ?
                <><FaCheckCircle style={{ color: '#00ff00' }} /> CALCULATION CONFIRMED: 260 - 200 = 60.</> :
                <><FaTimesCircle style={{ color: '#ff0000' }} /> ERROR: MC = TC(n) - TC(n-1).</>
              }
            </div>
          )}
        </div>

        {/* Q3: Classification */}
        <div className="machinery-card" style={{ borderLeft: '5px solid #00ff88', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ color: '#fff', margin: 0, fontFamily: 'monospace' }}>
              <FaCheckCircle style={{ color: '#00ff88', marginRight: '10px' }} /> COMPONENT ID 03: CURVE SHAPE
            </h4>
            <span style={{ background: '#333', color: '#aaa', padding: '2px 8px', fontSize: '0.8rem', fontFamily: 'monospace' }}>ID</span>
          </div>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            Identify the curve that is a HORIZONTAL STRAIGHT LINE parallel to X-axis.
          </p>
          <div className="options-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {['TFC', 'TVC', 'AC', 'MC'].map(opt => (
              <button
                key={opt}
                className={`safety-btn ${answers.q3 === opt ? 'selected' : ''}`}
                style={{ background: '#333', color: '#fff', border: '1px solid #555' }}
                onClick={() => {
                  setAnswers({ ...answers, q3: opt });
                  if (opt === 'TFC') setFeedback({ ...feedback, q3: 'correct' });
                  else setFeedback({ ...feedback, q3: 'incorrect' });
                }}
              >
                {opt}
              </button>
            ))}
          </div>
          {feedback.q3 && (
            <div className={`feedback ${feedback.q3}`} style={{ marginTop: '15px', padding: '10px', background: feedback.q3 === 'correct' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)', border: feedback.q3 === 'correct' ? '1px solid #00ff00' : '1px solid #ff0000' }}>
              {feedback.q3 === 'correct' ?
                <><FaCheckCircle style={{ color: '#00ff00' }} /> POSITIVE ID: TFC is constant (Horizontal).</> :
                <><FaTimesCircle style={{ color: '#ff0000' }} /> NEGATIVE ID: Only Fixed Cost is horizontal.</>
              }
            </div>
          )}
        </div>

        {/* Q4: Table Logic */}
        <div className="machinery-card" style={{ borderLeft: '5px solid #ff6b6b', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ color: '#fff', margin: 0, fontFamily: 'monospace' }}>
              <FaLightbulb style={{ color: '#ff6b6b', marginRight: '10px' }} /> LOGIC GATE 04: CONSTANT AVG
            </h4>
            <span style={{ background: '#333', color: '#aaa', padding: '2px 8px', fontSize: '0.8rem', fontFamily: 'monospace' }}>LOGIC</span>
          </div>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            If AVC is CONSTANT at ₹10 for all output, what is the shape of MC?
          </p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Horizontal / U-shaped / Rising"
              className="premium-input"
              style={{ background: '#000', border: '1px solid #555', color: '#fff', fontFamily: 'monospace' }}
              value={answers.q4}
              onChange={(e) => setAnswers({ ...answers, q4: e.target.value })}
            />
            <button className="safety-btn" style={{ background: '#ff6b6b', color: '#fff', borderColor: '#fff' }} onClick={() => checkAnswer('q4', 'horizontal')}>VERIFY</button>
          </div>
          {feedback.q4 && (
            <div className={`feedback ${feedback.q4}`} style={{ marginTop: '15px', padding: '10px', background: feedback.q4 === 'correct' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)', border: feedback.q4 === 'correct' ? '1px solid #00ff00' : '1px solid #ff0000' }}>
              {feedback.q4 === 'correct' ?
                <><FaCheckCircle style={{ color: '#00ff00' }} /> LOGIC VERIFIED: Constant Average implies Marginal = Average.</> :
                <><FaTimesCircle style={{ color: '#ff0000' }} /> LOGIC FAIL: If Average doesn't change, Marginal must be equal to it.</>
              }
            </div>
          )}
        </div>

        {/* Q5: Relationship */}
        <div className="machinery-card" style={{ borderLeft: '5px solid #fff', padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
            <h4 style={{ color: '#fff', margin: 0, fontFamily: 'monospace' }}>
              <FaLightbulb style={{ color: '#fff', marginRight: '10px' }} /> GAP ANALYSIS 05: AC vs AVC
            </h4>
            <span style={{ background: '#333', color: '#aaa', padding: '2px 8px', fontSize: '0.8rem', fontFamily: 'monospace' }}>THEORY</span>
          </div>
          <p style={{ color: '#ccc', marginBottom: '15px' }}>
            TRUE/FALSE: The distance between AC and AVC curves remains CONSTANT as output increases.
          </p>
          <div className="options-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <button className={`safety-btn ${answers.q5 === 'True' ? 'selected' : ''}`} style={{ background: '#333', color: '#fff' }} onClick={() => { setAnswers({ ...answers, q5: 'True' }); setFeedback({ ...feedback, q5: 'incorrect' }); }}>True</button>
            <button className={`safety-btn ${answers.q5 === 'False' ? 'selected' : ''}`} style={{ background: '#333', color: '#fff' }} onClick={() => { setAnswers({ ...answers, q5: 'False' }); setFeedback({ ...feedback, q5: 'correct' }); }}>False</button>
          </div>
          {feedback.q5 && (
            <div className={`feedback ${feedback.q5}`} style={{ marginTop: '15px', padding: '10px', background: feedback.q5 === 'correct' ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)', border: feedback.q5 === 'correct' ? '1px solid #00ff00' : '1px solid #ff0000' }}>
              {feedback.q5 === 'correct' ?
                <><FaCheckCircle style={{ color: '#00ff00' }} /> CORRECT: The gap is AFC, which falls continuously.</> :
                <><FaTimesCircle style={{ color: '#ff0000' }} /> INCORRECT: Warning! Structure unstable. AFC falls, so gap narrows.</>
              }
            </div>
          )}
        </div>

      </div>

    </section>
  );
};

export default PracticeProblems;
