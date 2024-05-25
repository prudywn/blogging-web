import "./Sidebar.css";
import { useDarkMode } from "../DarkModeContext";

export default function Sidebar() {
  const { isDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';

  return (
    <div className={`sidebar ${modeClass}`}>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img 
          className="sidebarImg"
          src="https://images.pexels.com/photos/6850746/pexels-photo-6850746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum ullam cupiditate beataenmmahdhj jbjbcjhd nj sbhj gsg</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Techy</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  );
}
