import { Link } from "react-router-dom";
import "./Topbar.css";
import { useDarkMode } from "../DarkModeContext";
import { useState } from "react";

export default function Topbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const user = false;
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={`top ${modeClass}`}>
      <div className="mode" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        <i className={`modeIcon fa-solid ${isDarkMode ? 'fa-toggle-off' : 'fa-toggle-on'}`}></i>
      </div>
      <div className="topLeft">
        <Link className="link" to="/settings"><i className="topIcon fa fa-cog"></i></Link>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-tiktok"></i>
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
              <Link className="link" to="/contact">CONTACT</Link>
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
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="hamDisplay">
        <div className="hamburger" onClick={toggleNavVisibility}>
          <i className="hamburgerIcon fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
}
