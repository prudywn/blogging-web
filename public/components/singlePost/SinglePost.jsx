import axios from "axios"
import "./SinglePost.css"
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"

export default function SinglePost({id, images}) {
  // const { id } = useParams()
  // const [post, setPost] = useState([])
  
  const [imageArray, setImageArray] = useState([])
  
  useEffect(() => {
    const fetchPost = async () => {
      try{
        const res = await axios.get(`https://pixabay.com/api/?key: '44064749-a1cdae01a16067c7f42c496ed'&id=${id}`)
      
      setImageArray(res.data.hits) 
    }catch (err) {
      console.log(err)
    }
  }
  fetchPost()
    }, [id])

    return (
      <div className="singlePost">
        <h2>The Linked Paged</h2>
        <div className="singlePostWrapper">
          {imageArray.map((image) => (
            image && image.largeImageURL && image.tags ? 
           <img src={image.largeImageURL} alt={image.tags} key={image.id}/>
           : null
           ))}
        </div>
        
      </div>
    )
    
}
