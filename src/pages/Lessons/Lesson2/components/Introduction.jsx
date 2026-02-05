// Introduction.jsx
import '../lesson2-core.css';

function Introduction() {
  const comicTitleStyle = {
    background: '#000',
    color: '#fff',
    display: 'inline-block',
    padding: '5px 15px',
    transform: 'rotate(-2deg)',
    fontSize: '1.2rem',
    fontWeight: '900',
    marginBottom: '10px',
    boxShadow: '4px 4px 0px #facc15' // Yellow shadow
  };

  return (
    <section>
      {/* Remove inline style to allow CSS class override */}
      <h2 className="royal-section-title">
        The Central Problem: <span style={{ color: '#facc15', textShadow: '2px 2px 0px #000' }}>Scarcity!</span>
      </h2>

      {/* COMIC PANEL 1: THE HOOK */}
      <div className="lesson-card" style={{ border: '4px solid #000', marginBottom: '30px', background: '#fff' }}>
        <p style={{ fontSize: '1.3rem', fontWeight: 'bold', lineHeight: '1.4', fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif', color: '#000' }}>
          "Imagine you have <span style={{ background: '#facc15', padding: '2px 8px', border: '2px solid #000' }}>unlimited wishes</span>...
          but only <span style={{ background: '#ef4444', color: '#fff', padding: '2px 8px', border: '2px solid #000' }}>1 genie lamp!</span>"
        </p>
        <p style={{ marginTop: '15px', fontStyle: 'italic', color: '#555' }}>
          That is Economics. We want everything, but we can't have it all.
        </p>
      </div>

      <div className="lesson-grid-3">
        {/* PANEL 2: WANTS */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #2563eb' }}>
          <div style={comicTitleStyle}>PANEL 1</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', color: '#2563eb', marginBottom: '10px' }}>
            Unlimited Wants
          </h3>
          <p style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '1.1rem', color: '#000' }}>
            Human desires never stop! <br />
            New Phone? → Need Case. <br />
            Got Case? → Need Apps. <br />
            <strong>It's a viral loop!</strong>
          </p>
        </div>

        {/* PANEL 3: RESOURCES */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #ef4444' }}>
          <div style={{ ...comicTitleStyle, background: '#ef4444', boxShadow: '4px 4px 0px #000' }}>PANEL 2</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', color: '#ef4444', marginBottom: '10px' }}>
            Scarce Resources
          </h3>
          <p style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '1.1rem', color: '#000' }}>
            We only have so much stuff! <br />
            Running out of land? <br />
            Not enough workers? <br />
            <strong>Supply is LIMITED.</strong>
          </p>
        </div>

        {/* PANEL 4: CHOICES */}
        <div className="lesson-card" style={{ border: '4px solid #000', boxShadow: '8px 8px 0px #facc15' }}>
          <div style={{ ...comicTitleStyle, background: '#facc15', color: '#000', boxShadow: '4px 4px 0px #000' }}>PANEL 3</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '900', textTransform: 'uppercase', color: '#d97706', marginBottom: '10px' }}>
            Alternative Uses
          </h3>
          <p style={{ fontFamily: '"Comic Sans MS", cursive', fontSize: '1.1rem', color: '#000' }}>
            You gotta choose! <br />
            Wood for a chair? <br />
            OR Wood for a fire? <br />
            <strong>Can't be both!</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
