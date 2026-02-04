// OpportunityCost.jsx
import '../lesson2-core.css';

function OpportunityCost() {
  return (
    <section>
      {/* Removed inline style to allow CSS class to take effect */}
      <h2 className="section-title">
        <span style={{ background: '#000', padding: '0 5px' }}>Opportunity</span> Cost
      </h2>

      <div className="lesson-grid-2">
        {/* CONCEPT CARD */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #000' }}>
          <div style={{ background: '#000', color: '#fff', display: 'inline-block', padding: '5px 15px', fontWeight: '900', border: '3px solid #000', transform: 'rotate(-2deg)', marginBottom: '15px' }}>
            THE DEFINITION
          </div>
          <h3 className="card-title" style={{ fontSize: '1.6rem', color: '#000' }}>"The Next Best Thing"</h3>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#000' }}>
            It is the value of the <strong>next best alternative</strong> you GAVE UP.
            <br /><br />
            <span style={{ background: '#facc15', border: '2px solid #000', padding: '2px 5px', fontWeight: 'bold' }}>Cost != Money.</span> Cost is what you lost!
          </p>

          <div style={{ background: '#fff', border: '3px dashed #000', padding: '15px', marginTop: '20px', boxShadow: '4px 4px 0px #cbd5e1' }}>
            <strong style={{ textTransform: 'uppercase', color: '#ef4444' }}>Example:</strong><br />
            Play Football ⚽ OR Study Economics 📚?<br />
            Chose <strong>Economics</strong>? <br />
            Opportunity Cost = <strong>The Fun of Football</strong> you missed!
          </div>
        </div>

        {/* MATH CARD */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #ef4444' }}>
          <div style={{ background: '#ef4444', color: '#fff', display: 'inline-block', padding: '5px 15px', fontWeight: '900', border: '3px solid #000', transform: 'rotate(2deg)', marginBottom: '15px' }}>
            THE MATH (MOC)
          </div>
          <h3 className="card-title" style={{ fontSize: '1.6rem', color: '#000' }}>Marginal Opportunity Cost</h3>
          <p style={{ fontSize: '1.1rem', color: '#000' }}>
            The <strong>Rate of Sacrifice</strong>. How much Rice do you destroy to grow one more Wheat?
          </p>

          <div className="results-box" style={{ background: '#facc15', border: '4px solid #000', transform: 'rotate(-1deg)', marginTop: '30px', boxShadow: '5px 5px 0px #000' }}>
            <div style={{ fontSize: '1rem', color: '#000', marginBottom: '5px', fontWeight: '900' }}>FORMULA OF DOOM</div>
            <div className="results-value-big" style={{ fontSize: '2.5rem', color: '#000', textShadow: '2px 2px 0px #fff' }}>MOC = ΔLoss / ΔGain</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpportunityCost;
