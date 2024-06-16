import React from 'react';

const PostCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md p-5 mb-6">
    <h2 className="font-bold text-xl mb-2">{post.title}</h2>
    <p className="text-gray-700 text-base">{post.body}</p>
  </div>
);

export default PostCard;
