import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '/app/services/api.ts';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      api.get(`/posts/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.error('Error fetching post details:', error));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl mb-3">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
