import { Link } from "react-router-dom";
import "./Topbar.css";
import { useDarkMode } from "../DarkModeContext";

export default function Topbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const modeClass = isDarkMode ? 'dark' : '';
  const user = true
  return (
    <div className={`top ${modeClass}`}>
      <div className="mode" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        <i className={`modeIcon fa-solid ${isDarkMode ? 'fa-toggle-off' : 'fa-toggle-on'}`}></i>
      </div>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-tiktok"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
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
          <li className="topListItem">
            {user && 'LOGOUT'}
          </li>
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
    </div>
  );
}
