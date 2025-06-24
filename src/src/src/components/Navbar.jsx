import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="text-xl font-bold dark:text-white">
            Task Manager
          </Link>
          <Link 
            to="/tasks" 
            className="px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Tasks
          </Link>
          <Link 
            to="/posts" 
            className="px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Posts
          </Link>
        </div>
        <Button onClick={toggleTheme} variant="secondary">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;