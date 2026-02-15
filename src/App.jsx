// Main App Component - ArthShastra
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Components
import Navbar from './components/common/Navbar';

// Pages
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import About from './pages/About';
import Journey from './pages/Journey';
import Progress from './pages/Progress';
import Lesson1 from './pages/Lessons/Lesson1';
import Lesson2 from './pages/Lessons/Lesson2';
import Lesson3 from './pages/Lessons/Lesson3/Lesson3';
import Lesson4 from './pages/Lessons/Lesson4';
import Lesson5 from './pages/Lessons/Lesson5';
import Lesson6 from './pages/Lessons/Lesson6';
import Lesson7 from './pages/Lessons/Lesson7';
import Lesson8 from './pages/Lessons/Lesson8';
import Lesson9 from './pages/Lessons/Lesson9/Lesson9';
import Lesson10 from './pages/Lessons/Lesson10/Lesson10';
import Lesson11 from './pages/Lessons/Lesson11/Lesson11';
import Lesson12 from './pages/Lessons/Lesson12/Lesson12';
import Lesson13 from './pages/Lessons/Lesson13/Lesson13';

// Statistics Lessons
import StatsLesson1 from './pages/StatsLessons/Lesson1/Lesson1';
import StatsLesson2 from './pages/StatsLessons/Lesson2/Lesson2';
import StatsLesson3 from './pages/StatsLessons/Lesson3/Lesson3';
import StatsLesson4 from './pages/StatsLessons/Lesson4/Lesson4';
import StatsLesson5 from './pages/StatsLessons/Lesson5/Lesson5';
import StatsLesson6 from './pages/StatsLessons/Lesson6/Lesson6';
import StatsLesson7 from './pages/StatsLessons/Lesson7/Lesson7';
import StatsLesson8 from './pages/StatsLessons/Lesson8/Lesson8';
import StatsLesson9 from './pages/StatsLessons/Lesson9/Lesson9';
import StatsLesson10 from './pages/StatsLessons/Lesson10/Lesson10';
import StatsLesson11 from './pages/StatsLessons/Lesson11/Lesson11';
import StatsLesson12 from './pages/StatsLessons/Lesson12/Lesson12';
import StatsLesson13 from './pages/StatsLessons/Lesson13/Lesson13';
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
              <Route path="/journey" element={<Journey />} />
              <Route path="/progress" element={<Progress />} />

              {/* Microeconomics Class 11 Lessons */}
              <Route path="/lesson/micro11-1" element={<Lesson1 />} />
              <Route path="/lesson/micro11-2" element={<Lesson2 />} />
              <Route path="/lesson/micro11-3" element={<Lesson3 />} />
              <Route path="/lesson/micro11-4" element={<Lesson4 />} />
              <Route path="/lesson/micro11-5" element={<Lesson5 />} />
              <Route path="/lesson/micro11-6" element={<Lesson6 />} />
              <Route path="/lesson/micro11-7" element={<Lesson7 />} />
              <Route path="/lesson/micro11-8" element={<Lesson8 />} />
              <Route path="/lesson/micro11-9" element={<Lesson9 />} />
              <Route path="/lesson/micro11-10" element={<Lesson10 />} />
              <Route path="/lesson/micro11-11" element={<Lesson11 />} />
              <Route path="/lesson/micro11-12" element={<Lesson12 />} />
              <Route path="/lesson/micro11-13" element={<Lesson13 />} />

              {/* Statistics Class 11 Lessons */}
              <Route path="/lesson/stats-1" element={<StatsLesson1 />} />
              <Route path="/lesson/stats-2" element={<StatsLesson2 />} />
              <Route path="/lesson/stats-3" element={<StatsLesson3 />} />
              <Route path="/lesson/stats-4" element={<StatsLesson4 />} />
              <Route path="/lesson/stats-5" element={<StatsLesson5 />} />
              <Route path="/lesson/stats-6" element={<StatsLesson6 />} />
              <Route path="/lesson/stats-7" element={<StatsLesson7 />} />
              <Route path="/lesson/stats-8" element={<StatsLesson8 />} />
              <Route path="/lesson/stats-9" element={<StatsLesson9 />} />
              <Route path="/lesson/stats-10" element={<StatsLesson10 />} />
              <Route path="/lesson/stats-11" element={<StatsLesson11 />} />
              <Route path="/lesson/stats-12" element={<StatsLesson12 />} />
              <Route path="/lesson/stats-13" element={<StatsLesson13 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
