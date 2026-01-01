// Main App Component - ArthShastra
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import Navbar from './components/common/Navbar';

// Pages
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import About from './pages/About';
import Lesson1 from './pages/Lessons/Lesson1';
import Lesson2 from './pages/Lessons/Lesson2';

// Styles
import './styles/variables.css';
import './App.css';

// Base path for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <AuthProvider>
      <Router basename={basename}>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/about" element={<About />} />

              {/* Microeconomics Class 11 Lessons */}
              <Route path="/lesson/micro11-1" element={<Lesson1 />} />
              <Route path="/lesson/micro11-2" element={<Lesson2 />} />

              {/* TODO: Add more lesson routes */}
              {/* <Route path="/quiz" element={<Quiz />} /> */}
              {/* <Route path="/progress" element={<Progress />} /> */}
              {/* <Route path="/profile" element={<Profile />} /> */}
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
