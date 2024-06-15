import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDarkMode } from "../../components/DarkModeContext";
import './explore.css';

function About() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const [images, setImages] = useState([]);
  const [records, setRecords] = useState([]);
  const [likedImages, setLikedImages] = useState([]);
  const [comments, setComments] = useState({});
  const [favoriteImages, setFavoriteImages] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedLikedImages = localStorage.getItem('likedImages');
    const storedFavoriteImages = localStorage.getItem('favoriteImages');

    if (storedLikedImages) {
      setLikedImages(JSON.parse(storedLikedImages));
    }

    if (storedFavoriteImages) {
      setFavoriteImages(JSON.parse(storedFavoriteImages));
    }
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '44064749-a1cdae01a16067c7f42c496ed',
            q: 'travel+landscape',
            image_type: 'photo',
            per_page: 50
          },
        });
        setImages(response.data.hits);
        setRecords(response.data.hits);
      } catch (error) {
        console.log(error);
      }
    }
    fetchImages();
  }, []);

  const toggleLike = (imageId) => {
    const updatedLikedImages = likedImages.includes(imageId)
      ? likedImages.filter(id => id !== imageId)
      : [...likedImages, imageId];

    setLikedImages(updatedLikedImages);
    localStorage.setItem('likedImages', JSON.stringify(updatedLikedImages));
  }

  const toggleFavorite = (imageId) => {
    const updatedFavoriteImages = favoriteImages.includes(imageId)
      ? favoriteImages.filter(id => id !== imageId)
      : [...favoriteImages, imageId];

    setFavoriteImages(updatedFavoriteImages);
    localStorage.setItem('favoriteImages', JSON.stringify(updatedFavoriteImages));
  }

  const getInputData = (event) => {
    setImages(records.filter(r => r.tags.toLowerCase().includes(event.target.value.toLowerCase())));
  }

  return (
    <div>
      <span>
        <h1>Explore</h1>
        <input type="text" className="searchArea search" placeholder="Search..." onChange={getInputData} />
      </span>
      <div className={`post ${modeClass}`}>
        <div className="image-gallery">
          {images.map((image) => (
            <div key={image.id} className="images">
              <img src={image.webformatURL} alt={image.tags} />
              <p>{image.tags}</p>
              <button className="btn" onClick={() => toggleLike(image.id)}>
                {likedImages.includes(image.id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
              </button>
              <input
                type="text"
                placeholder="Comment..."
                value={comments[image.id] || ''}
                onChange={(event) => setComments({ ...comments, [image.id]: event.target.value })}
                style={{ marginLeft: '10px', border: 'none', outline: 'none' }}
              />
              <button className="btn" onClick={() => toggleFavorite(image.id)}>
                {favoriteImages.includes(image.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;
