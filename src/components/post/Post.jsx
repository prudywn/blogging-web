
import "./Post.css"
import React, {useEffect, useState} from "react"
import axios from 'axios'

export default function Post() {
  const [images, setImages] = useState([])
  useEffect(() => {
    const fetchImages = async () => {
      try{
        const response = await axios.get('https://pixabay.com/api/', {
          params: {
            key: '44064749-a1cdae01a16067c7f42c496ed',
            q: 'travel+scenery',
            image_type: 'photo',
            
          },
        })
        setImages(response.data.hits)
      }catch(error){
        console.log(error)
      }
    }
    fetchImages()
  }, [])
  
   return (
   <div className='post'>
       <div className="image-gallery">
         {images.map((image) => (
          <div key={image.id}>
            <img className="images" src={image.webformatURL} alt={image.tags} />
            <span className="tags">{image.tags}</span>
            <span className="tags">{image.views}</span>
            <span className="tags">{image.likes}
            <button className="btn" ></button>
            </span>
            </div>

         ))}
       </div>
      
       {/* <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur </span>
        <hr/>
        <span className="postDate">1 hour Ago</span>
        <p className="postDesc">
           
        </p>
        <hr/> */}
       
    </div>
   
  )
}
