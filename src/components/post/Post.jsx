import "./Post.css";
import { useDarkMode } from "../DarkModeContext";

export default function Post() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';

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
