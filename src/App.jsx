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
import Lesson3 from './pages/Lessons/Lesson3/Lesson3';
import Lesson4 from './pages/Lessons/Lesson4';
import Lesson5 from './pages/Lessons/Lesson5';
import Lesson6 from './pages/Lessons/Lesson6';
import Lesson7 from './pages/Lessons/Lesson7';
import Lesson8 from './pages/Lessons/Lesson8'; // Direct import to bypass index.js error
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
              <Route path="/lesson/micro11-3" element={<Lesson3 />} />
              <Route path="/lesson/micro11-4" element={<Lesson4 />} />
              <Route path="/lesson/micro11-5" element={<Lesson5 />} />
              <Route path="/lesson/micro11-6" element={<Lesson6 />} />
              <Route path="/lesson/micro11-7" element={<Lesson7 />} />
              <Route path="/lesson/micro11-8" element={<Lesson8 />} />
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
