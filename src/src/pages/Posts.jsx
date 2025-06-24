import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Button from '../components/Button';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        setPosts(prev => [...prev, ...response.data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />

        {error ? (
          <div className="text-red-500">{error}</div>
        ) : loading && page === 1 ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <ul className="space-y-4">
              {filteredPosts.map(post => (
                <li 
                  key={post.id} 
                  className="p-4 border rounded-md dark:border-gray-600"
                >
                  <h3 className="font-bold text-lg dark:text-white">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
                </li>
              ))}
            </ul>

            {!loading && (
              <Button 
                onClick={() => setPage(p => p + 1)}
                className="w-full"
              >
                Load More
              </Button>
            )}
          </>
        )}
      </div>
    </Card>
  );
};

export default Posts;