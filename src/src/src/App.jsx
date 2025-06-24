import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Posts from './pages/Posts';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;