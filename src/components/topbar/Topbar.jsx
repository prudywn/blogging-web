
import  "./Topbar.css"

export default function Topbar() {
  return (
    <div className="top">
       <div className="topLeft">
       <i className="topIcon fab fa-facebook-square"></i>
       <i className="topIcon  fa-brands fa-square-twitter"></i>
       <i className="topIcon  fa-brands fa-square-instagram"></i>
       <i className="topIcon  fa-brands fa-tiktok"></i>
       </div>

       <div className="topCenter">
        <ul className="topList">
         <li className="topListItem">HOME</li>
         <li className="topListItem">ABOUT</li>
         <li className="topListItem">CONTACT</li>
         <li className="topListItem">WRITE</li>
         <li className="topListItem">LOGOUT</li>
        </ul>
       </div>

       <div className="topRight">
        <img 
        className="topImg"
        src="https://images.pexels.com/photos/20234108/pexels-photo-20234108/free-photo-of-man-taking-a-picture-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
