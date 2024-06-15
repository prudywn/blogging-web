import { Link } from "react-router-dom";
import "./Topbar.css";
import { useDarkMode } from "../contexts/DarkModeContext";
import { useState } from "react";
import { useUser } from "../contexts/UserContext";

export default function Topbar() {
  
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const user = false;
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const { userData } = useUser()

  return (
    <div className={`top ${modeClass}`}>
      <div className="mode" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        <i className={`modeIcon fa-solid ${isDarkMode ? 'fa-toggle-off' : 'fa-toggle-on'}`}></i>
      </div>
      <div className="topLeft">
        <Link className="link" to="/settings"><i className="topIcon fa fa-cog"></i></Link>
        <a href="https://twitter.com/i/flow/signup?lang=en" target='_blank'><i className="topIcon fa-brands fa-square-twitter"></i></a>
        <a href="https://web.facebook.com/?_rdc=1&_rdr" target='_blank'> <i className="topIcon fab fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/" target='_blank'><i className="topIcon fa-brands fa-square-instagram"></i></a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"><i className="topIcon fa-brands fa-tiktok"></i></a>
        
      </div>
      <div className={`topCenter ${isNavVisible ? 'show-nav' : ''}`}>
        <ul className="topList">
          <div className="topListItemOne">
            <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">EXPLORE</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/notifications">NOTIFICATIONS</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link>
            </li>
          </div>
          <li className="topListItem topListItemLog">
            {user && 'LOGOUT'}
          </li>
          <div className="out">
            <li className="topListItem">
              <Link className="link" to="/" onClick={toggleNavVisibility}>HOME</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">ABOUT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/contact">CONTACT</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">WRITE</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img 
            className="topImg"
            src="https://images.pexels.com/photos/6850746/pexels-photo-6850746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">REGISTER</Link>
            </li>
          </ul>
        )}
        <img src={userData.profilePic} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
      <span>{userData.username}</span>
      <span>{userData.email}</span>
      </div>
      <div className="hamDisplay">
        <div className="hamburger" onClick={toggleNavVisibility}>
          <i className="hamburgerIcon fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
}
