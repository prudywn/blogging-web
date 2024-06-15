import React, { useEffect, useState } from 'react';
import './Post.css';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Post() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className={`post ${modeClass}`}>
      <div className="image-gallery">
        {posts.map((post) => (
          <div key={post.id}>
            <img className="images" src={post.image} alt={post.title} />
            <span className="tag">{post.title}</span>
            <p className="tag">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
