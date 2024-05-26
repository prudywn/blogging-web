import React, {useEffect, useState} from "react"
import axios from 'axios'
import { useDarkMode } from "../../components/DarkModeContext";
import './explore.css'
import { Link } from "react-router-dom";

function About() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const [images, setImages] = useState([])
  
  const [records, setRecords] = useState([])

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

        })
         setImages(response.data.hits)
         setRecords(response.data.hits)
      } catch(error){
      console.log(error)
    }
    }
    fetchImages()
    }, [])

  const [isFavorite, setIsFavorite] = useState(false) 
  
  function toggleLike(){
    setIsFavorite(!isFavorite)
  }


const getInputData = (event) => {
  setImages(records.filter(r => r.tags.toLowerCase().includes(event.target.value.toLowerCase())))
}

  return (
    <div>
      <span>
        <h1>Explore</h1>
        <input type="text" className="searchArea search" placeholder="Search..." onChange={getInputData}/>
        </span>
        <div className={`post ${modeClass}`}>
          
       <Link className="link" to={`/read/${images.id}`}>
            <div className="image-gallery">
            {images.map((image =>
                <div key={image.id} className="images">
                  <img src={image.webformatURL} alt={image.tags} /> 
                  <p>{image.tags}</p>
           
                  <button className="btn" onClick={toggleLike}>{isFavorite ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
                  <input type="text" placeholder="Comment..." style={{marginLeft:'10px', border:'none',outline:'none'}}/>
                  </div>
               ))}
           </div> 
        </Link> 
         </div>
       
    </div>
  )

}

export default About