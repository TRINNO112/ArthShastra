import React from 'react';
import { FaIndustry, FaUtensils, FaPlane, FaTruck, FaUserTie } from 'react-icons/fa';
import '../../css/lessons.css';
import '../../css/quiz.css';

const RealWorldExamples = () => {
  return (
    <section className="lesson-section">
      <div className="section-header-lesson">
        <span className="section-badge-lesson">Chapter 8</span>
        <h2 className="section-title-lesson">Real-World Examples</h2>
        <p className="section-subtitle-lesson">Cost structures in factories, restaurants, airlines & more.</p>
      </div>

      <div className="content-card featured-card">
        <div className="card-glow"></div>
        <div className="card-content">
          <h3 className="card-title">
            <FaIndustry className="title-icon gold" /> Costs in Practice
          </h3>
          <p className="intro-text">Every business faces fixed and variable costs. See how they apply across different industries.</p>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="examples-grid">
        <div className="example-card factory-card">
          <FaIndustry />
          <h5>Factory Production</h5>
          <p><strong>FC:</strong> Factory rent, machinery depreciation, manager salary.<br />
            <strong>VC:</strong> Raw materials, worker wages, electricity for machines.<br />
            <strong>Behavior:</strong> TC rises with output, MC U-shape from labor efficiency → crowding.</p>
        </div>

        <div className="example-card restaurant-card">
          <FaUtensils />
          <h5>Restaurant</h5>
          <p><strong>FC:</strong> Rent, kitchen equipment, chef salary.<br />
            <strong>VC:</strong> Food ingredients, waiter wages, gas for cooking.<br />
            <strong>Behavior:</strong> AVC falls initially (kitchen efficiency), rises with rush hours.</p>
        </div>

        <div className="example-card airline-card">
          <FaPlane />
          <h5>Airline</h5>
          <p><strong>FC:</strong> Aircraft purchase/lease, pilot salary, airport fees.<br />
            <strong>VC:</strong> Fuel (per flight), meals, maintenance per passenger.<br />
            <strong>Behavior:</strong> High FC, low VC per passenger – fill seats to lower AC.</p>
        </div>

        <div className="example-card logistics-card">
          <FaTruck />
          <h5>Trucking Company</h5>
          <p><strong>FC:</strong> Truck purchase, driver salary, insurance.<br />
            <strong>VC:</strong> Fuel, tolls, loading/unloading per trip.<br />
            <strong>Behavior:</strong> MC rises with distance/traffic; optimal load size.</p>
        </div>
      </div>

      <div className="practice-card" style={{ borderColor: 'rgba(255, 215, 0, 0.4)', padding: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
          <div style={{ background: 'rgba(255,215,0,0.2)', padding: '12px', borderRadius: '12px', color: '#ffd700' }}>
            <FaIndustry size={24} />
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>Apply to Your Business</h4>
            <p style={{ margin: 0, fontSize: '0.9rem', color: '#aaa' }}>Startup Application</p>
          </div>
        </div>

        <p>List 3 Fixed Costs and 3 Variable Costs for a startup (e.g., coffee shop, app, e-commerce).</p>

        <div className="solution-box" style={{ background: 'linear-gradient(90deg, rgba(255,215,0,0.1), rgba(0,0,0,0))', borderLeftColor: '#ffd700' }}>
          <strong style={{ color: '#ffd700', display: 'block', marginBottom: '5px' }}>Example: Coffee Shop</strong>
          <ul className="bullet-list">
            <li><strong>FC:</strong> Rent, Espresso Machine, Decor</li>
            <li><strong>VC:</strong> Coffee Beans, Milk, Paper Cups</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RealWorldExamples;
