import "./Post.css";
import { useDarkMode } from "../DarkModeContext";
import React, {useEffect, useState} from "react"
import axios from 'axios'

export default function Post() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';

  // useEffect(() => {
  //   axios.get({'url': 'https://rapidapi.com/sharemap-sharemap-default/api/travel-places'})
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }, [])
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '44064749-a1cdae01a16067c7f42c496ed',
            q: 'travel+scenery',
            image_type: 'photo',
          },

        })
         setImages(response.data.hits)
      } catch(error){
      console.log(error)
    }
    }
    fetchImages()
    }, [])

  return (
    <div className={`post ${modeClass}`}>
      <div className="image-gallery" >
        {images.map((image, index) => (
          <img className="images" key={index} src={image.webformatURL} alt={image.tags} />
          ))}
      </div>
    </div>
  );
}
