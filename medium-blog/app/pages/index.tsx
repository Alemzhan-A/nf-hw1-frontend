// app/pages/index.tsx
import React, { useEffect, useState } from 'react';
import api from 'app/services/api.ts';
import PostCard from 'app/components/PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
