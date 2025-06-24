import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Card className="max-w-2xl mx-auto">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-bold dark:text-white">Welcome to Task Manager</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your tasks and explore posts from JSONPlaceholder API
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button>View Tasks</Button>
          </Link>
          <Link to="/posts">
            <Button variant="secondary">View Posts</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Home;