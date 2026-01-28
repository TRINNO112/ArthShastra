import React from 'react';
import { FaIndustry, FaUtensils, FaPlane, FaUserTie } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const RealWorldExamples = () => {
  return (
    <section className="lesson-section">
      <div className="factory-header">
        <h2 className="factory-title">FACTORY FLOOR STORIES</h2>
        <p className="factory-subtitle">REAL WORLD COST STRUCTURES</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '30px' }}>

        {/* FACTORY */}
        <div className="industry-card" style={{ background: '#222', borderLeft: '5px solid #ccc', padding: '20px', borderRadius: '0 10px 10px 0', border: '1px solid #444', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-10px', top: '-10px', opacity: '0.1' }}><FaIndustry size={100} /></div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '15px', borderBottom: '1px dashed #555', paddingBottom: '10px' }}>
            <FaIndustry style={{ marginRight: '10px', color: '#ccc' }} /> HEAVY INDUSTRY
          </h4>
          <div style={{ fontSize: '0.9rem', color: '#aaa', fontFamily: 'monospace' }}>
            <div style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>FIXED:</strong> Machinery, Lease, Grid Connection.</div>
            <div><strong style={{ color: '#fff' }}>VARIABLE:</strong> Steel, Raw Materials, Labor.</div>
          </div>
        </div>

        {/* AIRLINE */}
        <div className="industry-card" style={{ background: '#222', borderLeft: '5px solid #00bfff', padding: '20px', borderRadius: '0 10px 10px 0', border: '1px solid #444', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-10px', top: '-10px', opacity: '0.1' }}><FaPlane size={100} /></div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '15px', borderBottom: '1px dashed #555', paddingBottom: '10px' }}>
            <FaPlane style={{ marginRight: '10px', color: '#00bfff' }} /> AIRLINES
          </h4>
          <div style={{ fontSize: '0.9rem', color: '#aaa', fontFamily: 'monospace' }}>
            <div style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>FIXED:</strong> Aircraft Lease, Airport Gates, Pilots.</div>
            <div><strong style={{ color: '#fff' }}>VARIABLE:</strong> Jet Fuel, In-flight Meals.</div>
          </div>
        </div>

        {/* TECH STARTUP */}
        <div className="industry-card" style={{ background: '#222', borderLeft: '5px solid #00ff88', padding: '20px', borderRadius: '0 10px 10px 0', border: '1px solid #444', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-10px', top: '-10px', opacity: '0.1' }}><FaUserTie size={100} /></div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '15px', borderBottom: '1px dashed #555', paddingBottom: '10px' }}>
            <FaUserTie style={{ marginRight: '10px', color: '#00ff88' }} /> TECH STARTUP
          </h4>
          <div style={{ fontSize: '0.9rem', color: '#aaa', fontFamily: 'monospace' }}>
            <div style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>FIXED:</strong> Servers, Office, Dev Team Salary.</div>
            <div><strong style={{ color: '#fff' }}>VARIABLE:</strong> Cloud Scale-up, Customer Support.</div>
          </div>
        </div>

        {/* RESTAURANT */}
        <div className="industry-card" style={{ background: '#222', borderLeft: '5px solid #ff6b6b', padding: '20px', borderRadius: '0 10px 10px 0', border: '1px solid #444', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '-10px', top: '-10px', opacity: '0.1' }}><FaUtensils size={100} /></div>
          <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '15px', borderBottom: '1px dashed #555', paddingBottom: '10px' }}>
            <FaUtensils style={{ marginRight: '10px', color: '#ff6b6b' }} /> RESTAURANT
          </h4>
          <div style={{ fontSize: '0.9rem', color: '#aaa', fontFamily: 'monospace' }}>
            <div style={{ marginBottom: '8px' }}><strong style={{ color: '#fff' }}>FIXED:</strong> Kitchen Equip, Rent, Head Chef.</div>
            <div><strong style={{ color: '#fff' }}>VARIABLE:</strong> Groceries, Gas/Electric.</div>
          </div>
        </div>

      </div>

      <div className="blueprint-card" style={{ marginTop: '40px' }}>
        <h3 className="blueprint-title">EXERCISE: COST IDENTIFICATION</h3>
        <p style={{ fontFamily: 'monospace', color: '#aaa', marginBottom: '20px' }}>
          &gt;&gt; SCENARIO: COFFEE SHOP STARTUP
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '1px dashed #fff', padding: '15px' }}>
            <strong style={{ color: 'var(--factory-yellow)' }}>FIXED COSTS (TFC)</strong>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', color: '#ccc', fontFamily: 'monospace' }}>
              <li>- Espresso Machine Lease</li>
              <li>- Shop Rent</li>
              <li>- WiFi Plan</li>
            </ul>
          </div>
          <div style={{ border: '1px dashed #fff', padding: '15px' }}>
            <strong style={{ color: 'var(--factory-blue)' }}>VARIABLE COSTS (TVC)</strong>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px', color: '#ccc', fontFamily: 'monospace' }}>
              <li>- Coffee Beans</li>
              <li>- Milk / Sugar</li>
              <li>- Paper Cups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealWorldExamples;
