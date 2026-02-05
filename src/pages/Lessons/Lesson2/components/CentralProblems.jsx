// CentralProblems.jsx
import '../lesson2-core.css';

function CentralProblems() {
  return (
    <section>
      {/* Removed inline style to allow CSS class to take effect */}
      <h2 className="royal-section-title">
        The Big 3 Questions
      </h2>

      <div className="lesson-grid-3">
        {/* PROBLEM 1 */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #000', transform: 'rotate(-1deg)' }}>
          <div style={{ position: 'absolute', top: '-20px', left: '-10px', background: '#000', color: '#fff', padding: '10px 20px', fontSize: '2rem', fontWeight: '900', transform: 'rotate(-5deg)', border: '4px solid #fff' }}>
            ?
          </div>
          <div style={{ marginTop: '20px' }}>
            <h3 className="card-title" style={{ fontSize: '1.8rem', color: '#000' }}>WHAT to Produce?</h3>
            <p style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '1.1rem', color: '#000' }}>
              <strong>The Choice:</strong><br />
              Do we make <span style={{ background: '#facc15', padding: '0 5px', border: '2px solid #000' }}>More Guns</span> (Defense)?<br />
              OR <span style={{ background: '#22c55e', padding: '0 5px', border: '2px solid #000' }}>More Butter</span> (Food)?
            </p>
          </div>
        </div>

        {/* PROBLEM 2 */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #2563eb', transform: 'rotate(1deg)' }}>
          <div style={{ position: 'absolute', top: '-15px', right: '-10px', background: '#2563eb', color: '#fff', padding: '5px 15px', fontWeight: 'bold', border: '3px solid #000' }}>
            Technique
          </div>
          <h3 className="card-title" style={{ fontSize: '1.8rem', color: '#000', marginTop: '10px' }}>HOW to Produce?</h3>
          <p style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '1.1rem', color: '#000' }}>
            <strong>Man vs Machine:</strong><br />
            <span style={{ color: '#2563eb', fontWeight: 'bold' }}>LIT:</span> Use more Labor (Jobs!)<br />
            <span style={{ color: '#ef4444', fontWeight: 'bold' }}>CIT:</span> Use more Machines (Speed!)
          </p>
        </div>

        {/* PROBLEM 3 */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #ef4444' }}>
          <div style={{ background: '#ef4444', color: '#fff', display: 'inline-block', padding: '5px 15px', fontWeight: 'bold', border: '3px solid #000', marginBottom: '10px' }}>
            Distribution
          </div>
          <h3 className="card-title" style={{ fontSize: '1.8rem', color: '#000' }}>FOR WHOM?</h3>
          <p style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '1.1rem', color: '#000' }}>
            Who gets the goods? <br />
            Usually... those with the <strong style={{ textDecoration: 'underline', textDecorationThickness: '3px', textDecorationColor: '#facc15' }}>Money ($$$)</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CentralProblems;
