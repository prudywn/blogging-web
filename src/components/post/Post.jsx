import React, { useEffect, useState } from 'react';
import './Post.css';
import { useDarkMode } from '../DarkModeContext';
import SingleBlog from "../singleblog/Singleblog"; 
import { Navigate, useNavigate } from 'react-router-dom'; // Import useHistory hook for navigation

export default function Post() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const [posts, setPosts] = useState([]);
  const history = useNavigate(); // Get history object for navigation

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Function to toggle between liked and not liked
  const handleLikeToggle = (postId) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return { ...post, liked: !post.liked };
      }
      return post;
    }));
  };

  // Function to navigate to Single Blog page
  const handlePostClick = () => {
    // Navigate to Single Blog page
    Navigate('/singleblog');
  };

  return (
    <div className={`post ${modeClass}`} onClick={handlePostClick}>
      <div className="image-gallery">
        {posts.map((post) => (
          <div key={post.id}>
            <img className="images" src={post.image} alt={post.title} />
            <span className="tag">{post.title}</span>
            <p className="tag">{post.content}</p>
            {post.liked ? (
              <img
                className='liked'
                src='src\components\post\heart (1).png'
                alt='Liked'
                onClick={() => handleLikeToggle(post.id)}
              />
            ) : (
              <img
                className='notliked'
                src='src\components\post\heart.png'
                alt='Not Liked'
                onClick={() => handleLikeToggle(post.id)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
