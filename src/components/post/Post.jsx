import "./Post.css";
import { useDarkMode } from "../DarkModeContext";
// import React, {useEffect} from "react"
// import axios from 'axios'

export default function Post() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';

  // useEffect(() => {
  //   axios.get({'url': 'https://rapidapi.com/sharemap-sharemap-default/api/travel-places'})
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err))
  // }, [])

  return (
    <div className={`post ${modeClass}`}>
      <img 
        className="postImg"
        src="https://images.pexels.com/photos/62389/pexels-photo-62389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur</span>
        <hr />
        <span className="postDate">1 hour Ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga tenetur quos facilis voluptates possimus sint! Explicabo repellat nulla voluptas provident molestiae! Molestias earum dolores sit, magnam nulla corrupti neque non!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga tenetur quos facilis voluptates possimus sint! Explicabo repellat nulla voluptas provident molestiae! Molestias earum dolores sit, magnam nulla corrupti neque non!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga tenetur quos facilis voluptates possimus sint! Explicabo repellat nulla voluptas provident molestiae! Molestias earum dolores sit, magnam nulla corrupti neque non!
        </p>
        <hr />
      </div>
    </div>
  );
}
