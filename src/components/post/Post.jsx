import React, { useEffect, useState } from 'react';
import './Post.css';
import { useDarkMode } from '../DarkModeContext';
import SingleBlog from "../singleblog/Singleblog"; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import axios from 'axios'; // Make sure axios is imported

export default function Post() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('travel+landscape');
  const navigate = useNavigate(); // Get navigate function for navigation

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '44064749-a1cdae01a16067c7f42c496ed',
            q: query,
            image_type: 'photo',
          },
        });
        setImages(response.data.hits);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages();
  }, [query]);

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
    navigate('/singleblog');
  };

  return (
    <div className={`post ${modeClass}`}>
      <div className="search-container">
        <input
          type='text'
          placeholder='Search...'
          value={query.replace('+', '')}
          onChange={e => setQuery(e.target.value.replace(' ', '+'))}
          className='search-input'
        />
      </div>
      <div className="image-gallery" onClick={handlePostClick}>
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
        {images.map((image) => (
          <div key={image.id} className="images">
            <img src={image.webformatURL} alt={image.tags} />
            <p>{image.tags}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
